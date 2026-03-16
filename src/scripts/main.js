const targets = document.querySelectorAll('.hero-copy, .hero-panel, .section-head, .identity-grid article, .project, .contact-strip');

targets.forEach((el, index) => {
  el.classList.add('reveal');
  el.style.transitionDelay = `${Math.min(index * 40, 220)}ms`;
});

const revealAll = () => targets.forEach(el => el.classList.add('visible'));

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  targets.forEach(el => observer.observe(el));
  window.addEventListener('load', () => setTimeout(revealAll, 240));
} else {
  revealAll();
}

window.addEventListener('load', () => {
  const loading = document.getElementById('loading-screen');
  if (!loading) return;
  setTimeout(() => loading.classList.add('is-hidden'), 850);
});
