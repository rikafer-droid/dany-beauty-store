/* Centralized destinations for Dani Beauty Store. */
const links = {
  instagram: 'https://www.instagram.com/dani_beauty_store/',
  natura: 'https://www.natura.com.br/consultoria/danibeautystore',
  catalogo: 'https://drive.google.com/drive/folders/1MAYVkb2QJm6byQMg07QRwA--rIuOFCOx',
  whatsapp: 'https://wa.me/5511983267391'
};

document.querySelectorAll('[data-link]').forEach((element) => {
  const destination = links[element.dataset.link];
  if (destination) element.href = destination;
});

const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Abrir menu' : 'Fechar menu');
    mainNav.classList.toggle('is-open', !isOpen);
  });

  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Abrir menu');
      mainNav.classList.remove('is-open');
    });
  });
}

const revealTargets = document.querySelectorAll('.section, .shop-section, .about-section, .instagram-section, .reviews-section, .final-cta, .contact-section');
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  revealTargets.forEach((section) => section.classList.add('reveal'));
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  revealTargets.forEach((section) => observer.observe(section));
}
