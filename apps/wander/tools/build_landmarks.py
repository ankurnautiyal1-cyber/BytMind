#!/usr/bin/env python3
"""The Wilds' landmarks, rebuilt with bevels, baked ambient occlusion, moss and weathering.

Usage:
  /Applications/Blender.app/Contents/MacOS/Blender --background \
      --python tools/build_landmarks.py [-- name ...]

Writes public/assets/{ruin_tower,lighthouse,windmill_body,windmill_blades,stone_arch,
shipwreck,tent,campfire,monolith,shrine_pedestal}.glb. Footprints, origins and the
points src/pois.js hangs things on (lamp room, wheel hub, door side) are unchanged,
so colliders and runtime composition keep working.

Each asset is one mesh: stone / wood / plaster come from painted vertex colours
(material colour -> tonal noise -> strata or moss -> dirt -> baked AO). Anything that
glows is a separate emissive material whose *name* the engine looks up:
  lh_lamp      lighthouse lamp room         rune     monolith glyphs / shrine inlay
  lantern      campsite lantern
"""

import math
import os
import random
import sys

import bmesh
import bpy
from mathutils import Vector

sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), "lib"))
import wander_bpy as wb  # noqa: E402

STONE, STONE_DK, STONE_LT = 0x938c7d, 0x6a645a, 0xb7b09f
MOSS = wb.srgb(0x5b7d3a)
MOSS_DK = wb.srgb(0x3f5e2c)
WOOD, WOOD_DK, WOOD_LT = 0x6b4a33, 0x40301f, 0x8a6a48
PLASTER, WHITE, RED = 0xe2d6bf, 0xf0eadc, 0xb8472f
COPPER = 0x5fa38a
CANVAS, ROPE = 0xd2bb8e, 0xb39c6b
SOOT = wb.srgb(0x1c1814)
GRIME = wb.srgb(0x4a4438)


def finish(name, seed=1, sub=0.85, bev=0.06, bev_seg=2, moss_amt=0.0, moss_up=0.45, dirt_amt=0.45,
           dirt_h=1.3, tone_amt=0.14, stains=0.0, ao=True, ao_dist=2.2, ao_k=0.8, smooth=42,
           strata_cols=None, strata_freq=1.5):
    ob = wb.join_all(name)
    if sub:
        wb.subdivide_for_paint(ob, sub)
    if bev:
        wb.bevel(ob, bev, bev_seg)
    wb.paint_materials(ob)
    if strata_cols:
        wb.strata(ob, strata_cols, freq=strata_freq, seed=seed)
    wb.tone(ob, tone_amt, seed=seed)
    if stains:
        wb.stain(ob, GRIME, amount=stains, seed=seed)
    if moss_amt:
        wb.moss(ob, MOSS, up=moss_up, amount=moss_amt, seed=seed)
        wb.moss(ob, MOSS_DK, up=0.8, amount=moss_amt * 0.5, scale=3.0, seed=seed + 5)
    if dirt_amt:
        wb.dirt(ob, GRIME, height=dirt_h, amount=dirt_amt)
    if ao:
        wb.bake_ao(ob, rays=18, dist=ao_dist, strength=ao_k, seed=seed)
    wb.paint_finish(ob)
    wb.smooth_by_angle(ob, smooth)
    wb.export_glb(os.path.join(wb.OUT, f"{name}.glb"), [ob])
    return ob


def rock_chunk(name, r, loc, m, rnd, flat=0.7, cuts=4):
    ob = wb.ico(name, r, loc, m, scale=(1, rnd.uniform(0.75, 1.0), flat), sub=2)
    wb.rockify(ob, rnd, cuts=cuts, size=r, rough=0.05)
    return ob


# ------------------------------------------------------------------ tower ----

def ruin_tower():
    rnd = random.Random(11)
    stone = wb.mat("stone", STONE)
    light = wb.mat("stone_lt", STONE_LT)
    dark = wb.mat("stone_dk", STONE_DK)
    black = wb.mat("hole", 0x15120f)

    # coursed wall
    z = 0.0
    for i in range(18):
        k = i / 17
        r = 3.0 - 0.25 * k + rnd.uniform(-0.05, 0.05)
        wb.cyl(f"course{i}", r + 0.04, r, 0.5, 10, (0, 0, z + 0.25), light if i % 5 == 3 else stone,
               rot=(0, 0, rnd.uniform(0, 0.6)))
        z += 0.5
    # broken crown: wall blocks of uneven height, ring walk behind them
    for j in range(10):
        a = j / 10 * math.tau + 0.15
        h = rnd.choice([0.5, 0.9, 1.4, 1.9, 0.7]) if j not in (2, 3) else 0.35
        r = 2.55
        w = 1.78
        b = wb.box(f"crown{j}", (w, 0.62, h), (math.cos(a) * r, math.sin(a) * r, 9.0 + h / 2), stone if j % 2 else light,
                   rot=(rnd.uniform(-0.04, 0.04), rnd.uniform(-0.04, 0.04), a + math.pi / 2))
    # floor slab inside the break + collapsed beams
    wb.cyl("break_floor", 2.5, 2.5, 0.5, 10, (0, 0, 8.75), dark)
    for i in range(3):
        a = rnd.uniform(0, math.tau)
        wb.between(f"beam{i}", (math.cos(a) * 2.2, math.sin(a) * 2.2, 9.2), (math.cos(a + 3.0) * 0.8, math.sin(a + 3.0) * 0.8, 10.4 - i * 0.4),
                   0.11, 5, wb.mat("beam", WOOD_DK))

    # doorway on +Y: stone surround + dark opening + arch
    wb.box("door_hole", (1.35, 0.7, 2.0), (0, 2.78, 1.05), black)
    wb.cyl("door_arch", 0.68, 0.68, 0.7, 10, (0, 2.78, 2.05), black, rot=(math.pi / 2, 0, 0))
    wb.box("door_jamb_l", (0.34, 0.55, 2.4), (-0.95, 2.78, 1.2), light)
    wb.box("door_jamb_r", (0.34, 0.55, 2.4), (0.95, 2.78, 1.2), light)
    wb.box("door_lintel", (2.4, 0.6, 0.42), (0, 2.8, 2.72), light)
    wb.box("door_step", (2.6, 1.3, 0.22), (0, 3.4, 0.11), dark)
    # window slits with sills, spiralling up the wall
    for k, (ang, zz) in enumerate([(math.pi / 2 + 0.0, 5.5), (math.pi * 0.05, 6.4), (math.pi * 1.1, 4.4), (math.pi * 1.55, 7.2), (math.pi * 0.62, 7.7)]):
        r = 3.0 - 0.25 * (zz / 9.0) - 0.05
        x, y = math.cos(ang) * r, math.sin(ang) * r
        s = wb.box(f"slit{k}", (0.42, 0.5, 1.15), (x, y, zz), black, rot=(0, 0, ang - math.pi / 2))
        sill = wb.box(f"sill{k}", (0.8, 0.5, 0.18), (x * 1.01, y * 1.01, zz - 0.66), light, rot=(0, 0, ang - math.pi / 2))
        top = wb.box(f"hood{k}", (0.7, 0.5, 0.16), (x * 1.01, y * 1.01, zz + 0.66), light, rot=(0, 0, ang - math.pi / 2))
    # fallen blocks + rubble
    for i in range(12):
        a = rnd.uniform(0, math.tau)
        d = rnd.uniform(3.4, 5.4)
        b = wb.box(f"fall{i}", (rnd.uniform(0.5, 0.95), rnd.uniform(0.4, 0.7), rnd.uniform(0.3, 0.55)),
                   (math.cos(a) * d, math.sin(a) * d, 0.2), stone if i % 3 else dark,
                   rot=(rnd.uniform(-0.2, 0.2), rnd.uniform(-0.2, 0.2), rnd.uniform(0, 3)))
    for i in range(10):
        a = rnd.uniform(0, math.tau)
        d = rnd.uniform(3.2, 5.4)
        rock_chunk(f"rub{i}", rnd.uniform(0.28, 0.7), (math.cos(a) * d, math.sin(a) * d, 0.15), stone if i % 2 else dark, rnd, flat=0.55)
    finish("ruin_tower", seed=3, sub=0.8, bev=0.05, moss_amt=0.8, dirt_amt=0.55, stains=0.5, ao_dist=2.6)


# -------------------------------------------------------------- lighthouse ----

def lighthouse():
    rnd = random.Random(21)
    white = wb.mat("lh_white", WHITE)
    red = wb.mat("lh_red", RED)
    stone = wb.mat("stone", STONE)
    dark = wb.mat("lh_dark", 0x39342d)
    black = wb.mat("hole", 0x15120f)
    cop = wb.mat("lh_roof", COPPER, metallic=0.2)
    lamp = wb.mat("lh_lamp", 0xfff2c0, emit=0xffe3a0, strength=6.0)

    def rad(z):
        return 2.45 - 0.7 * (z - 0.8) / 10.6

    # rocky footing + plinth
    for i in range(9):
        a = i / 9 * math.tau + rnd.uniform(-0.2, 0.2)
        d = rnd.uniform(3.0, 3.9)
        rock_chunk(f"foot{i}", rnd.uniform(0.7, 1.3), (math.cos(a) * d, math.sin(a) * d, 0.1), stone, rnd, flat=0.6)
    wb.cyl("plinth", 3.05, 2.8, 1.4, 10, (0, 0, 0.7), stone)
    wb.cyl("plinth_cap", 2.9, 2.9, 0.16, 10, (0, 0, 1.45), wb.mat("stone_lt", STONE_LT))
    # banded tower (white, red in three stripes like the old one)
    bands = [(0.8, 2.0, white), (2.0, 3.4, red), (3.4, 5.4, white), (5.4, 6.8, red), (6.8, 8.6, white), (8.6, 10.0, red), (10.0, 11.4, white)]
    for i, (z0, z1, m) in enumerate(bands):
        wb.cyl(f"band{i}", rad(z0) + (0.04 if m is red else 0.0), rad(z1) + (0.04 if m is red else 0.0), z1 - z0, 12, (0, 0, (z0 + z1) / 2), m)
    # slit windows up the tower
    for k in range(7):
        z = 2.7 + k * 1.2
        a = k * 1.15 + 0.4
        r = rad(z) + 0.03
        wb.box(f"win{k}", (0.32, 0.4, 0.7), (math.cos(a) * r, math.sin(a) * r, z), black, rot=(0, 0, a - math.pi / 2))
    # door + steps on +Y
    wb.box("door", (1.15, 0.7, 2.0), (0, 2.58, 2.15), black)
    wb.cyl("door_arch", 0.58, 0.58, 0.7, 10, (0, 2.58, 3.15), black, rot=(math.pi / 2, 0, 0))
    wb.box("door_frame", (1.7, 0.5, 0.3), (0, 2.6, 3.9), wb.mat("stone_lt", STONE_LT))
    wb.box("step0", (2.0, 1.1, 0.3), (0, 3.2, 1.45), stone)
    wb.box("step1", (1.6, 0.7, 0.3), (0, 3.7, 1.2), stone)
    # gallery: deck, corbels, rail
    wb.cyl("gallery", 2.45, 2.45, 0.3, 12, (0, 0, 11.55), dark)
    for i in range(12):
        a = i / 12 * math.tau
        wb.box(f"corbel{i}", (0.3, 0.5, 0.45), (math.cos(a) * 2.0, math.sin(a) * 2.0, 11.2), dark, rot=(0, 0, a + math.pi / 2))
    wb.torus("rail", 2.3, 0.05, (0, 0, 12.5), dark, seg=24, mseg=4)
    for i in range(16):
        a = i / 16 * math.tau
        wb.cyl(f"post{i}", 0.05, 0.05, 1.0, 4, (math.cos(a) * 2.3, math.sin(a) * 2.3, 12.0), dark)
    # lamp room: emissive core in a glazing cage
    wb.cyl("lamp", 1.0, 1.0, 1.15, 12, (0, 0, 12.35), lamp)
    for i in range(8):
        a = i / 8 * math.tau + 0.2
        wb.cyl(f"mullion{i}", 0.05, 0.05, 1.25, 4, (math.cos(a) * 1.07, math.sin(a) * 1.07, 12.35), dark)
    wb.torus("lamp_ring_lo", 1.08, 0.06, (0, 0, 11.78), dark, seg=16)
    wb.torus("lamp_ring_hi", 1.08, 0.06, (0, 0, 12.95), dark, seg=16)
    # copper dome, finial, rod
    wb.cyl("roof", 1.4, 0.12, 1.0, 12, (0, 0, 13.55), cop)
    wb.cyl("roof_lip", 1.45, 1.45, 0.14, 12, (0, 0, 13.0), cop)
    wb.ico("finial", 0.2, (0, 0, 14.15), cop)
    wb.cyl("rod", 0.025, 0.025, 1.4, 4, (0, 0, 14.75), dark)
    # weathervane arm
    wb.box("vane", (0.9, 0.04, 0.16), (0.35, 0, 14.55), dark)
    finish("lighthouse", seed=5, sub=0.9, bev=0.05, moss_amt=0.35, dirt_amt=0.5, dirt_h=2.2, stains=0.45, ao_dist=2.4)


# ---------------------------------------------------------------- windmill ----

def windmill_body():
    rnd = random.Random(31)
    plaster = wb.mat("plaster", PLASTER)
    stone = wb.mat("stone", STONE)
    wood = wb.mat("wood", WOOD)
    wood_dk = wb.mat("wood_dk", WOOD_DK)
    black = wb.mat("hole", 0x15120f)
    shingle = wb.mat("shingle", 0x6a523a)

    wb.cyl("base", 2.95, 2.8, 1.2, 9, (0, 0, 0.6), stone)
    wb.cyl("base_cap", 2.75, 2.7, 0.18, 9, (0, 0, 1.25), stone)
    wb.cyl("body", 2.6, 1.95, 8.2, 9, (0, 0, 4.9), plaster)
    # timber frame: rings + posts
    for z in (2.6, 4.7, 6.8, 8.8):
        r = 2.6 - 0.65 * (z - 0.8) / 8.2
        wb.cyl(f"ring{int(z * 10)}", r + 0.07, r + 0.07, 0.2, 9, (0, 0, z), wood_dk)
    for i in range(9):
        a = i / 9 * math.tau
        r0, r1 = 2.62, 2.0
        p0 = (math.cos(a) * r0, math.sin(a) * r0, 0.95)
        p1 = (math.cos(a) * r1, math.sin(a) * r1, 8.9)
        wb.between(f"post{i}", p0, p1, 0.075, 4, wood_dk)
    # door (+Y), with frame and a small porch roof
    wb.box("door", (1.15, 0.7, 2.0), (0, 2.45, 2.0), black)
    wb.box("door_l", (0.2, 0.6, 2.2), (-0.7, 2.5, 2.05), wood)
    wb.box("door_r", (0.2, 0.6, 2.2), (0.7, 2.5, 2.05), wood)
    wb.box("door_top", (1.8, 0.65, 0.22), (0, 2.5, 3.2), wood)
    wb.box("porch", (2.0, 1.3, 0.1), (0, 3.0, 3.55), wood_dk, rot=(0.25, 0, 0))
    # upper window with shutters + a ladder
    wb.box("win", (0.75, 0.6, 0.95), (0, 2.12, 6.4), black)
    wb.box("shutter_l", (0.34, 0.12, 1.0), (-0.62, 2.22, 6.4), wood, rot=(0, 0, 0.3))
    wb.box("shutter_r", (0.34, 0.12, 1.0), (0.62, 2.22, 6.4), wood, rot=(0, 0, -0.3))
    wb.box("sill", (1.1, 0.4, 0.14), (0, 2.28, 5.85), wood_dk)
    # cap: curb + shingle rows + axle housing
    wb.cyl("curb", 2.2, 2.15, 0.3, 9, (0, 0, 9.15), wood_dk)
    for i in range(5):
        r0 = 2.3 - i * 0.42
        r1 = 2.0 - i * 0.42 if i < 4 else 0.12
        wb.cyl(f"cap{i}", r0, max(r1, 0.12), 0.4, 9, (0, 0, 9.4 + i * 0.36), shingle if i % 2 else wood)
    wb.ico("finial", 0.2, (0, 0, 11.35), wood_dk)
    wb.between("axle", (0, 0.4, 9.6), (0, 2.1, 9.6), 0.16, 8, wood_dk)
    wb.cyl("axle_collar", 0.28, 0.28, 0.25, 8, (0, 1.4, 9.6), wood_dk, rot=(math.pi / 2, 0, 0))
    # tail pole
    wb.between("tail", (0, -1.7, 9.45), (0, -4.2, 5.4), 0.1, 5, wood_dk)
    # sacks + barrel by the door
    for i in range(3):
        wb.ico(f"sack{i}", 0.38, (-1.6 + i * 0.5, 3.1 + 0.1 * i, 0.34), wb.mat("sack", 0xb8a37a), scale=(1, 0.9, 1.25), sub=1, jitter=0.03, rnd=rnd)
    finish("windmill_body", seed=7, sub=0.9, bev=0.05, moss_amt=0.35, dirt_amt=0.5, stains=0.5, ao_dist=2.2, tone_amt=0.1)


def windmill_blades():
    wood = wb.mat("wood_dk", WOOD_DK)
    wood2 = wb.mat("wood", WOOD)
    cloth = wb.mat("sail", 0xe8dcc0)
    # hub: axis along Y
    wb.cyl("hub", 0.3, 0.3, 1.0, 8, (0, 0.1, 0), wood2, rot=(math.pi / 2, 0, 0))
    wb.cyl("hub_cap", 0.2, 0.06, 0.3, 8, (0, 0.78, 0), wood, rot=(math.pi / 2, 0, 0))
    for i in range(4):
        a = math.radians(90 * i)
        d = Vector((math.sin(a), 0, math.cos(a)))
        n = Vector((math.cos(a), 0, -math.sin(a)))     # across the sail
        wb.slab_between(f"spar{i}", d * 0.25, d * 5.75, 0.16, 0.16, wood)
        # lattice frame beside the spar
        o = n * 0.55
        for off in (0.1, 1.0):
            wb.slab_between(f"rail{i}_{int(off * 10)}", d * 1.3 + n * off, d * 5.5 + n * off, 0.08, 0.06, wood2)
        for k in range(8):
            r = 1.3 + k * 0.6
            wb.slab_between(f"bar{i}_{k}", d * r + n * 0.08, d * r + n * 1.02, 0.08, 0.06, wood2)
        # cloth on the inner half
        c0, c1 = 1.6, 4.1
        wb.box(f"cloth{i}", (0.84, 0.03, c1 - c0), (0, -0.05, 0), cloth)
        ob = bpy.context.active_object
        ob.location = d * ((c0 + c1) / 2) + n * 0.55 + Vector((0, -0.06, 0))
        ob.rotation_mode = "XYZ"
        ob.rotation_euler = (0, a, 0)
        # a slight twist so the sails catch the light
        ob.rotation_euler.y = a
    finish("windmill_blades", seed=9, sub=0, bev=0.02, bev_seg=1, dirt_amt=0.2, ao=False, tone_amt=0.08)


# -------------------------------------------------------------- stone arch ----

def stone_arch():
    rnd = random.Random(41)
    stone = wb.mat("stone", 0x9a8f7d)
    dark = wb.mat("stone_dk", 0x7c7263)
    for i in range(9):
        a = math.pi * i / 8
        x = math.cos(a) * 6.2 + rnd.uniform(-0.4, 0.4)
        z = 2.4 + math.sin(a) * 6.6 + rnd.uniform(-0.3, 0.3)
        s = 2.35 - abs(i - 4) * 0.14 + rnd.uniform(-0.15, 0.15)
        o = wb.ico(f"span{i}", s, (x, 0, z), stone, scale=(1.05, rnd.uniform(0.8, 1.0), 0.85), sub=3)
        wb.rockify(o, rnd, cuts=5, size=s, rough=0.06)
    for sx in (-1, 1):
        for j in range(3):
            s = rnd.uniform(1.6, 2.5)
            o = wb.ico(f"leg{sx}{j}", s, (sx * (6.4 + j * 1.1), rnd.uniform(-1, 1), 1.0 + j * 0.5), dark if j == 0 else stone,
                       scale=(1, 0.88, rnd.uniform(0.85, 1.1)), sub=3)
            wb.rockify(o, rnd, cuts=5, size=s, rough=0.07)
    for i in range(7):
        a = rnd.uniform(0, math.tau)
        d = rnd.uniform(8, 13)
        rock_chunk(f"fallen{i}", rnd.uniform(0.4, 1.0), (math.cos(a) * d, math.sin(a) * d, 0.2), stone, rnd, flat=0.6)
    cols = [wb.srgb(0x9a8f7d), wb.srgb(0xb2a58c), wb.srgb(0x857a68), wb.srgb(0xa89a82)]
    finish("stone_arch", seed=13, sub=1.0, bev=0, moss_amt=0.9, moss_up=0.35, dirt_amt=0.5, dirt_h=2.5,
           strata_cols=cols, strata_freq=1.1, tone_amt=0.1, ao_dist=3.0, smooth=55)


# --------------------------------------------------------------- shipwreck ----

def shipwreck():
    rnd = random.Random(51)
    plank_a = wb.mat("plank_a", 0x5c4733)
    plank_b = wb.mat("plank_b", 0x4a3a2a)
    rib = wb.mat("rib", 0x2f2418)
    sailm = wb.mat("sail", 0xcdbf9e)
    weed = wb.mat("weed", 0x3d6a3a)
    rope = wb.mat("rope", ROPE)

    ST, AR = 13, 13  # stations, arc points
    L = 9.0
    pts = []
    bm = bmesh.new()
    grid = []
    for i in range(ST):
        t = i / (ST - 1)
        s = 2 * t - 1                       # -1 stern .. +1 bow
        half = 1.7 * (1 - max(0.0, s) ** 3.0 * 0.96) ** 0.62 * (0.8 + 0.2 * (1 - s * s))
        hgt = 1.75 + 0.55 * max(0.0, s) ** 2 + 0.3 * max(0.0, -s) ** 2
        row = []
        for j in range(AR):
            a = -math.pi / 2 + math.pi * j / (AR - 1)
            y = half * math.sin(a)
            z = hgt * (1 - math.cos(a)) * 0.95 + 0.05
            row.append(Vector((-L / 2 + L * t, y, z)))
        grid.append(row)
    verts = [[bm.verts.new(p) for p in row] for row in grid]
    removed = 0
    for i in range(ST - 1):
        for j in range(AR - 1):
            upper = abs(j - (AR - 1) / 2) > 3
            mid = 3 <= i <= 9
            if upper and mid and rnd.random() < 0.42:
                removed += 1
                continue
            f = bm.faces.new((verts[i][j], verts[i + 1][j], verts[i + 1][j + 1], verts[i][j + 1]))
            f.material_index = (i + j) % 2
    bm.normal_update()
    hull = wb.mesh_obj("hull", bm, None, solidify=0.14)
    hull.data.materials.append(plank_a)
    hull.data.materials.append(plank_b)
    # ribs that show through the gaps (and a few that poke up past the gunwale)
    for i in (1, 3, 5, 7, 9, 11):
        row = grid[i]
        for j in range(AR - 1):
            a, b = row[j] * 0.97 + Vector((0, 0, 0.02)), row[j + 1] * 0.97 + Vector((0, 0, 0.02))
            wb.between(f"rib{i}_{j}", Vector((a.x, a.y * 0.96, a.z)), Vector((b.x, b.y * 0.96, b.z)), 0.075, 4, rib)
        for sgn in (-1, 1):
            if rnd.random() < 0.7:
                top = row[0 if sgn < 0 else AR - 1]
                wb.between(f"stub{i}{sgn}", top, top + Vector((0, sgn * 0.12, rnd.uniform(0.2, 0.9))), 0.07, 4, rib)
    # deck remnants at the stern, a keel beam
    for k in range(5):
        wb.box(f"deck{k}", (1.7, 0.42, 0.07), (-3.4 + rnd.uniform(-0.1, 0.1), -0.9 + k * 0.45, 1.3 + rnd.uniform(-0.04, 0.04)), plank_a,
               rot=(0, rnd.uniform(-0.05, 0.05), rnd.uniform(-0.08, 0.08)))
    wb.box("keel", (L - 0.4, 0.2, 0.22), (0, 0, 0.1), rib)
    # broken mast, yard and a torn sail
    mast = wb.between("mast", (1.0, 0, 1.2), (1.8, 0.55, 5.6), 0.16, 6, plank_b, r_end=0.11)
    wb.between("yard", (1.55, -0.2, 4.7), (2.2, 1.9, 5.0), 0.07, 5, plank_b)
    sb = bmesh.new()
    sg = []
    NX, NZ = 6, 5
    for i in range(NX + 1):
        r = []
        for k in range(NZ + 1):
            u, v = i / NX, k / NZ
            r.append(sb.verts.new(Vector((1.65 + 0.55 * u, -0.1 + 1.9 * u, 4.65 - 1.9 * v + 0.35 * math.sin(u * 5 + v * 2)))))
        sg.append(r)
    for i in range(NX):
        for k in range(NZ):
            if (i + k) % 3 == 0 and rnd.random() < 0.8 and k > 1:
                continue
            sb.faces.new((sg[i][k], sg[i + 1][k], sg[i + 1][k + 1], sg[i][k + 1]))
    wb.mesh_obj("sail", sb, sailm, solidify=0.03)
    for i in range(4):
        wb.between(f"rope{i}", (1.4 + 0.1 * i, 0.5, 4.4), (-0.4 + 1.2 * i, (-1.5 if i % 2 else 1.5), 1.9), 0.025, 4, rope)
    # seaweed + barnacled lumps along the waterline
    for i in range(14):
        t = rnd.uniform(-3.6, 3.4)
        side = rnd.choice([-1, 1])
        wb.ico(f"weed{i}", rnd.uniform(0.14, 0.3), (t, side * rnd.uniform(1.0, 1.5), rnd.uniform(0.2, 0.7)), weed, scale=(1, 0.7, 1.7), sub=1, jitter=0.03, rnd=rnd)
    finish("shipwreck", seed=17, sub=0.0, bev=0.0, moss_amt=0.0, dirt_amt=0.35, dirt_h=1.0, stains=0.4, tone_amt=0.18, ao_dist=1.6, ao_k=0.7, smooth=60)


# -------------------------------------------------------------------- tent ----

def tent():
    rnd = random.Random(61)
    canvas = wb.mat("canvas", CANVAS)
    canvas2 = wb.mat("canvas2", 0xbfa87a)
    black = wb.mat("tent_dark", 0x211a14)
    wood = wb.mat("wood", WOOD)
    rope = wb.mat("rope", ROPE)
    lantern = wb.mat("lantern", 0xffd9a0, emit=0xffc27a, strength=5.0)

    HW, HL, H = 1.3, 1.6, 1.9
    bm = bmesh.new()
    NY, NX = 8, 5
    for side in (-1, 1):
        g = []
        for i in range(NX + 1):
            t = i / NX
            row = []
            for j in range(NY + 1):
                u = j / NY
                y = -HL - 0.15 + (2 * HL + 0.3) * u
                x = side * HW * (1 - t)
                z = H * t - 0.09 * math.sin(math.pi * t) * math.sin(math.pi * u)
                row.append(bm.verts.new(Vector((x, y, max(0.02, z)))))
            g.append(row)
        for i in range(NX):
            for j in range(NY):
                f = bm.faces.new((g[i][j], g[i + 1][j], g[i + 1][j + 1], g[i][j + 1]))
                f.material_index = (j // 2) % 2
    # back gable (closed)
    a = [bm.verts.new(Vector(p)) for p in ((-HW, -HL - 0.15, 0.02), (HW, -HL - 0.15, 0.02), (0, -HL - 0.15, H))]
    bm.faces.new(a)
    tent_body = wb.mesh_obj("tent_body", bm, canvas, solidify=0.035)
    tent_body.data.materials.append(canvas2)
    # open front: dark interior wedge + a rolled, tied-back door flap
    bm2 = bmesh.new()
    v1 = bm2.verts.new((-0.62, HL + 0.01, 0.03)); v2 = bm2.verts.new((0.62, HL + 0.01, 0.03)); v3 = bm2.verts.new((0.0, HL + 0.01, H * 0.76))
    bm2.faces.new((v1, v2, v3))
    wb.mesh_obj("opening", bm2, black, solidify=0.02)
    wb.cyl("flap_roll_l", 0.1, 0.1, 1.5, 6, (-0.66, HL + 0.08, 0.78), canvas2, rot=(0.0, 0.5, 0.0))
    wb.cyl("flap_roll_r", 0.1, 0.1, 1.5, 6, (0.66, HL + 0.08, 0.78), canvas2, rot=(0.0, -0.5, 0.0))
    # ground sheet, ridge pole and the guy ropes with pegs
    wb.box("groundsheet", (2.5, 3.1, 0.03), (0, 0, 0.02), black)
    wb.between("ridge", (0, -HL - 0.3, H - 0.02), (0, HL + 0.3, H - 0.02), 0.045, 5, wood)
    wb.between("pole_f", (0, HL + 0.25, 0.0), (0, HL + 0.25, H + 0.1), 0.05, 5, wood)
    for sy in (-1, 1):
        peg = (0.0, sy * (HL + 1.55), 0.0)
        wb.between(f"guy{sy}", (0, sy * (HL + 0.25), H - 0.05), (peg[0], peg[1], 0.12), 0.012, 4, rope)
        wb.between(f"peg{sy}", (peg[0], peg[1], 0.0), (peg[0], peg[1] + sy * 0.05, 0.28), 0.03, 4, wood)
    for sx in (-1, 1):
        for sy in (-1, 1):
            p = (sx * (HW + 0.75), sy * (HL * 0.7), 0.0)
            wb.between(f"gside{sx}{sy}", (sx * HW * 0.35, sy * HL * 0.7, H * 0.65), (p[0], p[1], 0.1), 0.012, 4, rope)
            wb.between(f"pside{sx}{sy}", p, (p[0] + sx * 0.04, p[1], 0.26), 0.028, 4, wood)
    # a lantern hung from the front pole
    wb.cyl("lantern_cap", 0.1, 0.06, 0.07, 6, (0, HL + 0.25, H - 0.22), black)
    wb.cyl("lantern", 0.085, 0.085, 0.2, 6, (0, HL + 0.25, H - 0.35), lantern)
    wb.cyl("lantern_base", 0.09, 0.09, 0.04, 6, (0, HL + 0.25, H - 0.47), black)
    finish("tent", seed=19, sub=0.0, bev=0.0, dirt_amt=0.4, dirt_h=0.8, stains=0.3, tone_amt=0.1, ao_dist=1.0, ao_k=0.6, smooth=70)


# ---------------------------------------------------------------- campfire ----

def campfire():
    rnd = random.Random(71)
    stone = wb.mat("stone", STONE_DK)
    wood = wb.mat("wood", 0x5a4126)
    wood_dk = wb.mat("wood_dk", 0x2c2016)
    iron = wb.mat("iron", 0x2a2d31, metallic=0.5, rough=0.5)
    ash = wb.mat("ash", 0x2b2724)
    for i in range(11):
        a = math.tau * i / 11 + rnd.uniform(-0.12, 0.12)
        rock_chunk(f"ring{i}", rnd.uniform(0.22, 0.34), (math.cos(a) * 0.88, math.sin(a) * 0.88, 0.1), stone, rnd, flat=0.7, cuts=3)
    wb.cyl("ash", 0.72, 0.72, 0.04, 14, (0, 0, 0.03), ash)
    for i in range(6):
        a = math.tau * i / 6 + 0.3
        base = Vector((math.cos(a) * 0.62, math.sin(a) * 0.62, 0.08))
        tip = Vector((math.cos(a + math.pi) * 0.12, math.sin(a + math.pi) * 0.12, 0.95))
        wb.between(f"log{i}", base, tip, 0.09, 6, wood if i % 2 else wood_dk, r_end=0.06)
    # charred ends
    for i in range(3):
        a = i * 2.1
        wb.cyl(f"coal{i}", 0.1, 0.07, 0.3, 5, (math.cos(a) * 0.3, math.sin(a) * 0.3, 0.14), wood_dk, rot=(0, 1.3, a))
    # tripod + kettle
    for i in range(3):
        a = math.tau * i / 3 + 0.5
        wb.between(f"tri{i}", (math.cos(a) * 1.05, math.sin(a) * 1.05, 0.0), (0.0, 0.0, 1.75), 0.035, 5, wood_dk)
    wb.between("chain", (0, 0, 1.75), (0, 0, 1.15), 0.015, 4, iron)
    k = wb.ico("kettle", 0.26, (0, 0, 0.98), iron, scale=(1, 1, 0.85), sub=2)
    wb.cyl("spout", 0.04, 0.06, 0.3, 5, (0.32, 0, 1.04), iron, rot=(0, 1.0, 0))
    wb.torus("handle", 0.2, 0.012, (0, 0, 1.18), iron, rot=(math.pi / 2, 0, 0), seg=12, mseg=3)
    # log seats
    for i in range(3):
        a = math.tau * i / 3 + 1.0
        wb.cyl(f"seat{i}", 0.2, 0.2, 1.1, 8, (math.cos(a) * 2.3, math.sin(a) * 2.3, 0.2), wood, rot=(0, math.pi / 2, a + math.pi / 2))
    finish("campfire", seed=23, sub=0.0, bev=0.012, bev_seg=1, dirt_amt=0.1, tone_amt=0.14, ao_dist=0.8, ao_k=0.7, smooth=50)


# ---------------------------------------------------------------- monolith ----

def glyph(i, face_y, x, z, m, rnd):
    """A small runic mark made of raised bars on the large face (face_y = ±)."""
    t = 0.05
    d = face_y
    y = d * (0.43 + t / 2 - 0.02)
    kind = rnd.randint(0, 3)
    wb.box(f"g{i}_v", (0.07, t, 0.5), (x, y, z), m)
    if kind == 0:
        wb.box(f"g{i}_a", (0.07, t, 0.3), (x - 0.12, y, z + 0.12), m, rot=(0, 0.8, 0))
        wb.box(f"g{i}_b", (0.07, t, 0.3), (x + 0.12, y, z + 0.12), m, rot=(0, -0.8, 0))
    elif kind == 1:
        wb.torus(f"g{i}_o", 0.15, 0.03, (x, y, z + 0.05), m, rot=(math.pi / 2, 0, 0), seg=12, mseg=3)
    elif kind == 2:
        wb.box(f"g{i}_h", (0.36, t, 0.07), (x, y, z + 0.1), m)
        wb.box(f"g{i}_h2", (0.24, t, 0.07), (x, y, z - 0.1), m)
    else:
        wb.box(f"g{i}_a", (0.07, t, 0.34), (x + 0.1, y, z - 0.1), m, rot=(0, 0.7, 0))
        wb.box(f"g{i}_b", (0.28, t, 0.07), (x, y, z + 0.18), m)


def monolith():
    rnd = random.Random(81)
    stone = wb.mat("stone", 0x8b8577)
    dark = wb.mat("stone_dk", STONE_DK)
    rune = wb.mat("rune", 0x7fe3c8, emit=0x66e0c0, strength=0.0)   # strength is driven at runtime
    body = wb.box("body", (1.5, 0.85, 3.6), (0, 0, 1.75), stone)
    wb.taper_top(body, 0.62)
    wb.box("band", (1.58, 0.92, 0.14), (0, 0, 2.5), dark)
    wb.box("band2", (1.56, 0.9, 0.1), (0, 0, 0.5), dark)
    for sgn in (-1, 1):
        for k, z in enumerate((1.05, 1.6, 2.05, 2.9)):
            if z > 2.4 and k == 3:
                glyph(f"{sgn}{k}", sgn, rnd.uniform(-0.12, 0.12), z, rune, rnd)
            elif z < 2.4:
                glyph(f"{sgn}{k}", sgn, rnd.uniform(-0.2, 0.2), z, rune, rnd)
    for i in range(4):
        a = rnd.uniform(0, math.tau)
        rock_chunk(f"rub{i}", rnd.uniform(0.22, 0.4), (math.cos(a) * 1.05, math.sin(a) * 1.05, 0.1), dark, rnd, flat=0.55, cuts=3)
    ob = finish("monolith", seed=29, sub=0.8, bev=0.04, moss_amt=0.7, moss_up=0.3, dirt_amt=0.55, dirt_h=1.0, stains=0.4, tone_amt=0.12, ao_dist=0.9, ao_k=0.7)


# ----------------------------------------------------------------- shrine ----

def shrine_pedestal():
    rnd = random.Random(91)
    stone = wb.mat("stone", 0x9d968a)
    dark = wb.mat("stone_dk", 0x776f63)
    light = wb.mat("stone_lt", STONE_LT)
    rune = wb.mat("rune", 0x9fd0ff, emit=0x8fc7ff, strength=0.0)
    black = wb.mat("inset", 0x302b25)
    wb.box("t0", (1.9, 1.9, 0.45), (0, 0, 0.225), dark)
    wb.box("t1", (1.45, 1.45, 0.42), (0, 0, 0.66), stone, rot=(0, 0, 0.5))
    wb.box("t2", (1.0, 1.0, 0.4), (0, 0, 1.07), dark, rot=(0, 0, 0.2))
    wb.cyl("top", 0.8, 0.7, 0.2, 8, (0, 0, 1.37), stone)
    wb.cyl("dish", 0.55, 0.45, 0.06, 8, (0, 0, 1.48), black)
    # inlay: glowing ring on the dish rim, glyph dots around tier 1
    wb.torus("inlay", 0.6, 0.03, (0, 0, 1.49), rune, seg=24, mseg=4)
    for i in range(8):
        a = i / 8 * math.tau + 0.5
        r = 0.78
        wb.box(f"dot{i}", (0.1, 0.05, 0.1), (math.cos(a) * r, math.sin(a) * r, 0.68), rune, rot=(0, 0, a + math.pi / 2))
    # corner posts on the base tier
    for sx in (-1, 1):
        for sy in (-1, 1):
            wb.box(f"post{sx}{sy}", (0.2, 0.2, 0.5), (sx * 0.78, sy * 0.78, 0.7), light)
            wb.cyl(f"posttop{sx}{sy}", 0.16, 0.05, 0.14, 4, (sx * 0.78, sy * 0.78, 1.02), light, rot=(0, 0, math.pi / 4))
    # carved side panels
    for k in range(4):
        a = k * math.pi / 2 + 0.2
        wb.box(f"panel{k}", (0.45, 0.04, 0.2), (math.cos(a) * 0.52, math.sin(a) * 0.52, 1.07), black, rot=(0, 0, a + math.pi / 2))
    finish("shrine_pedestal", seed=31, sub=0.7, bev=0.03, moss_amt=0.6, moss_up=0.4, dirt_amt=0.4, dirt_h=0.8, tone_amt=0.1, ao_dist=0.7, ao_k=0.7)


BUILDERS = {
    "ruin_tower": ruin_tower, "lighthouse": lighthouse, "windmill_body": windmill_body,
    "windmill_blades": windmill_blades, "stone_arch": stone_arch, "shipwreck": shipwreck,
    "tent": tent, "campfire": campfire, "monolith": monolith, "shrine_pedestal": shrine_pedestal,
}

if __name__ == "__main__":
    argv = sys.argv[sys.argv.index("--") + 1:] if "--" in sys.argv else []
    names = argv or list(BUILDERS)
    failures = []
    for n in names:
        wb.reset()
        try:
            BUILDERS[n]()
        except Exception as exc:
            import traceback
            traceback.print_exc()
            failures.append((n, repr(exc)))
    if failures:
        print("FAILURES:", failures)
        sys.exit(1)
    print("Landmarks generated OK")
