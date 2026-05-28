/* ============================================
   SCROLL REVEAL
   Triggers reveal animations as elements enter the viewport
   ============================================ */

const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target); // animate once only
    }
  });
}, { threshold: 0.1 });

revealElements.forEach(el => revealObserver.observe(el));
