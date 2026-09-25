import type { Metadata } from "next";
import Link from "next/link";
import dynamic from "next/dynamic";
import { CONTACT } from "@/lib/data";
import { Package, Phone, ArrowRight, ShieldCheck, Sparkles, CheckCircle2, Truck } from "lucide-react";
import { ProductsCatalog } from "@/components/ProductsCatalog";
import { AuthorizedBrands } from "@/components/AuthorizedBrands";
import { DynamicPageHero } from "@/components/DynamicPageHero";

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
      {/* ── HEADER INMERSIVO INDUSTRIAL DINÁMICO ── */}
      <DynamicPageHero
        badgeText="Catálogo Oficial de Equipos"
        title="Sistemas de Pesaje & Equipos"
        titleHighlight="Industriales en Venezuela"
        description="25 años equipando todos los sectores productivos del país: agropecuario, laboratorios analíticos, retail comercial, plantas de procesamiento y pesaje vehicular para gandolas de 40T a 100T."
        icon={Package}
        breadcrumbCurrent="Catálogo de Productos"
        chips={[
          { label: "Disponibilidad Inmediata", icon: Sparkles },
          { label: "Homologación SENCAMER", icon: ShieldCheck },
          { label: "Garantía Oficial de Fábrica", icon: CheckCircle2 },
          { label: "Despacho a Nivel Nacional", icon: Truck },
        ]}
        primaryCtaText="Cotizar con Asesor Técnico"
        primaryCtaWhatsappMessage="Hola Dialka, deseo solicitar cotización técnica de equipos del catálogo oficial"
        secondaryCtaText="Configurador por Sectores"
        secondaryCtaHref="#cotizador"
        statNumber="53+"
        statLabel="Equipos Homologados"
        statSubtext="Líneas comerciales, industriales, agropecuarias y analíticas"
      />

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
