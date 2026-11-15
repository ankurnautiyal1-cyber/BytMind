// Lightweight static collision world for the explorer.
//
// Everything solid the player shouldn't walk through — tree trunks, rocks,
// landmarks, buildings — is registered here as a vertical cylinder or a
// (optionally rotated) box. Colliders live in a spatial hash grid over the
// XZ plane so per-frame queries only touch the handful of objects near the
// player, even with thousands of instances scattered across the 4 km world.
//
// The player is approximated by a vertical capsule of `radius` between
// `feetY` and `headY`. resolve() pushes that capsule out of overlaps and
// slides velocity along the surface; supportAt() reports standable tops so
// rocks and crates can be stepped onto and stood upon.

const CELL = 8;    // grid cell size in metres
const EPS = 0.02;  // skin for step-up comparisons (float-equal edge cases)

export class CollisionWorld {
  constructor() {
    this.grid = new Map(); // cell key → collider[]
    this.all = [];
    this._stamp = 0;
  }

  _cellsFor(x, z, ext, fn) {
    const x0 = Math.floor((x - ext) / CELL), x1 = Math.floor((x + ext) / CELL);
    const z0 = Math.floor((z - ext) / CELL), z1 = Math.floor((z + ext) / CELL);
    for (let ix = x0; ix <= x1; ix++) {
      for (let iz = z0; iz <= z1; iz++) {
        const key = (ix + 32768) * 65536 + (iz + 32768);
        fn(key);
      }
    }
  }

  _insert(c) {
    this.all.push(c);
    this._cellsFor(c.x, c.z, c.ext, (key) => {
      let arr = this.grid.get(key);
      if (!arr) this.grid.set(key, (arr = []));
      arr.push(c);
    });
  }

  // Vertical cylinder centred on (x, z), from y0 up to y1.
  addCylinder(x, z, r, y0, y1) {
    if (y1 <= y0) return;
    this._insert({ kind: 0, x, z, r, y0, y1, ext: r });
  }

  // Box centred on (x, z) with half-extents hw/hd, optionally rotated around Y.
  addBox(x, z, hw, hd, y0, y1, rotY = 0) {
    if (y1 <= y0) return;
    this._insert({ kind: 1, x, z, hw, hd, rotY, y0, y1, ext: Math.hypot(hw, hd) });
  }

  // Copy every collider of another world into this one (nature world assembly).
  absorb(other) {
    for (const c of other.all) {
      if (c.kind === 0) this.addCylinder(c.x, c.z, c.r, c.y0, c.y1);
      else this.addBox(c.x, c.z, c.hw, c.hd, c.y0, c.y1, c.rotY);
    }
  }

  // Colliders whose footprint reaches within `rad` of (x, z) — deduped.
  _near(x, z, rad, out) {
    out.length = 0;
    this._stamp++;
    this._cellsFor(x, z, rad, (key) => {
      const arr = this.grid.get(key);
      if (!arr) return;
      for (const c of arr) {
        if (c._mark === this._stamp) continue;
        c._mark = this._stamp;
        out.push(c);
      }
    });
    return out;
  }

  // Push a capsule (pos.x/z at centre, feetY..headY vertical span) out of
  // every overlapping collider, removing the into-surface part of `vel` so
  // movement slides along walls instead of sticking. Tops within `step` of
  // the feet are steppable: they don't block, supportAt() lands you on them.
  resolve(pos, vel, radius, feetY, headY, step) {
    const near = this._near(pos.x, pos.z, radius + 1, this._scratch ??= []);
    let hits = 0;
    for (let iter = 0; iter < 2; iter++) {
      let moved = false;
      for (const c of near) {
        if (headY <= c.y0 || feetY >= c.y1 - step - EPS) continue; // above/below us
        let nx, nz, depth;
        if (c.kind === 0) {
          const dx = pos.x - c.x, dz = pos.z - c.z;
          const R = c.r + radius;
          const d2 = dx * dx + dz * dz;
          if (d2 >= R * R) continue;
          const d = Math.sqrt(d2);
          if (d > 1e-6) { nx = dx / d; nz = dz / d; depth = R - d; }
          else { nx = 1; nz = 0; depth = R; } // dead centre: any way out
        } else {
          // into the box's local frame
          const cs = Math.cos(c.rotY), sn = Math.sin(c.rotY);
          const dx = pos.x - c.x, dz = pos.z - c.z;
          const lx = cs * dx - sn * dz, lz = sn * dx + cs * dz;
          const qx = Math.max(-c.hw, Math.min(c.hw, lx));
          const qz = Math.max(-c.hd, Math.min(c.hd, lz));
          let ddx = lx - qx, ddz = lz - qz;
          const d2 = ddx * ddx + ddz * ddz;
          if (d2 >= radius * radius) continue;
          if (d2 > 1e-9) {
            const d = Math.sqrt(d2);
            ddx /= d; ddz /= d;
            depth = radius - d;
          } else {
            // centre inside the box: exit through the nearest face
            const ex = c.hw - Math.abs(lx), ez = c.hd - Math.abs(lz);
            if (ex < ez) { ddx = lx >= 0 ? 1 : -1; ddz = 0; depth = ex + radius; }
            else { ddx = 0; ddz = lz >= 0 ? 1 : -1; depth = ez + radius; }
          }
          // back to world frame
          nx = cs * ddx + sn * ddz;
          nz = -sn * ddx + cs * ddz;
        }
        pos.x += nx * depth;
        pos.z += nz * depth;
        if (vel) {
          const into = vel.x * nx + vel.z * nz;
          if (into < 0) { vel.x -= into * nx; vel.z -= into * nz; }
        }
        moved = true;
        hits++;
      }
      if (!moved) break;
    }
    return hits;
  }

  // Highest standable surface at (x, z): the top of a collider whose top sits
  // within [feetY - drop, feetY + step] and whose footprint carries the
  // player. Returns -Infinity when only the terrain is underfoot.
  supportAt(x, z, feetY, radius, step, drop = 1.0) {
    const near = this._near(x, z, radius + 1, this._scratch ??= []);
    let best = -Infinity;
    for (const c of near) {
      if (c.y1 > feetY + step + EPS || c.y1 < feetY - drop) continue;
      if (c.kind === 0) {
        const dx = x - c.x, dz = z - c.z;
        if (dx * dx + dz * dz > (c.r + radius) ** 2) continue;
      } else {
        const cs = Math.cos(c.rotY), sn = Math.sin(c.rotY);
        const dx = x - c.x, dz = z - c.z;
        const lx = cs * dx - sn * dz, lz = sn * dx + cs * dz;
        if (Math.abs(lx) > c.hw + radius || Math.abs(lz) > c.hd + radius) continue;
      }
      if (c.y1 > best) best = c.y1;
    }
    return best;
  }

  // Point-in-solid test with a padding — used to keep the camera out of rocks
  // and tree trunks.
  blocked(x, y, z, pad = 0.25) {
    const near = this._near(x, z, pad + 2.6, this._scratch ??= []);
    for (const c of near) {
      if (y < c.y0 || y > c.y1) continue;
      if (c.kind === 0) {
        const dx = x - c.x, dz = z - c.z;
        const R = c.r + pad;
        if (dx * dx + dz * dz < R * R) return true;
      } else {
        const cs = Math.cos(c.rotY), sn = Math.sin(c.rotY);
        const dx = x - c.x, dz = z - c.z;
        const lx = cs * dx - sn * dz, lz = sn * dx + cs * dz;
        if (Math.abs(lx) < c.hw + pad && Math.abs(lz) < c.hd + pad) return true;
      }
    }
    return false;
  }

  // Nudge a position out of anything it starts inside (teleports, spawns).
  unstick(pos, radius, height) {
    this.resolve(pos, null, radius, pos.y, pos.y + height, 0);
  }
}
