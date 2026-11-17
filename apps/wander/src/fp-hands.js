import * as THREE from 'three';

// First-person viewmodel: two jacket-sleeved arms and gloved hands (the left one
// holding the lantern) hang off the camera. They bob with the stride, pump when
// sprinting, lift when you jump, reach forward when you fly and stroke when you
// swim. The lantern light stands in for the explorer's own while the body is hidden,
// so the number of lights in the scene (and the shaders) stays the same.

export class FPHands {
  constructor(camera, scene) {
    scene.add(camera); // children of the camera only render when the camera is in the graph
    this.group = new THREE.Group();
    this.group.visible = false;
    camera.add(this.group);

    const sleeveMat = new THREE.MeshStandardMaterial({ color: 0x9c3b20, roughness: 0.9 });
    const gloveMat = new THREE.MeshStandardMaterial({ color: 0x4a3425, roughness: 0.8 });
    const goldMat = new THREE.MeshStandardMaterial({ color: 0xd9a63c, roughness: 0.5, metalness: 0.3 });
    this.arms = [];
    for (const s of [-1, 1]) {
      const arm = new THREE.Group();
      const sleeve = new THREE.Mesh(new THREE.CylinderGeometry(0.036, 0.05, 0.34, 10), sleeveMat);
      sleeve.position.y = 0.17;
      const cuff = new THREE.Mesh(new THREE.TorusGeometry(0.04, 0.009, 6, 14), goldMat);
      cuff.rotation.x = Math.PI / 2;
      cuff.position.y = 0.335;
      const hand = new THREE.Mesh(new THREE.SphereGeometry(0.042, 12, 10), gloveMat);
      hand.scale.set(1, 1.25, 0.85);
      hand.position.y = 0.395;
      const thumb = new THREE.Mesh(new THREE.SphereGeometry(0.017, 8, 6), gloveMat);
      thumb.position.set(-s * 0.036, 0.385, -0.015);
      arm.add(sleeve, cuff, hand, thumb);
      arm.position.set(s * 0.2, -0.27, -0.34);
      arm.rotation.set(-0.98, 0, -s * 0.22);
      for (const m of arm.children) m.castShadow = false;
      this.group.add(arm);
      this.arms.push({ arm, s, base: arm.position.clone(), rot: arm.rotation.clone() });
    }

    // the lantern, held in the left hand
    this.lantern = new THREE.Group();
    const glassMat = new THREE.MeshStandardMaterial({ color: 0xffd9a0, emissive: 0xffb866, emissiveIntensity: 1.5, roughness: 0.3 });
    const glass = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.045, 0.1, 8), glassMat);
    const capMat = new THREE.MeshStandardMaterial({ color: 0x2a2622, roughness: 0.6 });
    const capT = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.055, 0.03, 8), capMat);
    capT.position.y = 0.065;
    const capB = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.02, 8), capMat);
    capB.position.y = -0.06;
    const handle = new THREE.Mesh(new THREE.TorusGeometry(0.045, 0.006, 5, 12, Math.PI), capMat);
    handle.position.y = 0.075;
    this.lantern.add(glass, capT, capB, handle);
    this.group.add(this.lantern); // hangs from the left hand; placed each frame so it stays upright
    this.glassMat = glassMat;
    this.light = new THREE.PointLight(0xffb866, 0, 7, 2.0);
    this.light.position.set(-0.2, -0.22, -0.6);
    this.group.add(this.light);
    this.light.visible = false;
    this.phase = 0;
    this.k = 0;
  }

  update(dt, player, { show, night }) {
    const g = this.group;
    if (g.visible !== show) { g.visible = show; this.light.visible = show; }
    if (!show) return;
    const hs = Math.hypot(player.vel.x, player.vel.z);
    const walking = player.grounded && hs > 0.5 && !player.inWater && !player.flying;
    this.k += ((walking ? Math.min(1, hs / 14) : 0) - this.k) * Math.min(1, 8 * dt);
    this.phase += dt * (player.flying ? 3 : player.inWater ? 5.5 : 4 + hs * 0.45);
    const t = this.phase;
    const sprint = hs > 18 ? 1 : 0;
    const air = !player.grounded && !player.inWater && !player.flying ? THREE.MathUtils.clamp(player.vel.y * 0.012, -0.12, 0.12) : 0;

    for (const a of this.arms) {
      const { arm, s, base, rot } = a;
      const swing = Math.sin(t + (s > 0 ? Math.PI : 0));
      arm.position.set(
        base.x + Math.cos(t * 0.5) * 0.008 * this.k,
        base.y + Math.abs(Math.sin(t)) * -0.012 * this.k + air,
        base.z + swing * 0.04 * this.k * (1 + sprint),
      );
      arm.rotation.set(rot.x + swing * 0.1 * this.k * (1 + sprint), rot.y, rot.z);
      if (player.flying) {
        // arms swept forward and a little out, like a diver
        arm.position.set(base.x * 0.6, base.y + 0.08, base.z - 0.1);
        arm.rotation.set(-1.45 + Math.sin(t * 0.7 + s) * 0.04, 0, -s * 0.12);
      } else if (player.inWater) {
        const stroke = Math.sin(t * 0.55 + (s > 0 ? Math.PI : 0));
        arm.position.set(base.x * 0.9, base.y + 0.05 + stroke * 0.05, base.z - 0.08 - Math.max(0, stroke) * 0.14);
        arm.rotation.set(-1.35 + stroke * 0.42, 0, -s * 0.2);
      }
    }
    {
      const a = this.arms[0].arm;
      a.updateMatrix();
      this.lantern.position.set(0, 0.41, 0).applyMatrix4(a.matrix).add(this._down || (this._down = new THREE.Vector3(0, -0.1, 0)));
      this.light.position.copy(this.lantern.position);
    }
    this.glassMat.emissiveIntensity = 1.0 + 3.0 * night + 0.3 * Math.sin(performance.now() * 0.004);
    this.light.intensity = 0.08 + 0.4 * night;
  }
}
