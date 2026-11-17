# Wander — Visual Overhaul Plan

Goal: take the world from "working but plain" to **artistic, magical and modern**, without
changing gameplay, controls, collision, persistence or the seed-driven layout.

Written 2026-11-15. Based on a read of every file in `src/`, the three Blender build
scripts in `tools/`, the existing Blender preview renders, and live screenshots of the
running game in both worlds (day, dusk, night, gate, city street, city from the air).

### What the live game shows

- **Meadow, day:** one flat green slope under a pale grey-blue sky. No grass, no flowers,
  no texture detail, almost no trees in view. Clouds are flat grey ellipses. Falling
  leaves are the only detail.
- **Meadow, dusk and night:** almost black. The terrain is a dark green smear, the sky a
  muddy brown-grey; stars are tiny white dots. There is no sense of a magical night.
- **Character:** limbs show visible banded stripes; reads as a mannequin.
- **Ancient Gate (night):** small, dark and hard to read; the portal is a faint violet
  glow, not a swirling doorway. The moon appears as a flat pale square.
- **New York, street, day:** big grey plaza, dark-grey towers with a uniform window grid,
  a grey-green lawn strip, low-poly lollipop trees. No reflections, no street life visible.
- **New York, night:** the best-looking state. Warm window squares and the billboards
  ("WANDER · A WORLD AWAY", "TONIGHT… GATE ON BROADWAY") work, but everything else is flat
  blue-grey, and the windows are random on/off squares.

---

## 1. Why it looks plain today

| # | Cause | Where |
|---|---|---|
| 1 | **No post-processing at all.** The frame goes straight from `renderer.render` to screen: no bloom, no colour grade, no ambient occlusion, no vignette. Every emissive thing (shards, crystals, portal, neon, windows) is a flat bright colour with a sprite stuck on it. | `src/main.js:268` |
| 2 | **No environment lighting.** One sun, one moon, one hemisphere light. Nothing reflects the sky, so every material is roughness 1 and reads as matte plastic. | `src/sky.js:85-101` |
| 3 | **Primitive geometry everywhere.** Trees are a cone or a ball on a cylinder, rocks are a raw icosahedron, clouds are stretched icosahedrons, crystals are octahedrons. | `src/scenery.js:82-91,141,168` |
| 4 | **Terrain is vertex colour only.** At 10 m per vertex the ground is a smooth green gradient with no close-up detail, and the grass was removed earlier for performance. | `src/terrain.js:146-183` |
| 5 | **Water is a flat tint.** No depth colour, no shoreline foam, no reflection, constant 0.92 alpha. | `src/water.js:54-60` |
| 6 | **Sky is the stock physical model.** Accurate but generic: white-dot stars, a plain sphere moon, no clouds of its own, no night character. | `src/sky.js:65-81` |
| 7 | **City is box buildings with a flat window grid.** Random on/off squares in two colours, matte streets, no reflections, no atmosphere. The night render in `tools/city_build/tex/prev_times_night.png` shows it clearly. | `tools/build_city.py:391-580` |
| 8 | **The portal — the centrepiece — is three sine waves on a disc** plus 90 points. The crossing is a CSS fade to purple. | `src/portal.js:21-40`, `src/worlds.js:107-126` |
| 9 | **The character is lumpy**: voxel-remeshed blobs, ball hands, flat colours. | `tools/build_character.py`, `tools/preview/rest_front.png` |
| 10 | **UI is default system font on dark chips.** Functional, no identity. | `src/style.css`, `index.html` |

Items 1, 2 and 6 are global: fixing them lifts every existing asset before a single model
is rebuilt. That is why they come first.

---

## 2. Art direction: "Luminous Storybook"

One style for both worlds, so the portal feels like a door between two chapters of the
same book rather than two different games.

- **Stylised, not photoreal.** Clean sculpted shapes, soft bevels, painted gradients.
  Realism is out of reach for hand-generated assets and would look worse, not better.
- **Light is the magic.** Things glow, bloom, cast coloured light and leave trails.
  Magic is shown through light and motion, not through adding fantasy clutter.
- **Two palettes, one accent.**
  - *The Meadow (Wilds)*: warm golds and sage greens by day, teal and violet at night,
    bioluminescent flora after dusk.
  - *New York*: deep indigo and wet-asphalt black, with magenta, cyan and amber neon.
  - *Shared accent*: the portal's violet-to-aqua. It appears in shards, shrines and runes
    in the Meadow, and leaks into the city around Gateway Plaza.
- **Modern** means: cinematic grading, soft depth, generous negative space in the UI,
  real typography, smooth motion.

Each world gets a **signature hour** where it looks best, and the day cycle is tuned to
linger there: golden hour and blue-hour night for the Meadow, dusk and night for the city.

---

## 3. Phases

Ordered by visual gain per unit of work. Each phase is shippable on its own and ends with
before/after screenshots from the fixed camera bookmarks defined in Phase 0.

### Phase 0 — Baseline and guard rails (small) — DONE 2026-11-15

- Add `__wander.shot(name)` camera bookmarks: meadow spawn at noon, forest at dusk, lake
  at sunrise, shrine at night, the Ancient Gate, Times Square at night, Central Park by
  day, skyline from the air. Eight fixed views, used for every before/after comparison.
- Record baseline frame time, draw calls and triangles (`renderer.info`) in both worlds.
- Add a quality setting (low / medium / high) that later phases hang their costs on.
- **Budget:** 60 fps on this Mac at the current pixel-ratio cap; medium quality must hold
  it, high may drop to 45.

### Phase 1 — Rendering foundation (largest gain, no new assets) — DONE 2026-11-15

Shipped in `src/render/` (`quality.js`, `composer.js`, `atmosphere.js`, `grade.js`, `shots.js`)
and a rewritten `src/sky.js`. Deviations from the list below:
- **No ambient occlusion yet.** `GTAOPass` renders the scene with an override material, which
  breaks the wind-sway trees, the water shader, sprites and additive effects. Deferred; revisit
  with a custom depth-based AO once the Phase 3 assets exist.
- **MSAA instead of SMAA** on medium/high (4× on the HDR target); SMAA only on low.
- **Atmosphere is a depth-aware post pass**, not a patched fog chunk (three's built-in
  materials cannot take extra fog uniforms).
- **Shooting stars and aurora** are in; aurora shows over the Meadow only.
- Not done here: city "city-glow" fog tint, planar-style street reflections (Phase 4).
- Quality is chosen with `?q=low|medium|high` (remembered); there is no in-game toggle yet.


New `src/render/` module; `main.js` swaps `renderer.render` for a composer.

1. **Post-processing chain** (three.js `EffectComposer`, half-float target):
   render → ambient occlusion (`GTAOPass`, high only) → bloom (`UnrealBloomPass`,
   thresholded so only genuinely bright emissives bloom) → one custom grade pass
   (per-world colour grade, vignette, light film grain, slight chromatic fringe at the
   edges) → `OutputPass` → SMAA.
2. **Emissives go HDR.** Raise emissive intensity on shards, crystals, flames, lighthouse
   lamp, portal, neon, windows and lamps so they cross the bloom threshold; delete most
   of the glow-sprite crutches in `src/effects.js`.
3. **Image-based lighting.** Bake the sky into a PMREM environment map, refreshed a few
   times per in-game hour. Lets materials drop below roughness 1 and pick up sky colour.
4. **New sky** replacing the stock `Sky` addon in `src/sky.js`: a custom dome shader with
   an art-directed gradient per time of day, a sun disc with halo, a large stylised moon
   with craters and glow, coloured twinkling stars, a Milky Way band, occasional shooting
   stars, and an **aurora** over the Meadow at night.
5. **Clouds**: replace the 42 icosahedrons with a layered noise cloud shader on the dome
   (lit by sun colour, pink-edged at dusk), plus a few soft volumetric puffs near the
   horizon.
6. **Atmosphere**: height-based fog with sun in-scattering (patched into three's fog
   chunk so every material gets it), valley mist at dawn, and screen-space light shafts
   when looking toward the sun.
7. **Per-world grade presets** blended during the portal crossing.

### Phase 2 — The portal as the hero piece — DONE 2026-11-15

Shipped: `tools/build_portal.py` (gate + fragments), a rewritten `src/portal.js`,
`src/render/warp.js`, and small changes in `worlds.js`, `city.js`, `main.js`, the grade pass.
Notes and deviations:
- **The old disc was edge-on to the opening** (a rotation bug), so its swirl never showed. The
  doorway is now an arch-shaped surface in the right plane, and crossing is detected by passing
  through that plane (walk or fly), not by a sphere around its centre.
- **The window** is a per-gate cube map of the other world, drawn one face per frame only within
  150 m and refreshed every ~14 s. The city is now built quietly ~1 s after the title card appears
  (`Worlds.prepareCity`), so the first crossing no longer hitches and the window works immediately.
- **The city gate now faces down the avenue grid** (it was 29° off, so you used to arrive beside it).
- **Not done:** the plaza is runtime dressing (pool, light
  strips) rather than new geometry in `build_city.py`. (The proximity hum arrived in Phase 7.)
- Fixed in passing: the wilds gate no longer shows as a ghost while you are in New York.
- `build_assets.py` no longer generates the gate (it would overwrite the new one).

1. **Gate rebuilt in Blender** (`tools/build_portal.py`): weathered carved arch, bevelled
   stonework, rune channels as a separate emissive material that pulses, floating keystone
   fragments orbiting above, a rune circle inlaid in the ground.
2. **The disc becomes a window.** It shows the *other world* — a cube snapshot of the
   destination rendered once on arrival and refreshed slowly — seen through a rippling,
   refracting surface with a fresnel rim, flow-noise swirl and depth parallax.
3. **Particles**: GPU vortex of motes spiralling in, sparks along the rune channels, a
   soft light shaft above the arch visible from far away as a navigation beacon.
4. **Proximity response**: runes brighten, hum rises and the grade shifts toward the
   destination palette as the player approaches.
5. **Crossing**: replace the CSS fade in `src/worlds.js` with a shader transition —
   radial warp, streak tunnel, flash, settle — over about 1.2 s.
6. **City twin**: same gate, but set in a modern plaza with a reflecting pool and light
   strips so the old stone contrasts with the new city.

### Phase 3 — The Meadow — DONE (first pass) 2026-11-15

Shipped: painted terrain shader + data textures (`terrain.js`), GPU grass / wildflowers /
toadstools (`src/grass.js`), depth-aware water (`water.js`), Blender trees + rocks
(`tools/build_nature.py` → `nature_trees.glb`, `nature_rocks.glb`, loaded by `scenery.js`),
will-o'-wisps (`src/wisps.js`), and crystal shards with orbiting sparkles and a collection
burst (`orbs.js`). New quality knobs: `grass` and `trees` density per tier.
Not done (deliberately left for a second pass): tree LODs / billboard impostors and cliff
pieces; rebuilding the 12 landmark models in `build_assets.py`; remodelling the wildlife and the
night-only luminous stag; triplanar detail *textures* (the detail is procedural in the shader).
Notes: grass is a world-stable instanced grid re-mapped around the player every frame (no CPU
work, no pop); the terrain now exposes `heightTex`, `colorTex` (rgb = ground colour, a = grass
density) and `forestTex`, which the water and grass both read.


1. **Terrain shader** (`src/terrain.js`): keep the vertex-colour biome map as the base,
   add triplanar painted detail (grass, rock, sand, snow) with slope and height blending,
   a detail normal map, and soft colour variation by noise. Textures are generated in
   Blender or procedurally — still nothing downloaded.
2. **Ground cover**: a GPU-instanced ring of grass and wildflowers that follows the
   player (about 70 m radius, vertex-shader wind, fades at the edge, no shadows cast).
   This reverses the earlier grass removal — see Decision 1.
3. **Trees from Blender** (`tools/build_nature.py`): 4 species × 3 variants (pine, birch,
   broadleaf, blossom), clustered sculpted canopies with transferred normals for the soft
   "fluffy" look, vertex-colour gradient from base to tip, wind weights painted into
   vertex colour. Two LOD levels plus a billboard impostor for distance.
4. **Rocks and cliffs**: 6 sculpted rock shapes with moss on upward faces, replacing the
   icosahedron; larger cliff pieces for steep slopes.
5. **Water** (`src/water.js`): depth-based colour from turquoise shallows to deep blue,
   shoreline foam, refraction of the lakebed, sky reflection from the environment map,
   sparkle band toward the sun, caustics on the bed near shore, soft ripple rings around
   the swimming player.
6. **Night magic**: glowing mushrooms and bell-flowers in forest clearings, fireflies
   upgraded to bloom-lit trails, drifting pollen motes by day, will-o'-wisps that lead
   toward undiscovered landmarks.
7. **Landmarks**: rebuild the 12 assets in `tools/build_assets.py` with bevels, baked
   ambient occlusion in vertex colour, moss and weathering, and a magical accent each —
   rune-lit monoliths that light in sequence, shrine crystals with refraction and light
   beams, a lighthouse with a volumetric beam, lantern-strung campsites.
8. **Shards**: faceted crystal with inner glow and refraction, orbiting sparkles, a
   ribbon burst and light ring on collection.
9. **Wildlife**: remodel sheep, deer and cows as stylised low-poly animals with proper
   silhouettes; add one magical creature (a luminous stag seen only at night).

### Phase 4 — New York — DONE (first pass) 2026-11-15

Shipped: `src/city-shaders.js` (interior-mapped windows, lawn/paving paint, LED screens),
`src/city-reflect.js` (planar street reflections), `src/city-fx.js` (neon, beacons, searchlights,
crowns, torch, bridge lights, lamp cones, steam, rain, ley-lines, park lanterns), a night glow in
the sky/fog (`sky.js`), the Meadow's trees in the park and avenues, and meshopt-compressed
city assets (`tools/compress_city.sh`: ~17 MB → ~4 MB).
Notes and deviations:
- **Interior mapping** reads the original emissive texture to decide which rooms are lit, so the
  skyline's pattern of lights is unchanged; every lit window now has a room with a lamp, picture
  or TV and curtains, and some dark rooms flicker blue. Windows beyond ~110 m fade to flat colour.
- **Wet streets** use a real mirror drawn at half resolution (high) / 0.35 (medium); off on low.
  Rain (night only, drifts in and out; `__wander.setRain(0..1)`) strengthens it.
- Not done: vehicle remodel (bevels, glass), animated aircraft crossing the sky, steam-vent
  geometry, heli strobes, cable-light strings (bridge decks have light points instead).
- Bug fixes made along the way: a `pow()` of a slightly negative base produced NaN in the beacon,
  sky and flame shaders and showed up as black rectangles (bloom spreads NaN); and the Phase 3
  toadstool shader used a reserved word (`patch`) so it silently never drew — both fixed.


1. **Facades**: replace the on/off window grid with an **interior-mapping shader** —
   every window shows a fake lit room with depth, varied warm and cool tones, curtains
   and occasional flicker of a screen. Add PBR facade detail: glass with real sky
   reflection, mullions, stone trim, spandrels.
2. **Wet streets**: low-roughness asphalt with puddle masks, reflecting neon and
   headlights via the environment map plus cheap planar-style streaks.
3. **Neon and signage**: Times Square rebuilt with layered animated signs, tube-neon
   lettering, LED tickers, all in HDR so bloom carries them. Hologram plaza gets a proper
   scan-line volumetric shader.
4. **Light**: volumetric cones under streetlamps, headlight and tail-light glows with
   short trails, blinking red roof beacons, sweeping searchlights, lit bridges with
   cable-light strings, aircraft lights crossing the sky.
5. **Atmosphere**: city-glow fog tinted by district, steam rising from street vents,
   light rain option at night with streaks and splashes.
6. **Landmarks**: more detail and dedicated lighting on the Empire State (colour-changing
   crown), Chrysler crown, bridges, the torch monument.
7. **Park**: use the new Meadow trees and grass, add string lights and lanterns, so the
   park is where the two styles visibly meet.
8. **A touch of magic**: violet ley-lines in the pavement radiating from the gate through
   Gateway Plaza, fading out a few blocks in.
9. **Vehicles**: bevelled bodies, glass, emissive lamps; small upgrade, high payoff at
   street level.
10. **Asset weight**: `city_blocks.glb` is 11.9 MB and `city_ground.glb` 3.7 MB. Compress
    geometry (meshopt) and textures (KTX2) so the first crossing stays quick.

### Phase 5 — Character — DONE (first pass) 2026-11-15

Shipped: rebuilt body in `tools/build_character.py` (dense tapered limb chains + more smoothing, so the
striped lumpy limbs are gone; a mantle, hood, hip lantern, deeper jacket), `src/cloth.js` (cape + scarf
tails), `src/rim.js`, `src/player-fx.js`, grass parting in `grass.js`. Deviations: the cloth is a CPU
verlet simulation rather than a vertex shader (so it collides with the body and reacts to real
motion); the cape/scarf are engine-side, not in the glb. Not done: a fully redesigned silhouette (hood
up, different proportions), foot IK, first-person hands, and a water wake that follows the swim
stroke — the wake is emitted from the body position.

1. Rebuild in `tools/build_character.py` as a clean stylised explorer: proper hands,
   defined silhouette, hooded cloak or long scarf that trails behind.
2. Cloth motion on cloak and scarf via vertex shader driven by velocity and wind.
3. Rim-light shader so the character separates from the background at any hour.
4. Motion polish: footstep dust and grass parting, water wake, a glowing trail and
   wind streaks while flying, landing puff.

### Phase 6 — Interface — DONE (first pass) 2026-11-15

Shipped: fonts (Cormorant Garamond for titles and place names, Inter for UI, both self-hosted from
npm via `@fontsource`), a rewritten `style.css`, new `index.html` markup, `hud.js` (quiet HUD that
fades after 7 s without input, ribbon compass, circular minimap, shard counter that pulses,
cinematic discovery/arrival cards with a letterbox, parchment chart of the wilds), `journal.js`
(illustrated cards; the wilds map as parchment, the city map as a transit diagram), and `main.js`
(title-screen camera that sweeps in front of the explorer and eases into the chase camera on Enter;
landmark photographs).
Notes: the journal thumbnails are real photographs — when a landmark is found, one extra frame is
rendered from a vantage point facing it (explorer hidden), shrunk to ~14 KB and saved with the
progress; landmarks found before this change get a painted glyph card instead. Compass hides under
the place name on narrow windows. Not done: custom SVG icon set beyond the HUD glyphs (landmark
icons are still the canvas glyphs), hover tooltips on the map, and a settings panel (quality is
still `?q=`).


1. **Typography**: a display serif for titles and place names, a clean sans for UI,
   self-hosted from npm font packages (no CDN).
2. **Title screen**: drop the dark card. Slow cinematic camera orbit over the world,
   logo lock-up, a single "Enter" prompt; controls move to a compact help sheet.
3. **HUD**: slimmer, more transparent, auto-hides when idle. Custom icon set. Compass
   and minimap restyled; the Meadow map drawn as an inked parchment, the city map as a
   clean modern transit-style map.
4. **Moments**: discovery shown as a large cinematic title card with a brief
   letterbox; shard collection as a counter that pulses; world arrival as a title card
   ("New York" / "The Meadow").
5. **Journal**: illustrated cards per landmark using a rendered thumbnail of each one.
6. Rename "The Wilds" to "The Meadow" in copy if wanted — see Decision 4.

### Phase 7 — Polish and performance — DONE (first pass) 2026-11-15

Shipped: photo mode (`src/photo.js`, `src/render/dof.js`), a procedural soundscape
(`src/soundscape.js`), retuned quality tiers with an adaptive-resolution governor
(`src/render/adaptive.js`), a settings block in the controls sheet, `__wander.bench()`, README.
Notes and deviations:
- **Photo mode (`C`)**: free camera within 60 m of the explorer, depth of field that focuses on the
  centre of the frame (a 1×1 ping-pong depth probe, eased like a lens; a 40-tap gather blur whose
  radius comes from the circle of confusion in diopters, scaled by focal length), clock scrub and
  freeze, hide the explorer, thirds guides, `Enter` saves a PNG. The blur is applied to the HDR frame,
  so bright lights bloom into bokeh. Hooked into `AtmospherePass` so it can read the scene depth
  without a feedback loop.
- **Soundscape**: wind, leaves, water, birds, crickets, city hum / traffic / horns / rain, footsteps,
  landings, a muffled mix underwater, and a spatial hum from the gate (this also closes the Phase 2
  "proximity hum" item). Built and checked for correct layer levels in every situation (shore, forest,
  night, gate, city, rain, underwater) and for the one-shots firing; **it has not been listened to**, so
  the mix is a first guess.
- **Quality tuning**, measured with `__wander.bench()` on an M1 Pro at 1440×900 @2x. The old tiers did
  not meet the budget: medium ran 12–25 ms and high 24–39 ms (pixel ratio 2, 4× MSAA). 4× MSAA alone
  was ~8 ms of a 24 ms frame. Now: low 1× + SMAA, medium 1.25× + SMAA, high 1.4× + 2× MSAA and a little
  less grass. Medium is ~12–18 ms (about 55–80 fps), high ~17–27 ms (about 37–59 fps) — a touch under the
  45 fps floor in the densest meadow view. Ambient occlusion never existed, so shafts, mist and the
  street mirror are the first things a tier drops.
- **Adaptive resolution** steps the pixel ratio through 1 / .85 / .72 / .6 on sustained sag, ignores
  hitches, and reverts a step that didn't help (geometry-bound frames).
- Bugs found and fixed on the way: the city lawn shader used the reserved word `patch` (it never
  compiled, same trap as Phase 4's toadstools), and the explorer's cloth could go NaN on the first
  frame (`dt = 0`) and vanish for good.
- **Not done:** a settings panel beyond the three rows in the controls sheet, in-game quality changes
  without a reload, tree LODs / impostors (the real fix for forest frame cost), gamepad support.

### Phase 8 — Closing the open items — DONE (first pass) 2026-11-16

Everything the earlier phases listed as "not done", in the order it was tackled. Where a first pass fell
short of the original wording, that is said here.

| Open item (phase) | What shipped |
|---|---|
| Preview sheets, shared Blender helpers (§4) | `tools/lib/wander_bpy.py` (painted vertex-colour pipeline, bevel, baked AO, export, contact sheet) and a working `preview_assets.py` (the old one rendered a blank image and wrote into `public/`). The new scripts use it; the older ones (portal, character, city, nature) keep their own copies. |
| Rebuild the landmark models (P3) | `tools/build_landmarks.py`: coursed ruin tower with a broken crown, banded lighthouse with gallery + copper dome, timber-framed windmill with lattice sails, strata-banded stone arch, a lofted shipwreck hull, tent with guy ropes, campfire with tripod and kettle, runed monoliths, carved shrine pedestal. Moss, dirt, rain streaks, baked AO. Runtime (`pois.js`): a soft volumetric lighthouse beam (`beamMaterial`), monolith glyphs that light in a travelling sequence at night, a faceted iridescent shrine crystal with a light shaft and orbiting shards, lantern string lights at camps. |
| Tree LODs / impostors, cliffs (P3, P7) | Decimated far-LOD trees (`nature_trees_lod.glb`), a baked two-view cross-card impostor per species, distance binning every 0.5 s, only near + mid cast shadows (forest scene: 3.0 M → 1.6 M triangles). `build_cliffs.py` + placement on steep slopes (cliffs are modest rock stacks, not full cliff faces). |
| Wildlife remodel, luminous stag (P3) | `build_wildlife.py`: sheep (wool lumps), deer (long neck, antlers), cow (patches, horns, udder) as body/head/legs the old state machine animates, and the night-only stag: pale, glowing, antlered, with a halo and a light-mote trail; it watches from a distance and fades into the trees if you come near. |
| Vehicles (P4) | `build_vehicles.py`: bevelled bodies, glass bands, wheels with hubs and arches, mirrors, grilles, glowing lamps; ~420 faces each (a first version at 1.6–2.4 k each cost too many triangles and was slimmed). |
| Aircraft, steam stacks, heli strobes, cable lights (P4) | `city-fx.js`: three airliners with navigation lights and strobes crossing high over the city; orange-and-white steam stacks and road grates at the vents; red/white strobes on the helicopters; swags of lights drooping between posts along the bridge decks. |
| Foot IK, first-person hands, swim-stroke wake, silhouette (P5) | Two-bone foot IK that plants each foot on the real ground (slopes, steps) with hips dropping to the lower foot; `fp-hands.js` (sleeved arms, gloved hands, the lantern, bob / sprint / fly / swim poses); splashes where each hand enters or leaves the water. The "redesigned silhouette" became a **cowl that pulls up over the head** (in rain, or `U`); the body proportions themselves were not redone. |
| Icon set, map tooltips, settings panel (P6, P7) | SVG glyphs for every landmark type (journal badges, tooltips) plus UI glyphs; hover tooltips on the map (landmarks, the gate, "you are here"); `settings.js` panel (`O`) with live graphics tier, adaptive frame rate, FPS readout, volume, FOV, look sensitivity, invert Y. |
| In-game quality change, gamepad (P7) | `applyQuality()` swaps resolution, MSAA/SMAA, grass density, LOD ranges and effect flags live (tree count and the street mirror still need a reload). `gamepad.js`: sticks, buttons, photo mode, pause. |
| Ambient occlusion (P1) | `src/render/ao.js`, a depth-only 12-tap SSAO at half resolution with a depth-aware blur, applied in the atmosphere pass (medium 0.6, high 0.9, off on low); ~0.3 ms in the test scene. |
| Plaza geometry in `build_city.py` (P2) | **Not done**: the gate plaza is still runtime dressing. |

Bugs found and fixed on the way: foot IK called a missing `groundAt` while easing out (it killed the frame
loop for good); the page booted from `requestAnimationFrame`, so a hidden tab never loaded the world (now a
timer); the gamepad kept a stale button state after a controller disconnected; `__wander.step(n)` was added
to drive frames by hand when the tab is throttled.

Performance note: the 5-view bench drifts by up to ~35 % between runs on this Mac (GPU clock state), so
after this phase "medium" is still in the same 55–60 fps region but the numbers above 16.7 ms were not
re-tuned. Not verified by ear or by a person at a controller: all sound, the gamepad on real hardware.

---

## 4. How Blender is used

- **Headless scripts stay the source of truth.** Every asset remains regenerable with
  `Blender --background --python tools/<script>.py`, as today. Blender 5.2.4 is installed.
- **Shared helper module** `tools/lib/wander_bpy.py`, used by all build scripts: bevel
  and weighted normals, ambient-occlusion bake to vertex colour, gradient vertex paint,
  wind-weight paint, procedural texture bake to image, LOD decimation, glTF export.
- **New scripts**: `build_nature.py` (trees, rocks, flora, grass cards),
  `build_portal.py`, `build_textures.py` (terrain detail, noise, cloud, interior-map
  atlases). `build_assets.py`, `build_city.py` and `build_character.py` are upgraded in
  place.
- **Blender MCP server** is for interactive look-development — trying a shape or
  material live and viewing a render — before the result is written into a script.
  It is **not connected to this session**: no Blender tools are exposed here and Blender
  is not running. To use it, open Blender, start the MCP add-on, and make sure the server
  is enabled for this project. The plan works without it.
- **Preview sheets**: `tools/preview_assets.py` currently outputs a blank image
  (`public/assets/_preview.png` is two grey bands). Fix it first so every asset batch
  can be reviewed as a contact sheet before it goes into the game.

---

## 5. Files

| Area | Changed | New |
|---|---|---|
| Rendering | `src/main.js`, `src/sky.js`, `src/effects.js` | `src/render/composer.js`, `grade.js`, `atmosphere.js`, `env.js`, `quality.js` |
| Portal | `src/portal.js`, `src/worlds.js` | `src/render/transition.js`, `tools/build_portal.py` |
| Meadow | `src/terrain.js`, `src/scenery.js`, `src/water.js`, `src/pois.js`, `src/orbs.js`, `src/ambient.js`, `src/wildlife.js`, `tools/build_assets.py` | `src/grass.js`, `src/flora.js`, `tools/build_nature.py`, `tools/build_textures.py` |
| City | `src/city.js`, `tools/build_city.py` | `src/city-shaders.js` |
| Character | `src/character.js`, `src/player.js`, `tools/build_character.py` | — |
| Interface | `index.html`, `src/style.css`, `src/hud.js`, `src/journal.js`, `src/icons.js` | `src/title.js` |
| Tooling | `tools/preview_assets.py`, `package.json`, `README.md` | `tools/lib/wander_bpy.py` |

Untouched: `colliders.js`, `noise.js`, terrain height function, city layout, save format.
Collision shapes are re-derived only where a rebuilt asset changes footprint.

---

## 6. Risks

| Risk | Handling |
|---|---|
| Post-processing and grass cost frame time | Quality tiers from Phase 0; measure after every phase against the fixed bookmarks. |
| Bloom washes everything out | Threshold above 1.0 and only HDR emissives cross it; tuned per world. |
| Interior-mapping shader on 250+ buildings | It is one material per facade type, so cost is per pixel not per building; fall back to the baked window texture on low quality. |
| Rebuilt landmarks no longer match their colliders | Each build script emits footprint data alongside the glb; `pois.js` reads it. |
| Scope: this is a large body of work | Phases 1 and 2 alone change the look dramatically; everything after is incremental and can stop at any phase. |

---

## 7. Decisions (settled 2026-11-15)

1. **Grass: yes.** Player-following ring of grass and wildflowers with a quality toggle.
   The old lag came from terrain shadows, already fixed.
2. **Style: Luminous Storybook.** Stylised, soft shapes, glowing light, bloom, painterly grade.
3. **City time bias: yes.** The day cycle lingers at dusk and night while in New York; the
   Meadow keeps the normal cycle.
4. **Naming: keep "The Wilds".** No copy changes.
5. **Tooling dependencies: allowed** (assumed default, not asked). Font packages and a glTF
   compression tool from npm; the rule that all *art* is self-made stays.

---

## 8. Suggested order of execution

Phase 0 → 1 → 2, then review together. Those three give the biggest change for the least
work and set the look that Phases 3–6 are built to match. After the review: 3 → 4 → 6 → 5 → 7.
