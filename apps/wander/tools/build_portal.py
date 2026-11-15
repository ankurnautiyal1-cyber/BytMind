#!/usr/bin/env python3
"""Generate the Ancient Gate (portal arch) and its floating keystone fragments.

Usage:
  /Applications/Blender.app/Contents/MacOS/Blender --background \
      --python tools/build_portal.py [-- --preview]

Writes public/assets/portal_gate.glb and public/assets/portal_fragments.glb.
Blender is Z-up, glTF is Y-up: the opening axis is Blender +/-Y (glTF -/+Z).

Layout (Blender coords, origin = centre of the gate's footing):
  pillars at x = +/-3.4 (1.62 m square footprint -- matches the collision boxes)
  stone arch ring: radius 2.6..3.5 about (0, 0, 3.3); the portal surface fills the
    opening (halfwidth 2.6, floor to z = 5.9) and is drawn at runtime
  rune channels use material "gate_rune" (emissive); runtime code drives its glow
Vertex colours bake a cheap ambient-occlusion look (dark footings, moss on tops).
"""

import math
import os
import random
import sys

import bmesh
import bpy
from mathutils import Vector

random.seed(4242)

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.normpath(os.path.join(HERE, "..", "public", "assets"))
PREVIEW = os.path.normpath(os.path.join(HERE, "preview"))
os.makedirs(OUT, exist_ok=True)

STONE = (0.30, 0.27, 0.37)       # dusky violet-grey basalt
STONE_LIGHT = (0.52, 0.48, 0.64)  # trim
MOSS = (0.20, 0.30, 0.18)
RUNE_COL = 0x8fe8ff               # aqua-white; the runtime tints it


# ---------------------------------------------------------------- helpers ----

def reset():
    bpy.ops.object.select_all(action="SELECT")
    bpy.ops.object.delete(use_global=False)
    for block in (bpy.data.meshes, bpy.data.materials):
        for item in list(block):
            if item.users == 0:
                block.remove(item)


def hex_rgb(h):
    return tuple(((h >> s) & 0xFF) / 255.0 for s in (16, 8, 0))


def mat(name, base, rough=0.9, emit=None, strength=1.0):
    m = bpy.data.materials.new(name)
    m.use_nodes = True
    b = m.node_tree.nodes["Principled BSDF"]
    b.inputs["Base Color"].default_value = (*base, 1.0)
    b.inputs["Roughness"].default_value = rough
    if emit is not None:
        for n in ("Emission Color", "Emission"):
            s = b.inputs.get(n)
            if s is not None:
                s.default_value = (*emit, 1.0)
                break
        s = b.inputs.get("Emission Strength")
        if s is not None:
            s.default_value = strength
    m.diffuse_color = (*base, 1.0)
    return m


def _finish(ob, material):
    ob.data.materials.append(material)
    return ob


def _bevel(ob, width=0.06, segments=1):
    bpy.ops.object.select_all(action="DESELECT")
    ob.select_set(True)
    bpy.context.view_layer.objects.active = ob
    md = ob.modifiers.new("bev", "BEVEL")
    md.width = width
    md.segments = segments
    md.limit_method = "ANGLE"
    md.angle_limit = math.radians(35)
    bpy.ops.object.modifier_apply(modifier=md.name)


def block(name, dims, loc, material, rot=(0, 0, 0), bevel=0.06):
    """Bevelled box. dims = full extents."""
    bpy.ops.mesh.primitive_cube_add(size=2, location=loc, rotation=rot)
    ob = bpy.context.active_object
    ob.name = name
    ob.scale = (dims[0] / 2, dims[1] / 2, dims[2] / 2)
    bpy.ops.object.transform_apply(location=False, rotation=False, scale=True)
    if bevel:
        _bevel(ob, bevel)
    return _finish(ob, material)


def cylinder(name, r, depth, seg, loc, material, rot=(0, 0, 0), bevel=0.0):
    bpy.ops.mesh.primitive_cylinder_add(vertices=seg, radius=r, depth=depth,
                                        location=loc, rotation=rot)
    ob = bpy.context.active_object
    ob.name = name
    if bevel:
        _bevel(ob, bevel)
    return _finish(ob, material)


def cone(name, r, depth, seg, loc, material, rot=(0, 0, 0)):
    bpy.ops.mesh.primitive_cone_add(vertices=seg, radius1=r, radius2=0.0,
                                    depth=depth, location=loc, rotation=rot)
    ob = bpy.context.active_object
    ob.name = name
    return _finish(ob, material)


def flat_ring(name, r_major, width, loc, material, segs=72, height=0.05):
    """A thin flat band (annulus) lying in the XY plane."""
    me = bpy.data.meshes.new(name)
    bm = bmesh.new()
    ri, ro = r_major - width / 2, r_major + width / 2
    top, bot = [], []
    for i in range(segs):
        a = 2 * math.pi * i / segs
        c, s = math.cos(a), math.sin(a)
        top.append((bm.verts.new((ri * c, ri * s, height)), bm.verts.new((ro * c, ro * s, height))))
        bot.append((bm.verts.new((ri * c, ri * s, 0)), bm.verts.new((ro * c, ro * s, 0))))
    for i in range(segs):
        j = (i + 1) % segs
        bm.faces.new((top[i][0], top[i][1], top[j][1], top[j][0]))           # top
        bm.faces.new((top[i][1], bot[i][1], bot[j][1], top[j][1]))           # outer
        bm.faces.new((bot[i][0], top[i][0], top[j][0], bot[j][0]))           # inner
    bmesh.ops.recalc_face_normals(bm, faces=bm.faces[:])
    bm.to_mesh(me)
    bm.free()
    ob = bpy.data.objects.new(name, me)
    bpy.context.collection.objects.link(ob)
    ob.location = loc
    return _finish(ob, material)


def sector(name, r_in, r_out, a0, a1, depth, cz, material, bevel=0.05):
    """Wedge of an arch ring in the XZ plane, `depth` thick along Y."""
    me = bpy.data.meshes.new(name)
    bm = bmesh.new()
    y0, y1 = -depth / 2, depth / 2

    def p(r, a, y):
        return bm.verts.new((r * math.cos(a), y, cz + r * math.sin(a)))

    vs = {}
    for yi, y in ((0, y0), (1, y1)):
        vs[(0, yi)] = p(r_in, a0, y)
        vs[(1, yi)] = p(r_in, a1, y)
        vs[(2, yi)] = p(r_out, a1, y)
        vs[(3, yi)] = p(r_out, a0, y)
    for yi in (0, 1):
        bm.faces.new([vs[(i, yi)] for i in range(4)])
    for i in range(4):
        j = (i + 1) % 4
        bm.faces.new((vs[(i, 0)], vs[(j, 0)], vs[(j, 1)], vs[(i, 1)]))
    bmesh.ops.recalc_face_normals(bm, faces=bm.faces[:])
    bm.to_mesh(me)
    bm.free()
    ob = bpy.data.objects.new(name, me)
    bpy.context.collection.objects.link(ob)
    if bevel:
        _bevel(ob, bevel)
    return _finish(ob, material)


def rock(name, radius, loc, material, scale=(1, 1, 1), jitter=0.25, sub=1):
    bpy.ops.mesh.primitive_ico_sphere_add(subdivisions=sub, radius=radius, location=loc)
    ob = bpy.context.active_object
    ob.name = name
    ob.scale = scale
    bm = bmesh.new()
    bm.from_mesh(ob.data)
    for v in bm.verts:
        v.co += Vector((random.uniform(-jitter, jitter) * radius,
                        random.uniform(-jitter, jitter) * radius,
                        random.uniform(-jitter, jitter) * radius))
    bm.to_mesh(ob.data)
    bm.free()
    return _finish(ob, material)


def glyph(prefix, centre, size, material, face="+y", seed=None):
    """A little rune made of 2-4 raised bars on a face of the gate."""
    r = random.Random(seed)
    sx = 1 if face == "+y" else -1
    cx, cz = centre[0], centre[2]
    s = size
    bars = []
    kind = r.randint(0, 4)
    if kind == 0:   # T
        bars = [(0, 0.5, 1.0, 0.16), (0, 0.0, 0.16, 1.0)]
    elif kind == 1:  # ladder
        bars = [(0, -0.4, 1.0, 0.16), (0, 0.4, 1.0, 0.16), (0, 0.0, 0.16, 1.0)]
    elif kind == 2:  # Z
        bars = [(0, 0.5, 1.0, 0.16), (0, -0.5, 1.0, 0.16), (0.0, 0.0, 0.16, 1.0)]
    elif kind == 3:  # hook
        bars = [(-0.4, 0.0, 0.16, 1.0), (0.0, 0.5, 0.9, 0.16), (0.45, 0.25, 0.16, 0.6)]
    else:           # eye
        bars = [(0, 0.35, 0.9, 0.16), (0, -0.35, 0.9, 0.16), (0, 0.0, 0.2, 0.2)]
    out = []
    for i, (bx, bz, bw, bh) in enumerate(bars):
        if face == "up":  # lying flat on the plinth
            out.append(block(f"{prefix}{i}", (bw * s, bh * s, 0.03),
                             (cx + bx * s * 0.5, centre[1] + bz * s * 0.5, cz), material, bevel=0))
        else:             # standing on a vertical face
            y = centre[1] + sx * 0.012
            out.append(block(f"{prefix}{i}", (bw * s, 0.035, bh * s),
                             (cx + bx * s * 0.5, y, cz + bz * s * 0.5), material, bevel=0))
    return out


# ------------------------------------------------------- vertex-colour paint ---

def paint(ob, tint, moss=0.0, jitter=0.07, ao_height=8.8, white=False):
    """Bake a cheap AO/weathering look into a POINT colour attribute."""
    me = ob.data
    if "Col" in me.color_attributes:
        me.color_attributes.remove(me.color_attributes["Col"])
    ca = me.color_attributes.new(name="Col", type="FLOAT_COLOR", domain="POINT")
    block_tint = 1.0 + random.uniform(-jitter, jitter)
    mw = ob.matrix_world
    for v in me.vertices:
        if white:
            ca.data[v.index].color = (1.0, 1.0, 1.0, 1.0)
            continue
        wz = (mw @ v.co).z
        n = (mw.to_3x3() @ v.normal).normalized()
        ao = 0.52 + 0.48 * min(1.0, max(0.0, wz / ao_height) ** 0.6)
        c = [t * block_tint * ao for t in tint]
        # moss pools on upward faces near the ground
        if moss > 0:
            k = max(0.0, n.z - 0.45) * moss * max(0.0, 1.0 - wz / 3.5)
            c = [c[i] * (1 - k) + MOSS[i] * k for i in range(3)]
        ca.data[v.index].color = (*c, 1.0)
    me.color_attributes.active_color = ca
    me.color_attributes.render_color_index = me.color_attributes.find("Col")


def finish_paint(objs, rune_mat):
    for ob in objs:
        is_rune = rune_mat in ob.data.materials[:]
        paint(ob, STONE_LIGHT if ob.name.startswith("trim") else STONE,
              moss=0.0 if is_rune else 1.0, white=is_rune)


def export(name, join=True, objs=None):
    meshes = objs or [o for o in bpy.context.scene.objects if o.type == "MESH"]
    bpy.ops.object.select_all(action="DESELECT")
    for o in meshes:
        o.select_set(True)
    bpy.context.view_layer.objects.active = meshes[0]
    if join and len(meshes) > 1:
        bpy.ops.object.join()
        meshes = [bpy.context.active_object]
    for o in meshes:
        bpy.ops.object.select_all(action="DESELECT")
        o.select_set(True)
        bpy.context.view_layer.objects.active = o
        bpy.ops.object.shade_flat()
    bpy.ops.object.select_all(action="DESELECT")
    for o in meshes:
        o.select_set(True)
    bpy.context.view_layer.objects.active = meshes[0]
    bpy.ops.object.transform_apply(location=False, rotation=True, scale=True)
    path = os.path.join(OUT, name)
    kw = dict(filepath=path, export_format="GLB", use_selection=True,
              export_apply=False, export_yup=True)
    try:
        bpy.ops.export_scene.gltf(**kw, export_vertex_color="ACTIVE")
    except TypeError:
        bpy.ops.export_scene.gltf(**kw)
    tris = sum(len(o.data.polygons) for o in meshes)
    print(f"  {name}: {tris} faces, {os.path.getsize(path)} bytes")


# ------------------------------------------------------------------- gate ----

def build_gate():
    m_stone = mat("gate_stone", STONE, rough=0.95)
    m_trim = mat("gate_trim", STONE_LIGHT, rough=0.9)
    m_rune = mat("gate_rune", hex_rgb(RUNE_COL), rough=0.4, emit=hex_rgb(RUNE_COL), strength=3.0)
    objs = []

    def add(o):
        objs.extend(o if isinstance(o, list) else [o])
        return o

    # ---- inlaid plinth: a low stone disc carved with rune rings ----
    add(cylinder("plinth_outer", 9.4, 0.3, 64, (0, 0, -0.05), m_stone, bevel=0.06))
    add(cylinder("trim_plinth_inner", 7.6, 0.2, 64, (0, 0, 0.06), m_trim, bevel=0.04))
    for i, (r, w) in enumerate([(7.0, 0.16), (5.4, 0.1), (3.9, 0.1)]):
        add(flat_ring(f"rune_ring{i}", r, w, (0, 0, 0.16), m_rune, segs=96, height=0.03))
    # radial glyph ticks between the rings
    for i in range(16):
        a = 2 * math.pi * i / 16 + 0.1
        r = 6.2
        b = block(f"rune_tick{i}", (0.1, 0.9, 0.03),
                  (r * math.cos(a), r * math.sin(a), 0.175), m_rune, rot=(0, 0, a + math.pi / 2), bevel=0)
        add(b)
    # outer glyph marks lying on the plinth
    for i in range(12):
        a = 2 * math.pi * i / 12 + 0.26
        r = 8.5
        add(glyph(f"rune_og{i}", (r * math.cos(a), r * math.sin(a), 0.12), 0.55, m_rune, "up", seed=i))
    # rubble at the footing
    for i in range(14):
        a = random.uniform(0, 2 * math.pi)
        r = random.uniform(8.2, 9.8)
        add(rock(f"trim_rubble{i}", random.uniform(0.15, 0.4), (r * math.cos(a), r * math.sin(a), 0.1),
                 m_stone if i % 2 else m_trim, scale=(1, 1, 0.6), jitter=0.3))

    # ---- pillars: stacked, slightly mis-set drums ----
    heights = [1.25, 1.5, 1.4, 1.5, 1.4, 1.35]
    for side in (-1, 1):
        z = 0.12
        add(block(f"pillar_foot{side}", (1.62, 1.62, 0.4), (side * 3.4, 0, z + 0.2), m_stone, bevel=0.07))
        z += 0.4
        for i, h in enumerate(heights):
            w = 1.54 - i * 0.015
            rot = random.uniform(-2.2, 2.2)
            ox, oy = random.uniform(-0.03, 0.03), random.uniform(-0.03, 0.03)
            add(block(f"pillar{side}_{i}", (w, w, h - 0.03),
                      (side * 3.4 + ox, oy, z + h / 2), m_stone,
                      rot=(0, 0, math.radians(rot)), bevel=0.07))
            z += h
        # glowing rune channels: staggered vertical strips on the front/back faces
        for face in (1, -1):
            zc = 0.9
            for k in range(7):
                seg = random.choice([0.55, 0.7, 0.9])
                add(block(f"rune_pil{side}{face}{k}", (0.11, 0.03, seg),
                          (side * 3.4 - side * 0.38, face * 0.82, zc + seg / 2), m_rune, bevel=0))
                add(block(f"rune_pilb{side}{face}{k}", (0.11, 0.03, seg * 0.8),
                          (side * 3.4 + side * 0.38, face * 0.82, zc + seg * 0.1 + 0.25), m_rune, bevel=0))
                if k % 2 == 0:
                    add(glyph(f"rune_pg{side}{face}{k}", (side * 3.4, face * 0.83, zc + seg * 0.5 + 0.1), 0.34, m_rune,
                              "+y" if face > 0 else "-y", seed=side * 17 + k + face))
                zc += seg + 0.28
                if zc > 7.6:
                    break
        # capital + spire
        add(block(f"trim_cap{side}", (2.1, 2.1, 0.5), (side * 3.4, 0, 8.55), m_trim, bevel=0.09))
        add(block(f"trim_cap2{side}", (1.7, 1.7, 0.3), (side * 3.4, 0, 8.95), m_trim, bevel=0.07))
        add(cone(f"trim_spire{side}", 0.78, 1.7, 4, (side * 3.4, 0, 10.0), m_trim, rot=(0, 0, math.radians(45))))
        # leaning buttress slabs on the outer side
        add(block(f"buttress{side}a", (0.9, 1.3, 3.8), (side * 4.75, 0, 1.75), m_stone,
                  rot=(0, math.radians(side * 9), 0), bevel=0.08))
        add(block(f"buttress{side}b", (0.7, 1.1, 2.3), (side * 5.45, 0.15, 1.05), m_stone,
                  rot=(0, math.radians(side * 14), math.radians(side * 4)), bevel=0.08))

    # ---- arch ring of voussoirs around the portal opening ----
    CZ = 3.3
    n = 15
    for i in range(n):
        a0 = math.pi * i / n + math.radians(0.5)
        a1 = math.pi * (i + 1) / n - math.radians(0.5)
        dr = random.uniform(-0.05, 0.07)
        depth = 1.3 + random.uniform(-0.08, 0.1)
        if i == n // 2:
            continue  # keystone placed below
        add(sector(f"arch{i}", 2.6, 3.5 + dr, a0, a1, depth, CZ, m_stone, bevel=0.05))
        # rune on the middle of each stone, both faces
        am = (a0 + a1) / 2
        rm = 3.05
        for face, sgn in (("+y", 1), ("-y", -1)):
            add(glyph(f"rune_ag{i}{face}",
                      (rm * math.cos(am), sgn * (depth / 2), CZ + rm * math.sin(am)), 0.26, m_rune, face, seed=i * 3 + sgn))
    # keystone: taller, with an emissive sigil
    ka0 = math.pi * (n // 2) / n + math.radians(0.5)
    ka1 = math.pi * (n // 2 + 1) / n - math.radians(0.5)
    add(sector("trim_keystone", 2.55, 4.15, ka0, ka1, 1.65, CZ, m_trim, bevel=0.06))
    for sgn in (1, -1):
        add(block(f"rune_sigil{sgn}", (0.34, 0.04, 0.34), (0, sgn * 0.84, CZ + 3.35), m_rune,
                  rot=(0, math.radians(45), 0), bevel=0))
        add(block(f"rune_sigil_core{sgn}", (0.1, 0.05, 0.62), (0, sgn * 0.84, CZ + 3.35), m_rune, bevel=0))
    # inner arch glow line: a thin emissive band hugging the opening
    for sgn in (1, -1):
        prev = None
        steps = 24
        for k in range(steps):
            a0 = math.pi * k / steps
            a1 = math.pi * (k + 1) / steps
            add(sector(f"rune_arc{sgn}_{k}", 2.52, 2.6, a0, a1, 0.03, CZ, m_rune, bevel=0)).location.y = sgn * 0.64
        for sx in (-1, 1):
            add(block(f"rune_jamb{sgn}{sx}", (0.08, 0.03, 3.2), (sx * 2.56, sgn * 0.64, 1.7), m_rune, bevel=0))

    # ---- spandrel fill between the ring and the lintel (stepped masonry) ----
    x = -2.5
    while x < 2.5:
        top_ring = CZ + math.sqrt(max(0.1, 3.5 ** 2 - min(abs(x) + 0.25, 3.45) ** 2))
        zt = 7.55
        h = zt - top_ring + 0.2
        if h > 0.1:
            add(block(f"fill{x:.1f}", (0.52, 1.15, h), (x + 0.25, 0, top_ring - 0.1 + h / 2),
                      m_stone, bevel=0.05))
        x += 0.5

    # ---- lintel + crown ----
    add(block("lintel", (8.9, 1.7, 1.0), (0, 0, 7.95), m_stone, bevel=0.09))
    add(block("trim_lintel_top", (9.3, 1.85, 0.3), (0, 0, 8.6), m_trim, bevel=0.08))
    add(block("trim_lintel_base", (8.6, 1.5, 0.22), (0, 0, 7.4), m_trim, bevel=0.06))
    # crest: a carved diamond with an emissive core, flanked by horn stones
    add(block("trim_crest", (1.2, 0.8, 1.9), (0, 0, 9.65), m_trim, rot=(0, math.radians(45), 0), bevel=0.08))
    for sgn in (1, -1):
        add(block(f"rune_crest_core{sgn}", (0.3, 0.05, 1.2), (0, sgn * 0.42, 9.65), m_rune, bevel=0))
        add(block(f"trim_horn{sgn}", (0.5, 0.6, 1.5), (sgn * 1.25, 0, 9.5), m_trim,
                  rot=(0, math.radians(sgn * -22), 0), bevel=0.06))

    finish_paint(objs, m_rune)
    export("portal_gate.glb")


# -------------------------------------------------------------- fragments ----

def build_fragments():
    m_stone = mat("gate_stone", STONE, rough=0.95)
    m_trim = mat("gate_trim", STONE_LIGHT, rough=0.9)
    m_rune = mat("gate_rune", hex_rgb(RUNE_COL), rough=0.4, emit=hex_rgb(RUNE_COL), strength=3.0)
    frags = []

    def add(o):
        frags.append(o)
        return o

    # 0: chipped slab with a rune face
    a = add(block("frag0", (1.1, 0.5, 0.7), (0, 0, 0), m_stone, rot=(0.2, 0.1, 0.4), bevel=0.07))
    # 1: wedge (arch stone)
    b = add(sector("frag1", 0.4, 1.2, math.radians(20), math.radians(48), 0.7, 0.0, m_trim, bevel=0.05))
    # 2: rough chunk
    c = add(rock("frag2", 0.55, (0, 0, 0), m_stone, scale=(1.0, 0.8, 0.7), jitter=0.3))
    # 3: shard / spike
    d = add(cone("frag3", 0.35, 1.4, 5, (0, 0, 0), m_trim, rot=(0.3, 0, 0)))
    # 4: ring segment with glowing channel
    e = add(sector("frag4", 0.5, 1.0, math.radians(0), math.radians(70), 0.35, 0.0, m_stone, bevel=0.04))
    # glowing glyph faces
    rune_bits = []
    rune_bits.append(block("frag0_rune", (0.55, 0.035, 0.12), (0, -0.27, 0.05), m_rune, bevel=0))
    rune_bits.append(block("frag1_rune", (0.5, 0.04, 0.1), (0.35, -0.36, 0.55), m_rune, bevel=0))
    rune_bits.append(block("frag3_rune", (0.1, 0.1, 0.5), (0.0, 0.0, 0.0), m_rune, bevel=0))
    rune_bits.append(block("frag4_rune", (0.1, 0.4, 0.04), (0.78, 0, 0.18), m_rune, bevel=0))
    # fold each rune bit into its fragment so every fragment is one object
    pairs = {"frag0_rune": a, "frag1_rune": b, "frag3_rune": d, "frag4_rune": e}
    for rb in rune_bits:
        host = pairs[rb.name]
        bpy.ops.object.select_all(action="DESELECT")
        rb.select_set(True)
        host.select_set(True)
        bpy.context.view_layer.objects.active = host
        bpy.ops.object.join()
    objs = frags
    for o in objs:
        paint(o, STONE_LIGHT if o.name in ("frag1", "frag3") else STONE, moss=0.0, ao_height=20.0)
        # the glowing material must read as white in the colour attribute
    # re-paint rune faces white
    for o in objs:
        me = o.data
        ca = me.color_attributes["Col"]
        rune_idx = [i for i, m in enumerate(me.materials) if m.name.startswith("gate_rune")]
        if rune_idx:
            for poly in me.polygons:
                if poly.material_index in rune_idx:
                    for vi in poly.vertices:
                        ca.data[vi].color = (1, 1, 1, 1)
    # spread them out so the glb is easy to inspect
    for i, o in enumerate(objs):
        o.location = (i * 2.5, 0, 0)
    export("portal_fragments.glb", join=False, objs=objs)


# ------------------------------------------------------------ preview render ----

def render_preview():
    import mathutils
    scene = bpy.context.scene
    scene.render.engine = "CYCLES"
    scene.cycles.samples = 48
    scene.cycles.use_denoising = True
    scene.render.resolution_x, scene.render.resolution_y = 1100, 760
    scene.world = bpy.data.worlds.new("w")
    scene.world.use_nodes = True
    bg = scene.world.node_tree.nodes["Background"]
    bg.inputs[0].default_value = (0.05, 0.06, 0.12, 1)
    bg.inputs[1].default_value = 1.0

    bpy.ops.object.select_all(action="SELECT")
    bpy.ops.object.delete()
    bpy.ops.import_scene.gltf(filepath=os.path.join(OUT, "portal_gate.glb"))
    # moonlight + a soft fill
    bpy.ops.object.light_add(type="SUN", location=(10, -12, 18))
    sun = bpy.context.active_object
    sun.data.energy = 3.2
    sun.data.color = (0.7, 0.8, 1.0)
    sun.rotation_euler = (math.radians(55), 0, math.radians(35))
    bpy.ops.object.light_add(type="AREA", location=(-8, -10, 6))
    fill = bpy.context.active_object
    fill.data.energy = 900
    fill.data.color = (1.0, 0.8, 0.7)
    # ground
    bpy.ops.mesh.primitive_plane_add(size=80, location=(0, 0, -0.2))
    g = bpy.context.active_object
    gm = bpy.data.materials.new("g")
    gm.use_nodes = True
    gm.node_tree.nodes["Principled BSDF"].inputs["Base Color"].default_value = (0.1, 0.16, 0.1, 1)
    g.data.materials.append(gm)

    def shot(path, cam_loc, target, lens=32):
        bpy.ops.object.camera_add(location=cam_loc)
        cam = bpy.context.active_object
        cam.data.lens = lens
        d = mathutils.Vector(target) - mathutils.Vector(cam_loc)
        cam.rotation_euler = d.to_track_quat("-Z", "Y").to_euler()
        scene.camera = cam
        scene.render.filepath = path
        bpy.ops.render.render(write_still=True)

    os.makedirs(PREVIEW, exist_ok=True)
    shot(os.path.join(PREVIEW, "portal_front.png"), (0, -24, 5.5), (0, 0, 4.8))
    shot(os.path.join(PREVIEW, "portal_three_quarter.png"), (17, -17, 7), (0, 0, 4.6), 36)


# -------------------------------------------------------------------- run ----

failures = []
for fn in (build_gate, build_fragments):
    reset()
    try:
        fn()
    except Exception as exc:  # report at the end
        import traceback
        traceback.print_exc()
        failures.append((fn.__name__, repr(exc)))
reset()
if failures:
    print("FAILURES:", failures)
    sys.exit(1)
if "--preview" in sys.argv:
    render_preview()
print("Portal assets generated OK")
