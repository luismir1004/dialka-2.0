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
    <section className={`py-14 md:py-20 bg-slate-50/70 border-y border-slate-200 relative overflow-hidden ${className}`}>
      {/* Fondo sutil con trama técnica */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:20px_20px] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Encabezado formal y corporativo */}
        {showTitle && (
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200/80 px-3.5 py-1.5 rounded-full text-[#991b1b] text-xs font-bold uppercase tracking-wider mb-3.5 shadow-2xs">
              <ShieldCheck size={14} className="text-[#991b1b]" />
              <span>Garantía &amp; Distribución Autorizada</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-3.5">
              Nuestras Marcas Autorizadas y Alianzas Tecnológicas
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Representación comercial, suministro de repuestos legítimos y servicio técnico metrológico homologado para los principales fabricantes mundiales de sistemas de pesaje.
            </p>
          </div>
        )}

        {/* ── CUADRÍCULA DE TARJETAS MINIMALISTAS MODERNAS ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {BRANDS.map((brand) => (
            <div
              key={brand.name}
              className="group bg-white border border-slate-200/90 hover:border-red-300 rounded-xl p-6 shadow-2xs hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                {/* Contenedor del Logo con transición de escala de grises a color y elevación */}
                <div className="h-16 w-full flex items-center justify-center mb-5 bg-slate-50/70 group-hover:bg-red-50/30 rounded-lg p-2.5 border border-slate-100 group-hover:border-red-100 transition-colors">
                  <div className="relative w-full h-full opacity-70 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <Image
                      src={brand.logo}
                      alt={`Logo oficial de ${brand.name}`}
                      width={180}
                      height={50}
                      className="max-h-12 w-auto object-contain"
                    />
                  </div>
                </div>

                {/* Encabezado de la marca: Nombre y Origen */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="font-extrabold text-slate-900 text-base group-hover:text-[#991b1b] transition-colors">
                    {brand.name}
                  </h3>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-slate-200/60 shrink-0">
                    {brand.origin}
                  </span>
                </div>

                {/* Categoría de Solución */}
                <p className="text-xs font-semibold text-[#991b1b] mb-2 leading-tight">
                  {brand.category}
                </p>

                {/* Micro-contenido / Especificación técnica */}
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {brand.highlight}
                </p>
              </div>

              {/* Footer de la tarjeta con badge de autenticidad y enlace de cotización */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-500">
                  <Sparkles size={12} className="text-[#991b1b]" />
                  <span>Repuestos 100% Genuinos</span>
                </span>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=Hola%20Dialka,%20deseo%20cotizar%20equipos%20o%20repuestos%20de%20la%20marca%20${encodeURIComponent(brand.name)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-400 group-hover:text-[#991b1b] transition-colors p-1"
                  title={`Cotizar repuestos de ${brand.name}`}
                >
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          ))}

          {/* Tarjeta adicional de Soporte Multimarca */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-xl p-6 shadow-2xs hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between border border-slate-700">
            <div>
              <div className="h-16 w-full flex items-center justify-center mb-5 bg-white/5 rounded-lg p-2.5 border border-white/10">
                <div className="flex items-center gap-2 text-red-400 font-extrabold text-sm tracking-wider">
                  <Award size={20} className="text-red-400" />
                  <span>SERVICIO MULTIMARCA</span>
                </div>
              </div>

              <h3 className="font-extrabold text-white text-base mb-1.5">
                ¿Posee otra marca o modelo?
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Nuestros ingenieros diagnostican, reparan y calibran balanzas mecánicas y electrónicas de cualquier fabricante con masas patrón certificadas.
              </p>
            </div>

            <div className="pt-3 border-t border-white/10">
              <a
                href={`https://wa.me/${whatsappNumber}?text=Hola%20Dialka,%20tengo%20un%20equipo%20de%20pesaje%20de%20otra%20marca%20y%20requiero%20servicio%20técnico`}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#991b1b] hover:bg-[#b91c1c] text-white font-bold py-2 px-3 rounded-lg text-xs transition-colors shadow-xs"
              >
                <Phone size={13} />
                <span>Consultar Soporte Técnico</span>
              </a>
            </div>
          </div>
        </div>

        {/* ── BARRA INFERIOR DE PROTOCOLO DE CALIDAD ── */}
        <div className="bg-white border border-slate-200/90 rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xs">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-red-50 border border-red-100 flex items-center justify-center shrink-0">
              <Award size={20} className="text-[#991b1b]" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-slate-900">
                Integración y Calibración según Normas COVENIN y SENCAMER
              </p>
              <p className="text-[11px] sm:text-xs text-slate-500">
                Todos los equipos suministrados cuentan con verificación metrológica inicial y certificado de garantía.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <Link
              href="/productos"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#991b1b] hover:text-[#7f1d1d] transition-colors px-3 py-2 rounded-lg hover:bg-red-50"
            >
              <span>Ver Catálogo de Equipos</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
