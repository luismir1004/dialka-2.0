"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Phone,
  Building2,
  CheckCircle2,
  MapPin,
  Clock,
  Maximize2,
} from "lucide-react";
import { ImageLightbox, type LightboxItem } from "@/components/ImageLightbox";

interface ContactHeroMockupProps {
  whatsappNumber?: string;
}

const SEDES_DATA = [
  {
    id: "caracas",
    city: "Caracas",
    name: "Sede Principal Caracas",
    address: "Av. Principal Los Ruices, Edif. Centro Industrial, PB",
    phone: "(0212) 381.18.23",
    phoneRaw: "+582123811823",
    role: "Administración, Proyectos & Metrología Central",
    hours: "Lun - Vie: 08:00 - 17:00",
  },
  {
    id: "maracay",
    city: "Maracay",
    name: "Sede Operativa Maracay",
    address: "Zona Industrial La Candelaria, Galpón Dialka Metrología",
    phone: "(0243) 234.33.60",
    phoneRaw: "+582432343360",
    role: "Taller Central, Celdas & Base Camión Calibrador",
    hours: "Lun - Vie: 08:00 - 17:00",
  },
];

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
  const [activeSede, setActiveSede] = useState(SEDES_DATA[0]);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  return (
    <>
      <div className="relative w-full">
        {/* Glow corporativo Dialka */}
        <div className="absolute -inset-2 bg-gradient-to-br from-red-600/15 via-slate-900/10 to-amber-500/20 rounded-3xl blur-xl -z-10" />

        {/* ── CONSOLA CONMUTADOR DE SEDES & DIRECTORIO DIRECTO ── */}
        <div className="group relative bg-white text-slate-900 rounded-2xl border-2 border-slate-300 p-4 sm:p-5 shadow-2xl shadow-slate-400/20 hover:border-[#991b1b] transition-all duration-300 select-none">
          {/* Cabecera del Conmutador */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-3">
            <div className="flex items-center gap-2">
              <Building2 size={18} className="text-[#991b1b]" />
              <div>
                <span className="text-[9px] font-mono tracking-widest text-[#991b1b] font-bold uppercase block">
                  DIALKA · CONMUTADOR METROLÓGICO
                </span>
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-tight">
                  Directorio de Sedes Oficiales
                </h3>
              </div>
            </div>

            <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-800 border border-emerald-300 text-[10px] font-mono font-bold px-2 py-0.5 rounded shadow-2xs">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
              </span>
              LÍNEA EN DIRECTO
            </span>
          </div>

          {/* Selector de Sede Caracas vs Maracay */}
          <div className="grid grid-cols-2 gap-1.5 p-1 bg-slate-100 rounded-xl border border-slate-200 mb-3">
            {SEDES_DATA.map((sede) => (
              <button
                key={sede.id}
                onClick={() => setActiveSede(sede)}
                className={`py-1.5 px-2.5 rounded-lg text-left transition-all cursor-pointer ${
                  activeSede.id === sede.id
                    ? "bg-[#991b1b] text-white shadow-xs"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
                }`}
              >
                <span className="text-[11px] font-bold block leading-tight">
                  {sede.city}
                </span>
                <span className={`text-[9px] font-mono block ${activeSede.id === sede.id ? "text-red-100" : "text-slate-500"}`}>
                  {sede.phone}
                </span>
              </button>
            ))}
          </div>

          {/* Foto de la Cuadrilla de Ingenieros en Planta */}
          <div
            onClick={() => setIsLightboxOpen(true)}
            className="relative aspect-[16/10] rounded-xl overflow-hidden border-2 border-slate-200 bg-slate-950 shadow-inner group/photo cursor-pointer mb-3"
            title="Haz clic para ver las instalaciones y cuadrilla técnica en alta definición"
          >
            <Image
              src="/images/servicios/inspeccion-planta.jpg"
              alt="Ingenieros de Dialka en Inspección y Despacho Técnico"
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              className="object-cover group-hover/photo:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

            <div className="absolute top-2 left-2">
              <span className="inline-flex items-center gap-1 bg-black/80 backdrop-blur-xs text-white font-mono font-bold text-[9px] px-2 py-0.5 rounded shadow-xs">
                <MapPin size={10} className="text-[#991b1b]" />
                {activeSede.name}
              </span>
            </div>

            <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[10px] font-mono text-white">
              <span className="text-amber-300 font-bold">Tel: {activeSede.phone}</span>
              <span className="p-1 rounded bg-[#991b1b] text-white shadow-xs">
                <Maximize2 size={12} />
              </span>
            </div>
          </div>

          {/* Ficha de la Sede con Llamada Directa */}
          <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs">
            <div className="flex items-center justify-between mb-1">
              <span className="text-slate-900 font-bold">
                {activeSede.role}
              </span>
              <span className="text-[10px] font-mono text-slate-500 flex items-center gap-1">
                <Clock size={11} />
                {activeSede.hours}
              </span>
            </div>
            <p className="text-[11px] text-slate-500 mb-2 truncate">
              {activeSede.address}
            </p>

            <div className="flex items-center gap-2 pt-2 border-t border-slate-200">
              <a
                href={`tel:${activeSede.phoneRaw}`}
                className="flex-1 inline-flex items-center justify-center gap-1.5 bg-[#991b1b] hover:bg-[#7f1d1d] text-white font-bold py-1.5 px-3 rounded-lg transition-colors text-[11px]"
              >
                <Phone size={12} />
                <span>Llamar Directo ({activeSede.city})</span>
              </a>
              <span className="text-[10px] font-mono text-slate-500">
                Respuesta: <strong className="text-slate-900">&lt;15m</strong>
              </span>
            </div>
          </div>
        </div>

        {/* Sub-texto */}
        <div className="mt-3 flex items-center justify-between text-xs text-slate-600 px-1 font-medium">
          <span className="inline-flex items-center gap-1 text-slate-500">
            <CheckCircle2 size={13} className="text-[#991b1b]" />
            Atención telefónica directa sin conmutadores automáticos
          </span>
          <span className="text-[#991b1b] font-bold hidden sm:inline">
            2 Sedes Físicas
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
