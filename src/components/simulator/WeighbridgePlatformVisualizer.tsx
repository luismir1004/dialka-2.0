import React from "react";
import { Truck } from "lucide-react";

interface WeighbridgePlatformVisualizerProps {
  tons: number;
  rawKg: number;
  isOverload: boolean;
  isCellActive: boolean;
  truckPositionPercent: number;
}

export function WeighbridgePlatformVisualizer({
  tons,
  rawKg,
  isOverload,
  isCellActive,
  truckPositionPercent,
}: WeighbridgePlatformVisualizerProps) {
  return (
    <div className="relative rounded-2xl bg-slate-950/90 border border-slate-800 p-4 sm:p-5 overflow-hidden">
      <div className="flex items-center justify-between text-xs font-bold text-slate-300 mb-2.5">
        <span className="flex items-center gap-1.5">
          <Truck size={16} className="text-red-400" />
          <span>Báscula Camionera (18m x 3m)</span>
        </span>
        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
          {tons > 0 ? "Vehículo en Plataforma" : "Plataforma Despejada"}
        </span>
      </div>

      {/* Simulación Gráfica de la Báscula de Concreto */}
      <div className="relative h-24 w-full rounded-xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border border-slate-700/70 flex items-center px-4 overflow-hidden shadow-inner">
        {/* Celdas de Carga de Alta Precisión en la base con efecto flash */}
        <div className="absolute inset-x-6 bottom-1.5 flex justify-between">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((cell) => (
            <div
              key={cell}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                isCellActive
                  ? "bg-amber-300 shadow-[0_0_12px_rgba(252,211,77,1)] scale-125"
                  : tons > 0
                  ? "bg-red-400 shadow-[0_0_8px_rgba(248,113,113,0.8)] animate-pulse"
                  : "bg-slate-700"
              }`}
              title={`Celda de Carga #${cell} activa`}
            />
          ))}
        </div>

        {/* Camión desplazándose según el peso ingresado */}
        <div
          className="relative transition-all duration-300 ease-out flex items-center"
          style={{
            left: `${tons === 0 ? 0 : truckPositionPercent}%`,
            opacity: tons === 0 ? 0.35 : 1,
          }}
        >
          <div
            className={`p-2.5 rounded-xl border transition-colors shadow-lg flex items-center gap-2 ${
              isOverload
                ? "bg-red-950 border-red-500 text-red-100"
                : "bg-red-900/90 border-red-500/60 text-white"
            }`}
          >
            <Truck
              size={22}
              className={isOverload ? "text-red-300 animate-bounce" : "text-white"}
            />
            <div className="flex flex-col">
              <span className="text-[11px] font-mono font-bold leading-tight">
                {tons.toFixed(1)} t
              </span>
              <span className="text-[9px] text-red-200">
                {rawKg.toLocaleString("es-VE")} kg
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
