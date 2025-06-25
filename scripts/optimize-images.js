import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const INPUT_DIR = path.join(path.dirname(new URL(import.meta.url).pathname), '../public/images');
const OUTPUT_DIR = path.join(path.dirname(new URL(import.meta.url).pathname), '../public/optimized-images');
const MAX_WIDTH = 1280;
const QUALITY = 80;
const SUPPORTED_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp'];

function ensureDirSync(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function getAllImages(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllImages(filePath));
    } else if (SUPPORTED_EXTENSIONS.includes(path.extname(file).toLowerCase())) {
      results.push(filePath);
    }
  });
  return results;
}

async function optimizeImage(inputPath, outputPath) {
  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    let pipeline = image;
    if (metadata.width > MAX_WIDTH) {
      pipeline = pipeline.resize({ width: MAX_WIDTH });
    }
    pipeline = pipeline.webp({ quality: QUALITY });
    await pipeline.toFile(outputPath);
    console.log(`Optimized: ${outputPath}`);
  } catch (err) {
    console.error(`Failed to optimize ${inputPath}:`, err);
  }
}

async function main() {
  ensureDirSync(OUTPUT_DIR);
  const images = getAllImages(INPUT_DIR);
  for (const imgPath of images) {
    const relPath = path.relative(INPUT_DIR, imgPath);
    const outPath = path.join(
      OUTPUT_DIR,
      relPath.replace(path.extname(relPath), '.webp')
    );
    ensureDirSync(path.dirname(outPath));
    await optimizeImage(imgPath, outPath);
  }
  console.log('Image optimization complete!');
  cleanOrphanOptimizedImages();
}

export function cleanOrphanOptimizedImages() {
    const originalDir = path.join(process.cwd(), 'public/images');
    const optimizedDir = path.join(process.cwd(), 'public/optimized-images');
  
    function getAllFiles(dir) {
      let results = [];
      const list = fs.readdirSync(dir);
      list.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat && stat.isDirectory()) {
          results = results.concat(getAllFiles(filePath));
        } else {
          results.push(filePath);
        }
      });
      return results;
    }
  
    const originals = getAllFiles(originalDir).map(f => {
      // Remove extension and base path
      return path.relative(originalDir, f).replace(/\.[a-zA-Z0-9]+$/, '');
    });
    const optimized = getAllFiles(optimizedDir);
  
    let removed = 0;
    for (const optPath of optimized) {
      const rel = path.relative(optimizedDir, optPath).replace(/\.[a-zA-Z0-9]+$/, '');
      if (!originals.includes(rel)) {
        fs.unlinkSync(optPath);
        removed++;
        console.log('Removed orphan optimized image:', optPath);
      }
    }
    console.log(`Cleaned ${removed} orphan optimized images.`);
  } 
  
main(); 