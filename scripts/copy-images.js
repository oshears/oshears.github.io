import fs from 'fs';
import path from 'path';

const contentImagesPath = 'src/content/images';
const publicImagesPath = 'public/content';

// Image file extensions to copy
const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.svg', '.webp'];

// Create public/content directory if it doesn't exist
if (!fs.existsSync(publicImagesPath)) {
    fs.mkdirSync(publicImagesPath, { recursive: true });
}

// Copy images function
function copyImages() {
    if (!fs.existsSync(contentImagesPath)) {
        console.log('No content/images directory found, skipping image copy');
        return;
    }

    console.log(`Copying images from ${contentImagesPath} to ${publicImagesPath}`);

    const files = fs.readdirSync(contentImagesPath);
    let copiedCount = 0;

    files.forEach(file => {
        const filePath = path.join(contentImagesPath, file);
        const stat = fs.statSync(filePath);

        if (stat.isFile()) {
            const ext = path.extname(file).toLowerCase();
            if (imageExtensions.includes(ext)) {
                const destPath = path.join(publicImagesPath, file);
                fs.copyFileSync(filePath, destPath);
                copiedCount++;
            }
        }
    });

    console.log(`Successfully copied ${copiedCount} image files`);
}

// Run the copy function
copyImages();
