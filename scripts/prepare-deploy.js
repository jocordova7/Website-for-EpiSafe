const fs = require('fs');
const path = require('path');

// Ensure out directory exists
const outDir = path.join(__dirname, '..', 'out');
if (!fs.existsSync(outDir)) {
  console.error('The "out" directory does not exist. Run "npm run build" first.');
  process.exit(1);
}

// Create .nojekyll file
fs.writeFileSync(path.join(outDir, '.nojekyll'), '');
console.log('.nojekyll file created');

// Create 404.html that serves the app's 404 page
fs.copyFileSync(
  path.join(outDir, '404.html'),
  path.join(outDir, '404.html')
);

// Create a simple README.md
fs.writeFileSync(
  path.join(outDir, 'README.md'),
  `# SeizureGuard App

This directory contains the built files for the SeizureGuard application.
Visit https://jocordova7.github.io/Website-for-EpiSafe/ to view the live application.
`
);

console.log('Deployment files prepared successfully'); 