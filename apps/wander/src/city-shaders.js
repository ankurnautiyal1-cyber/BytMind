import * as THREE from 'three';

// Shader work for New York: interior-mapped windows, painted lawns, wet streets.

export const cityTime = { value: 0 };

// ---------------------------------------------------------------------------
// Interior mapping. The facade textures are 12.8 m tiles with a known window
// layout (tools/build_city.py), so for every window pixel we can intersect the
// view ray with a box-shaped room behind the glass: back wall, side walls, floor
// and ceiling, each with its own wallpaper, a lamp that lights the room, a
// picture or TV on the back wall and curtains by the glass. Whether a room is
// lit still comes from the original emissive texture, so the skyline's pattern
// of lights is unchanged — it just has depth now.

const TILE = 12.8;
const STYLES = {
  facade_deco_a: { floors: 4, bays: 4, ww: 1.5, wh: 1.8 },
  facade_deco_b: { floors: 4, bays: 4, ww: 1.5, wh: 1.8 },
  facade_brick_a: { floors: 4, bays: 2, ww: 1.15, wh: 1.9 },
  facade_brick_b: { floors: 4, bays: 2, ww: 1.15, wh: 1.9 },
  facade_brown: { floors: 3, bays: 3, ww: 1.3, wh: 2.6 },
  facade_prewar: { floors: 4, bays: 4, ww: 1.7, wh: 2.0 },
  facade_panel: { floors: 4, bays: 4, ww: 1.5, wh: 1.5 },
  facade_castiron: { floors: 3, bays: 4, ww: 1.5, wh: 3.2 },
  facade_glass_a: { floors: 6, bays: 8, glass: true },
  facade_glass_b: { floors: 6, bays: 8, glass: true },
};

export function facadeInterior(material) {
  const st = STYLES[material.name];
  if (!st || material.userData.interior) return;
  material.userData.interior = true;
  const BW = TILE / st.bays, FH = TILE / st.floors;
  let wx0, wx1, wy0, wy1;
  if (st.glass) {
    wx0 = 0.06; wx1 = BW - 0.06; wy0 = FH * 0.32; wy1 = FH - 0.05;
  } else {
    wx0 = (BW - st.ww) / 2 + 0.07; wx1 = (BW + st.ww) / 2 - 0.07;
    wy0 = (FH - st.wh) / 2 + 0.07; wy1 = (FH + st.wh) / 2 - 0.07;
  }
  const f = (n) => n.toFixed(4);
  const defs = `
    #define BW ${f(BW)}
    #define FH ${f(FH)}
    #define WX0 ${f(wx0)}
    #define WX1 ${f(wx1)}
    #define WY0 ${f(wy0)}
    #define WY1 ${f(wy1)}
    #define ROOM_D 4.6
  `;

  material.onBeforeCompile = (shader) => {
    shader.uniforms.uCityTime = cityTime;
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vFW;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\n vFW = (modelMatrix * vec4(transformed, 1.0)).xyz;');
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', `#include <common>
        ${defs}
        uniform float uCityTime;
        varying vec3 vFW;
        float ihash(vec2 p) {
          vec3 p3 = fract(vec3(p.xyx) * 0.1031);
          p3 += dot(p3, p3.yzx + 33.33);
          return fract((p3.x + p3.y) * p3.z);
        }
        vec3 roomPalette(float h) {
          if (h < 0.18) return vec3(1.0, 0.74, 0.44);
          if (h < 0.36) return vec3(1.0, 0.87, 0.66);
          if (h < 0.5) return vec3(0.86, 0.94, 1.0);
          if (h < 0.64) return vec3(1.0, 0.56, 0.36);
          if (h < 0.78) return vec3(0.7, 1.0, 0.84);
          if (h < 0.9) return vec3(0.84, 0.7, 1.0);
          return vec3(1.0, 0.6, 0.78);
        }`)
      .replace('#include <emissivemap_fragment>', `#include <emissivemap_fragment>
        {
          float kInt = emissive.r;
          vec2 tuv = vec2(vEmissiveMapUv.x, 1.0 - vEmissiveMapUv.y) * ${f(TILE)};
          // derivatives must be taken in uniform control flow
          vec3 dpx = dFdx(vFW), dpy = dFdy(vFW);
          vec2 dux = dFdx(tuv), duy = dFdy(tuv);
          vec2 cs = tuv / vec2(BW, FH);
          vec2 id = floor(cs);
          vec2 lp = (cs - id) * vec2(BW, FH);
          float inW = step(WX0, lp.x) * step(lp.x, WX1) * step(WY0, lp.y) * step(lp.y, WY1);
          if (inW > 0.5 && kInt > 0.02) {
            float dist = length(vFW - cameraPosition);
            // is this room lit? read the original emissive texture at the window centre
            vec2 cuv = vec2((id.x + 0.5) * BW / ${f(TILE)}, 1.0 - (id.y * FH + 0.5 * (WY0 + WY1)) / ${f(TILE)});
            vec3 litTex = texture2D(emissiveMap, cuv).rgb;
            float lit = step(0.04, dot(litTex, vec3(0.3333)));
            float rh = ihash(id + floor(vFW.xz * 0.05) * 7.0);
            float rh2 = ihash(id * 1.7 + rh * 13.0);
            vec3 pal = roomPalette(rh);
            vec3 tint = mix(litTex / max(max(litTex.r, litTex.g), max(litTex.b, 1e-3)), pal, 0.7);

            vec3 radiance = vec3(0.0);
            if (dist < 260.0) {
              // wall-space frame from screen derivatives (uv is in metres)
              float det = dux.x * duy.y - dux.y * duy.x;
              det = abs(det) < 1e-9 ? 1e-9 : det;
              vec3 pu = (dpx * duy.y - dpy * dux.y) / det;
              vec3 pv = (dpy * dux.x - dpx * duy.x) / det;
              vec3 T = pu / max(length(pu), 1e-6), U = pv / max(length(pv), 1e-6);
              vec3 Nw = cross(T, U);
              Nw /= max(length(Nw), 1e-6);
              vec3 toCam = normalize(cameraPosition - vFW);
              if (dot(Nw, toCam) < 0.0) Nw = -Nw;
              vec3 V = -toCam;
              vec3 r = vec3(dot(V, T), dot(V, U), max(-dot(V, Nw), 0.04));

              vec3 p0 = vec3(lp, 0.0);
              float tx = ((r.x > 0.0 ? BW : 0.0) - p0.x) / (abs(r.x) < 1e-5 ? 1e-5 : r.x);
              float ty = ((r.y > 0.0 ? FH : 0.0) - p0.y) / (abs(r.y) < 1e-5 ? 1e-5 : r.y);
              float tz = ROOM_D / r.z;
              float t = min(min(tx, ty), tz);
              vec3 h = p0 + r * t;

              // the lamp: a point in the ceiling, middle of the room
              vec3 lamp = vec3(BW * (0.35 + 0.3 * rh2), FH - 0.25, ROOM_D * 0.5);
              vec3 dl = h - lamp;
              float lampK = 1.0 / (0.75 + 0.3 * dot(dl, dl));

              vec3 surf;
              if (t == tz) {                                 // back wall
                vec2 bw = vec2(h.x / BW, h.y / FH);
                surf = mix(vec3(0.8, 0.78, 0.74), pal, 0.45);
                // picture / TV
                vec2 pc = vec2(0.28 + 0.44 * rh2, 0.52);
                vec2 pd = abs(bw - pc) / vec2(0.15, 0.13);
                float pic = step(max(pd.x, pd.y), 1.0);
                vec3 picC = roomPalette(fract(rh * 3.1 + 0.2)) * 1.4;
                surf = mix(surf, picC, pic * 0.8);
                // skirting and a shelf line
                surf *= 1.0 - 0.45 * step(bw.y, 0.08);
                surf *= 1.0 - 0.3 * step(abs(bw.y - 0.78), 0.012);
              } else if (t == ty) {
                surf = r.y > 0.0 ? vec3(0.9, 0.9, 0.88) : vec3(0.28, 0.18, 0.11);   // ceiling / floor
              } else {
                surf = mix(vec3(0.78, 0.72, 0.66), pal, 0.35);                        // side walls
                // curtains framing the glass
                float cur = step(h.z, 0.75 + 0.3 * rh2);
                surf = mix(surf, mix(pal, vec3(0.55, 0.12, 0.18), step(0.6, rh2)) * 0.8, cur * 0.85);
              }
              // lit rooms glow from the lamp; some dark ones have the television on
              float tv = step(0.9, rh2) * (1.0 - lit);
              vec3 tvRad = tv * vec3(0.12, 0.28, 0.55) * (0.5 + 0.5 * sin(uCityTime * 6.0 + rh * 40.0)) * lampK * 0.9;
              radiance = surf * tint * lampK * 1.25 * lit + tvRad;
            }
            vec3 flatLit = lit * tint * 0.9;
            radiance = mix(radiance, flatLit, smoothstep(110.0, 260.0, dist));
            totalEmissiveRadiance = mix(totalEmissiveRadiance, radiance * kInt * 0.85, inW);
          }
        }`);
  };
  material.customProgramCacheKey = () => `facade-${material.name}`;
  material.needsUpdate = true;
}

// ---------------------------------------------------------------------------
// Surfaces. The street furniture materials were flat colours; give them just
// enough pattern to read as lawn, paving and screens.

function inject(material, key, { vertexExtra = '', fragCommon = '', fragColor = '' }) {
  if (material.userData[key]) return;
  material.userData[key] = true;
  const prev = material.onBeforeCompile;
  material.onBeforeCompile = (shader, renderer) => {
    prev?.(shader, renderer);
    shader.uniforms.uCityTime = cityTime;
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vFW;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\n vFW = (modelMatrix * vec4(transformed, 1.0)).xyz;' + vertexExtra);
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', `#include <common>
        varying vec3 vFW;
        uniform float uCityTime;
        float qh(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
        float qn(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
          return mix(mix(qh(i), qh(i + vec2(1, 0)), f.x), mix(qh(i + vec2(0, 1)), qh(i + vec2(1, 1)), f.x), f.y); }
        ${fragCommon}`)
      .replace('#include <color_fragment>', `#include <color_fragment>\n${fragColor}`);
  };
  material.customProgramCacheKey = () => `${key}-${material.name}`;
  material.needsUpdate = true;
}

// mown stripes, clover patches and worn desire-lines
export function lawnPaint(material) {
  inject(material, 'lawn', {
    fragColor: `
      float stripe = step(0.0, sin(dot(vFW.xz, vec2(0.62, 0.41)) * 1.1));
      float lawnPatch = qn(vFW.xz * 0.06);
      float fine = qn(vFW.xz * 1.7);
      diffuseColor.rgb *= 0.86 + 0.14 * stripe;
      diffuseColor.rgb *= vec3(0.9 + 0.2 * lawnPatch, 0.95 + 0.1 * lawnPatch, 0.85 + 0.1 * (1.0 - lawnPatch));
      diffuseColor.rgb *= 0.92 + 0.16 * fine;`,
  });
}

// paving slabs with grout lines, grime and the odd dark stain
export function pavingPaint(material) {
  inject(material, 'paving', {
    fragColor: `
      vec2 sl = vFW.xz / 1.2;
      vec2 f = abs(fract(sl) - 0.5);
      float grout = smoothstep(0.47, 0.5, max(f.x, f.y));
      float stain = qn(vFW.xz * 0.35) * 0.6 + qn(vFW.xz * 2.1) * 0.4;
      float cell = qh(floor(sl));
      diffuseColor.rgb *= (0.9 + 0.1 * cell) * (0.82 + 0.3 * stain) * (1.0 - 0.28 * grout);`,
  });
}

// LED video wall: scanlines, a slow roll bar and a flicker
export function ledScreen(material) {
  if (material.userData.led) return;
  material.userData.led = true;
  material.onBeforeCompile = (shader) => {
    shader.uniforms.uCityTime = cityTime;
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', '#include <common>\nuniform float uCityTime;')
      .replace('#include <map_fragment>', `#include <map_fragment>
        float yy = vMapUv.y;
        diffuseColor.rgb *= 0.86 + 0.14 * sin(yy * 320.0);
        diffuseColor.rgb *= 1.0 + 0.35 * smoothstep(0.93, 1.0, sin(yy * 2.4 - uCityTime * 1.3));
        diffuseColor.rgb *= 0.95 + 0.05 * sin(uCityTime * 53.0);`);
  };
  material.customProgramCacheKey = () => 'led-screen';
  material.needsUpdate = true;
}
