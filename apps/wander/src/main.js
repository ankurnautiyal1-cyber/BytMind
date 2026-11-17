import '@fontsource-variable/inter';
import '@fontsource/cormorant-garamond/400.css';
import '@fontsource/cormorant-garamond/500.css';
import '@fontsource/cormorant-garamond/600.css';
import '@fontsource/cormorant-garamond/400-italic.css';
import '@fontsource/cormorant-garamond/500-italic.css';
import * as THREE from 'three';
import { Terrain, WATER_LEVEL } from './terrain.js';
import { SkySystem } from './sky.js';
import { Water } from './water.js';
import { buildScenery } from './scenery.js';
import { Leaves } from './leaves.js';
import { Grass } from './grass.js';
import { Wisps } from './wisps.js';
import { PlayerFX } from './player-fx.js';
import { rimUniforms } from './rim.js';
import { charEnv } from './character.js';
import { Wildlife } from './wildlife.js';
import { Player } from './player.js';
import { HUD } from './hud.js';
import { createPOIs } from './pois.js';
import { Orbs } from './orbs.js';
import { Ambient } from './ambient.js';
import { Journal } from './journal.js';
import { Portal } from './portal.js';
import { Worlds } from './worlds.js';
import { pickQuality, TIERS } from './render/quality.js';
import { Settings } from './settings.js';
import { Gamepad } from './gamepad.js';
import { FPHands } from './fp-hands.js';
import { Pipeline } from './render/composer.js';
import { Adaptive } from './render/adaptive.js';
import { PhotoMode } from './photo.js';
import { makeShots } from './render/shots.js';

const params = new URLSearchParams(location.search);
const seed = Number(params.get('seed')) || 20260;
const SAVE_KEY = `wander:progress:${seed}`;

const overlay = document.getElementById('overlay');
const cta = document.getElementById('cta');
document.getElementById('seedLabel').textContent =
  `seed ${seed} · 4 km × 4 km · append ?seed=1234 for a new world`;

const timeU = { value: 0 };
const _rimMoon = new THREE.Color(0.45, 0.58, 1.0);
const _rimNeon = new THREE.Color(0.85, 0.35, 0.95);
const wind = { value: 1 };

let renderer, scene, camera, terrain, sky, water, scenery, leaves, wildlife, grass, wisps, playerFx;
let pois, orbs, ambient, journal, player, hud, portal, worlds;
let clock, elapsed = 0;
let pipeline, quality, hold = false, lookMix = 0, fps = 60;
let photo, adaptive, settings, gamepad, fpHands, hoodManual = null, cpuMs = 0, renderMs = 0;
let started = false, paused = true;

// ---- progress persistence (per seed) ----

function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem(SAVE_KEY)) || { d: [], o: [], cd: [], m: 'nature' };
  } catch { return { d: [], o: [], cd: [], m: 'nature' }; }
}

let progress = loadProgress();
progress.th = progress.th || {}; // landmark photographs (data URLs), taken when each is found

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
setTimeout(boot, 60); // (not rAF: a hidden tab never fires it, and the world would never load)

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
  sky.time = 0.29; // a soft golden morning behind the title card
  pipeline = new Pipeline(renderer, scene, camera, quality);
  sky.setPixelRatio(renderer.getPixelRatio());
  let adaptOn = true;
  try { adaptOn = localStorage.getItem('wander:adaptive') !== '0'; } catch { /* ignore */ }
  if (params.get('adapt') === '0') adaptOn = false;
  adaptive = new Adaptive((scale) => {
    pipeline.setScale(scale);
    sky.setPixelRatio(renderer.getPixelRatio());
  }, adaptOn);
  water = new Water(scene, terrain);
  scenery = await buildScenery(terrain, seed, wind, timeU, quality, renderer);
  scene.add(scenery.group);
  leaves = new Leaves(terrain, scene, wind, seed);
  grass = new Grass(terrain, scene, wind, quality);
  wildlife = await Wildlife.create(terrain, scene, seed);

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
    ...wildlife.roots,
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
  playerFx = new PlayerFX(scene, terrain);
  fpHands = new FPHands(camera, scene);
  charEnv.wind = wind;

  hud = new HUD(terrain);
  journal = new Journal(worlds, orbs, hud.exploration, resetProgress, progress.th);
  photo = new PhotoMode({
    camera, player, pipeline, sky, worlds, seed,
    canEnter: () => started && !paused && !hold && !worlds.transiting && !journal.anyOpen && !settings?.isOpen,
    onExit: () => { // glide from the photo camera back to the chase camera
      intro.t = 0;
      intro.pos.copy(camera.position);
      intro.quat.copy(camera.quaternion);
    },
  });
  journal.blockKeys = () => photo.active;
  settings = new Settings({
    player, pipeline, adaptive, getQuality: () => quality, applyQuality,
    onReset: resetProgress,
    onOpen: () => { if (started && !paused) pause(); },
  });
  settings.setBootTier(quality.name);
  journal.extraOpen = () => settings.isOpen;
  gamepad = new Gamepad({ player, photo, hud, onStart: () => { if (paused) begin(); else pause(); } });
  wireKeys();

  // ---------- live graphics tier + keys ----------
  function applyQuality(name) {
    const q = TIERS[name];
    if (!q) return;
    quality = q;
    try { localStorage.setItem('wander:quality', name); } catch { /* ignore */ }
    pipeline.setQuality(q);
    sky.quality = q;
    sky.setPixelRatio(renderer.getPixelRatio());
    grass.setQuality(q);
    scenery.setQuality(q);
    worlds.city.quality = q;
    adaptive.level = 0;
  }

  function wireKeys() {
    addEventListener('keydown', (e) => {
      if (e.repeat) return;
      if (e.code === 'KeyO' && !photo.active) {
        settings.toggle();
      } else if (e.code === 'KeyU' && started && !photo.active) {
        hoodManual = hoodManual === null ? !charEnv.hoodUp : (hoodManual ? false : null);
        if (hoodManual === null) hud.toast('Hood: automatic', '');
        else hud.toast(hoodManual ? 'Hood up' : 'Hood down', '');
      }
    });
  }

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
    hud.discover(site);
    queuePhoto(site);
    journal.refreshList();
    saveProgress();
  };
  pois.onDiscover = onFound;
  portal.onDiscover = onFound;
  worlds.city.onDiscover = onFound;
  orbs.onCollect = () => {
    hud.updateShards();
    hud.toast('Spirit shard collected', `${orbs.count} of ${orbs.total}`);
    saveProgress();
  };
  orbs.onComplete = () => {
    hud.moment({ kicker: 'Complete', title: 'Every spirit shard found', sub: 'The world feels a little brighter.', ms: 4600 });
    saveProgress();
  };
  portal.onTransit = async (target) => {
    await worlds.transit(target, player, portal);
  };
  worlds.onModeChange = () => {
    hud.arrive(worlds.mode);
    hud.setWorld(worlds.mode);
    journal.setWorld(worlds.mode);
    saveProgress();
  };

  cta.textContent = 'click to explore';
  // build the city quietly while the title card is up: no hitch on first crossing
  if (worlds.mode === 'nature') setTimeout(() => worlds.prepareCity(portal).catch(() => {}), 1200);

  // ---------- landmark photographs ----------
  // When a landmark is found, one extra frame is rendered from a vantage point
  // facing it (the player is hidden), shrunk to a thumbnail and kept with the
  // save, so the journal shows what you actually saw. Only the last render of a
  // frame is presented, so the viewer never sees the detour.
  const VANTAGE = { // [distance, camera height above ground, look-at height]
    lighthouse: [44, 10, 14], ruinTower: [32, 6, 6], windmill: [34, 6, 7], stoneCircle: [24, 7, 1],
    shrine: [15, 3.2, 2], arch: [30, 6, 6], camp: [15, 3, 1], shipwreck: [26, 6, 1], gate: [26, 5, 6],
    cityTower: [300, 150, 170], park: [120, 45, 5], monument: [170, 40, 28], neon: [64, 12, 12],
  };
  let pendingPhoto = null;
  function queuePhoto(site) {
    if (progress.th[site.id]) return;
    pendingPhoto = site;
  }
  const photoCv = document.createElement('canvas');
  photoCv.width = 288; photoCv.height = 154;
  function takePendingPhoto() {
    if (!pendingPhoto || paused || photo?.active) return;
    const s = pendingPhoto;
    pendingPhoto = null;
    try {
      const [dist, up, lookH] = VANTAGE[s.type] || [28, 6, 4];
      const savedPos = camera.position.clone();
      const savedQuat = camera.quaternion.clone();
      const savedFov = camera.fov;
      let dx = player.pos.x - s.x, dz = player.pos.z - s.z;
      const l = Math.hypot(dx, dz) || 1;
      dx /= l; dz /= l;
      const cx = s.x + dx * dist, cz = s.z + dz * dist;
      const base = worlds.heightAt(cx, cz);
      camera.position.set(cx, Math.max(base + 3, (s.y ?? base) + up), cz);
      camera.fov = 55;
      camera.updateProjectionMatrix();
      camera.lookAt(s.x, (s.y ?? base) + lookH, s.z);
      camera.updateMatrixWorld(true);
      player.model.setVisible(false);
      pipeline.render();
      // centre-crop the frame to the card's aspect and shrink it
      const cv = renderer.domElement;
      const aspect = photoCv.width / photoCv.height;
      let sw = cv.width, sh = cv.width / aspect;
      if (sh > cv.height) { sh = cv.height; sw = sh * aspect; }
      photoCv.getContext('2d').drawImage(cv, (cv.width - sw) / 2, (cv.height - sh) / 2, sw, sh, 0, 0, photoCv.width, photoCv.height);
      progress.th[s.id] = photoCv.toDataURL('image/jpeg', 0.78);
      player.model.setVisible(true);
      camera.position.copy(savedPos);
      camera.quaternion.copy(savedQuat);
      camera.fov = savedFov;
      camera.updateProjectionMatrix();
      camera.updateMatrixWorld(true);
      saveProgress();
      journal.refreshList();
    } catch (e) {
      player.model.setVisible(true);
      console.warn('[photo] could not take a landmark photograph', e);
    }
  }

  // ---------- start / pause ----------
  let lockRequestedAt = 0;

  function lock() {
    lockRequestedAt = performance.now();
    try {
      const p = renderer.domElement.requestPointerLock();
      if (p && typeof p.catch === 'function') p.catch(() => {});
    } catch { /* pointer lock unavailable — drag-to-look still works */ }
  }

  // the title screen's camera drifts around the explorer; on Enter it eases
  // into the normal chase camera
  const intro = { t: 1, pos: new THREE.Vector3(), quat: new THREE.Quaternion() };
  const orbitLook = new THREE.Vector3();
  function titleOrbit() {
    const c = player.pos;
    // sweep slowly through the arc in front of the explorer, so the gate (or the
    // horizon) glows behind them and nothing big gets between us and them
    const ang0 = Math.atan2(-Math.cos(player.yaw), -Math.sin(player.yaw));
    const a = ang0 + 0.5 + 0.38 * Math.sin(elapsed * 0.07);
    const R = (worlds.mode === 'city' ? 15 : 12) + Math.sin(elapsed * 0.11) * 1.5;
    const gx = c.x + Math.cos(a) * R, gz = c.z + Math.sin(a) * R;
    const ground = worlds.heightAt(gx, gz);
    camera.position.set(gx, Math.max(ground + 1.5, c.y + 1.8 + Math.sin(elapsed * 0.17) * 0.35), gz);
    // aim to one side of them so the explorer sits in the left third, clear of the title
    const dx = c.x - gx, dz = c.z - gz, dl = Math.hypot(dx, dz) || 1;
    orbitLook.set(c.x + (-dz / dl) * 4.6, c.y + 1.7, c.z + (dx / dl) * 4.6);
    camera.lookAt(orbitLook);
  }

  function begin() {
    intro.t = 0;
    intro.pos.copy(camera.position);
    intro.quat.copy(camera.quaternion);
    overlay.classList.add('hidden');
    document.body.classList.add('playing');
    paused = false;
    started = true;
    player.inputEnabled = true;
    lock();
  }

  function pause() {
    photo?.abort();
    paused = true;
    player.inputEnabled = false;
    player.keys = Object.create(null);
    cta.textContent = 'click to continue';
    overlay.classList.remove('hidden');
    document.body.classList.remove('playing');
  }

  overlay.addEventListener('click', begin);
  document.getElementById('helpBtn')?.addEventListener('click', (e) => { e.stopPropagation(); journal.toggleHelp(true); });
  document.getElementById('settingsBtn')?.addEventListener('click', (e) => { e.stopPropagation(); settings.open(); });
  document.getElementById('helpSettings')?.addEventListener('click', () => { journal.toggleHelp(false); settings.open(); });
  for (const ev of ['mousemove', 'keydown', 'wheel', 'mousedown']) addEventListener(ev, () => hud.poke(), { passive: true });
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
      if (journal.anyOpen || settings.isOpen) return; // Esc closes panels first
      pause();
    }
  });
  addEventListener('contextmenu', (e) => {
    if (document.pointerLockElement) e.preventDefault();
  });

  // ---------- main loop ----------
  clock = new THREE.Clock();

  let dtOverride = null; // __wander.step() drives frames by hand (a hidden tab throttles timers)
  const frame = () => {
    const t0 = performance.now();
    const rawDt = dtOverride ?? clock.getDelta();
    const dt = Math.min(rawDt, 0.05);
    gamepad.update(rawDt, started && !paused);
    settings.tick(rawDt, () => `${cpuMs.toFixed(1)} + ${renderMs.toFixed(1)} ms · ${renderer.getPixelRatio().toFixed(2)}×`);
    adaptive.feed(rawDt, !paused && !worlds.transiting && !photo.active && document.visibilityState === 'visible');
    elapsed += dt;
    timeU.value = elapsed;
    wind.value = Math.max(0.15,
      0.85 + 0.4 * Math.sin(elapsed * 0.5) + 0.25 * Math.sin(elapsed * 1.7 + 2));

    fps += ((1 / Math.max(dt, 1e-4)) - fps) * 0.05;
    sky.world = worlds.mode;
    sky.update(dt, player.pos, elapsed);
    worlds.tweakFog();
    if (!paused && !hold && !photo.active) player.update(dt);
    else if (photo.active) {
      // the explorer holds still (breathing, cloth) while the camera roams
      player.model.update(dt, {
        vx: 0, vz: 0, vy: 0, speed: 0, grounded: true, inWater: false, flying: false,
        lookYaw: player.yaw, lookPitch: 0, lift: player.lift,
      });
      photo.update(dt);
    } else if (!started) {
      // title screen: keep the explorer breathing and the cloth moving
      player.model.update(dt, {
        vx: 0, vz: 0, vy: 0, speed: 0, grounded: true, inWater: false, flying: false,
        lookYaw: player.yaw, lookPitch: 0, lift: player.lift,
      });
      titleOrbit();
    }
    if (intro.t < 1) {
      intro.t = Math.min(1, intro.t + dt / 1.6);
      const e = intro.t * intro.t * (3 - 2 * intro.t);
      camera.position.lerpVectors(intro.pos, camera.position, e);
      camera.quaternion.slerpQuaternions(intro.quat, camera.quaternion, e);
    }
    {
      // the explorer reacts to the sky: a rim of sky light, a lantern after dark
      const night = 1 - sky.daylight;
      charEnv.night = night;
      const rc = rimUniforms.uRimColor.value.copy(sky.horizonColor).lerp(_rimMoon, Math.min(1, night * 0.6)).multiplyScalar(1.25);
      if (worlds.mode === 'city') rc.lerp(_rimNeon, sky.cityGlow * night * 0.45);
      rimUniforms.uRimK.value = 0.12 + 0.55 * sky.dusk + 0.8 * night;
      if (!paused) playerFx.update(dt, player, { mode: worlds.mode, sky, camera, feet: player.model.feet(), hands: player.model.hands() });
      // the hood goes up in the rain (or when asked: U)
      const rain = worlds.mode === 'city' ? (worlds.city.fx?.rain || 0) : 0;
      charEnv.hoodUp = hoodManual ?? rain > 0.3;
      fpHands.update(dt, player, { show: started && !paused && !photo.active && player.view === 'first', night });
    }
    scenery.update(dt, sky, camera.position);
    portal.update(dt, player.pos, elapsed, worlds.mode, sky.daylight, camera.position);
    if (worlds.mode === 'nature') {
      leaves.update(dt, player.pos, elapsed);
      grass.update(player.pos, elapsed, sky, player.grounded && !player.inWater ? (0.55 + Math.min(0.45, Math.hypot(player.vel.x, player.vel.z) * 0.05)) : 0);
      wisps.update(dt, player.pos, elapsed, sky);
      wildlife.update(dt, player.pos, elapsed, sky.daylight);
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
    takePendingPhoto();
    const t1 = performance.now();
    pipeline.render();
    photo.afterRender(renderer.domElement);
    const t2 = performance.now();
    cpuMs += ((t1 - t0) - cpuMs) * 0.05;
    renderMs += ((t2 - t1) - renderMs) * 0.05;
  };
  renderer.setAnimationLoop(frame);

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
    get quality() { return quality; },
    applyQuality,
    settings,
    gamepad,
    renderer,
    pipeline,
    shot: shotApi.shot,
    shots: shotApi.names,
    get hold() { return hold; },
    set hold(v) { hold = v; },
    step: (n = 1, dt = 1 / 60) => { dtOverride = dt; try { for (let i = 0; i < n; i++) frame(); } finally { dtOverride = null; } },
    photo,
    scenery,
    adaptive,
    // GPU cost of the full pipeline at the current view: frames drawn back to
    // back, each forced to finish (a 1-px readback), so it works with the tab hidden
    bench: async (name, frames = 40) => {
      if (name) { await shotApi.shot(name); await new Promise((r) => setTimeout(r, 1800)); }
      const gl = renderer.getContext();
      const px = new Uint8Array(4);
      for (let i = 0; i < 4; i++) { pipeline.render(); gl.readPixels(0, 0, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, px); }
      renderer.info.reset();
      const t = performance.now();
      for (let i = 0; i < frames; i++) { pipeline.render(); gl.readPixels(0, 0, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, px); }
      const ms = (performance.now() - t) / frames;
      return {
        view: name || 'current', quality: quality.name, ms: +ms.toFixed(2), fps: Math.round(1000 / ms),
        calls: Math.round(renderer.info.render.calls / frames),
        tris: Math.round(renderer.info.render.triangles / frames),
        px: `${renderer.domElement.width}x${renderer.domElement.height}`,
      };
    },
    stats: () => ({
      fps: Math.round(fps),
      cpuMs: +cpuMs.toFixed(2),
      submitMs: +renderMs.toFixed(2),
      scale: adaptive.scale,
      pixelRatio: renderer.getPixelRatio(),
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
    hud,
    progress,
    takePhoto: (site) => { pendingPhoto = site; },
    get paused() { return paused; },
    get pendingPhoto() { return pendingPhoto; },
    pause,
  };
}
