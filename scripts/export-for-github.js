const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Build the Next.js app
console.log('Building Next.js app...');
execSync('npm run build', { stdio: 'inherit' });
// Don't call the export script again or it will create an infinite loop
// execSync('npm run export', { stdio: 'inherit' });

const outDir = path.join(__dirname, '../out');
const docsDir = path.join(__dirname, '../docs');

// Create .nojekyll file to bypass Jekyll processing
const createNoJekyll = () => {
  const filePath = path.join(outDir, '.nojekyll');
  fs.writeFileSync(filePath, '');
  console.log('Created .nojekyll file');
};

// Create _redirects file for client-side routing
const createRedirects = () => {
  const filePath = path.join(outDir, '_redirects');
  const content = `/*    /index.html   200`;
  fs.writeFileSync(filePath, content);
  console.log('Created _redirects file');
};

// Find all CSS files in the output directory
const findCssFiles = (dir, fileList = []) => {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      findCssFiles(filePath, fileList);
    } else if (file.endsWith('.css')) {
      // Get relative path from out directory
      const relativePath = path.relative(outDir, filePath);
      fileList.push(relativePath.replace(/\\/g, '/'));
    }
  });
  
  return fileList;
};

// Update HTML files to include CSS links
const updateHtmlFiles = () => {
  const cssFiles = findCssFiles(outDir);
  console.log(`Found ${cssFiles.length} CSS files`);
  
  const htmlFiles = [];
  
  // Find all HTML files
  const findHtmlFiles = (dir) => {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        findHtmlFiles(filePath);
      } else if (file.endsWith('.html')) {
        htmlFiles.push(filePath);
      }
    });
  };
  
  findHtmlFiles(outDir);
  console.log(`Found ${htmlFiles.length} HTML files`);
  
  // Update each HTML file
  htmlFiles.forEach(htmlFile => {
    let content = fs.readFileSync(htmlFile, 'utf8');
    
    // Check if CSS links already exist in the file
    if (!content.includes('__next/static/css/')) {
      // Add CSS links before the closing head tag
      const cssLinks = cssFiles.map(cssFile => 
        `<link rel="stylesheet" href="/${cssFile}" />`
      ).join('\n');
      
      content = content.replace('</head>', `${cssLinks}\n</head>`);
      
      // Also add a favicon if it doesn't exist
      if (!content.includes('rel="icon"')) {
        content = content.replace('</head>', `<link rel="icon" href="/logo.svg" type="image/svg+xml">\n</head>`);
      }
      
      // Fix base paths for GitHub Pages
      content = content.replace(/href="\//g, 'href="/Website-for-EpiSafe/');
      content = content.replace(/src="\//g, 'src="/Website-for-EpiSafe/');
      
      // Don't replace links that already have the Website-for-EpiSafe prefix
      content = content.replace(/href="\/Website-for-EpiSafe\/Website-for-EpiSafe\//g, 'href="/Website-for-EpiSafe/');
      content = content.replace(/src="\/Website-for-EpiSafe\/Website-for-EpiSafe\//g, 'src="/Website-for-EpiSafe/');
      
      fs.writeFileSync(htmlFile, content);
      console.log(`Updated ${path.relative(outDir, htmlFile)}`);
    }
  });
};

// Copy files to docs directory
const copyToDocs = () => {
  // Remove existing docs directory if it exists
  if (fs.existsSync(docsDir)) {
    fs.rmSync(docsDir, { recursive: true, force: true });
    console.log('Removed existing docs directory');
  }
  
  // Create docs directory
  fs.mkdirSync(docsDir, { recursive: true });
  console.log('Created docs directory');
  
  // Copy files from out to docs
  const copyDir = (src, dest) => {
    const entries = fs.readdirSync(src, { withFileTypes: true });
    
    entries.forEach(entry => {
      const srcPath = path.join(src, entry.name);
      const destPath = path.join(dest, entry.name);
      
      if (entry.isDirectory()) {
        fs.mkdirSync(destPath, { recursive: true });
        copyDir(srcPath, destPath);
      } else {
        fs.copyFileSync(srcPath, destPath);
      }
    });
  };
  
  copyDir(outDir, docsDir);
  console.log('Copied files from out to docs');
};

// Main function
const main = () => {
  createNoJekyll();
  createRedirects();
  updateHtmlFiles();
  copyToDocs();
  console.log('Done!');
};

main(); 