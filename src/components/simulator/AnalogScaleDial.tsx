import React from "react";

interface AnalogScaleDialProps {
  percentage: number;
  gaugeAngle: number;
  isOverload: boolean;
  isWarning: boolean;
}

export function AnalogScaleDial({
  percentage,
  gaugeAngle,
  isOverload,
  isWarning,
}: AnalogScaleDialProps) {
  return (
    <div className="relative w-44 h-44 xs:w-52 xs:h-52 sm:w-80 sm:h-80 flex items-center justify-center">
      {/* SVG Dial Arc */}
      <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 220 220" aria-hidden="true">
        {/* Background Track (240 deg arc) */}
        <circle
          cx="110"
          cy="110"
          r="90"
          stroke="#1e293b"
          strokeWidth="14"
          fill="transparent"
          strokeDasharray="424"
          strokeDashoffset="85"
          strokeLinecap="round"
        />

        {/* Dynamic Color Arc */}
        <circle
          cx="110"
          cy="110"
          r="90"
          stroke={
            isOverload
              ? "#ef4444"
              : isWarning
              ? "#f59e0b"
              : "#10b981"
          }
          strokeWidth="14"
          fill="transparent"
          strokeDasharray="424"
          strokeDashoffset={424 - (percentage / 100) * 339}
          strokeLinecap="round"
          className="transition-colors duration-200"
        />
      </svg>

      {/* Aguja Indicadora con Rotación Dinámica y Color Adaptativo */}
      <div
        className="absolute w-full h-full flex items-center justify-center pointer-events-none"
        style={{
          transform: `rotate(${gaugeAngle}deg)`,
          transformOrigin: "50% 50%",
          willChange: "transform",
        }}
      >
        <div className="relative w-1.5 h-26 sm:h-36 bg-transparent flex flex-col items-center">
          {/* Punta de la aguja con gradiente y sombra reactiva */}
          <div
            className={`w-2.5 h-16 sm:h-20 rounded-full shadow-lg transition-colors duration-200 ${
              isOverload
                ? "bg-red-500 shadow-[0_0_20px_rgba(239,68,68,1),0_0_40px_rgba(239,68,68,0.6)] animate-pulse"
                : isWarning
                ? "bg-amber-400 shadow-[0_0_20px_rgba(245,158,11,1),0_0_35px_rgba(245,158,11,0.5)]"
                : "bg-emerald-400 shadow-[0_0_20px_rgba(16,185,129,1),0_0_35px_rgba(16,185,129,0.5)]"
            }`}
          />
        </div>
      </div>

      {/* Punto Pivote Central Metálico con Anillo Reactivo */}
      <div
        className={`absolute w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-900 border-2 shadow-lg z-10 flex items-center justify-center transition-colors duration-200 ${
          isOverload
            ? "border-red-500 shadow-[0_0_12px_rgba(239,68,68,0.8)]"
            : isWarning
            ? "border-amber-400 shadow-[0_0_12px_rgba(245,158,11,0.7)]"
            : "border-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.7)]"
        }`}
      >
        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-white shadow-inner" />
      </div>

      {/* Marcas de Escala en Toneladas (0t, 20t, 40t, 60t, 80t) */}
      <span className="absolute bottom-5 sm:bottom-6 left-6 sm:left-8 text-[10px] sm:text-[11px] font-mono font-bold text-slate-400">
        0t
      </span>
      <span className="absolute top-12 sm:top-14 left-5 sm:left-7 text-[10px] sm:text-[11px] font-mono font-bold text-slate-400">
        20t
      </span>
      <span className="absolute top-4 sm:top-5 left-1/2 -translate-x-1/2 text-[10px] sm:text-[11px] font-mono font-bold text-slate-400">
        40t
      </span>
      <span className="absolute top-12 sm:top-14 right-5 sm:right-7 text-[10px] sm:text-[11px] font-mono font-bold text-slate-400">
        60t
      </span>
      <span className="absolute bottom-5 sm:bottom-6 right-6 sm:right-8 text-[10px] sm:text-[11px] font-mono font-bold text-red-400">
        80t
      </span>
    </div>
  );
}
