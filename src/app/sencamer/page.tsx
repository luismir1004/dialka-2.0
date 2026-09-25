import type { Metadata } from "next";
import Link from "next/link";
import { SENCAMER_MODELS, CONTACT } from "@/lib/data";
import { ShieldCheck, Phone, ArrowRight, CheckCircle2, Scale, FileCheck2 } from "lucide-react";
import { SencamerCatalog } from "@/components/SencamerCatalog";
import { DynamicPageHero } from "@/components/DynamicPageHero";
import { SencamerHeroMockup } from "@/components/SencamerHeroMockup";
import { SencamerLegalRouteFlow } from "@/components/SencamerLegalRouteFlow";

export const metadata: Metadata = {
  title: "Equipos con Aprobación SENCAMER",
  description:
    "Balanzas y básculas con Aprobación de Modelo SENCAMER para uso comercial legal en Venezuela. Modelos certificados desde 30 kg hasta 6.000 kg.",
};

export default function SencamerPage() {
  return (
    <>
      {/* ── HEADER INMERSIVO INDUSTRIAL DINÁMICO CON MOCKUP DE CERTIFICACIÓN SENCAMER ── */}
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
        rightContent={<SencamerHeroMockup whatsappNumber={CONTACT.whatsapp} />}
      />

      {/* ── RUTA LEGAL DE HOMOLOGACIÓN METROLÓGICA ── */}
      <SencamerLegalRouteFlow />

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
