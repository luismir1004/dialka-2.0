"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Maximize2,
  ShieldCheck,
  Award,
  FileCheck2,
  Lock,
  CheckCircle2,
  Scale,
} from "lucide-react";
import { ImageLightbox, type LightboxItem } from "@/components/ImageLightbox";

interface SencamerHeroMockupProps {
  whatsappNumber?: string;
}

const LIGHTBOX_ITEM: LightboxItem = {
  id: "sencamer-homologacion-oficial",
  image: "/images/sencamer/balanza-certificada.jpg",
  title: "Balanza Comercial con Aprobación de Modelo SENCAMER",
  subtitle: "Homologación Legal en Venezuela · Uso Comercial",
  description:
    "Instrumento de pesaje legalmente aprobado por el Servicio Autónomo Nacional de Normalización, Calidad, Metrología y Reglamentos Técnicos (SENCAMER). Incluye placa de características metrológicas grabada, precinto de plomo / holográfico inviolable y certificación oficial para fiscalizaciones SUNDDE y tributarias.",
  specs: [
    "Aprobación de Modelo Oficial según Providencia Administrativa SENCAMER",
    "Verificación de división de escala real (e = d) para cálculo de precio exacto",
    "Precintado contra apertura de chasis y alteración de parámetros de calibración",
    "Apta para supermercados, agroindustria, puertos y comercio mayorista",
    "Garantía de reposición y servicio técnico directo Dialka Caracas / Maracay",
  ],
  location: "Despacho a toda Venezuela con certificación al día",
  tag: "SENCAMER Oficial",
  ctaText: "Solicitar Cotización de Balanza Certificada",
};

export function SencamerHeroMockup({ whatsappNumber }: SencamerHeroMockupProps) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  return (
    <>
      <div className="relative w-full">
        {/* Glow de fondo rojizo Dialka */}
        <div className="absolute -inset-1 bg-gradient-to-r from-[#991b1b]/20 via-[#7f1d1d]/15 to-transparent rounded-3xl blur-xl -z-10" />

        {/* Marco de Certificado de Metrología Legal */}
        <div
          onClick={() => setIsLightboxOpen(true)}
          className="group relative rounded-2xl overflow-hidden border border-slate-700/60 bg-slate-950 shadow-2xl shadow-slate-950/40 hover:border-red-400/80 transition-all duration-300 cursor-pointer"
          title="Haz clic para ver el certificado y precinto SENCAMER en alta definición"
        >
          {/* Barra Superior de la Certificación Oficial */}
          <div className="flex items-center justify-between px-3.5 py-2.5 bg-slate-900 border-b border-slate-800 text-xs select-none">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
              <span className="ml-2 text-slate-300 font-mono text-[11px] font-semibold tracking-tight hidden sm:inline">
                SENCAMER · Registro de Homologación #DK-SEN-0842
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 bg-emerald-950/70 border border-emerald-500/40 text-emerald-400 font-mono text-[10px] font-bold px-2 py-0.5 rounded-full shadow-inner">
                <ShieldCheck size={12} className="text-emerald-400" />
                VIGENTE VET
              </span>
              <span className="p-1 rounded bg-slate-800 text-slate-400 group-hover:text-white group-hover:bg-[#991b1b] transition-all">
                <Maximize2 size={12} />
              </span>
            </div>
          </div>

          {/* Imagen Real de la Balanza Certificada */}
          <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-slate-950">
            <Image
              src="/images/sencamer/balanza-certificada.jpg"
              alt="Balanza Industrial Homologada con Precinto Legal SENCAMER"
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
                <span>Explorar Certificación y Precinto HD</span>
              </span>
            </div>

            {/* HUD Flotante de Conformidad Jurídica */}
            <div className="absolute bottom-2.5 left-2.5 right-2.5 p-3 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80 shadow-lg text-slate-200">
              <div className="flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5 text-[10px] uppercase font-mono tracking-wider text-slate-400">
                    <Lock size={11} className="text-emerald-400" />
                    <span>Precinto Inviolable Plomado</span>
                  </div>
                  <div className="text-xs font-semibold text-white truncate pt-0.5">
                    Serie: <span className="font-mono text-emerald-400 font-bold">SEN-VE-2024-DK</span> · Aprobado
                  </div>
                </div>

                <div className="text-right shrink-0 bg-slate-950 px-2.5 py-1 rounded-lg border border-slate-800">
                  <span className="text-[10px] font-mono text-slate-400 uppercase block leading-none">
                    División Escala
                  </span>
                  <span className="text-sm sm:text-base font-mono font-bold text-emerald-400 tracking-tight">
                    e = d <span className="text-[10px] text-emerald-300/80 font-sans">CLASE III</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Barra Inferior de Garantías Legales */}
          <div className="grid grid-cols-3 divide-x divide-slate-800/80 bg-slate-950 text-slate-400 text-[11px] py-2 px-3 border-t border-slate-800">
            <div className="flex items-center justify-center gap-1.5">
              <Award size={12} className="text-red-400" />
              <span className="font-mono font-medium text-slate-300">Aprobación Oficial</span>
            </div>
            <div className="flex items-center justify-center gap-1.5">
              <Scale size={12} className="text-amber-400" />
              <span className="font-mono font-medium text-slate-300">30kg a 6.000kg</span>
            </div>
            <div className="flex items-center justify-center gap-1.5">
              <FileCheck2 size={12} className="text-emerald-400" />
              <span className="font-mono font-medium text-slate-300">SUNDDE Apta</span>
            </div>
          </div>
        </div>

        {/* Sub-tarjetas de Respaldo */}
        <div className="mt-3 flex items-center justify-between text-xs text-slate-600 px-1 font-medium">
          <span className="inline-flex items-center gap-1 text-slate-500">
            <CheckCircle2 size={13} className="text-[#991b1b]" />
            Homologación y precintado oficial entregado con cada equipo
          </span>
          <span className="text-[#991b1b] font-bold hidden sm:inline">
            100% Blindaje Legal
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
