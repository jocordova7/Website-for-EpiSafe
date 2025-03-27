const { execSync } = require('child_process');

try {
  // Add all changes
  console.log('Adding all changes...');
  execSync('git add .', { stdio: 'inherit' });
  
  // Commit changes
  console.log('Committing changes...');
  execSync('git commit -m "Fix CSS loading issues and update HTML files"', { stdio: 'inherit' });
  
  // Push to GitHub
  console.log('Pushing to GitHub...');
  execSync('git push', { stdio: 'inherit' });
  
  console.log('Successfully pushed changes to GitHub!');
} catch (error) {
  console.error('Error:', error.message);
} 