"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  Phone,
  ShieldCheck,
  MessageSquare,
} from "lucide-react";
import { NAV_LINKS } from "@/lib/data";
import { SITE_CONFIG } from "@/lib/config";
import { MobileMenu } from "@/components/MobileMenu";
import { cleanTelHref, getBusinessStatusVenezuela } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [businessStatus, setBusinessStatus] = useState(() => getBusinessStatusVenezuela());

  // Actualizar estatus de sedes cada minuto
  useEffect(() => {
    const interval = setInterval(() => {
      setBusinessStatus(getBusinessStatusVenezuela());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  // Detección de scroll para Smart Header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 45);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cierre automático del menú al cambiar de ruta (React 19 pattern)
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMenuOpen(false);
  }

  // Bloquear scroll de fondo cuando el menú móvil esté abierto
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const ccsPhone = SITE_CONFIG.contact.phones.caracas;
  const mcyPhone = SITE_CONFIG.contact.phones.maracay;
  const whatsappDisplay = SITE_CONFIG.contact.whatsappDisplay;

  return (
    <>
      <header ref={headerRef} className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-xs transition-shadow">
      {/* ── TOP BAR INSTITUCIONAL (CARACAS, MARACAY Y WHATSAPP) ── */}
      <div className={`bg-[#991b1b] text-white text-xs border-b border-[#7f1d1d] transition-all duration-300 ${isScrolled ? "md:py-1.5 py-0 border-b-0 md:border-b" : "py-1.5 sm:py-2"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Vista Móvil (md:hidden): Caracas, Maracay y WhatsApp colapsables con el scroll para maximizar pantalla */}
          <div
            className={`flex md:hidden flex-wrap items-center justify-center gap-x-2.5 gap-y-1 text-[11px] font-bold transition-all duration-300 ease-in-out ${
              isScrolled
                ? "max-h-0 opacity-0 -translate-y-1 pointer-events-none py-0 overflow-hidden"
                : "max-h-24 opacity-100 translate-y-0 py-0.5"
            }`}
          >
            {/* Caracas Central */}
            <a
              href={cleanTelHref(ccsPhone)}
              className="inline-flex items-center gap-1 text-white hover:text-red-200 active:scale-95 transition-all py-1 px-2.5 rounded-md bg-black/20 shrink-0 min-h-[32px]"
              title={`Llamar a Caracas Central: ${ccsPhone}`}
            >
              <Phone size={11} className="text-red-300 shrink-0" />
              <span>CCS: {ccsPhone}</span>
            </a>

            {/* Maracay */}
            <a
              href={cleanTelHref(mcyPhone)}
              className="inline-flex items-center gap-1 text-white hover:text-red-200 active:scale-95 transition-all py-1 px-2.5 rounded-md bg-black/20 shrink-0 min-h-[32px]"
              title={`Llamar a Maracay: ${mcyPhone}`}
            >
              <Phone size={11} className="text-red-300 shrink-0" />
              <span>MCY: 0243-234.33.60</span>
            </a>

            {/* WhatsApp Directo */}
            <a
              href={`https://wa.me/${SITE_CONFIG.contact.whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-emerald-200 hover:text-white active:scale-95 transition-all py-1 px-2.5 rounded-md bg-emerald-950/50 border border-emerald-500/40 shrink-0 min-h-[32px]"
              title={`Atención inmediata vía WhatsApp (${whatsappDisplay})`}
            >
              <MessageSquare size={11} className="text-emerald-300 shrink-0" />
              <span>WhatsApp: {whatsappDisplay}</span>
            </a>
          </div>

          {/* Vista Escritorio (hidden md:flex): Caracas, Maracay, WhatsApp y estatus */}
          <div className="hidden md:flex justify-between items-center gap-2">
            {/* Lado Izquierdo: Teléfonos como enlaces directos tel: */}
            <div className="flex flex-wrap items-center gap-2.5 lg:gap-3.5 text-[11px] sm:text-xs">
              {/* Caracas Central */}
              <a
                href={cleanTelHref(ccsPhone)}
                className="inline-flex items-center gap-1.5 hover:text-red-200 transition-colors py-0.5 group"
                title="Central Telefónica Caracas"
              >
                <Phone size={11} className="text-red-300 shrink-0" />
                <span className="font-semibold">CCS: {ccsPhone}</span>
              </a>

              <span className="text-red-300/60">|</span>

              {/* Maracay */}
              <a
                href={cleanTelHref(mcyPhone)}
                className="inline-flex items-center gap-1.5 hover:text-red-200 transition-colors py-0.5 group"
                title="Sede y Talleres Maracay"
              >
                <Phone size={11} className="text-red-300 shrink-0" />
                <span className="font-semibold">MCY: {mcyPhone}</span>
              </a>

              <span className="text-red-300/60">|</span>

              {/* WhatsApp Oficial */}
              <a
                href={`https://wa.me/${SITE_CONFIG.contact.whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-emerald-300 hover:text-white transition-colors py-0.5 group font-bold"
                title="WhatsApp Directo Atención Comercial"
              >
                <MessageSquare size={11} className="text-emerald-400 shrink-0" />
                <span>WhatsApp: {whatsappDisplay}</span>
              </a>
            </div>

            {/* Lado Derecho: Estatus Operativo de Sedes + Enlace a Redes / SENCAMER */}
            <div className="flex items-center gap-2.5 sm:gap-3 text-[11px]">
              {/* Widget Estatus Sedes Inteligente */}
              <div className="inline-flex items-center gap-1.5 bg-black/25 px-2.5 py-0.5 rounded-full text-red-100 font-medium border border-white/10">
                <span className="relative flex h-2 w-2">
                  {businessStatus.isOpen ? (
                    <>
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </>
                  ) : (
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
                  )}
                </span>
                <span className="hidden sm:inline">Sedes:</span>
                <span className={`font-semibold ${businessStatus.isOpen ? "text-white" : "text-amber-200"}`}>
                  {businessStatus.statusText}
                </span>
                <span className="text-red-200 text-[10px] hidden md:inline">
                  {businessStatus.detailText}
                </span>
              </div>

              {/* Enlace Instagram Oficial */}
              <a
                href="https://www.instagram.com/balanzasyserviciosdialka"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 bg-black/25 hover:bg-black/35 px-2.5 py-0.5 rounded-full text-red-100 font-medium border border-white/10 transition-colors"
                title="Visitar Instagram oficial de Dialka"
              >
                <svg
                  className="w-3 h-3 text-pink-300 shrink-0"
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
                <span className="hidden sm:inline">@balanzasyserviciosdialka</span>
                <span className="sm:hidden">Instagram</span>
              </a>

              {/* Badge Trazabilidad SENCAMER */}
              <div className="hidden xl:inline-flex items-center gap-1 bg-black/20 px-2.5 py-0.5 rounded-full text-red-200 text-[10px] border border-white/10">
                <ShieldCheck size={11} className="text-emerald-400" />
                <span>Homologación SENCAMER</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── BARRA PRINCIPAL DE NAVEGACIÓN (CON LOGOTIPO OFICIAL DIALKA) ── */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logotipo Oficial Dialka */}
          <Link href="/" className="flex items-center gap-2.5 group py-1" title="Inicio | Balanzas y Servicios Dialka">
            <div className="relative h-11 w-44 sm:w-56 lg:w-64 flex items-center">
              <Image
                src="/images/logo-dialka.svg"
                alt="Balanzas y Servicios Dialka, S.A."
                width={275}
                height={48}
                priority
                className="h-9 sm:h-10 lg:h-11 w-auto object-contain transition-transform group-hover:scale-105 duration-200"
              />
            </div>
          </Link>

          {/* Navegación de Escritorio */}
          <ul className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-[#991b1b] focus:ring-offset-2 ${
                      isActive
                        ? "bg-red-50 text-[#991b1b]"
                        : "text-slate-700 hover:text-[#991b1b] hover:bg-slate-50"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Botón de Contacto Rápido en Escritorio */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`https://wa.me/${SITE_CONFIG.contact.whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-[#991b1b] hover:bg-[#7f1d1d] text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-all shadow-xs hover:shadow-sm cursor-pointer"
            >
              <Phone size={14} />
              <span>Contactar</span>
            </a>
          </div>

          {/* Botón Menú Móvil (Hamburguesa Táctil) con min-h-[44px] */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden min-h-[44px] min-w-[44px] w-11 h-11 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 hover:text-[#991b1b] hover:bg-red-50 hover:border-red-200 active:scale-90 transition-all flex items-center justify-center cursor-pointer shadow-2xs focus:outline-none focus:ring-2 focus:ring-[#991b1b] focus:ring-offset-2"
            aria-label={menuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación móvil"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-panel"
          >
            {menuOpen ? (
              <X size={24} className="text-[#991b1b] transition-transform duration-200" />
            ) : (
              <Menu size={24} className="transition-transform duration-200" />
            )}
          </button>
        </div>
      </nav>
    </header>

    {/* ── DRAWER MÓVIL MODERNO DESLIZANTE DESDE LA DERECHA (60 FPS) ── */}
    <MobileMenu
      isOpen={menuOpen}
      onClose={() => setMenuOpen(false)}
      ccsPhone={ccsPhone}
      mcyPhone={mcyPhone}
    />
  </>
);
}
