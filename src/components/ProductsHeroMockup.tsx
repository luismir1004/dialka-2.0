"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Compass,
  Maximize2,
  CheckCircle2,
  Ruler,
} from "lucide-react";
import { ImageLightbox, type LightboxItem } from "@/components/ImageLightbox";

interface ProductsHeroMockupProps {
  whatsappNumber?: string;
}

const LIGHTBOX_ITEM: LightboxItem = {
  id: "balanza-camionera-dialka-80t",
  image: "/images/proyectos/bascula-camionera-sobresuelo-1.jpg",
  title: "Plano Estructural de Balanza Camionera Dialka 80T",
  subtitle: "Fabricación Nacional en Acero ASTM A36 · Celdas IP68",
  description:
    "Plano de ingeniería y especificaciones de fabricación para básculas camioneras de alto tonelaje. Diseñada con vigas maestras IPE de perfil pesado capaces de soportar tráfico continuo de gandolas de hasta 80 Toneladas sin deformación plástica.",
  specs: [
    "Capacidad nominal de 80 Toneladas (dimensiones estándar: 21m x 3.2m)",
    "Módulos prefabricados para montaje rápido en fosa o sobre suelo con rampas",
    "Celdas de carga digitales de compresión con protección IP68 inmersible",
    "Garantía estructural certificada por 5 años contra deflexión mecánica",
    "Homologada para uso comercial legal con precinto SENCAMER",
  ],
  location: "Fabricación e instalación en toda Venezuela",
  tag: "Plano de Ingeniería Mecánica",
  ctaText: "Cotizar Balanza Camionera a Medida",
};

export function ProductsHeroMockup({ whatsappNumber }: ProductsHeroMockupProps) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [selectedCapacity, setSelectedCapacity] = useState<"60T" | "80T" | "100T">("80T");

  const specsByCapacity = {
    "60T": { length: "18.00m", width: "3.10m", cells: "6 Celdas", maxKg: "60.000 kg" },
    "80T": { length: "21.00m", width: "3.20m", cells: "8 Celdas", maxKg: "80.000 kg" },
    "100T": { length: "24.00m", width: "3.40m", cells: "10 Celdas", maxKg: "100.000 kg" },
  };

  const currentSpec = specsByCapacity[selectedCapacity];

  return (
    <>
      <div className="relative w-full">
        {/* Glow de plano técnico */}
        <div className="absolute -inset-2 bg-gradient-to-br from-blue-600/15 via-red-900/10 to-cyan-500/20 rounded-3xl blur-xl -z-10" />

        {/* ── PLANO BLUEPRINT DE TALLER & ESPECIFICACIÓN MECÁNICA ── */}
        <div
          className="group relative bg-[#09182b] text-slate-100 rounded-2xl border-2 border-blue-500/40 p-4 sm:p-5 shadow-2xl shadow-blue-950/40 hover:border-blue-400 transition-all duration-300 select-none"
        >
          {/* Malla milimetrada de dibujo técnico en el fondo */}
          <div className="absolute inset-0 bg-[radial-gradient(#1e3a8a_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none rounded-2xl" />

          {/* Cabecera del Plano */}
          <div className="relative flex items-center justify-between pb-3 border-b border-blue-500/30 mb-3">
            <div className="flex items-center gap-2">
              <Compass size={18} className="text-cyan-400" />
              <div>
                <span className="text-[9px] font-mono tracking-widest text-cyan-400 font-bold uppercase block">
                  DIALKA · DEPARTAMENTO DE INGENIERÍA MECÁNICA
                </span>
                <h3 className="text-xs sm:text-sm font-mono font-bold text-white uppercase tracking-tight">
                  Plano Estructural · Balanza Camionera
                </h3>
              </div>
            </div>

            {/* Selector de Tonelaje Rápido */}
            <div className="flex items-center gap-1 bg-slate-900/90 p-1 rounded-lg border border-blue-500/40">
              {(["60T", "80T", "100T"] as const).map((cap) => (
                <button
                  key={cap}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedCapacity(cap);
                  }}
                  className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded transition-all cursor-pointer ${
                    selectedCapacity === cap
                      ? "bg-[#991b1b] text-white shadow-xs"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {cap}
                </button>
              ))}
            </div>
          </div>

          {/* Vista Isométrica / Fotografía con Cotas Milimétricas Superpuestas */}
          <div
            onClick={() => setIsLightboxOpen(true)}
            className="relative aspect-[16/10] rounded-lg overflow-hidden border border-blue-500/30 bg-slate-950 shadow-inner group/photo cursor-pointer mb-3"
            title="Haz clic para ver el plano en alta definición"
          >
            <Image
              src="/images/proyectos/bascula-camionera-sobresuelo-1.jpg"
              alt="Plataforma de Balanza Camionera Dialka de Acero Estructural"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 400px"
              className="object-cover group-hover/photo:scale-105 transition-transform duration-500 opacity-90"
            />
            <div className="absolute inset-0 bg-blue-950/25 pointer-events-none" />

            {/* Líneas de Cota de Ingeniería Superpuestas */}
            <div className="absolute top-2 left-2 right-2 flex items-center justify-between text-[10px] font-mono bg-slate-900/90 backdrop-blur-xs px-2.5 py-1 rounded border border-blue-400/40 text-cyan-300">
              <span className="flex items-center gap-1">
                <Ruler size={12} />
                <span>LONGITUD: {currentSpec.length}</span>
              </span>
              <span>ANCHO: {currentSpec.width}</span>
            </div>

            <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[10px] font-mono text-white">
              <span className="bg-[#991b1b] text-white px-2 py-0.5 rounded font-bold">
                CAP: {currentSpec.maxKg}
              </span>
              <span className="p-1 rounded bg-black/60 text-cyan-300 group-hover:bg-[#991b1b] group-hover:text-white transition-colors">
                <Maximize2 size={12} />
              </span>
            </div>
          </div>

          {/* Cajetín de Rotulación de Ingeniería al Pie (Title Block) */}
          <div className="relative bg-slate-900/90 rounded-lg p-3 border border-blue-500/30 font-mono text-[10px]">
            <div className="grid grid-cols-3 gap-2 pb-2 mb-2 border-b border-blue-500/20">
              <div>
                <span className="text-slate-500 text-[8px] uppercase block">MATERIAL BASE:</span>
                <span className="text-cyan-300 font-bold">Acero ASTM A36</span>
              </div>
              <div>
                <span className="text-slate-500 text-[8px] uppercase block">INSTRUMENTACIÓN:</span>
                <span className="text-cyan-300 font-bold">{currentSpec.cells} IP68</span>
              </div>
              <div>
                <span className="text-slate-500 text-[8px] uppercase block">GARANTÍA EST.:</span>
                <span className="text-emerald-400 font-bold">5 AÑOS ESCRITA</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-slate-400 text-[9px]">
              <span>PLANO N° DK-DWG-{selectedCapacity}-REV2</span>
              <span className="text-slate-300 font-bold">HOMOLOGADA SENCAMER</span>
            </div>
          </div>
        </div>

        {/* Sub-texto */}
        <div className="mt-3 flex items-center justify-between text-xs text-slate-600 px-1 font-medium">
          <span className="inline-flex items-center gap-1 text-slate-500">
            <CheckCircle2 size={13} className="text-[#991b1b]" />
            Diseño, cálculo estructural y montaje llave en mano
          </span>
          <span className="text-[#991b1b] font-bold hidden sm:inline">
            53+ Modelos Disponibles
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
