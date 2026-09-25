"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Building2, 
  Award, 
  CheckCircle2, 
  ExternalLink, 
  ArrowRight, 
  ShieldCheck, 
  Factory, 
  Plane, 
  Truck, 
  Utensils, 
  Wheat, 
  Sparkles,
  Phone
} from "lucide-react";
import { CLIENTS, BRANDS, CONTACT } from "@/lib/data";

interface SocialProofSectionProps {
  whatsappNumber?: string;
}

export function SocialProofSection({ whatsappNumber = CONTACT.whatsapp }: SocialProofSectionProps) {
  const [activeTab, setActiveTab] = useState<"all" | "clients" | "brands">("clients");

  // Helper para iconos y colores por sector industrial (Paleta Dialka)
  const getSectorBadgeConfig = (type: string) => {
    switch (type.toLowerCase()) {
      case "industrial":
        return {
          icon: <Factory size={14} className="text-slate-700" />,
          classes: "bg-slate-100 text-slate-800 border-slate-200",
        };
      case "aeronáutico":
        return {
          icon: <Plane size={14} className="text-slate-700" />,
          classes: "bg-slate-100 text-slate-800 border-slate-200",
        };
      case "logística":
        return {
          icon: <Truck size={14} className="text-[#991b1b]" />,
          classes: "bg-red-50 text-[#991b1b] border-red-200/80 font-semibold",
        };
      case "alimentos":
        return {
          icon: <Utensils size={14} className="text-slate-700" />,
          classes: "bg-slate-100 text-slate-800 border-slate-200",
        };
      case "agropecuario":
        return {
          icon: <Wheat size={14} className="text-emerald-700" />,
          classes: "bg-emerald-50 text-emerald-800 border-emerald-200/80",
        };
      default:
        return {
          icon: <Building2 size={14} className="text-[#991b1b]" />,
          classes: "bg-red-50 text-[#991b1b] border-red-200/80 font-semibold",
        };
    }
  };

  // Helper para badges de marcas aliadas y homologadas
  const getBrandBadge = (name: string) => {
    switch (name.toLowerCase()) {
      case "ohaus":
        return "bg-red-50 text-[#991b1b] border-red-200/90 font-bold";
      case "keli sensing":
        return "bg-slate-100 text-slate-800 border-slate-200 font-semibold";
      case "cas corporation":
        return "bg-slate-100 text-slate-800 border-slate-200 font-semibold";
      case "sipel":
        return "bg-slate-100 text-slate-800 border-slate-200 font-semibold";
      case "grupo epelsa":
        return "bg-slate-100 text-slate-800 border-slate-200 font-semibold";
      case "sky":
        return "bg-slate-100 text-slate-800 border-slate-200 font-semibold";
      default:
        return "bg-slate-100 text-slate-800 border-slate-200 font-semibold";
    }
  };

  // Filtrado según pestaña
  const showClients = activeTab === "all" || activeTab === "clients";
  const showBrands = activeTab === "all" || activeTab === "brands";

  return (
    <section className="bg-gradient-to-b from-white via-slate-50/70 to-white py-12 sm:py-16 md:py-20 border-b border-slate-200 overflow-hidden relative">
      {/* Elemento decorativo de fondo */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-35 pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-red-100/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Encabezado Corporativo */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200/80 px-3.5 py-1 rounded-full text-[#991b1b] text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
            <Award size={14} className="text-[#991b1b]" />
            <span>Social Proof &amp; Respaldo Industrial</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Empresas e Industrias que Confían en Dialka
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Más de 25 años proveyendo tecnología de pesaje, calibraciones certificadas y mantenimiento metrológico a las principales industrias, aerolíneas y cadenas logísticas de Venezuela.
          </p>

          {/* Selector de Pestañas Interactivo */}
          <div className="mt-6 inline-flex p-1 bg-slate-100/90 rounded-2xl border border-slate-200/80 shadow-inner">
            <button
              type="button"
              onClick={() => setActiveTab("clients")}
              className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                activeTab === "clients"
                  ? "bg-white text-[#991b1b] shadow-xs border border-slate-200/60"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Clientes Auditados ({CLIENTS.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("brands")}
              className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                activeTab === "brands"
                  ? "bg-white text-[#991b1b] shadow-xs border border-slate-200/60"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Marcas ({BRANDS.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("all")}
              className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                activeTab === "all"
                  ? "bg-white text-slate-900 shadow-xs border border-slate-200/60"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Todos ({CLIENTS.length + BRANDS.length})
            </button>
          </div>
        </div>

        {/* ── SECCIÓN 1: CLIENTES CORPORATIVOS AUDITADOS ── */}
        {showClients && (
          <div className="mb-14">
            <div className="flex items-center justify-between mb-6 pb-2 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <Building2 size={20} className="text-[#991b1b]" />
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                  Grandes Clientes e Industrias en Venezuela
                </h3>
              </div>
              <span className="text-xs font-semibold text-slate-500 hidden sm:inline-block">
                Trazabilidad y servicio continuo en planta
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5">
              {CLIENTS.map((client) => {
                const badgeConfig = getSectorBadgeConfig(client.type);

                return (
                  <div
                    key={client.name}
                    className="group relative bg-gradient-to-br from-white via-slate-50 to-red-50/20 border border-slate-200/90 hover:border-red-400 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 shadow-sm hover:shadow-xl hover:shadow-red-500/10 transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden"
                  >
                    {/* Borde sutil iluminado corporativo en hover */}
                    <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-b from-red-500/0 via-red-500/0 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                    <div>
                      {/* Contenedor del Logo de Cliente con aspect-[16/9] y fondo blanco nítido */}
                      <div className="aspect-[16/9] w-full rounded-lg sm:rounded-xl bg-white border border-slate-100 group-hover:border-red-200/80 shadow-2xs flex items-center justify-center p-2 sm:p-3 mb-2.5 sm:mb-3.5 transition-all duration-300 relative overflow-hidden">
                        <div className="relative w-full h-full flex items-center justify-center transition-all duration-300 group-hover:scale-105">
                          <Image
                            src={client.logo}
                            alt={`Logo corporativo de ${client.name}`}
                            fill
                            sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 22vw"
                            className="object-contain p-1 sm:p-2"
                          />
                        </div>
                      </div>

                      {/* Header de tarjeta: Nombre y Badge de Sector con Colores Vivos */}
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 sm:gap-2 mb-1.5">
                        <div className="min-w-0">
                          <h4 className="font-extrabold text-slate-900 text-xs sm:text-base group-hover:text-[#991b1b] transition-colors leading-snug truncate">
                            {client.name}
                          </h4>
                          <span className="text-[10px] sm:text-xs font-semibold text-slate-500 block mt-0.5 truncate">
                            {client.sector}
                          </span>
                        </div>
                        <span className={`inline-flex items-center gap-1 text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-full border shadow-2xs shrink-0 self-start mt-0.5 sm:mt-0 ${badgeConfig.classes}`}>
                          {badgeConfig.icon}
                          <span className="truncate">{client.type}</span>
                        </span>
                      </div>

                      {/* Descripción de servicio auditado */}
                      <p className="text-[10px] sm:text-xs text-slate-600 leading-relaxed my-1.5 sm:my-2.5 line-clamp-2">
                        {client.desc}
                      </p>
                    </div>

                    {/* Footer de tarjeta: Badge de verificación oficial y enlace a consulta */}
                    <div className="pt-2 sm:pt-2.5 border-t border-slate-100 flex items-center justify-between text-[10px] sm:text-xs">
                      <span className="inline-flex items-center gap-1 text-slate-600 font-semibold truncate">
                        <CheckCircle2 size={12} className="text-emerald-600 shrink-0" />
                        <span className="hidden sm:inline">Cliente Auditado</span>
                        <span className="sm:hidden">Auditado</span>
                      </span>
                      <a
                        href={`https://wa.me/${whatsappNumber}?text=Hola%20Dialka,%20me%20gustaría%20conocer%20más%20sobre%20sus%20soluciones%20para%20${encodeURIComponent(client.name)}`}
                        target="_blank"
                        rel="noreferrer"
                        className="text-slate-500 group-hover:text-[#991b1b] transition-colors p-0.5 flex items-center gap-0.5 font-bold active:scale-95 shrink-0"
                        title={`Consultar soluciones para ${client.name}`}
                      >
                        <span>Ver</span>
                        <ExternalLink size={11} className="transition-transform group-hover:translate-x-0.5" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ── SECCIÓN 2: MARCAS OFICIALES Y PARTNERS TECNOLÓGICOS ── */}
        {showBrands && (
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6 pb-2 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <ShieldCheck size={20} className="text-[#991b1b]" />
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                  Marcas Representadas y Componentes Originales
                </h3>
              </div>
              <span className="text-xs font-semibold text-slate-500 hidden sm:inline-block">
                Homologación SENCAMER y repuestos directos
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
              {BRANDS.map((brand) => (
                <div
                  key={brand.name}
                  className="group relative bg-gradient-to-br from-white via-slate-50 to-red-50/20 border border-slate-200/90 hover:border-red-400 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 shadow-sm hover:shadow-xl hover:shadow-red-500/10 transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden"
                >
                  <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-b from-red-500/0 via-red-500/0 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  <div>
                    {/* Contenedor del Logo de Marca con aspect-[16/9] */}
                    <div className="aspect-[16/9] w-full rounded-lg sm:rounded-xl bg-white border border-slate-100 group-hover:border-red-200/80 shadow-2xs flex items-center justify-center p-2 sm:p-3 mb-2.5 sm:mb-3 transition-all duration-300 relative overflow-hidden">
                      <div className="relative w-full h-full flex items-center justify-center transition-all duration-300 group-hover:scale-105">
                        <Image
                          src={brand.logo}
                          alt={`Logo oficial de ${brand.name}`}
                          fill
                          sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 22vw"
                          className="object-contain p-1 sm:p-2"
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-1 mb-1">
                      <h4 className="font-extrabold text-slate-900 text-xs sm:text-base group-hover:text-[#991b1b] transition-colors leading-snug truncate">
                        {brand.name}
                      </h4>
                      <span className="text-[8px] sm:text-[9px] font-bold uppercase tracking-wider text-slate-600 bg-white px-1.5 py-0.5 rounded border border-slate-200/70 shadow-2xs shrink-0">
                        {brand.origin.split(" ")[0]}
                      </span>
                    </div>

                    <div className="mb-1.5">
                      <span className={`inline-block text-[9px] sm:text-[10px] font-bold px-1.5 sm:px-2 py-0.5 rounded border ${getBrandBadge(brand.name)} truncate max-w-full`}>
                        {brand.category}
                      </span>
                    </div>

                    <p className="text-[10px] sm:text-xs text-slate-600 leading-relaxed line-clamp-2 mb-2 sm:mb-3">
                      {brand.highlight}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] sm:text-xs">
                    <span className="flex items-center gap-1 font-semibold text-slate-500 truncate">
                      <Sparkles size={11} className="text-[#991b1b] shrink-0" />
                      <span className="truncate">Original</span>
                    </span>
                    <a
                      href={`https://wa.me/${whatsappNumber}?text=Hola%20Dialka,%20deseo%20cotizar%20equipos%20de%20la%20marca%20${encodeURIComponent(brand.name)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-500 group-hover:text-[#991b1b] transition-colors flex items-center gap-0.5 font-bold active:scale-95 shrink-0"
                    >
                      <span>Cotizar</span>
                      <ExternalLink size={11} className="transition-transform group-hover:translate-x-0.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── BANNER INFORMATIVO INFERIOR: RESPALDO METROLÓGICO ── */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-700/80 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex items-center gap-4 relative z-10">
            <div className="w-12 h-12 rounded-xl bg-red-600/20 border border-red-500/30 flex items-center justify-center shrink-0">
              <Award size={24} className="text-red-400" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white">
                ¿Su empresa requiere soporte o calibración certificada SENCAMER?
              </h4>
              <p className="text-slate-300 text-xs sm:text-sm mt-0.5">
                Contamos con cuadrillas en Caracas y Maracay con masas patrón y camión calibrador propio.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto shrink-0 relative z-10">
            <a
              href={`https://wa.me/${whatsappNumber}?text=Hola%20Dialka,%20necesito%20asesoría%20técnica%20para%20nuestra%20empresa`}
              target="_blank"
              rel="noreferrer"
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-[#991b1b] hover:bg-[#b91c1c] text-white font-bold px-5 py-3 rounded-xl text-xs sm:text-sm transition-all shadow-md active:scale-95"
            >
              <Phone size={14} />
              <span>Contactar Cuadrilla</span>
            </a>
            <Link
              href="/proyectos"
              className="w-full md:w-auto inline-flex items-center justify-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold px-4 py-3 rounded-xl text-xs sm:text-sm transition-all border border-slate-700 hover:border-slate-600"
            >
              <span>Ver Obras</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

