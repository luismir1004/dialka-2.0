import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT } from "@/lib/data";
import { Wrench, Phone, ArrowRight, ShieldCheck, Sparkles, CheckCircle2, Truck } from "lucide-react";
import { ServiciosShowcase } from "@/components/ServiciosShowcase";
import { InteractiveServicesList } from "@/components/InteractiveServicesList";
import { DynamicPageHero } from "@/components/DynamicPageHero";
import { ServiceHeroMockup } from "@/components/ServiceHeroMockup";
import { ServiceProtocolFlow } from "@/components/ServiceProtocolFlow";

export const metadata: Metadata = {
  title: "Servicio Técnico y Calibración SENCAMER",
  description:
    "Calibración con masas patrón trazables, mantenimiento preventivo y correctivo de equipos de pesaje. Normas COVENIN y SENCAMER. Atención en Venezuela.",
};

const HIGHLIGHTS = [
  "Masas patrón certificadas y trazables a estándares nacionales e internacionales",
  "Cumplimiento riguroso de normas técnicas venezolanas COVENIN y SENCAMER",
  "Técnicos e ingenieros especializados con base en Caracas y Maracay",
  "Atención directa en planta industrial y en nuestros talleres especializados",
  "Contratos de mantenimiento preventivo periódico para líneas de producción",
  "Cobertura y disponibilidad de servicio técnico en todo el territorio nacional",
];

export default function ServiciosPage() {
  return (
    <>
      {/* ── HEADER INMERSIVO INDUSTRIAL DINÁMICO CON MOCKUP DE SERVICIO TÉCNICO ── */}
      <DynamicPageHero
        badgeText="Metrología & Soporte Especializado"
        title="Servicio Técnico & Calibración"
        titleHighlight="Trazable SENCAMER"
        description="Más de 25 años garantizando la exactitud de los sistemas de pesaje en Venezuela. Calibración in situ con camión patrón propio, mantenimiento preventivo para líneas continuas y servicio de emergencia en planta."
        icon={Wrench}
        breadcrumbCurrent="Servicio Técnico"
        chips={[
          { label: "Masas Patrón Clase M1 y F1", icon: ShieldCheck },
          { label: "Camión Calibrador de 40T a 100T", icon: Truck },
          { label: "Atención en Caracas y Maracay", icon: Sparkles },
          { label: "Normas COVENIN e Internacionales", icon: CheckCircle2 },
        ]}
        primaryCtaText="Solicitar Cuadrilla Técnica"
        primaryCtaWhatsappMessage="Hola Dialka, requiero cotización de servicio técnico / calibración metrológica para mi planta"
        secondaryCtaText="Ver Fichas de Servicios"
        secondaryCtaHref="#fichas-servicios"
        rightContent={<ServiceHeroMockup whatsappNumber={CONTACT.whatsapp} />}
      />

      {/* ── PROTOCOLO DE INTERVENCIÓN METROLÓGICA ── */}
      <ServiceProtocolFlow />

      {/* ── FICHAS DE SERVICIOS TÉCNICOS INTERACTIVOS ── */}
      <section id="fichas-servicios" className="bg-white py-10 md:py-14 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#991b1b] block mb-1.5">
              Ingeniería y Metrología en Campo
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-2 sm:mb-3">
              Fichas de Servicios Técnicos Especializados
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm md:text-base">
              Seleccione la solución técnica requerida para su planta y solicite la movilización inmediata de nuestra cuadrilla de técnicos e ingenieros.
            </p>
          </div>

          <div className="mb-16">
            <InteractiveServicesList whatsappNumber={CONTACT.whatsapp} />
          </div>

          {/* ── SHOWCASE FOTOGRÁFICO DE OPERACIONES TÉCNICAS CON LIGHTBOX ── */}
          <ServiciosShowcase whatsappNumber={CONTACT.whatsapp} />

          {/* ── HIGHLIGHTS / GARANTÍAS DE CALIDAD ── */}
          <div className="bg-slate-50/80 rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-xs">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-red-100/80 flex items-center justify-center">
                <ShieldCheck size={20} className="text-[#991b1b]" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                ¿Por qué elegir el servicio técnico de Dialka?
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
              {HIGHLIGHTS.map((item) => (
                <div
                  key={item}
                  className="bg-white border border-slate-200/80 rounded-xl p-4 flex items-start gap-3.5 shadow-2xs"
                >
                  <CheckCircle2
                    size={18}
                    className="text-[#991b1b] mt-0.5 shrink-0"
                  />
                  <span className="text-slate-700 text-sm font-medium leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA DE CONTACTO TÉCNICO ── */}
      <section className="bg-slate-100/80 border-t border-slate-200 py-14">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#991b1b] block mb-2">
            Respuesta Oportuna
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3 tracking-tight">
            Solicite una Visita Técnica en su Planta
          </h2>
          <p className="text-slate-600 mb-8 text-sm sm:text-base leading-relaxed">
            Coordine una inspección técnica preventiva o correctiva con nuestros especialistas. Cobertura en toda Venezuela.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 bg-[#991b1b] hover:bg-[#7f1d1d] text-white font-semibold px-6 py-3.5 rounded-xl shadow-sm hover:shadow-md transition-all text-sm sm:text-base"
            >
              <Phone size={16} />
              <span>Solicitar Visita Técnica</span>
            </Link>
            <a
              href={`https://wa.me/${CONTACT.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-semibold px-6 py-3.5 rounded-xl shadow-2xs transition-all text-sm sm:text-base"
            >
              <span>Consultar por WhatsApp</span>
              <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
