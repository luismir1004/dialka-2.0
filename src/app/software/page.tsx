import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SOFTWARE_SYSTEMS, CONTACT } from "@/lib/data";
import { Monitor, ChevronRight, Phone, ArrowRight, Code2, Cpu, CheckCircle2, Layers, Sparkles } from "lucide-react";
import { SoftwareScreenshotsShowcase } from "@/components/SoftwareScreenshotsShowcase";
import { SoftwareBannerLightbox } from "@/components/SoftwareBannerLightbox";

export const metadata: Metadata = {
  title: "Software de Pesaje Industrial",
  description:
    "Sistemas de software propios para pesaje: control de camiones, bobinas, etiquetas, silos, tanques y tableros PLC a medida. Desarrollo venezolano.",
};

const TECH_FEATURES = [
  {
    title: "Conectividad Multimarca",
    desc: "Comunicación RS-232, RS-485, Ethernet y WiFi con los principales indicadores del mercado.",
    icon: Cpu,
  },
  {
    title: "Base de Datos Local y Servidor",
    desc: "Almacenamiento seguro, generación de reportes gerenciales, exportación a Excel y tickets personalizables.",
    icon: Layers,
  },
  {
    title: "Automatización Industrial",
    desc: "Integración directa con semáforos, barreras de acceso, sensores de presencia y tableros PLC.",
    icon: Code2,
  },
  {
    title: "Soporte y Actualizaciones",
    desc: "Desarrollo 100% propio venezolano, lo que garantiza mantenimiento continuo y adaptaciones a su flujo de trabajo.",
    icon: CheckCircle2,
  },
];

export default function SoftwarePage() {
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
                <span className="text-slate-900 font-semibold">Software</span>
              </div>

              <div className="flex items-center gap-3.5 mb-3 sm:mb-4">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center shrink-0">
                  <Monitor size={22} className="text-[#991b1b]" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#991b1b]">
                    Desarrollo Propio Dialka en Venezuela
                  </span>
                  <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                    Software de Pesaje Industrial
                  </h1>
                </div>
              </div>

              <p className="text-slate-600 max-w-2xl text-sm sm:text-base lg:text-lg leading-relaxed mb-5 sm:mb-6">
                Dialka desarrolla sus propios sistemas de software para el control, captura automática de datos y trazabilidad en operaciones industriales de pesaje. Más de 307 desarrollos implementados con éxito en silos, plantas de alimentos y almacenes de Venezuela.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={`https://wa.me/${CONTACT.whatsapp}?text=Hola,%20solicito%20asesoría%20sobre%20el%20Software%20de%20Pesaje%20Dialka`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-[#991b1b] hover:bg-[#7f1d1d] text-white font-semibold px-5 py-3 rounded-xl shadow-xs hover:shadow-md transition-all text-sm min-h-[46px]"
                >
                  <Phone size={15} />
                  <span>Consultar con un Ingeniero</span>
                </a>
                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-1.5 bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 font-semibold px-5 py-3 rounded-xl transition-all text-sm min-h-[46px]"
                >
                  <span>Soporte y Contacto</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Columna Derecha: Tarjeta Fotográfica de Interfaz de Software */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl bg-white p-2.5 sm:p-3 border border-slate-200/90 shadow-xl shadow-slate-200/50 group">
                <div className="relative aspect-16/10 sm:aspect-4/3 w-full rounded-xl overflow-hidden bg-slate-900">
                  <Image
                    src="/images/software/software-camiones.jpg"
                    alt="Sistema de Control de Pesaje de Camiones Dialka"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />
                  <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3">
                    <span className="inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-md text-[#991b1b] text-[10px] sm:text-[11px] font-bold px-2.5 sm:px-3 py-1 rounded-full shadow-xs">
                      <Code2 size={13} className="text-[#991b1b]" />
                      <span>Software Venezolano</span>
                    </span>
                  </div>
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-3 sm:left-3 sm:right-3 text-white">
                    <p className="text-[10px] sm:text-[11px] font-bold text-red-200 uppercase tracking-wider">
                      +307 Sistemas en Producción
                    </p>
                    <h3 className="text-xs sm:text-base font-bold text-white">
                      Captura RS-232 y Control de Camiones
                    </h3>
                  </div>
                </div>

                <div className="mt-2.5 sm:mt-3 bg-slate-50 border border-slate-200/80 rounded-xl p-2.5 sm:p-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Sparkles size={16} className="text-[#991b1b]" />
                    <span className="text-xs font-bold text-slate-800">
                      Exportación Automática a Excel
                    </span>
                  </div>
                  <span className="text-xs font-bold text-[#991b1b]">
                    Sin Errores Manuales
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BANNER VISUAL DE SOFTWARE EN EJECUCIÓN CON LIGHTBOX ── */}
      <SoftwareBannerLightbox whatsappNumber={CONTACT.whatsapp} />

      {/* ── MÓDULOS DEL SISTEMA DE SOFTWARE EN VIVO ── */}
      <section className="bg-slate-950 py-10 sm:py-14 md:py-16 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-red-400 bg-red-950/80 border border-red-500/30 px-3 py-1 rounded-full">
              Demostración Interactiva del Sistema
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2.5 mb-2 tracking-tight">
              Interfaz y Módulos de Pesaje en Vivo
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm">
              Explore los módulos operativos de pesaje vehicular, emisión de comprobantes COVENIN, streaming RS-232 y reportes gerenciales.
            </p>
          </div>
          <SoftwareScreenshotsShowcase />
        </div>
      </section>

      {/* ── SISTEMAS DE SOFTWARE DIALKA ── */}
      <section className="bg-white py-10 sm:py-14 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-2">
              Soluciones de Software Especializadas
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm md:text-base">
              Diseñadas para eliminar errores humanos de transcripción y automatizar el registro de peso en tiempo real.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-14">
            {SOFTWARE_SYSTEMS.map((system, index) => (
              <div
                key={system.name}
                className="card-hover group bg-white border border-slate-200 hover:border-red-200 rounded-xl sm:rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5 sm:mb-4">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-slate-50 border border-slate-100 group-hover:bg-red-50 group-hover:border-red-100 flex items-center justify-center transition-colors">
                      <Monitor size={18} className="text-slate-700 group-hover:text-[#991b1b] transition-colors" />
                    </div>
                    <span className="text-[10px] sm:text-xs font-bold text-[#991b1b] bg-red-50 border border-red-200/80 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                      Sistema 0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 group-hover:text-[#991b1b] transition-colors leading-snug">
                    {system.name}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                    {system.description}
                  </p>
                </div>

                <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-slate-400">
                    Arquitectura industrial
                  </span>
                  <a
                    href={`https://wa.me/${CONTACT.whatsapp}?text=Hola,%20solicito%20demostración%20del%20${encodeURIComponent(system.name)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#991b1b] hover:text-[#7f1d1d]"
                  >
                    <span>Solicitar Demo</span>
                    <ArrowRight size={12} />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* ── CARACTERÍSTICAS TÉCNICAS ── */}
          <div className="bg-slate-50/80 rounded-xl sm:rounded-2xl border border-slate-200 p-5 sm:p-8 shadow-xs">
            <div className="max-w-2xl mb-6">
              <h3 className="text-lg sm:text-2xl font-bold text-slate-900 tracking-tight mb-1.5">
                Capacidades de Integración de Software Dialka
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm">
                Conectamos cualquier báscula existente con la infraestructura informática de su empresa.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
              {TECH_FEATURES.map((feat) => {
                const Icon = feat.icon;
                return (
                  <div key={feat.title} className="bg-white border border-slate-200/80 rounded-xl p-4 shadow-2xs">
                    <div className="w-9 h-9 rounded-lg bg-red-50 border border-red-100 flex items-center justify-center mb-2.5">
                      <Icon size={17} className="text-[#991b1b]" />
                    </div>
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm mb-1">
                      {feat.title}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA DE SOFTWARE A MEDIDA ── */}
      <section className="bg-slate-100/80 border-t border-slate-200 py-14">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#991b1b] block mb-2">
            Desarrollo Personalizado
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3 tracking-tight">
            ¿Requiere un Software de Pesaje a la Medida de su Proceso?
          </h2>
          <p className="text-slate-600 mb-8 text-sm sm:text-base leading-relaxed">
            Nuestro equipo de ingeniería de software puede desarrollar módulos específicos para su sistema ERP o línea de llenado automatizado.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 bg-[#991b1b] hover:bg-[#7f1d1d] text-white font-semibold px-6 py-3.5 rounded-xl shadow-sm hover:shadow-md transition-all text-sm sm:text-base"
            >
              <Phone size={16} />
              <span>Consultar con un Ingeniero</span>
            </Link>
            <a
              href={`https://wa.me/${CONTACT.whatsapp}?text=Hola,%20deseo%20consultar%20sobre%20desarrollo%20de%20software%20de%20pesaje%20a%20medida`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-semibold px-6 py-3.5 rounded-xl shadow-2xs transition-all text-sm sm:text-base"
            >
              <span>WhatsApp de Soporte</span>
              <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
