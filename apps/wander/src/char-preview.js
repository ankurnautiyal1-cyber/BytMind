// Standalone rig preview for character.js — orbit camera, three lights,
// pose switcher. Driven by setInterval so it renders even in browsers that
// starve requestAnimationFrame (embedded test panes).
import * as THREE from 'three';
import { createCharacter, charEnv } from './character.js';

const renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.setSize(innerWidth, innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x2a3040);
scene.fog = new THREE.Fog(0x2a3040, 18, 60);

const camera = new THREE.PerspectiveCamera(40, innerWidth / innerHeight, 0.05, 100);

const key = new THREE.DirectionalLight(0xfff2dd, 2.6);
key.position.set(4, 7, 5);
key.castShadow = true;
key.shadow.mapSize.set(1024, 1024);
key.shadow.camera.left = -4; key.shadow.camera.right = 4;
key.shadow.camera.top = 5; key.shadow.camera.bottom = -1;
scene.add(key);
scene.add(new THREE.HemisphereLight(0xbfd4ff, 0x3a3630, 1.1));
const rim = new THREE.DirectionalLight(0x9fc0ff, 0.9);
rim.position.set(-6, 4, -5);
scene.add(rim);

const ground = new THREE.Mesh(
  new THREE.CircleGeometry(40, 48),
  new THREE.MeshStandardMaterial({ color: 0x4a5548, roughness: 1 }),
);
ground.rotation.x = -Math.PI / 2;
ground.receiveShadow = true;
scene.add(ground);

const model = createCharacter();
scene.add(model.root);

const POSES = {
  idle: { speed: 0, grounded: true },
  walk: { speed: 7, grounded: true },
  run: { speed: 22, grounded: true },
  jump: { speed: 4, grounded: false, vy: 4 },
  fly: { speed: 26, grounded: false, flying: true },
  swim: { speed: 6, grounded: false, inWater: true },
};
let pose = 'walk';
let yaw = 0;
let angle = 20; // orbit azimuth, degrees
let dist = 4.4;
let camY = 1.35;
let lookY = 1.0;
let last = performance.now();

// ?pose=idle&cam=azimuth,dist,camY,lookY[&hood=1] — deep-link a view (handy for headless screenshots)
const qs = new URLSearchParams(location.search);
if (POSES[qs.get('pose')]) pose = qs.get('pose');
if (qs.has('cam')) {
  const [a, d, y, t] = qs.get('cam').split(',').map(Number);
  angle = a; dist = d; camY = y; lookY = t ?? lookY;
}
if (qs.has('hood')) charEnv.hoodUp = true;

window.__pose = (name) => { if (POSES[name]) pose = name; };
window.__cam = (deg, d, y, ty = 1.0) => { angle = deg; dist = d; camY = y; lookY = ty; frame(); };
window.__render = () => {
  for (let i = 0; i < 30; i++) model.update(1 / 30, {
    vx: 0, vz: 0, vy: 0, speed: POSES[pose].speed, grounded: POSES[pose].grounded,
    inWater: !!POSES[pose].inWater, flying: !!POSES[pose].flying,
    lookYaw: 0, lookPitch: 0.06, lift: 0, groundAt: () => 0,
  });
  frame();
};

// compositor-independent capture: pixels straight off the drawing buffer
window.__snap = () => {
  frame();
  const src = renderer.domElement;
  const cv = document.createElement('canvas');
  const scale = Math.min(1, 900 / src.width);
  cv.width = Math.round(src.width * scale);
  cv.height = Math.round(src.height * scale);
  cv.getContext('2d').drawImage(src, 0, 0, cv.width, cv.height);
  return cv.toDataURL('image/png');
};

function frame() {
  const now = performance.now();
  const dt = Math.min((now - last) / 1000, 0.05);
  last = now;
  const p = POSES[pose];
  const vx = Math.sin(yaw) * -p.speed, vz = Math.cos(yaw) * -p.speed;
  model.update(dt, {
    vx, vz, vy: p.vy ?? (p.grounded ? 0 : -2),
    speed: p.speed, grounded: p.grounded,
    inWater: !!p.inWater, flying: !!p.flying,
    lookYaw: yaw, lookPitch: 0.06, lift: 0, groundAt: () => 0,
  });
  const a = (angle * Math.PI) / 180;
  camera.position.set(Math.sin(a) * dist, camY, Math.cos(a) * dist);
  camera.lookAt(0, lookY, 0);
  renderer.render(scene, camera);
}
frame(); // at least one frame, synchronously
setInterval(frame, 33);

addEventListener('resize', () => {
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
  frame();
});
