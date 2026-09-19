"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import {
  Search,
  X,
  Phone,
  ArrowRight,
  CheckCircle2,
  SlidersHorizontal,
  RotateCcw,
  Sparkles,
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
  Monitor,
  FlaskConical,
  Gauge,
  Award,
  Microscope,
  Shield,
  Users,
  Cpu,
  Truck,
  Zap,
  Tag,
  type LucideIcon,
} from "lucide-react";

export interface ProductItem {
  id: string;
  name: string;
  category: "comerciales" | "agropecuaria" | "industriales" | "laboratorio" | "ganadera";
  categoryName: string;
  categoryIcon: string;
  specs: string;
  image: string;
  badge: string;
  highlight: string;
  icon: LucideIcon;
  featureTag: string;
}

export const CATALOG_CATEGORIES = [
  { id: "all", name: "Todas", icon: "✨", desc: "Todo el catálogo" },
  { id: "comerciales", name: "Comerciales", icon: "🛒", desc: "Mostrador y tickets" },
  { id: "agropecuaria", name: "Agropecuaria", icon: "🌾", desc: "Avícola y porcino" },
  { id: "industriales", name: "Industriales", icon: "🏭", desc: "Plataformas y grúas" },
  { id: "laboratorio", name: "Laboratorio", icon: "🧪", desc: "Analíticas y precisión" },
  { id: "ganadera", name: "Ganadera", icon: "🐂", desc: "Bretes y barras" },
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
];

interface ProductsCatalogProps {
  categories?: any;
  whatsappNumber?: string;
  showHeading?: boolean;
  title?: string;
  subtitle?: string;
  className?: string;
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
    <div className="relative aspect-square w-full rounded-xl bg-slate-50/90 group-hover:bg-red-50/20 p-2 border border-slate-100/80 overflow-hidden mb-2.5 sm:mb-3 flex items-center justify-center transition-colors duration-300">
      {!hasError ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
          onError={() => setHasError(true)}
        />
      ) : (
        <div className="flex flex-col items-center justify-center text-slate-400 p-4 text-center">
          <Scale size={32} className="text-[#991b1b]/60 mb-2" />
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">{alt}</span>
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-50 group-hover:opacity-30 transition-opacity pointer-events-none" />

      {/* Insignia Flotante de Categoría */}
      <div className="absolute top-2 left-2 z-10">
        <span className="inline-flex items-center gap-1 bg-white/95 backdrop-blur-md text-[#991b1b] text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-full shadow-2xs border border-white/60">
          <span>{categoryIcon}</span>
          <span className="truncate max-w-[70px] sm:max-w-none">{categoryName}</span>
        </span>
      </div>

      {/* Badge de garantía / norma */}
      <div className="absolute bottom-2 left-2 right-2 z-10">
        <span className="inline-block text-[9px] sm:text-[10px] font-bold text-white bg-black/65 backdrop-blur-xs px-2 py-0.5 rounded truncate max-w-full">
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
}: ProductsCatalogProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

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

  const handleReset = () => {
    setSelectedCategory("all");
    setSearchQuery("");
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

          {/* Carrusel Deslizante Horizontal (Touch-Friendly sin Scrollbar Fea) */}
          <div className="overflow-x-auto no-scrollbar scroll-smooth flex gap-2.5 sm:gap-3.5 pb-2 pt-1 -mx-4 px-4 sm:mx-0 sm:px-0 snap-x">
            {CATALOG_CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              const count =
                cat.id === "all"
                  ? CATALOG_PRODUCTS.length
                  : CATALOG_PRODUCTS.filter((p) => p.category === cat.id).length;

              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`snap-start shrink-0 min-w-[140px] sm:min-w-[165px] p-2.5 sm:p-3 rounded-2xl transition-all duration-200 cursor-pointer flex items-center gap-2.5 sm:gap-3 border text-left ${
                    isSelected
                      ? "bg-gradient-to-r from-[#991b1b] to-[#b91c1c] text-white shadow-md shadow-red-900/25 border-transparent scale-[1.02]"
                      : "bg-white hover:bg-slate-50 text-slate-700 hover:text-[#991b1b] border-slate-200/90 hover:border-red-300 shadow-2xs hover:shadow-sm"
                  }`}
                >
                  <div
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center text-lg sm:text-xl shrink-0 transition-transform ${
                      isSelected
                        ? "bg-white/20 backdrop-blur-xs scale-105"
                        : "bg-slate-100 group-hover:bg-red-50"
                    }`}
                  >
                    {cat.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="block font-extrabold text-xs sm:text-sm truncate">
                      {cat.name}
                    </span>
                    <span
                      className={`block text-[10px] sm:text-[11px] truncate ${
                        isSelected ? "text-white/80" : "text-slate-500"
                      }`}
                    >
                      {count} {count === 1 ? "modelo" : "modelos"}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── FASE 2: CUADRÍCULA DE TARJETAS ESTILO E-COMMERCE (GRID 2 COLS EN MÓVIL) ── */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 animate-fadeIn">
            {filteredProducts.map((product) => {
              const ItemIcon = product.icon;

              return (
                <div
                  key={product.id}
                  className="group relative bg-white border border-slate-100 hover:border-red-200/90 rounded-2xl p-2.5 sm:p-3.5 shadow-xs hover:shadow-xl hover:shadow-slate-200/70 transition-all duration-300 flex flex-col justify-between overflow-hidden"
                >
                  <div>
                    {/* Fotografía Protagonista Limpia con Fallback Robusto */}
                    <ProductCardImage
                      src={product.image}
                      alt={product.name}
                      categoryIcon={product.categoryIcon}
                      categoryName={product.categoryName}
                      badge={product.badge}
                    />

                    {/* Nombre del Producto con Icono Vectorial Único */}
                    <div className="flex items-start gap-1.5 mb-1.5">
                      <div className="w-5 h-5 rounded-md bg-red-50 flex items-center justify-center text-[#991b1b] shrink-0 mt-0.5">
                        <ItemIcon size={12} />
                      </div>
                      <h3 className="font-bold text-slate-900 text-xs sm:text-sm group-hover:text-[#991b1b] transition-colors leading-snug line-clamp-2 min-h-[2rem] sm:min-h-[2.5rem]">
                        {product.name}
                      </h3>
                    </div>

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

                  {/* Botón de Conversión Comercial (Llamativo y optimizado para clics) */}
                  <div className="pt-2 sm:pt-2.5 border-t border-slate-100">
                    <a
                      href={`https://wa.me/${whatsappNumber}?text=Hola%20Dialka,%20deseo%20cotizar%20el%20equipo:%20${encodeURIComponent(product.name)}%20(${encodeURIComponent(product.specs)})`}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full inline-flex items-center justify-center gap-1.5 bg-[#991b1b] hover:bg-[#7f1d1d] active:scale-[0.98] text-white font-bold py-2.5 px-3 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-xs hover:shadow-md cursor-pointer group/btn"
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
    </section>
  );
}
