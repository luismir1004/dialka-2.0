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
    badge: "Principal",
  },
  {
    label: "Servicio Técnico",
    href: "/servicios",
    desc: "Calibración trazable y mantenimiento en planta",
    icon: Wrench,
    badge: "Calibración",
  },
  {
    label: "Equipos SENCAMER",
    href: "/sencamer",
    desc: "Aprobación de modelo legal metrológica",
    icon: Scale,
    badge: "Oficial",
  },
  {
    label: "Catálogo de Productos",
    href: "/productos",
    desc: "Básculas industriales, comerciales y pesas",
    icon: Package,
    badge: "Catálogo",
  },
  {
    label: "Alquiler de Equipos",
    href: "/alquiler",
    desc: "Sistemas portátiles 20T y 40T para zafras",
    icon: CalendarDays,
    badge: "Disponibilidad",
  },
  {
    label: "Software de Pesaje",
    href: "/software",
    desc: "5 sistemas propios para camiones y silos",
    icon: Monitor,
    badge: "Desarrollo",
  },
  {
    label: "Contactos y Sedes",
    href: "/contacto",
    desc: "Sedes operativas en Caracas, Maracay y USA",
    icon: Phone,
    badge: "CCS / MCY",
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

  // Bloqueo de scroll en body mientras el menú está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* ── BACKDROP CON BLUR TRANSLÚCIDO ── */}
      <div
        className={`fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-md lg:hidden transition-opacity duration-300 ease-in-out ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* ── PANEL DESLIZANTE LATERAL (DRAWER A 60 FPS) ── */}
      <aside
        id="mobile-navigation-drawer"
        className={`fixed inset-y-0 right-0 z-50 w-[88vw] max-w-sm h-full max-h-screen bg-white backdrop-blur-xl border-l border-slate-200 shadow-2xl lg:hidden flex flex-col justify-between transition-transform duration-300 ease-out transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Menú principal de navegación móvil"
      >
        {/* Cabecera del Drawer: Logotipo Oficial y Botón de Cierre */}
        <div className="p-4 sm:p-5 border-b border-slate-200/90 flex items-center justify-between bg-slate-50/90 shrink-0">
          <Link href="/" onClick={onClose} className="flex items-center gap-2 group">
            <div className="relative h-9 w-36 flex items-center">
              <Image
                src="/images/logo-dialka.svg"
                alt="Balanzas y Servicios Dialka, S.A."
                width={200}
                height={50}
                priority
                className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </div>
          </Link>

          <button
            type="button"
            onClick={onClose}
            className="min-h-[44px] min-w-[44px] w-11 h-11 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-[#991b1b] hover:border-red-300 active:scale-90 transition-all flex items-center justify-center cursor-pointer shadow-2xs"
            aria-label="Cerrar menú de navegación"
          >
            <X size={22} className="text-[#991b1b]" />
          </button>
        </div>

        {/* ── CUERPO: LAS 7 PANTALLAS PRINCIPALES OFICIALES ── */}
        <div className="p-4 sm:p-5 overflow-y-auto flex-1 space-y-2">
          <div className="flex items-center justify-between text-[11px] font-black uppercase tracking-wider text-slate-400 px-1 mb-2">
            <span>Secciones Principales</span>
            <span className="text-[10px] font-bold text-red-700 bg-red-50 px-2 py-0.5 rounded-full border border-red-200/60">
              7 Pantallas
            </span>
          </div>

          <nav className="space-y-1.5" aria-label="Navegación por pantallas principales">
            {MAIN_SCREENS.map((screen) => {
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
                  className={`flex items-center justify-between min-h-[52px] p-3 rounded-xl font-bold transition-all text-sm sm:text-base active:scale-[0.98] group ${
                    isActive
                      ? "bg-red-50 text-[#991b1b] border-l-4 border-[#991b1b] shadow-2xs font-extrabold"
                      : "text-slate-800 hover:bg-slate-50 hover:text-[#991b1b] border-l-4 border-transparent"
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors shrink-0 ${
                        isActive
                          ? "bg-[#991b1b] text-white shadow-2xs"
                          : "bg-slate-100 text-slate-600 group-hover:bg-red-50 group-hover:text-[#991b1b]"
                      }`}
                    >
                      <IconComp size={19} />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="truncate">{screen.label}</span>
                      </div>
                      <p className="text-[10px] text-slate-400 font-normal truncate mt-0.5">
                        {screen.desc}
                      </p>
                    </div>
                  </div>

                  <ArrowRight
                    size={16}
                    className={`shrink-0 transition-transform ${
                      isActive
                        ? "text-[#991b1b] translate-x-0.5"
                        : "text-slate-300 group-hover:text-[#991b1b] group-hover:translate-x-1"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>
        </div>

        {/* ── PIE DEL MENÚ: ACCIONES RÁPIDAS ORDENADAS (WHATSAPP Y TELÉFONOS) ── */}
        <div className="p-4 sm:p-5 border-t border-slate-200 bg-slate-50/95 space-y-2.5 shrink-0">
          {/* Botón Destacado de Cotización Inmediata por WhatsApp */}
          <a
            href={`https://wa.me/${CONTACT.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 min-h-[48px] bg-[#25D366] hover:bg-[#20bd5a] active:scale-95 text-white font-bold py-3 px-4 rounded-xl shadow-xs text-sm transition-all cursor-pointer"
          >
            <Phone size={16} />
            <span>Cotizar por WhatsApp</span>
          </a>

          {/* Accesos Rápidos a Teléfonos Oficiales (CCS, MCY, USA) */}
          <div className="flex items-center justify-between gap-1.5 text-[11px] font-bold">
            <a
              href={`tel:${ccsPhone.replace(/\s+/g, "").replace(/[()]/g, "")}`}
              className="flex-1 inline-flex items-center justify-center gap-1 py-2 px-2 rounded-lg bg-white border border-slate-200 hover:border-red-300 text-slate-800 active:scale-95 transition-all truncate shadow-2xs"
              title={`Llamar a Caracas: ${ccsPhone}`}
            >
              <Phone size={11} className="text-[#991b1b] shrink-0" />
              <span>CCS</span>
            </a>

            <a
              href="tel:+582432343360"
              className="flex-1 inline-flex items-center justify-center gap-1 py-2 px-2 rounded-lg bg-white border border-slate-200 hover:border-red-300 text-slate-800 active:scale-95 transition-all truncate shadow-2xs"
              title="Llamar a Maracay: 0243-234.33.60"
            >
              <Phone size={11} className="text-[#991b1b] shrink-0" />
              <span>MCY</span>
            </a>

            <a
              href={`tel:${usaPhone.replace(/\s+/g, "").replace(/[()]/g, "").replace(/-/g, "")}`}
              className="flex-1 inline-flex items-center justify-center gap-1 py-2 px-2 rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 active:scale-95 transition-all truncate shadow-2xs"
              title={`Llamar a USA: ${usaPhone}`}
            >
              <span className="text-xs" role="img" aria-label="Bandera USA">🇺🇸</span>
              <span>USA</span>
            </a>
          </div>

          {/* Información Institucional en el Pie */}
          <div className="pt-1 flex items-center justify-between text-[10px] text-slate-500 font-medium">
            <span>RIF: J-30814715-0</span>
            <a
              href="https://www.instagram.com/balanzasyserviciosdialka"
              target="_blank"
              rel="noreferrer"
              className="text-[#991b1b] hover:underline font-bold inline-flex items-center gap-1"
            >
              <span>@balanzasyserviciosdialka</span>
              <ExternalLink size={10} />
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
