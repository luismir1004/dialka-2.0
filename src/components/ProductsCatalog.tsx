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
}

export const CATALOG_CATEGORIES = [
  { id: "all", name: "Todas", icon: "✨" },
  { id: "comerciales", name: "Comerciales", icon: "🛒" },
  { id: "agropecuaria", name: "Agropecuaria", icon: "🌾" },
  { id: "industriales", name: "Industriales", icon: "🏭" },
  { id: "laboratorio", name: "Laboratorio", icon: "🧪" },
  { id: "ganadera", name: "Ganadera", icon: "🐂" },
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
  },
  {
    id: "com-ticketera-30kg",
    name: "Balanza Comercial con Impresión de Tickets",
    category: "comerciales",
    categoryName: "Comerciales",
    categoryIcon: "🛒",
    specs: "30 kg · Impresor térmico · 1.000 PLUs memorias",
    image: "/images/sencamer/balanza-certificada.jpg",
    badge: "Punto de Venta",
    highlight: "Conexión Ethernet y RS-232 a sistemas de facturación",
  },
  {
    id: "com-colgante-50kg",
    name: "Balanza Colgante Digital de 50kg",
    category: "comerciales",
    categoryName: "Comerciales",
    categoryIcon: "🛒",
    specs: "50 kg × 10 g · Gancho de acero inox · Display LCD",
    image: "/images/productos/comercial.jpg",
    badge: "Portátil",
    highlight: "Para pescaderías, carnicerías y mercados mayoristas",
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
  },
  {
    id: "agro-porcinos-300kg",
    name: "Báscula Jaula para Porcinos 300kg",
    category: "agropecuaria",
    categoryName: "Agropecuaria",
    categoryIcon: "🌾",
    specs: "300 kg · Jaula con rejas · Indicador anti-movimiento",
    image: "/images/productos/agropecuario.jpg",
    badge: "Porcicultura",
    highlight: "Filtro de estabilización de peso para cerdos en movimiento",
  },
  {
    id: "agro-barras-2000kg",
    name: "Barras Pesadoras Portátiles 2.000kg (Par)",
    category: "agropecuaria",
    categoryName: "Agropecuaria",
    categoryIcon: "🌾",
    specs: "2.000 kg · 2 barras de 100 cm · Cable con malla de acero",
    image: "/images/productos/agropecuario.jpg",
    badge: "Multi-Uso Campo",
    highlight: "Se instalan fácilmente bajo cualquier cajón o manga",
  },
  {
    id: "agro-veterinaria-150kg",
    name: "Báscula Veterinaria para Mascotas y Menores",
    category: "agropecuaria",
    categoryName: "Agropecuaria",
    categoryIcon: "🌾",
    specs: "150 kg × 50 g · Perfil ultra bajo · Alfombra antideslizante",
    image: "/images/productos/agropecuario.jpg",
    badge: "Clínicas y Fincas",
    highlight: "Función Hold para retención del peso en pantalla",
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
  },
  {
    id: "ind-grua-5000kg",
    name: "Báscula Colgante de Grúa 5.000kg para Puente",
    category: "industriales",
    categoryName: "Industriales",
    categoryIcon: "🏭",
    specs: "5.000 kg · Gancho giratorio 360° · Control inalámbrico",
    image: "/images/productos/industrial.jpg",
    badge: "Carga Pesada",
    highlight: "Pantalla LED gigante visible a más de 25 metros de distancia",
  },
  {
    id: "ind-extraplana-inox",
    name: "Plataforma Extraplana Inox con Rampas",
    category: "industriales",
    categoryName: "Industriales",
    categoryIcon: "🏭",
    specs: "1.000 kg · Rampas incorporadas · Lavable a presión IP68",
    image: "/images/productos/industrial.jpg",
    badge: "Grado Sanitario",
    highlight: "Para plantas procesadoras de alimentos y laboratorios",
  },
  {
    id: "ind-indicador-d300",
    name: "Indicador Digital Industrial Dialka D-300",
    category: "industriales",
    categoryName: "Industriales",
    categoryIcon: "🏭",
    specs: "Carcasa Inox · Salida RS-232/485 · Filtro digital anti-vibración",
    image: "/images/productos/industrial.jpg",
    badge: "Terminal Inteligente",
    highlight: "Integración directa con impresoras, semáforos y PLC",
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
  },
  {
    id: "lab-apolo-3000g",
    name: "Balanza de Precisión Apolo Lab 3000g × 0.1g",
    category: "laboratorio",
    categoryName: "Laboratorio",
    categoryIcon: "🧪",
    specs: "3.000 g × 0.1 g · Pantalla LCD backlight · Nivel burbuja",
    image: "/images/productos/analitico.jpg",
    badge: "Control de Calidad",
    highlight: "Estabilización veloz en menos de 1.5 segundos",
  },
  {
    id: "lab-ohaus-scout",
    name: "Balanza de Precisión Ohaus Scout 5000g × 1g",
    category: "laboratorio",
    categoryName: "Laboratorio",
    categoryIcon: "🧪",
    specs: "5.000 g × 1 g · Protección contra sobrecarga · Apilable",
    image: "/images/productos/analitico.jpg",
    badge: "Ohaus Global",
    highlight: "Fabricación estadounidense con máxima resistencia al desgaste",
  },
  {
    id: "lab-semianalitica-8000g",
    name: "Balanza Semianalítica 8000g × 1g Dialka",
    category: "laboratorio",
    categoryName: "Laboratorio",
    categoryIcon: "🧪",
    specs: "8.000 g × 1 g · Salida de datos GLP/GMP · Modo porcentaje",
    image: "/images/productos/analitico.jpg",
    badge: "Ensayos Químicos",
    highlight: "Para formulación precisa de mezclas e insumos industriales",
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
  },
  {
    id: "gan-colectiva-5000kg",
    name: "Báscula Ganadera Colectiva 5.000kg (3.00×2.00m)",
    category: "ganadera",
    categoryName: "Ganadera",
    categoryIcon: "🐂",
    specs: "5.000 kg · Capacidad 6 a 8 reses · Chapa antideslizante",
    image: "/images/proyectos/bascula-ganadera.jpg",
    badge: "Lotes de Ganado",
    highlight: "Piso de madera dura tratada o chapa estriada antiresbalante",
  },
  {
    id: "gan-kit-brete",
    name: "Kit de Modernización Electrónica para Brete",
    category: "ganadera",
    categoryName: "Ganadera",
    categoryIcon: "🐂",
    specs: "4 Celdas shear beam · Indicador digital con batería 80h",
    image: "/images/proyectos/bascula-ganadera.jpg",
    badge: "Transformación Digital",
    highlight: "Convierte cualquier brete mecánico antiguo a pesaje digital",
  },
  {
    id: "gan-portatil-ruedas",
    name: "Báscula Ganadera Portátil Remolcable con Ruedas",
    category: "ganadera",
    categoryName: "Ganadera",
    categoryIcon: "🐂",
    specs: "2.500 kg · Sistema de tiro y ruedas abatibles para campo",
    image: "/images/proyectos/bascula-ganadera.jpg",
    badge: "100% Móvil",
    highlight: "Traslado seguro entre potreros y fincas con tiro para camioneta",
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
        product.categoryName.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleReset = () => {
    setSelectedCategory("all");
    setSearchQuery("");
  };

  return (
    <section className={`bg-slate-50/60 py-10 sm:py-16 md:py-20 border-b border-slate-200 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado Opcional del Catálogo */}
        {showHeading && (
          <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200/80 px-3.5 py-1 rounded-full text-[#991b1b] text-xs font-bold uppercase tracking-wider mb-2.5 shadow-2xs">
              <Package size={14} className="text-[#991b1b]" />
              <span>Vitrina Comercial · Entrega Inmediata</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
              {title || "Catálogo de Balanzas y Sistemas de Pesaje"}
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
              {subtitle || "Explore nuestras 5 líneas de equipos con calibración garantizada, repuestos originales y despacho a todo el país."}
            </p>
          </div>
        )}

        {/* ── ENCABEZADO Y BARRA DE FILTROS SUPERIOR TIPO E-COMMERCE ── */}
        <div className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-6 mb-8 sm:mb-10 shadow-xs">
          <div className="flex flex-col md:flex-row gap-3 sm:gap-4 items-stretch md:items-center justify-between mb-5">
            {/* Buscador de productos */}
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Search size={18} />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar modelo o especificación (ej: 30kg, Brete, Apolo, Plataforma)..."
                className="w-full bg-slate-50 hover:bg-white focus:bg-white border border-slate-200 focus:border-[#991b1b] rounded-xl pl-10 pr-10 py-2.5 sm:py-3 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#991b1b]/10 transition-all shadow-2xs"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-700 transition-colors"
                  aria-label="Borrar búsqueda"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {/* Contador de equipos */}
            <div className="flex items-center justify-between sm:justify-end gap-2 sm:gap-3 text-xs font-semibold text-slate-600 shrink-0">
              <span className="inline-flex items-center gap-1.5 bg-slate-50 border border-slate-200 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl text-[11px] sm:text-xs">
                <SlidersHorizontal size={13} className="text-[#991b1b]" />
                <span>
                  {filteredProducts.length} de {CATALOG_PRODUCTS.length} equipos
                </span>
              </span>
              {(selectedCategory !== "all" || searchQuery !== "") && (
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-1 text-[#991b1b] hover:text-[#7f1d1d] font-bold px-2 py-1 text-xs hover:underline cursor-pointer"
                >
                  <RotateCcw size={12} />
                  <span>Restablecer</span>
                </button>
              )}
            </div>
          </div>

          {/* ── PESTAÑAS DE LAS 5 LÍNEAS PRINCIPALES (ESTILO E-COMMERCE) ── */}
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-2.5">
              Líneas de Pesaje:
            </span>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
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
                    className={`inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl transition-all duration-200 cursor-pointer active:scale-95 ${
                      isSelected
                        ? "bg-[#991b1b] text-white shadow-xs shadow-red-900/20"
                        : "bg-slate-50 hover:bg-white text-slate-700 hover:text-[#991b1b] border border-slate-200 hover:border-red-200 shadow-2xs"
                    }`}
                  >
                    <span>{cat.icon}</span>
                    <span>{cat.name}</span>
                    <span
                      className={`text-[10px] sm:text-[11px] px-1.5 py-0.2 rounded-md ${
                        isSelected
                          ? "bg-white/20 text-white"
                          : "bg-slate-200/70 text-slate-600"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── CUADRÍCULA DE PRODUCTOS RESPONSIVE (2 COLS EN MÓVIL, 3 EN TABLET, 4 EN ESCRITORIO) ── */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 animate-fadeIn">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group relative bg-white border border-slate-200/90 hover:border-red-400 rounded-2xl p-3 sm:p-4 shadow-sm hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden"
              >
                {/* Borde sutil iluminado al hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-red-500/0 via-red-500/0 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div>
                  {/* Contenedor Fotográfico Limpio con aspect-[4/3] */}
                  <div className="relative aspect-[4/3] w-full rounded-xl bg-slate-50 group-hover:bg-red-50/20 border border-slate-100 group-hover:border-red-100/60 overflow-hidden mb-2.5 sm:mb-3 transition-all duration-300 flex items-center justify-center">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                    {/* Insignia Flotante de Categoría */}
                    <div className="absolute top-2 left-2">
                      <span className="inline-flex items-center gap-1 bg-white/95 backdrop-blur-md text-[#991b1b] text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-full shadow-xs border border-white/60">
                        <span>{product.categoryIcon}</span>
                        <span className="truncate">{product.categoryName}</span>
                      </span>
                    </div>

                    {/* Badge de garantía / norma */}
                    <div className="absolute bottom-2 left-2 right-2">
                      <span className="inline-block text-[9px] sm:text-[10px] font-bold text-white bg-black/60 backdrop-blur-xs px-2 py-0.5 rounded truncate max-w-full">
                        {product.badge}
                      </span>
                    </div>
                  </div>

                  {/* Nombre del Producto (Tipografía fuerte) */}
                  <h3 className="font-extrabold text-slate-900 text-xs sm:text-sm group-hover:text-[#991b1b] transition-colors leading-snug line-clamp-2 mb-1">
                    {product.name}
                  </h3>

                  {/* Especificaciones técnicas de una línea */}
                  <p className="text-[10px] sm:text-xs font-semibold text-[#991b1b] leading-tight line-clamp-1 mb-1">
                    {product.specs}
                  </p>

                  {/* Reseña de aplicación */}
                  <p className="text-[10px] sm:text-[11px] text-slate-500 leading-snug line-clamp-1 mb-3">
                    {product.highlight}
                  </p>
                </div>

                {/* Botón de Acción Directa estilo E-commerce */}
                <div className="pt-2 sm:pt-2.5 border-t border-slate-100">
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=Hola%20Dialka,%20deseo%20cotizar%20el%20equipo:%20${encodeURIComponent(product.name)}%20(${encodeURIComponent(product.specs)})`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full inline-flex items-center justify-center gap-1.5 bg-[#991b1b] hover:bg-[#7f1d1d] active:scale-[0.98] text-white font-bold py-2 sm:py-2.5 px-3 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-xs hover:shadow-md cursor-pointer group/btn"
                    title={`Cotizar ${product.name}`}
                  >
                    <Phone size={13} className="transition-transform group-hover/btn:scale-110" />
                    <span>Cotizar</span>
                    <ArrowRight size={13} className="transition-transform group-hover/btn:translate-x-0.5" />
                  </a>
                </div>
              </div>
            ))}
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
