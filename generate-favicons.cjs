const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

function createIco(pngBuffers) {
  const count = pngBuffers.length;
  const headerSize = 6;
  const entrySize = 16;
  let offset = headerSize + entrySize * count;

  const header = Buffer.alloc(headerSize);
  header.writeUInt16LE(0, 0); // Reserved
  header.writeUInt16LE(1, 2); // Image type (1 = ICO)
  header.writeUInt16LE(count, 4); // Number of images

  const entries = [];
  const imageDatas = [];

  for (const item of pngBuffers) {
    const entry = Buffer.alloc(entrySize);
    entry.writeUInt8(item.width >= 256 ? 0 : item.width, 0);
    entry.writeUInt8(item.height >= 256 ? 0 : item.height, 1);
    entry.writeUInt8(0, 2); // Color palette
    entry.writeUInt8(0, 3); // Reserved
    entry.writeUInt16LE(1, 4); // Color planes
    entry.writeUInt16LE(32, 6); // Bits per pixel
    entry.writeUInt32LE(item.buffer.length, 8); // Size of image data
    entry.writeUInt32LE(offset, 12); // Offset to image data

    offset += item.buffer.length;
    entries.push(entry);
    imageDatas.push(item.buffer);
  }

  return Buffer.concat([header, ...entries, ...imageDatas]);
}

async function generate() {
  const svgPath = path.join(__dirname, 'public', 'favicon.svg');
  const svgContent = fs.readFileSync(svgPath);

  console.log('Rendering raster favicons from SVG with sharp...');

  const sizes = [
    { name: 'favicon-16x16.png', size: 16 },
    { name: 'favicon-32x32.png', size: 32 },
    { name: 'favicon-48x48.png', size: 48 },
    { name: 'apple-touch-icon.png', size: 180 },
    { name: 'android-chrome-192x192.png', size: 192 },
    { name: 'android-chrome-512x512.png', size: 512 },
    { name: 'favicon.png', size: 512 }
  ];

  const generatedBuffers = {};

  for (const s of sizes) {
    const buf = await sharp(svgContent, { density: 300 })
      .resize(s.size, s.size)
      .png()
      .toBuffer();
    generatedBuffers[s.name] = buf;
  }

  // Build ICO containing 16x16, 32x32, 48x48
  const icoBuffer = createIco([
    { width: 16, height: 16, buffer: generatedBuffers['favicon-16x16.png'] },
    { width: 32, height: 32, buffer: generatedBuffers['favicon-32x32.png'] },
    { width: 48, height: 48, buffer: generatedBuffers['favicon-48x48.png'] }
  ]);

  const manifest = {
    name: "Vírtuose Art Decor",
    short_name: "Vírtuose",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png"
      }
    ],
    theme_color: "#E8E0D3",
    background_color: "#f7f4ed",
    display: "standalone"
  };

  const targets = [
    path.join(__dirname, 'public'),
    path.join(__dirname, 'dist'),
    path.join(__dirname)
  ];

  for (const dir of targets) {
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    // Write ICO
    fs.writeFileSync(path.join(dir, 'favicon.ico'), icoBuffer);

    // Write PNGs
    for (const s of sizes) {
      fs.writeFileSync(path.join(dir, s.name), generatedBuffers[s.name]);
    }

    // Write SVG (if in root)
    if (dir === __dirname) {
      fs.writeFileSync(path.join(dir, 'favicon.svg'), svgContent);
    }

    // Write webmanifest
    fs.writeFileSync(path.join(dir, 'site.webmanifest'), JSON.stringify(manifest, null, 2));
    console.log(`Saved favicons to: ${dir}`);
  }

  // Clean up temporary test file
  if (fs.existsSync(path.join(__dirname, 'test-favicon.png'))) {
    fs.unlinkSync(path.join(__dirname, 'test-favicon.png'));
  }
  if (fs.existsSync(path.join(__dirname, 'generate-favicons.js'))) {
    fs.unlinkSync(path.join(__dirname, 'generate-favicons.js'));
  }

  console.log('Favicon generation completed successfully!');
}

generate().catch(console.error);
