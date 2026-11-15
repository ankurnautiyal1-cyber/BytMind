import * as THREE from 'three';

// Small shared effect builders used by landmarks: additive flame material,
// a pooled smoke system, and soft radial glow sprites.

let glowTexture = null;

export function glowSprite(color, scale) {
  if (!glowTexture) {
    const cv = document.createElement('canvas');
    cv.width = cv.height = 64;
    const ctx = cv.getContext('2d');
    const g = ctx.createRadialGradient(32, 32, 2, 32, 32, 30);
    g.addColorStop(0, 'rgba(255,255,255,1)');
    g.addColorStop(0.35, 'rgba(255,255,255,0.55)');
    g.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 64, 64);
    glowTexture = new THREE.CanvasTexture(cv);
  }
  const spr = new THREE.Sprite(new THREE.SpriteMaterial({
    map: glowTexture,
    color,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  }));
  spr.material.color.multiplyScalar(1.6); // HDR: lets bloom pick the glow up
  spr.scale.setScalar(scale);
  return spr;
}

// ---- flame ----

const flameVert = /* glsl */ `
  uniform float uTime;
  varying vec2 vUv;
  void main() {
    vUv = uv;
    vec3 p = position;
    // the tip licks around as it burns
    p.x += sin(uTime * 8.0 + position.y * 4.0) * 0.08 * uv.y;
    p.z += cos(uTime * 6.5 + position.y * 3.0) * 0.06 * uv.y;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
  }
`;

const flameFrag = /* glsl */ `
  uniform float uTime;
  uniform float uIntensity;
  varying vec2 vUv;
  void main() {
    float h = vUv.y;
    float flick = 0.75 + 0.25 * sin(uTime * 11.0) * sin(uTime * 5.3 + 1.7);
    vec3 col = mix(vec3(1.0, 0.86, 0.5), vec3(0.95, 0.35, 0.05), smoothstep(0.1, 0.9, h));
    float a = pow(max(1.0 - h, 0.0), 1.4) * uIntensity * flick;
    gl_FragColor = vec4(col * (2.6 - h * 1.1), a);
  }
`;

export function makeFlame(scale = 1) {
  const geo = new THREE.ConeGeometry(0.34 * scale, 1.05 * scale, 8, 1, true);
  geo.translate(0, 0.52 * scale, 0);
  const mat = new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uIntensity: { value: 1 },
    },
    vertexShader: flameVert,
    fragmentShader: flameFrag,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    side: THREE.DoubleSide,
  });
  const mesh = new THREE.Mesh(geo, mat);
  return mesh;
}

// ---- smoke ----

const SMOKE_COUNT = 90;

export class Smoke {
  constructor(scene) {
    const cv = document.createElement('canvas');
    cv.width = cv.height = 64;
    const ctx = cv.getContext('2d');
    const g = ctx.createRadialGradient(32, 32, 3, 32, 32, 30);
    g.addColorStop(0, 'rgba(255,255,255,0.8)');
    g.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 64, 64);
    const tex = new THREE.CanvasTexture(cv);

    const geo = new THREE.PlaneGeometry(1, 1);
    const mat = new THREE.MeshBasicMaterial({
      map: tex,
      color: 0xc9ccd0,
      transparent: true,
      opacity: 0.32,
      depthWrite: false,
    });
    this.mesh = new THREE.InstancedMesh(geo, mat, SMOKE_COUNT);
    this.mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.mesh.frustumCulled = false;
    scene.add(this.mesh);

    this.emitters = []; // { pos: Vector3, rate, scale, acc }
    this.items = Array.from({ length: SMOKE_COUNT }, () => ({ life: 0 }));
    this._m = new THREE.Matrix4();
    this._q = new THREE.Quaternion();
    this._e = new THREE.Euler();
    this._v = new THREE.Vector3();
    this._s = new THREE.Vector3();
  }

  addEmitter(pos, rate, scale = 1) {
    this.emitters.push({ pos: pos.clone(), rate, scale, acc: 0 });
  }

  update(dt, wind, time) {
    const { _m: m, _q: q, _e: e, _v: v, _s: s } = this;
    // spawn
    for (const em of this.emitters) {
      em.acc += dt * em.rate;
      while (em.acc >= 1) {
        em.acc -= 1;
        const it = this.items.find((p) => p.life <= 0);
        if (!it) { em.acc = 0; break; }
        it.life = 1;
        it.age = 0;
        it.x = em.pos.x + (Math.random() - 0.5) * 0.3;
        it.y = em.pos.y;
        it.z = em.pos.z + (Math.random() - 0.5) * 0.3;
        it.s = (0.5 + Math.random() * 0.3) * em.scale;
        it.spin = Math.random() * Math.PI * 2;
      }
    }
    // advance + write matrices
    for (let i = 0; i < SMOKE_COUNT; i++) {
      const it = this.items[i];
      if (it.life > 0) {
        it.age += dt;
        it.life = 1 - it.age / (3.2 + it.s * 2);
        it.y += (0.85 + it.s * 0.4) * dt;
        it.x += wind * 0.9 * dt;
        it.z += Math.sin(time * 0.6 + it.spin) * 0.15 * dt;
        if (it.life <= 0) { m.makeScale(0, 0, 0); this.mesh.setMatrixAt(i, m); continue; }
        const grow = it.s * (0.6 + (1 - it.life) * 1.6);
        e.set(0, -time * 0.4 + it.spin, 0);
        q.setFromEuler(e);
        v.set(it.x, it.y, it.z);
        s.setScalar(Math.max(0.001, grow * Math.min(1, it.life * 4)));
        m.compose(v, q, s);
      } else {
        m.makeScale(0, 0, 0);
      }
      this.mesh.setMatrixAt(i, m);
    }
    this.mesh.instanceMatrix.needsUpdate = true;
  }
}
