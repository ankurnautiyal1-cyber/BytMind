#!/usr/bin/env python3
"""Generate Wander's low-poly landmark assets with Blender (headless).

Usage:
  /Applications/Blender.app/Contents/MacOS/Blender --background \
      --python tools/build_assets.py

Writes public/assets/*.glb. Deterministic: fixed random seed, no UI needed.
Style: chunky flat-shaded primitives, few materials, roughness ~1.
All assets stand on the z=0 ground plane, centered on the origin
(blender Z-up; the glTF exporter converts to Y-up for three.js).
"""

import math
import os
import random
import sys

import bpy
import bmesh
from mathutils import Vector

random.seed(20261)

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.normpath(os.path.join(HERE, "..", "public", "assets"))
os.makedirs(OUT, exist_ok=True)


# ---------------------------------------------------------------- helpers ----

def reset():
    """Remove every object so each asset builds from an empty scene."""
    bpy.ops.object.select_all(action="SELECT")
    bpy.ops.object.delete(use_global=False)
    for block in (bpy.data.meshes, bpy.data.materials):
        for item in list(block):
            if item.users == 0:
                block.remove(item)


def _set_input(bsdf, names, value):
    for n in names:
        s = bsdf.inputs.get(n)
        if s is not None:
            s.default_value = value
            return


def mat(name, hexcolor, rough=0.95, emit=None, strength=1.0):
    m = bpy.data.materials.new(name)
    m.use_nodes = True
    bsdf = m.node_tree.nodes["Principled BSDF"]
    c = tuple(((hexcolor >> s) & 0xFF) / 255.0 for s in (16, 8, 0))
    bsdf.inputs["Base Color"].default_value = (*c, 1.0)
    bsdf.inputs["Roughness"].default_value = rough
    if emit is not None:
        e = tuple(((emit >> s) & 0xFF) / 255.0 for s in (16, 8, 0))
        _set_input(bsdf, ("Emission Color", "Emission"), (*e, 1.0))
        _set_input(bsdf, ("Emission Strength",), strength)
    m.diffuse_color = (*c, 1.0)  # viewport color
    return m


def _link(ob, material):
    ob.data.materials.append(material)


def box(name, dims, loc, material, rot=(0, 0, 0)):
    bpy.ops.mesh.primitive_cube_add(size=2, location=loc, rotation=rot)
    ob = bpy.context.active_object
    ob.name = name
    ob.scale = (dims[0] / 2, dims[1] / 2, dims[2] / 2)
    _link(ob, material)
    return ob


def cyl(name, r_bottom, r_top, depth, seg, loc, material, rot=(0, 0, 0)):
    bpy.ops.mesh.primitive_cylinder_add(
        vertices=seg, radius=1, depth=depth, location=loc, rotation=rot,
        end_fill_type="NGON")
    ob = bpy.context.active_object
    ob.name = name
    ob.scale = (r_bottom, r_bottom, 1)
    # taper: move the top ring verts inward
    bm = bmesh.new()
    bm.from_mesh(ob.data)
    top_z = max(v.co.z for v in bm.verts)
    for v in bm.verts:
        if v.co.z > top_z - 0.01:
            v.co.x *= r_top / max(r_bottom, 1e-6)
            v.co.y *= r_top / max(r_bottom, 1e-6)
    bm.to_mesh(ob.data)
    bm.free()
    _link(ob, material)
    return ob


def ico(name, radius, loc, material, scale=(1, 1, 1), subdivisions=1, jitter=0.0):
    bpy.ops.mesh.primitive_ico_sphere_add(
        subdivisions=subdivisions, radius=radius, location=loc)
    ob = bpy.context.active_object
    ob.name = name
    ob.scale = scale
    if jitter:
        bm = bmesh.new()
        bm.from_mesh(ob.data)
        for v in bm.verts:
            v.co += Vector((random.uniform(-jitter, jitter),
                            random.uniform(-jitter, jitter),
                            random.uniform(-jitter, jitter)))
        bm.to_mesh(ob.data)
        bm.free()
    _link(ob, material)
    return ob


def taper_top(ob, factor, along="XY"):
    """Pinch the verts at the highest z toward the vertical axis."""
    bm = bmesh.new()
    bm.from_mesh(ob.data)
    top_z = max(v.co.z for v in bm.verts)
    for v in bm.verts:
        if v.co.z > top_z - 0.01:
            if "X" in along:
                v.co.x *= factor
            if "Y" in along:
                v.co.y *= factor
    bm.to_mesh(ob.data)
    bm.free()


def pinch_verts(ob, axis, threshold, fx, fy, fz, dz=0.0):
    """Scale verts whose `axis` coord is past `threshold` (bow tips etc.)."""
    bm = bmesh.new()
    bm.from_mesh(ob.data)
    for v in bm.verts:
        if getattr(v.co, axis) > threshold:
            v.co.x *= fx
            v.co.y *= fy
            v.co.z = v.co.z * fz + dz
    bm.to_mesh(ob.data)
    bm.free()


def shade_flat(ob):
    bpy.ops.object.select_all(action="DESELECT")
    ob.select_set(True)
    bpy.context.view_layer.objects.active = ob
    try:
        bpy.ops.object.shade_flat()
    except TypeError:  # older/newer signature differences
        bpy.ops.object.shade_flat(use_auto_smooth=False)


def export(name):
    """Join everything into one object and export it as a .glb."""
    meshes = [o for o in bpy.context.scene.objects if o.type == "MESH"]
    if not meshes:
        raise RuntimeError(f"nothing to export for {name}")
    bpy.ops.object.select_all(action="DESELECT")
    for o in meshes:
        o.select_set(True)
    bpy.context.view_layer.objects.active = meshes[0]
    if len(meshes) > 1:
        bpy.ops.object.join()
    ob = bpy.context.active_object
    ob.name = name.replace(".glb", "")
    shade_flat(ob)
    bpy.ops.object.transform_apply(location=False, rotation=True, scale=True)
    path = os.path.join(OUT, name)
    bpy.ops.export_scene.gltf(
        filepath=path, export_format="GLB", use_selection=True,
        export_apply=False, export_yup=True)
    tris = len(ob.data.polygons)
    print(f"  {name}: {tris} tris, {os.path.getsize(path)} bytes")
    return path


# ----------------------------------------------------------------- assets ----

STONE = 0x8d8779
STONE_DARK = 0x6e675c
WOOD = 0x6b4a33
WOOD_DARK = 0x4a3826
CANVAS = 0xc9b48a


def build_ruin_tower():
    m_stone = mat("ruin_stone", STONE)
    m_dark = mat("ruin_dark", STONE_DARK)
    cyl("tower_wall", 3.0, 2.75, 9.0, 10, (0, 0, 4.5), m_stone)
    # broken crown: offset shrinking courses
    for i, (r, z, tilt) in enumerate([(2.7, 9.35, 4), (2.45, 9.8, -6), (2.1, 10.2, 9)]):
        c = cyl(f"crown{i}", r, r * 0.94, 0.6, 10,
                (random.uniform(-0.3, 0.3), random.uniform(-0.3, 0.3), z),
                m_stone, rot=(math.radians(tilt) * 0.15, 0, math.radians(tilt)))
    # doorway + window slits (dark insets that read as holes)
    box("door", (1.5, 0.9, 2.6), (0, 2.75, 1.3), m_dark)
    box("win1", (0.7, 0.6, 1.1), (0, 2.5, 5.6), m_dark)
    box("win2", (0.7, 0.6, 1.1), (2.7, 0, 6.2), m_dark, rot=(0, 0, 0))
    # rubble ring
    for i in range(9):
        a = random.uniform(0, math.tau)
        r = random.uniform(3.3, 5.2)
        ico(f"rub{i}", random.uniform(0.35, 0.8), (math.cos(a) * r, math.sin(a) * r, 0.18),
            m_stone if i % 3 else m_dark,
            scale=(1, random.uniform(0.6, 0.9), random.uniform(0.5, 0.8)),
            jitter=0.12)
    export("ruin_tower.glb")


def build_lighthouse():
    m_white = mat("lh_white", 0xf2ede2)
    m_red = mat("lh_red", 0xb5472f)
    m_stone = mat("lh_stone", STONE)
    m_dark = mat("lh_dark", 0x3a352e)
    m_lamp = mat("lh_lamp", 0xfff2c0, emit=0xffe9a8, strength=5.0)
    cyl("lh_base", 2.9, 2.75, 1.4, 10, (0, 0, 0.7), m_stone)
    cyl("lh_body", 2.45, 1.75, 10.6, 10, (0, 0, 6.1), m_white)
    # red bands follow the taper
    for z, r in [(2.6, 2.31), (6.0, 1.98), (9.0, 1.70)]:
        cyl(f"lh_band{int(z)}", r + 0.09, r + 0.08, 1.0, 10, (0, 0, z), m_red)
    cyl("lh_gallery", 2.05, 2.05, 0.4, 10, (0, 0, 11.5), m_dark)
    bpy.ops.mesh.primitive_torus_add(
        major_radius=1.9, minor_radius=0.06, major_segments=10, minor_segments=4,
        location=(0, 0, 12.25))
    rail = bpy.context.active_object
    rail.name = "lh_rail"
    rail.scale = (1, 1, 0.8)
    _link(rail, m_dark)
    cyl("lh_lamproom", 1.1, 1.0, 1.15, 10, (0, 0, 12.35), m_lamp)
    cyl("lh_roof", 0.05, 1.35, 1.0, 10, (0, 0, 13.4), m_red)
    ico("lh_finial", 0.22, (0, 0, 14.05), m_dark)
    box("lh_door", (1.2, 0.8, 2.1), (0, 2.4, 1.4), m_dark)
    export("lighthouse.glb")


def build_windmill_body():
    m_plaster = mat("wm_plaster", 0xd8cfc0)
    m_stone = mat("wm_stone", STONE)
    m_wood = mat("wm_wood", WOOD)
    m_dark = mat("wm_dark", 0x2e2721)
    cyl("wm_base", 2.95, 2.8, 1.2, 9, (0, 0, 0.6), m_stone)
    cyl("wm_body", 2.6, 1.95, 8.2, 9, (0, 0, 4.9), m_plaster)
    box("wm_door", (1.2, 0.7, 2.2), (0, 2.5, 1.6), m_dark)
    box("wm_win", (0.75, 0.6, 0.95), (0, 2.15, 6.4), m_dark)
    cyl("wm_cap", 0.1, 2.2, 1.9, 9, (0, 0, 9.9), m_wood)
    ico("wm_finial", 0.2, (0, 0, 11.0), m_wood)
    export("windmill_body.glb")


def build_windmill_blades():
    """Wheel in the XZ plane, rotation axis along Y, origin = hub center.
    Arms radiate along +Z rotated around Y so positions and orientations stay
    consistent (this is what the earlier X-rotation version got wrong)."""
    m_wood = mat("wb_wood", WOOD_DARK)
    m_sail = mat("wb_sail", 0xe8ddc2)
    cyl("wb_hub", 0.26, 0.26, 1.0, 7, (0, 0, 0), m_wood, rot=(math.pi / 2, 0, 0))
    for i in range(4):
        a = math.radians(90 * i)
        side = 1 if i % 2 == 0 else -1
        ca, sa = math.cos(a), math.sin(a)
        box(f"wb_spar{i}", (0.15, 0.15, 5.6), (sa * 2.85, 0, ca * 2.85), m_wood,
            rot=(0, a, 0))
        # sail panel beside the spar, offset perpendicular to the arm
        px = sa * 3.05 + ca * 0.45 * side
        pz = ca * 3.05 - sa * 0.45 * side
        box(f"wb_panel{i}", (0.9, 0.06, 3.6), (px, 0.12, pz), m_sail,
            rot=(0, a, 0))
    export("windmill_blades.glb")


def build_stone_arch():
    m_rock = mat("arch_rock", 0x9a8f7d, rough=1.0)
    m_dark = mat("arch_dark", 0x7c7263, rough=1.0)
    for i in range(9):
        a = math.pi * i / 8
        x = math.cos(a) * 6.2 + random.uniform(-0.4, 0.4)
        z = 2.4 + math.sin(a) * 6.6 + random.uniform(-0.3, 0.3)
        s = 2.35 - abs(i - 4) * 0.14 + random.uniform(-0.15, 0.15)
        ico(f"arch_span{i}", s, (x, 0, z), m_rock,
            scale=(1.05, random.uniform(0.75, 0.95), 0.85), subdivisions=2,
            jitter=0.22)
    # legs + fallen rocks
    for sx in (-1, 1):
        for j in range(3):
            s = random.uniform(1.6, 2.5)
            ico(f"arch_leg{sx}{j}", s, (sx * (6.4 + j * 1.1), random.uniform(-1, 1),
                                        1.0 + j * 0.5), m_dark if j == 0 else m_rock,
                scale=(1, 0.85, random.uniform(0.8, 1.1)), subdivisions=2,
                jitter=0.25)
    export("stone_arch.glb")


def build_shipwreck():
    m_hull = mat("wreck_hull", 0x4a3b2c, rough=1.0)
    m_dark = mat("wreck_dark", 0x33281d)
    m_mast = mat("wreck_mast", 0x5c4a33)
    ob = box("wreck_hull", (9.0, 3.4, 2.4), (0, 0, 1.2), m_hull)
    pinch_verts(ob, "x", 3.0, 0.08, 0.3, 1.0, dz=0.75)   # bow
    pinch_verts(ob, "x", -3.4, 1.0, 0.75, 1.0, dz=0.15)  # stern
    # broken mast + spar
    cyl("wreck_mast", 0.15, 0.12, 5.2, 5, (1.2, 0, 4.0), m_mast,
        rot=(0.35, 0, 0.5))
    cyl("wreck_spar", 0.07, 0.07, 3.6, 5, (2.8, 0.5, 5.8), m_mast,
        rot=(1.25, 0.4, 0))
    # ribs poking from the hull
    for i, x in enumerate((-2.6, -0.8, 1.0)):
        cyl(f"wreck_rib{i}", 0.09, 0.09, 2.6, 4, (x, 1.15, 2.2), m_dark,
            rot=(0.9, 0, 0.15 * i))
        cyl(f"wreck_ribb{i}", 0.09, 0.09, 2.2, 4, (x, -1.15, 2.1), m_dark,
            rot=(-0.9, 0, 0.2 * i))
    export("shipwreck.glb")


def build_tent():
    m_canvas = mat("tent_canvas", CANVAS)
    m_dark = mat("tent_dark", 0x241d16)
    ob = box("tent_body", (2.6, 3.2, 1.9), (0, 0, 0.95), m_canvas)
    taper_top(ob, 0.04, along="X")  # A-frame ridge along Y
    # dark opening wedge at the front
    bm = bmesh.new()
    mesh = bpy.data.meshes.new("tent_opening")
    v1 = bm.verts.new((-0.62, 1.61, 0.03))
    v2 = bm.verts.new((0.62, 1.61, 0.03))
    v3 = bm.verts.new((0.0, 1.61, 1.42))
    bm.faces.new((v1, v2, v3))
    bm.to_mesh(mesh)
    bm.free()
    opening = bpy.data.objects.new("tent_opening", mesh)
    bpy.context.scene.collection.objects.link(opening)
    _link(opening, m_dark)
    export("tent.glb")


def build_campfire():
    m_stone = mat("fire_stone", STONE_DARK)
    m_wood = mat("fire_wood", 0x5a4126)
    for i in range(8):
        a = math.tau * i / 8 + random.uniform(-0.15, 0.15)
        ico(f"fire_ring{i}", random.uniform(0.22, 0.32),
            (math.cos(a) * 0.85, math.sin(a) * 0.85, 0.1), m_stone,
            scale=(1, random.uniform(0.7, 1), random.uniform(0.55, 0.8)),
            jitter=0.05)
    for i in range(5):
        a = math.tau * i / 5 + 0.3
        # teepee log: from ground radius 0.6 leaning over the center
        base = Vector((math.cos(a) * 0.62, math.sin(a) * 0.62, 0.05))
        tip = Vector((math.cos(a + math.pi) * 0.12, math.sin(a + math.pi) * 0.12, 0.95))
        mid = (base + tip) / 2
        d = tip - base
        rot = (math.atan2(d.y, d.x) - math.pi / 2, 0, math.atan2(math.hypot(d.x, d.y), d.z))
        cyl(f"fire_log{i}", 0.09, 0.07, d.length, 5, mid, m_wood, rot=rot)
    export("campfire.glb")


def build_monolith():
    m_stone = mat("mono_stone", 0x8b8577)
    m_dark = mat("mono_dark", STONE_DARK)
    ob = box("mono_body", (1.5, 0.85, 3.6), (0, 0, 1.75), m_stone)
    taper_top(ob, 0.62)
    ob.rotation_euler = (0.02, 0.03, math.radians(4))
    # carved band + base rubble
    box("mono_band", (1.58, 0.92, 0.16), (0, 0, 2.5), m_dark,
        rot=(0.02, 0.03, math.radians(4)))
    for i in range(3):
        a = random.uniform(0, math.tau)
        ico(f"mono_rub{i}", random.uniform(0.25, 0.45),
            (math.cos(a) * 1.1, math.sin(a) * 1.1, 0.12), m_dark,
            scale=(1, 0.7, 0.55), jitter=0.08)
    export("monolith.glb")


def build_shrine_pedestal():
    m_stone = mat("shrine_stone", 0x9d968a)
    m_dark = mat("shrine_dark", 0x776f63)
    box("shrine_t0", (1.9, 1.9, 0.45), (0, 0, 0.225), m_dark)
    box("shrine_t1", (1.45, 1.45, 0.42), (0, 0, 0.66), m_stone, rot=(0, 0, 0.5))
    box("shrine_t2", (1.0, 1.0, 0.4), (0, 0, 1.07), m_dark, rot=(0, 0, 0.2))
    cyl("shrine_top", 0.8, 0.7, 0.2, 8, (0, 0, 1.37), m_stone)
    export("shrine_pedestal.glb")


# ------------------------------------------------------- portal + city ----

DARK_STONE = 0x4f4a5c
RUNE_GLOW = 0x9f7fe8


def build_portal_gate():
    """Ornate gate: two rune-carved pillars + lintel. Opening ~5 x 7 m,
    facing +/-Y (the swirl disc itself is a runtime shader in portal.js)."""
    m_stone = mat("gate_stone", DARK_STONE)
    m_trim = mat("gate_trim", 0x8a7db8)
    m_rune = mat("gate_rune", RUNE_GLOW, emit=RUNE_GLOW, strength=2.5)
    for side in (-1, 1):
        p = box(f"gate_pillar{side}", (1.6, 1.6, 8.4), (side * 3.4, 0, 4.2), m_stone)
        taper_top(p, 0.7)
        box(f"gate_cap{side}", (2.1, 2.1, 0.55), (side * 3.4, 0, 8.65), m_trim)
        # glowing rune bands
        for z in (2.2, 4.4, 6.6):
            box(f"gate_rune{side}{int(z)}", (1.66, 0.18, 0.6), (side * 3.4, 0.0, z), m_rune)
    box("gate_lintel", (8.6, 1.8, 1.4), (0, 0, 8.4), m_stone)
    box("gate_lintel_trim", (9.2, 1.9, 0.3), (0, 0, 7.8), m_trim)
    box("gate_keystone", (1.4, 0.5, 1.0), (0, 0, 9.2), m_trim)
    # stepped approach
    box("gate_step1", (10.5, 6.0, 0.35), (0, 0.2, 0.16), m_stone)
    box("gate_step2", (9.4, 5.0, 0.35), (0, 0.2, 0.5), m_trim)
    export("portal_gate.glb")


def build_building_deco():
    """Art-deco setback tower, ~180 m tall at scale 1 (scale per instance)."""
    m = mat("bld_deco", 0x8d8a95)
    box("deco_base", (26, 26, 30), (0, 0, 15), m)
    box("deco_mid", (19, 19, 55), (0, 0, 57.5), m)
    box("deco_top", (12, 12, 45), (0, 0, 107.5), m)
    box("deco_crown", (6, 6, 18), (0, 0, 139), m)
    cyl("deco_spire", 0.35, 0.12, 22, 6, (0, 0, 159), m)
    export("building_deco.glb")


def build_building_glass():
    """Modern glass slab with a roof lip + podium, ~150 m."""
    m = mat("bld_glass", 0x37474f)
    box("glass_podium", (30, 24, 8), (0, 0, 4), m)
    box("glass_tower", (22, 18, 118), (0, 0, 67), m)
    box("glass_lip", (23.5, 19.5, 2.5), (0, 0, 127.2), m)
    box("glass_core", (8, 8, 140), (0, 0, 78), m)
    export("building_glass.glb")


def build_building_brick():
    """Mid-rise brick block with rooftop water towers, ~55 m."""
    m = mat("bld_brick", 0x8a5f4c)
    m_wood = mat("bld_brick_wood", 0x6b5a48)
    box("brick_body", (24, 20, 55), (0, 0, 27.5), m)
    box("brick_cornice", (25.5, 21.5, 2.2), (0, 0, 56), m)
    for x, y in ((-7, -5), (6, 4)):
        cyl(f"brick_wt{x}{y}", 1.6, 1.6, 5, 6, (x, y, 59.5), m_wood)
        cyl(f"brick_wtc{x}{y}", 0.2, 1.7, 1.6, 6, (x, y, 63.2), m_wood)
    box("brick_ac", (4, 3, 2), (0, -6, 57.2), m_wood)
    export("building_brick.glb")


def build_building_pencil():
    """Slim supertall pencil tower + antenna, ~280 m."""
    m = mat("bld_pencil", 0x4a5568)
    box("pen_base", (18, 18, 20), (0, 0, 10), m)
    box("pen_tower", (11, 11, 200), (0, 0, 120), m)
    box("pen_crown", (7, 7, 40), (0, 0, 240), m)
    cyl("pen_antenna", 0.28, 0.1, 40, 5, (0, 0, 280), m)
    export("building_pencil.glb")


def build_car():
    """Chunky sedan, ~4.4 m long, facing -Y (forward). Emissive lights."""
    m_body = mat("car_body", 0xb0b6bd)
    m_glass = mat("car_glass", 0x1d2730)
    m_dark = mat("car_dark", 0x14161a)
    m_head = mat("car_head", 0xfff2c0, emit=0xfff2c0, strength=3.0)
    m_tail = mat("car_tail", 0xff3b30, emit=0xff3b30, strength=2.0)
    box("car_body", (1.9, 4.4, 0.75), (0, 0, 0.65), m_body)
    box("car_hood", (1.8, 1.1, 0.18), (0, -1.6, 1.1), m_body)
    box("car_cabin", (1.7, 2.1, 0.62), (0, 0.25, 1.32), m_glass)
    box("car_bumper_f", (1.95, 0.28, 0.4), (0, -2.2, 0.45), m_dark)
    box("car_bumper_r", (1.95, 0.28, 0.4), (0, 2.2, 0.45), m_dark)
    for x in (-0.98, 0.98):
        cyl(f"car_wheel{x}", 0.42, 0.42, 0.3, 8, (x, -1.45, 0.42), m_dark,
            rot=(math.pi / 2, 0, 0))
        cyl(f"car_wheel_r{x}", 0.42, 0.42, 0.3, 8, (x, 1.45, 0.42), m_dark,
            rot=(math.pi / 2, 0, 0))
    box("car_headlight_l", (0.4, 0.08, 0.18), (-0.62, -2.22, 0.85), m_head)
    box("car_headlight_r", (0.4, 0.08, 0.18), (0.62, -2.22, 0.85), m_head)
    box("car_taillight_l", (0.44, 0.08, 0.16), (-0.62, 2.22, 0.9), m_tail)
    box("car_taillight_r", (0.44, 0.08, 0.16), (0.62, 2.22, 0.9), m_tail)
    export("car.glb")


def build_streetlight():
    """Street light with an emissive lamp head, ~7.5 m, arm reaching -Y."""
    m_pole = mat("sl_pole", 0x2e3238)
    m_lamp = mat("sl_lamp", 0xffe9b0, emit=0xffe9b0, strength=4.0)
    cyl("sl_pole", 0.12, 0.16, 7.2, 6, (0, 0, 3.6), m_pole)
    box("sl_arm", (0.14, 2.4, 0.14), (0, -1.1, 7.15), m_pole)
    box("sl_head", (0.5, 1.0, 0.24), (0, -2.2, 7.05), m_lamp)
    export("streetlight.glb")


def build_monument():
    """Glowing obelisk monument on a star pedestal, ~40 m."""
    m_stone = mat("mon_stone", 0x7f8a99)
    m_torch = mat("mon_torch", 0xffd25e, emit=0xffc95e, strength=4.5)
    box("mon_base", (14, 14, 1.6), (0, 0, 0.8), m_stone)
    box("mon_star", (9, 9, 2.2), (0, 0, 2.7), m_stone, rot=(0, 0, 0.4))
    ob = box("mon_obelisk", (4.2, 4.2, 30), (0, 0, 18.8), m_stone)
    taper_top(ob, 0.12)
    cyl("mon_torch_bowl", 1.6, 1.1, 1.8, 8, (0, 0, 35.2), m_torch)
    ico("mon_flame", 1.1, (0, 0, 37.2), m_torch, scale=(0.8, 0.8, 1.4), subdivisions=1)
    export("monument.glb")


# -------------------------------------------------------------------- run ----

BUILDERS = [
    build_ruin_tower, build_lighthouse, build_windmill_body, build_windmill_blades,
    build_stone_arch, build_shipwreck, build_tent, build_campfire,
    build_monolith, build_shrine_pedestal,
    # build_portal_gate: superseded by tools/build_portal.py (arch, runes, fragments)
    build_building_deco, build_building_glass,
    build_building_brick, build_building_pencil, build_car,
    build_streetlight, build_monument,
]

print(f"Writing assets to {OUT}")
failures = []
for build in BUILDERS:
    reset()
    try:
        build()
    except Exception as exc:  # keep going, report at the end
        failures.append((build.__name__, repr(exc)))
reset()
if failures:
    print("FAILURES:", failures)
    sys.exit(1)
print("All assets generated OK")
