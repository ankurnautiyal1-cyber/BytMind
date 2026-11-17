import * as THREE from 'three';
import { FullScreenQuad } from 'three/addons/postprocessing/Pass.js';

// Screen-space ambient occlusion straight from the depth buffer, at half resolution.
// (three's GTAOPass renders the scene again with an override material, which breaks the
// wind-sway trees, the water shader and every additive sprite; this one only reads depth.)
//
//   pass 1  reconstruct view-space position + normal from depth, take 12 cosine-weighted
//           hemisphere taps, count how many land behind the visible surface
//   pass 2  depth-aware blur
//
// The result is multiplied into the HDR frame by the atmosphere pass.

const vert = /* glsl */ `
  varying vec2 vUv;
  void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }
`;

const aoFrag = /* glsl */ `
  uniform sampler2D tDepth;
  uniform mat4 uProj;
  uniform mat4 uInvProj;
  uniform vec2 uTexel;      // 1 / size of the half-res target
  uniform float uNear;
  uniform float uFar;
  uniform float uRadius;
  varying vec2 vUv;

  float linZ(float d) {
    float z = d * 2.0 - 1.0;
    return 2.0 * uNear * uFar / (uFar + uNear - z * (uFar - uNear));
  }
  vec3 viewPos(vec2 uv) {
    float d = texture2D(tDepth, uv).x;
    vec4 v = uInvProj * vec4(uv * 2.0 - 1.0, d * 2.0 - 1.0, 1.0);
    return v.xyz / v.w;
  }

  void main() {
    float d0 = texture2D(tDepth, vUv).x;
    if (d0 >= 0.99999) { gl_FragColor = vec4(1.0); return; }
    vec3 P = viewPos(vUv);
    if (-P.z > 140.0) { gl_FragColor = vec4(1.0); return; }

    // normal from the neighbours, taking the nearer side on each axis so edges don't smear
    vec3 Pr = viewPos(vUv + vec2(uTexel.x, 0.0)), Pl = viewPos(vUv - vec2(uTexel.x, 0.0));
    vec3 Pu = viewPos(vUv + vec2(0.0, uTexel.y)), Pd = viewPos(vUv - vec2(0.0, uTexel.y));
    vec3 dx = abs(Pr.z - P.z) < abs(Pl.z - P.z) ? Pr - P : P - Pl;
    vec3 dy = abs(Pu.z - P.z) < abs(Pd.z - P.z) ? Pu - P : P - Pd;
    vec3 N = normalize(cross(dx, dy));
    if (dot(N, -P) < 0.0) N = -N;

    vec3 T = normalize(cross(N, abs(N.y) < 0.95 ? vec3(0.0, 1.0, 0.0) : vec3(1.0, 0.0, 0.0)));
    vec3 Bt = cross(N, T);
    float ign = fract(52.9829189 * fract(dot(gl_FragCoord.xy, vec2(0.06711056, 0.00583715))));
    float radius = uRadius * (0.6 + 0.4 * smoothstep(0.0, 25.0, -P.z)); // a little wider with distance
    float occ = 0.0;
    const int K = 12;
    for (int k = 0; k < K; k++) {
      float r = (float(k) + 0.5) / float(K);
      float a = (float(k) * 2.39996323) + ign * 6.2831853;
      vec2 disk = vec2(cos(a), sin(a)) * sqrt(r);
      vec3 dir = T * disk.x + Bt * disk.y + N * sqrt(max(0.0, 1.0 - r));
      vec3 S = P + dir * radius * (0.25 + 0.75 * r);
      vec4 sp = uProj * vec4(S, 1.0);
      vec2 suv = sp.xy / sp.w * 0.5 + 0.5;
      if (suv.x < 0.0 || suv.x > 1.0 || suv.y < 0.0 || suv.y > 1.0) continue;
      float sceneZ = linZ(texture2D(tDepth, suv).x);
      float sampleZ = -S.z;
      float diff = sampleZ - sceneZ;
      float range = smoothstep(0.0, 1.0, radius / max(abs(-P.z - sceneZ), 1e-3));
      occ += step(0.04 + 0.01 * -P.z * 0.1, diff) * range;
    }
    float ao = 1.0 - occ / float(K);
    ao = pow(clamp(ao, 0.0, 1.0), 1.6);
    ao = mix(ao, 1.0, smoothstep(40.0, 130.0, -P.z)); // fades out with distance
    gl_FragColor = vec4(ao, ao, ao, 1.0);
  }
`;

const blurFrag = /* glsl */ `
  uniform sampler2D tAO;
  uniform sampler2D tDepth;
  uniform vec2 uTexel;
  uniform float uNear;
  uniform float uFar;
  varying vec2 vUv;
  float linZ(float d) {
    float z = d * 2.0 - 1.0;
    return 2.0 * uNear * uFar / (uFar + uNear - z * (uFar - uNear));
  }
  void main() {
    float d0 = texture2D(tDepth, vUv).x;
    if (d0 >= 0.99999) { gl_FragColor = vec4(1.0); return; }
    float z0 = linZ(d0);
    float sum = 0.0, wsum = 0.0;
    for (int y = -2; y <= 1; y++) {
      for (int x = -2; x <= 1; x++) {
        vec2 o = (vec2(float(x), float(y)) + 0.5) * uTexel;
        float z = linZ(texture2D(tDepth, vUv + o * 2.0).x);
        float w = exp(-abs(z - z0) / (0.08 * z0 + 0.15));
        sum += texture2D(tAO, vUv + o).r * w;
        wsum += w;
      }
    }
    float a = sum / max(wsum, 1e-4);
    gl_FragColor = vec4(a, a, a, 1.0);
  }
`;

export class AO {
  constructor() {
    const mk = () => new THREE.WebGLRenderTarget(1, 1, {
      type: THREE.UnsignedByteType, depthBuffer: false,
      minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter,
    });
    this.rt = mk();
    this.blurRt = mk();
    this.radius = 1.25;
    this.mat = new THREE.ShaderMaterial({
      uniforms: {
        tDepth: { value: null }, uProj: { value: new THREE.Matrix4() }, uInvProj: { value: new THREE.Matrix4() },
        uTexel: { value: new THREE.Vector2(1, 1) }, uNear: { value: 0.3 }, uFar: { value: 15000 }, uRadius: { value: 1.25 },
      },
      vertexShader: vert, fragmentShader: aoFrag, depthTest: false, depthWrite: false,
    });
    this.blur = new THREE.ShaderMaterial({
      uniforms: {
        tAO: { value: null }, tDepth: { value: null }, uTexel: { value: new THREE.Vector2(1, 1) },
        uNear: { value: 0.3 }, uFar: { value: 15000 },
      },
      vertexShader: vert, fragmentShader: blurFrag, depthTest: false, depthWrite: false,
    });
    this.quad = new FullScreenQuad(this.mat);
    this.blurQuad = new FullScreenQuad(this.blur);
  }

  setSize(w, h) {
    const hw = Math.max(1, Math.floor(w / 2)), hh = Math.max(1, Math.floor(h / 2));
    this.rt.setSize(hw, hh);
    this.blurRt.setSize(hw, hh);
    this.mat.uniforms.uTexel.value.set(1 / hw, 1 / hh);
    this.blur.uniforms.uTexel.value.set(1 / hw, 1 / hh);
  }

  // returns the blurred occlusion texture (1 = open, 0 = fully occluded)
  render(renderer, camera, depthTex) {
    const u = this.mat.uniforms;
    u.tDepth.value = depthTex;
    u.uProj.value.copy(camera.projectionMatrix);
    u.uInvProj.value.copy(camera.projectionMatrixInverse);
    u.uNear.value = camera.near; u.uFar.value = camera.far;
    u.uRadius.value = this.radius;
    renderer.setRenderTarget(this.rt);
    this.quad.render(renderer);

    const b = this.blur.uniforms;
    b.tAO.value = this.rt.texture;
    b.tDepth.value = depthTex;
    b.uNear.value = camera.near; b.uFar.value = camera.far;
    renderer.setRenderTarget(this.blurRt);
    this.blurQuad.render(renderer);
    return this.blurRt.texture;
  }

  dispose() {
    this.rt.dispose(); this.blurRt.dispose();
    this.mat.dispose(); this.blur.dispose();
    this.quad.dispose(); this.blurQuad.dispose();
  }
}
