/* ============================================
   LOADER
   Hides the loading screen after animations complete
   ============================================ */

setTimeout(() => {
  const loader = document.getElementById('loader');
  loader.style.transition = 'opacity 0.6s ease';
  loader.style.opacity = '0';
  setTimeout(() => loader.style.display = 'none', 600);
}, 2600);
