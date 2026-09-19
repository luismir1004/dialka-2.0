"use client";

import React, { useState, useEffect, useId } from "react";
import Image from "next/image";
import {
  Scale,
  Gauge,
  Truck,
  AlertTriangle,
  CheckCircle2,
  RotateCcw,
  Sliders,
  ShieldCheck,
  Zap,
} from "lucide-react";

interface DynamicDialProps {
  initialWeight?: number;
  maxWeight?: number;
  className?: string;
}

const PRESETS = [
  { label: "Báscula en Cero", weight: 0, desc: "Plataforma vacía · 0 kg" },
  { label: "Camioneta 350", weight: 3450, desc: "Vehículo liviano · 3.45 t" },
  { label: "Camión Chuto", weight: 16800, desc: "Chuto sin batea · 16.80 t" },
  { label: "Gándola Granelera", weight: 38750, desc: "Carga agroindustrial · 38.75 t" },
  { label: "Sobrecarga Alerta", weight: 54200, desc: "Excede capacidad · >50 t" },
];

export function DynamicDial({
  initialWeight = 0,
  maxWeight = 60000,
  className = "",
}: DynamicDialProps) {
  const [weight, setWeight] = useState<number>(initialWeight);
  const [isStable, setIsStable] = useState<boolean>(true);
  const [tare, setTare] = useState<number>(0);
  const [isNetMode, setIsNetMode] = useState<boolean>(false);
  const sliderId = useId();

  // Simulate stability stabilization
  useEffect(() => {
    setIsStable(false);
    const timer = setTimeout(() => {
      setIsStable(true);
    }, 400);
    return () => clearTimeout(timer);
  }, [weight]);

  const netWeight = Math.max(0, weight - tare);
  const displayedWeight = isNetMode ? netWeight : weight;
  const isZero = weight === 0;
  const isOverload = weight >= 50000;
  const percentage = Math.min(100, Math.max(0, (weight / maxWeight) * 100));

  // Circular gauge angle: -120deg to +120deg (240 deg total sweep)
  const gaugeAngle = -120 + (percentage / 100) * 240;

  // Truck position on weighbridge platform (0% to 85%)
  const truckPositionPercent = Math.min(85, Math.max(5, (weight / 45000) * 85));

  const handleTare = () => {
    if (tare === 0 && weight > 0) {
      setTare(weight);
      setIsNetMode(true);
    } else {
      setTare(0);
      setIsNetMode(false);
    }
  };

  return (
    <div
      className={`relative overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 text-white shadow-2xl ${className}`}
    >
      {/* Background industrial photo + subtle glowing gradient */}
      <Image
        src="/images/proyectos/montaje-camionera.jpg"
        alt="Plataforma de báscula camionera en patio industrial"
        fill
        sizes="(max-width: 1200px) 100vw, 1200px"
        className="object-cover opacity-10 mix-blend-luminosity pointer-events-none"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(153,27,27,0.22),transparent_55%),radial-gradient(circle_at_bottom_left,rgba(15,23,42,0.95),transparent_60%)] pointer-events-none" />

      {/* Header bar */}
      <div className="relative z-10 px-6 py-5 border-b border-slate-800/80 flex flex-wrap items-center justify-between gap-4 bg-slate-900/60 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-red-950/80 border border-red-500/30 flex items-center justify-center text-red-400 shadow-inner">
            <Gauge size={22} className="text-red-400 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-black tracking-wider uppercase text-white">
                Dial Dinámico de Pesaje
              </span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-red-900/60 border border-red-500/40 text-red-200">
                EN VIVO
              </span>
            </div>
            <p className="text-xs text-slate-400">
              Simulador interactivo de terminal indicador industrial Dialka 2.0
            </p>
          </div>
        </div>

        {/* Status Indicators */}
        <div className="flex items-center gap-2">
          {/* Cero LED */}
          <div
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wider transition-all ${
              isZero
                ? "bg-emerald-950/80 border border-emerald-500/60 text-emerald-300 shadow-[0_0_12px_rgba(16,185,129,0.3)]"
                : "bg-slate-800/50 border border-slate-700/50 text-slate-500"
            }`}
          >
            <span
              className={`w-2 h-2 rounded-full ${
                isZero ? "bg-emerald-400 animate-ping" : "bg-slate-600"
              }`}
            />
            <span>&gt;0&lt; CERO</span>
          </div>

          {/* Estable LED */}
          <div
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wider transition-all ${
              isStable && !isOverload
                ? "bg-cyan-950/80 border border-cyan-500/60 text-cyan-300 shadow-[0_0_12px_rgba(6,182,212,0.3)]"
                : "bg-amber-950/80 border border-amber-500/60 text-amber-300 animate-pulse"
            }`}
          >
            <span
              className={`w-2 h-2 rounded-full ${
                isStable ? "bg-cyan-400" : "bg-amber-400"
              }`}
            />
            <span>{isStable ? "~ ESTABLE" : "PESANDO"}</span>
          </div>

          {/* Sobrecarga LED */}
          {isOverload && (
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wider bg-red-950/90 border border-red-500 text-red-200 animate-bounce shadow-[0_0_15px_rgba(239,68,68,0.5)]">
              <AlertTriangle size={12} className="text-red-400" />
              <span>SOBRECARGA</span>
            </div>
          )}
        </div>
      </div>

      {/* Main Grid: Visual Display + Interactive Controls */}
      <div className="relative z-10 p-6 md:p-8 grid lg:grid-cols-12 gap-8 items-center">
        {/* Columna Izquierda: Dial / Gauge Circular & Digital LED */}
        <div className="lg:col-span-7 flex flex-col items-center justify-center">
          {/* Dial Container */}
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center">
            {/* SVG Circular Gauge */}
            <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 200 200">
              {/* Background Track */}
              <circle
                cx="100"
                cy="100"
                r="80"
                stroke="#1e293b"
                strokeWidth="12"
                fill="transparent"
                strokeDasharray="377"
                strokeDashoffset="75"
                strokeLinecap="round"
              />

              {/* Colored Gauge Arc */}
              <circle
                cx="100"
                cy="100"
                r="80"
                stroke={
                  isOverload
                    ? "#ef4444"
                    : percentage > 70
                    ? "#f59e0b"
                    : "#10b981"
                }
                strokeWidth="12"
                fill="transparent"
                strokeDasharray="377"
                strokeDashoffset={377 - (percentage / 100) * 302}
                strokeLinecap="round"
                className="transition-all duration-300 ease-out"
              />
            </svg>

            {/* Dial Needle */}
            <div
              className="absolute w-full h-full flex items-center justify-center pointer-events-none transition-transform duration-300 ease-out"
              style={{ transform: `rotate(${gaugeAngle}deg)` }}
            >
              <div className="relative w-1 h-32 bg-transparent flex flex-col items-center">
                {/* Needle Tip */}
                <div
                  className={`w-1.5 h-16 rounded-full shadow-lg ${
                    isOverload
                      ? "bg-red-500 shadow-red-500/80"
                      : "bg-red-600 shadow-red-500/50"
                  }`}
                />
              </div>
            </div>

            {/* Center Pivot Point */}
            <div className="absolute w-6 h-6 rounded-full bg-slate-900 border-2 border-red-500 shadow-md z-10 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-white" />
            </div>

            {/* Gauge Dial Markings (0T, 20T, 40T, 60T) */}
            <span className="absolute bottom-6 left-8 text-[11px] font-mono font-bold text-slate-500">
              0t
            </span>
            <span className="absolute top-10 left-8 text-[11px] font-mono font-bold text-slate-500">
              20t
            </span>
            <span className="absolute top-10 right-8 text-[11px] font-mono font-bold text-slate-500">
              40t
            </span>
            <span className="absolute bottom-6 right-8 text-[11px] font-mono font-bold text-red-400">
              60t
            </span>
          </div>

          {/* LED Digital Display Box (Estilo Terminal Industrial Toledo/Rice Lake) */}
          <div className="w-full max-w-md mt-2 bg-black/90 border-2 border-slate-700/80 rounded-2xl p-5 shadow-[inset_0_2px_8px_rgba(0,0,0,0.8),0_4px_20px_rgba(0,0,0,0.5)]">
            <div className="flex items-center justify-between text-[11px] font-mono tracking-widest text-slate-400 mb-2 border-b border-slate-800 pb-1.5">
              <div className="flex items-center gap-3">
                <span className={isNetMode ? "text-amber-400 font-bold" : "text-slate-500"}>
                  NETO
                </span>
                <span className={!isNetMode ? "text-emerald-400 font-bold" : "text-slate-500"}>
                  BRUTO
                </span>
                {tare > 0 && (
                  <span className="text-slate-400">
                    TARA: {tare.toLocaleString("es-VE")} kg
                  </span>
                )}
              </div>
              <span className="text-emerald-400/80">d = 20 kg</span>
            </div>

            {/* Large 7-Segment style Digital Readout */}
            <div className="flex items-baseline justify-between">
              <span
                className={`font-mono text-4xl sm:text-5xl md:text-6xl font-black tracking-tight drop-shadow-md transition-colors ${
                  isOverload
                    ? "text-red-500 animate-pulse"
                    : percentage > 70
                    ? "text-amber-400"
                    : "text-emerald-400"
                }`}
                style={{
                  textShadow: isOverload
                    ? "0 0 20px rgba(239, 68, 68, 0.6)"
                    : "0 0 20px rgba(16, 185, 129, 0.4)",
                }}
              >
                {displayedWeight.toLocaleString("es-VE")}
              </span>
              <div className="text-right">
                <span className="font-mono text-xl sm:text-2xl font-black text-slate-300">
                  kg
                </span>
                <div className="text-[11px] font-mono text-slate-400">
                  {(displayedWeight / 1000).toFixed(2)} t
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Columna Derecha: Controles de Pesaje, Slider y Simulación de Plataforma */}
        <div className="lg:col-span-5 flex flex-col gap-5">
          {/* Vista Gráfica de la Báscula Camionera */}
          <div className="relative rounded-2xl bg-slate-950/80 border border-slate-800 p-4 overflow-hidden">
            <div className="flex items-center justify-between text-xs font-bold text-slate-300 mb-2">
              <span className="flex items-center gap-1.5">
                <Truck size={15} className="text-red-400" />
                <span>Báscula Camionera (18m x 3m)</span>
              </span>
              <span className="text-[11px] text-slate-400 font-mono">
                {weight > 0 ? "Ocupada" : "Despejada"}
              </span>
            </div>

            {/* Mini Platform Visual with Moving Truck */}
            <div className="relative h-20 w-full rounded-xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border border-slate-700/60 flex items-center px-4 overflow-hidden">
              {/* Load cell sensors indicators */}
              <div className="absolute inset-x-4 bottom-1 flex justify-between">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((cell) => (
                  <div
                    key={cell}
                    className={`w-1.5 h-1.5 rounded-full transition-colors ${
                      weight > 0 ? "bg-red-400 animate-pulse" : "bg-slate-600"
                    }`}
                    title={`Celda de Carga #${cell}`}
                  />
                ))}
              </div>

              {/* Truck icon moving along platform */}
              <div
                className="relative transition-all duration-300 ease-out flex items-center"
                style={{
                  left: `${weight === 0 ? 0 : truckPositionPercent}%`,
                  opacity: weight === 0 ? 0.3 : 1,
                }}
              >
                <div className="p-2 rounded-lg bg-red-900/80 border border-red-500/50 text-white shadow-lg flex items-center gap-1.5">
                  <Truck size={20} className={isOverload ? "text-red-300 animate-bounce" : "text-white"} />
                  <span className="text-[10px] font-bold font-mono">
                    {(weight / 1000).toFixed(1)}t
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Weight Slider */}
          <div className="bg-slate-950/90 border border-slate-800 rounded-2xl p-5">
            <div className="flex items-center justify-between mb-3">
              <label
                htmlFor={sliderId}
                className="text-xs font-bold text-slate-300 flex items-center gap-1.5"
              >
                <Sliders size={14} className="text-red-400" />
                <span>Control Deslizante de Peso</span>
              </label>
              <span className="text-xs font-mono font-bold text-red-400">
                {weight.toLocaleString("es-VE")} / {maxWeight.toLocaleString("es-VE")} kg
              </span>
            </div>

            <input
              id={sliderId}
              type="range"
              min="0"
              max={maxWeight}
              step="50"
              value={weight}
              onChange={(e) => setWeight(Number(e.target.value))}
              className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-red-600 focus:outline-none"
            />

            {/* Slider marks */}
            <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-1.5">
              <span>0 kg</span>
              <span>15.000 kg</span>
              <span>30.000 kg</span>
              <span>45.000 kg</span>
              <span className="text-red-400">60.000 kg</span>
            </div>
          </div>

          {/* Preset Buttons */}
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
              Pruebas Rápidas de Carga
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {PRESETS.map((p) => (
                <button
                  key={p.label}
                  type="button"
                  onClick={() => setWeight(p.weight)}
                  className={`p-2.5 rounded-xl text-left border transition-all text-xs font-semibold ${
                    weight === p.weight
                      ? "bg-red-950/80 border-red-500/80 text-white shadow-sm"
                      : "bg-slate-800/60 border-slate-700/60 text-slate-300 hover:bg-slate-800 hover:text-white"
                  }`}
                >
                  <div className="font-bold truncate">{p.label}</div>
                  <div className="text-[10px] text-slate-400 truncate">{p.desc}</div>
                </button>
              ))}

              {/* Tara Action Button */}
              <button
                type="button"
                onClick={handleTare}
                disabled={weight === 0 && tare === 0}
                className="p-2.5 rounded-xl text-left border bg-slate-800/80 border-slate-700 text-slate-300 hover:text-white hover:border-slate-500 transition-all text-xs font-semibold disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <div className="flex items-center gap-1 font-bold">
                  <RotateCcw size={11} />
                  <span>{tare > 0 ? "Limpiar Tara" : "Aplicar Tara"}</span>
                </div>
                <div className="text-[10px] text-slate-400">
                  {tare > 0 ? "Modo Neto activo" : "Restar chuto/vacío"}
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Info */}
      <div className="relative z-10 px-6 py-3.5 bg-slate-950 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <ShieldCheck size={15} className="text-emerald-400" />
          <span>Cumple con Tolerancias Metrológicas SENCAMER / COVENIN 2548</span>
        </div>
        <div className="flex items-center gap-1.5 text-slate-500 text-[11px]">
          <Zap size={13} className="text-amber-400" />
          <span>Conexión directa RS-232 / TCP-IP para software Dialka</span>
        </div>
      </div>
    </div>
  );
}
