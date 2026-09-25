"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Maximize2,
  Truck,
  ShieldCheck,
  CheckCircle2,
  CalendarDays,
  Zap,
} from "lucide-react";
import { ImageLightbox, type LightboxItem } from "@/components/ImageLightbox";

interface RentalHeroMockupProps {
  whatsappNumber?: string;
}

const LIGHTBOX_ITEM: LightboxItem = {
  id: "camion-calibrador-alquiler-dialka",
  image: "/images/proyectos/camion-calibrador.jpg",
  title: "Unidad Móvil de Calibración y Alquiler de Básculas Dialka",
  subtitle: "Flota Propia con Grúa Telescópica y Masas Patrón M1",
  description:
    "Vehículo especializado para pruebas metrológicas de gran tonelaje y traslado de sistemas de pesaje temporal por eje. Equipado con grúa hidráulica de izamiento, generador auxiliar autónomo y masas patrón clase M1 certificadas para zafras y obras civiles.",
  specs: [
    "Capacidad de pruebas de carga de hasta 100 Toneladas",
    "Básculas móviles por ejes de 20T y 40T de instalación rápida en 2 horas",
    "Grúa telescópica propia para manipulación segura de masas y plataformas",
    "Disponibilidad con operador metrólogo calificado en sitio",
    "Despacho urgente a cualquier punto del país sin intermediarios",
  ],
  location: "Despacho desde bases operativas en Caracas y Maracay",
  tag: "Flota Logística Dialka",
  ctaText: "Reservar Equipo en Alquiler",
};

export function RentalHeroMockup({ whatsappNumber }: RentalHeroMockupProps) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  return (
    <>
      <div className="relative w-full">
        {/* Glow corporativo Dialka */}
        <div className="absolute -inset-1 bg-gradient-to-r from-[#991b1b]/20 via-[#7f1d1d]/15 to-transparent rounded-3xl blur-xl -z-10" />

        {/* Marco de Consola Logística de Despacho */}
        <div
          onClick={() => setIsLightboxOpen(true)}
          className="group relative rounded-2xl overflow-hidden border border-slate-700/60 bg-slate-950 shadow-2xl shadow-slate-950/40 hover:border-red-400/80 transition-all duration-300 cursor-pointer"
          title="Haz clic para ver el camión calibrador y equipos en alta definición"
        >
          {/* Barra Superior de Despacho Logístico */}
          <div className="flex items-center justify-between px-3.5 py-2.5 bg-slate-900 border-b border-slate-800 text-xs select-none">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
              <span className="ml-2 text-slate-300 font-mono text-[11px] font-semibold tracking-tight hidden sm:inline">
                Dialka Logistics Center · Unidad Móvil #01
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 bg-emerald-950/70 border border-emerald-500/40 text-emerald-400 font-mono text-[10px] font-bold px-2 py-0.5 rounded-full shadow-inner">
                <Truck size={11} className="text-emerald-400" />
                DISPONIBLE
              </span>
              <span className="p-1 rounded bg-slate-800 text-slate-400 group-hover:text-white group-hover:bg-[#991b1b] transition-all">
                <Maximize2 size={12} />
              </span>
            </div>
          </div>

          {/* Imagen Real del Camión Calibrador / Equipo Móvil */}
          <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-slate-950">
            <Image
              src="/images/proyectos/camion-calibrador.jpg"
              alt="Camión Calibrador con Grúa Telescópica y Masas Patrón Dialka"
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
                <span>Ver Flota Móvil y Equipos en HD</span>
              </span>
            </div>

            {/* HUD Flotante de Disponibilidad Inmediata */}
            <div className="absolute bottom-2.5 left-2.5 right-2.5 p-3 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80 shadow-lg text-slate-200">
              <div className="flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5 text-[10px] uppercase font-mono tracking-wider text-slate-400">
                    <CalendarDays size={11} className="text-emerald-400" />
                    <span>Zafras & Obras Temporales</span>
                  </div>
                  <div className="text-xs font-semibold text-white truncate pt-0.5">
                    Pesaje por Ejes: <span className="font-mono text-amber-300 font-bold">20T / 40T</span> con Grúa Propia
                  </div>
                </div>

                <div className="text-right shrink-0 bg-slate-950 px-2.5 py-1 rounded-lg border border-slate-800">
                  <span className="text-[10px] font-mono text-slate-400 uppercase block leading-none">
                    Instalación
                  </span>
                  <span className="text-sm sm:text-base font-mono font-bold text-emerald-400 tracking-tight">
                    &lt; 2 <span className="text-[10px] text-emerald-300/80 font-sans">Horas</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Barra Inferior de Ventajas Operativas */}
          <div className="grid grid-cols-3 divide-x divide-slate-800/80 bg-slate-950 text-slate-400 text-[11px] py-2 px-3 border-t border-slate-800">
            <div className="flex items-center justify-center gap-1.5">
              <Zap size={12} className="text-red-400" />
              <span className="font-mono font-medium text-slate-300">Cero CAPEX</span>
            </div>
            <div className="flex items-center justify-center gap-1.5">
              <ShieldCheck size={12} className="text-amber-400" />
              <span className="font-mono font-medium text-slate-300">Calibración Incl.</span>
            </div>
            <div className="flex items-center justify-center gap-1.5">
              <Truck size={12} className="text-emerald-400" />
              <span className="font-mono font-medium text-slate-300">Operador Opcional</span>
            </div>
          </div>
        </div>

        {/* Sub-tarjetas de Respaldo */}
        <div className="mt-3 flex items-center justify-between text-xs text-slate-600 px-1 font-medium">
          <span className="inline-flex items-center gap-1 text-slate-500">
            <CheckCircle2 size={13} className="text-[#991b1b]" />
            Despacho inmediato a obras, puertos y centrales azucareros
          </span>
          <span className="text-[#991b1b] font-bold hidden sm:inline">
            100% Cobertura País
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
