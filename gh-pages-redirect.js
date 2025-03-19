
// This hack ensures GitHub Pages correctly serves the index.html at the root
// and not the README from the main branch
window.location.href = window.location.pathname.replace(/\/$/, '') + '/index.html';
