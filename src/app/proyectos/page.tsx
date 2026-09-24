import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FIELD_PROJECTS, FIELD_VIDEOS, CONTACT } from "@/lib/data";
import {
  HardHat,
  ChevronRight,
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

export const metadata: Metadata = {
  title: "Proyectos y Obras en Campo | Balanzas y Servicios Dialka",
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
                <span className="text-slate-900 font-semibold">Proyectos en Campo</span>
              </div>

              <div className="flex items-center gap-3.5 mb-3 sm:mb-4">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center shrink-0">
                  <HardHat size={22} className="text-[#991b1b]" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#991b1b]">
                    Trayectoria Real en Venezuela
                  </span>
                  <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                    Proyectos y Obras en Campo
                  </h1>
                </div>
              </div>

              <p className="text-slate-600 max-w-2xl text-sm sm:text-base lg:text-lg leading-relaxed mb-5 sm:mb-6">
                Más de dos décadas ejecutando obras civiles especializadas, montaje de plataformas de pesaje pesado y operativos de calibración metrológica con camión patrón en los principales polos industriales y agropecuarios del país.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={`https://wa.me/${CONTACT.whatsapp}?text=Hola,%20solicito%20asesoría%20técnica%20para%20un%20proyecto%20de%20pesaje%20en%20campo`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-[#991b1b] hover:bg-[#7f1d1d] text-white font-semibold px-5 py-3 rounded-xl shadow-xs hover:shadow-md transition-all text-sm min-h-[46px]"
                >
                  <Phone size={15} />
                  <span>Solicitar Visita Técnica</span>
                </a>
                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-1.5 bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 font-semibold px-5 py-3 rounded-xl transition-all text-sm min-h-[46px]"
                >
                  <span>Ver Sedes y Talleres</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Columna Derecha: Tarjeta Fotográfica de Obras en Campo */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl bg-white p-2.5 sm:p-3 border border-slate-200/90 shadow-xl shadow-slate-200/50 group">
                <div className="relative aspect-16/10 sm:aspect-4/3 w-full rounded-xl overflow-hidden bg-slate-100">
                  <Image
                    src="/images/proyectos/bascula-camionera-sobresuelo-2.jpg"
                    alt="Báscula Camionera Sobresuelo con Técnicos Dialka en Campo"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3">
                    <span className="inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-md text-[#991b1b] text-[10px] sm:text-[11px] font-bold px-2.5 sm:px-3 py-1 rounded-full shadow-xs">
                      <ShieldCheck size={13} className="text-[#991b1b]" />
                      <span>Ingeniería Estructural</span>
                    </span>
                  </div>
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-3 sm:left-3 sm:right-3 text-white">
                    <p className="text-[10px] sm:text-[11px] font-bold text-red-200 uppercase tracking-wider">
                      Obras Civiles y Montaje
                    </p>
                    <h3 className="text-xs sm:text-base font-bold text-white">
                      Básculas Camioneras e Industriales
                    </h3>
                  </div>
                </div>

                <div className="mt-2.5 sm:mt-3 bg-slate-50 border border-slate-200/80 rounded-xl p-2.5 sm:p-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Sparkles size={16} className="text-[#991b1b]" />
                    <span className="text-xs font-bold text-slate-800">
                      Cobertura Nacional en Sitio
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-[#991b1b]">
                    Garantía Dialka
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
