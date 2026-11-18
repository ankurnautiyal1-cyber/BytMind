#!/usr/bin/env python3
"""Build Wander's player character with Blender (headless) -> public/assets/character.glb.

Usage:
  /Applications/Blender.app/Contents/MacOS/Blender --background \
      --python tools/build_character.py

Design: a stylised, friendly trail-hiker (~7.3-head canon, 1.82 m) facing +Y in
Blender space (the glTF exporter maps +Y-forward -> -Z-forward for three.js,
matching the facing convention src/character.js uses).

Pipeline:
  1. ~190 anatomical ellipsoid/box volumes (torso, limbs, head, boots), each tagged
     with a region (skin/jacket/pants/boot/sole) and a deformation group.
  2. Join -> voxel remesh -> smooth: one fused "clay" body.
  3. Per-face region assignment from the volume definitions -> material slots.
  4. Separate detail meshes: eyes (blinkable, origin at the eye), brows + swept
     hair, smile, leather gloves, goggles, backpack, belt, scarf, jacket trim
     (zipper / pocket flaps), boot laces.
  5. Armature (Hips->Spine->Chest->Neck->Head, shoulders/arms/legs). Body weights
     are computed geometrically: each vertex is soft-assigned to the deformation
     group of its nearest volumes (axial / arm / leg) and blended along that
     group's bone chain by height (no bone-heat bleeding between arm and hip).
     Skinned trim copies the body's weights; the rest is rigidly bone-parented.
  6. Six frame-baked loopable actions: idle, walk, run, swim, fly, fall.
  7. Ambient occlusion + a little face blush baked into vertex colours (COLOR_0).
  8. Export GLB (ACTIONS mode) + Cycles preview renders to tools/preview/.

Env overrides (for staging): WANDER_CHAR_OUT (glb dir), WANDER_CHAR_PREVIEW (png dir).
"""

import json
import math
import os
import struct
import sys

import bmesh
import bpy
import numpy as np
from mathutils import Matrix, Quaternion, Vector, noise
from mathutils.bvhtree import BVHTree

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.environ.get("WANDER_CHAR_OUT") or os.path.normpath(os.path.join(HERE, "..", "public", "assets"))
PREVIEW = os.environ.get("WANDER_CHAR_PREVIEW") or os.path.join(HERE, "preview")
os.makedirs(OUT, exist_ok=True)
os.makedirs(PREVIEW, exist_ok=True)

FPS = 30
VOXEL = 0.010          # remesh resolution (m) — body tri budget scales as 1/voxel²
SMOOTH_REPEAT = 6      # Smooth modifier passes after remesh (limbs read as tubes, not beads)
GOGGLES_DOWN = True    # True: swim goggles over the eyes (as in the reference photo); False: pushed up on the hair

# ---------------------------------------------------------------- palette ----

REGIONS = [  # (name, color, roughness, priority bonus for near-tie faces)
    ("sole", 0x1a1411, 1.0, 0.060),
    ("boot", 0x5a3d2a, 0.9, 0.052),
    ("pants", 0x2f4c7c, 0.95, 0.044),
    ("jacket", 0xc2441a, 0.85, 0.036),
    ("skin", 0xc8845a, 0.7, 0.000),
]
DETAIL_COLORS = {
    "hair": (0x17120e, 0.55), "pack": (0x7c5638, 1.0), "cream": (0xeadfc4, 1.0),
    "dark": (0x2a2118, 1.0), "white": (0xf6f3ee, 0.35), "iris": (0x5a3a1e, 0.3),
    "pupil": (0x120d0a, 0.3), "lips": (0xa85a4c, 0.6),
    "beard": (0xffffff, 0.9), "teeth": (0xf2ede0, 0.35), "mouth_in": (0x3b1c18, 0.8),
    "goggle_blue": (0x1f6a98, 0.45),
    "cloak": (0x1d5a66, 0.9), "gold": (0xe0b24f, 0.4),
    "glove": (0xa0663a, 0.85), "glove_dark": (0x4e3220, 0.9),
    "lens": (0x4b4f52, 0.12), "strap": (0x1b2230, 0.9),
    "jdark": (0x7e2c15, 0.85),
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
# Character faces +Y. Heights: crown 1.80, chin 1.567, shoulder joint 1.415,
# elbow 1.13, wrist 0.875, hip joint 0.925, knee 0.50, ankle 0.075, sole 0.
# Left side at x<0 (character right = +X, preserved through glTF export).
# grp = deformation group used for skin weights: axial | armL | armR | legL | legR.

PART_DEFS = []  # (kind, region, center, radii, rot, quality, grp)


def ell(name, region, center, radii, rot=(0, 0, 0), fine=False, grp="axial"):
    PART_DEFS.append(("ell", region, Vector(center), Vector(radii), rot,
                      (28, 20) if fine else (20, 14), grp))


def boxv(name, region, center, half, rot=(0, 0, 0), grp="axial"):
    PART_DEFS.append(("box", region, Vector(center), Vector(half), rot, None, grp))


def _sm(t):
    return t * t * (3 - 2 * t)


def _interp(keys, t):
    """Smoothly interpolate [(t, value), ...]."""
    for (t0, v0), (t1, v1) in zip(keys, keys[1:]):
        if t <= t1:
            u = _sm(min(1.0, max(0.0, (t - t0) / max(1e-6, t1 - t0))))
            return v0 + (v1 - v0) * u
    return keys[-1][1]


def chain(name, region, a, b, keys, n=11, yz=(1.0, 1.0), fine=False, grp="axial"):
    """A tapered tube of overlapping spheres from a to b; keys = [(t, radius)].
    Dense, smoothly varying spheres fuse into a clean limb (no knuckled beads)."""
    a, b = Vector(a), Vector(b)
    for i in range(n + 1):
        t = i / n
        r = _interp(keys, t)
        ell(f"{name}_{i}", region, tuple(a.lerp(b, t)), (r, r * yz[0], r * yz[1]),
            fine=fine, grp=grp)


def define_body():
    # ---- torso (jacket) ----
    # one smooth tapered column (a stack of a few big ellipsoids leaves "ab" grooves)
    kx = [(0.0, 0.150), (0.2, 0.146), (0.5, 0.150), (0.8, 0.145), (1.0, 0.130)]
    ky = [(0.0, 0.110), (0.25, 0.114), (0.55, 0.124), (0.85, 0.116), (1.0, 0.104)]
    for i in range(15):
        t = i / 14
        ell(f"torso_{i}", "jacket", (0, 0.008 * t, 1.04 + 0.36 * t),
            (_interp(kx, t), _interp(ky, t), 0.058))
    for side in (-1, 1):
        s = "L" if side < 0 else "R"
        arm, leg = f"arm{s}", f"leg{s}"
        ell(f"pec{side}", "jacket", (0.066 * side, 0.064, 1.352), (0.074, 0.048, 0.054))
        ell(f"scap{side}", "jacket", (0.058 * side, -0.090, 1.325), (0.050, 0.034, 0.060))
        ell(f"trap{side}", "jacket", (0.102 * side, 0.004, 1.437), (0.056, 0.050, 0.044))
        # ---- arms: sleeve rolled at the elbow, bare forearm ----
        ell(f"delt{side}", "jacket", (0.205 * side, 0, 1.418), (0.068, 0.068, 0.068), grp=arm)
        chain(f"uarm{side}", "jacket", (0.215 * side, 0, 1.415), (0.224 * side, 0.010, 1.13),
              [(0.0, 0.060), (0.3, 0.057), (0.7, 0.052), (1.0, 0.049)], n=10, grp=arm)
        ell(f"roll{side}", "jacket", (0.224 * side, 0.012, 1.140), (0.058, 0.058, 0.024), grp=arm)
        chain(f"farm{side}", "skin", (0.224 * side, 0.010, 1.13), (0.232 * side, 0.022, 0.875),
              [(0.0, 0.045), (0.3, 0.044), (0.65, 0.038), (1.0, 0.032)], n=9, grp=arm)

    # ---- pelvis + legs (pants) ----
    ell("hipblock", "pants", (0, 0, 0.985), (0.150, 0.114, 0.074))
    ell("crotch", "pants", (0, 0.008, 0.895), (0.092, 0.080, 0.062))
    for side in (-1, 1):
        s = "L" if side < 0 else "R"
        leg = f"leg{s}"
        ell(f"glut{side}", "pants", (0.070 * side, -0.058, 0.942), (0.073, 0.064, 0.070), grp=leg)
        ell(f"hipj{side}", "pants", (0.092 * side, 0.012, 0.908), (0.070, 0.070, 0.078), grp=leg)
        # thigh: hip (0.098,0,0.925) -> knee (0.104, 0.012, 0.50)
        chain(f"thigh{side}", "pants", (0.098 * side, 0, 0.925), (0.104 * side, 0.012, 0.50),
              [(0.0, 0.080), (0.35, 0.080), (0.7, 0.067), (1.0, 0.057)], n=13, yz=(0.95, 1.1), grp=leg)
        ell(f"knee{side}", "pants", (0.104 * side, 0.022, 0.500), (0.054, 0.054, 0.054), grp=leg)
        # shin: knee -> ankle (0.104, 0.006, 0.075)
        chain(f"shin{side}", "pants", (0.104 * side, 0.012, 0.50), (0.104 * side, 0.006, 0.075),
              [(0.0, 0.056), (0.25, 0.058), (0.6, 0.049), (1.0, 0.041)], n=12, grp=leg)
        ell(f"calf{side}", "pants", (0.104 * side, -0.014, 0.372), (0.053, 0.051, 0.074), grp=leg)
        ell(f"blouse{side}", "pants", (0.104 * side, 0.008, 0.222), (0.065, 0.063, 0.050), grp=leg)
        # ---- boot: cuff, heel, foot, toe + flat sole ----
        ell(f"bcuff{side}", "boot", (0.104 * side, 0.006, 0.140), (0.064, 0.064, 0.092), grp=leg)
        ell(f"bheel{side}", "boot", (0.104 * side, -0.026, 0.062), (0.054, 0.056, 0.052), grp=leg)
        ell(f"bfoot{side}", "boot", (0.104 * side, 0.058, 0.052), (0.056, 0.106, 0.048), grp=leg)
        ell(f"btoe{side}", "boot", (0.104 * side, 0.150, 0.040), (0.052, 0.056, 0.040), grp=leg)
        boxv(f"bsole{side}", "sole", (0.104 * side, 0.062, 0.024), (0.060, 0.150, 0.024), grp=leg)

    # ---- neck + head (skin): broad face, strong jaw, thick neck ----
    ell("neck_lo", "skin", (0, 0, 1.475), (0.058, 0.058, 0.056))
    ell("neck_hi", "skin", (0, 0.006, 1.522), (0.056, 0.054, 0.046))
    ell("skull", "skin", (0, 0.002, 1.690), (0.108, 0.106, 0.110), fine=True)
    ell("back_head", "skin", (0, -0.030, 1.674), (0.096, 0.076, 0.094), fine=True)
    ell("jaw", "skin", (0, 0.028, 1.607), (0.086, 0.088, 0.058), fine=True)
    ell("chin", "skin", (0, 0.054, 1.585), (0.040, 0.030, 0.026), fine=True)
    ell("brow_ridge", "skin", (0, 0.082, 1.716), (0.070, 0.026, 0.018), fine=True)
    ell("nose", "skin", (0, 0.106, 1.650), (0.0185, 0.022, 0.019), fine=True)
    ell("nose_b", "skin", (0, 0.099, 1.668), (0.0135, 0.024, 0.016), fine=True)
    for side in (-1, 1):
        ell(f"ear{side}", "skin", (0.105 * side, 0.0, 1.662), (0.013, 0.022, 0.030), fine=True)
        ell(f"cheek{side}", "skin", (0.060 * side, 0.056, 1.636), (0.050, 0.040, 0.042), fine=True)


def spawn_volumes():
    obs = []
    for kind, region, center, radii, rot, quality, _grp in PART_DEFS:
        if kind == "ell":
            seg, ring = quality
            bpy.ops.mesh.primitive_uv_sphere_add(
                segments=seg, ring_count=ring, radius=1.0, location=tuple(center))
        else:
            bpy.ops.mesh.primitive_cube_add(size=2, location=tuple(center), rotation=rot)
        ob = bpy.context.active_object
        ob.scale = tuple(radii)
        ob.name = f"vol_{len(obs)}_{region}"
        obs.append(ob)
    return obs


def rel_dists(points):
    """Signed distance of N points to every volume, in units of that volume's own
    radius (0 = on its surface, <0 inside). Returns an array (parts, N)."""
    out = np.empty((len(PART_DEFS), len(points)))
    for i, d in enumerate(PART_DEFS):
        q = (points - np.array(tuple(d[2]))) / np.array(tuple(d[3]))
        if d[0] == "box":
            out[i] = np.abs(q).max(axis=1) - 1.0
        else:
            out[i] = np.sqrt((q * q).sum(axis=1)) - 1.0
    return out


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
    # extra relaxation on the head only, so the face reads smooth rather than lumpy
    mask = body.vertex_groups.new(name="headmask")
    for v in body.data.vertices:
        w = sstep(1.545, 1.60, v.co.z)
        if w > 0:
            mask.add([v.index], w, "REPLACE")
    hs = body.modifiers.new("HeadSmooth", "SMOOTH")
    hs.factor = 0.6
    hs.iterations = 5
    hs.vertex_group = "headmask"
    bpy.ops.object.modifier_apply(modifier="HeadSmooth")
    body.vertex_groups.remove(body.vertex_groups["headmask"])
    bpy.ops.object.shade_smooth()

    # per-face region -> material slots (crisp per-face clothing boundaries)
    for name, *_r in REGIONS:
        body.data.materials.append(MATS[f"char_{name}"])
    slot = {name: i for i, (name, *_r) in enumerate(REGIONS)}
    prio = {name: p for name, _c, _r, p in REGIONS}
    mesh = body.data
    pts = np.array([tuple(p.center) for p in mesh.polygons])
    score = rel_dists(pts) - np.array([prio[d[1]] for d in PART_DEFS])[:, None]
    best = np.argmin(score, axis=0)
    mesh.polygons.foreach_set("material_index", [slot[PART_DEFS[b][1]] for b in best])
    mesh.update()
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
        segments=seg, ring_count=ring, radius=1.0, location=tuple(center), rotation=tuple(rot))
    ob = bpy.context.active_object
    ob.name = name
    ob.scale = tuple(radii)
    ob.data.materials.append(MATS[mat])
    return ob


def cyl(name, mat, r, depth, center, rot=(0, 0, 0), seg=14):
    bpy.ops.mesh.primitive_cylinder_add(
        vertices=seg, radius=r, depth=depth, location=tuple(center), rotation=tuple(rot))
    ob = bpy.context.active_object
    ob.name = name
    ob.data.materials.append(MATS[mat])
    return ob


def torus(name, mat, major, minor, center, scale=(1, 1, 1), rot=(0, 0, 0), seg=24, ring=10):
    bpy.ops.mesh.primitive_torus_add(
        major_radius=major, minor_radius=minor,
        major_segments=seg, minor_segments=ring, location=tuple(center), rotation=tuple(rot))
    ob = bpy.context.active_object
    ob.name = name
    ob.scale = scale
    ob.data.materials.append(MATS[mat])
    return ob


def rbox(name, mat, center, half, rot=(0, 0, 0), bevel=0.004):
    """Rounded box (a pocket flap, a patch...)."""
    bpy.ops.mesh.primitive_cube_add(size=2, location=tuple(center), rotation=tuple(rot))
    ob = bpy.context.active_object
    ob.name = name
    ob.scale = tuple(half)
    bpy.ops.object.transform_apply(location=False, rotation=False, scale=True)
    md = ob.modifiers.new("Bev", "BEVEL")
    md.width = bevel
    md.segments = 2
    bpy.ops.object.modifier_apply(modifier="Bev")
    ob.data.materials.append(MATS[mat])
    return ob


class Surface:
    """Ray-cast the finished body so trim sits exactly on the fused surface."""

    def __init__(self, body):
        bm = bmesh.new()
        bm.from_mesh(body.data)
        bm.transform(body.matrix_world)
        self.bvh = BVHTree.FromBMesh(bm)
        bm.free()

    def hit(self, origin, direction, maxd=3.0):
        loc, nrm, _i, _d = self.bvh.ray_cast(Vector(origin), Vector(direction).normalized(), maxd)
        return loc, nrm

    def front(self, x, z, y0=0.8):
        """Surface point + normal facing +Y at (x, z)."""
        return self.hit((x, y0, z), (0, -1, 0))


def normal_euler(n, tilt=0.0):
    """Euler that turns a +Y-thin object so its Y axis follows normal n."""
    q = n.to_track_quat("Y", "Z")
    if tilt:
        q = q @ Quaternion(Vector((0, 0, 1)), tilt)
    return tuple(q.to_euler())


def beard_feather(p, margin=0.0):
    """0..1 beard weight at world point p (face only). margin widens the zone (stubble shadow)."""
    ax = abs(p.x)
    zt = 1.612 + 0.060 * sstep(0.040, 0.098, ax)                 # jaw line rising to the sideburn
    zt = max(zt, 1.634 - 0.030 * sstep(0.020, 0.055, ax))        # moustache above the lip
    m = margin
    top = sstep(0.0, 0.012 + m, zt + m - p.z)
    bottom = sstep(0.0, 0.010 + m, p.z - (1.548 - m))
    front = sstep(0.006 - m, 0.030, p.y)
    d = math.hypot(p.x / 0.034, (p.z - 1.598) / 0.0125)
    mouth = sstep(0.85, 1.45, d)                                 # the mouth stays clear
    side = sstep(0.130 + m, 0.110, ax)                           # not out over the ears
    return top * bottom * front * mouth * side


def build_beard(body):
    me = body.data
    bm = bmesh.new()
    bm.from_mesh(me)
    bm.transform(body.matrix_world)
    face_zone = [f for f in bm.faces if f.calc_center_median().z > 1.535 and f.calc_center_median().y > -0.03]
    bmesh.ops.subdivide_edges(bm, edges=list({e for f in face_zone for e in f.edges}), cuts=1, use_grid_fill=True)
    bm.normal_update()
    bm.faces.ensure_lookup_table()
    bm.faces.index_update()
    keep = {f.index for f in bm.faces if max(beard_feather(v.co) for v in f.verts) > 0.02}
    off = {}
    for f in bm.faces:
        if f.index in keep:
            for v in f.verts:
                off[v] = v.normal * (0.0008 + 0.0042 * beard_feather(v.co))
    bmesh.ops.delete(bm, geom=[f for f in bm.faces if f.index not in keep], context="FACES")
    for v in list(bm.verts):
        if not v.link_faces:
            bm.verts.remove(v)
        else:
            v.co += off[v]
    bm2 = bpy.data.meshes.new("Beard")
    bm.to_mesh(bm2)
    bm.free()
    ob = bpy.data.objects.new("Beard", bm2)
    bpy.context.collection.objects.link(ob)
    for pl in bm2.polygons:
        pl.use_smooth = True
    bm2.materials.append(MATS["beard"])
    return ob


def build_details(surf, body):
    """Eyes, brows + hair, smile, gloves, goggles, backpack, belt, scarf, trim — all
    separate objects (rigidly bone-parented, or skinned from the body weights)."""
    out = {}

    # ---- eyes: white + iris + pupil + glint; origin at the eye so a blink (scale.y) closes it
    for side, tag in ((-1, "L"), (1, "R")):
        x = 0.041 * side
        parts = [
            sph(f"eyeball_{tag}", "white", (x, 0.088, 1.700), (0.0215, 0.016, 0.0235), seg=20, ring=14),
            sph(f"iris_{tag}", "iris", (x, 0.1012, 1.700), (0.0138, 0.0045, 0.0150), seg=16, ring=10),
            sph(f"pupil_{tag}", "pupil", (x, 0.1042, 1.699), (0.0072, 0.0030, 0.0078), seg=12, ring=8),
            sph(f"glint_{tag}", "white", (x - 0.0055 * side, 0.1058, 1.7078), (0.0036, 0.0025, 0.0036), seg=8, ring=6),
        ]
        eye = join_named(f"Eye{tag}", parts)
        bpy.ops.object.origin_set(type="ORIGIN_GEOMETRY", center="BOUNDS")
        out[f"Eye{tag}"] = eye

    # ---- hair: thick, black, tousled — shell + heavy pointed fringe + spiky crown + side volume
    bpy.ops.mesh.primitive_uv_sphere_add(segments=72, ring_count=48, radius=1.0,
                                         location=(0, -0.004, 1.694))
    shell = bpy.context.active_object
    shell.name = "hair_shell"
    shell.scale = (0.113, 0.117, 0.123)
    bpy.ops.object.transform_apply(location=True, scale=True)   # world-space verts
    bm = bmesh.new()
    bm.from_mesh(shell.data)
    kill = []
    for f in bm.faces:
        c = f.calc_center_median()
        if c.y > 0.03 and c.z < 1.745:                              # face opening (fringe covers it)
            kill.append(f)
        elif abs(c.x) > 0.070 and c.z < 1.702 - 0.062 * sstep(-0.03, -0.08, c.y):   # short sides, ears clear
            kill.append(f)
        elif c.z < 1.640:                                           # below the nape
            kill.append(f)
    bmesh.ops.delete(bm, geom=kill, context="FACES")
    bm.to_mesh(shell.data)
    bm.free()
    sol = shell.modifiers.new("Solidify", "SOLIDIFY")
    sol.thickness = 0.011
    bpy.ops.object.modifier_apply(modifier="Solidify")
    shell.data.materials.append(MATS["hair"])
    locks = []
    tips = [1.746, 1.740, 1.736, 1.742, 1.734, 1.741, 1.737, 1.745, 1.749]
    for i, tip in enumerate(tips):                                  # fringe: pointed locks to the brows
        u = (i - 4) / 4.0
        x = 0.080 * u
        rz = 0.031 + 0.004 * ((i * 5) % 3)
        y = 0.094 * math.sqrt(max(0.0, 1 - (x / 0.112) ** 2)) + 0.002
        locks.append(sph(f"fringe{i}", "hair", (x, y, tip + rz), (0.0175, 0.016, rz),
                         rot=(0.30, -0.30 * u, 0), seg=12, ring=8))
    for i in range(6):                                              # a few messy spikes on the crown
        a = 0.6 + i * 2.399
        r = 0.022 + 0.038 * ((i * 0.37) % 1.0)
        d = Vector((math.cos(a) * 0.85, math.sin(a) * 0.85 + 0.45, 1.0)).normalized()
        base = Vector((r * math.cos(a), -0.012 + r * math.sin(a),
                       1.694 + 0.123 * math.sqrt(max(0.0, 1 - (r / 0.112) ** 2))))
        locks.append(sph(f"spike{i}", "hair", tuple(base + d * 0.008),
                         (0.0105, 0.0105, 0.022 + 0.014 * ((i * 0.61) % 1.0)),
                         rot=tuple(d.to_track_quat("Z", "Y").to_euler()), seg=10, ring=8))
    locks.append(sph("nape", "hair", (0, -0.060, 1.652), (0.082, 0.052, 0.058)))
    locks.append(sph("crown", "hair", (0.010, -0.004, 1.800), (0.072, 0.068, 0.030)))
    out["Hair"] = join_named("Hair", [shell] + locks)

    # ---- ears (skin, rigid with the head)
    ears = [sph(f"ear{sd}", "char_skin", (0.1105 * sd, 0.004, 1.664), (0.0100, 0.024, 0.031),
                rot=(0, 0, -0.30 * sd), seg=16, ring=12) for sd in (-1, 1)]
    out["Ears"] = join_named("Ears", ears)

    # ---- brows: thick, dark, nearly straight — placed on the real face surface
    brows = []
    for side, tag in ((-1, "L"), (1, "R")):
        loc, n = surf.front(0.045 * side, 1.726)
        brows.append(sph(f"brow_{tag}", "hair", tuple(loc + n * 0.0012),
                         (0.025, 0.0075, 0.0085), rot=normal_euler(n, -0.10 * side), seg=12, ring=8))
    out["Brows"] = join_named("Brows", brows)

    # ---- full short beard + moustache: a feathered shell lifted off the face (skinned like the body)
    out["Beard"] = build_beard(body)

    # ---- open smile: dark interior, upper teeth, lip arcs (corners lifted)
    mouth = []
    loc, n = surf.front(0, 1.598)
    mouth.append(sph("mouth_in", "mouth_in", tuple(loc - n * 0.0012), (0.0245, 0.0045, 0.0072), seg=16, ring=8))
    mouth.append(sph("teeth", "teeth", tuple(loc + Vector((0, 0, 0.0021)) + n * 0.0004),
                     (0.0200, 0.0030, 0.0040), seg=14, ring=8))
    zc = 1.6065
    for i in range(-6, 7):
        t = i / 6.0
        x = t * 0.026
        loc, n = surf.front(x, zc - 0.0022 * (1 - t * t))
        mouth.append(sph(f"lip_u{i}", "lips", tuple(loc - n * 0.0004), (0.0044, 0.0040, 0.0042), seg=10, ring=8))
        loc, n = surf.front(x, zc - 0.0170 * (1 - t * t))
        mouth.append(sph(f"lip_l{i}", "lips", tuple(loc - n * 0.0004), (0.0050, 0.0044, 0.0050), seg=10, ring=8))
    out["Mouth"] = join_named("Mouth", mouth)

    # ---- swim goggles (blue frame, smoky lenses): over the eyes, or resting on the fringe
    if GOGGLES_DOWN:
        gz, gy, strap_c, strap_x, strap_y = 1.700, 0.1165, (0, -0.002, 1.700), 0.114, 1.04
    else:
        gz, gy, strap_c, strap_x, strap_y = 1.785, 0.1160, (0, -0.004, 1.778), 0.090, 1.09
    gog = [torus("gog_strap", "strap", strap_x, 0.0085, strap_c, scale=(1.0, strap_y, 1.0),
                 rot=(0 if GOGGLES_DOWN else -0.10, 0, 0), seg=36, ring=8)]
    for side in (-1, 1):
        x = 0.0385 * side if GOGGLES_DOWN else 0.0345 * side
        lens = cyl(f"gog_lens{side}", "lens", 0.0215, 0.020, (x, gy, gz), rot=(math.pi / 2, 0, 0), seg=20)
        lens.scale = (1.3, 0.82, 1.0)
        rim = torus(f"gog_rim{side}", "goggle_blue", 0.0222, 0.0062, (x, gy + 0.010, gz),
                    scale=(1.3, 0.82, 1.0), rot=(math.pi / 2, 0, 0), seg=20, ring=8)
        gog += [lens, rim]
    gog.append(cyl("gog_bridge", "goggle_blue", 0.0045, 0.020, (0, gy + 0.008, gz + 0.002), rot=(0, math.pi / 2, 0), seg=8))
    out["Goggles"] = join_named("Goggles", gog)

    # ---- hands: leather gloves (cuff, palm, four fingers, thumb)
    for side, tag in ((-1, "L"), (1, "R")):
        w = Vector((0.232 * side, 0.022, 0.875))
        parts = [cyl(f"cuff_{tag}", "glove_dark", 0.041, 0.055, tuple(w + Vector((0, 0, 0.004))), seg=16),
                 sph(f"palm_{tag}", "glove", tuple(w + Vector((0, 0.004, -0.054))),
                     (0.040, 0.027, 0.052), seg=14, ring=10)]
        for k, ln in enumerate((0.032, 0.037, 0.035, 0.028)):
            fx = w.x + (k - 1.5) * 0.0185
            parts.append(sph(f"finger_{tag}{k}", "glove", (fx, w.y + 0.014, w.z - 0.098 - ln * 0.35),
                             (0.0105, 0.0125, ln), rot=(-0.75, 0, 0), seg=10, ring=8))
        parts.append(sph(f"thumb_{tag}", "glove", (w.x - 0.044 * side, w.y - 0.006, w.z - 0.040),
                         (0.0145, 0.0145, 0.031), rot=(-0.4, 0, 0.35 * side), seg=10, ring=8))
        out[f"Hand{tag}"] = join_named(f"Hand{tag}", parts)

    # ---- backpack + bedroll + straps + side pockets (multi-material join keeps all slots)
    bp = [sph("pack_main", "pack", (0, -0.172, 1.27), (0.135, 0.078, 0.180), seg=20, ring=14),
          sph("pack_flap", "pack", (0, -0.178, 1.425), (0.140, 0.082, 0.050)),
          cyl("bedroll", "cream", 0.05, 0.26, (0, -0.20, 1.472), rot=(0, math.pi / 2, 0)),
          sph("strap_l", "pack", (-0.085, 0.118, 1.30), (0.021, 0.008, 0.15), rot=(0.12, 0, 0)),
          sph("strap_r", "pack", (0.085, 0.118, 1.30), (0.021, 0.008, 0.15), rot=(0.12, 0, 0)),
          sph("over_l", "pack", (-0.085, 0.0, 1.462), (0.021, 0.026, 0.052), rot=(-0.5, 0, 0)),
          sph("over_r", "pack", (0.09, 0.0, 1.462), (0.021, 0.026, 0.052), rot=(-0.5, 0, 0)),
          sph("sidepocket_l", "pack", (-0.128, -0.168, 1.17), (0.036, 0.048, 0.074)),
          sph("sidepocket_r", "pack", (0.128, -0.168, 1.17), (0.036, 0.048, 0.074)),
          sph("buckle_l", "gold", (-0.060, -0.246, 1.36), (0.012, 0.005, 0.016)),
          sph("buckle_r", "gold", (0.060, -0.246, 1.36), (0.012, 0.005, 0.016))]
    for sx in (-0.07, 0.07):
        bp.append(torus(f"roll_band{sx}", "dark", 0.0515, 0.0045, (sx, -0.20, 1.472),
                        rot=(0, math.pi / 2, 0), seg=18, ring=6))
    out["Backpack"] = join_named("Backpack", bp)

    belt = [torus("belt_band", "dark", 0.150, 0.017, (0, 0, 1.078), scale=(0.95, 0.76, 1)),
            sph("buckle", "gold", (0, 0.118, 1.078), (0.021, 0.009, 0.015))]
    out["Belt"] = join_named("Belt", belt)

    # ---- mantle: a shoulder yoke over the jacket (the long cape hangs from it in-engine)
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

    # ---- hood: bunched cloth resting behind the neck
    hood = [sph("hood_a", "cloak", (0, -0.092, 1.512), (0.098, 0.082, 0.072), seg=20, ring=14),
            sph("hood_b", "cloak", (0.050, -0.070, 1.530), (0.050, 0.050, 0.050)),
            sph("hood_c", "cloak", (-0.050, -0.070, 1.530), (0.050, 0.050, 0.050)),
            sph("hood_tip", "cloak", (0, -0.150, 1.488), (0.034, 0.045, 0.060), rot=(0.5, 0, 0))]
    out["Hood"] = join_named("Hood", hood)

    # ---- a little lantern on the right hip: glass, gold cap and base, a loop of cord
    lan = [sph("lantern_glass", "lantern", (0.158, 0.038, 0.935), (0.030, 0.030, 0.038), seg=16, ring=12),
           cyl("lantern_cap", "gold", 0.026, 0.012, (0.158, 0.038, 0.976), seg=12),
           cyl("lantern_base", "gold", 0.024, 0.010, (0.158, 0.038, 0.893), seg=12),
           torus("lantern_loop", "gold", 0.014, 0.0035, (0.158, 0.038, 0.996), scale=(1, 0.4, 1), seg=12, ring=6),
           cyl("lantern_cord", "dark", 0.0025, 0.07, (0.150, 0.036, 1.03), rot=(0, 0.18, 0), seg=6)]
    out["Lantern"] = join_named("Lantern", lan)

    # ---- skinned trim: scarf, jacket zipper + pocket flaps, boot laces + ankle straps
    out["Scarf"] = torus("scarf", "cream", 0.066, 0.019, (0, 0.008, 1.488), scale=(1, 0.95, 0.9))

    jt = []
    for k in range(25):                                   # zipper teeth line
        z = 1.065 + k * 0.0158
        loc, n = surf.front(0.0, z)
        if loc is None:
            continue
        jt.append(sph(f"zip{k}", "cream", tuple(loc + n * 0.0010), (0.0046, 0.0036, 0.0098),
                      rot=normal_euler(n), seg=8, ring=6))
    loc, n = surf.front(0.0, 1.455)
    jt.append(sph("zip_pull", "gold", tuple(loc + n * 0.003), (0.0075, 0.004, 0.015), rot=normal_euler(n), seg=8, ring=6))
    for side in (-1, 1):                                  # chest pockets
        loc, n = surf.front(0.088 * side, 1.128)
        rot = normal_euler(n)
        jt.append(rbox(f"pocket{side}", "jdark", tuple(loc + n * 0.0045), (0.034, 0.0075, 0.022), rot=rot))
        loc2 = loc + n * 0.0105 + Vector((0, 0, -0.012))
        jt.append(sph(f"pbtn{side}", "cream", tuple(loc2), (0.0048, 0.0030, 0.0048), seg=8, ring=6))
    out["JacketTrim"] = join_named("JacketTrim", jt)

    bt = []
    for side in (-1, 1):
        x = 0.104 * side
        for k, z in enumerate((0.118, 0.146, 0.174)):
            loc, n = surf.front(x, z)
            if loc is None:
                continue
            bt.append(sph(f"lace{side}_{k}", "cream", tuple(loc + n * 0.0015), (0.030, 0.0042, 0.0050),
                          rot=normal_euler(n, 0.30 * (-1) ** k), seg=8, ring=6))
        bt.append(torus(f"ankle_strap{side}", "strap", 0.0655, 0.0075, (x, 0.008, 0.205),
                        scale=(1.0, 0.99, 1.0), seg=24, ring=8))
    out["BootTrim"] = join_named("BootTrim", bt)

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
    "EyeL": "Head", "EyeR": "Head", "Hair": "Head", "Brows": "Head", "Mouth": "Head", "Ears": "Head",
    "Goggles": "Head",
    "HandL": "Hand_L", "HandR": "Hand_R", "Backpack": "Chest",
    "Mantle": "Chest", "Hood": "Chest", "Lantern": "Hips",
}
SKINNED_EXTRAS = ("Belt", "Scarf", "JacketTrim", "BootTrim", "Beard")  # copy the body's weights


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


# ---- geometric skin weights --------------------------------------------------
# Each body vertex is soft-assigned to the deformation groups of its nearest
# volumes, then blended along the group's bone chain by height. Unlike bone-heat
# this never leaks arm weights into the hip (or leg weights across the crotch).

def sstep(a, b, x):
    """Smoothstep from a (0) to b (1); works for a > b too."""
    if a == b:
        return 1.0 if x >= a else 0.0
    t = (x - a) / (b - a)
    t = 0.0 if t < 0 else 1.0 if t > 1 else t
    return t * t * (3 - 2 * t)


def axial_w(z):
    s1, s2 = sstep(1.04, 1.12, z), sstep(1.19, 1.27, z)
    s3, s4 = sstep(1.41, 1.47, z), sstep(1.52, 1.59, z)
    return {"Hips": 1 - s1, "Spine": s1 * (1 - s2), "Chest": s2 * (1 - s3),
            "Neck": s3 * (1 - s4), "Head": s4}


def leg_w(z, s):
    hips = sstep(0.90, 0.99, z)
    below_knee = sstep(0.57, 0.43, z)
    foot = sstep(0.13, 0.065, z)
    rest = 1 - hips
    return {"Hips": hips, f"Thigh_{s}": rest * (1 - below_knee),
            f"Shin_{s}": rest * below_knee * (1 - foot), f"Foot_{s}": rest * below_knee * foot}


def arm_w(z, s):
    chest = sstep(1.37, 1.46, z)
    fore = sstep(1.18, 1.08, z)
    return {"Chest": chest, f"UpperArm_{s}": (1 - chest) * (1 - fore),
            f"Forearm_{s}": (1 - chest) * fore}


GROUP_FN = {
    "axial": axial_w,
    "armL": lambda z: arm_w(z, "L"), "armR": lambda z: arm_w(z, "R"),
    "legL": lambda z: leg_w(z, "L"), "legR": lambda z: leg_w(z, "R"),
}


def weight_body(body):
    me = body.data
    pts = np.array([tuple(v.co) for v in me.vertices])
    mean_r = np.array([sum(d[3]) / 3 for d in PART_DEFS])
    metric = rel_dists(pts) * mean_r[:, None]               # ~metres to each volume
    groups = list(GROUP_FN)
    near = np.stack([metric[[i for i, d in enumerate(PART_DEFS) if d[6] == g]].min(axis=0)
                     for g in groups])                       # (groups, N)
    wg = np.exp(-(near - near.min(axis=0)) / 0.007)
    wg /= wg.sum(axis=0)
    vgs = {name: body.vertex_groups.new(name=name) for name, *_ in BONES}
    for vi in range(len(pts)):
        z = pts[vi, 2]
        w = {}
        for gi, g in enumerate(groups):
            k = wg[gi, vi]
            if k < 0.01:
                continue
            for bname, bw in GROUP_FN[g](z).items():
                if bw > 0:
                    w[bname] = w.get(bname, 0.0) + k * bw
        items = sorted(((b, x) for b, x in w.items() if x > 0.004), key=lambda t: -t[1])[:4]
        tot = sum(x for _b, x in items) or 1.0
        for b, x in items:
            vgs[b].add([vi], x / tot, "REPLACE")


def bind(ob, arm):
    ob.parent = arm
    ob.matrix_parent_inverse = arm.matrix_world.inverted()
    md = ob.modifiers.new("Armature", "ARMATURE")
    md.object = arm


def skin_like_body(ob, body, arm):
    """Skinned trim: copy the nearest body surface's weights, then bind."""
    for vg in body.vertex_groups:
        ob.vertex_groups.new(name=vg.name)
    bpy.ops.object.select_all(action="DESELECT")
    ob.select_set(True)
    bpy.context.view_layer.objects.active = ob
    md = ob.modifiers.new("WT", "DATA_TRANSFER")
    md.object = body
    md.use_vert_data = True
    md.data_types_verts = {"VGROUP_WEIGHTS"}
    md.vert_mapping = "POLYINTERP_NEAREST"
    md.layers_vgroup_select_src = "ALL"
    md.layers_vgroup_select_dst = "NAME"
    bpy.ops.object.modifier_apply(modifier="WT")
    bind(ob, arm)


def attach_to_bone(ob, arm, bone_name):
    """Rigid attachment: world transform preserved at rest, follows the bone.
    Blender's BONE-parent frame origin sits at the bone TAIL (verified
    empirically), so the parent inverse must use the tail frame."""
    bone = arm.pose.bones[bone_name].bone
    tail_frame = bone.matrix_local @ Matrix.Translation((0, bone.length, 0))
    ob.parent = arm
    ob.parent_type = "BONE"
    ob.parent_bone = bone_name
    ob.matrix_parent_inverse = tail_frame.inverted()   # basis (the object's own placement) is kept


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


# ------------------------------------------------------- baked vertex colour ----
# Ambient occlusion (BVH ray casts against the whole character at rest) goes into
# COLOR_0; three.js multiplies it into each material's colour, so creases under
# the chin, the pack, the sleeves and the boots read without any real-time AO.

AO_SETTINGS = {  # object -> (strength, max distance); default below
    "wander_body": (0.72, 0.20), "EyeL": (0.30, 0.03), "EyeR": (0.30, 0.03),
    "Lantern": (0.0, 0.1), "Beard": (0.5, 0.10), "Hair": (0.65, 0.10), "Brows": (0.2, 0.03), "Mouth": (0.2, 0.03),
}
CHEEKS = [Vector((0.062, 0.098, 1.646)), Vector((-0.062, 0.098, 1.646)),
          Vector((0.0, 0.112, 1.652))]       # blush spots: cheeks + nose tip


def fib_hemisphere(n):
    """n cosine-weighted directions on the +Z hemisphere (fixed, deterministic)."""
    out = []
    golden = math.pi * (3 - math.sqrt(5))
    for i in range(n):
        r = math.sqrt((i + 0.5) / n)
        th = i * golden
        out.append(Vector((r * math.cos(th), r * math.sin(th), math.sqrt(max(0.0, 1 - r * r)))))
    return out


def bake_vertex_colors(objs, rays=28):
    verts, tris = [], []
    for ob in objs:
        me = ob.data
        me.calc_loop_triangles()
        base = len(verts)
        mw = ob.matrix_world
        verts.extend(mw @ v.co for v in me.vertices)
        tris.extend((base + t.vertices[0], base + t.vertices[1], base + t.vertices[2])
                    for t in me.loop_triangles)
    bvh = BVHTree.FromPolygons(verts, tris)
    dirs = fib_hemisphere(rays)
    skin_hex = next(c for n, c, _r, _p in REGIONS if n == "skin")

    for ob in objs:
        strength, dist = AO_SETTINGS.get(ob.name, (0.65, 0.12))
        me = ob.data
        mw = ob.matrix_world
        nm = mw.to_3x3()
        cols = []
        for v in me.vertices:
            p = mw @ v.co
            n = (nm @ v.normal).normalized()
            ao = 1.0
            if strength > 0:
                t = n.cross(Vector((0, 0, 1)) if abs(n.z) < 0.9 else Vector((1, 0, 0))).normalized()
                b = n.cross(t)
                o = p + n * 0.010
                hit = 0.0
                for d in dirs:
                    w = t * d.x + b * d.y + n * d.z
                    loc, _n, _i, dd = bvh.ray_cast(o, w, dist)
                    if loc is not None and dd > 0.014:     # ignore self-contact on a bumpy / thin skin
                        hit += 1.0 - 0.55 * dd / dist
                ao = 1.0 - strength * (hit / len(dirs))
            r = g = bl = ao
            if ob.name == "wander_body":                      # blush on cheeks + nose
                for c in CHEEKS:
                    k = math.exp(-((p - c).length / 0.026) ** 2) * 0.40
                    r *= 1.0 - 0.02 * k
                    g *= 1.0 - 0.30 * k
                    bl *= 1.0 - 0.34 * k
                sh = 1.0 - 0.30 * beard_feather(p, 0.014)      # a soft shadow of stubble round the beard
                r, g, bl = r * sh, g * sh, bl * sh
            elif ob.name == "Beard":                          # skin fading into dark stubble, a little patchy
                wb = sstep(0.12, 0.75, beard_feather(p)) * (0.90 + 0.10 * noise.noise(p * 160.0))
                sk = [((skin_hex >> sh_) & 0xFF) / 255.0 for sh_ in (16, 8, 0)]
                bc = (0.14, 0.10, 0.075)
                r, g, bl = ((sk[i] + (bc[i] - sk[i]) * wb) * ao for i in range(3))
            elif ob.name == "Hair":                           # lighter on top, deeper low down
                k = 0.74 + 0.26 * sstep(1.62, 1.80, p.z)
                r, g, bl = r * k, g * k, bl * k
            cols.extend((r, g, bl, 1.0))
        ao_vals = cols[0::4]
        print(f"  AO {ob.name}: mean {sum(ao_vals) / max(1, len(ao_vals)):.2f}, min {min(ao_vals):.2f}")
        for old in list(me.color_attributes):
            me.color_attributes.remove(old)
        ca = me.color_attributes.new(name="Col", type="FLOAT_COLOR", domain="POINT")
        ca.data.foreach_set("color", cols)
        me.color_attributes.active_color = ca
        me.color_attributes.render_color_index = me.color_attributes.find("Col")


# ----------------------------------------------------------- export/verify ----

def export_glb():
    path = os.path.join(OUT, "character.glb")
    bpy.ops.object.select_all(action="SELECT")
    kw = dict(filepath=path, export_format="GLB", use_selection=True,
              export_yup=True, export_apply=False,
              export_animation_mode="ACTIONS", export_anim_single_armature=True,
              export_skins=True)
    try:
        bpy.ops.export_scene.gltf(**kw, export_vertex_color="ACTIVE")
    except TypeError:
        bpy.ops.export_scene.gltf(**kw)
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
    colored = sum(1 for m in j.get("meshes", []) for p in m.get("primitives", [])
                  if "COLOR_0" in p.get("attributes", {}))
    print(f"EXPORT {path}: {size} bytes, {tris} tris, {colored} primitives with COLOR_0")
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

    def cam(name, loc, target):
        cd = bpy.data.cameras.new(name)
        cd.lens = 50
        c = bpy.data.objects.new(name, cd)
        scene.collection.objects.link(c)
        c.location = loc
        d = Vector(target) - Vector(loc)
        c.rotation_euler = d.to_track_quat("-Z", "Y").to_euler()
        return c

    views = {
        "front": cam("front", (0, 3.4, 1.0), (0, 0, 0.92)),
        "side": cam("side", (-3.4, 0, 1.0), (0, 0, 0.92)),
        "back": cam("back", (0, -3.4, 1.0), (0, 0, 0.92)),
        "face": cam("face", (0.30, 0.95, 1.72), (0, 0, 1.68)),
        "face_side": cam("face_side", (-0.95, 0.30, 1.72), (0, 0, 1.68)),
    }
    shots = [("rest_front", "front", None, 0), ("rest_side", "side", None, 0),
             ("rest_back", "back", None, 0), ("face", "face", None, 0),
             ("face_side", "face_side", None, 0),
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
    print("[1/6] building fused body...")
    body = build_body()
    print(f"  body: {len(body.data.polygons)} faces, {len(body.data.materials)} materials")
    surf = Surface(body)

    print("[2/6] details...")
    details = build_details(surf, body)

    print("[3/6] rig + geometric skin weights...")
    arm = build_armature()
    weight_body(body)
    bind(body, arm)
    for obj_name, bone in ATTACH_BONES.items():
        attach_to_bone(details[obj_name], arm, bone)
    for obj_name in SKINNED_EXTRAS:
        skin_like_body(details[obj_name], body, arm)

    print("[4/6] baking clips...")
    poser = Poser(arm)
    actions = {}
    for name, (fn, nframes) in make_poses(poser).items():
        actions[name] = bake_clip(arm, poser, name, nframes, fn)

    print("[5/6] ambient occlusion + vertex colours...")
    rest_pose_for_export(arm)
    meshes = [body] + [details[k] for k in details]
    bake_vertex_colors(meshes)

    print("[6/6] export + previews...")
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
