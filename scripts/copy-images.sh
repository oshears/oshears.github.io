#!/bin/bash

# Cross-platform script to copy images from content folder to public folder
CONTENT_IMAGES_PATH="src/content/images"
PUBLIC_IMAGES_PATH="public/content"

# Create public/content directory if it doesn't exist
mkdir -p "$PUBLIC_IMAGES_PATH"

# Copy all image files from content/images to public/content
if [ -d "$CONTENT_IMAGES_PATH" ]; then
    echo "Copying images from $CONTENT_IMAGES_PATH to $PUBLIC_IMAGES_PATH"
    
    # Find and copy image files (case-insensitive)
    find "$CONTENT_IMAGES_PATH" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.gif" -o -iname "*.svg" -o -iname "*.webp" \) -exec cp {} "$PUBLIC_IMAGES_PATH/" \;
    
    echo "Images copied successfully"
else
    echo "No content/images directory found, skipping image copy"
fi
