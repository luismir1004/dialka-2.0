import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CONTACT } from "@/lib/data";
import { Wrench, CheckCircle2, ChevronRight, Phone, ArrowRight, ShieldCheck, Scale, Sparkles } from "lucide-react";
import { ServiciosShowcase } from "@/components/ServiciosShowcase";
import { InteractiveServicesList } from "@/components/InteractiveServicesList";

export const metadata: Metadata = {
  title: "Servicio Técnico | Balanzas y Servicios Dialka",
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
                <span className="text-slate-900 font-semibold">Servicio Técnico</span>
              </div>

              <div className="flex items-center gap-3.5 mb-3 sm:mb-4">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center shrink-0">
                  <Wrench size={22} className="text-[#991b1b]" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#991b1b]">
                    Metrología y Soporte en Venezuela
                  </span>
                  <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                    Servicio Técnico Especializado
                  </h1>
                </div>
              </div>

              <p className="text-slate-600 max-w-2xl text-sm sm:text-base lg:text-lg leading-relaxed mb-5 sm:mb-6">
                Más de 25 años garantizando la confiabilidad y exactitud de los sistemas de pesaje en Venezuela. Nuestro equipo técnico aplica las más estrictas normas metrológicas con instrumental de alta precisión y masas patrón certificadas.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={`https://wa.me/${CONTACT.whatsapp}?text=Hola,%20deseo%20solicitar%20un%20servicio%20técnico%20o%20calibración`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-[#991b1b] hover:bg-[#7f1d1d] text-white font-semibold px-5 py-3 rounded-xl shadow-xs hover:shadow-md transition-all text-sm min-h-[46px]"
                >
                  <Phone size={15} />
                  <span>Solicitar Servicio Técnico</span>
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

            {/* Columna Derecha: Tarjeta Fotográfica de Calibración */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl bg-white p-2.5 sm:p-3 border border-slate-200/90 shadow-xl shadow-slate-200/50 group">
                <div className="relative aspect-16/10 sm:aspect-4/3 w-full rounded-xl overflow-hidden bg-slate-100">
                  <Image
                    src="/images/servicios/calibracion-masas.jpg"
                    alt="Laboratorio de Calibración Dialka con Masas Patrón Clase F1"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3">
                    <span className="inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-md text-[#991b1b] text-[10px] sm:text-[11px] font-bold px-2.5 sm:px-3 py-1 rounded-full shadow-xs">
                      <Scale size={13} className="text-[#991b1b]" />
                      <span>Laboratorio Metrológico</span>
                    </span>
                  </div>
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-3 sm:left-3 sm:right-3 text-white">
                    <p className="text-[10px] sm:text-[11px] font-bold text-red-200 uppercase tracking-wider">
                      Patrones Clase F1 y M1
                    </p>
                    <h3 className="text-xs sm:text-base font-bold text-white">
                      Calibración y Ajuste de Balanzas de Precisión
                    </h3>
                  </div>
                </div>

                <div className="mt-2.5 sm:mt-3 bg-slate-50 border border-slate-200/80 rounded-xl p-2.5 sm:p-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Sparkles size={16} className="text-[#991b1b]" />
                    <span className="text-xs font-bold text-slate-800">
                      Trazabilidad Nacional COVENIN
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

      {/* ── FICHAS DE SERVICIOS TÉCNICOS INTERACTIVOS ── */}
      <section className="bg-white py-10 md:py-14">
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
