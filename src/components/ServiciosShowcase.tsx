"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Wrench, CheckCircle2, ShieldCheck, Maximize2, ArrowRight } from "lucide-react";
import { ImageLightbox, type LightboxItem } from "@/components/ImageLightbox";

interface ServiceShowcaseItem {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  specs: string[];
  location: string;
}

const SERVICE_ITEMS: ServiceShowcaseItem[] = [
  {
    id: "calibracion-masas-patron",
    tag: "Metrología en Laboratorio",
    title: "Calibración con Masas Patrón Clase F1 y M1",
    subtitle: "Trazabilidad Nacional e Internacional",
    description:
      "Ajuste metrológico y calibración periódica de balanzas analíticas, de precisión e industriales utilizando juegos de masas patrón certificadas con trazabilidad directa a patrones nacionales.",
    image: "/images/servicios/calibracion-masas.jpg",
    specs: [
      "Juegos de pesas patrón Clase F1 y M1 certificadas",
      "Emisión de Certificados de Calibración e Informes de Incertidumbre",
      "Pruebas de excentricidad, repetibilidad y linealidad",
      "Ajuste de span y calibración de celda interna",
    ],
    location: "Laboratorio Dialka Caracas / Maracay",
  },
  {
    id: "inspeccion-planta-celdas",
    tag: "Servicio en Planta Industrial",
    title: "Intervención y Mantenimiento de Celdas de Carga",
    subtitle: "Diagnóstico Electrónico y Mecánico in situ",
    description:
      "Servicio correctivo y preventivo en plantas productivas: revisión de cajas sumadoras (Junction Box), aislamiento de celdas de carga contra humedad, y sustitución de cables blindados.",
    image: "/images/servicios/inspeccion-planta.jpg",
    specs: [
      "Medición de resistencia y señal en mV/V con instrumental calibrado",
      "Sellado hermético IP67/IP68 de cajas de conexiones",
      "Nivelación de apoyos y barras estabilizadoras de oscilación",
      "Puesta a punto de tolvas, silos y reactores de pesaje",
    ],
    location: "Plantas Industriales en toda Venezuela",
  },
  {
    id: "camion-patron-campo",
    tag: "Operaciones en Campo",
    title: "Calibración con Camión Patrón de 500 kg y 1.000 kg",
    subtitle: "Básculas Camioneras de 40T a 100T",
    description:
      "Unidad móvil propia equipada con brazo grúa hidráulico y masas paralelepípedas de 500 kg y 1.000 kg para pruebas de carga completa y verificación de pesaje vehicular en patios industriales.",
    image: "/images/proyectos/camion-calibrador.jpg",
    specs: [
      "Capacidad de prueba con carga real hasta 80 Toneladas",
      "Ajuste de esquinas y verificación de secciones según COVENIN 2548",
      "Precintos oficiales de inviolabilidad SENCAMER",
      "Atención en silos agrícolas, puertos y plantas de cemento",
    ],
    location: "Portuguesa, Guárico, Carabobo, Lara, Aragua",
  },
  {
    id: "montaje-camionera-fosa",
    tag: "Ingeniería y Montaje",
    title: "Montaje de Básculas Camioneras en Fosa y Sobresuelo",
    subtitle: "Estructuras de Acero y Concreto de 18m a 24m",
    description:
      "Instalación integral de plataformas de pesaje vehicular para tráfico pesado. Asesoría en obras civiles de fosa, colocación de vigas maestras y montaje de celdas de compresión tipo botella.",
    image: "/images/proyectos/montaje-camionera.jpg",
    specs: [
      "Montaje de plataformas modulares de 18m x 3m y 21m x 3m",
      "Instalación de celdas de carga tipo columna de 30T cada una",
      "Canalización subterránea protegida contra roedores y sobretensiones",
      "Conexión a cabina de pesaje con software Dialka de camiones",
    ],
    location: "Proyectos en toda Venezuela",
  },
];

interface ServiciosShowcaseProps {
  whatsappNumber: string;
}

export function ServiciosShowcase({ whatsappNumber }: ServiciosShowcaseProps) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const lightboxItems: LightboxItem[] = SERVICE_ITEMS.map((item) => ({
    id: item.id,
    image: item.image,
    title: item.title,
    subtitle: `${item.tag} · ${item.subtitle}`,
    description: item.description,
    specs: item.specs,
    location: item.location,
    tag: item.tag,
    ctaText: "Consultar Servicio Técnico por WhatsApp",
  }));

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
    setIsLightboxOpen(true);
  };

  return (
    <>
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#991b1b] bg-red-50 border border-red-200/80 px-3.5 py-1.5 rounded-full mb-3 shadow-2xs">
          Capacidades Técnicas en Campo
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-3">
          Operaciones y Equipos en Venezuela
        </h2>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Fotografías reales de intervenciones técnicas: calibración con masas patrón, mantenimiento en líneas industriales, camión calibrador y montaje de básculas camioneras.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {SERVICE_ITEMS.map((item, index) => (
          <div
            key={item.id}
            className="group rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-xs hover:shadow-xl hover:border-red-200 active:scale-[0.99] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
          >
            {/* Contenedor Fotográfico con Click para Lightbox */}
            <div
              onClick={() => handleOpenLightbox(index)}
              className="relative aspect-[16/10] sm:aspect-video w-full bg-slate-100 overflow-hidden cursor-pointer"
              title="Haz clic para ver la imagen y especificaciones en grande"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

              {/* Tag Superior */}
              <div className="absolute top-4 left-4">
                <span className="inline-block bg-white/95 backdrop-blur-md text-[#991b1b] text-[11px] font-bold px-3 py-1 rounded-full shadow-xs">
                  {item.tag}
                </span>
              </div>

              {/* Botón flotante para ver en grande */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="inline-flex items-center gap-1 bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-lg border border-white/20 shadow-md">
                  <Maximize2 size={12} className="text-red-400" />
                  <span>Ver en Grande</span>
                </span>
              </div>

              {/* Textos sobre la imagen */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-xs font-semibold text-red-200 uppercase tracking-wider mb-0.5">
                  {item.subtitle}
                </p>
                <h4 className="text-lg font-bold text-white leading-snug">
                  {item.title}
                </h4>
              </div>
            </div>

            {/* Contenido Técnico */}
            <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
              <div>
                <p className="text-slate-600 text-sm leading-relaxed mb-5">
                  {item.description}
                </p>

                {/* Especificaciones clave */}
                <div className="space-y-2 mb-6">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    Procedimientos Metrológicos:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {item.specs.map((spec) => (
                      <span
                        key={spec}
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-700 bg-slate-50 border border-slate-200/90 px-2.5 py-1 rounded-lg"
                      >
                        <CheckCircle2 size={13} className="text-[#991b1b] shrink-0" />
                        <span>{spec}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Acciones */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => handleOpenLightbox(index)}
                  className="text-xs font-bold text-slate-600 hover:text-[#991b1b] inline-flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <Maximize2 size={13} className="text-[#991b1b]" />
                  <span>Ver Detalles</span>
                </button>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=Hola,%20solicito%20información%20sobre%20el%20servicio:%20${encodeURIComponent(item.title)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#991b1b] hover:text-[#7f1d1d] transition-colors"
                >
                  <span>Consultar Servicio</span>
                  <ArrowRight size={13} />
                </a>
              </div>
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
