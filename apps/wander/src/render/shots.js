import * as THREE from 'three';
import { WATER_LEVEL, GATE } from '../terrain.js';

// Fixed camera bookmarks for before/after comparisons.
//   await __wander.shot('gate-night')     // moves the player + sets the hour
//   __wander.shots                         // list of names
// The player is held in place afterwards (`__wander.hold = false` releases).

const look = (dx, dz) => Math.atan2(-dx, -dz); // yaw that faces direction (dx, dz)

export function makeShots(ctx) {
  const { player, worlds, terrain, pois, sky, portal } = ctx;

  function place(x, z, yaw, pitch = -0.05, lift = 0.1) {
    player.pos.set(x, worlds.heightAt(x, z) + lift, z);
    player.vel.set(0, 0, 0);
    player.yaw = yaw;
    player.pitch = pitch;
    player.update(1 / 60);
  }

  function findSite(type) {
    return pois.sites.find((s) => s.type === type);
  }

  function findForest() {
    const sp = terrain.findSpawn();
    let best = null, bd = 1e9;
    for (let x = -1500; x <= 1500; x += 60) {
      for (let z = -1500; z <= 1500; z += 60) {
        const h = terrain.heightAt(x, z);
        if (h < 5 || h > 30 || terrain.forestMask(x, z) < 0.28 || terrain.slopeAt(x, z) > 0.2) continue;
        const d = Math.hypot(x - sp.x, z - sp.z);
        if (d < bd) { bd = d; best = { x, z }; }
      }
    }
    return best || sp;
  }

  function findShore() {
    for (let r = 120; r < 1800; r += 90) {
      for (let a = 0; a < 24; a++) {
        const ang = (a / 24) * Math.PI * 2;
        const x = Math.cos(ang) * r, z = Math.sin(ang) * r;
        const h = terrain.heightAt(x, z);
        if (h < 0.7 || h > 3.2) continue;
        for (let b = 0; b < 12; b++) {
          const wa = (b / 12) * Math.PI * 2;
          const wx = x + Math.cos(wa) * 70, wz = z + Math.sin(wa) * 70;
          if (terrain.heightAt(wx, wz) < WATER_LEVEL - 2) {
            return { x, z, yaw: look(Math.cos(wa), Math.sin(wa)) };
          }
        }
      }
    }
    return null;
  }

  // nearest street-level spot (not a rooftop) around a city point
  function streetNear(x, z) {
    for (let r = 0; r < 120; r += 6) {
      for (let a = 0; a < 12; a++) {
        const ang = (a / 12) * Math.PI * 2;
        const px = x + Math.cos(ang) * r, pz = z + Math.sin(ang) * r;
        if (worlds.heightAt(px, pz) < 3 && worlds.city.inIsland(px, pz)) return { x: px, z: pz };
      }
    }
    return { x, z };
  }

  async function ensure(mode) {
    if (worlds.mode === mode) return;
    await portal.onTransit(mode);
    await new Promise((r) => setTimeout(r, 500));
  }

  const nearSite = (s, dist, dy = -0.04) => {
    const ang = Math.atan2(s.z - GATE.z, s.x - GATE.x) + 0.6;
    const x = s.x + Math.cos(ang) * dist, z = s.z + Math.sin(ang) * dist;
    place(x, z, look(s.x - x, s.z - z), dy);
  };

  const shots = {
    'meadow-noon': async () => {
      await ensure('nature'); sky.time = 0.5;
      const sp = terrain.findSpawn();
      place(sp.x, sp.z, Math.PI * 0.25, -0.08);
    },
    'forest-dusk': async () => {
      await ensure('nature'); sky.time = 0.735;
      const f = findForest();
      place(f.x, f.z, Math.PI * 0.6, -0.04);
    },
    'lake-sunrise': async () => {
      await ensure('nature'); sky.time = 0.265;
      const s = findShore();
      if (s) place(s.x, s.z, s.yaw, 0.0);
    },
    'shrine-night': async () => {
      await ensure('nature'); sky.time = 0.02;
      const s = findSite('shrine') || pois.sites[0];
      nearSite(s, 9);
    },
    'lighthouse-dusk': async () => {
      await ensure('nature'); sky.time = 0.74;
      const s = findSite('lighthouse') || pois.sites[0];
      nearSite(s, 38, 0.1);
    },
    'gate-night': async () => {
      await ensure('nature'); sky.time = 0.03;
      place(GATE.x, GATE.z + 12, 0, 0.02);
    },
    'gate-dusk': async () => {
      await ensure('nature'); sky.time = 0.75;
      place(GATE.x, GATE.z + 14, 0, 0.04);
    },
    'times-night': async () => {
      await ensure('city'); sky.time = 0.03;
      const s = worlds.city.sites.find((x) => x.type === 'neon');
      const st = streetNear(s.x, s.z);
      // face the nearest big screen
      let best = null, bd = 1e9;
      const v = new THREE.Vector3();
      for (const b of worlds.city.billboards) {
        b.mesh.getWorldPosition(v);
        const d = Math.hypot(v.x - st.x, v.z - st.z);
        if (d > 15 && d < bd) { bd = d; best = v.clone(); }
      }
      const tx = best ? best.x - st.x : 0, tz = best ? best.z - st.z : -1;
      place(st.x, st.z, look(tx, tz), 0.3);
    },
    'park-day': async () => {
      await ensure('city'); sky.time = 0.45;
      const s = worlds.city.sites.find((x) => x.type === 'park');
      const st = streetNear(s.x + 30, s.z + 80);
      place(st.x, st.z, look(s.x - st.x, s.z - st.z), -0.05);
    },
    'skyline-air': async () => {
      await ensure('city'); sky.time = 0.78;
      const g = worlds.city.gatePos, f = worlds.city.gateFwd || { x: 0, z: -1 };
      place(g.x - f.x * 60, g.z - f.z * 60, look(f.x, f.z), -0.18, 150);
    },
  };

  async function shot(name) {
    const fn = shots[name];
    if (!fn) throw new Error(`unknown shot "${name}" — try ${Object.keys(shots).join(', ')}`);
    await fn();
    ctx.setHold(true);
    return name;
  }

  return { shot, names: Object.keys(shots) };
}
