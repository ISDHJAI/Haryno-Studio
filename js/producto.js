// ==========================================================
// HARYNO STUDIO — Página de producto (una por cada libreta)
// Lee el número de diseño de la URL: producto.html?d=13
// ==========================================================

const WHATSAPP = '524464773601'; // 52 = México + número

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

// ------- Textos lorem ipsum (varían según el diseño) -------
const DESCRIPCIONES = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
  'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.',
  'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.',
  'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt neque porro quisquam est.',
  'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati.',
];

const ESPECIFICACIONES = [
  ['Lorem ipsum dolor sit amet', 'Consectetur adipiscing elit', 'Sed do eiusmod tempor'],
  ['Ut enim ad minim veniam', 'Quis nostrud exercitation', 'Duis aute irure dolor'],
  ['Excepteur sint occaecat', 'Cupidatat non proident', 'Sunt in culpa qui officia'],
  ['Totam rem aperiam eaque', 'Ipsa quae ab illo inventore', 'Veritatis et quasi architecto'],
];

// ------- Leer el diseño de la URL -------
const parametros = new URLSearchParams(window.location.search);
let numero = parseInt(parametros.get('d'), 10);
if (!FOTOS.includes(numero)) numero = FOTOS[0]; // Si no existe, muestra el primero

const nombre = `Diseño #${String(numero).padStart(2, '0')}`;
document.title = `${nombre} — Haryno Studio`;

// ------- Llenar la página -------
const imagen = document.getElementById('detalle-img');
imagen.src = `img/libretas/${numero}.png`;
imagen.alt = `Libreta artesanal — ${nombre}`;

document.getElementById('detalle-nombre').textContent = nombre;
document.getElementById('detalle-desc').textContent =
  DESCRIPCIONES[numero % DESCRIPCIONES.length];

const specs = ESPECIFICACIONES[numero % ESPECIFICACIONES.length];
document.getElementById('detalle-specs').innerHTML = specs
  .map((texto) => `<li><i class="ph-bold ph-check-square"></i> ${texto}</li>`)
  .join('');

// ------- Botón de compra por WhatsApp -------
const mensaje = `Me interesó tu diseño #${String(numero).padStart(2, '0')}, quiero comprar`;
document.getElementById('btn-comprar').href =
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensaje)}`;

// ------- Navegación anterior / siguiente (circular) -------
const indice = FOTOS.indexOf(numero);
const anterior = FOTOS[(indice - 1 + FOTOS.length) % FOTOS.length];
const siguiente = FOTOS[(indice + 1) % FOTOS.length];

document.getElementById('btn-anterior').href = `producto.html?d=${anterior}`;
document.getElementById('btn-siguiente').href = `producto.html?d=${siguiente}`;
