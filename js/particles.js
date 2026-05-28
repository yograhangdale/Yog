/* ============================================
   PARTICLES
   Generates floating gold dust particles in the hero
   ============================================ */

function createParticles() {
  const container = document.getElementById('particles');
  const count = 30;

  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.classList.add('particle');

    p.style.left             = Math.random() * 100 + '%';
    p.style.top              = Math.random() * 100 + '%';
    p.style.animationDuration = (Math.random() * 15 + 10) + 's';
    p.style.animationDelay   = (Math.random() * 10) + 's';

    const size = (Math.random() * 3 + 1) + 'px';
    p.style.width  = size;
    p.style.height = size;
    p.style.opacity = Math.random() * 0.6;

    container.appendChild(p);
  }
}

createParticles();
