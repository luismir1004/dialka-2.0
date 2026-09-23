"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  MessageCircle,
} from "lucide-react";
import { CONTACT, NAV_LINKS, BRANDS } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();
  const [activeSede, setActiveSede] = useState<"caracas" | "maracay">("caracas");

  const caracas = CONTACT.headquarters[0];
  const maracay = CONTACT.headquarters[1];

  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 text-slate-300">
      {/* ── BARRA SUPERIOR DE CONVERSIÓN RÁPIDA ── */}
      <div className="border-b border-slate-800/80 bg-slate-900/60 py-4 sm:py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <div className="flex items-center gap-2.5 text-center sm:text-left">
            <div className="w-8 h-8 rounded-lg bg-red-600/20 border border-red-500/30 flex items-center justify-center text-red-400 shrink-0">
              <ShieldCheck size={18} />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-white leading-tight">
                ¿Necesita asesoría metrológica o cotización inmediata?
              </p>
              <p className="text-[11px] text-slate-400">
                Atención técnica directa de lunes a viernes en todo el territorio nacional.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <a
              href={`https://wa.me/${CONTACT.whatsapp}?text=Hola%20Dialka,%20deseo%20solicitar%20asesor%C3%ADa%20comercial`}
              target="_blank"
              rel="noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 bg-[#991b1b] hover:bg-[#7f1d1d] active:scale-95 text-white font-bold text-xs sm:text-sm px-4 py-2.5 rounded-xl shadow-sm transition-all"
            >
              <MessageCircle size={15} />
              <span>WhatsApp Directo</span>
            </a>
            <a
              href={`tel:${caracas.phones.main}`}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 bg-slate-800 hover:bg-slate-700 active:scale-95 text-slate-200 hover:text-white font-semibold text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-slate-700 transition-all"
            >
              <Phone size={14} />
              <span>Llamar Central</span>
            </a>
          </div>
        </div>
      </div>

      {/* ── CUERPO PRINCIPAL MODULAR Y COMPACTO ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Columna 1: Identidad Corporativa y Enlaces */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-red-950/70 border border-red-800/60 p-1.5 flex items-center justify-center shadow-xs shrink-0">
                <Image
                  src="/images/logo-dialka-symbol-white.svg"
                  alt="Símbolo Oficial Dialka"
                  width={28}
                  height={20}
                  className="w-full h-auto object-contain"
                />
              </div>
              <div>
                <span className="font-extrabold text-white text-sm block leading-tight">
                  Balanzas y Servicios Dialka
                </span>
                <span className="text-[11px] font-semibold text-red-400 block leading-tight">
                  Líderes en Pesaje desde 2001 · 25 Años
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Soluciones integrales de pesaje comercial, industrial, agropecuario y analítico con certificación oficial SENCAMER en Venezuela.
            </p>

            {/* Canal Oficial Instagram */}
            <div className="pt-1">
              <a
                href={CONTACT.socials[0]?.url || "https://www.instagram.com/balanzasyserviciosdialka"}
                target="_blank"
                rel="noreferrer"
                title="Visitar Instagram oficial de Dialka"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/90 hover:bg-[#991b1b] border border-slate-700/80 hover:border-red-600 transition-all text-slate-300 hover:text-white group"
              >
                <svg
                  className="w-3.5 h-3.5 text-pink-400 group-hover:text-white transition-colors shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                <span className="text-xs font-semibold">@balanzasyserviciosdialka</span>
              </a>
            </div>
          </div>

          {/* Columna 2: Navegación Rápida en Cuadrícula Compacta */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">
              Navegación Rápida
            </h4>
            <div className="grid grid-cols-2 gap-x-2 gap-y-2 text-xs">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-slate-300 hover:text-red-400 py-1 transition-colors flex items-center gap-1 group"
                >
                  <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-red-400 transition-colors" />
                  <span className="truncate">{link.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Columna 3: Sedes Compactas (Con Switcher en Móvil y Grid Paralelo en Desktop) */}
          <div className="lg:col-span-5">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 flex items-center gap-1.5">
                <MapPin size={13} className="text-red-400" />
                <span>Sedes y Cobertura Nacional</span>
              </h4>

              {/* Selector Móvil de Sede (Pestañas para reducir altura en smartphones) */}
              <div className="flex sm:hidden bg-slate-800/80 p-0.5 rounded-lg border border-slate-700/60">
                <button
                  type="button"
                  onClick={() => setActiveSede("caracas")}
                  className={`px-2.5 py-1 text-[11px] font-bold rounded-md transition-all ${
                    activeSede === "caracas"
                      ? "bg-[#991b1b] text-white shadow-xs"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Caracas
                </button>
                <button
                  type="button"
                  onClick={() => setActiveSede("maracay")}
                  className={`px-2.5 py-1 text-[11px] font-bold rounded-md transition-all ${
                    activeSede === "maracay"
                      ? "bg-[#991b1b] text-white shadow-xs"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Maracay
                </button>
              </div>
            </div>

            {/* Contenedor de Sedes: Tarjetas Paralelas en Desktop / Tarjeta Activa en Móvil */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Sede Caracas */}
              <div
                className={`bg-slate-900/90 border border-slate-800 rounded-xl p-3 sm:p-3.5 space-y-2 text-xs transition-all ${
                  activeSede === "caracas" ? "block" : "hidden sm:block"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white text-xs flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                    Caracas (Principal)
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">RIF {caracas.rif}</span>
                </div>
                <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">
                  {caracas.address}
                </p>
                <div className="pt-1.5 border-t border-slate-800/80 flex flex-col gap-1 text-[11px]">
                  <a
                    href={`tel:${caracas.phones.main}`}
                    className="flex items-center gap-1.5 text-slate-300 hover:text-red-400 transition-colors"
                  >
                    <Phone size={11} className="text-red-400 shrink-0" />
                    <span>{caracas.phones.main}</span>
                  </a>
                  <a
                    href={`mailto:${caracas.email}`}
                    className="flex items-center gap-1.5 text-slate-300 hover:text-red-400 transition-colors truncate"
                  >
                    <Mail size={11} className="text-red-400 shrink-0" />
                    <span className="truncate">{caracas.email}</span>
                  </a>
                  <div className="flex items-center gap-1.5 text-slate-400 text-[10px]">
                    <Clock size={11} className="text-slate-500 shrink-0" />
                    <span>{caracas.schedule}</span>
                  </div>
                </div>
              </div>

              {/* Sede Maracay */}
              <div
                className={`bg-slate-900/90 border border-slate-800 rounded-xl p-3 sm:p-3.5 space-y-2 text-xs transition-all ${
                  activeSede === "maracay" ? "block" : "hidden sm:block"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white text-xs flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                    Maracay (Taller Centro)
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">RIF {maracay.rif}</span>
                </div>
                <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">
                  {maracay.address}
                </p>
                <div className="pt-1.5 border-t border-slate-800/80 flex flex-col gap-1 text-[11px]">
                  <a
                    href={`tel:${maracay.phones.ventas[0]}`}
                    className="flex items-center gap-1.5 text-slate-300 hover:text-red-400 transition-colors"
                  >
                    <Phone size={11} className="text-red-400 shrink-0" />
                    <span>{maracay.phones.ventas[0]}</span>
                  </a>
                  <a
                    href={`mailto:${maracay.email}`}
                    className="flex items-center gap-1.5 text-slate-300 hover:text-red-400 transition-colors truncate"
                  >
                    <Mail size={11} className="text-red-400 shrink-0" />
                    <span className="truncate">{maracay.email}</span>
                  </a>
                  <div className="flex items-center gap-1.5 text-slate-400 text-[10px]">
                    <Clock size={11} className="text-slate-500 shrink-0" />
                    <span>{maracay.schedule}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── TIRA MINIMALISTA DE MARCAS Y PARTNERS ── */}
        <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <span className="text-slate-500 font-bold uppercase tracking-wider text-[10px]">
            Marcas Autorizadas:
          </span>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {BRANDS.map((brand) => (
              <span
                key={brand.name}
                className="px-2.5 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-slate-400 text-[11px] hover:text-white hover:border-red-500/40 transition-colors"
              >
                {brand.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── BARRA INFERIOR DE DERECHOS Y RIFS ── */}
      <div className="border-t border-slate-800/90 py-3.5 bg-black/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-2 text-[11px] text-slate-500 text-center sm:text-left">
          <span>
            © {year} Balanzas y Servicios Dialka, S.A. Todos los derechos reservados.
          </span>
          <span>
            Caracas: J-30814715-0 · Maracay: J-50269333-5 · Certificación SENCAMER
          </span>
        </div>
      </div>
    </footer>
  );
}
