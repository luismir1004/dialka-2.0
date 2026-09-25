import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { SITE_CONFIG } from "@/lib/config";
import {
  Phone,
  Building2,
  Truck,
  Zap,
} from "lucide-react";
import { ContactDepartmentRouter } from "@/components/ContactDepartmentRouter";
import { ContactSedesDashboard } from "@/components/ContactSedesDashboard";
import { ContactFAQ } from "@/components/ContactFAQ";
import { DynamicPageHero } from "@/components/DynamicPageHero";

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
      {/* ── HEADER INMERSIVO INDUSTRIAL DINÁMICO ── */}
      <DynamicPageHero
        badgeText="Atención Inmediata & Guardia Metrológica"
        title="Centro de Contacto, Despacho"
        titleHighlight="& Sedes Oficiales"
        description="Conecte directamente con nuestros ingenieros y talleres en Caracas y Maracay. Cotizaciones de equipos en menos de 15 minutos, operativos de calibración SENCAMER con camión patrón y atención a paradas de emergencia en planta en todo el territorio nacional."
        icon={Phone}
        breadcrumbCurrent="Contacto & Sedes"
        chips={[
          { label: "Respuesta en <15 min", icon: Zap },
          { label: "Sedes Caracas y Maracay", icon: Building2 },
          { label: "Camión Patrón con Grúa", icon: Truck },
          { label: "Guardia WhatsApp Ininterrumpida", icon: Phone },
        ]}
        primaryCtaText="Generar Cotización Rápida"
        primaryCtaWhatsappMessage="Hola Dialka, requiero cotización formal y asesoría técnica de pesaje"
        secondaryCtaText="Ver Sedes & Teléfonos"
        secondaryCtaHref="#sedes"
        statNumber="< 15 min"
        statLabel="Respuesta Promedio"
        statSubtext="Ingenieros metrólogos activos para cotizaciones y emergencias"
      />

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
