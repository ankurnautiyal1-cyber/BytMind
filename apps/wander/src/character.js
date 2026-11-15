import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

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
    const g = gltf.scene;
    g.traverse((o) => {
      if (o.isMesh) {
        o.castShadow = true;
        o.frustumCulled = true;
      }
      if (o.name === 'EyeL' || o.name === 'EyeR') eyes.push(o);
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
  });

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
      mixer.update(dt);

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

  return {
    root, update,
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
