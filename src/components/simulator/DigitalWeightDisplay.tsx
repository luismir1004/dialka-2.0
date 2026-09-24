import React from "react";
import { AlertTriangle, CheckCircle2, Zap } from "lucide-react";

interface DigitalWeightDisplayProps {
  displayedKg: number;
  displayedTons: string;
  isNetMode: boolean;
  tareKg: number;
  isOverload: boolean;
  isWarning: boolean;
  isZero: boolean;
  isStable: boolean;
  percentage: number;
}

export function DigitalWeightDisplay({
  displayedKg,
  displayedTons,
  isNetMode,
  tareKg,
  isOverload,
  isWarning,
  isZero,
  isStable,
  percentage,
}: DigitalWeightDisplayProps) {
  return (
    <>
      {/* ── DISPLAY DIGITAL LED INDUSTRIAL (ESTILO TERMINAL TOLEDO / RICE LAKE) ── */}
      <div className="w-full max-w-lg mt-3 bg-black/95 border-2 border-slate-700/90 rounded-2xl p-4 sm:p-5 shadow-[inset_0_3px_12px_rgba(0,0,0,0.95),0_6px_25px_rgba(0,0,0,0.6)] relative overflow-hidden">
        {/* CRT Scanline & Phosphor Grid effect */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] [background-size:100%_4px,6px_100%] pointer-events-none opacity-40" />

        <div className="relative z-10 flex flex-wrap items-center justify-between text-[10px] sm:text-[11px] font-mono tracking-widest text-slate-400 mb-2.5 border-b border-slate-800 pb-2 gap-2">
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            <span
              className={`px-2 py-0.5 rounded text-[9px] sm:text-[10px] font-bold ${
                isNetMode
                  ? "bg-amber-950 text-amber-300 border border-amber-600/50"
                  : "text-slate-600"
              }`}
            >
              NETO
            </span>
            <span
              className={`px-2 py-0.5 rounded text-[9px] sm:text-[10px] font-bold ${
                !isNetMode
                  ? "bg-emerald-950 text-emerald-300 border border-emerald-600/50"
                  : "text-slate-600"
              }`}
            >
              BRUTO
            </span>
            {tareKg > 0 && (
              <span className="text-slate-400 text-[9px] sm:text-[10px]">
                TARA: {tareKg.toLocaleString("es-VE")} kg
              </span>
            )}
          </div>
          <span className="text-emerald-400/90 font-bold">d = 20 kg</span>
        </div>

        {/* Lectura Numérica Gigante 7-Segmentos con Phosphor Glow */}
        <div className="relative z-10 flex items-baseline justify-between gap-2">
          <span
            className={`font-mono text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-black tabular-nums tracking-tight drop-shadow-md transition-colors duration-200 ${
              isOverload
                ? "text-red-500 animate-pulse"
                : isWarning
                ? "text-amber-400"
                : "text-emerald-400"
            }`}
            style={{
              textShadow: isOverload
                ? "0 0 10px #ef4444, 0 0 25px rgba(239, 68, 68, 0.85), 0 0 50px rgba(239, 68, 68, 0.5)"
                : isWarning
                ? "0 0 10px #f59e0b, 0 0 25px rgba(245, 158, 11, 0.85), 0 0 50px rgba(245, 158, 11, 0.5)"
                : "0 0 10px #10b981, 0 0 25px rgba(16, 185, 129, 0.85), 0 0 50px rgba(16, 185, 129, 0.5)",
            }}
          >
            {displayedKg.toLocaleString("es-VE")}
          </span>
          <div className="text-right shrink-0">
            <span className="font-mono text-lg sm:text-2xl font-black text-slate-300">
              kg
            </span>
            <div className="text-[11px] sm:text-xs font-mono font-bold text-slate-400">
              {displayedTons} t
            </div>
          </div>
        </div>

        {/* Barra Gráfica de Segmentos LED Progresivos */}
        <div className="relative z-10 mt-4 pt-3 border-t border-slate-850">
          <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 mb-1">
            <span>0% Carga</span>
            <span>Capacidad Plataforma: 80.000 kg</span>
            <span>{percentage.toFixed(0)}%</span>
          </div>
          <div className="grid grid-cols-20 gap-1 h-2 w-full bg-slate-900 rounded-sm p-0.5">
            {Array.from({ length: 20 }).map((_, i) => {
              const segPercent = (i + 1) * 5;
              const isActive = percentage >= segPercent;
              let colorClass = "bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.8)]";
              if (segPercent > 70) colorClass = "bg-amber-500 shadow-[0_0_6px_rgba(245,158,11,0.8)]";
              if (segPercent > 85) colorClass = "bg-red-500 shadow-[0_0_6px_rgba(239,68,68,0.9)]";

              return (
                <div
                  key={i}
                  className={`h-full rounded-2xs transition-all duration-150 ${
                    isActive ? colorClass : "bg-slate-800/80"
                  }`}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* ── BANNER DE ESTADO DINÁMICO EN TIEMPO REAL (CERO, PESANDO, SOBRECARGA) ── */}
      <div
        className={`w-full max-w-lg mt-3 p-3 rounded-2xl border transition-all duration-200 flex items-center gap-3 ${
          isOverload
            ? "bg-red-950/90 border-red-500 text-red-100 shadow-[0_0_20px_rgba(239,68,68,0.4)] animate-pulse"
            : isWarning
            ? "bg-amber-950/90 border-amber-500/80 text-amber-100 shadow-[0_0_15px_rgba(245,158,11,0.3)]"
            : isZero
            ? "bg-emerald-950/90 border-emerald-500/70 text-emerald-100 shadow-[0_0_15px_rgba(16,185,129,0.3)]"
            : "bg-slate-900/90 border-cyan-500/50 text-cyan-100 shadow-[0_0_15px_rgba(6,182,212,0.2)]"
        }`}
      >
        <div className="shrink-0 p-2 rounded-xl bg-black/40 border border-white/10">
          {isOverload ? (
            <AlertTriangle size={20} className="text-red-400 animate-bounce" />
          ) : isWarning ? (
            <AlertTriangle size={20} className="text-amber-400 animate-pulse" />
          ) : isZero ? (
            <CheckCircle2 size={20} className="text-emerald-400" />
          ) : (
            <Zap size={20} className="text-cyan-400 animate-pulse" />
          )}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <span className="text-xs sm:text-sm font-black tracking-wide uppercase truncate">
              {isOverload
                ? "Sobrecarga Crítica (>70T)"
                : isWarning
                ? "Carga Elevada · Zona de Alerta"
                : isZero
                ? "Báscula en Cero · Calibrada"
                : isStable
                ? "Pesaje Activo · Estable"
                : "Estabilizando Celdas..."}
            </span>
            <span
              className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full shrink-0 ${
                isOverload
                  ? "bg-red-900 text-red-200"
                  : isWarning
                  ? "bg-amber-900 text-amber-200"
                  : isZero
                  ? "bg-emerald-900 text-emerald-200"
                  : "bg-cyan-900 text-cyan-200"
              }`}
            >
              {percentage.toFixed(0)}% CARGA
            </span>
          </div>
          <p className="text-[11px] opacity-80 truncate mt-0.5">
            {isOverload
              ? "Excede capacidad legal estándar. Requiere báscula Dialka para 80T - 100T."
              : isWarning
              ? "Aproximándose al límite máximo de carga para transporte por carretera (COVENIN)."
              : isZero
              ? "Plataforma libre. Celdas balanceadas listas para ingreso de vehículo."
              : `Lectura metrológica dentro del rango legal COVENIN / SENCAMER.`}
          </p>
        </div>
      </div>
    </>
  );
}
