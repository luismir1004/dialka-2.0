"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  Building2, 
  Award, 
  CheckCircle2, 
  ExternalLink, 
  ArrowRight, 
  Factory, 
  Plane, 
  Truck, 
  Utensils, 
  Wheat, 
  Phone
} from "lucide-react";
import { CLIENTS, CONTACT } from "@/lib/data";

interface ClientsSectionProps {
  whatsappNumber?: string;
  showTitle?: boolean;
  className?: string;
}

export function ClientsSection({
  whatsappNumber = CONTACT.whatsapp,
  showTitle = true,
  className = "",
}: ClientsSectionProps) {
  // Helper para iconos y colores por sector industrial
  const getSectorBadgeConfig = (type: string) => {
    switch (type.toLowerCase()) {
      case "industrial":
        return {
          icon: <Factory size={14} className="text-blue-600" />,
          classes: "bg-blue-50 text-blue-700 border-blue-200/80",
        };
      case "aeronáutico":
        return {
          icon: <Plane size={14} className="text-indigo-600" />,
          classes: "bg-indigo-50 text-indigo-700 border-indigo-200/80",
        };
      case "logística":
        return {
          icon: <Truck size={14} className="text-emerald-600" />,
          classes: "bg-emerald-50 text-emerald-700 border-emerald-200/80",
        };
      case "alimentos":
        return {
          icon: <Utensils size={14} className="text-amber-600" />,
          classes: "bg-amber-50 text-amber-800 border-amber-200/80",
        };
      case "agropecuario":
        return {
          icon: <Wheat size={14} className="text-lime-700" />,
          classes: "bg-lime-50 text-lime-800 border-lime-200/80",
        };
      default:
        return {
          icon: <Building2 size={14} className="text-[#991b1b]" />,
          classes: "bg-red-50 text-[#991b1b] border-red-200/80",
        };
    }
  };

  return (
    <section className={`py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white via-slate-50/70 to-white border-b border-slate-200 relative overflow-hidden ${className}`}>
      {/* Elemento decorativo de fondo */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-35 pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-red-100/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Encabezado Corporativo */}
        {showTitle && (
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200/80 px-3.5 py-1 rounded-full text-[#991b1b] text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
              <Award size={14} className="text-[#991b1b]" />
              <span>Clientes Auditados &amp; Respaldo Corporativo</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
              Empresas e Industrias que Confían en Dialka
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              Más de dos décadas de trayectoria brindando calibración metrológica continua, suministro de balanzas y mantenimiento en planta a los sectores clave de Venezuela.
            </p>
          </div>
        )}

        {/* ── CUADRÍCULA DE CLIENTES DINÁMICA Y COLORIDA (2 COLS EN MÓVIL) ── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 mb-8 sm:mb-10">
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
                      <h3 className="font-extrabold text-slate-900 text-xs sm:text-base group-hover:text-[#991b1b] transition-colors leading-snug truncate">
                        {client.name}
                      </h3>
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
