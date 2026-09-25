"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Maximize2,
  ShieldCheck,
  Scale,
  Layers,
  Zap,
  CheckCircle2,
  Compass,
} from "lucide-react";
import { ImageLightbox, type LightboxItem } from "@/components/ImageLightbox";

interface ProductsHeroMockupProps {
  whatsappNumber?: string;
}

const LIGHTBOX_ITEM: LightboxItem = {
  id: "balanza-camionera-dialka-80t",
  image: "/images/proyectos/bascula-camionera-sobresuelo-1.jpg",
  title: "Balanza Camionera Industrial Dialka 80T - Fabricación Nacional",
  subtitle: "Estructura en Acero ASTM A36 · Celdas Digitales IP68",
  description:
    "Plataforma de pesaje continuo para transporte de carga pesada y gandolas. Fabricada en módulos de vigas IPE de acero estructural de alta resistencia a la fatiga cíclica. Equipada con celdas de compresión autocentrantes y caja de compensación hermética contra agua y polvo.",
  specs: [
    "Capacidad nominal de 80 Toneladas (dimensiones estándar: 21m x 3.2m)",
    "Módulos prefabricados para montaje rápido en fosa o sobre suelo con rampas",
    "Celdas de carga digitales de compresión con protección IP68 inmersible",
    "Garantía estructural certificada por 5 años contra deflexión mecánica",
    "Homologada para uso comercial legal con precinto SENCAMER",
  ],
  location: "Fabricación e instalación en toda Venezuela",
  tag: "Ingeniería Estructural Dialka",
  ctaText: "Cotizar Balanza Camionera a Medida",
};

export function ProductsHeroMockup({ whatsappNumber }: ProductsHeroMockupProps) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  return (
    <>
      <div className="relative w-full">
        {/* Glow corporativo Dialka */}
        <div className="absolute -inset-1 bg-gradient-to-r from-[#991b1b]/20 via-[#7f1d1d]/15 to-transparent rounded-3xl blur-xl -z-10" />

        {/* Marco de Banco de Ensayo de Balanzas */}
        <div
          onClick={() => setIsLightboxOpen(true)}
          className="group relative rounded-2xl overflow-hidden border border-slate-700/60 bg-slate-950 shadow-2xl shadow-slate-950/40 hover:border-red-400/80 transition-all duration-300 cursor-pointer"
          title="Haz clic para ver la ficha técnica y despiece estructural en alta definición"
        >
          {/* Barra Superior de Ingeniería */}
          <div className="flex items-center justify-between px-3.5 py-2.5 bg-slate-900 border-b border-slate-800 text-xs select-none">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
              <span className="ml-2 text-slate-300 font-mono text-[11px] font-semibold tracking-tight hidden sm:inline">
                Dialka Engineering Lab · Balanza Camionera 80T
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 bg-emerald-950/70 border border-emerald-500/40 text-emerald-400 font-mono text-[10px] font-bold px-2 py-0.5 rounded-full shadow-inner">
                <Compass size={11} className="text-emerald-400" />
                ASTM A36 · IP68
              </span>
              <span className="p-1 rounded bg-slate-800 text-slate-400 group-hover:text-white group-hover:bg-[#991b1b] transition-all">
                <Maximize2 size={12} />
              </span>
            </div>
          </div>

          {/* Imagen de la Balanza Camionera */}
          <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-slate-950">
            <Image
              src="/images/proyectos/bascula-camionera-sobresuelo-1.jpg"
              alt="Plataforma de Balanza Camionera Industrial de Acero Dialka"
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
                <span>Explorar Ficha de Balanza Camionera HD</span>
              </span>
            </div>

            {/* HUD Flotante de Despiece Técnico */}
            <div className="absolute bottom-2.5 left-2.5 right-2.5 p-3 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80 shadow-lg text-slate-200">
              <div className="flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5 text-[10px] uppercase font-mono tracking-wider text-slate-400">
                    <Scale size={11} className="text-emerald-400" />
                    <span>Configuración Pesaje Pesado</span>
                  </div>
                  <div className="text-xs font-semibold text-white truncate pt-0.5">
                    Modelo: <span className="font-mono text-amber-300 font-bold">DK-CAM-80T</span> (21m x 3.2m)
                  </div>
                </div>

                <div className="text-right shrink-0 bg-slate-950 px-2.5 py-1 rounded-lg border border-slate-800">
                  <span className="text-[10px] font-mono text-slate-400 uppercase block leading-none">
                    Capacidad
                  </span>
                  <span className="text-sm sm:text-base font-mono font-bold text-emerald-400 tracking-tight">
                    80.000 <span className="text-[10px] text-emerald-300/80 font-sans">kg</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Barra Inferior de Garantías Estructurales */}
          <div className="grid grid-cols-3 divide-x divide-slate-800/80 bg-slate-950 text-slate-400 text-[11px] py-2 px-3 border-t border-slate-800">
            <div className="flex items-center justify-center gap-1.5">
              <Layers size={12} className="text-red-400" />
              <span className="font-mono font-medium text-slate-300">Vigas IPE Pesadas</span>
            </div>
            <div className="flex items-center justify-center gap-1.5">
              <Zap size={12} className="text-amber-400" />
              <span className="font-mono font-medium text-slate-300">Celdas IP68</span>
            </div>
            <div className="flex items-center justify-center gap-1.5">
              <ShieldCheck size={12} className="text-emerald-400" />
              <span className="font-mono font-medium text-slate-300">5 Años Garantía</span>
            </div>
          </div>
        </div>

        {/* Sub-tarjetas de Respaldo */}
        <div className="mt-3 flex items-center justify-between text-xs text-slate-600 px-1 font-medium">
          <span className="inline-flex items-center gap-1 text-slate-500">
            <CheckCircle2 size={13} className="text-[#991b1b]" />
            Diseño e instalación llave en mano en toda Venezuela
          </span>
          <span className="text-[#991b1b] font-bold hidden sm:inline">
            53+ Modelos en Catálogo
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
