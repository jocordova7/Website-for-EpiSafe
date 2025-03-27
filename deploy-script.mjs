#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

// Colors for terminal output
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
};

// Helper function to execute commands
function exec(command) {
  console.log(`${colors.cyan}> ${command}${colors.reset}`);
  try {
    execSync(command, { stdio: 'inherit' });
    return true;
  } catch (error) {
    console.error(`${colors.red}Error executing command: ${command}${colors.reset}`);
    return false;
  }
}

// Build the project with production environment
console.log(`${colors.green}Building project for production...${colors.reset}`);
if (!exec('cross-env NODE_ENV=production next build')) {
  process.exit(1);
}

// Ensure .nojekyll file exists to bypass Jekyll processing
console.log(`${colors.green}Creating .nojekyll file...${colors.reset}`);
fs.writeFileSync('out/.nojekyll', '');

// Create index.html at the root that redirects to the correct application path
console.log(`${colors.green}Setting up GitHub Pages redirection...${colors.reset}`);
try {
  // Copy from the public redirect.html (which was created earlier)
  if (fs.existsSync('public/redirect.html')) {
    const redirectContent = fs.readFileSync('public/redirect.html', 'utf8');
    fs.writeFileSync('out/index.html', redirectContent);
    console.log(`${colors.green}✓ Created custom index.html for GitHub Pages redirection${colors.reset}`);
  } else {
    console.error(`${colors.yellow}Warning: redirect.html not found in public directory${colors.reset}`);
    
    // Create a simple redirect if the file doesn't exist
    const simpleRedirect = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>EpiSave</title>
    <meta http-equiv="refresh" content="0;url=https://jocordova7.github.io/Website-for-EpiSafe/">
    <script>
      window.location.href = "https://jocordova7.github.io/Website-for-EpiSafe/";
    </script>
  </head>
  <body>
    <p>Redirecting to <a href="https://jocordova7.github.io/Website-for-EpiSafe/">EpiSave</a>...</p>
  </body>
</html>`;
    fs.writeFileSync('out/index.html', simpleRedirect);
    console.log(`${colors.green}✓ Created a simple redirect file${colors.reset}`);
  }
} catch (error) {
  console.error(`${colors.red}Error creating redirect file: ${error.message}${colors.reset}`);
}

// Make sure 404.html is also properly set up for GitHub Pages navigation
try {
  // Copy 404.html from public if it exists
  if (fs.existsSync('public/404.html')) {
    const notFoundContent = fs.readFileSync('public/404.html', 'utf8');
    fs.writeFileSync('out/404.html', notFoundContent);
    console.log(`${colors.green}✓ Copied custom 404.html for better navigation handling${colors.reset}`);
  }
} catch (error) {
  console.error(`${colors.red}Error setting up 404 page: ${error.message}${colors.reset}`);
}

// Copy direct access page if it exists
try {
  if (fs.existsSync('public/direct.html')) {
    const directContent = fs.readFileSync('public/direct.html', 'utf8');
    fs.writeFileSync('out/direct.html', directContent);
    console.log(`${colors.green}✓ Copied direct access page${colors.reset}`);
  }
} catch (error) {
  console.error(`${colors.red}Error copying direct access page: ${error.message}${colors.reset}`);
}

// Double check that index.html exists in the out directory
const outDir = path.resolve('out');
const indexPath = path.join(outDir, 'index.html');

if (!fs.existsSync(indexPath)) {
  console.error(`${colors.red}Error: index.html not found in the out directory!${colors.reset}`);
  console.error(`${colors.yellow}Files in out directory:${colors.reset}`);
  fs.readdirSync(outDir).forEach(file => {
    console.log(`- ${file}`);
  });
  process.exit(1);
}

console.log(`${colors.green}✓ index.html found in out directory${colors.reset}`);

// Add all files to git
console.log(`${colors.green}Adding files to git...${colors.reset}`);
if (!exec('git add out/')) {
  process.exit(1);
}

// Commit changes
console.log(`${colors.green}Committing changes...${colors.reset}`);
if (!exec('git commit -m "Deploy to gh-pages"')) {
  console.log(`${colors.yellow}No changes to commit or commit failed. Continuing...${colors.reset}`);
}

// Push to gh-pages branch
console.log(`${colors.green}Pushing to gh-pages branch...${colors.reset}`);
if (!exec('git subtree push --prefix out origin gh-pages')) {
  process.exit(1);
}

console.log(`${colors.green}Deployment complete! Your site should be available at:${colors.reset}`);
console.log(`${colors.blue}https://jocordova7.github.io/Website-for-EpiSafe/${colors.reset}`);
console.log(`${colors.green}Direct access link:${colors.reset}`);
console.log(`${colors.blue}https://jocordova7.github.io/Website-for-EpiSafe/direct.html${colors.reset}`); 