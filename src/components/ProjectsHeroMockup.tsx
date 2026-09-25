"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Maximize2,
  HardHat,
  Truck,
  Award,
  CheckCircle2,
  MapPin,
} from "lucide-react";
import { ImageLightbox, type LightboxItem } from "@/components/ImageLightbox";

interface ProjectsHeroMockupProps {
  whatsappNumber?: string;
}

const LIGHTBOX_ITEM: LightboxItem = {
  id: "proyecto-bascula-volvo-80t",
  image: "/images/proyectos/bascula-camionera-volvo-plataforma.jpg",
  title: "Montaje y Puesta en Marcha de Báscula Camionera de 80T",
  subtitle: "Silos de Cereales y Granos · Acarigua, Portuguesa",
  description:
    "Proyecto integral de ingeniería civil, montaje mecánico y calibración metrológica con camión patrón. Instalación de plataforma de 21 metros de longitud sobre zapatas de concreto reforzado, equipada con celdas de compresión de alta capacidad y software de despacho continuo.",
  specs: [
    "Capacidad: 80 Toneladas nominales (división d = 10 kg / e = 20 kg)",
    "Obra civil ejecutada en 10 días continuos con curado acelerado de concreto",
    "Pruebas de carga dinámica con gandola de 45T y verificación de excentricidad",
    "Enlace en tiempo real con terminal de pesaje e impresora fiscal de tickets",
    "Aprobación técnica favorable y precintado metrológico",
  ],
  location: "Acarigua, Estado Portuguesa, Venezuela",
  tag: "Obra Llave en Mano",
  ctaText: "Cotizar Proyecto Similar para mi Empresa",
};

export function ProjectsHeroMockup({ whatsappNumber }: ProjectsHeroMockupProps) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  return (
    <>
      <div className="relative w-full">
        {/* Glow corporativo Dialka */}
        <div className="absolute -inset-1 bg-gradient-to-r from-[#991b1b]/20 via-[#7f1d1d]/15 to-transparent rounded-3xl blur-xl -z-10" />

        {/* Marco de Consola de Obras en Campo */}
        <div
          onClick={() => setIsLightboxOpen(true)}
          className="group relative rounded-2xl overflow-hidden border border-slate-700/60 bg-slate-950 shadow-2xl shadow-slate-950/40 hover:border-red-400/80 transition-all duration-300 cursor-pointer"
          title="Haz clic para ver el registro fotográfico de la obra en alta definición"
        >
          {/* Barra Superior de Operaciones */}
          <div className="flex items-center justify-between px-3.5 py-2.5 bg-slate-900 border-b border-slate-800 text-xs select-none">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
              <span className="ml-2 text-slate-300 font-mono text-[11px] font-semibold tracking-tight hidden sm:inline">
                Dialka Field Ops · Proyecto #OB-2024-PORT
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 bg-emerald-950/70 border border-emerald-500/40 text-emerald-400 font-mono text-[10px] font-bold px-2 py-0.5 rounded-full shadow-inner">
                <MapPin size={11} className="text-emerald-400" />
                PORTUGUESA · EN MARCHA
              </span>
              <span className="p-1 rounded bg-slate-800 text-slate-400 group-hover:text-white group-hover:bg-[#991b1b] transition-all">
                <Maximize2 size={12} />
              </span>
            </div>
          </div>

          {/* Imagen Real del Proyecto en Campo */}
          <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-slate-950">
            <Image
              src="/images/proyectos/bascula-camionera-volvo-plataforma.jpg"
              alt="Pruebas de Carga Real con Gandola en Báscula Camionera Dialka"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              className="object-cover object-center opacity-95 group-hover:scale-[1.03] transition-transform duration-700 ease-out"
              priority
            />

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/40 via-transparent to-slate-950/30 pointer-events-none" />

            {/* Badge de Hover */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-slate-950/40 backdrop-blur-[2px]">
              <span className="inline-flex items-center gap-2 bg-[#991b1b] text-white text-xs font-bold px-4 py-2 rounded-xl shadow-xl shadow-red-950/50 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <Maximize2 size={14} />
                <span>Explorar Obra y Pruebas de Carga HD</span>
              </span>
            </div>

            {/* HUD Flotante de Datos de la Obra */}
            <div className="absolute bottom-2.5 left-2.5 right-2.5 p-3 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80 shadow-lg text-slate-200">
              <div className="flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5 text-[10px] uppercase font-mono tracking-wider text-slate-400">
                    <HardHat size={11} className="text-amber-400" />
                    <span>Planta de Granos & Silos</span>
                  </div>
                  <div className="text-xs font-semibold text-white truncate pt-0.5">
                    Báscula 80T · <span className="font-mono text-emerald-400 font-bold">Pruebas Dinámicas OK</span>
                  </div>
                </div>

                <div className="text-right shrink-0 bg-slate-950 px-2.5 py-1 rounded-lg border border-slate-800">
                  <span className="text-[10px] font-mono text-slate-400 uppercase block leading-none">
                    Tiempo Montaje
                  </span>
                  <span className="text-sm sm:text-base font-mono font-bold text-amber-400 tracking-tight">
                    14 <span className="text-[10px] text-amber-300/80 font-sans">Días</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Barra Inferior de Métricas de Obra */}
          <div className="grid grid-cols-3 divide-x divide-slate-800/80 bg-slate-950 text-slate-400 text-[11px] py-2 px-3 border-t border-slate-800">
            <div className="flex items-center justify-center gap-1.5">
              <Truck size={12} className="text-red-400" />
              <span className="font-mono font-medium text-slate-300">+180 Básculas</span>
            </div>
            <div className="flex items-center justify-center gap-1.5">
              <MapPin size={12} className="text-amber-400" />
              <span className="font-mono font-medium text-slate-300">14 Estados</span>
            </div>
            <div className="flex items-center justify-center gap-1.5">
              <Award size={12} className="text-emerald-400" />
              <span className="font-mono font-medium text-slate-300">Llave en Mano</span>
            </div>
          </div>
        </div>

        {/* Sub-tarjetas de Respaldo */}
        <div className="mt-3 flex items-center justify-between text-xs text-slate-600 px-1 font-medium">
          <span className="inline-flex items-center gap-1 text-slate-500">
            <CheckCircle2 size={13} className="text-[#991b1b]" />
            Ingeniería civil, estructural y calibración con camión propio
          </span>
          <span className="text-[#991b1b] font-bold hidden sm:inline">
            +25 Años en Campo
          </span>
        </div>
      </div>

      <ImageLightbox
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        items={[LIGHTBOX_ITEM]}
        currentIndex={0}
        onIndexChange={() => {}}
        whatsappNumber={whatsappNumber}
      />
    </>
  );
}
