// scripts/optimize-images.js
const ImageOptimizer = require('./image-optimizer');
const fs = require('fs');
const path = require('path');

async function main() {
  console.log('🖼️  Starting image optimization...\n');

  // Configuration
  const config = {
    inputDir: './public/images',
    outputDir: './public/optimized',
    quality: 80,
    formats: ['webp', 'jpeg'],
    sizes: [640, 1280]
  };

  // Check if input directory exists
  if (!fs.existsSync(config.inputDir)) {
    console.error(`❌ Input directory ${config.inputDir} does not exist!`);
    console.log(`📁 Please create the directory and add your images there.`);
    process.exit(1);
  }

  // Check if there are any images to process
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.tiff'];
  const hasImages = fs.readdirSync(config.inputDir).some(file => 
    imageExtensions.some(ext => file.toLowerCase().endsWith(ext))
  );

  if (!hasImages) {
    console.log(`⚠️  No images found in ${config.inputDir}`);
    console.log(`📸 Add some images (.jpg, .png, .gif, etc.) and run again.`);
    return;
  }

  try {
    const startTime = Date.now();
    
    const optimizer = new ImageOptimizer(config);
    
    // Run optimization
    await optimizer.optimizeImages();
    await optimizer.generateManifest();
    
    const endTime = Date.now();
    const duration = ((endTime - startTime) / 1000).toFixed(2);
    
    console.log(`\n✅ Image optimization completed in ${duration}s!`);
    console.log(`📂 Optimized images saved to: ${config.outputDir}`);
    console.log(`📄 Manifest file created: ${config.outputDir}/manifest.json`);
    
    // Display summary
    displaySummary(config.outputDir);
    
  } catch (error) {
    console.error('❌ Error during optimization:', error);
    process.exit(1);
  }
}

function displaySummary(outputDir) {
  try {
    const manifestPath = path.join(outputDir, 'manifest.json');
    
    if (fs.existsSync(manifestPath)) {
      const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
      const imageCount = Object.keys(manifest).length;
      
      console.log(`\n📊 Summary:`);
      console.log(`   • ${imageCount} images processed`);
      
      // Count total generated files
      let totalFiles = 0;
      Object.values(manifest).forEach(imageData => {
        Object.values(imageData).forEach(formatData => {
          totalFiles += Object.keys(formatData).length;
        });
      });
      
      console.log(`   • ${totalFiles} optimized files generated`);
      console.log(`   • Formats: WebP, JPEG`);
      console.log(`   • Sizes: 640w, 1280w + original`);
    }
  } catch {
    console.log('📊 Summary generation failed, but optimization completed successfully.');
  }
}

// Handle command line arguments
const args = process.argv.slice(2);
if (args.includes('--help') || args.includes('-h')) {
  console.log(`
🖼️  Image Optimizer for Next.js

Usage: node scripts/optimize-images.js [options]

Options:
  --help, -h     Show this help message
  --clean        Clean output directory before optimization
  
Configuration:
  Edit the config object in this file to customize:
  • Input directory (default: ./public/images)
  • Output directory (default: ./public/optimized)  
  • Image quality (default: 80)
  • Output formats (default: webp, jpeg)
  • Generated sizes (default: 640w, 1280w)
  `);
  process.exit(0);
}

// Clean option
if (args.includes('--clean')) {
  const outputDir = './public/optimized';
  if (fs.existsSync(outputDir)) {
    fs.rmSync(outputDir, { recursive: true, force: true });
    console.log(`🧹 Cleaned output directory: ${outputDir}`);
  }
}

// Run the main function
main().catch(error => {
  console.error('❌ Unexpected error:', error);
  process.exit(1);
});