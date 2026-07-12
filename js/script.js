// ==========================================================
// HARYNO STUDIO — Interacciones
// ==========================================================

// ------- Menú hamburguesa (móvil) -------
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
  const abierto = navMenu.classList.toggle('open');
  navToggle.classList.toggle('open', abierto);
  navToggle.setAttribute('aria-expanded', abierto);
});

// Cerrar el menú al hacer clic en un enlace
navMenu.querySelectorAll('.nav__link').forEach((enlace) => {
  enlace.addEventListener('click', () => {
    navMenu.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// ------- Animación de aparición al hacer scroll -------
const observer = new IntersectionObserver(
  (entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add('visible');
        observer.unobserve(entrada.target);
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll('.reveal').forEach((elemento) => {
  observer.observe(elemento);
});

// ------- Resaltar el enlace activo según la sección visible -------
const secciones = document.querySelectorAll('section[id]');
const enlaces = document.querySelectorAll('.nav__menu .nav__link');

const observerSecciones = new IntersectionObserver(
  (entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        enlaces.forEach((enlace) => {
          enlace.classList.toggle(
            'active',
            enlace.getAttribute('href') === `#${entrada.target.id}`
          );
        });
      }
    });
  },
  { rootMargin: '-40% 0px -55% 0px' }
);

secciones.forEach((seccion) => observerSecciones.observe(seccion));
