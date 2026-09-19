"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Monitor, Maximize2, CheckCircle2, Sparkles } from "lucide-react";
import { ImageLightbox, type LightboxItem } from "@/components/ImageLightbox";

interface SoftwareBannerLightboxProps {
  whatsappNumber: string;
}

export function SoftwareBannerLightbox({ whatsappNumber }: SoftwareBannerLightboxProps) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const lightboxItems: LightboxItem[] = [
    {
      id: "software-camiones-dialka",
      image: "/images/software/software-camiones.jpg",
      title: "Software Dialka de Pesaje de Camiones y Gestión Vehicular",
      subtitle: "Desarrollo Nacional · 100% Adaptable",
      description:
        "Sistema integral para el control de tráfico pesado en cabinas de pesaje. Captura lecturas continuas directamente del indicador de peso, valida peso bruto y tara previa, calcula el neto de la carga y genera tickets foliados con firma de operador y conductor.",
      specs: [
        "Captura directa RS-232, RS-485, TCP/IP y WiFi multimarca",
        "Generación automática de reportes por cliente, producto, chofer y fecha",
        "Exportación instantánea a Excel, PDF y bases de datos SQL",
        "Control de semáforos, barreras de acceso y sensores de posición en báscula",
        "Compatibilidad con cualquier indicador industrial (Toledo, Rice Lake, Cardinal, etc.)",
      ],
      location: "Implementado en más de 307 plantas industriales en Venezuela",
      tag: "Software Propietario Dialka",
      ctaText: "Cotizar Software de Pesaje para mi Empresa",
    },
  ];

  return (
    <>
      <div className="bg-white pt-10 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            onClick={() => setIsLightboxOpen(true)}
            className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-900 shadow-md hover:shadow-2xl hover:border-red-300 transition-all duration-300 group cursor-pointer"
            title="Haz clic para ver la captura del software y especificaciones en grande"
          >
            <div className="relative h-72 sm:h-96 w-full">
              <Image
                src="/images/software/software-camiones.jpg"
                alt="Software Dialka de Control de Pesaje de Camiones en Cabina de Báscula"
                fill
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/45 to-transparent" />

              {/* Top Tag & Botón Ver en Grande */}
              <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 bg-[#991b1b] text-white text-xs font-bold px-3.5 py-1.5 rounded-full shadow-xs">
                  <Monitor size={14} />
                  <span>En Ejecución en Cabina</span>
                </span>
                <span className="inline-flex items-center gap-1 bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-lg border border-white/20 shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 size={13} className="text-red-400" />
                  <span>Ver Ficha Técnica</span>
                </span>
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-6 left-6 right-6 text-white max-w-2xl">
                <span className="text-[11px] font-bold uppercase tracking-widest text-red-300 block mb-1">
                  Interfaz Operativa en Tiempo Real
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white mb-2 leading-tight">
                  Sistema de Gestión Vehicular y Tickets de Pesaje
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  Captura directa desde celdas de carga, validación de peso neto/tara, emisión de boletas y exportación compatible con sistemas administrativos.
                </p>
                <div className="mt-3 flex items-center gap-4 text-xs text-red-200 font-semibold">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 size={13} className="text-emerald-400" />
                    Multi-indicador
                  </span>
                  <span className="flex items-center gap-1">
                    <CheckCircle2 size={13} className="text-emerald-400" />
                    Reportes en Excel
                  </span>
                  <span className="text-white underline font-bold">
                    Clic para ver detalles
                  </span>
                </div>
              </div>
            </div>
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
