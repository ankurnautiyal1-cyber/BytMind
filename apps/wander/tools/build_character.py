#!/usr/bin/env python3
"""Build Wander's player character with Blender (headless) -> public/assets/character.glb.

Usage:
  /Applications/Blender.app/Contents/MacOS/Blender --background \
      --python tools/build_character.py

Design: an anatomically proportioned hiker (8-head canon, 1.80 m) facing +Y in
Blender space (the glTF exporter maps +Y-forward -> -Z-forward for three.js,
matching the facing convention src/character.js used before).

Pipeline:
  1. ~70 anatomical ellipsoid/box volumes (torso, limbs, head, boots) with
     region tags (skin/jacket/pants/boot/sole).
  2. Join -> voxel remesh -> smooth: one fused "clay" body.
  3. Per-face region assignment from the stored definitions -> material slots
     (crisp clothing edges, wavy organic hems).
  4. Separate detail meshes: eyes (blinkable), brows+hair, mouth, hands with
     fingers, backpack, belt, scarf.
  5. Armature (Hips->Spine->Chest->Neck->Head, shoulders/arms/legs) + automatic
     weights on the body; rigid bone-parenting for attachments.
  6. Six frame-baked loopable actions: idle, walk, run, swim, fly, fall.
  7. Export GLB (ACTIONS mode) + workbench preview renders to tools/preview/.
"""

import json
import math
import os
import struct
import sys

import bmesh
import bpy
from mathutils import Matrix, Quaternion, Vector

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.normpath(os.path.join(HERE, "..", "public", "assets"))
PREVIEW = os.path.join(HERE, "preview")
os.makedirs(OUT, exist_ok=True)
os.makedirs(PREVIEW, exist_ok=True)

FPS = 30
VOXEL = 0.012          # remesh resolution (m) — body tri budget scales as 1/voxel²
SMOOTH_REPEAT = 5      # Smooth modifier passes after remesh (limbs read as tubes, not beads)

# ---------------------------------------------------------------- palette ----

REGIONS = [  # (name, color, roughness, priority bonus for near-tie faces)
    ("sole", 0x14100d, 1.0, 0.060),
    ("boot", 0x2c2620, 1.0, 0.052),
    ("pants", 0x39465a, 0.95, 0.044),
    ("jacket", 0x9c3b20, 0.85, 0.036),
    ("skin", 0xd9a878, 0.80, 0.000),
]
DETAIL_COLORS = {
    "hair": (0x47331f, 1.0), "pack": (0x6b4f3a, 1.0), "cream": (0xe8ddc2, 1.0),
    "dark": (0x241d16, 1.0), "white": (0xf2efe9, 0.4), "iris": (0x3a2a1c, 0.35),
    "lips": (0xb5715f, 0.7),
    "cloak": (0x1d5a66, 0.9), "gold": (0xe0b24f, 0.45),
}


def make_mat(name, hexcolor, rough=0.95):
    m = bpy.data.materials.new(name)
    m.use_nodes = True
    bsdf = m.node_tree.nodes["Principled BSDF"]
    c = tuple(((hexcolor >> s) & 0xFF) / 255.0 for s in (16, 8, 0))
    bsdf.inputs["Base Color"].default_value = (*c, 1.0)
    bsdf.inputs["Roughness"].default_value = rough
    m.diffuse_color = (*c, 1.0)  # workbench preview color
    return m


MATS = {}


def clear_scene():
    bpy.ops.object.select_all(action="SELECT")
    bpy.ops.object.delete(use_global=False)
    for block in (bpy.data.meshes, bpy.data.materials, bpy.data.armatures,
                  bpy.data.actions):
        for item in list(block):
            if item.users == 0:
                block.remove(item)


# ------------------------------------------------- volume definitions ----
# Character faces +Y. Heights: crown 1.80, chin 1.56, shoulder joint 1.415,
# elbow 1.13, wrist 0.875, hip joint 0.925, knee 0.50, ankle 0.075, sole 0.
# Left side at x<0 (character right = +X, preserved through glTF export).

PART_DEFS = []  # (name, kind, region, center, radii, rot)


def ell(name, region, center, radii, rot=(0, 0, 0), fine=False):
    PART_DEFS.append(("ell", region, Vector(center), Vector(radii), rot,
                      (28, 20) if fine else (20, 14)))


def boxv(name, region, center, half, rot=(0, 0, 0)):
    PART_DEFS.append(("box", region, Vector(center), Vector(half), rot, None))


def _sm(t):
    return t * t * (3 - 2 * t)


def _interp(keys, t):
    """Smoothly interpolate [(t, value), ...]."""
    for (t0, v0), (t1, v1) in zip(keys, keys[1:]):
        if t <= t1:
            u = _sm(min(1.0, max(0.0, (t - t0) / max(1e-6, t1 - t0))))
            return v0 + (v1 - v0) * u
    return keys[-1][1]


def chain(name, region, a, b, keys, n=11, yz=(1.0, 1.0), fine=False):
    """A tapered tube of overlapping spheres from a to b; keys = [(t, radius)].
    Dense, smoothly varying spheres fuse into a clean limb (no knuckled beads)."""
    a, b = Vector(a), Vector(b)
    for i in range(n + 1):
        t = i / n
        r = _interp(keys, t)
        ell(f"{name}_{i}", region, tuple(a.lerp(b, t)), (r, r * yz[0], r * yz[1]), fine=fine)


def define_body():
    # ---- torso (jacket) ----
    ell("waist_hem", "jacket", (0, 0, 1.045), (0.135, 0.100, 0.070))
    ell("abdomen", "jacket", (0, 0.004, 1.115), (0.138, 0.102, 0.098))
    ell("lower_ribs", "jacket", (0, 0, 1.20), (0.147, 0.108, 0.092))
    ell("ribcage", "jacket", (0, 0.004, 1.29), (0.148, 0.112, 0.103))
    ell("upper_chest", "jacket", (0, 0.008, 1.372), (0.140, 0.106, 0.072))
    for side in (-1, 1):
        ell(f"pec{side}", "jacket", (0.066 * side, 0.062, 1.352), (0.074, 0.046, 0.054))
        ell(f"scap{side}", "jacket", (0.058 * side, -0.088, 1.325), (0.050, 0.032, 0.060))
        ell(f"trap{side}", "jacket", (0.102 * side, 0.004, 1.437), (0.056, 0.050, 0.044))
        # ---- arms: sleeve to the elbow, bare forearm (rolled sleeves) ----
        ell(f"delt{side}", "jacket", (0.205 * side, 0, 1.418), (0.066, 0.066, 0.066))
        chain(f"uarm{side}", "jacket", (0.215 * side, 0, 1.415), (0.218 * side, 0.010, 1.13),
              [(0.0, 0.058), (0.3, 0.055), (0.7, 0.050), (1.0, 0.046)], n=10)
        chain(f"farm{side}", "skin", (0.218 * side, 0.010, 1.13), (0.222 * side, 0.022, 0.875),
              [(0.0, 0.043), (0.3, 0.042), (0.65, 0.036), (1.0, 0.030)], n=9)

    # ---- pelvis + legs (pants) ----
    ell("hipblock", "pants", (0, 0, 0.985), (0.150, 0.112, 0.072))
    ell("crotch", "pants", (0, 0.008, 0.895), (0.092, 0.078, 0.062))
    for side in (-1, 1):
        ell(f"glut{side}", "pants", (0.070 * side, -0.056, 0.942), (0.071, 0.062, 0.068))
        ell(f"hipj{side}", "pants", (0.096 * side, 0.012, 0.908), (0.072, 0.070, 0.078))
        # thigh: hip (0.098,0,0.925) -> knee (0.104, 0.012, 0.50)
        chain(f"thigh{side}", "pants", (0.098 * side, 0, 0.925), (0.104 * side, 0.012, 0.50),
              [(0.0, 0.087), (0.35, 0.078), (0.7, 0.062), (1.0, 0.052)], n=13, yz=(0.95, 1.1))
        ell(f"knee{side}", "pants", (0.104 * side, 0.020, 0.500), (0.050, 0.050, 0.050))
        # shin: knee -> ankle (0.104, 0.006, 0.075)
        chain(f"shin{side}", "pants", (0.104 * side, 0.012, 0.50), (0.104 * side, 0.006, 0.075),
              [(0.0, 0.052), (0.25, 0.053), (0.6, 0.045), (1.0, 0.037)], n=12)
        ell(f"calf{side}", "pants", (0.104 * side, -0.012, 0.372), (0.050, 0.048, 0.070))
        # ---- boot: cuff, heel, foot, toe + flat sole ----
        ell(f"bcuff{side}", "boot", (0.104 * side, 0.006, 0.135), (0.058, 0.058, 0.088))
        ell(f"bheel{side}", "boot", (0.104 * side, -0.024, 0.062), (0.049, 0.052, 0.050))
        ell(f"bfoot{side}", "boot", (0.104 * side, 0.055, 0.050), (0.050, 0.098, 0.044))
        ell(f"btoe{side}", "boot", (0.104 * side, 0.148, 0.038), (0.047, 0.052, 0.036))
        boxv(f"bsole{side}", "sole", (0.104 * side, 0.058, 0.021), (0.056, 0.142, 0.021))

    # ---- neck + head (skin) ----
    ell("neck_lo", "skin", (0, 0, 1.475), (0.052, 0.052, 0.052))
    ell("neck_hi", "skin", (0, 0.006, 1.522), (0.050, 0.048, 0.045))
    ell("skull", "skin", (0, 0.004, 1.685), (0.093, 0.104, 0.112), fine=True)
    ell("back_head", "skin", (0, -0.028, 1.668), (0.083, 0.072, 0.092), fine=True)
    ell("jaw", "skin", (0, 0.028, 1.606), (0.070, 0.086, 0.054), fine=True)
    ell("chin", "skin", (0, 0.048, 1.588), (0.031, 0.028, 0.023), fine=True)
    ell("brow_ridge", "skin", (0, 0.072, 1.700), (0.060, 0.028, 0.020), fine=True)
    ell("nose", "skin", (0, 0.104, 1.652), (0.016, 0.026, 0.028), fine=True)
    ell("nose_b", "skin", (0, 0.094, 1.672), (0.013, 0.030, 0.014), fine=True)
    for side in (-1, 1):
        ell(f"ear{side}", "skin", (0.090 * side, 0.004, 1.662), (0.011, 0.019, 0.026), fine=True)
        ell(f"cheek{side}", "skin", (0.052 * side, 0.052, 1.634), (0.042, 0.036, 0.040), fine=True)


def spawn_volumes():
    obs = []
    for kind, region, center, radii, rot, quality in PART_DEFS:
        if kind == "ell":
            seg, ring = quality
            bpy.ops.mesh.primitive_uv_sphere_add(
                segments=seg, ring_count=ring, radius=1.0, location=tuple(center))
        else:
            bpy.ops.mesh.primitive_cube_add(size=2, location=tuple(center), rotation=rot)
        ob = bpy.context.active_object
        ob.scale = tuple(radii) if kind == "ell" else tuple(radii)
        ob.name = f"vol_{len(obs)}_{region}"
        obs.append(ob)
    return obs


def dist_to_def(p, d):
    kind, region, center, radii, rot, _q = d
    v = p - center
    dx = v.x / radii.x
    dy = v.y / radii.y
    dz = v.z / radii.z
    if kind == "box":
        return max(abs(dx), abs(dy), abs(dz)) - 1.0
    return math.sqrt(dx * dx + dy * dy + dz * dz) - 1.0


# ------------------------------------------------------------ construction ----

def build_body():
    define_body()
    obs = spawn_volumes()
    bpy.ops.object.select_all(action="DESELECT")
    for ob in obs:
        ob.select_set(True)
    bpy.context.view_layer.objects.active = obs[0]
    bpy.ops.object.join()
    body = bpy.context.active_object
    body.name = "wander_body"
    bpy.ops.object.transform_apply(location=True, rotation=True, scale=True)

    body.data.remesh_voxel_size = VOXEL
    bpy.ops.object.voxel_remesh()
    sm = body.modifiers.new("Smooth", "SMOOTH")
    sm.factor = 1.0
    try:
        sm.iterations = SMOOTH_REPEAT
    except AttributeError:  # older Blender named it repeat
        sm.repeat = SMOOTH_REPEAT
    bpy.ops.object.modifier_apply(modifier="Smooth")
    bpy.ops.object.shade_smooth()

    # per-face region -> material slots (crisp per-face clothing boundaries)
    for name, *_r in REGIONS:
        body.data.materials.append(MATS[f"char_{name}"])
    slot = {name: i for i, (name, *_r) in enumerate(REGIONS)}
    prio = {name: p for name, _c, _r, p in REGIONS}
    max_r = [max(d[3]) for d in PART_DEFS]
    mesh = body.data
    for poly in mesh.polygons:
        p = poly.center
        best, best_d = 0, 1e9
        for i, d in enumerate(PART_DEFS):
            if (p - d[2]).length > max_r[i] + 0.02:
                continue
            score = dist_to_def(p, d) - prio[d[1]]
            if score < best_d:
                best_d, best = score, slot[d[1]]
        poly.material_index = best
    return body


def join_named(name, obs):
    bpy.ops.object.select_all(action="DESELECT")
    for ob in obs:
        ob.select_set(True)
    bpy.context.view_layer.objects.active = obs[0]
    bpy.ops.object.join()
    ob = bpy.context.active_object
    ob.name = name
    bpy.ops.object.transform_apply(location=True, rotation=True, scale=True)
    bpy.ops.object.shade_smooth()  # avoid flat-shaded vertex splitting at export
    return ob


def sph(name, mat, center, radii, rot=(0, 0, 0), seg=16, ring=12):
    bpy.ops.mesh.primitive_uv_sphere_add(
        segments=seg, ring_count=ring, radius=1.0, location=center, rotation=rot)
    ob = bpy.context.active_object
    ob.name = name
    ob.scale = tuple(radii)
    ob.data.materials.append(MATS[mat])
    return ob


def cyl(name, mat, r, depth, center, rot=(0, 0, 0), seg=14):
    bpy.ops.mesh.primitive_cylinder_add(
        vertices=seg, radius=r, depth=depth, location=center, rotation=rot)
    ob = bpy.context.active_object
    ob.name = name
    ob.data.materials.append(MATS[mat])
    return ob


def torus(name, mat, major, minor, center, scale=(1, 1, 1), seg=24, ring=10):
    bpy.ops.mesh.primitive_torus_add(
        major_radius=major, minor_radius=minor,
        major_segments=seg, minor_segments=ring, location=center)
    ob = bpy.context.active_object
    ob.name = name
    ob.scale = scale
    ob.data.materials.append(MATS[mat])
    return ob


def build_details():
    """Eyes, hair+brows, mouth, hands, backpack, belt, scarf — all as separate
    objects (rigidly bone-parented later)."""
    out = {}

    # eyes: white ball + iris disc (blink = scale.y in three.js)
    for side, tag in ((-1, "L"), (1, "R")):
        eye = sph(f"eyeball_{tag}", "white", (0.040 * side, 0.086, 1.697),
                  (0.0205, 0.0205, 0.0205), seg=16, ring=12)
        iris = sph(f"iris_{tag}", "iris", (0.040 * side, 0.101, 1.697),
                   (0.0095, 0.006, 0.0095), seg=12, ring=8)
        out[f"Eye{tag}"] = join_named(f"Eye{tag}", [eye, iris])

    # hair: shell with a carved face opening, solidified, + fringe/nape/tufts
    bpy.ops.mesh.primitive_uv_sphere_add(segments=32, ring_count=24, radius=1.0,
                                         location=(0, 0.0, 1.688))
    shell = bpy.context.active_object
    shell.name = "hair_shell"
    shell.scale = (0.102, 0.112, 0.120)
    bpy.ops.object.transform_apply(scale=True)
    bm = bmesh.new()
    bm.from_mesh(shell.data)
    kill = [f for f in bm.faces if f.calc_center_median().y > 0.02
            and f.calc_center_median().z < 1.735]
    bmesh.ops.delete(bm, geom=kill, context="FACES")
    bm.to_mesh(shell.data)
    bm.free()
    sol = shell.modifiers.new("Solidify", "SOLIDIFY")
    sol.thickness = 0.012
    bpy.ops.object.modifier_apply(modifier="Solidify")
    shell.data.materials.append(MATS["hair"])
    fringe = [sph("fringe0", "hair", (0, 0.090, 1.752), (0.026, 0.024, 0.018)),
              sph("fringe1", "hair", (-0.044, 0.082, 1.744), (0.024, 0.022, 0.020)),
              sph("fringe2", "hair", (0.044, 0.082, 1.744), (0.024, 0.022, 0.020)),
              sph("nape", "hair", (0, -0.058, 1.615), (0.072, 0.060, 0.068)),
              sph("tuft_l", "hair", (-0.096, 0.008, 1.655), (0.017, 0.042, 0.048)),
              sph("tuft_r", "hair", (0.096, 0.008, 1.655), (0.017, 0.042, 0.048))]
    for side, tag in ((-1, "L"), (1, "R")):
        fringe.append(sph(f"brow_{tag}", "hair", (0.043 * side, 0.094, 1.723),
                          (0.023, 0.007, 0.006), rot=(-0.25, 0, -0.12 * side)))
    out["Hair"] = join_named("Hair", [shell] + fringe)

    # mouth: arc of small spheres (a smile)
    mouth = [sph(f"mouth{i}", "lips",
                 (i * 0.0085, 0.112 - abs(i) * 0.002, 1.602 + i * i * 0.0035),
                 (0.0058, 0.0058, 0.0058), seg=10, ring=8)
             for i in range(-2, 3)]
    out["Mouth"] = join_named("Mouth", mouth)

    # hands: palm blob + 4 curled fingers + thumb
    for side, tag in ((-1, "L"), (1, "R")):
        w = Vector((0.222 * side, 0.022, 0.875))
        parts = [sph(f"palm_{tag}", "char_skin", tuple(w + Vector((0, 0, -0.048))),
                     (0.038, 0.025, 0.048), seg=14, ring=10)]
        for k in range(4):
            fx = w.x + (k - 1.5) * 0.017
            parts.append(sph(f"finger_{tag}{k}", "char_skin", (fx, w.y + 0.006, w.z - 0.105),
                             (0.0125, 0.0125, 0.036), rot=(-0.85, 0, 0), seg=10, ring=8))
        parts.append(sph(f"thumb_{tag}", "char_skin",
                         (w.x - 0.042 * side, w.y - 0.010, w.z - 0.030),
                         (0.014, 0.014, 0.030), rot=(-0.4, 0, 0.35 * side), seg=10, ring=8))
        out[f"Hand{tag}"] = join_named(f"Hand{tag}", parts)

    # backpack + bedroll + straps (multi-material join keeps both slots)
    bp = [sph("pack_main", "pack", (0, -0.172, 1.27), (0.135, 0.078, 0.180),
              seg=20, ring=14),
          sph("pack_flap", "pack", (0, -0.178, 1.425), (0.140, 0.082, 0.050)),
          cyl("bedroll", "cream", 0.05, 0.26, (0, -0.20, 1.472), rot=(0, math.pi / 2, 0)),
          sph("strap_l", "pack", (-0.085, 0.118, 1.30), (0.021, 0.008, 0.15), rot=(0.12, 0, 0)),
          sph("strap_r", "pack", (0.085, 0.118, 1.30), (0.021, 0.008, 0.15), rot=(0.12, 0, 0)),
          sph("over_l", "pack", (-0.085, 0.0, 1.462), (0.021, 0.026, 0.052), rot=(-0.5, 0, 0)),
          sph("over_r", "pack", (0.09, 0.0, 1.462), (0.021, 0.026, 0.052), rot=(-0.5, 0, 0))]
    out["Backpack"] = join_named("Backpack", bp)

    belt = [torus("belt_band", "dark", 0.150, 0.017, (0, 0, 1.078), scale=(0.95, 0.76, 1)),
            sph("buckle", "cream", (0, 0.118, 1.078), (0.021, 0.009, 0.015))]
    out["Belt"] = join_named("Belt", belt)

    # mantle: a shoulder yoke over the jacket (the long cape hangs from it in-engine)
    bpy.ops.mesh.primitive_uv_sphere_add(segments=36, ring_count=18, radius=1.0, location=(0, 0, 0))
    man = bpy.context.active_object
    man.name = "mantle"
    man.scale = (0.272, 0.172, 0.105)
    bpy.ops.object.transform_apply(scale=True)
    bm = bmesh.new()
    bm.from_mesh(man.data)
    kill = []
    for f in bm.faces:
        c = f.calc_center_median()
        if c.z < 0.012:                                   # keep only the dome
            kill.append(f)
        elif c.z > 0.062 and abs(c.x) < 0.075 and abs(c.y) < 0.075:   # neck hole
            kill.append(f)
        elif c.y > 0.06 and abs(c.x) < 0.045:             # open at the throat
            kill.append(f)
    bmesh.ops.delete(bm, geom=kill, context="FACES")
    bm.to_mesh(man.data)
    bm.free()
    man.location = (0, -0.012, 1.428)
    bpy.ops.object.transform_apply(location=True)
    sol = man.modifiers.new("Solidify", "SOLIDIFY")
    sol.thickness = 0.014
    bpy.ops.object.modifier_apply(modifier="Solidify")
    man.data.materials.append(MATS["cloak"])
    trim = torus("mantle_trim", "gold", 0.225, 0.0075, (0, -0.012, 1.432), scale=(1.2, 0.77, 1.0), seg=40, ring=8)
    out["Mantle"] = join_named("Mantle", [man, trim])

    # hood: bunched cloth resting behind the neck
    hood = [sph("hood_a", "cloak", (0, -0.092, 1.512), (0.098, 0.082, 0.072), seg=20, ring=14),
            sph("hood_b", "cloak", (0.050, -0.070, 1.530), (0.050, 0.050, 0.050)),
            sph("hood_c", "cloak", (-0.050, -0.070, 1.530), (0.050, 0.050, 0.050)),
            sph("hood_tip", "cloak", (0, -0.150, 1.488), (0.034, 0.045, 0.060), rot=(0.5, 0, 0))]
    out["Hood"] = join_named("Hood", hood)

    # a little lantern on the right hip: glass, gold cap and base, a loop of cord
    lan = [sph("lantern_glass", "lantern", (0.158, 0.038, 0.935), (0.030, 0.030, 0.038), seg=16, ring=12),
           cyl("lantern_cap", "gold", 0.026, 0.012, (0.158, 0.038, 0.976), seg=12),
           cyl("lantern_base", "gold", 0.024, 0.010, (0.158, 0.038, 0.893), seg=12),
           torus("lantern_loop", "gold", 0.014, 0.0035, (0.158, 0.038, 0.996), scale=(1, 0.4, 1), seg=12, ring=6),
           cyl("lantern_cord", "dark", 0.0025, 0.07, (0.150, 0.036, 1.03), rot=(0, 0.18, 0), seg=6)]
    out["Lantern"] = join_named("Lantern", lan)

    out["Scarf"] = torus("scarf", "cream", 0.068, 0.016, (0, 0.008, 1.49), scale=(1, 0.95, 1))
    bpy.ops.object.shade_smooth()
    return out


# ------------------------------------------------------------------ rig ----

BONES = [  # (name, head, tail, parent)
    ("Hips", (0, 0, 0.975), (0, 0, 1.08), None),
    ("Spine", (0, 0, 1.08), (0, 0, 1.23), "Hips"),
    ("Chest", (0, 0, 1.23), (0, 0, 1.43), "Spine"),
    ("Neck", (0, 0, 1.43), (0, 0, 1.555), "Chest"),
    ("Head", (0, 0, 1.555), (0, 0, 1.76), "Neck"),
    ("Shoulder_L", (-0.07, 0, 1.415), (-0.205, 0, 1.418), "Chest"),
    ("Shoulder_R", (0.07, 0, 1.415), (0.205, 0, 1.418), "Chest"),
    ("UpperArm_L", (-0.215, 0, 1.415), (-0.218, -0.010, 1.13), "Shoulder_L"),
    ("UpperArm_R", (0.215, 0, 1.415), (0.218, 0.010, 1.13), "Shoulder_R"),
    ("Forearm_L", (-0.218, -0.010, 1.13), (-0.222, -0.022, 0.875), "UpperArm_L"),
    ("Forearm_R", (0.218, 0.010, 1.13), (0.222, 0.022, 0.875), "UpperArm_R"),
    ("Hand_L", (-0.222, -0.022, 0.875), (-0.222, -0.030, 0.74), "Forearm_L"),
    ("Hand_R", (0.222, 0.022, 0.875), (0.222, 0.030, 0.74), "Forearm_R"),
    ("Thigh_L", (-0.098, 0, 0.925), (-0.104, -0.012, 0.50), "Hips"),
    ("Thigh_R", (0.098, 0, 0.925), (0.104, 0.012, 0.50), "Hips"),
    ("Shin_L", (-0.104, -0.012, 0.50), (-0.104, -0.006, 0.075), "Thigh_L"),
    ("Shin_R", (0.104, 0.012, 0.50), (0.104, 0.006, 0.075), "Thigh_R"),
    ("Foot_L", (-0.104, -0.006, 0.075), (-0.104, -0.24, 0.055), "Shin_L"),
    ("Foot_R", (0.104, 0.006, 0.075), (0.104, 0.24, 0.055), "Shin_R"),
]

ATTACH_BONES = {  # rigid attachment object -> bone
    "EyeL": "Head", "EyeR": "Head", "Hair": "Head", "Mouth": "Head",
    "HandL": "Hand_L", "HandR": "Hand_R", "Backpack": "Chest",
    "Mantle": "Chest", "Hood": "Chest", "Lantern": "Hips",
}
SKINNED_EXTRAS = ("Belt", "Scarf")  # auto-weighted so they flex with the body


def build_armature():
    ad = bpy.data.armatures.new("WanderRig")
    arm = bpy.data.objects.new("WanderRig", ad)
    bpy.context.scene.collection.objects.link(arm)
    bpy.context.view_layer.objects.active = arm
    bpy.ops.object.mode_set(mode="EDIT")
    ebs = {}
    for name, head, tail, parent in BONES:
        eb = ad.edit_bones.new(name)
        eb.head, eb.tail = head, tail
        eb.roll = 0.0
        ebs[name] = eb
    for name, _h, _t, parent in BONES:
        if parent:
            ebs[name].parent = ebs[parent]
    bpy.ops.object.mode_set(mode="OBJECT")
    return arm


def skin_body(body, arm):
    bpy.ops.object.select_all(action="DESELECT")
    body.select_set(True)
    arm.select_set(True)
    bpy.context.view_layer.objects.active = arm
    bpy.ops.object.parent_set(type="ARMATURE_AUTO")


ARM_BONES = {"Shoulder_L", "Shoulder_R", "UpperArm_L", "UpperArm_R",
             "Forearm_L", "Forearm_R", "Hand_L", "Hand_R"}


def prune_cross_weights(body, armpit_z=1.34):
    """Bone-heat leaks across the small gap between the hanging arm and the
    waist: hip vertices pick up arm weights and get dragged when the arm
    swings. Ownership is decided geometrically (nearest anatomical volume,
    same metric as the material pass): arm-chain volumes own their surface,
    everything else belongs to the body. Below the armpit line, weights from
    the other side are dropped and the rest renormalized."""
    mesh = body.data
    vgs = body.vertex_groups
    names = {vg.index: vg.name for vg in vgs}
    max_r = [max(d[3]) for d in PART_DEFS]
    arm_parts = {i for i, d in enumerate(PART_DEFS)
                 if d[0].startswith(("delt", "uarm", "farm"))}
    body_parts = [i for i in range(len(PART_DEFS)) if i not in arm_parts]
    prio = {name: pr for name, _c, _r, pr in REGIONS}
    for v in mesh.vertices:
        if v.co.z > armpit_z:
            continue  # shoulder zone keeps its natural blend
        # inside any torso/leg volume -> body owns the surface, no matter what
        # bone heat says (the arm hangs right against the waist)
        inside_body = False
        for i in body_parts:
            d = PART_DEFS[i]
            if (v.co - d[2]).length > max_r[i] + 0.02:
                continue
            if dist_to_def(v.co, d) <= 0.02:
                inside_body = True
                break
        pairs = [(g.group, g.weight) for g in v.groups if g.weight > 1e-4]
        if not pairs:
            continue
        dom = max(pairs, key=lambda pg: pg[1])[0]
        if inside_body:
            v_is_arm = False
        else:
            # on the arm's own surface (outside every body volume): arm-owned
            # when an arm bone dominates, else by nearest-part fallback
            best, best_d = None, 1e9
            for i, d in enumerate(PART_DEFS):
                if (v.co - d[2]).length > max_r[i] + 0.02:
                    continue
                score = dist_to_def(v.co, d) - prio[d[1]]
                if score < best_d:
                    best_d, best = score, i
            v_is_arm = (names.get(dom, "") in ARM_BONES) or (
                best is not None and best in arm_parts)
        keep = [(gi, w) for gi, w in pairs
                if (names.get(gi, "") in ARM_BONES) == v_is_arm]
        if not keep:
            continue
        total = sum(w for _gi, w in keep)
        for gi, _w in pairs:
            vgs[gi].add([v.index], 0.0, "REPLACE")
        for gi, w in keep:
            vgs[gi].add([v.index], w / total, "REPLACE")


def attach_to_bone(ob, arm, bone_name):
    """Rigid attachment: world transform preserved at rest, follows the bone.
    Blender's BONE-parent frame origin sits at the bone TAIL (verified
    empirically), so the parent inverse must use the tail frame."""
    bone = arm.pose.bones[bone_name].bone
    tail_frame = bone.matrix_local @ Matrix.Translation((0, bone.length, 0))
    ob.parent = arm
    ob.parent_type = "BONE"
    ob.parent_bone = bone_name
    ob.matrix_parent_inverse = tail_frame.inverted()
    ob.matrix_basis = Matrix.Identity(4)


# ------------------------------------------------------------- animation ----
# Pose deltas are composed as armature-space rotations, then conjugated into
# each bone's rest frame: L' = R_rest^-1 @ q @ R_rest. Axis mapping from the
# old character.js local-axis conventions (verified against facing +Y):
#   js rotation.x = a  ->  rotX(+a)      (swing forward/back)
#   js rotation.z = a  ->  rotY(-a)      (sideways spread)
#   js rotation.y = a  ->  rotZ(+a)      (yaw/twist)

AX = (Vector((1, 0, 0)), Vector((0, 1, 0)), Vector((0, 0, 1)))
X, Y, Z = 0, 1, 2


class Poser:
    def __init__(self, arm):
        self.arm = arm
        self.rest = {}
        self.rest_rot_inv = {}
        self.rest_m3_inv = {}
        for pb in arm.pose.bones:
            m = pb.bone.matrix_local
            q = m.to_quaternion()
            self.rest[pb.name] = q
            self.rest_rot_inv[pb.name] = q.inverted()
            self.rest_m3_inv[pb.name] = q.to_matrix().inverted()

    def reset(self):
        for pb in self.arm.pose.bones:
            pb.rotation_quaternion = (1, 0, 0, 0)
            pb.location = (0, 0, 0)

    def rots(self, name, *terms):
        """terms: (axis_index, angle) in application order."""
        q = Quaternion((1, 0, 0), 0)
        for axis, ang in terms:
            q = Quaternion(AX[axis], ang) @ q
        pb = self.arm.pose.bones[name]
        pb.rotation_quaternion = self.rest_rot_inv[name] @ q @ self.rest[name]

    def loc(self, name, v):
        pb = self.arm.pose.bones[name]
        pb.location = self.rest_m3_inv[name] @ Vector(v)


def action_fcurves(act):
    """Blender <5: act.fcurves. Blender >=4.4: slotted actions (layers/strips)."""
    if hasattr(act, "fcurves"):
        yield from act.fcurves
        return
    for layer in act.layers:
        for strip in layer.strips:
            for cb in strip.channelbags:
                yield from cb.fcurves


def bake_clip(arm, poser, name, nframes, frame_pose, loc_bones=("Hips",)):
    act = bpy.data.actions.new(name)
    ad = arm.animation_data_create()
    ad.action = act
    for f in range(nframes):
        poser.reset()
        frame_pose(f / FPS, f)
        for pb in arm.pose.bones:
            pb.keyframe_insert("rotation_quaternion", frame=f)
            if pb.name in loc_bones:
                pb.keyframe_insert("location", frame=f)
    fcs = list(action_fcurves(act))
    for fc in fcs:
        for kp in fc.keyframe_points:
            kp.interpolation = "LINEAR"
    track = ad.nla_tracks.new()
    strip = track.strips.new(name, int(act.frame_range[0]) if hasattr(act, "frame_range") else 0, act)
    strip.extrapolation = "NOTHING"  # keep the rest pose when the playhead is outside
    track.name = f"clip_{name}"
    print(f"  baked {name}: {nframes} frames, {len(fcs)} fcurves")
    return act


def make_poses(poser):
    P = poser

    def idle(t, _f):
        br = math.sin(math.tau * 1.75 * t)          # 7 cycles / 4 s
        sway_s = math.sin(math.tau * 1.25 * t)      # 5 cycles
        shift = math.sin(math.tau * 0.5 * t)        # 2 cycles
        drift = math.sin(math.tau * 0.25 * t)       # 1 cycle
        P.rots("Chest", (X, br * 0.014))
        P.rots("Spine", (X, br * 0.008))
        P.rots("Neck", (Z, drift * 0.07), (X, math.sin(math.tau * 0.25 * t + 1.3) * 0.04))
        for i, tag in enumerate(("L", "R")):
            s = -1 if tag == "L" else 1
            P.rots(f"UpperArm_{tag}", (X, sway_s * 0.02 * (1 if i == 0 else -1)),
                   (Y, -(0.085 * s)))
            P.rots(f"Forearm_{tag}", (X, 0.18 + math.sin(math.tau * 1.25 * t + i * math.pi) * 0.03))
        P.loc("Hips", (shift * 0.012, 0, 0.004 * math.sin(math.tau * 0.5 * t)))
        P.rots("Hips", (Z, shift * 0.02))

    def walk(t, _f):
        ph = math.tau * t / 0.7333                  # cycle 0.733 s
        sw, cw2 = math.sin(ph), math.cos(ph)
        for tag, dir in (("L", 1), ("R", -1)):
            s = -1 if tag == "L" else 1
            hip = sw * 0.62 * dir
            bend = 0.06 + max(0.0, cw2 * dir) * 0.9
            P.rots(f"Thigh_{tag}", (X, hip))
            P.rots(f"Shin_{tag}", (X, -bend))
            P.rots(f"Foot_{tag}", (X, -bend * 0.35 + hip * 0.25))
            P.rots(f"UpperArm_{tag}", (X, -sw * 0.48 * dir), (Y, -(0.06 * s)))
            elbow = 0.22 + max(0.0, -sw * dir) * 0.55 + 0.12
            P.rots(f"Forearm_{tag}", (X, elbow))
            P.rots(f"Hand_{tag}", (X, elbow * 0.22))
        P.rots("Spine", (X, 0.10))
        P.rots("Chest", (Z, sw * 0.09))
        P.rots("Hips", (Z, -sw * 0.05))
        P.loc("Hips", (sw * 0.022, 0, abs(cw2) * 0.04))

    def run(t, _f):
        ph = math.tau * t / 0.3667                  # cycle 0.367 s
        sw, cw2 = math.sin(ph), math.cos(ph)
        for tag, dir in (("L", 1), ("R", -1)):
            s = -1 if tag == "L" else 1
            hip = sw * 0.78 * dir
            bend = 0.25 + max(0.0, cw2 * dir) * 1.15
            P.rots(f"Thigh_{tag}", (X, hip))
            P.rots(f"Shin_{tag}", (X, -bend))
            P.rots(f"Foot_{tag}", (X, -bend * 0.35 + hip * 0.30))
            P.rots(f"UpperArm_{tag}", (X, -sw * 0.85 * dir), (Y, -(0.09 * s)))
            P.rots(f"Forearm_{tag}", (X, 0.55 + max(0.0, -sw * dir) * 0.75))
        P.rots("Spine", (X, 0.22))
        P.rots("Chest", (Z, sw * 0.12))
        P.rots("Hips", (Z, -sw * 0.06))
        P.loc("Hips", (sw * 0.02, 0, abs(cw2) * 0.05))

    def swim(t, _f):
        T = 1.2
        for tag in ("L", "R"):
            s = -1 if tag == "L" else 1
            off = 0 if tag == "L" else math.pi
            stroke = math.sin(math.tau * 2 * t / T + off)
            P.rots(f"UpperArm_{tag}", (X, -1.7 + stroke * 1.15), (Y, -(0.45 * s)))
            grab = math.sin(math.tau * 2 * t / T + off + 0.9)
            P.rots(f"Forearm_{tag}", (X, 0.45 + max(0.0, grab) * 0.85))
            kick = math.sin(math.tau * 6 * t / T + off)
            P.rots(f"Thigh_{tag}", (X, kick * 0.3))
            P.rots(f"Shin_{tag}", (X, -(0.16 + max(0.0, kick) * 0.3)))
            P.rots(f"Foot_{tag}", (X, -0.45))
        P.rots("Spine", (X, 0.05))

    def fly(t, _f):
        flutter = math.sin(math.tau * 9 * t) * 0.08  # 18 cycles / 2 s
        for tag in ("L", "R"):
            s = -1 if tag == "L" else 1
            P.rots(f"UpperArm_{tag}", (X, -2.75), (Y, -(0.14 * s)))
            P.rots(f"Forearm_{tag}", (X, 0.18))
            P.rots(f"Hand_{tag}", (X, 0.35))
            i = 0 if tag == "L" else 1
            P.rots(f"Thigh_{tag}", (X, (0.06 if i == 0 else 0.02) + flutter * (1 if i == 0 else -1)))
            P.rots(f"Shin_{tag}", (X, -0.28))
            P.rots(f"Foot_{tag}", (X, -0.3))
        P.rots("Spine", (X, 0.08))

    def fall(t, _f):
        w = math.sin(math.tau * 2 * t)
        for tag in ("L", "R"):
            s = -1 if tag == "L" else 1
            i = 0 if tag == "L" else 1
            P.rots(f"UpperArm_{tag}", (X, -0.5 + w * 0.05 * i), (Y, -(0.6 * s)))
            P.rots(f"Forearm_{tag}", (X, 0.45))
            if tag == "L":
                P.rots(f"Thigh_{tag}", (X, 0.38), (Y, 0.05))
                P.rots(f"Shin_{tag}", (X, -0.45))
                P.rots(f"Foot_{tag}", (X, 0.10))
            else:
                P.rots(f"Thigh_{tag}", (X, -0.22), (Y, -0.05))
                P.rots(f"Shin_{tag}", (X, -0.28))
                P.rots(f"Foot_{tag}", (X, -0.20))
        P.rots("Spine", (X, 0.08 + w * 0.05))

    return {"idle": (idle, 120), "walk": (walk, 22), "run": (run, 11),
            "swim": (swim, 36), "fly": (fly, 60), "fall": (fall, 30)}


# ----------------------------------------------------------- export/verify ----

def export_glb():
    path = os.path.join(OUT, "character.glb")
    bpy.ops.object.select_all(action="SELECT")
    bpy.ops.export_scene.gltf(
        filepath=path, export_format="GLB", use_selection=True,
        export_yup=True, export_apply=False,
        export_animation_mode="ACTIONS", export_anim_single_armature=True,
        export_skins=True)
    size = os.path.getsize(path)
    with open(path, "rb") as fh:
        magic, _ver, _len = struct.unpack("<4sII", fh.read(12))
        clen, ctype = struct.unpack("<I4s", fh.read(8))
        j = json.loads(fh.read(clen))
    anims = [a.get("name", "?") for a in j.get("animations", [])]
    tris = 0
    for m in j.get("meshes", []):
        for p in m.get("primitives", []):
            if "indices" in p:
                tris += j["accessors"][p["indices"]]["count"] // 3
    print(f"EXPORT {path}: {size} bytes, {tris} tris")
    print(f"ANIMATIONS({len(anims)}): {anims}")
    print(f"MATERIALS: {[m.get('name') for m in j.get('materials', [])]}")
    if set(anims) != {"idle", "walk", "run", "swim", "fly", "fall"}:
        print("WARNING: expected the 6 movement clips in the GLB")
    return path


def render_previews(arm, actions):
    scene = bpy.context.scene
    # Workbench/EEVEE render blank when headless (no GPU context) — Cycles CPU works.
    scene.render.engine = "CYCLES"
    scene.cycles.samples = 24
    scene.cycles.use_denoising = False
    scene.cycles.device = "CPU"
    scene.render.resolution_x = 640
    scene.render.resolution_y = 820
    scene.render.image_settings.file_format = "PNG"
    world = bpy.data.worlds.new("char_world")
    world.use_nodes = True
    world.node_tree.nodes["Background"].inputs[0].default_value = (0.9, 0.9, 0.92, 1)
    world.node_tree.nodes["Background"].inputs[1].default_value = 1.0
    scene.world = world

    def cam(name, loc, rot):
        cd = bpy.data.cameras.new(name)
        cd.lens = 50
        c = bpy.data.objects.new(name, cd)
        scene.collection.objects.link(c)
        c.location, c.rotation_euler = loc, [math.radians(a) for a in rot]
        return c

    views = {
        "front": cam("front", (0, 3.4, 1.75), (76, 0, 180)),
        "side": cam("side", (-3.4, 0, 1.75), (76, 0, -90)),
        "back": cam("back", (0, -3.4, 1.75), (76, 0, 0)),
    }
    shots = [("rest_front", "front", None, 0), ("rest_side", "side", None, 0),
             ("rest_back", "back", None, 0),
             ("walk_front", "front", "walk", 6), ("walk_side", "side", "walk", 6),
             ("run_front", "front", "run", 3), ("run_side", "side", "run", 3),
             ("fly_side", "side", "fly", 15), ("swim_side", "side", "swim", 9),
             ("fall_front", "front", "fall", 8)]
    ad = arm.animation_data
    for track in ad.nla_tracks:
        track.mute = True
    for shot, view, act_name, frame in shots:
        scene.camera = views[view]
        if act_name:
            ad.action = actions[act_name]
            scene.frame_set(frame)
            bpy.context.view_layer.update()
        scene.render.filepath = os.path.join(PREVIEW, f"{shot}.png")
        bpy.ops.render.render(write_still=True)
        print(f"  preview {shot}.png")
        ad.action = None
        scene.frame_set(0)
    for track in ad.nla_tracks:
        track.mute = False


# -------------------------------------------------------------------- run ----

def rest_pose_for_export(arm):
    """The exporter reads bone node transforms from the evaluated pose, so the
    armature MUST be at rest when exporting (strips stay unmuted — muted
    strips are skipped by the exporter; extrapolation NOTHING + playhead
    beyond every strip keeps the evaluated pose at rest)."""
    ad = arm.animation_data
    for track in ad.nla_tracks:
        track.mute = False
    ad.action = None
    for pb in arm.pose.bones:
        pb.rotation_quaternion = (1, 0, 0, 0)
        pb.location = (0, 0, 0)
    scene = bpy.context.scene
    scene.frame_set(10000)  # beyond every strip end -> nothing evaluated
    bpy.context.view_layer.update()


def main():
    clear_scene()
    bpy.context.scene.render.fps = FPS  # exporter converts frames -> seconds via scene fps
    for name, hexc, rough, _prio in REGIONS:
        MATS[f"char_{name}"] = make_mat(f"char_{name}", hexc, rough)
    for name, (hexc, rough) in DETAIL_COLORS.items():
        MATS[name] = make_mat(f"char_{name}", hexc, rough)
    # the lantern glass glows (the engine pulses it, and bloom does the rest)
    lm = bpy.data.materials.new("char_lantern")
    lm.use_nodes = True
    b = lm.node_tree.nodes["Principled BSDF"]
    b.inputs["Base Color"].default_value = (1.0, 0.72, 0.35, 1.0)
    for n in ("Emission Color", "Emission"):
        if b.inputs.get(n) is not None:
            b.inputs[n].default_value = (1.0, 0.72, 0.35, 1.0)
            break
    if b.inputs.get("Emission Strength") is not None:
        b.inputs["Emission Strength"].default_value = 3.0
    MATS["lantern"] = lm
    print("[1/5] building fused body...")
    body = build_body()
    print(f"  body: {len(body.data.polygons)} faces, {len(body.data.materials)} materials")

    print("[2/5] details...")
    details = build_details()

    print("[3/5] rig + skinning...")
    arm = build_armature()
    skin_body(body, arm)
    prune_cross_weights(body)
    for obj_name, bone in ATTACH_BONES.items():
        attach_to_bone(details[obj_name], arm, bone)
    for obj_name in SKINNED_EXTRAS:
        skin_body(details[obj_name], arm)

    print("[4/5] baking clips...")
    poser = Poser(arm)
    actions = {}
    for name, (fn, nframes) in make_poses(poser).items():
        actions[name] = bake_clip(arm, poser, name, nframes, fn)

    print("[5/5] export + previews...")
    if os.environ.get("CHAR_POSE_PROBE"):  # numeric attachment-follow check
        ad = arm.animation_data
        ad.action = actions["fall"]
        bpy.context.scene.frame_set(8)
        bpy.context.view_layer.update()
        wrist = (arm.matrix_world @ arm.pose.bones["Hand_L"].matrix).to_translation()
        palm = details["HandL"].matrix_world @ Vector((-0.222, 0.022, 0.827))
        print("PROBE wrist:", tuple(round(v, 3) for v in wrist))
        print("PROBE palm :", tuple(round(v, 3) for v in palm))
        sys.exit(0)
    rest_pose_for_export(arm)
    export_glb()
    render_previews(arm, actions)
    print("character build OK")


if __name__ == "__main__":
    try:
        main()
    except Exception as exc:
        print("CHARACTER BUILD FAILED:", repr(exc))
        import traceback
        traceback.print_exc()
        sys.exit(1)
