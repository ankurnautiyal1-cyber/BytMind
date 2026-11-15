import * as THREE from 'three';
import { Terrain, WATER_LEVEL } from './terrain.js';
import { SkySystem } from './sky.js';
import { Water } from './water.js';
import { buildScenery } from './scenery.js';
import { Leaves } from './leaves.js';
import { Grass } from './grass.js';
import { Wisps } from './wisps.js';
import { Wildlife } from './wildlife.js';
import { Player } from './player.js';
import { HUD } from './hud.js';
import { createPOIs } from './pois.js';
import { Orbs } from './orbs.js';
import { Ambient } from './ambient.js';
import { Journal } from './journal.js';
import { Portal } from './portal.js';
import { Worlds } from './worlds.js';
import { initAudio, chimeDiscover, chimeShard, chimeComplete, chimePortal } from './sfx.js';
import { pickQuality } from './render/quality.js';
import { Pipeline } from './render/composer.js';
import { makeShots } from './render/shots.js';

const params = new URLSearchParams(location.search);
const seed = Number(params.get('seed')) || 20260;
const SAVE_KEY = `wander:progress:${seed}`;

const overlay = document.getElementById('overlay');
const cta = document.getElementById('cta');
document.getElementById('seedLabel').textContent =
  `seed ${seed} · 4 km × 4 km · append ?seed=1234 for a new world`;

const timeU = { value: 0 };
const wind = { value: 1 };

let renderer, scene, camera, terrain, sky, water, scenery, leaves, wildlife, grass, wisps;
let pois, orbs, ambient, journal, player, hud, portal, worlds;
let clock, elapsed = 0;
let pipeline, quality, hold = false, lookMix = 0, fps = 60;
let started = false, paused = true;

// ---- progress persistence (per seed) ----

function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem(SAVE_KEY)) || { d: [], o: [], cd: [], m: 'nature' };
  } catch { return { d: [], o: [], cd: [], m: 'nature' }; }
}

let progress = loadProgress();

function saveProgress() {
  try {
    progress.d = [
      ...pois.sites.filter((s) => s.discovered).map((s) => s.id),
      ...(portal.site.discovered ? [portal.site.id] : []),
    ];
    progress.o = [...orbs.collected];
    progress.cd = worlds.city.sites.filter((s) => s.discovered).map((s) => s.id);
    progress.m = worlds.mode;
    localStorage.setItem(SAVE_KEY, JSON.stringify(progress));
  } catch { /* storage unavailable — session-only progress */ }
}

function resetProgress() {
  try { localStorage.removeItem(SAVE_KEY); } catch { /* ignore */ }
  location.reload();
}

// Yield a frame so the "generating world…" message paints before heavy setup.
cta.textContent = 'generating world…';
requestAnimationFrame(() => setTimeout(boot, 30));

async function boot() {
  quality = pickQuality();
  // the post pipeline renders into its own multisampled HDR target
  renderer = new THREE.WebGLRenderer({ antialias: false, powerPreference: 'high-performance' });
  renderer.setSize(innerWidth, innerHeight);
  renderer.info.autoReset = false; // count the whole multi-pass frame
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  document.getElementById('app').appendChild(renderer.domElement);

  scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0xc3d9ec, 80, 2800);

  camera = new THREE.PerspectiveCamera(70, innerWidth / innerHeight, 0.3, 15000);
  camera.rotation.order = 'YXZ';

  terrain = new Terrain(seed);
  scene.add(terrain.mesh);

  sky = new SkySystem(scene, renderer, quality);
  pipeline = new Pipeline(renderer, scene, camera, quality);
  sky.setPixelRatio(renderer.getPixelRatio());
  water = new Water(scene, terrain);
  scenery = await buildScenery(terrain, seed, wind, timeU, quality);
  scene.add(scenery.group);
  leaves = new Leaves(terrain, scene, wind, seed);
  grass = new Grass(terrain, scene, wind, quality);
  wildlife = new Wildlife(terrain, scene, seed);

  // landmarks (loads the Blender-built glb assets) + shards + ambient life
  pois = await createPOIs(terrain, scene, seed, { wind, timeU });
  orbs = new Orbs(terrain, scene, seed, pois, progress.o);
  wisps = new Wisps(terrain, scene, pois);
  ambient = new Ambient(terrain, scene, seed, timeU, camera);

  // two worlds + the gate between them
  worlds = new Worlds(terrain, scene, seed, sky);
  worlds.pois = pois;
  portal = new Portal(scene, terrain, timeU, quality);
  worlds.portalSite = portal.site;
  worlds.portal = portal;
  worlds.city.quality = quality;
  worlds.city.extraHide = [water.mesh];
  portal.bind({ renderer, worlds, sky });
  worlds.onWarp = (v) => pipeline.setWarp(v);
  worlds.attachNature([
    terrain.mesh,
    scenery.group,
    grass.group,
    leaves.mesh,
    wildlife.bodyMesh, wildlife.headMesh, wildlife.legMesh,
    orbs.mesh, ...orbs.halos,
    ambient.birdMesh, ambient.fireflyMesh, ambient.butterflyMesh,
    wisps.group,
    ...pois.sites.map((s) => s.group),
  ]);

  // everything solid in the wilds feeds one collision world
  worlds.natureColliders.absorb(scenery.colliders);
  worlds.natureColliders.absorb(pois.colliders);
  worlds.natureColliders.absorb(portal.natureColliders);

  // restore saved discoveries + world
  for (const s of pois.sites) {
    if (progress.d.includes(s.id)) s.discovered = true;
  }
  portal.site.discovered = progress.d.includes(portal.site.id);

  // the Player talks to the Worlds ground provider, never to terrain directly
  const spawn = terrain.findSpawn();
  player = new Player(camera, worlds, renderer.domElement, scene);
  player.spawn(spawn.x, spawn.z);
  player.update(1 / 60); // settle camera boom + model pose before first paint

  hud = new HUD(terrain);
  journal = new Journal(worlds, orbs, hud.exploration, resetProgress);

  async function enterSavedWorld() {
    if (progress.m === 'city') {
      await worlds.city.build();
      portal.attachCityEnd(worlds.city.gateRoot, worlds.city.gatePos.x, 2 + 3.9,
        worlds.city.gatePos.z, worlds.city.gatePos.ry);
      worlds.linkCityColliders();
      for (const s of worlds.city.sites) {
        if (progress.cd.includes(s.id)) s.discovered = true;
      }
      worlds.setMode('city');
      const a = worlds.arrival('city');
      player.pos.set(a.x, worlds.heightAt(a.x, a.z) + 0.4, a.z);
      player.yaw = a.yaw;
    } else {
      worlds.setMode('nature');
    }
    hud.bind(worlds, orbs);
    hud.setWorld(worlds.mode);
    journal.setWorld(worlds.mode);
  }
  await enterSavedWorld();

  // ---- discovery / collection / transit feedback ----
  const onFound = (site) => {
    chimeDiscover();
    hud.toast(site.name, site.flavor);
    journal.refreshList();
    saveProgress();
  };
  pois.onDiscover = onFound;
  portal.onDiscover = onFound;
  worlds.city.onDiscover = onFound;
  orbs.onCollect = () => {
    chimeShard();
    hud.updateShards();
    hud.toast('Spirit shard collected', `${orbs.count} of ${orbs.total}`);
    saveProgress();
  };
  orbs.onComplete = () => {
    chimeComplete();
    hud.toast('Every spirit shard found', 'The world feels a little brighter.');
    saveProgress();
  };
  portal.onTransit = async (target) => {
    chimePortal();
    hud.toast(target === 'city' ? 'New York' : 'The Wilds',
      target === 'city' ? 'The other side of the gate is another world.' : 'Home again — the valley missed you.');
    await worlds.transit(target, player, portal);
  };
  worlds.onModeChange = () => {
    hud.setWorld(worlds.mode);
    journal.setWorld(worlds.mode);
    saveProgress();
  };

  cta.textContent = 'click to explore';
  // build the city quietly while the title card is up: no hitch on first crossing
  if (worlds.mode === 'nature') setTimeout(() => worlds.prepareCity(portal).catch(() => {}), 1200);

  // ---------- start / pause ----------
  let lockRequestedAt = 0;

  function lock() {
    lockRequestedAt = performance.now();
    try {
      const p = renderer.domElement.requestPointerLock();
      if (p && typeof p.catch === 'function') p.catch(() => {});
    } catch { /* pointer lock unavailable — drag-to-look still works */ }
  }

  function begin() {
    overlay.classList.add('hidden');
    document.body.classList.add('playing');
    paused = false;
    started = true;
    player.inputEnabled = true;
    initAudio();
    lock();
  }

  function pause() {
    paused = true;
    player.inputEnabled = false;
    player.keys = Object.create(null);
    cta.textContent = 'click to continue';
    overlay.classList.remove('hidden');
    document.body.classList.remove('playing');
  }

  overlay.addEventListener('click', begin);
  document.addEventListener('pointerlockchange', () => {
    if (!document.pointerLockElement && started) {
      // If the lock never stuck (restricted environment), keep playing in drag-to-look mode.
      if (performance.now() - lockRequestedAt < 300) return;
      pause();
    }
  });
  document.addEventListener('pointerlockerror', () => { /* drag-to-look fallback */ });
  addEventListener('keydown', (e) => {
    if (e.code === 'Escape' && started && !document.pointerLockElement) {
      if (journal.anyOpen) return; // Esc closes panels first
      pause();
    }
  });
  addEventListener('contextmenu', (e) => {
    if (document.pointerLockElement) e.preventDefault();
  });

  // ---------- main loop ----------
  clock = new THREE.Clock();

  renderer.setAnimationLoop(() => {
    const dt = Math.min(clock.getDelta(), 0.05);
    elapsed += dt;
    timeU.value = elapsed;
    wind.value = Math.max(0.15,
      0.85 + 0.4 * Math.sin(elapsed * 0.5) + 0.25 * Math.sin(elapsed * 1.7 + 2));

    fps += ((1 / Math.max(dt, 1e-4)) - fps) * 0.05;
    sky.world = worlds.mode;
    sky.update(dt, player.pos, elapsed);
    worlds.tweakFog();
    if (!paused && !hold) player.update(dt);
    scenery.update(dt);
    portal.update(dt, player.pos, elapsed, worlds.mode, sky.daylight, camera.position);
    if (worlds.mode === 'nature') {
      leaves.update(dt, player.pos, elapsed);
      grass.update(player.pos, elapsed, sky);
      wisps.update(dt, player.pos, elapsed, sky);
      wildlife.update(dt, player.pos, elapsed);
      pois.update(dt, player.pos, elapsed, sky);
      orbs.update(dt, player.pos, elapsed);
      ambient.update(dt, player.pos, elapsed, sky.daylight);
    } else {
      worlds.city.update(dt, player.pos, elapsed, sky);
    }
    water.update(elapsed, sky, player);
    journal.update(player);
    hud.setUnderwater(camera.position.y < WATER_LEVEL + 0.15);
    hud.update(dt, player, sky, !paused);

    lookMix += ((worlds.mode === 'city' ? 1 : 0) - lookMix) * Math.min(1, dt * 1.4);
    pipeline.setLook(lookMix, sky, elapsed);
    pipeline.setPortal(portal.proximity, portal.proximityTint);
    renderer.info.reset();
    pipeline.render();
  });

  addEventListener('resize', () => {
    camera.aspect = innerWidth / innerHeight;
    camera.updateProjectionMatrix();
    pipeline.resize();
  });

  const shotApi = makeShots({
    player, worlds, terrain, pois, sky, portal, setHold: (v) => { hold = v; },
  });

  // Debug / tour hooks — handy in the console: __wander.teleport(1200, -800)
  window.__wander = {
    quality,
    renderer,
    pipeline,
    shot: shotApi.shot,
    shots: shotApi.names,
    get hold() { return hold; },
    set hold(v) { hold = v; },
    stats: () => ({
      fps: Math.round(fps),
      calls: renderer.info.render.calls,
      triangles: renderer.info.render.triangles,
      textures: renderer.info.memory.textures,
      geometries: renderer.info.memory.geometries,
      quality: quality.name,
    }),
    seed,
    player,
    terrain,
    sky,
    wildlife,
    pois,
    orbs,
    journal,
    portal,
    worlds,
    get city() { return worlds.city; },
    teleport: (x, z) => player.spawn(x, z),
    toCity: () => portal.onTransit('city'),
    setRain: (v) => { if (worlds.city.fx) worlds.city.fx.rainOverride = v; },
    toWilds: () => portal.onTransit('nature'),
    setTime: (t) => { sky.time = ((t % 1) + 1) % 1; },
    toggleView: () => { player.view = player.view === 'third' ? 'first' : 'third'; },
    discoverAll: () => { pois.discoverAll(); portal.site.discovered = true; journal.refreshList(); saveProgress(); },
    collectAll: () => { orbs.collectAll(); hud.updateShards(); saveProgress(); },
    start: begin,
    pause,
  };
}
