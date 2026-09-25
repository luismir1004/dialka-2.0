"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  CheckCircle2,
  Maximize2,
  Clock,
  ShieldCheck,
  ClipboardList,
} from "lucide-react";
import { ImageLightbox, type LightboxItem } from "@/components/ImageLightbox";

interface ServiceHeroMockupProps {
  whatsappNumber?: string;
}

const LIGHTBOX_ITEM: LightboxItem = {
  id: "servicio-calibracion-masas",
  image: "/images/servicios/calibracion-masas.jpg",
  title: "Orden de Servicio Técnico y Calibración Metrológica In Situ",
  subtitle: "Trazabilidad Nacional e Internacional · SENCAMER / COVENIN",
  description:
    "Reporte de intervención metrológica en campo. Empleo de masas patrón certificadas de acero inoxidable y hierro fundido clase M1/F1, garantizando linealidad, repetibilidad e inmunidad contra errores en transacciones comerciales.",
  specs: [
    "Patrones de masa con trazabilidad a patrones primarios nacionales (SENCAMER)",
    "Ensayos de excentricidad de carga, repetibilidad y cero metrológico",
    "Ajuste electrónico de cajas de suma analógicas y digitales de celdas",
    "Emisión de Certificado de Calibración oficial para auditorías ISO / HACCP",
    "Cuadrillas de respuesta rápida con base operativa en Caracas y Maracay",
  ],
  location: "Servicio disponible para industrias en toda Venezuela",
  tag: "Orden de Trabajo de Campo",
  ctaText: "Solicitar Calibración para mi Báscula",
};

export function ServiceHeroMockup({ whatsappNumber }: ServiceHeroMockupProps) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  return (
    <>
      <div className="relative w-full">
        {/* Glow de taller */}
        <div className="absolute -inset-2 bg-gradient-to-br from-slate-400/20 via-red-900/10 to-slate-200/30 rounded-3xl blur-xl -z-10" />

        {/* ── PORTAPAPELES / CLIPBOARD METÁLICO DE INGENIERO DE CAMPO ── */}
        <div
          onClick={() => setIsLightboxOpen(true)}
          className="group relative bg-slate-200 rounded-2xl border-4 border-slate-400/80 p-3 sm:p-4 shadow-2xl shadow-slate-900/30 hover:border-[#991b1b] transition-all duration-300 cursor-pointer select-none"
          title="Haz clic para inspeccionar la orden de servicio técnico en alta definición"
        >
          {/* Clip Metálico Superior de Acero Inoxidable */}
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
            {/* Cuerpo del clip */}
            <div className="w-28 h-7 bg-gradient-to-b from-slate-300 via-slate-100 to-slate-400 rounded-t-lg border-2 border-slate-500 shadow-md flex items-center justify-center">
              {/* Remache central */}
              <div className="w-3 h-3 rounded-full bg-slate-600 border border-slate-400 shadow-inner" />
            </div>
            {/* Prensador negro */}
            <div className="w-20 h-2 bg-slate-800 rounded-b shadow-xs" />
          </div>

          {/* Hoja Cuadriculada / Formato Técnico Prensado */}
          <div className="relative bg-white rounded-xl p-4 sm:p-5 border border-slate-300 shadow-sm mt-2 industrial-grid-light">
            {/* Cabecera del Formato Técnico */}
            <div className="flex items-center justify-between pb-3 border-b-2 border-slate-900/80 mb-3">
              <div>
                <span className="text-[10px] font-mono uppercase font-black tracking-widest text-[#991b1b] block">
                  DIALKA · SERVICIOS INDUSTRIALES
                </span>
                <h3 className="text-xs sm:text-sm font-black text-slate-900 uppercase tracking-tight flex items-center gap-1.5">
                  <ClipboardList size={14} className="text-slate-700" />
                  Orden de Calibración In Situ
                </h3>
              </div>
              <div className="text-right">
                <span className="text-[9px] font-mono text-slate-500 block">N° REPORTE</span>
                <span className="font-mono font-black text-xs text-[#991b1b]">
                  #OT-2024-892
                </span>
              </div>
            </div>

            {/* Foto de Campo Fijada con Cinta Técnica */}
            <div className="relative aspect-[16/10] rounded-lg overflow-hidden border-2 border-slate-300 bg-slate-900 shadow-inner group/photo mb-3">
              <Image
                src="/images/servicios/calibracion-masas.jpg"
                alt="Registro de Calibración de Báscula en Planta con Masas Patrón"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover group-hover/photo:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

              {/* Tag de Registro Fotográfico de Campo */}
              <div className="absolute top-2 left-2">
                <span className="inline-flex items-center gap-1 bg-white/95 text-slate-900 font-mono font-bold text-[9px] px-2 py-0.5 rounded shadow-xs">
                  EVIDENCIA TÉCNICA · PLANTA
                </span>
              </div>

              <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[10px] text-white font-mono">
                <span className="text-amber-300 font-bold">Patrón: Masas Clase M1/F1</span>
                <span className="p-1 rounded bg-[#991b1b] text-white shadow-xs">
                  <Maximize2 size={11} />
                </span>
              </div>
            </div>

            {/* Checklist de Verificación Metrológica */}
            <div className="space-y-1.5 text-xs font-mono">
              <div className="flex items-center justify-between p-1.5 bg-slate-50 rounded border border-slate-200">
                <span className="text-[11px] text-slate-700 font-semibold flex items-center gap-1.5">
                  <CheckCircle2 size={13} className="text-emerald-600" />
                  Nivelación & Cero Mecánico
                </span>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                  PASSED
                </span>
              </div>

              <div className="flex items-center justify-between p-1.5 bg-slate-50 rounded border border-slate-200">
                <span className="text-[11px] text-slate-700 font-semibold flex items-center gap-1.5">
                  <CheckCircle2 size={13} className="text-emerald-600" />
                  Excentricidad (4 Cuadrantes)
                </span>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                  PASSED
                </span>
              </div>

              <div className="flex items-center justify-between p-1.5 bg-slate-50 rounded border border-slate-200">
                <span className="text-[11px] text-slate-700 font-semibold flex items-center gap-1.5">
                  <CheckCircle2 size={13} className="text-emerald-600" />
                  Linealidad & Span
                </span>
                <span className="text-[10px] font-bold text-slate-900 bg-amber-100 px-1.5 py-0.5 rounded border border-amber-300">
                  ±0.01% OK
                </span>
              </div>
            </div>

            {/* Sello de Tinta de Calibración al Pie */}
            <div className="mt-3 pt-2.5 border-t border-dashed border-slate-300 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full border-2 border-red-700 border-dashed flex items-center justify-center text-[#991b1b] -rotate-12">
                  <ShieldCheck size={16} />
                </div>
                <div>
                  <span className="text-[9px] font-mono font-bold text-slate-500 uppercase block">
                    DICTAMEN FINAL
                  </span>
                  <span className="text-[11px] font-black text-[#991b1b] uppercase">
                    CALIBRACIÓN APTA
                  </span>
                </div>
              </div>

              <div className="text-right text-[10px] font-mono text-slate-600">
                <span className="block font-bold text-slate-900">GARANTÍA 12M</span>
                <span>COVENIN / OIML</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sub-texto */}
        <div className="mt-3 flex items-center justify-between text-xs text-slate-600 px-1 font-medium">
          <span className="inline-flex items-center gap-1 text-slate-500">
            <Clock size={13} className="text-[#991b1b]" />
            Cuadrilla de guardia técnica disponible en Caracas y Maracay
          </span>
          <span className="text-[#991b1b] font-bold hidden sm:inline">
            Respuesta &lt;24h
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
