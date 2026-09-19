import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { RENTAL_EQUIPMENT, CONTACT } from "@/lib/data";
import { CalendarDays, ChevronRight, Phone, ArrowRight, CheckCircle2, Truck, ShieldCheck, Clock, Sparkles } from "lucide-react";
import { RentalCatalog } from "@/components/RentalCatalog";

export const metadata: Metadata = {
  title: "Alquiler de Equipos de Pesaje | Balanzas y Servicios Dialka",
  description:
    "Alquiler de básculas camioneras por eje (20T y 40T), básculas ganaderas y plataformas industriales. Disponibles en Venezuela con servicio técnico incluido.",
};

const RENTAL_ADVANTAGES = [
  {
    title: "Sin inversión de capital inicial",
    desc: "Ideal para proyectos temporales, obras de infraestructura y zafras agrícolas sin comprometer liquidez.",
    icon: CalendarDays,
  },
  {
    title: "Servicio y soporte técnico incluido",
    desc: "Nuestros técnicos garantizan la instalación, nivelación, calibración y puesta en marcha inmediata.",
    icon: ShieldCheck,
  },
  {
    title: "Opción con operador calificado",
    desc: "Disponibilidad de personal técnico para la operación de pesaje continuo en campo si su proyecto lo requiere.",
    icon: Clock,
  },
  {
    title: "Transporte y montaje en sitio",
    desc: "Logística y despacho a cualquier estado o municipio del país con montaje rápido y seguro.",
    icon: Truck,
  },
];

export default function AlquilerPage() {
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
                <span className="text-slate-900 font-semibold">Alquiler</span>
              </div>

              <div className="flex items-center gap-3.5 mb-3 sm:mb-4">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center shrink-0">
                  <CalendarDays size={22} className="text-[#991b1b]" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#991b1b]">
                    Equipos en Campo en Venezuela
                  </span>
                  <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                    Alquiler de Equipos de Pesaje
                  </h1>
                </div>
              </div>

              <p className="text-slate-600 max-w-2xl text-sm sm:text-base lg:text-lg leading-relaxed mb-5 sm:mb-6">
                Soluciones flexibles de pesaje bajo modalidad de arrendamiento temporal. Básculas para control vehicular por eje (20T y 40T), plataformas ganaderas e industriales con servicio técnico y calibración incluida en toda Venezuela.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={`https://wa.me/${CONTACT.whatsapp}?text=Hola,%20solicito%20cotización%20para%20alquiler%20de%20equipos%20de%20pesaje`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-[#991b1b] hover:bg-[#7f1d1d] text-white font-semibold px-5 py-3 rounded-xl shadow-xs hover:shadow-md transition-all text-sm min-h-[46px]"
                >
                  <Phone size={15} />
                  <span>Cotizar Alquiler Inmediato</span>
                </a>
                <Link
                  href="/productos"
                  className="inline-flex items-center gap-1.5 bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 font-semibold px-5 py-3 rounded-xl transition-all text-sm min-h-[46px]"
                >
                  <span>Ver Venta de Equipos</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Columna Derecha: Tarjeta Fotográfica de Báscula por Eje */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl bg-white p-2.5 sm:p-3 border border-slate-200/90 shadow-xl shadow-slate-200/50 group">
                <div className="relative aspect-16/10 sm:aspect-4/3 w-full rounded-xl overflow-hidden bg-slate-100">
                  <Image
                    src="/images/alquiler/ejes-portatil.jpg"
                    alt="Báscula de Pesaje por Eje Portátil para Camiones Dialka"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                  <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3">
                    <span className="inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-md text-[#991b1b] text-[10px] sm:text-[11px] font-bold px-2.5 sm:px-3 py-1 rounded-full shadow-xs">
                      <Truck size={13} className="text-[#991b1b]" />
                      <span>Sistemas Móviles por Eje</span>
                    </span>
                  </div>
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-3 sm:left-3 sm:right-3 text-white">
                    <p className="text-[10px] sm:text-[11px] font-bold text-red-200 uppercase tracking-wider">
                      Disponibilidad Inmediata · 20T y 40T
                    </p>
                    <h3 className="text-xs sm:text-base font-bold text-white">
                      Pesaje Dinámico y Estático de Flotas
                    </h3>
                  </div>
                </div>

                <div className="mt-2.5 sm:mt-3 bg-slate-50 border border-slate-200/80 rounded-xl p-2.5 sm:p-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Sparkles size={16} className="text-[#991b1b]" />
                    <span className="text-xs font-bold text-slate-800">
                      Instalación Rápida en Sitio
                    </span>
                  </div>
                  <span className="text-xs font-bold text-[#991b1b]">
                    Con Calibración Incluida
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TARJETAS DE EQUIPOS EN ALQUILER CON LIGHTBOX ── */}
      <section className="bg-white py-10 sm:py-14 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#991b1b] bg-red-50 border border-red-200/80 px-3 py-1 rounded-full mb-2.5 shadow-2xs">
              Catálogo de Alquiler
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-2">
              Equipos Disponibles para Arrendamiento
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed">
              Sistemas verificados metrológicamente listos para despacho inmediato a cualquier estado de Venezuela.
            </p>
          </div>

          {/* Componente Interactivo de Equipos en Alquiler */}
          <RentalCatalog equipment={RENTAL_EQUIPMENT} whatsappNumber={CONTACT.whatsapp} />

          {/* ── VENTAJAS DEL ALQUILER ── */}
          <div className="bg-slate-50/80 rounded-xl sm:rounded-2xl border border-slate-200 p-5 sm:p-8 shadow-xs">
            <div className="max-w-2xl mb-6">
              <h3 className="text-lg sm:text-2xl font-bold text-slate-900 tracking-tight mb-1.5">
                Ventajas del Programa de Alquiler Dialka
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm">
                Respaldamos su proyecto temporal con la misma seriedad técnica de una instalación permanente.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
              {RENTAL_ADVANTAGES.map((adv) => {
                const Icon = adv.icon;
                return (
                  <div key={adv.title} className="bg-white border border-slate-200/80 rounded-xl p-4 shadow-2xs">
                    <div className="w-9 h-9 rounded-lg bg-red-50 border border-red-100 flex items-center justify-center mb-2.5">
                      <Icon size={17} className="text-[#991b1b]" />
                    </div>
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm mb-1">
                      {adv.title}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                      {adv.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA DE ALQUILER ── */}
      <section className="bg-slate-100/80 border-t border-slate-200 py-14">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#991b1b] block mb-2">
            Disponibilidad Inmediata
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3 tracking-tight">
            Reserve Equipos para su Próxima Operación
          </h2>
          <p className="text-slate-600 mb-8 text-sm sm:text-base leading-relaxed">
            Contáctenos indicando las fechas requeridas, ubicación y tipo de pesaje para remitirle la propuesta técnico-económica.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 bg-[#991b1b] hover:bg-[#7f1d1d] text-white font-semibold px-6 py-3.5 rounded-xl shadow-sm hover:shadow-md transition-all text-sm sm:text-base"
            >
              <Phone size={16} />
              <span>Solicitar Cotización de Alquiler</span>
            </Link>
            <a
              href={`https://wa.me/${CONTACT.whatsapp}?text=Hola,%20deseo%20consultar%20disponibilidad%20de%20equipos%20de%20alquiler`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-semibold px-6 py-3.5 rounded-xl shadow-2xs transition-all text-sm sm:text-base"
            >
              <span>WhatsApp Inmediato</span>
              <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
