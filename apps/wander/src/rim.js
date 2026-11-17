import * as THREE from 'three';

// A soft rim of sky light so the explorer separates from any background, at
// any hour (the baked look is otherwise a dark silhouette against dusk hills
// or night grass). Colour and strength follow the sky; see main.js.

export const rimUniforms = {
  uRimColor: { value: new THREE.Color(0.6, 0.75, 1.0) },
  uRimK: { value: 0.5 },
};

export function applyRim(material, scale = 1) {
  if (material.userData.rim) return;
  material.userData.rim = true;
  material.userData.rimKey = String(scale);
  const prev = material.onBeforeCompile;
  material.onBeforeCompile = (shader, renderer) => {
    prev?.(shader, renderer);
    shader.uniforms.uRimColor = rimUniforms.uRimColor;
    shader.uniforms.uRimK = rimUniforms.uRimK;
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', '#include <common>\nuniform vec3 uRimColor;\nuniform float uRimK;')
      .replace('#include <emissivemap_fragment>', `#include <emissivemap_fragment>
        {
          vec3 nrm = normalize(normal);
          float ndv = clamp(dot(nrm, normalize(vViewPosition)), 0.0, 1.0);
          float rimF = pow(max(1.0 - ndv, 0.0), 3.4);
          // brighter where the surface faces up (the sky), dimmer underneath
          vec3 upV = normalize((viewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz);
          float skyF = 0.45 + 0.55 * clamp(dot(nrm, upV) * 0.5 + 0.5, 0.0, 1.0);
          totalEmissiveRadiance += uRimColor * rimF * skyF * uRimK * ${scale.toFixed(2)};
        }`);
  };
  material.customProgramCacheKey = () => `rim-${material.name}-${material.userData.rimKey || ''}`;
  material.needsUpdate = true;
}
