import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { SITE_CONFIG } from "@/lib/config";
import {
  Phone,
  ChevronRight,
  Building2,
  Sparkles,
  Truck,
  Zap,
} from "lucide-react";
import { ContactDepartmentRouter } from "@/components/ContactDepartmentRouter";
import { ContactSedesDashboard } from "@/components/ContactSedesDashboard";
import { ContactFAQ } from "@/components/ContactFAQ";

// Dynamic import para ContactDynamicForm (componente pesado)
const ContactDynamicForm = dynamic(() => import("@/components/ContactDynamicForm").then(mod => ({ default: mod.ContactDynamicForm })), {
  loading: () => (
    <div className="bg-white border border-slate-200 rounded-3xl p-8 text-center">
      <div className="animate-pulse flex flex-col items-center gap-4">
        <div className="w-12 h-12 bg-slate-200 rounded-full animate-spin border-4 border-slate-300 border-t-red-500" />
        <p className="text-slate-500 text-sm">Cargando formulario de contacto...</p>
      </div>
    </div>
  ),
});

export const metadata: Metadata = {
  title: "Contacto, Sedes y Asistencia Técnica",
  description:
    "Centro oficial de atención y servicio técnico en Caracas y Maracay. Cotizaciones en menos de 15 minutos, calibración SENCAMER, mantenimiento preventivo y emergencias en planta en toda Venezuela.",
  alternates: {
    canonical: "/contacto",
  },
  openGraph: {
    title: "Contacto, Sedes y Asistencia Técnica | Balanzas y Servicios Dialka",
    description:
      "Conecte con nuestros ingenieros y talleres en Caracas y Maracay. Cotizaciones inmediatas, calibración con masas patrón SENCAMER y atención técnica industrial.",
    url: `${SITE_CONFIG.url}/contacto`,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: "/images/og-dialka.png",
        width: 1200,
        height: 630,
        alt: "Sedes y Centro de Contacto Dialka en Caracas y Maracay",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contacto y Sedes Oficiales | Balanzas Dialka",
    description:
      "Sedes operativas en Caracas y Maracay. Cobertura metrológica nacional y atención técnica industrial.",
    images: ["/images/og-dialka.png"],
  },
};

export default function ContactoPage() {
  return (
    <>
      {/* ── 1. HEADER DE PÁGINA ENRIQUECIDO Y DINÁMICO ── */}
      <section className="relative bg-gradient-to-b from-slate-100 via-white to-slate-50 border-b border-slate-200 py-10 sm:py-14 lg:py-18 overflow-hidden">
        {/* Glow de fondo decorativo */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-100/50 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-slate-200/40 rounded-full blur-2xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Columna Izquierda: Título, SLAs y Enlaces Rápidos */}
            <div className="lg:col-span-7">
              {/* Breadcrumbs */}
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 mb-4">
                <Link href="/" className="hover:text-[#991b1b] transition-colors font-medium">
                  Inicio
                </Link>
                <ChevronRight size={14} />
                <span className="text-slate-900 font-bold">Centro de Contacto & Sedes</span>
              </div>

              {/* Insignia de Disponibilidad en Vivo */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 border border-red-200 text-xs font-bold text-[#991b1b] mb-4 shadow-2xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#991b1b]" />
                </span>
                <span>Atención Técnica Inmediata · Cobertura en los 24 Estados</span>
              </div>

              {/* Titular Principal */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
                Centro de Contacto, Despacho & Sedes Oficiales
              </h1>

              <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 max-w-2xl">
                Conecte de forma directa con nuestros ingenieros y talleres en <strong>Caracas</strong> y <strong>Maracay</strong>. Cotice equipos, solicite calibración SENCAMER o reporte paradas críticas con respuesta en menos de 15 minutos.
              </p>

              {/* Botones de Salto Rápido a Secciones */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <a
                  href="#formulario"
                  className="inline-flex items-center gap-2 bg-[#991b1b] hover:bg-[#7f1d1d] active:scale-95 text-white font-bold px-5 py-3 rounded-xl shadow-sm hover:shadow-md transition-all text-xs sm:text-sm"
                >
                  <Zap size={16} />
                  <span>Generar Cotización Rápida</span>
                </a>

                <a
                  href="#sedes"
                  className="inline-flex items-center gap-1.5 bg-white hover:bg-slate-100 active:scale-95 border border-slate-300 text-slate-800 font-bold px-5 py-3 rounded-xl transition-all text-xs sm:text-sm shadow-2xs"
                >
                  <Building2 size={16} className="text-[#991b1b]" />
                  <span>Ver Sedes & Teléfonos</span>
                </a>

                <a
                  href={`https://wa.me/${SITE_CONFIG.contact.whatsappNumber}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 font-bold px-4 py-3 rounded-xl transition-all text-xs sm:text-sm"
                >
                  <Phone size={15} className="text-emerald-600" />
                  <span>WhatsApp Directo</span>
                </a>
              </div>

              {/* Métricas de Confianza Rápida */}
              <div className="grid grid-cols-3 gap-3 pt-5 border-t border-slate-200/80 text-xs">
                <div>
                  <div className="font-extrabold text-slate-900 text-base sm:text-lg">&lt; 15 min</div>
                  <div className="text-slate-500 text-[11px] leading-tight">Tiempo medio de respuesta</div>
                </div>
                <div>
                  <div className="font-extrabold text-slate-900 text-base sm:text-lg">2 Sedes</div>
                  <div className="text-slate-500 text-[11px] leading-tight">Caracas y Maracay</div>
                </div>
                <div>
                  <div className="font-extrabold text-slate-900 text-base sm:text-lg">100%</div>
                  <div className="text-slate-500 text-[11px] leading-tight">Trazable SENCAMER</div>
                </div>
              </div>
            </div>

            {/* Columna Derecha: Tarjeta Fotográfica de Unidad Móvil */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl bg-white p-3 border border-slate-200/90 shadow-xl shadow-slate-200/50 group">
                <div className="relative aspect-16/10 sm:aspect-4/3 w-full rounded-2xl overflow-hidden bg-slate-100">
                  <Image
                    src="/images/proyectos/camion-calibrador.jpg"
                    alt="Soporte y Flota Técnica de Dialka en Venezuela"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

                  {/* Insignia flotante */}
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-md text-[#991b1b] text-[11px] font-bold px-3 py-1 rounded-full shadow-xs">
                      <Truck size={13} className="text-[#991b1b]" />
                      <span>Flota de Camiones Calibradores</span>
                    </span>
                  </div>

                  {/* Texto al pie de la foto */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="text-[11px] font-bold text-red-300 uppercase tracking-wider">
                      Despacho Nacional Ininterrumpido
                    </p>
                    <h3 className="text-sm sm:text-base font-bold text-white leading-snug">
                      Unidades Móviles con Masas Patrón y Grúa Hidráulica
                    </h3>
                  </div>
                </div>

                {/* Micro-panel inferior */}
                <div className="mt-3 bg-slate-50 border border-slate-200/80 rounded-xl p-3 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <Sparkles size={16} className="text-[#991b1b]" />
                    <span className="font-bold text-slate-800">
                      Asistencia técnica en planta en &lt; 24h
                    </span>
                  </div>
                  <span className="text-[#991b1b] font-extrabold uppercase text-[10px] tracking-wider">
                    Región Central
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. ENRUTADOR POR DEPARTAMENTOS (ACCESO DIRECTO) ── */}
      <div id="departamentos">
        <ContactDepartmentRouter />
      </div>

      {/* ── 3. CONTENIDO PRINCIPAL: FORMULARIO DINÁMICO & DASHBOARD DE SEDES ── */}
      <section className="py-14 sm:py-20 bg-slate-50/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            {/* Columna Izquierda: Formulario Dinámico con Chips y Simulador WhatsApp (7 cols) */}
            <div id="formulario" className="lg:col-span-7">
              <ContactDynamicForm />
            </div>

            {/* Columna Derecha: Dashboard de Sedes Caracas / Maracay (5 cols) */}
            <div id="sedes" className="lg:col-span-5">
              <div className="mb-4">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#991b1b] block">
                  Presencia Física
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                  Sedes & Laboratorios
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  Consulte horarios en vivo, direcciones, mapas GPS y líneas telefónicas oficiales.
                </p>
              </div>

              <ContactSedesDashboard />
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. ACORDEÓN DE PREGUNTAS FRECUENTES INTERACTIVAS ── */}
      <ContactFAQ />
    </>
  );
}
