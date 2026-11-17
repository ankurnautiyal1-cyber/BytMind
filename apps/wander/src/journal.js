import { POI_ICONS, drawPoiIcon, svgIcon } from './icons.js';

// Field journal (Tab) and the big map (M). Both are view-only — no fast
// travel; the wilds are for walking (and P-flight). The city map is a
// full street map; the wilds map only shows what you've explored.

const MAP_PX = 540;

export class Journal {
  constructor(worlds, orbs, exploration, onReset, thumbs = {}) {
    this.worlds = worlds;
    this.orbs = orbs;
    this.exploration = exploration;
    this.onReset = onReset;
    this.thumbs = thumbs; // landmark id -> data URL of the photograph taken when found
    this.mapOpen = false;
    this.journalOpen = false;
    this.resetArmed = false;
    this.mapBase = null;

    this._buildDom();
    this.setWorld(worlds.mode);

    this.blockKeys = null; // photo mode takes the keyboard
    addEventListener('keydown', (e) => {
      if (this.blockKeys?.() && e.code !== 'Escape') return;
      if (e.code === 'KeyM') this.toggleMap();
      if (e.code === 'Tab') {
        e.preventDefault();
        this.toggleJournal();
      }
      if (e.code === 'Escape' && (this.mapOpen || this.journalOpen)) this.closeAll();
      if (e.code === 'KeyH') this.toggleHelp();
      if (e.code === 'Escape') this.toggleHelp(false);
    });
  }

  _buildDom() {
    // big map
    this.mapEl = document.createElement('div');
    this.mapEl.id = 'bigmap';
    this.mapEl.className = 'panel hidden';
    this.mapEl.innerHTML = `
      <div class="panel-head">
        <span class="panel-title" id="mapTitle">The Wilds</span>
        <span class="panel-sub" id="mapProgress"></span>
      </div>
      <div class="map-wrap"><canvas id="mapCanvas" width="${MAP_PX}" height="${MAP_PX}"></canvas><div id="mapTip" class="hidden"></div></div>
      <div class="panel-foot">M or Esc to close</div>`;
    document.body.appendChild(this.mapEl);
    const mapCv = this.mapEl.querySelector('#mapCanvas');
    this.mapCtx = mapCv.getContext('2d');
    this._pins = [];
    this._hover = -1;
    const tip = this.mapEl.querySelector('#mapTip');
    mapCv.addEventListener('mousemove', (e) => {
      const r = mapCv.getBoundingClientRect();
      const k = MAP_PX / r.width;
      const mx = (e.clientX - r.left) * k, my = (e.clientY - r.top) * k;
      let best = -1, bd = 1e9;
      this._pins.forEach((p, i) => { const d = Math.hypot(p.x - mx, p.y - my); if (d < p.r + 4 && d < bd) { bd = d; best = i; } });
      this._hover = best;
      if (best < 0) { tip.classList.add('hidden'); return; }
      tip.innerHTML = this._pins[best].html;
      tip.classList.remove('hidden');
      const wrap = mapCv.parentElement.getBoundingClientRect();
      const tx = e.clientX - wrap.left + 16, ty = e.clientY - wrap.top + 16;
      tip.style.left = `${Math.min(tx, wrap.width - 240)}px`;
      tip.style.top = `${Math.min(ty, wrap.height - 90)}px`;
    });
    mapCv.addEventListener('mouseleave', () => { this._hover = -1; tip.classList.add('hidden'); });

    // journal
    this.journalEl = document.createElement('div');
    this.journalEl.id = 'journal';
    this.journalEl.className = 'panel hidden';
    this.journalEl.innerHTML = `
      <div class="panel-head">
        <span class="panel-title">Field Journal</span>
        <span class="panel-sub" id="journalProgress"></span>
      </div>
      <div id="journalList"></div>
      <div class="panel-foot">
        <span>Tab or Esc to close</span>
        <button id="journalReset" type="button">reset progress</button>
      </div>`;
    document.body.appendChild(this.journalEl);
    this.journalEl.querySelector('#journalReset').addEventListener('click', () => {
      if (!this.resetArmed) {
        this.resetArmed = true;
        this.journalEl.querySelector('#journalReset').textContent = 'sure? click again';
        setTimeout(() => {
          this.resetArmed = false;
          const b = this.journalEl.querySelector('#journalReset');
          if (b) b.textContent = 'reset progress';
        }, 2500);
        return;
      }
      this.onReset?.();
    });
  }

  toggleHelp(force) {
    const el = document.getElementById('help');
    if (!el) return;
    const open = force ?? el.classList.contains('hidden');
    el.classList.toggle('hidden', !open);
  }

  setWorld(mode) {
    this.mapEl.classList.toggle('parchment', mode === 'nature');
    this.mapEl.classList.toggle('transit', mode === 'city');
    this.mapEl.querySelector('#mapTitle').textContent = mode === 'nature' ? 'The Wilds' : 'New York';
    this.mapBase = this.worlds.mapBase(MAP_PX, mode);
    this.mapHalf = mode === 'nature' ? 2000 : (this.worlds?.city?.mapHalf || 1800);
    this.fogOn = mode === 'nature';
    this.refreshList();
  }

  toggleMap() {
    this.mapOpen = !this.mapOpen;
    this.mapEl.classList.toggle('hidden', !this.mapOpen);
    if (this.mapOpen && this.journalOpen) this.toggleJournal();
  }

  toggleJournal() {
    this.journalOpen = !this.journalOpen;
    this.journalEl.classList.toggle('hidden', !this.journalOpen);
    if (this.journalOpen) {
      if (this.mapOpen) this.toggleMap();
      this.refreshList();
    }
  }

  closeAll() {
    if (this.mapOpen) this.toggleMap();
    if (this.journalOpen) this.toggleJournal();
  }

  get anyOpen() {
    return this.mapOpen || this.journalOpen || !document.getElementById('help')?.classList.contains('hidden') || !!this.extraOpen?.();
  }

  refreshList() {
    const list = this.journalEl.querySelector('#journalList');
    const sites = [...this.worlds.sites()].sort((a, b) =>
      Number(b.discovered) - Number(a.discovered));
    list.innerHTML = '';
    for (const s of sites) {
      const card = document.createElement('div');
      card.className = `card ${s.discovered ? 'found' : 'rumor'}`;
      if (s.discovered) {
        const photo = document.createElement('div');
        photo.className = 'photo';
        const shot = this.thumbs[s.id];
        if (shot) {
          const img = document.createElement('img');
          img.src = shot;
          img.alt = s.name;
          photo.appendChild(img);
        } else {
          // no photograph yet (found before photos existed): a painted glyph on a dusk sky
          const art = document.createElement('canvas');
          art.width = 240; art.height = 128;
          const g = art.getContext('2d');
          const sky = g.createLinearGradient(0, 0, 0, 128);
          sky.addColorStop(0, '#2b2f55'); sky.addColorStop(1, '#a66a5c');
          g.fillStyle = sky; g.fillRect(0, 0, 240, 128);
          g.fillStyle = 'rgba(255,255,255,0.7)';
          for (let i = 0; i < 26; i++) g.fillRect((i * 97) % 240, (i * 53) % 70, 1.2, 1.2);
          g.shadowColor = POI_ICONS[s.type]?.color || '#fff'; g.shadowBlur = 18;
          drawPoiIcon(g, s.type, 120, 70, 24);
          photo.appendChild(art);
        }
        const badge = document.createElement('div');
        badge.className = 'badge';
        badge.innerHTML = svgIcon(s.type, 17);
        photo.appendChild(badge);
        const body = document.createElement('div');
        body.className = 'body';
        body.innerHTML = `<b>${s.name}</b><span>${s.flavor}</span><i>${Math.round(s.x)}, ${Math.round(s.z)}</i>`;
        card.append(photo, body);
      } else {
        const label = POI_ICONS[s.type].label;
        card.innerHTML = `<div class="photo"><div class="mark">?</div></div>
          <div class="body"><b>A ${label}, somewhere</b><span>Rumour only — the map hasn't found it yet.</span></div>`;
      }
      list.appendChild(card);
    }
    const found = this.worlds.sites().filter((s) => s.discovered).length;
    const total = this.worlds.sites().length;
    const label = this.worlds.mode === 'city'
      ? `${found}/${total} city landmarks · ${this.orbs.count}/${this.orbs.total} shards (in the wilds)`
      : `${found}/${total} landmarks · ${this.orbs.count}/${this.orbs.total} shards`;
    this.journalEl.querySelector('#journalProgress').textContent = label;
    this.mapEl.querySelector('#mapProgress').textContent = label;
  }

  // redraw the big map every frame while open (cheap: one blit + markers)
  updateMap(player) {
    const ctx = this.mapCtx;
    ctx.clearRect(0, 0, MAP_PX, MAP_PX);
    ctx.drawImage(this.mapBase, 0, 0, MAP_PX, MAP_PX);

    const half = this.mapHalf, size = half * 2;
    const w2p = (wx, wz) => [((wx + half) / size) * MAP_PX, ((wz + half) / size) * MAP_PX];

    // fog of war over the wilds map only
    if (this.fogOn) {
      const { grid, N } = this.exploration;
      const worldSize = 4000;
      const cell = MAP_PX / N;
      ctx.fillStyle = 'rgba(40, 28, 14, 0.8)';
      for (let iz = 0; iz < N; iz++) {
        for (let ix = 0; ix < N; ix++) {
          if (!grid[iz * N + ix]) {
            // grid cells are in world coords; map may be a different extent
            const x0 = -2000 + (ix / N) * worldSize;
            const z0 = -2000 + (iz / N) * worldSize;
            const [px0, pz0] = w2p(x0, z0);
            const [px1, pz1] = w2p(x0 + worldSize / N, z0 + worldSize / N);
            ctx.fillRect(px0, pz0, px1 - px0 + 0.5, pz1 - pz0 + 0.5);
          }
        }
      }
    }

    // discovered landmarks: icon + name
    ctx.textAlign = 'center';
    const parch = this.worlds.mode === 'nature';
    this._pins.length = 0;
    const labelFont = parch ? '500 italic 16px "Cormorant Garamond", Georgia, serif' : '600 10px "Inter Variable", system-ui, sans-serif';
    ctx.font = labelFont;
    for (const s of this.worlds.sites()) {
      if (!s.discovered) continue;
      const [mx, mz] = w2p(s.x, s.z);
      if (mx < -30 || mz < -30 || mx > MAP_PX + 30 || mz > MAP_PX + 30) continue;
      ctx.fillStyle = 'rgba(5, 9, 15, 0.55)';
      ctx.beginPath(); ctx.arc(mx, mz, 11, 0, Math.PI * 2); ctx.fill();
      drawPoiIcon(ctx, s.type, mx, mz, 7);
      this._pins.push({
        x: mx, y: mz, r: 13,
        html: `<b>${svgIcon(s.type, 16)}${s.name}</b><span>${s.flavor}</span><i>${POI_ICONS[s.type]?.label || ''} · ${Math.round(s.x)}, ${Math.round(s.z)}</i>`,
      });
      if (this._pins.length - 1 === this._hover) {
        ctx.strokeStyle = 'rgba(255,255,255,0.9)'; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.arc(mx, mz, 15, 0, Math.PI * 2); ctx.stroke();
      }
      if (parch) { ctx.lineWidth = 4; ctx.strokeStyle = 'rgba(244,232,200,0.9)'; ctx.strokeText(s.name, mx, mz + 24); ctx.fillStyle = '#3a2810'; }
      else ctx.fillStyle = 'rgba(255,255,255,0.92)';
      ctx.fillText(s.name, mx, mz + 24);
    }

    // the gate between worlds is always marked — clamped fully on-map
    const gate = this.worlds.gateMarker?.();
    if (gate) {
      let [gx, gz] = w2p(gate.x, gate.z);
      if (gx > -40 && gz > -40 && gx < MAP_PX + 40 && gz < MAP_PX + 40) {
        gx = Math.max(24, Math.min(MAP_PX - 24, gx));
        gz = Math.max(26, Math.min(MAP_PX - 24, gz));
        const pulse = 15 + Math.sin(performance.now() * 0.004) * 3;
        ctx.strokeStyle = 'rgba(203, 184, 245, 0.95)';
        ctx.lineWidth = 2.5;
        ctx.beginPath(); ctx.arc(gx, gz, pulse, 0, Math.PI * 2); ctx.stroke();
        ctx.fillStyle = 'rgba(10, 8, 20, 0.8)';
        ctx.beginPath(); ctx.arc(gx, gz, 13, 0, Math.PI * 2); ctx.fill();
        ctx.strokeStyle = 'rgba(159, 127, 232, 0.9)';
        ctx.lineWidth = 1.5;
        ctx.beginPath(); ctx.arc(gx, gz, 13, 0, Math.PI * 2); ctx.stroke();
        drawPoiIcon(ctx, 'gate', gx, gz, 7.5);
        ctx.fillStyle = 'rgba(203, 184, 245, 0.95)';
        ctx.fillText(this.worlds.mode === 'city' ? 'The Way Back' : 'The Ancient Gate', gx, gz + 30);
        this._pins.push({
          x: gx, y: gz, r: 16,
          html: `<b>${svgIcon('gate', 16)}${this.worlds.mode === 'city' ? 'The Way Back' : 'The Ancient Gate'}</b><span>${this.worlds.mode === 'city' ? 'Step through to return to the Wilds.' : 'Step through to reach New York.'}</span>`,
        });
      }
    }

    // player marker + view cone
    const [px, pz] = w2p(player.pos.x, player.pos.z);
    ctx.save();
    ctx.translate(px, pz);
    ctx.rotate(-player.yaw);
    ctx.fillStyle = 'rgba(255,255,255,0.25)';
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.arc(0, 0, 26, -Math.PI / 2 - 0.45, -Math.PI / 2 + 0.45);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
    ctx.fillStyle = '#fff';
    ctx.strokeStyle = 'rgba(0,0,0,0.65)';
    ctx.lineWidth = 1.6;
    ctx.beginPath(); ctx.arc(px, pz, 4, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    this._pins.push({ x: px, y: pz, r: 9, html: '<b>You are here</b><span>The map follows the direction you face.</span>' });

    // north label — top-left, clear of the gate marker which lives at north
    ctx.fillStyle = 'rgba(255,255,255,0.8)';
    ctx.font = this.worlds.mode === 'nature' ? '600 italic 18px "Cormorant Garamond", Georgia, serif' : '700 12px "Inter Variable", system-ui, sans-serif';
    ctx.fillStyle = this.worlds.mode === 'nature' ? '#3a2810' : 'rgba(255,255,255,0.8)';
    ctx.textAlign = 'left';
    ctx.fillText('N ↑', 12, 24);
  }

  update(player) {
    if (this.mapOpen) this.updateMap(player);
  }
}
