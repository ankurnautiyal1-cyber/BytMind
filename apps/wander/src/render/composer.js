import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { SMAAPass } from 'three/addons/postprocessing/SMAAPass.js';
import { AtmospherePass } from './atmosphere.js';
import { makeGradePass, GRADES } from './grade.js';
import { makeWarpPass } from './warp.js';

// HDR frame pipeline:
//   scene (half-float, MSAA) → atmosphere (mist, scatter, shafts)
//   → bloom → tone map + sRGB → grade (split-tone, vignette, grain) → [SMAA]

const lerp = (a, b, t) => a + (b - a) * t;

export class Pipeline {
  constructor(renderer, scene, camera, quality) {
    this.renderer = renderer;
    this.quality = quality;
    this.mix = 0; // 0 = wilds grade, 1 = city grade (eased by the caller)
    this.scale = 1; // adaptive resolution multiplier
    this.onScale = null;

    const w = innerWidth, h = innerHeight;
    renderer.setPixelRatio(Math.min(devicePixelRatio, quality.pixelRatio));
    const pr = renderer.getPixelRatio();

    // sized by the composer below (a custom target makes it assume ratio 1)
    const target = new THREE.WebGLRenderTarget(1, 1, {
      type: THREE.HalfFloatType,
      samples: quality.msaa,
      depthTexture: new THREE.DepthTexture(1, 1),
    });
    this.composer = new EffectComposer(renderer, target);
    this.composer.setPixelRatio(pr);
    this.composer.setSize(w, h);

    this.composer.addPass(new RenderPass(scene, camera));

    this.atmosphere = new AtmospherePass(camera);
    this.composer.addPass(this.atmosphere);

    this.bloom = new UnrealBloomPass(new THREE.Vector2(w, h), 0.5, 0.75, 1.0);
    this.bloom.enabled = quality.bloom;
    this.composer.addPass(this.bloom);

    this.composer.addPass(new OutputPass());

    this.warpPass = makeWarpPass();
    this.composer.addPass(this.warpPass);

    this.gradePass = makeGradePass();
    this.composer.addPass(this.gradePass);

    // SMAA is always in the chain and switched on or off by the tier
    this.smaaPass = new SMAAPass();
    this.smaaPass.enabled = !!quality.smaa;
    this.composer.addPass(this.smaaPass);
  }

  // switch tier while running: resolution, anti-aliasing and the effect flags
  // apply immediately (instance counts and the city mirror need a reload)
  setQuality(q) {
    this.quality = q;
    this.bloom.enabled = q.bloom;
    this.smaaPass.enabled = !!q.smaa;
    for (const rt of [this.composer.renderTarget1, this.composer.renderTarget2]) {
      rt.samples = q.msaa;
      rt.dispose(); // re-created on next use with the new sample count
    }
    this.setScale(1);
  }

  resize() {
    this.renderer.setSize(innerWidth, innerHeight);
    this.composer.setSize(innerWidth, innerHeight);
  }

  // adaptive resolution: a fraction of the tier's pixel ratio
  setScale(s) {
    this.scale = s;
    const pr = Math.min(devicePixelRatio, this.quality.pixelRatio) * s;
    this.renderer.setPixelRatio(pr);
    this.composer.setPixelRatio(pr);
    this.composer.setSize(innerWidth, innerHeight);
    this.onScale?.(pr);
  }

  // blend the two worlds' grades; `sky` drives hour-of-day tinting
  setLook(mix, sky, elapsed) {
    this.mix = mix;
    const u = this.gradePass.grade;
    const a = GRADES.nature, b = GRADES.city;
    u.uSat.value = lerp(a.sat, b.sat, mix);
    u.uContrast.value = lerp(a.contrast, b.contrast, mix);
    u.uVignette.value = lerp(a.vignette, b.vignette, mix);
    u.uGrain.value = lerp(a.grain, b.grain, mix);
    u.uChroma.value = lerp(a.chroma, b.chroma, mix);
    u.uTime.value = elapsed;

    // shadows run teal by day and deep violet at night; highlights warm toward dusk
    const night = 1 - sky.daylight;
    u.uShadowTint.value.setRGB(
      lerp(a.shadow[0], b.shadow[0], mix) * lerp(1, 0.9, night),
      lerp(a.shadow[1], b.shadow[1], mix) * lerp(1, 0.92, night),
      lerp(a.shadow[2], b.shadow[2], mix) * lerp(1, 1.12, night),
    );
    u.uHighTint.value.setRGB(
      lerp(a.high[0], b.high[0], mix) * lerp(1, 1.04, sky.dusk),
      lerp(a.high[1], b.high[1], mix) * lerp(1, 0.96, sky.dusk),
      lerp(a.high[2], b.high[2], mix) * lerp(1, 0.86, sky.dusk),
    );

    // atmosphere follows the sky
    const au = this.atmosphere.u;
    au.uSunDir.value.copy(sky.sunDir);
    au.uSunColor.value.copy(sky.sunColor);
    au.uMistColor.value.copy(sky.horizonColor);
    const q = this.quality;
    au.uMist.value = q.mist ? sky.mistDensity : 0;
    au.uShafts.value = q.shafts ? sky.shaftStrength : 0;
    au.uAO.value = q.ao || 0;
    au.uScatter.value = sky.scatterStrength;
  }

  // approaching a gate: the grade leans toward the destination's colours
  setPortal(amount, tint) {
    const u = this.gradePass.grade;
    u.uPortal.value = amount;
    u.uPortalTint.value.copy(tint);
    // the crossing keeps the colour of the gate you walked into
    if (!this.warpPass.enabled) this.warpPass.warp.uTint.value.copy(tint);
  }

  // photo mode: 0 = off, ~1 = a gentle portrait lens
  setDof(aperture) {
    const d = this.atmosphere.dof;
    if (aperture > 0 && !d.active) d.resetFocus();
    d.aperture = aperture;
  }

  // 0 = off, 1 = the screen is a flat wash of portal light
  setWarp(v) {
    this.warpPass.enabled = v > 0.001;
    this.warpPass.warp.uWarp.value = v;
  }

  render() {
    this.warpPass.warp.uTime.value = performance.now() / 1000;
    this.composer.render();
  }
}
