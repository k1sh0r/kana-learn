const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

class ImageOptimizer {
  constructor(options = {}) {
    this.inputDir = options.inputDir || './public/images';
    this.outputDir = options.outputDir || './public/optimized';
    this.quality = options.quality || 80;
    this.formats = options.formats || ['webp', 'jpeg'];
    this.sizes = options.sizes || [640, 1280];
  }

  async optimizeImages() {
    try {
      // Create output directory if it doesn't exist
      if (!fs.existsSync(this.outputDir)) {
        fs.mkdirSync(this.outputDir, { recursive: true });
      }

      const imageFiles = this.getImageFiles(this.inputDir);
      console.log(`Found ${imageFiles.length} images to optimize...`);

      for (const filePath of imageFiles) {
        await this.processImage(filePath);
      }

      console.log('Image optimization completed!');
    } catch (error) {
      console.error('Error optimizing images:', error);
    }
  }

  getImageFiles(dir) {
    const files = [];
    const items = fs.readdirSync(dir);

    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        files.push(...this.getImageFiles(fullPath));
      } else if (this.isImageFile(item)) {
        files.push(fullPath);
      }
    }

    return files;
  }

  isImageFile(filename) {
    const extensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.tiff'];
    return extensions.some(ext => filename.toLowerCase().endsWith(ext));
  }

  async processImage(filePath) {
    const relativePath = path.relative(this.inputDir, filePath);
    const { dir, name } = path.parse(relativePath);
    const outputSubDir = path.join(this.outputDir, dir);

    // Create subdirectory if it doesn't exist
    if (!fs.existsSync(outputSubDir)) {
      fs.mkdirSync(outputSubDir, { recursive: true });
    }

    const image = sharp(filePath);
    const metadata = await image.metadata();

    console.log(`Processing: ${relativePath}`);

    // Generate different sizes for each format
    for (const format of this.formats) {
      for (const size of this.sizes) {
        // Skip if original is smaller than target size
        if (metadata.width && metadata.width < size) continue;

        const outputFilename = `${name}-${size}w.${format}`;
        const outputPath = path.join(outputSubDir, outputFilename);

        await this.generateImage(image, outputPath, size, format);
      }

      // Generate original size version
      const originalFilename = `${name}.${format}`;
      const originalPath = path.join(outputSubDir, originalFilename);
      await this.generateImage(image, originalPath, null, format);
    }
  }

  async generateImage(sharpInstance, outputPath, width, format) {
    try {
      let pipeline = sharpInstance.clone();

      if (width) {
        pipeline = pipeline.resize(width, null, {
          withoutEnlargement: true,
          fit: 'inside'
        });
      }

      switch (format) {
        case 'webp':
          pipeline = pipeline.webp({ quality: this.quality });
          break;
        case 'jpeg':
          pipeline = pipeline.jpeg({ quality: this.quality, progressive: true });
          break;
        case 'png':
          pipeline = pipeline.png({ quality: this.quality });
          break;
        default:
          throw new Error(`Unsupported format: ${format}`);
      }

      await pipeline.toFile(outputPath);
      console.log(`Generated: ${outputPath}`);
    } catch (error) {
      console.error(`Error generating ${outputPath}:`, error);
    }
  }

  // Generate manifest file for easy integration
  async generateManifest() {
    const manifestPath = path.join(this.outputDir, 'manifest.json');
    const manifest = {};

    const optimizedFiles = this.getOptimizedFiles(this.outputDir);
    
    for (const filePath of optimizedFiles) {
      const relativePath = path.relative(this.outputDir, filePath);
      const { name, ext } = path.parse(relativePath);
      
      // Extract size from filename (e.g., "image-640w.webp" -> 640)
      const sizeMatch = name.match(/-(\d+)w$/);
      const size = sizeMatch ? parseInt(sizeMatch[1]) : 'original';
      
      const baseName = name.replace(/-\d+w$/, '');
      const format = ext.slice(1);
      
      if (!manifest[baseName]) {
        manifest[baseName] = {};
      }
      
      if (!manifest[baseName][format]) {
        manifest[baseName][format] = {};
      }
      
      manifest[baseName][format][size] = `/optimized/${relativePath}`;
    }

    fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
    console.log('Generated manifest.json');
  }

  getOptimizedFiles(dir) {
    const files = [];
    const items = fs.readdirSync(dir);

    for (const item of items) {
      if (item === 'manifest.json') continue;
      
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        files.push(...this.getOptimizedFiles(fullPath));
      } else if (this.isImageFile(item)) {
        files.push(fullPath);
      }
    }

    return files;
  }
}

// Export the class for use in other scripts

module.exports = ImageOptimizer;