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
  // Copy to the out directory
  fs.copyFileSync(
    path.join(__dirname, '..', 'public', 'direct-entry.html'),
    path.join(outDir, 'index.html')
  );
  
  // Also create a 404.html that redirects to the main app
  fs.writeFileSync(
    path.join(outDir, '404.html'),
    `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>SeizureGuard - Page Not Found</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <script>
    window.location.href = window.location.origin + '/Website-for-EpiSafe/';
  </script>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      text-align: center;
      margin: 0;
      padding: 2rem;
      background-color: #f5f5f5;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .container {
      background-color: white;
      padding: 2rem;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      max-width: 600px;
      width: 90%;
    }
    h1 {
      color: #00A878;
      margin-bottom: 1rem;
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
  <div class="container">
    <h1>Page Not Found</h1>
    <p>Redirecting to the SeizureGuard App...</p>
    <p>If you are not redirected automatically, <a href="/Website-for-EpiSafe/">click here</a>.</p>
  </div>
</body>
</html>`
  );
  
  console.log('direct-entry.html copied as index.html and 404.html created');
} catch (err) {
  console.error('Error preparing deployment files:', err);
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