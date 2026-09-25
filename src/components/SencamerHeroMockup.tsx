"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ShieldCheck,
  Award,
  CheckCircle2,
  Maximize2,
  QrCode,
} from "lucide-react";
import { ImageLightbox, type LightboxItem } from "@/components/ImageLightbox";

interface SencamerHeroMockupProps {
  whatsappNumber?: string;
}

const LIGHTBOX_ITEM: LightboxItem = {
  id: "sencamer-homologacion-oficial",
  image: "/images/sencamer/balanza-certificada.jpg",
  title: "Certificado Oficial de Aprobación de Modelo SENCAMER",
  subtitle: "Homologación Legal en Venezuela · Uso Comercial",
  description:
    "Constancia y registro metrológico legal emitido bajo la Ley de Metrología y normas COVENIN. Certifica que los instrumentos de pesaje suministrados por Dialka cuentan con placa de características grabada, precinto de plomo / holográfico inviolable y división de escala autorizada para transacciones comerciales.",
  specs: [
    "Aprobación de Modelo Oficial vigente bajo Providencia SENCAMER",
    "Verificación de división de escala real (e = d) para cálculo de precio legal",
    "Precinto plomado de seguridad contra alteración de calibración y apertura",
    "Aptas para fiscalizaciones de SUNDDE, SENIAT y gobernaciones",
    "Dictamen de conformidad metrológica entregado con cada equipo",
  ],
  location: "Despacho a toda Venezuela con certificación al día",
  tag: "Certificación Legal",
  ctaText: "Cotizar Balanza con Certificado Oficial",
};

export function SencamerHeroMockup({ whatsappNumber }: SencamerHeroMockupProps) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  return (
    <>
      <div className="relative w-full">
        {/* Glow dorado y sombra de documento */}
        <div className="absolute -inset-2 bg-gradient-to-br from-amber-500/15 via-red-900/10 to-amber-200/20 rounded-3xl blur-xl -z-10" />

        {/* ── DOCUMENTO OFICIAL: CERTIFICADO DE METROLOGÍA LEGAL ── */}
        <div
          onClick={() => setIsLightboxOpen(true)}
          className="group relative bg-[#fdfbf7] text-slate-900 rounded-2xl border-2 border-amber-800/30 p-5 sm:p-6 shadow-2xl shadow-amber-950/20 hover:border-[#991b1b] transition-all duration-300 cursor-pointer select-none"
          title="Haz clic para inspeccionar el certificado y precinto legal en alta definición"
        >
          {/* Filigrana / Marco de Seguridad Notarial Perimetral */}
          <div className="absolute inset-2 border border-amber-700/20 rounded-xl pointer-events-none" />
          <div className="absolute inset-3 border border-dashed border-amber-800/15 rounded-lg pointer-events-none" />

          {/* 1. Membrete Superior Oficial */}
          <div className="text-center relative pb-3 border-b border-amber-800/20">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#7f1d1d] font-bold">
                REPÚBLICA BOLIVARIANA DE VENEZUELA
              </span>
              <span className="inline-flex items-center gap-1 bg-amber-100/90 text-amber-900 border border-amber-300 text-[10px] font-bold px-2 py-0.5 rounded shadow-2xs font-mono">
                <ShieldCheck size={11} className="text-[#991b1b]" />
                REGISTRO OFICIAL
              </span>
            </div>

            <h3 className="text-xs sm:text-sm font-serif font-black uppercase tracking-wide text-slate-900">
              SENCAMER · Metrología Legal
            </h3>
            <p className="text-[10px] sm:text-[11px] text-slate-600 font-serif italic mt-0.5">
              Constancia de Aprobación de Modelo y Homologación de Pesaje
            </p>

            <div className="mt-1 flex items-center justify-center gap-2">
              <span className="text-[10px] font-mono text-[#991b1b] font-bold tracking-tight">
                No. DK-SEN-0842 / VET
              </span>
              <span className="text-slate-300">·</span>
              <span className="text-[10px] font-mono text-slate-500">
                NORMA COVENIN 3133:1994
              </span>
            </div>
          </div>

          {/* 2. Cuerpo del Certificado: Foto Pericial de la Balanza + Dictamen */}
          <div className="mt-3.5 grid sm:grid-cols-12 gap-3.5 items-center">
            {/* Foto Pericial de la Balanza Certificada */}
            <div className="sm:col-span-6 relative aspect-[4/3] rounded-lg overflow-hidden border border-amber-900/20 bg-slate-900 shadow-inner group/photo">
              <Image
                src="/images/sencamer/balanza-certificada.jpg"
                alt="Balanza Certificada con Precinto Oficial SENCAMER"
                fill
                sizes="(max-width: 768px) 100vw, 300px"
                className="object-cover group-hover/photo:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

              <div className="absolute top-2 left-2">
                <span className="inline-flex items-center gap-1 bg-red-950/80 backdrop-blur-xs text-red-200 border border-red-500/40 text-[9px] font-mono font-bold px-2 py-0.5 rounded">
                  EVIDENCIA FÍSICA #01
                </span>
              </div>

              <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[10px] text-white font-mono">
                <span className="text-amber-300 font-bold">Precinto: VE-SEN-2024</span>
                <span className="p-1 rounded bg-black/50 text-white group-hover:bg-[#991b1b] transition-colors">
                  <Maximize2 size={11} />
                </span>
              </div>
            </div>

            {/* Ficha Técnica Metrológica Oficial */}
            <div className="sm:col-span-6 space-y-1.5 text-xs">
              <div className="p-2 rounded bg-amber-50/70 border border-amber-200/80">
                <span className="text-[9px] font-mono uppercase text-slate-500 block font-bold">
                  Instrumento Dictaminado:
                </span>
                <span className="font-bold text-slate-900 text-xs block">
                  Balanza Electrónica Clase III
                </span>
                <span className="text-[10px] text-slate-600 block">
                  Capacidades: 30 kg a 6.000 kg (e = d)
                </span>
              </div>

              <div className="p-2 rounded bg-white border border-slate-200">
                <span className="text-[9px] font-mono uppercase text-slate-500 block font-bold">
                  Dictamen Legal:
                </span>
                <span className="font-bold text-emerald-800 text-xs flex items-center gap-1">
                  <CheckCircle2 size={13} className="text-emerald-600" />
                  APTO COMERCIO LEGAL
                </span>
                <span className="text-[10px] text-slate-500 block">
                  Aprobado para fijación de precio por peso
                </span>
              </div>
            </div>
          </div>

          {/* 3. Pie Legal del Documento con Sello Notarial y Firmas */}
          <div className="mt-4 pt-3 border-t border-amber-800/20 flex items-center justify-between">
            {/* Sello Holográfico Notarial */}
            <div className="flex items-center gap-2.5">
              <div className="relative w-11 h-11 rounded-full bg-gradient-to-tr from-amber-600 via-amber-400 to-amber-200 border-2 border-amber-700 shadow-md flex items-center justify-center text-amber-950 shrink-0">
                <Award size={20} className="text-amber-950" />
                <div className="absolute inset-0 rounded-full border border-dashed border-amber-950/40" />
              </div>
              <div className="leading-tight">
                <span className="text-[9px] font-mono font-bold text-slate-500 uppercase block">
                  SELLO DE GARANTÍA
                </span>
                <span className="text-xs font-serif font-black text-[#991b1b] block">
                  HOMOLOGADO
                </span>
              </div>
            </div>

            {/* Código QR de Validación Metrológica */}
            <div className="flex items-center gap-2 bg-white px-2.5 py-1.5 rounded-lg border border-slate-200">
              <QrCode size={22} className="text-slate-800" />
              <div className="text-right font-mono text-[9px] leading-tight text-slate-500">
                <span className="block font-bold text-slate-800">VALIDACIÓN</span>
                <span>ESCANEABLE</span>
              </div>
            </div>
          </div>

          {/* Ribbon lateral tipo documento de archivo */}
          <div className="absolute -top-2.5 -right-2 bg-[#991b1b] text-white text-[9px] font-bold uppercase tracking-wider px-3 py-1 rounded shadow-md font-mono">
            VIGENCIA FISCAL 2024
          </div>
        </div>

        {/* Sub-texto aclaratorio */}
        <div className="mt-3 flex items-center justify-between text-xs text-slate-600 px-1 font-medium">
          <span className="inline-flex items-center gap-1 text-slate-500">
            <CheckCircle2 size={13} className="text-[#991b1b]" />
            Entregado con factura, precinto plomado y placa serial grabada
          </span>
          <span className="text-[#991b1b] font-bold hidden sm:inline">
            100% Blindaje SUNDDE
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
