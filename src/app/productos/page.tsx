import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { CONTACT } from "@/lib/data";
import { Package, ChevronRight, Phone, ArrowRight, Scale, Sparkles } from "lucide-react";
import { ProductsCatalog } from "@/components/ProductsCatalog";
import { AuthorizedBrands } from "@/components/AuthorizedBrands";

// Dynamic import para IndustryQuoteWizard (componente pesado)
const IndustryQuoteWizard = dynamic(() => import("@/components/wizard/IndustryQuoteWizard").then(mod => ({ default: mod.IndustryQuoteWizard })), {
  loading: () => (
    <div className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 text-center">
      <div className="animate-pulse flex flex-col items-center gap-4">
        <div className="w-12 h-12 bg-slate-700 rounded-full animate-spin border-4 border-slate-600 border-t-red-500" />
        <p className="text-slate-400 text-sm">Cargando configurador por sectores...</p>
      </div>
    </div>
  ),
});

export const metadata: Metadata = {
  title: "Catálogo de Productos",
  description:
    "Catálogo completo de equipos de pesaje: básculas agropecuarias, analíticas, comerciales, industriales y vehiculares. Venta y soporte técnico en Venezuela.",
};

export default function ProductosPage() {
  return (
    <>
      {/* ── HEADER DE PÁGINA CON FOTOGRAFÍA INDUSTRIAL ── */}
      <section className="relative bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200 py-8 sm:py-12 md:py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Columna Izquierda: Información */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 text-sm text-slate-500 mb-3 sm:mb-4">
                <Link href="/" className="hover:text-[#991b1b] transition-colors">
                  Inicio
                </Link>
                <ChevronRight size={14} />
                <span className="text-slate-900 font-semibold">Productos</span>
              </div>

              <div className="flex items-center gap-3.5 mb-3 sm:mb-4">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center shrink-0">
                  <Package size={22} className="text-[#991b1b]" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#991b1b]">
                    Catálogo Oficial de Equipos
                  </span>
                  <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                    Catálogo de Productos
                  </h1>
                </div>
              </div>

              <p className="text-slate-600 max-w-2xl text-sm sm:text-base lg:text-lg leading-relaxed mb-5 sm:mb-6">
                25 años equipando todos los sectores productivos de Venezuela: agropecuario, analítico de laboratorio, comercial minorista, plantas industriales y pesaje vehicular de carga pesada.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={`https://wa.me/${CONTACT.whatsapp}?text=Hola,%20deseo%20cotizar%20equipos%20del%20catálogo%20Dialka`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-[#991b1b] hover:bg-[#7f1d1d] text-white font-semibold px-5 py-3 rounded-xl shadow-xs hover:shadow-md transition-all text-sm min-h-[46px]"
                >
                  <Phone size={15} />
                  <span>Cotizar con un Asesor</span>
                </a>
                <Link
                  href="/sencamer"
                  className="inline-flex items-center gap-1.5 bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 font-semibold px-5 py-3 rounded-xl transition-all text-sm min-h-[46px]"
                >
                  <span>Ver Homologados SENCAMER</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Columna Derecha: Tarjeta Fotográfica de Línea Industrial */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl bg-white p-2.5 sm:p-3 border border-slate-200/90 shadow-xl shadow-slate-200/50 group">
                <div className="relative aspect-16/10 sm:aspect-4/3 w-full rounded-xl overflow-hidden bg-slate-100">
                  <Image
                    src="/images/productos/industrial.jpg"
                    alt="Línea Industrial de Básculas y Plataformas Dialka"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                  <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3">
                    <span className="inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-md text-[#991b1b] text-[10px] sm:text-[11px] font-bold px-2.5 sm:px-3 py-1 rounded-full shadow-xs">
                      <Scale size={13} className="text-[#991b1b]" />
                      <span>5 Líneas Especializadas</span>
                    </span>
                  </div>
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-3 sm:left-3 sm:right-3 text-white">
                    <p className="text-[10px] sm:text-[11px] font-bold text-red-200 uppercase tracking-wider">
                      Industria y Comercio
                    </p>
                    <h3 className="text-xs sm:text-base font-bold text-white">
                      Básculas de Piso, Riel y Plataformas
                    </h3>
                  </div>
                </div>

                <div className="mt-2.5 sm:mt-3 bg-slate-50 border border-slate-200/80 rounded-xl p-2.5 sm:p-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Sparkles size={16} className="text-[#991b1b]" />
                    <span className="text-xs font-bold text-slate-800">
                      Disponibilidad Inmediata
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-[#991b1b]">
                    Envíos Nacionales
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── COTIZADOR DINÁMICO POR RUBROS COMERCIALES ── */}
      <div id="cotizador" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 mb-8 sm:mb-12 relative z-20 scroll-mt-24">
        <IndustryQuoteWizard />
      </div>

      {/* ── CATÁLOGO INTERACTIVO CON BÚSQUEDA Y FILTROS EN TIEMPO REAL ── */}
      <ProductsCatalog
        whatsappNumber={CONTACT.whatsapp}
      />

      {/* ── MARCAS AUTORIZADAS Y ALIANZAS TECNOLÓGICAS ── */}
      <AuthorizedBrands whatsappNumber={CONTACT.whatsapp} />

      {/* ── CTA BOTTOM ── */}
      <section className="bg-slate-50 border-t border-slate-200 py-14">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#991b1b] block mb-2">
            Asesoría Especializada
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3 tracking-tight">
            ¿Requiere un Equipo con Especificaciones Especiales?
          </h2>
          <p className="text-slate-600 mb-8 text-sm sm:text-base leading-relaxed">
            Contamos con inventario continuo y fabricamos o adaptamos soluciones de pesaje a las medidas de su planta.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 bg-[#991b1b] hover:bg-[#7f1d1d] text-white font-semibold px-6 py-3.5 rounded-xl shadow-sm hover:shadow-md transition-all text-sm sm:text-base"
            >
              <Phone size={16} />
              <span>Contactar a un Asesor</span>
            </Link>
            <a
              href={`https://wa.me/${CONTACT.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-semibold px-6 py-3.5 rounded-xl shadow-2xs transition-all text-sm sm:text-base"
            >
              <span>Consultar Inventario en Vivo</span>
              <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
