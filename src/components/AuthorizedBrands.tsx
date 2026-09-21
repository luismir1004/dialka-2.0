"use client";

import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Award, Sparkles, ArrowRight, ExternalLink } from "lucide-react";
import { BRANDS, CONTACT } from "@/lib/data";

interface AuthorizedBrandsProps {
  whatsappNumber?: string;
  showTitle?: boolean;
  className?: string;
}

export function AuthorizedBrands({
  whatsappNumber = CONTACT.whatsapp,
  showTitle = true,
  className = "",
}: AuthorizedBrandsProps) {
  return (
    <section className={`py-12 md:py-20 bg-slate-50/80 border-y border-slate-200 relative overflow-hidden ${className}`}>
      {/* Fondo sutil con trama técnica industrial */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Encabezado formal y corporativo B2B */}
        {showTitle && (
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200/80 px-3.5 py-1 rounded-full text-[#991b1b] text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
              <ShieldCheck size={14} className="text-[#991b1b]" />
              <span>Alianzas Estratégicas y Respaldo Metrológico Internacional</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
              Marcas Autorizadas y Partners Tecnológicos
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              Representación comercial, repuestos legítimos y soporte técnico homologado para los principales fabricantes mundiales de pesaje y metrología.
            </p>
          </div>
        )}

        {/* ── CUADRÍCULA DE TARJETAS DE MARCAS (2 COLUMNAS EN MÓVIL, 3 EN TABLET, 4 EN ESCRITORIO) ── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 mb-6 sm:mb-8">
          {BRANDS.map((brand) => {
            // Estilos de badge por categoría de marca
            const getBrandBadge = (name: string) => {
              switch (name.toLowerCase()) {
                case "ohaus":
                  return "bg-red-50 text-red-700 border-red-200/80";
                case "keli sensing":
                  return "bg-blue-50 text-blue-700 border-blue-200/80";
                case "cas corporation":
                  return "bg-indigo-50 text-indigo-700 border-indigo-200/80";
                case "sipel":
                  return "bg-cyan-50 text-cyan-800 border-cyan-200/80";
                case "grupo epelsa":
                  return "bg-amber-50 text-amber-800 border-amber-200/80";
                case "sky":
                  return "bg-purple-50 text-purple-700 border-purple-200/80";
                default:
                  return "bg-red-50 text-[#991b1b] border-red-300";
              }
            };

            return (
              <div
                key={brand.name}
                className="relative group bg-gradient-to-br from-white via-slate-50 to-red-50/20 border border-slate-200/90 hover:border-red-400 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 shadow-sm hover:shadow-xl hover:shadow-red-500/10 transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden"
              >
                {/* Borde sutil iluminado corporativo en hover */}
                <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-b from-red-500/0 via-red-500/0 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div>
                  {/* Contenedor del Logo con relación de aspecto fija aspect-[16/9] y fondo blanco nítido */}
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

                  {/* Encabezado: Nombre de la Marca y País de Origen */}
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <h3 className="font-extrabold text-slate-900 text-xs sm:text-base group-hover:text-[#991b1b] transition-colors leading-snug truncate">
                      {brand.name}
                    </h3>
                    <span className="text-[8px] sm:text-[9px] font-bold uppercase tracking-wider text-slate-600 bg-white group-hover:bg-red-50 group-hover:text-red-900 px-1.5 py-0.5 rounded border border-slate-200/70 transition-colors shrink-0 shadow-2xs">
                      {brand.origin.split(" ")[0]}
                    </span>
                  </div>

                  {/* Badge de Categoría / División con color vivo */}
                  <div className="mb-1.5">
                    <span className={`inline-block text-[9px] sm:text-[10px] font-bold px-1.5 sm:px-2 py-0.5 rounded border ${getBrandBadge(brand.name)} truncate max-w-full`}>
                      {brand.category}
                    </span>
                  </div>

                  {/* Micro-especificación técnica */}
                  <p className="text-[10px] sm:text-xs text-slate-600 leading-relaxed line-clamp-2 mb-2 sm:mb-3">
                    {brand.highlight}
                  </p>
                </div>

                {/* Pie de Tarjeta con Garantía y Acción Rápida */}
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] sm:text-xs">
                  <span className="inline-flex items-center gap-1 font-semibold text-slate-500 truncate">
                    <Sparkles size={11} className="text-[#991b1b] shrink-0" />
                    <span className="truncate">Genuino</span>
                  </span>
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=Hola%20Dialka,%20deseo%20cotizar%20equipos%20o%20repuestos%20de%20la%20marca%20${encodeURIComponent(brand.name)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-500 group-hover:text-[#991b1b] transition-colors flex items-center gap-0.5 font-bold active:scale-95 shrink-0"
                    title={`Cotizar repuestos y equipos de ${brand.name}`}
                  >
                    <span>Cotizar</span>
                    <ExternalLink size={11} className="transition-transform group-hover:translate-x-0.5" />
                  </a>
                </div>
              </div>
            );
          })}

          {/* Tarjeta de Soporte Multimarca (completa la cuadrícula en un slot de alta relevancia) */}
          <div className="relative group bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white border border-slate-700/90 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 shadow-xs hover:shadow-xl hover:shadow-slate-900/30 transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="aspect-[16/9] w-full rounded-lg sm:rounded-xl bg-slate-800/80 border border-slate-700 flex flex-col items-center justify-center p-2 mb-2.5 sm:mb-3 text-center">
                <div className="w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 mb-1">
                  <Award size={16} />
                </div>
                <span className="text-[9px] font-bold uppercase tracking-widest text-red-300 truncate">
                  Soporte Multimarca
                </span>
              </div>

              <h3 className="font-extrabold text-white text-xs sm:text-base mb-0.5 leading-snug truncate">
                ¿Posee otra marca?
              </h3>
              <p className="text-[10px] sm:text-xs text-slate-300 leading-relaxed line-clamp-2 mb-2 sm:mb-3">
                Atendemos Toledo, Rice Lake, Cardinal y más con calibración trazable.
              </p>
            </div>

            <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[10px] sm:text-xs">
              <span className="text-[9px] sm:text-[10px] text-slate-400 font-medium truncate">Todas las marcas</span>
              <a
                href={`https://wa.me/${whatsappNumber}?text=Hola%20Dialka,%20requiero%20servicio%20técnico%20para%20un%20equipo%20de%20pesaje%20multimarca`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-0.5 text-[10px] sm:text-xs font-bold text-red-400 hover:text-red-300 transition-colors shrink-0"
              >
                <span>Consultar</span>
                <ArrowRight size={11} />
              </a>
            </div>
          </div>
        </div>

        {/* ── BARRA INFERIOR DE PROTOCOLO DE CALIDAD Y CERTIFICACIÓN ── */}
        <div className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center shrink-0">
              <Award size={20} className="text-[#991b1b]" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                Integración y Calibración según Normas COVENIN y Aprobación SENCAMER
              </p>
              <p className="text-[11px] sm:text-xs text-slate-500 leading-tight mt-0.5">
                Todos los instrumentos suministrados cuentan con verificación metrológica inicial y certificado de garantía oficial.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto justify-end">
            <Link
              href="/productos"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#991b1b] hover:text-[#7f1d1d] transition-colors px-3.5 py-2 rounded-xl hover:bg-red-50 border border-transparent hover:border-red-100"
            >
              <span>Ver Catálogo Completo</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

