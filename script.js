// Subtle scroll-reveal for sections and cards
document.addEventListener('DOMContentLoaded', () => {
  const revealTargets = document.querySelectorAll(
    '.skill-card, .project-card, .tl-item, .contact-card, .stat'
  );

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!prefersReducedMotion && 'IntersectionObserver' in window) {
    revealTargets.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(14px)';
      el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    revealTargets.forEach(el => observer.observe(el));
  }

  // Shrink nav border/shadow slightly on scroll
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 12) {
      nav.style.boxShadow = '0 1px 2px rgba(20,24,31,0.05)';
    } else {
      nav.style.boxShadow = 'none';
    }
  });
});
