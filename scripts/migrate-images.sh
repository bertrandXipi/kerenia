#!/bin/bash

# Configuration
# SOURCE_DIR is public/images/
SOURCE_DIR="public/images"
TARGET_DIR="public/images/remote"
mkdir -p "$TARGET_DIR"

# Mapping: local_src;target_name
images=(
  "piscine-kerenia.jpg;piscine-kerenia"
  "villa-arnaga.jpg;villa-arnaga"
  "logo-thermes.jpg;logo-thermes"
  "studio-kerenia.jpg;studio-cosy"
  "standard-kerenia.jpg;appartement-lumineux"
  "confort-kerenia.jpg;salon-confort"
  "appartement3-kerenia.jpg;appartement3"
  "pas-de-roland.jpg;pas-de-roland"
  "la-rhune.jpg;la-rhune"
  "thermes-cambo.jpg;thermes-cambo"
)

for item in "${images[@]}"; do
  src="${item%;*}"
  name="${item#*;}"
  src_file="$SOURCE_DIR/$src"
  final_file="$TARGET_DIR/$name.webp"
  
  if [ -f "$src_file" ]; then
    echo "Converting $src -> $name.webp..."
    cwebp -q 80 "$src_file" -o "$final_file"
    echo "Done: $final_file"
  else
    echo "Error: Source file not found: $src_file"
  fi
done

echo "Migration complete."
