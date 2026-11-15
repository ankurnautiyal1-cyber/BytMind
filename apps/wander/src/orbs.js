import * as THREE from 'three';
import { WATER_LEVEL, WORLD_HALF } from './terrain.js';
import { mulberry32 } from './noise.js';
import { glowSprite } from './effects.js';

// Spirit shards: ~2 per landmark plus a scattering across the wilds.
// They bob and hum; walk within reach to collect. Progress persists
// per seed via localStorage (wired by main.js).

const TOTAL = 40;
const COLORS = [0x8be9ff, 0xa5f0c8, 0xd0b3ff, 0xffd9a8];

export class Orbs {
  constructor(terrain, scene, seed, pois, saved = []) {
    this.terrain = terrain;
    this.onCollect = null;
    this.onComplete = null;
    this.collected = new Set(saved);
    const rand = mulberry32(((seed ^ 0x0bb5ca7d) >>> 0));

    // one shard near every landmark, the rest scattered across the wilds
    const spots = [];
    for (const s of pois.sites) {
      const a = rand() * Math.PI * 2;
      const d = 9 + rand() * 16;
      spots.push({ x: s.x + Math.cos(a) * d, z: s.z + Math.sin(a) * d, site: s });
    }
    let guard = 0;
    while (spots.length < TOTAL && guard++ < 20000) {
      const x = (rand() * 2 - 1) * WORLD_HALF * 0.88;
      const z = (rand() * 2 - 1) * WORLD_HALF * 0.88;
      const h = terrain.heightAt(x, z);
      if (h < WATER_LEVEL + 1.2 || terrain.slopeAt(x, z) > 0.6) continue;
      if (spots.some((p) => Math.hypot(p.x - x, p.z - z) < 90)) continue;
      spots.push({ x, z, site: null });
    }

    // a faceted hexagonal crystal: pointed top and bottom, glowing from within
    const geo = new THREE.LatheGeometry([
      new THREE.Vector2(0, -0.52), new THREE.Vector2(0.2, -0.16),
      new THREE.Vector2(0.2, 0.18), new THREE.Vector2(0, 0.62),
    ], 6);
    const mat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.12, flatShading: true });
    mat.onBeforeCompile = (shader) => {
      shader.fragmentShader = shader.fragmentShader.replace('#include <emissivemap_fragment>',
        `#include <emissivemap_fragment>
         float rim = pow(1.0 - clamp(dot(normalize(normal), normalize(vViewPosition)), 0.0, 1.0), 2.0);
         totalEmissiveRadiance = diffuseColor.rgb * (1.6 + 2.4 * rim);`);
    };
    this.mesh = new THREE.InstancedMesh(geo, mat, spots.length);
    this.mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.mesh.frustumCulled = false;
    scene.add(this.mesh);

    spots.forEach((p, i) => this.mesh.setColorAt(i, new THREE.Color(COLORS[i % COLORS.length])));
    this.mesh.instanceColor.needsUpdate = true;

    // sparkles orbiting every shard, and a pooled burst for collection
    this._initSparkles(scene, spots, COLORS);
    this._initBurst(scene);

    // per-shard glow halo (billboard sprites)
    this.halos = spots.map((p, i) => {
      const c = COLORS[i % COLORS.length];
      const spr = glowSprite(c, 2.2);
      spr.position.set(p.x, terrain.heightAt(p.x, p.z) + 1.4, p.z);
      scene.add(spr);
      return spr;
    });

    this.items = spots.map((p, i) => ({
      x: p.x, z: p.z,
      y: terrain.heightAt(p.x, p.z) + 1.4,
      phase: rand() * Math.PI * 2,
      id: i,
      site: p.site,
      taken: this.collected.has(i),
    }));
    this.total = this.items.length;
    this._m = new THREE.Matrix4();
    this._q = new THREE.Quaternion();
    this._e = new THREE.Euler();
    this._v = new THREE.Vector3();
    this._s = new THREE.Vector3();
    this._done = false;
  }

  get count() {
    return this.collected.size;
  }

  collectAll() {
    for (const it of this.items) {
      if (!it.taken) {
        it.taken = true;
        this.collected.add(it.id);
      }
    }
  }

  update(dt, playerPos, elapsed) {
    for (let i = 0; i < this.items.length; i++) {
      const it = this.items[i];
      if (it.taken) {
        this._m.makeScale(0, 0, 0);
        this.mesh.setMatrixAt(i, this._m);
        this.halos[i].visible = false;
        continue;
      }
      if (!this._done) {
        const dx = playerPos.x - it.x;
        const dy = playerPos.y + 1.0 - it.y;
        const dz = playerPos.z - it.z;
        if (dx * dx + dy * dy + dz * dz < 6.2) { // ~2.5 m
          it.taken = true;
          this.collected.add(it.id);
          this._burst(it.x, it.y + Math.sin(elapsed * 1.6 + it.phase) * 0.22, it.z, COLORS[it.id % COLORS.length]);
          this.onCollect?.(it);
          if (this.collected.size >= this.total) {
            this._done = true;
            this.onComplete?.();
          }
          continue;
        }
      }
      const y = it.y + Math.sin(elapsed * 1.6 + it.phase) * 0.22;
      this._e.set(elapsed * 0.9 + it.phase, elapsed * 1.3 + it.phase, 0);
      this._q.setFromEuler(this._e);
      this._v.set(it.x, y, it.z);
      this._s.setScalar(1);
      this._m.compose(this._v, this._q, this._s);
      this.mesh.setMatrixAt(i, this._m);
      this.halos[i].position.y = y;
      this.halos[i].material.opacity = 0.22 + 0.1 * Math.sin(elapsed * 2 + it.phase);
    }
    this.mesh.instanceMatrix.needsUpdate = true;
    this._updateSparkles(elapsed);
    this._updateBurst(dt);
  }

  // ---- orbiting sparkles ----
  _initSparkles(scene, spots, colors) {
    const per = 5;
    const n = spots.length * per;
    this._sp = { n, per, centers: spots };
    const pos = new Float32Array(n * 3);
    const col = new Float32Array(n * 3);
    const c = new THREE.Color();
    for (let i = 0; i < n; i++) {
      c.setHex(colors[Math.floor(i / per) % colors.length]).multiplyScalar(2.6);
      col.set([c.r, c.g, c.b], i * 3);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    g.setAttribute('color', new THREE.BufferAttribute(col, 3));
    this._spPos = pos;
    this.sparkles = new THREE.Points(g, new THREE.ShaderMaterial({
      uniforms: { uPR: { value: Math.min(devicePixelRatio, 2) } },
      vertexShader: `
        attribute vec3 color; varying vec3 vC; uniform float uPR;
        void main() {
          vC = color;
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * mv;
          gl_PointSize = min(uPR * 38.0 / -mv.z, 14.0 * uPR);
        }`,
      fragmentShader: `
        varying vec3 vC;
        void main() {
          vec2 q = gl_PointCoord * 2.0 - 1.0;
          float d = exp(-dot(q, q) * 4.0);
          gl_FragColor = vec4(vC * d, 1.0);
        }`,
      transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, fog: false,
    }));
    this.sparkles.frustumCulled = false;
    scene.add(this.sparkles);
  }

  _updateSparkles(t) {
    const { n, per } = this._sp;
    const pos = this._spPos;
    for (let i = 0; i < n; i++) {
      const it = this.items[Math.floor(i / per)];
      if (it.taken) { pos[i * 3 + 1] = -1000; continue; }
      const k = i % per;
      const a = t * (0.9 + k * 0.17) + it.phase * 3.0 + k * 1.26;
      const r = 0.62 + 0.18 * Math.sin(t * 1.3 + k);
      const y = it.y + Math.sin(t * 1.6 + it.phase) * 0.22 + Math.sin(a * 1.7) * 0.4;
      pos[i * 3] = it.x + Math.cos(a) * r;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = it.z + Math.sin(a) * r;
    }
    this.sparkles.geometry.attributes.position.needsUpdate = true;
  }

  // ---- collection burst: particles + an expanding ring of light ----
  _initBurst(scene) {
    const CAP = 160;
    this._b = { cap: CAP, next: 0, rings: [] };
    const pos = new Float32Array(CAP * 3).fill(-1000);
    const col = new Float32Array(CAP * 3);
    this._bVel = new Float32Array(CAP * 3);
    this._bLife = new Float32Array(CAP);
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    g.setAttribute('color', new THREE.BufferAttribute(col, 3));
    this._bPos = pos; this._bCol = col;
    this.burstPts = new THREE.Points(g, this.sparkles.material.clone());
    this.burstPts.frustumCulled = false;
    scene.add(this.burstPts);
    for (let i = 0; i < 4; i++) {
      const r = glowSprite(0xffffff, 1);
      r.visible = false;
      scene.add(r);
      this._b.rings.push({ spr: r, age: 9 });
    }
  }

  _burst(x, y, z, hex) {
    const b = this._b;
    const c = new THREE.Color(hex).multiplyScalar(3.0);
    for (let k = 0; k < 28; k++) {
      const i = b.next; b.next = (b.next + 1) % b.cap;
      const a = Math.random() * Math.PI * 2, e = (Math.random() - 0.2) * 1.2, sp = 2.5 + Math.random() * 4.5;
      this._bPos.set([x, y, z], i * 3);
      this._bVel.set([Math.cos(a) * Math.cos(e) * sp, Math.sin(e) * sp + 1.5, Math.sin(a) * Math.cos(e) * sp], i * 3);
      this._bCol.set([c.r, c.g, c.b], i * 3);
      this._bLife[i] = 0.7 + Math.random() * 0.5;
    }
    const ring = b.rings.find((r) => r.age > 1) || b.rings[0];
    ring.age = 0;
    ring.spr.position.set(x, y, z);
    ring.spr.material.color.copy(c).multiplyScalar(0.8);
    ring.spr.visible = true;
  }

  _updateBurst(dt) {
    const b = this._b;
    const pos = this._bPos, vel = this._bVel, col = this._bCol;
    let any = false;
    for (let i = 0; i < b.cap; i++) {
      if (this._bLife[i] <= 0) continue;
      any = true;
      this._bLife[i] -= dt;
      vel[i * 3 + 1] -= 5.5 * dt;
      pos[i * 3] += vel[i * 3] * dt;
      pos[i * 3 + 1] += vel[i * 3 + 1] * dt;
      pos[i * 3 + 2] += vel[i * 3 + 2] * dt;
      const k = Math.max(0, this._bLife[i] / 1.2);
      col[i * 3] *= 0.97; col[i * 3 + 1] *= 0.97; col[i * 3 + 2] *= 0.97;
      if (this._bLife[i] <= 0) pos[i * 3 + 1] = -1000;
      void k;
    }
    if (any) {
      this.burstPts.geometry.attributes.position.needsUpdate = true;
      this.burstPts.geometry.attributes.color.needsUpdate = true;
    }
    for (const r of b.rings) {
      if (r.age > 1) { r.spr.visible = false; continue; }
      r.age += dt * 1.8;
      r.spr.scale.setScalar(0.6 + r.age * 6.5);
      r.spr.material.opacity = Math.max(0, 1 - r.age);
    }
  }
}
