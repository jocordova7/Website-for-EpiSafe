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

// Copy index.html from public directory to out directory
try {
  fs.copyFileSync(
    path.join(__dirname, '..', 'public', 'index.html'),
    path.join(outDir, 'index.html')
  );
  console.log('index.html copied to out directory');
} catch (err) {
  console.error('Error copying index.html file:', err);
}

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

// Create a simple README.md in the out directory
fs.writeFileSync(
  path.join(outDir, 'README.md'),
  `# SeizureGuard App

This directory contains the built files for the SeizureGuard application.
The main application entry point is index.html.
`
);
console.log('README.md file created in out directory');

// Create a redirect index.html file at the root of the gh-pages branch
// This will help with GitHub Pages serving
fs.writeFileSync(
  path.join(outDir, 'index.html'),
  `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>SeizureGuard - Epilepsy Monitoring App</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="refresh" content="0;url=./index.html">
  <script>
    window.location.href = './index.html';
  </script>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f5f5f5;
      color: #333;
      line-height: 1.6;
      text-align: center;
      padding-top: 50px;
    }
    a {
      color: #00A878;
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <p>If you are not redirected automatically, <a href="./index.html">click here</a> to access the SeizureGuard App.</p>
</body>
</html>`
);
console.log('Redirect index.html file created in out directory'); 