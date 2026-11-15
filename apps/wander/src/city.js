import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/addons/libs/meshopt_decoder.module.js';
import { CollisionWorld } from './colliders.js';
import { facadeInterior, cityTime, lawnPaint, pavingPaint, ledScreen } from './city-shaders.js';
import { CityFX } from './city-fx.js';
import { createStreetMirror } from './city-reflect.js';

// New York world — a Blender-built Manhattan: the real island shape, a street
// grid with Broadway's diagonal, district-tuned blocks, hand-made landmarks
// (Empire State, Chrysler, One WTC, Flatiron, Woolworth, St. Patrick's, 432
// Park, Washington Arch, Statue of Liberty, Brooklyn + Manhattan bridges),
// Central Park, street furniture, traffic and a skyline backdrop of Jersey,
// Brooklyn and Queens.
//
// All geometry comes from tools/build_city.py (public/assets/city/*) plus
// city_layout.json, which stores everything in "grid space" (the island's own
// street grid, uptown at -z). The whole group is rotated -29 deg about Y so
// avenues point NNE like the real island, and re-centered on the origin —
// toWorld/toLocal own that transform; heightAt and the collision world live
// on the world side, everything visual lives on the grid side.
//
// Ground: heightAt() returns the roof height inside a building's footprint
// (the slope limiter turns buildings into walls) and the sidewalk height on
// block slabs, so curbs, roofs and the bridge decks are all walkable with
// zero special-casing.

const CITY_HALF = 1800;   // world-space half-extent used by the maps

function billboardTexture(kind) {
  const cv = document.createElement('canvas');
  cv.width = 512; cv.height = 256;
  const ctx = cv.getContext('2d');
  if (kind === 0) {
    const g = ctx.createLinearGradient(0, 0, 512, 256);
    g.addColorStop(0, '#5b1d8a'); g.addColorStop(0.5, '#c22bb5'); g.addColorStop(1, '#2b8ac2');
    ctx.fillStyle = g; ctx.fillRect(0, 0, 512, 256);
    ctx.fillStyle = '#fff';
    ctx.font = '900 92px ui-sans-serif, system-ui';
    ctx.textAlign = 'center';
    ctx.fillText('WANDER', 256, 118);
    ctx.font = '600 34px ui-monospace, monospace';
    ctx.fillText('· A WORLD AWAY ·', 256, 180);
  } else if (kind === 1) {
    ctx.fillStyle = '#06090f'; ctx.fillRect(0, 0, 512, 256);
    ctx.fillStyle = '#19e3d2';
    for (let i = 0; i < 9; i++) {
      const h = 40 + Math.random() * 170;
      ctx.fillRect(24 + i * 54, 236 - h, 34, h);
    }
    ctx.fillStyle = '#e8fbff';
    ctx.font = '700 40px ui-monospace, monospace';
    ctx.textAlign = 'left';
    ctx.fillText('NYSE ▲ 2.4%', 24, 40);
    ctx.fillStyle = '#ff5b5b';
    ctx.font = '700 26px ui-monospace, monospace';
    ctx.fillText('WAND ▼ 0.1%', 24, 76);
  } else {
    // broadway marquee
    ctx.fillStyle = '#160d04'; ctx.fillRect(0, 0, 512, 256);
    ctx.fillStyle = '#ffd25e';
    ctx.fillRect(0, 0, 512, 14); ctx.fillRect(0, 242, 512, 14);
    ctx.font = '900 84px ui-serif, Georgia, serif';
    ctx.textAlign = 'center';
    ctx.fillText('TONIGHT', 256, 108);
    ctx.font = '700 44px ui-serif, Georgia, serif';
    ctx.fillText('THE GATE ON BROADWAY', 256, 178);
    ctx.fillStyle = '#e86fd6';
    ctx.font = '500 26px ui-monospace, monospace';
    ctx.fillText('★ ★ ★ ★ ★', 256, 224);
  }
  const tex = new THREE.CanvasTexture(cv);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.wrapS = THREE.RepeatWrapping;
  return tex;
}

export class City {
  constructor(scene, seed, timeU) {
    this.scene = scene;
    this.timeU = timeU;
    this.group = new THREE.Group();
    this.group.visible = false;
    scene.add(this.group);
    // the gate stands world-aligned at the Battery pier, outside the rotated
    // grid — transit logic and the portal expect plain world coordinates
    this.gateRoot = new THREE.Group();
    this.gateRoot.visible = false;
    scene.add(this.gateRoot);
    this.built = false;
    this._cam = new THREE.Vector3();
    this.sites = [];
    this.onDiscover = null;
    this.colliders = new CollisionWorld();
    this.buildings = [];      // grid-space AABBs [x0, x1, z0, z1, top]
    this._hash = new Map();   // cell key -> building indices
    this._nightMats = [];     // facade materials whose windows glow at night
    this.CITY_HALF = CITY_HALF;
    this._m = new THREE.Matrix4();
    this._q = new THREE.Quaternion();
    this._e = new THREE.Euler();
    this._v = new THREE.Vector3();
    this._s = new THREE.Vector3();
    this._c = new THREE.Color();
  }

  // ---- grid <-> world transforms ------------------------------------------

  _setRot(rot, offX, offZ) {
    this.rot = rot;
    this._cos = Math.cos(rot);
    this._sin = Math.sin(rot);
    this._offX = offX;
    this._offZ = offZ;
    // the visual group follows the same transform the math uses
    this.group.rotation.y = rot;
    this.group.position.set(offX, 0, offZ);
    this.gateFwd = { x: -this._sin, z: -this._cos }; // local -z in world space
  }

  toWorld(x, z) {
    return {
      x: x * this._cos + z * this._sin + this._offX,
      z: -x * this._sin + z * this._cos + this._offZ,
    };
  }

  toLocal(x, z) {
    const wx = x - this._offX, wz = z - this._offZ;
    return {
      x: wx * this._cos - wz * this._sin,
      z: wx * this._sin + wz * this._cos,
    };
  }

  // ---- ground / roofs ------------------------------------------------------

  _hashKey(ix, iz) {
    return (ix + 4096) * 8192 + (iz + 4096);
  }

  _buildHash() {
    const CELL = 64;
    this._hash.clear();
    this.buildings.forEach((b, i) => {
      const x0 = Math.floor(b[0] / CELL), x1 = Math.floor(b[1] / CELL);
      const z0 = Math.floor(b[2] / CELL), z1 = Math.floor(b[3] / CELL);
      for (let ix = x0; ix <= x1; ix++) {
        for (let iz = z0; iz <= z1; iz++) {
          const key = this._hashKey(ix, iz);
          let arr = this._hash.get(key);
          if (!arr) this._hash.set(key, (arr = []));
          arr.push(i);
        }
      }
    });
    this._cell = CELL;
  }

  // island west/east edge at a given grid z (for map + traffic lanes)
  xEdgeAt(z, side) {
    const poly = this._island;
    let best = null;
    for (let i = 0; i < poly.length; i++) {
      const [x0, z0] = poly[i];
      const [x1, z1] = poly[(i + 1) % poly.length];
      if (Math.min(z0, z1) - 1e-6 <= z && z <= Math.max(z0, z1) + 1e-6 && Math.abs(z1 - z0) > 1e-6) {
        const t = (z - z0) / (z1 - z0);
        if (t >= 0 && t <= 1) {
          const x = x0 + t * (x1 - x0);
          if (best === null || (side < 0 && x < best) || (side > 0 && x > best)) best = x;
        }
      }
    }
    return best === null ? (side < 0 ? -380 : 420) : best;
  }

  inIsland(x, z) {
    const poly = this._island;
    let inside = false;
    for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
      const [xi, zi] = poly[i];
      const [xj, zj] = poly[j];
      if ((zi > z) !== (zj > z) && x < ((xj - xi) * (z - zi)) / (zj - zi + 1e-12) + xi) {
        inside = !inside;
      }
    }
    return inside;
  }

  heightAt(x, z) {
    if (!this.built) return 2;
    const p = this.toLocal(x, z);
    const CELL = this._cell;
    const ix = Math.floor(p.x / CELL), iz = Math.floor(p.z / CELL);
    const arr = this._hash.get(this._hashKey(ix, iz));
    let best = -Infinity;
    if (arr) {
      for (const i of arr) {
        const b = this.buildings[i];
        if (p.x > b[0] && p.x < b[1] && p.z > b[2] && p.z < b[3] && b[4] > best) best = b[4];
      }
    }
    if (best > -Infinity) return best;
    return this.inIsland(p.x, p.z) ? 2 : -6; // street level or harbor
  }

  slopeAt() { return 0; }

  biomeName(x, z) {
    if (!this.built) return 'New York';
    const p = this.toLocal(x, z);
    const { PARK } = this._rects;
    if (p.x > PARK.x0 && p.x < PARK.x1 && p.z > PARK.z0 && p.z < PARK.z1) return 'Central Park';
    if (p.z > 430) return 'Lower Manhattan';
    if (p.z > -120) return 'Village & SoHo';
    if (p.z > PARK.z1) return p.z > -620 ? 'Midtown South' : 'Midtown';
    if (p.z > PARK.z0) return 'Central Park';
    if (p.z > -1728) return 'Upper West & East Side';
    if (p.z > -2345 && this.inIsland(p.x, p.z)) return 'Harlem & Heights';
    // backdrop landmasses
    if (p.x > 460 && p.z > 160) return 'Brooklyn';
    if (p.x > 460 && p.z < 150) return 'Queens';
    if (p.x < -460) return 'New Jersey';
    if (Math.hypot(p.x - this._statue[0], p.z - this._statue[1]) < 60) return 'Liberty Island';
    return 'The Harbor';
  }

  // ---- build ---------------------------------------------------------------

  async build() {
    if (this.built) return;
    this.built = true;
    const loader = new GLTFLoader();
    loader.setMeshoptDecoder(MeshoptDecoder); // the heavy city chunks are meshopt-compressed (tools/compress_city.sh)
    const load = (n) => loader.loadAsync(`assets/${n}.glb`).then((g) => g.scene)
      .catch(() => { console.warn(`[city] asset missing: ${n}.glb`); return null; });
    const [layout, ground, blocks, landmarks, bridges, backdrop, props,
      taxi, bus, truck, ferry, heli, treePark, treeStreet, streetlight, car, natTrees] = await Promise.all([
      fetch('assets/city/city_layout.json').then((r) => r.json()),
      load('city/city_ground'), load('city/city_blocks'), load('city/city_landmarks'),
      load('city/city_bridges'), load('city/city_backdrop'), load('city/city_props'),
      load('city/city_taxi'), load('city/city_bus'), load('city/city_truck'),
      load('city/city_ferry'), load('city/city_heli'),
      load('city/tree_park'), load('city/tree_street'),
      load('streetlight'), load('car'), load('nature_trees'),
    ]);
    if (!layout) { console.warn('[city] layout missing'); return; }
    this._L = layout;
    this._island = layout.island;
    this._rects = { PARK: layout.park, BATTERY: layout.battery, WASHSQ: layout.washsq };
    this._statue = layout.sites.find((s) => s.type === 'monument');
    this._statue = [this._statue.x, this._statue.z];

    // center the rotated bounding box on the world origin
    let minX = 1e9, maxX = -1e9, minZ = 1e9, maxZ = -1e9;
    const consider = (x0, x1, z0, z1) => {
      for (const [x, z] of [[x0, z0], [x1, z0], [x1, z1], [x0, z1]]) {
        const wx = x * Math.cos(layout.rot) + z * Math.sin(layout.rot);
        const wz = -x * Math.sin(layout.rot) + z * Math.cos(layout.rot);
        minX = Math.min(minX, wx); maxX = Math.max(maxX, wx);
        minZ = Math.min(minZ, wz); maxZ = Math.max(maxZ, wz);
      }
    };
    for (const [x0, x1, z0, z1] of layout.buildings) consider(x0, x1, z0, z1);
    const rot = layout.rot;
    this._setRot(rot, -(minX + maxX) / 2, -(minZ + maxZ) / 2);

    // static chunks (authored in grid space — the group rotation does the rest)
    // stacked flat layers (island slab -> asphalt -> paint) get a depth bias
    // per material so they can't z-fight at distance
    const DEPTH_BIAS = {
      concrete: 2.6, grass: 3.0, sidewalk: 2.9, water_pond: 2.7, path: 2.6,
      asphalt: 1.6, asphalt_st: 1.35, asphalt_bw: 1.15,
      paint_white: 0.9, paint_yellow: 0.9, sign_glow: 0.8, dark_metal: 0.8,
      stone_mid: 0.8, pier_wood: 0.8, trunk: 0.8,
    };
    const biased = new Set();
    for (const t of [ground, blocks, landmarks, bridges, backdrop, props]) {
      if (!t) continue;
      t.traverse((o) => {
        if (o.isMesh) {
          o.castShadow = true;
          o.receiveShadow = true;
          if (o.material?.name?.startsWith('facade')) {
            if (!this._nightMats.includes(o.material)) this._nightMats.push(o.material);
            facadeInterior(o.material);
          }
          const mn = o.material?.name;
          if (mn === 'grass') lawnPaint(o.material);
          else if (mn === 'sidewalk' || mn === 'concrete') pavingPaint(o.material);
          const bias = DEPTH_BIAS[o.material?.name];
          if (bias && !biased.has(o.material)) {
            biased.add(o.material);
            o.material.polygonOffset = true;
            o.material.polygonOffsetFactor = 1;
            o.material.polygonOffsetUnits = bias;
          }
        }
      });
      this.group.add(t);
    }
    this._lampMat = null;
    if (props) {
      props.traverse((o) => { if (o.isMesh && o.material?.name === 'sign_glow') o.castShadow = false; });
    }

    // wet streets: a planar reflection of the city on the road
    this._mirror = createStreetMirror(layout, this.quality || { reflect: 0 },
      () => [ground, backdrop, ...(this.extraHide || [])]);
    if (this._mirror) this.group.add(this._mirror);

    // collision + ground data
    this.buildings = layout.buildings;
    this._buildHash();
    for (const [x0, x1, z0, z1, top] of layout.buildings) {
      if (top <= 4) continue; // slabs stay heightAt-only (curbs must not block)
      const c = this.toWorld((x0 + x1) / 2, (z0 + z1) / 2);
      this.colliders.addBox(c.x, c.z, (x1 - x0) / 2, (z1 - z0) / 2, 2, top, rot);
    }

    // gate anchor (grid -> world)
    const gate = layout.gate;
    this.gateLocal = gate;
    this.gatePos = this.toWorld(gate.x, gate.z);
    // the gate faces down the avenue grid, toward where you arrive (gateFwd)
    this.gatePos.ry = this.rot + Math.PI;

    // streetlights (existing wilds asset, instanced along the avenues)
    const meshesOf = (t) => {
      const out = [];
      t?.traverse((o) => { if (o.isMesh) out.push(o); });
      return out;
    };
    if (streetlight && layout.lamps?.length) {
      const parts = meshesOf(streetlight);
      this._lampMat = parts.find((p) => p.material?.name === 'sl_lamp')?.material || null;
      parts.forEach((p, pi) => {
        const inst = new THREE.InstancedMesh(p.geometry, p.material, layout.lamps.length);
        inst.frustumCulled = false;
        layout.lamps.forEach(([lx, lz, dx, dz], i) => {
          this._v.set(lx, 2.35, lz);
          this._e.set(0, Math.atan2(dx, dz), 0);
          this._q.setFromEuler(this._e);
          this._s.setScalar(1);
          this._m.compose(this._v, this._q, this._s);
          inst.setMatrixAt(i, this._m);
        });
        inst.instanceMatrix.needsUpdate = true;
        if (pi === parts.length - 1) inst.castShadow = false;
        this.group.add(inst);
      });
      for (const [lx, lz] of layout.lamps) {
        const w = this.toWorld(lx, lz);
        this.colliders.addCylinder(w.x, w.z, 0.3, 2, 9);
      }
    }

    // trees (instanced; park trunks are solid)
    this._treeCrowns = [];
    const addTrees = (tpl, list, trunkR) => {
      if (!tpl || !list?.length) return;
      const parts = meshesOf(tpl);
      parts.forEach((p, pi) => {
        const inst = new THREE.InstancedMesh(p.geometry, p.material, list.length);
        inst.frustumCulled = false;
        list.forEach(([x, z, s], i) => {
          this._v.set(x, 2.15, z);
          this._e.set(0, (i * 2.399) % (Math.PI * 2), 0);
          this._q.setFromEuler(this._e);
          this._s.setScalar(s);
          this._m.compose(this._v, this._q, this._s);
          inst.setMatrixAt(i, this._m);
          if (p.material?.name?.startsWith('leaf')) {
            this._c.setHSL(0.29 + ((i * 0.618) % 1) * 0.08, 0.45, 0.3 + ((i * 0.383) % 1) * 0.14);
            inst.setColorAt(i, this._c);
          }
        });
        inst.instanceMatrix.needsUpdate = true;
        if (inst.instanceColor) inst.instanceColor.needsUpdate = true;
        if (pi === parts.length - 1) inst.castShadow = false;
        this.group.add(inst);
        this._treeCrowns.push(inst);
      });
      for (const [x, z, s] of list) {
        const w = this.toWorld(x, z);
        this.colliders.addCylinder(w.x, w.z, trunkR * s, 2, 2 + 3.4 * s);
      }
    };
    // The Meadow's sculpted trees stand in the park and along the avenues: the
    // two worlds' styles meet here. Falls back to the old trees if the asset is missing.
    const natGeo = {};
    natTrees?.traverse((o) => { if (o.isMesh) natGeo[o.name] = o.geometry; });
    const addNature = (list, variants, sMul, trunkR) => {
      const byV = variants.map(() => []);
      list.forEach((t, i) => byV[i % variants.length].push(t));
      const mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.92 });
      variants.forEach((name, vi) => {
        const items = byV[vi];
        if (!items.length || !natGeo[name]) return;
        const inst = new THREE.InstancedMesh(natGeo[name], mat, items.length);
        items.forEach(([x, z, s], i) => {
          this._v.set(x, 2.15, z);
          this._e.set(0, (i * 2.399 + vi) % (Math.PI * 2), 0);
          this._q.setFromEuler(this._e);
          this._s.setScalar(s * sMul);
          this._m.compose(this._v, this._q, this._s);
          inst.setMatrixAt(i, this._m);
          this._c.setRGB(0.88 + ((i * 0.618) % 1) * 0.24, 0.92 + ((i * 0.383) % 1) * 0.14, 0.9 + ((i * 0.271) % 1) * 0.16);
          inst.setColorAt(i, this._c);
        });
        inst.instanceMatrix.needsUpdate = true;
        inst.instanceColor.needsUpdate = true;
        inst.frustumCulled = false;
        inst.castShadow = true;
        inst.receiveShadow = true;
        this.group.add(inst);
        this._treeCrowns.push(inst);
      });
      for (const [x, z, s] of list) {
        const w = this.toWorld(x, z);
        this.colliders.addCylinder(w.x, w.z, trunkR * s * sMul, 2, 2 + 3.2 * s * sMul);
      }
    };
    if (natGeo.oak_a && layout.park_trees?.length) {
      addNature(layout.park_trees, ['oak_a', 'oak_b', 'birch', 'blossom', 'oak_a', 'autumn'], 0.82, 0.55);
      addNature(layout.street_trees || [], ['birch', 'oak_b', 'blossom'], 0.55, 0.5);
    } else {
      addTrees(treePark, layout.park_trees, 0.5);
      addTrees(treeStreet, layout.street_trees, 0.32);
    }

    // traffic
    this._buildTraffic(layout, { car, taxi, bus, truck }, meshesOf);

    // ferries: one moored at Whitehall, one circling the harbor
    this.ferry = null;
    if (ferry) {
      const moored = ferry.clone(true);
      moored.position.set(150, 0.4, 700);
      moored.rotation.y = Math.PI / 2;
      this.group.add(moored);
      const moving = ferry.clone(true);
      this.group.add(moving);
      const f = layout.ferry;
      this.ferry = { g: moving, cx: f.cx, cz: f.cz, rx: f.rx, rz: f.rz, y: f.y, ph: 0, w: 0.05 };
    }

    // helicopters
    this.helis = [];
    if (heli) {
      for (const hs of layout.helis) {
        const g = heli.clone(true);
        this.group.add(g);
        let rotor = null;
        g.traverse((o) => { if (o.isMesh && o.material?.name === 'heli_rotor') rotor = o; });
        this.helis.push({ g, rotor, ...hs, ph: hs.ph });
      }
    }

    // times square + broadway screens
    this.billboards = [];
    const bTexs = [billboardTexture(0), billboardTexture(1), billboardTexture(2)];
    for (const sc of layout.screens) {
      const mesh = new THREE.Mesh(
        new THREE.PlaneGeometry(sc.w, sc.h),
        new THREE.MeshBasicMaterial({ map: bTexs[sc.kind % 3], color: new THREE.Color(2.2, 2.2, 2.2), toneMapped: false }),
      );
      mesh.position.set(sc.x, sc.y, sc.z);
      mesh.rotation.y = sc.ry;
      ledScreen(mesh.material);
      this.group.add(mesh);
      this.billboards.push({ mesh, speed: 0.02 + (sc.kind % 3) * 0.017 });
    }

    // discoveries (grid -> world)
    this.sites = layout.sites.map((s, i) => {
      const w = this.toWorld(s.x, s.z);
      return {
        ...s, id: `city-${i}`, world: 'city',
        x: w.x, z: w.z, y: 2,
        discoverR: s.r,
        discovered: false,
      };
    });

    this.mapHalf = Math.max(1200, Math.ceil(Math.max(maxX - minX, maxZ - minZ) / 2) + 60);
    this.mapBase = this.renderMapBase(540);

    // after-dark effects: neon, beacons, searchlights, rain, ley-lines, lanterns…
    this.fx = new CityFX(this, layout, this.group);
    this.fx.build();
  }

  // ---- traffic -------------------------------------------------------------

  _buildTraffic(layout, tpl, meshesOf) {
    const rand = (function mulberry32(a) {
      return function () {
        a |= 0; a = (a + 0x6D2B79F4) | 0;
        let t = Math.imul(a ^ (a >>> 15), 1 | a);
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
      };
    })(20260412);
    const CAR_COLORS = [0xdfe3e8, 0x22262c, 0x8d2f2f, 0x2f4d8d, 0xc9a53f, 0x4a7a5c, 0x7a8894];
    const CAR_HALF = { car: 2.2, taxi: 2.25, bus: 5.75, truck: 5.2 };
    const lanes = [];
    const addLane = (ln) => { lanes.push(ln); return ln; };

    // a run end that falls inside a crossing corridor would put respawning
    // cars on top of an unmanaged intersection — trim those stubs off
    const trimCorridors = (runs, isStreet) => runs.map(([a, b]) => {
      const cs = isStreet ? layout.avenues.map((av) => [av.x - 9.5, av.x + 9.5])
        : layout.streets.map((sz) => [sz - 7.5, sz + 7.5]);
      for (const [lo, hi] of cs) {
        if (a > lo && a < hi) a = hi + 2;
        if (b > lo && b < hi) b = lo - 2;
      }
      return [a, b];
    }).filter(([a, b]) => b - a > 60);

    // avenues: two lanes each way (right-hand traffic), per on-land run
    const avGroups = [];
    for (const av of layout.avenues) {
      const runs = trimCorridors(av.runs?.length ? av.runs : [[av.z0, av.z1]], false);
      for (const [z0, z1] of runs) {
        const g = { x: av.x, z0, z1, lanes: [] };
        for (const [off, dir] of [[2.2, -1], [5.8, -1], [-2.2, 1], [-5.8, 1]]) {
          g.lanes.push(addLane({ x: av.x + off, z: (z0 + z1) / 2, dx: 0, dz: dir,
            half: (z1 - z0) / 2, kind: 'av', prio: 2, inter: [], cars: [] }));
        }
        avGroups.push(g);
      }
    }
    // selected cross streets, clipped around the park greens
    const greens = [layout.park, layout.washsq, layout.battery];
    const streets = layout.streets.filter((z, i) => i % 5 === 2);
    const stGroups = [];
    for (const sz of streets) {
      let runs = [[this.xEdgeAt(sz, -1) + 8, this.xEdgeAt(sz, 1) - 8]];
      for (const r of greens) {
        if (sz < r.z0 - 3 || sz > r.z1 + 3) continue;
        const nxt = [];
        for (const [x0, x1] of runs) {
          if (x1 <= r.x0 - 3 || x0 >= r.x1 + 3) { nxt.push([x0, x1]); continue; }
          if (x0 < r.x0 - 3) nxt.push([x0, r.x0 - 3]);
          if (x1 > r.x1 + 3) nxt.push([r.x1 + 3, x1]);
        }
        runs = nxt;
      }
      runs = trimCorridors(runs, true);
      for (const [x0, x1] of runs) {
        if (x1 - x0 < 90) continue;
        const g = { z: sz, lanes: [] };
        for (const [off, dir] of [[2.6, 1], [-2.6, -1]]) {
          g.lanes.push(addLane({ x: (x0 + x1) / 2, z: sz + off, dx: dir, dz: 0,
            half: (x1 - x0) / 2, kind: 'st', prio: 0, inter: [], cars: [] }));
        }
        stGroups.push(g);
      }
    }
    // broadway carries no lane traffic: it runs ~4° off the avenues, so its
    // pavement overlaps each avenue corridor for ~200m and loop traffic would
    // physically coincide with avenue cars no matter how lanes are offset.
    // The road itself stays; cars flow on avenues and cross streets.

    // intersections: shared objects so opposing approaches agree on occupancy
    // and claims. Each lane stores entries { obj, s, block, stop } with s the
    // intersection center in lane-t space and block/stop the half-depths.
    this._inters = new Map();
    const interAt = (key) => {
      let o = this._inters.get(key);
      if (!o) this._inters.set(key, (o = { blocked: -1, claims: new Map() }));
      return o;
    };
    const attach = (ln, obj, s, block) => {
      const stop = block + 2;
      // the stop line must sit inside the lane, ahead of the respawn point
      if (s > ln.half - 1) return;
      if (s < stop - ln.half + 2) return;
      ln.inter.push({ obj, s, block, stop });
    };
    const AV_HW = 15 / 2 + 2, ST_HW = 11 / 2 + 2;
    // avenue x street
    for (const g of avGroups) {
      for (const sg of stGroups) {
        if (sg.z < g.z0 || sg.z > g.z1) continue;
        if (!sg.lanes.some((l) => Math.abs(g.x - l.x) <= l.half)) continue;
        const obj = interAt(`a${g.x}s${sg.z}`);
        for (const ln of g.lanes) attach(ln, obj, (sg.z - ln.z) * ln.dz, ST_HW);
        for (const ln of sg.lanes) {
          if (Math.abs(g.x - ln.x) <= ln.half) attach(ln, obj, (g.x - ln.x) * ln.dx, AV_HW);
        }
      }
    }

    // spawn cars, spaced out along each lane loop
    const spots = [];
    for (const ln of lanes) {
      const CL = ln.half * 2;
      const cap = Math.max(1, Math.floor((CL - 24) / 34));
      const n = Math.min((ln.kind === 'av' ? 3 : 1) + Math.floor(rand() * 2), cap);
      for (let k = 0; k < n; k++) {
        const r = rand();
        const kind = r < 0.3 ? 'taxi' : r < 0.36 ? 'bus' : r < 0.5 ? 'truck' : 'car';
        spots.push({
          lane: ln,
          t: 0,
          speed: 0,
          vmax: (kind === 'bus' || kind === 'truck') ? 9 + rand() * 3 : 12 + rand() * 9,
          half: CAR_HALF[kind],
          color: CAR_COLORS[Math.floor(rand() * CAR_COLORS.length)],
          kind,
        });
      }
    }
    for (const ln of lanes) {
      const cars = spots.filter((c) => c.lane === ln);
      const step = Math.max(26, Math.min(85, (ln.half * 2 - 20) / cars.length));
      let t = -ln.half + 8 + rand() * 6;
      cars.forEach((c, i) => {
        c.t = Math.min(t + i * step, ln.half - 8);
        c.speed = c.vmax * (0.5 + rand() * 0.5);
      });
      ln.cars = cars;
    }
    // avenues drive first each frame so claims resolve by road priority
    this._lanes = lanes;
    this._laneOrder = lanes.slice().sort((a, b) => b.prio - a.prio);
    this.cars = spots;
    // one instanced mesh set per vehicle type
    this.carMeshes = [];
    const col = new THREE.Color();
    for (const kind of ['car', 'taxi', 'bus', 'truck']) {
      const t = tpl[kind];
      if (!t) continue;
      const list = spots.filter((c) => c.kind === kind);
      if (!list.length) continue;
      meshesOf(t).forEach((p, pi) => {
        const inst = new THREE.InstancedMesh(p.geometry, p.material, list.length);
        inst.frustumCulled = false;
        inst.castShadow = pi < 2;
        this.group.add(inst);
        this.carMeshes.push({ inst, list, part: p, isBody: !!p.material?.name?.includes('body') });
        list.forEach((c, i) => {
          if (c.kind === 'car' && p.material?.name === 'car_body') {
            inst.setColorAt(i, col.setHex(c.color));
          }
        });
        if (inst.instanceColor) inst.instanceColor.needsUpdate = true;
      });
    }
  }

  // ---- map -----------------------------------------------------------------

  renderMapBase(px) {
    const cv = document.createElement('canvas');
    cv.width = cv.height = px;
    const ctx = cv.getContext('2d');
    const half = this.mapHalf || CITY_HALF;
    const sc = px / (half * 2);
    const w2p = (x, z) => [(x + half) * sc, (z + half) * sc];
    const polyPath = (pts, close = true) => {
      ctx.beginPath();
      pts.forEach(([x, z], i) => {
        const [a, b] = w2p(x, z);
        if (i === 0) ctx.moveTo(a, b); else ctx.lineTo(a, b);
      });
      if (close) ctx.closePath();
    };
    const rot = (pts) => pts.map(([x, z]) => {
      const w = this.toWorld(x, z);
      return [w.x, w.z];
    });

    ctx.fillStyle = '#0e1622'; // harbor
    ctx.fillRect(0, 0, px, px);

    // backdrop landmasses (coarse rects from the tracked layout)
    for (const [x0, x1, z0, z1, top] of this.buildings) {
      if (top > 3.5) continue;
      if (x1 - x0 < 40 && z1 - z0 < 40) continue;
      polyPath(rot([[x0, z0], [x1, z0], [x1, z1], [x0, z1]]));
      ctx.fillStyle = '#1d2a38';
      ctx.fill();
    }

    // the island
    polyPath(rot(this._island));
    ctx.fillStyle = '#39404a';
    ctx.fill();
    ctx.strokeStyle = '#5a6472';
    ctx.lineWidth = 1;
    ctx.stroke();

    // park + battery + wash sq
    const rects = [['park', '#33502f'], ['battery', '#2c4429'], ['washsq', '#2c4429']];
    for (const [key, color] of rects) {
      const r = this._rects[key];
      if (!r) continue;
      polyPath(rot([[r.x0, r.z0], [r.x1, r.z0], [r.x1, r.z1], [r.x0, r.z1]]));
      ctx.fillStyle = color;
      ctx.fill();
    }

    // roads
    ctx.strokeStyle = '#2a3140';
    ctx.lineWidth = Math.max(1, 4 * sc);
    ctx.beginPath();
    for (const av of this._L.avenues) {
      const runs = av.runs?.length ? av.runs : [[av.z0, av.z1]];
      for (const [z0, z1] of runs) {
        const [x1, y1] = w2p(...Object.values(this.toWorld(av.x, z0)));
        const [x2, y2] = w2p(...Object.values(this.toWorld(av.x, z1)));
        ctx.moveTo(x1, y1); ctx.lineTo(x2, y2);
      }
    }
    for (const sz of this._L.streets) {
      const park = this._rects.PARK;
      const xe = this.xEdgeAt(sz, -1), xw = this.xEdgeAt(sz, 1);
      const segs = (sz < park.z1 && sz > park.z0)
        ? [[xe, park.x0 - 4], [park.x1 + 4, xw]] : [[xe, xw]];
      for (const [a, b] of segs) {
        const [x1, y1] = w2p(...Object.values(this.toWorld(a, sz)));
        const [x2, y2] = w2p(...Object.values(this.toWorld(b, sz)));
        ctx.moveTo(x1, y1); ctx.lineTo(x2, y2);
      }
    }
    ctx.stroke();
    // broadway + bridges
    ctx.strokeStyle = '#3a4354';
    ctx.lineWidth = Math.max(1, 3 * sc);
    ctx.beginPath();
    for (const [x0, z0, x1, z1] of this._L.broadway) {
      const [ax, az] = w2p(...Object.values(this.toWorld(x0, z0)));
      const [bx, bz] = w2p(...Object.values(this.toWorld(x1, z1)));
      ctx.moveTo(ax, az); ctx.lineTo(bx, bz);
    }
    ctx.stroke();
    ctx.strokeStyle = '#5a5245';
    for (const b of this._L.bridges) {
      const [ax, az] = w2p(...Object.values(this.toWorld(b.p0[0], b.p0[1])));
      const [bx, bz] = w2p(...Object.values(this.toWorld(b.p1[0], b.p1[1])));
      ctx.beginPath(); ctx.moveTo(ax, az); ctx.lineTo(bx, bz); ctx.stroke();
    }
    return cv;
  }

  // ---- frame update --------------------------------------------------------

  update(dt, playerPos, elapsed, sky) {
    if (!this.built || !this._L) return;
    const night = 1 - sky.daylight;
    cityTime.value = elapsed;
    if (this._mirror) {
      const u = this._mirror.material.uniforms;
      if (u.uTime) u.uTime.value = elapsed;
      if (u.uWet) u.uWet.value = 0.3 + 0.55 * night + 0.3 * (this.fx?.rain || 0);
    }
    this.fx?.update(dt, this._cam.set(playerPos.x, playerPos.y + 1.6, playerPos.z), elapsed, sky);

    for (const s of this.sites) {
      if (s.discovered) continue;
      if (Math.hypot(playerPos.x - s.x, playerPos.z - s.z) < s.discoverR) {
        s.discovered = true;
        this.onDiscover?.(s);
      }
    }

    // windows + street lamps glow up at night
    const glow = Math.pow(night, 1.3);
    for (const m of this._nightMats) m.emissiveIntensity = glow * 2.1;
    if (this._lampMat) this._lampMat.emissiveIntensity = 0.4 + night * 3.2;

    for (const b of this.billboards) b.mesh.material.map.offset.x += b.speed * dt;

    // traffic (grid-space lanes; the group rotation maps them out).
    // Car-following keeps bumper gaps; intersections are claimed first-come
    // with avenues decided first, and nobody enters a box that's occupied.
    if (this._lanes) {
      dt = Math.min(dt, 0.1);
      const { _m: m, _q: q, _e: e, _v: v, _s: s } = this;
      const frame = (this._frame = (this._frame || 0) + 1);
      const ACC = 3.0, DEC = 4.0, EMERG = 7.0, MIN_GAP = 1.4;

      // 1) mark intersection boxes that currently hold a car
      for (const ln of this._lanes) {
        for (const it of ln.inter) {
          for (const c of ln.cars) {
            if (Math.abs(c.t - it.s) < it.block) { it.obj.blocked = frame; break; }
          }
        }
      }

      // 2) drive: front cars first, so followers clamp against moved leaders
      for (const ln of this._laneOrder) {
        const cars = ln.cars.slice().sort((a, b) => a.t - b.t);
        for (let i = cars.length - 1; i >= 0; i--) {
          const c = cars[i];
          const hasLead = i < cars.length - 1;
          const lead = hasLead ? cars[i + 1] : null;
          const gap = hasLead ? lead.t - c.t - c.half - lead.half : 1e9;
          let vT = Math.min(c.vmax, Math.sqrt(2 * DEC * Math.max(0, gap - MIN_GAP)));
          let yieldD = null;
          // claim range grows with speed so a claim always leaves the other
          // road room to brake to its stop line
          const commitD = Math.max(16, (c.speed * c.speed) / (2 * EMERG) + 6);

          for (const it of ln.inter) {
            const obj = it.obj;
            const d = it.s - it.stop - c.t;   // distance to the stop line
            if (d < -0.6) {                   // committed: keep the claim until
              if (c.t < it.s + it.block + c.half + 1) obj.claims.set(ln, c); // tail clears
              continue;
            }
            if (obj.blocked === frame) {      // someone is physically inside
              vT = Math.min(vT, Math.sqrt(2 * EMERG * Math.max(0, d)));
              if (yieldD === null || d < yieldD) yieldD = d;
              continue;
            }
            let claimed = false;
            for (const ln2 of obj.claims.keys()) {
              if (ln2 !== ln) { claimed = true; break; }
            }
            if (claimed) {                    // another road is heading in
              vT = Math.min(vT, Math.sqrt(2 * EMERG * Math.max(0, d)));
              if (yieldD === null || d < yieldD) yieldD = d;
              continue;
            }
            if (d < commitD) obj.claims.set(ln, c); // ours — claim and go
          }

          c.speed += Math.min(Math.max(vT - c.speed, -6 * dt), ACC * dt);
          if (c.speed < 0) c.speed = 0;
          let advance = c.speed * dt;
          if (yieldD !== null && advance > yieldD) advance = Math.max(0, yieldD);
          c.t += advance;
          if (c.t > ln.half) {
            // reached the lane end: respawn at the start if the entry is clear
            const rear = cars[0] !== c ? cars[0] : null;
            const clear = !rear || rear.t - (-ln.half) > rear.half + c.half + 1;
            if (clear) { c.t = -ln.half + 0.5; }
            else { c.t = ln.half - 0.2; c.speed = 0; }
          }
          if (hasLead) {                      // never overlap the leader
            const ahead = lead.t - c.t;
            const minGap = c.half + lead.half + 0.4;
            if (ahead >= 0 && ahead < minGap) { // leader ahead and too close
              let tgt = Math.max(-ln.half + 0.5, lead.t - minGap);
              if (yieldD !== null) tgt = Math.min(tgt, c.t + Math.max(0, yieldD));
              c.t = tgt;
              c.speed = Math.min(c.speed, lead.speed);
            }
          }
        }
      }

      // 3) claims live for one frame only
      for (const obj of this._inters.values()) obj.claims.clear();

      // 4) instance matrices
      for (const { inst, list } of this.carMeshes) {
        list.forEach((c, i) => {
          v.set(c.lane.x + c.lane.dx * c.t, 2.06, c.lane.z + c.lane.dz * c.t);
          e.set(0, Math.atan2(c.lane.dx, c.lane.dz), 0);
          q.setFromEuler(e);
          s.setScalar(1);
          m.compose(v, q, s);
          inst.setMatrixAt(i, m);
        });
        inst.instanceMatrix.needsUpdate = true;
      }
    }

    // ferries
    if (this.ferry) {
      const f = this.ferry;
      f.ph += f.w * dt;
      const x = f.cx + Math.cos(f.ph) * f.rx;
      const z = f.cz + Math.sin(f.ph) * f.rz;
      f.g.position.set(x, f.y, z);
      const tx = f.cx + Math.cos(f.ph + 0.05) * f.rx;
      const tz = f.cz + Math.sin(f.ph + 0.05) * f.rz;
      f.g.rotation.y = Math.atan2(tx - x, tz - z) - Math.PI / 2;
      f.g.position.y = f.y + Math.sin(elapsed * 0.7) * 0.18;
    }

    // air traffic
    for (const h of this.helis) {
      h.ph += h.w * dt;
      h.g.position.set(Math.cos(h.ph) * h.r, 2 + h.h + Math.sin(elapsed * 0.9 + h.r) * 4, Math.sin(h.ph) * h.r);
      h.g.rotation.set(0.12, -h.ph + (h.w > 0 ? -Math.PI / 2 : Math.PI / 2), 0);
      if (h.rotor) h.rotor.rotation.y = elapsed * 22;
    }
  }
}
