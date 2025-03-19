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

// Copy 404.html from public directory to out directory
try {
  fs.copyFileSync(
    path.join(__dirname, '..', 'public', '404.html'),
    path.join(outDir, '404.html')
  );
  console.log('404.html copied to out directory');
} catch (err) {
  console.error('Error copying 404.html file:', err);
}

// Copy app-entry.html to the root as index.html
try {
  fs.copyFileSync(
    path.join(__dirname, '..', 'public', 'app-entry.html'),
    path.join(outDir, 'index.html')
  );
  console.log('app-entry.html copied to out directory as index.html');
} catch (err) {
  console.error('Error copying app-entry.html file:', err);
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