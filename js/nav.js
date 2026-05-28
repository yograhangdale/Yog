/* ============================================
   NAVIGATION
   Sticky navbar + mobile hamburger menu
   ============================================ */

// Sticky navbar on scroll
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  nav.classList.toggle('scrolled', window.scrollY > 50);
});

// Hamburger toggle
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('mobileMenu').classList.toggle('open');
});

// Close mobile menu when a link is clicked
function closeMobile() {
  document.getElementById('mobileMenu').classList.remove('open');
}
