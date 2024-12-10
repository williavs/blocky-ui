#!/bin/bash

# Function to add export to interface/type declarations
add_export_to_interfaces() {
  file=$1
  # Add 'export' before 'interface' or 'type' if not already present
  sed -i '' 's/^interface/export interface/g' "$file"
  sed -i '' 's/^type/export type/g' "$file"
}

# Process all component files
for file in src/components/*.tsx; do
  echo "Processing $file..."
  add_export_to_interfaces "$file"
done

echo "Done updating component exports!" 