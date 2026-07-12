// ==========================================================
// HARYNO STUDIO — Catálogo de libretas
// Genera las tarjetas: cada una enlaza a su página de producto
// ==========================================================

const PRECIO = '$189.00';

// Números de las fotos disponibles en img/libretas/
// (57 y 58 no existen en la carpeta)
const FOTOS = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
  31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
  41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
  51, 52, 53, 54, 55, 56, 59, 60, 61, 62,
];

const catalogo = document.getElementById('catalogo');

FOTOS.forEach((numero) => {
  const nombre = `Diseño #${String(numero).padStart(2, '0')}`;

  // Toda la tarjeta es un enlace a la página del producto
  const tarjeta = document.createElement('a');
  tarjeta.className = 'producto';
  tarjeta.href = `producto.html?d=${numero}`;
  tarjeta.setAttribute('aria-label', `Ver ${nombre} — ${PRECIO} MXN`);
  tarjeta.innerHTML = `
    <span class="producto__foto">
      <img src="img/libretas/mini/${numero}.jpg" alt="Libreta artesanal — ${nombre}" loading="lazy">
      <span class="producto__lupa"><span class="lupa__circulo"><i class="ph-bold ph-eye"></i></span></span>
    </span>
    <span class="producto__info">
      <span class="producto__nombre">${nombre}</span>
      <span class="producto__precio">${PRECIO} <small>MXN</small></span>
    </span>
  `;
  catalogo.appendChild(tarjeta);
});
