#!/usr/bin/env pwsh

# Copy images from content folder to public folder
$contentImagesPath = "src/content/images"
$publicImagesPath = "public/content"

# Create public/content directory if it doesn't exist
if (!(Test-Path $publicImagesPath)) {
    New-Item -ItemType Directory -Path $publicImagesPath -Force
}

# Copy all image files from content/images to public/content
if (Test-Path $contentImagesPath) {
    Write-Host "Copying images from $contentImagesPath to $publicImagesPath"
    Copy-Item -Path "$contentImagesPath/*" -Destination $publicImagesPath -Recurse -Force -Include *.jpg,*.jpeg,*.png,*.gif,*.svg,*.webp
    Write-Host "Images copied successfully"
} else {
    Write-Host "No content/images directory found, skipping image copy"
}
