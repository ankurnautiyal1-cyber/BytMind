"""Shared Blender helpers for Wander's build scripts (headless, Blender 4.x/5.x).

    import os, sys
    sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), "lib"))
    import wander_bpy as wb

What lives here: scene reset, colour + material helpers, the primitive builders the
landmark scripts share, bevel + weighted normals, and the "painted" vertex-colour
pipeline (material colours -> corner colours -> tonal noise, moss, dirt, baked
ambient occlusion), glb export and a contact-sheet renderer for review.

Older scripts (build_portal / build_character / build_city / build_nature) predate
this module and keep their own copies of the small helpers.
"""

import math
import os
import random

import bmesh
import bpy
from mathutils import Vector, noise
from mathutils.bvhtree import BVHTree

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.normpath(os.path.join(HERE, "..", ".."))
OUT = os.path.join(ROOT, "public", "assets")
PREVIEW = os.path.join(ROOT, "tools", "preview")
os.makedirs(OUT, exist_ok=True)


# ------------------------------------------------------------------ scene ----

def reset():
    bpy.ops.object.select_all(action="SELECT")
    bpy.ops.object.delete(use_global=False)
    for block in (bpy.data.meshes, bpy.data.materials, bpy.data.curves, bpy.data.images):
        for item in list(block):
            if item.users == 0:
                block.remove(item)


def srgb(h):
    """0xRRGGBB (sRGB) -> linear RGB tuple."""
    c = [((h >> s) & 0xFF) / 255.0 for s in (16, 8, 0)]
    return tuple((x / 12.92) if x <= 0.04045 else ((x + 0.055) / 1.055) ** 2.4 for x in c)


def lerp3(a, b, t):
    return tuple(a[i] + (b[i] - a[i]) * t for i in range(3))


def mul3(a, k):
    return (a[0] * k, a[1] * k, a[2] * k)


# -------------------------------------------------------------- materials ----

def _set_input(bsdf, names, value):
    for n in names:
        s = bsdf.inputs.get(n)
        if s is not None:
            s.default_value = value
            return


def mat(name, hexcolor, rough=0.95, emit=None, strength=1.0, metallic=0.0):
    """A Principled material. Non-emissive materials only carry a colour that the
    paint pass reads; emissive ones survive to the glb (names are looked up at runtime)."""
    m = bpy.data.materials.new(name)
    m.use_nodes = True
    b = m.node_tree.nodes["Principled BSDF"]
    c = srgb(hexcolor)
    b.inputs["Base Color"].default_value = (*c, 1.0)
    b.inputs["Roughness"].default_value = rough
    _set_input(b, ("Metallic",), metallic)
    if emit is not None:
        e = srgb(emit)
        _set_input(b, ("Emission Color", "Emission"), (*e, 1.0))
        _set_input(b, ("Emission Strength",), strength)
    m.diffuse_color = (*c, 1.0)
    m["wb_emissive"] = emit is not None
    m["wb_rough"] = rough
    return m


def _link(ob, m):
    ob.data.materials.append(m)


# ------------------------------------------------------------- primitives ----

def box(name, dims, loc, m, rot=(0, 0, 0)):
    bpy.ops.mesh.primitive_cube_add(size=2, location=loc, rotation=rot)
    ob = bpy.context.active_object
    ob.name = name
    ob.scale = (dims[0] / 2, dims[1] / 2, dims[2] / 2)
    bpy.ops.object.transform_apply(location=False, rotation=False, scale=True)
    _link(ob, m)
    return ob


def cyl(name, r_bottom, r_top, depth, seg, loc, m, rot=(0, 0, 0), cap=True):
    bpy.ops.mesh.primitive_cone_add(vertices=seg, radius1=r_bottom, radius2=r_top, depth=depth,
                                    end_fill_type="NGON" if cap else "NOTHING",
                                    location=loc, rotation=rot)
    ob = bpy.context.active_object
    ob.name = name
    _link(ob, m)
    return ob


def ico(name, radius, loc, m, scale=(1, 1, 1), sub=1, jitter=0.0, rnd=None):
    rnd = rnd or random
    bpy.ops.mesh.primitive_ico_sphere_add(subdivisions=sub, radius=radius, location=loc)
    ob = bpy.context.active_object
    ob.name = name
    ob.scale = scale
    bpy.ops.object.transform_apply(location=False, rotation=False, scale=True)
    if jitter:
        bm = bmesh.new()
        bm.from_mesh(ob.data)
        for v in bm.verts:
            v.co += Vector((rnd.uniform(-jitter, jitter), rnd.uniform(-jitter, jitter),
                            rnd.uniform(-jitter, jitter)))
        bm.to_mesh(ob.data)
        bm.free()
    _link(ob, m)
    return ob


def torus(name, major, minor, loc, m, rot=(0, 0, 0), seg=16, mseg=5):
    bpy.ops.mesh.primitive_torus_add(major_radius=major, minor_radius=minor, major_segments=seg,
                                     minor_segments=mseg, location=loc, rotation=rot)
    ob = bpy.context.active_object
    ob.name = name
    _link(ob, m)
    return ob


def between(name, a, b, r, seg, m, r_end=None):
    """A tapered round bar from point a to point b."""
    a, b = Vector(a), Vector(b)
    d = b - a
    ob = cyl(name, r, r_end if r_end is not None else r, d.length, seg, (a + b) / 2, m)
    ob.rotation_mode = "QUATERNION"
    ob.rotation_quaternion = d.to_track_quat("Z", "Y")
    return ob


def slab_between(name, a, b, width, thick, m, up=(0, 0, 1)):
    """A flat bar (plank / spar) from a to b; `up` orients its thin axis."""
    a, b = Vector(a), Vector(b)
    d = b - a
    ob = box(name, (width, thick, d.length), (a + b) / 2, m)
    ob.rotation_mode = "QUATERNION"
    q = d.to_track_quat("Z", "Y")
    ob.rotation_quaternion = q
    return ob


def taper_top(ob, factor, along="XY"):
    bm = bmesh.new()
    bm.from_mesh(ob.data)
    top = max(v.co.z for v in bm.verts)
    for v in bm.verts:
        if v.co.z > top - 0.01:
            if "X" in along:
                v.co.x *= factor
            if "Y" in along:
                v.co.y *= factor
    bm.to_mesh(ob.data)
    bm.free()


def rockify(ob, rnd, cuts=4, size=1.0, rough=0.06):
    """Chunky planes + roughening for rock chunks (ico spheres work best)."""
    bm = bmesh.new()
    bm.from_mesh(ob.data)
    cs = [Vector((rnd.uniform(-1, 1), rnd.uniform(-1, 1), rnd.uniform(-0.3, 1))).normalized()
          for _ in range(cuts)]
    for v in bm.verts:
        p = v.co.copy()
        for c in cs:
            d = p.dot(c) - size * rnd.uniform(0.6, 0.85)
            if d > 0:
                p -= c * d * 0.8
        p += Vector((rnd.uniform(-1, 1), rnd.uniform(-1, 1), rnd.uniform(-1, 1))) * size * rough
        v.co = p
    bm.to_mesh(ob.data)
    bm.free()
    return ob


# -------------------------------------------------------- join + finishing ----

def mesh_obj(name, bm, m=None, solidify=0.0):
    """Turn a bmesh into a scene object (optionally thickened)."""
    me = bpy.data.meshes.new(name)
    bm.to_mesh(me)
    bm.free()
    ob = bpy.data.objects.new(name, me)
    bpy.context.scene.collection.objects.link(ob)
    if m is not None:
        me.materials.append(m)
    if solidify:
        bpy.context.view_layer.objects.active = ob
        md = ob.modifiers.new("solid", "SOLIDIFY")
        md.thickness = solidify
        md.offset = 0.0
        bpy.ops.object.select_all(action="DESELECT")
        ob.select_set(True)
        bpy.ops.object.modifier_apply(modifier=md.name)
    return ob


def join_all(name, objs=None):
    meshes = objs or [o for o in bpy.context.scene.objects if o.type == "MESH"]
    bpy.ops.object.select_all(action="DESELECT")
    for o in meshes:
        o.select_set(True)
    bpy.context.view_layer.objects.active = meshes[0]
    if len(meshes) > 1:
        bpy.ops.object.join()
    ob = bpy.context.active_object
    ob.name = name
    bpy.ops.object.transform_apply(location=True, rotation=True, scale=True)
    return ob


def bevel(ob, width=0.06, segments=2, angle=35):
    """Bevel hard edges, then weighted normals so the highlights roll over them."""
    bpy.context.view_layer.objects.active = ob
    md = ob.modifiers.new("bevel", "BEVEL")
    md.width = width
    md.segments = segments
    md.limit_method = "ANGLE"
    md.angle_limit = math.radians(angle)
    md.harden_normals = True
    bpy.ops.object.modifier_apply(modifier=md.name)


def smooth_by_angle(ob, angle=40):
    bpy.ops.object.select_all(action="DESELECT")
    ob.select_set(True)
    bpy.context.view_layer.objects.active = ob
    for op in ("shade_smooth_by_angle", "shade_auto_smooth"):
        try:
            getattr(bpy.ops.object, op)(angle=math.radians(angle))
            return
        except Exception:
            continue
    bpy.ops.object.shade_smooth()


def subdivide_for_paint(ob, max_edge=0.9, passes=3):
    """Long edges get split so vertex colours have the resolution to carry
    weathering (a 9 m wall with 4 corner vertices cannot hold a gradient)."""
    bm = bmesh.new()
    bm.from_mesh(ob.data)
    for _ in range(passes):
        edges = [e for e in bm.edges if e.calc_length() > max_edge]
        if not edges:
            break
        bmesh.ops.subdivide_edges(bm, edges=edges, cuts=1, use_grid_fill=True)
    bm.to_mesh(ob.data)
    bm.free()


# ------------------------------------------------------------- the paint ----

def _colour_attr(ob):
    me = ob.data
    if "Col" in me.color_attributes:
        me.color_attributes.remove(me.color_attributes["Col"])
    ca = me.color_attributes.new(name="Col", type="FLOAT_COLOR", domain="CORNER")
    me.color_attributes.active_color = ca
    me.color_attributes.render_color_index = me.color_attributes.find("Col")
    return ca


def paint_materials(ob):
    """Corner colours from each face's material colour (emissive materials -> white)."""
    me = ob.data
    ca = _colour_attr(ob)
    cols = []
    for m in me.materials:
        if m is None:
            cols.append((0.5, 0.5, 0.5))
        elif m.get("wb_emissive"):
            cols.append((1.0, 1.0, 1.0))
        else:
            cols.append(tuple(m.diffuse_color[:3]))
    for p in me.polygons:
        c = cols[p.material_index] if p.material_index < len(cols) else (0.5, 0.5, 0.5)
        for li in p.loop_indices:
            ca.data[li].color = (*c, 1.0)
    return ca


def _emissive_faces(ob):
    me = ob.data
    em = [bool(m and m.get("wb_emissive")) for m in me.materials]
    return {p.index for p in me.polygons if p.material_index < len(em) and em[p.material_index]}


def tone(ob, amount=0.16, scale=0.7, jitter=0.04, seed=0):
    """Multiply by 3D noise (broad tonal drift) + a little per-corner jitter."""
    me = ob.data
    ca = me.color_attributes["Col"]
    skip = _emissive_faces(ob)
    rnd = random.Random(seed)
    off = Vector((seed * 1.7, seed * 2.3, seed * 0.9))
    mw = ob.matrix_world
    for p in me.polygons:
        if p.index in skip:
            continue
        for li in p.loop_indices:
            co = mw @ me.vertices[me.loops[li].vertex_index].co
            n = noise.noise((co * scale) + off)
            n2 = noise.noise((co * scale * 3.1) + off + Vector((9, 4, 1)))
            k = 1.0 + (n * 0.7 + n2 * 0.3) * amount + rnd.uniform(-jitter, jitter)
            c = ca.data[li].color
            ca.data[li].color = (c[0] * k, c[1] * k, c[2] * k, 1.0)


def moss(ob, color, up=0.45, amount=0.85, scale=1.4, seed=0, max_z=None, min_z=None):
    """Moss on upward-facing surfaces, patchy by noise."""
    me = ob.data
    ca = me.color_attributes["Col"]
    skip = _emissive_faces(ob)
    off = Vector((seed * 3.1, seed * 1.3, seed * 2.7))
    mw = ob.matrix_world
    for p in me.polygons:
        if p.index in skip:
            continue
        nz = (mw.to_3x3() @ p.normal).z
        for li in p.loop_indices:
            v = me.vertices[me.loops[li].vertex_index]
            co = mw @ v.co
            if max_z is not None and co.z > max_z:
                continue
            if min_z is not None and co.z < min_z:
                continue
            patch = 0.5 + 0.5 * noise.noise(co * scale + off)
            t = max(0.0, (nz - up) / (1.0 - up)) * patch * amount
            # a little creep up the vertical faces near the ground
            t = max(t, max(0.0, 0.5 - co.z * 0.25) * max(0.0, patch - 0.45) * amount * 0.7)
            if t > 0:
                c = ca.data[li].color
                m = lerp3((c[0], c[1], c[2]), color, min(1.0, t))
                ca.data[li].color = (*m, 1.0)


def dirt(ob, color, height=1.2, amount=0.55):
    """Darken + stain toward the ground."""
    me = ob.data
    ca = me.color_attributes["Col"]
    skip = _emissive_faces(ob)
    mw = ob.matrix_world
    for p in me.polygons:
        if p.index in skip:
            continue
        for li in p.loop_indices:
            z = (mw @ me.vertices[me.loops[li].vertex_index].co).z
            t = max(0.0, 1.0 - z / height) * amount
            if t > 0:
                c = ca.data[li].color
                ca.data[li].color = (*lerp3((c[0], c[1], c[2]), color, t), 1.0)


def stain(ob, color, scale=0.35, amount=0.5, seed=0, min_stretch=1.0):
    """Vertical streaks (rain runs): noise stretched along z."""
    me = ob.data
    ca = me.color_attributes["Col"]
    skip = _emissive_faces(ob)
    off = Vector((seed * 2.0, seed * 5.0, seed * 1.1))
    mw = ob.matrix_world
    for p in me.polygons:
        if p.index in skip:
            continue
        for li in p.loop_indices:
            co = mw @ me.vertices[me.loops[li].vertex_index].co
            n = noise.noise(Vector((co.x * 1.6, co.y * 1.6, co.z * scale * 0.25)) + off)
            t = max(0.0, n - 0.1) * amount
            if t > 0:
                c = ca.data[li].color
                ca.data[li].color = (*lerp3((c[0], c[1], c[2]), color, min(1, t)), 1.0)


def strata(ob, cols, freq=1.5, warp=0.9, seed=0, amount=1.0):
    """Sedimentary banding: world-z bands, warped by noise, blended between `cols`."""
    me = ob.data
    ca = me.color_attributes["Col"]
    skip = _emissive_faces(ob)
    off = Vector((seed * 1.9, seed * 0.7, seed * 2.9))
    mw = ob.matrix_world
    n = len(cols)
    for p in me.polygons:
        if p.index in skip:
            continue
        for li in p.loop_indices:
            co = mw @ me.vertices[me.loops[li].vertex_index].co
            w = noise.noise(Vector((co.x * 0.35, co.y * 0.35, co.z * 0.2)) + off) * warp
            t = (co.z * freq + w) % n
            i0 = int(t) % n
            i1 = (i0 + 1) % n
            f = t - int(t)
            f = f * f * (3 - 2 * f)
            band = lerp3(cols[i0], cols[i1], f)
            c = ca.data[li].color
            lum = (c[0] + c[1] + c[2]) / 3.0
            ref = (cols[0][0] + cols[0][1] + cols[0][2]) / 3.0 + 1e-6
            k = lum / ref
            ca.data[li].color = (*lerp3((c[0], c[1], c[2]), mul3(band, k), amount), 1.0)


def bake_ao(ob, rays=20, dist=2.2, strength=0.85, seed=1):
    """Ambient occlusion baked into the corner colours (multiply). Uses a BVH of
    the object itself; works in world space after transforms are applied."""
    me = ob.data
    ca = me.color_attributes["Col"]
    bm = bmesh.new()
    bm.from_mesh(me)
    bm.transform(ob.matrix_world)
    bvh = BVHTree.FromBMesh(bm)
    bm.free()
    rnd = random.Random(seed)
    mw = ob.matrix_world
    nm = mw.to_3x3()
    cache = {}
    skip = _emissive_faces(ob)
    for p in me.polygons:
        if p.index in skip:
            continue
        pn = (nm @ p.normal).normalized()
        for li in p.loop_indices:
            vi = me.loops[li].vertex_index
            key = (vi, round(pn.x, 2), round(pn.y, 2), round(pn.z, 2))
            ao = cache.get(key)
            if ao is None:
                co = mw @ me.vertices[vi].co + pn * 0.03
                # tangent frame
                t = pn.cross(Vector((0, 0, 1)) if abs(pn.z) < 0.9 else Vector((1, 0, 0))).normalized()
                b = pn.cross(t)
                hit = 0.0
                for _ in range(rays):
                    r1, r2 = rnd.random(), rnd.random()
                    sr = math.sqrt(r1)
                    d = (t * (sr * math.cos(math.tau * r2)) + b * (sr * math.sin(math.tau * r2)) + pn * math.sqrt(1 - r1))
                    res = bvh.ray_cast(co, d, dist)
                    if res[0] is not None:
                        hit += 1.0 - res[3] / dist * 0.6
                ao = 1.0 - strength * (hit / rays)
                cache[key] = ao
            c = ca.data[li].color
            ca.data[li].color = (c[0] * ao, c[1] * ao, c[2] * ao, 1.0)


def vertex_material(name="wander", rough=0.92):
    """The single material every painted part shares (vertex colours do the work)."""
    m = bpy.data.materials.new(name)
    m.use_nodes = True
    b = m.node_tree.nodes["Principled BSDF"]
    b.inputs["Base Color"].default_value = (1, 1, 1, 1)
    b.inputs["Roughness"].default_value = rough
    m["wb_emissive"] = False
    return m


def collapse_materials(ob, shared):
    """Replace every non-emissive material slot with the shared vertex-colour
    material; emissive ones stay (their names are how the engine finds them)."""
    me = ob.data
    keep = []
    remap = {}
    for i, m in enumerate(me.materials):
        if m is not None and m.get("wb_emissive"):
            remap[i] = len(keep) + 1
            keep.append(m)
        else:
            remap[i] = 0
    idx = [p.material_index for p in me.polygons]
    me.materials.clear()
    me.materials.append(shared)
    for m in keep:
        me.materials.append(m)
    for p, old in zip(me.polygons, idx):
        p.material_index = remap.get(old, 0)


def paint_finish(ob, shared=None):
    """Make the painted object export cleanly."""
    collapse_materials(ob, shared or vertex_material())


# ----------------------------------------------------------------- export ----

def export_glb(path, objs, apply_mods=True):
    bpy.ops.object.select_all(action="DESELECT")
    for o in objs:
        o.select_set(True)
    bpy.context.view_layer.objects.active = objs[0]
    kw = dict(filepath=path, export_format="GLB", use_selection=True,
              export_apply=apply_mods, export_yup=True)
    try:
        bpy.ops.export_scene.gltf(**kw, export_vertex_color="ACTIVE")
    except TypeError:
        bpy.ops.export_scene.gltf(**kw)
    faces = sum(len(o.data.polygons) for o in objs)
    print(f"  {os.path.basename(path)}: {len(objs)} mesh(es), {faces} faces, {os.path.getsize(path)} bytes")


# --------------------------------------------------------- contact sheet ----

def contact_sheet(files, out_png, cell=14.0, cols=5, res=(1800, 900), sky=(0.55, 0.68, 0.85),
                  height=6.0, samples=24):
    """Import glb files into a grid and render one image (Cycles, low samples).
    files: list of (path, label). Used for review before an asset goes into the game."""
    import mathutils
    reset()
    for i, (path, label) in enumerate(files):
        before = set(bpy.data.objects)
        bpy.ops.import_scene.gltf(filepath=path)
        new = [o for o in bpy.data.objects if o not in before]
        roots = [o for o in new if o.parent is None]
        for r in roots:
            r.location = ((i % cols) * cell, -(i // cols) * cell, 0)
    scene = bpy.context.scene
    scene.render.engine = "CYCLES"
    scene.cycles.samples = samples
    scene.cycles.use_denoising = True
    scene.render.resolution_x, scene.render.resolution_y = res
    scene.world = bpy.data.worlds.new("w")
    scene.world.use_nodes = True
    bg = scene.world.node_tree.nodes["Background"]
    bg.inputs[0].default_value = (*sky, 1)
    bg.inputs[1].default_value = 1.0
    bpy.ops.object.light_add(type="SUN", location=(10, -10, 20))
    sun = bpy.context.active_object
    sun.data.energy = 4.0
    sun.rotation_euler = (math.radians(48), math.radians(8), math.radians(35))
    rows = (len(files) + cols - 1) // cols
    w = cols * cell
    bpy.ops.mesh.primitive_plane_add(size=max(w, rows * cell) * 2, location=(w / 2 - cell / 2, -(rows - 1) * cell / 2, -0.02))
    g = bpy.context.active_object
    gm = bpy.data.materials.new("g")
    gm.use_nodes = True
    gm.node_tree.nodes["Principled BSDF"].inputs["Base Color"].default_value = (0.2, 0.3, 0.12, 1)
    g.data.materials.append(gm)
    cx = w / 2 - cell / 2
    cy = -(rows - 1) * cell / 2
    pitch = math.radians(62)
    span_y = rows * cell * math.sin(pitch) + height * 2.4 * math.cos(pitch)
    scale_w = (cols * cell) * 1.04
    bpy.ops.object.camera_add(location=(cx, cy - 80 * math.sin(pitch), height * 0.5 + 80 * math.cos(pitch)))
    cam = bpy.context.active_object
    cam.data.type = "ORTHO"
    cam.data.ortho_scale = scale_w
    cam.rotation_euler = (pitch, 0, 0)
    scene.camera = cam
    res = (res[0], int(res[0] * max(0.35, span_y / scale_w + 0.04)))
    scene.render.resolution_x, scene.render.resolution_y = res
    os.makedirs(os.path.dirname(out_png), exist_ok=True)
    scene.render.filepath = out_png
    bpy.ops.render.render(write_still=True)
    print("contact sheet:", out_png)
