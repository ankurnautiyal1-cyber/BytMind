import * as THREE from 'three';
import { City } from './city.js';
import { CollisionWorld } from './colliders.js';
import { GATE } from './terrain.js';
import { renderMapBase } from './hud.js';

// Manages the two worlds: the procedural wilds and New York. Handles the
// fade transition through the Ancient Gate, per-world ground delegation
// (the Player only ever talks to this object) and per-world visibility.

export class Worlds {
  constructor(terrain, scene, seed, sky) {
    this.terrain = terrain;
    this.sky = sky;
    this.mode = 'nature';
    this.city = new City(scene, seed);
    this.natureRoots = []; // objects hidden while in the city
    this.pois = null;      // set by main after POIs exist
    this.portalSite = null;
    this.onModeChange = null;
    this.onWarp = null; // (0..1) crossing-transition strength, wired to the post pipeline
    this._fade = this._makeFade();
    this.natureColliders = new CollisionWorld(); // filled by main as things are built
    this._cityLinked = false;
  }

  // collision world of the ACTIVE world — the Player resolves against this
  get colliders() {
    return this.mode === 'city' && this.city.colliders ? this.city.colliders : this.natureColliders;
  }

  // the city's gate pillars are solid too; call once after the city builds
  linkCityColliders() {
    if (this._cityLinked || !this.city.built || !this.portal?.cityColliders) return;
    this.city.colliders.absorb(this.portal.cityColliders);
    this._cityLinked = true;
  }

  // landmarks of the active world (the Ancient Gate counts as a wilds find)
  sites() {
    if (this.mode === 'city') return this.city.built ? this.city.sites : [];
    const list = this.pois ? [...this.pois.sites] : [];
    if (this.portalSite) list.push(this.portalSite);
    return list;
  }

  // where the gate between worlds stands in the ACTIVE world — always shown
  // on the maps, discovered or not (it's the way across)
  gateMarker() {
    if (this.portal) {
      const end = this.mode === 'city' ? this.portal.city : this.portal.nature;
      if (end) return { x: end.pos.x, z: end.pos.z };
    }
    return this.portalSite ? { x: this.portalSite.x, z: this.portalSite.z } : null;
  }

  mapBase(px, mode = this.mode) {
    if (mode === 'city' && this.city.built) return this.city.renderMapBase(px);
    return renderMapBase(this.terrain, px);
  }

  _makeFade() {
    const el = document.createElement('div');
    el.id = 'fade';
    el.innerHTML = '<span>weaving worlds…</span>';
    document.body.appendChild(el);
    return el;
  }

  attachNature(objects) {
    this.natureRoots.push(...objects.filter(Boolean));
  }

  // ground interface used by the Player — terrain in the wilds, city ground
  // (building roofs included) in New York
  heightAt(x, z) {
    return this.mode === 'nature' ? this.terrain.heightAt(x, z) : this.city.heightAt(x, z);
  }

  slopeAt(x, z, eps = 3) {
    return this.mode === 'nature' ? this.terrain.slopeAt(x, z, eps) : this.city.slopeAt(x, z);
  }

  biomeName(x, z) {
    if (this.mode === 'city') return this.city.biomeName(x, z);
    return null; // hud falls back to its own terrain naming
  }

  // called every frame after sky.update: the city reads closer than the wilds
  tweakFog() {
    if (this.mode === 'city' && this.sky.scene.fog) {
      this.sky.scene.fog.far = Math.min(this.sky.scene.fog.far, 2100);
      this.sky.scene.fog.near = Math.max(this.sky.scene.fog.near, 90);
    }
  }

  arrival(mode) {
    // where the player lands after stepping through, and which way they face
    if (mode === 'city') {
      const g = this.city.gatePos || { x: 0, z: 665 };
      const f = this.city.gateFwd || { x: 0, z: -1 };
      // a few strides into the city, facing up the island axis
      return { x: g.x + f.x * 6, z: g.z + f.z * 6, yaw: Math.atan2(-f.x, -f.z), pitch: 0 };
    }
    return { x: GATE.x, z: GATE.z + 7, yaw: Math.PI, pitch: 0 }; // face the valley (+z)
  }

  // build the city (idempotent) and hook up its end of the gate. Called when
  // the title screen is up so the first crossing doesn't hitch.
  async prepareCity(portal) {
    if (this.city.built && this._cityPrepared) return;
    if (!this.city.built) await this.city.build();
    if (!this._cityPrepared && this.city.gateRoot) {
      portal.attachCityEnd(this.city.gateRoot, this.city.gatePos.x, 2 + 3.9,
        this.city.gatePos.z, this.city.gatePos.ry);
      this.linkCityColliders();
      this._cityPrepared = true;
    }
    this.setMode(this.mode); // a freshly built city must respect the active world
  }

  // animate the warp pass value (setTimeout, not rAF: must finish even if the tab is hidden)
  _warp(from, to, ms) {
    return new Promise((resolve) => {
      const t0 = performance.now();
      const ease = (k) => (k < 0.5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2);
      const step = () => {
        const k = Math.min(1, (performance.now() - t0) / ms);
        this.onWarp?.(from + (to - from) * ease(k));
        if (k < 1) setTimeout(step, 16); else resolve();
      };
      step();
    });
  }

  async transit(target, player, portal) {
    this.transiting = true;
    const fade = this._fade;
    await this._warp(0, 1, 850);        // the world stretches into the doorway
    fade.classList.add('on');            // caption over the wash
    if (target === 'city') await this.prepareCity(portal);
    await new Promise((r) => setTimeout(r, 180));
    this.setMode(target);
    const a = this.arrival(target);
    player.pos.set(a.x, this.heightAt(a.x, a.z) + 0.4, a.z);
    player.vel.set(0, 0, 0);
    player.yaw = a.yaw;
    player.pitch = a.pitch;
    await new Promise((r) => setTimeout(r, 140));
    fade.classList.remove('on');
    await this._warp(1, 0, 1100);       // …and the new one settles back in
    this.transiting = false;
    this.onModeChange?.(target);
  }

  setMode(mode) {
    this.mode = mode;
    const city = mode === 'city';
    for (const o of this.natureRoots) o.visible = !city;
    this.city.group.visible = city;
    if (this.city.gateRoot) this.city.gateRoot.visible = city;
  }
}
