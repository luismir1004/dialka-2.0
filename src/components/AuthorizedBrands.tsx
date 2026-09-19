"use client";

import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Award, Sparkles, Phone, ArrowRight, ExternalLink } from "lucide-react";
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
    <section className={`py-10 md:py-16 bg-slate-50/70 border-y border-slate-200 relative overflow-hidden ${className}`}>
      {/* Fondo sutil con trama técnica */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:20px_20px] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Encabezado formal y corporativo */}
        {showTitle && (
          <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200/80 px-3 py-1 rounded-full text-[#991b1b] text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-2.5 shadow-2xs">
              <ShieldCheck size={13} className="text-[#991b1b]" />
              <span>Garantía &amp; Distribución Autorizada</span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
              Nuestras Marcas Autorizadas y Alianzas
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
              Representación comercial, repuestos legítimos y servicio técnico homologado para los principales fabricantes mundiales de pesaje.
            </p>
          </div>
        )}

        {/* ── CUADRÍCULA COMPACTA DE MARCAS (2 COLUMNAS EN MÓVIL, 4 EN ESCRITORIO) ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 mb-5 sm:mb-6">
          {BRANDS.map((brand) => (
            <div
              key={brand.name}
              className="group bg-white border border-slate-200/90 hover:border-red-300 rounded-xl p-3.5 sm:p-5 shadow-2xs hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 flex flex-col justify-between"
            >
              <div>
                {/* Contenedor del Logo */}
                <div className="h-12 sm:h-14 w-full flex items-center justify-center mb-3 bg-slate-50/70 group-hover:bg-red-50/30 rounded-lg p-2 border border-slate-100 group-hover:border-red-100 transition-colors">
                  <div className="relative w-full h-full opacity-80 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <Image
                      src={brand.logo}
                      alt={`Logo oficial de ${brand.name}`}
                      width={140}
                      height={40}
                      className="max-h-10 w-auto object-contain"
                    />
                  </div>
                </div>

                {/* Encabezado: Nombre y Origen */}
                <div className="flex items-start justify-between gap-1.5 mb-1">
                  <h3 className="font-extrabold text-slate-900 text-xs sm:text-sm group-hover:text-[#991b1b] transition-colors leading-snug line-clamp-1">
                    {brand.name}
                  </h3>
                  <span className="text-[9px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200/60 shrink-0">
                    {brand.origin.split(" ")[0]}
                  </span>
                </div>

                {/* Categoría */}
                <p className="text-[10px] sm:text-[11px] font-semibold text-[#991b1b] mb-1.5 leading-tight line-clamp-1">
                  {brand.category}
                </p>

                {/* Micro-especificación técnica */}
                <p className="text-[10px] sm:text-xs text-slate-600 leading-snug line-clamp-2 mb-3">
                  {brand.highlight}
                </p>
              </div>

              {/* Footer de tarjeta */}
              <div className="pt-2 sm:pt-2.5 border-t border-slate-100 flex items-center justify-between text-[10px] sm:text-[11px]">
                <span className="inline-flex items-center gap-1 font-semibold text-slate-500">
                  <Sparkles size={11} className="text-[#991b1b] shrink-0" />
                  <span className="truncate">Genuino</span>
                </span>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=Hola%20Dialka,%20deseo%20cotizar%20equipos%20o%20repuestos%20de%20la%20marca%20${encodeURIComponent(brand.name)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-400 group-hover:text-[#991b1b] transition-colors p-1 flex items-center gap-1 font-bold"
                  title={`Cotizar repuestos de ${brand.name}`}
                >
                  <span className="hidden sm:inline">Cotizar</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          ))}

          {/* Tarjeta Banner de Soporte Multimarca (ocupa 2 columnas en móvil y escritorio) */}
          <div className="col-span-2 lg:col-span-4 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white rounded-xl p-4 sm:p-5 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-6 border border-slate-700">
            <div className="flex items-center gap-3 sm:gap-4 text-center sm:text-left">
              <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/30 flex items-center justify-center shrink-0">
                <Award size={20} className="text-red-400" />
              </div>
              <div>
                <div className="flex items-center justify-center sm:justify-start gap-2 mb-0.5">
                  <span className="text-[10px] font-bold text-red-400 uppercase tracking-widest bg-red-950/50 px-2 py-0.5 rounded border border-red-800/40">
                    Soporte Multimarca
                  </span>
                  <h3 className="font-extrabold text-white text-sm sm:text-base">
                    ¿Posee otra marca o modelo?
                  </h3>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-300 leading-relaxed max-w-2xl">
                  Diagnosticamos, reparamos y calibramos básculas de cualquier fabricante nacional o internacional con masas patrón certificadas y trazabilidad SENCAMER.
                </p>
              </div>
            </div>

            <div className="shrink-0 w-full sm:w-auto">
              <a
                href={`https://wa.me/${whatsappNumber}?text=Hola%20Dialka,%20tengo%20un%20equipo%20de%20pesaje%20de%20otra%20marca%20y%20requiero%20servicio%20técnico`}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#991b1b] hover:bg-[#b91c1c] text-white font-bold py-2 px-4 rounded-lg text-xs transition-colors shadow-xs"
              >
                <Phone size={13} />
                <span>Consultar Soporte Técnico</span>
              </a>
            </div>
          </div>
        </div>

        {/* ── BARRA INFERIOR DE PROTOCOLO DE CALIDAD ── */}
        <div className="bg-white border border-slate-200/90 rounded-xl p-3.5 sm:p-4 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-2xs">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-red-50 border border-red-100 flex items-center justify-center shrink-0">
              <Award size={18} className="text-[#991b1b]" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                Integración y Calibración según Normas COVENIN y SENCAMER
              </p>
              <p className="text-[10px] sm:text-xs text-slate-500 leading-tight">
                Todos los equipos suministrados cuentan con verificación metrológica inicial y certificado de garantía.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto justify-end">
            <Link
              href="/productos"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#991b1b] hover:text-[#7f1d1d] transition-colors px-3 py-1.5 rounded-lg hover:bg-red-50"
            >
              <span>Ver Catálogo</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
