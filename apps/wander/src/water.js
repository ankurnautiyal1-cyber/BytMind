import * as THREE from 'three';
import { WORLD_SIZE, WORLD_HALF, WATER_LEVEL } from './terrain.js';

// Water that knows how deep it is: it reads the terrain height texture, so the
// colour runs from clear turquoise over the sand to deep blue, foam laps the
// shoreline, caustics dance on the shallows, the surface mirrors the sky's
// actual colours and throws sun glitter that blooms. Wading or swimming sends
// rings out from the player.

const vert = /* glsl */ `
  uniform float uTime;
  varying vec3 vWorldPos;
  varying vec3 vNormal;
  #include <common>
  #include <fog_pars_vertex>
  void main() {
    vec3 p = position;
    float a = sin(p.x * 0.042 + uTime * 1.05);
    float b = sin(p.z * 0.055 - uTime * 0.85);
    float c = sin((p.x + p.z) * 0.021 + uTime * 0.55);
    p.y += a * 0.45 + b * 0.4 + c * 0.7;
    float dx = 0.042 * cos(p.x * 0.042 + uTime * 1.05) * 0.45
             + 0.021 * cos((p.x + p.z) * 0.021 + uTime * 0.55) * 0.7;
    float dz = 0.055 * cos(p.z * 0.055 - uTime * 0.85) * 0.4
             + 0.021 * cos((p.x + p.z) * 0.021 + uTime * 0.55) * 0.7;
    vNormal = normalize(vec3(-dx, 1.0, -dz));
    vec4 worldPosition = modelMatrix * vec4(p, 1.0);
    vWorldPos = worldPosition.xyz;
    vec4 mvPosition = viewMatrix * worldPosition;
    gl_Position = projectionMatrix * mvPosition;
    #include <fog_vertex>
  }
`;

const frag = /* glsl */ `
  uniform float uTime, uDaylight, uWorldHalf, uTCell, uTexN, uNight;
  uniform vec3 uSunDir, uSunColor, uSkyHor, uSkyZen;
  uniform vec3 uPlayer;               // xz + how deep in the water (0..1)
  uniform sampler2D uHeightTex;
  varying vec3 vWorldPos;
  varying vec3 vNormal;
  #include <common>
  #include <fog_pars_fragment>

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
    for (int i = 0; i < 3; i++) { s += a * noise(p); p = p * 2.03 + 4.7; a *= 0.5; }
    return s;
  }
  float ground(vec2 w) {
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
  // cheap animated caustic web
  float caustic(vec2 p, float t) {
    vec2 q = p * 0.9;
    float a = abs(sin(q.x * 2.1 + t * 0.9 + sin(q.y * 1.7 + t * 0.6) * 1.6));
    float b = abs(sin(q.y * 2.3 - t * 0.7 + sin(q.x * 1.9 - t * 0.5) * 1.4));
    return pow(1.0 - a * b, 6.0);
  }

  void main() {
    vec3 V = normalize(cameraPosition - vWorldPos);
    vec2 p = vWorldPos.xz;
    float depth = max(WATER_LEVEL_C - ground(p), 0.0);
    float distView = length(cameraPosition - vWorldPos);
    float near = exp(-distView * 0.0035);

    // fine moving ripples on top of the vertex waves (fade with distance)
    vec2 slope = vec2(
      cos(p.x * 1.15 + uTime * 1.8) * 1.15 * cos(p.y * 0.9 - uTime * 1.4)
      + 0.53 * cos((p.x + p.y) * 0.53 - uTime * 1.1)
      + 0.23 * cos(p.x * 0.23 - uTime * 0.7) * cos(p.y * 0.31 + uTime * 0.9),
      - 0.9 * sin(p.y * 0.9 - uTime * 1.4) * sin(p.x * 1.15 + uTime * 1.8)
      + 0.53 * cos((p.x + p.y) * 0.53 - uTime * 1.1)
      + 0.31 * sin(p.y * 0.31 + uTime * 0.9) * sin(p.x * 0.23 - uTime * 0.7)
    );
    // rings spreading from the player
    vec2 toP = p - uPlayer.xy;
    float rr = length(toP);
    float ring = sin(rr * 5.5 - uTime * 6.0) * exp(-rr * 0.38) * uPlayer.z;
    slope += normalize(toP + vec2(1e-4)) * ring * 2.2;

    vec3 N = normalize(vNormal + vec3(slope.x, 0.0, slope.y) * 0.22 * near);

    // depth colour: clear over the sand, deepening to the open water
    vec3 shallow = vec3(0.16, 0.78, 0.72);
    vec3 mid = vec3(0.04, 0.42, 0.62);
    vec3 deep = vec3(0.015, 0.12, 0.33);
    float dMix = 1.0 - exp(-depth * 0.32);
    vec3 body = mix(shallow, mid, smoothstep(0.0, 0.55, dMix));
    body = mix(body, deep, smoothstep(0.45, 1.0, dMix));
    // the water is lit by the day: dim it down at night, keep a little glow
    float lightK = 0.18 + 0.82 * uDaylight;
    body *= lightK * (0.9 + 0.25 * uSunColor.g);

    // sky mirror (the dome's own colours), strongest at grazing angles
    vec3 R = reflect(-V, N);
    vec3 sky = mix(uSkyHor, uSkyZen, smoothstep(0.0, 0.75, R.y));
    float fres = pow(1.0 - max(dot(N, V), 0.0), 3.0);
    vec3 col = mix(body, sky, 0.1 + fres * 0.75);

    // sun / moon glitter
    float sd = max(dot(R, uSunDir), 0.0);
    float spec = pow(sd, 220.0) * 7.0 + pow(sd, 24.0) * 0.35;
    float sparkle = step(0.965, noise(p * 3.2 + uTime * 0.7)) * pow(sd, 6.0) * 5.0 * near;
    col += uSunColor * (spec + sparkle) * (0.35 + 0.65 * uDaylight + 0.4 * uNight);

    // caustics on the shallows
    float shallowK = 1.0 - smoothstep(0.4, 4.5, depth);
    col += vec3(0.6, 0.95, 0.9) * caustic(p, uTime) * shallowK * uDaylight * 0.45 * near;

    // shoreline foam: lapping bands + a bright lip at the very edge
    float band = 1.0 - smoothstep(0.0, 1.1, depth);
    float lap = sin(depth * 5.0 - uTime * 1.3 + fbm(p * 0.5) * 6.0) * 0.5 + 0.5;
    float foamN = fbm(p * 1.3 + vec2(uTime * 0.12, -uTime * 0.09));
    float foam = band * smoothstep(0.42, 0.75, foamN * 0.65 + lap * 0.45);
    foam += (1.0 - smoothstep(0.0, 0.16, depth)) * 0.8;
    foam += max(ring, 0.0) * 0.25;
    foam = clamp(foam, 0.0, 1.0);
    col = mix(col, vec3(0.92, 0.97, 1.0) * (0.45 + 0.7 * uDaylight), foam * 0.85);

    // see-through over the sand, opaque out in the deep
    float alpha = mix(0.3, 0.94, 1.0 - exp(-depth * 0.8));
    alpha = max(alpha, foam * 0.9);
    gl_FragColor = vec4(col, alpha);
    #include <fog_fragment>
  }
`.replace(/WATER_LEVEL_C/g, WATER_LEVEL.toFixed(2));

export class Water {
  constructor(scene, terrain) {
    const geo = new THREE.PlaneGeometry(WORLD_SIZE * 1.6, WORLD_SIZE * 1.6, 160, 160);
    geo.rotateX(-Math.PI / 2);
    this.material = new THREE.ShaderMaterial({
      uniforms: THREE.UniformsUtils.merge([
        THREE.UniformsLib.fog,
        {
          uTime: { value: 0 },
          uSunDir: { value: new THREE.Vector3(0, 1, 0) },
          uSunColor: { value: new THREE.Color(1, 1, 1) },
          uDaylight: { value: 1 },
          uNight: { value: 0 },
          uSkyHor: { value: new THREE.Color() },
          uSkyZen: { value: new THREE.Color() },
          uPlayer: { value: new THREE.Vector3() },
          uWorldHalf: { value: WORLD_HALF },
          uTCell: { value: terrain.cell },
          uTexN: { value: terrain.gridN },
          uHeightTex: { value: terrain.heightTex },
        },
      ]),
      vertexShader: vert,
      fragmentShader: frag,
      transparent: true,
      fog: true,
      side: THREE.DoubleSide,
    });
    this.mesh = new THREE.Mesh(geo, this.material);
    this.mesh.position.y = WATER_LEVEL;
    scene.add(this.mesh);
    this._c = new THREE.Color();
  }

  update(elapsed, sky, player) {
    const u = this.material.uniforms;
    u.uTime.value = elapsed;
    const night = sky.daylight < 0.05;
    u.uSunDir.value.copy(night ? sky.moonDir : sky.sunDir);
    u.uDaylight.value = night ? 0 : sky.daylight;
    u.uNight.value = 1 - sky.daylight;
    u.uSunColor.value.setRGB(1, 0.95, 0.85).lerp(this._c.setRGB(0.55, 0.65, 0.9), 1 - sky.daylight);
    u.uSkyHor.value.copy(sky.horizonColor);
    u.uSkyZen.value.copy(sky.zenithColor);
    if (player) {
      const wet = THREE.MathUtils.clamp((WATER_LEVEL + 0.6 - player.pos.y) * 1.4 + 0.3, 0, 1);
      const inRange = player.pos.y < WATER_LEVEL + 1.0 ? wet : 0;
      u.uPlayer.value.set(player.pos.x, player.pos.z, inRange);
    }
  }
}
