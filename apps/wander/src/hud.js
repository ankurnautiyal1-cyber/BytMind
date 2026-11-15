import { WORLD_SIZE, WORLD_HALF, WATER_LEVEL } from './terrain.js';
import { drawPoiIcon } from './icons.js';

const MAP_PX = 172;
const EXPLORE_N = 96; // fog-of-war grid resolution (cells across the world)
const CITY_HALF = 1200;
const CARDINALS = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];

// Terrain-colored map base at any pixel size (shared by minimap + big map).
export function renderMapBase(terrain, px) {
  const cv = document.createElement('canvas');
  cv.width = cv.height = px;
  const ctx = cv.getContext('2d');
  const img = ctx.createImageData(px, px);
  const d = img.data;
  for (let py = 0; py < px; py++) {
    for (let p = 0; p < px; p++) {
      const x = -WORLD_HALF + ((p + 0.5) / px) * WORLD_SIZE;
      const z = -WORLD_HALF + ((py + 0.5) / px) * WORLD_SIZE;
      const h = terrain.heightAt(x, z);
      let r, g, b;
      if (h < WATER_LEVEL) {
        const depth = Math.min(1, -h / 25);
        r = 46 - depth * 22; g = 111 - depth * 50; b = 142 - depth * 55;
      } else if (h < WATER_LEVEL + 2.5) {
        r = 216; g = 196; b = 137;
      } else if (h > 95) {
        r = 232; g = 238; b = 242;
      } else if (h > 55) {
        const t = Math.min(1, (h - 55) / 40);
        r = 139; g = 131; b = 120;
      } else {
        const t = Math.min(1, h / 50);
        r = 95 - t * 10; g = 143 - t * 8; b = 68;
        if (terrain.forestMask(x, z) > 0.12) { r *= 0.78; g *= 0.82; b *= 0.78; }
      }
      const i = (py * px + p) * 4;
      d[i] = r; d[i + 1] = g; d[i + 2] = b; d[i + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);
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
      compass: document.getElementById('compass'),
      minimap: document.getElementById('minimap'),
      hint: document.getElementById('hint'),
      tint: document.getElementById('tint'),
      toast: document.getElementById('toast'),
    };

    const dpr = Math.min(devicePixelRatio, 2);
    const sizes = { compass: [340, 40], minimap: [MAP_PX, MAP_PX] };
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

  updateShards() {
    if (this.orbs && this.el.shards) {
      this.el.shards.textContent = `${this.orbs.count}/${this.orbs.total}`;
    }
  }

  toast(title, sub = '') {
    const t = this.el.toast;
    if (!t) return;
    t.innerHTML = `<b>${title}</b>${sub ? `<span>${sub}</span>` : ''}`;
    t.classList.remove('show');
    void t.offsetWidth; // restart the CSS animation
    t.classList.add('show');
    clearTimeout(this._toastTimer);
    this._toastTimer = setTimeout(() => t.classList.remove('show'), 4200);
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

    this._drawCompass(player);
    this._drawMinimap(player);
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
    const W = 340, H = 40;
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = 'rgba(10, 14, 20, 0.55)';
    ctx.beginPath();
    ctx.roundRect(0, 0, W, H, 10);
    ctx.fill();

    const heading = ((-player.yaw * 180 / Math.PI) % 360 + 360) % 360;
    const pxPerDeg = 2.2;
    const start = Math.floor((heading - 72) / 5) * 5;
    ctx.textAlign = 'center';
    for (let deg = start; deg <= heading + 72; deg += 5) {
      const x = W / 2 + (deg - heading) * pxPerDeg;
      const fade = 1 - Math.abs(deg - heading) / 78;
      if (fade <= 0) continue;
      const dd = ((deg % 360) + 360) % 360;
      const major = dd % 45 === 0;
      ctx.strokeStyle = `rgba(255,255,255,${(major ? 0.8 : 0.3) * fade})`;
      ctx.beginPath();
      ctx.moveTo(x, H - 8);
      ctx.lineTo(x, H - 8 - (major ? 9 : 4));
      ctx.stroke();
      if (major) {
        ctx.fillStyle = dd === 0
          ? `rgba(255,120,120,${fade})`
          : `rgba(255,255,255,${0.85 * fade})`;
        ctx.font = dd % 90 === 0 ? '700 11px ui-sans-serif, system-ui' : '10px ui-sans-serif, system-ui';
        ctx.fillText(CARDINALS[dd / 45], x, 15);
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
      if (Math.abs(diff) > 68) continue;
      const x = W / 2 + diff * pxPerDeg;
      const fade = 1 - Math.abs(diff) / 74;
      ctx.globalAlpha = fade;
      drawPoiIcon(ctx, s.type, x, 8, 4.2);
      ctx.globalAlpha = 1;
    }

    ctx.fillStyle = 'rgba(255,255,255,0.9)';
    ctx.beginPath();
    ctx.moveTo(W / 2, H - 4);
    ctx.lineTo(W / 2 - 4, H);
    ctx.lineTo(W / 2 + 4, H);
    ctx.fill();
  }

  _drawMinimap(player) {
    const ctx = this.minimapCtx;
    const half = this.mapHalf, size = half * 2;
    ctx.clearRect(0, 0, MAP_PX, MAP_PX);
    ctx.drawImage(this.mapBase, 0, 0, MAP_PX, MAP_PX);

    // fog of war overlay (wilds only)
    if (this.fogOn) {
      const { N, grid } = this.exploration;
      const fctx = this._fogCanvas.getContext('2d');
      fctx.clearRect(0, 0, N, N);
      fctx.fillStyle = 'rgba(7, 11, 18, 0.82)';
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
      ctx.fillStyle = 'rgba(5, 9, 15, 0.5)';
      ctx.beginPath(); ctx.arc(sx, sz, 6, 0, Math.PI * 2); ctx.fill();
      drawPoiIcon(ctx, s.type, sx, sz, 4);
    }

    // the gate between worlds is always marked, discovered or not — kept
    // fully on-map and drawn big enough to read at a glance
    const gate = this.worlds?.gateMarker?.();
    if (gate) {
      let gx = ((gate.x + half) / size) * MAP_PX;
      let gz = ((gate.z + half) / size) * MAP_PX;
      if (gx > -30 && gz > -30 && gx < MAP_PX + 30 && gz < MAP_PX + 30) {
        gx = Math.max(13, Math.min(MAP_PX - 13, gx));
        gz = Math.max(13, Math.min(MAP_PX - 13, gz));
        const t = performance.now() * 0.004;
        const pulse = 10 + Math.sin(t) * 2.5;
        ctx.strokeStyle = 'rgba(203, 184, 245, 0.95)';
        ctx.lineWidth = 2;
        ctx.beginPath(); ctx.arc(gx, gz, pulse, 0, Math.PI * 2); ctx.stroke();
        ctx.strokeStyle = 'rgba(203, 184, 245, 0.4)';
        ctx.lineWidth = 1;
        ctx.beginPath(); ctx.arc(gx, gz, pulse + 4, 0, Math.PI * 2); ctx.stroke();
        ctx.fillStyle = 'rgba(10, 8, 20, 0.85)';
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
    ctx.fillStyle = 'rgba(255,255,255,0.28)';
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.arc(0, 0, 22, -Math.PI / 2 - 0.5, -Math.PI / 2 + 0.5);
    ctx.closePath();
    ctx.fill();
    ctx.restore();

    // Player dot
    ctx.fillStyle = '#fff';
    ctx.strokeStyle = 'rgba(0,0,0,0.6)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(mx, mz, 3, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // north label — top-left, clear of the gate marker which lives at north
    ctx.fillStyle = 'rgba(255,255,255,0.85)';
    ctx.font = '700 11px ui-sans-serif, system-ui';
    ctx.textAlign = 'left';
    ctx.fillText('N ↑', 8, 16);
  }
}
