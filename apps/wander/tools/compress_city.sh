#!/usr/bin/env bash
# Compress the heavy city GLBs (geometry only) with meshopt + 16-bit position
# quantization: ~17 MB -> ~4 MB. Run after tools/build_city.py regenerates them.
#   tools/compress_city.sh
# src/city.js loads them with the meshopt decoder. Originals are kept in
# tools/city_build/raw/.
set -euo pipefail
cd "$(dirname "$0")/.."
mkdir -p tools/city_build/raw
for f in city_blocks city_ground city_props city_landmarks; do
  src="public/assets/city/$f.glb"
  cp "$src" "tools/city_build/raw/$f.glb"
  npx --yes @gltf-transform/cli meshopt "tools/city_build/raw/$f.glb" "$src" --level medium --quantize-position 16
done
