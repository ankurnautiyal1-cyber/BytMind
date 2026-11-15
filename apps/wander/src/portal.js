import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { glowSprite } from './effects.js';
import { CollisionWorld } from './colliders.js';
import { GATE } from './terrain.js';

// The Ancient Gate — a carved stone arch (built in Blender, tools/build_portal.py)
// whose opening is a living window onto the *other* world: the destination is
// rendered into a small cube map (one face per frame, only when you are close)
// and seen through a rippling, refracting surface. Runes brighten as you
// approach; motes spiral into the doorway, sparks rise off the rune channels,
// a pale beacon marks the gate from across the world, and shards of the
// keystone orbit the crest. Walk through the arch to cross.

const ARCH_W = 2.5;        // half-width of the doorway
const ARCH_BOTTOM = 0.2;   // local y of the doorway floor
const ARCH_SPRING = 3.3;   // where the straight sides become the round top
const BASE_TO_DISC = 3.8;  // legacy: callers pass (footing + 3.8) as y

const CUBE_SIZES = { low: 128, medium: 256, high: 384 };

const smooth = (a, b, x) => {
  const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
};

// ---------------------------------------------------------------- shaders ----

const surfVert = /* glsl */ `
  varying vec3 vWorld;
  varying vec2 vLocal;
  varying vec3 vRight;
  varying vec3 vNormalW;
  void main() {
    vLocal = position.xy;
    vec4 w = modelMatrix * vec4(position, 1.0);
    vWorld = w.xyz;
    vRight = normalize((modelMatrix * vec4(1.0, 0.0, 0.0, 0.0)).xyz);
    vNormalW = normalize((modelMatrix * vec4(0.0, 0.0, 1.0, 0.0)).xyz);
    gl_Position = projectionMatrix * viewMatrix * w;
  }
`;

const surfFrag = /* glsl */ `
  uniform float uTime, uProx, uCubeFade, uHasCube;
  uniform samplerCube uCube;
  uniform mat3 uRot;
  uniform vec3 uTint1, uTint2;
  varying vec3 vWorld;
  varying vec2 vLocal;
  varying vec3 vRight;
  varying vec3 vNormalW;

  float hash(vec2 p) {
    vec3 p3 = fract(vec3(p.xyx) * 0.1031);
    p3 += dot(p3, p3.yzx + 33.33);
    return fract((p3.x + p3.y) * p3.z);
  }
  float noise(vec2 p) {
    vec2 i = floor(p), f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1, 0)), f.x),
               mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), f.x), f.y);
  }
  float fbm(vec2 p) {
    float a = 0.5, s = 0.0;
    for (int i = 0; i < 4; i++) { s += a * noise(p); p = p * 2.02 + 7.1; a *= 0.5; }
    return s;
  }

  // distance inside the arch boundary (positive inside)
  float archDist(vec2 p) {
    float side = ${ARCH_W.toFixed(2)} - abs(p.x);
    float d = min(side, p.y - ${ARCH_BOTTOM.toFixed(2)});
    if (p.y > ${ARCH_SPRING.toFixed(2)}) {
      d = ${ARCH_W.toFixed(2)} - length(vec2(p.x, p.y - ${ARCH_SPRING.toFixed(2)}));
    }
    return d;
  }

  void main() {
    float d = archDist(vLocal);
    float rim = exp(-max(d, 0.0) * 4.5);
    vec3 V = normalize(vWorld - cameraPosition);

    // slow domain-warped flow -> ripple direction
    vec2 p = vLocal * 0.85;
    float t = uTime;
    vec2 q = vec2(fbm(p * 1.4 + vec2(0.0, t * 0.22)), fbm(p * 1.4 + vec2(5.2, -t * 0.19)));
    vec2 w = (q - 0.5) * 2.0;
    float k = 0.012 + 0.05 * rim + 0.012 * uProx;
    vec3 dir = normalize(V + vRight * w.x * k + vec3(0.0, 1.0, 0.0) * w.y * k);
    vec3 sd = uRot * dir;

    // look through to the other world, with a little chromatic split
    float ca = 0.006 + 0.022 * rim;
    vec3 up = vec3(0.0, 1.0, 0.0);
    float bl = 0.006 + 0.02 * rim;   // a soft, dreamy blur: four taps around the ray
    vec3 cr = textureCube(uCube, normalize(sd + vRight * ca)).rgb;
    vec3 cg = 0.25 * (textureCube(uCube, normalize(sd + vRight * bl)).rgb
                    + textureCube(uCube, normalize(sd - vRight * bl)).rgb
                    + textureCube(uCube, normalize(sd + up * bl)).rgb
                    + textureCube(uCube, normalize(sd - up * bl)).rgb);
    vec3 cb = textureCube(uCube, normalize(sd - vRight * ca)).rgb;
    vec3 view = vec3(0.5 * (cr.r + cg.r), cg.g, 0.5 * (cb.b + cg.b)) * 0.8;
    // filmic roll-off: sunlit snow, sun and moon stay below the bloom threshold so
    // the window reads as a place rather than a lamp
    view = (1.0 - exp(-1.05 * view)) * 0.8;
    // a little more colour and contrast than the open world has: it should look like another place
    float vl = dot(view, vec3(0.299, 0.587, 0.114));
    view = pow(max(mix(vec3(vl), view, 1.45), 0.0), vec3(1.25));

    #ifdef DEBUG_VIEW
    gl_FragColor = vec4(view, 1.0);
    return;
    #endif

    // energy veil swirling about the doorway centre
    vec2 c = vLocal - vec2(0.0, 3.0);
    float r = length(c);
    float a = atan(c.y, c.x);
    float sw = fbm(vec2(a * 1.7 + r * 0.9 - t * 0.55, r * 0.55 - t * 0.28));
    float streak = fbm(vec2(a * 4.0 - t * 0.8 + r * 2.0, r * 1.3 + t * 0.4));
    vec3 veil = mix(uTint1, uTint2, sw) * (0.3 + 1.0 * smoothstep(0.38, 0.9, sw));

    // fallback while the cube is still being drawn: a deep swirling void
    vec3 deep = mix(vec3(0.03, 0.02, 0.1), uTint1 * 0.3, sw) + veil * 0.25;
    vec3 col = mix(deep, view, uHasCube * uCubeFade);

    float fres = pow(max(1.0 - abs(dot(normalize(vNormalW), V)), 0.0), 2.5);
    float veilAmt = 0.03 + 0.18 * rim + 0.07 * uProx + 0.1 * fres;
    col += veil * veilAmt;
    col += uTint2 * pow(streak, 3.0) * (0.06 + 0.2 * uProx) * (0.4 + rim);
    // brighter toward the frame, a hair darker at the heart: a tunnel
    col *= 0.82 + 0.5 * rim;

    gl_FragColor = vec4(col, smoothstep(0.0, 0.07, d));
  }
`;

const vortexVert = /* glsl */ `
  attribute vec4 aSeed;   // angle0, radius0, speed, phase
  uniform float uTime, uProx, uPR;
  varying float vA;
  varying float vMix;
  void main() {
    float spd = 0.10 + 0.14 * uProx;
    float life = fract(aSeed.w + uTime * aSeed.z * spd);
    float r = mix(aSeed.y, 0.25, pow(life, 0.8));
    float ang = aSeed.x + uTime * (0.35 + 0.5 * uProx) * aSeed.z + life * 7.0;
    vec3 p = vec3(cos(ang) * r * 0.62, 3.0 + sin(ang) * r * 0.78,
                  0.25 + 0.55 * sin(aSeed.x * 5.0 + uTime * 0.7) * (1.0 - life));
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    // fade out as the camera gets inside the swirl so it never whites out the doorway
    vA = smoothstep(0.0, 0.12, life) * (1.0 - smoothstep(0.7, 1.0, life)) * smoothstep(1.2, 6.0, -mv.z);
    vMix = life;
    gl_PointSize = min(uPR * (150.0 / -mv.z) * (0.4 + 0.7 * (1.0 - life)) * (0.7 + 0.5 * aSeed.z), 46.0 * uPR);
  }
`;
const sparkVert = /* glsl */ `
  attribute vec4 aSeed;   // phase, speed, drift, size
  uniform float uTime, uProx, uPR;
  varying float vA;
  varying float vMix;
  void main() {
    float life = fract(aSeed.x + uTime * aSeed.y * (0.07 + 0.08 * uProx));
    vec3 p = position;
    p.y += life * (1.2 + 1.5 * aSeed.y);
    p.x += sin(uTime * 0.9 + aSeed.x * 40.0) * 0.12 * aSeed.z;
    p.z += cos(uTime * 0.7 + aSeed.x * 30.0) * 0.12 * aSeed.z;
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    vA = smoothstep(0.0, 0.1, life) * (1.0 - life) * (0.55 + 0.9 * uProx) * smoothstep(0.8, 4.0, -mv.z);
    vMix = life;
    gl_PointSize = min(uPR * (90.0 / -mv.z) * aSeed.w, 30.0 * uPR);
  }
`;
const moteFrag = /* glsl */ `
  uniform vec3 uTint1, uTint2;
  varying float vA;
  varying float vMix;
  void main() {
    vec2 c = gl_PointCoord * 2.0 - 1.0;
    float d = exp(-dot(c, c) * 3.5);
    vec3 col = mix(uTint2, uTint1, vMix) * 1.5;
    gl_FragColor = vec4(col * d * vA, 1.0);
  }
`;
const sparkFrag = /* glsl */ `
  uniform vec3 uTint1, uTint2;
  varying float vA;
  varying float vMix;
  void main() {
    vec2 c = gl_PointCoord * 2.0 - 1.0;
    float d = exp(-dot(c, c) * 4.0);
    gl_FragColor = vec4(mix(vec3(1.0), uTint2, 0.45) * 2.0 * d * vA, 1.0);
  }
`;

const beaconVert = /* glsl */ `
  varying float vH;
  varying vec3 vN;
  varying vec3 vP;
  void main() {
    vH = uv.y;
    vN = normalize(mat3(modelMatrix) * normal);
    vec4 w = modelMatrix * vec4(position, 1.0);
    vP = w.xyz;
    gl_Position = projectionMatrix * viewMatrix * w;
  }
`;
const beaconFrag = /* glsl */ `
  uniform float uTime, uStrength;
  uniform vec3 uTint1, uTint2;
  varying float vH;
  varying vec3 vN;
  varying vec3 vP;
  void main() {
    vec3 V = normalize(cameraPosition - vP);
    float soft = pow(abs(dot(normalize(vN), V)), 1.6);
    float fall = pow(max(1.0 - vH, 0.0), 1.8) * smoothstep(0.0, 0.03, vH);
    float shimmer = 0.75 + 0.25 * sin(vH * 40.0 - uTime * 1.6) * sin(vH * 11.0 + uTime * 0.7);
    float a = soft * fall * shimmer * uStrength;
    vec3 col = mix(uTint1, uTint2, vH) * 1.8;
    gl_FragColor = vec4(col * a, 1.0);
  }
`;

// ------------------------------------------------------------- geometry ----

function archShape() {
  const s = new THREE.Shape();
  s.moveTo(-ARCH_W, ARCH_BOTTOM);
  s.lineTo(ARCH_W, ARCH_BOTTOM);
  s.lineTo(ARCH_W, ARCH_SPRING);
  s.absarc(0, ARCH_SPRING, ARCH_W, 0, Math.PI, false);
  s.lineTo(-ARCH_W, ARCH_BOTTOM);
  return s;
}

function mkVortex(n) {
  const seed = new Float32Array(n * 4);
  for (let i = 0; i < n; i++) {
    seed[i * 4] = Math.random() * Math.PI * 2;
    seed[i * 4 + 1] = 2.2 + Math.random() * 2.6;
    seed[i * 4 + 2] = 0.55 + Math.random() * 0.9;
    seed[i * 4 + 3] = Math.random();
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(n * 3), 3));
  g.setAttribute('aSeed', new THREE.BufferAttribute(seed, 4));
  return g;
}

function mkSparks(n) {
  const pos = new Float32Array(n * 3);
  const seed = new Float32Array(n * 4);
  for (let i = 0; i < n; i++) {
    // along the arch ring, the jambs, and up the pillars
    const roll = Math.random();
    let x, y, z = (Math.random() < 0.5 ? 1 : -1) * 0.72;
    if (roll < 0.5) {
      const a = Math.random() * Math.PI;
      x = Math.cos(a) * 2.58; y = ARCH_SPRING + Math.sin(a) * 2.58;
    } else if (roll < 0.75) {
      x = (Math.random() < 0.5 ? -1 : 1) * 2.58; y = 0.3 + Math.random() * 3.0;
    } else {
      x = (Math.random() < 0.5 ? -1 : 1) * (3.0 + Math.random() * 0.8); y = 1 + Math.random() * 7; z *= 1.1;
    }
    pos[i * 3] = x; pos[i * 3 + 1] = y; pos[i * 3 + 2] = z;
    seed[i * 4] = Math.random();
    seed[i * 4 + 1] = 0.5 + Math.random();
    seed[i * 4 + 2] = Math.random();
    seed[i * 4 + 3] = 0.5 + Math.random() * 0.9;
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  g.setAttribute('aSeed', new THREE.BufferAttribute(seed, 4));
  return g;
}

// -------------------------------------------------------------- one end ----

// the two ends hint at where you're going: magenta + aqua for the city,
// emerald + gold for the wilds
const TINTS = {
  nature: [new THREE.Color(0.85, 0.35, 1.0), new THREE.Color(0.3, 0.95, 1.0)],
  city: [new THREE.Color(0.2, 0.95, 0.55), new THREE.Color(1.0, 0.8, 0.35)],
};

class PortalEnd {
  // y is the legacy "disc centre" height: the gate's footing sits 3.8 below it
  constructor(group, world, x, y, z, ry, pr = 1) {
    this.world = world;
    this.group = group;
    this.base = y - BASE_TO_DISC;
    this.ry = ry;
    this.pos = new THREE.Vector3(x, this.base + 3.0, z);
    this.facing = new THREE.Vector3(Math.sin(ry), 0, Math.cos(ry));
    this.right = new THREE.Vector3(Math.cos(ry), 0, -Math.sin(ry));
    this.prox = 0;
    this.gate = null;
    this.runeMats = [];
    this.tint = TINTS[world];

    this.root = new THREE.Group();
    this.root.position.set(x, this.base, z);
    this.root.rotation.y = ry;
    group.add(this.root);

    // the window
    this.cubeRT = null;
    this.hasCube = false;
    this.cubeFade = 0;
    this.rot = new THREE.Matrix3();
    this.surfMat = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uProx: { value: 0 },
        uCubeFade: { value: 0 },
        uHasCube: { value: 0 },
        uCube: { value: null },
        uRot: { value: this.rot },
        uTint1: { value: this.tint[0] },
        uTint2: { value: this.tint[1] },
      },
      vertexShader: surfVert,
      fragmentShader: surfFrag,
      transparent: true,
      side: THREE.DoubleSide,
      depthWrite: false,
    });
    this.surface = new THREE.Mesh(new THREE.ShapeGeometry(archShape(), 40), this.surfMat);
    this.surface.frustumCulled = false;
    this.root.add(this.surface);

    // vortex motes + rune sparks
    const pmat = (vert, frag) => new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 }, uProx: { value: 0 }, uPR: { value: pr },
        uTint1: { value: this.tint[0] }, uTint2: { value: this.tint[1] },
      },
      vertexShader: vert, fragmentShader: frag,
      transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, fog: false,
    });
    this.vortex = new THREE.Points(mkVortex(190), pmat(vortexVert, moteFrag));
    this.vortex.frustumCulled = false;
    this.sparks = new THREE.Points(mkSparks(170), pmat(sparkVert, sparkFrag));
    this.sparks.frustumCulled = false;
    this.root.add(this.vortex, this.sparks);

    // beacon: a pale shaft you can see from across the world
    const bg = new THREE.CylinderGeometry(0.5, 1.8, 1, 20, 1, true);
    bg.translate(0, 0.5, 0);
    this.beaconMat = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 }, uStrength: { value: 0.4 },
        uTint1: { value: this.tint[0] }, uTint2: { value: this.tint[1] },
      },
      vertexShader: beaconVert, fragmentShader: beaconFrag,
      transparent: true, blending: THREE.AdditiveBlending, depthWrite: false,
      side: THREE.DoubleSide, fog: false,
    });
    this.beacon = new THREE.Mesh(bg, this.beaconMat);
    this.beacon.position.set(0, 10.5, 0);
    this.beacon.scale.set(1, 420, 1);
    this.beacon.frustumCulled = false;
    this.beacon.renderOrder = 5;
    this.root.add(this.beacon);

    // light spilling from the doorway
    this.halo = glowSprite(0xb59dff, 9);
    this.halo.position.set(0, 3.0, 0.3);
    this.root.add(this.halo);
    this.light = new THREE.PointLight(0xb08cff, 2.2, 34, 1.5);
    this.light.position.set(0, 3.0, 1.6);
    this.root.add(this.light);

    this.fragments = [];
    this.fragGroup = new THREE.Group();
    this.root.add(this.fragGroup);
  }

  // gate model arrives asynchronously (the glb is loaded once and cloned)
  setGate(gate, fragTemplates) {
    this.gate = gate;
    this.runeMats = [];
    gate.traverse((o) => {
      if (!o.isMesh) return;
      o.castShadow = true;
      o.receiveShadow = true;
      o.material = o.material.clone();
      if (o.material.name.startsWith('gate_rune')) this.runeMats.push(o.material);
    });
    this.root.add(gate);

    if (fragTemplates?.length) {
      const N = 9;
      for (let i = 0; i < N; i++) {
        const tpl = fragTemplates[i % fragTemplates.length];
        const m = tpl.clone(true);
        m.traverse((o) => {
          if (!o.isMesh) return;
          o.material = o.material.clone();
          o.castShadow = true;
          if (o.material.name.startsWith('gate_rune')) this.runeMats.push(o.material);
        });
        m.scale.setScalar(0.75 + Math.random() * 0.7);
        this.fragGroup.add(m);
        this.fragments.push({
          m, a: (i / N) * Math.PI * 2, dir: i % 2 ? 1 : -1,
          R: 3.5 + Math.sin(i * 1.7) * 0.7, ph: Math.random() * 6.28,
          spin: new THREE.Vector3(0.2 + Math.random() * 0.5, 0.15 + Math.random() * 0.4, 0.1 + Math.random() * 0.3),
        });
      }
    }
  }

  // the city twin stands in a modern plaza: a black reflecting pool ringed by
  // light strips that chase around the gate, so old stone meets new glass
  dressPlaza(groundY) {
    const rel = groundY - this.base + 0.05; // local height just above the paving
    const pool = new THREE.Mesh(
      new THREE.RingGeometry(9.6, 15.2, 96, 1),
      new THREE.MeshStandardMaterial({
        color: 0x03060d, roughness: 0.05, metalness: 0.92, envMapIntensity: 1.6,
      }),
    );
    pool.rotation.x = -Math.PI / 2;
    pool.position.y = rel;
    pool.receiveShadow = true;
    this.root.add(pool);

    const line = new THREE.Mesh(
      new THREE.RingGeometry(15.2, 15.5, 96, 1),
      new THREE.MeshBasicMaterial({ color: new THREE.Color().copy(this.tint[1]).multiplyScalar(2.4) }),
    );
    line.rotation.x = -Math.PI / 2;
    line.position.y = rel + 0.012;
    this.root.add(line);

    const N = 32;
    const strips = new THREE.InstancedMesh(
      new THREE.BoxGeometry(0.28, 0.04, 2.6),
      new THREE.MeshBasicMaterial({ color: 0xffffff }),
      N,
    );
    const m = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler(), v = new THREE.Vector3();
    for (let i = 0; i < N; i++) {
      const a = (i / N) * Math.PI * 2;
      e.set(0, -a + Math.PI / 2, 0);
      q.setFromEuler(e);
      v.set(Math.cos(a) * 17.4, rel + 0.02, Math.sin(a) * 17.4);
      m.compose(v, q, new THREE.Vector3(1, 1, 1));
      strips.setMatrixAt(i, m);
      strips.setColorAt(i, new THREE.Color(1, 1, 1));
    }
    strips.frustumCulled = false;
    this.root.add(strips);
    this.plaza = { pool, line, strips, N, c: new THREE.Color() };
  }

  _updatePlaza(t) {
    const p = this.plaza;
    if (!p) return;
    for (let i = 0; i < p.N; i++) {
      const w = 0.5 + 0.5 * Math.sin(t * 1.3 - i * 0.42);
      const k = 0.25 + 2.6 * Math.pow(w, 3) * (0.5 + this.prox);
      p.c.copy(this.tint[i % 2 ? 1 : 0]).multiplyScalar(k);
      p.strips.setColorAt(i, p.c);
    }
    p.strips.instanceColor.needsUpdate = true;
  }

  setDestination(destEnd) {
    // rotate the view so that looking *into* this gate looks *out of* the other
    const delta = destEnd.ry - (this.ry + Math.PI);
    this.rot.setFromMatrix4(new THREE.Matrix4().makeRotationY(delta));
  }

  // lateral / height / depth of a point relative to the doorway
  local(p, out = new THREE.Vector3()) {
    const dx = p.x - this.root.position.x;
    const dz = p.z - this.root.position.z;
    return out.set(
      dx * this.right.x + dz * this.right.z,
      p.y - this.base,
      dx * this.facing.x + dz * this.facing.z,
    );
  }

  update(t, dt, daylight, camPos) {
    const night = 1 - daylight;
    const u = this.surfMat.uniforms;
    u.uTime.value = t;
    u.uProx.value = this.prox;
    this.cubeFade += ((this.hasCube ? 1 : 0) - this.cubeFade) * Math.min(1, dt * 1.6);
    u.uCubeFade.value = this.cubeFade;
    u.uHasCube.value = this.hasCube ? 1 : 0;
    for (const o of [this.vortex, this.sparks]) {
      o.material.uniforms.uTime.value = t;
      o.material.uniforms.uProx.value = this.prox;
    }
    this.beaconMat.uniforms.uTime.value = t;
    this.beaconMat.uniforms.uStrength.value = 0.1 + 0.34 * night + 0.35 * this.prox;
    // keep the beacon readable from far away: widen it with distance
    if (camPos) {
      const d = Math.hypot(camPos.x - this.root.position.x, camPos.z - this.root.position.z);
      const w = THREE.MathUtils.clamp(d / 160, 1, 9);
      this.beacon.scale.set(w, 420, w);
    }

    const pulse = 0.5 + 0.5 * Math.sin(t * 1.7);
    const glow = 0.8 + 1.7 * this.prox + 0.3 * pulse;
    for (const m of this.runeMats) {
      m.emissive.copy(this.tint[1]).lerp(this.tint[0], 0.25 + 0.2 * pulse);
      m.color.setScalar(0.0);
      m.emissiveIntensity = glow * (1.0 + 0.3 * night);
    }
    this.light.color.copy(this.tint[0]).lerp(this.tint[1], 0.5 + 0.3 * Math.sin(t * 0.8));
    this.light.intensity = 1.0 + 1.5 * this.prox + 0.3 * Math.sin(t * 2.2);
    this.halo.material.color.copy(this.tint[0]).multiplyScalar(1.4);
    this.halo.material.opacity = 0.08 + 0.12 * this.prox;

    this._updatePlaza(t);

    // orbiting keystone shards
    for (const f of this.fragments) {
      f.a += dt * 0.11 * f.dir * (1 + this.prox * 1.2);
      f.m.position.set(
        Math.cos(f.a) * f.R,
        9.7 + Math.sin(f.a) * 1.9 + Math.sin(t * 0.9 + f.ph) * 0.18,
        Math.sin(f.a * 2.0 + f.ph) * 0.9,
      );
      f.m.rotation.x += dt * f.spin.x;
      f.m.rotation.y += dt * f.spin.y;
      f.m.rotation.z += dt * f.spin.z;
    }
  }
}

// ----------------------------------------------------------------- portal ----

export class Portal {
  constructor(scene, terrain, timeU, quality = { name: 'medium', pixelRatio: 1 }) {
    this.scene = scene;
    this.timeU = timeU;
    this.quality = quality;
    this.cooldown = 0;
    this.onTransit = null; // (targetWorld) => void
    this.ctx = null;       // { renderer, worlds, sky } — set via bind()
    this._gateTpl = null;
    this._fragTpls = null;
    this.proximity = 0;    // 0..1 for the active world's gate (drives the grade)
    this.proximityTint = new THREE.Color(0.6, 0.4, 1);

    const pr = Math.min(devicePixelRatio, quality.pixelRatio || 1);
    this._pr = pr;

    // nature end on the gate promontory, facing south toward the world
    const gy = terrain.heightAt(GATE.x, GATE.z);
    this.group = new THREE.Group();
    scene.add(this.group);
    this.nature = new PortalEnd(this.group, 'nature', GATE.x, gy + 0.1 + BASE_TO_DISC, GATE.z, 0, pr);

    // the carved pillars are solid; the opening between them stays walkable
    this.natureColliders = new CollisionWorld();
    this.cityColliders = null;
    this._pillarColliders(this.natureColliders, GATE.x, gy + 0.1, GATE.z, 0);

    const loader = new GLTFLoader();
    Promise.all([
      loader.loadAsync('assets/portal_gate.glb'),
      loader.loadAsync('assets/portal_fragments.glb'),
    ]).then(([g, f]) => {
      this._gateTpl = g.scene;
      this._fragTpls = [];
      f.scene.traverse((o) => {
        if (o.isMesh && o.name.startsWith('frag')) {
          const c = o.clone();
          c.position.set(0, 0, 0);
          c.rotation.set(0, 0, 0);
          this._fragTpls.push(c);
        }
      });
      this.nature.setGate(this._gateTpl.clone(true), this._fragTpls);
      if (this.city && !this.city.gate) this.city.setGate(this._gateTpl.clone(true), this._fragTpls);
    }).catch((e) => console.warn('[portal] gate assets missing (run tools/build_portal.py)', e));

    // the city end is attached later, once the city has been built
    this.city = null;

    // the gate itself is a discoverable landmark
    this.site = {
      id: 'gate-0', type: 'gate', world: 'nature',
      name: 'The Ancient Gate',
      flavor: 'The carvings hum. On the other side — somewhere else entirely.',
      color: 0x9f7fe8, discoverR: 55,
      x: GATE.x, y: gy, z: GATE.z,
      discovered: false,
    };
    this.onDiscover = null;

    this._cube = { face: -1, last: -99, end: null, plan: null };
    this._tmp = new THREE.Vector3();
  }

  // renderer / worlds / sky are needed to draw the destination into the window
  bind(ctx) { this.ctx = ctx; }

  // two 1.6 m pillars at local x ±3.4, 8.6 m tall, rotated by the gate's ry
  _pillarColliders(world, x, y, z, ry) {
    const c = Math.cos(ry), s = Math.sin(ry);
    for (const lx of [-3.4, 3.4]) {
      world.addBox(x + lx * c, z - lx * s, 0.85, 0.85, y, y + 8.6, ry);
    }
  }

  attachCityEnd(group, x, y, z, ry) {
    this.city = new PortalEnd(group, 'city', x, y, z, ry, this._pr);
    const ground = this.ctx ? this.ctx.worlds.city.heightAt(x, z) : y - BASE_TO_DISC;
    this.city.dressPlaza(ground);
    if (this._gateTpl) this.city.setGate(this._gateTpl.clone(true), this._fragTpls);
    this.nature.setDestination(this.city);
    this.city.setDestination(this.nature);
    this.cityColliders = new CollisionWorld();
    this._pillarColliders(this.cityColliders, x, y - BASE_TO_DISC, z, ry);
  }

  // cross by walking (or flying) through the doorway itself
  tryTransit(playerPos, activeWorld) {
    if (this.cooldown > 0) return;
    const end = activeWorld === 'nature' ? this.nature : this.city;
    if (!end) return;
    const l = end.local(playerPos, this._tmp);
    if (Math.abs(l.z) < 0.8 && Math.abs(l.x) < 2.3 && l.y > -0.6 && l.y < 4.8) {
      this.cooldown = 2.8;
      this.onTransit?.(activeWorld === 'nature' ? 'city' : 'nature');
    }
  }

  // ---- the window: draw the other world into a cube, one face per frame ----

  _plan(end) {
    const { worlds } = this.ctx;
    const mode = end.world === 'nature' ? 'city' : 'nature';
    if (mode === 'city' && !worlds.city.built) return null;
    const a = worlds.arrival(mode);
    const y = mode === 'city' ? worlds.city.heightAt(a.x, a.z) : worlds.terrain.heightAt(a.x, a.z);
    return { mode, pos: new THREE.Vector3(a.x, y + 2.0, a.z) };
  }

  _ensureCube(end) {
    if (end.cubeRT) return;
    const size = CUBE_SIZES[this.quality.name] || 256;
    end.cubeRT = new THREE.WebGLCubeRenderTarget(size, {
      type: THREE.HalfFloatType, generateMipmaps: false,
      minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter,
    });
    end.cubeCam = new THREE.CubeCamera(0.3, 6500, end.cubeRT);
    // CubeCamera only orients its six face cameras inside update(); we render faces
    // one at a time ourselves, so do that setup by hand
    end.cubeCam.coordinateSystem = this.ctx.renderer.coordinateSystem;
    end.cubeCam.updateCoordinateSystem();
    end.surfMat.uniforms.uCube.value = end.cubeRT.texture;
  }

  _renderFace(end, plan, face) {
    const { renderer, worlds, sky } = this.ctx;
    const cam = end.cubeCam;
    cam.position.copy(plan.pos);
    cam.updateMatrixWorld(true);
    const prevMode = worlds.mode;
    const prevVisible = this.group.visible;
    const prevShadows = renderer.shadowMap.autoUpdate;
    const prevTarget = renderer.getRenderTarget();
    const prevSky = sky.group.position.clone();
    renderer.shadowMap.autoUpdate = false;
    worlds.setMode(plan.mode);
    this.group.visible = plan.mode === 'nature';
    sky.group.position.set(plan.pos.x, 0, plan.pos.z);
    renderer.setRenderTarget(end.cubeRT, face);
    renderer.clear();
    renderer.render(this.scene, cam.children[face]);
    worlds.setMode(prevMode);
    this.group.visible = prevVisible;
    sky.group.position.copy(prevSky);
    renderer.setRenderTarget(prevTarget);
    renderer.shadowMap.autoUpdate = prevShadows;
  }

  _updateWindow(end, dist, t) {
    const c = this._cube;
    if (dist > 150) { c.face = -1; return; }
    if (c.face < 0 && (t - c.last > 14 || !end.hasCube)) {
      const plan = this._plan(end);
      if (!plan) return;
      this._ensureCube(end);
      c.plan = plan; c.end = end; c.face = 0;
    }
    if (c.face >= 0 && c.end === end) {
      this._renderFace(end, c.plan, c.face);
      c.face++;
      if (c.face >= 6) {
        c.face = -1;
        c.last = t;
        end.hasCube = true;
      }
    }
  }

  update(dt, playerPos, elapsed, activeWorld, daylight = 1, camPos = null) {
    this.cooldown = Math.max(0, this.cooldown - dt);
    this.group.visible = activeWorld === 'nature';

    const active = activeWorld === 'nature' ? this.nature : this.city;
    for (const end of [this.nature, this.city]) {
      if (!end) continue;
      const d = end === active
        ? Math.hypot(playerPos.x - end.pos.x, playerPos.z - end.pos.z, (playerPos.y - end.pos.y) * 0.5)
        : 999;
      const target = end === active ? smooth(75, 7, d) : 0;
      end.prox += (target - end.prox) * Math.min(1, dt * 3);
    }
    this.nature.update(elapsed, dt, daylight, camPos);
    this.city?.update(elapsed + 40, dt, daylight, camPos);

    // the colour grade leans toward the destination as you approach
    this.proximity = active ? active.prox : 0;
    if (active) this.proximityTint.copy(active.tint[0]).lerp(active.tint[1], 0.5);

    if (activeWorld === 'nature' && !this.site.discovered) {
      if (Math.hypot(playerPos.x - this.site.x, playerPos.z - this.site.z) < this.site.discoverR) {
        this.site.discovered = true;
        this.onDiscover?.(this.site);
      }
    }
    this.tryTransit(playerPos, activeWorld);

    if (this.ctx && active && active.gate) {
      const d = Math.hypot(playerPos.x - active.pos.x, playerPos.z - active.pos.z);
      this._updateWindow(active, d, elapsed);
    }
  }
}
