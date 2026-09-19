"use client";

import React, { useState } from "react";
import { Award, ShieldCheck, CheckCircle2, Sparkles } from "lucide-react";
import { COMPANY } from "@/lib/data";

export function MissionVisionTabs() {
  const [activeTab, setActiveTab] = useState<"mision" | "vision">("mision");

  return (
    <div className="w-full">
      {/* Selector de Pestañas Interactivas con Fondo Suave */}
      <div className="flex items-center justify-center mb-5 sm:mb-7">
        <div className="inline-flex p-1.5 rounded-2xl bg-slate-100 border border-slate-200/90 shadow-inner">
          <button
            type="button"
            onClick={() => setActiveTab("mision")}
            className={`flex items-center gap-2 px-5 sm:px-7 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
              activeTab === "mision"
                ? "bg-white text-[#991b1b] shadow-sm border border-slate-200/60"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <Award size={16} className={activeTab === "mision" ? "text-[#991b1b]" : "text-slate-400"} />
            <span>Misión Institucional</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("vision")}
            className={`flex items-center gap-2 px-5 sm:px-7 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
              activeTab === "vision"
                ? "bg-white text-[#991b1b] shadow-sm border border-slate-200/60"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <ShieldCheck size={16} className={activeTab === "vision" ? "text-[#991b1b]" : "text-slate-400"} />
            <span>Visión Corporativa</span>
          </button>
        </div>
      </div>

      {/* Contenedor Dinámico con Efecto de Profundidad */}
      <div className="relative">
        {activeTab === "mision" ? (
          <div className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-8 lg:p-10 shadow-sm hover:shadow-xl hover:border-red-200 transition-all duration-300 animate-fadeIn">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-4 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-[#991b1b] shrink-0 shadow-2xs">
                  <Award size={22} />
                </div>
                <div>
                  <h3 className="text-lg sm:text-2xl font-bold text-slate-900 tracking-tight">
                    Misión Institucional
                  </h3>
                  <p className="text-xs text-slate-500">Compromiso con el sector productivo venezolano</p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 self-start sm:self-center text-[11px] font-bold text-red-800 bg-red-50 border border-red-200/60 px-3 py-1 rounded-full">
                <Sparkles size={12} className="text-[#991b1b]" />
                <span>Propósito Dialka</span>
              </span>
            </div>

            <p className="text-slate-700 leading-relaxed text-sm sm:text-base lg:text-lg mb-6">
              {COMPANY.mission}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <div className="group/pillar flex items-center gap-2.5 text-xs font-semibold text-slate-700 bg-slate-50/90 hover:bg-red-50/50 p-3 rounded-xl border border-slate-200/70 hover:border-red-200 transition-all duration-200 shadow-2xs">
                <CheckCircle2 size={15} className="text-[#991b1b] shrink-0 transition-transform group-hover/pillar:scale-110" />
                <span>Precisión certificada</span>
              </div>
              <div className="group/pillar flex items-center gap-2.5 text-xs font-semibold text-slate-700 bg-slate-50/90 hover:bg-red-50/50 p-3 rounded-xl border border-slate-200/70 hover:border-red-200 transition-all duration-200 shadow-2xs">
                <CheckCircle2 size={15} className="text-[#991b1b] shrink-0 transition-transform group-hover/pillar:scale-110" />
                <span>Respaldo en planta</span>
              </div>
              <div className="group/pillar flex items-center gap-2.5 text-xs font-semibold text-slate-700 bg-slate-50/90 hover:bg-red-50/50 p-3 rounded-xl border border-slate-200/70 hover:border-red-200 transition-all duration-200 shadow-2xs">
                <CheckCircle2 size={15} className="text-[#991b1b] shrink-0 transition-transform group-hover/pillar:scale-110" />
                <span>Innovación continua</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-8 lg:p-10 shadow-sm hover:shadow-xl hover:border-red-200 transition-all duration-300 animate-fadeIn">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-4 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-[#991b1b] shrink-0 shadow-2xs">
                  <ShieldCheck size={22} />
                </div>
                <div>
                  <h3 className="text-lg sm:text-2xl font-bold text-slate-900 tracking-tight">
                    Visión Corporativa
                  </h3>
                  <p className="text-xs text-slate-500">Liderazgo y expansión tecnológica a largo plazo</p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 self-start sm:self-center text-[11px] font-bold text-red-800 bg-red-50 border border-red-200/60 px-3 py-1 rounded-full">
                <Sparkles size={12} className="text-[#991b1b]" />
                <span>Futuro Metrológico</span>
              </span>
            </div>

            <p className="text-slate-700 leading-relaxed text-sm sm:text-base lg:text-lg mb-6">
              {COMPANY.vision}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <div className="group/pillar flex items-center gap-2.5 text-xs font-semibold text-slate-700 bg-slate-50/90 hover:bg-red-50/50 p-3 rounded-xl border border-slate-200/70 hover:border-red-200 transition-all duration-200 shadow-2xs">
                <CheckCircle2 size={15} className="text-[#991b1b] shrink-0 transition-transform group-hover/pillar:scale-110" />
                <span>Desarrollo tecnológico propio</span>
              </div>
              <div className="group/pillar flex items-center gap-2.5 text-xs font-semibold text-slate-700 bg-slate-50/90 hover:bg-red-50/50 p-3 rounded-xl border border-slate-200/70 hover:border-red-200 transition-all duration-200 shadow-2xs">
                <CheckCircle2 size={15} className="text-[#991b1b] shrink-0 transition-transform group-hover/pillar:scale-110" />
                <span>Presencia nacional e internacional</span>
              </div>
              <div className="group/pillar flex items-center gap-2.5 text-xs font-semibold text-slate-700 bg-slate-50/90 hover:bg-red-50/50 p-3 rounded-xl border border-slate-200/70 hover:border-red-200 transition-all duration-200 shadow-2xs">
                <CheckCircle2 size={15} className="text-[#991b1b] shrink-0 transition-transform group-hover/pillar:scale-110" />
                <span>Talento humano calificado</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
