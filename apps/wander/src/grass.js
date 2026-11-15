import * as THREE from 'three';
import { WORLD_HALF } from './terrain.js';

// GPU grass and wildflowers that follow the player. A fixed grid of instances
// is re-mapped every frame onto the world cells around you (so every blade is
// stable in the world and nothing is ever spawned or culled on the CPU); the
// vertex shader drops each tuft on the terrain (height texture), reads the
// baked ground colour + grass density, thins itself with distance, sways in the
// shared wind, and — for the flowers — glows after dark.

const TUFT_BLADES = 9;

// ---------------------------------------------------------------- geometry ----

function tuftGeometry() {
  const pos = [], aT = [], aRnd = [], aPart = [], idx = [];
  let v = 0;
  for (let b = 0; b < TUFT_BLADES; b++) {
    const yaw = (b / TUFT_BLADES) * Math.PI * 2 + Math.random() * 0.6;
    const r0 = 0.03 + Math.random() * 0.2;
    const ox = Math.cos(yaw * 1.7) * r0, oz = Math.sin(yaw * 1.7) * r0;
    const lean = 0.12 + Math.random() * 0.3;                // splay outward
    const len = 0.3 + Math.random() * 0.26;
    const w = 0.026 + Math.random() * 0.016;
    const cy = Math.cos(yaw), sy = Math.sin(yaw);
    // three rows: base, mid, tip
    const rows = [[0, w, 0], [0.55, w * 0.72, lean * 0.45], [1.0, 0.0, lean]];
    const rnd = Math.random();
    for (let r = 0; r < 3; r++) {
      const [y, hw, out] = rows[r];
      for (const side of (hw === 0 ? [0] : [-1, 1])) {
        // blade lies in a vertical plane facing `yaw`, bowing outward
        const lx = side * hw, lz = out * len * 0.5;
        pos.push(ox + lx * cy - lz * sy * -1, y * len, oz + lx * sy + lz * cy * -1);
        aT.push(r / 2); aRnd.push(rnd); aPart.push(0);
        v++;
      }
    }
    const base = v - 5;
    // quad (0,1,2,3) + tip triangle (2,3,4)
    idx.push(base, base + 1, base + 2, base + 1, base + 3, base + 2, base + 2, base + 3, base + 4);
  }
  const g = new THREE.InstancedBufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('aT', new THREE.Float32BufferAttribute(aT, 1));
  g.setAttribute('aRnd', new THREE.Float32BufferAttribute(aRnd, 1));
  g.setAttribute('aPart', new THREE.Float32BufferAttribute(aPart, 1));
  g.setAttribute('normal', new THREE.Float32BufferAttribute(new Array(pos.length).fill(0).map((_, i) => (i % 3 === 1 ? 1 : 0)), 3));
  g.setIndex(idx);
  return g;
}

function flowerGeometry() {
  const pos = [], aT = [], aRnd = [], aPart = [], idx = [];
  let v = 0;
  const push = (x, y, z, t, part, rnd) => { pos.push(x, y, z); aT.push(t); aRnd.push(rnd); aPart.push(part); return v++; };
  // stem: thin tapered quad, a touch of lean
  const lean = 0.05;
  const s0 = push(-0.012, 0, 0, 0, 0, 0), s1 = push(0.012, 0, 0, 0, 0, 0);
  const s2 = push(-0.008, 0.28, lean, 0.8, 0, 0), s3 = push(0.008, 0.28, lean, 0.8, 0, 0);
  idx.push(s0, s1, s2, s1, s3, s2);
  // head: five petals fanned around a centre, tilted up-and-out
  const hy = 0.3, hz = lean;
  const c = push(0, hy + 0.012, hz, 1, 2, 0);
  const N = 6;
  for (let i = 0; i < N; i++) {
    const a0 = (i / N) * Math.PI * 2, a1 = ((i + 1) / N) * Math.PI * 2, am = (a0 + a1) / 2;
    const R = 0.075;
    const p0 = push(Math.cos(a0) * R * 0.45, hy, hz + Math.sin(a0) * R * 0.45, 1, 1, 0);
    const pm = push(Math.cos(am) * R, hy + 0.025, hz + Math.sin(am) * R, 1, 1, 0);
    const p1 = push(Math.cos(a1) * R * 0.45, hy, hz + Math.sin(a1) * R * 0.45, 1, 1, 0);
    idx.push(p0, pm, c, pm, p1, c);
  }
  const g = new THREE.InstancedBufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('aT', new THREE.Float32BufferAttribute(aT, 1));
  g.setAttribute('aRnd', new THREE.Float32BufferAttribute(aRnd, 1));
  g.setAttribute('aPart', new THREE.Float32BufferAttribute(aPart, 1));
  g.setAttribute('normal', new THREE.Float32BufferAttribute(new Array(pos.length).fill(0).map((_, i) => (i % 3 === 1 ? 1 : 0)), 3));
  g.setIndex(idx);
  return g;
}

// a little toadstool: tapered stem + domed cap (+ a pale underside)
function mushroomGeometry() {
  const pos = [], aT = [], aRnd = [], aPart = [], idx = [];
  let v = 0;
  const push = (x, y, z, t, part) => { pos.push(x, y, z); aT.push(t); aRnd.push(0); aPart.push(part); return v++; };
  const S = 7;
  // stem
  const ring = (r, y, t, part) => { const out = []; for (let i = 0; i < S; i++) { const a = (i / S) * Math.PI * 2; out.push(push(Math.cos(a) * r, y, Math.sin(a) * r, t, part)); } return out; };
  const s0 = ring(0.05, 0.0, 0, 0), s1 = ring(0.035, 0.16, 0.5, 0);
  for (let i = 0; i < S; i++) { const j = (i + 1) % S; idx.push(s0[i], s0[j], s1[i], s0[j], s1[j], s1[i]); }
  // cap: dome rings
  const c0 = ring(0.14, 0.16, 0.6, 1), c1 = ring(0.115, 0.23, 0.8, 1), c2 = ring(0.05, 0.28, 0.95, 1);
  const top = push(0, 0.3, 0, 1, 1);
  for (let i = 0; i < S; i++) {
    const j = (i + 1) % S;
    idx.push(c0[i], c0[j], c1[i], c0[j], c1[j], c1[i]);
    idx.push(c1[i], c1[j], c2[i], c1[j], c2[j], c2[i]);
    idx.push(c2[i], c2[j], top);
  }
  // gills: underside disc
  const g0 = ring(0.14, 0.158, 0.6, 2), gc = push(0, 0.15, 0, 0.6, 2);
  for (let i = 0; i < S; i++) { const j = (i + 1) % S; idx.push(g0[j], g0[i], gc); }
  const g = new THREE.InstancedBufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('aT', new THREE.Float32BufferAttribute(aT, 1));
  g.setAttribute('aRnd', new THREE.Float32BufferAttribute(aRnd, 1));
  g.setAttribute('aPart', new THREE.Float32BufferAttribute(aPart, 1));
  g.setAttribute('normal', new THREE.Float32BufferAttribute(new Array(pos.length).fill(0).map((_, i) => (i % 3 === 1 ? 1 : 0)), 3));
  g.setIndex(idx);
  return g;
}

function cellAttribute(n) {
  const a = new Float32Array(n * n * 2);
  for (let j = 0; j < n; j++) for (let i = 0; i < n; i++) { a[(j * n + i) * 2] = i; a[(j * n + i) * 2 + 1] = j; }
  return new THREE.InstancedBufferAttribute(a, 2);
}

// ------------------------------------------------------------------ shaders ----

const COMMON = /* glsl */ `
  attribute vec2 aCell;
  attribute float aT;
  attribute float aRnd;
  attribute float aPart;
  uniform vec2 uPlayer;
  uniform float uN, uCell, uRange, uTime, uWind, uNight, uWorldHalf, uTCell, uTexN;
  uniform sampler2D uHeightTex;
  uniform sampler2D uColorTex;
  uniform sampler2D uForestTex;
  varying vec3 vGCol;
  varying vec3 vGEm;

  float gh(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float gn(vec2 p) {
    vec2 i = floor(p), f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(mix(gh(i), gh(i + vec2(1, 0)), f.x), mix(gh(i + vec2(0, 1)), gh(i + vec2(1, 1)), f.x), f.y);
  }
  // triangle-exact terrain height: same split as the rendered mesh
  float gground(vec2 w) {
    vec2 g = clamp((w + uWorldHalf) / uTCell, vec2(0.0), vec2(uTexN - 1.0 - 1e-3));
    ivec2 i0 = ivec2(floor(g));
    vec2 f = g - vec2(i0);
    float a = texelFetch(uHeightTex, i0, 0).r;
    float d = texelFetch(uHeightTex, i0 + ivec2(1, 0), 0).r;
    float b = texelFetch(uHeightTex, i0 + ivec2(0, 1), 0).r;
    float c = texelFetch(uHeightTex, i0 + ivec2(1, 1), 0).r;
    return (f.x + f.y <= 1.0) ? a + (d - a) * f.x + (b - a) * f.y
                              : c + (b - c) * (1.0 - f.x) + (d - c) * (1.0 - f.y);
  }
`;

const GRASS_VERT = /* glsl */ `
  vec2 P = floor(uPlayer / uCell);
  vec2 rel = mod(aCell - P + uN * 0.5, uN) - uN * 0.5;
  vec2 cw = P + rel;
  float h1 = gh(cw), h2 = gh(cw + 17.31), h3 = gh(cw + 91.7), h4 = gh(cw + 53.1);
  vec2 pos = (cw + vec2(h1, h2)) * uCell;
  float ground = gground(pos);
  vec4 tc = texture2D(uColorTex, (pos + uWorldHalf) / (uWorldHalf * 2.0));
  float dist = length(pos - uPlayer);
  float fade = 1.0 - smoothstep(uRange * 0.55, uRange, dist);
  float keep = step(h3, tc.a) * step(h4, fade * 1.15);
  float hs = (0.7 + 0.7 * h1) * (0.5 + 0.5 * fade) * keep;
  float ws = (0.9 + 0.5 * h2) * keep;
  vec3 transformed = vec3(pos.x, ground - 0.02, pos.y) + vec3(position.x * ws, position.y * hs, position.z * ws);
  float bend = aT * aT;
  float gust = 0.55 + 0.45 * sin(uTime * 0.5 + pos.x * 0.02 + pos.y * 0.017);
  float sw = sin(uTime * 1.9 + pos.x * 0.6 + pos.y * 0.5 + aRnd * 6.28);
  transformed.x += (sw * 0.06 + 0.13 * gust) * bend * uWind * hs;
  transformed.z += cos(uTime * 1.6 + pos.y * 0.5 + aRnd * 5.0) * 0.05 * bend * uWind * hs;

  vec3 gc = tc.rgb;
  vec3 root = gc * vec3(0.40, 0.55, 0.30);
  vec3 tip = gc * vec3(1.28, 1.42, 0.82) * (0.88 + 0.3 * h1);
  vec3 col = mix(root, tip, pow(aT, 0.85));
  col = mix(col, vec3(0.66, 0.58, 0.26), step(0.9, h2) * aT * 0.65);   // a few sun-dried tufts
  col += vec3(0.015, 0.04, 0.07) * uNight * (0.3 + aT);                // moonlit tips
  vGCol = col;
  vGEm = vec3(0.0);
`;

const FLOWER_VERT = /* glsl */ `
  vec2 P = floor(uPlayer / uCell);
  vec2 rel = mod(aCell - P + uN * 0.5, uN) - uN * 0.5;
  vec2 cw = P + rel;
  float h1 = gh(cw), h2 = gh(cw + 17.31), h3 = gh(cw + 91.7), h4 = gh(cw + 53.1);
  vec2 pos = (cw + vec2(h1, h2)) * uCell;
  float ground = gground(pos);
  vec4 tc = texture2D(uColorTex, (pos + uWorldHalf) / (uWorldHalf * 2.0));
  float dist = length(pos - uPlayer);
  float fade = 1.0 - smoothstep(uRange * 0.5, uRange, dist);
  // flowers come in drifts of one colour
  float drift = smoothstep(0.48, 0.74, gn(cw * 0.05));
  float keep = step(h3, drift * 0.85 + 0.03) * step(0.45, tc.a) * step(h4, fade * 1.1);
  float hs = (0.7 + 0.7 * h1) * keep;
  vec3 transformed = vec3(pos.x, ground - 0.02, pos.y) + position * hs;
  float bend = aT * aT;
  float sw = sin(uTime * 1.5 + pos.x * 0.5 + pos.y * 0.45 + h2 * 6.28);
  transformed.x += (sw * 0.04 + 0.05) * bend * uWind * hs;

  float pn = gn(cw * 0.11);
  float idxF = floor(fract(pn * 3.7 + h1 * 0.12) * 6.0);
  vec3 pal[6] = vec3[6](
    vec3(1.0, 0.98, 0.9), vec3(1.0, 0.82, 0.22), vec3(1.0, 0.42, 0.62),
    vec3(0.6, 0.42, 1.0), vec3(0.32, 0.58, 1.0), vec3(1.0, 0.52, 0.18));
  vec3 fc = pal[int(idxF)];
  float glows = step(0.35, fract(pn * 7.3));
  vec3 stem = vec3(0.12, 0.3, 0.07);
  vec3 col = aPart < 0.5 ? stem : (aPart < 1.5 ? fc : vec3(1.0, 0.8, 0.2));
  vGCol = col;
  // after dark the petals glow like little lanterns
  vGEm = (aPart < 0.5 ? vec3(0.0) : (aPart < 1.5 ? fc * glows * 2.6 : vec3(1.0, 0.7, 0.2) * 2.0)) * uNight;
`;

const SHROOM_VERT = /* glsl */ `
  vec2 P = floor(uPlayer / uCell);
  vec2 rel = mod(aCell - P + uN * 0.5, uN) - uN * 0.5;
  vec2 cw = P + rel;
  float h1 = gh(cw), h2 = gh(cw + 17.31), h3 = gh(cw + 91.7), h4 = gh(cw + 53.1);
  vec2 pos = (cw + vec2(h1, h2)) * uCell;
  float ground = gground(pos);
  float forest = texture2D(uForestTex, (pos + uWorldHalf) / (uWorldHalf * 2.0)).r;
  float dist = length(pos - uPlayer);
  float fade = 1.0 - smoothstep(uRange * 0.5, uRange, dist);
  // troops of toadstools under the trees, thickest in the damp patches
  float damp = smoothstep(0.5, 0.72, gn(cw * 0.09 + 31.0));
  float keep = step(h3, smoothstep(0.15, 0.5, forest) * (0.04 + damp * 0.7)) * step(h4, fade * 1.1);
  float hs = (0.6 + 1.1 * h1) * keep;
  vec3 transformed = vec3(pos.x, ground - 0.01, pos.y) + position * hs;

  float kind = floor(h2 * 4.0);
  vec3 capDay = kind < 1.0 ? vec3(0.85, 0.2, 0.16) : (kind < 2.0 ? vec3(0.92, 0.7, 0.3) : (kind < 3.0 ? vec3(0.62, 0.42, 0.78) : vec3(0.35, 0.62, 0.85)));
  vec3 capGlow = kind < 1.0 ? vec3(1.0, 0.35, 0.3) : (kind < 2.0 ? vec3(1.0, 0.75, 0.25) : (kind < 3.0 ? vec3(0.75, 0.4, 1.0) : vec3(0.2, 0.9, 1.0)));
  vec3 stem = vec3(0.88, 0.82, 0.7);
  vGCol = aPart < 0.5 ? stem : (aPart < 1.5 ? capDay : stem * 0.8);
  float pulse = 0.75 + 0.25 * sin(uTime * 1.3 + h1 * 40.0);
  // after dark they glow: caps brightly, stems faintly
  vGEm = (aPart < 0.5 ? capGlow * 0.15 : (aPart < 1.5 ? capGlow * 2.4 : capGlow * 1.2)) * uNight * pulse;
`;

function injectSurface(material, kind, uniforms) {
  material.onBeforeCompile = (shader) => {
    Object.assign(shader.uniforms, uniforms);
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', `#include <common>\n${COMMON}`)
      .replace('#include <beginnormal_vertex>', `#include <beginnormal_vertex>
        objectNormal = vec3(0.0, 1.0, 0.0); // light the blades like the ground beneath them`)
      .replace('#include <begin_vertex>', kind === 'flower' ? FLOWER_VERT : kind === 'shroom' ? SHROOM_VERT : GRASS_VERT);
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', `#include <common>\nvarying vec3 vGCol;\nvarying vec3 vGEm;`)
      .replace('#include <color_fragment>', 'diffuseColor.rgb = vGCol;')
      .replace('#include <emissivemap_fragment>', '#include <emissivemap_fragment>\n totalEmissiveRadiance += vGEm;');
  };
  material.customProgramCacheKey = () => `grass-${kind}`;
}

// ------------------------------------------------------------------- system ----

export class Grass {
  constructor(terrain, scene, wind, quality) {
    const q = quality.grass || 0;
    this.enabled = q > 0;
    this.group = new THREE.Group();
    scene.add(this.group);
    if (!this.enabled) return;

    const RANGE = 44;
    const N = Math.round(132 * Math.sqrt(q));
    const NF = Math.round(70 * Math.sqrt(q));

    this.shared = {
      uPlayer: { value: new THREE.Vector2() },
      uTime: { value: 0 },
      uWind: wind,
      uNight: { value: 0 },
      uWorldHalf: { value: WORLD_HALF },
      uTCell: { value: terrain.cell },
      uTexN: { value: terrain.gridN },
      uHeightTex: { value: terrain.heightTex },
      uColorTex: { value: terrain.colorTex },
      uForestTex: { value: terrain.forestTex },
    };
    const u = (n, cell, range) => ({ ...this.shared, uN: { value: n }, uCell: { value: cell }, uRange: { value: range } });

    // grass tufts
    const gGeo = tuftGeometry();
    gGeo.setAttribute('aCell', cellAttribute(N));
    gGeo.instanceCount = N * N;
    const gMat = new THREE.MeshStandardMaterial({ roughness: 0.95, side: THREE.DoubleSide });
    injectSurface(gMat, 'grass', u(N, (RANGE * 2) / N, RANGE));
    this.grass = new THREE.Mesh(gGeo, gMat);
    this.grass.frustumCulled = false;
    this.grass.receiveShadow = true;
    this.group.add(this.grass);

    // wildflowers
    const fGeo = flowerGeometry();
    fGeo.setAttribute('aCell', cellAttribute(NF));
    fGeo.instanceCount = NF * NF;
    const fMat = new THREE.MeshStandardMaterial({ roughness: 0.8, side: THREE.DoubleSide });
    injectSurface(fMat, 'flower', u(NF, (RANGE * 1.7) / NF, RANGE * 0.85));
    this.flowers = new THREE.Mesh(fGeo, fMat);
    this.flowers.frustumCulled = false;
    this.flowers.receiveShadow = true;
    this.group.add(this.flowers);

    // toadstools under the trees
    const NM = Math.round(80 * Math.sqrt(q));
    const mGeo = mushroomGeometry();
    mGeo.setAttribute('aCell', cellAttribute(NM));
    mGeo.instanceCount = NM * NM;
    const mMat = new THREE.MeshStandardMaterial({ roughness: 0.7, side: THREE.DoubleSide });
    injectSurface(mMat, 'shroom', u(NM, (RANGE * 1.5) / NM, RANGE * 0.75));
    this.shrooms = new THREE.Mesh(mGeo, mMat);
    this.shrooms.frustumCulled = false;
    this.shrooms.receiveShadow = true;
    this.group.add(this.shrooms);

    this._gU = gMat; this._fU = fMat;
    this._gUniforms = { ...this.shared };
    this.uniformSets = [u(N, (RANGE * 2) / N, RANGE)]; // (kept for debugging)
  }

  get roots() { return [this.group]; }

  update(playerPos, elapsed, sky) {
    if (!this.enabled) return;
    this.shared.uPlayer.value.set(playerPos.x, playerPos.z);
    this.shared.uTime.value = elapsed;
    this.shared.uNight.value = Math.pow(1 - sky.daylight, 1.3);
  }
}
