import * as THREE from 'three';

// A small pool of autumn leaves that tumble down near the player and dissolve
// just above the ground (nothing rests on or blows along the ground), then
// respawn overhead.

const COUNT = 120;
const COLORS = [0xb0783a, 0xc2883c, 0x9c8a3a, 0x71893c, 0xa5602f, 0x8f9a46];

export class Leaves {
  constructor(terrain, scene, wind, seed) {
    this.terrain = terrain;
    this.wind = wind;

    const geo = new THREE.PlaneGeometry(0.16, 0.22);
    const mat = new THREE.MeshStandardMaterial({
      roughness: 1,
      side: THREE.DoubleSide,
      emissive: 0x9a7b4a,
      emissiveIntensity: 0.12,
    });
    this.mesh = new THREE.InstancedMesh(geo, mat, COUNT);
    this.mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.mesh.frustumCulled = false;
    scene.add(this.mesh);

    const col = new THREE.Color();
    this.items = [];
    for (let i = 0; i < COUNT; i++) {
      this.items.push({
        x: 0, y: -100, z: 0,
        vy: 0.7 + Math.random() * 0.9,
        ph: Math.random() * Math.PI * 2,
        spin: 1 + Math.random() * 2.5,
        s: 0.8 + Math.random() * 0.7,
        state: 'fall',
        fade: 1,
      });
      this.mesh.setColorAt(i, col.setHex(COLORS[i % COLORS.length]).multiplyScalar(0.85 + Math.random() * 0.3));
    }
    this.mesh.instanceColor.needsUpdate = true;

    this._m = new THREE.Matrix4();
    this._q = new THREE.Quaternion();
    this._e = new THREE.Euler();
    this._v = new THREE.Vector3();
    this._s = new THREE.Vector3();
  }

  respawnNear(it, px, pz) {
    const a = Math.random() * Math.PI * 2;
    const r = 12 + Math.random() * 30;
    it.x = px + Math.cos(a) * r;
    it.z = pz + Math.sin(a) * r;
    it.y = this.terrain.heightAt(it.x, it.z) + 6 + Math.random() * 8;
    it.fade = 1;
  }

  update(dt, playerPos, time) {
    const w = this.wind.value;
    const { _m: m, _q: q, _e: e, _v: v, _s: s } = this;
    for (let i = 0; i < COUNT; i++) {
      const it = this.items[i];
      it.y -= it.vy * dt;
      it.x += (Math.sin(time * 1.3 + it.ph) * 0.9 + w * 1.4) * dt;
      it.z += Math.cos(time * 1.1 + it.ph) * 0.7 * dt;
      const g = this.terrain.heightAt(it.x, it.z);
      // dissolve just above the ground instead of resting on it
      if (it.y <= g + 0.85) it.fade -= dt * 1.7;
      if (it.fade <= 0 || Math.hypot(it.x - playerPos.x, it.z - playerPos.z) > 65) {
        this.respawnNear(it, playerPos.x, playerPos.z);
      }
      e.set(time * it.spin + it.ph, it.ph + time * 0.7, time * 0.9);
      q.setFromEuler(e);
      v.set(it.x, it.y, it.z);
      s.setScalar(it.s * Math.max(0.001, it.fade));
      m.compose(v, q, s);
      this.mesh.setMatrixAt(i, m);
    }
    this.mesh.instanceMatrix.needsUpdate = true;
  }
}
