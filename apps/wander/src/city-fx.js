import * as THREE from 'three';
import { Smoke, makeFlame, glowSprite } from './effects.js';
import { cityTime } from './city-shaders.js';

// Everything that makes New York feel alive after dark: tube-neon signs, roof
// beacons, searchlights, the Empire State's colour-changing crown, the torch,
// bridge lights, helicopter strobes, street-lamp light cones, steam, a glow on
// the horizon, rain, violet ley-lines running out from the gate, and lanterns
// in the park. Positions are authored in the city's grid space (the City group
// rotates them into place); rain and ley-lines are world-space.

const shared = {
  uTime: cityTime,
  uNight: { value: 0 },
  uPR: { value: 1 },
};

const smooth = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };

// ----------------------------------------------------------- light points ----

const ptsVert = /* glsl */ `
  attribute vec3 aColor;
  attribute vec4 aParam;   // phase, blink (0 steady, 1 slow, 2 strobe), size, twinkle
  uniform float uTime, uNight, uPR, uDay;
  varying vec3 vC;
  varying float vA;
  void main() {
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mv;
    float a = 1.0;
    if (aParam.y > 0.5 && aParam.y < 1.5) a = 0.1 + 0.9 * step(0.5, fract(uTime * 0.55 + aParam.x));
    else if (aParam.y > 1.5) a = step(0.9, fract(uTime * 1.25 + aParam.x));
    a *= 0.8 + 0.2 * sin(uTime * (2.0 + aParam.w * 3.0) + aParam.x * 40.0);
    vC = aColor;
    vA = a * (uDay + (1.0 - uDay) * uNight);
    gl_PointSize = clamp(uPR * aParam.z * 140.0 / -mv.z, 2.0 * uPR, 30.0 * uPR * aParam.z);
  }
`;
const ptsFrag = /* glsl */ `
  varying vec3 vC;
  varying float vA;
  void main() {
    vec2 c = gl_PointCoord * 2.0 - 1.0;
    float d = exp(-dot(c, c) * 3.2);
    gl_FragColor = vec4(vC * d * vA, 1.0);
  }
`;

class LightPoints {
  // items: [{ p:[x,y,z], c:[r,g,b], blink, size, phase }]
  constructor(items, dayStrength = 0.35) {
    const n = items.length;
    const pos = new Float32Array(n * 3), col = new Float32Array(n * 3), par = new Float32Array(n * 4);
    items.forEach((it, i) => {
      pos.set(it.p, i * 3);
      col.set(it.c, i * 3);
      par.set([it.phase ?? Math.random(), it.blink ?? 0, it.size ?? 1, Math.random()], i * 4);
    });
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    g.setAttribute('aColor', new THREE.BufferAttribute(col, 3));
    g.setAttribute('aParam', new THREE.BufferAttribute(par, 4));
    this.uDay = { value: dayStrength };
    this.mesh = new THREE.Points(g, new THREE.ShaderMaterial({
      uniforms: { uTime: shared.uTime, uNight: shared.uNight, uPR: shared.uPR, uDay: this.uDay },
      vertexShader: ptsVert, fragmentShader: ptsFrag,
      transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, fog: false,
    }));
    this.mesh.frustumCulled = false;
  }
}

// ------------------------------------------------------------- beam cones ----

const beamVert = /* glsl */ `
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
const beamFrag = /* glsl */ `
  uniform vec3 uColor;
  uniform float uStrength, uPow;
  varying float vH;
  varying vec3 vN;
  varying vec3 vP;
  void main() {
    vec3 V = normalize(cameraPosition - vP);
    float soft = pow(abs(dot(normalize(vN), V)), 1.4);
    float a = soft * pow(max(1.0 - vH, 0.0), uPow) * uStrength;
    gl_FragColor = vec4(uColor * a, 1.0);
  }
`;
function beamMaterial(color, strength, pow = 1.6) {
  return new THREE.ShaderMaterial({
    uniforms: { uColor: { value: new THREE.Color(color) }, uStrength: { value: strength }, uPow: { value: pow } },
    vertexShader: beamVert, fragmentShader: beamFrag,
    transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide, fog: false,
  });
}

// ------------------------------------------------------------ neon atlas ----

const WORDS = [
  ['JAZZ', '#ff3fa8'], ['BAR', '#2de2ff'], ['PIZZA', '#ff6a3c'], ['HOTEL', '#ffc83a'],
  ['OPEN', '#4dff8a'], ['TAXI', '#ffe34a'], ['LIVE', '#ff5c8a'], ['NOODLES', '#37f2d1'],
];

function neonAtlas() {
  const cv = document.createElement('canvas');
  cv.width = 1024; cv.height = 1024;
  const ctx = cv.getContext('2d');
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  WORDS.forEach(([word, color], i) => {
    const cx = (i % 2) * 512 + 256, cy = Math.floor(i / 2) * 256 + 128;
    const fs = word.length > 5 ? 74 : 104;
    ctx.font = `800 ${fs}px "Arial Black", Arial, sans-serif`;
    // tube-neon frame
    ctx.save();
    ctx.shadowColor = color; ctx.shadowBlur = 22; ctx.lineWidth = 7; ctx.strokeStyle = color;
    const r = 30, x0 = cx - 232, y0 = cy - 100, w = 464, h = 200;
    ctx.beginPath();
    ctx.moveTo(x0 + r, y0); ctx.arcTo(x0 + w, y0, x0 + w, y0 + h, r); ctx.arcTo(x0 + w, y0 + h, x0, y0 + h, r);
    ctx.arcTo(x0, y0 + h, x0, y0, r); ctx.arcTo(x0, y0, x0 + w, y0, r); ctx.closePath();
    ctx.stroke();
    // lettering: coloured glow, then a hot white core
    ctx.shadowBlur = 26; ctx.lineWidth = 11; ctx.strokeStyle = color; ctx.strokeText(word, cx, cy + 4);
    ctx.shadowBlur = 8; ctx.lineWidth = 6; ctx.strokeStyle = color; ctx.strokeText(word, cx, cy + 4);
    ctx.shadowBlur = 0; ctx.lineWidth = 2.6; ctx.strokeStyle = '#ffffff'; ctx.strokeText(word, cx, cy + 4);
    ctx.restore();
  });
  const tex = new THREE.CanvasTexture(cv);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  return tex;
}

const signVert = /* glsl */ `
  attribute vec3 aInfo;     // cell index, phase, flicker
  varying vec2 vUv;
  varying vec3 vInfo;
  void main() {
    vUv = uv;
    vInfo = aInfo;
    gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0);
  }
`;
const signFrag = /* glsl */ `
  uniform sampler2D uAtlas;
  uniform float uTime, uNight, uGain;
  varying vec2 vUv;
  varying vec3 vInfo;
  void main() {
    float cell = floor(vInfo.x + 0.5);
    float col = mod(cell, 2.0), row = floor(cell / 2.0);
    vec2 auv = vec2((col + vUv.x) * 0.5, (3.0 - row + vUv.y) * 0.25);
    vec4 t = texture2D(uAtlas, auv);
    // some tubes are failing: hum, flicker, the odd dead stretch
    float f = 0.88 + 0.12 * sin(uTime * 41.0 + vInfo.y * 9.0);
    float dead = vInfo.z * step(0.86, fract(uTime * 0.21 + vInfo.y)) * step(0.4, fract(uTime * 9.0 + vInfo.y * 3.0));
    float k = f * (1.0 - dead * 0.9) * (0.25 + 0.75 * uNight);
    gl_FragColor = vec4(t.rgb * t.a * uGain * k, 1.0);
  }
`;

// ------------------------------------------------------------------ rain ----

const rainVert = /* glsl */ `
  attribute vec4 aSeed;    // x,z in box, phase, hash
  attribute float aEnd;    // 0 head, 1 tail
  uniform float uTime, uRain, uHeight, uBox;
  uniform vec3 uCam;
  varying float vA;
  void main() {
    float speed = 22.0 + aSeed.w * 8.0;
    float y = uHeight - mod(uTime * speed + aSeed.z * uHeight, uHeight);
    vec2 xz = mod(aSeed.xy - uCam.xz + uBox * 0.5, uBox) - uBox * 0.5;
    vec3 p = vec3(uCam.x + xz.x, uCam.y - uHeight * 0.35 + y, uCam.z + xz.y);
    p.x += aEnd * 0.12;
    p.y += aEnd * 0.9;
    vec4 mv = viewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    vA = step(aSeed.w, uRain) * (1.0 - aEnd * 0.8);
  }
`;
const rainFrag = /* glsl */ `
  varying float vA;
  void main() { gl_FragColor = vec4(vec3(0.6, 0.72, 1.0) * 1.1 * vA, 1.0); }
`;

// ===========================================================================

export class CityFX {
  constructor(city, layout, group) {
    this.city = city;
    this.layout = layout;
    this.group = group;                       // the rotated grid-space group
    this.world = new THREE.Group();           // world-space extras (rain, ley-lines)
    group.parent.add(this.world);
    this.rain = 0;
    this.rainTarget = 0;
    this.rainOverride = null;
    this.parts = {};
    shared.uPR.value = Math.min(devicePixelRatio, city.quality?.pixelRatio || 1);
    this._buildings = layout.buildings;
  }

  // the building footprint [x0,x1,z0,z1,top] containing a grid point
  buildingAt(x, z) {
    let best = null;
    for (const b of this._buildings) {
      if (x >= b[0] && x <= b[1] && z >= b[2] && z <= b[3] && (!best || b[4] > best[4])) best = b;
    }
    return best;
  }

  build() {
    this._neonSigns();
    this._roofBeacons();
    this._searchlights();
    this._crowns();
    this._torch();
    this._bridgeLights();
    this._lampCones();
    this._steam();
    this._parkLights();
    this._ley();
    this._rain();
  }

  // ---- tube-neon around Times Square ----
  _neonSigns() {
    const site = this.layout.sites.find((s) => s.type === 'neon');
    if (!site) return;
    const atlas = neonAtlas();
    const MAXN = 80;
    const geo = new THREE.PlaneGeometry(1, 1);
    const info = new Float32Array(MAXN * 3);
    const mat = new THREE.ShaderMaterial({
      uniforms: { uAtlas: { value: atlas }, uTime: shared.uTime, uNight: shared.uNight, uGain: { value: 2.6 } },
      vertexShader: signVert, fragmentShader: signFrag,
      transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, fog: false,
    });
    const mesh = new THREE.InstancedMesh(geo, mat, MAXN);
    const m = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler(), v = new THREE.Vector3(), s = new THREE.Vector3();
    let n = 0;
    let seed = 7;
    const rnd = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };
    const R = 150;
    const faces = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    for (const b of this._buildings) {
      if (n >= MAXN) break;
      const [x0, x1, z0, z1, top] = b;
      if (top < 14) continue;
      const cx = (x0 + x1) / 2, cz = (z0 + z1) / 2;
      if (Math.hypot(cx - site.x, cz - site.z) > R) continue;
      for (const [nx, nz] of faces) {
        if (n >= MAXN || rnd() > 0.55) continue;
        const faceW = nx !== 0 ? z1 - z0 : x1 - x0;
        if (faceW < 9) continue;
        // only faces that look onto a street
        const fx = nx !== 0 ? (nx > 0 ? x1 : x0) : cx + (rnd() - 0.5) * (faceW - 8);
        const fz = nz !== 0 ? (nz > 0 ? z1 : z0) : cz + (rnd() - 0.5) * (faceW - 8);
        const w = this.city.toWorld(fx + nx * 3.5, fz + nz * 3.5);
        if (this.city.heightAt(w.x, w.z) > 3.5) continue;
        const sw = Math.min(faceW - 2, 5.5 + rnd() * 5);
        const sy = 8 + rnd() * Math.min(top - 8, 34);
        v.set(fx + nx * 0.45, sy, fz + nz * 0.45);
        e.set(0, Math.atan2(nx, nz), 0);
        q.setFromEuler(e);
        s.set(sw, sw * 0.5, 1);
        m.compose(v, q, s);
        mesh.setMatrixAt(n, m);
        info.set([Math.floor(rnd() * 8), rnd() * 6.28, rnd() < 0.3 ? 1 : 0], n * 3);
        n++;
      }
    }
    mesh.count = n;
    geo.setAttribute('aInfo', new THREE.InstancedBufferAttribute(info, 3));
    mesh.instanceMatrix.needsUpdate = true;
    mesh.frustumCulled = false;
    mesh.renderOrder = 4;
    this.group.add(mesh);
    this.parts.signs = mesh;
  }

  // ---- red aviation beacons on the tallest roofs ----
  _roofBeacons() {
    const tall = this._buildings.filter((b) => b[4] > 85).sort((a, b) => b[4] - a[4]).slice(0, 160);
    const items = tall.map((b, i) => ({
      p: [(b[0] + b[1]) / 2, b[4] + 2.2, (b[2] + b[3]) / 2],
      c: [4.6, 0.35, 0.25], blink: 1, size: 1.1, phase: ((i * 0.137) % 1),
    }));
    if (!items.length) return;
    const lp = new LightPoints(items, 0.5);
    this.group.add(lp.mesh);
  }

  // ---- searchlights sweeping from Times Square roofs ----
  _searchlights() {
    const site = this.layout.sites.find((s) => s.type === 'neon');
    if (!site) return;
    const near = this._buildings.filter((b) => b[4] > 55 && Math.hypot((b[0] + b[1]) / 2 - site.x, (b[2] + b[3]) / 2 - site.z) < 220)
      .sort((a, b) => b[4] - a[4]).slice(0, 3);
    this.beams = [];
    const geo = new THREE.CylinderGeometry(15, 0.5, 900, 18, 1, true);
    geo.translate(0, 450, 0);
    near.forEach((b, i) => {
      const mat = beamMaterial(i % 2 ? 0xbfe4ff : 0xfff0d0, 0.55, 1.2);
      const beam = new THREE.Mesh(geo, mat);
      beam.position.set((b[0] + b[1]) / 2, b[4] + 1, (b[2] + b[3]) / 2);
      beam.frustumCulled = false;
      beam.renderOrder = 3;
      this.group.add(beam);
      this.beams.push({ beam, ph: i * 2.1 });
    });
  }

  // ---- Empire State's colour-cycling crown, the Chrysler's silver crown ----
  _crowns() {
    const esb = this.layout.sites.find((s) => s.name === 'Empire State');
    this.crowns = [];
    const mk = (x, z, h0, height, r0, r1, color) => {
      const b = this.buildingAt(x, z);
      const top = b ? b[4] : h0;
      const geo = new THREE.CylinderGeometry(r1, r0, height, 20, 1, true);
      geo.translate(0, height / 2, 0);
      const mat = beamMaterial(color, 0.9, 0.5);
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(x, top - height * 0.55, z);
      mesh.renderOrder = 3;
      mesh.frustumCulled = false;
      this.group.add(mesh);
      return { mesh, mat, top };
    };
    if (esb) this.crowns.push({ ...mk(esb.x, esb.z, 380, 58, 7.5, 2.2, 0xffffff), kind: 'esb' });
    const chr = { x: 178, z: -650 };
    this.crowns.push({ ...mk(chr.x, chr.z, 318, 40, 5.5, 0.6, 0xcfe7ff), kind: 'chrysler' });
  }

  // ---- the torch ----
  _torch() {
    const m = this.layout.sites.find((s) => s.type === 'monument');
    if (!m) return;
    const flame = makeFlame(3.4);
    flame.position.set(m.x, 37.2, m.z);
    this.group.add(flame);
    const halo = glowSprite(0xffa040, 18);
    halo.position.set(m.x, 39, m.z);
    this.group.add(halo);
    this.torch = { flame, halo };
  }

  // ---- strings of lights along the bridge decks ----
  _bridgeLights() {
    const items = [];
    for (const br of this.layout.bridges || []) {
      const [ax, az] = br.p0, [bx, bz] = br.p1;
      const len = Math.hypot(bx - ax, bz - az);
      const dx = (bx - ax) / len, dz = (bz - az) / len;
      const nx = -dz, nz = dx;
      for (let s = 0; s < len; s += 11) {
        for (const side of [-1, 1]) {
          items.push({ p: [ax + dx * s + nx * 8.3 * side, br.deck + 2.4, az + dz * s + nz * 8.3 * side],
            c: [2.6, 1.9, 1.0], size: 0.9, phase: (s * 0.07) % 1 });
        }
      }
    }
    if (items.length) this.group.add(new LightPoints(items, 0.15).mesh);
  }

  // ---- soft cones of light under the street lamps ----
  _lampCones() {
    const lamps = this.layout.lamps || [];
    if (!lamps.length) return;
    const geo = new THREE.CylinderGeometry(0.4, 4.2, 8.4, 10, 1, true);
    geo.translate(0, -4.2, 0);
    const mat = beamMaterial(0xffd9a0, 0.28, 1.0);
    // flip uv so the bright end is at the lamp head
    const uv = geo.attributes.uv;
    for (let i = 0; i < uv.count; i++) uv.setY(i, 1 - uv.getY(i));
    const mesh = new THREE.InstancedMesh(geo, mat, lamps.length);
    const m = new THREE.Matrix4(), v = new THREE.Vector3();
    lamps.forEach(([lx, lz], i) => {
      v.set(lx, 2.35 + 8.6, lz);
      m.makeTranslation(v.x, v.y, v.z);
      mesh.setMatrixAt(i, m);
    });
    mesh.frustumCulled = false;
    mesh.renderOrder = 3;
    this.group.add(mesh);
    this.parts.cones = mesh;
  }

  // ---- steam rising from the manholes ----
  _steam() {
    const site = this.layout.sites.find((s) => s.type === 'neon') || { x: 0, z: 0 };
    this.smoke = new Smoke(this.group);
    this.smoke.mesh.material.depthWrite = false;
    let n = 0, tries = 0;
    let seed = 99;
    const rnd = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };
    while (n < 14 && tries++ < 400) {
      const x = site.x + (rnd() - 0.5) * 180, z = site.z + (rnd() - 0.5) * 220;
      const w = this.city.toWorld(x, z);
      if (Math.abs(this.city.heightAt(w.x, w.z) - 2.0) > 0.05) continue;   // on the road
      this.smoke.addEmitter(new THREE.Vector3(x, 2.1, z), 1.3, 1.4);
      n++;
    }
  }

  // ---- lanterns and string lights in Central Park ----
  _parkLights() {
    const trees = this.layout.park_trees || [];
    const items = [];
    let seed = 5;
    const rnd = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };
    const pals = [[2.4, 1.4, 0.6], [2.6, 0.9, 1.4], [0.8, 2.2, 2.0], [2.6, 2.0, 0.8]];
    trees.forEach(([x, z, s], i) => {
      if (i % 3) return;
      const c = pals[Math.floor(rnd() * pals.length)];
      for (let k = 0; k < 5; k++) {
        const a = rnd() * 6.28, r = (0.8 + rnd() * 1.8) * s;
        items.push({ p: [x + Math.cos(a) * r, 2.15 + (3.2 + rnd() * 2.6) * s, z + Math.sin(a) * r], c, size: 0.55 + rnd() * 0.3, blink: 0 });
      }
    });
    // catenary strings between neighbouring trees
    const picked = trees.filter((_, i) => i % 5 === 0);
    for (let i = 0; i < picked.length; i++) {
      for (let j = i + 1; j < picked.length; j++) {
        const [ax, az, as] = picked[i], [bx, bz, bs] = picked[j];
        const d = Math.hypot(bx - ax, bz - az);
        if (d < 7 || d > 17 || rnd() > 0.55) continue;
        const ya = 2.15 + 4.2 * as, yb = 2.15 + 4.2 * bs;
        for (let k = 0; k <= 16; k++) {
          const t = k / 16;
          const sag = Math.sin(t * Math.PI) * d * 0.09;
          items.push({ p: [ax + (bx - ax) * t, ya + (yb - ya) * t - sag, az + (bz - az) * t],
            c: [2.6, 1.9, 1.0], size: 0.4, phase: (k * 0.11 + i) % 1 });
        }
        break;
      }
    }
    if (items.length) this.group.add(new LightPoints(items, 0.1).mesh);
  }

  // ---- violet ley-lines running out from the gate ----
  _ley() {
    const city = this.city;
    const g = this.layout.gate;
    const pts = [];                      // arrays of world-space points
    const line = (gx0, gz0, dx, dz, len, step = 2.0) => {
      const out = [];
      for (let s = 0; s <= len; s += step) {
        const w = city.toWorld(gx0 + dx * s, gz0 + dz * s);
        const h = city.heightAt(w.x, w.z);
        if (h > 6) { if (out.length > 4) break; continue; }
        out.push([w.x, h + 0.07, w.z, s]);
      }
      return out;
    };
    // up the avenue, and two shorter spurs across the Battery
    pts.push(line(g.x, g.z - 14, 0, -1, 520));
    pts.push(line(g.x + 12, g.z - 6, 1, 0, 150));
    pts.push(line(g.x - 12, g.z - 6, -1, 0, 150));
    // a ring around the plaza
    const ring = [];
    for (let a = 0; a <= 360; a += 4) {
      const r = a * Math.PI / 180;
      const w = city.toWorld(g.x + Math.cos(r) * 22, g.z + Math.sin(r) * 22);
      ring.push([w.x, city.heightAt(w.x, w.z) + 0.07, w.z, a * 0.6]);
    }
    pts.push(ring);

    const pos = [], aS = [], idx = [];
    let base = 0;
    const W = 0.34;
    for (const p of pts) {
      if (p.length < 2) continue;
      for (let i = 0; i < p.length; i++) {
        const a = p[Math.max(0, i - 1)], b = p[Math.min(p.length - 1, i + 1)];
        let tx = b[0] - a[0], tz = b[2] - a[2];
        const l = Math.hypot(tx, tz) || 1; tx /= l; tz /= l;
        const nx = -tz * W, nz = tx * W;
        pos.push(p[i][0] + nx, p[i][1], p[i][2] + nz, p[i][0] - nx, p[i][1], p[i][2] - nz);
        aS.push(p[i][3], p[i][3]);
        if (i > 0) { const k = base + (i - 1) * 2; idx.push(k, k + 1, k + 2, k + 1, k + 3, k + 2); }
      }
      base += p.length * 2;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    geo.setAttribute('aS', new THREE.Float32BufferAttribute(aS, 1));
    geo.setIndex(idx);
    const mat = new THREE.ShaderMaterial({
      uniforms: { uTime: shared.uTime, uNight: shared.uNight },
      vertexShader: `attribute float aS; varying float vS; void main(){ vS=aS; gl_Position=projectionMatrix*viewMatrix*vec4(position,1.0);} `,
      fragmentShader: `
        uniform float uTime, uNight; varying float vS;
        void main() {
          float pulse = 0.3 + 0.7 * pow(0.5 + 0.5 * sin(vS * 0.11 - uTime * 2.2), 3.0);
          float fade = exp(-vS * 0.0045);
          vec3 c = mix(vec3(0.62, 0.3, 1.0), vec3(0.3, 0.9, 1.0), 0.5 + 0.5 * sin(vS * 0.03 - uTime * 0.6));
          gl_FragColor = vec4(c * pulse * fade * 2.4 * (0.45 + 0.55 * uNight), 1.0);
        }`,
      transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide, fog: false,
      polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -4,
    });
    this.ley = new THREE.Mesh(geo, mat);
    this.ley.frustumCulled = false;
    this.ley.renderOrder = 3;
    this.world.add(this.ley);
  }

  // ---- rain ----
  _rain() {
    const N = 2600;
    const seeds = new Float32Array(N * 2 * 4), ends = new Float32Array(N * 2), pos = new Float32Array(N * 2 * 3);
    for (let i = 0; i < N; i++) {
      const s = [Math.random() * 40, Math.random() * 40, Math.random(), Math.random()];
      for (let e = 0; e < 2; e++) { seeds.set(s, (i * 2 + e) * 4); ends[i * 2 + e] = e; }
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setAttribute('aSeed', new THREE.BufferAttribute(seeds, 4));
    geo.setAttribute('aEnd', new THREE.BufferAttribute(ends, 1));
    this.rainU = { uTime: shared.uTime, uRain: { value: 0 }, uHeight: { value: 30 }, uBox: { value: 40 }, uCam: { value: new THREE.Vector3() } };
    this.rainMesh = new THREE.LineSegments(geo, new THREE.ShaderMaterial({
      uniforms: this.rainU, vertexShader: rainVert, fragmentShader: rainFrag,
      transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, fog: false,
    }));
    this.rainMesh.frustumCulled = false;
    this.rainMesh.renderOrder = 6;
    this.world.add(this.rainMesh);
  }

  // ----------------------------------------------------------------------
  update(dt, camPos, elapsed, sky) {
    const night = 1 - sky.daylight;
    shared.uNight.value = night;
    this.world.visible = this.city.group.visible;

    // weather drifts in at night
    this.rainTarget = this.rainOverride ?? (night > 0.5 ? smooth(0.3, 0.8, 0.5 + 0.5 * Math.sin(elapsed * 0.017 + 2.0)) : 0);
    this.rain += (this.rainTarget - this.rain) * Math.min(1, dt * 0.35);
    this.rainU.uRain.value = this.rain;
    this.rainU.uCam.value.copy(camPos);
    this.rainMesh.visible = this.rain > 0.02;
    sky.wetness = this.rain;

    if (this.parts.signs) this.parts.signs.material.uniforms.uGain.value = 2.6;
    if (this.parts.cones) this.parts.cones.material.uniforms.uStrength.value = 0.34 * night;

    for (const b of this.beams || []) {
      b.beam.visible = night > 0.35;
      b.beam.material.uniforms.uStrength.value = 0.6 * smooth(0.35, 0.8, night);
      b.beam.rotation.set(0.42 + 0.28 * Math.sin(elapsed * 0.31 + b.ph), elapsed * 0.23 + b.ph, 0, 'YXZ');
    }
    for (const c of this.crowns || []) {
      const lit = smooth(0.15, 0.6, night);
      if (c.kind === 'esb') {
        // a slow rainbow, like the real thing on a holiday
        const hue = (elapsed * 0.025) % 1;
        c.mat.uniforms.uColor.value.setHSL(hue, 0.9, 0.55);
        c.mat.uniforms.uStrength.value = 1.5 * lit;
      } else {
        c.mat.uniforms.uStrength.value = (1.1 + 0.4 * Math.sin(elapsed * 1.1)) * lit;
      }
      c.mesh.visible = lit > 0.01;
    }
    if (this.torch) {
      this.torch.flame.material.uniforms.uTime.value = elapsed;
      this.torch.halo.material.opacity = 0.35 + 0.15 * Math.sin(elapsed * 7);
    }
    if (this.smoke) {
      this.smoke.mesh.material.color.setRGB(0.78, 0.8, 0.84).lerp(new THREE.Color(0.32, 0.34, 0.5), night);
      this.smoke.update(dt, 0.4, elapsed);
    }
  }
}
