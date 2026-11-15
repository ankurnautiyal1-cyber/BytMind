import * as THREE from 'three';
import { glowSprite } from './effects.js';

// Will-o'-the-wisps: after dark, three pale lights drift ahead of you toward the
// nearest landmark you haven't found yet. Follow them, or don't — they fade at
// dawn and when nothing is left to find nearby.

const N = 3;

export class Wisps {
  constructor(terrain, scene, pois) {
    this.terrain = terrain;
    this.pois = pois;
    this.group = new THREE.Group();
    scene.add(this.group);
    this.items = [];
    const cols = [0x9ff7e0, 0xb9a8ff, 0x9fd8ff];
    for (let i = 0; i < N; i++) {
      const spr = glowSprite(cols[i], 2.4 - i * 0.35);
      spr.material.opacity = 0;
      this.group.add(spr);
      this.items.push({ spr, p: new THREE.Vector3(), ph: i * 2.1, init: false });
    }
    this.light = new THREE.PointLight(0x9ff7e0, 0, 12, 1.8);
    this.group.add(this.light);
    this.vis = 0;
    this._dir = new THREE.Vector3();
  }

  nearestTarget(p) {
    let best = null, bd = 1400;
    for (const s of this.pois.sites) {
      if (s.discovered) continue;
      const d = Math.hypot(s.x - p.x, s.z - p.z);
      if (d < bd && d > 45) { bd = d; best = s; }
    }
    return best ? { s: best, d: bd } : null;
  }

  update(dt, playerPos, elapsed, sky) {
    const night = Math.pow(1 - sky.daylight, 1.5);
    const t = this.nearestTarget(playerPos);
    const want = t ? night : 0;
    this.vis += (want - this.vis) * Math.min(1, dt * 0.8);
    this.group.visible = this.vis > 0.01;
    if (!this.group.visible) return;

    const dir = this._dir.set(0, 0, 0);
    if (t) dir.set(t.s.x - playerPos.x, 0, t.s.z - playerPos.z).normalize();
    for (let i = 0; i < N; i++) {
      const it = this.items[i];
      const lead = 12 + i * 4.5;
      const sway = Math.sin(elapsed * 0.6 + it.ph) * 3.5;
      const tx = playerPos.x + dir.x * lead - dir.z * sway;
      const tz = playerPos.z + dir.z * lead + dir.x * sway;
      if (!it.init) { it.p.set(tx, 0, tz); it.init = true; }
      it.p.x += (tx - it.p.x) * Math.min(1, dt * 1.1);
      it.p.z += (tz - it.p.z) * Math.min(1, dt * 1.1);
      const gy = this.terrain.heightAt(it.p.x, it.p.z);
      const y = Math.max(gy, 0) + 1.3 + 0.5 * Math.sin(elapsed * 1.4 + it.ph) + i * 0.35;
      it.spr.position.set(it.p.x, y, it.p.z);
      it.spr.material.opacity = this.vis * (0.65 + 0.3 * Math.sin(elapsed * 2.3 + it.ph));
      if (i === 0) {
        this.light.position.set(it.p.x, y, it.p.z);
        this.light.intensity = 0.9 * this.vis;
      }
    }
  }
}
