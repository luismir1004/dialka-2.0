"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Truck,
  Maximize2,
  CheckCircle2,
} from "lucide-react";
import { ImageLightbox, type LightboxItem } from "@/components/ImageLightbox";

interface RentalHeroMockupProps {
  whatsappNumber?: string;
}

const LIGHTBOX_ITEM: LightboxItem = {
  id: "camion-calibrador-alquiler-dialka",
  image: "/images/proyectos/camion-calibrador.jpg",
  title: "Hoja de Ruta y Despacho de Flota de Alquiler Dialka",
  subtitle: "Camión Calibrador con Grúa Telescópica y Báscula Móvil",
  description:
    "Orden de movilización logística para sistemas de pesaje temporal y pruebas de carga. Unidad móvil equipada con grúa de izamiento, masas patrón certificadas M1 y plataformas por ejes de 20T a 40T listas para instalación rápida en campo.",
  specs: [
    "Capacidad de pesaje por ejes: 20 Toneladas y 40 Toneladas",
    "Montaje ultra rápido en menos de 2 horas sin obras civiles",
    "Camión con grúa propia para descarga y posicionamiento seguro",
    "Disponibilidad con o sin operador metrólogo calificado en sitio",
    "Contratos flexibles por semana, mes completo o temporada de zafra",
  ],
  location: "Despacho inmediato a cualquier estado de Venezuela",
  tag: "Despacho Logístico",
  ctaText: "Reservar Despacho de Báscula Móvil",
};

export function RentalHeroMockup({ whatsappNumber }: RentalHeroMockupProps) {
  const [selectedPlan, setSelectedPlan] = useState<"Zafra" | "Mensual" | "Semanal">("Zafra");
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  return (
    <>
      <div className="relative w-full">
        {/* Glow de logística */}
        <div className="absolute -inset-2 bg-gradient-to-br from-amber-500/15 via-red-900/10 to-emerald-500/20 rounded-3xl blur-xl -z-10" />

        {/* ── TICKET DE DESPACHO LOGÍSTICO & ORDEN DE FLETE ── */}
        <div className="group relative bg-[#f8fafc] text-slate-900 rounded-2xl border-2 border-slate-300 p-4 sm:p-5 shadow-2xl shadow-slate-900/20 hover:border-[#991b1b] transition-all duration-300 select-none">
          {/* Cabecera del Ticket con Código de Barras */}
          <div className="flex items-center justify-between pb-3 border-b-2 border-dashed border-slate-300 mb-3">
            <div>
              <span className="text-[9px] font-mono tracking-widest text-[#991b1b] font-bold uppercase block">
                DIALKA LOGÍSTICA & TRANSPORTE
              </span>
              <h3 className="text-xs sm:text-sm font-black text-slate-900 uppercase tracking-tight flex items-center gap-1.5">
                <Truck size={15} className="text-[#991b1b]" />
                Orden de Despacho Inmediato
              </h3>
            </div>

            <div className="text-right">
              <span className="font-mono text-[9px] text-slate-400 block tracking-widest">
                ||| | |||| | ||
              </span>
              <span className="text-[10px] font-mono font-bold text-slate-700">
                #FLETE-2024-ALQ
              </span>
            </div>
          </div>

          {/* Selector de Modalidad de Alquiler */}
          <div className="flex items-center justify-between gap-1 p-1 bg-slate-200/80 rounded-lg mb-3">
            {(["Zafra", "Mensual", "Semanal"] as const).map((plan) => (
              <button
                key={plan}
                onClick={() => setSelectedPlan(plan)}
                className={`flex-1 py-1 text-center font-mono text-[10px] font-bold rounded transition-all cursor-pointer ${
                  selectedPlan === plan
                    ? "bg-[#991b1b] text-white shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Plan {plan}
              </button>
            ))}
          </div>

          {/* Fotografía de la Unidad Móvil con Grúa y Masas Patrón */}
          <div
            onClick={() => setIsLightboxOpen(true)}
            className="relative aspect-[16/10] rounded-xl overflow-hidden border-2 border-slate-300 bg-slate-900 shadow-inner group/photo cursor-pointer mb-3"
            title="Haz clic para ver la unidad móvil en alta definición"
          >
            <Image
              src="/images/proyectos/camion-calibrador.jpg"
              alt="Camión Calibrador con Grúa Telescópica y Masas Patrón Dialka"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 400px"
              className="object-cover group-hover/photo:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

            <div className="absolute top-2 left-2">
              <span className="inline-flex items-center gap-1 bg-emerald-600 text-white font-mono font-bold text-[9px] px-2 py-0.5 rounded shadow-xs">
                UNIDAD ASIGNADA · GRÚA PROPIA
              </span>
            </div>

            <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[10px] font-mono text-white">
              <span className="text-amber-300 font-bold">Básculas por Ejes 20T / 40T</span>
              <span className="p-1 rounded bg-[#991b1b] text-white shadow-xs">
                <Maximize2 size={12} />
              </span>
            </div>
          </div>

          {/* Datos Logísticos de Entrega al Pie */}
          <div className="p-2.5 rounded-xl bg-slate-100 border border-slate-200 text-xs font-mono">
            <div className="flex items-center justify-between mb-1">
              <span className="text-slate-700 font-bold">
                Tiempo Montaje: <strong className="text-emerald-700">&lt; 2 Horas</strong>
              </span>
              <span className="text-[10px] text-slate-500 font-bold">
                OPERADOR EN CAMPO INCLUIDO
              </span>
            </div>
            <div className="flex items-center justify-between text-[11px] text-slate-600 pt-1 border-t border-slate-200">
              <span>Despacho: <strong className="text-slate-900">&lt; 48h en Sitio</strong></span>
              <span className="text-[#991b1b] font-bold">CERO INVERSIÓN CAPEX</span>
            </div>
          </div>
        </div>

        {/* Sub-texto */}
        <div className="mt-3 flex items-center justify-between text-xs text-slate-600 px-1 font-medium">
          <span className="inline-flex items-center gap-1 text-slate-500">
            <CheckCircle2 size={13} className="text-[#991b1b]" />
            Ideal para zafras de caña, maíz, silos y obras civiles
          </span>
          <span className="text-[#991b1b] font-bold hidden sm:inline">
            100% Despacho Nacional
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
