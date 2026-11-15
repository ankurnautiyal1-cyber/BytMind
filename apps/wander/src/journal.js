import { POI_ICONS, drawPoiIcon } from './icons.js';

// Field journal (Tab) and the big map (M). Both are view-only — no fast
// travel; the wilds are for walking (and P-flight). The city map is a
// full street map; the wilds map only shows what you've explored.

const MAP_PX = 540;

export class Journal {
  constructor(worlds, orbs, exploration, onReset) {
    this.worlds = worlds;
    this.orbs = orbs;
    this.exploration = exploration;
    this.onReset = onReset;
    this.mapOpen = false;
    this.journalOpen = false;
    this.resetArmed = false;
    this.mapBase = null;

    this._buildDom();
    this.setWorld(worlds.mode);

    addEventListener('keydown', (e) => {
      if (e.code === 'KeyM') this.toggleMap();
      if (e.code === 'Tab') {
        e.preventDefault();
        this.toggleJournal();
      }
      if (e.code === 'Escape' && (this.mapOpen || this.journalOpen)) this.closeAll();
    });
  }

  _buildDom() {
    // big map
    this.mapEl = document.createElement('div');
    this.mapEl.id = 'bigmap';
    this.mapEl.className = 'panel hidden';
    this.mapEl.innerHTML = `
      <div class="panel-head">
        <span class="panel-title">Map of the Wander</span>
        <span class="panel-sub" id="mapProgress"></span>
      </div>
      <div class="map-wrap"><canvas id="mapCanvas" width="${MAP_PX}" height="${MAP_PX}"></canvas></div>
      <div class="panel-foot">M or Esc to close · markers appear as you explore</div>`;
    document.body.appendChild(this.mapEl);
    this.mapCtx = this.mapEl.querySelector('#mapCanvas').getContext('2d');

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

  setWorld(mode) {
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
    return this.mapOpen || this.journalOpen;
  }

  refreshList() {
    const list = this.journalEl.querySelector('#journalList');
    const sites = [...this.worlds.sites()].sort((a, b) =>
      Number(b.discovered) - Number(a.discovered));
    list.innerHTML = '';
    for (const s of sites) {
      const row = document.createElement('div');
      row.className = `entry ${s.discovered ? 'found' : 'rumor'}`;
      if (s.discovered) {
        const icon = document.createElement('canvas');
        icon.width = icon.height = 44;
        drawPoiIcon(icon.getContext('2d'), s.type, 22, 24, 12);
        const text = document.createElement('div');
        text.innerHTML = `<b>${s.name}</b><span>${s.flavor}</span>
          <i>${Math.round(s.x)}, ${Math.round(s.z)}</i>`;
        row.append(icon, text);
      } else {
        const label = POI_ICONS[s.type].label;
        row.innerHTML = `<div class="rumor-mark">?</div>
          <div><b>A ${label}, somewhere</b><span>Rumor only — the map hasn't found it yet.</span></div>`;
      }
      list.appendChild(row);
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
      ctx.fillStyle = 'rgba(7, 11, 18, 0.82)';
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
    ctx.font = '600 11px ui-sans-serif, system-ui';
    for (const s of this.worlds.sites()) {
      if (!s.discovered) continue;
      const [mx, mz] = w2p(s.x, s.z);
      if (mx < -30 || mz < -30 || mx > MAP_PX + 30 || mz > MAP_PX + 30) continue;
      ctx.fillStyle = 'rgba(5, 9, 15, 0.55)';
      ctx.beginPath(); ctx.arc(mx, mz, 11, 0, Math.PI * 2); ctx.fill();
      drawPoiIcon(ctx, s.type, mx, mz, 7);
      ctx.fillStyle = 'rgba(255,255,255,0.92)';
      ctx.fillText(s.name, mx, mz + 22);
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

    // north label — top-left, clear of the gate marker which lives at north
    ctx.fillStyle = 'rgba(255,255,255,0.8)';
    ctx.font = '700 13px ui-sans-serif, system-ui';
    ctx.textAlign = 'left';
    ctx.fillText('N ↑', 10, 20);
  }

  update(player) {
    if (this.mapOpen) this.updateMap(player);
  }
}
