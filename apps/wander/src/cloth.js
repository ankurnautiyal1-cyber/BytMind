import * as THREE from 'three';
import { applyRim } from './rim.js';

// Small verlet cloth for the explorer's cape and scarf. Particles live in world
// space, so the cloth trails, whips and settles with the player's real motion;
// a few relaxation passes keep it the right size, a body-collision callback
// keeps it off the character, and a two-sided "air" force (wind + relative
// velocity along the cloth normal) makes it flutter.

const _v = new THREE.Vector3();
const _n = new THREE.Vector3();
const _a = new THREE.Vector3();
const _b = new THREE.Vector3();

export class Cloth {
  /**
   * cols x rows grid hanging from `anchorsLocal` (top row, in `driver` space).
   * widths: [top, hem] in metres; length in metres.
   */
  constructor({ driver, anchorsLocal, cols, rows, widths, length, colors, gravity = 7.5, damping = 0.985, air = 2.4, collide = null }) {
    this.driver = driver;
    this.anchors = anchorsLocal;
    this.cols = cols; this.rows = rows;
    this.collide = collide;
    this.gravity = gravity; this.damping = damping; this.air = air;
    const n = cols * rows;
    this.p = Array.from({ length: n }, () => new THREE.Vector3());
    this.q = Array.from({ length: n }, () => new THREE.Vector3());
    this.rest = [];
    const rl = length / (rows - 1);
    for (let r = 0; r < rows; r++) {
      const w = THREE.MathUtils.lerp(widths[0], widths[1], r / (rows - 1)) / (cols - 1);
      this.rest.push({ h: w, v: rl, d: Math.hypot(w, rl) });
    }
    this.normals = Array.from({ length: n }, () => new THREE.Vector3(0, 0, 1));
    this._ready = false;

    // geometry
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(n * 3), 3));
    g.setAttribute('normal', new THREE.BufferAttribute(new Float32Array(n * 3), 3));
    const col = new Float32Array(n * 3);
    const c = new THREE.Color();
    for (let r = 0; r < rows; r++) {
      for (let k = 0; k < cols; k++) {
        c.copy(colors(r / (rows - 1), k / (cols - 1), r, k));
        col.set([c.r, c.g, c.b], (r * cols + k) * 3);
      }
    }
    g.setAttribute('color', new THREE.BufferAttribute(col, 3));
    const idx = [];
    for (let r = 0; r < rows - 1; r++) {
      for (let k = 0; k < cols - 1; k++) {
        const a = r * cols + k, b = a + 1, d = a + cols, e = d + 1;
        idx.push(a, d, b, b, d, e);
      }
    }
    g.setIndex(idx);
    this.mesh = new THREE.Mesh(g, new THREE.MeshStandardMaterial({
      vertexColors: true, side: THREE.DoubleSide, roughness: 0.9,
    }));
    applyRim(this.mesh.material, 0.22); // cloth is seen edge-on a lot: keep its rim gentle
    this.mesh.frustumCulled = false;
    this.mesh.castShadow = true;
    this.mesh.userData.cloth = true;
  }

  anchorWorld(k, out) {
    return out.copy(this.anchors[k]).applyMatrix4(this.driver.matrixWorld);
  }

  reset() {
    const { cols, rows } = this;
    for (let k = 0; k < cols; k++) {
      this.anchorWorld(k, _v);
      for (let r = 0; r < rows; r++) {
        const i = r * cols + k;
        this.p[i].set(_v.x, _v.y - this.rest[r].v * r, _v.z);
        this.q[i].copy(this.p[i]);
      }
    }
    this._ready = true;
  }

  update(dt, wind) {
    if (!(dt > 1e-4)) return; // two frames in one timer tick: nothing to integrate (and h would be 0)
    if (!this._ready) { this.reset(); }
    const { cols, rows, p, q } = this;
    // a teleport (portal, spawn) would stretch the cloth across the world
    this.anchorWorld(Math.floor(cols / 2), _v);
    if (_v.distanceToSquared(p[Math.floor(cols / 2)]) > 9) { this.reset(); }

    const steps = Math.min(3, Math.max(1, Math.ceil(dt / 0.016)));
    const h = Math.min(dt, 0.05) / steps;
    for (let s = 0; s < steps; s++) {
      // pin the top row to the driver
      for (let k = 0; k < cols; k++) { this.anchorWorld(k, p[k]); q[k].copy(p[k]); }
      for (let i = cols; i < p.length; i++) {
        _v.copy(p[i]).sub(q[i]).multiplyScalar(this.damping);       // verlet velocity
        q[i].copy(p[i]);
        // air: push along the cloth normal by the relative wind
        const nrm = this.normals[i];
        _a.copy(wind).addScaledVector(_v, -1 / h);                  // wind minus particle velocity
        const f = nrm.dot(_a) * this.air;
        p[i].add(_v);
        p[i].addScaledVector(nrm, f * h * h);
        p[i].y -= this.gravity * h * h;
      }
      // relax
      for (let it = 0; it < 3; it++) {
        for (let r = 0; r < rows; r++) {
          const rs = this.rest[r];
          for (let k = 0; k < cols; k++) {
            const i = r * cols + k;
            if (k < cols - 1) this._link(i, i + 1, rs.h, r === 0 && true);
            if (r < rows - 1) {
              this._link(i, i + cols, rs.v, false);
              if (k < cols - 1) this._link(i, i + cols + 1, rs.d, false);
              if (k > 0) this._link(i, i + cols - 1, rs.d, false);
            }
          }
        }
        if (this.collide) for (let i = cols; i < p.length; i++) this.collide(p[i]);
      }
    }
    this._write();
  }

  _link(i, j, len, topRow) {
    const { p, cols } = this;
    const pi = p[i], pj = p[j];
    _b.copy(pj).sub(pi);
    const d = _b.length() || 1e-6;
    const diff = (d - len) / d;
    const wi = i < cols ? 0 : 0.5, wj = j < cols ? 0 : 0.5;
    const tot = wi + wj;
    if (tot === 0) return;
    pi.addScaledVector(_b, diff * (wi / tot));
    pj.addScaledVector(_b, -diff * (wj / tot));
  }

  _write() {
    const { cols, rows, p } = this;
    const pos = this.mesh.geometry.attributes.position;
    const nor = this.mesh.geometry.attributes.normal;
    let sum = 0;
    for (let i = 0; i < p.length; i++) sum += p[i].x + p[i].y + p[i].z;
    if (!Number.isFinite(sum)) { this._ready = false; return; } // blew up: start over next frame
    for (let i = 0; i < p.length; i++) pos.setXYZ(i, p[i].x, p[i].y, p[i].z);
    for (let r = 0; r < rows; r++) {
      for (let k = 0; k < cols; k++) {
        const i = r * cols + k;
        const a = p[r < rows - 1 ? i + cols : i], b = p[r > 0 ? i - cols : i];
        const l = p[k < cols - 1 ? i + 1 : i], rr = p[k > 0 ? i - 1 : i];
        _a.copy(a).sub(b);
        _b.copy(l).sub(rr);
        _n.crossVectors(_b, _a);
        if (_n.lengthSq() < 1e-10) _n.set(0, 0, 1);
        _n.normalize();
        this.normals[i].copy(_n);
        nor.setXYZ(i, _n.x, _n.y, _n.z);
      }
    }
    pos.needsUpdate = true;
    nor.needsUpdate = true;
  }
}
