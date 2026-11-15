import * as THREE from 'three';
import { SimplexNoise } from './noise.js';

export const WORLD_SIZE = 4000;
export const WORLD_HALF = WORLD_SIZE / 2;
export const TERRAIN_SEGMENTS = 384;
export const WATER_LEVEL = 0;

// The Ancient Gate sits on a carved shelf at the north edge of the world.
export const GATE = { x: 0, z: -WORLD_HALF * 0.9 };

function smoothstep(a, b, x) {
  const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
}

const PALETTE = {
  deepSand: 0x8f7f56,
  sand: 0xd8c489,
  grassA: 0x5f9044,
  grassB: 0x7aa855,
  forest: 0x49702f,
  rock: 0x8b8378,
  rockDark: 0x6e675c,
  snow: 0xedf1f4,
};

export class Terrain {
  constructor(seed) {
    this.seed = seed;
    this.noise = new SimplexNoise(seed);
    this.noiseB = new SimplexNoise((seed + 101) ^ 0x5f3759df);
    this.N = TERRAIN_SEGMENTS;
    this.gridN = this.N + 1;
    this.cell = WORLD_SIZE / this.N;
    this.grid = new Float32Array(this.gridN * this.gridN);
    this._buildGrid();
    this.mesh = this._buildMesh();
  }

  // Continuous height function — the single source of truth for the world's shape.
  baseHeight(x, z) {
    const n = this.noise;
    const continent = n.fbm(x * 0.00042, z * 0.00042, 4);
    const hills = n.fbm(x * 0.0038 + 91.7, z * 0.0038 - 40.2, 4);
    const mMask = smoothstep(0.08, 0.55, this.noiseB.fbm(x * 0.0009 + 300, z * 0.0009 - 210, 3));
    const ridge = n.ridged(x * 0.0016 - 50.3, z * 0.0016 + 80.7, 4);
    const detail = n.fbm(x * 0.02, z * 0.02, 2);

    let h = 7 + continent * 30;
    h += hills * 11 * (0.35 + 0.65 * smoothstep(-0.35, 0.4, continent));
    h += mMask * ridge * ridge * 160;
    h += detail * 2.2;

    // Mountain wall around the border so the world edge reads as a natural horizon.
    const e = Math.max(Math.abs(x), Math.abs(z)) / WORLD_HALF;
    h += Math.pow(smoothstep(0.86, 1.01, e), 1.3) * 420;

    // Flat promontory shelf for the Ancient Gate at the north edge.
    const dGate = Math.hypot(x - GATE.x, z - GATE.z);
    const shelf = 1 - smoothstep(38, 78, dGate);
    if (shelf > 0) h = h * (1 - shelf) + 98 * shelf;
    return h;
  }

  // Where trees cluster — also drives the "Forest" biome label and darker ground.
  forestMask(x, z) {
    return this.noiseB.fbm(x * 0.0026 + 777, z * 0.0026 - 333, 3);
  }

  _buildGrid() {
    for (let iz = 0; iz < this.gridN; iz++) {
      for (let ix = 0; ix < this.gridN; ix++) {
        const x = -WORLD_HALF + ix * this.cell;
        const z = -WORLD_HALF + iz * this.cell;
        this.grid[iz * this.gridN + ix] = this.baseHeight(x, z);
      }
    }
  }

  // Bilinear-free triangle-exact interpolation: matches the rendered mesh, so the
  // player's feet always sit exactly on the visible ground.
  heightAt(x, z) {
    const g = this.grid, N1 = this.gridN;
    const fx = Math.min(Math.max((x + WORLD_HALF) / this.cell, 0), this.N - 1e-4);
    const fz = Math.min(Math.max((z + WORLD_HALF) / this.cell, 0), this.N - 1e-4);
    const ix = Math.floor(fx), iz = Math.floor(fz);
    const u = fx - ix, v = fz - iz;
    const a = g[iz * N1 + ix];
    const b = g[(iz + 1) * N1 + ix];
    const c = g[(iz + 1) * N1 + ix + 1];
    const d = g[iz * N1 + ix + 1];
    if (u + v <= 1) return a + (d - a) * u + (b - a) * v;
    return c + (b - c) * (1 - u) + (d - c) * (1 - v);
  }

  slopeAt(x, z, eps = 3) {
    const dx = this.heightAt(x + eps, z) - this.heightAt(x - eps, z);
    const dz = this.heightAt(x, z + eps) - this.heightAt(x, z - eps);
    return Math.hypot(dx, dz) / (2 * eps);
  }

  // Spiral out from the origin until a gentle, dry meadow tile is found.
  findSpawn() {
    for (let r = 0; r <= WORLD_HALF * 0.8; r += 60) {
      const steps = Math.max(1, Math.floor((2 * Math.PI * r) / 60));
      for (let s = 0; s < steps; s++) {
        const a = (s / steps) * Math.PI * 2;
        const x = Math.cos(a) * r, z = Math.sin(a) * r;
        const h = this.heightAt(x, z);
        if (h > 4 && h < 26 && this.slopeAt(x, z) < 0.25) return { x, z };
      }
    }
    return { x: 0, z: 0 };
  }

  // Heights and the baked ground colour (+ grass density in alpha) as textures,
  // so GPU grass can stand on the terrain and the water can read its own depth.
  _bakeTextures(colors, mats) {
    const N1 = this.gridN;
    const hv = new Float32Array(N1 * N1);
    const cv = new Uint8Array(N1 * N1 * 4);
    const fv = new Uint8Array(N1 * N1);
    const c = new THREE.Color();
    for (let i = 0; i < N1 * N1; i++) {
      const h = this.grid[i];
      hv[i] = h;
      c.setRGB(colors[i * 3], colors[i * 3 + 1], colors[i * 3 + 2]);
      c.convertLinearToSRGB();
      cv[i * 4] = Math.round(c.r * 255);
      cv[i * 4 + 1] = Math.round(c.g * 255);
      cv[i * 4 + 2] = Math.round(c.b * 255);
      // grass grows on grass: not on sand, rock or snow, not in the water, not on cliffs
      const ix = i % N1, iz = (i / N1) | 0;
      const x = -WORLD_HALF + ix * this.cell, z = -WORLD_HALF + iz * this.cell;
      const slope = this.slopeAt(x, z, this.cell);
      const dens = mats[i * 4] * smoothstep(0.9, 1.9, h) * (1 - smoothstep(0.5, 0.8, slope)) * (1 - smoothstep(50, 66, h));
      cv[i * 4 + 3] = Math.round(Math.min(1, dens) * 255);
      fv[i] = Math.round(Math.min(1, Math.max(0, (this.forestMask(x, z) - 0.04) * 2.2)) * 255);
    }
    this.forestTex = new THREE.DataTexture(fv, N1, N1, THREE.RedFormat, THREE.UnsignedByteType);
    this.forestTex.minFilter = this.forestTex.magFilter = THREE.LinearFilter;
    this.forestTex.needsUpdate = true;
    this.heightTex = new THREE.DataTexture(hv, N1, N1, THREE.RedFormat, THREE.FloatType);
    this.heightTex.minFilter = this.heightTex.magFilter = THREE.NearestFilter;
    this.heightTex.needsUpdate = true;
    this.colorTex = new THREE.DataTexture(cv, N1, N1, THREE.RGBAFormat, THREE.UnsignedByteType);
    this.colorTex.colorSpace = THREE.SRGBColorSpace;
    this.colorTex.minFilter = this.colorTex.magFilter = THREE.LinearFilter;
    this.colorTex.needsUpdate = true;
  }

  _buildMesh() {
    const N = this.N, N1 = this.gridN;
    const count = N1 * N1;
    const positions = new Float32Array(count * 3);
    for (let iz = 0; iz < N1; iz++) {
      for (let ix = 0; ix < N1; ix++) {
        const i = (iz * N1 + ix) * 3;
        positions[i] = -WORLD_HALF + ix * this.cell;
        positions[i + 1] = this.grid[iz * N1 + ix];
        positions[i + 2] = -WORLD_HALF + iz * this.cell;
      }
    }
    const indices = new Uint32Array(N * N * 6);
    let t = 0;
    for (let iz = 0; iz < N; iz++) {
      for (let ix = 0; ix < N; ix++) {
        const a = iz * N1 + ix;
        const b = (iz + 1) * N1 + ix;
        const c = (iz + 1) * N1 + ix + 1;
        const d = iz * N1 + ix + 1;
        indices[t++] = a; indices[t++] = b; indices[t++] = d;
        indices[t++] = b; indices[t++] = c; indices[t++] = d;
      }
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setIndex(new THREE.BufferAttribute(indices, 1));
    geo.computeVertexNormals();

    // Vertex colors: sand shores, grassy meadows, rocky slopes, snow caps.
    const colors = new Float32Array(count * 3);
    const mats = new Float32Array(count * 4); // weights: grass, sand, rock, snow
    const pos = geo.attributes.position;
    const nor = geo.attributes.normal;
    const cA = new THREE.Color(), cB = new THREE.Color();
    for (let i = 0; i < count; i++) {
      const h = pos.getY(i);
      const ny = nor.getY(i);
      const x = pos.getX(i), z = pos.getZ(i);
      const patch = this.noiseB.fbm(x * 0.016 + 5.2, z * 0.016 - 9.7, 2);

      if (h < WATER_LEVEL - 6) {
        cA.setHex(PALETTE.deepSand);
      } else {
        // grass with a noisy sand edge at the waterline
        cA.setHex(PALETTE.grassA).lerp(cB.setHex(PALETTE.grassB), (patch + 1) * 0.4);
        const fm = this.forestMask(x, z);
        if (fm > 0.08) cA.lerp(cB.setHex(PALETTE.forest), Math.min(0.55, (fm - 0.08) * 1.1));
        cA.lerp(cB.setHex(PALETTE.sand), 1 - smoothstep(1.2, 3.4, h + patch * 1.4));
      }

      const steep = 1 - smoothstep(0.6, 0.82, ny);
      if (h > WATER_LEVEL - 3) cA.lerp(cB.setHex(PALETTE.rockDark), steep * 0.85);
      cA.lerp(cB.setHex(PALETTE.rock), smoothstep(52, 78, h) * 0.9);
      const snowLine = 92 + patch * 10;
      const snowW = smoothstep(snowLine, snowLine + 16, h) * smoothstep(0.5, 0.72, ny);
      cA.lerp(cB.setHex(PALETTE.snow), snowW);

      // which surface is this? (drives the painted detail in the shader and the grass mask)
      const sandW = h < WATER_LEVEL - 6 ? 1 : (1 - smoothstep(1.2, 3.4, h + patch * 1.4));
      const rockW = Math.max(h > WATER_LEVEL - 3 ? steep * 0.85 : 0, smoothstep(52, 78, h) * 0.9);
      const sandF = sandW * (1 - rockW);
      const snowF = snowW;
      const rockF = rockW * (1 - snowF);
      const grassF = Math.max(0, 1 - sandF - rockF - snowF);
      mats[i * 4] = grassF; mats[i * 4 + 1] = sandF; mats[i * 4 + 2] = rockF; mats[i * 4 + 3] = snowF;

      // high-frequency tonal variation breaks up vertex-color banding
      const fine = this.noise.fbm(x * 0.09 + 3.1, z * 0.09 - 7.7, 2);
      cA.offsetHSL(fine * 0.012, fine * 0.03, fine * 0.05);

      colors[i * 3] = cA.r;
      colors[i * 3 + 1] = cA.g;
      colors[i * 3 + 2] = cA.b;
    }
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geo.setAttribute('aMat', new THREE.BufferAttribute(mats, 4));
    this._bakeTextures(colors, mats);

    const mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 1, metalness: 0 });
    paintTerrain(mat, this);
    const mesh = new THREE.Mesh(geo, mat);
    mesh.receiveShadow = true;
    // Terrain does NOT cast shadows: one 295k-tri mesh re-drawn into the
    // shadow map every frame was the scene's single biggest GPU cost, and
    // trees/rocks/characters provide all the visible close-range shadows.
    mesh.castShadow = false;
    return mesh;
  }
}


// ---------------------------------------------------------------------------
// Painted detail. The mesh is one 10 m-per-vertex surface, so up close it was a
// smooth gradient. This adds, per surface class (weights come from the aMat
// attribute): mottled grass with tufted specks, rippled sand, layered rock with
// cracks, and glittering snow — plus a bump so the light has something to catch.
// Detail fades with distance so the far hills stay calm.
function paintTerrain(material, terrain) {
  material.onBeforeCompile = (shader) => {
    shader.uniforms.uTimeT = { value: 0 };
    terrain.detailUniforms = shader.uniforms;
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', `#include <common>
        attribute vec4 aMat;
        varying vec4 vMat;
        varying vec3 vWPos;
        varying vec3 vWNor;`)
      .replace('#include <begin_vertex>', `#include <begin_vertex>
        vMat = aMat;
        vWPos = position;
        vWNor = normal;`);

    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', `#include <common>
        varying vec4 vMat;
        varying vec3 vWPos;
        varying vec3 vWNor;
        uniform float uTimeT;
        float th(vec2 p) {
          vec3 p3 = fract(vec3(p.xyx) * 0.1031);
          p3 += dot(p3, p3.yzx + 33.33);
          return fract((p3.x + p3.y) * p3.z);
        }
        float tn(vec2 p) {
          vec2 i = floor(p), f = fract(p);
          f = f * f * (3.0 - 2.0 * f);
          return mix(mix(th(i), th(i + vec2(1, 0)), f.x), mix(th(i + vec2(0, 1)), th(i + vec2(1, 1)), f.x), f.y);
        }
        float tf(vec2 p) {
          float a = 0.5, s = 0.0;
          for (int i = 0; i < 3; i++) { s += a * tn(p); p = p * 2.03 + 5.1; a *= 0.5; }
          return s;
        }
        // small height field used for the bump (grass tufts, dune ripples, rock grain)
        float detailH(vec2 p, vec4 m) {
          float g = tn(p * 3.1) * 0.6 + tn(p * 9.0) * 0.4;
          float s = sin(p.x * 5.0 + tn(p * 0.7) * 6.0) * 0.5 + 0.5;
          float r = tn(p * 2.3) * 0.7 + tn(p * 7.0) * 0.3;
          return g * m.x + s * 0.7 * m.y + r * m.z + tn(p * 5.0) * 0.4 * m.w;
        }`)
      .replace('#include <color_fragment>', `#include <color_fragment>
        float dView = length(vViewPosition);
        float dNear = 1.0 - smoothstep(70.0, 300.0, dView);
        vec2 wp = vWPos.xz;
        vec3 base = diffuseColor.rgb;
        vec4 M = vMat;

        // grass: big sun-bleached/lush patches, mid clumps, fine blade specks
        float gp = tf(wp * 0.045 + 3.7);
        float gc = tn(wp * 0.55);
        float gs = tn(wp * 4.2);
        vec3 lush = base * vec3(0.78, 0.95, 0.72);
        vec3 dry = base * vec3(1.22, 1.08, 0.72);
        vec3 grassC = mix(lush, dry, smoothstep(0.35, 0.75, gp));
        grassC *= 0.82 + 0.34 * gc;
        grassC *= 1.0 + (gs - 0.5) * 0.28 * dNear;
        // a few brighter flecks (sunlit tips)
        grassC += vec3(0.05, 0.07, 0.01) * step(0.93, tn(wp * 7.3)) * dNear;

        // sand: soft dune ripples and grain
        float rip = sin((wp.x * 0.9 + wp.y * 0.55) * 1.6 + tf(wp * 0.12) * 7.0) * 0.5 + 0.5;
        vec3 sandC = base * (0.9 + 0.18 * rip) * (0.95 + 0.1 * tn(wp * 11.0));

        // rock: strata by height + cracks
        float strata = sin(vWPos.y * 0.8 + tf(wp * 0.05) * 5.0) * 0.5 + 0.5;
        float crack = smoothstep(0.46, 0.5, abs(tf(wp * 0.35) - 0.5));
        vec3 rockC = base * (0.88 + 0.16 * strata) * (0.78 + 0.22 * crack);
        rockC = mix(rockC, rockC * vec3(0.82, 0.86, 1.0), 0.35);

        // snow: cool shadows in hollows + sparkle
        float glint = step(0.985, th(floor(wp * 9.0))) * dNear;
        vec3 snowC = base * (0.92 + 0.1 * tn(wp * 0.8)) + vec3(1.0, 1.0, 1.1) * glint * 1.6;

        float wsum = max(M.x + M.y + M.z + M.w, 1e-3);
        vec3 detail = (grassC * M.x + sandC * M.y + rockC * M.z + snowC * M.w) / wsum;
        diffuseColor.rgb = mix(base, detail, dNear);
        `)
      .replace('#include <normal_fragment_maps>', `#include <normal_fragment_maps>
        {
          // bump from the detail field (finite differences in world space)
          float e = 0.12;
          float h0 = detailH(wp, vMat);
          float hx = detailH(wp + vec2(e, 0.0), vMat);
          float hz = detailH(wp + vec2(0.0, e), vMat);
          vec3 g = vec3((hx - h0) / e, 0.0, (hz - h0) / e);
          float amt = 0.16 * (1.0 - smoothstep(40.0, 180.0, length(vViewPosition)));
          vec3 gv = (viewMatrix * vec4(g, 0.0)).xyz;
          normal = normalize(normal - gv * amt);
        }`);
  };
}
