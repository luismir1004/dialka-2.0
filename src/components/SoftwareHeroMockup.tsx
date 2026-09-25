"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Maximize2,
  Cpu,
  Database,
  ShieldCheck,
  Radio,
  CheckCircle2,
} from "lucide-react";
import { ImageLightbox, type LightboxItem } from "@/components/ImageLightbox";

interface SoftwareHeroMockupProps {
  whatsappNumber?: string;
}

const LIGHTBOX_ITEM: LightboxItem = {
  id: "software-weighmaster-pro",
  image: "/images/software/software-camiones.jpg",
  title: "Dialka WeighMaster Pro v4.2 - Sistema de Pesaje de Camiones",
  subtitle: "Desarrollo Nacional Venezolano · Industria 4.0",
  description:
    "Interfaz operativa en tiempo real para cabinas de pesaje vehicular y tolvas industriales. Diseñado para captura directa desde celdas de carga y terminales indicadores multimarca (Toledo, Rice Lake, Cardinal, Fairbanks), eliminando manipulación humana de datos.",
  specs: [
    "Comunicación continua RS-232, RS-485, TCP/IP y protocolos industriales",
    "Generación instantánea de tickets foliados con firma de operador y chofer",
    "Cálculo automático de tara, bruto, neto y merma admisible",
    "Integración directa con ERPs (SAP, Saint, Profit Plus, Odoo, etc.)",
    "Control de periféricos: semáforos viales, barreras vehiculares y sensores",
  ],
  location: "Más de 307 básculas operando activamente en Venezuela",
  tag: "Software Propietario Dialka",
  ctaText: "Solicitar Demostración en Planta",
};

export function SoftwareHeroMockup({ whatsappNumber }: SoftwareHeroMockupProps) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  return (
    <>
      <div className="relative w-full">
        {/* Glow de fondo rojizo Dialka y sombra volumétrica */}
        <div className="absolute -inset-1 bg-gradient-to-r from-[#991b1b]/20 via-[#7f1d1d]/15 to-transparent rounded-3xl blur-xl -z-10" />

        {/* Marco de Estación de Trabajo / Ventana de Software */}
        <div
          onClick={() => setIsLightboxOpen(true)}
          className="group relative rounded-2xl overflow-hidden border border-slate-700/60 bg-slate-950 shadow-2xl shadow-slate-950/40 hover:border-red-400/80 transition-all duration-300 cursor-pointer"
          title="Haz clic para ver la interfaz en pantalla completa y alta definición"
        >
          {/* Barra Superior de la Aplicación (OS Window Titlebar) */}
          <div className="flex items-center justify-between px-3.5 py-2.5 bg-slate-900 border-b border-slate-800 text-xs select-none">
            {/* Controles de Ventana */}
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
              <span className="ml-2 text-slate-300 font-mono text-[11px] font-semibold tracking-tight hidden sm:inline">
                Dialka WeighMaster Pro v4.2 · Cabina Principal
              </span>
            </div>

            {/* Estado de Enlace Serial en Vivo */}
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 bg-emerald-950/70 border border-emerald-500/40 text-emerald-400 font-mono text-[10px] font-bold px-2 py-0.5 rounded-full shadow-inner">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                </span>
                COM1 · ONLINE
              </span>
              <span className="p-1 rounded bg-slate-800 text-slate-400 group-hover:text-white group-hover:bg-[#991b1b] transition-all">
                <Maximize2 size={12} />
              </span>
            </div>
          </div>

          {/* Contenedor de la Imagen con Filtro de Pantalla CRT / Cristal Templado */}
          <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-slate-950">
            <Image
              src="/images/software/software-camiones.jpg"
              alt="Interfaz del Software Dialka WeighMaster Pro en Cabina de Pesaje"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              className="object-cover object-top opacity-95 group-hover:scale-[1.03] transition-transform duration-700 ease-out"
              priority
            />

            {/* Gradientes y Reflejo de Vidrio Superior */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/40 via-transparent to-slate-950/30 pointer-events-none" />

            {/* Badge de Hover "Ver Pantalla Completa" */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-slate-950/40 backdrop-blur-[2px]">
              <span className="inline-flex items-center gap-2 bg-[#991b1b] text-white text-xs font-bold px-4 py-2 rounded-xl shadow-xl shadow-red-950/50 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <Maximize2 size={14} />
                <span>Explorar Interfaz en Alta Definición</span>
              </span>
            </div>

            {/* HUD Flotante de Telemetría Industrial (Parte Inferior) */}
            <div className="absolute bottom-2.5 left-2.5 right-2.5 p-3 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80 shadow-lg text-slate-200">
              <div className="flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5 text-[10px] uppercase font-mono tracking-wider text-slate-400">
                    <Radio size={11} className="text-emerald-400 animate-pulse" />
                    <span>Transmisión Continua</span>
                  </div>
                  <div className="text-xs font-semibold text-white truncate pt-0.5">
                    Placa: <span className="font-mono text-amber-300 font-bold">A45BB8D</span> · Maíz Amarillo
                  </div>
                </div>

                {/* Display Digital de Peso */}
                <div className="text-right shrink-0 bg-slate-950 px-2.5 py-1 rounded-lg border border-slate-800">
                  <span className="text-[10px] font-mono text-slate-400 uppercase block leading-none">
                    Bruto En Celda
                  </span>
                  <span className="text-sm sm:text-base font-mono font-bold text-emerald-400 tracking-tight">
                    42.850 <span className="text-[10px] text-emerald-300/80 font-sans">kg</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Barra Inferior de Métricas Rápidas */}
          <div className="grid grid-cols-3 divide-x divide-slate-800/80 bg-slate-950 text-slate-400 text-[11px] py-2 px-3 border-t border-slate-800">
            <div className="flex items-center justify-center gap-1.5">
              <Cpu size={12} className="text-red-400" />
              <span className="font-mono font-medium text-slate-300">RS-232 / TCP</span>
            </div>
            <div className="flex items-center justify-center gap-1.5">
              <Database size={12} className="text-amber-400" />
              <span className="font-mono font-medium text-slate-300">SQL Local + Cloud</span>
            </div>
            <div className="flex items-center justify-center gap-1.5">
              <ShieldCheck size={12} className="text-emerald-400" />
              <span className="font-mono font-medium text-slate-300">Anti-Fraude</span>
            </div>
          </div>
        </div>

        {/* Sub-tarjetas de Respaldo Técnico Debajo del Mockup */}
        <div className="mt-3 flex items-center justify-between text-xs text-slate-600 px-1 font-medium">
          <span className="inline-flex items-center gap-1 text-slate-500">
            <CheckCircle2 size={13} className="text-[#991b1b]" />
            Compatibilidad con Toledo, Rice Lake y Cardinal
          </span>
          <span className="text-[#991b1b] font-bold hidden sm:inline">
            +307 Licencias Activas
          </span>
        </div>
      </div>

      {/* Lightbox para Vista Detallada */}
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
