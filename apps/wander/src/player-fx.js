import * as THREE from 'three';
import { WATER_LEVEL, WORLD_HALF } from './terrain.js';

// Little things that tie the explorer to the world: footstep dust tinted by the
// ground, a puff on landing and take-off, droplets and a foamy wake when wading
// or swimming, a glowing trail and wind streaks when flying.

const DUST = 260;
const GLOW = 240;

const pvert = /* glsl */ `
  attribute float aSize;
  attribute float aAlpha;
  attribute vec3 aColor;
  uniform float uPR;
  varying float vA;
  varying vec3 vC;
  void main() {
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mv;
    vA = aAlpha;
    vC = aColor;
    gl_PointSize = clamp(aSize * uPR * 560.0 / -mv.z, 1.0, 120.0 * uPR);
  }
`;
const dustFrag = /* glsl */ `
  varying float vA;
  varying vec3 vC;
  void main() {
    vec2 c = gl_PointCoord * 2.0 - 1.0;
    float d = max(1.0 - dot(c, c), 0.0);
    gl_FragColor = vec4(vC, d * d * vA);
  }
`;
const glowFrag = /* glsl */ `
  varying float vA;
  varying vec3 vC;
  void main() {
    vec2 c = gl_PointCoord * 2.0 - 1.0;
    float d = exp(-dot(c, c) * 3.5);
    gl_FragColor = vec4(vC * d * vA, 1.0);
  }
`;

class Pool {
  constructor(scene, n, frag, additive) {
    this.n = n;
    this.pos = new Float32Array(n * 3).fill(-9999);
    this.vel = new Float32Array(n * 3);
    this.life = new Float32Array(n);
    this.max = new Float32Array(n).fill(1);
    this.s0 = new Float32Array(n);
    this.s1 = new Float32Array(n);
    this.a0 = new Float32Array(n);
    this.grav = new Float32Array(n);
    this.drag = new Float32Array(n);
    this.size = new Float32Array(n);
    this.alpha = new Float32Array(n);
    this.color = new Float32Array(n * 3);
    this.next = 0;
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(this.pos, 3));
    g.setAttribute('aSize', new THREE.BufferAttribute(this.size, 1));
    g.setAttribute('aAlpha', new THREE.BufferAttribute(this.alpha, 1));
    g.setAttribute('aColor', new THREE.BufferAttribute(this.color, 3));
    this.points = new THREE.Points(g, new THREE.ShaderMaterial({
      uniforms: { uPR: { value: Math.min(devicePixelRatio, 2) } },
      vertexShader: pvert, fragmentShader: frag,
      transparent: true, depthWrite: false, fog: false,
      blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending,
    }));
    this.points.frustumCulled = false;
    this.points.renderOrder = additive ? 7 : 6;
    scene.add(this.points);
  }

  emit(x, y, z, vx, vy, vz, life, s0, s1, alpha, color, grav = 0, drag = 1.5) {
    const i = this.next; this.next = (this.next + 1) % this.n;
    this.pos[i * 3] = x; this.pos[i * 3 + 1] = y; this.pos[i * 3 + 2] = z;
    this.vel[i * 3] = vx; this.vel[i * 3 + 1] = vy; this.vel[i * 3 + 2] = vz;
    this.life[i] = life; this.max[i] = life;
    this.s0[i] = s0; this.s1[i] = s1; this.a0[i] = alpha;
    this.grav[i] = grav; this.drag[i] = drag;
    this.color[i * 3] = color.r; this.color[i * 3 + 1] = color.g; this.color[i * 3 + 2] = color.b;
  }

  update(dt) {
    for (let i = 0; i < this.n; i++) {
      if (this.life[i] <= 0) { this.alpha[i] = 0; continue; }
      this.life[i] -= dt;
      const k = 1 - Math.max(this.life[i], 0) / this.max[i];     // 0 → 1 over the life
      const dr = Math.max(0, 1 - this.drag[i] * dt);
      this.vel[i * 3] *= dr; this.vel[i * 3 + 1] = this.vel[i * 3 + 1] * dr - this.grav[i] * dt; this.vel[i * 3 + 2] *= dr;
      this.pos[i * 3] += this.vel[i * 3] * dt;
      this.pos[i * 3 + 1] += this.vel[i * 3 + 1] * dt;
      this.pos[i * 3 + 2] += this.vel[i * 3 + 2] * dt;
      this.size[i] = this.s0[i] + (this.s1[i] - this.s0[i]) * k;
      this.alpha[i] = this.a0[i] * (1 - k) * Math.min(1, k * 10 + 0.3);
      if (this.life[i] <= 0) { this.pos[i * 3 + 1] = -9999; this.alpha[i] = 0; }
    }
    const g = this.points.geometry.attributes;
    g.position.needsUpdate = true; g.aSize.needsUpdate = true; g.aAlpha.needsUpdate = true; g.aColor.needsUpdate = true;
  }
}

// wind streaks while flying fast: long thin lines racing past the camera
const streakVert = /* glsl */ `
  attribute vec4 aSeed;
  attribute float aEnd;
  uniform vec3 uCam, uDir, uRight, uUp;
  uniform float uTravel, uSpeed, uVis;
  varying float vA;
  void main() {
    float ang = aSeed.x * 6.2831;
    float rad = 2.2 + aSeed.y * 7.0;
    float along = mod(aSeed.z * 46.0 - uTravel, 46.0) - 23.0;
    vec3 base = uCam + uDir * along + (uRight * cos(ang) + uUp * sin(ang)) * rad;
    float len = 0.8 + uSpeed * 0.09;
    vec3 p = base + uDir * len * (aEnd - 0.5);
    vec4 mv = viewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    float fadeAlong = 1.0 - smoothstep(14.0, 23.0, abs(along));
    vA = uVis * fadeAlong * (0.3 + 0.7 * aSeed.w) * (1.0 - aEnd * 0.6);
  }
`;
const streakFrag = /* glsl */ `
  varying float vA;
  void main() { gl_FragColor = vec4(vec3(0.75, 0.88, 1.0) * 1.3 * vA, 1.0); }
`;

const TMP = new THREE.Color();

export class PlayerFX {
  constructor(scene, terrain) {
    this.terrain = terrain;
    this.dust = new Pool(scene, DUST, dustFrag, false);
    this.glow = new Pool(scene, GLOW, glowFrag, true);

    const N = 110;
    const seed = new Float32Array(N * 2 * 4), ends = new Float32Array(N * 2);
    for (let i = 0; i < N; i++) {
      const s = [Math.random(), Math.random(), Math.random(), Math.random()];
      for (let e = 0; e < 2; e++) { seed.set(s, (i * 2 + e) * 4); ends[i * 2 + e] = e; }
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(N * 2 * 3), 3));
    g.setAttribute('aSeed', new THREE.BufferAttribute(seed, 4));
    g.setAttribute('aEnd', new THREE.BufferAttribute(ends, 1));
    this.sU = {
      uCam: { value: new THREE.Vector3() }, uDir: { value: new THREE.Vector3(0, 0, -1) },
      uRight: { value: new THREE.Vector3(1, 0, 0) }, uUp: { value: new THREE.Vector3(0, 1, 0) },
      uTravel: { value: 0 }, uSpeed: { value: 0 }, uVis: { value: 0 },
    };
    this.streaks = new THREE.LineSegments(g, new THREE.ShaderMaterial({
      uniforms: this.sU, vertexShader: streakVert, fragmentShader: streakFrag,
      transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, fog: false,
    }));
    this.streaks.frustumCulled = false;
    this.streaks.renderOrder = 7;
    scene.add(this.streaks);

    this.travel = 0;
    this.stride = 0;
    this.foot = 0;
    this.wasGrounded = true;
    this.wasWet = false;
    this.prevVy = 0;
    this.wakeT = 0;
    this.handY = [null, null]; // previous heights of the hands, to catch strokes entering the water
    this.trailT = 0;
    this.vis = 0;
    this._dir = new THREE.Vector3();
    this._r = new THREE.Vector3();
    this._u = new THREE.Vector3();
  }

  // what's the ground like here? (dust takes its colour)
  groundColor(x, z, mode, out) {
    if (mode === 'city') return out.setRGB(0.5, 0.5, 0.56);
    const t = this.terrain, d = t.colorTex.image.data, n = t.gridN;
    const ix = Math.min(n - 1, Math.max(0, Math.round((x + WORLD_HALF) / t.cell)));
    const iz = Math.min(n - 1, Math.max(0, Math.round((z + WORLD_HALF) / t.cell)));
    const i = (iz * n + ix) * 4;
    out.setRGB(Math.pow(d[i] / 255, 2.2), Math.pow(d[i + 1] / 255, 2.2), Math.pow(d[i + 2] / 255, 2.2));
    // dust is paler and warmer than the ground it kicks up from
    return out.lerp(TMP.setRGB(0.55, 0.48, 0.36), 0.45).multiplyScalar(1.15);
  }

  puff(x, y, z, n, speed, col, sizeK = 1) {
    for (let k = 0; k < n; k++) {
      const a = Math.random() * 6.283, s = speed * (0.4 + Math.random() * 0.8);
      this.dust.emit(x + Math.cos(a) * 0.08, y + 0.04, z + Math.sin(a) * 0.08,
        Math.cos(a) * s, 0.4 + Math.random() * 0.8, Math.sin(a) * s,
        0.55 + Math.random() * 0.4, (0.12 + Math.random() * 0.1) * sizeK, (0.5 + Math.random() * 0.3) * sizeK,
        0.5, col, -0.15, 2.2);
    }
  }

  splash(x, y, z, n, up) {
    for (let k = 0; k < n; k++) {
      const a = Math.random() * 6.283, s = 0.6 + Math.random() * 1.8;
      this.dust.emit(x, y, z, Math.cos(a) * s, up * (0.5 + Math.random() * 0.8), Math.sin(a) * s,
        0.6 + Math.random() * 0.4, 0.05, 0.03, 0.8, TMP.setRGB(0.85, 0.93, 1.0), 9.5, 0.3);
    }
  }

  update(dt, player, env) {
    const { mode, sky, camera, feet, hands } = env;
    const pos = player.pos, vel = player.vel;
    const hSpeed = Math.hypot(vel.x, vel.z);
    const ground = mode === 'nature' ? this.terrain.heightAt(pos.x, pos.z) : pos.y;
    const wading = mode === 'nature' && ground < WATER_LEVEL - 0.05 && pos.y < WATER_LEVEL + 0.55 && !player.flying;
    const col = this.groundColor(pos.x, pos.z, mode, new THREE.Color());

    // ---- footsteps ----
    if (player.grounded && !player.flying && !wading && hSpeed > 1.2) {
      this.stride += hSpeed * dt;
      const every = hSpeed > 13.5 ? 1.45 : 1.05;
      if (this.stride >= every) {
        this.stride = 0;
        this.foot ^= 1;
        const p = feet?.[this.foot] || pos;
        const run = hSpeed > 13.5;
        this.puff(p.x, mode === 'nature' ? ground : pos.y, p.z, run ? 6 : 3, run ? 1.6 : 0.8, col, run ? 1.3 : 1);
        // wet pavement throws a little spray
        if (mode === 'city' && (sky.wetness || 0) > 0.25) this.splash(p.x, pos.y + 0.05, p.z, 5, 1.8);
      }
    } else if (hSpeed < 0.5) this.stride = 0;

    // ---- take-off / landing ----
    if (this.wasGrounded && !player.grounded && vel.y > 3 && !wading) this.puff(pos.x, pos.y, pos.z, 8, 1.4, col);
    if (!this.wasGrounded && player.grounded && this.prevVy < -4.5) {
      const k = Math.min(1.6, -this.prevVy / 9);
      this.puff(pos.x, pos.y, pos.z, Math.round(12 + 14 * k), 2.2 * k + 0.8, col, 1.4);
    }

    // ---- water: splash on entry, foam wake while moving ----
    const wet = wading || player.inWater;
    if (wet && !this.wasWet && this.prevVy < -2) this.splash(pos.x, WATER_LEVEL, pos.z, 26, Math.min(6, -this.prevVy * 0.8));
    if (wet && hSpeed > 0.8) {
      this.wakeT -= dt;
      if (this.wakeT <= 0) {
        this.wakeT = Math.max(0.045, 0.16 - hSpeed * 0.01);
        const d = this._dir.set(vel.x, 0, vel.z).normalize();
        for (let s = -1; s <= 1; s += 2) {
          this.dust.emit(pos.x - d.x * 0.35 + -d.z * s * 0.25, WATER_LEVEL + 0.04, pos.z - d.z * 0.35 + d.x * s * 0.25,
            -d.z * s * 0.5, 0, d.x * s * 0.5, 1.5 + Math.random() * 0.5, 0.28, 0.85, 0.5,
            TMP.setRGB(0.92, 0.97, 1.0), 0, 1.0);
        }
        if (Math.random() < 0.5) this.splash(pos.x, WATER_LEVEL + 0.1, pos.z, 1, 1.4);
      }
    }

    // ---- swim strokes: a ripple and spray where each hand enters or leaves the water ----
    if (hands && player.inWater) {
      hands.forEach((h, i) => {
        const prev = this.handY[i];
        if (prev !== null) {
          if (prev > WATER_LEVEL && h.y <= WATER_LEVEL) {
            this.dust.emit(h.x, WATER_LEVEL + 0.04, h.z, 0, 0, 0, 1.4, 0.18, 0.95, 0.5, TMP.setRGB(0.92, 0.97, 1.0), 0, 1.0);
            this.splash(h.x, WATER_LEVEL + 0.05, h.z, 6, 2.2);
          } else if (prev <= WATER_LEVEL && h.y > WATER_LEVEL) {
            this.splash(h.x, WATER_LEVEL + 0.05, h.z, 4, 3.0);
          }
        }
        this.handY[i] = h.y;
      });
    } else this.handY[0] = this.handY[1] = null;

    // ---- flying: a glowing trail from the body and feet, wind streaks ----
    const speed3 = vel.length();
    if (player.flying && speed3 > 1) {
      this.trailT -= dt;
      if (this.trailT <= 0) {
        this.trailT = 0.022;
        const d = this._dir.copy(vel).normalize();
        const spots = [new THREE.Vector3(pos.x, pos.y + 1.0, pos.z), ...(feet || [])];
        for (const sp of spots) {
          const m = Math.random();
          TMP.setRGB(0.25 + 0.5 * m, 0.9 - 0.4 * m, 1.0).multiplyScalar(2.3);
          this.glow.emit(sp.x - d.x * 0.4 + (Math.random() - 0.5) * 0.25, sp.y + (Math.random() - 0.5) * 0.25, sp.z - d.z * 0.4 + (Math.random() - 0.5) * 0.25,
            -vel.x * 0.04 + (Math.random() - 0.5) * 0.4, -vel.y * 0.04 + (Math.random() - 0.5) * 0.4, -vel.z * 0.04 + (Math.random() - 0.5) * 0.4,
            0.9 + Math.random() * 0.7, 0.3, 0.03, 0.9, TMP, 0, 0.8);
        }
      }
    }
    const wantVis = player.flying ? THREE.MathUtils.clamp((speed3 - 11) / 12, 0, 1) * 0.55 : 0;
    this.vis += (wantVis - this.vis) * Math.min(1, dt * 4);
    this.streaks.visible = this.vis > 0.01;
    if (this.streaks.visible) {
      const d = this._dir.copy(vel).normalize();
      const r = this._r.crossVectors(d, new THREE.Vector3(0, 1, 0));
      if (r.lengthSq() < 1e-4) r.set(1, 0, 0);
      r.normalize();
      const u = this._u.crossVectors(r, d).normalize();
      this.travel += speed3 * dt;
      const U = this.sU;
      U.uCam.value.copy(camera.position);
      U.uDir.value.copy(d); U.uRight.value.copy(r); U.uUp.value.copy(u);
      U.uTravel.value = this.travel; U.uSpeed.value = speed3; U.uVis.value = this.vis;
    }

    this.wasGrounded = player.grounded;
    this.wasWet = wet;
    this.prevVy = vel.y;
    this.dust.update(dt);
    this.glow.update(dt);
  }
}
