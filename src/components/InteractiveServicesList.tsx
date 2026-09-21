"use client";

import { useState } from "react";
import { 
  Scale, 
  ShieldCheck, 
  Sliders, 
  Truck, 
  Wrench, 
  FileCheck2, 
  CheckCircle2, 
  Phone, 
  Sparkles,
  MapPin,
} from "lucide-react";
import { SERVICES, CONTACT } from "@/lib/data";

interface InteractiveServicesListProps {
  whatsappNumber?: string;
}

export function InteractiveServicesList({
  whatsappNumber = CONTACT.whatsapp,
}: InteractiveServicesListProps) {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  // Icon mapping according to service id
  const getServiceIcon = (id: string) => {
    switch (id) {
      case "calibracion-masas":
        return <Scale size={24} className="text-[#991b1b]" />;
      case "mantenimiento-preventivo":
        return <ShieldCheck size={24} className="text-[#991b1b]" />;
      case "ajuste-metrologico":
        return <Sliders size={24} className="text-[#991b1b]" />;
      case "soporte-fosas":
        return <Truck size={24} className="text-[#991b1b]" />;
      case "mantenimiento-correctivo":
        return <Wrench size={24} className="text-[#991b1b]" />;
      case "certificacion-sencamer":
        return <FileCheck2 size={24} className="text-[#991b1b]" />;
      default:
        return <Wrench size={24} className="text-[#991b1b]" />;
    }
  };

  // Categorías de filtro
  const filteredServices = SERVICES.filter((service) => {
    if (selectedFilter === "all") return true;
    if (selectedFilter === "metrologia") {
      return (
        service.id === "calibracion-masas" ||
        service.id === "ajuste-metrologico" ||
        service.id === "certificacion-sencamer"
      );
    }
    if (selectedFilter === "mantenimiento") {
      return (
        service.id === "mantenimiento-preventivo" ||
        service.id === "soporte-fosas" ||
        service.id === "mantenimiento-correctivo"
      );
    }
    return true;
  });

  return (
    <div className="space-y-10">
      {/* ── BARRA DE FILTRO INTERACTIVA ── */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-slate-50 border border-slate-200/90 p-3 rounded-2xl">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 pl-2">
            Filtrar por especialidad:
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setSelectedFilter("all")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              selectedFilter === "all"
                ? "bg-[#991b1b] text-white shadow-xs"
                : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            Todos ({SERVICES.length})
          </button>
          <button
            onClick={() => setSelectedFilter("metrologia")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              selectedFilter === "metrologia"
                ? "bg-[#991b1b] text-white shadow-xs"
                : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            Metrología y Calibración
          </button>
          <button
            onClick={() => setSelectedFilter("mantenimiento")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              selectedFilter === "mantenimiento"
                ? "bg-[#991b1b] text-white shadow-xs"
                : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            Mantenimiento y Fosas
          </button>
        </div>
      </div>

      {/* ── GRID DE TARJETAS DE SERVICIOS INTERACTIVOS ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {filteredServices.map((service, idx) => (
          <div
            key={service.id}
            className="group relative bg-white border border-slate-200/90 hover:border-red-300 active:scale-[0.98] rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-2xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
          >
            <div>
              {/* Header de la tarjeta: Icono + Número + Tag */}
              <div className="flex items-center justify-between gap-3 mb-3.5 sm:mb-5">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-red-50/80 group-hover:bg-red-100/80 border border-red-100 flex items-center justify-center transition-colors shadow-2xs">
                  {getServiceIcon(service.id)}
                </div>
                <div className="text-right">
                  <span className="text-xs font-black text-slate-300 group-hover:text-red-300 transition-colors block leading-none mb-1">
                    0{idx + 1}
                  </span>
                  <span className="inline-block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#991b1b] bg-red-50 border border-red-100/70 px-2 sm:px-2.5 py-0.5 rounded-full">
                    {service.tag}
                  </span>
                </div>
              </div>

              {/* Título y descripción técnica */}
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 group-hover:text-[#991b1b] transition-colors mb-2 leading-snug">
                {service.title}
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5">
                {service.description}
              </p>

              {/* Lista de características técnicas */}
              <div className="space-y-2 mb-4 sm:mb-5 pt-3.5 border-t border-slate-100">
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  Alcance Técnico:
                </span>
                {service.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 size={14} className="text-[#991b1b] mt-0.5 shrink-0" />
                    <span className="leading-snug">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer de tarjeta: Ubicación / Cobertura y Botón de Acción Directa */}
            <div className="pt-4 border-t border-slate-100 space-y-3">
              <div className="flex items-center justify-between text-[11px] text-slate-500 font-medium">
                <span className="flex items-center gap-1">
                  <MapPin size={12} className="text-[#991b1b]" />
                  Caracas, Maracay y Planta Nacional
                </span>
                <span className="text-[#991b1b] font-bold flex items-center gap-1">
                  <Sparkles size={11} /> 100% Garantizado
                </span>
              </div>

              {/* BOTÓN DE ACCIÓN DIRECTA OBLIGATORIO: "Solicitar Cuadrilla Técnica" */}
              <a
                href={`https://wa.me/${whatsappNumber}?text=Hola%20Dialka,%20deseo%20solicitar%20la%20Cuadrilla%20Técnica%20para%20el%20servicio:%20${encodeURIComponent(
                  service.title
                )}`}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#991b1b] hover:bg-[#7f1d1d] active:scale-[0.98] text-white font-bold px-4 py-3 rounded-xl text-xs sm:text-sm transition-all shadow-xs hover:shadow-md"
              >
                <Phone size={15} />
                <span>Solicitar Cuadrilla Técnica</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
