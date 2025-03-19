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

// Create 404.html that redirects to the main app
fs.writeFileSync(
  path.join(outDir, '404.html'),
  `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>SeizureGuard - Page Not Found</title>
  <script>
    window.location.href = '/Website-for-EpiSafe/';
  </script>
</head>
<body>
  <p>Redirecting to homepage...</p>
</body>
</html>`
);

// Copy the index.html from the root of the out directory
try {
  // Make sure we preserve the original index.html
  if (fs.existsSync(path.join(outDir, 'index.html'))) {
    fs.copyFileSync(
      path.join(outDir, 'index.html'),
      path.join(outDir, 'index.original.html')
    );
  }
} catch (err) {
  console.warn('Warning: Could not backup original index.html');
}

// Create a simple README.md
fs.writeFileSync(
  path.join(outDir, 'README.md'),
  `# SeizureGuard App

This directory contains the built files for the SeizureGuard application.
Visit https://jocordova7.github.io/Website-for-EpiSafe/ to view the live application.
`
);

console.log('Deployment files prepared successfully'); 