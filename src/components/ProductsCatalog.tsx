"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  X,
  Phone,
  ArrowRight,
  SlidersHorizontal,
  RotateCcw,
  ShieldCheck,
  Package,
  Scale,
  Receipt,
  Anchor,
  Egg,
  Box,
  Maximize2,
  HeartPulse,
  Layers,
  MoveDown,
  FileText,
  Monitor,
  FlaskConical,
  Gauge,
  Award,
  Microscope,
  Shield,
  Users,
  Cpu,
  Truck,
  Tag,
  LayoutGrid,
  ShoppingCart,
  Wheat,
  Factory,
  Beef,
  type LucideIcon,
} from "lucide-react";
import { ProductDetailsModal } from "./ProductDetailsModal";

export interface ProductItem {
  id: string;
  name: string;
  category:
    | "carnicos"
    | "etiquetadoras"
    | "empaque"
    | "comerciales"
    | "industriales"
    | "agropecuaria"
    | "ganadera"
    | "laboratorio";
  categoryName: string;
  categoryIcon: string;
  specs: string;
  image: string;
  badge: string;
  highlight: string;
  icon: LucideIcon;
  featureTag: string;
}

export interface CategoryItem {
  id: string;
  name: string;
  desc: string;
  icon: LucideIcon;
}

export const CATALOG_CATEGORIES: CategoryItem[] = [
  { id: "all", name: "Todas", desc: "Todo el catálogo", icon: LayoutGrid },
  { id: "carnicos", name: "Cárnicos & Charcutería", desc: "Molinos y rebanadoras", icon: Beef },
  { id: "etiquetadoras", name: "Etiquetadoras & IA", desc: "POS inteligentes", icon: Cpu },
  { id: "empaque", name: "Empaque al Vacío", desc: "Sellado industrial", icon: Box },
  { id: "comerciales", name: "Comerciales", desc: "Mostrador y tickets", icon: ShoppingCart },
  { id: "industriales", name: "Industriales", desc: "Plataformas y grúas", icon: Factory },
  { id: "agropecuaria", name: "Agropecuaria", desc: "Avícola y porcino", icon: Wheat },
  { id: "ganadera", name: "Ganadera", desc: "Bretes y barras", icon: Truck },
  { id: "laboratorio", name: "Laboratorio", desc: "Analíticas y precisión", icon: FlaskConical },
] as const;

export const CATALOG_PRODUCTS: ProductItem[] = [
  // ── 1. COMERCIALES 🛒 ──
  {
    id: "com-mostrador-30kg",
    name: "Balanza Digital de Mostrador Dialka 30kg",
    category: "comerciales",
    categoryName: "Comerciales",
    categoryIcon: "🛒",
    specs: "30 kg × 5 g · Doble display LED · Batería 100h",
    image: "/images/productos/comercial.jpg",
    badge: "Homologada SENCAMER",
    highlight: "Ideal para charcuterías, panaderías y minimarkets",
    icon: Scale,
    featureTag: "Doble Display",
  },
  {
    id: "com-ticketera-30kg",
    name: "Balanza Comercial con Impresión de Tickets",
    category: "comerciales",
    categoryName: "Comerciales",
    categoryIcon: "🛒",
    specs: "30 kg · Impresor térmico · 1.000 PLUs memorias",
    image: "/images/productos/com-ticketera-30kg.jpg",
    badge: "Punto de Venta",
    highlight: "Conexión Ethernet y RS-232 a sistemas de facturación",
    icon: Receipt,
    featureTag: "Ticket Térmico",
  },
  {
    id: "com-colgante-50kg",
    name: "Balanza Colgante Digital de 50kg",
    category: "comerciales",
    categoryName: "Comerciales",
    categoryIcon: "🛒",
    specs: "50 kg × 10 g · Gancho de acero inox · Display LCD",
    image: "/images/productos/com-colgante-50kg.jpg",
    badge: "Portátil",
    highlight: "Para pescaderías, carnicerías y mercados mayoristas",
    icon: Anchor,
    featureTag: "Gancho Inox",
  },
  {
    id: "com-mostrador-plana-15kg",
    name: "Balanza Plana de Mostrador 15kg Acero Inox",
    category: "comerciales",
    categoryName: "Comerciales",
    categoryIcon: "🛒",
    specs: "15 kg × 2 g · Plato acero 304 · Función tara/cómputo",
    image: "/images/sencamer/balanza-certificada.jpg",
    badge: "Acero Inox 304",
    highlight: "Resistente a líquidos, salmuera y fácil desinfección",
    icon: ShieldCheck,
    featureTag: "Grado Sanitario",
  },

  // ── 2. AGROPECUARIA 🌾 ──
  {
    id: "agro-aves-20kg",
    name: "Báscula Mecánica para Aves 20kg",
    category: "agropecuaria",
    categoryName: "Agropecuaria",
    categoryIcon: "🌾",
    specs: "20 kg · Plato cóncavo · Amortiguador de aleteo",
    image: "/images/productos/agropecuario.jpg",
    badge: "Sector Avícola",
    highlight: "Diseño ergonómico para galpones de engorde y beneficio",
    icon: Egg,
    featureTag: "Anti-Aleteo",
  },
  {
    id: "agro-porcinos-300kg",
    name: "Báscula Jaula para Porcinos 300kg",
    category: "agropecuaria",
    categoryName: "Agropecuaria",
    categoryIcon: "🌾",
    specs: "300 kg · Jaula con rejas · Indicador anti-movimiento",
    image: "/images/productos/agro-porcinos-300kg.jpg",
    badge: "Porcicultura",
    highlight: "Filtro de estabilización de peso para cerdos en movimiento",
    icon: Box,
    featureTag: "Filtro Dinámico",
  },
  {
    id: "agro-barras-2000kg",
    name: "Barras Pesadoras Portátiles 2.000kg (Par)",
    category: "agropecuaria",
    categoryName: "Agropecuaria",
    categoryIcon: "🌾",
    specs: "2.000 kg · 2 barras de 100 cm · Cable con malla de acero",
    image: "/images/productos/agro-barras-2000kg.jpg",
    badge: "Multi-Uso Campo",
    highlight: "Se instalan fácilmente bajo cualquier cajón o manga",
    icon: Maximize2,
    featureTag: "Portátil 2T",
  },
  {
    id: "agro-veterinaria-150kg",
    name: "Báscula Veterinaria para Mascotas y Menores",
    category: "agropecuaria",
    categoryName: "Agropecuaria",
    categoryIcon: "🌾",
    specs: "150 kg × 50 g · Perfil ultra bajo · Alfombra antideslizante",
    image: "/images/productos/agro-veterinaria-150kg.jpg",
    badge: "Clínicas y Fincas",
    highlight: "Función Hold para retención del peso en pantalla",
    icon: HeartPulse,
    featureTag: "Función Hold",
  },

  // ── 3. INDUSTRIALES 🏭 ──
  {
    id: "ind-plataforma-1500kg",
    name: "Plataforma de Piso Industrial 1.500kg (1.20×1.20m)",
    category: "industriales",
    categoryName: "Industriales",
    categoryIcon: "🏭",
    specs: "1.500 kg × 200 g · 4 Celdas IP67 · Chapa estriada",
    image: "/images/productos/industrial.jpg",
    badge: "Alto Tráfico",
    highlight: "Para almacenes de despacho, fábricas y paletas estándar",
    icon: Layers,
    featureTag: "4 Celdas IP67",
  },
  {
    id: "ind-grua-5000kg",
    name: "Báscula Colgante de Grúa 5.000kg para Puente",
    category: "industriales",
    categoryName: "Industriales",
    categoryIcon: "🏭",
    specs: "5.000 kg · Gancho giratorio 360° · Control inalámbrico",
    image: "/images/productos/ind-grua-5000kg.jpg",
    badge: "Carga Pesada",
    highlight: "Pantalla LED gigante visible a más de 25 metros de distancia",
    icon: Anchor,
    featureTag: "Gancho 360°",
  },
  {
    id: "ind-extraplana-inox",
    name: "Plataforma Extraplana Inox con Rampas",
    category: "industriales",
    categoryName: "Industriales",
    categoryIcon: "🏭",
    specs: "1.000 kg · Rampas incorporadas · Lavable a presión IP68",
    image: "/images/productos/ind-extraplana-inox.jpg",
    badge: "Grado Sanitario",
    highlight: "Para plantas procesadoras de alimentos y laboratorios",
    icon: MoveDown,
    featureTag: "Rampas Inox",
  },
  {
    id: "ind-indicador-d300",
    name: "Indicador Digital Industrial Dialka D-300",
    category: "industriales",
    categoryName: "Industriales",
    categoryIcon: "🏭",
    specs: "Carcasa Inox · Salida RS-232/485 · Filtro digital anti-vibración",
    image: "/images/productos/ind-indicador-d300.jpg",
    badge: "Terminal Inteligente",
    highlight: "Integración directa con impresoras, semáforos y PLC",
    icon: Monitor,
    featureTag: "RS-232/485",
  },

  // ── 4. LABORATORIO 🧪 ──
  {
    id: "lab-apolo-1000g",
    name: "Balanza Analítica Apolo Lab 1000g × 0.1g",
    category: "laboratorio",
    categoryName: "Laboratorio",
    categoryIcon: "🧪",
    specs: "1.000 g × 0.1 g · Cortaviento de vidrio · Plato inox",
    image: "/images/productos/analitico.jpg",
    badge: "Alta Precisión",
    highlight: "Calibración externa rápida y función conteo de piezas",
    icon: FlaskConical,
    featureTag: "Cortaviento",
  },
  {
    id: "lab-apolo-3000g",
    name: "Balanza de Precisión Apolo Lab 3000g × 0.1g",
    category: "laboratorio",
    categoryName: "Laboratorio",
    categoryIcon: "🧪",
    specs: "3.000 g × 0.1 g · Pantalla LCD backlight · Nivel burbuja",
    image: "/images/productos/lab-apolo-3000g.jpg",
    badge: "Control de Calidad",
    highlight: "Estabilización veloz en menos de 1.5 segundos",
    icon: Gauge,
    featureTag: "0.1g Resolución",
  },
  {
    id: "lab-ohaus-scout",
    name: "Balanza de Precisión Ohaus Scout 5000g × 1g",
    category: "laboratorio",
    categoryName: "Laboratorio",
    categoryIcon: "🧪",
    specs: "5.000 g × 1 g · Protección contra sobrecarga · Apilable",
    image: "/images/productos/lab-ohaus-scout.jpg",
    badge: "Ohaus Global",
    highlight: "Fabricación estadounidense con máxima resistencia al desgaste",
    icon: Award,
    featureTag: "Ohaus Original",
  },
  {
    id: "lab-semianalitica-8000g",
    name: "Balanza Semianalítica 8000g × 1g Dialka",
    category: "laboratorio",
    categoryName: "Laboratorio",
    categoryIcon: "🧪",
    specs: "8.000 g × 1 g · Salida de datos GLP/GMP · Modo porcentaje",
    image: "/images/productos/lab-semianalitica-8000g.jpg",
    badge: "Ensayos Químicos",
    highlight: "Para formulación precisa de mezclas e insumos industriales",
    icon: Microscope,
    featureTag: "Norma GLP/GMP",
  },

  // ── 5. GANADERA 🐂 ──
  {
    id: "gan-brete-3000kg",
    name: "Báscula Ganadera de Brete Individual 3.000kg",
    category: "ganadera",
    categoryName: "Ganadera",
    categoryIcon: "🐂",
    specs: "3.000 kg · Estructura galvanizada · Puertas guillotina",
    image: "/images/proyectos/bascula-ganadera.jpg",
    badge: "Pesaje Bovino",
    highlight: "Diseñada para mangas de vacunación y embarque en potrero",
    icon: Shield,
    featureTag: "Galvanizada",
  },
  {
    id: "gan-colectiva-5000kg",
    name: "Báscula Ganadera Colectiva 5.000kg (3.00×2.00m)",
    category: "ganadera",
    categoryName: "Ganadera",
    categoryIcon: "🐂",
    specs: "5.000 kg · Capacidad 6 a 8 reses · Chapa antideslizante",
    image: "/images/productos/gan-colectiva-5000kg.jpg",
    badge: "Lotes de Ganado",
    highlight: "Piso de madera dura tratada o chapa estriada antiresbalante",
    icon: Users,
    featureTag: "6-8 Reses",
  },
  {
    id: "gan-kit-brete",
    name: "Kit de Modernización Electrónica para Brete",
    category: "ganadera",
    categoryName: "Ganadera",
    categoryIcon: "🐂",
    specs: "4 Celdas shear beam · Indicador digital con batería 80h",
    image: "/images/productos/gan-kit-brete.jpg",
    badge: "Transformación Digital",
    highlight: "Convierte cualquier brete mecánico antiguo a pesaje digital",
    icon: Cpu,
    featureTag: "4 Celdas Beam",
  },
  {
    id: "gan-portatil-ruedas",
    name: "Báscula Ganadera Portátil Remolcable con Ruedas",
    category: "ganadera",
    categoryName: "Ganadera",
    categoryIcon: "🐂",
    specs: "2.500 kg · Sistema de tiro y ruedas abatibles para campo",
    image: "/images/alquiler/ejes-portatil.jpg",
    badge: "100% Móvil",
    highlight: "Traslado seguro entre potreros y fincas con tiro para camioneta",
    icon: Truck,
    featureTag: "Remolcable",
  },

  // ── 7. CÁRNICOS & CHARCUTERÍA 🥩 ──
  {
    id: "carn-molino-tk32",
    name: "Molino de Carne Industrial Techfood TK-32",
    category: "carnicos",
    categoryName: "Cárnicos",
    categoryIcon: "🥩",
    specs: "350 kg/h · Motor 1.5 kW (2 HP) · Reversa · Acero SUS304",
    image: "/images/productos/techfood-molino-tk32.png",
    badge: "350 kg/h Continuo",
    highlight: "Cabezal desmontable en acero inoxidable para carnicerías y supermercados",
    icon: Beef,
    featureTag: "Motor 1.5 kW",
  },
  {
    id: "carn-molino-tk42",
    name: "Molino de Carne de Alta Capacidad Techfood TK-42",
    category: "carnicos",
    categoryName: "Cárnicos",
    categoryIcon: "🥩",
    specs: "650 kg/h · Motor 3.0 kW (4 HP) · Reductor en baño de aceite",
    image: "/images/productos/techfood-molino-tk42.png",
    badge: "650 kg/h Frigorífico",
    highlight: "Diseñado para salas de desposte, frigoríficos y producción continua",
    icon: Beef,
    featureTag: "Uso Pesado",
  },
  {
    id: "carn-molino-cg22dm",
    name: "Molino Combinado con Rallador Techfood CG22DM",
    category: "carnicos",
    categoryName: "Cárnicos",
    categoryIcon: "🥩",
    specs: "Doble función: Molino #22 + Rallador queso/pan · Motor 1.1 kW",
    image: "/images/productos/techfood-molino-cg22dm.png",
    badge: "2 en 1 Multifunción",
    highlight: "Equipo multifunción que ahorra espacio en carnicerías, charcuterías y pizzerías",
    icon: Beef,
    featureTag: "2 en 1",
  },
  {
    id: "carn-rallador-cg55sh",
    name: "Rallador Industrial de Queso y Pan Techfood CG55SH",
    category: "carnicos",
    categoryName: "Cárnicos",
    categoryIcon: "🥩",
    specs: "40 kg/h · Motor 0.75 HP · Microswitch de seguridad",
    image: "/images/productos/techfood-rallador-cg55sh.png",
    badge: "Rendimiento 40kg/h",
    highlight: "Cilindro de acero inoxidable con palanca de presión de alta seguridad",
    icon: Box,
    featureTag: "Seguridad Activa",
  },
  {
    id: "carn-mezcladora-mm55dt",
    name: "Mezcladora de Carne y Embutidos Techfood MM55DT",
    category: "carnicos",
    categoryName: "Cárnicos",
    categoryIcon: "🥩",
    specs: "Tanque 28 L (20 kg) · Motor 550 W · Doble eje basculante",
    image: "/images/productos/techfood-mezcladora-mm55dt.png",
    badge: "Tanque 28 Litros",
    highlight: "Mezcla homogénea sin recalentar la masa de chorizos y embutidos",
    icon: Layers,
    featureTag: "Paletas Inox",
  },
  {
    id: "carn-mezcladora-mm75dt",
    name: "Mezcladora de Carne Industrial Techfood MM75DT 42L",
    category: "carnicos",
    categoryName: "Cárnicos",
    categoryIcon: "🥩",
    specs: "Tanque 42 L (35 kg) · Motor 750 W con reversa · Volteo manual 90°",
    image: "/images/productos/techfood-mezcladora-mm75dt.png",
    badge: "Capacidad 42 Litros",
    highlight: "Capacidad extendida para fábricas de embutidos, albóndigas y hamburguesas",
    icon: Layers,
    featureTag: "Capacidad 42L",
  },
  {
    id: "carn-ablandador-tr8s",
    name: "Tenderizadora y Ablandador de Carne Techfood TR8S",
    category: "carnicos",
    categoryName: "Cárnicos",
    categoryIcon: "🥩",
    specs: "Motor 550 W · Rodillos microdentados SUS304 · Alimentador seguro",
    image: "/images/productos/techfood-ablandador-tr8s.png",
    badge: "Grado Sanitario",
    highlight: "Ablanda cortes de carne sin desjugar ni romper la textura original",
    icon: Beef,
    featureTag: "Acero SUS304",
  },
  {
    id: "carn-rebanadora-300",
    name: "Rebanadora Industrial de Embutidos Techfood 300mm",
    category: "carnicos",
    categoryName: "Cárnicos",
    categoryIcon: "🥩",
    specs: "Disco 300 mm · Motor 250 W · Afilador doble incorporado",
    image: "/images/productos/techfood-rebanadora-300mm.png",
    badge: "Disco 300 mm",
    highlight: "Corte micrométrico regulable desde 0.2 a 15 mm en aluminio anodizado",
    icon: Beef,
    featureTag: "Corte Micrométrico",
  },
  {
    id: "carn-rebanadora-abm",
    name: "Rebanadora de Precisión Italiana ABM 250mm",
    category: "carnicos",
    categoryName: "Cárnicos",
    categoryIcon: "🥩",
    specs: "Disco 250 mm · Motor 1.2 HP · Fabricación 100% Italiana",
    image: "/images/productos/abm-rebanadora-250mm.png",
    badge: "Made in Italy",
    highlight: "Máxima suavidad de traslación del carro y precisión milimétrica en lonchas",
    icon: Award,
    featureTag: "Origen Italia",
  },
  {
    id: "carn-cuchilleria-lucky",
    name: "Cuchillería Profesional Carnicera Lucky Acero Alemán",
    category: "carnicos",
    categoryName: "Cárnicos",
    categoryIcon: "🥩",
    specs: "Acero Alemán 1.4116 · Mango Sanitized · Certificación NSF",
    image: "/images/productos/lucky-cuchilleria-chef.png",
    badge: "Certificación NSF",
    highlight: "Cuchillos carniceros, deshuesadores y fileteros de filo prolongado",
    icon: ShieldCheck,
    featureTag: "Acero Alemán",
  },
  {
    id: "carn-cuchillas-molino",
    name: "Cuchillas Profesionales para Molinos Techfood / Lucky",
    category: "carnicos",
    categoryName: "Cárnicos",
    categoryIcon: "🥩",
    specs: "Acero templado de alta dureza · Medidas para bocas #12, #22 y #32",
    image: "/images/productos/lucky-cuchillas-molino.png",
    badge: "Repuesto Genuino",
    highlight: "Filo autoafilable de alto rendimiento para molienda limpia y sin fricción térmica",
    icon: Award,
    featureTag: "Acero Especial",
  },
  {
    id: "carn-molde-hamburguesa",
    name: "Prensadora y Moldeadora de Hamburguesas Techfood",
    category: "carnicos",
    categoryName: "Cárnicos",
    categoryIcon: "🥩",
    specs: "Diámetro 100/130 mm · Acero Inox · Dispensador de separadores",
    image: "/images/productos/techfood-molde-hamburguesa.png",
    badge: "Estandarización",
    highlight: "Garantiza peso y diámetro uniforme en cada porción de hamburguesa",
    icon: Box,
    featureTag: "Manual Rápido",
  },
  {
    id: "carn-pica-papas",
    name: "Cortadora Industrial de Papas a la Francesa Techfood",
    category: "carnicos",
    categoryName: "Cárnicos",
    categoryIcon: "🥩",
    specs: "Cuchillas 9 y 12 mm en acero inoxidable · Palanca multiplicadora",
    image: "/images/productos/techfood-pica-papas.png",
    badge: "Corte en Bloque",
    highlight: "Corte rápido de vegetales y papas con un solo movimiento de palanca",
    icon: Box,
    featureTag: "Cuchillas Inox",
  },
  {
    id: "carn-tablas-corte",
    name: "Tablas de Corte Sanitarias Antimicrobianas Techfood FDA",
    category: "carnicos",
    categoryName: "Cárnicos",
    categoryIcon: "🥩",
    specs: "Polietileno alta densidad PEAD · Espesores 1/2\" y 1\" · Norma FDA",
    image: "/images/productos/techfood-tablas-corte-fda.png",
    badge: "Aprobado FDA",
    highlight: "Superficie higiénica libre de poros que previene contaminación cruzada",
    icon: ShieldCheck,
    featureTag: "Grado Sanitario",
  },

  // ── 8. ETIQUETADORAS & INTELIGENCIA ARTIFICIAL 🤖 ──
  {
    id: "etiq-rongta-ia-win",
    name: "Balanza POS Etiquetadora con IA Rongta IA-Y3L (Windows)",
    category: "etiquetadoras",
    categoryName: "Etiquetadoras & IA",
    categoryIcon: "🤖",
    specs: "15/30 kg DUAL · Cámara IA 2.0 MP · Pantalla táctil 15.6\" HD · Windows",
    image: "/images/productos/rongta-ia-y3l-win.png",
    badge: "Reconocimiento con IA",
    highlight: "Identifica frutas, hortalizas y víveres visualmente en menos de 0.2 segundos",
    icon: Cpu,
    featureTag: "Cámara IA 2.0MP",
  },
  {
    id: "etiq-rongta-ia-android",
    name: "Balanza POS Inteligente Rongta IA-Y3L (Android)",
    category: "etiquetadoras",
    categoryName: "Etiquetadoras & IA",
    categoryIcon: "🤖",
    specs: "15/30 kg · Procesador Quad-Core · Pantalla 15.6\" · Android OS",
    image: "/images/productos/rongta-ia-y3l-android.png",
    badge: "Sistema Android",
    highlight: "Arquitectura flexible compatible con apps POS modernas y servicios en la nube",
    icon: Cpu,
    featureTag: "Android POS",
  },
  {
    id: "etiq-rongta-rls1100c",
    name: "Balanza Etiquetadora de Autoservicio Rongta RLS1100C",
    category: "etiquetadoras",
    categoryName: "Etiquetadoras & IA",
    categoryIcon: "🏷️",
    specs: "30 kg × 5 g · 10.000 PLU · Ethernet + RS232 · Imprime Códigos QR/EAN",
    image: "/images/productos/rongta-rls1100c.png",
    badge: "Top Ventas Retail",
    highlight: "Emisión de etiquetas térmicas personalizables para charcuterías y supermercados",
    icon: Receipt,
    featureTag: "10.000 PLU",
  },
  {
    id: "etiq-rongta-rls1100b",
    name: "Balanza Etiquetadora Comercial Rongta RLS1100B",
    category: "etiquetadoras",
    categoryName: "Etiquetadoras & IA",
    categoryIcon: "🏷️",
    specs: "15/30 kg · Teclado rápido 112 accesos · Visor alfanumérico doble",
    image: "/images/productos/rongta-rls1100b.png",
    badge: "Homologada SENCAMER",
    highlight: "Resistente a ambientes húmedos con cajón de papel térmico de recarga frontal",
    icon: Receipt,
    featureTag: "112 Teclas Directas",
  },
  {
    id: "etiq-rongta-rls1550p",
    name: "Balanza Etiquetadora de Torre Elevada Rongta RLS1550P",
    category: "etiquetadoras",
    categoryName: "Etiquetadoras & IA",
    categoryIcon: "🏷️",
    specs: "30 kg × 5 g · Impresión 90 mm/s · 8 vendedores simultáneos · Torre LED",
    image: "/images/productos/rongta-rls1550p.png",
    badge: "Torre Ergonómica",
    highlight: "Display elevado visible para el cliente sobre mostradores altos de atención",
    icon: Receipt,
    featureTag: "8 Vendedores",
  },
  {
    id: "etiq-rongta-rls1330",
    name: "Balanza Colgante Etiquetadora Rongta RLS1330",
    category: "etiquetadoras",
    categoryName: "Etiquetadoras & IA",
    categoryIcon: "🏷️",
    specs: "30 kg · Carcasa suspendida de acero inoxidable · Impresión EAN/QR",
    image: "/images/productos/rongta-rls1330.png",
    badge: "Suspensión Aérea",
    highlight: "Diseño colgante que previene ingreso de líquidos en pescaderías y carnicerías",
    icon: Anchor,
    featureTag: "Antiderrame Aéreo",
  },
  {
    id: "etiq-rongta-pos-c1",
    name: "Balanza POS de Mostrador para Facturación Rongta C1",
    category: "etiquetadoras",
    categoryName: "Etiquetadoras & IA",
    categoryIcon: "🖥️",
    specs: "15/30 kg DUAL · Visor extendible 3 caras · Puertos USB, RS232 y WiFi",
    image: "/images/productos/rongta-pos-c1.png",
    badge: "Integración de Cajas",
    highlight: "Conexión directa con software Saint, Valery, Profit Plus y Stellar",
    icon: Monitor,
    featureTag: "USB / RS232 / WiFi",
  },

  // ── 9. EMPAQUE AL VACÍO & TERMOSELLADO 📦 ──
  {
    id: "emp-vacio-dz400",
    name: "Empacadora al Vacío Industrial de Campana Techfood DZ-400",
    category: "empaque",
    categoryName: "Empaque al Vacío",
    categoryIcon: "📦",
    specs: "Doble barra 40 cm · Bomba 20 m³/h · Acero Inoxidable · Vacío 99.9%",
    image: "/images/productos/techfood-dz400-vacio.png",
    badge: "Doble Barra 40cm",
    highlight: "Conserva carnes, pescados y embutidos hasta 5 veces más tiempo sin deshidratar",
    icon: Box,
    featureTag: "Bomba 20 m³/h",
  },
  {
    id: "emp-vacio-dz300b",
    name: "Empacadora al Vacío de Sobremesa Techfood DZ-300B",
    category: "empaque",
    categoryName: "Empaque al Vacío",
    categoryIcon: "📦",
    specs: "Barra de sellado 30 cm · Ciclos de 10 a 25 s · Gabinete en Acero Inox",
    image: "/images/productos/techfood-dz300b-vacio.png",
    badge: "Sobremesa Inox",
    highlight: "Tamaño compacto ideal para charcuterías, bodegones, restaurantes y laboratorios",
    icon: Box,
    featureTag: "Control Digital",
  },
  {
    id: "emp-termoselladora-45",
    name: "Termoselladora para Film de Alimentos Techfood 45cm",
    category: "empaque",
    categoryName: "Empaque al Vacío",
    categoryIcon: "📦",
    specs: "Ancho película 45 cm · Placa de teflón caliente · Regulador 0 a 160°C",
    image: "/images/productos/techfood-termoselladora-45cm.png",
    badge: "Sellado Continuo",
    highlight: "Embalaje rápido con plástico stretch para bandejas de carne, quesos y frutas",
    icon: Layers,
    featureTag: "Placa Térmica",
  },

  // ── 10. NUEVOS EQUIPOS COMERCIALES E INDUSTRIALES TECHFOOD ⚖️ ──
  {
    id: "com-techfood-jl918",
    name: "Balanza de Mostrador Antiderrame Techfood JL-918",
    category: "comerciales",
    categoryName: "Comerciales",
    categoryIcon: "🛒",
    specs: "15/30 kg · Batería 180 hrs · Doble visor cliente/vendedor con luz LED",
    image: "/images/productos/techfood-jl918.png",
    badge: "Batería 180 Horas",
    highlight: "Chasis hermético contra líquidos con una autonomía récord ante fallas eléctricas",
    icon: Scale,
    featureTag: "Batería 180h",
  },
  {
    id: "com-techfood-jl918-led",
    name: "Balanza Comercial de Mostrador Techfood JL-918 LED",
    category: "comerciales",
    categoryName: "Comerciales",
    categoryIcon: "🛒",
    specs: "15/30 kg · Teclado plano pulsador · Batería 180 hrs · Doble pantalla LED",
    image: "/images/productos/techfood-jl918-led.png",
    badge: "Plato Plano Duradero",
    highlight: "Teclado de pulsadores táctiles de alta durabilidad con 7 memorias de precio directo",
    icon: Scale,
    featureTag: "Teclado Pulsador",
  },
  {
    id: "com-techfood-ocsp",
    name: "Balanza Colgante con Canasta Inoxidable Techfood OCS-P",
    category: "comerciales",
    categoryName: "Comerciales",
    categoryIcon: "🛒",
    specs: "30 kg × 5 g · Bandeja honda profunda · Doble visor LCD",
    image: "/images/productos/techfood-ocsp-colgante.png",
    badge: "Homologada SENCAMER",
    highlight: "Especial para mercados municipales, verdulerías y venta de quesos al mayor",
    icon: Anchor,
    featureTag: "Bandeja Honda",
  },
  {
    id: "ind-techfood-jl11",
    name: "Balanza de Plataforma 300 kg con Columna Techfood JL-11",
    category: "industriales",
    categoryName: "Industriales",
    categoryIcon: "🏭",
    specs: "300 kg × 100 g · Bandeja 42.5 × 52 cm · Estructura tubular de alto impacto",
    image: "/images/productos/techfood-jl11-plataforma.png",
    badge: "300 kg Rudo",
    highlight: "Ideal para recepción de mercancía en almacenes, depósitos y distribuidoras",
    icon: Box,
    featureTag: "Plataforma 300kg",
  },
  {
    id: "ind-techfood-ocsm",
    name: "Balanza Colgante de Grúa Industrial Techfood OCS-M 1.000 kg",
    category: "industriales",
    categoryName: "Industriales",
    categoryIcon: "🏭",
    specs: "1.000 kg × 500 g · Carcasa de aluminio fundido · LED rojo gigante 4\"",
    image: "/images/productos/techfood-ocsm-grua.png",
    badge: "1 Tonelada",
    highlight: "Gancho de acero forjado con giro de 360° para carga aérea en galpones",
    icon: Anchor,
    featureTag: "Aluminio Fundido",
  },
  {
    id: "ind-techfood-tfx",
    name: "Plataforma Sanitaria Inoxidable Techfood TF-X 2.000 kg",
    category: "industriales",
    categoryName: "Industriales",
    categoryIcon: "🏭",
    specs: "90 × 90 cm · 2.000 kg · Acero Inox 4 mm · Indicador X1S Inox incluido",
    image: "/images/productos/techfood-tfx-inox.png",
    badge: "Acero Inox 4mm",
    highlight: "Construcción sanitaria anticorrosiva apta para lavados a presión continuos",
    icon: ShieldCheck,
    featureTag: "Acero Inox SUS304",
  },
  {
    id: "ind-techfood-tfx15",
    name: "Plataforma Sanitaria Extra Grande Techfood TF-X15 5.000 kg",
    category: "industriales",
    categoryName: "Industriales",
    categoryIcon: "🏭",
    specs: "150 × 150 cm · 5.000 kg · 4 Celdas Sharebeam 2T IP68 · Superficie diamantada",
    image: "/images/productos/techfood-tfx15-inox.png",
    badge: "5 Toneladas",
    highlight: "Superficie de gran formato para paletas completas y carga en zonas húmedas",
    icon: Factory,
    featureTag: "5.000 kg",
  },
  {
    id: "ind-techfood-x1s",
    name: "Indicador de Peso Digital en Acero Inoxidable Techfood X1S",
    category: "industriales",
    categoryName: "Industriales",
    categoryIcon: "🏭",
    specs: "Chasis Acero Inox IP68 · Pantalla LED de alta visibilidad · Puerto RS232",
    image: "/images/productos/techfood-indicador-x1s-inox.png",
    badge: "Protección IP68",
    highlight: "Resistente a la humedad y salpicaduras químicas con batería recargable",
    icon: Gauge,
    featureTag: "IP68 Inoxidable",
  },
  {
    id: "ind-techfood-x1s-abs",
    name: "Indicador de Peso Digital ABS Techfood X1S",
    category: "industriales",
    categoryName: "Industriales",
    categoryIcon: "🏭",
    specs: "Carcasa ABS alto impacto · 6 dígitos LED 40 mm · Batería 6V · Puerto RS232",
    image: "/images/productos/techfood-indicador-x1s-abs.png",
    badge: "Carcasa ABS",
    highlight: "Pantalla LED gigante de alta visibilidad con función especial de pesaje animal",
    icon: Gauge,
    featureTag: "Pesaje Animal",
  },
];

interface ProductsCatalogProps {
  categories?: { id: string; name: string }[];
  whatsappNumber?: string;
  showHeading?: boolean;
  title?: string;
  subtitle?: string;
  className?: string;
  initialLimit?: number;
}

function ProductCardImage({
  src,
  alt,
  categoryIcon,
  categoryName,
  badge,
}: {
  src: string;
  alt: string;
  categoryIcon: string;
  categoryName: string;
  badge: string;
}) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="relative aspect-square w-full rounded-xl bg-white p-2.5 border border-slate-200/90 group-hover:border-red-300 shadow-2xs group-hover:shadow-md overflow-hidden mb-2.5 sm:mb-3 flex items-center justify-center transition-all duration-300">
      {!hasError ? (
        <div className="relative w-full h-full flex items-center justify-center">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-contain p-1.5 rounded-lg group-hover:scale-105 transition-transform duration-500"
            onError={() => setHasError(true)}
          />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center text-slate-400 p-4 text-center">
          <Scale size={32} className="text-[#991b1b]/60 mb-2" />
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">{alt}</span>
        </div>
      )}

      {/* Insignia Flotante de Categoría */}
      <div className="absolute top-2 left-2 z-10">
        <span className="inline-flex items-center gap-1 bg-white/95 backdrop-blur-md text-[#991b1b] text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-full shadow-2xs border border-slate-200/70">
          <span>{categoryIcon}</span>
          <span className="truncate max-w-[70px] sm:max-w-none">{categoryName}</span>
        </span>
      </div>

      {/* Badge de garantía / norma */}
      <div className="absolute bottom-2 left-2 right-2 z-10">
        <span className="inline-block text-[9px] sm:text-[10px] font-bold text-slate-700 bg-slate-100/95 backdrop-blur-xs px-2 py-0.5 rounded-md border border-slate-200/80 text-center w-full truncate shadow-2xs">
          {badge}
        </span>
      </div>
    </div>
  );
}

export function ProductsCatalog({
  whatsappNumber = "584142770024",
  showHeading = true,
  title,
  subtitle,
  className = "",
  initialLimit,
}: ProductsCatalogProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [showAll, setShowAll] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleOpenModal = (product: ProductItem) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  // Filtrado reactivo en tiempo real
  const filteredProducts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return CATALOG_PRODUCTS.filter((product) => {
      // Filtro por categoría
      const matchesCategory =
        selectedCategory === "all" || product.category === selectedCategory;

      // Filtro por búsqueda
      const matchesSearch =
        !query ||
        product.name.toLowerCase().includes(query) ||
        product.specs.toLowerCase().includes(query) ||
        product.highlight.toLowerCase().includes(query) ||
        product.categoryName.toLowerCase().includes(query) ||
        product.featureTag.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Lista a mostrar: limitada inicialmente en el Home a initialLimit si no se ha expandido
  const displayedProducts = useMemo(() => {
    if (initialLimit && !showAll && !searchQuery && selectedCategory === "all") {
      return filteredProducts.slice(0, initialLimit);
    }
    return filteredProducts;
  }, [filteredProducts, initialLimit, showAll, searchQuery, selectedCategory]);

  const handleReset = () => {
    setSelectedCategory("all");
    setSearchQuery("");
    setShowAll(false);
  };

  return (
    <section className={`bg-gradient-to-b from-white via-slate-50/60 to-white py-10 sm:py-16 md:py-20 border-b border-slate-200 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado Opcional de la Vitrina */}
        {showHeading && (
          <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200/80 px-4 py-1.5 rounded-full text-[#991b1b] text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
              <Package size={14} className="text-[#991b1b]" />
              <span>Tienda Oficial · Vitrina de Equipos</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-2.5">
              {title || "Catálogo de Balanzas y Sistemas de Pesaje"}
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
              {subtitle || "Explore nuestras 5 líneas de equipos con calibración garantizada, repuestos originales y despacho a todo el país."}
            </p>
          </div>
        )}

        {/* ── FASE 1: BARRA DE BÚSQUEDA PROMINENTE ESTILO RETAIL ── */}
        <div className="max-w-3xl mx-auto mb-6 sm:mb-8">
          <div className="relative flex items-center bg-white rounded-2xl sm:rounded-full p-1.5 sm:p-2 border-2 border-red-500/25 shadow-lg shadow-red-950/5 focus-within:border-[#991b1b] focus-within:ring-4 focus-within:ring-red-500/10 transition-all duration-300">
            <div className="pl-3 sm:pl-4 pr-2 text-[#991b1b] shrink-0">
              <Search size={22} className="stroke-[2.5]" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="¿Qué balanza o equipo buscas hoy? (ej. 30kg, Brete, Camionera, Analítica)..."
              className="w-full bg-transparent text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm md:text-base font-medium focus:outline-none py-2 sm:py-2.5 pr-2"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="p-1.5 mr-1 text-slate-400 hover:text-slate-700 transition-colors shrink-0"
                aria-label="Borrar búsqueda"
              >
                <X size={18} />
              </button>
            )}
            <div className="hidden sm:flex items-center gap-1.5 bg-[#991b1b] text-white text-xs font-bold px-4 py-2.5 rounded-full shadow-sm shrink-0">
              <span>Buscar</span>
            </div>
          </div>
        </div>

        {/* ── FASE 1: CARRUSEL DE CATEGORÍAS VISUALES (CHIPS DESLIZANTES) ── */}
        <div className="mb-8 sm:mb-10">
          <div className="flex items-center justify-between mb-3 px-1">
            <div className="flex items-center gap-2">
              <SlidersHorizontal size={14} className="text-[#991b1b]" />
              <span className="text-xs sm:text-sm font-bold text-slate-800 uppercase tracking-wider">
                Líneas Especializadas:
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-slate-500">
                {filteredProducts.length} {filteredProducts.length === 1 ? "equipo" : "equipos"}
              </span>
              {(selectedCategory !== "all" || searchQuery !== "") && (
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-1 text-[#991b1b] hover:text-[#7f1d1d] font-bold text-xs hover:underline cursor-pointer ml-2"
                >
                  <RotateCcw size={12} />
                  <span>Restablecer</span>
                </button>
              )}
            </div>
          </div>

          {/* Carrusel Deslizante Horizontal (Touch-Friendly con Fade Indicator) */}
          <div className="relative">
            <div className="overflow-x-auto no-scrollbar scroll-smooth flex gap-2.5 sm:gap-3.5 pb-2 pt-1 -mx-4 px-4 sm:mx-0 sm:px-0 snap-x">
              {CATALOG_CATEGORIES.map((cat) => {
                const isSelected = selectedCategory === cat.id;
                const CatIcon = cat.icon;
                const count =
                  cat.id === "all"
                    ? CATALOG_PRODUCTS.length
                    : CATALOG_PRODUCTS.filter((p) => p.category === cat.id).length;

                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => {
                      setSelectedCategory(cat.id);
                      setShowAll(false);
                    }}
                    className={`group relative snap-start shrink-0 min-w-[155px] sm:min-w-[180px] px-4 py-3 rounded-2xl transition-all duration-300 cursor-pointer flex items-center gap-3.5 border text-left active:scale-95 hover:scale-[1.03] ${
                      isSelected
                        ? "bg-red-900 text-white border-red-950 shadow-lg shadow-red-950/25 ring-2 ring-red-500/30"
                        : "bg-white hover:bg-slate-50/90 text-slate-700 hover:text-slate-900 border-slate-200/90 hover:border-red-200 shadow-xs hover:shadow-md"
                    }`}
                  >
                    <div
                      className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isSelected
                          ? "bg-white/20 text-white shadow-inner scale-105"
                          : "bg-red-50 text-[#991b1b] border border-red-100 group-hover:bg-[#991b1b] group-hover:text-white group-hover:rotate-3 group-hover:scale-110"
                      }`}
                    >
                      <CatIcon size={20} className="transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-1">
                        <span className="block font-extrabold text-xs sm:text-sm tracking-tight truncate">
                          {cat.name}
                        </span>
                        <span
                          className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full transition-colors ${
                            isSelected
                              ? "bg-white/20 text-white"
                              : "bg-slate-100 text-slate-600 group-hover:bg-red-50 group-hover:text-[#991b1b]"
                          }`}
                        >
                          {count}
                        </span>
                      </div>
                      <span
                        className={`block text-[10px] sm:text-[11px] font-medium truncate mt-0.5 transition-colors ${
                          isSelected ? "text-red-100" : "text-slate-500 group-hover:text-slate-600"
                        }`}
                      >
                        {cat.desc}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
            {/* Indicador sutil de scroll derecho en pantallas táctiles */}
            <div className="pointer-events-none absolute right-0 top-0 bottom-2 w-8 bg-gradient-to-l from-white/90 to-transparent sm:hidden" />
          </div>
        </div>

        {/* ── FASE 2: CUADRÍCULA DE TARJETAS ESTILO E-COMMERCE (GRID 2 COLS EN MÓVIL) ── */}
        {displayedProducts.length > 0 ? (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 animate-fadeIn">
              {displayedProducts.map((product) => {
                const ItemIcon = product.icon;

                return (
                  <div
                    key={product.id}
                    className="group relative bg-white border border-slate-100 hover:border-red-200/90 rounded-2xl p-2.5 sm:p-3.5 shadow-xs hover:shadow-xl hover:shadow-slate-200/70 transition-all duration-300 flex flex-col justify-between overflow-hidden"
                  >
                    <div>
                      {/* Fotografía Protagonista Limpia con Fallback Robusto */}
                      <button
                        type="button"
                        onClick={() => handleOpenModal(product)}
                        className="w-full text-left cursor-pointer focus:outline-none rounded-xl block transition-transform active:scale-[0.99]"
                        aria-label={`Ver ficha técnica de ${product.name}`}
                      >
                        <ProductCardImage
                          src={product.image}
                          alt={product.name}
                          categoryIcon={product.categoryIcon}
                          categoryName={product.categoryName}
                          badge={product.badge}
                        />
                      </button>

                      {/* Nombre del Producto con Icono Vectorial Único */}
                      <button
                        type="button"
                        onClick={() => handleOpenModal(product)}
                        className="w-full text-left flex items-start gap-1.5 mb-1.5 cursor-pointer group/title focus:outline-none"
                        aria-label={`Ver ficha técnica de ${product.name}`}
                      >
                        <div className="w-5 h-5 rounded-md bg-red-50 flex items-center justify-center text-[#991b1b] shrink-0 mt-0.5">
                          <ItemIcon size={12} />
                        </div>
                        <h3 className="font-bold text-slate-900 text-xs sm:text-sm group-hover/title:text-[#991b1b] transition-colors leading-snug line-clamp-2 min-h-[2rem] sm:min-h-[2.5rem]">
                          {product.name}
                        </h3>
                      </button>

                      {/* Especificaciones técnicas clave como etiqueta limpia */}
                      <div className="flex items-center gap-1.5 mb-2 flex-wrap">
                        <span className="inline-flex items-center gap-1 bg-slate-100 group-hover:bg-red-50 text-slate-700 group-hover:text-[#991b1b] text-[10px] sm:text-[11px] font-semibold px-2 py-0.5 rounded-md leading-tight line-clamp-1 border border-slate-200/60 group-hover:border-red-100 transition-colors">
                          {product.specs}
                        </span>
                        <span className="inline-flex items-center gap-0.5 text-[9px] font-bold uppercase text-slate-500 bg-slate-50 px-1.5 py-0.5 rounded border border-slate-200/50">
                          <Tag size={9} className="text-[#991b1b]" />
                          <span>{product.featureTag}</span>
                        </span>
                      </div>

                      {/* Reseña de aplicación comercial */}
                      <p className="text-[10px] sm:text-[11px] text-slate-500 leading-snug line-clamp-1 mb-3">
                        {product.highlight}
                      </p>
                    </div>

                    {/* Acciones de la Tarjeta: Ficha Técnica + WhatsApp */}
                    <div className="pt-2 sm:pt-2.5 border-t border-slate-100 space-y-1.5">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleOpenModal(product);
                        }}
                        className="w-full inline-flex items-center justify-center gap-1.5 bg-slate-100 hover:bg-red-50 active:scale-[0.98] text-slate-700 hover:text-[#991b1b] font-bold py-2 sm:py-2.5 px-3 rounded-xl text-xs sm:text-sm border border-slate-200 hover:border-red-200 transition-all cursor-pointer shadow-2xs"
                        title={`Ver especificaciones y ficha de ${product.name}`}
                      >
                        <FileText size={13} className="text-[#991b1b] shrink-0" />
                        <span>Ficha Técnica</span>
                      </button>

                      <a
                        href={`https://wa.me/${whatsappNumber}?text=Hola%20Dialka,%20deseo%20cotizar%20el%20equipo:%20${encodeURIComponent(product.name)}%20(${encodeURIComponent(product.specs)})`}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full inline-flex items-center justify-center gap-1.5 bg-[#991b1b] hover:bg-[#7f1d1d] active:scale-[0.98] text-white font-bold py-2 sm:py-2.5 px-3 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-xs hover:shadow-md cursor-pointer group/btn"
                        title={`Cotizar ${product.name}`}
                      >
                        <Phone size={13} className="transition-transform group-hover/btn:scale-110 shrink-0" />
                        <span>Cotizar por WhatsApp</span>
                        <ArrowRight size={13} className="transition-transform group-hover/btn:translate-x-0.5 shrink-0" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Botón de Cargar Más / Explorar Catálogo Completo (cuando initialLimit está activo y no se ha expandido) */}
            {initialLimit && !showAll && !searchQuery && selectedCategory === "all" && filteredProducts.length > initialLimit && (
              <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={() => setShowAll(true)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 active:scale-[0.98] text-white font-bold py-3.5 px-6 rounded-xl text-xs sm:text-sm shadow-md hover:shadow-lg transition-all cursor-pointer"
                >
                  <span>Ver más equipos en esta vitrina (+{filteredProducts.length - initialLimit})</span>
                  <MoveDown size={15} />
                </button>
                <Link
                  href="/productos"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-red-50 active:scale-[0.98] text-[#991b1b] border border-red-200 hover:border-red-300 font-bold py-3.5 px-6 rounded-xl text-xs sm:text-sm shadow-2xs hover:shadow-sm transition-all text-center"
                >
                  <span>Explorar Catálogo Completo (20 equipos)</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            )}
          </>
        ) : (
          /* ── ESTADO VACÍO (SIN RESULTADOS) ── */
          <div className="bg-white border border-dashed border-slate-300 rounded-2xl p-10 sm:p-14 text-center max-w-md mx-auto animate-fadeIn shadow-xs">
            <div className="w-14 h-14 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center mx-auto mb-3.5 text-[#991b1b]">
              <Package size={28} />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5">
              No se encontraron equipos
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mb-5 leading-relaxed">
              No encontramos ningún modelo que coincida con{" "}
              {searchQuery ? `"${searchQuery}"` : "el filtro seleccionado"}.
            </p>
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-2 bg-[#991b1b] hover:bg-[#7f1d1d] text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-all shadow-2xs cursor-pointer"
            >
              <RotateCcw size={13} />
              <span>Ver todos los equipos</span>
            </button>
          </div>
        )}
      </div>

      {/* Modal de Especificaciones Técnicas y Descarga */}
      <ProductDetailsModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        whatsappNumber={whatsappNumber}
      />
    </section>
  );
}
