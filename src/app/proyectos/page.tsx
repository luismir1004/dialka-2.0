import type { Metadata } from "next";
import Link from "next/link";
import { FIELD_PROJECTS, FIELD_VIDEOS, CONTACT } from "@/lib/data";
import {
  HardHat,
  Phone,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Award,
  Truck,
  Building2,
  CheckCircle,
} from "lucide-react";
import { ProjectsGallery } from "@/components/ProjectsGallery";
import { ProjectsVideoGallery } from "@/components/ProjectsVideoGallery";
import { DynamicPageHero } from "@/components/DynamicPageHero";

export const metadata: Metadata = {
  title: "Proyectos y Obras en Campo",
  description:
    "Galería fotográfica y videos reales de proyectos ejecutados en Venezuela: calibración con camión patrón en silos, obra civil y montaje de básculas camioneras de 80TN, salas limpias farmacéuticas y pesaje pecuario.",
};

const STATS = [
  {
    icon: Award,
    value: "+25 Años",
    label: "Trayectoria en Campo",
    sub: "Operando en Venezuela",
  },
  {
    icon: Truck,
    value: "+180",
    label: "Básculas Instaladas",
    sub: "Camioneras y pesadas",
  },
  {
    icon: Building2,
    value: "14 Estados",
    label: "Cobertura Nacional",
    sub: "Sedes Caracas y Maracay",
  },
  {
    icon: CheckCircle,
    value: "100%",
    label: "Trazable SENCAMER",
    sub: "Patrones certificados",
  },
];

export default function ProyectosPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Proyectos y Obras en Campo - Balanzas Dialka",
    description:
      "Registro de obras civiles, montaje estructural de básculas camioneras y calibración metrológica en Venezuela.",
    itemListElement: FIELD_PROJECTS.map((proj, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      item: {
        "@type": "CreativeWork",
        name: proj.title,
        description: proj.description,
        locationCreated: {
          "@type": "Place",
          name: proj.location,
        },
      },
    })),
  };

  return (
    <>
      {/* ── JSON-LD SCHEMA STRUCTURED DATA ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HEADER INMERSIVO INDUSTRIAL DINÁMICO ── */}
      <DynamicPageHero
        badgeText="Ingeniería & Obras Civiles en Campo"
        title="Proyectos y Obras en Campo"
        titleHighlight="a Nivel Nacional"
        description="Más de dos décadas ejecutando obras civiles especializadas, montaje de plataformas de pesaje de 80TN y operativos de calibración metrológica con camión patrón en los principales polos industriales y agropecuarios de Venezuela."
        icon={HardHat}
        breadcrumbCurrent="Proyectos en Campo"
        chips={[
          { label: "Montajes de 80TN", icon: Truck },
          { label: "Obras Civiles Especializadas", icon: Building2 },
          { label: "Videos Reales en Silos y Minas", icon: Sparkles },
          { label: "Certificación SENCAMER In Situ", icon: ShieldCheck },
        ]}
        primaryCtaText="Solicitar Visita Técnica"
        primaryCtaWhatsappMessage="Hola Dialka, solicito asesoría técnica y visita en campo para un proyecto de pesaje industrial"
        secondaryCtaText="Ver Registro en Video"
        secondaryCtaHref="#videos-campo"
        statNumber="+180"
        statLabel="Básculas Camioneras"
        statSubtext="Instaladas y calibradas en los 14 estados productivos del país"
      />

      {/* ── BARRA DE MÉTRICAS Y CREDIBILIDAD B2B ── */}
      <section className="bg-slate-900 text-white border-b border-slate-800 py-8 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {STATS.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={i}
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-800/40 border border-slate-700/60"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-red-950/80 border border-red-500/30 flex items-center justify-center shrink-0">
                    <Icon className="text-red-400 w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <div className="text-lg sm:text-2xl font-black text-white leading-tight">
                      {stat.value}
                    </div>
                    <div className="text-xs font-bold text-slate-300">
                      {stat.label}
                    </div>
                    <div className="text-[11px] text-slate-400">
                      {stat.sub}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── REGISTRO AUDIOVISUAL: VIDEOS DE OPERATIVOS EN CAMPO ── */}
      <ProjectsVideoGallery videos={FIELD_VIDEOS} />

      {/* ── GALERÍA DE PROYECTOS CON FILTROS AVANZADOS ── */}
      <ProjectsGallery
        projects={FIELD_PROJECTS}
        whatsappNumber={CONTACT.whatsapp}
        showFilters={true}
        isFeatured={false}
      />

      {/* ── CTA INGENIERÍA EN CAMPO ── */}
      <section className="bg-slate-50 border-t border-slate-200 py-14">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#991b1b] block mb-2">
            Inspección y Factibilidad
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3 tracking-tight">
            ¿Planea la Instalación de una Báscula en su Planta o Finca?
          </h2>
          <p className="text-slate-600 mb-8 text-sm sm:text-base leading-relaxed">
            Nuestro equipo de ingenieros realiza la visita de campo para evaluar la mecánica de suelos, obras civiles requeridas y recomendar la dimensión adecuada para su flujo de carga.
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
              href={`https://wa.me/${CONTACT.whatsapp}?text=Hola,%20solicito%20asesoría%20para%20un%20proyecto%20de%20báscula%20en%20campo`}
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
