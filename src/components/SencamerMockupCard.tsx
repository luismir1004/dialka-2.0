"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ShieldCheck, Maximize2, Sparkles, CheckCircle2 } from "lucide-react";
import { ImageLightbox, type LightboxItem } from "@/components/ImageLightbox";

interface SencamerMockupCardProps {
  whatsappNumber: string;
}

export function SencamerMockupCard({ whatsappNumber }: SencamerMockupCardProps) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const lightboxItems: LightboxItem[] = [
    {
      id: "balanza-sencamer-homologada",
      image: "/images/sencamer/balanza-certificada.jpg",
      title: "Balanza Comercial con Aprobación SENCAMER",
      subtitle: "Homologación Legal en Venezuela",
      description:
        "Instrumento de pesaje certificado por el Servicio Autónomo Nacional de Normalización, Calidad, Metrología y Reglamentos Técnicos (SENCAMER). Dotado de precinto de inviolabilidad, placa de identificación serial y verificación de división de escala (e = d) para transacciones comerciales legales en todo el territorio nacional.",
      specs: [
        "Aprobación de Modelo Oficial vigente bajo Providencia SENCAMER",
        "Rango de modelos certificados: desde 30 kg hasta 6.000 kg",
        "Precinto de plomo / holográfico contra alteración de calibración",
        "Placa metálica grabada con número de control metrológico",
        "Cumple con directrices COVENIN e inspecciones SUNDDE / SENCAMER",
      ],
      location: "Disponible para despacho nacional desde Caracas y Maracay",
      tag: "SENCAMER Oficial",
      ctaText: "Cotizar Balanza Homologada SENCAMER",
    },
  ];

  return (
    <>
      <div
        onClick={() => setIsLightboxOpen(true)}
        className="lg:col-span-5 rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 relative group min-h-[260px] shadow-sm hover:shadow-xl hover:border-red-200 transition-all duration-300 cursor-pointer"
        title="Haz clic para ver la imagen y especificaciones en grande"
      >
        <Image
          src="/images/sencamer/balanza-certificada.jpg"
          alt="Balanza Comercial con Certificado y Precinto SENCAMER"
          fill
          sizes="(max-width: 1024px) 100vw, 40vw"
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <span className="inline-flex items-center gap-1 bg-emerald-600 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-xs">
            <ShieldCheck size={13} />
            <span>Modelo Homologado</span>
          </span>
        </div>

        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="inline-flex items-center gap-1 bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-lg border border-white/20 shadow-md">
            <Maximize2 size={12} className="text-red-400" />
            <span>Ver Ficha</span>
          </span>
        </div>

        {/* Bottom Info */}
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <p className="text-xs font-bold text-white leading-snug">
            Equipo de Precisión con Precinto Metrológico
          </p>
          <p className="text-[11px] text-slate-200 mt-0.5 line-clamp-1">
            Modelos de 30 kg a 6.000 kg listos para fiscalización comercial en Venezuela.
          </p>
          <div className="mt-2 pt-2 border-t border-white/20 flex items-center justify-between text-[11px]">
            <span className="text-emerald-300 font-semibold flex items-center gap-1">
              <CheckCircle2 size={12} /> Aprobación Vigente
            </span>
            <span className="text-red-200 font-bold underline">
              Ver especificaciones técnicas
            </span>
          </div>
        </div>
      </div>

      <ImageLightbox
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        items={lightboxItems}
        currentIndex={0}
        onIndexChange={() => {}}
        whatsappNumber={whatsappNumber}
      />
    </>
  );
}
