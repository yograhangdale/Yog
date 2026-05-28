/* ============================================
   GALLERY
   Category filter + lightbox preview
   ============================================ */

// --- Category Filter ---
function filterGallery(category, btnEl) {
  // Update active button
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btnEl.classList.add('active');

  // Show/hide items
  document.querySelectorAll('.gallery-item').forEach(item => {
    const match = category === 'all' || item.dataset.cat === category;
    item.style.transition    = 'opacity 0.4s, transform 0.4s';
    item.style.opacity       = match ? '1' : '0.15';
    item.style.transform     = match ? 'scale(1)' : 'scale(0.95)';
    item.style.pointerEvents = match ? 'auto' : 'none';
  });
}

// --- Lightbox ---
function openLightbox(caption) {
  document.getElementById('lightboxCaption').textContent = caption;
  document.getElementById('lightbox').classList.add('open');
}

function closeLightbox(event) {
  // Only close when clicking the backdrop, not the content
  if (event.target === document.getElementById('lightbox')) {
    document.getElementById('lightbox').classList.remove('open');
  }
}

// Close with Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.getElementById('lightbox').classList.remove('open');
  }
});
