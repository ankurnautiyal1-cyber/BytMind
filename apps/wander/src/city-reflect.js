import * as THREE from 'three';

// Wet streets. A real planar reflection of the city (neon, windows, headlights,
// the sky) is drawn onto the asphalt: a mirror shaped like the island sits 3 cm
// above street level, so it only shows where the road is — sidewalks, lawns and
// buildings sit higher and cover it. Puddle patches and ripples break it up;
// rain and night make it stronger.

const MirrorShader = {
  name: 'StreetMirror',
  uniforms: {
    color: { value: null },
    tDiffuse: { value: null },
    textureMatrix: { value: null },
    uTime: { value: 0 },
    uWet: { value: 0.5 },
    uStrength: { value: 1 },
  },
  vertexShader: /* glsl */ `
    uniform mat4 textureMatrix;
    varying vec4 vUv;
    varying vec3 vW;
    void main() {
      vUv = textureMatrix * vec4(position, 1.0);
      vec4 w = modelMatrix * vec4(position, 1.0);
      vW = w.xyz;
      gl_Position = projectionMatrix * viewMatrix * w;
    }
  `,
  fragmentShader: /* glsl */ `
    uniform sampler2D tDiffuse;
    uniform float uTime, uWet, uStrength;
    varying vec4 vUv;
    varying vec3 vW;
    float hash(vec2 p) {
      vec3 p3 = fract(vec3(p.xyx) * 0.1031);
      p3 += dot(p3, p3.yzx + 33.33);
      return fract((p3.x + p3.y) * p3.z);
    }
    float noise(vec2 p) {
      vec2 i = floor(p), f = fract(p);
      f = f * f * (3.0 - 2.0 * f);
      return mix(mix(hash(i), hash(i + vec2(1, 0)), f.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), f.x), f.y);
    }
    float fbm(vec2 p) {
      float a = 0.5, s = 0.0;
      for (int i = 0; i < 3; i++) { s += a * noise(p); p = p * 2.07 + 3.1; a *= 0.5; }
      return s;
    }
    void main() {
      vec3 V = normalize(cameraPosition - vW);
      float dist = length(cameraPosition - vW);
      // puddles: big irregular patches over a film of damp
      float pud = smoothstep(0.46, 0.62, fbm(vW.xz * 0.045 + 7.0));
      float film = 0.35 + 0.65 * pud;
      // surface roughness: ripples that stretch the reflection toward the camera
      vec2 rip = vec2(noise(vW.xz * 1.7 + uTime * 0.35), noise(vW.xz * 1.9 - uTime * 0.3 + 9.0)) - 0.5;
      float breakup = (0.012 + 0.03 * (1.0 - pud)) * (1.0 - exp(-dist * 0.02));
      vec4 uv = vUv;
      uv.xy += rip * breakup * uv.w * 2.0;
      vec3 refl = texture2DProj(tDiffuse, uv).rgb;
      float fres = pow(1.0 - clamp(V.y, 0.0, 1.0), 3.0);
      // a damp film everywhere, near-mirror in the puddles
      float k = mix(0.16 + 0.55 * fres, 0.5 + 0.5 * fres, pud) * uWet * 1.25;
      k = clamp(k, 0.0, 0.95);
      // the farther away, the more it should look like a plain wet road
      k *= 1.0 - smoothstep(380.0, 900.0, dist);
      gl_FragColor = vec4(refl * uStrength, k);
    }
  `,
};

// A planar mirror in the spirit of three's Reflector, with two changes for a
// street-level mirror: no oblique clip plane (viewed this close to grazing it
// degenerates and drops the sky), and a list of objects to hide while the
// reflection is drawn — the ground slabs and the sea — so the mirrored camera,
// which sits below street level, can see the buildings above it.
class StreetMirror extends THREE.Mesh {
  constructor(geometry, shader, size, hide) {
    super(geometry, new THREE.ShaderMaterial({
      uniforms: THREE.UniformsUtils.clone(shader.uniforms),
      vertexShader: shader.vertexShader,
      fragmentShader: shader.fragmentShader,
    }));
    this.camera = new THREE.PerspectiveCamera();
    this.hide = hide;
    const rt = new THREE.WebGLRenderTarget(size.w, size.h, { type: THREE.HalfFloatType });
    this.rt = rt;
    const textureMatrix = new THREE.Matrix4();
    this.material.uniforms.tDiffuse.value = rt.texture;
    this.material.uniforms.textureMatrix.value = textureMatrix;

    const self = this;
    const mPos = new THREE.Vector3(), cPos = new THREE.Vector3(), normal = new THREE.Vector3();
    const view = new THREE.Vector3(), target = new THREE.Vector3(), look = new THREE.Vector3();
    const rot = new THREE.Matrix4();
    const vc = this.camera;

    this.onBeforeRender = function (renderer, scene, camera) {
      mPos.setFromMatrixPosition(self.matrixWorld);
      cPos.setFromMatrixPosition(camera.matrixWorld);
      rot.extractRotation(self.matrixWorld);
      normal.set(0, 0, 1).applyMatrix4(rot);
      view.subVectors(mPos, cPos);
      if (view.dot(normal) > 0) return; // looking at the mirror from below

      view.reflect(normal).negate().add(mPos);
      rot.extractRotation(camera.matrixWorld);
      look.set(0, 0, -1).applyMatrix4(rot).add(cPos);
      target.subVectors(mPos, look).reflect(normal).negate().add(mPos);
      vc.position.copy(view);
      vc.up.set(0, 1, 0).applyMatrix4(rot).reflect(normal);
      vc.lookAt(target);
      vc.far = camera.far;
      vc.near = camera.near;
      vc.updateMatrixWorld();
      vc.projectionMatrix.copy(camera.projectionMatrix);
      vc.projectionMatrixInverse.copy(camera.projectionMatrixInverse);

      textureMatrix.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1);
      textureMatrix.multiply(vc.projectionMatrix).multiply(vc.matrixWorldInverse).multiply(self.matrixWorld);

      self.visible = false;
      const hidden = [];
      for (const o of self.hide()) { if (o && o.visible) { o.visible = false; hidden.push(o); } }
      const prevTarget = renderer.getRenderTarget();
      const prevShadows = renderer.shadowMap.autoUpdate;
      renderer.shadowMap.autoUpdate = false;
      renderer.setRenderTarget(rt);
      renderer.state.buffers.depth.setMask(true);
      if (renderer.autoClear === false) renderer.clear();
      renderer.render(scene, vc);
      renderer.shadowMap.autoUpdate = prevShadows;
      renderer.setRenderTarget(prevTarget);
      if (camera.viewport !== undefined) renderer.state.viewport(camera.viewport);
      for (const o of hidden) o.visible = true;
      self.visible = true;
    };
  }
}

export function createStreetMirror(layout, quality, hide) {
  if (!quality.reflect) return null;
  // island polygon (grid space) -> flat shape; the mesh is turned flat below
  const shape = new THREE.Shape(layout.island.map(([x, z]) => new THREE.Vector2(x, -z)));
  const geo = new THREE.ShapeGeometry(shape);
  const k = quality.reflect * Math.min(devicePixelRatio, quality.pixelRatio);
  const mirror = new StreetMirror(geo, MirrorShader, {
    w: Math.round(innerWidth * k), h: Math.round(innerHeight * k),
  }, hide);
  mirror.rotation.x = -Math.PI / 2;
  mirror.position.y = layout.ground.y + 0.03;
  const m = mirror.material;
  m.transparent = true;
  m.depthWrite = false;
  m.polygonOffset = true;
  m.polygonOffsetFactor = -1;
  m.polygonOffsetUnits = -2;
  mirror.renderOrder = 2;
  mirror.frustumCulled = false;
  return mirror;
}
