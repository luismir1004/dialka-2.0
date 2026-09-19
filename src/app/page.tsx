import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Wrench,
  ShieldCheck,
  Package,
  CalendarDays,
  Monitor,
  Phone,
  Award,
  Users,
  Code2,
  ThumbsUp,
  CheckCircle2,
  Building2,
  Scale,
  Sparkles,
} from "lucide-react";
import { COMPANY, CONTACT, CLIENTS, BRANDS, FIELD_PROJECTS } from "@/lib/data";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { ProjectsGallery } from "@/components/ProjectsGallery";
import { LiveWeighingSimulator } from "@/components/LiveWeighingSimulator";
import { SocialProofSection } from "@/components/SocialProofSection";
import { AuthorizedBrands } from "@/components/AuthorizedBrands";
import { HeroTextRotator } from "@/components/HeroTextRotator";
import { MetricsBar } from "@/components/MetricsBar";
import { MissionVisionTabs } from "@/components/MissionVisionTabs";

export const metadata: Metadata = {
  title: "Inicio | Balanzas y Servicios Dialka",
  description:
    "25 años siendo líderes en Venezuela en venta, alquiler y servicio técnico de equipos de pesaje industriales, comerciales y agropecuarios.",
};

const QUICK_ACCESS = [
  {
    label: "Servicio Técnico",
    desc: "Calibración, mantenimiento y reparación con certificación SENCAMER.",
    href: "/servicios",
    icon: Wrench,
    tag: "Calibración",
  },
  {
    label: "Equipos SENCAMER",
    desc: "Balanzas comerciales e industriales homologadas para uso legal en Venezuela.",
    href: "/sencamer",
    icon: Scale,
    tag: "Homologados",
  },
  {
    label: "Catálogo de Productos",
    desc: "Básculas camioneras, de piso, colgantes, plataformas y pesas patrón.",
    href: "/productos",
    icon: Package,
    tag: "Venta",
  },
  {
    label: "Alquiler de Equipos",
    desc: "Sistemas de pesaje portátiles para zafras y contingencias operativas.",
    href: "/alquiler",
    icon: CalendarDays,
    tag: "Alquiler",
  },
  {
    label: "Software de Pesaje",
    desc: "Desarrollo propio para control de básculas camioneras, silos y tolvas.",
    href: "/software",
    icon: Monitor,
    tag: "Software",
  },
  {
    label: "Contacto y Sedes",
    desc: "Oficinas en Caracas y Maracay. Atención a todo el país y soporte USA.",
    href: "/contacto",
    icon: Phone,
    tag: "Atención Inmediata",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO INDUSTRIAL CON DUAL-COLUMN LAYOUT & FOTOGRAFÍA INDUSTRIAL ── */}
      <section className="relative bg-gradient-to-b from-slate-50 via-white to-slate-50/50 border-b border-slate-200 overflow-hidden py-6 sm:py-10 md:py-16 lg:py-20">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 items-center">
            {/* Columna Izquierda: Mensaje Central y CTAs */}
            <div className="lg:col-span-7">
              <RevealOnScroll delay={0}>
                {/* Status Badge Oficial con Antigüedad Exacta */}
                <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200/80 text-red-900 text-xs font-semibold px-3.5 sm:px-4 py-1.5 rounded-full mb-3 sm:mb-5 shadow-2xs max-w-full">
                  <span className="relative flex h-2 w-2 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-700"></span>
                  </span>
                  <span>Fundada en 2001 · 25 Años de Liderazgo Metrológico</span>
                </div>

                {/* Dinamismo Tipográfico Rotativo ("El Giro") */}
                <HeroTextRotator />

                <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed mb-5 sm:mb-6 font-normal mt-2 sm:mt-3">
                  {COMPANY.description}
                </p>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <Link
                    href="/productos"
                    className="inline-flex items-center justify-center gap-2.5 bg-[#991b1b] hover:bg-[#7f1d1d] active:scale-[0.98] text-white font-semibold px-6 py-3 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 group text-sm sm:text-base text-center min-h-[46px]"
                  >
                    <span>Ver Catálogo de Productos</span>
                    <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                  <a
                    href={`https://wa.me/${CONTACT.whatsapp}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 active:scale-[0.98] border border-slate-300 text-slate-800 font-semibold px-6 py-3 rounded-xl shadow-2xs hover:shadow-xs transition-all duration-200 text-sm sm:text-base text-center min-h-[46px]"
                  >
                    <Phone size={16} className="text-[#991b1b]" />
                    <span>Atención por WhatsApp</span>
                  </a>
                </div>

                {/* Quick credentials strip */}
                <div className="mt-5 pt-5 sm:mt-8 sm:pt-6 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-4 text-xs font-medium text-slate-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-[#991b1b] shrink-0" />
                    <span>Certificación SENCAMER</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-[#991b1b] shrink-0" />
                    <span>Normas COVENIN</span>
                  </div>
                  <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                    <CheckCircle2 size={16} className="text-[#991b1b] shrink-0" />
                    <span>Sedes Caracas y Maracay</span>
                  </div>
                </div>
              </RevealOnScroll>
            </div>

            {/* Columna Derecha: Tarjeta Fotográfica de Unidad Móvil / Camión Calibrador */}
            <div className="lg:col-span-5">
              <RevealOnScroll delay={150}>
                <div className="relative group rounded-2xl bg-white p-2.5 sm:p-3 border border-slate-200/90 shadow-xl shadow-slate-200/50 hover:border-red-200 transition-all duration-300">
                  {/* Contenedor de la Imagen */}
                  <div className="relative aspect-16/10 sm:aspect-4/3 w-full rounded-xl overflow-hidden bg-slate-100 border border-slate-200/60">
                    <Image
                      src="/images/proyectos/camion-calibrador.jpg"
                      alt="Camión calibrador patrón Dialka con pesas de 500kg y 1000kg en silos venezolanos"
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Gradient overlay for readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                    {/* Top Tag */}
                    <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 flex items-center gap-1.5 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/50 text-[10px] sm:text-[11px] font-bold text-slate-900 shadow-sm">
                      <Scale size={13} className="text-[#991b1b]" />
                      <span>Unidad Móvil de Calibración</span>
                    </div>

                    {/* Bottom Caption Info */}
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-3 sm:left-3 sm:right-3 text-white">
                      <p className="text-[10px] sm:text-xs font-semibold text-red-200 uppercase tracking-wider mb-0.5">
                        Operaciones en Campo · Portuguesa
                      </p>
                      <h3 className="text-xs sm:text-base font-bold text-white leading-snug drop-shadow-sm">
                        Camión Patrón con Masas de 500 kg y 1.000 kg
                      </h3>
                      <p className="text-[10px] sm:text-[11px] text-slate-200 mt-0.5 line-clamp-1">
                        Calibración in situ de básculas camioneras de 40T a 100T bajo normativa SENCAMER.
                      </p>
                    </div>
                  </div>

                  {/* Floating Metric Badge */}
                  <div className="mt-2.5 sm:mt-3 bg-slate-50 border border-slate-200/80 rounded-xl p-2.5 sm:p-3 flex items-center justify-between">
                    <div className="flex items-center gap-2 sm:gap-2.5">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-red-100 flex items-center justify-center text-[#991b1b]">
                        <Sparkles size={15} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-900 leading-tight">Pesas Patrón Trazables</p>
                        <p className="text-[10px] sm:text-[11px] text-slate-500">Clase M1 certificadas</p>
                      </div>
                    </div>
                    <Link
                      href="/servicios"
                      className="text-xs font-bold text-[#991b1b] hover:text-[#7f1d1d] hover:underline flex items-center gap-1"
                    >
                      <span>Ver servicio</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* ── FASE 2: BARRA DE MÉTRICAS UNIFICADA DE DISEÑO INDUSTRIAL ── */}
      <RevealOnScroll>
        <MetricsBar />
      </RevealOnScroll>

      {/* ── FASE 3: SECCIONES DE IDENTIDAD (MISIÓN Y VISIÓN EN PESTAÑAS INTERACTIVAS) ── */}
      <section className="bg-slate-50/70 border-b border-slate-200 py-8 sm:py-12 md:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="text-center max-w-xl mx-auto mb-5 sm:mb-7">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#991b1b] bg-red-50 border border-red-200/80 px-3 py-1 rounded-full mb-2">
                Identidad y Valores
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Misión y Visión Dialka
              </h2>
            </div>
            <MissionVisionTabs />
          </RevealOnScroll>
        </div>
      </section>

      {/* ── ACCESOS RÁPIDOS CON STAGGERED SCROLL REVEAL ── */}
      <section className="bg-white py-16 md:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#991b1b] bg-red-50 border border-red-200/80 px-3 py-1 rounded-full mb-3">
                Áreas de Especialización
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
                Soluciones Integrales de Pesaje
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Explore nuestras divisiones especializadas con soporte técnico certificado en todo el territorio venezolano.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {QUICK_ACCESS.map(({ label, desc, href, icon: Icon, tag }, idx) => (
              <RevealOnScroll key={href} delay={(idx % 3) * 100}>
                <Link
                  href={href}
                  className="card-hover group bg-white border border-slate-200 hover:border-red-300 rounded-2xl p-7 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between h-full"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 group-hover:bg-red-50 group-hover:border-red-100 flex items-center justify-center transition-colors">
                        <Icon size={22} className="text-slate-700 group-hover:text-[#991b1b] transition-colors" />
                      </div>
                      <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full group-hover:bg-red-50 group-hover:text-[#991b1b] transition-colors">
                        {tag}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#991b1b] transition-colors">
                      {label}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {desc}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 text-[#991b1b] text-sm font-bold pt-4 border-t border-slate-100 group-hover:gap-2.5 transition-all">
                    <span>Conocer más</span>
                    <ArrowRight size={15} />
                  </div>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── SIMULADOR DE PESAJE INTERACTIVO (DIAL Y DISPLAY VIVO) ── */}
      <section className="bg-slate-950 py-16 md:py-24 border-b border-slate-850 text-white relative overflow-hidden">
        {/* Ambient lighting effect */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-red-900/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-slate-800/30 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-red-400 bg-red-950/80 border border-red-500/30 px-3.5 py-1.5 rounded-full mb-3 shadow-xs">
                Tecnología e Interactividad Metrológica
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
                Simulador de Pesaje en Vivo (0 a 80 Toneladas)
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Interactúe con nuestro simulador de terminal industrial. Desplace el control numérico de toneladas para simular el pesaje vehicular y compruebe la respuesta en tiempo real del display digital LED, el dial con aguja viva y los estados de estabilización y sobrecarga.
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={150}>
            <LiveWeighingSimulator />
          </RevealOnScroll>
        </div>
      </section>

      {/* ── MARCAS AUTORIZADAS Y ALIANZAS TECNOLÓGICAS (ALTA GAMA) ── */}
      <RevealOnScroll>
        <AuthorizedBrands whatsappNumber={CONTACT.whatsapp} />
      </RevealOnScroll>

      {/* ── PROYECTOS Y OBRAS EN CAMPO (AUTENTICIDAD LOCAL) ── */}
      <RevealOnScroll>
        <ProjectsGallery
          projects={FIELD_PROJECTS}
          whatsappNumber={CONTACT.whatsapp}
          isFeatured={true}
        />
      </RevealOnScroll>

      {/* ── SOCIAL PROOF: CLIENTES AUDITADOS Y MARCAS OFICIALES ── */}
      <RevealOnScroll>
        <SocialProofSection whatsappNumber={CONTACT.whatsapp} />
      </RevealOnScroll>

      {/* ── CTA FINAL CORPORATIVO ── */}
      <section className="bg-gradient-to-r from-[#7f1d1d] via-[#991b1b] to-[#7f1d1d] text-white py-16 md:py-20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <RevealOnScroll>
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-red-200 bg-red-950/40 border border-red-300/30 px-3.5 py-1.5 rounded-full mb-4">
              Atención Técnica y Comercial
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">
              ¿Necesita asesoría o cotización en equipos de pesaje?
            </h2>
            <p className="text-red-100 text-base sm:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Nuestros ingenieros y especialistas en Caracas y Maracay están listos para asesorarle en venta, alquiler, calibración o desarrollo de software.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4">
              <a
                href={`https://wa.me/${CONTACT.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 bg-white hover:bg-slate-50 text-[#991b1b] font-bold px-7 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all text-sm sm:text-base"
              >
                <Phone size={17} className="text-[#991b1b]" />
                <span>WhatsApp Directo</span>
              </a>
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 bg-red-950/50 hover:bg-red-950/70 border border-white/30 text-white font-semibold px-7 py-3.5 rounded-xl transition-all text-sm sm:text-base"
              >
                <span>Ver Direcciones y Teléfonos</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
