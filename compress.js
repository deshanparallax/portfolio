import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const directories = [
  path.join(process.cwd(), 'public'),
  path.join(process.cwd(), 'src', 'assets')
];

async function processImages() {
  for (const dir of directories) {
    if (!fs.existsSync(dir)) continue;

    const files = fs.readdirSync(dir);

    for (const file of files) {
      if (file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.png') || file.toLowerCase().endsWith('.jpeg')) {
        const filePath = path.join(dir, file);
        const tempPath = path.join(dir, 'temp_' + file);
        
        try {
          const stat = fs.statSync(filePath);
          const sizeMB = stat.size / (1024 * 1024);
          
          if (sizeMB < 0.5) {
             console.log(`Skipping ${file} (Already optimized: ${sizeMB.toFixed(2)} MB)`);
             continue;
          }

          console.log(`Compressing ${file} (${sizeMB.toFixed(2)} MB)...`);
          
          if (file.toLowerCase().endsWith('.png')) {
             await sharp(filePath)
               .resize({ width: 1920, withoutEnlargement: true })
               .png({ quality: 80, compressionLevel: 9 })
               .toFile(tempPath);
          } else {
             await sharp(filePath)
               .resize({ width: 1920, withoutEnlargement: true })
               .jpeg({ quality: 75, progressive: true })
               .toFile(tempPath);
          }

          fs.unlinkSync(filePath);
          fs.renameSync(tempPath, filePath);
          
          const newStat = fs.statSync(filePath);
          console.log(`✅ ${file} optimized down to ${(newStat.size / (1024 * 1024)).toFixed(2)} MB`);
        } catch (err) {
          console.error(`Failed to process ${file}:`, err);
        }
      }
    }
  }
}

processImages().then(() => console.log('All images processed!'));
