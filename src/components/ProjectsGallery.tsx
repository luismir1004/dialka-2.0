"use client";

import React, { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  SlidersHorizontal,
  Maximize2,
  Layers,
  RotateCcw,
} from "lucide-react";
import { ImageLightbox, type LightboxItem } from "@/components/ImageLightbox";

export interface FieldProject {
  id: string;
  title: string;
  category: string;
  location: string;
  state: string;
  description: string;
  image: string;
  specs: string[];
}

interface ProjectsGalleryProps {
  projects: FieldProject[];
  whatsappNumber: string;
  isFeatured?: boolean;
  showFilters?: boolean;
}

export function ProjectsGallery({
  projects,
  whatsappNumber,
  isFeatured = false,
  showFilters = false,
}: ProjectsGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>(() => {
    if (typeof window !== "undefined" && showFilters) {
      const params = new URLSearchParams(window.location.search);
      const cat = params.get("rubro");
      if (cat) return cat;
    }
    return "all";
  });

  const [selectedState, setSelectedState] = useState<string>(() => {
    if (typeof window !== "undefined" && showFilters) {
      const params = new URLSearchParams(window.location.search);
      const st = params.get("estado");
      if (st) return st;
    }
    return "all";
  });

  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);

  // Categorías únicas
  const categories = useMemo(() => {
    const list = Array.from(new Set(projects.map((p) => p.category)));
    return ["all", ...list];
  }, [projects]);

  // Estados únicos
  const states = useMemo(() => {
    const list = Array.from(new Set(projects.map((p) => p.state))).sort();
    return ["all", ...list];
  }, [projects]);

  // Proyectos filtrados
  const filteredProjects = useMemo(() => {
    let result = projects;
    if (selectedCategory !== "all") {
      result = result.filter((p) => p.category === selectedCategory);
    }
    if (selectedState !== "all") {
      result = result.filter((p) => p.state === selectedState);
    }
    if (isFeatured) {
      return result.slice(0, 4);
    }
    return result;
  }, [projects, selectedCategory, selectedState, isFeatured]);

  const lightboxItems: LightboxItem[] = useMemo(() => {
    return filteredProjects.map((p) => ({
      id: p.id,
      image: p.image,
      title: p.title,
      subtitle: `${p.category} · ${p.state}`,
      description: p.description,
      specs: p.specs,
      location: p.location,
      tag: p.category,
      ctaText: "Consultar Proyecto Similar por WhatsApp",
    }));
  }, [filteredProjects]);

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
    setIsLightboxOpen(true);
  };

  // Sincronizar filtros ante navegación hacia atrás / adelante (popstate)
  useEffect(() => {
    if (typeof window === "undefined" || !showFilters) return;

    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const cat = params.get("rubro");
      const st = params.get("estado");
      setSelectedCategory(cat && categories.includes(cat) ? cat : "all");
      setSelectedState(st && states.includes(st) ? st : "all");
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [showFilters, categories, states]);

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    if (typeof window !== "undefined" && showFilters) {
      const url = new URL(window.location.href);
      if (cat === "all") url.searchParams.delete("rubro");
      else url.searchParams.set("rubro", cat);
      window.history.replaceState({}, "", url.toString());
    }
  };

  const handleStateChange = (st: string) => {
    setSelectedState(st);
    if (typeof window !== "undefined" && showFilters) {
      const url = new URL(window.location.href);
      if (st === "all") url.searchParams.delete("estado");
      else url.searchParams.set("estado", st);
      window.history.replaceState({}, "", url.toString());
    }
  };

  const handleResetFilters = () => {
    setSelectedCategory("all");
    setSelectedState("all");
    if (typeof window !== "undefined" && showFilters) {
      const url = new URL(window.location.href);
      url.searchParams.delete("rubro");
      url.searchParams.delete("estado");
      window.history.replaceState({}, "", url.toString());
    }
  };

  return (
    <section className="bg-white py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── HEADER DE SECCIÓN ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200/80 text-[#7f1d1d] text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-3">
              <ShieldCheck size={14} className="text-[#991b1b]" />
              <span>Experiencia Comprobada en Venezuela</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              {isFeatured ? "Obras y Montajes Destacados" : "Galería de Proyectos y Obras en Campo"}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl mt-2 leading-relaxed">
              Fotografías 100% reales de operativos de calibración con camión patrón, montaje estructural de básculas camioneras de 80 toneladas e instalaciones en salas limpias y agroindustria.
            </p>
          </div>

          {isFeatured && (
            <Link
              href="/proyectos"
              className="inline-flex items-center gap-2 bg-[#991b1b] hover:bg-[#7f1d1d] text-white text-sm font-bold px-5 py-3 rounded-xl transition-all shadow-sm hover:shadow-md self-start md:self-auto"
            >
              <span>Ver Todos los Proyectos ({projects.length})</span>
              <ArrowRight size={15} />
            </Link>
          )}
        </div>

        {/* ── FILTROS AVANZADOS (SOLO EN /PROYECTOS) ── */}
        {showFilters && (
          <div className="mb-10 space-y-4 pb-6 border-b border-slate-200">
            {/* Filtro 1: Por Categoría Técnica */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-2 flex items-center gap-1.5 shrink-0">
                <Layers size={13} className="text-[#991b1b]" />
                <span>Rubro Técnico:</span>
              </span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`text-xs font-bold px-3.5 py-2 rounded-xl transition-all duration-200 cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-[#991b1b] text-white shadow-xs"
                      : "bg-slate-50 border border-slate-200 text-slate-700 hover:border-red-200 hover:text-[#991b1b]"
                  }`}
                >
                  {cat === "all" ? "Todos los Rubros" : cat}
                </button>
              ))}
            </div>

            {/* Filtro 2: Por Estado Geográfico */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-2 flex items-center gap-1.5 shrink-0">
                <SlidersHorizontal size={13} className="text-[#991b1b]" />
                <span>Ubicación:</span>
              </span>
              {states.map((st) => (
                <button
                  key={st}
                  onClick={() => handleStateChange(st)}
                  className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-all duration-200 cursor-pointer ${
                    selectedState === st
                      ? "bg-slate-900 text-white shadow-xs"
                      : "bg-white border border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-900"
                  }`}
                >
                  {st === "all" ? "Todos los Estados" : st}
                </button>
              ))}

              {(selectedCategory !== "all" || selectedState !== "all") && (
                <button
                  onClick={handleResetFilters}
                  className="text-xs font-semibold text-red-700 hover:text-red-900 flex items-center gap-1 px-2.5 py-1.5 rounded-lg hover:bg-red-50 transition-colors ml-auto cursor-pointer"
                  title="Restablecer filtros"
                >
                  <RotateCcw size={12} />
                  <span>Limpiar Filtros</span>
                </button>
              )}
            </div>

            {/* Contador de resultados */}
            <div className="pt-2 text-xs font-medium text-slate-500 flex items-center justify-between">
              <span>
                Mostrando <strong className="text-slate-900">{filteredProjects.length}</strong> de{" "}
                <strong className="text-slate-900">{projects.length}</strong> proyectos ejecutados
              </span>
            </div>
          </div>
        )}

        {/* ── EMPTY STATE SI NO HAY RESULTADOS ── */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 bg-slate-50 rounded-2xl border border-dashed border-slate-300 p-8 max-w-xl mx-auto">
            <ShieldCheck size={36} className="text-slate-400 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-800 mb-1">
              No hay proyectos con los filtros seleccionados
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              Pruebe seleccionando &quot;Todos los Rubros&quot; o &quot;Todos los Estados&quot; para explorar la galería completa.
            </p>
            <button
              onClick={handleResetFilters}
              className="inline-flex items-center gap-1.5 bg-[#991b1b] hover:bg-[#7f1d1d] text-white text-xs font-bold px-4 py-2 rounded-xl transition-all"
            >
              <RotateCcw size={13} />
              <span>Ver Todos los Proyectos</span>
            </button>
          </div>
        ) : (
          /* ── GRID DE PROYECTOS CON IMÁGENES REALES ── */
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-10">
            {filteredProjects.map((project, idx) => (
              <article
                key={project.id}
                className="group bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-red-200 active:scale-[0.99] transition-all duration-300 hover:scale-[1.01] flex flex-col justify-between"
              >
                {/* Contenedor de Imagen con Overlay y Badges (Click abre Lightbox) */}
                <div
                  onClick={() => handleOpenLightbox(idx)}
                  className="relative w-full aspect-[16/10] sm:aspect-video bg-slate-100 overflow-hidden cursor-pointer"
                  title="Haz clic para ver la imagen y especificaciones en grande"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                    priority={idx === 0}
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Gradient overlay for contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

                  {/* Badge de Categoría (Top Left) */}
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                    <span className="inline-block bg-white/95 backdrop-blur-md text-[#991b1b] text-[10px] sm:text-[11px] font-bold px-2.5 sm:px-3 py-1 rounded-full shadow-xs">
                      {project.category}
                    </span>
                  </div>

                  {/* Botón flotante para ver en grande (Top Right) - Visible en móvil */}
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 opacity-90 sm:opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="inline-flex items-center gap-1 bg-slate-900/80 backdrop-blur-md text-white text-[10px] sm:text-[11px] font-bold px-2.5 py-1 rounded-lg border border-white/20 shadow-md">
                      <Maximize2 size={12} className="text-red-400" />
                      <span>Ampliar</span>
                    </span>
                  </div>

                  {/* Badge de Ubicación Geográfica (Bottom Left) */}
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 flex items-center justify-between text-white text-xs font-semibold">
                    <span className="inline-flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2.5 sm:px-3 py-1 rounded-full border border-white/20 text-[11px] sm:text-xs">
                      <MapPin size={12} className="text-red-400 shrink-0" />
                      <span>{project.location}</span>
                    </span>
                    <span className="text-[10px] sm:text-[11px] text-slate-200 bg-black/40 px-2 py-0.5 rounded-md hidden sm:inline">
                      Proyecto Real
                    </span>
                  </div>
                </div>

                {/* Contenido Técnico del Proyecto */}
                <div className="p-5 sm:p-7 flex flex-col flex-1 justify-between">
                  <div>
                    <h3
                      onClick={() => handleOpenLightbox(idx)}
                      className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-[#991b1b] transition-colors mb-2.5 sm:mb-3 leading-snug cursor-pointer"
                    >
                      {project.title}
                    </h3>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6">
                      {project.description}
                    </p>

                    {/* Ficha Técnica / Especificaciones Rápidas */}
                    <div className="space-y-2 mb-6">
                      <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                        Aspectos Técnicos Clave:
                      </span>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {project.specs.map((spec) => (
                          <span
                            key={spec}
                            className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-slate-700 bg-slate-50 border border-slate-200 px-2.5 sm:px-3 py-1 rounded-lg"
                          >
                            <CheckCircle2 size={12} className="text-[#991b1b] shrink-0" />
                            <span>{spec}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Acciones del Proyecto */}
                  <div className="pt-4 sm:pt-5 border-t border-slate-100 flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => handleOpenLightbox(idx)}
                      className="text-xs font-bold text-slate-600 hover:text-[#991b1b] flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      <Maximize2 size={13} className="text-[#991b1b]" />
                      <span>Ficha Técnica</span>
                    </button>
                    <a
                      href={`https://wa.me/${whatsappNumber}?text=Hola,%20me%20interesa%20un%20proyecto%20similar%20a:%20${encodeURIComponent(project.title)}%20(${encodeURIComponent(project.location)})`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#991b1b] hover:text-[#7f1d1d] transition-colors"
                    >
                      <span>Cotizar por WhatsApp</span>
                      <ArrowRight size={13} />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <ImageLightbox
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        items={lightboxItems}
        currentIndex={lightboxIndex}
        onIndexChange={setLightboxIndex}
        whatsappNumber={whatsappNumber}
      />
    </section>
  );
}
