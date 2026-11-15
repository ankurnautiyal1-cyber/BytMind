import * as THREE from 'three';
import { mulberry32 } from './noise.js';
import { TIERS } from './render/quality.js';

// Art-directed sky: gradient dome with a stylised sun and moon, twinkling
// coloured stars, a Milky Way band, shooting stars, an aurora over the
// Meadow, and layered noise clouds lit by the sun. The dome also feeds a small
// PMREM environment so every material picks up sky colour.

const DAY_LENGTH = 300; // seconds for a full day/night cycle

function smoothstep(a, b, x) {
  const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
}

const hex = (h) => new THREE.Color(h);

// Sky palette keyed by sun altitude (sin of elevation). Authored in sRGB.
const KEYS = [
  { sy: -0.36, zen: hex('#050a22'), mid: hex('#0f1a44'), hor: hex('#1c2f66') },
  { sy: -0.14, zen: hex('#0b1342'), mid: hex('#2c2b78'), hor: hex('#5a448e') },
  { sy: -0.03, zen: hex('#1c2a72'), mid: hex('#76519f'), hor: hex('#ff7d5e') },
  { sy: 0.07, zen: hex('#3668c8'), mid: hex('#93a9d9'), hor: hex('#ffbc90') },
  { sy: 0.25, zen: hex('#3d89e3'), mid: hex('#82b9ef'), hor: hex('#d0e8f8') },
  { sy: 0.62, zen: hex('#2a79de'), mid: hex('#71b4f1'), hor: hex('#c5e5fa') },
];

// cloud light by hour: [lit, shade]
const CLOUD = {
  night: [hex('#46557f'), hex('#0a1028')],
  dusk: [hex('#ffa070'), hex('#5a4372')],
  day: [hex('#ffffff'), hex('#7d93bd')],
};

const SUN = { day: hex('#fff1dc'), dusk: hex('#ff9a55') };

const tmpA = new THREE.Color();

function sampleKeys(sy, out) {
  let i = 0;
  while (i < KEYS.length - 2 && sy > KEYS[i + 1].sy) i++;
  const a = KEYS[i], b = KEYS[i + 1];
  const t = smoothstep(a.sy, b.sy, sy);
  out.zen.copy(a.zen).lerp(b.zen, t);
  out.mid.copy(a.mid).lerp(b.mid, t);
  out.hor.copy(a.hor).lerp(b.hor, t);
}

// ------------------------------------------------------------------ dome ----

const domeVert = /* glsl */ `
  varying vec3 vDir;
  void main() {
    vDir = normalize(position);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const domeFrag = /* glsl */ `
  #ifndef CLOUD_OCT
  #define CLOUD_OCT 5
  #endif
  varying vec3 vDir;
  uniform float uTime, uDay, uNight, uDusk, uAurora, uCloudCover, uEnv, uCityGlow;
  uniform vec3 uZenith, uMid, uHorizon;
  uniform vec3 uSunDir, uMoonDir, uSunColor, uGlowColor;
  uniform vec3 uCloudLit, uCloudShade;

  float hash12(vec2 p) {
    vec3 p3 = fract(vec3(p.xyx) * 0.1031);
    p3 += dot(p3, p3.yzx + 33.33);
    return fract((p3.x + p3.y) * p3.z);
  }
  float hash13(vec3 p3) {
    p3 = fract(p3 * 0.1031);
    p3 += dot(p3, p3.zyx + 31.32);
    return fract((p3.x + p3.y) * p3.z);
  }
  float vnoise(vec2 p) {
    vec2 i = floor(p), f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash12(i), hash12(i + vec2(1, 0)), f.x),
               mix(hash12(i + vec2(0, 1)), hash12(i + vec2(1, 1)), f.x), f.y);
  }
  float vnoise3(vec3 p) {
    vec3 i = floor(p), f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(mix(hash13(i), hash13(i + vec3(1, 0, 0)), f.x),
          mix(hash13(i + vec3(0, 1, 0)), hash13(i + vec3(1, 1, 0)), f.x), f.y),
      mix(mix(hash13(i + vec3(0, 0, 1)), hash13(i + vec3(1, 0, 1)), f.x),
          mix(hash13(i + vec3(0, 1, 1)), hash13(i + vec3(1, 1, 1)), f.x), f.y), f.z);
  }
  float fbm2(vec2 p) {
    float a = 0.5, s = 0.0;
    mat2 m = mat2(1.6, 1.2, -1.2, 1.6);
    for (int i = 0; i < CLOUD_OCT; i++) { s += a * vnoise(p); p = m * p; a *= 0.5; }
    return s;
  }
  float fbm3(vec3 p) {
    float a = 0.5, s = 0.0;
    for (int i = 0; i < 4; i++) { s += a * vnoise3(p); p = p * 2.03 + 11.7; a *= 0.5; }
    return s;
  }

  // 0..1 cloud alpha plus a "lit" factor for shading
  vec2 cloudField(vec3 d) {
    float h = d.y;
    vec2 uv = d.xz / (h * 0.6 + 0.18);
    uv = uv * 0.85 + vec2(uTime * 0.008, uTime * 0.0033);
    float n = fbm2(uv);
    float dens = smoothstep(0.52 - uCloudCover * 0.18, 0.66, n);
    vec2 toSun = normalize(uSunDir.xz + vec2(1e-4)) * 0.07;
    float n2 = fbm2(uv + toSun);
    float lit = clamp(0.6 - (n2 - n) * 9.0, 0.0, 1.0);
    return vec2(dens * smoothstep(0.0, 0.16, h), lit);
  }

  vec3 moonDisc(vec3 d, float rad, out float mask) {
    vec3 m = uMoonDir;
    float cd = dot(d, m);
    mask = 0.0;
    if (cd < 0.9) return vec3(0.0);
    vec3 up = abs(m.y) > 0.95 ? vec3(1, 0, 0) : vec3(0, 1, 0);
    vec3 t = normalize(cross(up, m));
    vec3 b = cross(m, t);
    vec3 q = d - m * cd;
    vec2 p = vec2(dot(q, t), dot(q, b)) / rad;
    float r = length(p);
    mask = 1.0 - smoothstep(0.94, 1.0, r);
    if (mask <= 0.0) return vec3(0.0);
    vec3 n = vec3(p, sqrt(max(1.0 - r * r, 0.0)));
    vec3 L = normalize(vec3(-0.45, 0.3, 0.85));
    float diff = clamp(dot(n, L) * 0.85 + 0.35, 0.0, 1.0);
    float maria = fbm3(vec3(p * 1.7, 4.0));
    float cr = vnoise(p * 7.0) * 0.5 + vnoise(p * 15.0) * 0.5;
    float alb = 0.78 + 0.22 * smoothstep(0.4, 0.62, maria) - 0.1 * smoothstep(0.55, 0.9, cr) * 0.6;
    vec3 base = vec3(1.0, 0.96, 0.86) * alb;
    return base * diff * 3.2;
  }

  void main() {
    vec3 d = normalize(vDir);
    float h = max(d.y, 0.0);
    float sd = dot(d, uSunDir);

    // ---- vertical gradient ----
    vec3 col = mix(uHorizon, uMid, smoothstep(0.0, 0.34, h));
    col = mix(col, uZenith, smoothstep(0.22, 0.95, h));

    // warm glow around the sun, and the lavender "belt of Venus" opposite it
    float low = pow(max(1.0 - h, 0.0), 3.0);
    col += uGlowColor * pow(max(sd, 0.0), 2.6) * low * uDusk * 0.85;
    vec3 away = normalize(vec3(-uSunDir.x, 0.0, -uSunDir.z) + vec3(1e-4));
    float ad = max(dot(normalize(vec3(d.x, 0.0, d.z) + vec3(1e-4)), away), 0.0);
    col = mix(col, vec3(0.62, 0.45, 0.78) * 0.85, pow(ad, 3.0) * low * uDusk * 0.32);

    // the city's light pollution: a warm-violet glow hugging the horizon
    float cg = uCityGlow * uNight * pow(max(1.0 - h, 0.0), 3.2);
    vec3 gcol = mix(vec3(1.0, 0.42, 0.18), vec3(0.72, 0.22, 0.95), 0.5 + 0.5 * sin(atan(d.z, d.x) * 2.0 + 0.9));
    col += gcol * cg * 0.6;

    // ---- night sky: Milky Way ----
    float starVis = uNight * smoothstep(0.0, 0.18, d.y) * (1.0 - uEnv);
    if (starVis > 0.001) {
      vec3 gn = normalize(vec3(0.35, 0.78, 0.52));
      float band = dot(d, gn);
      float mw = exp(-band * band * 16.0);
      float n1 = fbm3(d * 5.0 + 3.0);
      float n2 = fbm3(d * 13.0 - 7.0);
      mw *= (0.35 + 1.1 * n1) * smoothstep(0.25, 0.7, n2 + 0.2);
      vec3 mwc = mix(vec3(0.20, 0.30, 0.62), vec3(0.68, 0.36, 0.56), n1);
      col += mwc * mw * 0.55 * starVis;
    }

    // ---- aurora (the Meadow's north) ----
    if (uAurora > 0.01 && d.y > 0.015 && uEnv < 0.5) {
      vec2 p = d.xz / (d.y + 0.22);
      vec3 ac = vec3(0.0);
      for (int i = 0; i < 3; i++) {
        float fi = float(i);
        float wob = vnoise(vec2(p.x * 0.28 + uTime * 0.018 + fi * 7.3, uTime * 0.04 + fi * 2.0));
        float centre = 1.25 + fi * 0.62 + wob * 1.7;
        float rb = (-p.y - centre) * 1.5;
        float ribbon = exp(-rb * rb);
        float rays = 0.45 + 0.55 * vnoise(vec2(p.x * 4.2 + fi * 3.0, uTime * 0.35 + fi));
        float fold = 0.6 + 0.4 * sin(p.x * 1.3 + uTime * 0.12 + fi * 1.9);
        vec3 c = mix(vec3(0.12, 1.0, 0.55), vec3(0.20, 0.75, 1.0), smoothstep(0.1, 0.5, d.y));
        c = mix(c, vec3(0.72, 0.35, 1.0), smoothstep(0.35, 0.75, d.y + fi * 0.04));
        ac += c * ribbon * rays * fold;
      }
      float fade = smoothstep(0.015, 0.2, d.y) * (1.0 - smoothstep(0.7, 1.0, d.y));
      col += ac * uAurora * fade * 0.85 * (1.0 - uDay);
    }

    // ---- clouds ----
    float cloudA = 0.0;
    if (d.y > 0.0) {
      vec2 cf = cloudField(d);
      cloudA = cf.x * 0.94;
      vec3 cc = mix(uCloudShade, uCloudLit, cf.y);
      float edge = smoothstep(0.0, 0.5, cf.x) * (1.0 - smoothstep(0.5, 1.0, cf.x));
      cc += uSunColor * edge * pow(max(sd, 0.0), 4.0) * 0.5 * uDay;
      // clouds melt into the horizon haze
      cc = mix(cc, uHorizon, (1.0 - smoothstep(0.0, 0.3, d.y)) * 0.55);
      col = mix(col, cc, cloudA);
    }

    // ---- sun ----
    float sunUp = smoothstep(-0.14, 0.02, uSunDir.y);
    if (uEnv < 0.5) {
      float disc = smoothstep(cos(0.027), cos(0.0225), sd);
      float halo = pow(max(sd, 0.0), 420.0) * 2.2 + pow(max(sd, 0.0), 48.0) * 0.32;
      col += uSunColor * (disc * 20.0 * (1.0 - cloudA * 0.92) + halo * (1.0 - cloudA * 0.5)) * sunUp;
    } else {
      col += uSunColor * pow(max(sd, 0.0), 6.0) * 0.5 * sunUp;
    }

    // ---- moon ----
    float moonUp = smoothstep(-0.1, 0.04, uMoonDir.y);
    if (uEnv < 0.5 && moonUp > 0.001) {
      float md;
      vec3 mc = moonDisc(d, 0.042, md);
      float cm = dot(d, uMoonDir);
      float mhalo = pow(max(cm, 0.0), 70.0) * 0.6 + pow(max(cm, 0.0), 9.0) * 0.12;
      col += (mc * md * (1.0 - cloudA * 0.85) + vec3(0.62, 0.72, 1.0) * mhalo * (1.0 - cloudA * 0.4)) * moonUp;
    } else if (uEnv > 0.5) {
      col += vec3(0.5, 0.6, 0.9) * pow(max(dot(d, uMoonDir), 0.0), 5.0) * 0.18 * smoothstep(-0.1, 0.04, uMoonDir.y);
    }

    gl_FragColor = vec4(col, 1.0);
  }
`;

function makeDomeUniforms() {
  return {
    uTime: { value: 0 },
    uDay: { value: 1 },
    uNight: { value: 0 },
    uDusk: { value: 0 },
    uAurora: { value: 0 },
    uCloudCover: { value: 0.5 },
    uEnv: { value: 0 },
    uCityGlow: { value: 0 },
    uZenith: { value: new THREE.Color() },
    uMid: { value: new THREE.Color() },
    uHorizon: { value: new THREE.Color() },
    uSunDir: { value: new THREE.Vector3(0, 1, 0) },
    uMoonDir: { value: new THREE.Vector3(0, -1, 0) },
    uSunColor: { value: new THREE.Color() },
    uGlowColor: { value: new THREE.Color(1.0, 0.45, 0.2) },
    uCloudLit: { value: new THREE.Color() },
    uCloudShade: { value: new THREE.Color() },
  };
}

// ----------------------------------------------------------------- stars ----

const starVert = /* glsl */ `
  attribute float aSize;
  attribute float aPhase;
  attribute vec3 aColor;
  uniform float uTime, uPR;
  varying vec3 vCol;
  void main() {
    vec3 d = normalize(position);
    float tw = 0.62 + 0.38 * sin(uTime * (1.2 + aPhase * 2.2) + aPhase * 40.0);
    vCol = aColor * tw * smoothstep(0.0, 0.16, d.y);
    gl_PointSize = aSize * uPR * (0.8 + 0.4 * tw);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;
const starFrag = /* glsl */ `
  uniform float uOpacity;
  varying vec3 vCol;
  void main() {
    vec2 c = gl_PointCoord * 2.0 - 1.0;
    float r = length(c);
    float core = exp(-r * r * 5.0);
    gl_FragColor = vec4(vCol * core * uOpacity, 1.0);
  }
`;

function buildStars() {
  const N = 3200;
  const pos = new Float32Array(N * 3);
  const size = new Float32Array(N);
  const phase = new Float32Array(N);
  const col = new Float32Array(N * 3);
  const rand = mulberry32(424242);
  const palette = [
    [0.72, 0.82, 1.0], [0.85, 0.9, 1.0], [1.0, 1.0, 1.0],
    [1.0, 0.93, 0.78], [1.0, 0.78, 0.6], [0.8, 0.7, 1.0],
  ];
  let i = 0;
  while (i < N) {
    const u = rand() * 2 - 1;
    if (Math.abs(u) < 0.03) continue;
    const a = rand() * Math.PI * 2;
    const r = Math.sqrt(1 - u * u);
    pos[i * 3] = Math.cos(a) * r * 3800;
    pos[i * 3 + 1] = Math.abs(u) * 3800;
    pos[i * 3 + 2] = Math.sin(a) * r * 3800;
    const m = rand();
    const bright = m > 0.985 ? 2.6 : m > 0.93 ? 1.5 : 0.55 + rand() * 0.45;
    size[i] = m > 0.985 ? 7 : m > 0.93 ? 4.6 : 2.2 + rand() * 1.4;
    phase[i] = rand();
    const c = palette[Math.floor(rand() * palette.length)];
    col[i * 3] = c[0] * bright;
    col[i * 3 + 1] = c[1] * bright;
    col[i * 3 + 2] = c[2] * bright;
    i++;
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  g.setAttribute('aSize', new THREE.BufferAttribute(size, 1));
  g.setAttribute('aPhase', new THREE.BufferAttribute(phase, 1));
  g.setAttribute('aColor', new THREE.BufferAttribute(col, 3));
  const m = new THREE.ShaderMaterial({
    uniforms: { uTime: { value: 0 }, uPR: { value: 1 }, uOpacity: { value: 0 } },
    vertexShader: starVert,
    fragmentShader: starFrag,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    fog: false,
  });
  const pts = new THREE.Points(g, m);
  pts.frustumCulled = false;
  pts.renderOrder = 1001;
  return pts;
}

// ---------------------------------------------------------- shooting star ----

function buildShootingStar() {
  const geo = new THREE.PlaneGeometry(1, 1);
  const mat = new THREE.ShaderMaterial({
    uniforms: { uA: { value: 0 } },
    vertexShader: /* glsl */ `
      varying vec2 vUv;
      void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
    `,
    fragmentShader: /* glsl */ `
      uniform float uA;
      varying vec2 vUv;
      void main() {
        float along = vUv.x;                       // 0 tail → 1 head
        float across = 1.0 - abs(vUv.y * 2.0 - 1.0);
        float a = pow(along, 3.0) * smoothstep(0.0, 0.6, across) * uA;
        gl_FragColor = vec4(vec3(0.85, 0.92, 1.0) * 3.0 * a, 1.0);
      }
    `,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    fog: false,
    side: THREE.DoubleSide,
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.frustumCulled = false;
  mesh.renderOrder = 1002;
  mesh.visible = false;
  return mesh;
}

// ------------------------------------------------------------------- sky ----

export class SkySystem {
  constructor(scene, renderer, quality = TIERS.medium) {
    this.scene = scene;
    this.renderer = renderer;
    this.quality = quality;
    this.time = 0.34; // 0 = midnight, 0.25 = sunrise, 0.5 = noon
    this.dayLength = DAY_LENGTH;
    this.daylight = 1;
    this.dusk = 0;
    this.world = 'nature';
    this.aurora = 0;
    this.cityGlow = 0;
    this.wetness = 0; // set by the city's rain

    // values the post pipeline reads
    this.sunColor = new THREE.Color();
    this.horizonColor = new THREE.Color();
    this.zenithColor = new THREE.Color();
    this.mistDensity = 0.0004;
    this.shaftStrength = 0.4;
    this.scatterStrength = 0.5;

    this._pal = { zen: new THREE.Color(), mid: new THREE.Color(), hor: new THREE.Color() };

    // ---- dome: follows the player so the horizon never runs out ----
    this.group = new THREE.Group();

    this.domeUniforms = makeDomeUniforms();
    const defines = { CLOUD_OCT: quality.clouds === 'full' ? 5 : 3 };
    this.domeMat = new THREE.ShaderMaterial({
      uniforms: this.domeUniforms,
      vertexShader: domeVert,
      fragmentShader: domeFrag,
      defines,
      side: THREE.BackSide,
      depthWrite: false,
      depthTest: true,
      fog: false,
    });
    this.dome = new THREE.Mesh(new THREE.SphereGeometry(4500, 48, 32), this.domeMat);
    this.dome.frustumCulled = false;
    this.dome.renderOrder = 1000; // after opaque geometry: only visible sky pixels get shaded
    this.group.add(this.dome);

    this.stars = buildStars();
    this.group.add(this.stars);

    this.shoot = buildShootingStar();
    this.group.add(this.shoot);
    this._shootT = 8 + Math.random() * 10;
    this._shootAge = -1;

    scene.add(this.group);

    // ---- lights ----
    this.sun = new THREE.DirectionalLight(0xffffff, 2.5);
    this.sun.castShadow = true;
    this.sun.shadow.mapSize.set(2048, 2048);
    const sc = this.sun.shadow.camera;
    sc.left = -280; sc.right = 280; sc.top = 280; sc.bottom = -280;
    sc.near = 10; sc.far = 1200;
    this.sun.shadow.bias = -0.0004;
    this.sun.shadow.normalBias = 2;
    scene.add(this.sun);
    scene.add(this.sun.target);

    this.moonLight = new THREE.DirectionalLight(0x93a7cc, 0);
    scene.add(this.moonLight);
    scene.add(this.moonLight.target);

    this.hemi = new THREE.HemisphereLight(0xbfd7f0, 0x5c6b4c, 0.6);
    scene.add(this.hemi);

    this.sunDir = new THREE.Vector3(0, 1, 0);
    this.moonDir = new THREE.Vector3(0, -1, 0);

    // ---- sky → environment map for image-based lighting ----
    this._envScene = new THREE.Scene();
    const envUniforms = { ...this.domeUniforms, uEnv: { value: 1 } };
    const envMat = new THREE.ShaderMaterial({
      uniforms: envUniforms,
      vertexShader: domeVert,
      fragmentShader: domeFrag,
      defines: { CLOUD_OCT: 3 },
      side: THREE.BackSide,
      depthWrite: false,
      fog: false,
    });
    this._envScene.add(new THREE.Mesh(new THREE.SphereGeometry(50, 32, 16), envMat));
    this._pmrem = new THREE.PMREMGenerator(renderer);
    this._envRT = null;
    this._envClock = 99;
  }

  _refreshEnv(dt) {
    this._envClock += dt;
    if (this._envClock < this.quality.envEvery) return;
    this._envClock = 0;
    const rt = this._pmrem.fromScene(this._envScene, 0, 0.1, 100, { size: this.quality.envSize });
    this.scene.environment = rt.texture;
    if (this._envRT) this._envRT.dispose();
    this._envRT = rt;
  }

  update(dt, p, elapsed = 0) {
    // New York lingers at dusk and night, and hurries through the afternoon
    let speed = 1;
    if (this.world === 'city') {
      speed = 0.42 + 1.1 * smoothstep(-0.08, 0.38, this.sunDir.y);
    }
    this.time = (this.time + (dt * speed) / this.dayLength) % 1;
    const theta = (this.time - 0.25) * Math.PI * 2;
    const sy = Math.sin(theta);
    this.sunDir.set(Math.cos(theta), sy, 0.32).normalize();
    this.moonDir.copy(this.sunDir).multiplyScalar(-1);

    const d = (this.daylight = smoothstep(-0.07, 0.16, sy));
    const dusk = (this.dusk = Math.pow(Math.max(0, 1 - Math.abs(sy) / 0.24), 1.2));
    const night = 1 - d;
    const morning = this.time < 0.5;

    // ---- palette ----
    sampleKeys(this.sunDir.y, this._pal);
    const pal = this._pal;
    this.horizonColor.copy(pal.hor);
    this.zenithColor.copy(pal.zen);

    this.sunColor.copy(SUN.day).lerp(SUN.dusk, Math.min(1, dusk * 1.4));

    const target = this.world === 'nature' ? 1 : 0;
    this.aurora += (target - this.aurora) * Math.min(1, dt * 0.6);

    this.cityGlow += ((this.world === 'city' ? 1 : 0) - this.cityGlow) * Math.min(1, dt * 0.8);
    const u = this.domeUniforms;
    u.uCityGlow.value = this.cityGlow;
    u.uTime.value = elapsed;
    u.uDay.value = d;
    u.uNight.value = Math.pow(night, 1.2);
    u.uDusk.value = dusk;
    u.uAurora.value = this.aurora * Math.pow(night, 1.5);
    u.uCloudCover.value = 0.5 + 0.1 * Math.sin(elapsed * 0.01) + 0.08 * dusk;
    u.uZenith.value.copy(pal.zen);
    u.uMid.value.copy(pal.mid);
    u.uHorizon.value.copy(pal.hor);
    u.uSunDir.value.copy(this.sunDir);
    u.uMoonDir.value.copy(this.moonDir);
    u.uSunColor.value.copy(this.sunColor);
    u.uGlowColor.value.copy(this.sunColor).lerp(tmpA.setRGB(1.0, 0.36, 0.3), 0.35);
    // cloud light by hour
    const lit = u.uCloudLit.value.copy(CLOUD.night[0]).lerp(CLOUD.day[0], d).lerp(CLOUD.dusk[0], Math.min(1, dusk * 1.15));
    u.uCloudShade.value.copy(CLOUD.night[1]).lerp(CLOUD.day[1], d).lerp(CLOUD.dusk[1], Math.min(1, dusk * 1.15));
    void lit;

    // ---- fog matches the horizon band so land melts into the sky ----
    const fog = this.scene.fog;
    fog.color.copy(pal.hor);
    // the city glows: haze over the island picks up neon violet
    fog.color.lerp(tmpA.setRGB(0.3, 0.16, 0.36), this.cityGlow * night * 0.5);
    this.horizonColor.copy(fog.color);
    fog.far = 1300 + 1500 * d;
    fog.near = 60 + 60 * d;

    // ---- lights ----
    this.hemi.color.copy(pal.mid).lerp(tmpA.setRGB(0.8, 0.9, 1.0), 0.35);
    this.hemi.groundColor.setHex(0x39445a).lerp(tmpA.setHex(0x5c6b4c), d)
      .lerp(tmpA.copy(pal.hor).multiplyScalar(0.55), dusk * 0.6);
    // warm bounce light at golden hour keeps shaded ground from going black
    this.hemi.intensity = 0.62 + 0.42 * night + 0.5 * dusk;

    this.sun.color.copy(this.sunColor);
    this.sun.intensity = 2.6 * d;
    this.sun.visible = d > 0.02;
    this.sun.castShadow = d > 0.04;
    if (this.sun.visible) this.sun.position.copy(p).addScaledVector(this.sunDir, 500);
    this.sun.target.position.copy(p);
    this.sun.target.updateMatrixWorld();

    this.moonLight.intensity = 2.2 * (1 - d);
    this.moonLight.position.copy(p).addScaledVector(this.moonDir, 500);
    this.moonLight.target.position.copy(p);
    this.moonLight.target.updateMatrixWorld();

    // the city's pale concrete blows out under full sun: pull it down a touch
    const cityDim = this.world === 'city' ? 1 - 0.14 * d : 1;
    this.renderer.toneMappingExposure = (0.78 + 0.14 * d + 0.1 * dusk) * cityDim;
    this.scene.environmentIntensity = 0.45 + 0.45 * d + 0.35 * dusk;

    // ---- atmosphere parameters (read by the post pipeline) ----
    this.mistDensity = 0.00028 + dusk * (morning ? 0.0017 : 0.0007) + night * 0.00025;
    this.shaftStrength = 0.26 * Math.min(1, d * 1.2 + dusk * 0.6) * (0.55 + 0.7 * dusk);
    this.scatterStrength = 0.18 + 0.6 * dusk;

    // ---- dome, stars, shooting stars ----
    this.group.position.set(p.x, 0, p.z);
    const su = this.stars.material.uniforms;
    su.uTime.value = elapsed;
    su.uOpacity.value = Math.pow(night, 1.1);
    this.stars.visible = night > 0.02;
    this.stars.rotation.y += dt * 0.004;
    this._updateShootingStar(dt, night);

    this._refreshEnv(dt);
  }

  _updateShootingStar(dt, night) {
    const s = this.shoot;
    if (night < 0.7) { s.visible = false; this._shootAge = -1; return; }
    if (this._shootAge < 0) {
      this._shootT -= dt;
      if (this._shootT <= 0) {
        // pick a streak high in the sky, drifting across it
        const az = Math.random() * Math.PI * 2;
        const el = 0.35 + Math.random() * 0.5;
        const r = 3400;
        const cx = Math.cos(az) * Math.cos(el) * r;
        const cy = Math.sin(el) * r;
        const cz = Math.sin(az) * Math.cos(el) * r;
        this._shootFrom = new THREE.Vector3(cx, cy, cz);
        const dirAz = az + Math.PI / 2 + (Math.random() - 0.5) * 0.8;
        this._shootDir = new THREE.Vector3(Math.cos(dirAz), -0.35 - Math.random() * 0.25, Math.sin(dirAz)).normalize();
        this._shootAge = 0;
        this._shootT = 10 + Math.random() * 18;
        s.scale.set(420, 7, 1);
      }
      return;
    }
    this._shootAge += dt;
    const life = 0.95;
    if (this._shootAge > life) { s.visible = false; this._shootAge = -1; return; }
    const k = this._shootAge / life;
    s.visible = true;
    s.position.copy(this._shootFrom).addScaledVector(this._shootDir, k * 900);
    // orient the quad: length along travel direction, face the origin
    const m = new THREE.Matrix4();
    const zAxis = s.position.clone().normalize().negate(); // quad normal toward the viewer at origin
    const xAxis = this._shootDir.clone();
    const yAxis = new THREE.Vector3().crossVectors(zAxis, xAxis).normalize();
    xAxis.crossVectors(yAxis, zAxis).normalize();
    m.makeBasis(xAxis, yAxis, zAxis);
    s.quaternion.setFromRotationMatrix(m);
    s.material.uniforms.uA.value = Math.sin(k * Math.PI);
  }

  setPixelRatio(pr) { this.stars.material.uniforms.uPR.value = pr; }
}
