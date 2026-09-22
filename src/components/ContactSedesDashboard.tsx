"use client";

import { useState, useEffect } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Building2,
  Copy,
  ExternalLink,
  Navigation,
  MessageSquare,
  ShieldCheck,
  Check,
} from "lucide-react";
import { CONTACT } from "@/lib/data";

interface SedeStatus {
  isOpen: boolean;
  badgeText: string;
  subText: string;
}

function computeSedeStatus(): SedeStatus {
  try {
    const formatter = new Intl.DateTimeFormat("en-US", {
      timeZone: "America/Caracas",
      weekday: "short",
      hour: "numeric",
      minute: "numeric",
      hour12: false,
    });
    const parts = formatter.formatToParts(new Date());
    const weekday = (parts.find((p) => p.type === "weekday")?.value || "").toLowerCase();
    const hour = parseInt(parts.find((p) => p.type === "hour")?.value || "0", 10);
    const minute = parseInt(parts.find((p) => p.type === "minute")?.value || "0", 10);
    const isWeekend = weekday.startsWith("sat") || weekday.startsWith("sun");
    const totalMinutes = hour * 60 + minute;
    // 08:00 = 480, 17:00 = 1020
    const isOpen = !isWeekend && totalMinutes >= 480 && totalMinutes < 1020;

    if (isOpen) {
      const remainingMinutes = 1020 - totalMinutes;
      const remHours = Math.floor(remainingMinutes / 60);
      const remMins = remainingMinutes % 60;
      return {
        isOpen: true,
        badgeText: "Sede Abierta Ahora",
        subText: `Cierra a las 17:00 VET (en ${remHours > 0 ? `${remHours}h ` : ""}${remMins}m)`,
      };
    } else {
      return {
        isOpen: false,
        badgeText: "Atención Física Cerrada",
        subText: "Guardia técnica WhatsApp activa 24/7",
      };
    }
  } catch {
    return {
      isOpen: true,
      badgeText: "Horario Operativo",
      subText: "Lunes a Viernes 08:00 – 17:00 VET",
    };
  }
}

interface ContactSedesDashboardProps {
  onCopy: (text: string, label: string) => void;
}

export function ContactSedesDashboard({ onCopy }: ContactSedesDashboardProps) {
  const [activeCity, setActiveCity] = useState<"caracas" | "maracay">("caracas");
  const [status, setStatus] = useState<SedeStatus>(computeSedeStatus);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setStatus(computeSedeStatus());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyField = (text: string, label: string, key: string) => {
    onCopy(text, label);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const hq = activeCity === "caracas" ? CONTACT.headquarters[0] : CONTACT.headquarters[1];
  const isCcs = activeCity === "caracas";

  const googleMapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    isCcs
      ? "Av Los Proceres San Bernardino Caracas Venezuela"
      : "CC Coche Aragua Av Intercomunal Turmero Maracay Venezuela"
  )}`;

  const wazeUrl = `https://waze.com/ul?q=${encodeURIComponent(
    isCcs
      ? "San Bernardino Quinta Los Juanes Caracas"
      : "CC Coche Aragua Maracay Venezuela"
  )}`;

  return (
    <div className="space-y-6">
      {/* ── SELECTOR DE SEDES INTERACTIVO CON INDICADOR DINÁMICO ── */}
      <div className="grid grid-cols-2 p-1.5 bg-slate-200/70 rounded-2xl border border-slate-300/80 gap-1.5 shadow-inner">
        <button
          type="button"
          onClick={() => setActiveCity("caracas")}
          className={`py-3 px-3 sm:px-4 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
            activeCity === "caracas"
              ? "bg-[#991b1b] text-white shadow-md shadow-red-950/20 scale-[1.01]"
              : "text-slate-700 hover:text-slate-900 hover:bg-white/60"
          }`}
        >
          <Building2 size={16} />
          <div className="text-left">
            <span className="block leading-tight">Sede Caracas</span>
            <span className="text-[10px] font-normal opacity-85 hidden sm:block">
              Sede Principal & Laboratorio
            </span>
          </div>
        </button>

        <button
          type="button"
          onClick={() => setActiveCity("maracay")}
          className={`py-3 px-3 sm:px-4 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
            activeCity === "maracay"
              ? "bg-[#991b1b] text-white shadow-md shadow-red-950/20 scale-[1.01]"
              : "text-slate-700 hover:text-slate-900 hover:bg-white/60"
          }`}
        >
          <Building2 size={16} />
          <div className="text-left">
            <span className="block leading-tight">Sede Maracay</span>
            <span className="text-[10px] font-normal opacity-85 hidden sm:block">
              Centro de Atención Regional
            </span>
          </div>
        </button>
      </div>

      {/* ── TARJETA PRINCIPAL DE SEDE ── */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm transition-all duration-300 animate-fadeIn">
        {/* Cabecera de la Sede con Estatus en Vivo */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-100">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center text-[#991b1b] shrink-0 shadow-2xs">
              <Building2 size={24} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Sede {hq.city}
                </h3>
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                  {isCcs ? "Casa Matriz" : "Sucursal Aragua"}
                </span>
              </div>
              <p className="text-xs text-slate-500 font-mono mt-0.5">
                RIF Oficial: <span className="font-semibold text-slate-700">{hq.rif}</span>
              </p>
            </div>
          </div>

          {/* Estado Operativo Dinámico (Reloj en Vivo Venezuela) */}
          <div
            className={`inline-flex items-center gap-2.5 px-3.5 py-2 rounded-xl border text-xs font-semibold self-start sm:self-auto ${
              status.isOpen
                ? "bg-emerald-50 text-emerald-900 border-emerald-200"
                : "bg-amber-50 text-amber-900 border-amber-200"
            }`}
          >
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span
                className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                  status.isOpen ? "bg-emerald-400" : "bg-amber-400"
                }`}
              />
              <span
                className={`relative inline-flex rounded-full h-2.5 w-2.5 ${
                  status.isOpen ? "bg-emerald-500" : "bg-amber-500"
                }`}
              />
            </span>
            <div>
              <div className="font-bold leading-tight">{status.badgeText}</div>
              <div className="text-[10px] opacity-80">{status.subText}</div>
            </div>
          </div>
        </div>

        {/* ── BARRA DE MICRO-ACCIONES DE 1 TOQUE (LLAMAR, WHATSAPP, MAPAS, COPIAR) ── */}
        <div className="py-4 border-b border-slate-100">
          <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2.5">
            Acciones Rápidas en 1 Toque
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {/* Llamar Directo */}
            <a
              href={`tel:${("main" in hq.phones ? hq.phones.main : "").replace(/\s+/g, "").replace(/[()]/g, "")}`}
              className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-slate-50 hover:bg-red-50 text-slate-700 hover:text-[#991b1b] border border-slate-200 hover:border-red-200 text-xs font-bold transition-all active:scale-95"
              title="Llamar a central telefónica"
            >
              <Phone size={14} className="text-[#991b1b]" />
              <span>Llamar Central</span>
            </a>

            {/* WhatsApp Sede */}
            <a
              href={`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(
                `Hola Sede ${hq.city}, deseo solicitar información y atención técnica.`
              )}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs font-bold transition-all active:scale-95"
              title="Abrir WhatsApp directo con la sede"
            >
              <MessageSquare size={14} className="text-emerald-600" />
              <span>WhatsApp</span>
            </a>

            {/* Google Maps */}
            <a
              href={googleMapsSearchUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 text-xs font-bold transition-all active:scale-95"
              title="Abrir ubicación en Google Maps"
            >
              <Navigation size={14} className="text-blue-600" />
              <span>Google Maps</span>
            </a>

            {/* Waze */}
            <a
              href={wazeUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 text-xs font-bold transition-all active:scale-95"
              title="Navegar con Waze"
            >
              <ExternalLink size={14} className="text-sky-500" />
              <span>Abrir en Waze</span>
            </a>
          </div>
        </div>

        {/* ── DATOS DE CONTACTO DETALLADOS ── */}
        <div className="py-4 space-y-3.5 text-sm">
          {/* Dirección */}
          <div className="flex items-start justify-between gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
            <div className="flex items-start gap-3 min-w-0">
              <MapPin size={18} className="text-[#991b1b] mt-0.5 shrink-0" />
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Dirección Física
                </p>
                <p className="text-slate-800 font-medium leading-relaxed text-xs sm:text-sm mt-0.5">
                  {hq.address}
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => handleCopyField(hq.address, `Dirección ${hq.city}`, `addr-${hq.city}`)}
              className="p-2 rounded-lg bg-white hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-all shrink-0 cursor-pointer shadow-2xs"
              title="Copiar dirección"
            >
              {copiedKey === `addr-${hq.city}` ? (
                <Check size={14} className="text-emerald-600" />
              ) : (
                <Copy size={14} />
              )}
            </button>
          </div>

          {/* Teléfonos por Departamento */}
          <div className="grid sm:grid-cols-2 gap-3">
            {/* Ventas */}
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1 flex items-center gap-1">
                <Phone size={11} className="text-[#991b1b]" />
                <span>Atención Ventas</span>
              </p>
              <div className="space-y-1">
                {hq.phones.ventas.map((vPhone) => (
                  <div key={vPhone} className="flex items-center justify-between text-xs">
                    <a
                      href={`tel:${vPhone.replace(/\s+/g, "").replace(/[()]/g, "")}`}
                      className="font-bold text-slate-800 hover:text-[#991b1b] transition-colors"
                    >
                      {vPhone}
                    </a>
                    <button
                      type="button"
                      onClick={() => handleCopyField(vPhone, `Teléfono Ventas`, vPhone)}
                      className="text-slate-400 hover:text-slate-700 cursor-pointer p-0.5"
                    >
                      {copiedKey === vPhone ? (
                        <Check size={12} className="text-emerald-600" />
                      ) : (
                        <Copy size={12} />
                      )}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Servicio Técnico */}
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1 flex items-center gap-1">
                <Phone size={11} className="text-[#991b1b]" />
                <span>Soporte Técnico en Sitio</span>
              </p>
              <div className="space-y-1">
                {hq.phones.soporte.map((sPhone) => (
                  <div key={sPhone} className="flex items-center justify-between text-xs">
                    <a
                      href={`tel:${sPhone.replace(/\s+/g, "").replace(/[()]/g, "")}`}
                      className="font-bold text-slate-800 hover:text-[#991b1b] transition-colors"
                    >
                      {sPhone}
                    </a>
                    <button
                      type="button"
                      onClick={() => handleCopyField(sPhone, `Teléfono Soporte`, sPhone)}
                      className="text-slate-400 hover:text-slate-700 cursor-pointer p-0.5"
                    >
                      {copiedKey === sPhone ? (
                        <Check size={12} className="text-emerald-600" />
                      ) : (
                        <Copy size={12} />
                      )}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Email y Horario */}
          <div className="grid sm:grid-cols-2 gap-3">
            <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
              <div className="flex items-center gap-2.5 min-w-0">
                <Mail size={16} className="text-[#991b1b] shrink-0" />
                <a
                  href={`mailto:${hq.email}`}
                  className="text-xs font-semibold text-slate-800 hover:text-[#991b1b] truncate transition-colors"
                >
                  {hq.email}
                </a>
              </div>
              <button
                type="button"
                onClick={() => handleCopyField(hq.email, `Correo ${hq.city}`, `email-${hq.city}`)}
                className="text-slate-400 hover:text-slate-700 cursor-pointer p-0.5"
              >
                {copiedKey === `email-${hq.city}` ? (
                  <Check size={13} className="text-emerald-600" />
                ) : (
                  <Copy size={13} />
                )}
              </button>
            </div>

            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs">
              <Clock size={16} className="text-slate-400 shrink-0" />
              <span className="text-slate-700 font-medium">{hq.schedule}</span>
            </div>
          </div>
        </div>

        {/* ── MAPA EMBEBIDO CON ACCESO DIRECTO ── */}
        <div className="pt-4 border-t border-slate-100">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <MapPin size={15} className="text-[#991b1b]" />
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Geolocalización GPS — Sede {hq.city}
              </h4>
            </div>
            <a
              href={googleMapsSearchUrl}
              target="_blank"
              rel="noreferrer"
              className="text-xs font-bold text-[#991b1b] hover:underline inline-flex items-center gap-1"
            >
              <span>Ver pantalla completa</span>
              <ExternalLink size={12} />
            </a>
          </div>

          <div className="relative w-full h-52 sm:h-64 rounded-xl overflow-hidden border border-slate-200 shadow-inner bg-slate-100">
            <iframe
              title={`Mapa Sede ${hq.city}`}
              src={`https://maps.google.com/maps?q=${encodeURIComponent(
                isCcs
                  ? "Av. Los Próceres, San Bernardino, Caracas, Venezuela"
                  : "Centro Comercial Coche Aragua, Intercomunal Turmero, Maracay, Venezuela"
              )}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
              className="w-full h-full border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Insignia de Capacidades de Sede */}
          <div className="mt-3 flex flex-wrap items-center gap-2 text-[11px] text-slate-600">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 font-medium">
              <ShieldCheck size={12} className="text-emerald-600" />
              <span>Patrones SENCAMER certificadas</span>
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 font-medium">
              <span>🚚 Camión calibrador propio</span>
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 font-medium">
              <span>⚡ Stock de celdas IP68</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
