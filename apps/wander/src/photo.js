import * as THREE from 'three';

// Photo mode (C): the explorer stands still, the HUD gets out of the way and
// the camera is yours. Depth of field focuses on whatever is under the centre
// of the frame; the clock can be scrubbed or frozen; Enter saves a PNG of
// exactly what the canvas shows.

const APERTURES = [0, 0.3, 0.6, 1, 1.8, 3];
const APERTURE_NAMES = ['off', 'soft', 'light', 'portrait', 'wide', 'macro'];
const LEASH = 60; // metres from the explorer (the grass ring and city detail follow them)

export class PhotoMode {
  constructor({ camera, player, pipeline, sky, worlds, seed, canEnter, onExit }) {
    this.camera = camera;
    this.player = player;
    this.pipeline = pipeline;
    this.sky = sky;
    this.worlds = worlds;
    this.seed = seed;
    this.canEnter = canEnter;
    this.onExit = onExit;

    this.active = false;
    this.keys = Object.create(null);
    this.pos = new THREE.Vector3();
    this.vel = new THREE.Vector3();
    this.yaw = 0;
    this.pitch = 0;
    this.fov = 60;
    this.apIdx = 3;
    this.showExplorer = true;
    this.guides = false;
    this.wantsCapture = false;
    this.dragging = false;
    this._fwd = new THREE.Vector3();
    this._right = new THREE.Vector3();
    this._move = new THREE.Vector3();
    this._idle = 0;
    this._readT = 0;
    this._saved = 0;

    this._buildDom();

    addEventListener('keydown', (e) => this._key(e, true));
    addEventListener('keyup', (e) => this._key(e, false));
    addEventListener('blur', () => { this.keys = Object.create(null); });
    addEventListener('wheel', (e) => {
      if (!this.active) return;
      this.fov = THREE.MathUtils.clamp(this.fov * Math.exp(e.deltaY * 0.0012), 14, 95);
      this._poke();
    }, { passive: true });
    document.addEventListener('mousemove', (e) => {
      if (!this.active) return;
      if (document.pointerLockElement || this.dragging) this.look(e.movementX, e.movementY);
    });
    document.addEventListener('mousedown', (e) => { if (this.active && e.target === this.canvas) this.dragging = true; });
    document.addEventListener('mouseup', () => { this.dragging = false; });
  }

  get canvas() { return document.querySelector('#app canvas'); }

  // mouse or right-stick look; longer lenses turn more slowly
  look(dx, dy) {
    const s = 0.0022 * Math.max(0.25, this.fov / 70);
    this.yaw -= dx * s;
    this.pitch = THREE.MathUtils.clamp(this.pitch - dy * s, -1.5, 1.5);
  }

  _buildDom() {
    const root = document.createElement('div');
    root.id = 'photo';
    root.innerHTML = `
      <div id="guides"><i></i><i></i><i></i><i></i></div>
      <div id="photoBar">
        <div class="pb-head"><span class="pb-title">Photo mode</span><span class="pb-read" id="pbRead"></span></div>
        <div class="pb-keys">
          <span><kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd> move</span>
          <span><kbd>Q</kbd><kbd>E</kbd> down · up</span>
          <span><kbd>Shift</kbd> fast</span>
          <span><kbd>Scroll</kbd> zoom</span>
          <span><kbd>[</kbd><kbd>]</kbd> blur</span>
          <span><kbd>,</kbd><kbd>.</kbd> time</span>
          <span><kbd>T</kbd> freeze time</span>
          <span><kbd>X</kbd> explorer</span>
          <span><kbd>G</kbd> guides</span>
          <span class="pb-main"><kbd>Enter</kbd> save photo</span>
          <span class="pb-main"><kbd>C</kbd> exit</span>
        </div>
      </div>
      <div id="shutter"></div>`;
    document.body.appendChild(root);
    this.root = root;
    this.bar = root.querySelector('#photoBar');
    this.read = root.querySelector('#pbRead');
    this.flash = root.querySelector('#shutter');
  }

  _poke() {
    this._idle = 0;
    this.bar.classList.remove('faded');
  }

  _key(e, down) {
    if (e.code === 'KeyC' && down && !e.repeat) {
      if (this.active) this.exit();
      else this.enter();
      return;
    }
    if (!this.active) return;
    this.keys[e.code] = down;
    if (!down) return;
    this._poke();
    if (e.code === 'Enter') { e.preventDefault(); this.wantsCapture = true; }
    else if (e.repeat) return;
    else if (e.code === 'BracketRight') this._aperture(1);
    else if (e.code === 'BracketLeft') this._aperture(-1);
    else if (e.code === 'KeyT') this.sky.frozen = !this.sky.frozen;
    else if (e.code === 'KeyX') this._explorer(!this.showExplorer);
    else if (e.code === 'KeyG') {
      this.guides = !this.guides;
      this.root.classList.toggle('guides', this.guides);
    }
    if (['Space', 'ArrowUp', 'ArrowDown', 'Tab'].includes(e.code)) e.preventDefault();
  }

  _aperture(d) {
    this.apIdx = THREE.MathUtils.clamp(this.apIdx + d, 0, APERTURES.length - 1);
    this.pipeline.setDof(APERTURES[this.apIdx]);
  }

  _explorer(v) {
    this.showExplorer = v;
    this.player.model.setVisible(v);
  }

  enter() {
    if (this.active || !this.canEnter()) return false;
    this.active = true;
    const cam = this.camera;
    this.pos.copy(cam.position);
    this.yaw = cam.rotation.y;
    this.pitch = cam.rotation.x;
    this.fov = cam.fov;
    this.vel.set(0, 0, 0);
    this.player.inputEnabled = false;
    this.player.keys = Object.create(null);
    this.keys = Object.create(null);
    this.wantsCapture = false;
    this._explorer(true);
    this.pipeline.setDof(APERTURES[this.apIdx]);
    document.body.classList.add('photo');
    this.root.classList.toggle('guides', this.guides);
    this._poke();
    this._readT = 0;
    return true;
  }

  exit() {
    if (!this.active) return;
    this.active = false;
    this.dragging = false;
    this.keys = Object.create(null);
    this.sky.frozen = false;
    this.pipeline.setDof(0);
    this.player.model.setVisible(true);
    this.player.inputEnabled = true;
    document.body.classList.remove('photo');
    this.onExit?.();
  }

  // pause (Esc) leaves photo mode without handing the keyboard back
  abort() {
    if (!this.active) return;
    this.exit();
    this.player.inputEnabled = false;
  }

  update(dt) {
    if (!this.active) return;
    const k = this.keys;
    const cp = Math.cos(this.pitch), sp = Math.sin(this.pitch);
    const sy = Math.sin(this.yaw), cy = Math.cos(this.yaw);
    this._fwd.set(-sy * cp, sp, -cy * cp);
    this._right.set(cy, 0, -sy);

    const f = (k.KeyW || k.ArrowUp ? 1 : 0) - (k.KeyS || k.ArrowDown ? 1 : 0);
    const s = (k.KeyD || k.ArrowRight ? 1 : 0) - (k.KeyA || k.ArrowLeft ? 1 : 0);
    const u = (k.KeyE || k.Space ? 1 : 0) - (k.KeyQ ? 1 : 0);
    const speed = (k.ShiftLeft || k.ShiftRight ? 36 : 9) * (k.AltLeft ? 0.2 : 1) * Math.max(0.35, this.fov / 70);
    this._move.set(0, 0, 0).addScaledVector(this._fwd, f).addScaledVector(this._right, s);
    this._move.y += u * 0.8;
    if (this._move.lengthSq() > 0) this._move.normalize().multiplyScalar(speed);
    this.vel.lerp(this._move, Math.min(1, 7 * dt));
    this.pos.addScaledVector(this.vel, dt);

    // stay near the explorer and out of the ground
    const c = this.player.pos;
    const dx = this.pos.x - c.x, dz = this.pos.z - c.z;
    const r = Math.hypot(dx, dz);
    if (r > LEASH) { this.pos.x = c.x + (dx / r) * LEASH; this.pos.z = c.z + (dz / r) * LEASH; }
    this.pos.y = Math.min(this.pos.y, c.y + 160);
    const ground = this.worlds.heightAt(this.pos.x, this.pos.z);
    if (this.pos.y < ground + 0.35) this.pos.y = ground + 0.35;

    // the clock
    const t = (k.Period ? 1 : 0) - (k.Comma ? 1 : 0);
    if (t) {
      this.sky.time = (((this.sky.time + t * dt * (k.ShiftLeft ? 0.16 : 0.05)) % 1) + 1) % 1;
      this._poke();
    }
    if (f || s || u || t) this._poke();

    const cam = this.camera;
    cam.position.copy(this.pos);
    cam.rotation.set(this.pitch, this.yaw, 0);
    if (Math.abs(cam.fov - this.fov) > 0.01) {
      cam.fov = this.fov;
      cam.updateProjectionMatrix();
    }

    this._idle += dt;
    if (this._idle > 6) this.bar.classList.add('faded');

    this._readT -= dt;
    if (this._readT <= 0) {
      this._readT = 0.2;
      const h24 = this.sky.time * 24;
      const hh = Math.floor(h24), mm = Math.floor((h24 - hh) * 60);
      const lens = Math.round(12 / Math.tan(THREE.MathUtils.degToRad(this.fov / 2)));
      this.read.textContent =
        `${lens} mm · blur ${APERTURE_NAMES[this.apIdx]} · ${String(hh).padStart(2, '0')}:${String(mm).padStart(2, '0')}${this.sky.frozen ? ' · frozen' : ''}`;
    }
  }

  // call right after the frame is drawn: the canvas still holds it
  afterRender(canvas) {
    if (!this.wantsCapture) return;
    this.wantsCapture = false;
    this.flash.classList.remove('go');
    void this.flash.offsetWidth;
    this.flash.classList.add('go');
    const d = new Date();
    const stamp = `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, '0')}${String(d.getDate()).padStart(2, '0')}-` +
      `${String(d.getHours()).padStart(2, '0')}${String(d.getMinutes()).padStart(2, '0')}${String(d.getSeconds()).padStart(2, '0')}`;
    const name = `wander-${this.worlds.mode === 'city' ? 'newyork' : 'wilds'}-${this.seed}-${stamp}.png`;
    canvas.toBlob((blob) => {
      if (!blob) return;
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = name;
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(a.href), 4000);
      this._saved++;
      this.lastSaved = { name, bytes: blob.size, w: canvas.width, h: canvas.height };
    }, 'image/png');
  }
}
