"use client";

import { useState } from "react";
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

  // Helper para iconos por sector
  const getSectorIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case "industrial":
        return <Factory size={16} className="text-[#991b1b]" />;
      case "aeronáutico":
        return <Plane size={16} className="text-[#991b1b]" />;
      case "logística":
        return <Truck size={16} className="text-[#991b1b]" />;
      case "alimentos":
        return <Utensils size={16} className="text-[#991b1b]" />;
      case "agropecuario":
        return <Wheat size={16} className="text-[#991b1b]" />;
      default:
        return <Building2 size={16} className="text-[#991b1b]" />;
    }
  };

  // Filtrado según pestaña
  const showClients = activeTab === "all" || activeTab === "clients";
  const showBrands = activeTab === "all" || activeTab === "brands";

  return (
    <section className="bg-gradient-to-b from-white via-slate-50/60 to-white py-10 sm:py-16 md:py-20 border-b border-slate-200 overflow-hidden relative">
      {/* Elemento decorativo de fondo */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Encabezado Corporativo */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200/80 px-3 py-1 rounded-full text-[#991b1b] text-xs font-bold uppercase tracking-wider mb-2.5 shadow-2xs">
            <Award size={13} className="text-[#991b1b]" />
            <span>Social Proof &amp; Respaldo Industrial</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-2.5">
            Empresas e Industrias que Confían en Dialka
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
            Más de 25 años proveyendo tecnología de pesaje, calibraciones certificadas y mantenimiento metrológico a las principales industrias, aerolíneas y cadenas logísticas de Venezuela.
          </p>

          {/* Selector de Pestañas Interactivo */}
          <div className="mt-5 inline-flex p-1 bg-slate-100/90 rounded-xl border border-slate-200/80 shadow-inner">
            <button
              onClick={() => setActiveTab("clients")}
              className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-bold transition-all duration-200 ${
                activeTab === "clients"
                  ? "bg-white text-[#991b1b] shadow-xs border border-slate-200/60"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Clientes Auditados ({CLIENTS.length})
            </button>
            <button
              onClick={() => setActiveTab("brands")}
              className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-bold transition-all duration-200 ${
                activeTab === "brands"
                  ? "bg-white text-[#991b1b] shadow-xs border border-slate-200/60"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Marcas ({BRANDS.length})
            </button>
            <button
              onClick={() => setActiveTab("all")}
              className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-bold transition-all duration-200 ${
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
                <Building2 size={18} className="text-[#991b1b]" />
                <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                  Grandes Clientes e Industrias en Venezuela
                </h3>
              </div>
              <span className="text-xs font-semibold text-slate-500 hidden sm:inline-block">
                Trazabilidad y servicio continuo en planta
              </span>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {CLIENTS.map((client) => (
                <div
                  key={client.name}
                  className="group relative bg-white border border-slate-200/90 hover:border-red-300 rounded-2xl p-5 shadow-2xs hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
                >
                  <div>
                    {/* Header de tarjeta: Inicial/Logo badge + tipo de industria */}
                    <div className="flex items-start justify-between gap-3 mb-3.5">
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-xl bg-slate-100 group-hover:bg-red-50 border border-slate-200 group-hover:border-red-200 flex items-center justify-center font-extrabold text-[#991b1b] text-base transition-colors shrink-0">
                          {client.name.substring(0, 2).toUpperCase()}
                        </div>
                        <div>
                          <h4 className="font-extrabold text-slate-900 text-base group-hover:text-[#991b1b] transition-colors">
                            {client.name}
                          </h4>
                          <span className="text-[11px] font-semibold text-slate-500 block">
                            {client.sector}
                          </span>
                        </div>
                      </div>
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200 shrink-0">
                        {getSectorIcon(client.type)}
                        <span>{client.type}</span>
                      </span>
                    </div>

                    {/* Descripción de servicio auditado */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                      {client.desc}
                    </p>
                  </div>

                  {/* Footer de tarjeta: Badge de verificación */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="inline-flex items-center gap-1.5 text-slate-500 font-medium">
                      <CheckCircle2 size={13} className="text-[#991b1b]" />
                      <span>Cliente Certificado</span>
                    </span>
                    <a
                      href={`https://wa.me/${whatsappNumber}?text=Hola%20Dialka,%20me%20gustaría%20conocer%20más%20sobre%20sus%20soluciones%20para%20${encodeURIComponent(client.name)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-400 group-hover:text-[#991b1b] transition-colors p-1"
                      title={`Consultar soluciones para ${client.name}`}
                    >
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── SECCIÓN 2: MARCAS OFICIALES Y PARTNERS TECNOLÓGICOS ── */}
        {showBrands && (
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6 pb-2 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <ShieldCheck size={18} className="text-[#991b1b]" />
                <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                  Marcas Representadas y Componentes Originales
                </h3>
              </div>
              <span className="text-xs font-semibold text-slate-500 hidden sm:inline-block">
                Homologación SENCAMER y repuestos directos
              </span>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {BRANDS.map((brand) => (
                <div
                  key={brand.name}
                  className="group bg-white border border-slate-200/90 hover:border-red-300 rounded-xl p-4 shadow-2xs hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2.5">
                      <h4 className="font-extrabold text-slate-900 text-base group-hover:text-[#991b1b] transition-colors">
                        {brand.name}
                      </h4>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                        {brand.origin}
                      </span>
                    </div>

                    <p className="text-xs font-semibold text-[#991b1b] mb-1.5">
                      {brand.category}
                    </p>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {brand.highlight}
                    </p>
                  </div>

                  <div className="mt-4 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-500">
                    <span className="flex items-center gap-1">
                      <Sparkles size={11} className="text-[#991b1b]" />
                      Garantía Directa
                    </span>
                    <span className="text-[#991b1b]">Original</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── BANNER INFORMATIVO INFERIOR: RESPALDO METROLÓGICO ── */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-red-600/20 border border-red-500/30 flex items-center justify-center shrink-0">
              <Award size={24} className="text-red-400" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white">
                ¿Su empresa requiere soporte o homologación SENCAMER?
              </h4>
              <p className="text-slate-300 text-xs sm:text-sm mt-0.5">
                Contamos con cuadrillas en Caracas y Maracay con masas patrón y camión calibrador propio.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto shrink-0">
            <a
              href={`https://wa.me/${whatsappNumber}?text=Hola%20Dialka,%20necesito%20asesoría%20técnica%20para%20nuestra%20empresa`}
              target="_blank"
              rel="noreferrer"
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-[#991b1b] hover:bg-[#b91c1c] text-white font-bold px-5 py-2.5 rounded-xl text-xs sm:text-sm transition-colors shadow-xs"
            >
              <Phone size={14} />
              <span>Contactar Cuadrilla</span>
            </a>
            <Link
              href="/proyectos"
              className="w-full md:w-auto inline-flex items-center justify-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold px-4 py-2.5 rounded-xl text-xs sm:text-sm transition-colors border border-slate-700"
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
