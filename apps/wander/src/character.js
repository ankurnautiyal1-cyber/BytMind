import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { applyRim } from './rim.js';
import { Cloth } from './cloth.js';

// shared environment the explorer reacts to (set from main.js each frame)
export const charEnv = { wind: { value: 1 }, night: 0, hoodUp: false };

// The player character: a Blender-authored hiker (tools/build_character.py)
// exported as a skinned GLB with baked clips (idle/walk/run/swim/fly/fall).
// This module owns the clip state machine (crossfaded by movement state),
// heading/body-pitch control, head look-at and blinking. The GLB faces -Z,
// matching the heading math below; player.js keeps its old interface.

const WALK_TS = 0.0909;  // timeScale factor: speed * this keeps the baked
const RUN_TS = 0.0455;   // cycles matching the game's arcade movement speeds
const FADE = 0.18;

const UP = new THREE.Vector3(0, 1, 0);
const RIGHT = new THREE.Vector3(1, 0, 0);

export function createCharacter() {
  const root = new THREE.Group();
  root.rotation.order = 'YXZ'; // yaw (heading) then pitch (fly/swim pose)
  const inner = new THREE.Group();
  root.add(inner);

  let ready = false;
  let mixer = null;
  const actions = {};
  let current = null;
  let headBone = null;
  let headRest = null;
  const eyes = [];
  let g = null;                 // the loaded glTF scene
  let chestBone = null, neckBone = null, footL = null, footR = null;
  let lanternMat = null, lanternLight = null, cloakMat = null, bunchedHood = null;
  let handL = null, handR = null, cowl = null, hoodT = 0;
  const legs = [];               // { thigh, shin, foot } for foot IK
  let ikW = 0, hipDrop = 0, nextDrop = 0;
  const cloths = [];            // cape + scarf tails
  const invG = new THREE.Matrix4();
  const _lp = new THREE.Vector3();
  const windV = new THREE.Vector3();

  // head-look axes captured at rest (world up/right mapped into the head
  // bone's parent frame, so look works regardless of bone conventions)
  const headUp = UP.clone();
  const headRight = RIGHT.clone();

  let yaw = 0;
  let lookYawS = 0;
  let lookPitchS = 0;
  let blinkIn = 2.5;
  let blinkHold = 0;

  new GLTFLoader().load('assets/character.glb', (gltf) => {
    g = gltf.scene;
    g.traverse((o) => {
      if (o.isMesh) {
        o.castShadow = true;
        o.frustumCulled = true;
        const mats = Array.isArray(o.material) ? o.material : [o.material];
        for (const m of mats) {
          applyRim(m);
          if (m.name === 'char_cloak') cloakMat = m;
          if (m.name === 'char_lantern') {
            lanternMat = m;
            // a small warm light inside the glass
            o.geometry.computeBoundingBox();
            lanternLight = new THREE.PointLight(0xffb866, 0, 6, 2.0);
            lanternLight.position.copy(o.geometry.boundingBox.getCenter(new THREE.Vector3()));
            o.add(lanternLight);
          }
        }
      }
      if (o.name === 'EyeL' || o.name === 'EyeR') eyes.push(o);
      if (o.name === 'Hood') bunchedHood = o;
    });
    inner.add(g);
    mixer = new THREE.AnimationMixer(g);
    for (const clip of gltf.animations) {
      actions[clip.name] = mixer.clipAction(clip);
    }
    headBone = g.getObjectByName('Head');
    if (headBone) {
      headRest = headBone.quaternion.clone();
      const inv = new THREE.Matrix4().copy(headBone.parent.matrixWorld).invert();
      headUp.copy(UP).transformDirection(inv);
      headRight.copy(RIGHT).transformDirection(inv);
    }
    actions.idle?.reset().play();
    current = 'idle';
    ready = true;

    // ---- cloth: a cape from the shoulders and two scarf tails from the neck ----
    chestBone = g.getObjectByName('Chest');
    neckBone = g.getObjectByName('Neck');
    footL = g.getObjectByName('Foot_L');
    footR = g.getObjectByName('Foot_R');
    handL = g.getObjectByName('Hand_L');
    handR = g.getObjectByName('Hand_R');
    for (const side of ['L', 'R']) {
      const thigh = g.getObjectByName(`Thigh_${side}`), shin = g.getObjectByName(`Shin_${side}`), foot = g.getObjectByName(`Foot_${side}`);
      if (thigh && shin && foot) legs.push({ thigh, shin, foot, qThigh: new THREE.Quaternion(), qShin: new THREE.Quaternion() });
    }
    mixer.update(0);
    saveLegPose();
    root.updateMatrixWorld(true);
    const local = (bone, x, y, z) => bone.worldToLocal(g.localToWorld(new THREE.Vector3(x, y, z)));
    const col = (hex) => new THREE.Color(hex);

    const capeCollide = (p) => {
      _lp.copy(p).applyMatrix4(invG);
      const y = _lp.y;
      if (y < 0.12 || y > 1.62) return;
      const zmin = (Math.abs(_lp.x) < 0.17 && y > 1.0) ? 0.29 : 0.18;
      if (_lp.z < zmin) { _lp.z = zmin; p.copy(_lp).applyMatrix4(g.matrixWorld); }
    };
    const scarfCollide = (p) => {
      _lp.copy(p).applyMatrix4(invG);
      if (_lp.y < 0.95 || _lp.y > 1.55) return;
      const dx = _lp.x, dz = _lp.z - 0.03, r = Math.hypot(dx, dz), R = 0.2;
      if (r < R) { const k = R / Math.max(r, 1e-4); _lp.x = dx * k; _lp.z = 0.03 + dz * k; p.copy(_lp).applyMatrix4(g.matrixWorld); }
    };

    if (chestBone) {
      const anchors = [];
      for (let c = 0; c < 7; c++) {
        const u = c / 6 - 0.5;
        anchors.push(local(chestBone, u * 0.42, 1.4, 0.14 - 0.06 * Math.pow(Math.abs(u * 2), 2)));
      }
      cloths.push(new Cloth({
        driver: chestBone, anchorsLocal: anchors, cols: 7, rows: 11, widths: [0.42, 0.78], length: 1.0,
        gravity: 8.5, air: 2.6, collide: capeCollide,
        colors: (t, u, r) => (r >= 10 ? col(0xd9a63c)
          : col(0x0c3a44).lerp(col(0x1b6f7a), Math.pow(t, 0.9) * (0.75 + 0.25 * Math.abs(u * 2 - 1)))),
      }));
    }
    if (neckBone) {
      for (const side of [-1, 1]) {
        const anchors = [];
        for (let c = 0; c < 3; c++) anchors.push(local(neckBone, side * 0.05 + (c - 1) * 0.034, 1.455, -0.075));
        cloths.push(new Cloth({
          driver: neckBone, anchorsLocal: anchors, cols: 3, rows: 10, widths: [0.05, 0.065], length: 0.55,
          gravity: 6.5, air: 3.2, damping: 0.982, collide: scarfCollide,
          colors: (t, u, r) => (r >= 9 ? col(0xcfc3a6) : ((r >> 1) % 2 ? col(0xb53a2e) : col(0xcfc3a6))),
        }));
      }
    }
    const parent = root.parent || root;
    for (const c of cloths) parent.add(c.mesh);

    // ---- a cowl that can be pulled up over the head (rain, or U) ----
    if (headBone && eyes.length && cloakMat) {
      const mid = new THREE.Vector3();
      for (const e of eyes) mid.add(e.getWorldPosition(new THREE.Vector3()));
      mid.multiplyScalar(1 / eyes.length);
      const centre = mid.clone().add(new THREE.Vector3(0, 0.012, 0.034)); // a little behind the eyes (the model faces -Z)
      const mat = cloakMat.clone();
      mat.side = THREE.DoubleSide;
      mat.vertexColors = false; // the baked-AO colours belong to the GLB meshes, not this sphere
      applyRim(mat, 0.4);
      cowl = new THREE.Mesh(
        new THREE.SphereGeometry(0.158, 26, 16, Math.PI * 1.75, Math.PI * 1.5, 0, Math.PI * 0.68),
        mat,
      );
      cowl.scale.set(0.96, 1.04, 1.16);
      cowl.castShadow = true;
      cowl.visible = false;
      headBone.add(cowl);
      cowl.position.copy(headBone.worldToLocal(centre.clone()));
      cowl.quaternion.copy(headBone.getWorldQuaternion(new THREE.Quaternion()).invert());
      cowl.userData.s0 = cowl.scale.clone();
    }
  });

  // ---- two-bone IK: plant each foot on the ground it actually stands over ----
  const _A = new THREE.Vector3(), _B = new THREE.Vector3(), _C = new THREE.Vector3(), _T = new THREE.Vector3();
  const _AB = new THREE.Vector3(), _AC = new THREE.Vector3(), _dir = new THREE.Vector3(), _pole = new THREE.Vector3();
  const _nB = new THREE.Vector3(), _nC = new THREE.Vector3(), _u = new THREE.Vector3(), _v = new THREE.Vector3();
  const _q = new THREE.Quaternion(), _wq = new THREE.Quaternion(), _pq2 = new THREE.Quaternion();
  function rotateBone(bone, from, to) {
    _q.setFromUnitVectors(from, to);
    bone.getWorldQuaternion(_wq);
    bone.parent.getWorldQuaternion(_pq2).invert();
    bone.quaternion.copy(_pq2.multiply(_q).multiply(_wq));
    bone.updateMatrixWorld(true);
  }
  // The mixer only rewrites a bone when its clip value changes, so for a static
  // clip (idle) the IK would be re-solved on top of its own previous result every
  // frame and drift (a leg slowly spinning). Keep the IK stateless: remember the
  // clip's pose for the leg bones and put it back before each mixer step.
  function saveLegPose() {
    for (const l of legs) { l.qThigh.copy(l.thigh.quaternion); l.qShin.copy(l.shin.quaternion); }
  }
  function restoreLegPose() {
    for (const l of legs) { l.thigh.quaternion.copy(l.qThigh); l.shin.quaternion.copy(l.qShin); }
  }

  const _fwd = new THREE.Vector3();   // the explorer's forward (-Z) in world space
  function solveLeg(leg, targetY, w) {
    const { thigh, shin, foot } = leg;
    thigh.getWorldPosition(_A); shin.getWorldPosition(_B); foot.getWorldPosition(_C);
    if (Math.abs(targetY - _C.y) * w < 1e-4) return; // nothing to correct: keep the clip's pose
    _T.copy(_C); _T.y += (targetY - _C.y) * w;
    const l1 = _A.distanceTo(_B), l2 = _B.distanceTo(_C);
    _dir.subVectors(_T, _A);
    // reach limit is exactly l1+l2 (no margin): a clip leg that is already straight
    // stays straight instead of being forced into a visible knee bend
    const d = THREE.MathUtils.clamp(_dir.length(), Math.abs(l1 - l2) + 1e-3, l1 + l2);
    _dir.normalize();
    _AB.subVectors(_B, _A);
    _AC.subVectors(_C, _A);
    // knee-bend direction: the clip's own bend, biased toward "forward" so that
    // a (nearly) straight leg has a stable pole instead of a noise-driven one
    // that makes the leg spin around its axis
    _pole.copy(_AB).addScaledVector(_AC, -_AB.dot(_AC) / Math.max(1e-8, _AC.lengthSq()));
    _pole.addScaledVector(_fwd, 0.01);
    _pole.addScaledVector(_dir, -_pole.dot(_dir)).normalize();
    const cosA = THREE.MathUtils.clamp((l1 * l1 + d * d - l2 * l2) / (2 * l1 * d), -1, 1);
    const sinA = Math.sqrt(1 - cosA * cosA);
    _nB.copy(_A).addScaledVector(_dir, l1 * cosA).addScaledVector(_pole, l1 * sinA);
    _nC.copy(_A).addScaledVector(_dir, d);
    rotateBone(thigh, _u.copy(_AB).normalize(), _v.subVectors(_nB, _A).normalize());
    shin.getWorldPosition(_B); foot.getWorldPosition(_C);
    rotateBone(shin, _u.subVectors(_C, _B).normalize(), _v.subVectors(_nC, _B).normalize());
  }

  const wrap = (a) => Math.atan2(Math.sin(a), Math.cos(a));
  const _pq = new THREE.Quaternion();
  const _qYaw = new THREE.Quaternion();
  const _qPitch = new THREE.Quaternion();
  const _axis = new THREE.Vector3();

  function setState(name) {
    if (name === current || !actions[name]) return;
    actions[name].reset().fadeIn(FADE).play();
    if (actions[current]) actions[current].fadeOut(FADE);
    current = name;
  }

  // p: { vx, vz, vy, speed, grounded, inWater, flying, lookYaw, lookPitch, lift }
  function update(dt, p) {
    // Heading: face movement while walking, face camera when airborne/swimming/flying.
    let targetYaw = yaw;
    if (p.flying || p.inWater || !p.grounded) targetYaw = p.lookYaw;
    else if (p.speed > 0.5) targetYaw = Math.atan2(-p.vx, -p.vz);
    const dy = wrap(targetYaw - yaw);
    yaw += dy * Math.min(1, 9 * dt);
    root.rotation.y = yaw;

    let bodyPitch = 0;
    if (p.flying) bodyPitch = THREE.MathUtils.clamp(p.lookPitch * 0.85, -1.1, 1.1);
    else if (p.inWater) bodyPitch = -1.15 + p.lookPitch * 0.4;
    root.rotation.x += (bodyPitch - root.rotation.x) * Math.min(1, 6 * dt);

    if (ready) {
      const state = p.flying ? 'fly'
        : p.inWater ? 'swim'
        : !p.grounded ? 'fall'
        : p.speed > 13.5 ? 'run'
        : p.speed > 0.5 ? 'walk' : 'idle';
      setState(state);

      // baked cycles: match the game's movement speeds (feet pump like before)
      const ts = state === 'walk' ? THREE.MathUtils.clamp(p.speed * WALK_TS, 0.6, 2.2)
        : state === 'run' ? THREE.MathUtils.clamp(p.speed * RUN_TS, 0.7, 2.0)
        : 1;
      actions[current].timeScale = ts;
      restoreLegPose();
      mixer.update(dt);
      saveLegPose();

      // feet follow the ground (slopes, steps); hips drop toward the lower foot
      const wantIK = p.groundAt && p.grounded && !p.flying && !p.inWater && (state === 'idle' || state === 'walk' || state === 'run');
      ikW += ((wantIK ? 1 : 0) - ikW) * Math.min(1, 10 * dt);
      hipDrop += (nextDrop * (wantIK ? 1 : 0) - hipDrop) * Math.min(1, 8 * dt);
      inner.position.y = hipDrop;
      if (ikW > 0.02 && legs.length === 2 && p.groundAt) {
        root.updateMatrixWorld(true);
        root.getWorldDirection(_fwd).negate(); // model faces -Z
        const base = root.position.y;
        let lowest = 0;
        for (const leg of legs) {
          leg.foot.getWorldPosition(_C);
          // where the animated foot sits relative to a flat floor, re-applied on the real ground
          const rel = _C.y - hipDrop - base;
          const gy = p.groundAt(_C.x, _C.z);
          const dy = THREE.MathUtils.clamp(gy - base, -0.45, 0.45);
          lowest = Math.min(lowest, dy);
          solveLeg(leg, gy + Math.max(0, rel), ikW);
        }
        nextDrop = THREE.MathUtils.clamp(lowest * 0.85, -0.3, 0);
      } else nextDrop = 0;

      // the cowl rises over the head in rain (or when asked); the bunched hood hides
      hoodT += ((charEnv.hoodUp ? 1 : 0) - hoodT) * Math.min(1, 4 * dt);
      if (cowl) {
        cowl.visible = hoodT > 0.03;
        cowl.scale.copy(cowl.userData.s0).multiplyScalar(0.55 + 0.45 * hoodT);
      }
      if (bunchedHood) bunchedHood.visible = hoodT < 0.5;

      // cloth + lantern (after the pose is final for this frame)
      if (cloths.length) {
        root.updateMatrixWorld(true);
        invG.copy(g.matrixWorld).invert();
        windV.set(charEnv.wind.value * 1.2, 0, charEnv.wind.value * 0.4);
        const vis = root.visible;
        for (const c of cloths) {
          c.mesh.visible = vis;
          if (vis) c.update(dt, windV);
        }
      }
      if (lanternMat) {
        const n = charEnv.night;
        lanternMat.emissiveIntensity = 1.2 + 3.2 * n + 0.35 * Math.sin(performance.now() * 0.0041);
        if (lanternLight) lanternLight.intensity = 0.08 + 0.4 * n;
      }

      // head look: conjugate world-space look rotations into the head bone's
      // parent frame, on top of whatever the clip posed the head at
      if (headBone) {
        const rel = THREE.MathUtils.clamp(wrap(p.lookYaw - yaw), -0.62, 0.62);
        lookYawS += (rel - lookYawS) * Math.min(1, 8 * dt);
        lookPitchS += (p.lookPitch * 0.45 - lookPitchS) * Math.min(1, 8 * dt);
        const parentInv = headBone.parent.getWorldQuaternion(_pq).invert();
        _qYaw.setFromAxisAngle(_axis.copy(headUp).applyQuaternion(parentInv), lookYawS);
        _qPitch.setFromAxisAngle(_axis.copy(headRight).applyQuaternion(parentInv), lookPitchS);
        headBone.quaternion.copy(_qYaw).multiply(_qPitch).multiply(headRest);
      }

      // blink: quick shut, quick open
      if (blinkHold > 0) {
        blinkHold -= dt;
        if (blinkHold <= 0) blinkIn = 2.2 + Math.random() * 3.4;
      } else {
        blinkIn -= dt;
        if (blinkIn <= 0) blinkHold = 0.13;
      }
      const eyeOpen = blinkHold > 0 ? 0.12 : 1;
      for (const e of eyes) e.scale.y += (eyeOpen - e.scale.y) * Math.min(1, 30 * dt);
    }
  }

  const _fw = new THREE.Vector3();
  return {
    root, update,
    // hide/show the whole explorer (body + cloth), e.g. for landmark photographs
    setVisible: (v) => { root.visible = v; for (const c of cloths) c.mesh.visible = v; },
    // world positions of the feet (for footstep dust)
    feet: () => (footL && footR ? [footL.getWorldPosition(new THREE.Vector3()), footR.getWorldPosition(_fw.clone())] : null),
    // world positions of the hands (for the swim stroke's splashes)
    hands: () => (handL && handR ? [handL.getWorldPosition(new THREE.Vector3()), handR.getWorldPosition(_fw.clone())] : null),
    __debug: () => ({
      ready, current,
      clips: Object.keys(actions),
      info: current && actions[current] ? {
        time: +actions[current].time.toFixed(3),
        timeScale: actions[current].timeScale,
        weight: +actions[current].getEffectiveWeight().toFixed(2),
        enabled: actions[current].isRunning(),
      } : null,
      mixerTime: mixer ? +mixer.time.toFixed(3) : null,
      headQ: headBone ? headBone.quaternion.toArray().map((v) => +v.toFixed(3)) : null,
      headRest: headRest ? headRest.toArray().map((v) => +v.toFixed(3)) : null,
      lookYawS: +lookYawS.toFixed(3),
      lookPitchS: +lookPitchS.toFixed(3),
      eyes: eyes.length,
    }),
  };
}
