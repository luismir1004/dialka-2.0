import React from "react";
import { Sliders, RotateCcw, Phone, ArrowRight } from "lucide-react";
import { CONTACT } from "@/lib/data";
import { VEHICLE_PRESETS } from "./types";

interface VehiclePresetControlsProps {
  tons: number;
  setTons: React.Dispatch<React.SetStateAction<number>>;
  maxTons: number;
  tareTons: number;
  handleTareToggle: () => void;
  handlePresetSelect: (tons: number) => void;
  displayedTons: string;
  whatsappMessage: string;
  sliderId: string;
}

export function VehiclePresetControls({
  tons,
  setTons,
  maxTons,
  tareTons,
  handleTareToggle,
  handlePresetSelect,
  displayedTons,
  whatsappMessage,
  sliderId,
}: VehiclePresetControlsProps) {
  return (
    <>
      {/* Control Deslizante de Peso en Toneladas Adaptado para Móviles */}
      <div className="bg-slate-950/90 border border-slate-800 rounded-2xl p-4 sm:p-5">
        <div className="flex items-center justify-between mb-3">
          <label
            htmlFor={sliderId}
            className="text-xs font-bold text-slate-300 flex items-center gap-1.5"
          >
            <Sliders size={15} className="text-red-400" />
            <span>Control Deslizante de Toneladas</span>
          </label>
          <span className="text-xs font-mono font-bold text-red-400">
            {tons.toFixed(1)} t / {maxTons.toFixed(1)} t
          </span>
        </div>

        <input
          id={sliderId}
          type="range"
          min="0"
          max={maxTons}
          step="0.2"
          value={tons}
          onChange={(e) => setTons(Number(e.target.value))}
          className="touch-slider touch-pan-y w-full h-3.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-red-600 focus:outline-none"
        />

        {/* Marcas de escala numérica */}
        <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-2">
          <span>0 t</span>
          <span>20 t</span>
          <span>40 t</span>
          <span>60 t</span>
          <span className="text-red-400">80 t (Máx)</span>
        </div>

        {/* Micro-chips de Ajuste Fino Táctil Rápido */}
        <div className="mt-3.5 flex items-center justify-between gap-1.5 pt-3 border-t border-slate-800/80">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider hidden xs:inline">
            Ajuste táctil:
          </span>
          <div className="flex items-center gap-1.5 flex-1 justify-between xs:justify-end">
            <button
              type="button"
              onClick={() => setTons((t) => Math.max(0, +(t - 10).toFixed(1)))}
              className="min-h-[44px] min-w-[44px] px-3 py-2 flex items-center justify-center rounded-xl bg-slate-800/90 hover:bg-slate-700 active:scale-90 text-slate-200 hover:text-white text-xs font-mono font-bold border border-slate-700/60 cursor-pointer transition-all shadow-xs"
              title="Restar 10 toneladas"
            >
              -10t
            </button>
            <button
              type="button"
              onClick={() => setTons((t) => Math.max(0, +(t - 1).toFixed(1)))}
              className="min-h-[44px] min-w-[44px] px-3 py-2 flex items-center justify-center rounded-xl bg-slate-800/90 hover:bg-slate-700 active:scale-90 text-slate-200 hover:text-white text-xs font-mono font-bold border border-slate-700/60 cursor-pointer transition-all shadow-xs"
              title="Restar 1 tonelada"
            >
              -1t
            </button>
            <button
              type="button"
              onClick={() => setTons((t) => Math.min(maxTons, +(t + 1).toFixed(1)))}
              className="min-h-[44px] min-w-[44px] px-3 py-2 flex items-center justify-center rounded-xl bg-slate-800/90 hover:bg-slate-700 active:scale-90 text-slate-200 hover:text-white text-xs font-mono font-bold border border-slate-700/60 cursor-pointer transition-all shadow-xs"
              title="Sumar 1 tonelada"
            >
              +1t
            </button>
            <button
              type="button"
              onClick={() => setTons((t) => Math.min(maxTons, +(t + 10).toFixed(1)))}
              className="min-h-[44px] min-w-[44px] px-3 py-2 flex items-center justify-center rounded-xl bg-slate-800/90 hover:bg-slate-700 active:scale-90 text-slate-200 hover:text-white text-xs font-mono font-bold border border-slate-700/60 cursor-pointer transition-all shadow-xs"
              title="Sumar 10 toneladas"
            >
              +10t
            </button>
            <button
              type="button"
              onClick={() => handlePresetSelect(0)}
              className="min-h-[44px] px-3 py-2 flex items-center justify-center gap-1 rounded-xl bg-slate-800/90 hover:bg-slate-700 active:scale-90 text-red-400 hover:text-red-300 text-xs font-bold border border-slate-700/60 cursor-pointer transition-all shadow-xs"
              title="Poner báscula en cero"
            >
              <RotateCcw size={12} />
              <span className="hidden sm:inline">Cero</span>
            </button>
          </div>
        </div>
      </div>

      {/* Selector Rápido de Presets Industriales y Botón de Tara */}
      <div className="bg-slate-950/90 border border-slate-800 rounded-2xl p-4 sm:p-5">
        <div className="text-xs font-bold text-slate-300 mb-2.5 flex items-center justify-between">
          <span>Presets de Vehículos y Cargas Frecuentes</span>
          <span className="text-[10px] text-slate-500 font-mono">Toca para probar</span>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {VEHICLE_PRESETS.map((p) => {
            const isSelected = Math.abs(tons - p.tons) < 0.15;
            return (
              <button
                key={p.label}
                type="button"
                onClick={() => handlePresetSelect(p.tons)}
                className={`min-h-[48px] p-3 rounded-xl text-left border transition-all text-xs cursor-pointer active:scale-95 ${
                  isSelected
                    ? "bg-gradient-to-br from-red-950 via-slate-900 to-red-950 border-red-500 text-white shadow-[0_0_15px_rgba(239,68,68,0.4)] ring-1 ring-red-500"
                    : "bg-slate-800/60 border-slate-700/60 text-slate-300 hover:bg-slate-800 hover:text-white"
                }`}
              >
                <div className="flex items-center justify-between gap-1">
                  <div className="font-bold truncate">{p.label}</div>
                  {isSelected && (
                    <span className="w-2 h-2 rounded-full bg-red-400 animate-ping shrink-0" />
                  )}
                </div>
                <div className="text-[10px] text-slate-400 truncate">{p.desc}</div>
              </button>
            );
          })}

          {/* Botón de Tara */}
          <button
            type="button"
            onClick={handleTareToggle}
            disabled={tons === 0 && tareTons === 0}
            className="min-h-[48px] p-3 rounded-xl text-left border bg-slate-800/90 border-slate-700 text-slate-200 hover:text-white hover:border-slate-500 active:scale-95 transition-all text-xs font-semibold disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
          >
            <div className="flex items-center gap-1.5 font-bold">
              <RotateCcw size={13} />
              <span>{tareTons > 0 ? "Limpiar Tara" : "Aplicar Tara"}</span>
            </div>
            <div className="text-[10px] text-slate-400">
              {tareTons > 0 ? "Modo Neto Activo" : "Restar chuto/vacío"}
            </div>
          </button>
        </div>
      </div>

      {/* CTA Inmediato de Cotización con el peso simulado */}
      <div className="pt-1">
        <a
          href={`https://wa.me/${CONTACT.whatsapp}?text=${whatsappMessage}`}
          target="_blank"
          rel="noreferrer"
          className="w-full min-h-[48px] inline-flex items-center justify-center gap-2 bg-[#991b1b] hover:bg-[#7f1d1d] active:scale-95 text-white font-bold py-3.5 px-4 rounded-xl shadow-md hover:shadow-lg transition-all text-xs sm:text-sm group cursor-pointer text-center"
        >
          <Phone size={15} className="shrink-0" />
          <span className="truncate">Cotizar Báscula o Servicio ({displayedTons} t)</span>
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform shrink-0" />
        </a>
      </div>
    </>
  );
}
