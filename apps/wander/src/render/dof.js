import * as THREE from 'three';
import { FullScreenQuad } from 'three/addons/postprocessing/Pass.js';

// Depth of field for photo mode. Two small pieces:
//   · FocusProbe — a 1×1 ping-pong target that reads the depth under the
//     crosshair and eases toward it, so the focus pulls like a lens
//   · Dof — a gather blur whose radius comes from each pixel's circle of
//     confusion (in diopters, so far things converge and near things spread)
// It runs on the HDR frame, so bright highlights bloom into bokeh afterwards.

const vert = /* glsl */ `
  varying vec2 vUv;
  void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }
`;

const depthChunk = /* glsl */ `
  uniform float uNear;
  uniform float uFar;
  // 1 / distance (diopters) from a 0..1 depth-buffer value
  float invDist(float d) {
    float z = d * 2.0 - 1.0;
    float viewZ = 2.0 * uNear * uFar / (uFar + uNear - z * (uFar - uNear));
    return 1.0 / max(viewZ, 0.05);
  }
`;

const probeFrag = /* glsl */ `
  uniform sampler2D tDepth;
  uniform sampler2D tPrev;
  uniform float uK;
  ${depthChunk}
  varying vec2 vUv;
  void main() {
    // a small cross of taps: thin leaves or a wire at the centre won't yank the focus
    float a = 0.0;
    a += invDist(texture2D(tDepth, vec2(0.5, 0.5)).x) * 2.0;
    a += invDist(texture2D(tDepth, vec2(0.5 + 0.012, 0.5)).x);
    a += invDist(texture2D(tDepth, vec2(0.5 - 0.012, 0.5)).x);
    a += invDist(texture2D(tDepth, vec2(0.5, 0.5 + 0.02)).x);
    a += invDist(texture2D(tDepth, vec2(0.5, 0.5 - 0.02)).x);
    a /= 6.0;
    float prev = texture2D(tPrev, vec2(0.5)).r;
    gl_FragColor = vec4(mix(prev, a, uK), 0.0, 0.0, 1.0);
  }
`;

const dofFrag = /* glsl */ `
  uniform sampler2D tColor;
  uniform sampler2D tDepth;
  uniform sampler2D tFocus;
  uniform float uAperture;   // 0 = off
  uniform float uFovScale;   // longer lenses blur more
  uniform float uAspect;
  uniform vec2 uTexel;
  ${depthChunk}
  varying vec2 vUv;

  const int TAPS = 40;
  const float MAX_COC = 0.026;    // fraction of the frame height

  float coc(float inv, float invF) {
    return min(uAperture * uFovScale * abs(inv - invF) * 0.085, MAX_COC);
  }

  void main() {
    vec4 src = texture2D(tColor, vUv);
    float invF = texture2D(tFocus, vec2(0.5)).r;
    float inv0 = invDist(texture2D(tDepth, vUv).x);
    float c0 = coc(inv0, invF);

    // gather wide enough to catch blurred foreground over a sharp pixel
    float R = max(c0, 0.25 * min(uAperture * uFovScale * 0.02, MAX_COC));
    if (R < 0.0006) { gl_FragColor = src; return; }

    float px = uTexel.y;
    float ang0 = fract(52.9829189 * fract(dot(gl_FragCoord.xy, vec2(0.06711056, 0.00583715)))) * 6.2831853;
    vec3 acc = src.rgb;
    float wsum = 1.0;
    for (int i = 0; i < TAPS; i++) {
      float r = sqrt((float(i) + 0.5) / float(TAPS));
      float a = ang0 + float(i) * 2.39996323;
      vec2 o = vec2(cos(a), sin(a)) * r * R;            // in frame-height units
      vec2 uv = vUv + vec2(o.x / uAspect, o.y);
      float inv = invDist(texture2D(tDepth, uv).x);
      float cs = coc(inv, invF);
      float dist = length(o);
      // a sample counts only if its own blur disc reaches this pixel
      float w = clamp((cs - dist) / max(px * 1.5, 1e-5) + 0.5, 0.0, 1.0);
      acc += texture2D(tColor, uv).rgb * w;
      wsum += w;
    }
    gl_FragColor = vec4(acc / wsum, src.a);
  }
`;

export class Dof {
  constructor() {
    this.aperture = 0;           // 0 = off; ~0.5 gentle, 1 default, 4 macro
    this._snap = true;           // the first frame jumps straight to the focus
    this._last = performance.now();

    const mk = () => new THREE.WebGLRenderTarget(1, 1, {
      type: THREE.HalfFloatType, depthBuffer: false,
      minFilter: THREE.NearestFilter, magFilter: THREE.NearestFilter,
    });
    this._rt = [mk(), mk()];
    this._i = 0;

    this.probeMat = new THREE.ShaderMaterial({
      uniforms: {
        tDepth: { value: null }, tPrev: { value: null }, uK: { value: 1 },
        uNear: { value: 0.3 }, uFar: { value: 15000 },
      },
      vertexShader: vert, fragmentShader: probeFrag, depthTest: false, depthWrite: false,
    });
    this.probeQuad = new FullScreenQuad(this.probeMat);

    this.mat = new THREE.ShaderMaterial({
      uniforms: {
        tColor: { value: null }, tDepth: { value: null }, tFocus: { value: null },
        uAperture: { value: 1 }, uFovScale: { value: 1 }, uAspect: { value: 1 },
        uTexel: { value: new THREE.Vector2(1, 1) },
        uNear: { value: 0.3 }, uFar: { value: 15000 },
      },
      vertexShader: vert, fragmentShader: dofFrag, depthTest: false, depthWrite: false,
    });
    this.quad = new FullScreenQuad(this.mat);
  }

  get active() { return this.aperture > 0.001; }

  // jump straight to the current focus (after a cut or a teleport)
  resetFocus() { this._snap = true; }

  render(renderer, camera, colorTex, depthTex, size, target) {
    const now = performance.now();
    const dt = Math.min(0.1, (now - this._last) / 1000);
    this._last = now;

    // 1. ease the focus toward whatever is under the crosshair
    const prev = this._rt[this._i], next = this._rt[1 - this._i];
    const pu = this.probeMat.uniforms;
    pu.tDepth.value = depthTex;
    pu.tPrev.value = prev.texture;
    pu.uK.value = this._snap ? 1 : 1 - Math.exp(-dt * 5);
    pu.uNear.value = camera.near;
    pu.uFar.value = camera.far;
    this._snap = false;
    renderer.setRenderTarget(next);
    this.probeQuad.render(renderer);
    this._i = 1 - this._i;

    // 2. blur
    const u = this.mat.uniforms;
    u.tColor.value = colorTex;
    u.tDepth.value = depthTex;
    u.tFocus.value = next.texture;
    u.uAperture.value = this.aperture;
    u.uFovScale.value = Math.tan(THREE.MathUtils.degToRad(35)) / Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
    u.uAspect.value = size.x / size.y;
    u.uTexel.value.set(1 / size.x, 1 / size.y);
    u.uNear.value = camera.near;
    u.uFar.value = camera.far;
    renderer.setRenderTarget(target);
    this.quad.render(renderer);
  }

  dispose() {
    this._rt.forEach((t) => t.dispose());
    this.probeMat.dispose(); this.probeQuad.dispose();
    this.mat.dispose(); this.quad.dispose();
  }
}
