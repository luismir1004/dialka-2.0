import type { Metadata } from "next";
import Link from "next/link";
import { FIELD_PROJECTS, CONTACT } from "@/lib/data";
import { HardHat, ChevronRight, Phone, ArrowRight, ShieldCheck } from "lucide-react";
import { ProjectsGallery } from "@/components/ProjectsGallery";

export const metadata: Metadata = {
  title: "Proyectos y Obras en Campo | Balanzas y Servicios Dialka",
  description:
    "Galería fotográfica de proyectos ejecutados en Venezuela: calibración con camión patrón en silos, obra civil y montaje de básculas camioneras de 18m, básculas ganaderas y plantas industriales.",
};

export default function ProyectosPage() {
  return (
    <>
      {/* ── HEADER DE PÁGINA ── */}
      <section className="bg-gradient-to-b from-slate-50 to-white border-b border-slate-200 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
            <Link href="/" className="hover:text-[#991b1b] transition-colors">
              Inicio
            </Link>
            <ChevronRight size={14} />
            <span className="text-slate-900 font-semibold">Proyectos en Campo</span>
          </div>

          <div className="flex items-center gap-3.5 mb-4">
            <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center">
              <HardHat size={22} className="text-[#991b1b]" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#991b1b]">
                Trayectoria Real en Venezuela
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Proyectos y Obras en Campo
              </h1>
            </div>
          </div>

          <p className="text-slate-600 max-w-3xl text-base sm:text-lg leading-relaxed">
            Más de dos décadas ejecutando obras civiles especializadas, montaje de plataformas de pesaje pesado y operativos de calibración metrológica con camión patrón en los principales estados agroindustriales de Venezuela.
          </p>
        </div>
      </section>

      {/* ── GALERÍA DE PROYECTOS CON FILTROS ── */}
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
