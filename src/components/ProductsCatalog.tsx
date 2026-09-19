"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import {
  Search,
  X,
  Package,
  ArrowRight,
  CheckCircle2,
  SlidersHorizontal,
  RotateCcw,
  Maximize2,
} from "lucide-react";
import { ImageLightbox, type LightboxItem } from "@/components/ImageLightbox";

interface ProductCategory {
  id: string;
  name: string;
  description: string;
  image?: string;
  products: string[];
}

interface ProductsCatalogProps {
  categories: ProductCategory[];
  whatsappNumber: string;
}

export function ProductsCatalog({
  categories,
  whatsappNumber,
}: ProductsCatalogProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);

  // Map categories to Lightbox items
  const lightboxItems: LightboxItem[] = useMemo(() => {
    return categories
      .filter((c) => c.image)
      .map((c) => ({
        id: c.id,
        image: c.image!,
        title: `Línea ${c.name}`,
        subtitle: `${c.products.length} Modelos Disponibles`,
        description: c.description,
        specs: c.products.slice(0, 6),
        tag: "Catálogo Dialka",
        ctaText: `Cotizar Equipos de ${c.name}`,
      }));
  }, [categories]);

  const handleOpenLightbox = (categoryId: string) => {
    const idx = lightboxItems.findIndex((item) => item.id === categoryId);
    if (idx !== -1) {
      setLightboxIndex(idx);
      setIsLightboxOpen(true);
    }
  };

  // Calculate total products count across all categories
  const totalProductsCount = useMemo(() => {
    return categories.reduce((acc, cat) => acc + cat.products.length, 0);
  }, [categories]);

  // Filtered categories and products
  const filteredCategories = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return categories
      .map((cat) => {
        // If a specific category is selected and it doesn't match, return null
        if (selectedCategory !== "all" && cat.id !== selectedCategory) {
          return null;
        }

        // If no search query, return all products in this category
        if (!query) {
          return cat;
        }

        // Filter products matching search query
        const matchingProducts = cat.products.filter((product) =>
          product.toLowerCase().includes(query) ||
          cat.name.toLowerCase().includes(query) ||
          cat.description.toLowerCase().includes(query)
        );

        if (matchingProducts.length === 0) {
          return null;
        }

        return {
          ...cat,
          products: matchingProducts,
        };
      })
      .filter((cat): cat is ProductCategory => cat !== null);
  }, [categories, selectedCategory, searchQuery]);

  // Total matching products count
  const matchingProductsCount = useMemo(() => {
    return filteredCategories.reduce((acc, cat) => acc + cat.products.length, 0);
  }, [filteredCategories]);

  const handleResetFilters = () => {
    setSelectedCategory("all");
    setSearchQuery("");
  };

  return (
    <div className="bg-white py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── BARRA DE BÚSQUEDA Y FILTROS INTERACTIVOS ── */}
        <div className="bg-slate-50/90 border border-slate-200/90 rounded-2xl p-5 sm:p-7 mb-12 shadow-xs">
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between mb-6">
            {/* Input de búsqueda en tiempo real */}
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Search size={18} />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar por equipo (ej: Ganaderas, Camioneras, Apolo Lab, Mostrador)..."
                className="w-full bg-white border border-slate-300 rounded-xl pl-10 pr-10 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#991b1b] focus:ring-2 focus:ring-[#991b1b]/10 transition-all shadow-2xs"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-700 transition-colors"
                  aria-label="Limpiar búsqueda"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {/* Contador de resultados */}
            <div className="flex items-center justify-between sm:justify-end gap-3 text-xs font-semibold text-slate-600 shrink-0">
              <span className="flex items-center gap-1.5 bg-white border border-slate-200 px-3.5 py-2 rounded-xl shadow-2xs">
                <SlidersHorizontal size={14} className="text-[#991b1b]" />
                <span>
                  {matchingProductsCount} de {totalProductsCount} equipos
                </span>
              </span>
              {(selectedCategory !== "all" || searchQuery !== "") && (
                <button
                  onClick={handleResetFilters}
                  className="flex items-center gap-1 text-[#991b1b] hover:text-[#7f1d1d] hover:underline transition-colors px-2 py-1"
                >
                  <RotateCcw size={13} />
                  <span>Restablecer</span>
                </button>
              )}
            </div>
          </div>

          {/* Botones de Categorías Interactivas (Pills) */}
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-2.5">
              Filtrar por categoría:
            </span>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory("all")}
                className={`text-xs font-bold px-4 py-2 rounded-xl transition-all duration-200 cursor-pointer ${
                  selectedCategory === "all"
                    ? "bg-[#991b1b] text-white shadow-xs"
                    : "bg-white border border-slate-200 text-slate-700 hover:border-red-200 hover:text-[#991b1b] shadow-2xs"
                }`}
              >
                Todas las Líneas ({totalProductsCount})
              </button>

              {categories.map((cat) => {
                const isSelected = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`text-xs font-bold px-4 py-2 rounded-xl transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? "bg-[#991b1b] text-white shadow-xs"
                        : "bg-white border border-slate-200 text-slate-700 hover:border-red-200 hover:text-[#991b1b] shadow-2xs"
                    }`}
                  >
                    {cat.name} ({cat.products.length})
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── LISTADO DINÁMICO DE PRODUCTOS CON ANIMACIÓN ── */}
        {filteredCategories.length > 0 ? (
          <div className="space-y-16 lg:space-y-20 animate-fadeIn">
            {filteredCategories.map((cat) => (
              <section key={cat.id} id={cat.id} className="scroll-mt-28">
                {/* ── BANNER VISUAL DE CATEGORÍA CON IMAGEN REAL (Click abre Lightbox) ── */}
                <div className="mb-8 rounded-2xl overflow-hidden border border-slate-200 bg-gradient-to-r from-slate-50 via-white to-slate-50 flex flex-col md:flex-row items-stretch shadow-xs group">
                  {cat.image && (
                    <div
                      onClick={() => handleOpenLightbox(cat.id)}
                      className="relative w-full md:w-80 aspect-[16/10] sm:aspect-video md:aspect-auto min-h-[190px] bg-slate-100 shrink-0 overflow-hidden cursor-pointer"
                      title="Haz clic para ver la imagen y especificaciones en grande"
                    >
                      <Image
                        src={cat.image}
                        alt={cat.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 320px"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent md:hidden" />
                      <div className="absolute top-3 left-3">
                        <span className="inline-block bg-white/95 backdrop-blur-md text-[#991b1b] text-[10px] font-bold px-2.5 py-1 rounded-full shadow-2xs">
                          {cat.id.toUpperCase()}
                        </span>
                      </div>
                      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="inline-flex items-center gap-1 bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-bold px-2 py-0.5 rounded-md border border-white/20">
                          <Maximize2 size={11} className="text-red-400" />
                          <span>Ver en Grande</span>
                        </span>
                      </div>
                    </div>
                  )}

                  <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="inline-block bg-red-50 border border-red-200/80 text-[#991b1b] text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                          Línea Especializada Dialka
                        </span>
                        <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                          {cat.products.length} modelos
                        </span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
                        {cat.name}
                      </h2>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl">
                        {cat.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-4 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-4 text-xs font-semibold text-slate-500">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1 text-slate-700">
                          <CheckCircle2 size={14} className="text-[#991b1b]" />
                          Calibración garantizada
                        </span>
                        <span className="flex items-center gap-1 text-slate-700">
                          <CheckCircle2 size={14} className="text-[#991b1b]" />
                          Soporte técnico nacional
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleOpenLightbox(cat.id)}
                        className="text-[#991b1b] hover:text-[#7f1d1d] font-bold inline-flex items-center gap-1 cursor-pointer"
                      >
                        <Maximize2 size={13} />
                        <span>Ficha y Especificaciones</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {cat.products.map((product) => (
                    <div
                      key={product}
                      className="card-hover group bg-white border border-slate-200/90 hover:border-red-300 active:scale-[0.98] rounded-xl p-6 shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between animate-fadeIn"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 group-hover:bg-red-50 group-hover:border-red-100 flex items-center justify-center shrink-0 transition-colors">
                          <Package
                            size={18}
                            className="text-slate-700 group-hover:text-[#991b1b] transition-colors"
                          />
                        </div>
                        <div>
                          <h3 className="text-slate-900 group-hover:text-[#991b1b] font-bold text-base leading-snug transition-colors">
                            {product}
                          </h3>
                          <p className="text-xs text-slate-500 mt-1 flex items-center gap-1.5">
                            <CheckCircle2 size={13} className="text-[#991b1b]" />
                            <span>Garantía y soporte directo</span>
                          </p>
                        </div>
                      </div>

                      <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-[11px] font-semibold text-slate-400">
                          {cat.name.replace("Pesaje ", "")}
                        </span>
                        <a
                          href={`https://wa.me/${whatsappNumber}?text=Hola,%20solicito%20información%20y%20cotización%20del%20equipo:%20${encodeURIComponent(product)}`}
                          target="_blank"
                          rel="noreferrer"
                          className="text-xs font-bold text-[#991b1b] hover:text-[#7f1d1d] inline-flex items-center gap-1"
                        >
                          <span>Cotizar</span>
                          <ArrowRight size={12} />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        ) : (
          /* ── ESTADO VACÍO (SIN RESULTADOS) ── */
          <div className="bg-slate-50 border border-dashed border-slate-300 rounded-2xl p-12 text-center max-w-lg mx-auto animate-fadeIn">
            <div className="w-14 h-14 rounded-full bg-red-50 border border-red-100 flex items-center justify-center mx-auto mb-4">
              <Package size={26} className="text-[#991b1b]" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              No se encontraron equipos
            </h3>
            <p className="text-sm text-slate-600 mb-6 leading-relaxed">
              No encontramos ningún producto que coincida con{" "}
              {searchQuery ? `"${searchQuery}"` : "la categoría seleccionada"}.
            </p>
            <button
              onClick={handleResetFilters}
              className="inline-flex items-center gap-2 bg-[#991b1b] hover:bg-[#7f1d1d] text-white text-xs font-bold px-5 py-2.5 rounded-xl transition-all shadow-2xs"
            >
              <RotateCcw size={14} />
              <span>Ver todos los productos</span>
            </button>
          </div>
        )}
      </div>

      {/* Lightbox Modal para fotos en alta resolución */}
      <ImageLightbox
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        items={lightboxItems}
        currentIndex={lightboxIndex}
        onIndexChange={setLightboxIndex}
        whatsappNumber={whatsappNumber}
      />
    </div>
  );
}
