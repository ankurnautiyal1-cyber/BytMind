#!/usr/bin/env python3
"""Generate the Meadow's trees and rocks with Blender (headless).

Usage:
  /Applications/Blender.app/Contents/MacOS/Blender --background \
      --python tools/build_nature.py [-- --preview]

Writes public/assets/nature_trees.glb and public/assets/nature_rocks.glb: one mesh
per variant (pine_a/b, fir, oak_a/b, birch, blossom, autumn / rock0..5), each with
baked vertex colours (dark footings, light tips, moss on rocks) and soft radial
normals on the foliage so canopies read as fluffy volumes, not faceted gems.
All trees stand on z = 0 and are ~1x scale: pines ~12.6 m, broadleaf ~8.5 m,
matching the collision capsules in src/scenery.js.
"""

import math
import os
import random
import sys

import bmesh
import bpy
from mathutils import Vector

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.normpath(os.path.join(HERE, "..", "public", "assets"))
PREVIEW = os.path.normpath(os.path.join(HERE, "preview"))
os.makedirs(OUT, exist_ok=True)


def reset():
    bpy.ops.object.select_all(action="SELECT")
    bpy.ops.object.delete(use_global=False)
    for block in (bpy.data.meshes, bpy.data.materials):
        for item in list(block):
            if item.users == 0:
                block.remove(item)


def srgb(h):
    c = [((h >> s) & 0xFF) / 255.0 for s in (16, 8, 0)]
    # convert sRGB hex to linear for the colour attribute
    return tuple((x / 12.92) if x <= 0.04045 else ((x + 0.055) / 1.055) ** 2.4 for x in c)


def lerp3(a, b, t):
    return tuple(a[i] + (b[i] - a[i]) * t for i in range(3))


def make_material():
    m = bpy.data.materials.new("nature")
    m.use_nodes = True
    b = m.node_tree.nodes["Principled BSDF"]
    b.inputs["Roughness"].default_value = 0.95
    return m


MAT = None


def paint(ob, low, high, z0, z1, jitter=0.06, top_boost=0.1, rnd=None):
    """Vertex-colour gradient with painterly jitter. Colours are linear."""
    rnd = rnd or random
    me = ob.data
    if "Col" in me.color_attributes:
        me.color_attributes.remove(me.color_attributes["Col"])
    ca = me.color_attributes.new(name="Col", type="FLOAT_COLOR", domain="POINT")
    mw = ob.matrix_world
    for v in me.vertices:
        wz = (mw @ v.co).z
        t = min(1.0, max(0.0, (wz - z0) / max(1e-6, (z1 - z0))))
        n = (mw.to_3x3() @ v.normal).normalized()
        c = lerp3(low, high, t)
        k = 1.0 + rnd.uniform(-jitter, jitter) + max(0.0, n.z) * top_boost
        ca.data[v.index].color = (c[0] * k, c[1] * k, c[2] * k, 1.0)
    me.color_attributes.active_color = ca
    me.color_attributes.render_color_index = me.color_attributes.find("Col")


def finish(ob):
    ob.data.materials.clear()
    ob.data.materials.append(MAT)
    return ob


def trunk(r0, r1, h, z0=0.0, seg=8, tilt=(0, 0), loc=(0, 0)):
    bpy.ops.mesh.primitive_cone_add(vertices=seg, radius1=r0, radius2=r1, depth=h,
                                    end_fill_type="NOTHING", location=(0, 0, 0))
    ob = bpy.context.active_object
    # move so the base is at z=0 locally, then tilt about the base
    for v in ob.data.vertices:
        v.co.z += h / 2
    ob.rotation_euler = (tilt[0], tilt[1], 0)
    ob.location = (loc[0], loc[1], z0)
    bpy.context.view_layer.update()
    return finish(ob)


def blob(r, loc, scale=(1, 1, 1), jitter=0.14, sub=2, up_bias=0.4, rnd=None):
    """Lumpy foliage cloud with smooth radial normals."""
    rnd = rnd or random
    bpy.ops.mesh.primitive_ico_sphere_add(subdivisions=sub, radius=r, location=(0, 0, 0))
    ob = bpy.context.active_object
    ob.scale = scale
    bpy.ops.object.transform_apply(location=False, rotation=False, scale=True)
    bm = bmesh.new()
    bm.from_mesh(ob.data)
    for v in bm.verts:
        v.co += Vector((rnd.uniform(-jitter, jitter), rnd.uniform(-jitter, jitter),
                        rnd.uniform(-jitter, jitter))) * r
    bm.to_mesh(ob.data)
    bm.free()
    normals = []
    for v in ob.data.vertices:
        n = v.co.normalized() + Vector((0, 0, up_bias))
        normals.append(tuple(n.normalized()))
    try:
        ob.data.shade_smooth()
    except Exception:
        pass
    try:
        ob.data.normals_split_custom_set_from_vertices(normals)
    except Exception as exc:  # older API: fall back to plain smooth shading
        print("  (custom normals unavailable:", exc, ")")
    ob.location = loc
    bpy.context.view_layer.update()
    return finish(ob)


def tier(r, h, z, seg=10, droop=0.82, rnd=None):
    """One pine skirt: a ragged cone."""
    rnd = rnd or random
    bpy.ops.mesh.primitive_cone_add(vertices=seg, radius1=r, radius2=0.0, depth=h,
                                    end_fill_type="NOTHING", location=(0, 0, 0))
    ob = bpy.context.active_object
    bm = bmesh.new()
    bm.from_mesh(ob.data)
    for v in bm.verts:
        v.co.z += h / 2
        if v.co.z < 1e-4:                       # the hem: alternate long and short points
            idx = int(round((math.atan2(v.co.y, v.co.x) / (2 * math.pi)) * seg)) % seg
            f = 1.0 if idx % 2 == 0 else droop
            v.co.x *= f * rnd.uniform(0.92, 1.06)
            v.co.y *= f * rnd.uniform(0.92, 1.06)
            v.co.z -= 0.18 * (1 - f) * 3.0
    bm.to_mesh(ob.data)
    bm.free()
    ob.rotation_euler = (0, 0, rnd.uniform(0, math.tau))
    ob.location = (rnd.uniform(-0.08, 0.08), rnd.uniform(-0.08, 0.08), z)
    # soft normals: radial with an upward lean so the tiers shade like layered boughs
    normals = []
    for v in ob.data.vertices:
        n = Vector((v.co.x, v.co.y, 0.0)).normalized() * 0.8 + Vector((0, 0, 0.55))
        normals.append(tuple(n.normalized()))
    try:
        ob.data.shade_smooth()
        ob.data.normals_split_custom_set_from_vertices(normals)
    except Exception:
        pass
    bpy.context.view_layer.update()
    return finish(ob)


def join_and_name(objs, name):
    bpy.ops.object.select_all(action="DESELECT")
    for o in objs:
        o.select_set(True)
    bpy.context.view_layer.objects.active = objs[0]
    bpy.ops.object.join()
    ob = bpy.context.active_object
    ob.name = name
    bpy.ops.object.transform_apply(location=True, rotation=True, scale=True)
    return ob


# ----------------------------------------------------------------- species ----

BARK = srgb(0x5c4330)
BARK_TOP = srgb(0x7a5a40)
BIRCH = srgb(0xe9e4d6)
BIRCH_DARK = srgb(0x3a3631)


def pine(name, seed, tiers=6, height=12.6, lean=0.0):
    r = random.Random(seed)
    parts = []
    t = trunk(0.52, 0.2, 5.0, tilt=(lean, 0))
    paint(t, BARK, BARK_TOP, 0, 5.0, rnd=r)
    parts.append(t)
    z = 2.3
    for i in range(tiers):
        k = i / (tiers - 1)
        rad = (2.9 - 2.2 * k) * r.uniform(0.94, 1.08)
        h = (3.6 - 1.0 * k) * r.uniform(0.95, 1.05)
        o = tier(rad, h, z, seg=10, rnd=r)
        paint(o, srgb(0x1c4a2c), srgb(0x4a8a48), z, z + h, rnd=r, jitter=0.08, top_boost=0.14)
        parts.append(o)
        z += (height - 3.4 - 2.3) / max(1, tiers - 1) + 0.0
    return join_and_name(parts, name)


def fir(name, seed):
    r = random.Random(seed)
    parts = []
    t = trunk(0.4, 0.16, 4.2)
    paint(t, BARK, BARK_TOP, 0, 4.2, rnd=r)
    parts.append(t)
    z = 1.6
    for i in range(8):
        k = i / 7
        rad = 1.85 - 1.55 * k
        h = 2.5 - 0.7 * k
        o = tier(rad, h, z, seg=9, droop=0.78, rnd=r)
        paint(o, srgb(0x16403a), srgb(0x3f8070), z, z + h, rnd=r, jitter=0.08, top_boost=0.16)
        parts.append(o)
        z += 1.45
    return join_and_name(parts, name)


def broadleaf(name, seed, colors, blobs=5, trunk_h=3.4, spread=1.9, size=2.5, fork=True):
    r = random.Random(seed)
    parts = []
    t = trunk(0.58, 0.26, trunk_h + 0.6)
    paint(t, BARK, BARK_TOP, 0, trunk_h + 0.6, rnd=r)
    parts.append(t)
    top = trunk_h + 1.9
    if fork:
        for s in (-1, 1):
            b = trunk(0.26, 0.1, 2.6, z0=trunk_h - 0.3, tilt=(0, s * 0.55), seg=6)
            paint(b, BARK, BARK_TOP, 0, 6, rnd=r)
            parts.append(b)
    low, high = colors
    for i in range(blobs):
        a = (i / blobs) * math.tau + r.uniform(-0.4, 0.4)
        d = spread * r.uniform(0.55, 1.0) if i else 0.0
        z = top + (r.uniform(-0.2, 0.9) if i else 1.0)
        rr = size * r.uniform(0.72, 1.05) * (1.15 if i == 0 else 1.0)
        o = blob(rr, (math.cos(a) * d, math.sin(a) * d, z), scale=(1.0, 1.0, 0.82), rnd=r)
        paint(o, low, high, z - rr, z + rr, rnd=r, jitter=0.1, top_boost=0.2)
        parts.append(o)
    return join_and_name(parts, name)


def birch(name, seed):
    r = random.Random(seed)
    parts = []
    # banded white bark with dark scars
    h = 6.2
    t = trunk(0.28, 0.12, h, seg=7, tilt=(r.uniform(-0.05, 0.05), r.uniform(-0.05, 0.05)))
    me = t.data
    ca = me.color_attributes.new(name="Col", type="FLOAT_COLOR", domain="POINT")
    for v in me.vertices:
        band = int(v.co.z / 0.45 + r.random() * 0.2)
        dark = (band % 3 == 1) and (v.index % 2 == 0)
        c = BIRCH_DARK if dark else BIRCH
        ca.data[v.index].color = (*c, 1.0)
    me.color_attributes.active_color = ca
    parts.append(t)
    for i in range(4):
        a = (i / 4) * math.tau + r.uniform(-0.5, 0.5)
        d = 0.9 * r.uniform(0.4, 1.0) if i else 0.0
        z = 6.2 + r.uniform(0.0, 1.8)
        rr = 1.8 * r.uniform(0.8, 1.1)
        o = blob(rr, (math.cos(a) * d, math.sin(a) * d, z), scale=(1.0, 1.0, 0.95), rnd=r)
        paint(o, srgb(0x6fa63a), srgb(0xc5e06a), z - rr, z + rr, rnd=r, jitter=0.1, top_boost=0.22)
        parts.append(o)
    return join_and_name(parts, name)


# ------------------------------------------------------------------- rocks ----

def rock(name, seed, size=1.0, flat=0.7, stack=False):
    r = random.Random(seed)
    bpy.ops.mesh.primitive_ico_sphere_add(subdivisions=3, radius=size, location=(0, 0, 0))
    ob = bpy.context.active_object
    bm = bmesh.new()
    bm.from_mesh(ob.data)
    # chunky planes: push verts toward a few random "cut" planes, then roughen
    cuts = [Vector((r.uniform(-1, 1), r.uniform(-1, 1), r.uniform(-0.2, 1))).normalized() for _ in range(4)]
    for v in bm.verts:
        p = v.co.copy()
        for c in cuts:
            d = p.dot(c) - size * r.uniform(0.62, 0.82)
            if d > 0:
                p -= c * d * 0.85
        p.z *= flat
        p += Vector((r.uniform(-1, 1), r.uniform(-1, 1), r.uniform(-1, 1))) * size * 0.05
        if p.z < -size * flat * 0.35:                   # sit flat on the ground
            p.z = -size * flat * 0.35
        v.co = p
    bm.to_mesh(ob.data)
    bm.free()
    ob.data.shade_flat()
    me = ob.data
    ca = me.color_attributes.new(name="Col", type="FLOAT_COLOR", domain="POINT")
    base_lo, base_hi = srgb(0x5a5750), srgb(0x9a958a)
    moss = srgb(0x55743a)
    for v in me.vertices:
        t = min(1.0, max(0.0, (v.co.z + size * 0.3) / (size * 1.0)))
        n = v.normal
        c = lerp3(base_lo, base_hi, t)
        k = 1.0 + r.uniform(-0.07, 0.07)
        c = (c[0] * k, c[1] * k, c[2] * k)
        m = max(0.0, n.z - 0.35) * 1.4 * (0.4 + 0.6 * r.random())
        m = min(0.8, m)
        c = lerp3(c, moss, m)
        ca.data[v.index].color = (*c, 1.0)
    me.color_attributes.active_color = ca
    ob.name = name
    return finish(ob)


# ------------------------------------------------------------------- export ----

def export(name, objs):
    bpy.ops.object.select_all(action="DESELECT")
    for i, o in enumerate(objs):
        o.location = ((i % 4) * 9, -(i // 4) * 9, 0)
        o.select_set(True)
    bpy.context.view_layer.objects.active = objs[0]
    path = os.path.join(OUT, name)
    kw = dict(filepath=path, export_format="GLB", use_selection=True, export_apply=False, export_yup=True)
    try:
        bpy.ops.export_scene.gltf(**kw, export_vertex_color="ACTIVE")
    except TypeError:
        bpy.ops.export_scene.gltf(**kw)
    tris = sum(len(o.data.polygons) * (1) for o in objs)
    print(f"  {name}: {len(objs)} meshes, ~{tris} faces, {os.path.getsize(path)} bytes")
    for o in objs:
        print(f"    {o.name}: {len(o.data.polygons)} faces")


def build_trees():
    objs = [
        pine("pine_a", 1, tiers=6, lean=0.02),
        pine("pine_b", 2, tiers=7, lean=-0.03),
        fir("fir", 3),
        broadleaf("oak_a", 4, (srgb(0x2f6a2e), srgb(0x7fb54a)), blobs=6, size=2.3),
        broadleaf("oak_b", 5, (srgb(0x356f33), srgb(0x8cc055)), blobs=5, size=2.5, spread=2.1),
        birch("birch", 6),
        broadleaf("blossom", 7, (srgb(0xd9709c), srgb(0xffc7dc)), blobs=6, size=2.0, spread=1.7, trunk_h=3.0),
        broadleaf("autumn", 8, (srgb(0xb0501e), srgb(0xf2b441)), blobs=6, size=2.3),
    ]
    export("nature_trees.glb", objs)
    build_tree_lods(objs)


def build_tree_lods(objs):
    """Far-LOD copies (~30% of the triangles) for the engine's distance bins. Same
    silhouettes, vertex colours kept; the engine swaps them in past ~120 m."""
    lods = []
    for o in objs:
        d = o.copy()
        d.data = o.data.copy()
        bpy.context.collection.objects.link(d)
        d.name = o.name + "_lod"
        md = d.modifiers.new("dec", "DECIMATE")
        md.ratio = 0.3
        bpy.context.view_layer.objects.active = d
        bpy.ops.object.select_all(action="DESELECT")
        d.select_set(True)
        bpy.ops.object.modifier_apply(modifier=md.name)
        d.data.shade_smooth()
        lods.append(d)
    for o, d in zip(objs, lods):
        print(f"    {o.name}: {len(o.data.polygons)} -> {len(d.data.polygons)} faces (lod)")
    export("nature_trees_lod.glb", lods)


def build_rocks():
    objs = [
        rock("rock0", 11, 1.0, 0.75),
        rock("rock1", 12, 1.0, 0.6),
        rock("rock2", 13, 1.0, 0.9),
        rock("rock3", 14, 1.0, 0.5),
        rock("rock4", 15, 1.0, 1.0),
        rock("rock5", 16, 1.0, 0.68),
    ]
    export("nature_rocks.glb", objs)


def render_preview():
    import mathutils
    scene = bpy.context.scene
    scene.render.engine = "CYCLES"
    scene.cycles.samples = 40
    scene.cycles.use_denoising = True
    scene.render.resolution_x, scene.render.resolution_y = 1400, 640
    scene.world = bpy.data.worlds.new("w")
    scene.world.use_nodes = True
    bg = scene.world.node_tree.nodes["Background"]
    bg.inputs[0].default_value = (0.5, 0.65, 0.85, 1)
    bg.inputs[1].default_value = 1.0
    bpy.ops.object.select_all(action="SELECT")
    bpy.ops.object.delete()
    for i, name in enumerate(("nature_trees.glb", "nature_rocks.glb")):
        before = set(bpy.data.objects)
        bpy.ops.import_scene.gltf(filepath=os.path.join(OUT, name))
        new = [o for o in bpy.data.objects if o not in before and o.type == "MESH"]
        for o in new:
            o.location.y += -i * 16
    bpy.ops.object.light_add(type="SUN", location=(10, -10, 20))
    sun = bpy.context.active_object
    sun.data.energy = 4.0
    sun.rotation_euler = (math.radians(50), 0, math.radians(30))
    bpy.ops.mesh.primitive_plane_add(size=120, location=(15, -8, -0.05))
    g = bpy.context.active_object
    gm = bpy.data.materials.new("g")
    gm.use_nodes = True
    gm.node_tree.nodes["Principled BSDF"].inputs["Base Color"].default_value = (0.2, 0.32, 0.12, 1)
    g.data.materials.append(gm)
    bpy.ops.object.camera_add(location=(13, -42, 9))
    cam = bpy.context.active_object
    cam.data.lens = 34
    cam.rotation_euler = (mathutils.Vector((13, -8, 5)) - mathutils.Vector((13, -42, 9))).to_track_quat("-Z", "Y").to_euler()
    scene.camera = cam
    os.makedirs(PREVIEW, exist_ok=True)
    scene.render.filepath = os.path.join(PREVIEW, "nature.png")
    bpy.ops.render.render(write_still=True)


MAT = None
failures = []
for fn in (build_trees, build_rocks):
    reset()
    MAT = make_material()
    try:
        fn()
    except Exception as exc:
        import traceback
        traceback.print_exc()
        failures.append((fn.__name__, repr(exc)))
if failures:
    print("FAILURES:", failures)
    sys.exit(1)
if "--preview" in sys.argv:
    render_preview()
print("Nature assets generated OK")
