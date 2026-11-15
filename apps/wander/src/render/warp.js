import * as THREE from 'three';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';

// The world-crossing transition: the frame stretches into a radial streak
// tunnel, splits into colour fringes and floods to the portal's light. At
// uWarp = 1 the screen is a flat violet-to-white wash (safe to swap worlds
// behind); it plays backwards on arrival.

const WarpShader = {
  uniforms: {
    tDiffuse: { value: null },
    uWarp: { value: 0 },
    uTime: { value: 0 },
    uTint: { value: new THREE.Color(0.6, 0.4, 1) },
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
    uniform float uWarp, uTime;
    uniform vec3 uTint;
    varying vec2 vUv;

    float hash(float n) { return fract(sin(n) * 43758.5453); }

    void main() {
      vec2 c = vUv - 0.5;
      float r = length(c);
      vec2 dir = c / max(r, 1e-4);
      float w = uWarp;

      // radial zoom blur with a colour split that grows with the warp
      vec3 acc = vec3(0.0);
      const int N = 16;
      for (int i = 0; i < N; i++) {
        float s = float(i) / float(N);
        float z = 1.0 - w * 0.6 * s * (0.35 + r);
        vec2 uv = 0.5 + c * z;
        float sp = w * 0.016 * (0.3 + s);
        acc.r += texture2D(tDiffuse, uv + dir * sp).r;
        acc.g += texture2D(tDiffuse, uv).g;
        acc.b += texture2D(tDiffuse, uv - dir * sp).b;
      }
      vec3 col = acc / float(N);

      // speed streaks racing outward
      float ang = atan(c.y, c.x);
      float bands = floor(ang * 46.0);
      float flick = floor(uTime * 24.0);
      float st = pow(hash(bands * 1.37 + flick * 0.51), 7.0);
      float len = smoothstep(0.08, 0.7, r) * (1.0 - smoothstep(0.85, 1.2, r));
      col += mix(uTint, vec3(1.0), 0.5) * st * len * 3.4 * w * (1.0 - w * 0.35);

      // flood to the portal's light: violet rim, bright aqua-white heart
      float f = smoothstep(0.5, 1.0, w);
      vec3 wash = mix(uTint * 0.55, vec3(0.85, 0.95, 1.0), smoothstep(0.85, 0.0, r * 1.5));
      col = mix(col, wash, f);

      gl_FragColor = vec4(col, 1.0);
    }
  `,
};

export function makeWarpPass() {
  const pass = new ShaderPass(WarpShader);
  pass.warp = pass.material.uniforms;
  pass.enabled = false;
  return pass;
}
