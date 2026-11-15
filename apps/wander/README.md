# Wander 🏔️

An explorable, procedurally generated open world built with **three.js** and **Vite** —
now with **two worlds**. The wilds (terrain, forests, lakes, wildlife, landmarks) are
generated in the browser from a single integer seed, and a swirling portal at the
world's north edge leads to **New York**: a high-rise island of neon, traffic and air
taxis. All 3D assets are made by us, generated headlessly with Blender
(`tools/build_assets.py`) — nothing is downloaded.

## Quick start

```bash
npm install
npm run dev        # → http://localhost:5173
```

Regenerate the Blender-built landmark/city assets (needs Blender installed):

```bash
/Applications/Blender.app/Contents/MacOS/Blender --background --python tools/build_assets.py
```

Rebuild the trees and rocks (tiered pines and firs, oaks, birch, blossom and autumn trees,
six mossy rocks, baked vertex colours):

```bash
/Applications/Blender.app/Contents/MacOS/Blender --background --python tools/build_nature.py
```

Rebuild the Ancient Gate (arch, rune channels, orbiting keystone fragments → `portal_gate.glb`,
`portal_fragments.glb`; add `-- --preview` to render check images into `tools/preview/`):

```bash
/Applications/Blender.app/Contents/MacOS/Blender --background --python tools/build_portal.py
```

Rebuild the player character (sculpted body, skeleton, baked clips → `character.glb`):

```bash
/Applications/Blender.app/Contents/MacOS/Blender --background --python tools/build_character.py
```

The character is an anatomically proportioned hiker (8-head canon, 1.80 m):
~90 anatomical volumes fused via voxel remesh into one organic mesh, per-face
clothing materials, a 19-bone skeleton with automatic weights, and six
frame-baked clips (idle / walk / run / swim / fly / fall) that three.js
crossfades by movement state. Renders of every pose land in `tools/preview/`.

Production build:

```bash
npm run build      # outputs to dist/ (includes public/assets/*.glb)
npm run preview
```

Want a different wild world? Append a seed to the URL: `http://localhost:5173/?seed=1234`

## Controls

| Input | Action |
| --- | --- |
| `W A S D` / arrows | Move |
| Mouse | Look (click the canvas once to capture the pointer) |
| `Shift` | Sprint (faster flight too) |
| `Space` | Jump · swim up · extra lift while flying |
| `P` (hold) | **Fly** — float upward, or steer where you look; release to fall |
| `V` | Toggle first / third person |
| `M` | Big map (fog-of-war in the wilds, street map in the city) |
| `Tab` | Field journal (discoveries, rumors, progress, reset) |
| Mouse wheel | Zoom the third-person camera |
| `Esc` | Close panels · pause / release the mouse |

## The two worlds

### The Wilds
- **Painted ground** — the terrain shader adds mottled grass patches, dune ripples on the sand,
  layered cracked rock and glittering snow on top of the biome colours, with a bump so the
  light catches it. Around you **GPU grass, wildflowers and toadstools** stand on the ground
  (wind-swayed; the flowers and toadstools glow after dark) and **will-o'-wisps** drift ahead
  toward the nearest landmark you haven't found.
- **Procedural terrain** — seeded simplex noise (continents, hills, ridged mountains),
  a mountain ring at the world's edge, and a carved snowy promontory at the north
  edge where **The Ancient Gate** waits.
- **16 landmarks to discover** — lighthouse (rotating night beam), ruined towers with
  torch flames, windmills with turning sails, stone circles with a glowing night ring,
  forest shrines with floating crystals, natural arches, shipwrecks, and live campsites
  (flickering fire, smoke, waving banner). Each is composed from Blender-built glb
  models plus procedural props, with a generated name and flavor line.
- **40 spirit shards** to collect (one near every landmark) — counter persists per seed.
- **Wildlife** — ~72 grazing animals in herds; wander/graze/flee behavior.
- **Solid world** — tree trunks, boulders and every landmark have collision:
  you're stopped at their surface, slide along them, can step onto low rocks
  and stand on top of boulders, crates and plinths (see *Collision* below).
- **Ambient life** — circling bird flocks by day, butterflies over meadows,
  fireflies at night, tumbling leaves (they dissolve before landing — nothing
  animated rests on the ground).
- **Water** — waves, sun glints, fresnel sky; wade, swim, dive.
- **Day/night cycle** — 5-minute days, dawn/dusk colors, stars, dynamic fog.

### New York (through the gate)
- After dark the city lights up: every lit window is an **interior-mapped room** (lamp, picture
  or TV, curtains), Times Square carries **tube-neon signs**, tall roofs blink red, searchlights
  sweep, the Empire State's crown cycles colour, streets go **wet with real reflections** (rain
  drifts in at night), the sky glows violet over the island, **violet ley-lines** pulse out
  from the gate, and the park hangs lanterns in the Meadow's own trees.
- A Manhattan-style island: **~250 instanced high-rises** in four Blender-built
  variants (art-deco setbacks, glass slabs, brick mid-rises with rooftop water
  towers, slim supertalls) with procedural night-window textures.
- **~190 moving cars** on avenues and cross streets, streetlights that light at dusk,
  scrolling neon billboards, a hologram plaza, a central park with trees and pond,
  a Liberty-style torch monument on its own islet (swim out!), and helicopters
  circling overhead.
- Buildings are solid — walk into them and they block you; hold `P` to fly and
  land on rooftops. Streetlight poles, park trees and the torch monument's
  stepped plinth (now climbable) collide too.
- Its own discoverable landmarks feed the same journal and map.

### The Ancient Gate
A carved stone arch ringed by glowing rune channels, with keystone fragments orbiting its
crest and a pale beacon visible across the world. The doorway is a window onto the *other*
world (a live cube-map snapshot, refreshed while you are near) — rippling, refracting, with
motes spiralling in and sparks rising off the runes; everything brightens as you approach and
the picture takes on the destination's colours. Walk (or fly) through the arch to cross: the
world stretches into a streak tunnel and floods to portal light before the new one settles in.
The twin gate in the city's Gateway Plaza (set in a reflecting pool ringed by chasing light
strips) leads back.
Your current world, all discoveries and shards persist in `localStorage` per seed.

## HUD & journal
Compass strip with nearby discovered landmarks, live minimap (fog-of-war in the
wilds, GPS-style street map in the city), clock, biome/district label, coordinates,
shard counter, discovery toasts, and the `M` map / `Tab` journal panels.

## Collision
`src/colliders.js` is a small static collision world: vertical cylinders (tree
trunks, rocks, poles) and optionally-rotated boxes (tents, monoliths, buildings,
gate pillars) in a spatial hash grid, so per-frame queries stay cheap even with
~4200 solid objects in the wilds. The player is a capsule:

- **Walls** — overlapping solids push the player out along the surface and
  slide velocity along it, so you graze past obstacles instead of sticking.
- **Steps** — tops within `STEP_H` (0.65 m) of the feet don't block; they
  become ground, so low rocks and plinths can be walked up.
- **Support** — standable tops (boulders, crates, roofs) count as ground; drop
  onto one and you land on it.
- **Camera** — the third-person boom also tests the grid, so the camera never
  clips inside a trunk or boulder.

Each world owns its own `CollisionWorld` (the wilds' is assembled from scenery,
landmarks and the gate; the city builds its own on first transit) and the
`Worlds` manager hands the active one to the player.

## Character
`src/character.js` builds a fully procedural humanoid — no model files. The rig
mirrors a real skeleton (pelvis → spine → chest → neck → head, hips → knees →
ankles, shoulders → elbows → wrists → hands with individual fingers and thumbs),
plus a sculpted face: eyes with pupils that blink, eyebrows, nose, mouth, ears,
swept hair with a nape tuft. Clothing is layered on top — jacket with collar,
scarf and zip, chest pockets, belt, backpack with bedroll and shoulder straps,
cuffed boots with soles. All animation is procedural and state-driven: walk/run
cycles with knee lift and counter-swinging elbows, breathing and weight-shift
idles, a spread-limbed airborne pose, a crawl stroke while swimming, and a
head that tracks where you're looking. Fire up `char-preview.html` to inspect
the rig in isolation (pose/camera helpers on `window`).

## Project layout

```
index.html          page shell + HUD/overlay markup
char-preview.html   standalone character rig inspector (dev tool)
tools/
  build_assets.py     Blender headless generator → public/assets/*.glb
  build_nature.py     Blender headless trees + rocks → nature_trees.glb, nature_rocks.glb
  build_portal.py     Blender headless Ancient Gate + fragments → portal_*.glb
  build_character.py  Blender headless player character → character.glb
  preview_assets.py   renders a contact sheet of the generated assets
  preview/            character pose renders (front/side/back per clip)
public/assets/      generated glb models (regeneratable)
src/
  main.js           bootstrap, game loop, persistence, start/pause flow
  noise.js          seeded simplex noise, fbm/ridged helpers
  terrain.js        height field (incl. the gate promontory), mesh, queries
  sky.js            sun/moon cycle, sky shader, lights, fog, stars
  water.js          animated water ShaderMaterial
  colliders.js      spatial-hash collision world (cylinders + boxes)
  scenery.js        instanced Blender trees (wind sway) + rocks, with colliders
  grass.js          GPU grass, wildflowers, glowing toadstools (follow the player)
  wisps.js          night wisps that lead to undiscovered landmarks
  leaves.js         falling autumn leaves (dissolve above the ground)
  wildlife.js       herds of sheep, deer and cows
  character.js      third-person humanoid rig + procedural animations
  char-preview.js   rig inspector scene for char-preview.html
  player.js         movement (walk / swim / fly), collision, camera
  pois.js           landmark sites: placement, discovery, animations
  orbs.js           collectible spirit shards
  ambient.js        bird flocks, butterflies, fireflies
  effects.js        flame shader, pooled smoke, glow sprites
  portal.js         the Ancient Gate: window cube-maps, particles, beacon, transit trigger
  city.js           the New York world (built quietly after the title screen)
  city-shaders.js   interior-mapped windows, lawn/paving paint, LED screens
  city-reflect.js   planar mirror for wet streets
  city-fx.js        neon, beacons, searchlights, rain, ley-lines, lanterns, steam
  worlds.js         dual-world manager, ground/collider delegation, transit
  journal.js        big map (M) + field journal (Tab)
  hud.js            compass, minimap, biome/time/shard readouts
  icons.js          canvas glyphs for every landmark type
  sfx.js            synthesized chimes (no audio files)
```

## Tuning knobs

| Where | Constant | Effect |
| --- | --- | --- |
| `src/terrain.js` | `WORLD_SIZE`, `TERRAIN_SEGMENTS` | World extent / mesh resolution |
| `src/terrain.js` | `baseHeight()` | Terrain shape + gate promontory |
| `src/sky.js` | `DAY_LENGTH` | Seconds per day/night cycle |
| `src/pois.js` | `TYPES` | Landmark types, counts, placement rules |
| `src/orbs.js` | `TOTAL` | Shard count |
| `src/city.js` | `ISLAND`, `AVENUES`, `STREETS`, `PARK` | City layout |
| `src/wildlife.js` | `HERD_COUNT`, species table | Animal populations |
| `src/player.js` | `WALK`, `SPRINT`, `FLY`, `JUMP`, `GRAVITY` | Movement feel |
| `src/player.js` | `BODY_R`, `BODY_H`, `STEP_H` | Collision capsule size + step-up height |

Compress the city assets after regenerating them (meshopt, ~17 MB → ~4 MB):

```bash
tools/compress_city.sh
```

## Rendering
The frame goes through an HDR pipeline (`src/render/`): scene → depth-aware atmosphere
(valley mist, sun in-scatter, light shafts) → bloom → tone map → colour grade (per-world
split-tone, vignette, grain) → optional SMAA. The sky (`src/sky.js`) is a custom dome shader
with a stylised sun and moon, coloured stars, a Milky Way, shooting stars, an aurora over
the wilds and noise clouds; it is also baked into an environment map for lighting.

Quality: `?q=low`, `?q=medium` (default) or `?q=high`; the choice is remembered.

Fixed camera bookmarks for before/after comparisons:

```js
await __wander.shot('gate-night')   // see __wander.shots for every name
__wander.hold = false               // release the player afterwards
__wander.stats()                    // fps, draw calls, triangles
```

## Debug hooks

A small handle is exposed on `window.__wander` for tinkering in the console:

```js
__wander.teleport(1200, -800)   // jump somewhere (works in both worlds)
__wander.toCity()               // step through the gate
__wander.toWilds()              // …and back
__wander.setTime(0.9)           // 0 = midnight, 0.5 = noon
__wander.discoverAll()          // reveal every landmark
__wander.collectAll()           // collect every shard
__wander.pois.sites             // poke the landmarks
```

## Notes

- Requires a desktop browser with WebGL 2 (Chrome, Edge, Firefox, Safari).
- The terrain does not cast shadows by design — one 295k-tri mesh in the shadow
  pass was the scene's single biggest GPU cost, and trees/rocks/characters
  provide all the close-range shadows.
- The city is built lazily the first time you step through the gate, so startup
  is unchanged.
