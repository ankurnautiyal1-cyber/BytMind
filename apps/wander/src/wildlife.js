import * as THREE from 'three';
import { WORLD_HALF } from './terrain.js';
import { mulberry32 } from './noise.js';

// Herds of grazing animals (sheep, deer, cows) built from instanced parts.
// Each animal runs a tiny state machine: idle → graze → wander, and flees
// when the player gets close.

const SPECIES = [
  { body: 0xe9e2d4, head: 0x453b32, leg: 0x453b32, scale: 0.8, slim: 1.0, flee: 5.5 },  // sheep
  { body: 0xa5713d, head: 0x7d552b, leg: 0x5f4020, scale: 1.05, slim: 0.78, flee: 8 },  // deer
  { body: 0x8a6a4a, head: 0x5c442c, leg: 0x463626, scale: 1.25, slim: 1.15, flee: 6.5 },// cow
];
const HERD_COUNT = 15;

export class Wildlife {
  constructor(terrain, scene, seed) {
    this.terrain = terrain;
    const rand = mulberry32((seed ^ 0x1234abcd) >>> 0);
    this.rand = rand;

    const bodyGeo = new THREE.CapsuleGeometry(0.42, 1.0, 4, 12);
    bodyGeo.rotateX(Math.PI / 2); // lie along z, front = -z
    const headGeo = new THREE.BoxGeometry(0.36, 0.38, 0.56);
    headGeo.translate(0, 0, -0.22); // pivot at the neck
    const legGeo = new THREE.BoxGeometry(0.15, 0.62, 0.15);
    legGeo.translate(0, -0.31, 0); // pivot at the hip
    const partMat = () => new THREE.MeshStandardMaterial({ roughness: 1 });

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

    this.bodyMesh = new THREE.InstancedMesh(bodyGeo, partMat(), animals.length);
    this.headMesh = new THREE.InstancedMesh(headGeo, partMat(), animals.length);
    this.legMesh = new THREE.InstancedMesh(legGeo, partMat(), animals.length * 4);
    for (const m of [this.bodyMesh, this.headMesh, this.legMesh]) {
      m.frustumCulled = false;
      m.castShadow = true;
      scene.add(m);
    }
    const col = new THREE.Color();
    animals.forEach((a, i) => {
      const sp = SPECIES[a.sp];
      const shade = 0.88 + rand() * 0.24;
      this.bodyMesh.setColorAt(i, col.setHex(sp.body).multiplyScalar(shade));
      this.headMesh.setColorAt(i, col.setHex(sp.head).multiplyScalar(shade));
      col.setHex(sp.leg).multiplyScalar(shade);
      for (let k = 0; k < 4; k++) this.legMesh.setColorAt(i * 4 + k, col);
    });
    this.bodyMesh.instanceColor.needsUpdate = true;
    this.headMesh.instanceColor.needsUpdate = true;
    this.legMesh.instanceColor.needsUpdate = true;

    this._m = new THREE.Matrix4();
    this._q = new THREE.Quaternion();
    this._qt = new THREE.Quaternion();
    this._e = new THREE.Euler();
    this._v = new THREE.Vector3();
    this._s = new THREE.Vector3();
    this._time = 0;
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

  update(dt, playerPos, time) {
    this._time = time;
    const { _m: m, _q: q, _qt: qt, _e: e, _v: v, _s: s, terrain } = this;

    for (let i = 0; i < this.animals.length; i++) {
      const a = this.animals[i];
      const sp = SPECIES[a.sp];
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
        targetSpeed = 5.2;
        if (a.timer <= 0) { a.state = 'idle'; a.timer = 2 + Math.random() * 3; }
      } else if (a.state === 'wander') {
        targetSpeed = 1.5;
        const dTarget = Math.hypot(a.tx - a.x, a.tz - a.z);
        if (dTarget < 1.5 || a.timer <= 0) { a.state = 'idle'; a.timer = 1 + Math.random() * 3; }
      } else if (a.state === 'graze') {
        if (a.timer <= 0) { a.state = 'wander'; a.timer = 14; this._pickTarget(a); }
      } else { // idle
        if (a.timer <= 0) { a.state = 'graze'; a.timer = 3 + Math.random() * 4; }
      }

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
      const headTarget = a.state === 'graze' ? 1 : 0;
      a.head += (headTarget - a.head) * Math.min(1, 3 * dt);

      const y = terrain.heightAt(a.x, a.z);
      const slim = sp.slim * a.s;
      e.set(0, a.yaw, 0);
      q.setFromEuler(e);

      // body
      v.set(a.x, y + 0.64 * a.s, a.z);
      s.set(slim, a.s * 0.95, a.s);
      m.compose(v, q, s);
      this.bodyMesh.setMatrixAt(i, m);

      // head (pivot at neck, dips down while grazing with a chew bob)
      v.set(0, 0.86 * a.s, -0.62 * a.s).applyQuaternion(q);
      v.x += a.x; v.y += y; v.z += a.z;
      const chew = a.state === 'graze' ? Math.sin(time * 7 + i * 1.7) * 0.06 : 0;
      qt.setFromEuler(e.set(-(0.2 + a.head * 1.05) + chew, 0, 0));
      qt.premultiply(q);
      s.setScalar(a.s * (a.sp === 1 ? 0.92 : 1));
      m.compose(v, qt, s);
      this.headMesh.setMatrixAt(i, m);

      // legs: diagonal pairs swing together
      const walkK = Math.min(1, a.speed / 1.4);
      const off = [0, Math.PI, Math.PI, 0];
      const corners = [[-0.26, -0.52], [0.26, -0.52], [-0.26, 0.52], [0.26, 0.52]];
      for (let k = 0; k < 4; k++) {
        v.set(corners[k][0] * slim, 0.6 * a.s, corners[k][1] * a.s).applyQuaternion(q);
        v.x += a.x; v.y += y; v.z += a.z;
        const swing = Math.sin(a.legPhase + off[k]) * 0.5 * walkK;
        qt.setFromEuler(e.set(swing, 0, 0));
        qt.premultiply(q);
        s.setScalar(a.s);
        m.compose(v, qt, s);
        this.legMesh.setMatrixAt(i * 4 + k, m);
      }
    }

    this.bodyMesh.instanceMatrix.needsUpdate = true;
    this.headMesh.instanceMatrix.needsUpdate = true;
    this.legMesh.instanceMatrix.needsUpdate = true;
  }
}
