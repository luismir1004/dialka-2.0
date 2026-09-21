"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Wrench,
  Scale,
  Package,
  CalendarDays,
  Monitor,
  Phone,
  ArrowRight,
  X,
  ExternalLink,
} from "lucide-react";
import { CONTACT } from "@/lib/data";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  ccsPhone?: string;
  mcyPhone?: string;
  usaPhone?: string;
}

// Las 7 pantallas principales oficiales de Dialka 2.0
const MAIN_SCREENS = [
  {
    label: "Inicio",
    href: "/",
    desc: "Portal central y simulador metrológico",
    icon: Home,
  },
  {
    label: "Servicio Técnico",
    href: "/servicios",
    desc: "Calibración trazable y mantenimiento en planta",
    icon: Wrench,
  },
  {
    label: "Equipos SENCAMER",
    href: "/sencamer",
    desc: "Aprobación de modelo legal metrológica",
    icon: Scale,
  },
  {
    label: "Catálogo de Productos",
    href: "/productos",
    desc: "Básculas industriales, comerciales y pesas",
    icon: Package,
  },
  {
    label: "Alquiler de Equipos",
    href: "/alquiler",
    desc: "Sistemas portátiles 20T y 40T para zafras",
    icon: CalendarDays,
  },
  {
    label: "Software de Pesaje",
    href: "/software",
    desc: "5 sistemas propios para camiones y silos",
    icon: Monitor,
  },
  {
    label: "Contactos y Sedes",
    href: "/contacto",
    desc: "Sedes operativas en Caracas, Maracay y USA",
    icon: Phone,
  },
];

export function MobileMenu({
  isOpen,
  onClose,
  ccsPhone = "(+58 414) 277.00.24",
  mcyPhone = "0243-234.33.60 / 234.33.72",
  usaPhone = "+1 (786) 321-4890",
}: MobileMenuProps) {
  const pathname = usePathname();

  // Bloqueo estricto de scroll en body mientras el menú fullscreen está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [isOpen]);

  return (
    <div
      id="mobile-fullscreen-menu"
      className={`fixed inset-0 z-50 bg-white/98 backdrop-blur-2xl lg:hidden flex flex-col justify-between transition-all duration-300 ease-in-out ${
        isOpen
          ? "opacity-100 pointer-events-auto translate-x-0"
          : "opacity-0 pointer-events-none translate-x-full"
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="Menú principal de navegación móvil"
    >
      {/* ── CABECERA INSTITUCIONAL: LOGO OFICIAL Y CIERRE ── */}
      <div className="p-4 sm:p-5 border-b border-slate-200/90 flex items-center justify-between bg-slate-50/90 shrink-0">
        <Link href="/" onClick={onClose} className="flex items-center gap-2 group">
          <div className="relative h-10 w-48 sm:w-56 flex items-center">
            <Image
              src="/images/logo-dialka.svg"
              alt="Balanzas y Servicios Dialka, S.A."
              width={275}
              height={48}
              priority
              className="h-9 sm:h-10 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </div>
        </Link>

        {/* Botón de Cierre (X) amplio y táctil (min-h-[48px]) */}
        <button
          type="button"
          onClick={onClose}
          className="min-h-[48px] min-w-[48px] w-12 h-12 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-[#991b1b] hover:border-red-300 active:scale-90 transition-all flex items-center justify-center cursor-pointer shadow-2xs"
          aria-label="Cerrar menú de navegación"
        >
          <X size={26} className="text-[#991b1b]" />
        </button>
      </div>

      {/* ── NAVEGACIÓN COMERCIAL LIMPIA: LAS 7 PANTALLAS PRINCIPALES ── */}
      <div className="px-4 sm:px-6 py-3 sm:py-4 overflow-y-auto flex-1 space-y-2">
        <nav className="space-y-2" aria-label="Navegación principal">
          {MAIN_SCREENS.map((screen, idx) => {
            const isActive =
              screen.href === "/"
                ? pathname === "/"
                : pathname.startsWith(screen.href);
            const IconComp = screen.icon;

            return (
              <Link
                key={screen.href}
                href={screen.href}
                onClick={onClose}
                style={{
                  transitionDelay: isOpen ? `${idx * 45}ms` : "0ms",
                }}
                className={`flex items-center justify-between min-h-[52px] p-3 rounded-xl transition-all duration-300 transform active:scale-[0.98] group ${
                  isOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-6 opacity-0"
                } ${
                  isActive
                    ? "bg-red-50/90 text-[#991b1b] border-l-4 border-[#991b1b] shadow-2xs font-bold"
                    : "text-slate-800 hover:bg-slate-50 hover:text-[#991b1b] border-l-4 border-transparent hover:border-red-200"
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 shrink-0 group-hover:scale-110 group-active:scale-95 ${
                      isActive
                        ? "bg-[#991b1b] text-white shadow-2xs"
                        : "bg-slate-100 text-slate-600 group-hover:bg-red-50 group-hover:text-[#991b1b]"
                    }`}
                  >
                    <IconComp size={20} className="transition-transform duration-200 group-hover:rotate-3" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-base sm:text-lg font-semibold leading-tight truncate">
                      {screen.label}
                    </div>
                    <p className="text-xs text-slate-500 font-normal truncate mt-0.5">
                      {screen.desc}
                    </p>
                  </div>
                </div>

                <ArrowRight
                  size={16}
                  className={`shrink-0 transition-transform duration-200 ${
                    isActive
                      ? "text-[#991b1b] translate-x-1"
                      : "text-slate-300 group-hover:text-[#991b1b] group-hover:translate-x-1.5"
                  }`}
                />
              </Link>
            );
          })}
        </nav>
      </div>

      {/* ── ACCIONES RÁPIDAS INFERIORES: DOCK INDUSTRIAL MODERNO ── */}
      <div className="p-4 sm:p-5 border-t border-slate-200 bg-gradient-to-b from-slate-50 to-slate-100/90 space-y-3 shrink-0">
        {/* Botón Principal de Cotización Inmediata por WhatsApp con Glow */}
        <a
          href={`https://wa.me/${CONTACT.whatsapp}`}
          target="_blank"
          rel="noreferrer"
          className="w-full inline-flex items-center justify-center gap-2.5 min-h-[50px] bg-gradient-to-r from-[#22c55e] via-[#16a34a] to-[#15803d] hover:from-[#16a34a] hover:to-[#15803d] active:scale-[0.98] text-white font-bold py-3.5 px-4 rounded-xl shadow-md shadow-emerald-600/20 text-sm sm:text-base transition-all duration-200 cursor-pointer group"
        >
          <div className="relative flex items-center justify-center">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white/40 opacity-75"></span>
            <Phone size={18} className="relative transition-transform duration-200 group-hover:scale-110" />
          </div>
          <span className="tracking-wide">Cotizar por WhatsApp</span>
        </a>

        {/* Accesos Rápidos a Teléfonos Oficiales (CCS, MCY, USA) en Tarjetas Táctiles */}
        <div className="grid grid-cols-3 gap-2 text-xs font-bold">
          <a
            href={`tel:${ccsPhone.replace(/\s+/g, "").replace(/[()]/g, "")}`}
            className="inline-flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-white border border-slate-200/90 hover:border-red-300 text-slate-800 hover:text-[#991b1b] active:scale-95 transition-all truncate shadow-2xs"
            title={`Llamar a Caracas: ${ccsPhone}`}
          >
            <Phone size={13} className="text-[#991b1b] shrink-0" />
            <span>CCS</span>
          </a>

          <a
            href={`tel:${mcyPhone.split("/")[0].replace(/\s+/g, "").replace(/-/g, "").replace(/\./g, "")}`}
            className="inline-flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-white border border-slate-200/90 hover:border-red-300 text-slate-800 hover:text-[#991b1b] active:scale-95 transition-all truncate shadow-2xs"
            title={`Llamar a Maracay: ${mcyPhone}`}
          >
            <Phone size={13} className="text-[#991b1b] shrink-0" />
            <span>MCY</span>
          </a>

          <a
            href={`tel:${usaPhone.replace(/\s+/g, "").replace(/[()]/g, "").replace(/-/g, "")}`}
            className="inline-flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200/80 active:scale-95 transition-all truncate shadow-2xs"
            title={`Llamar a USA: ${usaPhone}`}
          >
            <span className="text-xs" role="img" aria-label="Bandera USA">🇺🇸</span>
            <span>USA</span>
          </a>
        </div>

        {/* Información Institucional en el Pie */}
        <div className="pt-1 flex items-center justify-between text-[11px] text-slate-500 font-medium">
          <span>RIF: J-30814715-0 · 25 Años</span>
          <a
            href="https://www.instagram.com/balanzasyserviciosdialka"
            target="_blank"
            rel="noreferrer"
            className="text-[#991b1b] hover:underline font-bold inline-flex items-center gap-1"
          >
            <span>@balanzasyserviciosdialka</span>
            <ExternalLink size={12} />
          </a>
        </div>
      </div>
    </div>
  );
}
