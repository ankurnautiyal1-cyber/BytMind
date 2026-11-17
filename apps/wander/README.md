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

Regenerate the Blender-built assets (needs Blender installed). `build_assets.py` still makes the
city's buildings, streetlight and monument; everything else has its own script:

```bash
B=/Applications/Blender.app/Contents/MacOS/Blender
$B --background --python tools/build_assets.py       # city buildings, streetlight, monument
$B --background --python tools/build_landmarks.py    # the 10 Wilds landmark models (bevels, moss, baked AO)
$B --background --python tools/build_cliffs.py       # cliff pieces for steep slopes
$B --background --python tools/build_wildlife.py     # sheep, deer, cow and the luminous stag
$B --background --python tools/build_vehicles.py     # car, taxi, bus, truck
$B --background --python tools/preview_assets.py -- ruin_tower lighthouse   # contact sheet → tools/preview/sheet.png
```

The scripts share `tools/lib/wander_bpy.py` (primitives, bevel, the painted vertex-colour pipeline:
tonal noise, strata, moss, dirt, baked ambient occlusion; glb export; contact-sheet renderer).
The older scripts (portal, character, city) keep their own copies of the small helpers.

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
| `C` | **Photo mode** (see below) |
| `N` | Sound on / off |
| `O` | Settings (graphics tier, volume, field of view, look sensitivity…) |
| `U` | Hood up / down (it also goes up by itself in the rain) |
| `H` | Controls sheet |
| `Esc` | Close panels · pause / release the mouse |

A **controller** works too: sticks to move and look, `A` jump, `B` sprint, `Y` fly, `X` journal,
`LB` / `RB` camera out / in, `L3` first / third person, Select = map, Start = pause, D-pad ↑ photo mode,
↓ controls, ← sound, → settings.

### Photo mode (`C`)

The explorer holds still, the HUD hides and the camera is yours.

| Input | Action |
| --- | --- |
| `W A S D` · `Q` / `E` | Fly the camera · down / up (`Shift` fast, `Alt` slow) |
| Mouse · wheel | Look · zoom (field of view) |
| `[` `]` | Depth of field: off · soft · light · portrait · wide · macro |
| `,` `.` | Scrub the time of day (`Shift` faster) · `T` freezes the clock |
| `X` · `G` | Show / hide the explorer · rule-of-thirds guides |
| `Enter` | Save a PNG of exactly what the canvas shows |
| `C` / `Esc` | Back to the game |

Focus follows whatever is under the centre of the frame and eases like a lens; longer lenses blur
more. The camera stays within 60 m of the explorer.

## Settings (`O`)

Graphics tier (applied live: resolution, anti-aliasing, grass, shadows, effects, ambient occlusion;
tree count and the street mirror's resolution wait for the next load), adaptive frame rate, a frame-rate
readout, sound on / off and volume, field of view, look sensitivity, inverted look, reset progress. All of
it is remembered. Opening it from play pauses the game.

## Sound

No audio files — everything is synthesised (`src/soundscape.js`, `src/sfx.js`). Wind that follows the
world's gusts, leaves in forests, lapping water near shores, birds by day and crickets at night in the
Wilds; a low mains hum, far traffic, the odd horn and rain in New York; footsteps and splashes; a muffled
mix underwater; and a spatial hum from the gate that rises as you near it.

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
A quiet, glassy HUD that fades after a few seconds without input: the place name in serif with
clock and coordinates, a ribbon compass with discovered landmarks, a round minimap (inked
parchment in the wilds with fog of war, a transit diagram in the city), and a shard counter that
pulses when you collect one. Finding a landmark plays a cinematic title card (letterbox, serif
name, flavour line); crossing worlds does the same for the arrival. `M` opens the big map, `Tab`
the field journal — illustrated cards, each with a photograph taken at the moment you found the
landmark — and `H` a compact controls sheet. The title screen drifts around the explorer and eases
into the game camera on Enter.

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
The explorer is built in Blender (`tools/build_character.py`): ~90 tapered volumes fused by voxel
remesh into one smooth body (limbs are dense chains of overlapping spheres, so they read as tubes),
a 19-bone skeleton with automatic weights, hands with fingers, a shoulder mantle, a bunched hood, a
belt lantern, and six frame-baked clips (idle / walk / run / swim / fly / fall) that
`src/character.js` crossfades by movement state, adding head look and blinking. Previews of every
pose land in `tools/preview/`.

On top of the baked rig the engine adds:
- **Cloth** (`src/cloth.js`): a verlet cape from the shoulders and two scarf tails from the neck,
  simulated in world space so they trail, whip and settle with real motion, with wind, air drag and
  a body-collision pass.
- **Rim light** (`src/rim.js`): a soft rim of sky light that follows the hour, so the silhouette
  separates from any background (neon-tinted in the city).
- **Lantern**: the belt lantern glows brighter after dark and lights the cape.
- **Motion polish** (`src/player-fx.js`): footstep dust tinted by the ground (spray on wet streets),
  take-off and landing puffs, splash and foamy wake when wading, a glowing trail and wind streaks
  when flying fast. In the wilds the grass parts around you and flattens underfoot.

## Project layout

```
index.html          page shell + HUD/overlay markup
char-preview.html   standalone character rig inspector (dev tool)
tools/
  lib/wander_bpy.py   shared Blender helpers (painted vertex colours, baked AO, bevel, export, contact sheet)
  build_assets.py     city buildings, streetlight, monument → public/assets/*.glb
  build_landmarks.py  the 10 Wilds landmarks
  build_cliffs.py     cliff pieces → nature_cliffs.glb
  build_wildlife.py   animals → wildlife.glb
  build_vehicles.py   car / taxi / bus / truck
  build_nature.py     Blender headless trees + rocks (+ decimated far-LOD trees) → nature_trees(.lod).glb, nature_rocks.glb
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
  wildlife.js       herds of sheep, deer and cows (Blender models) + the night-only luminous stags
  fp-hands.js       first-person arms and the held lantern
  settings.js       settings panel (live graphics tier, volume, FOV, sensitivity…)
  gamepad.js        controller support (turns sticks/buttons into the keyboard events the game uses)
  soundscape.js     procedural ambience, footsteps, gate hum
  character.js      Blender explorer: clip state machine, head look, cloth + lantern hookup
  cloth.js          verlet cape and scarf
  rim.js            sky-colour rim light for the explorer
  player-fx.js      dust, splashes, wake, flight trail and wind streaks
  char-preview.js   rig inspector scene for char-preview.html (legacy procedural rig)
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
  icons.js          canvas glyphs + an SVG set for every landmark type and a few UI glyphs
  photo.js          photo mode (free camera, depth of field, PNG capture)
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

Ambient occlusion is a custom depth-only pass (`src/render/ao.js`, half resolution, depth-aware blur;
medium 0.6, high 0.9, off on low) — three's GTAO re-renders the scene with an override material, which
breaks the sway trees, water and sprites. Trees are binned by distance every half-second into the full
mesh, a ~30% decimated mesh and a baked cross-card impostor; only the first two cast shadows.

### Quality

`?q=low`, `?q=medium` (default) or `?q=high`, or pick one in the controls sheet (`H`); the choice
is remembered. Measured on an M1 Pro at 1440×900 @2x, GPU time per frame across the five fixed
views (bench below):

| Tier | Resolution | Anti-aliasing | Frame cost |
| --- | --- | --- | --- |
| low | 1× | SMAA | ~8–18 ms |
| medium | 1.25× | SMAA | ~12–18 ms |
| high | 1.4× | 2× MSAA | ~17–27 ms |

Pixels × MSAA is the big lever (4× MSAA on the half-float target was ~8 ms of a 24 ms frame),
which is why medium and high no longer use it. On top of the tier, an **adaptive resolution**
governor lowers the pixel ratio when the frame rate sags and restores it when there is headroom;
if fewer pixels don't help (the frame is geometry- or CPU-bound) it gives them back and stops
trying for a while. Switch it off in the controls sheet or with `?adapt=0`.

Fixed camera bookmarks for before/after comparisons:

```js
await __wander.shot('gate-night')   // see __wander.shots for every name
__wander.hold = false               // release the player afterwards
__wander.stats()                    // fps, cpu/submit ms, draw calls, triangles, resolution scale
await __wander.bench('meadow-noon') // GPU ms per frame at a bookmark (works with the tab hidden)
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
__wander.step(30)               // run frames by hand (a hidden tab throttles timers to ~1 Hz)
__wander.applyQuality('high')   // switch graphics tier live
__wander.scenery.lodStats       // trees per LOD bin (near / mid / impostor)
__wander.photo                  // photo mode state (active, pos, fov, apIdx…)
__wander.adaptive               // the resolution governor (level, enabled)
```

## Notes

- Requires a desktop browser with WebGL 2 (Chrome, Edge, Firefox, Safari).
- The terrain does not cast shadows by design — one 295k-tri mesh in the shadow
  pass was the scene's single biggest GPU cost, and trees/rocks/characters
  provide all the close-range shadows.
- The city is built lazily the first time you step through the gate, so startup
  is unchanged.
