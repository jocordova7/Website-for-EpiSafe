const fs = require('fs');
const path = require('path');

// Ensure out directory exists
const outDir = path.join(__dirname, '..', 'out');
if (!fs.existsSync(outDir)) {
  console.error('The "out" directory does not exist. Run "npm run build" first.');
  process.exit(1);
}

// Copy .nojekyll file to out directory
fs.writeFileSync(path.join(outDir, '.nojekyll'), '');
console.log('.nojekyll file created in out directory');

// Copy direct-entry.html as index.html to the out directory
try {
  fs.copyFileSync(
    path.join(__dirname, '..', 'public', 'direct-entry.html'),
    path.join(outDir, 'index.html')
  );
  console.log('direct-entry.html copied as index.html to out directory');
} catch (err) {
  console.error('Error copying direct-entry.html file:', err);
  process.exit(1);
}

// Create a simple README.md in the out directory
fs.writeFileSync(
  path.join(outDir, 'README.md'),
  `# SeizureGuard App

This directory contains the built files for the SeizureGuard application.
The main application entry point is index.html.
`
);
console.log('README.md file created in out directory'); 