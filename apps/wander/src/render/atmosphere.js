import * as THREE from 'three';
import { Pass, FullScreenQuad } from 'three/addons/postprocessing/Pass.js';
import { Dof } from './dof.js';
import { AO } from './ao.js';

// Depth-aware atmosphere, applied to the HDR frame before bloom:
//   · height-based valley mist (exponential height fog, analytic integral)
//   · sun in-scattering that warms distant terrain toward the sun
//   · screen-space light shafts (radial blur of the sunlit sky)
// Plain scene.fog still handles the far-distance falloff on every material;
// this pass adds the parts a per-material fog cannot do.

const vert = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`;

const frag = /* glsl */ `
  uniform sampler2D tDiffuse;
  uniform sampler2D tDepth;
  uniform sampler2D tAO;
  uniform float uAO;
  uniform mat4 uInvProj;
  uniform mat4 uCamWorld;
  uniform vec3 uCamPos;
  uniform vec3 uSunDir;
  uniform vec3 uSunColor;
  uniform vec2 uSunScreen;
  uniform float uSunVis;      // 0..1 how much the sun is in front of the camera
  uniform vec3 uMistColor;
  uniform float uMist;        // base density
  uniform float uMistFall;    // height falloff (1/m)
  uniform float uMistBase;    // height where the mist layer sits (m)
  uniform float uScatter;     // sun in-scatter strength
  uniform float uShafts;      // light shaft strength
  uniform float uAspect;
  varying vec2 vUv;

  void main() {
    vec4 src = texture2D(tDiffuse, vUv);
    vec3 col = src.rgb;
    float depth = texture2D(tDepth, vUv).x;
    bool sky = depth >= 0.99999;

    vec4 ndc = vec4(vUv * 2.0 - 1.0, depth * 2.0 - 1.0, 1.0);
    vec4 vp = uInvProj * ndc;
    vp /= vp.w;
    float dist = length(vp.xyz);
    vec3 rd = normalize((uCamWorld * vec4(normalize(vp.xyz), 0.0)).xyz);

    if (!sky) {
      // ---- ambient occlusion (half-res, depth-aware) ----
      if (uAO > 0.001) col *= mix(1.0, texture2D(tAO, vUv).r, uAO);

      // ---- valley mist ----
      float camH = max(uCamPos.y - uMistBase, 0.0);
      float k = uMistFall;
      float ry = rd.y;
      float eps = 1e-3;
      float denom = abs(ry) < eps ? eps : ry;
      float integral = (1.0 - exp(-dist * denom * k)) / (denom * k);
      float mist = uMist * exp(-camH * k) * integral;
      mist = 1.0 - exp(-mist);
      col = mix(col, uMistColor, clamp(mist, 0.0, 0.85));

      // ---- sun in-scatter on the far terrain ----
      float sd = max(dot(rd, uSunDir), 0.0);
      float amt = (1.0 - exp(-dist * 0.00045)) * (pow(sd, 6.0) * 0.9 + pow(sd, 48.0) * 1.4);
      col += uSunColor * amt * uScatter;
    }

    // ---- light shafts ----
    if (uShafts > 0.001 && uSunVis > 0.001) {
      vec2 dir = (uSunScreen - vUv);
      float len = length(dir * vec2(uAspect, 1.0));
      dir *= 0.92 / 18.0;
      vec2 p = vUv;
      float acc = 0.0;
      float w = 1.0;
      for (int i = 0; i < 18; i++) {
        p += dir;
        vec2 q = clamp(p, 0.001, 0.999);
        float dd = texture2D(tDepth, q).x;
        if (dd >= 0.99999) {
          vec3 s = texture2D(tDiffuse, q).rgb;
          float lum = dot(s, vec3(0.299, 0.587, 0.114));
          acc += smoothstep(0.55, 1.6, lum) * w;
        }
        w *= 0.93;
      }
      acc /= 18.0;
      float fall = exp(-len * 1.7);
      col += uSunColor * acc * fall * uShafts * uSunVis;
    }

    gl_FragColor = vec4(col, src.a);
  }
`;

export class AtmospherePass extends Pass {
  constructor(camera) {
    super();
    this.camera = camera;
    this.material = new THREE.ShaderMaterial({
      uniforms: {
        tDiffuse: { value: null },
        tDepth: { value: null },
        tAO: { value: null },
        uAO: { value: 0 },
        uInvProj: { value: new THREE.Matrix4() },
        uCamWorld: { value: new THREE.Matrix4() },
        uCamPos: { value: new THREE.Vector3() },
        uSunDir: { value: new THREE.Vector3(0, 1, 0) },
        uSunColor: { value: new THREE.Color(1, 0.9, 0.7) },
        uSunScreen: { value: new THREE.Vector2(0.5, 0.5) },
        uSunVis: { value: 0 },
        uMistColor: { value: new THREE.Color(0.7, 0.8, 0.9) },
        uMist: { value: 0.0006 },
        uMistFall: { value: 0.035 },
        uMistBase: { value: 0 },
        uScatter: { value: 0.5 },
        uShafts: { value: 0.35 },
        uAspect: { value: 1 },
      },
      vertexShader: vert,
      fragmentShader: frag,
      depthTest: false,
      depthWrite: false,
    });
    this.fsQuad = new FullScreenQuad(this.material);
    this.u = this.material.uniforms;
    this._v = new THREE.Vector3();

    // photo-mode depth of field rides along: it needs this pass's depth buffer,
    // and an intermediate target so it never samples the target it draws into
    this.dof = new Dof();
    this.ao = new AO();
    this._tmp = null;
    this._size = new THREE.Vector2(1, 1);
  }

  setSize(w, h) {
    this.u.uAspect.value = w / h;
    this._size.set(w, h);
    this._tmp?.setSize(w, h);
    this.ao.setSize(w, h);
  }

  render(renderer, writeBuffer, readBuffer) {
    const cam = this.camera;
    const u = this.u;
    u.tDiffuse.value = readBuffer.texture;
    u.tDepth.value = readBuffer.depthTexture;
    u.tAO.value = u.uAO.value > 0.001 ? this.ao.render(renderer, cam, readBuffer.depthTexture) : null;
    u.uInvProj.value.copy(cam.projectionMatrixInverse);
    u.uCamWorld.value.copy(cam.matrixWorld);
    u.uCamPos.value.copy(cam.position);

    // where is the sun on screen, and is it in front of us?
    const v = this._v.copy(cam.position).addScaledVector(u.uSunDir.value, 1000).project(cam);
    u.uSunScreen.value.set(v.x * 0.5 + 0.5, v.y * 0.5 + 0.5);
    cam.getWorldDirection(this._fwd || (this._fwd = new THREE.Vector3()));
    const f = this._fwd.dot(u.uSunDir.value);
    u.uSunVis.value = THREE.MathUtils.smoothstep(f, 0.05, 0.5) * (u.uSunDir.value.y > -0.05 ? 1 : 0);

    const out = this.renderToScreen ? null : writeBuffer;
    if (this.dof.active) {
      if (!this._tmp) {
        this._tmp = new THREE.WebGLRenderTarget(this._size.x, this._size.y, {
          type: THREE.HalfFloatType, depthBuffer: false,
        });
      }
      renderer.setRenderTarget(this._tmp);
      this.fsQuad.render(renderer);
      this.dof.render(renderer, cam, this._tmp.texture, readBuffer.depthTexture, this._size, out);
    } else {
      renderer.setRenderTarget(out);
      this.fsQuad.render(renderer);
    }
  }

  dispose() {
    this.dof.dispose();
    this.ao.dispose();
    this._tmp?.dispose();
    this.material.dispose();
    this.fsQuad.dispose();
  }
}
