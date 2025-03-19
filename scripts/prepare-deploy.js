const fs = require('fs');
const path = require('path');

// Ensure out directory exists
const outDir = path.join(__dirname, '..', 'out');
if (!fs.existsSync(outDir)) {
  console.error('The "out" directory does not exist. Run "npm run build" first.');
  process.exit(1);
}

// Copy .nojekyll file to out directory
fs.copyFile(
  path.join(__dirname, '..', 'public', '.nojekyll'),
  path.join(outDir, '.nojekyll'),
  (err) => {
    if (err) {
      console.error('Error copying .nojekyll file:', err);
      process.exit(1);
    }
    console.log('.nojekyll file copied to out directory');
  }
); 