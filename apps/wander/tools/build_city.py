#!/usr/bin/env python3
"""Generate Wander's New York world with Blender (headless).

Usage:
  /Applications/Blender.app/Contents/MacOS/Blender --background \
      --python tools/build_city.py

Writes public/assets/city/*.glb + city_layout.json (+ preview renders in
tools/city_build/tex/).

Coordinate convention: everything is authored in THREE.JS GAME coordinates
(x east, z south(+)/north(-), y up) and converted to Blender coords
(x, -z, y) when a mesh is materialised — the glTF exporter (export_yup)
turns Blender (x, -z, y) back into three.js (x, y, z), so the browser sees
exactly the numbers authored here.

The city is authored as "grid space": Manhattan with its own street grid
(uptown at -z, downtown at +z). The runtime rotates the whole city group by
-29 degrees about Y so avenues point NNE like the real island, and centers
the bounding box on the world origin. city_layout.json stores grid-space
data; city.js owns every transform.

Deterministic: fixed seed, no UI. Facade textures (albedo + lit-window
emissive) are generated with numpy and embedded into the GLBs.
"""

import bisect
import json
import math
import os
import random
import sys

import numpy as np
import bpy
import bmesh
from mathutils import Vector

random.seed(20261114)
np.random.seed(20261114)

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.normpath(os.path.join(HERE, "..", "public", "assets", "city"))
TEXDIR = os.path.normpath(os.path.join(HERE, "city_build", "tex"))
os.makedirs(OUT, exist_ok=True)
os.makedirs(TEXDIR, exist_ok=True)

# ----------------------------------------------------------------------------
# world layout constants (grid space, meters == units, asphalt level y=2)

GROUND_Y = 2.0          # asphalt
SIDEWALK_Y = 2.35       # block slabs
GREEN_Y = 2.15          # park lawns
CITY_ROT = math.radians(-29.0)   # avenues point NNE, like the real island

# island outline (grid space): clockwise from the south tip
ISLAND_POLY = [
    (0, 770), (-95, 715), (-150, 650), (-172, 560), (-205, 480), (-238, 435),
    (-272, 375), (-330, 290), (-372, 120), (-380, -60), (-382, -300),
    (-372, -650), (-345, -950), (-338, -1200), (-345, -1500), (-352, -1750),
    (-330, -1950), (-300, -2130), (-255, -2245), (-170, -2315), (-70, -2342),
    (30, -2345), (110, -2300), (165, -2210), (205, -2080), (240, -1900),
    (262, -1720), (285, -1500), (308, -1300), (330, -1100), (352, -900),
    (372, -700), (395, -500), (415, -300), (425, -120), (420, 30), (405, 170),
    (372, 300), (330, 405), (270, 500), (205, 570), (130, 640), (60, 715),
]

AVENUES = [-340, -255, -170, -85, 0, 85, 170, 255, 340]   # x centers
AV_W = 15.0                                                # road width
STREET_W = 11.0
STREETS_DOWNTOWN = [448, 468, 486, 503, 522, 540, 558, 576, 595, 614, 633, 652]
STREET_SPACING = 26.0     # midtown grid: z = 430 - 26k  (59th = k 59 -> -1104)
NORTH_SPACING = 34.0      # north of the park
PARK = {"x0": -160, "x1": 120, "z0": -1728, "z1": -1104}
WASH_SQ = {"x0": -25, "x1": 45, "z0": 320, "z1": 390}
BATTERY = {"x0": -180, "x1": 65, "z0": 645, "z1": 770}
GATE = {"x": 0, "z": 700}

# broadway: gentle west drift relative to the grid (stays west of the park)
BROADWAY = [
    (-5, 745), (-18, 600), (-30, 430), (-38, 300), (-46, 140), (-52, 0),
    (-58, -140), (-66, -300), (-72, -450), (-80, -600), (-92, -780),
    (-108, -960), (-130, -1140), (-175, -1330), (-205, -1520), (-240, -1720),
    (-265, -1920), (-290, -2120), (-315, -2280),
]
BROADWAY_HALF = 6.5

BRIDGE_BROOKLYN = {"p0": (170, 620), "p1": (720, 1060), "deck": 24, "tower_h": 60,
                   "wide": 20, "masonry": True}
BRIDGE_MANHATTAN = {"p0": (215, 700), "p1": (760, 1145), "deck": 22, "tower_h": 46,
                    "wide": 16, "masonry": False}

STATUE_ISLET = (-560, 1060)
GOV_ISLAND = (620, 1420)
ELLIS = (-520, 920)

ESB = {"x": 28, "z": -452}
CHRYSLER = {"x": 178, "z": -650}
WTC = {"x": -60, "z": 555}
FLATIRON = {"x": -8, "z": -160}
WOOLWORTH = {"x": -15, "z": 585}
STPAT = {"x": 32, "z": -870}
PENCIL_432 = {"x": 190, "z": -1050}
ARCH = {"x": 10, "z": 318}
TIMES_SQ = {"x0": -75, "x1": -25, "z0": -680, "z1": -570}
GRAND_CENTRAL = {"x": 140, "z": -648}

# plots kept free of generic fill (landmarks build their own)
RESERVES = [
    (ESB["x"] - 22, ESB["x"] + 22, ESB["z"] - 22, ESB["z"] + 22),
    (CHRYSLER["x"] - 20, CHRYSLER["x"] + 20, CHRYSLER["z"] - 20, CHRYSLER["z"] + 20),
    (WTC["x"] - 62, WTC["x"] + 26, WTC["z"] - 26, WTC["z"] + 40),   # incl. pools
    (FLATIRON["x"] - 24, FLATIRON["x"] + 18, FLATIRON["z"] - 38, FLATIRON["z"] + 32),
    (WOOLWORTH["x"] - 16, WOOLWORTH["x"] + 16, WOOLWORTH["z"] - 16, WOOLWORTH["z"] + 16),
    (STPAT["x"] - 14, STPAT["x"] + 14, STPAT["z"] - 28, STPAT["z"] + 26),
    (PENCIL_432["x"] - 12, PENCIL_432["x"] + 12, PENCIL_432["z"] - 12, PENCIL_432["z"] + 12),
    (ARCH["x"] - 12, ARCH["x"] + 12, ARCH["z"] - 8, ARCH["z"] + 8),
    (GRAND_CENTRAL["x"] - 33, GRAND_CENTRAL["x"] + 33, GRAND_CENTRAL["z"] - 20, GRAND_CENTRAL["z"] + 20),
    (TIMES_SQ["x0"] - 4, TIMES_SQ["x1"] + 4, TIMES_SQ["z0"] - 4, TIMES_SQ["z1"] + 4),
]


def rnd(a, b):
    return random.uniform(a, b)


def pick(seq):
    return seq[random.randrange(len(seq))]


# ----------------------------------------------------------------------------
# mesh builder: accumulates faces in GAME coords, one bpy mesh per material

class MB:
    def __init__(self):
        self.verts = []       # (x, y, z) blender coords
        self.faces = []
        self.face_uv = []     # [(u, v), ...] per face or None
        self.face_mat = []
        self.face_col = []    # (r, g, b) tint per face or None

    def _emit(self, pts_game, uvs, mat, col):
        base = len(self.verts)
        for (x, y, z) in pts_game:
            self.verts.append((x, -z, y))   # game -> blender
        self.faces.append(tuple(range(base, base + len(pts_game))))
        self.face_uv.append(uvs)
        self.face_mat.append(mat)
        self.face_col.append(col)

    def quad(self, p, mat, uvs=None, col=None):
        self._emit(p, uvs, mat, col)

    def box(self, cx, cy, cz, w, h, d, mat, ry=0.0, col=None, tile=None,
            bottom=False, top_mat=None):
        """Axis box centered (cx,cz), base cy, height h. Side UVs from dims.
        top_mat: separate material for the roof face (plain, no window tex)."""
        cs, sn = math.cos(ry), math.sin(ry)

        def rot(dx, dz):
            return cx + dx * cs + dz * sn, cz - dx * sn + dz * cs

        x0, x1, z0, z1 = -w / 2, w / 2, -d / 2, d / 2
        y0, y1 = cy, cy + h
        corners = []
        for (dx, dz) in ((x0, z0), (x1, z0), (x1, z1), (x0, z1)):
            rx, rz = rot(dx, dz)
            corners.append((rx, rz))
        tx = tile[0] if tile else 12.8
        tz = tile[1] if tile else 12.8

        def side_uvs(pw, ph):
            if mat not in FACADES:
                return None
            return [(0, 0), (pw / tx, 0), (pw / tx, ph / tz), (0, ph / tz)]

        self.quad([(corners[0][0], y0, corners[0][1]), (corners[3][0], y0, corners[3][1]),
                   (corners[3][0], y1, corners[3][1]), (corners[0][0], y1, corners[0][1])],
                  mat, side_uvs(d, h), col)
        self.quad([(corners[1][0], y0, corners[1][1]), (corners[2][0], y0, corners[2][1]),
                   (corners[2][0], y1, corners[2][1]), (corners[1][0], y1, corners[1][1])],
                  mat, side_uvs(d, h), col)
        self.quad([(corners[0][0], y0, corners[0][1]), (corners[1][0], y0, corners[1][1]),
                   (corners[1][0], y1, corners[1][1]), (corners[0][0], y1, corners[0][1])],
                  mat, side_uvs(w, h), col)
        self.quad([(corners[3][0], y0, corners[3][1]), (corners[2][0], y0, corners[2][1]),
                   (corners[2][0], y1, corners[2][1]), (corners[3][0], y1, corners[3][1])],
                  mat, side_uvs(w, h), col)
        self.quad([(corners[0][0], y1, corners[0][1]), (corners[1][0], y1, corners[1][1]),
                   (corners[2][0], y1, corners[2][1]), (corners[3][0], y1, corners[3][1])],
                  top_mat or mat, side_uvs(w, d) if (top_mat or mat) in FACADES else None, col)
        if bottom:
            self.quad([(corners[0][0], y0, corners[0][1]), (corners[3][0], y0, corners[3][1]),
                       (corners[2][0], y0, corners[2][1]), (corners[1][0], y0, corners[1][1])],
                      mat, None, col)

    def taper_box(self, cx, cy, cz, w0, d0, w1, d1, h, mat, col=None, uv_tile=12.8):
        """Frustrum: bottom w0 x d0 -> top w1 x d1."""
        y0, y1 = cy, cy + h
        b = [(-w0 / 2, -d0 / 2), (w0 / 2, -d0 / 2), (w0 / 2, d0 / 2), (-w0 / 2, d0 / 2)]
        t = [(-w1 / 2, -d1 / 2), (w1 / 2, -d1 / 2), (w1 / 2, d1 / 2), (-w1 / 2, d1 / 2)]
        for i in range(4):
            j = (i + 1) % 4
            bl = (cx + b[i][0], y0, cz + b[i][1])
            br = (cx + b[j][0], y0, cz + b[j][1])
            tr = (cx + t[j][0], y1, cz + t[j][1])
            tl = (cx + t[i][0], y1, cz + t[i][1])
            pw = math.hypot(b[j][0] - b[i][0], b[j][1] - b[i][1])
            self.quad([bl, br, tr, tl], mat,
                      [(0, 0), (pw / uv_tile, 0), (pw / uv_tile, h / uv_tile), (0, h / uv_tile)],
                      col)
        self.quad([(cx + t[0][0], y1, cz + t[0][1]), (cx + t[1][0], y1, cz + t[1][1]),
                   (cx + t[2][0], y1, cz + t[2][1]), (cx + t[3][0], y1, cz + t[3][1])],
                  mat, [(0, 0), (1, 0), (1, 1), (0, 1)], col)

    def prism(self, pts_xz, y0, y1, mat, col=None, caps=(True, False)):
        """Extruded polygon: walls + optional top/bottom ngon."""
        n = len(pts_xz)
        facade = mat in FACADES
        for i in range(n):
            j = (i + 1) % n
            x0, z0 = pts_xz[i]
            x1, z1 = pts_xz[j]
            pw = math.hypot(x1 - x0, z1 - z0)
            uvs = ([(0, 0), (pw / 12.8, 0), (pw / 12.8, (y1 - y0) / 12.8),
                    (0, (y1 - y0) / 12.8)] if facade else None)
            self.quad([(x0, y0, z0), (x1, y0, z1), (x1, y1, z1), (x0, y1, z0)],
                      mat, uvs, col)
        if caps[0]:
            self._emit([(x, y1, z) for (x, z) in pts_xz], None, mat, col)
        if caps[1]:
            self._emit([(x, y0, z) for (x, z) in reversed(pts_xz)], None, mat, col)

    def cyl(self, cx, cy, cz, r0, r1, h, seg, mat, ry=0.0, col=None,
            cap_top=True, cap_bot=False):
        """Vertical-axis cylinder (optionally tapered, optionally spun)."""
        cs, sn = math.cos(ry), math.sin(ry)
        ring0, ring1 = [], []
        for i in range(seg):
            a = math.tau * i / seg
            dx, dz = math.cos(a), math.sin(a)
            ring0.append((cx + dx * cs * r0 + dz * sn * r0, cy,
                          cz - dx * sn * r0 + dz * cs * r0))
            ring1.append((cx + dx * cs * r1 + dz * sn * r1, cy + h,
                          cz - dx * sn * r1 + dz * cs * r1))
        pw = math.tau * max(r0, r1) / seg
        facade = mat in FACADES
        ph = math.tau * max(r0, r1) / 12.8
        for i in range(seg):
            j = (i + 1) % seg
            uvs = ([(0, 0), (ph, 0), (ph, h / 12.8), (0, h / 12.8)] if facade else None)
            self.quad([ring0[i], ring0[j], ring1[j], ring1[i]], mat, uvs, col)
        if cap_top and r1 > 1e-4:
            self._emit(ring1, None, mat, col)
        if cap_bot and r0 > 1e-4:
            self._emit(list(reversed(ring0)), None, mat, col)

    def segment(self, p0, p1, r, seg, mat, col=None):
        """Cylinder from p0 to p1 (game coords, arbitrary axis)."""
        d = Vector((p1[0] - p0[0], p1[1] - p0[1], p1[2] - p0[2]))
        if d.length < 1e-5:
            return
        d.normalize()
        up = Vector((0, 1, 0))
        if abs(d.dot(up)) > 0.95:
            up = Vector((1, 0, 0))
        ax = d.cross(up).normalized()
        ay = ax.cross(d).normalized()
        ring0, ring1 = [], []
        for i in range(seg):
            a = math.tau * i / seg
            ox = ax.x * math.cos(a) * r + ay.x * math.sin(a) * r
            oy = ax.y * math.cos(a) * r + ay.y * math.sin(a) * r
            oz = ax.z * math.cos(a) * r + ay.z * math.sin(a) * r
            ring0.append((p0[0] + ox, p0[1] + oy, p0[2] + oz))
            ring1.append((p1[0] + ox, p1[1] + oy, p1[2] + oz))
        for i in range(seg):
            j = (i + 1) % seg
            self.quad([ring0[i], ring0[j], ring1[j], ring1[i]], mat, None, col)

    def sphere(self, cx, cy, cz, r, mat, col=None, seg=8, rings=5, sy=1.0, sz=1.0):
        pts_rows = []
        for ir in range(rings + 1):
            phi = math.pi * ir / rings
            y = cy + r * math.cos(phi) * sy
            rr = r * math.sin(phi) * sz
            row = []
            for i in range(seg):
                a = math.tau * i / seg
                row.append((cx + rr * math.cos(a), y, cz + rr * math.sin(a)))
            pts_rows.append(row)
        for ir in range(rings):
            for i in range(seg):
                j = (i + 1) % seg
                self.quad([pts_rows[ir][i], pts_rows[ir][j],
                           pts_rows[ir + 1][j], pts_rows[ir + 1][i]], mat, None, col)

    def to_bpy(self, chunk):
        by_mat = {}
        for fi, matname in enumerate(self.face_mat):
            by_mat.setdefault(matname, []).append(fi)
        objs = []
        for matname, faces in sorted(by_mat.items()):
            me = bpy.data.meshes.new(f"{chunk}_{matname}")
            # dedup vertices by position (quads share corners heavily)
            vcache = {}
            verts = []
            remap = {}
            new_faces = []
            for fi in faces:
                nf = []
                for vi in self.faces[fi]:
                    key = self.verts[vi]
                    idx = vcache.get(key)
                    if idx is None:
                        idx = len(verts)
                        vcache[key] = idx
                        verts.append(key)
                    remap[vi] = idx
                    nf.append(idx)
                new_faces.append(nf)
            has_uv = any(self.face_uv[fi] is not None for fi in faces)
            me.from_pydata(verts, [], new_faces)
            me.validate()
            bm = bmesh.new()
            bm.from_mesh(me)
            bmesh.ops.recalc_face_normals(bm, faces=bm.faces)
            bm.to_mesh(me)
            bm.free()
            if has_uv:
                uv_layer = me.uv_layers.new(name="UVMap")
                for poly in me.polygons:
                    uvs = self.face_uv[faces[poly.index]]
                    if uvs is None:
                        continue
                    for li, ci in zip(poly.loop_indices, range(len(poly.vertices))):
                        u, v = uvs[ci]
                        uv_layer.data[li].uv = (u, v)
            cols = {}
            for fi in faces:
                c = self.face_col[fi]
                if c is not None:
                    for vi in self.faces[fi]:
                        cols[remap[vi]] = c
            if cols:
                ca = me.color_attributes.new(name="Col", type="FLOAT_COLOR", domain="POINT")
                for vi in range(len(verts)):
                    c = cols.get(vi, (1, 1, 1))
                    ca.data[vi].color = (c[0], c[1], c[2], 1.0)
            me.materials.append(MATS[matname])
            if os.environ.get("CITY_DEBUG"):
                print("DBG", chunk, matname, "verts", len(verts), "raw", len(verts) and len(self.verts),
                      "faces", len(faces), "rawfaces", len(self.faces))
            ob = bpy.data.objects.new(f"{chunk}_{matname}", me)
            bpy.context.scene.collection.objects.link(ob)
            objs.append(ob)
        return objs


# ----------------------------------------------------------------------------
# procedural facade textures (one tile = TILE meters of facade)

TILE = 12.8
PXPM = 512 / TILE
FACADES = {}


def _new_img(name, arr, fmt="PNG"):
    img = bpy.data.images.new(name, arr.shape[1], arr.shape[0], alpha=False)
    img.pixels.foreach_set(arr.reshape(-1))
    path = os.path.join(TEXDIR, f"{name}.{fmt.lower()}")
    img.filepath_raw = path
    img.file_format = fmt
    img.save()
    return img


def _rect(img, x0, y0, x1, y1, color):
    h, w = img.shape[:2]
    px0 = max(0, int(x0 * PXPM)); px1 = min(w, int(x1 * PXPM))
    py0 = max(0, int(y0 * PXPM)); py1 = min(h, int(y1 * PXPM))
    if px1 > px0 and py1 > py0:
        img[py0:py1, px0:px1] = color


def _hex(h):
    return np.array([((h >> 16) & 255) / 255.0, ((h >> 8) & 255) / 255.0,
                     (h & 255) / 255.0, 1.0], dtype=np.float32)


def make_facade(name, style, seed):
    rng = random.Random(seed)
    S = 512
    base = np.zeros((S, S, 4), np.float32)
    emis = np.zeros((S, S, 4), np.float32)
    wall = {"deco": _hex(0xcac2ae), "brick_a": _hex(0x96503a), "brick_b": _hex(0x7d5643),
            "brown": _hex(0x6a5140), "prewar": _hex(0xd6d0bd), "glass": _hex(0x1d2126),
            "panel": _hex(0xa9a69b), "castiron": _hex(0xc4bca9)}[style]
    for col in range(S):
        j = 1.0 + (rng.random() - 0.5) * 0.06
        base[:, col] = wall * np.array([j, j, j, 1.0], np.float32)
    floors = {"deco": 4, "brick_a": 4, "brick_b": 4, "brown": 3, "prewar": 4,
              "glass": 6, "panel": 4, "castiron": 3}[style]
    bays = {"deco": 4, "brick_a": 2, "brick_b": 2, "brown": 3, "prewar": 4,
            "glass": 8, "panel": 4, "castiron": 4}[style]
    fh = TILE / floors
    bw = TILE / bays
    lit_p = {"deco": 0.38, "brick_a": 0.3, "brick_b": 0.3, "brown": 0.3, "prewar": 0.35,
             "glass": 0.2, "panel": 0.32, "castiron": 0.3}[style]
    if style == "glass":
        for f in range(floors):
            y0 = f * fh
            sp = fh * 0.32
            _rect(base, 0, y0, TILE, y0 + sp, _hex(0x15181d))
            for b in range(bays):
                x0 = b * bw
                sh = 0.8 + rng.random() * 0.42
                gcol = np.array([0.25 * sh, 0.33 * sh, 0.39 * sh, 1.0], np.float32)
                _rect(base, x0 + 0.06, y0 + sp, x0 + bw - 0.06, y0 + fh - 0.05, gcol)
                if rng.random() < lit_p:
                    c = _hex(0xfff4d8)
                    _rect(emis, x0 + 0.12, y0 + sp + 0.06, x0 + bw - 0.12, y0 + fh - 0.1, c)
        for b in range(bays + 1):
            _rect(base, b * bw - 0.05, 0, b * bw + 0.05, TILE, _hex(0x3a4046))
    else:
        win_w = {"deco": 1.5, "brick_a": 1.15, "brick_b": 1.15, "brown": 1.3,
                 "prewar": 1.7, "panel": 1.5, "castiron": 1.5}[style]
        win_h = {"deco": 1.8, "brick_a": 1.9, "brick_b": 1.9, "brown": 2.6,
                 "prewar": 2.0, "panel": 1.5, "castiron": 3.2}[style]
        for f in range(floors):
            y0 = f * fh
            for b in range(bays):
                x0 = b * bw
                cx = x0 + bw / 2
                wx0, wx1 = cx - win_w / 2, cx + win_w / 2
                wy0 = y0 + (fh - win_h) / 2
                wy1 = wy0 + win_h
                if style == "castiron":
                    _rect(base, wx0, wy0 + 0.4, wx1, wy1, _hex(0x27313a))
                    _rect(base, wx0 + 0.12, wy0, wx1 - 0.12, wy0 + 0.5, _hex(0x27313a))
                    _rect(base, wx0 - 0.09, wy0 - 0.09, wx1 + 0.09, wy1 + 0.09, _hex(0x8f8878))
                else:
                    _rect(base, wx0, wy0, wx1, wy1, _hex(0x232c34))
                    fr = _hex(0xe4e0d4) if style in ("prewar", "panel", "deco") else _hex(0xd9d2c2)
                    _rect(base, wx0 - 0.07, wy0 - 0.07, wx0, wy1 + 0.07, fr)
                    _rect(base, wx1, wy0 - 0.07, wx1 + 0.07, wy1 + 0.07, fr)
                    _rect(base, wx0 - 0.07, wy1, wx1 + 0.07, wy1 + 0.14, fr)
                    _rect(base, wx0 - 0.12, wy0 - 0.16, wx1 + 0.12, wy0 - 0.06, fr)
                if rng.random() < lit_p:
                    warm = rng.random() < 0.72
                    c = _hex(0xffd9a2 if warm else 0xcfe0ff)
                    _rect(emis, wx0 + 0.06, wy0 + 0.06, wx1 - 0.06, wy1 - 0.06, c)
                if rng.random() < 0.5:
                    g = np.array([0.10 + rng.random() * 0.05, 0.13 + rng.random() * 0.05,
                                  0.16 + rng.random() * 0.05, 1.0], np.float32)
                    _rect(base, wx0 + 0.05, wy0 + 0.05, wx1 - 0.05, wy1 - 0.05, g)
        if style in ("brick_a", "brick_b", "brown"):
            course_h = 0.19
            for row, y in enumerate(np.arange(0, TILE, course_h)):
                shade = 1.0 + ((row * 7919 + 3) % 7 - 3) * 0.014
                _rect(base, 0, y, TILE, y + 0.05,
                      wall * np.array([shade, shade, shade, 1.0], np.float32))
            if style == "brown":
                for f in range(floors):
                    _rect(base, 0, (f + 1) * fh - 0.12, TILE, (f + 1) * fh, _hex(0x4a3c31))
        if style == "deco":
            for f in range(floors):
                _rect(base, 0, (f + 1) * fh - 0.42, TILE, (f + 1) * fh - 0.22, _hex(0xb5ab92))
                _rect(base, 0, (f + 1) * fh - 0.22, TILE, (f + 1) * fh, _hex(0xd3cbb6))
            for b in range(bays + 1):
                _rect(base, b * bw - 0.12, 0, b * bw + 0.12, TILE, _hex(0xb8ae97))
        if style == "prewar":
            for f in range(floors):
                _rect(base, 0, (f + 1) * fh - 0.30, TILE, (f + 1) * fh, _hex(0xc2bba6))
            for b in range(bays + 1):
                _rect(base, b * bw - 0.10, 0, b * bw + 0.10, TILE, _hex(0xc8c1ab))
        if style == "panel":
            for b in range(bays + 1):
                _rect(base, b * bw - 0.06, 0, b * bw + 0.06, TILE, _hex(0x8e8b80))
            for f in range(floors):
                _rect(base, 0, (f + 1) * fh - 0.20, TILE, (f + 1) * fh, _hex(0x8e8b80))
    FACADES[name] = {"tile": (TILE, TILE)}
    img_a = _new_img(f"city_{name}_a", base, "JPEG")
    img_e = _new_img(f"city_{name}_e", emis, "PNG")
    return img_a, img_e


# ----------------------------------------------------------------------------
# materials

MATS = {}


def mat_flat(name, hexcolor, rough=0.95, emit=None, strength=1.0, metal=0.0):
    m = bpy.data.materials.new(name)
    m.use_nodes = True
    b = m.node_tree.nodes["Principled BSDF"]
    b.inputs["Base Color"].default_value = tuple(_hex(hexcolor))
    b.inputs["Roughness"].default_value = rough
    b.inputs["Metallic"].default_value = metal
    if emit is not None:
        b.inputs["Emission Color"].default_value = tuple(_hex(emit))
        b.inputs["Emission Strength"].default_value = strength
    MATS[name] = m
    return m


def mat_tex(name, img_a, img_e=None, rough=0.9, strength=1.0, metal=0.0):
    m = bpy.data.materials.new(name)
    m.use_nodes = True
    nt = m.node_tree
    b = nt.nodes["Principled BSDF"]
    tex = nt.nodes.new("ShaderNodeTexImage")
    tex.image = img_a
    nt.links.new(tex.outputs["Color"], b.inputs["Base Color"])
    b.inputs["Roughness"].default_value = rough
    b.inputs["Metallic"].default_value = metal
    if img_e is not None:
        tex2 = nt.nodes.new("ShaderNodeTexImage")
        tex2.image = img_e
        nt.links.new(tex2.outputs["Color"], b.inputs["Emission Color"])
        b.inputs["Emission Strength"].default_value = strength
    MATS[name] = m
    return m


def build_materials():
    for (name, style, seed) in [
        ("facade_deco_a", "deco", 11), ("facade_deco_b", "deco", 12),
        ("facade_brick_a", "brick_a", 21), ("facade_brick_b", "brick_b", 22),
        ("facade_brown", "brown", 23), ("facade_prewar", "prewar", 31),
        ("facade_glass_a", "glass", 41), ("facade_glass_b", "glass", 42),
        ("facade_panel", "panel", 51), ("facade_castiron", "castiron", 61),
    ]:
        img_a, img_e = make_facade(name, style, seed)
        glassy = "glass" in name
        mat_tex(name, img_a, img_e, rough=0.38 if glassy else 0.85,
                metal=0.3 if glassy else 0.0)
    mat_flat("asphalt", 0x2e3136, rough=1.0)
    mat_flat("asphalt_st", 0x2e3136, rough=1.0)     # streets (separate for depth bias)
    mat_flat("asphalt_bw", 0x2e3136, rough=1.0)     # broadway (separate for depth bias)
    mat_flat("concrete", 0x8f9297, rough=1.0)
    mat_flat("sidewalk", 0x9aa0a5, rough=1.0)
    mat_flat("paint_yellow", 0xd8b74a, rough=0.8)
    mat_flat("paint_white", 0xd9d9d0, rough=0.8)
    mat_flat("grass", 0x4d7a42, rough=1.0)
    mat_flat("path", 0xb0a68e, rough=1.0)
    mat_flat("water_pond", 0x2e4a55, rough=0.25)
    mat_flat("roof_dark", 0x37393d, rough=1.0)
    mat_flat("seawall", 0x4c4f55, rough=1.0)
    mat_flat("pier_wood", 0x6b5844, rough=1.0)
    mat_flat("stone_light", 0x9b968a, rough=0.95)
    mat_flat("stone_mid", 0x7d7669, rough=0.95)
    mat_flat("copper", 0x5f9c85, rough=0.6, metal=0.35)
    mat_flat("gold", 0xc9a53f, rough=0.4, metal=0.6)
    mat_flat("dark_metal", 0x2a2e33, rough=0.7)
    mat_flat("steel_blue", 0x5a6a78, rough=0.6)
    mat_flat("cable", 0x3c4249, rough=0.7)
    mat_flat("trunk", 0x5c4630, rough=1.0)
    mat_flat("leaf", 0x4e7c3c, rough=1.0)
    mat_flat("leaf_light", 0x628f42, rough=1.0)
    mat_flat("patina", 0x63a184, rough=0.75)
    mat_flat("yellow_taxi", 0xf2b134, rough=0.6)
    mat_flat("bus_white", 0xdfe3e6, rough=0.7)
    mat_flat("truck_white", 0xd6d8d9, rough=0.8)
    mat_flat("ferry_orange", 0xd96a26, rough=0.7)
    mat_flat("heli_body", 0x30363d, rough=0.6)
    mat_flat("heli_rotor", 0x20242a, rough=0.7)
    mat_flat("glass_dark", 0x1d2730, rough=0.3)
    mat_flat("lamp_head", 0xffe9b0, emit=0xffe9b0, strength=4.0)
    mat_flat("tl_red", 0xff4038, emit=0xff4038, strength=2.2)
    mat_flat("tl_green", 0x3fe07a, emit=0x3fe07a, strength=2.2)
    mat_flat("tl_yellow", 0xffc23f, emit=0xffc23f, strength=2.2)
    mat_flat("sign_glow", 0xfff2cf, emit=0xfff2cf, strength=3.0)
    mat_flat("fire_hydrant", 0xb5402e, rough=0.8)
    mat_flat("backdrop_road", 0x3a3d42, rough=1.0)
    mat_flat("backdrop_grass", 0x53704a, rough=1.0)


# ----------------------------------------------------------------------------
# block planning helpers

BUILDINGS = []     # [x0, x1, z0, z1, top] (grid space)


def track(x0, x1, z0, z1, top):
    BUILDINGS.append([round(x0, 2), round(x1, 2), round(z0, 2), round(z1, 2), round(top, 2)])


def clip_halfplane(pts, a, b, c):
    """Keep points where a*x + b*z <= c."""
    out = []
    n = len(pts)
    for i in range(n):
        p = pts[i]
        q = pts[(i + 1) % n]
        dp = a * p[0] + b * p[1] - c
        dq = a * q[0] + b * q[1] - c
        if dp <= 0:
            out.append(p)
        if (dp < 0 < dq) or (dq < 0 < dp):
            t = dp / (dp - dq)
            out.append((p[0] + t * (q[0] - p[0]), p[1] + t * (q[1] - p[1])))
    return out


def poly_bbox(poly):
    xs = [p[0] for p in poly]
    zs = [p[1] for p in poly]
    return min(xs), max(xs), min(zs), max(zs)


def point_in_poly(x, z, poly):
    inside = False
    n = len(poly)
    j = n - 1
    for i in range(n):
        xi, zi = poly[i]
        xj, zj = poly[j]
        if (zi > z) != (zj > z) and x < (xj - xi) * (z - zi) / (zj - zi + 1e-12) + xi:
            inside = not inside
        j = i
    return inside


def shrink_poly(poly, m):
    cx = sum(p[0] for p in poly) / len(poly)
    cz = sum(p[1] for p in poly) / len(poly)
    out = []
    for (x, z) in poly:
        dx, dz = x - cx, z - cz
        L = math.hypot(dx, dz) or 1.0
        k = max(0.0, (L - m) / L)
        out.append((cx + dx * k, cz + dz * k))
    return out


def split_by_broadway(poly):
    """Split a block polygon into pieces outside the broadway corridor."""
    _, _, zs0, zs1 = poly_bbox(poly)
    pieces = [poly]
    for i in range(len(BROADWAY) - 1):
        p, q = BROADWAY[i], BROADWAY[i + 1]
        if max(p[1], q[1]) < zs0 - 20 or min(p[1], q[1]) > zs1 + 20:
            continue
        dx, dz = q[0] - p[0], q[1] - p[1]
        L = math.hypot(dx, dz)
        nx, nz = dz / L, -dx / L
        c = nx * p[0] + nz * p[1]
        nxt = []
        for pl in pieces:
            nmin = min(nx * x + nz * z for (x, z) in pl)
            nmax = max(nx * x + nz * z for (x, z) in pl)
            if nmax <= c - BROADWAY_HALF or nmin >= c + BROADWAY_HALF:
                nxt.append(pl)  # entirely on one side
                continue
            # side A: n.p <= c - half ; side B: n.p >= c + half
            a = clip_halfplane(pl, nx, nz, c - BROADWAY_HALF)
            b = clip_halfplane(pl, -nx, -nz, -(c + BROADWAY_HALF))
            for cand in (a, b):
                if len(cand) >= 3:
                    nxt.append(cand)
        pieces = nxt
    return pieces


# ----------------------------------------------------------------------------
# building generators

ROOF = "roof_dark"


def cornice(mb, x0, x1, z0, z1, y, mat, h=0.8):
    mb.box((x0 + x1) / 2, y, (z0 + z1) / 2, (x1 - x0) + 0.5, h, (z1 - z0) + 0.5, mat)


def water_tower(mb, x, y, z, s=1.0):
    mb.cyl(x, y + 1.2, z, 1.5 * s, 1.42 * s, 3.0, 6, "trunk")
    mb.cyl(x, y + 4.2, z, 0.12, 1.5 * s, 1.1, 6, "trunk")
    mb.cyl(x, y + 5.3, z, 0.05, 0.05, 0.5, 4, "trunk")


def roof_clutter(mb, x0, x1, z0, z1, top, kind, rng):
    cx, cz = (x0 + x1) / 2, (z0 + z1) / 2
    if kind == "watertower" and (x1 - x0) > 8:
        water_tower(mb, x0 + 2.5, top, z0 + 2.5, rng.uniform(0.8, 1.1))
        if rng.random() < 0.4:
            water_tower(mb, x1 - 3.0, top, z1 - 2.6, rng.uniform(0.7, 1.0))
    if kind == "ac":
        for i in range(rng.randint(1, 2)):
            mb.box(rnd(x0 + 2, x1 - 2), top, rnd(z0 + 2, z1 - 2),
                   rnd(1.4, 3.0), rnd(0.8, 1.6), rnd(1.4, 3.0), "dark_metal")
    if kind == "antenna":
        mb.cyl(cx, top, cz, 0.12, 0.05, rnd(6, 14), 4, "dark_metal")


KIND_COUNTS = {}


def gen_building(mb, x0, x1, z0, z1, y, spec, rng):
    kind = spec["kind"]
    KIND_COUNTS[kind] = KIND_COUNTS.get(kind, 0) + 1
    h = spec["h"]
    mat = spec.get("mat", "facade_brick_a")
    top = y + h
    tint = spec.get("tint")
    if tint is not None and not isinstance(tint, (tuple, list)):
        tint = (tint, tint, tint)
    if kind == "row" or kind == "slab":
        mb.box((x0 + x1) / 2, y, (z0 + z1) / 2, x1 - x0, h, z1 - z0, mat,
               tile=FACADES[mat]["tile"], top_mat="roof_dark")
        band = 0.7 if kind == "row" else 0.9
        if h < 60:
            cornice(mb, x0, x1, z0, z1, top - band, "stone_mid", band)
        clut = spec.get("clutter", "ac")
        if clut == "watertower" and h > 22 and rng.random() < 0.85:
            roof_clutter(mb, x0, x1, z0, z1, top + 0.15, "watertower", rng)
        elif clut and rng.random() < 0.35:
            roof_clutter(mb, x0, x1, z0, z1, top + 0.15, "ac", rng)
        track(x0, x1, z0, z1, top)
    elif kind == "deco":
        cx, cz = (x0 + x1) / 2, (z0 + z1) / 2
        w, d = x1 - x0, z1 - z0
        pod = min(h * 0.18, 18)
        mb.box(cx, y, cz, w, pod, d, mat, tile=FACADES[mat]["tile"], top_mat="roof_dark")
        mb.box(cx, y + pod, cz, w + 0.7, 0.8, d + 0.7, "stone_mid")
        shaft_h = h * 0.5
        mb.box(cx, y + pod + 0.8, cz, w * 0.62, shaft_h, d * 0.62, mat,
               tile=FACADES[mat]["tile"], top_mat="roof_dark")
        s = y + pod + 0.8 + shaft_h
        for i in range(2):
            k = 0.45 - i * 0.12
            sh = (h - (s - y)) * 0.42
            mb.box(cx, s, cz, w * k, sh, d * k, mat, tile=FACADES[mat]["tile"],
                   top_mat="roof_dark")
            s += sh
        mb.box(cx, s, cz, w * 0.22, max(6, y + h - s), d * 0.22, mat,
               tile=FACADES[mat]["tile"], top_mat="roof_dark")
        top = y + h
        mb.box(cx, top, cz, w * 0.3, 1.2, d * 0.3, "stone_mid")
        if rng.random() < 0.4:
            mb.cyl(cx, top + 1.2, cz, 0.5, 0.1, h * 0.1, 6, "dark_metal")
        track(x0, x1, z0, z1, top)
    elif kind == "glass":
        cx, cz = (x0 + x1) / 2, (z0 + z1) / 2
        w, d = x1 - x0, z1 - z0
        pod = spec.get("pod", min(h * 0.22, 16))
        podmat = "facade_glass_b" if rng.random() < 0.5 else "facade_glass_a"
        mb.box(cx, y, cz, w, pod, d, podmat, tile=FACADES[podmat]["tile"], top_mat="roof_dark")
        mb.box(cx, y + pod, cz, w * 0.72, h - pod, d * 0.72, mat,
               tile=FACADES[mat]["tile"], top_mat="roof_dark")
        top = y + h
        mb.box(cx, top, cz, w * 0.72 + 0.6, 0.7, d * 0.72 + 0.6, "dark_metal")
        if rng.random() < 0.4:
            roof_clutter(mb, cx - w * 0.2, cx + w * 0.2, cz - d * 0.2, cz + d * 0.2,
                         top + 0.7, "ac", rng)
        track(x0, x1, z0, z1, top)
    elif kind == "pencil":
        cx, cz = (x0 + x1) / 2, (z0 + z1) / 2
        w = min(x1 - x0, z1 - z0) * 0.5
        mb.box(cx, y, cz, w * 1.7, h * 0.1, w * 1.7, mat, tile=FACADES[mat]["tile"],
               top_mat="roof_dark")
        mb.box(cx, y + h * 0.1, cz, w, h * 0.9, w, mat, tile=FACADES[mat]["tile"],
               top_mat="roof_dark")
        mb.box(cx, y + h, cz, w * 1.05, 0.8, w * 1.05, "concrete")
        mb.cyl(cx, y + h + 0.8, cz, 0.5, 0.2, 18, 6, "dark_metal")
        track(x0, x1, z0, z1, y + h + 19)


# ----------------------------------------------------------------------------
# districts

def district_of(cx, cz):
    if PARK["x0"] - 8 < cx < PARK["x1"] + 8 and PARK["z0"] - 8 < cz < PARK["z1"] + 8:
        return "park"
    if cz > 430:
        return "fidi"
    if cz > -120:
        return "lower"
    if cz > PARK["z1"]:
        return "mid_south" if cz > -620 else "mid_core"
    if cz > PARK["z0"]:
        return "upper"
    return "north"


def lot_height(district, rng):
    if district == "fidi":
        r = rng.random()
        if r < 0.25: return rnd(40, 90), "deco"
        if r < 0.55: return rnd(60, 150), "glass"
        if r < 0.85: return rnd(25, 60), "slab"
        return rnd(90, 190), "deco"
    if district == "lower":
        r = rng.random()
        if r < 0.55: return rnd(13, 18), "row"
        if r < 0.8: return rnd(19, 26), "row"
        if r < 0.93: return rnd(28, 40), "slab"
        return rnd(40, 60), "slab"
    if district in ("mid_south", "mid_core"):
        r = rng.random()
        if r < 0.3: return rnd(30, 55), "slab"
        if r < 0.55: return rnd(60, 130), "glass"
        if r < 0.8: return rnd(90, 170), "deco"
        if r < 0.95: return rnd(140, 210), "deco"
        return rnd(200, 280), "pencil"
    if district == "upper":
        r = rng.random()
        if r < 0.5: return rnd(14, 18), "row"
        if r < 0.75: return rnd(20, 30), "slab"
        if r < 0.92: return rnd(30, 45), "slab"
        return rnd(50, 70), "glass"
    r = rng.random()
    if r < 0.55: return rnd(12, 26), "row"
    if r < 0.85: return rnd(22, 38), "slab"
    return rnd(40, 62), "glass"


def mat_for(district, kind, rng):
    if kind == "row":
        if district == "lower":
            return pick(["facade_brick_a", "facade_brick_b", "facade_brown"])
        return pick(["facade_brick_b", "facade_brown", "facade_brick_a"])
    if kind == "slab":
        if district in ("mid_south", "mid_core"):
            return pick(["facade_prewar", "facade_brick_a", "facade_panel", "facade_prewar"])
        if district == "fidi":
            return pick(["facade_prewar", "facade_deco_a", "facade_panel"])
        if district == "upper":
            return pick(["facade_brick_a", "facade_brick_b", "facade_prewar"])
        return pick(["facade_brick_a", "facade_panel", "facade_brick_b"])
    if kind == "deco":
        return pick(["facade_deco_a", "facade_deco_b", "facade_prewar", "facade_deco_a"])
    if kind == "glass":
        return pick(["facade_glass_a", "facade_glass_b"])
    if kind == "pencil":
        return pick(["facade_panel", "facade_glass_b"])
    return "facade_brick_a"


def in_reserve(x0, x1, z0, z1):
    for (rx0, rx1, rz0, rz1) in RESERVES:
        if x0 < rx1 and x1 > rx0 and z0 < rz1 and z1 > rz0:
            return True
    return False


def fill_block(mb, poly, district, rng):
    x0, x1, z0, z1 = poly_bbox(poly)
    bw, bd = x1 - x0, z1 - z0
    if bw < 5 or bd < 5:
        return
    # sidewalk slab (exact poly) + walkable track
    mb.prism(poly, GROUND_Y, SIDEWALK_Y, "sidewalk")
    track(x0 + 0.5, x1 - 0.5, z0 + 0.5, z1 - 0.5, SIDEWALK_Y)
    if district == "park":
        return
    if in_reserve(x0, x1, z0, z1):
        return

    inner = shrink_poly(poly, 1.8)
    ix0, ix1, iz0, iz1 = poly_bbox(inner)
    ibw, ibd = ix1 - ix0, iz1 - iz0

    # perimeter row lots (residential streets)
    if district in ("lower", "upper", "north") and ibd > 13:
        row_d = ibd / 2 - 0.6
        for zz in (iz0, iz1 - row_d):
            x = ix0
            while x < ix1 - 4:
                lw = min(rnd(6.5, 9.5), ix1 - x)
                if lw < 4.5:
                    break
                h, kind = lot_height(district, rng)
                mat = mat_for(district, kind, rng)
                clut = "watertower" if (h > 22 and rng.random() < 0.35) else "ac"
                gen_building(mb, x, x + lw, zz, zz + row_d, SIDEWALK_Y,
                             {"kind": "slab" if kind == "slab" else "row", "h": h,
                              "mat": mat, "clutter": clut}, rng)
                x += lw + rnd(0.2, 1.2)
        return

    # midtown / fidi: tower lots + low fill
    if district in ("mid_south", "mid_core", "fidi") and ibw > 24 and ibd > 12:
        cuts = sorted(rng.sample([ix0 + ibw * t for t in (0.3, 0.45, 0.6, 0.72)],
                                 rng.choice([1, 1, 2])))
        segs = []
        prev = ix0
        for c in cuts:
            segs.append((prev, c - 1.2))
            prev = c + 1.2
        segs.append((prev, ix1))
        for (a, b) in segs:
            if b - a < 7:
                continue
            h, kind = lot_height(district, rng)
            mat = mat_for(district, kind, rng)
            td = min(ibd, rnd(12, 17)) if kind in ("glass", "pencil") else ibd * rnd(0.5, 0.8)
            if kind in ("glass", "deco", "pencil"):
                zc = (iz0 + iz1) / 2 + rnd(-1.5, 1.5)
                gen_building(mb, a, b, zc - td / 2, zc + td / 2, SIDEWALK_Y,
                             {"kind": kind, "h": h, "mat": mat, "pod": rnd(10, 18)}, rng)
            else:
                gen_building(mb, a, b, iz0, iz0 + td, SIDEWALK_Y,
                             {"kind": "slab", "h": h, "mat": mat,
                              "clutter": "watertower" if rng.random() < 0.4 else "ac"}, rng)
                if ibd - td > 7:
                    gen_building(mb, a, b, iz1 - (ibd - td - 0.6), iz1, SIDEWALK_Y,
                                 {"kind": "slab", "h": rnd(14, 30),
                                  "mat": mat_for(district, "slab", rng),
                                  "clutter": "ac"}, rng)
        return

    # generic fill: 1-3 boxes
    n = 1 + (rng.random() < 0.5) + (rng.random() < 0.3)
    if n == 1 or ibw < 16:
        h, kind = lot_height(district, rng)
        gen_building(mb, ix0, ix1, iz0, iz1, SIDEWALK_Y,
                     {"kind": "slab" if kind in ("row", "slab") else kind, "h": h,
                      "mat": mat_for(district, kind, rng),
                      "clutter": "ac"}, rng)
    else:
        mid = ix0 + ibw * rnd(0.35, 0.65)
        for (a, b) in ((ix0, mid - 0.8), (mid + 0.8, ix1)):
            if b - a < 6:
                continue
            h, kind = lot_height(district, rng)
            gen_building(mb, a, b, iz0 + rnd(0, 1.5), iz1 - rnd(0, 1.5), SIDEWALK_Y,
                         {"kind": "slab" if kind in ("row", "slab") else kind, "h": h,
                          "mat": mat_for(district, kind, rng),
                          "clutter": "ac"}, rng)


def compute_streets():
    lst = [430 - STREET_SPACING * k for k in range(1, 60)]      # midtown grid
    lst += STREETS_DOWNTOWN
    lst += [PARK["z1"] - STREET_SPACING * k for k in range(1, 25)]   # park-flank streets
    lst += [PARK["z0"] - NORTH_SPACING * k for k in range(1, 17)]
    return lst


def gen_blocks(mb, rng):
    streets = compute_streets()
    rows = []
    zds = [430] + STREETS_DOWNTOWN                      # downtown, ascending
    for i in range(len(zds) - 1):
        rows.append((zds[i] + STREET_W / 2, zds[i + 1] - STREET_W / 2))
    for k in range(1, 60):                              # midtown rows
        zN = 430 - STREET_SPACING * k
        rows.append((zN + STREET_W / 2, zN + STREET_SPACING - STREET_W / 2))
    for k in range(1, 25):                              # park-flank rows
        zN = PARK["z1"] - STREET_SPACING * k
        rows.append((zN + STREET_W / 2, zN + STREET_SPACING - STREET_W / 2))
    for k in range(1, 17):                              # north rows
        zN = PARK["z0"] - NORTH_SPACING * k
        rows.append((zN + STREET_W / 2, zN + NORTH_SPACING - STREET_W / 2))

    for i in range(len(AVENUES) - 1):
        ax0 = AVENUES[i] + AV_W / 2
        ax1 = AVENUES[i + 1] - AV_W / 2
        for (bz0, bz1) in rows:
            cx = (ax0 + ax1) / 2
            cz = (bz0 + bz1) / 2
            if not point_in_poly(cx, cz, ISLAND_POLY):
                continue
            district = district_of(cx, cz)
            if district == "park":
                continue
            if cz > 640 and ax0 < BATTERY["x1"] and ax1 > BATTERY["x0"]:
                continue
            if WASH_SQ["x0"] - 2 < cx < WASH_SQ["x1"] + 2 and WASH_SQ["z0"] - 2 < cz < WASH_SQ["z1"] + 2:
                continue
            poly = [(ax0, bz0), (ax1, bz0), (ax1, bz1), (ax0, bz1)]
            for piece in split_by_broadway(poly):
                if len(piece) >= 3:
                    fill_block(mb, piece, district, rng)


# ----------------------------------------------------------------------------
# ground

def x_edge_at(z, side):
    poly = ISLAND_POLY
    best = None
    for i in range(len(poly)):
        x0, z0 = poly[i]
        x1, z1 = poly[(i + 1) % len(poly)]
        if min(z0, z1) - 1e-6 <= z <= max(z0, z1) + 1e-6 and abs(z1 - z0) > 1e-6:
            t = (z - z0) / (z1 - z0)
            if 0 <= t <= 1:
                x = x0 + t * (x1 - x0)
                if best is None or (side < 0 and x < best) or (side > 0 and x > best):
                    best = x
    if best is None:
        best = -380 if side < 0 else 420
    return best


GREEN_RECTS = (PARK, WASH_SQ, BATTERY)


def band_free(x0, x1, z):
    """no green rect (park / wash sq / battery) overlaps this x span at grid z"""
    for r in GREEN_RECTS:
        if z > r["z0"] - 2 and z < r["z1"] + 2 and x1 > r["x0"] - 2 and x0 < r["x1"] + 2:
            return False
    return True


def on_land(x0, x1, z):
    """both edges of a road cross-section sit on the island"""
    return point_in_poly(x0, z, ISLAND_POLY) and point_in_poly(x1, z, ISLAND_POLY)


def avenue_runs(ax):
    """contiguous z-runs where an avenue sits fully on land, out of the greens"""
    runs, start = [], None
    z = -2345.0
    while z <= 770.0:
        ok = on_land(ax - AV_W / 2, ax + AV_W / 2, z) and band_free(ax - AV_W / 2, ax + AV_W / 2, z)
        if ok and start is None:
            start = z
        elif not ok and start is not None:
            if z - start > 40:
                runs.append([round(start), round(z)])
            start = None
        z += 2.0
    if start is not None and 770 - start > 40:
        runs.append([round(start), 770])
    return runs


def broadway_runs():
    """broadway sub-segments [x0, z0, x1, z1] clipped to land, out of the greens"""
    out = []
    for i in range(len(BROADWAY) - 1):
        p, q = BROADWAY[i], BROADWAY[i + 1]
        dx, dz = q[0] - p[0], q[1] - p[1]
        L = math.hypot(dx, dz)
        nx, nz = dx / L, dz / L
        px, pz = -nz * BROADWAY_HALF, nx * BROADWAY_HALF
        start = None
        t = 0.0
        while t <= L:
            x, z = p[0] + nx * t, p[1] + nz * t
            ok = (point_in_poly(x, z, ISLAND_POLY)
                  and point_in_poly(x + px, z + pz, ISLAND_POLY)
                  and point_in_poly(x - px, z - pz, ISLAND_POLY)
                  and band_free(x - BROADWAY_HALF, x + BROADWAY_HALF, z))
            if ok and start is None:
                start = t
            elif not ok and start is not None:
                if t - start > 24:
                    out.append([round(p[0] + nx * start, 1), round(p[1] + nz * start, 1),
                                round(x, 1), round(z, 1)])
                start = None
            t += 2.0
        if start is not None and L - start > 24:
            out.append([round(p[0] + nx * start, 1), round(p[1] + nz * start, 1), q[0], q[1]])
    return out


def near_road(v, roads, margin):
    """is scalar v within margin of any coordinate in the sorted list roads"""
    i = bisect.bisect_left(roads, v)
    if i < len(roads) and roads[i] - v < margin:
        return True
    return i > 0 and v - roads[i - 1] < margin


def gen_ground(mb, rng, streets):
    # island body (concrete top doubles as the base everywhere)
    mb.prism(ISLAND_POLY, -6, GROUND_Y, "concrete", caps=(True, True))

    # central park
    park_poly = [(PARK["x0"], PARK["z0"]), (PARK["x1"], PARK["z0"]),
                 (PARK["x1"], PARK["z1"]), (PARK["x0"], PARK["z1"])]
    mb.prism(park_poly, GROUND_Y, GREEN_Y, "grass")
    track(PARK["x0"], PARK["x1"], PARK["z0"], PARK["z1"], GREEN_Y)
    # battery park
    bat = [(BATTERY["x0"], BATTERY["z0"]), (BATTERY["x1"], BATTERY["z0"]),
           (BATTERY["x1"], BATTERY["z1"]), (BATTERY["x0"] - 40, BATTERY["z1"] - 30),
           (BATTERY["x0"] - 40, BATTERY["z0"] + 40)]
    mb.prism(bat, GROUND_Y, GREEN_Y, "grass")
    track(BATTERY["x0"] - 38, BATTERY["x1"], BATTERY["z0"], BATTERY["z1"], GREEN_Y)
    # washington square
    ws = [(WASH_SQ["x0"], WASH_SQ["z0"]), (WASH_SQ["x1"], WASH_SQ["z0"]),
          (WASH_SQ["x1"], WASH_SQ["z1"]), (WASH_SQ["x0"], WASH_SQ["z1"])]
    mb.prism(ws, GROUND_Y, GREEN_Y, "grass")
    track(WASH_SQ["x0"], WASH_SQ["x1"], WASH_SQ["z0"], WASH_SQ["z1"], GREEN_Y)

    # avenues (clipped to the island, out of the park greens)
    sz_sorted = sorted(streets)
    for ax in AVENUES:
        for (z0, z1) in avenue_runs(ax):
            mb.box(ax, GROUND_Y, (z0 + z1) / 2, AV_W, 0.05, z1 - z0, "asphalt")
            z = z0 + 5
            while z < z1 - 4:
                if not near_road(z, sz_sorted, 10):  # no dashes across intersections
                    mb.box(ax, GROUND_Y + 0.07, z + 1.5, 0.35, 0.03, 3.2, "paint_yellow")
                z += 9.0
    # streets
    for sz in streets:
        xe = x_edge_at(sz, -1) + 3
        xw = x_edge_at(sz, 1) - 3
        mb.box((xe + xw) / 2, GROUND_Y + 0.02, sz, (xw - xe), 0.04, STREET_W, "asphalt_st")
    # street dashes + crosswalks (park-band streets run only on the flanks)
    in_park_band = lambda sz: PARK["z1"] > sz > PARK["z0"]
    for si, sz in enumerate(streets):
        xe = x_edge_at(sz, -1) + 3
        xw = x_edge_at(sz, 1) - 3
        runs = [(xe, xw)]
        if in_park_band(sz):
            runs = [(xe, PARK["x0"] - 4), (PARK["x1"] + 4, xw)]
        for (ra, rb) in runs:
            x = ra
            while x < rb:
                # two-way street: yellow center line, skipped across avenues/greens
                if not near_road(x + 1.5, AVENUES, 10) and band_free(x, x + 3.2, sz):
                    mb.box(x + 1.5, GROUND_Y + 0.09, sz, 3.2, 0.03, 0.3, "paint_yellow")
                x += 13.0
        if si % 2:
            continue  # crosswalks on alternate streets
        for ax in AVENUES:
            if not point_in_poly(ax, sz, ISLAND_POLY) or not band_free(ax - 8, ax + 8, sz):
                continue
            for s in range(2):
                yy = ax - AV_W / 2 + 2.5 + s * 5.6
                mb.box(yy, GROUND_Y + 0.1, sz - STREET_W / 2 - 1.6, 0.5, 0.03, 3.2, "paint_white")
                mb.box(yy, GROUND_Y + 0.1, sz + STREET_W / 2 + 1.6, 0.5, 0.03, 3.2, "paint_white")
    # broadway road + dashes (clipped runs)
    for (x0, z0, x1, z1) in broadway_runs():
        dx, dz = x1 - x0, z1 - z0
        L = math.hypot(dx, dz)
        ry = math.atan2(dx, dz)
        mx, mz = (x0 + x1) / 2, (z0 + z1) / 2
        mb.box(mx, GROUND_Y + 0.03, mz, BROADWAY_HALF * 2, 0.05, L, "asphalt_bw", ry=ry)
        t = -L / 2 + 2
        while t < L / 2:
            zz = mz + math.cos(ry) * t
            if not near_road(zz, sz_sorted, 10):
                mb.box(mx + math.sin(ry) * t, GROUND_Y + 0.1, zz,
                       0.35, 0.03, 3.2, "paint_yellow", ry=ry)
            t += 9.0

    # park water + paths
    res = [(PARK["x0"] + 30, -1380), (PARK["x0"] + 200, -1380), (PARK["x0"] + 200, -1560),
           (PARK["x0"] + 30, -1560)]
    mb.prism(res, GREEN_Y, GREEN_Y + 0.18, "water_pond")
    pond = [(PARK["x1"] - 70, -1150), (PARK["x1"] - 15, -1155), (PARK["x1"] - 20, -1215),
            (PARK["x1"] - 75, -1210)]
    mb.prism(pond, GREEN_Y, GREEN_Y + 0.15, "water_pond")
    lawn = [(PARK["x0"] + 40, -1580), (PARK["x0"] + 190, -1585), (PARK["x0"] + 200, -1680),
            (PARK["x0"] + 45, -1690)]
    mb.prism(lawn, GREEN_Y, GREEN_Y + 0.1, "grass")
    mb.box(PARK["x0"] + 60, GREEN_Y + 0.07, -1200, 7, 0.06, 130, "path")
    mb.box(PARK["x0"] + 120, GREEN_Y + 0.07, -1470, 260, 0.06, 7, "path")
    mb.box(PARK["x0"] + 70, GREEN_Y + 0.07, -1330, 240, 0.06, 6, "path", ry=0.45)
    mb.box(PARK["x0"] + 100, GREEN_Y + 0.07, -1620, 220, 0.06, 6, "path", ry=-0.35)

    # hudson river piers + whitehall ferry terminal
    for (px, pz) in ((-388, 350), (-392, 60), (-388, -250)):
        mb.box(px, GROUND_Y + 0.05, pz, 60, 0.5, 13, "pier_wood")
        for sx in (-26, 26):
            for sz2 in (-5, 5):
                mb.cyl(px + sx, -1, pz + sz2, 0.5, 0.5, 3.6, 5, "trunk")
    mb.box(130, GROUND_Y + 0.05, 700, 90, 0.5, 26, "pier_wood")
    mb.box(150, GROUND_Y + 0.5, 700, 40, 6, 20, "bus_white")
    track(130, 170, 690, 710, GROUND_Y + 6.5)

    # gate plaza
    mb.box(GATE["x"], GROUND_Y, GATE["z"] + 20, 56, 0.42, 60, "sidewalk")
    track(GATE["x"] - 28, GATE["x"] + 28, GATE["z"] - 10, GATE["z"] + 50, SIDEWALK_Y)


# ----------------------------------------------------------------------------
# landmarks

def gen_landmarks(mb, rng):
    y = SIDEWALK_Y

    # ---- empire state (roof 381, mast to ~443) ----
    x, z = ESB["x"], ESB["z"]
    t = FACADES["facade_deco_a"]["tile"]
    mb.box(x, y, z, 34, 14, 34, "facade_deco_a", tile=t)
    mb.box(x, y + 14, z, 35, 1, 35, "stone_mid")
    mb.box(x, y + 15, z, 28, 16, 28, "facade_deco_a", tile=t)
    mb.box(x, y + 31, z, 22, 200, 22, "facade_deco_a", tile=t)
    mb.box(x, y + 231, z, 23.4, 1.2, 23.4, "stone_mid")
    mb.box(x, y + 232, z, 16, 40, 16, "facade_deco_a", tile=t)
    mb.box(x, y + 272, z, 11, 30, 11, "facade_deco_a", tile=t)
    mb.box(x, y + 302, z, 7, 40, 7, "facade_deco_b", tile=FACADES["facade_deco_b"]["tile"])
    mb.cyl(x, y + 342, z, 3.2, 2.6, 22, 8, "facade_deco_a")
    mb.cyl(x, y + 364, z, 1.6, 1.2, 14, 6, "stone_light")
    mb.cyl(x, y + 378, z, 0.8, 0.25, 48, 6, "dark_metal")
    mb.cyl(x, y + 426, z, 0.22, 0.05, 17, 4, "steel_blue")
    track(x - 17, x + 17, z - 17, z + 17, y + 381)

    # ---- chrysler (roof ~278, needle to ~319) ----
    x, z = CHRYSLER["x"], CHRYSLER["z"]
    mb.box(x, y, z, 30, 22, 30, "facade_prewar", tile=FACADES["facade_prewar"]["tile"])
    mb.box(x, y + 22, z, 21, 200, 21, "facade_deco_b", tile=FACADES["facade_deco_b"]["tile"])
    mb.box(x, y + 222, z, 22.2, 1, 22.2, "stone_mid")
    r, cy = 8.0, y + 223
    for i in range(6):
        hh = 13 - i
        mb.cyl(x, cy, z, r, r * 0.8, hh, 8, "facade_deco_a")
        for k in range(4):
            a = math.tau * k / 4
            mb.box(x + math.sin(a) * r * 0.75, cy, z + math.cos(a) * r * 0.75,
                   1.4, hh * 0.8, 1.4, "sign_glow", ry=a)
        cy += hh
        r *= 0.78
    mb.cyl(x, cy, z, 1.4, 0.12, 34, 6, "dark_metal")
    mb.cyl(x, cy + 34, z, 0.1, 0.02, 10, 4, "steel_blue")
    track(x - 15, x + 15, z - 15, z + 15, y + 278)

    # ---- one world trade (roof 405, spire to 541) ----
    x, z = WTC["x"], WTC["z"]
    mb.box(x, y, z, 44, 20, 44, "facade_glass_b", tile=FACADES["facade_glass_b"]["tile"])
    mb.taper_box(x, y + 20, z, 34, 34, 25, 25, 385, "facade_glass_a", uv_tile=TILE)
    mb.box(x, y + 405, z, 25.8, 1.5, 25.8, "dark_metal")
    mb.cyl(x, y + 406, z, 3.2, 1.2, 118, 8, "steel_blue")
    mb.cyl(x, y + 524, z, 0.4, 0.05, 17, 4, "dark_metal")
    track(x - 22, x + 22, z - 22, z + 22, y + 405)
    for pz in (545, 578):
        px = x - 46
        mb.box(px, y, pz, 22, 1.0, 22, "stone_light")
        mb.box(px, y + 0.1, pz, 17, 0.4, 17, "water_pond")
        track(px - 11, px + 11, pz - 11, pz + 11, y + 1.4)
        for (dx, dz) in ((-8.5, -8.5), (8.5, -8.5), (-8.5, 8.5), (8.5, 8.5)):
            mb.box(px + dx, y + 1.0, pz + dz, 5, 1.2, 5, "stone_light")
            track(px + dx - 2.5, px + dx + 2.5, pz + dz - 2.5, pz + dz + 2.5, y + 2.2)

    # ---- flatiron (87) ----
    x, z = FLATIRON["x"], FLATIRON["z"]
    pts = [(x - 2, z - 32), (x - 18, z + 26), (x + 14, z + 26)]
    mb.prism(pts, y, y + 84, "facade_castiron")
    mb.prism(shrink_poly(pts, 1.5), y + 84, y + 87, "stone_mid")
    track(*poly_bbox(pts), y + 87)

    # ---- woolworth (232) ----
    x, z = WOOLWORTH["x"], WOOLWORTH["z"]
    mb.box(x, y, z, 26, 18, 26, "facade_prewar", tile=FACADES["facade_prewar"]["tile"])
    mb.box(x, y + 18, z, 18, 150, 18, "facade_prewar", tile=FACADES["facade_prewar"]["tile"])
    mb.box(x, y + 168, z, 19.2, 1.2, 19.2, "stone_mid")
    mb.box(x, y + 169, z, 12, 26, 12, "facade_prewar", tile=FACADES["facade_prewar"]["tile"])
    mb.cyl(x, y + 195, z, 8.5, 0.5, 26, 8, "copper")
    mb.cyl(x, y + 221, z, 0.5, 0.08, 11, 5, "gold")
    track(x - 13, x + 13, z - 13, z + 13, y + 195)

    # ---- st patrick's (spires to ~101) ----
    x, z = STPAT["x"], STPAT["z"]
    mb.box(x, y, z, 22, 30, 48, "facade_prewar", tile=FACADES["facade_prewar"]["tile"])
    mb.box(x, y + 30, z, 22.8, 1, 48.8, "stone_mid")
    for sx in (-6.5, 6.5):
        mb.box(x + sx, y, z - 26, 6, 46, 6, "facade_prewar", tile=FACADES["facade_prewar"]["tile"])
        mb.cyl(x + sx, y + 46, z - 26, 3.0, 0.06, 24, 6, "stone_light")
        mb.cyl(x + sx, y + 70, z - 26, 0.12, 0.03, 8, 4, "gold")
        track(x + sx - 3, x + sx + 3, z - 29, z - 23, y + 78)
    track(x - 11, x + 11, z - 20, z + 24, y + 31)

    # ---- 432 park (430) ----
    x, z = PENCIL_432["x"], PENCIL_432["z"]
    mb.box(x, y, z, 17, 426, 17, "facade_panel", tile=FACADES["facade_panel"]["tile"])
    mb.box(x, y + 426, z, 17.6, 1.4, 17.6, "concrete")
    mb.box(x, y + 427.4, z, 6, 3, 6, "dark_metal")
    track(x - 8.5, x + 8.5, z - 8.5, z + 8.5, y + 428)

    # ---- washington arch (24) ----
    x, z = ARCH["x"], ARCH["z"]
    for sx in (-6, 6):
        mb.box(x + sx, y, z, 3.4, 18, 4.2, "stone_light")
    mb.box(x, y + 18, z, 17.5, 5, 4.2, "stone_light")
    mb.box(x, y + 23, z, 19, 0.8, 4.6, "stone_mid")
    mb.box(x, y, z + 2.6, 17.5, 3.2, 1.0, "stone_light")
    track(x - 9.5, x + 9.5, z - 2.5, z + 3.5, y + 23.8)

    # ---- statue of liberty ----
    cx, cz = STATUE_ISLET
    pts = []
    for i in range(22):
        a = math.tau * i / 22
        r = 46 if i % 2 == 0 else 34
        pts.append((cx + math.cos(a) * r, cz + math.sin(a) * r))
    mb.prism(pts, -4, 4.5, "stone_mid")
    mb.prism(pts, 4.5, 8.5, "stone_mid", caps=(True, False))
    track(cx - 46, cx + 46, cz - 46, cz + 46, 8.5)
    py = 8.5
    for (w, h) in ((30, 10), (24, 12), (18, 14), (13, 6)):
        mb.box(cx, py, cz, w, h, w, "stone_light")
        py += h
    mb.cyl(cx, py, cz, 6.2, 3.4, 26, 10, "patina")
    mb.cyl(cx, py + 26, cz, 3.6, 2.6, 8, 8, "patina")
    mb.sphere(cx, py + 36.5, cz, 2.1, "patina", seg=8, rings=4)
    mb.cyl(cx, py + 38.2, cz, 1.8, 1.1, 1.6, 8, "patina")
    for i in range(7):
        a = math.tau * i / 7
        mb.segment((cx + math.cos(a) * 1.2, py + 39.8, cz + math.sin(a) * 1.2),
                   (cx + math.cos(a) * 2.6, py + 43.2, cz + math.sin(a) * 2.6), 0.22, 4, "patina")
    mb.segment((cx - 1.5, py + 33, cz + 1.5), (cx - 4.5, py + 46, cz + 3.5), 1.0, 6, "patina")
    mb.cyl(cx - 4.8, py + 46, cz + 3.7, 1.3, 0.9, 2.6, 6, "gold")
    mb.sphere(cx - 4.8, py + 50.4, cz + 3.7, 1.3, "gold", seg=6, rings=3, sy=1.5)
    mb.box(cx + 3.4, py + 30, cz - 1.5, 2.6, 6.5, 1.1, "patina")

    # ---- times square podiums (screens are runtime canvases) ----
    for (px, pz, w, d, h) in [
        (TIMES_SQ["x0"] + 12, TIMES_SQ["z0"] + 14, 26, 22, 34),
        (TIMES_SQ["x1"] - 10, TIMES_SQ["z0"] + 18, 22, 24, 46),
        (TIMES_SQ["x0"] + 14, TIMES_SQ["z1"] - 16, 24, 20, 28),
        (TIMES_SQ["x1"] - 12, TIMES_SQ["z1"] - 20, 20, 18, 58),
    ]:
        mat = pick(["facade_deco_a", "facade_deco_b", "facade_prewar"])
        mb.box(px, y, pz, w, h, d, mat, tile=FACADES[mat]["tile"])
        mb.box(px, y + h, pz, w + 0.5, 0.8, d + 0.5, "dark_metal")
        track(px - w / 2, px + w / 2, pz - d / 2, pz + d / 2, y + h)

    # ---- grand central (simplified) ----
    gx, gz = GRAND_CENTRAL["x"], GRAND_CENTRAL["z"]
    mb.box(gx, y, gz, 60, 22, 34, "facade_prewar", tile=FACADES["facade_prewar"]["tile"])
    mb.box(gx, y + 22, gz, 60.8, 1.2, 34.8, "stone_mid")
    for i in range(6):
        mb.box(gx - 25 + i * 10, y, gz - 18, 2.4, 14, 2.4, "stone_light")
    mb.cyl(gx, y + 15.5, gz - 18.6, 1.1, 1.1, 0.5, 10, "stone_light")


# ----------------------------------------------------------------------------
# bridges

def gen_bridges(mb, rng):
    for spec in (BRIDGE_BROOKLYN, BRIDGE_MANHATTAN):
        p0, p1 = spec["p0"], spec["p1"]
        dx, dz = p1[0] - p0[0], p1[1] - p0[1]
        L = math.hypot(dx, dz)
        ux, uz = dx / L, dz / L
        ry = math.atan2(dx, dz)
        deck = spec["deck"]
        wide = spec["wide"]
        mid = ((p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2)
        mb.box(mid[0], deck - 1.2, mid[1], wide, 1.2, L, "concrete", ry=ry)
        mb.box(mid[0], deck, mid[1], wide * 0.55, 0.1, L, "asphalt", ry=ry)
        for s in (-1, 1):
            ox, oz = uz * wide / 2 * s, -ux * wide / 2 * s
            mb.segment((p0[0] + ox, deck + 1.0, p0[1] + oz),
                       (p1[0] + ox, deck + 1.0, p1[1] + oz), 0.12, 4, "dark_metal")
        # towers
        tops = []
        for t in (0.2, 0.72):
            tx, tz = p0[0] + dx * t, p0[1] + dz * t
            th = spec["tower_h"]
            if spec["masonry"]:
                mb.box(tx, deck - 4, tz, wide + 4, th + 4, 10, "stone_mid", ry=ry)
                for s in (-1, 1):
                    ox, oz = uz * (wide / 2 + 0.3) * s, -ux * (wide / 2 + 0.3) * s
                    mb.box(tx + ux * 0.5 + ox, deck + 2, tz + uz * 0.5 + oz,
                           wide * 0.7, 26, 0.8, "roof_dark", ry=ry)
                mb.box(tx, deck + th + 2, tz, wide + 5, 1.6, 11, "stone_light", ry=ry)
            else:
                mb.box(tx, deck - 4, tz, wide + 3, th + 4, 8, "steel_blue", ry=ry)
                mb.box(tx, deck + th + 2, tz, wide + 4, 1.2, 9, "steel_blue", ry=ry)
            tops.append((tx, tz))
            track(tx - wide / 2 - 1, tx + wide / 2 + 1, tz - 5, tz + 5, deck + th + 2)
        # main cables: anchor -> tower -> sag -> tower -> anchor
        top_y = deck + spec["tower_h"] + 2
        anchor_y = deck + 16
        sag_y = deck + 4.5
        t1, t2 = 0.2, 0.72
        path = []
        for i in range(21):
            t = i / 20
            x = p0[0] + dx * t
            z = p0[1] + dz * t
            if t < t1:
                k = t / t1
                yy = anchor_y + (top_y - anchor_y) * k
            elif t <= t2:
                k = (t - t1) / (t2 - t1)
                yy = top_y + (sag_y - top_y) * math.sin(math.pi * k) * 0.85 + \
                     (top_y - sag_y) * (2 * k - 1) ** 2 * 0.35
                yy = max(sag_y, min(top_y, yy))
            else:
                k = (t - t2) / (1 - t2)
                yy = top_y + (anchor_y - top_y) * k
            path.append((x, yy, z))
        for i in range(len(path) - 1):
            mb.segment(path[i], path[i + 1], 0.4, 4, "cable")
        for i in range(5, len(path) - 5):
            x, yy, z = path[i]
            if t1 + 0.03 < i / 20 < t2 - 0.03:
                mb.segment((x, yy, z), (x, deck, z), 0.09, 3, "cable")
        # deck collision strips
        steps = max(8, int(L / 20))
        for i in range(steps + 1):
            t = i / steps
            x, z = p0[0] + dx * t, p0[1] + dz * t
            track(x - 12, x + 12, z - 12, z + 12, deck)
        # anchorages
        mb.box(p0[0] - ux * 8, deck - 20, p0[1] - uz * 8, 34, 30, 30, "stone_mid", ry=ry)
        track(p0[0] - ux * 8 - 17, p0[0] - ux * 8 + 17, p0[1] - uz * 8 - 15,
              p0[1] - uz * 8 + 15, deck + 10)
        mb.box(p1[0] + ux * 8, deck - 20, p1[1] + uz * 8, 34, 30, 30, "stone_mid", ry=ry)
        track(p1[0] + ux * 8 - 17, p1[0] + ux * 8 + 17, p1[1] + uz * 8 - 15,
              p1[1] + uz * 8 + 15, deck + 10)


# ----------------------------------------------------------------------------
# backdrop

def gen_backdrop(mb, rng):
    y = 1.5
    jersey = [(-460, 780), (-560, 700), (-600, 500), (-640, 200), (-660, -200),
              (-680, -700), (-700, -1200), (-760, -1700), (-860, -2100),
              (-1000, -2350), (-1200, -2500), (-1250, 700), (-700, 860)]
    mb.prism(jersey, -4, y, "backdrop_grass", caps=(True, True))
    track(-1250, -460, -2500, 860, y)
    # palisades cliffs (stepped plateaus, west bank north of midtown)
    for i, (h, off) in enumerate(((26, 40), (56, 120), (86, 210))):
        pts = [(-560 - off * 0.3 - i * 55, -950 - i * 120),
               (-660 - off - i * 40, -980 - i * 140),
               (-720 - off - i * 40, -1500 - i * 160),
               (-820 - off - i * 30, -2050 - i * 120),
               (-560 - off * 0.5 - i * 45, -2160 - i * 80),
               (-520 - off * 0.3 - i * 45, -1500 - i * 150)]
        mb.prism(pts, y, y + h, "concrete", caps=(True, True))
    # jersey city towers
    for (bx, bz, h) in ((-620, 420, 120), (-650, 380, 165), (-600, 300, 90),
                        (-690, 250, 140), (-640, 150, 110), (-590, 80, 80),
                        (-700, -50, 95), (-660, -120, 60)):
        mat = "facade_glass_a" if rng.random() < 0.6 else "facade_panel"
        mb.box(bx, y, bz, rnd(16, 26), h, rnd(16, 26), mat, tile=FACADES[mat]["tile"])
        track(bx - 13, bx + 13, bz - 13, bz + 13, y + h)
    # hoboken rows
    for i in range(9):
        mb.box(-560, y, -300 - i * 46, 60, rnd(12, 18), 14, "facade_brick_b",
               tile=FACADES["facade_brick_b"]["tile"])
        track(-590, -530, -307 - i * 46, -293 - i * 46, y + 18)

    brooklyn = [(460, 200), (700, 160), (1000, 220), (1250, 380), (1250, 1330),
                (700, 1360), (520, 1200), (470, 800)]
    mb.prism(brooklyn, -4, y, "backdrop_grass", caps=(True, True))
    track(460, 1250, 160, 1360, y)
    for (bx, bz, h) in ((640, 760, 90), (670, 800, 130), (610, 820, 70), (700, 860, 105),
                        (640, 880, 60), (720, 920, 85)):
        mat = pick(["facade_prewar", "facade_glass_b", "facade_deco_b"])
        mb.box(bx, y, bz, rnd(18, 28), h, rnd(18, 28), mat, tile=FACADES[mat]["tile"])
        track(bx - 14, bx + 14, bz - 14, bz + 14, y + h)
    for i in range(30):
        bx, bz = rnd(500, 1180), rnd(300, 1250)
        if math.hypot(bx - 660, bz - 840) < 130:
            continue
        mb.box(bx, y, bz, rnd(16, 40), rnd(8, 18), rnd(14, 30), "facade_brick_b",
               tile=FACADES["facade_brick_b"]["tile"])

    queens = [(460, 150), (900, 60), (1250, -100), (1250, -1800), (800, -1850),
              (560, -1600), (480, -800)]
    mb.prism(queens, -4, y, "backdrop_grass", caps=(True, True))
    track(460, 1250, -1850, 150, y)
    for (bx, bz, h) in ((700, -420, 170), (740, -480, 130), (660, -520, 100), (780, -380, 190)):
        mb.box(bx, y, bz, rnd(18, 26), h, rnd(18, 26), "facade_glass_a",
               tile=FACADES["facade_glass_a"]["tile"])
        track(bx - 13, bx + 13, bz - 13, bz + 13, y + h)
    for i in range(22):
        bx, bz = rnd(500, 1150), rnd(-1500, 100)
        if math.hypot(bx - 720, bz + 450) < 120:
            continue
        mb.box(bx, y, bz, rnd(18, 44), rnd(8, 20), rnd(16, 30), "facade_panel",
               tile=FACADES["facade_panel"]["tile"])

    # governors island
    pts = []
    for i in range(16):
        a = math.tau * i / 16
        pts.append((GOV_ISLAND[0] + math.cos(a) * 95, GOV_ISLAND[1] + math.sin(a) * 68))
    mb.prism(pts, -3, 3.2, "backdrop_grass")
    track(GOV_ISLAND[0] - 95, GOV_ISLAND[0] + 95, GOV_ISLAND[1] - 68, GOV_ISLAND[1] + 68, 3.2)
    mb.cyl(GOV_ISLAND[0], 3.2, GOV_ISLAND[1], 24, 24, 7, 12, "stone_mid")
    track(GOV_ISLAND[0] - 24, GOV_ISLAND[0] + 24, GOV_ISLAND[1] - 24, GOV_ISLAND[1] + 24, 10.2)

    # ellis island
    pts = []
    for i in range(14):
        a = math.tau * i / 14
        pts.append((ELLIS[0] + math.cos(a) * 46, ELLIS[1] + math.sin(a) * 34))
    mb.prism(pts, -3, 3.0, "backdrop_grass")
    track(ELLIS[0] - 46, ELLIS[0] + 46, ELLIS[1] - 34, ELLIS[1] + 34, 3.0)
    mb.box(ELLIS[0], 3.0, ELLIS[1], 34, 16, 22, "facade_prewar",
           tile=FACADES["facade_prewar"]["tile"])
    for sx in (-12, 12):
        mb.cyl(ELLIS[0] + sx, 19, ELLIS[1] - 6, 3.2, 3.2, 8, 6, "facade_prewar")
        mb.cyl(ELLIS[0] + sx, 27, ELLIS[1] - 6, 3.6, 0.2, 4, 6, "copper")
    track(ELLIS[0] - 17, ELLIS[0] + 17, ELLIS[1] - 11, ELLIS[1] + 11, 19)


# ----------------------------------------------------------------------------
# props + trees

LAMPS = []
STREET_TREES = []
PARK_TREES = []


def prop_ok(x, z):
    """props must sit on the island and off the park greens"""
    return point_in_poly(x, z, ISLAND_POLY) and band_free(x - 1.5, x + 1.5, z)


def gen_props(mb, rng, streets):
    y = SIDEWALK_Y
    # streetlight positions along avenues (meshes are instanced at runtime)
    for ax in AVENUES:
        z = -2250
        side = 1
        while z < 620:
            z += rnd(42, 52)
            x = ax + side * (AV_W / 2 + 1.1)
            if prop_ok(x, z):
                LAMPS.append([round(x, 1), round(z, 1), -side, 0])
            side *= -1
    for i in range(4, len(BROADWAY) - 4, 2):
        p, q = BROADWAY[i], BROADWAY[i + 1]
        mx, mz = (p[0] + q[0]) / 2, (p[1] + q[1]) / 2
        dx, dz = q[0] - p[0], q[1] - p[1]
        L = math.hypot(dx, dz)
        nx, nz = dz / L, -dx / L
        s = 1 if i % 4 == 0 else -1
        lx, lz = mx + nx * 8.2 * s, mz + nz * 8.2 * s
        if prop_ok(lx, lz):
            LAMPS.append([round(lx, 1), round(lz, 1), round(-nx * s, 2), round(-nz * s, 2)])

    # traffic lights (every third intersection, one corner)
    count = 0
    for ax in AVENUES:
        for sz in streets:
            if PARK["z1"] - 4 > sz > PARK["z0"] + 4:
                continue
            count += 1
            if count % 3:
                continue
            for (sx, szn) in ((1, 1),):
                px = ax + sx * (AV_W / 2 + 0.8)
                pz = sz + szn * (STREET_W / 2 + 0.8)
                if not prop_ok(px, pz):
                    continue
                mb.cyl(px, y, pz, 0.14, 0.11, 4.6, 5, "dark_metal")
                mb.box(px, y + 4.6, pz, 0.9, 2.0, 0.5, "dark_metal")
                mb.box(px, y + 5.8, pz - 0.28, 0.5, 0.5, 0.12, "tl_red")
                mb.box(px, y + 5.3, pz - 0.28, 0.5, 0.5, 0.12, "tl_yellow")
                mb.box(px, y + 4.8, pz - 0.28, 0.5, 0.5, 0.12, "tl_green")
                mb.box(px - sx * 2.4, y + 4.9, pz, 2.2, 0.14, 0.16, "dark_metal")
                mb.box(px - sx * 3.4, y + 4.7, pz - 0.1, 0.5, 0.9, 0.4, "dark_metal")
    # subway entrances
    for i, ax in enumerate(AVENUES[1:-1]):
        for k in range(3):
            sz = streets[(i * 7 + k * 13) % len(streets)]
            if PARK["z1"] - 6 > sz > PARK["z0"] + 6:
                continue
            px, pz = ax + 11, sz + 9
            if not prop_ok(px, pz):
                continue
            mb.box(px, y - 0.05, pz, 4.4, 0.3, 3.2, "stone_light")
            mb.box(px, y + 0.2, pz, 3.6, 1.0, 2.6, "roof_dark")
            for s in (-1, 1):
                mb.box(px + s * 2.0, y + 0.25, pz, 0.14, 1.1, 3.0, "dark_metal")
            mb.cyl(px - 2.3, y + 0.3, pz + 1.9, 0.35, 0.35, 1.1, 6, "sign_glow")
    # hydrants + bins along avenues
    for ax in AVENUES:
        for z in range(-2100, 600, 97):
            side = 1 if (z // 97) % 2 else -1
            x = ax + side * (AV_W / 2 + 1.6)
            if not prop_ok(x, z):
                continue
            if (z // 97) % 3 == 0:
                mb.cyl(x, y, z, 0.22, 0.18, 0.9, 6, "fire_hydrant")
                mb.cyl(x, y + 0.9, z, 0.12, 0.05, 0.24, 5, "fire_hydrant")
                mb.cyl(x + 0.24, y + 0.45, z, 0.09, 0.09, 0.5, 5, "fire_hydrant", ry=math.pi / 2)
            else:
                mb.cyl(x, y, z, 0.42, 0.36, 1.05, 6, "dark_metal")
    # bus shelters
    for ax in AVENUES[1:6]:
        for k in range(3):
            sz = streets[(k * 17 + 5) % len(streets)] + 9
            x = ax + AV_W / 2 + 3.2
            if not prop_ok(x, sz):
                continue
            mb.box(x, y, sz, 6.2, 0.25, 2.6, "dark_metal")
            mb.box(x, y + 2.6, sz, 6.6, 0.18, 3.0, "glass_dark")
            for s in (-1, 1):
                mb.box(x + s * 2.9, y + 0.25, sz, 0.12, 2.4, 0.12, "dark_metal")
            mb.box(x + 2.6, y + 0.9, sz, 0.7, 1.7, 0.16, "sign_glow")
    # benches in the parks
    for (gx0, gx1, gz0, gz1) in ((PARK["x0"] + 6, PARK["x1"] - 6, PARK["z0"] + 8, PARK["z1"] - 8),
                                 (WASH_SQ["x0"] + 4, WASH_SQ["x1"] - 4, WASH_SQ["z0"] + 4, WASH_SQ["z1"] - 4)):
        n = 40 if (gx1 - gx0) > 200 else 10
        for i in range(n):
            px = rnd(gx0, gx1)
            pz = rnd(gz0, gz1)
            ry = rng.uniform(0, math.tau)
            mb.box(px, GREEN_Y, pz, 2.2, 0.14, 0.55, "pier_wood", ry=ry)
            mb.box(px, GREEN_Y + 0.45, pz, 2.2, 0.5, 0.1, "pier_wood", ry=ry)
    # park boulders
    for i in range(26):
        px = rnd(PARK["x0"] + 8, PARK["x1"] - 8)
        pz = rnd(PARK["z0"] + 8, PARK["z1"] - 8)
        mb.sphere(px, GREEN_Y + 0.2, pz, rnd(0.8, 2.2), "stone_mid", seg=6, rings=3, sy=0.6)
    # manholes on avenues
    for i in range(100):
        ax = pick(AVENUES)
        z = rnd(-2200, 600)
        mx = ax + rnd(-5, 5)
        if not prop_ok(mx, z):
            continue
        mb.cyl(mx, GROUND_Y + 0.04, z, 0.55, 0.55, 0.05, 8, "dark_metal")
    # street trees along avenues (positions only)
    for ax in AVENUES:
        z = -2150
        while z < 580:
            z += rnd(50, 70)
            side = 1 if (int(z / 60) % 2) else -1
            x = ax + side * (AV_W / 2 + 2.6)
            if prop_ok(x, z):
                STREET_TREES.append([round(x, 1), round(z, 1), round(rnd(0.8, 1.15), 2)])


def gen_park_trees(rng):
    for i in range(430):
        px = rnd(PARK["x0"] + 6, PARK["x1"] - 6)
        pz = rnd(PARK["z0"] + 6, PARK["z1"] - 6)
        ramble = (PARK["x0"] + 10 < px < PARK["x0"] + 150 and -1420 < pz < -1300)
        if not ramble and rng.random() < 0.45:
            continue
        if abs(px - (PARK["x0"] + 60)) < 7 and abs(pz + 1200) < 75:
            continue
        if -1585 < pz < -1695 and PARK["x0"] + 35 < px < PARK["x0"] + 205:
            continue
        PARK_TREES.append([round(px, 1), round(pz, 1), round(rnd(0.9, 1.6), 2)])
    for i in range(24):
        PARK_TREES.append([round(rnd(BATTERY["x0"], BATTERY["x1"] - 10), 1),
                           round(rnd(BATTERY["z0"] + 10, BATTERY["z1"] - 6), 1),
                           round(rnd(0.9, 1.5), 2)])
    for i in range(10):
        PARK_TREES.append([round(rnd(WASH_SQ["x0"] + 6, WASH_SQ["x1"] - 6), 1),
                           round(rnd(WASH_SQ["z0"] + 6, WASH_SQ["z1"] - 6), 1),
                           round(rnd(0.9, 1.3), 2)])


# ----------------------------------------------------------------------------
# vehicles + trees

def build_taxi(mb, rng):
    mb.box(0, 0.35, 0, 1.85, 0.62, 4.5, "yellow_taxi")
    mb.box(0, 0.55, -1.5, 1.75, 0.5, 1.2, "yellow_taxi")
    mb.box(0, 1.08, 0.25, 1.68, 0.55, 2.1, "glass_dark")
    mb.box(0, 1.38, 0.25, 1.7, 0.06, 2.1, "yellow_taxi")
    mb.box(0, 0.6, 1.85, 1.75, 0.55, 0.9, "yellow_taxi")
    for x in (-0.95, 0.95):
        for z in (-1.45, 1.45):
            mb.segment((x - 0.15, 0.38, z), (x + 0.15, 0.38, z), 0.4, 8, "dark_metal")
    mb.box(-0.6, 0.72, -2.26, 0.4, 0.16, 0.1, "sign_glow")
    mb.box(0.6, 0.72, -2.26, 0.4, 0.16, 0.1, "sign_glow")
    mb.box(-0.6, 0.78, 2.26, 0.44, 0.14, 0.08, "tl_red")
    mb.box(0.6, 0.78, 2.26, 0.44, 0.14, 0.08, "tl_red")
    mb.box(0, 1.44, 0.25, 0.6, 0.16, 0.3, "sign_glow")


def build_bus(mb, rng):
    mb.box(0, 1.5, 0, 2.5, 2.3, 11.5, "bus_white")
    mb.box(0, 2.05, 0, 2.56, 1.0, 11.0, "glass_dark")
    mb.box(0, 0.9, -0.2, 2.56, 0.5, 11.0, "steel_blue")
    mb.box(0, 1.2, -5.85, 2.4, 1.5, 0.2, "glass_dark")
    for x in (-1.2, 1.2):
        for z in (-3.6, 3.4):
            mb.segment((x - 0.17, 0.5, z), (x + 0.17, 0.5, z), 0.55, 8, "dark_metal")
    mb.box(-0.8, 0.55, -5.78, 0.5, 0.18, 0.1, "sign_glow")
    mb.box(0.8, 0.55, -5.78, 0.5, 0.18, 0.1, "sign_glow")


def build_truck(mb, rng):
    mb.box(0, 1.0, -3.4, 2.3, 2.0, 3.2, "truck_white")
    mb.box(0, 1.9, -3.3, 2.2, 0.7, 2.6, "glass_dark")
    mb.box(0, 1.6, 1.4, 2.45, 3.2, 6.8, "truck_white")
    mb.box(0, 0.35, 0, 2.5, 0.7, 10.4, "dark_metal")
    for x in (-1.25, 1.25):
        for z in (-3.6, 2.6, 3.9):
            mb.segment((x - 0.17, 0.52, z), (x + 0.17, 0.52, z), 0.55, 8, "dark_metal")
    mb.box(-0.8, 0.75, -5.02, 0.4, 0.16, 0.1, "sign_glow")
    mb.box(0.8, 0.75, -5.02, 0.4, 0.16, 0.1, "sign_glow")


def build_ferry(mb, rng):
    mb.box(0, 0.6, 0, 13, 2.2, 58, "ferry_orange")
    mb.box(0, 2.9, 0.5, 11.5, 2.6, 52, "bus_white")
    mb.box(0, 5.5, 0.5, 10, 2.4, 46, "bus_white")
    mb.box(0, 2.9, 0.5, 11.6, 1.0, 52, "glass_dark")
    mb.box(0, 5.5, 0.5, 10.1, 0.9, 46, "glass_dark")
    mb.cyl(0, 8, 2, 1.2, 1.0, 3.4, 6, "ferry_orange")
    mb.box(0, 1.72, -26, 13.1, 0.5, 3, "bus_white")
    mb.box(0, 1.72, 27, 13.1, 0.5, 3, "bus_white")
    mb.box(0, 7.9, -20, 6, 1.2, 1, "glass_dark")


def build_heli(mb, rng):
    mb.sphere(0, 1.6, 0, 1.7, "heli_body", seg=8, rings=4, sy=0.9, sz=1.4)
    mb.cyl(0, 1.7, 2.8, 0.5, 0.28, 4.6, 6, "heli_body")
    mb.box(0, 2.2, 5.6, 0.16, 1.6, 1.0, "heli_body")
    mb.box(0, 1.1, 0, 2.6, 0.1, 4.6, "dark_metal")
    for x in (-1.0, 1.0):
        mb.cyl(x, 0.55, 0.4, 0.08, 0.08, 1.1, 4, "dark_metal", ry=math.pi / 2)
    mb.cyl(0, 3.05, -0.2, 0.14, 0.14, 0.5, 5, "dark_metal")
    mb.box(0, 3.3, -0.2, 12.0, 0.05, 0.5, "heli_rotor")      # main rotor (spun in JS)
    mb.box(0, 3.3, -0.2, 0.5, 0.05, 12.0, "heli_rotor")
    mb.box(0.15, 2.2, 5.6, 2.8, 0.06, 0.16, "heli_rotor")    # tail rotor
    mb.box(0, 1.9, -1.1, 1.2, 0.7, 0.5, "glass_dark")


def build_tree_park(mb, rng):
    mb.cyl(0, 0, 0, 0.5, 0.38, 4.6, 6, "trunk")
    for (dx, dz, s) in ((0, 0, 1.0), (1.6, 0.9, 0.72), (-1.4, 1.1, 0.66), (0.4, -1.5, 0.6)):
        mb.sphere(dx * 2.2, 4.6 + 2.2 * s, dz * 2.2, 2.3 * s, "leaf", seg=7, rings=4, sy=0.85)
    mb.sphere(0.3, 8.4, -0.3, 1.6, "leaf_light", seg=6, rings=3)


def build_tree_street(mb, rng):
    mb.cyl(0, 0, 0, 0.28, 0.2, 3.6, 5, "trunk")
    mb.sphere(0, 4.6, 0, 1.9, "leaf", seg=6, rings=3, sy=0.8)
    mb.sphere(0.9, 5.4, 0.5, 1.2, "leaf_light", seg=5, rings=3, sy=0.8)


# ----------------------------------------------------------------------------
# export

def export_chunk(name, objs):
    if not objs:
        raise RuntimeError(f"nothing to export for {name}")
    bpy.ops.object.select_all(action="DESELECT")
    for o in objs:
        o.select_set(True)
    bpy.context.view_layer.objects.active = objs[0]
    path = os.path.join(OUT, name)
    bpy.ops.export_scene.gltf(filepath=path, export_format="GLB", use_selection=True,
                              export_apply=False, export_yup=True)
    tris = sum(len(o.data.polygons) for o in objs)
    print(f"  {name}: {tris} faces, {os.path.getsize(path)} bytes")


def render_preview(cam_game, target_game, path, night=False):
    scene = bpy.context.scene
    scene.render.engine = "CYCLES"
    scene.cycles.samples = 40
    scene.cycles.use_denoising = True
    scene.render.resolution_x = 960
    scene.render.resolution_y = 540
    cam_data = bpy.data.cameras.new("pv")
    cam_data.clip_start = 0.5
    cam_data.clip_end = 6000
    cam = bpy.data.objects.new("pv", cam_data)
    bpy.context.scene.collection.objects.link(cam)
    cam.location = (cam_game[0], -cam_game[2], cam_game[1])
    target = Vector((target_game[0], -target_game[2], target_game[1]))
    d = target - cam.location
    cam.rotation_euler = d.to_track_quat("-Z", "Y").to_euler()
    scene.camera = cam
    sun = bpy.data.objects.get("pv_sun")
    if sun:
        sun.data.energy = 0.0 if night else 4.0
    world = bpy.data.worlds.get("pv_world")
    if world:
        bg = world.node_tree.nodes.get("Background")
        if bg:
            bg.inputs[0].default_value = (0.008, 0.01, 0.02, 1.0) if night else (0.45, 0.6, 0.8, 1.0)
            bg.inputs[1].default_value = 1.0
    scene.render.filepath = path
    bpy.ops.render.render(write_still=True)


def main():
    print("== Wander NYC build ==")
    build_materials()
    rng = random.Random(20261114)
    streets = compute_streets()

    chunks = {}
    def mb_for(name):
        mb = MB()
        chunks[name] = mb
        return mb

    print("ground...")
    gen_ground(mb_for("city_ground"), rng, streets)
    print("blocks...")
    gen_blocks(mb_for("city_blocks"), rng)
    print("landmarks...")
    gen_landmarks(mb_for("city_landmarks"), rng)
    print("bridges...")
    gen_bridges(mb_for("city_bridges"), rng)
    print("backdrop...")
    gen_backdrop(mb_for("city_backdrop"), rng)
    print("props...")
    gen_props(mb_for("city_props"), rng, streets)
    gen_park_trees(rng)

    print("materialising meshes...")
    for name, mb in chunks.items():
        mb._objs = mb.to_bpy(name)

    print("vehicles + trees...")
    extras = [
        ("city_taxi.glb", build_taxi), ("city_bus.glb", build_bus),
        ("city_truck.glb", build_truck), ("city_ferry.glb", build_ferry),
        ("city_heli.glb", build_heli), ("tree_park.glb", build_tree_park),
        ("tree_street.glb", build_tree_street),
    ]
    for (fname, fn) in extras:
        mb = MB()
        fn(mb, random.Random(7))
        mb._objs = mb.to_bpy(fname.replace(".glb", ""))
        export_chunk(fname, mb._objs)

    for name, mb in chunks.items():
        export_chunk(name + ".glb", mb._objs)

    # ---- layout json ----
    layout = {
        "rot": CITY_ROT,
        "ground": {"y": GROUND_Y, "sidewalk": SIDEWALK_Y, "green": GREEN_Y},
        "island": ISLAND_POLY,
        "avenues": [{"x": ax, "w": AV_W, "z0": -2290, "z1": 660, "runs": avenue_runs(ax)}
                    for ax in AVENUES],
        "streets": streets,
        "broadway": broadway_runs(),
        "bridges": [
            {"p0": list(BRIDGE_BROOKLYN["p0"]), "p1": list(BRIDGE_BROOKLYN["p1"]), "deck": BRIDGE_BROOKLYN["deck"]},
            {"p0": list(BRIDGE_MANHATTAN["p0"]), "p1": list(BRIDGE_MANHATTAN["p1"]), "deck": BRIDGE_MANHATTAN["deck"]},
        ],
        "park": PARK, "washsq": WASH_SQ, "battery": BATTERY,
        "buildings": BUILDINGS,
        "lamps": LAMPS,
        "street_trees": STREET_TREES,
        "park_trees": PARK_TREES,
        "gate": GATE,
        "screens": [
            {"x": TIMES_SQ["x0"] + 12, "z": TIMES_SQ["z0"] + 2.8, "y": 14, "w": 22, "h": 10, "ry": math.pi, "kind": 0},
            {"x": TIMES_SQ["x1"] - 10, "z": TIMES_SQ["z0"] + 6.0, "y": 18, "w": 19, "h": 9, "ry": math.pi, "kind": 1},
            {"x": TIMES_SQ["x0"] + 14, "z": TIMES_SQ["z1"] - 6.0, "y": 10, "w": 20, "h": 8, "ry": 0.0, "kind": 2},
            {"x": TIMES_SQ["x1"] - 12, "z": TIMES_SQ["z1"] - 9.1, "y": 26, "w": 16, "h": 12, "ry": 0.0, "kind": 0},
            {"x": TIMES_SQ["x0"] + 12, "z": TIMES_SQ["z0"] + 25, "y": 31, "w": 18, "h": 8, "ry": math.pi - 0.3, "kind": 1},
            {"x": -52, "z": -470, "y": 40, "w": 14, "h": 22, "ry": math.pi, "kind": 2},
            {"x": -64, "z": -700, "y": 34, "w": 16, "h": 18, "ry": math.pi, "kind": 0},
        ],
        "ferry": {"cx": -120, "cz": 980, "rx": 330, "rz": 190, "y": 0.4},
        "helis": [
            {"r": 420, "h": 170, "w": 0.09, "ph": 0.0},
            {"r": 560, "h": 230, "w": -0.07, "ph": 2.1},
            {"r": 700, "h": 140, "w": 0.06, "ph": 4.4},
        ],
        "sites": [
            {"type": "cityTower", "x": ESB["x"], "z": ESB["z"], "r": 90,
             "name": "Empire State", "flavor": "Deco ambition at 381 meters, still the boss of the skyline."},
            {"type": "park", "x": PARK["x0"] + 60, "z": -1240, "r": 90,
             "name": "Central Park", "flavor": "Green acres nobody was allowed to build on. Smart decision."},
            {"type": "monument", "x": STATUE_ISLET[0], "z": STATUE_ISLET[1], "r": 90,
             "name": "Statue of Liberty", "flavor": "Copper gone green, torch still raised. She has seen everything."},
            {"type": "neon", "x": -50, "z": -625, "r": 80,
             "name": "Times Square", "flavor": "Screens stacked on screens; the night never really lands here."},
        ],
    }
    path = os.path.join(OUT, "city_layout.json")
    with open(path, "w") as f:
        json.dump(layout, f, separators=(",", ":"))
    print(f"  city_layout.json: {os.path.getsize(path)} bytes, {len(BUILDINGS)} AABBs")
    print(f"  buildings by kind: {KIND_COUNTS}")

    # ---- previews ----
    if os.environ.get("CITY_PREVIEW", "1") == "1":
        print("previews...")
        sun_data = bpy.data.lights.new("pv_sun", "SUN")
        sun_data.energy = 4.0
        sun_data.angle = 0.2
        sun = bpy.data.objects.new("pv_sun", sun_data)
        bpy.context.scene.collection.objects.link(sun)
        sun.rotation_euler = (math.radians(55), 0, math.radians(-35))
        world = bpy.data.worlds.new("pv_world")
        world.use_nodes = True
        world.node_tree.nodes["Background"].inputs[0].default_value = (0.45, 0.6, 0.8, 1.0)
        world.node_tree.nodes["Background"].inputs[1].default_value = 0.8
        bpy.context.scene.world = world
        render_preview((900, 900, -1500), (0, 0, -400), os.path.join(TEXDIR, "prev_aerial.png"))
        render_preview((-80, 3.7, -500), (-55, 30, -630), os.path.join(TEXDIR, "prev_times.png"))
        render_preview((2, 3.7, -360), (28, 110, -452), os.path.join(TEXDIR, "prev_esb.png"))
        render_preview((250, 60, 900), (-560, 60, 1060), os.path.join(TEXDIR, "prev_statue.png"))
        render_preview((-350, 120, -1400), (-20, 60, -1400), os.path.join(TEXDIR, "prev_park.png"))
        render_preview((260, 60, 520), (450, 25, 850), os.path.join(TEXDIR, "prev_bridge.png"))
        render_preview((-80, 3.7, -500), (-55, 30, -630), os.path.join(TEXDIR, "prev_times_night.png"), night=True)
    print("done.")


main()
