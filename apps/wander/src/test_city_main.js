// Throwaway harness for the New York world: same City code as the game but a
// setInterval-driven loop, so it runs even when the automation browser
// throttles requestAnimationFrame. Not wired into the app entry.
import * as THREE from 'three';
import { City } from './city.js';

const status = document.getElementById('status');

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.setSize(innerWidth, innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
document.getElementById('app').appendChild(renderer.domElement);

const scene = new THREE.Scene();
scene.fog = new THREE.Fog(0xc3d9ec, 80, 2800);
scene.background = new THREE.Color(0x9fc3e0);

const camera = new THREE.PerspectiveCamera(70, innerWidth / innerHeight, 0.3, 15000);
camera.rotation.order = 'YXZ';
camera.position.set(0, 60, 200);

const hemi = new THREE.HemisphereLight(0xbfd6ee, 0x4c5a4a, 1.0);
scene.add(hemi);
const sun = new THREE.DirectionalLight(0xfff2dc, 2.4);
sun.position.set(420, 640, 260);
sun.castShadow = true;
sun.shadow.mapSize.set(2048, 2048);
const s = 900;
Object.assign(sun.shadow.camera, { left: -s, right: s, top: s, bottom: -s, near: 50, far: 2600 });
sun.target.position.set(0, 0, 0);
scene.add(sun, sun.target);

const sky = {
  daylight: 1,
  sunDir: new THREE.Vector3(0.45, 0.7, 0.3).normalize(),
  moonDir: new THREE.Vector3(-0.4, 0.6, -0.4).normalize(),
  scene,
};
const timeU = { value: 0 };

const city = new City(scene, 20260, timeU);
status.textContent = 'building city…';
city.build().then(() => {
  city.group.visible = true;
  status.textContent = 'city ready';
});

let elapsed = 0;
setInterval(() => {
  elapsed += 0.016;
  timeU.value = elapsed;
  city.update(0.016, camera.position, elapsed, sky);
  renderer.render(scene, camera);
}, 16);

addEventListener('resize', () => {
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
});

window.__t = {
  city, camera, scene,
  setCam(x, y, z, ry = 0, pitch = 0) {
    camera.position.set(x, y, z);
    camera.rotation.set(pitch, ry, 0);
  },
  lookAtWorld(x, y, z) {
    camera.lookAt(x, y, z);
  },
  night(v) {
    sky.daylight = v;
    hemi.intensity = 0.9 + 0.1 * v;
    sun.intensity = 2.4 * v + 0.25;
  },
  time(v) {
    // crude sun swing: 0 = midnight, 0.5 = noon
    const a = (v - 0.25) * Math.PI * 2;
    sky.sunDir.set(Math.cos(a) * 0.8, Math.sin(a), 0.35).normalize();
    sun.position.copy(sky.sunDir).multiplyScalar(900);
  },
};
