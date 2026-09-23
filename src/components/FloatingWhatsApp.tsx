"use client";

import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";

export function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show after scrolling past 200px or after 3s on page
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      }
    };

    const timer = setTimeout(() => {
      setIsVisible(true);
      setShowTooltip(true);
      // Auto-hide tooltip after 6s
      setTimeout(() => setShowTooltip(false), 6000);
    }, 3000);

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2.5 animate-in fade-in slide-in-from-bottom-5 duration-300">
      {/* Tooltip Emergente Proactivo */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-slate-900 text-white text-xs font-semibold py-2 px-3.5 rounded-2xl shadow-xl border border-slate-700/80 animate-in fade-in slide-in-from-right-3 duration-200 relative">
          <span>¿Necesita asesoría metrológica? <b>Hable con un ingeniero</b></span>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-white p-0.5 rounded-md hover:bg-slate-800 transition-colors"
            aria-label="Cerrar notificación"
          >
            <X size={12} />
          </button>
          {/* Arrow */}
          <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[6px] border-l-slate-900" />
        </div>
      )}

      {/* Botón Principal WhatsApp */}
      <a
        href={`https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=Hola%20Dialka,%20estoy%20en%20la%20web%20y%20deseo%20solicitar%20asesor%C3%ADa%20técnica%20o%20cotización`}
        target="_blank"
        rel="noreferrer"
        className="group relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white shadow-xl shadow-emerald-950/30 transition-all duration-200 border-2 border-white/80 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400"
        aria-label="Chatear por WhatsApp con Balanzas Dialka"
        title={`Atención directa por WhatsApp (${SITE_CONFIG.contact.phones.caracas})`}
      >
        {/* Pulse ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping pointer-events-none" />

        {/* WhatsApp Icon */}
        <MessageCircle size={28} className="transition-transform group-hover:scale-110" />

        {/* Online Indicator Dot */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-white" />
      </a>
    </div>
  );
}
