
import mesa_comedor from "./img/mesa2.jpg";
import silla_eames from "./img/silla3.jpg";
import sofa_chesterfield from "./img/sofa1.jpg";
import comoda_dormitorio from "./img/comoda4.jpg";
import estanteria_modular from "./img/estanteria.jpg";
import sofa_seccional from "./img/sofa6.webp";
import mesa_centro from "./img/mesa7.jpg";
import sillon_reclinable from "./img/silla8.avif";
import mesa_noche from "./img/mesa9.webp";

const productList = [
  {
    id: 1,
    category: "Muebles",
    title: "Sofá Chesterfield",
    color: "Marrón",
    description: "Elegante sofá Chesterfield de cuero en color marrón.",
    price: "$799.99",
    image: sofa_chesterfield,
    lot: "10",
  },
  {
    id: 2,
    category: "Muebles",
    title: "Mesa de Comedor Extendible",
    color: "Marron",
    description: "Mesa de comedor extensible con acabado en marron brillante.",
    price: "$449.99",
    image: mesa_comedor,
    lot: "15",
  },
  {
    id: 3,
    category: "Muebles",
    title: "Silla Eames de Comedor",
    color: "Negro",
    description: "Silla de comedor moderna inspirada en el diseño de Charles Eames.",
    price: "$99.99",
    image: silla_eames,
    lot: "20",
  },
  {
    id: 4,
    category: "Muebles",
    title: "Cómoda de Dormitorio",
    color: "Gris",
    description: "Cómoda de dormitorio con amplio espacio de almacenamiento.",
    price: "$279.99",
    image: comoda_dormitorio,
    lot: "8",
  },
  {
    id: 5,
    category: "Muebles",
    title: "Estantería Modular",
    color: "Natural",
    description: "Estantería modular con estantes ajustables en madera natural.",
    price: "$159.99",
    image: estanteria_modular,
    lot: "12",
  },
  {
    id: 6,
    category: "Muebles",
    title: "Sofá Seccional",
    color: "Gris Oscuro",
    description: "Sofá seccional con cojines cómodos y diseño contemporáneo.",
    price: "$899.99",
    image: sofa_seccional,
    lot: "6",
  },
  {
    id: 7,
    category: "Muebles",
    title: "Mesa de Centro Industrial",
    color: "Negro/Acero",
    description: "Mesa de centro con un toque industrial en negro y acero.",
    price: "$129.99",
    image: mesa_centro,
    lot: "10",
  },
  {
    id: 8,
    category: "Muebles",
    title: "Sillón Reclinable",
    color: "Gris Claro",
    description: "Sillón reclinable con tejido suave en color gris claro.",
    price: "$349.99",
    image: sillon_reclinable,
    lot: "5",
  },
  {
    id: 9,
    category: "Muebles",
    title: "Mesa de Noche Minimalista",
    color: "Blanco",
    description: "Mesa de noche minimalista con un cajón y espacio de almacenamiento.",
    price: "$79.99",
    image: mesa_noche,
    lot: "15",
  },
];

export default productList;