"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  Scale,
  Phone,
  Clock,
  Copy,
  Building2,
  ShieldCheck,
  ChevronRight,
  Home,
  Wrench,
  Package,
  HardHat,
  CalendarDays,
  Monitor,
  ExternalLink,
} from "lucide-react";
import { NAV_LINKS, CONTACT } from "@/lib/data";
import { useToast } from "@/context/ToastContext";

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const [headerHeight, setHeaderHeight] = useState(96);
  const { copyToClipboard } = useToast();

  // Calcular la altura real del header para posicionar el panel móvil
  useEffect(() => {
    const updateHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  // Cierre automático del menú al cambiar de ruta
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

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

  const ccsPhone =
    ("main" in CONTACT.headquarters[0].phones
      ? CONTACT.headquarters[0].phones.main
      : "") || "(+58 414) 277.00.24";
  const mcyPhone = "0243-234.33.60 / 234.33.72";
  const usaPhone = CONTACT.usa.phone || "+1 (786) 321-4890";

  // Iconos especializados para navegación móvil táctil
  const getNavIcon = (href: string) => {
    switch (href) {
      case "/":
        return <Home size={18} />;
      case "/servicios":
        return <Wrench size={18} />;
      case "/sencamer":
        return <ShieldCheck size={18} />;
      case "/productos":
        return <Package size={18} />;
      case "/proyectos":
        return <HardHat size={18} />;
      case "/alquiler":
        return <CalendarDays size={18} />;
      case "/software":
        return <Monitor size={18} />;
      case "/contacto":
        return <Phone size={18} />;
      default:
        return <ChevronRight size={18} />;
    }
  };

  return (
    <header ref={headerRef} className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-xs">
      {/* ── TOP BAR INSTITUCIONAL (CARACAS, MARACAY, USA Y REDES) ── */}
      <div className="bg-[#991b1b] text-white text-xs py-2 border-b border-[#7f1d1d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Vista Móvil (md:hidden): Caracas, Maracay y USA visibles simultáneamente de forma ordenada y legible */}
          <div className="flex md:hidden flex-wrap items-center justify-center gap-x-2.5 gap-y-1 text-[10px] sm:text-[11px] font-bold py-0.5">
            {/* Caracas */}
            <a
              href={`tel:${ccsPhone.replace(/\s+/g, "").replace(/[()]/g, "")}`}
              className="inline-flex items-center gap-1 text-white hover:text-red-200 active:scale-95 transition-all py-0.5 px-1.5 rounded-md bg-black/20 shrink-0"
              title={`Llamar a Caracas: ${ccsPhone}`}
            >
              <Phone size={10} className="text-red-300 shrink-0" />
              <span>CCS: {ccsPhone}</span>
            </a>

            {/* Maracay */}
            <a
              href="tel:+582432343360"
              className="inline-flex items-center gap-1 text-white hover:text-red-200 active:scale-95 transition-all py-0.5 px-1.5 rounded-md bg-black/20 shrink-0"
              title="Llamar a Maracay: 0243-234.33.60 / 234.33.72"
            >
              <Phone size={10} className="text-red-300 shrink-0" />
              <span>MCY: 0243-234.33.60</span>
            </a>

            {/* USA con bandera */}
            <a
              href={`tel:${usaPhone.replace(/\s+/g, "").replace(/[()]/g, "").replace(/-/g, "")}`}
              className="inline-flex items-center gap-1 text-amber-200 hover:text-white active:scale-95 transition-all py-0.5 px-1.5 rounded-md bg-black/25 shrink-0"
              title={`Llamar a Estados Unidos: ${usaPhone}`}
            >
              <span className="text-xs" role="img" aria-label="Bandera Estados Unidos">🇺🇸</span>
              <span>USA: {usaPhone}</span>
            </a>
          </div>

          {/* Vista Escritorio (hidden md:flex): Caracas, Maracay, USA con banderas e iconos */}
          <div className="hidden md:flex justify-between items-center gap-2">
            {/* Lado Izquierdo: Teléfonos como enlaces directos tel: */}
            <div className="flex flex-wrap items-center gap-2.5 lg:gap-3.5 text-[11px] sm:text-xs">
              {/* Caracas */}
              <a
                href={`tel:${ccsPhone.replace(/\s+/g, "").replace(/[()]/g, "")}`}
                className="inline-flex items-center gap-1.5 hover:text-red-200 transition-colors py-0.5 group"
                title="Clic para llamar a Caracas"
              >
                <Phone size={11} className="text-red-300 shrink-0" />
                <span className="font-semibold">CCS: {ccsPhone}</span>
              </a>

              <span className="text-red-300/60">|</span>

              {/* Maracay */}
              <a
                href="tel:+582432343360"
                className="inline-flex items-center gap-1.5 hover:text-red-200 transition-colors py-0.5 group"
                title="Clic para llamar a Maracay"
              >
                <Phone size={11} className="text-red-300 shrink-0" />
                <span className="font-semibold">MCY: {mcyPhone}</span>
              </a>

              <span className="text-red-300/60">|</span>

              {/* USA con bandera */}
              <a
                href={`tel:${usaPhone.replace(/\s+/g, "").replace(/[()]/g, "").replace(/-/g, "")}`}
                className="inline-flex items-center gap-1.5 text-amber-200 hover:text-white transition-colors py-0.5 group font-bold"
                title="Clic para llamar a USA (+1 786 321-4890)"
              >
                <span className="text-xs" role="img" aria-label="Bandera Estados Unidos">🇺🇸</span>
                <span>USA: {usaPhone}</span>
              </a>
            </div>

            {/* Lado Derecho: Estatus Operativo de Sedes + Enlace a Redes / SENCAMER */}
            <div className="flex items-center gap-2.5 sm:gap-3 text-[11px]">
              {/* Widget Estatus Sedes */}
              <div className="inline-flex items-center gap-1.5 bg-black/25 px-2.5 py-0.5 rounded-full text-red-100 font-medium border border-white/10">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="hidden sm:inline">Sedes:</span>
                <span className="text-white font-semibold">Abiertas</span>
                <span className="text-red-200 text-[10px] hidden md:inline">
                  (08:00–17:00)
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
            <div className="relative h-10 w-36 sm:w-44 flex items-center">
              <Image
                src="/images/logo-dialka.svg"
                alt="Balanzas y Servicios Dialka, S.A."
                width={200}
                height={50}
                priority
                className="h-9 sm:h-10 w-auto object-contain transition-transform group-hover:scale-105 duration-200"
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
                    className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all duration-150 ${
                      isActive
                        ? "bg-red-50 text-[#991b1b]"
                        : "text-slate-700 hover:text-[#991b1b] hover:bg-slate-50"
                    }`}
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
              href={`https://wa.me/${CONTACT.whatsapp}`}
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
            className="lg:hidden min-h-[44px] min-w-[44px] w-11 h-11 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 hover:text-[#991b1b] hover:bg-red-50 hover:border-red-200 active:scale-90 transition-all flex items-center justify-center cursor-pointer shadow-2xs"
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

      {/* ── DRAWER MÓVIL MODERNO DESLIZANTE DESDE LA DERECHA (60 FPS) ── */}
      {/* Backdrop con Blur Translúcido */}
      <div
        className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-md lg:hidden transition-opacity duration-300 ease-in-out ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Panel Deslizante Lateral (Drawer) */}
      <div
        id="mobile-nav-panel"
        className={`fixed top-0 right-0 bottom-0 z-50 w-[88vw] max-w-sm bg-white/95 backdrop-blur-xl border-l border-slate-200/90 shadow-2xl lg:hidden flex flex-col justify-between transition-transform duration-300 ease-out transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Menú de navegación móvil"
      >
        {/* Cabecera del Drawer: Logotipo Oficial + Botón Cerrar */}
        <div className="p-4 sm:p-5 border-b border-slate-200/80 flex items-center justify-between bg-slate-50/90 shrink-0">
          <Link href="/" onClick={() => setMenuOpen(false)} className="flex items-center gap-2">
            <div className="relative h-9 w-36 flex items-center">
              <Image
                src="/images/logo-dialka.svg"
                alt="Balanzas y Servicios Dialka, S.A."
                width={200}
                height={50}
                priority
                className="h-8 w-auto object-contain"
              />
            </div>
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            className="min-h-[44px] min-w-[44px] w-11 h-11 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-[#991b1b] hover:border-red-300 active:scale-90 transition-all flex items-center justify-center cursor-pointer shadow-2xs"
            aria-label="Cerrar menú"
          >
            <X size={22} className="text-[#991b1b]" />
          </button>
        </div>

        {/* Contenido Desplazable del Drawer: Pantallas Reales de Navegación */}
        <div className="p-4 sm:p-5 overflow-y-auto flex-1 space-y-2">
          <div className="text-[11px] font-black uppercase tracking-wider text-slate-400 px-2 mb-2">
            Navegación Principal
          </div>

          <nav className="space-y-1.5" aria-label="Enlaces de navegación móvil">
            {[
              { label: "Inicio", href: "/", icon: Home },
              { label: "Servicio Técnico", href: "/servicios", icon: Wrench },
              { label: "Equipos SENCAMER", href: "/sencamer", icon: Scale },
              { label: "Catálogo de Productos", href: "/productos", icon: Package },
              { label: "Alquiler de Equipos", href: "/alquiler", icon: HardHat },
              { label: "Software de Pesaje", href: "/software", icon: Monitor },
              { label: "Contacto y Sedes", href: "/contacto", icon: Phone },
            ].map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              const IconComponent = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center justify-between min-h-[50px] px-3.5 py-3 rounded-xl font-bold transition-all text-base active:scale-[0.98] ${
                    isActive
                      ? "bg-red-50 text-[#991b1b] border-l-4 border-[#991b1b] shadow-2xs font-extrabold"
                      : "text-slate-800 hover:bg-slate-50 hover:text-[#991b1b] border-l-4 border-transparent"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors shrink-0 ${
                        isActive
                          ? "bg-[#991b1b] text-white shadow-2xs"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      <IconComponent size={18} />
                    </div>
                    <span>{item.label}</span>
                  </div>
                  <ChevronRight
                    size={18}
                    className={isActive ? "text-[#991b1b]" : "text-slate-400"}
                  />
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Footer del Drawer: Acciones Rápidas Ordenadas (WhatsApp y Teléfonos sin saturar) */}
        <div className="p-4 border-t border-slate-200 bg-slate-50/95 space-y-2.5 shrink-0">
          {/* Botón Principal de Cotización por WhatsApp */}
          <a
            href={`https://wa.me/${CONTACT.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 min-h-[46px] bg-[#25D366] hover:bg-[#20bd5a] active:scale-95 text-white font-bold py-2.5 px-4 rounded-xl shadow-xs text-sm transition-all"
          >
            <Phone size={16} />
            <span>Cotizar por WhatsApp</span>
          </a>

          {/* Accesos Telefónicos Rápidos y Compactos */}
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
      </div>
    </header>
  );
}
