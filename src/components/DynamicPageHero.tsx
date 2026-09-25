import React from "react";
import Link from "next/link";
import {
  ChevronRight,
  Home,
  Phone,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";

export interface HeroChip {
  label: string;
  icon?: LucideIcon;
}

export interface DynamicPageHeroProps {
  badgeText: string;
  title: string;
  titleHighlight?: string;
  description: string;
  icon: LucideIcon;
  breadcrumbCurrent: string;
  chips?: HeroChip[];
  primaryCtaText?: string;
  primaryCtaWhatsappMessage?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  statNumber?: string;
  statLabel?: string;
  statSubtext?: string;
  rightContent?: React.ReactNode;
}

export function DynamicPageHero({
  badgeText,
  title,
  titleHighlight,
  description,
  icon: Icon,
  breadcrumbCurrent,
  chips = [],
  primaryCtaText = "Cotizar por WhatsApp",
  primaryCtaWhatsappMessage = "Hola Dialka, deseo solicitar asesoría y cotización formal",
  secondaryCtaText,
  secondaryCtaHref,
  statNumber = "25 Años",
  statLabel = "Liderazgo Metrológico",
  statSubtext = "Acreditación Nacional SENCAMER",
  rightContent,
}: DynamicPageHeroProps) {
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(
    primaryCtaWhatsappMessage
  )}`;

  return (
    <section className="relative bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200 text-slate-900 overflow-hidden py-10 sm:py-14 lg:py-16">
      {/* ── MALLA TÉCNICA CLARA DE INGENIERÍA Y DESTELLO SUTIL ── */}
      <div className="absolute inset-0 industrial-grid-light opacity-70 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-slate-200/30 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* ── BREADCRUMBS LUMINOSOS ── */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-500 mb-4 sm:mb-5">
          <Link
            href="/"
            className="flex items-center gap-1 text-slate-500 hover:text-[#991b1b] transition-colors"
            title="Ir al inicio"
          >
            <Home size={13} />
            <span>Inicio</span>
          </Link>
          <ChevronRight size={13} className="text-slate-400" />
          <span className="text-[#991b1b] font-bold truncate">{breadcrumbCurrent}</span>
        </nav>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* ── COLUMNA PRINCIPAL (7 u 8 COLS) ── */}
          <div className={`${rightContent ? "lg:col-span-7" : "lg:col-span-8"} space-y-4 sm:space-y-5`}>
            {/* Badge de Sección con Efecto Shimmer en Fondo Rojo Claro */}
            <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 text-[#7f1d1d] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-2xs badge-shimmer">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-700"></span>
              </span>
              <Icon size={14} className="text-[#991b1b]" />
              <span>{badgeText}</span>
            </div>

            {/* Título Principal con Acento Rojo Corporativo Dialka */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              {title}{" "}
              {titleHighlight && (
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#991b1b] via-[#dc2626] to-[#7f1d1d]">
                  {titleHighlight}
                </span>
              )}
            </h1>

            {/* Descripción Técnica con Alto Contraste */}
            <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl leading-relaxed font-normal">
              {description}
            </p>

            {/* Chips de Valor Técnico (Garantías, Normas, Acreditaciones) */}
            {chips.length > 0 && (
              <div className="flex flex-wrap items-center gap-2 pt-1">
                {chips.map((chip, idx) => {
                  const ChipIcon = chip.icon || CheckCircle2;
                  return (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 bg-white border border-slate-200/90 hover:border-red-200 text-slate-700 hover:text-[#991b1b] text-xs font-semibold px-3 py-1.5 rounded-xl transition-all shadow-2xs"
                    >
                      <ChipIcon size={13} className="text-[#991b1b] shrink-0" />
                      <span>{chip.label}</span>
                    </span>
                  );
                })}
              </div>
            )}

            {/* Botones de Acción Inmediata (CTAs) */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#991b1b] hover:bg-[#7f1d1d] active:scale-[0.98] text-white font-bold px-6 py-3.5 rounded-xl shadow-sm hover:shadow-md transition-all text-sm sm:text-base cursor-pointer"
              >
                <Phone size={16} />
                <span>{primaryCtaText}</span>
              </a>

              {secondaryCtaText && secondaryCtaHref && (
                <Link
                  href={secondaryCtaHref}
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 active:scale-[0.98] border border-slate-300 text-slate-800 font-semibold px-5 py-3.5 rounded-xl transition-all text-sm sm:text-base shadow-2xs"
                >
                  <span>{secondaryCtaText}</span>
                  <ArrowRight size={15} />
                </Link>
              )}
            </div>
          </div>

          {/* ── COLUMNA LATERAL (MOCKUP O TARJETA HUD) ── */}
          <div className={`${rightContent ? "lg:col-span-5" : "lg:col-span-4 hidden lg:block"}`}>
            {rightContent ? (
              rightContent
            ) : (
              <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 relative border border-slate-200/90 shadow-xl shadow-slate-200/50 laser-glow-card">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-slate-500 font-bold">
                    ESTÁNDAR METROLÓGICO
                  </span>
                  <span className="inline-flex items-center gap-1 bg-emerald-50 border border-emerald-200 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full shadow-2xs">
                    <ShieldCheck size={11} className="text-emerald-600" />
                    <span>Activo VET</span>
                  </span>
                </div>

                <div className="space-y-1.5">
                  <span className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tight block">
                    {statNumber}
                  </span>
                  <span className="text-sm font-bold text-[#991b1b] block">
                    {statLabel}
                  </span>
                  <p className="text-xs text-slate-500 leading-relaxed pt-1">
                    {statSubtext}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                  <span>SEDE CARACAS · MARACAY</span>
                  <span className="text-[#991b1b] font-bold">COVENIN / OIML</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
