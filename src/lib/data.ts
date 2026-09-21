// ============================================================
// DIALKA 2.0 — Fuente Única de Contenido (Inventario Auditado)
// Fuente: https://www.dialka.com.ve/
// ============================================================

export const COMPANY = {
  name: "Balanzas y Servicios Dialka, S.A.",
  slogan: "Soluciones de Pesaje para Venezuela y el Mundo",
  description:
    "25 años siendo líderes en Venezuela en venta, alquiler y servicio técnico de equipos de pesaje industriales, comerciales y agropecuarios.",
  foundedYear: 2001,
  mission:
    "Ofrecer soluciones innovadoras de medición y pesaje, mejorando los sistemas del sector en Venezuela y el mundo.",
  vision:
    "Crear soluciones de pesaje innovadoras, garantizando confiabilidad, combinando equipos de alta precisión con conocimiento y talento humano.",
  metrics: [
    { value: "25", label: "Años en el mercado" },
    { value: "5.000", label: "Proyectos concluidos" },
    { value: "307", label: "Desarrollos de software" },
    { value: "100%", label: "Satisfacción garantizada" },
  ],
};

export const CONTACT = {
  headquarters: [
    {
      city: "Caracas",
      rif: "J-30814715-0",
      address:
        "Av. Los Próceres, San Bernardino, Qta. Los Juanes No. 46, Caracas",
      phones: {
        main: "(+58 414) 277.00.24",
        ventas: ["+58 (414) 171.81.50", "+58 (414) 247.68.13"],
        soporte: ["+58 (412) 232.06.09", "+58 (412) 232.06.10"],
      },
      email: "dialka@dialka.com.ve",
      schedule: "Lunes a Viernes, 08:00 – 17:00",
    },
    {
      city: "Maracay",
      rif: "J-50269333-5",
      address:
        "Av. Intercomunal Turmero, C.C. Coche Aragua, P.B. Local 52, La Morita, Edo. Aragua",
      phones: {
        main: "0243-234.33.60 / 234.33.72",
        ventas: ["0243-234.33.60", "0243-234.33.72", "+58 (414) 589.26.01"],
        soporte: ["+58 (412) 232.06.08", "+58 (412) 232.06.13"],
      },
      email: "servicios.maracay@dialka.com.ve",
      schedule: "Lunes a Viernes, 08:00 – 17:00",
    },
  ],
  usa: {
    phone: "+1 (786) 321-4890",
    email: "odkinvestment@gmail.com",
  },
  whatsapp: "584142320610",
  socials: [
    { name: "TikTok", url: "https://www.tiktok.com/@balanzasyservicios" },
    { name: "Facebook", url: "https://www.facebook.com/balanzas.dialka.1238" },
    {
      name: "Instagram",
      url: "https://www.instagram.com/balanzasyserviciosdialka",
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/channel/UCjFr4xTP8nk2Xgkr0c_G6SQ",
    },
    { name: "LinkedIn", url: "https://linkedin.com/in/balanzasdialka" },
  ],
};

export const NAV_LINKS = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/servicios" },
  { label: "SENCAMER", href: "/sencamer" },
  { label: "Productos", href: "/productos" },
  { label: "Proyectos", href: "/proyectos" },
  { label: "Alquiler", href: "/alquiler" },
  { label: "Software", href: "/software" },
  { label: "Contacto", href: "/contacto" },
];

export const FIELD_PROJECTS = [
  {
    id: "calibracion-silos-portuguesa",
    title: "Calibración con Camión Patrón en Silos de Grano",
    category: "Calibración y Metrología",
    location: "Acarigua, Edo. Portuguesa",
    state: "Portuguesa",
    description:
      "Operativo de calibración y certificación metrológica utilizando camión dotado de grúa hidráulica y masas patrón certificadas de 500 kg y 1.000 kg en complejo de silos agroindustriales.",
    image: "/images/proyectos/camion-calibrador.jpg",
    specs: ["Pesas patrón 1.000 kg", "Grúa hidráulica articulada", "Trazabilidad SENCAMER"],
  },
  {
    id: "montaje-camionera-aragua",
    title: "Obra Civil y Montaje de Báscula Camionera 18m",
    category: "Pesaje Vehicular Pesado",
    location: "Cagua, Edo. Aragua",
    state: "Aragua",
    description:
      "Construcción de fosa de concreto armado, colocación de vigas I-Beam estructurales y montaje de plataforma de pesaje vehicular de 18 metros con celdas de carga de compresión de alta capacidad.",
    image: "/images/proyectos/montaje-camionera.jpg",
    specs: ["Plataforma 18 metros", "Vigas estructurales I-Beam", "Capacidad 80 Toneladas"],
  },
  {
    id: "bascula-ganadera-guarico",
    title: "Instalación de Báscula Ganadera en Finca",
    category: "Pesaje Agropecuario",
    location: "Calabozo, Edo. Guárico",
    state: "Guárico",
    description:
      "Suministro y montaje de báscula ganadera para pesaje individual y colectivo de ganado vacuno en manga de manejo, equipada con indicador digital hermético para intemperie.",
    image: "/images/proyectos/bascula-ganadera.jpg",
    specs: ["Estructura galvanizada", "Indicador IP65 intemperie", "Capacidad 3.000 kg"],
  },
  {
    id: "metrologia-silos-carabobo",
    title: "Inspección y Ajuste Metrológico en Planta Industrial",
    category: "Control Industrial",
    location: "Valencia, Edo. Carabobo",
    state: "Carabobo",
    description:
      "Servicio técnico especializado en ajuste de celdas de carga y verificación de sistemas electrónicos de pesaje en tolvas de dosificación y tanques de almacenamiento industrial.",
    image: "/images/proyectos/inspeccion-planta.jpg",
    specs: ["Celdas de carga herméticas", "Terminal digital industrial", "Prueba de repetibilidad"],
  },
  {
    id: "calibracion-masas-barinas",
    title: "Certificación Metrológica de Báscula de Camiones 60TN",
    category: "Calibración y Metrología",
    location: "Barinas, Edo. Barinas",
    state: "Barinas",
    description:
      "Verificación de excentricidad, repetibilidad y linealidad con pesas patrón clase M1 en central azucarero del estado Barinas, emitiendo informe técnico de calibración.",
    image: "/images/servicios/calibracion-masas.jpg",
    specs: ["Tolerancia COVENIN 2548", "Masas patrón clase M1", "Informe SENCAMER"],
  },
  {
    id: "pesaje-ejes-zulia",
    title: "Sistema de Pesaje de Ejes Portátil en Puerto Comercial",
    category: "Pesaje Vehicular Pesado",
    location: "Maracaibo, Edo. Zulia",
    state: "Zulia",
    description:
      "Puesta en marcha de plataformas portátiles de pesaje por eje para control de sobrecarga de gandolas de carga pesada y contenedores en zona portuaria del Lago de Maracaibo.",
    image: "/images/alquiler/ejes-portatil.jpg",
    specs: ["Capacidad 40 TN por eje", "Inalámbrico RF", "Software de Pesaje Ejes"],
  },
  {
    id: "automatizacion-silos-miranda",
    title: "Automatización y Software de Tolvas en Planta Procesadora",
    category: "Software y Automatización",
    location: "Guatire, Edo. Miranda",
    state: "Miranda",
    description:
      "Integración de celdas de carga con indicador inteligente y software Dialka WeighMaster para dosificación automática de mezclas en seco y control de inventarios.",
    image: "/images/software/software-camiones.jpg",
    specs: ["Conectividad RS-485 / Ethernet", "Dosificación automática", "Reportes en Excel"],
  },
  {
    id: "modernizacion-camionera-caracas",
    title: "Modernización Electrónica de Báscula Camionera 80TN",
    category: "Pesaje Vehicular Pesado",
    location: "Caracas, Distrito Capital",
    state: "Distrito Capital",
    description:
      "Conversión de antigua romana mecánica a sistema full electrónico con celdas de compresión canister de 30 toneladas, caja sumadora hermética IP68 y terminal digital.",
    image: "/images/proyectos/montaje-camionera.jpg",
    specs: ["Celdas Canister IP68", "Supresores de transitorios", "Doble visor LED remoto"],
  },
  {
    id: "celdas-tanques-lara",
    title: "Pesaje Electrónico de Silos Verticales de Harina",
    category: "Control Industrial",
    location: "Barquisimeto, Edo. Lara",
    state: "Lara",
    description:
      "Montaje de módulos de pesaje con celdas de carga autocentrantes bajo 4 silos verticales de 60 toneladas de capacidad en importante molino harinero larense.",
    image: "/images/proyectos/inspeccion-planta.jpg",
    specs: ["Módulos autocentrantes", "Protección contra viento/sismo", "Lectura continua 24/7"],
  },
  {
    id: "laboratorio-calibracion-anzoategui",
    title: "Calibración de Balanzas de Precisión en Complejo Químico",
    category: "Calibración y Metrología",
    location: "Barcelona, Edo. Anzoátegui",
    state: "Anzoátegui",
    description:
      "Mantenimiento preventivo, ajuste fino con masas patrón clase E2 y calibración trazable SENCAMER para balanzas analíticas en laboratorios de control de calidad.",
    image: "/images/sencamer/balanza-certificada.jpg",
    specs: ["Patrones clase E2/F1", "Certificado de calibración", "Control de excentricidad"],
  },
];

export const PRODUCT_CATEGORIES = [
  {
    id: "agropecuario",
    name: "Pesaje Agropecuario",
    description:
      "Equipos diseñados para el campo venezolano: ganado, aves, porcinos y vegetales.",
    image: "/images/productos/agropecuario.jpg",
    products: [
      "Básculas ganaderas",
      "Básculas mecánicas para aves",
      "Básculas para porcinos",
      "Básculas veterinarias",
      "Barras pesadoras",
      "Básculas para bovinos y caprinos",
    ],
  },
  {
    id: "analitico",
    name: "Pesaje Analítico",
    description:
      "Balanzas de alta precisión para laboratorio y control de calidad.",
    image: "/images/productos/analitico.jpg",
    products: [
      "Balanza Apolo Lab 1000g × 0.1g",
      "Balanza Apolo Lab 3000g × 0.1g",
      "Balanza Apolo Lab 5000g × 1g",
      "Balanza Apolo Lab 8000g × 1g",
    ],
  },
  {
    id: "comercial",
    name: "Pesaje Comercial",
    description:
      "Soluciones para comercios, mercados, aeropuertos y puntos de venta.",
    image: "/images/productos/comercial.jpg",
    products: [
      "Balanzas digitales de mostrador",
      "Balanzas colgantes digitales",
      "Balanzas para aeropuertos",
    ],
  },
  {
    id: "industrial",
    name: "Pesaje Industrial",
    description:
      "Equipos robustos para plantas de producción, empaque y logística.",
    image: "/images/productos/industrial.jpg",
    products: [
      "Básculas colgantes industriales",
      "Ensacadoras automáticas",
      "Plataformas industriales",
      "Indicadores digitales de peso",
    ],
  },
  {
    id: "vehicular",
    name: "Pesaje Vehicular",
    description:
      "Básculas camioneras portátiles y fijas para control de carga en puertos, plantas y centros de acopio.",
    image: "/images/productos/vehicular.jpg",
    products: [
      "Básculas camioneras portátiles",
      "Básculas camioneras fijas",
    ],
  },
];

export const SERVICES = [
  {
    id: "calibracion-masas",
    title: "Calibración con Masas Patrón",
    tag: "Metrología Certificada",
    description:
      "Calibración rigurosa con masas patrón trazables a estándares nacionales (SENCAMER) e internacionales (OIML). Pruebas de excentricidad, repetibilidad y linealidad para balanzas analíticas, comerciales e industriales.",
    features: [
      "Juegos de masas patrón Clase F1 y M1 certificadas",
      "Emisión de Certificados de Calibración con cálculo de incertidumbre",
      "Cumplimiento estricto de normas COVENIN y SENCAMER",
      "Ajuste de span y calibración de celda interna",
    ],
  },
  {
    id: "mantenimiento-preventivo",
    title: "Mantenimiento Preventivo Planificado",
    tag: "Continuidad Operativa",
    description:
      "Programas periódicos de inspección, limpieza especializada, lubricación de apoyos y verificación electrónica para evitar paradas no programadas y asegurar la vida útil de sus básculas.",
    features: [
      "Planes bimestrales, trimestrales o semestrales según su flujo de trabajo",
      "Inspección de topes mecánicos, celdas y cajas sumadoras",
      "Verificación de repetibilidad y calibración cero",
      "Informe técnico detallado del estado de cada equipo",
    ],
  },
  {
    id: "ajuste-metrologico",
    title: "Ajuste Metrológico y Calibración Fina",
    tag: "Alta Precisión",
    description:
      "Ajuste de parámetros electrónicos y curvas de linealidad en indicadores digitales de pesaje. Configuración de filtros digitales para entornos con vibración mecánica o viento en exteriores.",
    features: [
      "Ajuste fino de conversión analógico-digital (A/D)",
      "Configuración de filtros digitales anti-vibración",
      "Calibración de terminales multi-escala y dosificación",
      "Integración de protocolos de salida RS-232, Ethernet y 4-20mA",
    ],
  },
  {
    id: "soporte-fosas",
    title: "Soporte y Mantenimiento en Fosas Camioneras",
    tag: "Pesaje Vehicular Pesado",
    description:
      "Servicio especializado para básculas camioneras de 18 a 24 metros: limpieza de fosa, desagüe, revisión de apoyos elastoméricos, verificación de barras estabilizadoras de oscilación y alineación estructural.",
    features: [
      "Mantenimiento integral de fosas y drenajes pluviales",
      "Inspección de celdas de compresión tipo columna de 30T",
      "Verificación de barras de oscilación longitudinales y transversales",
      "Prueba de pesaje seccional con camión patrón propio",
    ],
  },
  {
    id: "mantenimiento-correctivo",
    title: "Mantenimiento Correctivo de Emergencia",
    tag: "Respuesta Rápida",
    description:
      "Diagnóstico y sustitución inmediata de celdas de carga dañadas por sobretensiones eléctricas, humedad o impactos mecánicos. Reparación de cableado blindado y tarjetas sumadoras.",
    features: [
      "Atención técnica prioritaria para líneas críticas",
      "Inventario continuo de celdas de carga y repuestos originales",
      "Instrumental de diagnóstico calibrado para detección de fallas",
      "Puesta en marcha y verificación metrológica en menos de 24 horas",
    ],
  },
  {
    id: "certificacion-sencamer",
    title: "Certificación y Gestión SENCAMER",
    tag: "Metrología Legal",
    description:
      "Asesoría técnica y gestión integral para la obtención y renovación de Aprobación de Modelo ante SENCAMER. Colocación de precintos oficiales de plomo/holográficos para uso comercial legal.",
    features: [
      "Verificación de división de escala (e = d) según providencia",
      "Instalación de placa de identificación metálica serializada",
      "Acompañamiento en fiscalizaciones comerciales e industriales",
      "Garantía de cumplimiento legal ante SUNDDE y SENCAMER",
    ],
  },
];

export const SENCAMER_MODELS = [
  { capacity: "30 kg", division: "10 g", use: "Comercial / Mostrador" },
  { capacity: "200 kg", division: "100 g", use: "Comercial / Industrial" },
  { capacity: "500 kg", division: "200 g", use: "Industrial / Agropecuario" },
  { capacity: "1.000 kg", division: "500 g", use: "Industrial" },
  { capacity: "3.000 kg", division: "1 kg", use: "Industrial / Agropecuario" },
  { capacity: "6.000 kg", division: "2 kg", use: "Agropecuario / Vehicular" },
];

export const RENTAL_EQUIPMENT = [
  {
    name: "Sistema de Pesaje por Eje — 20 Toneladas",
    description:
      "Báscula portátil por eje con capacidad de 20T. Ideal para control de carga en plantas, puertos y centros de acopio. Rápida instalación.",
    type: "Vehicular",
    image: "/images/alquiler/ejes-portatil.jpg",
  },
  {
    name: "Sistema de Pesaje por Eje — 40 Toneladas",
    description:
      "Sistema de alta capacidad para camiones de carga pesada. Diseño modular para instalación en campo, con indicador digital de alta resolución.",
    type: "Vehicular",
    image: "/images/proyectos/montaje-camionera.jpg",
  },
  {
    name: "Báscula Ganadera de Alquiler",
    description:
      "Plataforma robusta para pesaje de ganado. Disponible con operador técnico. Ideal para subastas, mataderos y haciendas.",
    type: "Agropecuario",
    image: "/images/productos/agropecuario.jpg",
  },
  {
    name: "Plataformas Industriales de Alquiler",
    description:
      "Plataformas de pesaje de distintas capacidades para uso temporal en almacenes, plantas de producción o eventos especiales.",
    type: "Industrial",
    image: "/images/productos/industrial.jpg",
  },
];

export const SOFTWARE_SYSTEMS = [
  {
    name: "Sistema de Pesaje de Camiones",
    description:
      "Control completo del flujo vehicular: registro de entrada/salida, emisión de tickets, reportes y control de inventario por pesaje.",
  },
  {
    name: "Sistema de Control de Bobinas",
    description:
      "Software especializado para el seguimiento y control de peso de bobinas de papel, acero, plástico y materiales similares.",
  },
  {
    name: "Sistema de Etiquetado por Peso",
    description:
      "Emisión automática de etiquetas con peso neto, tara y peso bruto. Compatible con impresoras térmicas y balanzas de plataforma.",
  },
  {
    name: "Sistema de Silos y Tanques",
    description:
      "Monitoreo visual y control por peso de silos de grano y tanques de líquidos. Visualización gráfica en tiempo real del nivel de llenado.",
  },
  {
    name: "Tableros PLC a la Medida",
    description:
      "Desarrollo de tableros de automatización y control basados en PLC para integración con sistemas de pesaje industriales existentes.",
  },
];

export const CLIENTS = [
  {
    name: "Pequiven",
    sector: "Petroquímica y Fertilizantes",
    desc: "Básculas camioneras y celdas de dosificación continua.",
    type: "Industrial",
    logo: "/images/clientes/pequiven.svg",
  },
  {
    name: "Rutaca Airlines",
    sector: "Aviación Comercial",
    desc: "Pesaje de equipaje y control de carga aeroportuaria.",
    type: "Aeronáutico",
    logo: "/images/clientes/rutaca.svg",
  },
  {
    name: "TEALCA",
    sector: "Transporte y Encomiendas",
    desc: "Balanzas de mostrador y plataformas logísticas en todo el país.",
    type: "Logística",
    logo: "/images/clientes/tealca.svg",
  },
  {
    name: "Charcutería Tovar",
    sector: "Alimentos y Embutidos",
    desc: "Balanzas comerciales homologadas SENCAMER y pesaje en línea.",
    type: "Alimentos",
    logo: "/images/clientes/tovar.svg",
  },
  {
    name: "Santa Barbara Airlines",
    sector: "Aviación Comercial",
    desc: "Sistemas de pesaje de equipaje y carga aérea.",
    type: "Aeronáutico",
    logo: "/images/clientes/sba.svg",
  },
  {
    name: "Silos Portuguesa",
    sector: "Agroindustria y Granos",
    desc: "Calibración con camión patrón en básculas de 80T.",
    type: "Agropecuario",
    logo: "/images/clientes/silos-portuguesa.svg",
  },
];

export const BRANDS = [
  {
    name: "Ohaus",
    origin: "USA / Global",
    category: "Balanzas Analíticas y Precisión",
    highlight: "Líder mundial en metrología de laboratorio",
    logo: "/images/marcas/ohaus.svg",
  },
  {
    name: "Keli Sensing",
    origin: "Global",
    category: "Celdas de Carga de Alta Capacidad",
    highlight: "Celdas tipo compresión, viga y tracción herméticas",
    logo: "/images/marcas/keli.svg",
  },
  {
    name: "CAS Corporation",
    origin: "Corea del Sur",
    category: "Indicadores y Balanzas Comerciales",
    highlight: "Equipos con homologación oficial SENCAMER",
    logo: "/images/marcas/cas.svg",
  },
  {
    name: "Sipel",
    origin: "Argentina / Latam",
    category: "Sistemas Industriales y Camioneros",
    highlight: "Electrónica robusta para pesaje vehicular",
    logo: "/images/marcas/sipel.svg",
  },
  {
    name: "Grupo Epelsa",
    origin: "España",
    category: "Pesaje Comercial e Industrial",
    highlight: "Sistemas etiquetadores y puntos de venta",
    logo: "/images/marcas/epelsa.svg",
  },
  {
    name: "Sky",
    origin: "Latam",
    category: "Indicadores Digitales y Plataformas",
    highlight: "Terminales de pesaje de alta durabilidad",
    logo: "/images/marcas/sky.svg",
  },
  {
    name: "Dialka",
    origin: "Venezuela",
    category: "Desarrollo y Ensamble Nacional",
    highlight: "Software propietario y básculas camioneras a medida",
    logo: "/images/marcas/dialka.svg",
  },
];

