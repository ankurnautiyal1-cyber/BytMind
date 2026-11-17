import { svgIcon } from './icons.js';
import { TIERS } from './render/quality.js';

// Settings panel (O, or the buttons on the title / controls screens). Everything
// is remembered in localStorage and applied live — graphics tier included
// (tree counts and the street mirror's resolution wait for the next load).

const KEY = 'wander:settings';
const DEFAULTS = { fov: 70, sens: 1, invertY: false, showFps: false };

export class Settings {
  constructor({ player, pipeline, getQuality, applyQuality, adaptive, onReset, onOpen }) {
    this.player = player;
    this.pipeline = pipeline;
    this.getQuality = getQuality;
    this.applyQuality = applyQuality;
    this.adaptive = adaptive;
    this.onReset = onReset;
    this.onOpen = onOpen;
    this.v = { ...DEFAULTS };
    try { Object.assign(this.v, JSON.parse(localStorage.getItem(KEY)) || {}); } catch { /* ignore */ }
    this.resetArmed = false;
    this._build();
    this.apply();
    addEventListener('keydown', (e) => {
      if (e.code === 'Escape' && this.isOpen) { this.close(); }
    });
  }

  get isOpen() { return !this.el.classList.contains('hidden'); }

  save() {
    try { localStorage.setItem(KEY, JSON.stringify(this.v)); } catch { /* ignore */ }
  }

  apply() {
    this.player.baseFov = this.v.fov;
    this.player.camera.fov = this.v.fov;
    this.player.camera.updateProjectionMatrix();
    this.player.sens = this.v.sens;
    this.player.invertY = this.v.invertY;
    this.fpsEl.style.display = this.v.showFps ? 'block' : 'none';
  }

  _build() {
    const tiers = ['low', 'medium', 'high'];
    this.el = document.createElement('div');
    this.el.id = 'settings';
    this.el.className = 'panel hidden';
    this.el.innerHTML = `
      <div class="panel-head">
        <span class="panel-title">${svgIcon('gear', 18, 'currentColor')} Settings</span>
        <span class="panel-sub">O or Esc to close</span>
      </div>
      <div class="set-body">
        <section>
          <h4>Graphics</h4>
          <div class="set-row"><span class="set-label">Quality</span>
            <div class="chips" data-set="quality">${tiers.map((t) => `<button type="button" data-v="${t}">${t[0].toUpperCase() + t.slice(1)}</button>`).join('')}</div></div>
          <div class="set-row"><span class="set-label">Smooth frame rate</span>
            <div class="chips" data-set="adaptive"><button type="button" data-v="1">On</button><button type="button" data-v="0">Off</button></div></div>
          <div class="set-row"><span class="set-label">Show frame rate</span>
            <div class="chips" data-set="fps"><button type="button" data-v="1">On</button><button type="button" data-v="0">Off</button></div></div>
          <div class="set-note" id="setQNote"></div>
        </section>
        <section>
          <h4>Controls</h4>
          <div class="set-row"><span class="set-label">Field of view</span>
            <label class="slider"><input type="range" min="55" max="95" step="1" data-set="fov"><output></output></label></div>
          <div class="set-row"><span class="set-label">Look sensitivity</span>
            <label class="slider"><input type="range" min="40" max="220" step="5" data-set="sens"><output></output></label></div>
          <div class="set-row"><span class="set-label">Invert vertical look</span>
            <div class="chips" data-set="invert"><button type="button" data-v="1">On</button><button type="button" data-v="0">Off</button></div></div>
          <div class="set-note">${svgIcon('gamepad', 13, 'currentColor')} A controller works too — sticks to move and look, Start to pause. D-pad ↑ opens photo mode.</div>
        </section>
        <section class="set-foot">
          <button type="button" id="setReset">reset progress</button>
          <button type="button" id="setDone" class="primary">Done</button>
        </section>
      </div>`;
    document.body.appendChild(this.el);

    this.fpsEl = document.createElement('div');
    this.fpsEl.id = 'fps';
    document.body.appendChild(this.fpsEl);

    const q = (sel) => this.el.querySelector(sel);
    const chip = (set, cur) => this.el.querySelectorAll(`[data-set="${set}"] button`).forEach((b) => b.classList.toggle('on', b.dataset.v === String(cur)));
    const slider = (set, val, fmt) => {
      const inp = q(`input[data-set="${set}"]`);
      inp.value = val;
      inp.nextElementSibling.textContent = fmt(Number(val));
    };
    this.refresh = () => {
      chip('quality', this.getQuality().name);
      chip('adaptive', this.adaptive.enabled ? 1 : 0);
      chip('fps', this.v.showFps ? 1 : 0);
      chip('invert', this.v.invertY ? 1 : 0);
      slider('fov', this.v.fov, (x) => `${x}°`);
      slider('sens', Math.round(this.v.sens * 100), (x) => `${x}%`);
    };

    this.el.addEventListener('click', (e) => {
      const b = e.target.closest('button');
      if (!b) return;
      if (b.id === 'setDone') return this.close();
      if (b.id === 'setReset') {
        if (!this.resetArmed) {
          this.resetArmed = true;
          b.textContent = 'sure? click again';
          setTimeout(() => { this.resetArmed = false; b.textContent = 'reset progress'; }, 2500);
          return;
        }
        return this.onReset();
      }
      const set = b.parentElement.dataset.set;
      const on = b.dataset.v === '1';
      if (set === 'quality') {
        this.applyQuality(b.dataset.v);
        this._qnote();
      } else if (set === 'adaptive') {
        this.adaptive.enabled = on;
        try { localStorage.setItem('wander:adaptive', on ? '1' : '0'); } catch { /* ignore */ }
        if (!on) { this.adaptive.level = 0; this.pipeline.setScale(1); }
      } else if (set === 'fps') { this.v.showFps = on; this.save(); this.apply(); }
      else if (set === 'invert') { this.v.invertY = on; this.save(); this.apply(); }
      this.refresh();
    });
    this.el.addEventListener('input', (e) => {
      const set = e.target.dataset?.set;
      if (!set) return;
      const val = Number(e.target.value);
      if (set === 'fov') { this.v.fov = val; this.save(); this.apply(); e.target.nextElementSibling.textContent = `${val}°`; }
      else if (set === 'sens') { this.v.sens = val / 100; this.save(); this.apply(); e.target.nextElementSibling.textContent = `${val}%`; }
    });
    this._qnote = () => {
      const cur = this.getQuality();
      q('#setQNote').textContent = cur.name === this.bootTier
        ? 'Resolution, anti-aliasing, grass, shadows and effects change immediately.'
        : 'Applied: resolution, anti-aliasing, grass and effects. Tree count and street reflections update on the next load.';
    };
  }

  setBootTier(name) { this.bootTier = name; this._qnote(); }

  open() {
    this.onOpen?.();
    this.refresh();
    this._qnote();
    this.el.classList.remove('hidden');
  }

  close() { this.el.classList.add('hidden'); }

  toggle() { this.isOpen ? this.close() : this.open(); }

  // frame-rate readout (called every frame; cheap)
  tick(dt, info) {
    if (!this.v.showFps) return;
    this._t = (this._t || 0) + dt;
    this._n = (this._n || 0) + 1;
    if (this._t < 0.5) return;
    this.fpsEl.textContent = `${Math.round(this._n / this._t)} fps · ${info()}`;
    this._t = 0; this._n = 0;
  }
}
