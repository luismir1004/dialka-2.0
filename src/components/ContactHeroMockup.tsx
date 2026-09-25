"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Maximize2,
  Building2,
  CheckCircle2,
  MapPin,
  Clock,
  Zap,
} from "lucide-react";
import { ImageLightbox, type LightboxItem } from "@/components/ImageLightbox";

interface ContactHeroMockupProps {
  whatsappNumber?: string;
}

const LIGHTBOX_ITEM: LightboxItem = {
  id: "sede-central-contacto-dialka",
  image: "/images/servicios/inspeccion-planta.jpg",
  title: "Centro de Despacho & Cuadrilla de Ingeniería en Planta Dialka",
  subtitle: "Sedes Oficiales Caracas (Los Ruices) y Maracay (La Candelaria)",
  description:
    "Equipo de ingenieros metrólogos y electrónicos listos para despacho inmediato ante paradas de planta, contingencias de pesaje y coordinación técnica directa.",
  specs: [
    "Sede Principal Caracas: Los Ruices, Gran Caracas · (0212) 381.18.23",
    "Sede Operativa Maracay: La Candelaria, Edo. Aragua · (0243) 234.33.60",
    "Línea de Guardia WhatsApp: (+58 414) 277.00.24 para emergencias 24/7",
    "Atención a paradas de planta no programadas con cuadrilla móvil",
    "Diagnóstico metrológico de tolvas, celdas de carga y terminales indicadores",
  ],
  location: "Atención y cobertura nacional en los 14 estados productivos",
  tag: "Centro de Despacho Dialka",
  ctaText: "Hablar con un Ingeniero de Guardia Ahora",
};

export function ContactHeroMockup({ whatsappNumber }: ContactHeroMockupProps) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  return (
    <>
      <div className="relative w-full">
        {/* Glow corporativo Dialka */}
        <div className="absolute -inset-1 bg-gradient-to-r from-[#991b1b]/20 via-[#7f1d1d]/15 to-transparent rounded-3xl blur-xl -z-10" />

        {/* Marco de Tablero de Central Telefónica y Despacho */}
        <div
          onClick={() => setIsLightboxOpen(true)}
          className="group relative rounded-2xl overflow-hidden border border-slate-700/60 bg-slate-950 shadow-2xl shadow-slate-950/40 hover:border-red-400/80 transition-all duration-300 cursor-pointer"
          title="Haz clic para ver las instalaciones y cuadrilla técnica en alta definición"
        >
          {/* Barra Superior del Switchboard */}
          <div className="flex items-center justify-between px-3.5 py-2.5 bg-slate-900 border-b border-slate-800 text-xs select-none">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
              <span className="ml-2 text-slate-300 font-mono text-[11px] font-semibold tracking-tight hidden sm:inline">
                Dialka Dispatch Center · Switchboard Activo
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 bg-emerald-950/70 border border-emerald-500/40 text-emerald-400 font-mono text-[10px] font-bold px-2 py-0.5 rounded-full shadow-inner">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                </span>
                LÍNEA EN DIRECTO
              </span>
              <span className="p-1 rounded bg-slate-800 text-slate-400 group-hover:text-white group-hover:bg-[#991b1b] transition-all">
                <Maximize2 size={12} />
              </span>
            </div>
          </div>

          {/* Imagen del Ingeniero / Taller */}
          <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-slate-950">
            <Image
              src="/images/servicios/inspeccion-planta.jpg"
              alt="Ingenieros Especialistas de Dialka en Inspección y Despacho Metrológico"
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
                <span>Explorar Sedes y Guardia Técnica HD</span>
              </span>
            </div>

            {/* HUD Flotante de Conexión Directa */}
            <div className="absolute bottom-2.5 left-2.5 right-2.5 p-3 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80 shadow-lg text-slate-200">
              <div className="flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5 text-[10px] uppercase font-mono tracking-wider text-slate-400">
                    <Building2 size={11} className="text-emerald-400" />
                    <span>Caracas & Maracay</span>
                  </div>
                  <div className="text-xs font-semibold text-white truncate pt-0.5">
                    WhatsApp: <span className="font-mono text-emerald-400 font-bold">(+58 414) 277.00.24</span>
                  </div>
                </div>

                <div className="text-right shrink-0 bg-slate-950 px-2.5 py-1 rounded-lg border border-slate-800">
                  <span className="text-[10px] font-mono text-slate-400 uppercase block leading-none">
                    Respuesta
                  </span>
                  <span className="text-sm sm:text-base font-mono font-bold text-amber-400 tracking-tight">
                    &lt; 15 <span className="text-[10px] text-amber-300/80 font-sans">min</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Barra Inferior de Métricas de Sedes */}
          <div className="grid grid-cols-3 divide-x divide-slate-800/80 bg-slate-950 text-slate-400 text-[11px] py-2 px-3 border-t border-slate-800">
            <div className="flex items-center justify-center gap-1.5">
              <MapPin size={12} className="text-red-400" />
              <span className="font-mono font-medium text-slate-300">2 Sedes Físicas</span>
            </div>
            <div className="flex items-center justify-center gap-1.5">
              <Zap size={12} className="text-amber-400" />
              <span className="font-mono font-medium text-slate-300">Guardia 24/7</span>
            </div>
            <div className="flex items-center justify-center gap-1.5">
              <Clock size={12} className="text-emerald-400" />
              <span className="font-mono font-medium text-slate-300">Visitas &lt;24h</span>
            </div>
          </div>
        </div>

        {/* Sub-tarjetas de Respaldo */}
        <div className="mt-3 flex items-center justify-between text-xs text-slate-600 px-1 font-medium">
          <span className="inline-flex items-center gap-1 text-slate-500">
            <CheckCircle2 size={13} className="text-[#991b1b]" />
            Atención directa con ingenieros metrólogos sin intermediarios
          </span>
          <span className="text-[#991b1b] font-bold hidden sm:inline">
            Horario: Lun-Vie 08:00 - 17:00
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
