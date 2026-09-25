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
  Package,
  Scale,
  MoveDown,
  FileText,
  Tag,
  ArrowUpDown,
} from "lucide-react";
import { ProductDetailsModal } from "./ProductDetailsModal";
import { SITE_CONFIG } from "@/lib/config";
import {
  CATALOG_CATEGORIES,
  CATALOG_PRODUCTS,
  type ProductItem,
  type CategoryItem,
} from "@/lib/products";

export type { ProductItem, CategoryItem };
export { CATALOG_CATEGORIES, CATALOG_PRODUCTS };

// Sinónimos industriales comunes para optimizar la búsqueda
const INDUSTRIAL_SYNONYMS: Record<string, string[]> = {
  romana: ["camionera", "pesaje", "báscula", "plataforma"],
  camion: ["camionera", "ejes", "vehicular", "chuto"],
  camiones: ["camionera", "ejes", "vehicular"],
  ganado: ["agropecuaria", "ganadera", "brete", "animales"],
  vaca: ["agropecuaria", "ganadera", "brete"],
  vacas: ["agropecuaria", "ganadera", "brete"],
  toro: ["agropecuaria", "ganadera", "brete"],
  toros: ["agropecuaria", "ganadera", "brete"],
  animal: ["agropecuaria", "ganadera"],
  animales: ["agropecuaria", "ganadera"],
  cerdo: ["agropecuaria", "ganadera"],
  cerdos: ["agropecuaria", "ganadera"],
  laboratorio: ["analítica", "analitica", "precisión", "precision", "gramera"],
  gramera: ["analítica", "analitica", "precisión", "precision", "comercial"],
  pesa: ["balanza", "báscula", "bascula", "indicador"],
  fosa: ["camionera", "metálica", "instalación"],
  colgante: ["grúa", "gancho", "dinamómetro"],
  pesaje: ["balanza", "báscula", "indicador", "celda"],
};

interface ProductsCatalogProps {
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
        <span className="inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-md text-[#7f1d1d] text-[11px] sm:text-xs font-bold px-2.5 py-1 rounded-full shadow-2xs border border-slate-200/80">
          <span>{categoryIcon}</span>
          <span className="truncate max-w-[85px] sm:max-w-none">{categoryName}</span>
        </span>
      </div>

      {/* Badge de garantía / norma */}
      <div className="absolute bottom-2 left-2 right-2 z-10">
        <span className="inline-block text-[11px] sm:text-xs font-semibold text-slate-800 bg-slate-100/95 backdrop-blur-xs px-2.5 py-0.5 rounded-md border border-slate-200/90 text-center w-full truncate shadow-2xs">
          {badge}
        </span>
      </div>
    </div>
  );
}

export function ProductsCatalog({
  whatsappNumber = SITE_CONFIG.contact.whatsappNumber,
  showHeading = true,
  title,
  subtitle,
  className = "",
  initialLimit,
}: ProductsCatalogProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<"featured" | "name-asc" | "name-desc" | "category">("featured");
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

  // Filtrado reactivo en tiempo real con sinónimos industriales y tokens múltiples
  const filteredProducts = useMemo(() => {
    const rawTokens = searchQuery.trim().toLowerCase().split(/\s+/).filter(Boolean);

    return CATALOG_PRODUCTS.filter((product) => {
      // Filtro por categoría
      const matchesCategory =
        selectedCategory === "all" || product.category === selectedCategory;

      if (!matchesCategory) return false;
      if (rawTokens.length === 0) return true;

      // Concatenar todos los atributos del producto para búsqueda exhaustiva
      const searchableContent = [
        product.name,
        product.specs,
        product.highlight,
        product.categoryName,
        product.featureTag,
      ]
        .join(" ")
        .toLowerCase();

      // Cada token ingresado debe coincidir directamente o por sinónimo industrial
      return rawTokens.every((token) => {
        if (searchableContent.includes(token)) return true;
        const syns = INDUSTRIAL_SYNONYMS[token];
        return syns ? syns.some((syn) => searchableContent.includes(syn)) : false;
      });
    });
  }, [selectedCategory, searchQuery]);

  // Ordenamiento de productos según criterio seleccionado
  const sortedProducts = useMemo(() => {
    const list = [...filteredProducts];
    if (sortBy === "name-asc") {
      list.sort((a, b) => a.name.localeCompare(b.name, "es"));
    } else if (sortBy === "name-desc") {
      list.sort((a, b) => b.name.localeCompare(a.name, "es"));
    } else if (sortBy === "category") {
      list.sort((a, b) => a.categoryName.localeCompare(b.categoryName, "es"));
    }
    return list;
  }, [filteredProducts, sortBy]);

  // Lista a mostrar: limitada inicialmente en el Home a initialLimit si no se ha expandido ni ordenado
  const displayedProducts = useMemo(() => {
    if (initialLimit && !showAll && !searchQuery && selectedCategory === "all" && sortBy === "featured") {
      return sortedProducts.slice(0, initialLimit);
    }
    return sortedProducts;
  }, [sortedProducts, initialLimit, showAll, searchQuery, selectedCategory, sortBy]);

  const handleReset = () => {
    setSelectedCategory("all");
    setSearchQuery("");
    setSortBy("featured");
    setShowAll(false);
  };

  return (
    <section className={`bg-gradient-to-b from-white via-slate-50/60 to-white py-10 sm:py-16 md:py-20 border-b border-slate-200 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado Opcional de la Vitrina */}
        {showHeading && (
          <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200/80 px-4 py-1.5 rounded-full text-[#7f1d1d] text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
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
                className="p-1.5 mr-1 text-slate-400 hover:text-slate-700 transition-colors shrink-0 cursor-pointer"
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

        {/* ── FASE 1: BARRA DE CONTROL DE CATEGORÍAS Y ORDENAMIENTO ── */}
        <div className="mb-8 sm:mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3 px-1">
            <div className="flex items-center gap-2">
              <SlidersHorizontal size={14} className="text-[#991b1b]" />
              <span className="text-xs sm:text-sm font-bold text-slate-800 uppercase tracking-wider">
                Líneas Especializadas:
              </span>
              <span className="text-xs font-semibold text-slate-500">
                ({filteredProducts.length} {filteredProducts.length === 1 ? "equipo" : "equipos"})
              </span>
            </div>

            <div className="flex items-center gap-3 justify-between sm:justify-end">
              {/* Selector de Ordenamiento */}
              <div className="flex items-center gap-1.5 bg-white border border-slate-200/90 rounded-xl px-2.5 py-1 shadow-2xs">
                <ArrowUpDown size={13} className="text-[#991b1b]" />
                <label htmlFor="sort-catalog-select" className="sr-only">
                  Ordenar catálogo
                </label>
                <select
                  id="sort-catalog-select"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as "featured" | "name-asc" | "name-desc" | "category")}
                  className="bg-transparent text-xs font-bold text-slate-700 focus:outline-none cursor-pointer py-0.5"
                >
                  <option value="featured">Destacados</option>
                  <option value="name-asc">Nombre (A – Z)</option>
                  <option value="name-desc">Nombre (Z – A)</option>
                  <option value="category">Por Categoría</option>
                </select>
              </div>

              {(selectedCategory !== "all" || searchQuery !== "" || sortBy !== "featured") && (
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-1 text-[#7f1d1d] hover:text-[#450a0a] font-bold text-xs hover:underline cursor-pointer"
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

        {/* ── BARRA DE ESTATUS DE RESULTADOS Y CONTADOR EN VIVO ── */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 px-1 text-xs text-slate-600">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-semibold text-slate-900">
              Mostrando {displayedProducts.length} de {filteredProducts.length} equipos
            </span>
            {selectedCategory !== "all" && (
              <span className="bg-red-50 text-[#991b1b] border border-red-200/60 font-bold px-2 py-0.5 rounded-full text-[11px]">
                {CATALOG_CATEGORIES.find((c) => c.id === selectedCategory)?.name}
              </span>
            )}
            {searchQuery && (
              <span className="bg-slate-100 text-slate-700 font-medium px-2 py-0.5 rounded-full text-[11px] truncate max-w-[180px]">
                Búsqueda: &ldquo;{searchQuery}&rdquo;
              </span>
            )}
          </div>
          {(selectedCategory !== "all" || searchQuery) && (
            <button
              type="button"
              onClick={handleReset}
              className="text-[#991b1b] hover:text-[#7f1d1d] font-semibold text-xs flex items-center gap-1 hover:underline cursor-pointer self-start sm:self-auto"
            >
              <RotateCcw size={12} />
              <span>Limpiar filtros</span>
            </button>
          )}
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
                        <span className="inline-flex items-center gap-1 bg-slate-100 group-hover:bg-red-50 text-slate-800 group-hover:text-[#991b1b] text-[11px] sm:text-xs font-semibold px-2 py-0.5 rounded-md leading-tight line-clamp-1 border border-slate-200/60 group-hover:border-red-100 transition-colors">
                          {product.specs}
                        </span>
                        <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-bold uppercase text-slate-600 bg-slate-100 px-2 py-0.5 rounded border border-slate-200/70">
                          <Tag size={10} className="text-[#991b1b]" />
                          <span>{product.featureTag}</span>
                        </span>
                      </div>

                      {/* Reseña de aplicación comercial */}
                      <p className="text-[11px] sm:text-xs text-slate-500 leading-snug line-clamp-1 mb-3">
                        {product.highlight}
                      </p>
                    </div>

                    {/* Acciones de la Tarjeta: Ficha Técnica + WhatsApp */}
                    {/* Versión Móvil: Ficha Iconográfica + Botón Principal Cotizar */}
                    <div className="pt-2 border-t border-slate-100 sm:hidden flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleOpenModal(product);
                        }}
                        className="p-2 bg-slate-100 active:bg-red-50 text-slate-700 active:text-[#991b1b] rounded-xl border border-slate-200 transition-colors shrink-0"
                        title={`Ver ficha técnica de ${product.name}`}
                        aria-label={`Ver ficha técnica de ${product.name}`}
                      >
                        <FileText size={14} className="text-[#991b1b]" />
                      </button>

                      <a
                        href={`https://wa.me/${whatsappNumber}?text=Hola%20Dialka,%20deseo%20cotizar%20el%20equipo:%20${encodeURIComponent(product.name)}%20(${encodeURIComponent(product.specs)})`}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-1 bg-[#991b1b] hover:bg-[#7f1d1d] active:scale-[0.98] text-white font-bold py-2 px-2.5 rounded-xl text-[11px] transition-all shadow-xs"
                        title={`Cotizar ${product.name}`}
                      >
                        <Phone size={12} className="shrink-0" />
                        <span className="truncate">Cotizar WhatsApp</span>
                        <ArrowRight size={11} className="shrink-0" />
                      </a>
                    </div>

                    {/* Versión Tablet y Desktop: Dos botones completos apilados */}
                    <div className="hidden sm:block pt-2.5 border-t border-slate-100 space-y-1.5">
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
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-red-50 active:scale-[0.98] text-[#7f1d1d] border border-red-200 hover:border-red-300 font-bold py-3.5 px-6 rounded-xl text-xs sm:text-sm shadow-2xs hover:shadow-sm transition-all text-center"
                >
                  <span>Explorar Catálogo Completo (20 equipos)</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            )}
          </>
        ) : (
          /* ── ESTADO VACÍO (SIN RESULTADOS) CON CHIPS DE SUGERENCIA ── */
          <div className="bg-white border border-dashed border-slate-300 rounded-3xl p-8 sm:p-12 text-center max-w-lg mx-auto animate-fadeIn shadow-xs">
            <div className="w-14 h-14 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center mx-auto mb-3.5 text-[#7f1d1d]">
              <Package size={28} />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5">
              No se encontraron equipos
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mb-4 leading-relaxed">
              No encontramos ningún modelo que coincida con{" "}
              {searchQuery ? `"${searchQuery}"` : "el filtro seleccionado"}.
            </p>

            <div className="mb-6">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                Líneas recomendadas:
              </span>
              <div className="flex flex-wrap gap-1.5 justify-center">
                <button
                  type="button"
                  onClick={() => { setSelectedCategory("camioneras"); setSearchQuery(""); }}
                  className="px-3 py-1.5 text-xs font-semibold rounded-xl bg-slate-100 hover:bg-red-50 text-slate-700 hover:text-[#7f1d1d] border border-slate-200 hover:border-red-200 cursor-pointer transition-colors"
                >
                  🚛 Camioneras
                </button>
                <button
                  type="button"
                  onClick={() => { setSelectedCategory("comerciales"); setSearchQuery(""); }}
                  className="px-3 py-1.5 text-xs font-semibold rounded-xl bg-slate-100 hover:bg-red-50 text-slate-700 hover:text-[#7f1d1d] border border-slate-200 hover:border-red-200 cursor-pointer transition-colors"
                >
                  🏪 Comerciales
                </button>
                <button
                  type="button"
                  onClick={() => { setSelectedCategory("agropecuarias"); setSearchQuery(""); }}
                  className="px-3 py-1.5 text-xs font-semibold rounded-xl bg-slate-100 hover:bg-red-50 text-slate-700 hover:text-[#7f1d1d] border border-slate-200 hover:border-red-200 cursor-pointer transition-colors"
                >
                  🐄 Agropecuarias
                </button>
                <button
                  type="button"
                  onClick={() => { setSelectedCategory("analiticas"); setSearchQuery(""); }}
                  className="px-3 py-1.5 text-xs font-semibold rounded-xl bg-slate-100 hover:bg-red-50 text-slate-700 hover:text-[#7f1d1d] border border-slate-200 hover:border-red-200 cursor-pointer transition-colors"
                >
                  🔬 Analíticas
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-2 bg-[#991b1b] hover:bg-[#7f1d1d] active:scale-95 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-all shadow-2xs cursor-pointer"
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
