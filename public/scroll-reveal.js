document.addEventListener('DOMContentLoaded', function () {
  const revealElements = document.querySelectorAll('.scroll-reveal');
  const revealOnScroll = () => {
    for (const el of revealElements) {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 60) {
        el.classList.add('revealed');
      }
    }
  };
  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();
}); 