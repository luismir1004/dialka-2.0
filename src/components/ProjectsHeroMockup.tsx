"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  MapPin,
  Maximize2,
  CheckCircle2,
  HardHat,
} from "lucide-react";
import { ImageLightbox, type LightboxItem } from "@/components/ImageLightbox";

interface ProjectsHeroMockupProps {
  whatsappNumber?: string;
}

const PROJECTS_DATA = [
  {
    id: "portuguesa",
    state: "Portuguesa",
    place: "Acarigua",
    sector: "Agroindustria & Silos",
    image: "/images/proyectos/bascula-camionera-volvo-plataforma.jpg",
    title: "Báscula Camionera 80T - Silos de Maíz",
    time: "14 Días",
    trucks: "+120 Gandolas/Día",
  },
  {
    id: "caracas",
    state: "Caracas",
    place: "Los Ruices",
    sector: "Planta Farmacéutica",
    image: "/images/proyectos/planta-farmaceutica-tanque-dosificacion.jpg",
    title: "Tanques de Dosificación & Celdas Inox",
    time: "8 Días",
    trucks: "Grado Sanitario BPM",
  },
  {
    id: "maracay",
    state: "Aragua",
    place: "Cagua",
    sector: "Molinos y Alimentos",
    image: "/images/proyectos/bascula-camionera-sobresuelo-2.jpg",
    title: "Báscula Sobresuelo 60T con Rampas",
    time: "10 Días",
    trucks: "Pesaje Continuo",
  },
];

export function ProjectsHeroMockup({ whatsappNumber }: ProjectsHeroMockupProps) {
  const [activeProject, setActiveProject] = useState(PROJECTS_DATA[0]);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const lightboxItem: LightboxItem = {
    id: activeProject.id,
    image: activeProject.image,
    title: `${activeProject.title} · ${activeProject.place}, Edo. ${activeProject.state}`,
    subtitle: `${activeProject.sector} · Obra Llave en Mano Dialka`,
    description: `Proyecto ejecutado en tiempo récord de ${activeProject.time}. Incluyó ingeniería civil especializada, izamiento estructural, instalación de celdas de carga y calibración metrológica con camión patrón propio.`,
    specs: [
      `Ubicación: ${activeProject.place}, Estado ${activeProject.state}`,
      `Plazo de ejecución: ${activeProject.time} de corrido`,
      `Operatividad: ${activeProject.trucks}`,
      "Certificación SENCAMER y pruebas dinámicas con carga real",
      "Garantía total de 5 años en estructura de acero",
    ],
    location: `${activeProject.place}, Venezuela`,
    tag: "Bitácora de Campo Dialka",
    ctaText: "Cotizar Proyecto Similar",
  };

  return (
    <>
      <div className="relative w-full">
        {/* Glow de bitácora */}
        <div className="absolute -inset-2 bg-gradient-to-br from-amber-600/15 via-red-900/10 to-orange-500/20 rounded-3xl blur-xl -z-10" />

        {/* ── BITÁCORA DE OBRAS & DESPLIEGUE GEOGRÁFICO EN VENEZUELA ── */}
        <div className="group relative bg-slate-900 text-slate-100 rounded-2xl border-2 border-amber-600/30 p-4 sm:p-5 shadow-2xl shadow-slate-950/50 hover:border-amber-500/60 transition-all duration-300 select-none">
          {/* Cabecera de la Bitácora */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-3">
            <div className="flex items-center gap-2">
              <HardHat size={18} className="text-amber-400" />
              <div>
                <span className="text-[9px] font-mono tracking-widest text-amber-400 font-bold uppercase block">
                  DIALKA · REGISTRO DE OBRAS EN VENEZUELA
                </span>
                <h3 className="text-xs sm:text-sm font-bold text-white uppercase tracking-tight">
                  Bitácora de Obras Llave en Mano
                </h3>
              </div>
            </div>

            <span className="inline-flex items-center gap-1 bg-amber-950/80 text-amber-300 border border-amber-500/40 text-[10px] font-mono font-bold px-2 py-0.5 rounded shadow-2xs">
              <MapPin size={11} />
              14 ESTADOS
            </span>
          </div>

          {/* Selector de Obras por Estado */}
          <div className="grid grid-cols-3 gap-1.5 p-1 bg-slate-950 rounded-xl border border-slate-800 mb-3">
            {PROJECTS_DATA.map((proj) => (
              <button
                key={proj.id}
                onClick={() => setActiveProject(proj)}
                className={`py-1.5 px-2 rounded-lg text-left transition-all cursor-pointer ${
                  activeProject.id === proj.id
                    ? "bg-[#991b1b] text-white shadow-xs"
                    : "text-slate-400 hover:text-white hover:bg-slate-900"
                }`}
              >
                <span className="text-[10px] font-bold block leading-tight truncate">
                  {proj.state}
                </span>
                <span className="text-[9px] text-slate-300/80 font-mono block truncate">
                  {proj.place}
                </span>
              </button>
            ))}
          </div>

          {/* Ficha Fotográfica de la Obra Seleccionada */}
          <div
            onClick={() => setIsLightboxOpen(true)}
            className="relative aspect-[16/10] rounded-xl overflow-hidden border-2 border-slate-800 bg-slate-950 shadow-inner group/photo cursor-pointer mb-3"
            title="Haz clic para ver el registro fotográfico en alta definición"
          >
            <Image
              src={activeProject.image}
              alt={activeProject.title}
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              className="object-cover group-hover/photo:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />

            {/* Tag de Obra Activa */}
            <div className="absolute top-2 left-2">
              <span className="inline-flex items-center gap-1 bg-black/80 backdrop-blur-xs text-amber-300 border border-amber-500/40 text-[9px] font-mono font-bold px-2 py-0.5 rounded">
                <MapPin size={10} />
                {activeProject.place}, Edo. {activeProject.state}
              </span>
            </div>

            <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[10px] font-mono text-white">
              <span className="bg-amber-500/90 text-slate-950 font-bold px-2 py-0.5 rounded">
                Montaje: {activeProject.time}
              </span>
              <span className="p-1 rounded bg-[#991b1b] text-white shadow-xs">
                <Maximize2 size={12} />
              </span>
            </div>
          </div>

          {/* Datos de la Ficha al Pie */}
          <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs">
            <div className="flex items-center justify-between mb-1">
              <span className="text-white font-bold truncate">
                {activeProject.title}
              </span>
              <span className="text-[10px] font-mono text-emerald-400 font-bold shrink-0">
                100% OPERATIVA
              </span>
            </div>
            <p className="text-[11px] text-slate-400">
              Sector: <strong className="text-slate-200">{activeProject.sector}</strong> · Capacidad continua: <strong className="text-amber-300 font-mono">{activeProject.trucks}</strong>
            </p>
          </div>
        </div>

        {/* Sub-texto */}
        <div className="mt-3 flex items-center justify-between text-xs text-slate-600 px-1 font-medium">
          <span className="inline-flex items-center gap-1 text-slate-500">
            <CheckCircle2 size={13} className="text-[#991b1b]" />
            Obras civiles, montaje de acero y camión patrón propio
          </span>
          <span className="text-[#991b1b] font-bold hidden sm:inline">
            +180 Básculas Instaladas
          </span>
        </div>
      </div>

      <ImageLightbox
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        items={[lightboxItem]}
        currentIndex={0}
        onIndexChange={() => {}}
        whatsappNumber={whatsappNumber}
      />
    </>
  );
}
