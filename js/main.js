// main.js
document.addEventListener('DOMContentLoaded', () => {
  // Set current year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const headerOffset = 80;
        const elementPosition = target.offsetTop;
        const offsetPosition = elementPosition - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    });
  });

  // Infinite carousel for gallery
  const track = document.querySelector('.gallery-track');
  let speed = 1; 
  let position = 0;

  function animateCarousel() {
    if (!track) return;
    position -= speed;
    if (Math.abs(position) >= track.scrollWidth / 2) position = 0;
    track.style.transform = `translateX(${position}px)`;
    requestAnimationFrame(animateCarousel);
  }
  animateCarousel();
});
