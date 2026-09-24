"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import type { HeadquarterInfo } from "@/lib/data";

interface FooterSedesProps {
  caracas: HeadquarterInfo;
  maracay: HeadquarterInfo;
}

export function FooterSedes({ caracas, maracay }: FooterSedesProps) {
  const [activeSede, setActiveSede] = useState<"caracas" | "maracay">("caracas");

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 flex items-center gap-1.5">
          <MapPin size={13} className="text-red-400" />
          <span>Sedes y Cobertura Nacional</span>
        </h4>

        {/* Selector Móvil de Sede (Pestañas para reducir altura en smartphones) */}
        <div className="flex sm:hidden bg-slate-800/80 p-0.5 rounded-lg border border-slate-700/60" role="tablist" aria-label="Seleccionar sede">
          <button
            type="button"
            role="tab"
            aria-selected={activeSede === "caracas"}
            onClick={() => setActiveSede("caracas")}
            className={`px-2.5 py-1 text-[11px] font-bold rounded-md transition-all cursor-pointer ${
              activeSede === "caracas"
                ? "bg-[#991b1b] text-white shadow-xs"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Caracas
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeSede === "maracay"}
            onClick={() => setActiveSede("maracay")}
            className={`px-2.5 py-1 text-[11px] font-bold rounded-md transition-all cursor-pointer ${
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
  );
}
