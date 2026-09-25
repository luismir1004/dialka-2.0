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
}: DynamicPageHeroProps) {
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(
    primaryCtaWhatsappMessage
  )}`;

  return (
    <section className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-b border-slate-800 text-white overflow-hidden py-10 sm:py-14 lg:py-18">
      {/* ── MALLA DEGRADADA Y PATRÓN TÉCNICO DE INGENIERÍA ── */}
      <div className="absolute inset-0 industrial-grid-dark opacity-40 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-600/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-slate-800/40 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* ── BREADCRUMBS INTERACTIVOS Y RÁPIDOS ── */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-400 mb-5">
          <Link
            href="/"
            className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
            title="Ir al inicio"
          >
            <Home size={13} />
            <span>Inicio</span>
          </Link>
          <ChevronRight size={13} className="text-slate-600" />
          <span className="text-red-400 font-semibold truncate">{breadcrumbCurrent}</span>
        </nav>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* ── COLUMNA PRINCIPAL (8 COLS) ── */}
          <div className="lg:col-span-8 space-y-4 sm:space-y-5">
            {/* Badge de Sección con Efecto Shimmer y Punto Pulsante */}
            <div className="inline-flex items-center gap-2 bg-red-950/70 border border-red-500/40 px-3.5 py-1.5 rounded-full text-red-300 text-xs font-bold uppercase tracking-wider shadow-sm badge-shimmer">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              <Icon size={14} className="text-red-400" />
              <span>{badgeText}</span>
            </div>

            {/* Título Principal con Acento Dinámico */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
              {title}{" "}
              {titleHighlight && (
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-300 to-amber-200">
                  {titleHighlight}
                </span>
              )}
            </h1>

            {/* Descripción Técnica con Alto Contraste */}
            <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
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
                      className="inline-flex items-center gap-1.5 bg-slate-800/80 border border-slate-700/80 hover:border-red-500/40 text-slate-200 text-xs font-medium px-3 py-1.5 rounded-xl transition-all shadow-xs"
                    >
                      <ChipIcon size={13} className="text-red-400 shrink-0" />
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
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#991b1b] via-[#dc2626] to-[#991b1b] hover:from-[#7f1d1d] hover:to-[#991b1b] active:scale-[0.98] text-white font-extrabold px-6 py-3.5 rounded-xl shadow-lg shadow-red-950/50 hover:shadow-red-950/80 transition-all text-sm sm:text-base cursor-pointer"
              >
                <Phone size={16} />
                <span>{primaryCtaText}</span>
              </a>

              {secondaryCtaText && secondaryCtaHref && (
                <Link
                  href={secondaryCtaHref}
                  className="inline-flex items-center justify-center gap-2 bg-slate-800/80 hover:bg-slate-700/90 active:scale-[0.98] border border-slate-700 text-slate-200 hover:text-white font-semibold px-5 py-3.5 rounded-xl transition-all text-sm sm:text-base"
                >
                  <span>{secondaryCtaText}</span>
                  <ArrowRight size={15} />
                </Link>
              )}
            </div>
          </div>

          {/* ── COLUMNA LATERAL HUD TECNOLÓGICA (4 COLS) ── */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="glass-panel-dark rounded-2xl p-6 relative laser-glow-card">
              <div className="flex items-center justify-between pb-4 border-b border-slate-700/60 mb-4">
                <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400">
                  ESTÁNDAR METROLÓGICO
                </span>
                <span className="inline-flex items-center gap-1 bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-[10px] font-bold px-2 py-0.5 rounded-full">
                  <ShieldCheck size={11} className="text-emerald-400" />
                  <span>Activo VET</span>
                </span>
              </div>

              <div className="space-y-2">
                <span className="text-4xl lg:text-5xl font-black text-white tracking-tight block">
                  {statNumber}
                </span>
                <span className="text-sm font-bold text-red-400 block">
                  {statLabel}
                </span>
                <p className="text-xs text-slate-400 leading-relaxed pt-1">
                  {statSubtext}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-700/60 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span>SEDE CARACAS · MARACAY</span>
                <span className="text-red-400 font-bold">COVENIN / OIML</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
