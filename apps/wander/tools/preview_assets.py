#!/usr/bin/env python3
"""Render a contact sheet of generated glb assets for review.

Usage:
  /Applications/Blender.app/Contents/MacOS/Blender --background \
      --python tools/preview_assets.py -- [name ...] [--out tools/preview/sheet.png]

With no names it renders the landmark set. Names are file stems in public/assets.
(The old version wrote public/assets/_preview.png and came out blank because it never
set a world or a ground colour; this one reuses wander_bpy.contact_sheet.)
"""
import os
import sys

sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), "lib"))
import wander_bpy as wb  # noqa: E402

argv = sys.argv[sys.argv.index("--") + 1:] if "--" in sys.argv else []
out = os.path.join(wb.PREVIEW, "sheet.png")
if "--out" in argv:
    i = argv.index("--out")
    out = os.path.abspath(argv[i + 1])
    argv = argv[:i] + argv[i + 2:]
names = argv or ["ruin_tower", "lighthouse", "windmill_body", "windmill_blades", "stone_arch",
                 "shipwreck", "tent", "campfire", "monolith", "shrine_pedestal"]
files = [(os.path.join(wb.OUT, f"{n}.glb"), n) for n in names if os.path.exists(os.path.join(wb.OUT, f"{n}.glb"))]
wb.contact_sheet(files, out, cell=float(os.environ.get("CELL", 16)))
