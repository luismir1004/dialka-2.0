"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Maximize2, ShieldCheck, Truck } from "lucide-react";
import { ImageLightbox, type LightboxItem } from "@/components/ImageLightbox";

interface RentalItem {
  name: string;
  description: string;
  type: string;
  image?: string;
}

interface RentalCatalogProps {
  equipment: RentalItem[];
  whatsappNumber: string;
}

export function RentalCatalog({ equipment, whatsappNumber }: RentalCatalogProps) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const lightboxItems: LightboxItem[] = equipment.map((item, idx) => ({
    id: idx,
    image: item.image || "/images/alquiler/ejes-portatil.jpg",
    title: item.name,
    subtitle: `Línea de Alquiler · ${item.type}`,
    description: item.description,
    specs: [
      "Instalación y nivelación en sitio por técnicos de Dialka",
      "Calibración y verificación metrológica previa a entrega",
      "Indicador digital LED/LCD con batería recargable autónoma",
      "Soporte técnico y mantenimiento durante todo el período de alquiler",
      "Disponibilidad de operador calificado para turnos continuos",
    ],
    location: "Despacho a cualquier estado de Venezuela",
    tag: `Alquiler ${item.type}`,
    ctaText: "Consultar Tarifa de Alquiler",
  }));

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
    setIsLightboxOpen(true);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-10 sm:mb-14">
        {equipment.map((item, idx) => (
          <div
            key={item.name}
            className="card-hover group bg-white border border-slate-200/90 hover:border-red-200 active:scale-[0.99] rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
          >
            <div>
              {item.image && (
                <div
                  onClick={() => handleOpenLightbox(idx)}
                  className="relative w-full aspect-[16/10] sm:aspect-video rounded-xl bg-slate-100 overflow-hidden mb-4 cursor-pointer"
                  title="Haz clic para ver la imagen y especificaciones en grande"
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Badges */}
                  <div className="absolute top-2.5 left-2.5">
                    <span className="inline-block text-[10px] font-bold uppercase tracking-wider bg-white/95 backdrop-blur-md text-[#991b1b] px-2.5 py-0.5 rounded-full shadow-2xs">
                      {item.type}
                    </span>
                  </div>

                  <div className="absolute top-2.5 right-2.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="inline-flex items-center gap-1 bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-bold px-2 py-0.5 rounded-md border border-white/20">
                      <Maximize2 size={11} className="text-red-400" />
                      <span>Ver Ficha</span>
                    </span>
                  </div>

                  <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-white text-xs">
                    <span className="font-semibold text-white truncate max-w-[200px]">
                      {item.name}
                    </span>
                    <span className="text-[10px] font-bold text-emerald-300 bg-black/60 px-2 py-0.5 rounded-full flex items-center gap-1">
                      <CheckCircle2 size={11} />
                      Disponible
                    </span>
                  </div>
                </div>
              )}

              <h3
                onClick={() => handleOpenLightbox(idx)}
                className="text-lg sm:text-xl font-bold text-slate-900 mb-2 group-hover:text-[#991b1b] transition-colors cursor-pointer leading-snug"
              >
                {item.name}
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                {item.description}
              </p>
            </div>

            <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between">
              <button
                type="button"
                onClick={() => handleOpenLightbox(idx)}
                className="text-xs font-bold text-slate-600 hover:text-[#991b1b] inline-flex items-center gap-1 transition-colors cursor-pointer"
              >
                <Maximize2 size={12} className="text-[#991b1b]" />
                <span>Ver Ficha</span>
              </button>
              <a
                href={`https://wa.me/${whatsappNumber}?text=Hola,%20solicito%20cotización%20para%20el%20alquiler%20de:%20${encodeURIComponent(item.name)}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#991b1b] hover:text-[#7f1d1d] transition-colors"
              >
                <span>Consultar Tarifa</span>
                <ArrowRight size={13} />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <ImageLightbox
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        items={lightboxItems}
        currentIndex={lightboxIndex}
        onIndexChange={setLightboxIndex}
        whatsappNumber={whatsappNumber}
      />
    </>
  );
}
