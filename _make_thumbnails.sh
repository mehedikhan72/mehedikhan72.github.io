#!/bin/bash
# Regenerates 320px-wide thumbnails in tn/ from assets/img and assets/blog.
# Requires cwebp (brew install webp) or sips.
set -e
mkdir -p tn/img tn/blog

for f in assets/img/*.webp; do
  name=$(basename "$f")
  cwebp -q 80 -resize 320 0 "$f" -o "tn/img/$name" >/dev/null 2>&1
done

for f in assets/blog/*.webp; do
  name=$(basename "$f")
  cwebp -q 80 -resize 320 0 "$f" -o "tn/blog/$name" >/dev/null 2>&1
done

echo "Thumbnails regenerated in tn/"
