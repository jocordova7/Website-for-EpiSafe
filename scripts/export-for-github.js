const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Build the Next.js app with production environment
console.log('Building Next.js app...');
execSync('next build', { stdio: 'inherit' });

// Create .nojekyll file to bypass Jekyll processing
console.log('Creating .nojekyll file...');
fs.writeFileSync(path.join('out', '.nojekyll'), '');

// Create a _redirects file to handle client-side routing
console.log('Creating _redirects file...');
fs.writeFileSync(
  path.join('out', '_redirects'),
  `/*    /Website-for-EpiSafe/index.html   200\n`
);

// Create CNAME file if you have a custom domain
// fs.writeFileSync(path.join('out', 'CNAME'), 'your-domain.com');

console.log('Export completed successfully. The output is in the "out" directory.');
console.log('To deploy to GitHub Pages, push the "out" directory to the gh-pages branch.'); 