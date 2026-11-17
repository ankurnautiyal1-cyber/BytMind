import { WORLD_SIZE, WORLD_HALF, WATER_LEVEL } from './terrain.js';
import { drawPoiIcon, POI_ICONS } from './icons.js';

const MAP_PX = 172;
const COMPASS_W = 360, COMPASS_H = 46;
const EXPLORE_N = 96; // fog-of-war grid resolution (cells across the world)
const CITY_HALF = 1200;
const CARDINALS = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];

const SANS = '"Inter Variable", system-ui, sans-serif';
const SERIF = '"Cormorant Garamond", Georgia, serif';

// The wilds as an inked parchment chart: hillshaded land, contour lines, a heavy
// coastline, hatched water and stippled forest. Shared by minimap + big map.
export function renderMapBase(terrain, px) {
  const cv = document.createElement('canvas');
  cv.width = cv.height = px;
  const ctx = cv.getContext('2d');
  const img = ctx.createImageData(px, px);
  const d = img.data;
  const H = new Float32Array(px * px);
  const F = new Float32Array(px * px);
  for (let py = 0; py < px; py++) {
    for (let p = 0; p < px; p++) {
      const x = -WORLD_HALF + ((p + 0.5) / px) * WORLD_SIZE;
      const z = -WORLD_HALF + ((py + 0.5) / px) * WORLD_SIZE;
      H[py * px + p] = terrain.heightAt(x, z);
      F[py * px + p] = terrain.forestMask(x, z);
    }
  }
  const at = (x, y) => H[Math.min(px - 1, Math.max(0, y)) * px + Math.min(px - 1, Math.max(0, x))];
  const hash = (x, y) => { const v = Math.sin(x * 127.1 + y * 311.7) * 43758.5453; return v - Math.floor(v); };
  const contour = Math.max(1, Math.round(px / 270));
  for (let py = 0; py < px; py++) {
    for (let p = 0; p < px; p++) {
      const i = py * px + p;
      const h = H[i];
      const land = h >= WATER_LEVEL;
      // light from the north-west
      const shade = Math.max(-1, Math.min(1, (at(p - contour, py - contour) - at(p + contour, py + contour)) * 0.09));
      let r, g, b;
      if (!land) {
        const depth = Math.min(1, -h / 28);
        r = 178 - depth * 38; g = 202 - depth * 30; b = 196 - depth * 22;
        if (((p + py) % 7) === 0) { r -= 9; g -= 9; b -= 6; }           // hatching
      } else if (h < WATER_LEVEL + 2.2) {
        r = 228; g = 208; b = 160;                                       // sand
      } else if (h > 95) {
        r = 250; g = 247; b = 240;                                       // snow
      } else if (h > 55) {
        const t = Math.min(1, (h - 55) / 40);
        r = 196 - t * 24; g = 168 - t * 24; b = 128 - t * 18;            // highlands: warm brown
      } else {
        r = 232; g = 222; b = 186;                                       // parchment meadow
        const f = F[i];
        if (f > 0.1) { r -= 26; g -= 6; b -= 34; }
      }
      if (land) {
        const k = 1 + shade * 0.32;
        r *= k; g *= k; b *= k;
        // contour lines every 10 m
        if (Math.floor(h / 10) !== Math.floor(at(p + 1, py) / 10) || Math.floor(h / 10) !== Math.floor(at(p, py + 1) / 10)) {
          r *= 0.86; g *= 0.84; b *= 0.8;
        }
        // stippled forest
        if (F[i] > 0.12 && h < 55 && hash(p, py) < 0.13) { r = 92; g = 120; b = 70; }
      }
      // heavy ink coastline where land meets water
      if (land !== (at(p + 1, py) >= WATER_LEVEL) || land !== (at(p, py + 1) >= WATER_LEVEL)) { r = 88; g = 68; b = 44; }
      // paper grain
      const n = 0.95 + hash(p * 3.1, py * 1.7) * 0.07;
      const o = i * 4;
      d[o] = r * n; d[o + 1] = g * n; d[o + 2] = b * n; d[o + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);
  // aged edges
  const grad = ctx.createRadialGradient(px / 2, px / 2, px * 0.38, px / 2, px / 2, px * 0.74);
  grad.addColorStop(0, 'rgba(60,40,15,0)');
  grad.addColorStop(1, 'rgba(60,40,15,0.42)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, px, px);
  return cv;
}

export class HUD {
  constructor(terrain) {
    this.terrain = terrain;
    this.el = {
      time: document.getElementById('hudTime'),
      biome: document.getElementById('hudBiome'),
      pos: document.getElementById('hudPos'),
      shards: document.getElementById('hudShards'),
      shardBox: document.getElementById('shardCounter'),
      compass: document.getElementById('compass'),
      minimap: document.getElementById('minimap'),
      hint: document.getElementById('hint'),
      tint: document.getElementById('tint'),
      toast: document.getElementById('toast'),
      moment: document.getElementById('moment'),
      letterbox: document.getElementById('letterbox'),
    };

    const dpr = Math.min(devicePixelRatio, 2);
    const sizes = { compass: [COMPASS_W, COMPASS_H], minimap: [MAP_PX, MAP_PX] };
    for (const key of ['compass', 'minimap']) {
      const [w, h] = sizes[key];
      const cv = this.el[key];
      cv.width = w * dpr;
      cv.height = h * dpr;
      this[key + 'Ctx'] = cv.getContext('2d');
      this[key + 'Ctx'].scale(dpr, dpr);
    }

    this.hintTimer = 14;
    this.biomeTimer = 0;
    this.idleT = 0;

    // fog-of-war state for the wilds map, shared with the big map (journal.js)
    this.exploration = {
      N: EXPLORE_N,
      grid: new Uint8Array(EXPLORE_N * EXPLORE_N),
    };
    this._fogCanvas = document.createElement('canvas');
    this._fogCanvas.width = this._fogCanvas.height = EXPLORE_N;

    this.worlds = null;
    this.orbs = null;
    this.mapBase = null;
    this.mapHalf = WORLD_HALF;
    this.fogOn = true;
    this._toastTimer = null;
    this._lastShards = -1;
    this._momentQ = [];
    this._momentBusy = false;
  }

  bind(worlds, orbs) {
    this.worlds = worlds;
    this.orbs = orbs;
    this.updateShards();
  }

  // nature map carries fog of war; the city map is a fully-drawn street map
  setWorld(mode) {
    this.fogOn = mode === 'nature';
    this.mapHalf = this.fogOn ? WORLD_HALF : (this.worlds?.city?.mapHalf || CITY_HALF);
    this.mapBase = this.worlds.mapBase(MAP_PX, mode);
  }

  sites() {
    return this.worlds ? this.worlds.sites() : [];
  }

  // any input keeps the HUD visible; it fades after a few quiet seconds
  poke() { this.idleT = 0; }

  updateShards() {
    if (!this.orbs || !this.el.shards) return;
    this.el.shards.textContent = `${this.orbs.count}/${this.orbs.total}`;
    if (this._lastShards >= 0 && this.orbs.count > this._lastShards) {
      const b = this.el.shardBox;
      b.classList.remove('pulse');
      void b.offsetWidth;
      b.classList.add('pulse');
      this.poke();
    }
    this._lastShards = this.orbs.count;
  }

  // a small notice under the compass
  toast(title, sub = '') {
    const t = this.el.toast;
    if (!t) return;
    t.innerHTML = `<b>${title}</b>${sub ? `<span>${sub}</span>` : ''}`;
    t.classList.remove('show');
    void t.offsetWidth; // restart the CSS transition
    t.classList.add('show');
    clearTimeout(this._toastTimer);
    this._toastTimer = setTimeout(() => t.classList.remove('show'), 3600);
    this.poke();
  }

  // ---- cinematic moments: letterbox bars + a title card ----

  moment({ kicker, title, sub = '', world = false, ms = 5200 }) {
    this._momentQ.push({ kicker, title, sub, world, ms });
    if (!this._momentBusy) this._nextMoment();
  }

  _nextMoment() {
    const m = this._momentQ.shift();
    if (!m) { this._momentBusy = false; return; }
    this._momentBusy = true;
    const el = this.el.moment;
    el.classList.toggle('world', !!m.world);
    el.querySelector('.m-kicker').textContent = m.kicker;
    el.querySelector('.m-title').textContent = m.title;
    el.querySelector('.m-sub').textContent = m.sub;
    this.el.letterbox.classList.add('on');
    requestAnimationFrame(() => el.classList.add('show'));
    this.poke();
    setTimeout(() => {
      el.classList.remove('show');
      setTimeout(() => {
        if (!this._momentQ.length) this.el.letterbox.classList.remove('on');
        this._nextMoment();
      }, 1100);
    }, m.ms);
  }

  discover(site) {
    const label = POI_LABEL(site);
    this.moment({ kicker: label ? `Discovered · ${label}` : 'Discovered', title: site.name, sub: site.flavor });
  }

  arrive(mode) {
    this.moment(mode === 'city'
      ? { kicker: 'You have arrived', title: 'New York', sub: 'The other side of the gate is another world.', world: true, ms: 4200 }
      : { kicker: 'Home again', title: 'The Wilds', sub: 'The valley missed you.', world: true, ms: 4200 });
  }

  setUnderwater(under) {
    this.el.tint.style.opacity = under ? 1 : 0;
  }

  update(dt, player, sky, playing) {
    // Clock
    const t24 = sky.time * 24;
    const hh = Math.floor(t24), mm = Math.floor((t24 - hh) * 60);
    this.el.time.textContent = `${String(hh).padStart(2, '0')}:${String(mm).padStart(2, '0')}`;

    // Position + biome (biome is noise-sampled, so refresh it a few times a second)
    this.el.pos.textContent = `${Math.round(player.pos.x)}, ${Math.round(player.pos.z)} · ${Math.round(player.pos.y)} m`;
    this.biomeTimer -= dt;
    if (this.biomeTimer <= 0) {
      this.biomeTimer = 0.25;
      const city = this.worlds?.biomeName(player.pos.x, player.pos.z);
      this.el.biome.textContent = city || this._biomeNature(player.pos.x, player.pos.z);
    }

    // quiet HUD: fade after a few seconds without input
    this.idleT = playing ? this.idleT + dt : 0;
    document.body.classList.toggle('idle', playing && this.idleT > 7);

    // Hint fade-out
    if (playing && this.hintTimer > 0) {
      this.hintTimer -= dt;
      if (this.hintTimer <= 0) this.el.hint.classList.add('faded');
    }

    // fog of war: mark cells around the player as explored (wilds only)
    if (this.fogOn) {
      const { N, grid } = this.exploration;
      const cellSize = WORLD_SIZE / N;
      const cxi = Math.floor((player.pos.x + WORLD_HALF) / cellSize);
      const czi = Math.floor((player.pos.z + WORLD_HALF) / cellSize);
      const reach = Math.ceil(70 / cellSize);
      for (let dz = -reach; dz <= reach; dz++) {
        for (let dx = -reach; dx <= reach; dx++) {
          const ix = cxi + dx, iz = czi + dz;
          if (ix < 0 || iz < 0 || ix >= N || iz >= N) continue;
          if (dx * dx + dz * dz > reach * reach) continue;
          grid[iz * N + ix] = 1;
        }
      }
    }

    if (playing) {
      this._drawCompass(player);
      this._drawMinimap(player);
    }
  }

  _biomeNature(x, z) {
    const h = this.terrain.heightAt(x, z);
    if (h < WATER_LEVEL - 0.5) return 'Water';
    if (h < WATER_LEVEL + 2.5) return 'Shore';
    if (h > 95) return 'Snowcaps';
    if (h > 55 || this.terrain.slopeAt(x, z) > 0.9) return 'Highlands';
    if (this.terrain.forestMask(x, z) > 0.12) return 'Forest';
    return 'Meadow';
  }

  _drawCompass(player) {
    const ctx = this.compassCtx;
    const W = COMPASS_W, H = COMPASS_H;
    ctx.clearRect(0, 0, W, H);

    const heading = ((-player.yaw * 180 / Math.PI) % 360 + 360) % 360;
    const pxPerDeg = 2.4;
    const base = H - 12;
    ctx.strokeStyle = 'rgba(255,255,255,0.22)';
    ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(0, base + 0.5); ctx.lineTo(W, base + 0.5); ctx.stroke();

    const start = Math.floor((heading - 80) / 5) * 5;
    ctx.textAlign = 'center';
    for (let deg = start; deg <= heading + 80; deg += 5) {
      const x = W / 2 + (deg - heading) * pxPerDeg;
      const dd = ((deg % 360) + 360) % 360;
      const major = dd % 45 === 0;
      ctx.strokeStyle = `rgba(255,255,255,${major ? 0.85 : 0.35})`;
      ctx.beginPath();
      ctx.moveTo(x, base);
      ctx.lineTo(x, base - (major ? 8 : (dd % 15 === 0 ? 5 : 3)));
      ctx.stroke();
      if (major) {
        const cardinal = dd % 90 === 0;
        ctx.fillStyle = dd === 0 ? '#f3b9a0' : 'rgba(255,255,255,0.92)';
        ctx.font = cardinal ? `600 17px ${SERIF}` : `500 12px ${SERIF}`;
        ctx.fillText(CARDINALS[dd / 45], x, base - 13);
      }
    }

    // discovered landmarks within half a km get a marker on the strip
    for (const s of this.sites()) {
      if (!s.discovered) continue;
      const dx = s.x - player.pos.x, dz = s.z - player.pos.z;
      const d = Math.hypot(dx, dz);
      if (d > 500) continue;
      const bearing = ((Math.atan2(-dx, -dz) * 180 / Math.PI) % 360 + 360) % 360;
      let diff = bearing - heading;
      while (diff > 180) diff -= 360;
      while (diff < -180) diff += 360;
      if (Math.abs(diff) > 78) continue;
      const x = W / 2 + diff * pxPerDeg;
      drawPoiIcon(ctx, s.type, x, base - 22, 4.2);
    }

    // heading marker
    ctx.fillStyle = '#f3d697';
    ctx.beginPath();
    ctx.moveTo(W / 2, base + 2);
    ctx.lineTo(W / 2 - 4.5, base + 9);
    ctx.lineTo(W / 2 + 4.5, base + 9);
    ctx.closePath();
    ctx.fill();
  }

  _drawMinimap(player) {
    const ctx = this.minimapCtx;
    const half = this.mapHalf, size = half * 2;
    const R = MAP_PX / 2;
    ctx.clearRect(0, 0, MAP_PX, MAP_PX);
    ctx.save();
    ctx.beginPath();
    ctx.arc(R, R, R - 1, 0, Math.PI * 2);
    ctx.clip();
    ctx.drawImage(this.mapBase, 0, 0, MAP_PX, MAP_PX);

    // fog of war overlay (wilds only)
    if (this.fogOn) {
      const { N, grid } = this.exploration;
      const fctx = this._fogCanvas.getContext('2d');
      fctx.clearRect(0, 0, N, N);
      fctx.fillStyle = 'rgba(30, 22, 12, 0.78)';
      for (let iz = 0; iz < N; iz++) {
        for (let ix = 0; ix < N; ix++) {
          if (!grid[iz * N + ix]) fctx.fillRect(ix, iz, 1, 1);
        }
      }
      ctx.imageSmoothingEnabled = true;
      ctx.drawImage(this._fogCanvas, 0, 0, MAP_PX, MAP_PX);
    }

    const mx = ((player.pos.x + half) / size) * MAP_PX;
    const mz = ((player.pos.z + half) / size) * MAP_PX;

    // discovered landmarks
    for (const s of this.sites()) {
      if (!s.discovered) continue;
      const sx = ((s.x + half) / size) * MAP_PX;
      const sz = ((s.z + half) / size) * MAP_PX;
      if (sx < -8 || sz < -8 || sx > MAP_PX + 8 || sz > MAP_PX + 8) continue;
      ctx.fillStyle = 'rgba(5, 9, 15, 0.55)';
      ctx.beginPath(); ctx.arc(sx, sz, 6, 0, Math.PI * 2); ctx.fill();
      drawPoiIcon(ctx, s.type, sx, sz, 4);
    }

    // the gate between worlds is always marked, discovered or not
    const gate = this.worlds?.gateMarker?.();
    if (gate) {
      let gx = ((gate.x + half) / size) * MAP_PX;
      let gz = ((gate.z + half) / size) * MAP_PX;
      if (gx > -30 && gz > -30 && gx < MAP_PX + 30 && gz < MAP_PX + 30) {
        const dxr = gx - R, dzr = gz - R, dr = Math.hypot(dxr, dzr), lim = R - 16;
        if (dr > lim) { gx = R + (dxr / dr) * lim; gz = R + (dzr / dr) * lim; }
        const t = performance.now() * 0.004;
        const pulse = 10 + Math.sin(t) * 2.5;
        ctx.strokeStyle = 'rgba(203, 184, 245, 0.95)';
        ctx.lineWidth = 2;
        ctx.beginPath(); ctx.arc(gx, gz, pulse, 0, Math.PI * 2); ctx.stroke();
        ctx.fillStyle = 'rgba(10, 8, 20, 0.88)';
        ctx.beginPath(); ctx.arc(gx, gz, 8.5, 0, Math.PI * 2); ctx.fill();
        ctx.strokeStyle = 'rgba(159, 127, 232, 0.9)';
        ctx.lineWidth = 1.5;
        ctx.beginPath(); ctx.arc(gx, gz, 8.5, 0, Math.PI * 2); ctx.stroke();
        drawPoiIcon(ctx, 'gate', gx, gz, 5.5);
      }
    }

    // View cone
    ctx.save();
    ctx.translate(mx, mz);
    ctx.rotate(-player.yaw);
    ctx.fillStyle = 'rgba(255,255,255,0.34)';
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.arc(0, 0, 24, -Math.PI / 2 - 0.5, -Math.PI / 2 + 0.5);
    ctx.closePath();
    ctx.fill();
    ctx.restore();

    // Player dot
    ctx.fillStyle = '#fff';
    ctx.strokeStyle = 'rgba(0,0,0,0.65)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(mx, mz, 3.2, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    // bezel: thin ring and a north tick
    ctx.strokeStyle = 'rgba(255,255,255,0.28)';
    ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.arc(R, R, R - 1, 0, Math.PI * 2); ctx.stroke();
    ctx.fillStyle = '#f3d697';
    ctx.beginPath(); ctx.moveTo(R, 2); ctx.lineTo(R - 4, 10); ctx.lineTo(R + 4, 10); ctx.closePath(); ctx.fill();
  }
}

function POI_LABEL(site) {
  const l = POI_ICONS[site.type]?.label;
  return l ? l.replace(/\b\w/g, (c) => c.toUpperCase()) : '';
}
