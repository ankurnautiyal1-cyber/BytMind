import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { WATER_LEVEL, WORLD_HALF } from './terrain.js';
import { mulberry32 } from './noise.js';
import { makeFlame, Smoke, glowSprite } from './effects.js';
import { CollisionWorld } from './colliders.js';

// Landmarks: seeded sites across the world, composed from the Blender-built
// glb assets (see tools/build_assets.py) plus procedural props. Walking within
// `discoverR` of a site reveals it (toast + journal + map marker).

const ASSETS = [
  'ruin_tower', 'lighthouse', 'windmill_body', 'windmill_blades',
  'stone_arch', 'shipwreck', 'tent', 'campfire', 'monolith', 'shrine_pedestal',
];

const TYPES = {
  lighthouse: {
    count: 2, discoverR: 70, color: 0xffd25e,
    // Headland site: high ground that overlooks water, so the lamp sits well
    // above the sea and the night beam sweeps the whole coastline.
    place: (t, x, z) => {
      const h = t.heightAt(x, z);
      if (h < 16 || h > 64 || t.slopeAt(x, z) > 0.42) return false;
      for (let a = 0; a < 8; a++) {
        const ang = (a / 8) * Math.PI * 2;
        if (t.heightAt(x + Math.cos(ang) * 90, z + Math.sin(ang) * 90) < WATER_LEVEL) return true;
        if (t.heightAt(x + Math.cos(ang) * 140, z + Math.sin(ang) * 140) < WATER_LEVEL) return true;
      }
      return false;
    },
    names: [['Gull Point', 'Beacon Bay', 'Fogwatch', 'Saltwick', 'Lantern Shore'], ['Lighthouse']],
    flavor: ['Its lamp has turned for longer than anyone remembers.',
      'Sailors say the keeper left one night and never came back.'],
  },
  shipwreck: {
    count: 2, discoverR: 60, color: 0xc98d5a,
    place: (t, x, z) => { const h = t.heightAt(x, z); return h > 0.1 && h < 1.8 && t.slopeAt(x, z) < 0.45; },
    names: [['The Marlin', 'The Merrow', 'Lady Vera', 'The Tidesong', 'The Halcyon'], ['Shipwreck']],
    flavor: ['The tide buried her bones, then dug them up again.',
      'Her bell still rings somewhere under the sand.'],
  },
  windmill: {
    count: 2, discoverR: 65, color: 0xe8ddc2,
    place: (t, x, z) => { const h = t.heightAt(x, z); return h > 12 && h < 42 && t.slopeAt(x, z) < 0.3 && t.forestMask(x, z) < 0.05; },
    names: [['Millers\'', 'Old', 'Highfield', 'Westmeadow', 'Stonehill'], ['Windmill']],
    flavor: ['The sails still turn, though the miller is long gone.',
      'On windy nights the old stones hum a low note.'],
  },
  ruinTower: {
    count: 2, discoverR: 65, color: 0x9d968a,
    place: (t, x, z) => { const h = t.heightAt(x, z); return h > 8 && h < 58 && t.slopeAt(x, z) < 0.45; },
    names: [['Broken', 'Hollow', 'Elder', 'Greyspire', 'Forgotten'], ['Watchtower', 'Keep', 'Tower']],
    flavor: ['Someone lit torches here. Someone still does.',
      'The stairs ended half-way up, centuries ago.'],
  },
  stoneCircle: {
    count: 2, discoverR: 60, color: 0x8fd8c3,
    place: (t, x, z) => { const h = t.heightAt(x, z); return h > 4 && h < 30 && t.slopeAt(x, z) < 0.22 && t.forestMask(x, z) < 0.12; },
    names: [['Whispering', 'Standing', 'Elderfire', 'Moonfall', 'Singers\''], ['Stones', 'Circle', 'Ring']],
    flavor: ['The stones hum faintly when the moon is high.',
      'Nine stones, eight keepers — the ninth walked away.'],
  },
  shrine: {
    count: 2, discoverR: 55, color: 0x9fd0ff,
    place: (t, x, z) => { const h = t.heightAt(x, z); return h > 6 && h < 42 && t.slopeAt(x, z) < 0.32 && t.forestMask(x, z) > 0.1; },
    names: [['Stillwater', 'Greenhollow', 'Firstlight', 'Deepwood', 'Quiet Pool'], ['Shrine']],
    flavor: ['Something bright hovers above the pedestal, patient.',
      'Leave an offering, or don\'t — it doesn\'t seem to mind.'],
  },
  arch: {
    count: 2, discoverR: 75, color: 0xb4a68d,
    place: (t, x, z) => { const h = t.heightAt(x, z); return h > 42 && t.slopeAt(x, z) < 0.55; },
    names: [['Windgate', 'Eagle', 'Giants\'', 'Skyhole', 'Highpass'], ['Arch', 'Gate', 'Span']],
    flavor: ['The wind sings a single note as it pours through.',
      'From beneath it, the whole valley lies open like a map.'],
  },
  camp: {
    count: 2, discoverR: 55, color: 0xe0995e,
    place: (t, x, z) => { const h = t.heightAt(x, z); return h > 5 && h < 24 && t.slopeAt(x, z) < 0.2 && t.forestMask(x, z) < 0.08; },
    names: [['Foxglove', 'Two Rivers', 'Herder\'s', 'Pine Edge', 'Starfall'], ['Camp', 'Campsite', 'Rest']],
    flavor: ['The fire is banked, but recent. Someone circles back.',
      'A kettle, three cups, and no owners in sight.'],
  },
};

async function loadTemplates() {
  const loader = new GLTFLoader();
  const entries = await Promise.all(ASSETS.map(
    (name) => loader.loadAsync(`assets/${name}.glb`)
      .then((g) => [name, g.scene])
      .catch(() => {
        console.warn(`[pois] asset missing: ${name}.glb (run tools/build_assets.py)`);
        return [name, null];
      }),
  ));
  return Object.fromEntries(entries);
}

export class POIs {
  constructor(terrain, scene, seed, templates, env) {
    this.terrain = terrain;
    this.scene = scene;
    this.env = env; // { wind, smoke }
    this.sites = [];
    this.onDiscover = null;

    const rand = mulberry32((seed ^ 0x5a17c0de) >>> 0);
    const edge = WORLD_HALF * 0.86;

    // ---- seeded site placement: type constraints + min spacing ----
    for (const [type, def] of Object.entries(TYPES)) {
      let placed = 0;
      for (let tries = 0; tries < 22000 && placed < def.count; tries++) {
        const x = (rand() * 2 - 1) * edge;
        const z = (rand() * 2 - 1) * edge;
        if (!def.place(terrain, x, z)) continue;
        if (this.sites.some((s) => Math.hypot(s.x - x, s.z - z) < 340)) continue;
        const [pre, post] = def.names;
        this.sites.push({
          id: `${type}-${placed}`,
          type, x, z,
          y: terrain.heightAt(x, z),
          name: `${pre[Math.floor(rand() * pre.length)]} ${post[Math.floor(rand() * post.length)]}`,
          flavor: def.flavor[Math.floor(rand() * def.flavor.length)],
          color: def.color,
          discoverR: def.discoverR,
          discovered: false,
          rand,
        });
        placed++;
      }
    }

    // ---- build each site's meshes ----
    const clone = (name) => {
      const t = templates[name];
      if (!t) return null;
      const m = t.clone(true);
      m.traverse((o) => {
        if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; }
      });
      return m;
    };

    this.smoke = new Smoke(scene);
    this.flames = [];   // { mesh, light }
    this.spinners = []; // { obj, axis, speed }
    this.beams = [];    // { group, coneMat, halo? }
    this.crystals = []; // { mesh, halo, light, baseY, phase }
    this.banners = [];  // { mesh, base, phase }
    this.colliders = new CollisionWorld();
    this._v = new THREE.Vector3();

    for (const s of this.sites) {
      const g = new THREE.Group();
      g.position.set(s.x, s.y - 0.15, s.z);
      s.group = g;
      scene.add(g);
      const r = s.rand;
      this[`_build_${s.type}`]?.(s, g, clone, r);
    }
  }

  // collider helpers — site groups sit at (s.x, s.y - 0.15, s.z) with no
  // rotation, so local x/z offsets translate straight to world space
  _cyl(s, lx, lz, r, h) {
    this.colliders.addCylinder(s.x + lx, s.z + lz, r, s.y - 0.15, s.y - 0.15 + h);
  }

  _box(s, lx, lz, hw, hd, h, rotY = 0, y0 = 0) {
    this.colliders.addBox(s.x + lx, s.z + lz, hw, hd, s.y - 0.15 + y0, s.y - 0.15 + y0 + h, rotY);
  }

  // ---- per-type composition --------------------------------------------

  _build_lighthouse(s, g, clone, r) {
    const body = clone('lighthouse');
    if (body) { body.rotation.y = r() * Math.PI * 2; g.add(body); }
    this._cyl(s, 0, 0, 3.0, 14);
    // rotating night beam: additive cone from the lamp room
    const beam = new THREE.Group();
    beam.position.y = 12.35;
    const coneGeo = new THREE.ConeGeometry(20, 240, 12, 1, true);
    coneGeo.rotateX(Math.PI / 2); // axis along +z
    coneGeo.translate(0, 0, -120);
    const coneMat = new THREE.MeshBasicMaterial({
      color: 0xffe9a8, transparent: true, opacity: 0,
      blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide, fog: false,
    });
    beam.add(new THREE.Mesh(coneGeo, coneMat));
    const halo = glowSprite(0xffe9a8, 6);
    halo.position.y = 12.35 - 0; // relative to group root, not beam
    g.add(halo);
    g.add(beam);
    this.beams.push({ group: beam, coneMat, halo });
  }

  _build_shipwreck(s, g, clone, r) {
    const hull = clone('shipwreck');
    const hullRy = r() * Math.PI * 2;
    if (hull) {
      hull.rotation.set(0.12, hullRy, 0.2);
      hull.position.y -= 0.5;
      g.add(hull);
    }
    // hull: 9 m keel × 3.4 m beam, half-buried
    this._box(s, 0, 0, 4.5, 1.7, 2.0, hullRy);
    // scattered planks + a barrel
    const wood = new THREE.MeshStandardMaterial({ color: 0x5c4a33, roughness: 1 });
    const plankGeo = new THREE.BoxGeometry(2.2, 0.12, 0.4);
    for (let i = 0; i < 5; i++) {
      const p = new THREE.Mesh(plankGeo, wood);
      const a = r() * Math.PI * 2, d = 4 + r() * 6;
      p.position.set(Math.cos(a) * d, -0.05 + r() * 0.15, Math.sin(a) * d);
      p.rotation.set(r() * 0.4, r() * Math.PI * 2, r() * 0.5);
      p.castShadow = true;
      g.add(p);
    }
    const barrel = new THREE.Mesh(
      new THREE.CylinderGeometry(0.5, 0.44, 1.0, 9),
      new THREE.MeshStandardMaterial({ color: 0x6b4a33, roughness: 1 }),
    );
    const ba = r() * Math.PI * 2;
    barrel.position.set(Math.cos(ba) * 5, 0.4, Math.sin(ba) * 5);
    barrel.rotation.z = 0.35;
    barrel.castShadow = true;
    g.add(barrel);
  }

  _build_windmill(s, g, clone, r) {
    // mill group rotates body + blades together so the wheel always sits on
    // the cap front; the blades spin around their own hub axis (local x).
    const mill = new THREE.Group();
    const millRy = r() * Math.PI * 2;
    mill.rotation.y = millRy;
    g.add(mill);
    this._cyl(s, 0, 0, 3.0, 11);
    const body = clone('windmill_body');
    if (body) mill.add(body);
    const blades = clone('windmill_blades');
    if (blades) {
      const pivot = new THREE.Group();
      pivot.position.set(0, 9.6, -2.15); // just outside the cap surface
      pivot.add(blades);                 // wheel axis is the glb's local z
      mill.add(pivot);
      this.spinners.push({ obj: blades, axis: 'z', speed: 0.55 + r() * 0.2, dir: r() > 0.5 ? 1 : -1 });
    }
  }

  _build_ruinTower(s, g, clone, r) {
    const tower = clone('ruin_tower');
    if (tower) { tower.rotation.y = r() * Math.PI * 2; g.add(tower); }
    this._cyl(s, 0, 0, 3.05, 9);
    // torch posts at the doorway
    const wood = new THREE.MeshStandardMaterial({ color: 0x4a3826, roughness: 1 });
    for (const side of [-1, 1]) {
      const post = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.09, 2.2, 6), wood);
      post.position.set(side * 2.2, 0.95, 3.6);
      post.castShadow = true;
      g.add(post);
      this.addFlame(g, side * 2.2, 2.15, 3.6, 0.7);
    }
  }

  _build_stoneCircle(s, g, clone, r) {
    const n = 9, R = 6.5;
    for (let i = 0; i < n; i++) {
      const a = (i / n) * Math.PI * 2 + r() * 0.12;
      const m = clone('monolith');
      if (!m) break;
      const ry = r() * Math.PI * 2;
      const sc = 0.85 + r() * 0.3;
      m.position.set(Math.cos(a) * R, 0, Math.sin(a) * R);
      m.rotation.set((r() - 0.5) * 0.12, ry, (r() - 0.5) * 0.12);
      m.scale.setScalar(sc);
      g.add(m);
      // monolith slab: 1.5 × 0.85 footprint, 3.6 tall at unit scale
      this._box(s, Math.cos(a) * R, Math.sin(a) * R, 0.78 * sc, 0.46 * sc, 3.6 * sc, ry);
    }
    // glowing ring on the ground, visible at night
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(R, 0.07, 6, 40),
      new THREE.MeshBasicMaterial({
        color: 0x7fe3c8, transparent: true, opacity: 0,
        blending: THREE.AdditiveBlending, depthWrite: false,
      }),
    );
    ring.rotation.x = Math.PI / 2;
    ring.position.y = 0.12;
    g.add(ring);
    this.beams.push({ group: null, coneMat: ring.material, halo: null, isRing: true });
    // central cairn
    const stone = new THREE.MeshStandardMaterial({ color: 0x847d6f, roughness: 1, flatShading: true });
    for (let i = 0; i < 3; i++) {
      const c = new THREE.Mesh(new THREE.IcosahedronGeometry(0.42 - i * 0.1, 0), stone);
      c.position.set((r() - 0.5) * 0.1, 0.25 + i * 0.5, (r() - 0.5) * 0.1);
      c.castShadow = true;
      g.add(c);
    }
    this._cyl(s, 0, 0, 0.5, 1.2); // cairn — climbable to a point
  }

  _build_shrine(s, g, clone, r) {
    const ped = clone('shrine_pedestal');
    if (ped) { ped.rotation.y = r() * Math.PI * 2; g.add(ped); }
    this._cyl(s, 0, 0, 1.05, 1.5); // tiered pedestal, standable top
    const colors = [0x7fe3c8, 0xb59dff, 0xffd25e, 0x8fc7ff];
    const c = new THREE.Color(colors[Math.floor(r() * colors.length)]);
    const crystal = new THREE.Mesh(
      new THREE.OctahedronGeometry(0.5),
      new THREE.MeshStandardMaterial({
        color: c, emissive: c, emissiveIntensity: 3.4, roughness: 0.25, flatShading: true,
      }),
    );
    const baseY = 2.5;
    crystal.position.y = baseY;
    crystal.castShadow = true;
    const halo = glowSprite(c.getHex(), 3.2);
    halo.position.y = baseY;
    const light = new THREE.PointLight(c.getHex(), 0, 16, 1.8);
    light.position.y = baseY + 0.2;
    g.add(crystal, halo, light);
    this.crystals.push({ mesh: crystal, halo, light, baseY, phase: r() * Math.PI * 2 });
  }

  _build_arch(s, g, clone, r) {
    const arch = clone('stone_arch');
    const archRy = r() * Math.PI * 2;
    if (arch) { arch.rotation.y = archRy; g.add(arch); }
    // leg clusters sit at local (±7.4, 1.5) in the glb frame — rotate into place
    const c = Math.cos(archRy), sn = Math.sin(archRy);
    for (const lx of [-7.4, 7.4]) {
      this._cyl(s, lx * c - 1.5 * sn, lx * sn + 1.5 * c, 2.5, 4.5);
    }
    const rock = new THREE.MeshStandardMaterial({ color: 0x7c7263, roughness: 1, flatShading: true });
    for (let i = 0; i < 4; i++) {
      const m = new THREE.Mesh(new THREE.IcosahedronGeometry(0.5 + r() * 0.7, 0), rock);
      const a = r() * Math.PI * 2, d = 8 + r() * 5;
      m.position.set(Math.cos(a) * d, 0.2, Math.sin(a) * d);
      m.castShadow = true;
      g.add(m);
      this._cyl(s, Math.cos(a) * d, Math.sin(a) * d, 0.7, 0.9);
    }
    // a hiker's cairn marks the viewpoint
    for (let i = 0; i < 3; i++) {
      const m = new THREE.Mesh(new THREE.IcosahedronGeometry(0.34 - i * 0.08, 0), rock);
      m.position.set(9, 0.2 + i * 0.42, -3);
      g.add(m);
    }
    this._cyl(s, 9, -3, 0.45, 1.3);
  }

  _build_camp(s, g, clone, r) {
    const main = clone('tent');
    const mainRy = r() * Math.PI * 2;
    if (main) { main.rotation.y = mainRy; g.add(main); }
    this._box(s, 0, 0, 1.35, 1.6, 1.95, mainRy);
    const small = clone('tent');
    if (small) {
      small.scale.setScalar(0.78);
      const a = r() * Math.PI * 2;
      small.position.set(Math.cos(a) * 6.5, 0, Math.sin(a) * 6.5);
      const smallRy = r() * Math.PI * 2;
      small.rotation.y = smallRy;
      g.add(small);
      this._box(s, Math.cos(a) * 6.5, Math.sin(a) * 6.5, 1.05, 1.25, 1.5, smallRy);
    }
    const fire = clone('campfire');
    if (fire) { g.add(fire); }
    this._cyl(s, 0, 0, 0.95, 0.3); // fire ring — a tripping hazard, nothing more
    this.addFlame(g, 0, 0.15, 0, 1);
    this.smoke.addEmitter(new THREE.Vector3(s.x, s.y + 1.5, s.z), 1.6, 1);
    // crates + firewood
    const wood = new THREE.MeshStandardMaterial({ color: 0x6b4a33, roughness: 1 });
    const crateGeo = new THREE.BoxGeometry(0.9, 0.9, 0.9);
    for (let i = 0; i < 2; i++) {
      const c = new THREE.Mesh(crateGeo, wood);
      const a = r() * Math.PI * 2;
      c.position.set(Math.cos(a) * 3.4, 0.45 + i * 0.9, Math.sin(a) * 3.4);
      c.rotation.y = r() * Math.PI;
      c.castShadow = true;
      g.add(c);
      this._cyl(s, Math.cos(a) * 3.4, Math.sin(a) * 3.4, 0.55, 0.9 + i * 0.9); // climbable
    }
    // a banner on a pole, waving with the shared wind (animated in update)
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.08, 4.2, 6), wood);
    pole.position.set(4.4, 2.1, 0);
    pole.castShadow = true;
    g.add(pole);
    this._cyl(s, 4.4, 0, 0.1, 4.2);
    const bannerGeo = new THREE.PlaneGeometry(1.5, 1.0, 6, 3);
    bannerGeo.translate(0.75, -0.5, 0); // pivot at the pole edge
    const bannerMat = new THREE.MeshStandardMaterial({
      color: 0xc7562f, roughness: 1, side: THREE.DoubleSide,
    });
    const banner = new THREE.Mesh(bannerGeo, bannerMat);
    banner.position.set(4.4, 4.0, 0);
    g.add(banner);
    this.banners.push({ mesh: banner, base: r() * Math.PI * 2, phase: r() * 10 });
  }

  addFlame(g, x, y, z, scale) {
    const flame = makeFlame(scale);
    flame.position.set(x, y, z);
    g.add(flame);
    const light = new THREE.PointLight(0xff9a44, 0, 20, 1.6);
    light.position.set(x, y + 0.6, z);
    g.add(light);
    this.flames.push({ mesh: flame, light, phase: Math.random() * 10 });
    this.smoke.addEmitter(
      new THREE.Vector3(g.position.x + x, g.position.y + y + 1.0 * scale, g.position.z + z),
      scale * 1.1, scale,
    );
  }

  // ---- per-frame --------------------------------------------------------

  discover(site) {
    site.discovered = true;
    this.onDiscover?.(site);
  }

  discoverAll() {
    // silent variant for the debug hook — no toast/chime spam
    for (const s of this.sites) s.discovered = true;
  }

  update(dt, playerPos, elapsed, sky) {
    const night = 1 - sky.daylight;

    // discovery check
    for (const s of this.sites) {
      if (s.discovered) continue;
      const d = Math.hypot(playerPos.x - s.x, playerPos.z - s.z);
      if (d < s.discoverR && Math.abs(playerPos.y - s.y) < 60) this.discover(s);
    }

    // spinning windmill sails
    for (const sp of this.spinners) sp.obj.rotation[sp.axis] += dt * sp.speed * (0.4 + this.env.wind.value * 0.6) * sp.dir;

    // camp banners wave on their poles
    for (const b of this.banners) {
      b.mesh.rotation.y = b.base + Math.sin(elapsed * 1.8 + b.phase) * (0.18 + this.env.wind.value * 0.3);
      b.mesh.rotation.z = Math.sin(elapsed * 2.6 + b.phase) * 0.08 * this.env.wind.value;
    }

    // flames flicker; lights live mostly at night and only near the player
    for (const f of this.flames) {
      f.mesh.material.uniforms.uTime.value = elapsed + f.phase;
      const flick = 0.75 + 0.35 * Math.sin(elapsed * 11 + f.phase * 7) * Math.sin(elapsed * 5.1 + f.phase);
      f.mesh.material.uniforms.uIntensity.value = 0.85 * flick;
      const near = f.mesh.getWorldPosition(this._v).distanceTo(playerPos) < 260;
      f.light.visible = near;
      f.light.intensity = near ? (0.35 + 2.6 * night) * flick : 0;
    }

    // lighthouse beam + halo + shrine glow ramp with night
    for (const b of this.beams) {
      if (b.group) b.group.rotation.y = elapsed * 0.55;
      const o = Math.pow(night, 1.4);
      if (b.isRing) b.coneMat.opacity = o * 0.35 * (0.8 + 0.2 * Math.sin(elapsed * 1.5));
      else b.coneMat.opacity = o * 0.22;
      if (b.halo) b.halo.material.opacity = Math.min(1, 0.15 + o);
    }

    // shrine crystals bob + spin
    for (const c of this.crystals) {
      c.mesh.rotation.y += dt * 0.8;
      c.mesh.position.y = c.baseY + Math.sin(elapsed * 1.3 + c.phase) * 0.18;
      c.halo.position.y = c.mesh.position.y;
      const pulse = 0.85 + 0.15 * Math.sin(elapsed * 2.2 + c.phase);
      const near = c.mesh.getWorldPosition(this._v).distanceTo(playerPos) < 260;
      c.light.visible = near;
      c.light.intensity = near ? night * 1.6 * pulse : 0;
      c.mesh.material.emissiveIntensity = 2.0 + night * 2.6 * pulse;
    }

    this.smoke.update(dt, this.env.wind.value, elapsed);
  }
}

// Load the Blender-built glb templates first, then place the landmarks.
export async function createPOIs(terrain, scene, seed, env) {
  const templates = await loadTemplates();
  return new POIs(terrain, scene, seed, templates, env);
}
