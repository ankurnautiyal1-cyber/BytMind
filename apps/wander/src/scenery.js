import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { WATER_LEVEL, WORLD_HALF, GATE } from './terrain.js';
import { mulberry32 } from './noise.js';
import { CollisionWorld } from './colliders.js';

// Trees and rocks. The shapes are sculpted in Blender (tools/build_nature.py):
// tiered pines and firs, lumpy oaks with soft radial normals, birches, a
// blossom tree and a golden autumn tree, plus six chunky mossy rocks, all with
// baked vertex colours. Here they are scattered by the same seeded rules as
// before — one InstancedMesh per variant, wind sway injected in the shader.
//
// Distance LOD: every tree is binned each half-second by its distance from the
// camera into a full mesh (near), a ~30% decimated mesh (mid) and a baked
// cross-card impostor (far). Only near and mid cast shadows. Cliff pieces
// (tools/build_cliffs.py) grow out of the steep slopes.

const LOD_RANGES = { low: [70, 220], medium: [100, 300], high: [130, 380] };

export async function buildScenery(terrain, seed, wind, timeU, quality = { trees: 1 }, renderer = null) {
  const rand = mulberry32((seed ^ 0x9e3779b9) >>> 0);
  const group = new THREE.Group();
  const colliders = new CollisionWorld();

  const loader = new GLTFLoader();
  const opt = (url) => loader.loadAsync(url).catch(() => null);
  const [treesGltf, rocksGltf, lodGltf, cliffGltf] = await Promise.all([
    loader.loadAsync('assets/nature_trees.glb'),
    loader.loadAsync('assets/nature_rocks.glb'),
    opt('assets/nature_trees_lod.glb'),
    opt('assets/nature_cliffs.glb'),
  ]);
  const geos = {};
  for (const gltf of [treesGltf, rocksGltf, lodGltf, cliffGltf]) {
    if (!gltf) continue;
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

  let lodRange = LOD_RANGES[quality.name] || LOD_RANGES.medium;
  const impMat = new THREE.MeshBasicMaterial({ side: THREE.DoubleSide, alphaTest: 0.5 });
  const bins = []; // { items, mats (Float32Array), cols, near, mid, far }

  for (const [variant, items] of Object.entries(byVariant)) {
    const geo = geos[variant];
    if (!geo) continue;
    const lodGeo = geos[`${variant}_lod`] || geo;
    const n = items.length;
    const mats = new Float32Array(n * 16);
    const cols = new Float32Array(n * 3);
    items.forEach((t, i) => {
      pos.set(t.x, t.h - 0.3, t.z);
      euler.set(0, t.ry, 0);
      quat.setFromEuler(euler);
      scl.set(t.s, t.s * t.hs, t.s);
      mtx.compose(pos, quat, scl);
      mtx.toArray(mats, i * 16);
      // gentle brightness + hue drift so no two stands look stamped
      tint.setRGB(0.9 + t.v * 0.2, 0.93 + ((t.v * 7.3) % 1) * 0.14, 0.9 + ((t.v * 3.1) % 1) * 0.18);
      tint.toArray(cols, i * 3);
    });

    const mk = (g, shadow) => {
      const m = new THREE.InstancedMesh(g, treeMat, n);
      m.setColorAt(0, tint);       // allocates instanceColor
      m.count = 0;
      m.frustumCulled = false;     // instances span the whole world
      m.castShadow = shadow;
      m.receiveShadow = true;
      group.add(m);
      return m;
    };
    const near = mk(geo, true);
    const mid = lodGeo !== geo ? mk(lodGeo, true) : null;
    let far = null;
    const card = renderer ? bakeImpostor(renderer, geo, impMat) : null;
    if (card) {
      far = new THREE.InstancedMesh(card.geo, card.mat, n);
      far.setColorAt(0, tint);
      far.count = 0;
      far.frustumCulled = false;
      far.receiveShadow = false;
      group.add(far);
    }
    bins.push({ items, mats, cols, near, mid, far });

    // trunks are solid — you brush past the canopy, not through the tree
    const [r, th] = TRUNK[variant];
    for (const t of items) {
      const y0 = t.h - 0.3;
      colliders.addCylinder(t.x, t.z, r * t.s, y0, y0 + th * t.s * t.hs * 0.75);
    }
  }

  // sort every tree into near / mid / far by horizontal distance from the camera
  const lastCam = new THREE.Vector3(1e9, 0, 1e9);
  let sinceBin = 99;
  const lodStats = { near: 0, mid: 0, far: 0 };
  function rebin(cam) {
    const [r0, r1] = lodRange;
    const a2 = r0 * r0, b2 = r1 * r1;
    lodStats.near = lodStats.mid = lodStats.far = 0;
    for (const b of bins) {
      let kn = 0, km = 0, kf = 0;
      const { items, mats, cols } = b;
      for (let i = 0; i < items.length; i++) {
        const t = items[i];
        const dx = t.x - cam.x, dz = t.z - cam.z;
        const d2 = dx * dx + dz * dz;
        let m, k;
        if (d2 < a2 || (!b.mid && !b.far)) { m = b.near; k = kn++; }
        else if (d2 < b2 || !b.far) { m = b.mid || b.near; k = m === b.near ? kn++ : km++; }
        else { m = b.far; k = kf++; }
        m.instanceMatrix.array.set(mats.subarray(i * 16, i * 16 + 16), k * 16);
        m.instanceColor.array.set(cols.subarray(i * 3, i * 3 + 3), k * 3);
      }
      for (const [m, c] of [[b.near, kn], [b.mid, km], [b.far, kf]]) {
        if (!m) continue;
        m.count = c;
        m.instanceMatrix.needsUpdate = true;
        m.instanceColor.needsUpdate = true;
      }
      lodStats.near += kn; lodStats.mid += km; lodStats.far += kf;
    }
    lastCam.copy(cam);
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

  // ---------- cliffs: sculpted faces on the steepest slopes ----------
  const CLIFF = [[10, 8], [14, 6], [8, 11], [11, 9]]; // width, height at scale 1
  const cliffs = [];
  const maxCliffs = Math.round(80 * (quality.trees ?? 1));
  if (geos.cliff0) {
    for (let i = 0; i < 40000 && cliffs.length < maxCliffs; i++) {
      const x = (rand() * 2 - 1) * WORLD_HALF * 0.95;
      const z = (rand() * 2 - 1) * WORLD_HALF * 0.95;
      const h = terrain.heightAt(x, z);
      if (h < 5 || Math.hypot(x - GATE.x, z - GATE.z) < 140) continue;
      if (terrain.slopeAt(x, z) < 0.62) continue;
      if (cliffs.some((c) => Math.abs(c.x - x) < 26 && Math.abs(c.z - z) < 26)) continue;
      const gx = terrain.heightAt(x + 3, z) - terrain.heightAt(x - 3, z);
      const gz = terrain.heightAt(x, z + 3) - terrain.heightAt(x, z - 3);
      cliffs.push({ x, z, h, ry: Math.atan2(-gx, -gz) + (rand() - 0.5) * 0.5, s: 1.0 + rand() * 1.0, shape: Math.floor(rand() * 4), v: rand() });
    }
    const cliffMat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.95 });
    for (let shape = 0; shape < 4; shape++) {
      const items = cliffs.filter((c) => c.shape === shape);
      const geo = geos[`cliff${shape}`];
      if (!items.length || !geo) continue;
      const mesh = new THREE.InstancedMesh(geo, cliffMat, items.length);
      items.forEach((t, i) => {
        pos.set(t.x, t.h - 0.6 * t.s, t.z);
        euler.set(0, t.ry, 0);
        quat.setFromEuler(euler);
        scl.setScalar(t.s);
        mtx.compose(pos, quat, scl);
        mesh.setMatrixAt(i, mtx);
        tint.setRGB(0.88 + t.v * 0.2, 0.88 + t.v * 0.18, 0.88 + t.v * 0.2);
        mesh.setColorAt(i, tint);
        const [w, hh] = CLIFF[shape];
        colliders.addCylinder(t.x, t.z, w * 0.3 * t.s, t.h - 1.0, t.h + hh * t.s * 0.8);
      });
      mesh.instanceMatrix.needsUpdate = true;
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      mesh.frustumCulled = false;
      group.add(mesh);
    }
  }

  // clouds live on the sky dome (src/sky.js)
  const dayTint = new THREE.Color(1, 1, 1);
  const nightTint = new THREE.Color(0.13, 0.17, 0.3);
  const duskTint = new THREE.Color(1.0, 0.72, 0.55);
  function update(dt, sky = null, camPos = null) {
    if (sky) {
      // the baked cards carry daylight lighting; follow the sky so they dim at night
      impMat.color.copy(nightTint).lerp(dayTint, sky.daylight).lerp(duskTint, sky.dusk * 0.4 * sky.daylight);
    }
    if (!camPos || !group.visible) return;
    sinceBin += dt;
    if (sinceBin > 0.5 && (lastCam.distanceToSquared(camPos) > 16 || sinceBin > 3)) {
      sinceBin = 0;
      rebin(camPos);
    }
  }

  function setQuality(q) { lodRange = LOD_RANGES[q.name] || LOD_RANGES.medium; sinceBin = 99; }

  return { group, update, colliders, lodStats, cliffCount: cliffs.length, cliffs, rebin, setQuality };
}

// Render a tree from two sides into a small atlas and wrap it on crossed cards.
function bakeImpostor(renderer, geo, matProto) {
  geo.computeBoundingBox();
  const bb = geo.boundingBox;
  const w = Math.max(bb.max.x - bb.min.x, bb.max.z - bb.min.z) * 1.06;
  const h = bb.max.y - bb.min.y;
  const cx = (bb.min.x + bb.max.x) / 2, cz = (bb.min.z + bb.max.z) / 2;
  const tw = 128, th = Math.min(320, Math.max(96, Math.round(128 * h / w)));
  const rt = new THREE.WebGLRenderTarget(tw * 2, th, { samples: 0 });
  rt.texture.colorSpace = THREE.SRGBColorSpace;
  rt.texture.generateMipmaps = true;
  rt.texture.minFilter = THREE.LinearMipmapLinearFilter;
  rt.texture.anisotropy = 4;

  const scene = new THREE.Scene();
  const mesh = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.95 }));
  scene.add(mesh);
  const sun = new THREE.DirectionalLight(0xfff0d8, 2.2);
  sun.position.set(0.5, 1.0, 0.7);
  scene.add(sun, new THREE.HemisphereLight(0xcfe3ff, 0x5d6e3e, 1.4));
  const cam = new THREE.OrthographicCamera(-w / 2, w / 2, bb.max.y, bb.min.y, 0.1, 200);

  const prevTarget = renderer.getRenderTarget();
  const prevClear = renderer.getClearColor(new THREE.Color());
  const prevAlpha = renderer.getClearAlpha();
  const prevAuto = renderer.autoClear;
  renderer.setClearColor(0x4a6a30, 0); // green under the transparent pixels, so mipmaps do not darken the edges
  renderer.autoClear = true;
  renderer.setRenderTarget(rt);
  for (let side = 0; side < 2; side++) {
    rt.viewport.set(side * tw, 0, tw, th);
    rt.scissor.set(side * tw, 0, tw, th);
    rt.scissorTest = true;
    // side 0 looks down -z from +z; side 1 looks down -x from +x (screen right = world -z)
    if (side === 0) cam.position.set(cx, 0, cz + 50); else cam.position.set(cx + 50, 0, cz);
    cam.up.set(0, 1, 0);
    cam.lookAt(cx, 0, cz);
    renderer.render(scene, cam);
  }
  rt.scissorTest = false;
  renderer.setRenderTarget(prevTarget);
  renderer.setClearColor(prevClear, prevAlpha);
  renderer.autoClear = prevAuto;

  const quad = (flip) => {
    const g = new THREE.PlaneGeometry(w, h);
    g.translate(0, bb.min.y + h / 2, 0);
    const uv = g.attributes.uv;
    for (let i = 0; i < uv.count; i++) uv.setX(i, (flip ? 0.5 : 0) + uv.getX(i) * 0.5);
    if (flip) g.rotateY(Math.PI / 2);
    g.translate(flip ? 0 : cx, 0, flip ? cz : 0);
    return g;
  };
  const cardGeo = mergeGeometries([quad(false), quad(true)]);
  const mat = matProto.clone();
  mat.map = rt.texture;
  mat.color = matProto.color; // shared, driven by the sky
  return { geo: cardGeo, mat };
}
