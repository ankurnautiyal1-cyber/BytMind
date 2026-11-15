import * as THREE from 'three';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';

// Final colour grade, applied on the tone-mapped (display-referred) image:
// split-toning, contrast, saturation, vignette, a hair of lens fringe and
// fine film grain. Presets are per world and blended by the render loop.

const GradeShader = {
  uniforms: {
    tDiffuse: { value: null },
    uTime: { value: 0 },
    uVignette: { value: 0.35 },
    uGrain: { value: 0.02 },
    uChroma: { value: 0.0016 },
    uSat: { value: 1.1 },
    uContrast: { value: 1.06 },
    uShadowTint: { value: new THREE.Color(1, 1, 1) },
    uHighTint: { value: new THREE.Color(1, 1, 1) },
    uTintAmt: { value: 1 },
    uLift: { value: 0.0 },
    uPortal: { value: 0 },
    uPortalTint: { value: new THREE.Color(0.6, 0.4, 1) },
  },
  vertexShader: /* glsl */ `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: /* glsl */ `
    uniform sampler2D tDiffuse;
    uniform float uTime, uVignette, uGrain, uChroma, uSat, uContrast, uTintAmt, uLift, uPortal;
    uniform vec3 uShadowTint, uHighTint, uPortalTint;
    varying vec2 vUv;

    float hash(vec2 p) {
      vec3 p3 = fract(vec3(p.xyx) * 0.1031);
      p3 += dot(p3, p3.yzx + 33.33);
      return fract((p3.x + p3.y) * p3.z);
    }

    void main() {
      vec2 d = vUv - 0.5;
      float r2 = dot(d, d);
      vec2 off = d * r2 * uChroma * 6.0 * (1.0 + 3.0 * uPortal);
      vec3 col = vec3(
        texture2D(tDiffuse, vUv + off).r,
        texture2D(tDiffuse, vUv).g,
        texture2D(tDiffuse, vUv - off).b
      );
      float l = dot(col, vec3(0.2126, 0.7152, 0.0722));

      // gentle S-curve around mid grey, then saturation
      col = (col - 0.5) * uContrast + 0.5 + uLift;
      col = mix(vec3(l), col, uSat);

      // split tone: cool/teal shadows, warm highlights (set per world + hour)
      vec3 tint = mix(uShadowTint, uHighTint, smoothstep(0.12, 0.85, l));
      col *= mix(vec3(1.0), tint, uTintAmt);

      // near a gate the picture takes on the destination's colours
      col *= mix(vec3(1.0), 0.8 + 0.5 * uPortalTint, 0.32 * uPortal);

      // vignette
      float v = smoothstep(0.18, 0.78, length(d) * 1.25);
      col *= 1.0 - uVignette * (1.0 + 0.45 * uPortal) * v;
      col += uPortalTint * v * v * 0.07 * uPortal;

      // film grain (stronger in the shadows)
      float g = hash(gl_FragCoord.xy + fract(uTime) * 91.7) - 0.5;
      col += g * uGrain * (1.0 - l * 0.6);

      gl_FragColor = vec4(max(col, 0.0), 1.0);
    }
  `,
};

export function makeGradePass() {
  const pass = new ShaderPass(GradeShader);
  // ShaderPass clones the uniforms; keep a handle on the live ones
  pass.grade = pass.material.uniforms;
  return pass;
}

// Per-world look. Tints are multipliers (1 = neutral).
export const GRADES = {
  nature: {
    sat: 1.16, contrast: 1.07, vignette: 0.34, grain: 0.018, chroma: 0.0014,
    shadow: [0.86, 0.97, 1.08], high: [1.08, 1.03, 0.9], tint: 1,
  },
  city: {
    sat: 1.2, contrast: 1.12, vignette: 0.42, grain: 0.024, chroma: 0.0012,
    shadow: [0.9, 0.9, 1.16], high: [1.1, 0.98, 0.94], tint: 1,
  },
};
