#!/usr/bin/env python3
"""New York's traffic, remodelled: car, taxi, bus and truck with bevelled bodies,
glass bands, wheels with hubs and arches, mirrors, grilles and glowing lamps.

Usage:
  /Applications/Blender.app/Contents/MacOS/Blender --background \
      --python tools/build_vehicles.py [-- --preview]

Writes public/assets/car.glb and public/assets/city/city_{taxi,bus,truck}.glb. One mesh per
material, bodies first (the engine lets the first two parts cast shadows), with the same
material names the engine already looks for (car_body is tinted per car; sign_glow, tl_red,
car_head, car_tail glow). Coordinates are three.js's (Y up); fronts point where the old
models' did: the car's +Z, the taxi / bus / truck's -Z.
"""
import math
import os
import sys

import bpy

sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), "lib"))
import wander_bpy as wb  # noqa: E402

CITY = os.path.join(wb.OUT, "city")
os.makedirs(CITY, exist_ok=True)

M = {}
BODY_MATS = ("car_body", "yellow_taxi", "bus_white", "steel_blue", "truck_white")


def mats(**kw):
    M.clear()
    for name, spec in kw.items():
        M[name] = wb.mat(name, *spec[:1], **(spec[1] if len(spec) > 1 else {}))


def B(name, c, size, m, rot=(0, 0, 0)):
    """Box from three.js coordinates: centre (x,y,z), size (w,h,l)."""
    return wb.box(name, (size[0], size[2], size[1]), (c[0], -c[2], c[1]), M[m], rot=rot)


def wheel(x, y, z, r=0.42, w=0.3, tyre="dark_metal", hub="steel"):
    """A tyre and a hub cap; axis along X."""
    wb.cyl("tyre", r, r, w, 10, (x, -z, y), M[tyre], rot=(0, math.pi / 2, 0))
    side = 1 if x > 0 else -1
    wb.cyl("hub", r * 0.55, r * 0.5, 0.04, 8, (x + side * (w / 2 + 0.005), -z, y), M[hub], rot=(0, math.pi / 2, 0))


def arch(x, y, z, r=0.5, w=0.08):
    side = 1 if x > 0 else -1
    wb.cyl("arch", r, r, w, 10, (x + side * 0.02, -z, y), M["arch"], rot=(0, math.pi / 2, 0))


def glow_box(name, c, size, m):
    return B(name, c, size, m)


def finish(label, path, order):
    """Join by material (bodies first), bevel the solid parts, export."""
    groups = {}
    for o in [o for o in bpy.context.scene.objects if o.type == "MESH"]:
        groups.setdefault(o.data.materials[0].name, []).append(o)
    outs = []
    for mname in order:
        objs = groups.get(mname)
        if not objs:
            continue
        ob = wb.join_all(f"{label}_{mname}", objs)
        if mname in BODY_MATS:  # tyres, hubs and glass stay sharp: bevelling them tripled the triangle count
            wb.bevel(ob, 0.04, 1, 38)
        wb.smooth_by_angle(ob, 42)
        outs.append(ob)
    wb.export_glb(path, outs, apply_mods=False)
    return outs


# --------------------------------------------------------------------- car ----

def car():
    mats(car_body=(0xb0b6bd, {"rough": 0.4, "metallic": 0.2}), car_glass=(0x16212a, {"rough": 0.1}),
         car_dark=(0x14161a, {"rough": 0.7}), car_head=(0xfff2c0, {"emit": 0xfff2c0, "strength": 3.5}),
         car_tail=(0xff3b30, {"emit": 0xff3b30, "strength": 2.5}), steel=(0x9aa3ab, {"rough": 0.3, "metallic": 0.6}),
         arch=(0x0b0c0e, {}))
    # (front is +Z here)
    B("lower", (0, 0.62, 0), (1.9, 0.62, 4.4), "car_body")
    B("hood", (0, 0.98, 1.45), (1.78, 0.14, 1.3), "car_body", rot=(0.06, 0, 0))
    B("trunk", (0, 0.98, -1.55), (1.78, 0.14, 1.0), "car_body", rot=(-0.05, 0, 0))
    B("roof", (0, 1.46, -0.1), (1.62, 0.07, 1.5), "car_body")
    # glass cabin: tapered greenhouse
    B("glass_lo", (0, 1.2, -0.05), (1.74, 0.5, 2.15), "car_glass")
    B("pillar_f", (0, 1.22, 0.95), (1.7, 0.45, 0.07), "car_body", rot=(0.55, 0, 0))
    B("pillar_r", (0, 1.22, -1.05), (1.7, 0.45, 0.07), "car_body", rot=(-0.55, 0, 0))
    B("sill", (0, 0.88, 0), (1.94, 0.08, 3.3), "car_dark")
    B("bumper_f", (0, 0.42, 2.2), (1.96, 0.34, 0.26), "car_dark")
    B("bumper_r", (0, 0.42, -2.2), (1.96, 0.34, 0.26), "car_dark")
    B("grille", (0, 0.66, 2.21), (0.9, 0.2, 0.06), "car_dark")
    for s in (-1, 1):
        B(f"mirror{s}", (s * 1.0, 1.05, 0.7), (0.16, 0.1, 0.2), "car_body")
        B(f"head{s}", (s * 0.62, 0.8, 2.19), (0.42, 0.16, 0.08), "car_head")
        B(f"tail{s}", (s * 0.64, 0.86, -2.2), (0.46, 0.14, 0.08), "car_tail")
        B(f"seam{s}", (s * 0.96, 0.7, 0), (0.02, 0.5, 0.03), "car_dark")
        for z in (-1.4, 1.4):
            arch(s * 0.93, 0.42, z, 0.5)
            wheel(s * 0.95, 0.4, z, 0.4, 0.28, tyre="car_dark")
    finish("car", os.path.join(wb.OUT, "car.glb"), ["car_body", "car_glass", "car_dark", "steel", "arch", "car_head", "car_tail"])


# -------------------------------------------------------------------- taxi ----

def taxi():
    mats(yellow_taxi=(0xf2b134, {"rough": 0.45, "metallic": 0.15}), dark_metal=(0x1a1c20, {"rough": 0.7}),
         glass_dark=(0x1c2a33, {"rough": 0.1}), sign_glow=(0xfff2cf, {"emit": 0xfff2cf, "strength": 3.5}),
         tl_red=(0xff4038, {"emit": 0xff4038, "strength": 2.5}), steel=(0xaab2b9, {"rough": 0.3, "metallic": 0.6}),
         arch=(0x0b0c0e, {}), check=(0x15161a, {}))
    # (front is -Z)
    B("lower", (0, 0.55, 0), (1.85, 0.7, 4.5), "yellow_taxi")
    B("hood", (0, 0.92, -1.5), (1.74, 0.14, 1.25), "yellow_taxi", rot=(-0.05, 0, 0))
    B("trunk", (0, 0.92, 1.6), (1.74, 0.14, 0.95), "yellow_taxi", rot=(0.05, 0, 0))
    B("glass", (0, 1.12, 0.25), (1.7, 0.5, 2.15), "glass_dark")
    B("roof", (0, 1.4, 0.25), (1.66, 0.07, 2.0), "yellow_taxi")
    B("pillar_f", (0, 1.14, -0.85), (1.7, 0.45, 0.07), "yellow_taxi", rot=(-0.55, 0, 0))
    B("pillar_r", (0, 1.14, 1.35), (1.7, 0.45, 0.07), "yellow_taxi", rot=(0.55, 0, 0))
    B("sill", (0, 0.86, 0.1), (1.9, 0.08, 3.3), "dark_metal")
    B("check", (0, 0.66, 0.1), (1.9, 0.07, 4.4), "check")           # the checker band
    B("bumper_f", (0, 0.4, -2.28), (1.9, 0.3, 0.24), "dark_metal")
    B("bumper_r", (0, 0.4, 2.28), (1.9, 0.3, 0.24), "dark_metal")
    B("grille", (0, 0.62, -2.27), (0.8, 0.18, 0.06), "dark_metal")
    B("roof_sign", (0, 1.52, 0.25), (0.62, 0.18, 0.32), "sign_glow")
    for s in (-1, 1):
        B(f"head{s}", (s * 0.62, 0.72, -2.26), (0.42, 0.16, 0.1), "sign_glow")
        B(f"tail{s}", (s * 0.62, 0.78, 2.27), (0.44, 0.14, 0.08), "tl_red")
        B(f"mirror{s}", (s * 1.0, 0.98, -0.75), (0.16, 0.1, 0.2), "yellow_taxi")
        B(f"seam{s}", (s * 0.93, 0.66, 0.1), (0.02, 0.55, 0.03), "dark_metal")
        for z in (-1.45, 1.45):
            arch(s * 0.93, 0.42, z, 0.5)
            wheel(s * 0.95, 0.4, z, 0.4, 0.28)
    finish("city_taxi", os.path.join(CITY, "city_taxi.glb"),
           ["yellow_taxi", "dark_metal", "glass_dark", "steel", "arch", "check", "sign_glow", "tl_red"])


# --------------------------------------------------------------------- bus ----

def bus():
    mats(bus_white=(0xe6e8ea, {"rough": 0.5}), steel_blue=(0x2c5b8a, {"rough": 0.5}),
         glass_dark=(0x1a2832, {"rough": 0.1}), dark_metal=(0x1a1c20, {"rough": 0.7}),
         sign_glow=(0xfff2cf, {"emit": 0xfff2cf, "strength": 3.0}), steel=(0xaab2b9, {"rough": 0.3, "metallic": 0.6}),
         arch=(0x0b0c0e, {}), tl_red=(0xff4038, {"emit": 0xff4038, "strength": 2.5}))
    # (front is -Z)
    B("body", (0, 1.7, 0), (2.5, 2.4, 11.5), "bus_white")
    B("skirt", (0, 0.85, -0.1), (2.54, 0.55, 11.1), "steel_blue")
    B("roofline", (0, 2.95, 0), (2.4, 0.12, 11.3), "steel_blue")
    # window band, split into panes by pillars
    for k in range(9):
        z = -4.6 + k * 1.15
        for s in (-1, 1):
            B(f"pane{k}{s}", (s * 1.27, 2.05, z), (0.04, 0.95, 1.0), "glass_dark")
    B("windscreen", (0, 1.95, -5.8), (2.3, 1.2, 0.06), "glass_dark", rot=(0.12, 0, 0))
    B("rear_glass", (0, 2.1, 5.78), (2.0, 0.8, 0.06), "glass_dark")
    # doors on the +X side near the front, dark glass with a steel frame
    B("door_hole", (1.27, 1.5, -3.8), (0.05, 2.0, 1.3), "glass_dark")
    B("door_hole2", (1.27, 1.5, 0.5), (0.05, 2.0, 1.3), "glass_dark")
    B("bumper_f", (0, 0.55, -5.82), (2.5, 0.35, 0.28), "dark_metal")
    B("bumper_r", (0, 0.55, 5.82), (2.5, 0.35, 0.28), "dark_metal")
    B("dest_sign", (0, 3.0, -5.78), (1.8, 0.28, 0.06), "sign_glow")
    B("ac", (0, 3.15, 1.2), (1.6, 0.3, 2.6), "bus_white")
    for s in (-1, 1):
        B(f"head{s}", (s * 0.85, 0.72, -5.84), (0.5, 0.2, 0.08), "sign_glow")
        B(f"tail{s}", (s * 0.85, 0.82, 5.84), (0.5, 0.2, 0.08), "tl_red")
        B(f"mirror{s}", (s * 1.45, 2.3, -5.3), (0.14, 0.5, 0.22), "dark_metal")
        for z in (-3.6, 3.4):
            arch(s * 1.26, 0.55, z, 0.62, 0.1)
            wheel(s * 1.2, 0.5, z, 0.52, 0.34)
    finish("city_bus", os.path.join(CITY, "city_bus.glb"),
           ["bus_white", "steel_blue", "glass_dark", "dark_metal", "steel", "arch", "sign_glow", "tl_red"])


# ------------------------------------------------------------------- truck ----

def truck():
    mats(truck_white=(0xe8e6e0, {"rough": 0.55}), dark_metal=(0x1a1c20, {"rough": 0.7}),
         glass_dark=(0x1a2832, {"rough": 0.1}), sign_glow=(0xfff2cf, {"emit": 0xfff2cf, "strength": 3.0}),
         tl_red=(0xff4038, {"emit": 0xff4038, "strength": 2.5}), steel=(0xaab2b9, {"rough": 0.3, "metallic": 0.6}),
         arch=(0x0b0c0e, {}), stripe=(0xc8452e, {"rough": 0.5}))
    # (front is -Z)
    B("cab", (0, 1.15, -3.4), (2.3, 2.1, 3.0), "truck_white")
    B("cab_roof", (0, 2.3, -3.1), (2.2, 0.15, 2.4), "truck_white")
    B("windscreen", (0, 1.95, -4.88), (2.0, 0.85, 0.06), "glass_dark", rot=(0.15, 0, 0))
    B("box", (0, 2.4, 1.6), (2.45, 3.4, 6.8), "truck_white")
    for k in range(7):
        B(f"rib{k}", (0, 2.4, -1.4 + k * 1.0), (2.5, 3.42, 0.05), "steel")
    B("stripe", (0, 1.25, 1.6), (2.5, 0.16, 6.8), "stripe")
    B("chassis", (0, 0.45, 0), (2.4, 0.5, 10.4), "dark_metal")
    B("bumper_f", (0, 0.55, -5.1), (2.5, 0.35, 0.26), "dark_metal")
    B("grille", (0, 1.0, -4.93), (1.4, 0.5, 0.06), "dark_metal")
    for s in (-1, 1):
        B(f"side_win{s}", (s * 1.16, 1.85, -3.7), (0.05, 0.75, 1.3), "glass_dark")
        B(f"head{s}", (s * 0.85, 0.78, -5.09), (0.42, 0.2, 0.1), "sign_glow")
        B(f"tail{s}", (s * 0.95, 0.8, 5.0), (0.3, 0.2, 0.06), "tl_red")
        B(f"mirror{s}", (s * 1.4, 1.7, -4.4), (0.14, 0.6, 0.2), "dark_metal")
        B(f"flap{s}", (s * 1.1, 0.4, 4.4), (0.02, 0.5, 0.45), "dark_metal")
        for z in (-3.6, 2.6, 3.9):
            arch(s * 1.26, 0.55, z, 0.62, 0.1)
            wheel(s * 1.22, 0.52, z, 0.52, 0.34)
    finish("city_truck", os.path.join(CITY, "city_truck.glb"),
           ["truck_white", "dark_metal", "glass_dark", "steel", "stripe", "arch", "sign_glow", "tl_red"])


for fn in (car, taxi, bus, truck):
    wb.reset()
    fn()
if "--preview" in sys.argv:
    wb.contact_sheet([(os.path.join(wb.OUT, "car.glb"), "car"), (os.path.join(CITY, "city_taxi.glb"), "taxi"),
                      (os.path.join(CITY, "city_bus.glb"), "bus"), (os.path.join(CITY, "city_truck.glb"), "truck")],
                     os.path.join(wb.PREVIEW, "vehicles.png"), cell=14, cols=4, height=5, res=(1800, 700))
print("Vehicles generated OK")
