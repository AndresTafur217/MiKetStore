export const categories = [
  { id: 1, nombre: "Guitarras", descripcion: "Acústicas, eléctricas y bajos", icon: "guitar" },
  { id: 2, nombre: "Teclados", descripcion: "Pianos y sintetizadores", icon: "keyboard" },
  { id: 3, nombre: "Percusión", descripcion: "Baterías y percusión latina", icon: "drums" },
  { id: 4, nombre: "Audio", descripcion: "Audífonos y monitoreo", icon: "headphones" },
  { id: 5, nombre: "Grabación", descripcion: "Micrófonos e interfaces", icon: "mic" },
  { id: 6, nombre: "Accesorios", descripcion: "Cables, soportes y complementos", icon: "cable" },
  { id: 7, nombre: "Amplificación", descripcion: "Amplificadores y altavoces", icon: "amp" },
  { id: 8, nombre: "Estudio", descripcion: "Equipamiento para producción", icon: "studio" },
];

const image = (photo, alt) => ({
  url: `https://images.unsplash.com/${photo}?auto=format&fit=crop&w=900&q=85`,
  alt,
});

export const products = [
  {
    id: 1,
    nombre: "Guitarra acústica",
    descripcion: "Guitarra acústica de seis cuerdas para práctica y escenario.",
    precio: 489000,
    stock: 8,
    estado: "disponible",
    vendedor: "MiKet Store",
    categorias: [{ id: 1, nombre: "Guitarras" }],
    especificaciones: [{ nombre: "Madera" }, { nombre: "6 cuerdas" }],
    imagenes: [image("photo-1581286651277-069e75ff5ccd", "Guitarra acústica marrón sobre fondo claro")],
    valoracionPromedio: 4.8,
    totalValoraciones: 24,
    createdAt: "2026-09-20",
  },
  {
    id: 2,
    nombre: "Teclado digital",
    descripcion: "Teclado compacto con teclas sensibles al tacto y salida MIDI.",
    precio: 729000,
    stock: 5,
    estado: "disponible",
    vendedor: "MiKet Store",
    categorias: [{ id: 2, nombre: "Teclados" }, { id: 8, nombre: "Estudio" }],
    especificaciones: [{ nombre: "MIDI" }, { nombre: "61 teclas" }],
    imagenes: [image("photo-1538402074774-8e624f3f7e5d", "Teclado digital blanco y negro")],
    valoracionPromedio: 4.6,
    totalValoraciones: 18,
    createdAt: "2026-09-18",
  },
  {
    id: 3,
    nombre: "Audífonos de monitoreo",
    descripcion: "Audífonos cerrados para escucha y monitoreo en estudio.",
    precio: 219000,
    stock: 12,
    estado: "disponible",
    vendedor: "MiKet Store",
    categorias: [{ id: 4, nombre: "Audio" }, { id: 8, nombre: "Estudio" }],
    especificaciones: [{ nombre: "Monitoreo" }, { nombre: "Cable desmontable" }],
    imagenes: [image("photo-1577174881658-0f30ed549adc", "Audífonos Sony sobre fondo claro")],
    valoracionPromedio: 4.7,
    totalValoraciones: 31,
    createdAt: "2026-09-15",
  },
  {
    id: 4,
    nombre: "Caja de ritmos",
    descripcion: "Caja de ritmos electrónica con controles de interpretación en vivo.",
    precio: 569000,
    stock: 3,
    estado: "casi agotado",
    vendedor: "MiKet Store",
    categorias: [{ id: 3, nombre: "Percusión" }],
    especificaciones: [{ nombre: "MIDI" }, { nombre: "Pads sensibles" }],
    imagenes: [image("photo-1571512379940-716326f35dbd", "Caja de ritmos Roland TR-808")],
    valoracionPromedio: 4.9,
    totalValoraciones: 12,
    createdAt: "2026-09-12",
  },
  {
    id: 5,
    nombre: "Soporte para micrófono",
    descripcion: "Soporte ajustable con base estable para ensayos y grabación.",
    precio: 89000,
    stock: 0,
    estado: "agotado",
    vendedor: "MiKet Store",
    categorias: [{ id: 5, nombre: "Grabación" }, { id: 6, nombre: "Accesorios" }, { id: 8, nombre: "Estudio" }],
    especificaciones: [{ nombre: "Ajustable" }],
    imagenes: [image("photo-1702351002798-6ccc7598494a", "Micrófono con soporte sobre fondo blanco")],
    valoracionPromedio: 4.3,
    totalValoraciones: 9,
    createdAt: "2026-09-10",
  },
  {
    id: 6,
    nombre: "Guitarra eléctrica",
    descripcion: "Guitarra eléctrica de cuerpo sólido, ideal para ensayo y escenario.",
    precio: 899000,
    stock: 6,
    estado: "disponible",
    vendedor: "MiKet Store",
    categorias: [{ id: 1, nombre: "Guitarras" }],
    especificaciones: [{ nombre: "6 cuerdas" }, { nombre: "Cuerpo sólido" }],
    imagenes: [image("photo-1564186763535-ebb21ef5277f", "Guitarra eléctrica")],
    valoracionPromedio: 4.8,
    totalValoraciones: 16,
    createdAt: "2026-09-08",
  },
  {
    id: 7,
    nombre: "Piano digital",
    descripcion: "Piano digital de 88 teclas con respuesta dinámica y sonido de concierto.",
    precio: 1599000,
    stock: 4,
    estado: "disponible",
    vendedor: "MiKet Store",
    categorias: [{ id: 2, nombre: "Teclados" }, { id: 8, nombre: "Estudio" }],
    especificaciones: [{ nombre: "88 teclas" }, { nombre: "Pedal incluido" }],
    imagenes: [image("photo-1552422535-c45813c61732", "Piano digital")],
    valoracionPromedio: 4.9,
    totalValoraciones: 21,
    createdAt: "2026-09-06",
  },
  {
    id: 8,
    nombre: "Bajo eléctrico",
    descripcion: "Bajo eléctrico de cuatro cuerdas con tono cálido y cómodo mástil.",
    precio: 979000,
    stock: 7,
    estado: "disponible",
    vendedor: "MiKet Store",
    categorias: [{ id: 1, nombre: "Guitarras" }],
    especificaciones: [{ nombre: "4 cuerdas" }, { nombre: "Pastillas pasivas" }],
    imagenes: [image("photo-1485278537138-4e8911a13c02", "Bajo eléctrico blanco sobre fondo claro")],
    valoracionPromedio: 4.7,
    totalValoraciones: 14,
    createdAt: "2026-09-04",
  },
  {
    id: 9,
    nombre: "Micrófono de condensador",
    descripcion: "Micrófono de condensador para voces, instrumentos y podcast.",
    precio: 349000,
    stock: 9,
    estado: "disponible",
    vendedor: "MiKet Store",
    categorias: [{ id: 5, nombre: "Grabación" }, { id: 8, nombre: "Estudio" }],
    especificaciones: [{ nombre: "Diafragma grande" }, { nombre: "Conexión XLR" }],
    imagenes: [image("photo-1620245446020-879dc5cf2414", "Micrófono de condensador negro sobre fondo blanco")],
    valoracionPromedio: 4.6,
    totalValoraciones: 28,
    createdAt: "2026-09-02",
  },
  {
    id: 10,
    nombre: "Interfaz de audio USB",
    descripcion: "Interfaz compacta de dos canales para grabar en casa o en estudio.",
    precio: 629000,
    stock: 5,
    estado: "disponible",
    vendedor: "MiKet Store",
    categorias: [{ id: 5, nombre: "Grabación" }, { id: 8, nombre: "Estudio" }],
    especificaciones: [{ nombre: "2 entradas" }, { nombre: "USB-C" }],
    imagenes: [image("photo-1549822531-d99bcfebc360", "Interfaz Focusrite roja")],
    valoracionPromedio: 4.8,
    totalValoraciones: 19,
    createdAt: "2026-08-29",
  },
  {
    id: 11,
    nombre: "Amplificador para guitarra",
    descripcion: "Amplificador combo con canal limpio y distorsión para práctica.",
    precio: 519000,
    stock: 4,
    estado: "disponible",
    vendedor: "MiKet Store",
    categorias: [{ id: 7, nombre: "Amplificación" }, { id: 1, nombre: "Guitarras" }],
    especificaciones: [{ nombre: "40 W" }, { nombre: "Entrada auxiliar" }],
    imagenes: [image("photo-1702438712148-cf23f3c38765", "Amplificador Marshall para guitarra")],
    valoracionPromedio: 4.5,
    totalValoraciones: 11,
    createdAt: "2026-08-26",
  },
  {
    id: 12,
    nombre: "Monitor de estudio",
    descripcion: "Monitor activo de campo cercano para mezcla y producción musical.",
    precio: 799000,
    stock: 6,
    estado: "disponible",
    vendedor: "MiKet Store",
    categorias: [{ id: 4, nombre: "Audio" }, { id: 8, nombre: "Estudio" }],
    especificaciones: [{ nombre: "Activo" }, { nombre: "Respuesta plana" }],
    imagenes: [image("photo-1608538770329-65941f62f9f8", "Monitor de estudio negro")],
    valoracionPromedio: 4.7,
    totalValoraciones: 13,
    createdAt: "2026-08-23",
  },
  {
    id: 13,
    nombre: "Ukelele soprano",
    descripcion: "Ukelele liviano de sonido brillante para llevar a todas partes.",
    precio: 169000,
    stock: 10,
    estado: "disponible",
    vendedor: "MiKet Store",
    categorias: [{ id: 1, nombre: "Guitarras" }],
    especificaciones: [{ nombre: "4 cuerdas" }, { nombre: "Tamaño soprano" }],
    imagenes: [image("photo-1541991961-c16157c6f0e6", "Ukelele marrón")],
    valoracionPromedio: 4.4,
    totalValoraciones: 8,
    createdAt: "2026-08-20",
  },
  {
    id: 14,
    nombre: "Cable XLR balanceado",
    descripcion: "Cable balanceado de baja interferencia para micrófonos y equipos de audio.",
    precio: 49000,
    stock: 18,
    estado: "disponible",
    vendedor: "MiKet Store",
    categorias: [{ id: 6, nombre: "Accesorios" }, { id: 5, nombre: "Grabación" }],
    especificaciones: [{ nombre: "3 metros" }, { nombre: "Conectores metálicos" }],
    imagenes: [image("photo-1570770691583-0a1fa5847306", "Cable XLR para audio")],
    valoracionPromedio: 4.5,
    totalValoraciones: 7,
    createdAt: "2026-08-18",
  },
  {
    id: 15,
    nombre: "Teclado sintetizador rojo",
    descripcion: "Sintetizador compacto para crear sonidos y tocar en vivo.",
    precio: 849000,
    stock: 4,
    estado: "disponible",
    vendedor: "MiKet Store",
    categorias: [{ id: 2, nombre: "Teclados" }, { id: 8, nombre: "Estudio" }],
    especificaciones: [{ nombre: "61 teclas" }, { nombre: "MIDI" }],
    imagenes: [image("photo-1570698824041-22cbab696486", "Teclado sintetizador rojo")],
    valoracionPromedio: 4.8,
    totalValoraciones: 15,
    createdAt: "2026-08-16",
  },
  {
    id: 16,
    nombre: "Batería acústica",
    descripcion: "Batería de cinco piezas para ensayo y presentaciones.",
    precio: 2299000,
    stock: 2,
    estado: "casi agotado",
    vendedor: "MiKet Store",
    categorias: [{ id: 3, nombre: "Percusión" }],
    especificaciones: [{ nombre: "5 piezas" }, { nombre: "Herrajes incluidos" }],
    imagenes: [image("photo-1519892300165-cb5542fb47c7", "Batería acústica de cinco piezas")],
    valoracionPromedio: 4.9,
    totalValoraciones: 17,
    createdAt: "2026-08-14",
  },
  {
    id: 17,
    nombre: "Micrófono dinámico",
    descripcion: "Micrófono dinámico cardioide para voz, escenario y podcast.",
    precio: 189000,
    stock: 11,
    estado: "disponible",
    vendedor: "MiKet Store",
    categorias: [{ id: 5, nombre: "Grabación" }, { id: 4, nombre: "Audio" }],
    especificaciones: [{ nombre: "Cardioide" }, { nombre: "Conexión XLR" }],
    imagenes: [image("photo-1590602846581-7d3eec520d07", "Micrófono dinámico negro")],
    valoracionPromedio: 4.6,
    totalValoraciones: 23,
    createdAt: "2026-08-12",
  },
  {
    id: 18,
    nombre: "Amplificador Fender",
    descripcion: "Amplificador Fender compacto para práctica en casa y estudio.",
    precio: 439000,
    stock: 5,
    estado: "disponible",
    vendedor: "MiKet Store",
    categorias: [{ id: 7, nombre: "Amplificación" }, { id: 1, nombre: "Guitarras" }],
    especificaciones: [{ nombre: "40 W" }, { nombre: "Canal limpio" }],
    imagenes: [image("photo-1557855684-8aa6f40997df", "Amplificador Fender para guitarra")],
    valoracionPromedio: 4.7,
    totalValoraciones: 20,
    createdAt: "2026-08-10",
  },
  {
    id: 19,
    nombre: "Ukelele concierto",
    descripcion: "Ukelele de concierto con acabado natural y sonido cálido.",
    precio: 239000,
    stock: 7,
    estado: "disponible",
    vendedor: "MiKet Store",
    categorias: [{ id: 1, nombre: "Guitarras" }],
    especificaciones: [{ nombre: "4 cuerdas" }, { nombre: "Tamaño concierto" }],
    imagenes: [image("photo-1583185732715-724afe237b51", "Ukeleles de madera en exhibición")],
    valoracionPromedio: 4.5,
    totalValoraciones: 10,
    createdAt: "2026-08-08",
  },
  {
    id: 20,
    nombre: "Cable XLR de 5 metros",
    descripcion: "Cable balanceado con conectores metálicos para conexión de audio.",
    precio: 69000,
    stock: 15,
    estado: "disponible",
    vendedor: "MiKet Store",
    categorias: [{ id: 6, nombre: "Accesorios" }, { id: 5, nombre: "Grabación" }],
    especificaciones: [{ nombre: "5 metros" }, { nombre: "XLR balanceado" }],
    imagenes: [image("photo-1595756630797-e3c9ee1a9002", "Cable XLR para micrófono")],
    valoracionPromedio: 4.4,
    totalValoraciones: 6,
    createdAt: "2026-08-06",
  },
  {
    id: 21,
    nombre: "Guitarra semi-hueca",
    descripcion: "Guitarra eléctrica semi-hueca con tono cálido para jazz y blues.",
    precio: 1299000,
    stock: 3,
    estado: "casi agotado",
    vendedor: "MiKet Store",
    categorias: [{ id: 1, nombre: "Guitarras" }],
    especificaciones: [{ nombre: "Cuerpo semi-hueco" }, { nombre: "6 cuerdas" }],
    imagenes: [image("photo-1519508234439-4f23643125c1", "Colección de guitarras eléctricas semi-huecas")],
    valoracionPromedio: 4.8,
    totalValoraciones: 12,
    createdAt: "2026-08-04",
  },
  {
    id: 22,
    nombre: "Guitarra electroacústica",
    descripcion: "Guitarra acústica con previo integrado para conectar a amplificadores.",
    precio: 689000,
    stock: 6,
    estado: "disponible",
    vendedor: "MiKet Store",
    categorias: [{ id: 1, nombre: "Guitarras" }],
    especificaciones: [{ nombre: "Electroacústica" }, { nombre: "6 cuerdas" }],
    imagenes: [image("photo-1614355013870-f3916bc15ced", "Guitarra acústica en soporte")],
    valoracionPromedio: 4.7,
    totalValoraciones: 15,
    createdAt: "2026-08-02",
  },
  {
    id: 23,
    nombre: "Guitarra eléctrica negra",
    descripcion: "Guitarra eléctrica de cuerpo sólido y acabado negro brillante.",
    precio: 949000,
    stock: 5,
    estado: "disponible",
    vendedor: "MiKet Store",
    categorias: [{ id: 1, nombre: "Guitarras" }],
    especificaciones: [{ nombre: "Cuerpo sólido" }, { nombre: "6 cuerdas" }],
    imagenes: [image("photo-1543840950-e6529649ce74", "Guitarra eléctrica negra")],
    valoracionPromedio: 4.6,
    totalValoraciones: 11,
    createdAt: "2026-07-31",
  },
  {
    id: 24,
    nombre: "Guitarra clásica de concierto",
    descripcion: "Guitarra clásica de cuerdas de nylon para estudio y repertorio acústico.",
    precio: 579000,
    stock: 8,
    estado: "disponible",
    vendedor: "MiKet Store",
    categorias: [{ id: 1, nombre: "Guitarras" }],
    especificaciones: [{ nombre: "Cuerdas de nylon" }, { nombre: "Tapa de abeto" }],
    imagenes: [image("photo-1558098329-a11cff621064", "Guitarra acústica amarilla")],
    valoracionPromedio: 4.5,
    totalValoraciones: 9,
    createdAt: "2026-07-29",
  },
  {
    id: 25,
    nombre: "Piano digital de 88 teclas",
    descripcion: "Piano digital de tamaño completo para práctica y presentaciones.",
    precio: 1899000,
    stock: 3,
    estado: "casi agotado",
    vendedor: "MiKet Store",
    categorias: [{ id: 2, nombre: "Teclados" }, { id: 8, nombre: "Estudio" }],
    especificaciones: [{ nombre: "88 teclas" }, { nombre: "Acción contrapesada" }],
    imagenes: [image("photo-1598653222000-6b7b7a552625", "Teclado de piano digital")],
    valoracionPromedio: 4.9,
    totalValoraciones: 14,
    createdAt: "2026-07-27",
  },
  {
    id: 26,
    nombre: "Sintetizador con controles analógicos",
    descripcion: "Sintetizador con teclas y controles dedicados para diseño sonoro.",
    precio: 1199000,
    stock: 4,
    estado: "disponible",
    vendedor: "MiKet Store",
    categorias: [{ id: 2, nombre: "Teclados" }, { id: 8, nombre: "Estudio" }],
    especificaciones: [{ nombre: "Controles analógicos" }, { nombre: "MIDI" }],
    imagenes: [image("photo-1733900606117-2522d8ed3a7b", "Teclado sintetizador con perillas")],
    valoracionPromedio: 4.8,
    totalValoraciones: 13,
    createdAt: "2026-07-25",
  },
  {
    id: 27,
    nombre: "Teclado controlador MIDI",
    descripcion: "Controlador MIDI compacto para producción musical y directo.",
    precio: 459000,
    stock: 7,
    estado: "disponible",
    vendedor: "MiKet Store",
    categorias: [{ id: 2, nombre: "Teclados" }, { id: 8, nombre: "Estudio" }],
    especificaciones: [{ nombre: "Control MIDI" }, { nombre: "USB" }],
    imagenes: [image("photo-1634041551278-a843c116ff28", "Teclados electrónicos")],
    valoracionPromedio: 4.6,
    totalValoraciones: 16,
    createdAt: "2026-07-23",
  },
  {
    id: 28,
    nombre: "Batería acústica roja",
    descripcion: "Batería de cinco piezas con acabado rojo para ensayo y escenario.",
    precio: 2499000,
    stock: 2,
    estado: "casi agotado",
    vendedor: "MiKet Store",
    categorias: [{ id: 3, nombre: "Percusión" }],
    especificaciones: [{ nombre: "5 piezas" }, { nombre: "Acústica" }],
    imagenes: [image("photo-1461784121038-f088ca1e7714", "Batería acústica roja")],
    valoracionPromedio: 4.9,
    totalValoraciones: 18,
    createdAt: "2026-07-21",
  },
  {
    id: 29,
    nombre: "Batería acústica negra",
    descripcion: "Batería acústica de acabado oscuro para ensayo y presentaciones.",
    precio: 1099000,
    stock: 4,
    estado: "disponible",
    vendedor: "MiKet Store",
    categorias: [{ id: 3, nombre: "Percusión" }, { id: 8, nombre: "Estudio" }],
    especificaciones: [{ nombre: "Acústica" }, { nombre: "Set de percusión" }],
    imagenes: [image("photo-1504653601220-f1a8ece25e4a", "Batería acústica negra")],
    valoracionPromedio: 4.6,
    totalValoraciones: 10,
    createdAt: "2026-07-19",
  },
  {
    id: 30,
    nombre: "Set de batería para escenario",
    descripcion: "Set acústico con bombo, redoblante y toms para presentaciones.",
    precio: 2799000,
    stock: 2,
    estado: "casi agotado",
    vendedor: "MiKet Store",
    categorias: [{ id: 3, nombre: "Percusión" }],
    especificaciones: [{ nombre: "Set completo" }, { nombre: "Acústica" }],
    imagenes: [image("photo-1681855018254-a54babc49ea3", "Batería acústica en escenario")],
    valoracionPromedio: 4.8,
    totalValoraciones: 8,
    createdAt: "2026-07-17",
  },
  {
    id: 31,
    nombre: "Audífonos de estudio cerrados",
    descripcion: "Audífonos cerrados para monitoreo durante grabaciones.",
    precio: 259000,
    stock: 9,
    estado: "disponible",
    vendedor: "MiKet Store",
    categorias: [{ id: 4, nombre: "Audio" }, { id: 8, nombre: "Estudio" }],
    especificaciones: [{ nombre: "Diseño cerrado" }, { nombre: "Monitoreo" }],
    imagenes: [image("photo-1577174881658-0f30ed549adc", "Audífonos de estudio")],
    valoracionPromedio: 4.7,
    totalValoraciones: 19,
    createdAt: "2026-07-15",
  },
  {
    id: 32,
    nombre: "Micrófono de condensador con filtro",
    descripcion: "Micrófono de condensador para voces con filtro antipop.",
    precio: 399000,
    stock: 6,
    estado: "disponible",
    vendedor: "MiKet Store",
    categorias: [{ id: 5, nombre: "Grabación" }, { id: 8, nombre: "Estudio" }],
    especificaciones: [{ nombre: "Condensador" }, { nombre: "Filtro antipop" }],
    imagenes: [image("photo-1531651008558-ed1740375b39", "Micrófono de condensador con filtro antipop")],
    valoracionPromedio: 4.8,
    totalValoraciones: 16,
    createdAt: "2026-07-13",
  },
  {
    id: 33,
    nombre: "Micrófono dinámico con soporte",
    descripcion: "Micrófono dinámico con soporte ajustable para voces y podcast.",
    precio: 229000,
    stock: 8,
    estado: "disponible",
    vendedor: "MiKet Store",
    categorias: [{ id: 5, nombre: "Grabación" }, { id: 6, nombre: "Accesorios" }],
    especificaciones: [{ nombre: "Dinámico" }, { nombre: "Soporte incluido" }],
    imagenes: [image("photo-1601856254555-a9c0ebef8af3", "Micrófono con soporte")],
    valoracionPromedio: 4.5,
    totalValoraciones: 11,
    createdAt: "2026-07-11",
  },
  {
    id: 34,
    nombre: "Micrófono vocal de escenario",
    descripcion: "Micrófono para interpretación vocal en ensayos y presentaciones.",
    precio: 159000,
    stock: 12,
    estado: "disponible",
    vendedor: "MiKet Store",
    categorias: [{ id: 5, nombre: "Grabación" }, { id: 4, nombre: "Audio" }],
    especificaciones: [{ nombre: "Vocal" }, { nombre: "Conexión XLR" }],
    imagenes: [image("photo-1615821430614-3d7d2685e2f2", "Micrófono negro de escenario")],
    valoracionPromedio: 4.5,
    totalValoraciones: 14,
    createdAt: "2026-07-09",
  },
  {
    id: 35,
    nombre: "Mezcladora de audio compacta",
    descripcion: "Mezcladora compacta con controles físicos para audio en vivo.",
    precio: 649000,
    stock: 5,
    estado: "disponible",
    vendedor: "MiKet Store",
    categorias: [{ id: 4, nombre: "Audio" }, { id: 8, nombre: "Estudio" }],
    especificaciones: [{ nombre: "Mezcladora" }, { nombre: "Controles físicos" }],
    imagenes: [image("photo-1618609377864-68609b857e90", "Mezcladora de audio")],
    valoracionPromedio: 4.7,
    totalValoraciones: 12,
    createdAt: "2026-07-07",
  },
  {
    id: 36,
    nombre: "Mezcladora de audio de 8 canales",
    descripcion: "Mezcladora de ocho canales para grupos, ensayos y eventos pequeños.",
    precio: 899000,
    stock: 3,
    estado: "casi agotado",
    vendedor: "MiKet Store",
    categorias: [{ id: 4, nombre: "Audio" }, { id: 7, nombre: "Amplificación" }],
    especificaciones: [{ nombre: "8 canales" }, { nombre: "Ecualizador" }],
    imagenes: [image("photo-1535406208535-1429839cfd13", "Consola mezcladora de audio")],
    valoracionPromedio: 4.8,
    totalValoraciones: 9,
    createdAt: "2026-07-05",
  },
  {
    id: 37,
    nombre: "Mezcladora para estudio",
    descripcion: "Consola de mezcla para controlar varias fuentes en el estudio.",
    precio: 759000,
    stock: 4,
    estado: "disponible",
    vendedor: "MiKet Store",
    categorias: [{ id: 4, nombre: "Audio" }, { id: 8, nombre: "Estudio" }],
    especificaciones: [{ nombre: "Mezcladora" }, { nombre: "Salidas estéreo" }],
    imagenes: [image("photo-1574517947730-55cb23e608c2", "Consola de audio para estudio")],
    valoracionPromedio: 4.6,
    totalValoraciones: 7,
    createdAt: "2026-07-03",
  },
  {
    id: 38,
    nombre: "Teclado de producción musical",
    descripcion: "Teclado electrónico junto a un altavoz para producción y práctica.",
    precio: 1399000,
    stock: 3,
    estado: "casi agotado",
    vendedor: "MiKet Store",
    categorias: [{ id: 2, nombre: "Teclados" }],
    especificaciones: [{ nombre: "Teclado electrónico" }, { nombre: "Portátil" }],
    imagenes: [image("photo-1642177192159-f76c78e07690", "Teclado electrónico con equipo de audio")],
    valoracionPromedio: 4.7,
    totalValoraciones: 12,
    createdAt: "2026-07-01",
  },
  {
    id: 39,
    nombre: "Guitarra acústica de estudio",
    descripcion: "Guitarra acústica de madera para práctica diaria y composición.",
    precio: 529000,
    stock: 7,
    estado: "disponible",
    vendedor: "MiKet Store",
    categorias: [{ id: 1, nombre: "Guitarras" }],
    especificaciones: [{ nombre: "Madera" }, { nombre: "6 cuerdas" }],
    imagenes: [image("photo-1541689592655-f5f52825a3b8", "Guitarra acústica marrón")],
    valoracionPromedio: 4.6,
    totalValoraciones: 10,
    createdAt: "2026-06-29",
  },
  {
    id: 40,
    nombre: "Guitarra acústica con soporte",
    descripcion: "Guitarra acústica de acabado natural para estudio y presentaciones.",
    precio: 599000,
    stock: 5,
    estado: "disponible",
    vendedor: "MiKet Store",
    categorias: [{ id: 1, nombre: "Guitarras" }],
    especificaciones: [{ nombre: "6 cuerdas" }, { nombre: "Acústica" }],
    imagenes: [image("photo-1614355013870-f3916bc15ced", "Guitarra acústica en soporte")],
    valoracionPromedio: 4.7,
    totalValoraciones: 8,
    createdAt: "2026-06-27",
  },
];

export const demoUser = {
  id: "demo-user",
  nombre: "Andrea Tafur",
  email: "andrea.tafur@miketstore.com",
  password: "MiKet2026!",
};

const userStorageKey = "miketstore-current-user";
const authChangeEvent = "miketstore:auth-change";
let currentUserCacheRaw;
let hasCurrentUserCache = false;
let currentUserCacheValue = null;

export function subscribeToCurrentUser(callback) {
  window.addEventListener(authChangeEvent, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(authChangeEvent, callback);
    window.removeEventListener("storage", callback);
  };
}

function notifyAuthChange() {
  window.dispatchEvent(new Event(authChangeEvent));
}

function userKey(name, userId = demoUser.id) {
  return `miketstore-${name}-${userId}`;
}

function readList(key) {
  try {
    const value = JSON.parse(localStorage.getItem(key) || "[]");
    return Array.isArray(value) ? value : [];
  } catch {
    return [];
  }
}

export function getCurrentUser() {
  try {
    const rawUser = localStorage.getItem(userStorageKey);
    if (!hasCurrentUserCache || rawUser !== currentUserCacheRaw) {
      currentUserCacheRaw = rawUser;
      hasCurrentUserCache = true;
      try {
        const storedUser = JSON.parse(rawUser || "null");
        currentUserCacheValue = storedUser?.id === demoUser.id
          ? { ...storedUser, nombre: demoUser.nombre, email: demoUser.email }
          : storedUser;
      } catch {
        currentUserCacheValue = null;
      }
    }
    return currentUserCacheValue;
  } catch {
    return null;
  }
}

export function loginDemoUser(email, password) {
  if (email.trim().toLowerCase() !== demoUser.email || password !== demoUser.password) return false;
  localStorage.setItem(userStorageKey, JSON.stringify({ id: demoUser.id, nombre: demoUser.nombre, email: demoUser.email }));
  notifyAuthChange();
  return true;
}

export function logoutDemoUser() {
  localStorage.removeItem(userStorageKey);
  notifyAuthChange();
}

export function getLocalFavorites(userId = demoUser.id) {
  const key = userKey("favorites", userId);
  let savedIds = readList(key);
  if (savedIds.length === 0 && localStorage.getItem(key) === null && userId === demoUser.id) {
    savedIds = [
      { productId: 1, createdAt: "2026-09-18T10:00:00.000Z" },
      { productId: 3, createdAt: "2026-09-19T10:00:00.000Z" },
      { productId: 7, createdAt: "2026-09-20T10:00:00.000Z" },
    ];
    localStorage.setItem(key, JSON.stringify(savedIds));
  }
  return savedIds
    .map(({ productId, createdAt }) => {
      const producto = products.find((product) => product.id === productId);
      return producto ? { id: productId, producto, createdAt } : null;
    })
    .filter(Boolean);
}

export function toggleLocalFavorite(productId, userId = demoUser.id) {
  const key = userKey("favorites", userId);
  const savedFavorites = getLocalFavorites(userId);
  const isSaved = savedFavorites.some((favorite) => favorite.id === productId);
  const nextFavorites = isSaved
    ? savedFavorites.filter((favorite) => favorite.id !== productId)
    : [{ id: productId, producto: products.find((product) => product.id === productId), createdAt: new Date().toISOString() }, ...savedFavorites];

  localStorage.setItem(key, JSON.stringify(nextFavorites.map(({ id, createdAt }) => ({ productId: id, createdAt }))));
  return nextFavorites;
}

export function getLocalCart(userId = demoUser.id) {
  return readList(userKey("cart", userId))
    .map(({ productId, quantity }) => {
      const producto = products.find((product) => product.id === productId);
      return producto ? { producto, quantity } : null;
    })
    .filter(Boolean);
}

export function addToCart(productId, userId = demoUser.id) {
  const key = userKey("cart", userId);
  const cart = getLocalCart(userId);
  const existing = cart.find((item) => item.producto.id === productId);
  const product = products.find((item) => item.id === productId);
  if (!product || product.stock < 1 || (existing && existing.quantity >= product.stock)) return cart;
  const updated = existing
    ? cart.map((item) => item.producto.id === productId ? { ...item, quantity: item.quantity + 1 } : item)
    : [...cart, { producto: product, quantity: 1 }];
  localStorage.setItem(key, JSON.stringify(updated.map(({ producto, quantity }) => ({ productId: producto.id, quantity }))));
  return updated;
}

export function updateCartQuantity(productId, quantity, userId = demoUser.id) {
  const key = userKey("cart", userId);
  const product = products.find((item) => item.id === productId);
  const updated = quantity < 1
    ? getLocalCart(userId).filter((item) => item.producto.id !== productId)
    : getLocalCart(userId).map((item) => item.producto.id === productId
      ? { ...item, quantity: Math.min(quantity, product?.stock ?? quantity) }
      : item);
  localStorage.setItem(key, JSON.stringify(updated.map(({ producto, quantity: itemQuantity }) => ({ productId: producto.id, quantity: itemQuantity }))));
  return updated;
}

export function removeFromCart(productId, userId = demoUser.id) {
  return updateCartQuantity(productId, 0, userId);
}

export function getLocalOrders(userId = demoUser.id) {
  return readList(userKey("orders", userId));
}

export function checkoutCart(userId = demoUser.id) {
  const cart = getLocalCart(userId);
  if (cart.length === 0) return null;
  const ordersKey = userKey("orders", userId);
  const order = {
    id: `MK-${Date.now()}`,
    createdAt: new Date().toISOString(),
    status: "Confirmado",
    items: cart.map(({ producto, quantity }) => ({ productId: producto.id, nombre: producto.nombre, precio: producto.precio, quantity, imagenes: producto.imagenes })),
    total: cart.reduce((total, { producto, quantity }) => total + producto.precio * quantity, 0),
  };
  localStorage.setItem(ordersKey, JSON.stringify([order, ...getLocalOrders(userId)]));
  localStorage.setItem(userKey("cart", userId), "[]");
  return order;
}