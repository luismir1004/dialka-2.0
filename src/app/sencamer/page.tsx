import type { Metadata } from "next";
import Link from "next/link";
import { SENCAMER_MODELS, CONTACT } from "@/lib/data";
import { ShieldCheck, Info, Phone, ArrowRight, CheckCircle2, Scale, FileCheck2 } from "lucide-react";
import { SencamerCatalog } from "@/components/SencamerCatalog";
import { SencamerMockupCard } from "@/components/SencamerMockupCard";
import { DynamicPageHero } from "@/components/DynamicPageHero";

export const metadata: Metadata = {
  title: "Equipos con Aprobación SENCAMER",
  description:
    "Balanzas y básculas con Aprobación de Modelo SENCAMER para uso comercial legal en Venezuela. Modelos certificados desde 30 kg hasta 6.000 kg.",
};

export default function SencamerPage() {
  return (
    <>
      {/* ── HEADER INMERSIVO INDUSTRIAL DINÁMICO ── */}
      <DynamicPageHero
        badgeText="Metrología Legal & Fiscalización"
        title="Equipos con Aprobación Oficial"
        titleHighlight="SENCAMER Venezuela"
        description="Instrumentos de pesaje autorizados por el Servicio Autónomo Nacional de Normalización, Calidad, Metrología y Reglamentos Técnicos (SENCAMER) para transacciones comerciales legales y auditorías SUNDDE desde 30 kg hasta 6.000 kg."
        icon={ShieldCheck}
        breadcrumbCurrent="Aprobación SENCAMER"
        chips={[
          { label: "Placa y Precinto Legal", icon: ShieldCheck },
          { label: "Modelos de 30 kg a 6.000 kg", icon: Scale },
          { label: "Aptas para Fiscalización SUNDDE", icon: CheckCircle2 },
          { label: "Certificado Oficial Entregado", icon: FileCheck2 },
        ]}
        primaryCtaText="Cotizar Balanza SENCAMER"
        primaryCtaWhatsappMessage="Hola Dialka, requiero cotización de una balanza certificada con aprobación de modelo SENCAMER"
        secondaryCtaText="Ver Modelos Homologados"
        secondaryCtaHref="#modelos-sencamer"
        statNumber="100%"
        statLabel="Conformidad Jurídica"
        statSubtext="Evite multas y sanciones en auditorías de comercio y distribución"
      />

      {/* ── MARCO LEGAL Y MOCKUP DE BALANZA CERTIFICADA ── */}
      <div className="bg-white pt-10 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            {/* Lado Izquierdo: Marco Legal */}
            <div className="lg:col-span-7 bg-red-50/80 border border-red-200/90 rounded-2xl p-7 sm:p-8 flex flex-col justify-between shadow-2xs">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center shrink-0">
                    <Info size={20} className="text-[#991b1b]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#991b1b]">
                      Normativa Nacional Vigente
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 leading-tight">
                      Marco Metrológico Obligatorio SENCAMER
                    </h3>
                  </div>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed mt-3">
                  La <strong className="text-slate-900">Aprobación de Modelo SENCAMER</strong> es el requisito legal indispensable en Venezuela que certifica que un instrumento de medición cumple con las tolerancias técnicas para su uso en transacciones comerciales que involucren precio por peso. Los equipos suministrados por Dialka cuentan con placa de identificación, precinto de inviolabilidad y homologación oficial.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-red-200/80 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-semibold text-slate-700">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck size={14} className="text-[#991b1b]" />
                  Precinto Oficial
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck size={14} className="text-[#991b1b]" />
                  Placa Serial
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck size={14} className="text-[#991b1b]" />
                  Tolerancia Legal
                </span>
              </div>
            </div>

            {/* Lado Derecho: Mockup Fotográfico Interactivo con Lightbox */}
            <SencamerMockupCard whatsappNumber={CONTACT.whatsapp} />
          </div>
        </div>
      </div>

      {/* ── TABLA INTERACTIVA CON FILTROS Y BÚSQUEDA EN TIEMPO REAL ── */}
      <SencamerCatalog
        models={SENCAMER_MODELS}
        whatsappNumber={CONTACT.whatsapp}
      />

      {/* ── CTA ASESORÍA LEGAL / CERTIFICACIÓN ── */}
      <section className="bg-slate-50 border-t border-slate-200 py-14">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#991b1b] block mb-2">
            Gestión y Trámites
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3 tracking-tight">
            ¿Necesita Gestionar la Aprobación de Modelo de su Equipo?
          </h2>
          <p className="text-slate-600 mb-8 text-sm sm:text-base leading-relaxed">
            Dialka asesora técnica y documentalmente a su empresa para tramitar o renovar certificaciones de instrumentos de pesaje ante SENCAMER.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 bg-[#991b1b] hover:bg-[#7f1d1d] text-white font-semibold px-6 py-3.5 rounded-xl shadow-sm hover:shadow-md transition-all text-sm sm:text-base"
            >
              <Phone size={16} />
              <span>Consultar por Certificación</span>
            </Link>
            <a
              href={`https://wa.me/${CONTACT.whatsapp}?text=Hola,%20solicito%20asesoría%20para%20certificación%20SENCAMER`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-semibold px-6 py-3.5 rounded-xl shadow-2xs transition-all text-sm sm:text-base"
            >
              <span>Hablar con un Especialista</span>
              <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
