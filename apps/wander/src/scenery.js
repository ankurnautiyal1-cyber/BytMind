import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { WATER_LEVEL, WORLD_HALF } from './terrain.js';
import { mulberry32 } from './noise.js';
import { CollisionWorld } from './colliders.js';

// Trees and rocks. The shapes are sculpted in Blender (tools/build_nature.py):
// tiered pines and firs, lumpy oaks with soft radial normals, birches, a
// blossom tree and a golden autumn tree, plus six chunky mossy rocks, all with
// baked vertex colours. Here they are scattered by the same seeded rules as
// before — one InstancedMesh per variant, wind sway injected in the shader.

export async function buildScenery(terrain, seed, wind, timeU, quality = { trees: 1 }) {
  const rand = mulberry32((seed ^ 0x9e3779b9) >>> 0);
  const group = new THREE.Group();
  const colliders = new CollisionWorld();

  const loader = new GLTFLoader();
  const [treesGltf, rocksGltf] = await Promise.all([
    loader.loadAsync('assets/nature_trees.glb'),
    loader.loadAsync('assets/nature_rocks.glb'),
  ]);
  const geos = {};
  for (const gltf of [treesGltf, rocksGltf]) {
    gltf.scene.traverse((o) => {
      // the export spreads variants out for inspection; we only want the shape
      if (o.isMesh) geos[o.name] = o.geometry;
    });
  }

  // Wind sway injected into the foliage material: displacement grows with
  // height along the tree and breathes with the shared global gust strength.
  function addSway(material, strength, minY, maxY) {
    material.onBeforeCompile = (shader) => {
      shader.uniforms.uTime = timeU;
      shader.uniforms.uWind = wind;
      shader.vertexShader = shader.vertexShader
        .replace('#include <common>', '#include <common>\nuniform float uTime;\nuniform float uWind;')
        .replace('#include <begin_vertex>', `#include <begin_vertex>
        #ifdef USE_INSTANCING
          float wpx = instanceMatrix[3][0];
          float wpz = instanceMatrix[3][2];
          float k = smoothstep(${minY.toFixed(1)}, ${maxY.toFixed(1)}, transformed.y);
          float ph = uTime * 1.35 + wpx * 0.05 + wpz * 0.043;
          float gust = 0.6 + 0.5 * sin(uTime * 0.5 + wpx * 0.01 + wpz * 0.011);
          transformed.x += sin(ph) * k * ${strength.toFixed(2)} * uWind * gust;
          transformed.z += cos(ph * 0.77) * k * ${(strength * 0.6).toFixed(2)} * uWind * gust;
        #endif
        `);
    };
  }

  const mtx = new THREE.Matrix4();
  const quat = new THREE.Quaternion();
  const euler = new THREE.Euler();
  const pos = new THREE.Vector3();
  const scl = new THREE.Vector3();
  const tint = new THREE.Color();

  // ---------- trees: where ----------
  const CONIFER = [['pine_a', 0.38], ['pine_b', 0.34], ['fir', 0.28]];
  const BROAD = [['oak_a', 0.36], ['oak_b', 0.3], ['birch', 0.19], ['blossom', 0.05], ['autumn', 0.1]];
  // collision trunk: [radius, height] at scale 1
  const TRUNK = {
    pine_a: [0.46, 4.6], pine_b: [0.46, 4.6], fir: [0.38, 4.0],
    oak_a: [0.52, 3.6], oak_b: [0.52, 3.6], birch: [0.27, 5.8], blossom: [0.5, 3.2], autumn: [0.52, 3.6],
  };
  const pick = (table) => {
    let r = rand();
    for (const [name, w] of table) { if ((r -= w) <= 0) return name; }
    return table[0][0];
  };

  const byVariant = {};
  let placed = 0;
  const maxTrees = Math.round(3600 * (quality.trees ?? 1));
  for (let i = 0; i < 40000 && placed < maxTrees; i++) {
    const x = (rand() * 2 - 1) * WORLD_HALF * 0.97;
    const z = (rand() * 2 - 1) * WORLD_HALF * 0.97;
    const h = terrain.heightAt(x, z);
    if (h < WATER_LEVEL + 2.5 || h > 62) continue;
    if (terrain.slopeAt(x, z) > 0.55) continue;
    const mask = terrain.forestMask(x, z);
    if (mask < 0.04 || rand() > Math.min(1, (mask - 0.04) * 3.2)) continue;
    const tree = {
      x, z, h,
      s: 0.75 + rand() * 0.75,
      hs: 0.85 + rand() * 0.5,
      ry: rand() * Math.PI * 2,
      v: rand(),
    };
    // Pines dominate the highlands, a mix everywhere else.
    const variant = (h > 30 || rand() < 0.4) ? pick(CONIFER) : pick(BROAD);
    (byVariant[variant] ||= []).push(tree);
    placed++;
  }

  // ---------- trees: build ----------
  const treeMat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.95 });
  addSway(treeMat, 0.17, 3.5, 11.5);

  for (const [variant, items] of Object.entries(byVariant)) {
    const geo = geos[variant];
    if (!geo) continue;
    const mesh = new THREE.InstancedMesh(geo, treeMat, items.length);
    items.forEach((t, i) => {
      pos.set(t.x, t.h - 0.3, t.z);
      euler.set(0, t.ry, 0);
      quat.setFromEuler(euler);
      scl.set(t.s, t.s * t.hs, t.s);
      mtx.compose(pos, quat, scl);
      mesh.setMatrixAt(i, mtx);
      // gentle brightness + hue drift so no two stands look stamped
      tint.setRGB(0.9 + t.v * 0.2, 0.93 + ((t.v * 7.3) % 1) * 0.14, 0.9 + ((t.v * 3.1) % 1) * 0.18);
      mesh.setColorAt(i, tint);
    });
    mesh.instanceMatrix.needsUpdate = true;
    mesh.frustumCulled = false; // instances span the whole world
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    group.add(mesh);

    // trunks are solid — you brush past the canopy, not through the tree
    const [r, th] = TRUNK[variant];
    for (const t of items) {
      const y0 = t.h - 0.3;
      colliders.addCylinder(t.x, t.z, r * t.s, y0, y0 + th * t.s * t.hs * 0.75);
    }
  }

  // ---------- rocks ----------
  const rocks = [];
  for (let i = 0; i < 8000 && rocks.length < 500; i++) {
    const x = (rand() * 2 - 1) * WORLD_HALF * 0.97;
    const z = (rand() * 2 - 1) * WORLD_HALF * 0.97;
    const h = terrain.heightAt(x, z);
    if (h < WATER_LEVEL + 0.5) continue;
    const slope = terrain.slopeAt(x, z);
    const chance = h > 60 ? 0.8 : 0.1 + slope * 0.9;
    if (rand() > chance) continue;
    const s = rand() > 0.97 ? 1.5 + rand() * 1.1 : 0.5 + rand() * 1.8;
    rocks.push({
      x, z, h, s, sy: 0.55 + rand() * 0.5, sz: 0.7 + rand() * 0.6,
      ry: rand() * Math.PI * 2, v: rand(), shape: Math.floor(rand() * 6),
    });
  }
  const rockMat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.95, flatShading: true });
  for (let shape = 0; shape < 6; shape++) {
    const items = rocks.filter((r) => r.shape === shape);
    const geo = geos[`rock${shape}`];
    if (!items.length || !geo) continue;
    const mesh = new THREE.InstancedMesh(geo, rockMat, items.length);
    items.forEach((t, i) => {
      const k = 1.6 * t.s; // the Blender rocks are ~1 m radius
      pos.set(t.x, t.h + 0.04 * k, t.z);
      euler.set(0, t.ry, 0);
      quat.setFromEuler(euler);
      scl.set(k, k * t.sy, k * t.sz);
      mtx.compose(pos, quat, scl);
      mesh.setMatrixAt(i, mtx);
      tint.setRGB(0.85 + t.v * 0.3, 0.85 + t.v * 0.25, 0.85 + t.v * 0.25);
      mesh.setColorAt(i, tint);
    });
    mesh.instanceMatrix.needsUpdate = true;
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    mesh.frustumCulled = false;
    group.add(mesh);
  }

  // rocks stop you at the waist — and the low ones can be climbed
  for (const t of rocks) {
    const y0 = t.h - t.s * 0.25;
    colliders.addCylinder(t.x, t.z, 1.45 * t.s, y0, y0 + 1.7 * t.s * t.sy * 0.95);
  }

  // clouds live on the sky dome (src/sky.js)
  function update() {}

  return { group, update, colliders };
}
