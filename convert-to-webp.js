import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const imagesDir = path.resolve('public/images');
const files = fs.readdirSync(imagesDir);

console.log('Converting images to Ultra-High Quality WebP...');

for (const file of files) {
  if (file.endsWith('.png')) {
    const inputPath = path.join(imagesDir, file);
    const outputPath = path.join(imagesDir, file.replace('.png', '.webp'));

    sharp(inputPath)
      .webp({ quality: 95, effort: 6 })
      .toFile(outputPath)
      .then((info) => {
        console.log(`Converted ${file} -> ${path.basename(outputPath)} (${info.size} bytes)`);
      })
      .catch((err) => {
        console.error(`Error converting ${file}:`, err);
      });
  }
}
