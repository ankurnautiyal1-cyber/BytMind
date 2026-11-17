#!/usr/bin/env python3
"""Cliff pieces for steep slopes: public/assets/nature_cliffs.glb (cliff0..cliff3).

Usage:
  /Applications/Blender.app/Contents/MacOS/Blender --background \
      --python tools/build_cliffs.py

Each piece stands on z = 0 with its foot sunk ~1.5 m below, so it grows out of the hillside
when placed on a slope. Layered strata, moss on the tops, soot-dark at the foot, baked AO.
"""
import math
import os
import random
import sys

import bpy

sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), "lib"))
import wander_bpy as wb  # noqa: E402

MOSS = wb.srgb(0x587a38)
GRIME = wb.srgb(0x3f3a31)
STRATA = [wb.srgb(0x8d877b), wb.srgb(0xa59d8a), wb.srgb(0x77726a), wb.srgb(0x9a8f7a)]


def cliff(name, seed, w, h, d, ledges=3, overhang=False):
    rnd = random.Random(seed)
    stone = wb.mat("stone", 0x8d877b)
    dark = wb.mat("stone_dk", 0x6b665c)
    parts = []
    n = rnd.randint(5, 7)
    for i in range(n):
        x = rnd.uniform(-w * 0.34, w * 0.34)
        y = rnd.uniform(-d * 0.25, d * 0.25)
        hh = h * rnd.uniform(0.55, 1.0)
        r = rnd.uniform(0.2, 0.32) * w
        o = wb.ico(f"mass{i}", r, (x, y, hh * 0.5 - 1.4), stone if i % 2 else dark,
                   scale=(1.0, rnd.uniform(0.7, 0.95), max(1.0, hh / r * 0.78)), sub=2)
        wb.rockify(o, rnd, cuts=6, size=r * 0.9, rough=0.045)
        parts.append(o)
    for i in range(ledges):
        x = rnd.uniform(-w * 0.4, w * 0.4)
        z = rnd.uniform(h * 0.25, h * 0.7)
        r = rnd.uniform(0.14, 0.22) * w
        o = wb.ico(f"ledge{i}", r, (x, d * 0.32, z), stone, scale=(1.5, 0.8, 0.45), sub=2)
        wb.rockify(o, rnd, cuts=4, size=r * 0.9, rough=0.05)
        parts.append(o)
    if overhang:
        o = wb.ico("hood", w * 0.3, (0, d * 0.28, h * 0.88), dark, scale=(1.3, 0.85, 0.42), sub=2)
        wb.rockify(o, rnd, cuts=4, size=w * 0.27, rough=0.05)
        parts.append(o)
    for i in range(9):                              # talus at the foot
        a = rnd.uniform(0, math.tau)
        rr = rnd.uniform(0.55, 0.85) * w * 0.5
        r = rnd.uniform(0.3, 0.9)
        o = wb.ico(f"talus{i}", r, (math.cos(a) * rr, math.sin(a) * rr * 0.6 + d * 0.15, 0.0), stone if i % 2 else dark,
                   scale=(1, rnd.uniform(0.7, 1.0), 0.6), sub=1)
        wb.rockify(o, rnd, cuts=4, size=r, rough=0.06)
        parts.append(o)
    ob = wb.join_all(name, parts)
    wb.paint_materials(ob)
    wb.strata(ob, STRATA, freq=0.65, warp=1.2, seed=seed)
    wb.tone(ob, 0.14, scale=0.5, seed=seed)
    wb.moss(ob, MOSS, up=0.35, amount=0.85, scale=0.9, seed=seed)
    wb.dirt(ob, GRIME, height=2.2, amount=0.5)
    wb.stain(ob, GRIME, amount=0.35, seed=seed)
    wb.bake_ao(ob, rays=16, dist=3.0, strength=0.85, seed=seed)
    wb.paint_finish(ob)
    wb.smooth_by_angle(ob, 58)
    return ob


wb.reset()
objs = [
    cliff("cliff0", 101, 10, 8, 6),
    cliff("cliff1", 102, 14, 6, 6, ledges=4),
    cliff("cliff2", 103, 8, 11, 5, ledges=2),
    cliff("cliff3", 104, 11, 9, 6, overhang=True),
]
for i, o in enumerate(objs):
    o.location = (i * 18, 0, 0)
wb.export_glb(os.path.join(wb.OUT, "nature_cliffs.glb"), objs, apply_mods=False)
if "--preview" in sys.argv:
    wb.contact_sheet([(os.path.join(wb.OUT, "nature_cliffs.glb"), "cliffs")], os.path.join(wb.PREVIEW, "cliffs.png"), cell=10, cols=1, height=10)
print("Cliffs generated OK")
