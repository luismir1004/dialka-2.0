import type { Metadata } from "next";
import Link from "next/link";
import { RENTAL_EQUIPMENT, CONTACT } from "@/lib/data";
import { CalendarDays, Phone, ArrowRight, Truck, ShieldCheck, Clock } from "lucide-react";
import { RentalCatalog } from "@/components/RentalCatalog";
import { DynamicPageHero } from "@/components/DynamicPageHero";

export const metadata: Metadata = {
  title: "Alquiler de Equipos de Pesaje",
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
      {/* ── HEADER INMERSIVO INDUSTRIAL DINÁMICO ── */}
      <DynamicPageHero
        badgeText="Arrendamiento y Soluciones Temporales"
        title="Alquiler de Básculas y Equipos"
        titleHighlight="de Pesaje Industrial"
        description="Soluciones flexibles de pesaje bajo modalidad de arrendamiento para obras de infraestructura, proyectos temporales y zafras agrícolas. Básculas de pesaje vehicular por eje (20T y 40T) con transporte, montaje, soporte técnico y calibración en toda Venezuela."
        icon={CalendarDays}
        breadcrumbCurrent="Alquiler de Equipos"
        chips={[
          { label: "Básculas por Ejes 20T / 40T", icon: Truck },
          { label: "Soporte Técnico Incluido", icon: ShieldCheck },
          { label: "Zafras y Obras Civiles", icon: CalendarDays },
          { label: "Operador en Campo Disponible", icon: Clock },
        ]}
        primaryCtaText="Cotizar Alquiler Inmediato"
        primaryCtaWhatsappMessage="Hola Dialka, solicito cotización para alquiler de equipos de pesaje industrial"
        secondaryCtaText="Ver Catálogo de Alquiler"
        secondaryCtaHref="#catalogo-alquiler"
        statNumber="20T / 40T"
        statLabel="Capacidad por Eje"
        statSubtext="Sistemas móviles para pesaje vehicular continuo de flotas"
      />

      {/* ── TARJETAS DE EQUIPOS EN ALQUILER CON LIGHTBOX ── */}
      <section id="catalogo-alquiler" className="bg-white py-10 sm:py-14 md:py-16">
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
