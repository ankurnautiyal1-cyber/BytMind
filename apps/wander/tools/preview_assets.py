#!/usr/bin/env python3
"""Render a contact sheet of the generated assets for a quick visual check.

Usage:
  /Applications/Blender.app/Contents/MacOS/Blender --background \
      --python tools/preview_assets.py
Writes public/assets/_preview.png.
"""

import math
import os

import bpy

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.normpath(os.path.join(HERE, "..", "public", "assets"))

NAMES = ["ruin_tower.glb", "lighthouse.glb", "windmill_body.glb",
         "windmill_blades.glb", "stone_arch.glb", "shipwreck.glb",
         "tent.glb", "campfire.glb", "monolith.glb", "shrine_pedestal.glb"]

# clean scene
bpy.ops.object.select_all(action="SELECT")
bpy.ops.object.delete()

for i, name in enumerate(NAMES):
    bpy.ops.import_scene.gltf(filepath=os.path.join(OUT, name))
    root = bpy.context.selected_objects[0]
    root.location = ((i % 5) * 26 - 52, (i // 5) * -30, 0)
    label = name.replace(".glb", "")
    root.name = label

# ground
bpy.ops.mesh.primitive_plane_add(size=400, location=(0, -15, 0))
bpy.context.active_object.name = "ground"
ground_mat = bpy.data.materials.new("ground")
ground_mat.diffuse_color = (0.32, 0.42, 0.3, 1)
bpy.context.active_object.data.materials.append(ground_mat)

# camera looking at the grid, slightly elevated
cam_data = bpy.data.cameras.new("cam")
cam = bpy.data.objects.new("cam", cam_data)
bpy.context.scene.collection.objects.link(cam)
cam.location = (0, 55, 38)
cam.rotation_euler = (math.radians(72), 0, 0)
cam_data.lens = 50
bpy.context.scene.camera = cam

# sun + sky
sun_data = bpy.data.lights.new("sun", "SUN")
sun_data.energy = 3
sun = bpy.data.objects.new("sun", sun_data)
bpy.context.scene.collection.objects.link(sun)
sun.rotation_euler = (math.radians(50), math.radians(15), math.radians(30))

scene = bpy.context.scene
scene.render.engine = "BLENDER_EEVEE"
scene.render.resolution_x = 1600
scene.render.resolution_y = 700
scene.render.filepath = os.path.join(OUT, "_preview.png")
scene.render.image_settings.file_format = "PNG"
bpy.ops.render.render(write_still=True)
print("preview written:", scene.render.filepath)
