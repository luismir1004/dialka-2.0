"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  SlidersHorizontal,
  Maximize2,
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
  const [selectedState, setSelectedState] = useState<string>("all");
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);

  const states = useMemo(() => {
    const list = Array.from(new Set(projects.map((p) => p.state)));
    return ["all", ...list];
  }, [projects]);

  const filteredProjects = useMemo(() => {
    if (selectedState === "all") return projects;
    return projects.filter((p) => p.state === selectedState);
  }, [projects, selectedState]);

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

  return (
    <section className="bg-white py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── HEADER DE SECCIÓN ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200/80 text-[#991b1b] text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-3">
              <ShieldCheck size={14} className="text-[#991b1b]" />
              <span>Experiencia Comprobada en Venezuela</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Proyectos y Obras en Campo
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl mt-2 leading-relaxed">
              Fotografías reales de operativos de calibración con camión patrón, montaje de básculas camioneras de 18 a 24 metros e instalaciones agroindustriales en todo el país.
            </p>
          </div>

          {isFeatured && (
            <Link
              href="/proyectos"
              className="inline-flex items-center gap-2 bg-slate-50 hover:bg-red-50 border border-slate-200 hover:border-red-300 text-slate-800 hover:text-[#991b1b] text-sm font-bold px-5 py-2.5 rounded-xl transition-all shadow-2xs self-start md:self-auto"
            >
              <span>Ver Todos los Proyectos</span>
              <ArrowRight size={15} />
            </Link>
          )}
        </div>

        {/* ── FILTROS POR ESTADO (OPCIONAL EN /PROYECTOS) ── */}
        {showFilters && (
          <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-slate-200">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-2 flex items-center gap-1.5">
              <SlidersHorizontal size={13} className="text-[#991b1b]" />
              <span>Filtrar por Estado:</span>
            </span>
            {states.map((state) => (
              <button
                key={state}
                onClick={() => setSelectedState(state)}
                className={`text-xs font-bold px-4 py-2 rounded-xl transition-all duration-200 cursor-pointer ${
                  selectedState === state
                    ? "bg-[#991b1b] text-white shadow-xs"
                    : "bg-slate-50 border border-slate-200 text-slate-700 hover:border-red-200 hover:text-[#991b1b]"
                }`}
              >
                {state === "all" ? "Todos los Estados" : state}
              </button>
            ))}
          </div>
        )}

        {/* ── GRID DE PROYECTOS CON IMÁGENES REALES ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project, idx) => (
            <article
              key={project.id}
              className="group bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-red-200 active:scale-[0.99] transition-all duration-300 hover:scale-[1.015] flex flex-col justify-between"
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
                  priority={project.id === "calibracion-silos-portuguesa"}
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Gradient overlay for contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

                {/* Badge de Categoría (Top Left) */}
                <div className="absolute top-4 left-4">
                  <span className="inline-block bg-white/95 backdrop-blur-md text-[#991b1b] text-[11px] font-bold px-3 py-1 rounded-full shadow-xs">
                    {project.category}
                  </span>
                </div>

                {/* Botón flotante para ver en grande (Top Right) */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="inline-flex items-center gap-1 bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-lg border border-white/20 shadow-md">
                    <Maximize2 size={12} className="text-red-400" />
                    <span>Ver en Grande</span>
                  </span>
                </div>

                {/* Badge de Ubicación Geográfica (Bottom Left) */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs font-semibold">
                  <span className="inline-flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                    <MapPin size={13} className="text-red-400" />
                    <span>{project.location}</span>
                  </span>
                  <span className="text-[11px] text-slate-200 bg-black/40 px-2 py-0.5 rounded-md hidden sm:inline">
                    Proyecto Ejecutado
                  </span>
                </div>
              </div>

              {/* Contenido Técnico del Proyecto */}
              <div className="p-7 flex flex-col flex-1 justify-between">
                <div>
                  <h3
                    onClick={() => handleOpenLightbox(idx)}
                    className="text-xl font-bold text-slate-900 group-hover:text-[#991b1b] transition-colors mb-3 leading-snug cursor-pointer"
                  >
                    {project.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Ficha Técnica / Especificaciones Rápidas */}
                  <div className="space-y-2 mb-6">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                      Aspectos Técnicos Clave:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {project.specs.map((spec) => (
                        <span
                          key={spec}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 bg-slate-50 border border-slate-200 px-3 py-1 rounded-lg"
                        >
                          <CheckCircle2 size={13} className="text-[#991b1b]" />
                          <span>{spec}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Acciones del Proyecto */}
                <div className="pt-5 border-t border-slate-100 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => handleOpenLightbox(idx)}
                    className="text-xs font-bold text-slate-600 hover:text-[#991b1b] flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <Maximize2 size={13} className="text-[#991b1b]" />
                    <span>Ver Ficha Técnica</span>
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
