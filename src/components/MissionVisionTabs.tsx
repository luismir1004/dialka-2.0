"use client";

import React, { useState } from "react";
import { Award, ShieldCheck, CheckCircle2, Sparkles } from "lucide-react";
import { COMPANY } from "@/lib/data";

export function MissionVisionTabs() {
  const [activeTab, setActiveTab] = useState<"mision" | "vision">("mision");

  return (
    <div className="w-full">
      {/* Selector de Pestañas Interactivas */}
      <div className="flex items-center justify-center mb-5 sm:mb-7">
        <div className="inline-flex p-1 rounded-xl bg-slate-100 border border-slate-200/80 shadow-2xs">
          <button
            type="button"
            onClick={() => setActiveTab("mision")}
            className={`flex items-center gap-2 px-4 sm:px-6 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
              activeTab === "mision"
                ? "bg-white text-[#991b1b] shadow-2xs"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <Award size={16} className={activeTab === "mision" ? "text-[#991b1b]" : "text-slate-400"} />
            <span>Misión Institucional</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("vision")}
            className={`flex items-center gap-2 px-4 sm:px-6 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
              activeTab === "vision"
                ? "bg-white text-[#991b1b] shadow-2xs"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <ShieldCheck size={16} className={activeTab === "vision" ? "text-[#991b1b]" : "text-slate-400"} />
            <span>Visión Corporativa</span>
          </button>
        </div>
      </div>

      {/* Contenedor Dinámico con Transición Suave */}
      <div className="relative">
        {activeTab === "mision" ? (
          <div className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-8 lg:p-10 shadow-xs hover:shadow-md transition-all duration-300 animate-fadeIn">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-4 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-[#991b1b] shrink-0 shadow-2xs">
                  <Award size={20} />
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

            <p className="text-slate-700 leading-relaxed text-sm sm:text-base lg:text-lg mb-5">
              {COMPANY.mission}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
              <div className="flex items-center gap-2 text-xs font-medium text-slate-600 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                <CheckCircle2 size={14} className="text-[#991b1b] shrink-0" />
                <span>Precisión certificada</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-slate-600 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                <CheckCircle2 size={14} className="text-[#991b1b] shrink-0" />
                <span>Respaldo en planta</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-slate-600 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                <CheckCircle2 size={14} className="text-[#991b1b] shrink-0" />
                <span>Innovación continua</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-8 lg:p-10 shadow-xs hover:shadow-md transition-all duration-300 animate-fadeIn">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-4 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-[#991b1b] shrink-0 shadow-2xs">
                  <ShieldCheck size={20} />
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

            <p className="text-slate-700 leading-relaxed text-sm sm:text-base lg:text-lg mb-5">
              {COMPANY.vision}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
              <div className="flex items-center gap-2 text-xs font-medium text-slate-600 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                <CheckCircle2 size={14} className="text-[#991b1b] shrink-0" />
                <span>Desarrollo tecnológico propio</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-slate-600 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                <CheckCircle2 size={14} className="text-[#991b1b] shrink-0" />
                <span>Presencia nacional e internacional</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-slate-600 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                <CheckCircle2 size={14} className="text-[#991b1b] shrink-0" />
                <span>Talento humano calificado</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
