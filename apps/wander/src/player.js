import * as THREE from 'three';
import { WATER_LEVEL, WORLD_HALF } from './terrain.js';
import { createCharacter } from './character.js';

const EYE_HEIGHT = 1.62;
const WALK = 13;
const SPRINT = 26;
const SWIM = 7.5;
const FLY = 30;
const FLY_FAST = 58;
const GRAVITY = 32;
const JUMP = 12.5;
const MAX_CLIMB_SLOPE = 1.8; // rise/run — steeper than this stalls you (cliffs)
const BODY_R = 0.38;         // collision capsule radius
const BODY_H = 1.72;         // collision capsule height (feet to head)
const STEP_H = 0.65;         // ledges lower than this can be stepped onto

export class Player {
  constructor(camera, terrain, canvas, scene) {
    this.camera = camera;
    this.terrain = terrain;
    this.pos = new THREE.Vector3(0, 40, 0);
    this.vel = new THREE.Vector3();
    this.yaw = Math.PI * 0.25;
    this.pitch = -0.08;
    this.keys = Object.create(null);
    this.inputEnabled = false;
    this.grounded = false;
    this.inWater = false;
    this.flying = false;
    this.view = 'third';
    this.camDist = 5.5;
    this.bobPhase = 0;
    this.lift = 0;
    this.model = createCharacter();
    scene.add(this.model.root);
    this.locked = false;
    this.dragging = false;

    this._fwd = new THREE.Vector3();
    this._fwd3 = new THREE.Vector3();
    this._right = new THREE.Vector3();
    this._move = new THREE.Vector3();

    addEventListener('keydown', (e) => {
      if (!this.inputEnabled) return;
      this.keys[e.code] = true;
      if (e.code === 'KeyV') this.view = this.view === 'third' ? 'first' : 'third';
      if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.code)) {
        e.preventDefault();
      }
    });
    addEventListener('keyup', (e) => { this.keys[e.code] = false; });
    addEventListener('blur', () => { this.keys = Object.create(null); });

    canvas.addEventListener('wheel', (e) => {
      if (!this.inputEnabled) return;
      this.camDist = Math.max(2.6, Math.min(9.5, this.camDist + e.deltaY * 0.004));
    }, { passive: true });

    document.addEventListener('pointerlockchange', () => {
      this.locked = !!document.pointerLockElement;
    });
    document.addEventListener('mousemove', (e) => {
      if (!this.inputEnabled) return;
      if (this.locked || this.dragging) this.look(e.movementX, e.movementY);
    });
    document.addEventListener('mousedown', (e) => {
      if (e.target === canvas && this.inputEnabled) this.dragging = true;
    });
    document.addEventListener('mouseup', () => { this.dragging = false; });
  }

  look(dx, dy) {
    this.yaw -= dx * 0.0022;
    this.pitch -= dy * 0.0022;
    this.pitch = Math.max(-1.45, Math.min(1.35, this.pitch));
  }

  spawn(x, z) {
    this.pos.set(x, this.terrain.heightAt(x, z) + 0.5, z);
    this.vel.set(0, 0, 0);
    // teleports can land inside a tree — nudge back out
    this.terrain.colliders?.unstick(this.pos, BODY_R, BODY_H);
  }

  update(dt) {
    const k = this.keys;
    const f = (k.KeyW || k.ArrowUp ? 1 : 0) - (k.KeyS || k.ArrowDown ? 1 : 0);
    const s = (k.KeyD || k.ArrowRight ? 1 : 0) - (k.KeyA || k.ArrowLeft ? 1 : 0);
    const sprint = !!(k.ShiftLeft || k.ShiftRight);

    const sy = Math.sin(this.yaw), cy = Math.cos(this.yaw);
    const cp = Math.cos(this.pitch), sp = Math.sin(this.pitch);
    this._fwd3.set(-sy * cp, sp, -cy * cp); // full 3D look direction
    this._fwd.set(-sy, 0, -cy);
    this._right.set(cy, 0, -sy);

    this.flying = !!k.KeyP;

    const groundH = this.terrain.heightAt(this.pos.x, this.pos.z);
    this.inWater = !this.flying && this.pos.y < WATER_LEVEL - 0.25 && groundH < WATER_LEVEL - 0.25;

    if (this.flying) {
      // Fly where you look; P alone floats you gently upward, Space adds lift.
      const a = Math.min(1, 3.2 * dt);
      if (f !== 0 || s !== 0 || k.Space) {
        this._move.set(0, 0, 0).addScaledVector(this._fwd3, f).addScaledVector(this._right, s);
        if (k.Space) this._move.y += 0.8;
        const speed = sprint ? FLY_FAST : FLY;
        if (this._move.lengthSq() > 0) this._move.normalize().multiplyScalar(speed);
        this.vel.lerp(this._move, a);
      } else {
        // idle hover with a slow ascent
        this.vel.x *= Math.max(0, 1 - 3 * dt);
        this.vel.z *= Math.max(0, 1 - 3 * dt);
        this.vel.y += (3.5 - this.vel.y) * a;
      }
    } else {
      this._move.set(0, 0, 0).addScaledVector(this._fwd, f).addScaledVector(this._right, s);
      if (this._move.lengthSq() > 0) this._move.normalize();

      if (this.inWater) {
        const a = Math.min(1, 10 * dt);
        this.vel.x += (this._move.x * SWIM - this.vel.x) * a;
        this.vel.z += (this._move.z * SWIM - this.vel.z) * a;
        const targetVy = k.Space ? 6.5 : -1.8;
        this.vel.y += (targetVy - this.vel.y) * Math.min(1, 3.5 * dt);
        if (k.Space && this.pos.y > WATER_LEVEL - 1.1) this.vel.y = Math.max(this.vel.y, 6); // hop out
      } else {
        const speed = sprint ? SPRINT : WALK;
        const a = Math.min(1, (this.grounded ? 10 : 2.5) * dt);
        this.vel.x += (this._move.x * speed - this.vel.x) * a;
        this.vel.z += (this._move.z * speed - this.vel.z) * a;
        this.vel.y -= GRAVITY * dt;
        if (this.grounded && k.Space) {
          this.vel.y = JUMP;
          this.grounded = false;
        }
      }
    }

    // Slope limit: block horizontal movement into near-vertical ground (on foot only).
    const nx = this.pos.x + this.vel.x * dt;
    const nz = this.pos.z + this.vel.z * dt;
    const horiz = Math.hypot(nx - this.pos.x, nz - this.pos.z);
    if (this.grounded && !this.flying && horiz > 1e-4) {
      const rise = this.terrain.heightAt(nx, nz) - this.pos.y;
      if (rise / horiz > MAX_CLIMB_SLOPE) {
        this.vel.x *= 0.1;
        this.vel.z *= 0.1;
        this.pos.x += this.vel.x * dt;
        this.pos.z += this.vel.z * dt;
      } else {
        this.pos.x = nx;
        this.pos.z = nz;
      }
    } else {
      this.pos.x = nx;
      this.pos.z = nz;
    }
    this.pos.y += this.vel.y * dt;

    const lim = WORLD_HALF * 0.965;
    this.pos.x = Math.max(-lim, Math.min(lim, this.pos.x));
    this.pos.z = Math.max(-lim, Math.min(lim, this.pos.z));

    // Solid objects: push the body out of trunks, rocks and walls, sliding
    // along them instead of tunneling through.
    const cw = this.terrain.colliders;
    if (cw) {
      cw.resolve(this.pos, this.vel, BODY_R, this.pos.y, this.pos.y + BODY_H, STEP_H);
      this.pos.x = Math.max(-lim, Math.min(lim, this.pos.x));
      this.pos.z = Math.max(-lim, Math.min(lim, this.pos.z));
    }

    // Ground collision, with stick-to-ground so running downhill doesn't hover.
    // Standable collider tops (rocks, crates, plinths) count as ground too.
    let g = this.terrain.heightAt(this.pos.x, this.pos.z);
    if (cw) {
      const top = cw.supportAt(this.pos.x, this.pos.z, this.pos.y, BODY_R * 0.5, STEP_H);
      if (top > g) g = top;
    }
    if (this.pos.y <= g) {
      this.pos.y = g;
      if (this.vel.y < 0) this.vel.y = 0;
      this.grounded = true;
    } else if (this.grounded && this.vel.y <= 0 && this.pos.y - g < 0.9 && !this.flying) {
      this.pos.y = g;
    } else if (this.pos.y - g > 0.05) {
      this.grounded = false;
    }

    // Buoyant body lift while swimming so the model floats at the surface.
    const liftTarget = this.inWater
      ? Math.min(1.15, Math.max(0, WATER_LEVEL - this.pos.y) * 0.9 + 0.3)
      : 0;
    this.lift += (liftTarget - this.lift) * Math.min(1, 5 * dt);

    const hSpeed = Math.hypot(this.vel.x, this.vel.z);
    const speed3 = this.vel.length();

    // ----- camera -----
    if (this.view === 'third') {
      const pivotY = this.pos.y + 1.45;
      let allowed = this.camDist;
      for (let t = 0.25; t <= 1.001; t += 0.15) {
        const d = this.camDist * t;
        const px = this.pos.x - this._fwd3.x * d;
        const py = pivotY - this._fwd3.y * d;
        const pz = this.pos.z - this._fwd3.z * d;
        if (py < this.terrain.heightAt(px, pz) + 0.4 || (cw && cw.blocked(px, py, pz))) {
          allowed = Math.max(0.7, d - 0.35);
          break;
        }
      }
      this.camera.position.set(
        this.pos.x - this._fwd3.x * allowed,
        pivotY - this._fwd3.y * allowed,
        this.pos.z - this._fwd3.z * allowed
      );
      this.camera.rotation.set(this.pitch, this.yaw, 0);
      this.model.root.visible = true;
    } else {
      if (this.grounded && hSpeed > 0.5) this.bobPhase += dt * (4 + hSpeed * 0.45);
      const bob = Math.sin(this.bobPhase) * 0.05 * Math.min(1, hSpeed / 9);
      this.camera.position.set(this.pos.x, this.pos.y + EYE_HEIGHT + bob + this.lift * 0.6, this.pos.z);
      this.camera.rotation.set(this.pitch, this.yaw, 0);
      this.model.root.visible = false;
    }

    const targetFov = (hSpeed > 17 || (this.flying && speed3 > 17)) ? 77 : 70;
    if (Math.abs(this.camera.fov - targetFov) > 0.01) {
      this.camera.fov += (targetFov - this.camera.fov) * Math.min(1, 5 * dt);
      this.camera.updateProjectionMatrix();
    }

    // ----- character model -----
    this.model.root.position.set(this.pos.x, this.pos.y + this.lift, this.pos.z);
    this.model.update(dt, {
      vx: this.vel.x, vz: this.vel.z, vy: this.vel.y,
      speed: hSpeed,
      grounded: this.grounded,
      inWater: this.inWater,
      flying: this.flying,
      lookYaw: this.yaw,
      lookPitch: this.pitch,
      lift: this.lift,
    });
  }
}
