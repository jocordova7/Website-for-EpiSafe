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

// Copy the GitHub Pages specific index.html to the root directory (outside the basePath)
// This is key to make GitHub Pages work with Next.js basePath
try {
  fs.copyFileSync(
    path.join(__dirname, '..', 'public', 'index-gh-pages.html'),
    path.join(path.dirname(outDir), 'index.html')
  );
  console.log('GitHub Pages index file copied to root directory');
} catch (err) {
  console.error('Error copying GitHub Pages index file:', err);
}

// Create a simple README.md in the out directory to avoid confusion
fs.writeFileSync(
  path.join(outDir, 'README.md'),
  `# SeizureGuard App

This directory contains the built files for the SeizureGuard application.
The main application entry point is index.html.
`
);

// Ensure that GitHub Pages knows this is not a project page but an app
// by creating an empty gh-pages-hack.js file
fs.writeFileSync(
  path.join(outDir, 'gh-pages-redirect.js'),
  `
// This hack ensures GitHub Pages correctly serves the index.html at the root
// and not the README from the main branch
window.location.href = window.location.pathname.replace(/\\/$/, '') + '/index.html';
`
);

// Create a simple index.html that redirects to the app
fs.writeFileSync(
  path.join(outDir, 'gh-pages-redirect.html'),
  `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta http-equiv="refresh" content="0;url=index.html">
  <title>Redirecting to SeizureGuard</title>
  <script>
    window.location.href = "index.html";
  </script>
</head>
<body>
  <p>If you are not redirected automatically, <a href="index.html">click here</a>.</p>
</body>
</html>
`
); 