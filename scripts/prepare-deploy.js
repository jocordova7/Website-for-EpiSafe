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

// Copy direct-entry.html to the root as index.html
try {
  fs.copyFileSync(
    path.join(__dirname, '..', 'public', 'direct-entry.html'),
    path.join(outDir, 'index.html')
  );
  fs.copyFileSync(
    path.join(__dirname, '..', 'public', 'direct-entry.html'),
    path.join(outDir, '../index.html') // Also put it one level up to catch the root URL
  );
  console.log('direct-entry.html copied as index.html to both out directory and parent directory');
} catch (err) {
  console.error('Error copying direct-entry.html file:', err);
  
  // Fallback: create a simple redirect index.html
  fs.writeFileSync(
    path.join(outDir, 'index.html'),
    `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>SeizureGuard - Redirecting</title>
  <meta http-equiv="refresh" content="0;url=./Website-for-EpiSafe">
  <script>
    window.location.replace('./Website-for-EpiSafe');
  </script>
</head>
<body>
  <p>If you are not redirected automatically, <a href="./Website-for-EpiSafe">click here</a> to go to the SeizureGuard App.</p>
</body>
</html>`
  );
  console.log('Created fallback index.html with redirect');
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