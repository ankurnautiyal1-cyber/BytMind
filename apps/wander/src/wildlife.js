import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { WORLD_HALF } from './terrain.js';
import { mulberry32 } from './noise.js';
import { glowSprite } from './effects.js';

// Herds of grazing animals (sheep, deer, cows) sculpted in Blender
// (tools/build_wildlife.py → wildlife.glb: body / head / leg per species, painted
// vertex colours) and animated from instanced parts. Each animal runs a tiny state
// machine: idle → graze → wander, and flees when the player gets close.
//
// After dark a few luminous stags stand in the glades at the forest edge. They are
// only there at night, watch you from a distance, and fade into the trees if you
// come close.

// neck: where the head pivots, relative to the body centre (scaled by the animal)
const SPECIES = [
  { key: 'sheep', scale: 0.8, slim: 1.0, flee: 5.5, leg: 1.0, neck: [0.22, -0.6] },
  { key: 'deer', scale: 1.05, slim: 0.8, flee: 8, leg: 1.22, neck: [0.2, -0.52] },
  { key: 'cow', scale: 1.25, slim: 1.15, flee: 6.5, leg: 1.0, neck: [0.24, -0.72] },
];
const STAG = { key: 'stag', scale: 1.3, slim: 0.8, flee: 17, leg: 1.22, neck: [0.2, -0.52] };
const HERD_COUNT = 15;
const STAG_COUNT = 5;

async function loadGeometry() {
  const geos = {};
  try {
    const gltf = await new GLTFLoader().loadAsync('assets/wildlife.glb');
    gltf.scene.traverse((o) => { if (o.isMesh) geos[o.name] = o.geometry; });
  } catch { console.warn('[wildlife] wildlife.glb missing (run tools/build_wildlife.py): using plain shapes'); }
  if (!geos.sheep_body) {
    // fallback: the original capsule / box animals
    const body = new THREE.CapsuleGeometry(0.42, 1.0, 4, 12); body.rotateX(Math.PI / 2);
    const head = new THREE.BoxGeometry(0.36, 0.38, 0.56); head.translate(0, 0, -0.22);
    const leg = new THREE.BoxGeometry(0.15, 0.62, 0.15); leg.translate(0, -0.31, 0);
    for (const k of ['sheep', 'deer', 'cow', 'stag']) { geos[`${k}_body`] = body; geos[`${k}_head`] = head; geos[`${k}_leg`] = leg; }
    geos.fallback = true;
  } else {
    // the Blender parts are modelled with +Y forward / +Z up; the glb export has already turned
    // that into three's -Z forward / +Y up, and the legs hang from the origin
  }
  return geos;
}

export class Wildlife {
  static async create(terrain, scene, seed) {
    return new Wildlife(terrain, scene, seed, await loadGeometry());
  }

  constructor(terrain, scene, seed, geos) {
    this.terrain = terrain;
    const rand = mulberry32((seed ^ 0x1234abcd) >>> 0);
    this.rand = rand;
    this.roots = [];

    // ---- herd placement: open, dry, gentle meadow away from other herds ----
    const valid = (x, z) => {
      const h = terrain.heightAt(x, z);
      return h > 3 && h < 24 && terrain.slopeAt(x, z) < 0.18 && terrain.forestMask(x, z) < 0.02;
    };
    const herds = [];
    for (let i = 0; i < 8000 && herds.length < HERD_COUNT; i++) {
      let x, z;
      if (herds.length === 0) {
        // first herd guarantees life near spawn — spiral out from the origin
        let found = null;
        for (let r = 20; r < 500 && !found; r += 25) {
          const steps = Math.max(1, Math.floor((2 * Math.PI * r) / 25));
          for (let s = 0; s < steps && !found; s++) {
            const a = (s / steps) * Math.PI * 2;
            const px = Math.cos(a) * r, pz = Math.sin(a) * r;
            if (valid(px, pz)) found = { x: px, z: pz };
          }
        }
        if (!found) continue;
        ({ x, z } = found);
      } else {
        x = (rand() * 2 - 1) * WORLD_HALF * 0.85;
        z = (rand() * 2 - 1) * WORLD_HALF * 0.85;
      }
      if (!valid(x, z)) continue;
      if (herds.some((h) => Math.hypot(h.x - x, h.z - z) < 180)) continue;
      herds.push({ x, z });
    }

    // ---- animals ----
    const animals = [];
    herds.forEach((herd, hi) => {
      const n = 3 + Math.floor(rand() * 4);
      for (let j = 0; j < n && animals.length < 72; j++) {
        const a = rand() * Math.PI * 2;
        const r = 5 + rand() * 13;
        const x = herd.x + Math.cos(a) * r;
        const z = herd.z + Math.sin(a) * r;
        const h = terrain.heightAt(x, z);
        if (h < 2) continue;
        animals.push({
          x, z, herd,
          sp: hi % SPECIES.length,
          s: SPECIES[hi % SPECIES.length].scale * (0.9 + rand() * 0.2),
          yaw: rand() * Math.PI * 2,
          state: 'idle',
          timer: rand() * 3,
          tx: x, tz: z,
          speed: 0,
          legPhase: rand() * 6,
          head: 0,
        });
      }
    });
    this.animals = animals;

    // one set of instanced meshes per species; each animal remembers its slot
    const partMat = () => new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.95 });
    this.sets = SPECIES.map((sp, si) => {
      const list = animals.filter((a) => a.sp === si);
      list.forEach((a, k) => { a.slot = k; });
      const n = Math.max(1, list.length);
      const mk = (geo, count) => {
        const m = new THREE.InstancedMesh(geo, partMat(), count);
        m.frustumCulled = false;
        m.castShadow = true;
        m.receiveShadow = true;
        scene.add(m);
        this.roots.push(m);
        return m;
      };
      const set = { list, body: mk(geos[`${sp.key}_body`], n), head: mk(geos[`${sp.key}_head`], n), legs: mk(geos[`${sp.key}_leg`], n * 4) };
      const col = new THREE.Color();
      list.forEach((a, i) => {
        const shade = 0.88 + rand() * 0.24;
        col.setRGB(shade, shade * (0.97 + rand() * 0.06), shade * (0.95 + rand() * 0.08));
        set.body.setColorAt(i, col); set.head.setColorAt(i, col);
        for (let k = 0; k < 4; k++) set.legs.setColorAt(i * 4 + k, col);
      });
      for (const m of [set.body, set.head, set.legs]) { m.instanceColor.needsUpdate = true; m.count = list.length * (m === set.legs ? 4 : 1); }
      return set;
    });

    this._buildStags(terrain, scene, geos, rand, herds);

    this._m = new THREE.Matrix4();
    this._q = new THREE.Quaternion();
    this._qt = new THREE.Quaternion();
    this._e = new THREE.Euler();
    this._v = new THREE.Vector3();
    this._s = new THREE.Vector3();
    this._time = 0;
  }

  // ---- luminous stags: night-only, at the forest edge ----
  _buildStags(terrain, scene, geos, rand, herds) {
    this.stags = [];
    const spots = [];
    for (let i = 0; i < 20000 && spots.length < STAG_COUNT; i++) {
      const x = (rand() * 2 - 1) * WORLD_HALF * 0.8, z = (rand() * 2 - 1) * WORLD_HALF * 0.8;
      const h = terrain.heightAt(x, z), f = terrain.forestMask(x, z);
      if (h < 6 || h > 45 || terrain.slopeAt(x, z) > 0.3 || f < 0.03 || f > 0.45) continue;
      if (spots.some((p) => Math.hypot(p.x - x, p.z - z) < 300) || herds.some((p) => Math.hypot(p.x - x, p.z - z) < 90)) continue;
      spots.push({ x, z });
    }
    this.stagMat = new THREE.MeshStandardMaterial({
      vertexColors: true, roughness: 0.55, emissive: 0x8fd8ff, emissiveIntensity: 1.1,
      transparent: true, opacity: 0, depthWrite: false,
    });
    const n = Math.max(1, spots.length);
    const mk = (geo, count) => {
      const m = new THREE.InstancedMesh(geo, this.stagMat, count);
      m.frustumCulled = false;
      m.visible = false;
      scene.add(m);
      this.roots.push(m);
      return m;
    };
    this.stagSet = { body: mk(geos.stag_body, n), head: mk(geos.stag_head, n), legs: mk(geos.stag_leg, n * 4) };
    const white = new THREE.Color(1, 1, 1);
    for (const m of [this.stagSet.body, this.stagSet.head, this.stagSet.legs]) {
      m.setColorAt(0, white);
      m.count = spots.length * (m === this.stagSet.legs ? 4 : 1);
      for (let i = 0; i < m.count; i++) m.setColorAt(i, white);
      m.instanceColor.needsUpdate = true;
    }
    this.halos = [];
    spots.forEach((p) => {
      const halo = glowSprite(0x9fe0ff, 6);
      halo.material.opacity = 0;
      halo.visible = false;
      scene.add(halo);
      this.roots.push(halo);
      this.halos.push(halo);
      this.stags.push({
        x: p.x, z: p.z, home: { ...p }, sp: STAG, s: STAG.scale * (0.95 + rand() * 0.1), yaw: rand() * 6.28, state: 'idle',
        timer: rand() * 4, tx: p.x, tz: p.z, speed: 0, legPhase: rand() * 6, head: 0, fade: 1,
      });
    });
    // a faint trail of motes behind each stag
    const TR = 28;
    this.trail = { n: TR, t: 0, pos: new Float32Array(this.stags.length * TR * 3), col: new Float32Array(this.stags.length * TR * 3) };
    const tg = new THREE.BufferGeometry();
    tg.setAttribute('position', new THREE.BufferAttribute(this.trail.pos, 3));
    tg.setAttribute('color', new THREE.BufferAttribute(this.trail.col, 3));
    this.trailPts = new THREE.Points(tg, new THREE.PointsMaterial({
      size: 0.3, vertexColors: true, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, sizeAttenuation: true,
    }));
    this.trailPts.frustumCulled = false;
    this.trailPts.visible = false;
    scene.add(this.trailPts);
    this.roots.push(this.trailPts);
  }

  _pickTarget(a) {
    for (let k = 0; k < 4; k++) {
      const ang = Math.random() * Math.PI * 2;
      const dist = 6 + Math.random() * 18;
      const tx = a.x + Math.cos(ang) * dist;
      const tz = a.z + Math.sin(ang) * dist;
      if (this.terrain.heightAt(tx, tz) > 1.5) { a.tx = tx; a.tz = tz; return; }
    }
    a.tx = a.x; a.tz = a.z;
  }

  // behaviour: idle -> graze -> wander, flee from the player
  _behave(a, sp, dt, playerPos) {
    const terrain = this.terrain;
    a.timer -= dt;
    const dPlayer = Math.hypot(playerPos.x - a.x, playerPos.z - a.z);
    if (dPlayer < sp.flee && a.state !== 'flee') {
      a.state = 'flee';
      a.timer = 2.5 + Math.random() * 2;
      const away = Math.atan2(a.x - playerPos.x, a.z - playerPos.z);
      a.tx = a.x + Math.sin(away) * 32;
      a.tz = a.z + Math.cos(away) * 32;
    }
    let targetSpeed = 0;
    if (a.state === 'flee') {
      targetSpeed = sp === STAG ? 3.6 : 5.2;
      if (a.timer <= 0) { a.state = 'idle'; a.timer = 2 + Math.random() * 3; }
    } else if (a.state === 'wander') {
      targetSpeed = sp === STAG ? 0.9 : 1.5;
      const dTarget = Math.hypot(a.tx - a.x, a.tz - a.z);
      if (dTarget < 1.5 || a.timer <= 0) { a.state = 'idle'; a.timer = 1 + Math.random() * 3; }
    } else if (a.state === 'graze') {
      if (a.timer <= 0) { a.state = 'wander'; a.timer = 14; this._pickTarget(a); }
    } else if (a.timer <= 0) { a.state = 'graze'; a.timer = 3 + Math.random() * 4; }

    if (targetSpeed > 0) {
      const dx = a.tx - a.x, dz = a.tz - a.z;
      const d = Math.hypot(dx, dz);
      if (d > 0.3) {
        const nx = dx / d, nz = dz / d;
        const step = Math.min(d, targetSpeed * dt);
        const nextX = a.x + nx * step, nextZ = a.z + nz * step;
        if (terrain.heightAt(nextX, nextZ) > 1.2) { a.x = nextX; a.z = nextZ; }
        else { a.state = 'idle'; a.timer = 1 + Math.random() * 2; }
        const targetYaw = Math.atan2(-nx, -nz);
        const dy = Math.atan2(Math.sin(targetYaw - a.yaw), Math.cos(targetYaw - a.yaw));
        a.yaw += dy * Math.min(1, 5 * dt);
      }
    }
    a.speed += (targetSpeed - a.speed) * Math.min(1, 6 * dt);
    a.legPhase += a.speed * dt * 2.4;
    a.head += ((a.state === 'graze' ? 1 : 0) - a.head) * Math.min(1, 3 * dt);
    return dPlayer;
  }

  // write one animal's body / head / legs into its instanced meshes
  _pose(a, sp, set, slot, time) {
    const { _m: m, _q: q, _qt: qt, _e: e, _v: v, _s: s, terrain } = this;
    const y = terrain.heightAt(a.x, a.z);
    const hip = 0.6 * a.s * sp.leg;
    const bodyY = hip + 0.04 * a.s;
    e.set(0, a.yaw, 0);
    q.setFromEuler(e);

    v.set(a.x, y + bodyY, a.z);
    s.setScalar(a.s);
    m.compose(v, q, s);
    set.body.setMatrixAt(slot, m);

    // head (pivot at the neck, dips while grazing with a chew bob)
    v.set(0, sp.neck[0] * a.s, sp.neck[1] * a.s).applyQuaternion(q);
    v.x += a.x; v.y += y + bodyY; v.z += a.z;
    const chew = a.state === 'graze' ? Math.sin(time * 7 + slot * 1.7) * 0.06 : 0;
    const lookUp = a.state === 'idle' && sp === STAG ? -0.35 : 0; // a stag lifts its head to watch you
    qt.setFromEuler(e.set(-(0.12 + a.head * 1.0) + chew + lookUp, 0, 0));
    qt.premultiply(q);
    s.setScalar(a.s);
    m.compose(v, qt, s);
    set.head.setMatrixAt(slot, m);

    // legs: diagonal pairs swing together
    const walkK = Math.min(1, a.speed / 1.4);
    const off = [0, Math.PI, Math.PI, 0];
    const corners = [[-0.26, -0.52], [0.26, -0.52], [-0.26, 0.52], [0.26, 0.52]];
    for (let k = 0; k < 4; k++) {
      v.set(corners[k][0] * sp.slim, bodyY - 0.04 * a.s, corners[k][1] * a.s).applyQuaternion(q);
      v.x += a.x; v.y += y; v.z += a.z;
      const swing = Math.sin(a.legPhase + off[k]) * 0.5 * walkK;
      qt.setFromEuler(e.set(swing, 0, 0));
      qt.premultiply(q);
      s.set(a.s, a.s * sp.leg, a.s);
      m.compose(v, qt, s);
      set.legs.setMatrixAt(slot * 4 + k, m);
    }
  }

  update(dt, playerPos, time, daylight = 1) {
    this._time = time;
    for (const a of this.animals) {
      this._behave(a, SPECIES[a.sp], dt, playerPos);
      this._pose(a, SPECIES[a.sp], this.sets[a.sp], a.slot, time);
    }
    for (const set of this.sets) {
      set.body.instanceMatrix.needsUpdate = true;
      set.head.instanceMatrix.needsUpdate = true;
      set.legs.instanceMatrix.needsUpdate = true;
    }
    this._updateStags(dt, playerPos, time, daylight);
  }

  _updateStags(dt, playerPos, time, daylight) {
    const night = 1 - daylight;
    const vis = THREE.MathUtils.smoothstep(night, 0.55, 0.85);
    const set = this.stagSet;
    const show = vis > 0.01 && this.stags.length > 0;
    for (const m of [set.body, set.head, set.legs]) m.visible = show;
    this.trailPts.visible = show;
    this.stagMat.opacity = vis * 0.9;
    this.stagMat.emissiveIntensity = 0.9 + 0.5 * Math.sin(time * 1.3);
    if (!show) { for (const h of this.halos) h.visible = false; return; }
    const tr = this.trail;
    tr.t -= dt;
    const push = tr.t <= 0;
    if (push) tr.t = 0.12;
    this.stags.forEach((a, i) => {
      const d = this._behave(a, STAG, dt, playerPos);
      // fade out as you come near; return once you are well away
      const target = d < STAG.flee * 1.3 ? 0 : (d > 40 ? 1 : a.fade);
      a.fade += (target - a.fade) * Math.min(1, 1.6 * dt);
      if (a.fade < 0.03 && d < 60 === false) { a.x = a.home.x; a.z = a.home.z; a.state = 'idle'; a.timer = 3; }
      this._pose(a, STAG, set, i, time);
      const y = this.terrain.heightAt(a.x, a.z);
      const halo = this.halos[i];
      halo.visible = true;
      halo.position.set(a.x, y + 1.3 * a.s, a.z);
      halo.material.opacity = vis * a.fade * (0.35 + 0.1 * Math.sin(time * 2 + i));
      // trail: shift the history and write the newest mote at the hind quarters
      const base = i * tr.n * 3;
      if (push) {
        tr.pos.copyWithin(base + 3, base, base + (tr.n - 1) * 3);
        tr.pos[base] = a.x; tr.pos[base + 1] = y + 0.5 * a.s; tr.pos[base + 2] = a.z;
        for (let k = 0; k < tr.n; k++) {
          const f = (1 - k / tr.n) * (a.speed > 0.4 ? 1 : 0.25) * vis * a.fade;
          tr.col[base + k * 3] = 0.35 * f; tr.col[base + k * 3 + 1] = 0.75 * f; tr.col[base + k * 3 + 2] = 1.0 * f;
        }
      }
    });
    this.stagMat.opacity *= Math.max(0.0, Math.min(1, this.stags.reduce((m, a) => Math.max(m, a.fade), 0)));
    set.body.instanceMatrix.needsUpdate = true;
    set.head.instanceMatrix.needsUpdate = true;
    set.legs.instanceMatrix.needsUpdate = true;
    if (push) { this.trailPts.geometry.attributes.position.needsUpdate = true; this.trailPts.geometry.attributes.color.needsUpdate = true; }
  }
}
