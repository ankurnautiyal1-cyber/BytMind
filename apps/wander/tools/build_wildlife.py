#!/usr/bin/env python3
"""The Wilds' animals: public/assets/wildlife.glb

Usage:
  /Applications/Blender.app/Contents/MacOS/Blender --background \
      --python tools/build_wildlife.py [-- --preview]

Four species, each as three meshes the engine animates (src/wildlife.js):
  <name>_body   torso, tail, udder / hump, centred on the origin, front = +Y (-Z in three)
  <name>_head   neck + head (+ ears, horns, antlers), pivot at the base of the neck
  <name>_leg    one leg hanging from the hip at the origin, 0.62 m long
names: sheep, deer, cow, stag (the luminous night stag — the engine lights it).
Colours are painted into vertex colours (wool tips, belly, patches, antler tines),
with baked AO; the engine only multiplies a small per-animal tint.
"""
import math
import os
import random
import sys

import bmesh
import bpy
from mathutils import Vector, noise

sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), "lib"))
import wander_bpy as wb  # noqa: E402

# finished parts are parked in a collection that is not part of the scene, so the
# reset() between meshes (which deletes scene objects) leaves them alone
holding = bpy.data.collections.new("holding")


def dim(hex_, k):
    """Scale an sRGB hex colour channel by channel (plain integer maths would corrupt it)."""
    r, g, b = ((hex_ >> 16) & 255), ((hex_ >> 8) & 255), hex_ & 255
    return (int(r * k) << 16) | (int(g * k) << 8) | int(b * k)


def blob(name, r, loc, m, scale=(1, 1, 1), sub=2, jitter=0.0, rnd=None):
    return wb.ico(name, r, loc, m, scale=scale, sub=sub, jitter=jitter, rnd=rnd)


def tint_where(ob, fn):
    """fn(world_co, normal) -> (colour, amount) or None; blends into the corner colours."""
    me = ob.data
    ca = me.color_attributes["Col"]
    mw = ob.matrix_world
    for p in me.polygons:
        n = mw.to_3x3() @ p.normal
        for li in p.loop_indices:
            co = mw @ me.vertices[me.loops[li].vertex_index].co
            r = fn(co, n)
            if r:
                c = ca.data[li].color
                ca.data[li].color = (*wb.lerp3((c[0], c[1], c[2]), r[0], min(1.0, r[1])), 1.0)


def finish(name, tone=0.1, ao=True, smooth=55, seed=1, belly=None, spots=None):
    ob = wb.join_all(name)
    wb.paint_materials(ob)
    wb.tone(ob, tone, scale=2.2, jitter=0.02, seed=seed)
    if belly:
        col, z = belly
        tint_where(ob, lambda co, n: (col, 0.7 * max(0.0, min(1.0, (z - co.z) / 0.25))) if co.z < z else None)
    if spots:
        col, scale, thr = spots
        off = Vector((seed * 3.0, seed * 1.7, seed * 0.4))
        tint_where(ob, lambda co, n: (col, 1.0) if noise.noise(co * scale + off) > thr else None)
    if ao:
        wb.bake_ao(ob, rays=14, dist=0.6, strength=0.8, seed=seed)
    wb.paint_finish(ob)
    wb.smooth_by_angle(ob, smooth)
    for c in list(ob.users_collection):
        c.objects.unlink(ob)
    holding.objects.link(ob)
    return ob


def eye(side, loc, r=0.028):
    return blob(f"eye{side}", r, (side * loc[0], loc[1], loc[2]), wb.mat("eye", 0x0c0a09, rough=0.3), sub=1)


def leg(name, r0, r1, col, hoof, knee=1.0):
    m = wb.mat("leg", col)
    h = wb.mat("hoof", hoof)
    wb.between("upper", (0, 0, 0), (0, 0.02, -0.34), r0, 8, m, r_end=r0 * 0.82)
    wb.between("lower", (0, 0.02, -0.3), (0, 0.0, -0.58), r0 * 0.8 * knee, 8, m, r_end=r1)
    blob("knee", r0 * 0.95, (0, 0.02, -0.32), m, sub=1)
    blob("hoof", r1 * 1.25, (0, 0.012, -0.595), h, scale=(1, 1.35, 0.7), sub=1)
    return finish(name, tone=0.06, seed=3)


# ------------------------------------------------------------------- sheep ----

def sheep():
    rnd = random.Random(11)
    wool = wb.mat("wool", 0xe9e2d4)
    wool_dk = wb.mat("wool_dk", 0xcfc6b4)
    skin = wb.mat("face", 0x4a4036)
    # lumpy wool body
    for i in range(12):
        t = rnd.uniform(-0.62, 0.62)
        blob(f"w{i}", rnd.uniform(0.27, 0.36), (rnd.uniform(-0.18, 0.18), t, rnd.uniform(-0.1, 0.2)), wool if i % 2 else wool_dk,
             scale=(1.0, 1.0, 0.92), sub=2, jitter=0.03, rnd=rnd)
    blob("core", 0.4, (0, 0, 0), wool, scale=(1.0, 1.9, 0.95), sub=2)
    blob("tail", 0.1, (0, -0.95, 0.1), wool_dk, scale=(0.9, 1.0, 1.2), sub=1)
    finish("sheep_body", tone=0.12, seed=5)

    wb.reset()
    wool = wb.mat("wool", 0xe9e2d4)
    skin = wb.mat("face", 0x4a4036)
    # head: dark face under a woolly cap, side ears
    blob("neck", 0.14, (0, 0.05, 0.05), wool, scale=(1, 1.2, 1.1), sub=1)
    blob("face", 0.14, (0, 0.28, 0.0), skin, scale=(0.9, 1.5, 1.0), sub=2)
    blob("muzzle", 0.075, (0, 0.46, -0.04), skin, scale=(1, 1.2, 0.8), sub=1)
    blob("cap", 0.13, (0, 0.14, 0.1), wool, scale=(1.1, 1.0, 0.9), sub=2)
    for s in (-1, 1):
        blob(f"ear{s}", 0.06, (s * 0.15, 0.17, 0.03), skin, scale=(1.6, 0.55, 0.5), sub=1)
        eye(s, (0.085, 0.37, 0.05))
    finish("sheep_head", tone=0.06, seed=6)
    wb.reset()
    leg("sheep_leg", 0.07, 0.04, 0x453b32, 0x1e1812)


# -------------------------------------------------------------------- deer ----

def antler(rnd, side, big=1.0, col=0xcdbfa0, base=(0.0, 0.03, 0.06)):
    m = wb.mat("antler", col)
    b = Vector(base)
    top = b + Vector((side * 0.1 * big, -0.08 * big, 0.5 * big))
    mid = (b + top) / 2
    wb.between("beam", b, top, 0.016 * big, 5, m, r_end=0.01)
    for k, (f, dy, dx) in enumerate([(0.35, 0.12, 0.18), (0.6, 0.1, 0.2), (0.85, 0.06, 0.15)]):
        p = b + (top - b) * f
        wb.between(f"tine{k}", p, p + Vector((side * dx * big, dy * big, 0.15 * big)), 0.011 * big, 4, m, r_end=0.006)
    wb.between("brow", b + (top - b) * 0.1, b + (top - b) * 0.1 + Vector((side * 0.04, 0.18 * big, 0.06 * big)), 0.012 * big, 4, m, r_end=0.007)


def deer(name="deer", coat=0xa5713d, belly=0xd8bf9a, antlers=True, big=1.0):
    rnd = random.Random(21)
    c = wb.mat("coat", coat)
    c2 = wb.mat("coat2", dim(coat, 0.88))
    lt = wb.mat("belly", belly)
    wh = wb.mat("tail", 0xf3ece0)
    # slim torso: barrel + shoulders + haunch
    blob("barrel", 0.34, (0, 0, 0), c, scale=(0.82, 2.35, 0.95), sub=3)
    blob("shoulder", 0.3, (0, 0.42, 0.04), c, scale=(0.8, 1.2, 1.0), sub=2)
    blob("haunch", 0.32, (0, -0.52, 0.0), c2, scale=(0.9, 1.2, 1.0), sub=2)
    blob("tail", 0.07, (0, -0.86, 0.12), wh, scale=(0.8, 1.2, 1.5), sub=1)
    finish(f"{name}_body", tone=0.09, seed=8, belly=(wb.srgb(belly), -0.1))

    wb.reset()
    c = wb.mat("coat", coat)
    c2 = wb.mat("coat2", dim(coat, 0.88))
    lt = wb.mat("belly", belly)
    # long neck rising from the shoulders, then a fine head
    wb.between("neck", (0, 0.0, 0.0), (0, 0.3, 0.42), 0.13, 8, c, r_end=0.075)
    blob("throat", 0.085, (0, 0.2, 0.18), lt, scale=(0.8, 1.2, 1.0), sub=1)
    blob("skull", 0.1, (0, 0.34, 0.5), c, scale=(0.95, 1.4, 1.0), sub=2)
    wb.between("snout", (0, 0.4, 0.49), (0, 0.62, 0.43), 0.07, 8, c, r_end=0.045)
    blob("nose", 0.042, (0, 0.645, 0.425), wb.mat("nose", 0x1c1612), scale=(1, 1, 0.8), sub=1)
    for s in (-1, 1):
        ear = blob(f"ear{s}", 0.07, (s * 0.15, 0.27, 0.56), c2, scale=(0.55, 0.3, 1.9), sub=1)
        ear.rotation_euler = (0.0, s * 0.5, 0.0)
        eye(s, (0.085, 0.45, 0.53), 0.026)
    if antlers:
        for s in (-1, 1):
            antler(rnd, s, big, base=(s * 0.06, 0.27, 0.58))
    finish(f"{name}_head", tone=0.05, seed=9)
    wb.reset()
    leg(f"{name}_leg", 0.05, 0.028, coat, 0x2a2118, knee=1.1)


# --------------------------------------------------------------------- cow ----

def cow():
    rnd = random.Random(31)
    white = wb.mat("hide_w", 0xe9e3d6)
    dark = wb.mat("hide_d", 0x4a3524)
    pink = wb.mat("udder", 0xe2a8a0)
    blob("barrel", 0.48, (0, 0, 0), white, scale=(1.0, 1.95, 0.98), sub=3)
    blob("chest", 0.45, (0, 0.5, -0.02), white, scale=(1.0, 1.1, 1.05), sub=2)
    blob("rump", 0.44, (0, -0.55, 0.04), white, scale=(1.0, 1.1, 1.0), sub=2)
    blob("hump", 0.2, (0, 0.3, 0.36), white, scale=(1, 1.2, 0.8), sub=1)
    blob("udder", 0.16, (0, -0.58, -0.4), pink, scale=(1, 1, 0.8), sub=1)
    wb.between("tail", (0, -0.92, 0.2), (0, -1.05, -0.45), 0.025, 5, white, r_end=0.02)
    blob("tuft", 0.06, (0, -1.06, -0.5), dark, scale=(1, 1, 1.6), sub=1)
    finish("cow_body", tone=0.07, seed=13, spots=(wb.srgb(0x4a3524), 1.7, 0.12))

    wb.reset()
    white = wb.mat("hide_w", 0xe9e3d6)
    dark = wb.mat("hide_d", 0x4a3524)
    horn = wb.mat("horn", 0xe6dcc0)
    blob("neck", 0.22, (0, 0.12, 0.05), white, scale=(1, 1.3, 1.1), sub=2)
    blob("skull", 0.17, (0, 0.38, 0.04), white, scale=(1.0, 1.4, 1.0), sub=2)
    blob("muzzle", 0.12, (0, 0.62, -0.06), wb.mat("nose", 0xe2b0a8), scale=(1.1, 1.0, 0.8), sub=2)
    for s in (-1, 1):
        ear = blob(f"ear{s}", 0.07, (s * 0.22, 0.34, 0.1), dark, scale=(1.8, 0.5, 0.6), sub=1)
        wb.between(f"horn{s}", (s * 0.12, 0.3, 0.2), (s * 0.3, 0.32, 0.34), 0.03, 6, horn, r_end=0.01)
        eye(s, (0.13, 0.5, 0.08), 0.03)
    blob("patch", 0.1, (0.07, 0.42, 0.14), dark, scale=(1, 1, 0.8), sub=1)
    finish("cow_head", tone=0.05, seed=14)
    wb.reset()
    leg("cow_leg", 0.085, 0.052, 0xe0d8c8, 0x2a2118)


# ---------------------------------------------------------------- the stag ----

def stag():
    # the night stag: a deer, taller, with a branching crown (the engine lights it)
    deer("stag", coat=0xcfe3ee, belly=0xf2fbff, antlers=True, big=1.7)


BUILD = [sheep, deer, cow, stag]

OUT = os.path.join(wb.OUT, "wildlife.glb")
for fn in BUILD:
    wb.reset()
    fn()
wb.reset()
objs = sorted(holding.objects, key=lambda o: o.name)
for i, o in enumerate(objs):
    bpy.context.scene.collection.objects.link(o)
    o.location = ((i % 6) * 3.0, -(i // 6) * 3.0, 0)
wb.export_glb(OUT, objs, apply_mods=False)
for o in objs:
    print(f"    {o.name}: {len(o.data.polygons)} faces")
if "--preview" in sys.argv:
    wb.contact_sheet([(OUT, "wildlife")], os.path.join(wb.PREVIEW, "wildlife.png"), cell=3.0, cols=1, height=2.0, res=(1800, 900))
print("Wildlife generated OK")
