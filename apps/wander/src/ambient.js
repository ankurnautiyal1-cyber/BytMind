import * as THREE from 'three';
import { WATER_LEVEL, WORLD_HALF } from './terrain.js';
import { mulberry32 } from './noise.js';

// Ambient life: circling bird flocks (day), butterflies over meadows (day)
// and fireflies near the ground (night). The bug pools follow the player
// the way the leaf pool does.

// Bend verts away from the body axis for a wing flap; phase comes from the
// instance position, like the tree sway in scenery.js.
function flapMaterial(mat, timeU, strength, freq) {
  mat.onBeforeCompile = (shader) => {
    shader.uniforms.uTime = timeU;
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nuniform float uTime;')
      .replace('#include <begin_vertex>', `#include <begin_vertex>
      #ifdef USE_INSTANCING
        float ph = instanceMatrix[3][0] * 0.37 + instanceMatrix[3][2] * 0.29;
        float flap = sin(uTime * ${freq.toFixed(1)} + ph);
        transformed.y += abs(transformed.x) * flap * ${strength.toFixed(2)};
      #endif
    `);
  };
  return mat;
}

function birdGeometry() {
  // stylized bird: slim body + two swept wings, all in one buffer
  const verts = new Float32Array([
    // body (elongated diamond)
    0, 0, -0.55, -0.07, 0.03, 0.1, 0.07, 0.03, 0.1,
    0, 0, -0.55, 0.07, -0.02, 0.1, -0.07, -0.02, 0.1,
    // left wing
    -0.07, 0.02, 0.05, -0.75, 0.05, 0.28, -0.72, 0.0, -0.05,
    // right wing
    0.07, 0.02, 0.05, 0.72, 0.0, -0.05, 0.75, 0.05, 0.28,
  ]);
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(verts, 3));
  geo.computeVertexNormals();
  return geo;
}

const FIRE_COUNT = 70;
const BFLY_COUNT = 46;

export class Ambient {
  constructor(terrain, scene, seed, timeU, camera) {
    this.terrain = terrain;
    this.camera = camera;
    const rand = mulberry32((seed ^ 0x33ba7d5) >>> 0);

    // ---------- bird flocks ----------
    this.flocks = [];
    const flockMat = flapMaterial(
      new THREE.MeshStandardMaterial({ color: 0x2e3440, roughness: 1, side: THREE.DoubleSide }),
      timeU, 0.85, 9.0,
    );
    let birdTotal = 0;
    for (let f = 0; f < 6; f++) {
      let ax = 0, az = 0, ok = false;
      for (let t = 0; t < 400 && !ok; t++) {
        ax = (rand() * 2 - 1) * WORLD_HALF * 0.7;
        az = (rand() * 2 - 1) * WORLD_HALF * 0.7;
        ok = terrain.heightAt(ax, az) > WATER_LEVEL + 2;
      }
      const n = 6 + Math.floor(rand() * 4);
      const flock = {
        cx: ax, cz: az, cy: terrain.heightAt(ax, az) + 32 + rand() * 26,
        r: 26 + rand() * 34, w: (0.1 + rand() * 0.1) * (rand() > 0.5 ? 1 : -1),
        drift: rand() * Math.PI * 2,
        members: [],
      };
      for (let b = 0; b < n; b++) {
        flock.members.push({
          ang: rand() * Math.PI * 2,
          rr: flock.r * (0.65 + rand() * 0.45),
          yy: (rand() - 0.5) * 7,
          ph: rand() * Math.PI * 2,
          sz: 0.75 + rand() * 0.5,
        });
      }
      birdTotal += n;
      this.flocks.push(flock);
    }
    this.birdMesh = new THREE.InstancedMesh(birdGeometry(), flockMat, birdTotal);
    this.birdMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.birdMesh.frustumCulled = false;
    scene.add(this.birdMesh);

    // ---------- fireflies (night) — camera-facing additive quads ----------
    this.fireflyMesh = new THREE.InstancedMesh(
      new THREE.PlaneGeometry(0.16, 0.16),
      new THREE.MeshBasicMaterial({
        color: new THREE.Color(0xd7ff9e).multiplyScalar(2.8), transparent: true, opacity: 0,
        blending: THREE.AdditiveBlending, depthWrite: false,
      }),
      FIRE_COUNT,
    );
    this.fireflyMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.fireflyMesh.frustumCulled = false;
    scene.add(this.fireflyMesh);

    // ---------- butterflies (day) — flapping colored wings ----------
    this.butterflyMesh = new THREE.InstancedMesh(
      new THREE.PlaneGeometry(0.26, 0.2),
      flapMaterial(
        new THREE.MeshStandardMaterial({
          color: 0xffffff, roughness: 1, side: THREE.DoubleSide,
          transparent: true, opacity: 0.95,
        }),
        timeU, 1.35, 16.0,
      ),
      BFLY_COUNT,
    );
    this.butterflyMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.butterflyMesh.frustumCulled = false;
    scene.add(this.butterflyMesh);
    const bColors = [0xe8875a, 0xe8c15a, 0x9fd0ff, 0xd18fd6, 0xf2f2f2];
    const col = new THREE.Color();
    for (let i = 0; i < BFLY_COUNT; i++) {
      this.butterflyMesh.setColorAt(i, col.setHex(bColors[i % bColors.length]));
    }
    this.butterflyMesh.instanceColor.needsUpdate = true;

    const mkBug = (firefly) => ({
      x: 0, y: -100, z: 0,
      ph: rand() * Math.PI * 2,
      w1: 0.6 + rand() * 0.8, w2: 0.6 + rand() * 0.8,
      sp: 0.5 + rand() * 0.8,
      firefly,
    });
    this.fireflies = Array.from({ length: FIRE_COUNT }, () => mkBug(true));
    this.butterflies = Array.from({ length: BFLY_COUNT }, () => mkBug(false));

    this._m = new THREE.Matrix4();
    this._q = new THREE.Quaternion();
    this._e = new THREE.Euler();
    this._v = new THREE.Vector3();
    this._s = new THREE.Vector3();
  }

  _respawnBug(it, px, pz) {
    const a = Math.random() * Math.PI * 2;
    const r = 8 + Math.random() * 26;
    it.x = px + Math.cos(a) * r;
    it.z = pz + Math.sin(a) * r;
    const g = this.terrain.heightAt(it.x, it.z);
    if (g < WATER_LEVEL + 0.4) { it.y = -100; return; }
    it.y = g + (it.firefly ? 0.6 + Math.random() * 1.8 : 0.8 + Math.random() * 1.6);
  }

  update(dt, playerPos, elapsed, daylight) {
    const { _m: m, _q: q, _e: e, _v: v, _s: s } = this;

    // ---- birds: circle the flock anchor, banked along the tangent ----
    let bi = 0;
    for (const flock of this.flocks) {
      flock.drift += dt * 0.05;
      flock.cx += Math.cos(flock.drift) * dt * 1.2;
      flock.cz += Math.sin(flock.drift * 0.8) * dt * 1.2;
      for (const mem of flock.members) {
        mem.ang += flock.w * dt;
        const x = flock.cx + Math.cos(mem.ang) * mem.rr;
        const z = flock.cz + Math.sin(mem.ang) * mem.rr;
        const y = flock.cy + mem.yy + Math.sin(elapsed * 0.7 + mem.ph) * 1.5;
        const heading = mem.ang + (flock.w > 0 ? Math.PI / 2 : -Math.PI / 2);
        e.set(0, -heading, Math.sin(elapsed * 9 + mem.ph) * 0.25 + 0.3);
        q.setFromEuler(e);
        v.set(x, y, z);
        s.setScalar(mem.sz);
        m.compose(v, q, s);
        this.birdMesh.setMatrixAt(bi++, m);
      }
    }
    this.birdMesh.instanceMatrix.needsUpdate = true;
    this.birdMesh.visible = daylight > 0.25;

    // ---- fireflies (night): blink, drift, face the camera ----
    const nightAmount = 1 - daylight;
    const fireflyOn = nightAmount > 0.45;
    this.fireflyMesh.material.opacity = Math.min(1, Math.pow(nightAmount, 2)) * 0.95;
    this.butterflyMesh.visible = daylight > 0.4;

    for (let i = 0; i < FIRE_COUNT; i++) {
      const it = this.fireflies[i];
      if (!fireflyOn || it.y < -50) {
        if (!fireflyOn && Math.random() < 0.02) this._respawnBug(it, playerPos.x, playerPos.z);
        m.makeScale(0, 0, 0);
        this.fireflyMesh.setMatrixAt(i, m);
        continue;
      }
      it.x += Math.sin(elapsed * it.w1 + it.ph) * it.sp * dt;
      it.z += Math.cos(elapsed * it.w2 + it.ph * 1.3) * it.sp * dt;
      const y = it.y + Math.sin(elapsed * 0.9 + it.ph) * 0.5;
      const blink = 0.55 + 0.45 * Math.sin(elapsed * 2.4 + it.ph * 3);
      v.set(it.x, y, it.z);
      s.setScalar(blink);
      m.compose(v, this.camera.quaternion, s);
      this.fireflyMesh.setMatrixAt(i, m);
      if (Math.hypot(it.x - playerPos.x, it.z - playerPos.z) > 60) {
        this._respawnBug(it, playerPos.x, playerPos.z);
      }
    }
    this.fireflyMesh.instanceMatrix.needsUpdate = true;

    // ---- butterflies (day): flutter above the meadow ----
    for (let i = 0; i < BFLY_COUNT; i++) {
      const it = this.butterflies[i];
      if (it.y < -50) {
        if (Math.random() < 0.02) this._respawnBug(it, playerPos.x, playerPos.z);
        m.makeScale(0, 0, 0);
        this.butterflyMesh.setMatrixAt(i, m);
        continue;
      }
      it.x += Math.sin(elapsed * it.w1 + it.ph) * it.sp * dt;
      it.z += Math.cos(elapsed * it.w2 + it.ph * 1.3) * it.sp * dt;
      const y = it.y + Math.abs(Math.sin(elapsed * 3 + it.ph)) * 0.35;
      e.set(-Math.PI / 2, 0, Math.sin(elapsed + it.ph) * 0.4);
      q.setFromEuler(e);
      v.set(it.x, y, it.z);
      s.setScalar(1);
      m.compose(v, q, s);
      this.butterflyMesh.setMatrixAt(i, m);
      if (Math.hypot(it.x - playerPos.x, it.z - playerPos.z) > 60) {
        this._respawnBug(it, playerPos.x, playerPos.z);
      }
    }
    this.butterflyMesh.instanceMatrix.needsUpdate = true;
  }
}
