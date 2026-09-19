"use client";

import React, { useState, useEffect, useId, useTransition } from "react";
import Image from "next/image";
import Link from "next/link";
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
  Phone,
  ArrowRight,
  Info,
} from "lucide-react";
import { CONTACT } from "@/lib/data";

interface LiveWeighingSimulatorProps {
  initialTons?: number;
  maxTons?: number;
  className?: string;
}

const VEHICLE_PRESETS = [
  { label: "Báscula en Cero", tons: 0.0, desc: "Plataforma libre · 0 kg" },
  { label: "Camión 350", tons: 4.2, desc: "Vehículo liviano · 4.200 kg" },
  { label: "Chuto Mack 2 Ejes", tons: 16.5, desc: "Chuto vacío · 16.500 kg" },
  { label: "Gándola Batea", tons: 38.8, desc: "Granelera estándar · 38.800 kg" },
  { label: "Tolva 4 Ejes", tons: 58.4, desc: "Agroindustrial · 58.400 kg" },
  { label: "Sobrecarga Crítica", tons: 76.5, desc: "Alerta máxima · >70.000 kg" },
];

export function LiveWeighingSimulator({
  initialTons = 0.0,
  maxTons = 80.0,
  className = "",
}: LiveWeighingSimulatorProps) {
  const [tons, setTons] = useState<number>(initialTons);
  const [animatedTons, setAnimatedTons] = useState<number>(initialTons);
  const [isStable, setIsStable] = useState<boolean>(true);
  const [tareTons, setTareTons] = useState<number>(0);
  const [isNetMode, setIsNetMode] = useState<boolean>(false);
  const [activePreset, setActivePreset] = useState<string | null>(null);
  const [isCellActive, setIsCellActive] = useState<boolean>(false);
  const sliderId = useId();

  // Animación fluida de la aguja con curva física amortiguada
  useEffect(() => {
    let animationFrameId: number;
    let startTime: number | null = null;
    const startVal = animatedTons;
    const targetVal = tons;
    const delta = Math.abs(targetVal - startVal);

    if (delta < 0.05) {
      setAnimatedTons(targetVal);
      return;
    }

    // Duración adaptativa: instantánea para slider continuo, dinámica con desaceleración para saltos de peso
    const duration = delta < 1.0 ? 70 : Math.min(450, Math.max(200, delta * 5.5));

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(1, elapsed / duration);

      // Curva física con desaceleración cúbica y sutil rebote elástico
      const easeOutProgress = 1 - Math.pow(1 - progress, 3.2);
      const microBounce = delta > 12 && progress < 0.95 ? Math.sin(progress * Math.PI * 1.5) * 0.015 * delta : 0;
      const current = Math.max(0, Math.min(maxTons, startVal + (targetVal - startVal) * easeOutProgress + microBounce));

      setAnimatedTons(current);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setAnimatedTons(targetVal);
      }
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [tons, maxTons]);

  // Manejo de preset con disparo visual en celdas de carga
  const handlePresetSelect = (presetTons: number, label: string) => {
    setActivePreset(label);
    setTons(presetTons);
    setIsCellActive(true);
    setTimeout(() => setIsCellActive(false), 500);
  };

  // Conversión de toneladas a kg basada en animatedTons (resolución d = 20 kg metrológica)
  const rawKg = Math.round((animatedTons * 1000) / 20) * 20;
  const tareKg = Math.round((tareTons * 1000) / 20) * 20;
  const netKg = Math.max(0, rawKg - tareKg);
  const displayedKg = isNetMode ? netKg : rawKg;
  const displayedTons = (displayedKg / 1000).toFixed(2);

  const isZero = animatedTons < 0.1;
  const isOverload = animatedTons >= 70.0;
  const isWarning = animatedTons >= 55.0 && animatedTons < 70.0;
  const percentage = Math.min(100, Math.max(0, (animatedTons / maxTons) * 100));

  // Ángulo del dial circular: -120deg a +120deg (barrido total de 240 deg)
  const gaugeAngle = -120 + (percentage / 100) * 240;

  // Posición del camión sobre la plataforma (0% a 74% para evitar desbordes)
  const truckPositionPercent = Math.min(74, Math.max(2, (animatedTons / 60.0) * 74));

  // Simulación de estabilización de celdas
  useEffect(() => {
    setIsStable(false);
    const timer = setTimeout(() => {
      setIsStable(true);
    }, 280);
    return () => clearTimeout(timer);
  }, [tons]);

  const handleTareToggle = () => {
    if (tareTons === 0 && tons > 0) {
      setTareTons(tons);
      setIsNetMode(true);
    } else {
      setTareTons(0);
      setIsNetMode(false);
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hola Balanzas Dialka, estuve usando el Simulador de Pesaje en Vivo (${displayedTons} t / ${displayedKg.toLocaleString("es-VE")} kg) y deseo solicitar asesoría sobre básculas camioneras y sistemas de pesaje.`
  );

  return (
    <div
      className={`relative overflow-hidden rounded-2xl sm:rounded-3xl bg-slate-900 border border-slate-800 text-white shadow-2xl ${className}`}
    >
      {/* Background industrial photograph of Dialka weighbridge + gradient overlay */}
      <Image
        src="/images/proyectos/montaje-camionera.jpg"
        alt="Plataforma de báscula camionera instalada por Dialka"
        fill
        sizes="(max-width: 1200px) 100vw, 1200px"
        className="object-cover opacity-10 mix-blend-luminosity pointer-events-none"
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(153,27,27,0.25),transparent_60%),radial-gradient(ellipse_at_bottom_left,rgba(15,23,42,0.95),transparent_65%)] pointer-events-none" />

      {/* ── HEADER DEL PANEL DE CONTROL DEL SIMULADOR ── */}
      <div className="relative z-10 px-4 py-4 sm:px-6 sm:py-5 border-b border-slate-800/90 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 bg-slate-900/80 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-red-950/90 border border-red-500/40 flex items-center justify-center text-red-400 shadow-inner shrink-0">
            <Gauge size={22} className="text-red-400 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs sm:text-base font-black tracking-wider uppercase text-white">
                Simulador de Pesaje en Vivo
              </span>
              <span className="text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-full bg-red-900/80 border border-red-500/50 text-red-200 animate-pulse">
                TIEMPO REAL
              </span>
            </div>
            <p className="text-[11px] sm:text-xs text-slate-400">
              Terminal metrológico interactivo de 0 a 80 Toneladas · Dialka 2.0
            </p>
          </div>
        </div>

        {/* ── ANNUNCIATORS / LUCES PILOTO METROLÓGICAS EN VIVO ── */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2.5 w-full sm:w-auto justify-start sm:justify-end">
          {/* LED CERO */}
          <div
            className={`flex items-center gap-1 px-2.5 sm:px-3 py-1 rounded-lg text-[10px] sm:text-[11px] font-bold tracking-wider transition-all duration-300 ${
              isZero
                ? "bg-emerald-950/90 border border-emerald-500/80 text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.4)]"
                : "bg-slate-800/60 border border-slate-700/50 text-slate-500"
            }`}
          >
            <span
              className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${
                isZero ? "bg-emerald-400 animate-ping" : "bg-slate-600"
              }`}
            />
            <span>&gt;0&lt; CERO</span>
          </div>

          {/* LED ESTABLE / PESANDO */}
          <div
            className={`flex items-center gap-1 px-2.5 sm:px-3 py-1 rounded-lg text-[10px] sm:text-[11px] font-bold tracking-wider transition-all duration-300 ${
              isStable && !isOverload
                ? "bg-cyan-950/90 border border-cyan-500/80 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                : "bg-amber-950/90 border border-amber-500/80 text-amber-300 animate-pulse shadow-[0_0_15px_rgba(245,158,11,0.3)]"
            }`}
          >
            <span
              className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${
                isStable ? "bg-cyan-400" : "bg-amber-400 animate-bounce"
              }`}
            />
            <span>{isStable ? "~ ESTABLE" : "PESANDO..."}</span>
          </div>

          {/* LED SOBRECARGA */}
          {isOverload && (
            <div className="flex items-center gap-1 px-2.5 sm:px-3 py-1 rounded-lg text-[10px] sm:text-[11px] font-bold tracking-wider bg-red-950 border border-red-500 text-red-200 animate-bounce shadow-[0_0_20px_rgba(239,68,68,0.7)]">
              <AlertTriangle size={12} className="text-red-400" />
              <span>SOBRECARGA</span>
            </div>
          )}
        </div>
      </div>

      {/* ── CUERPO PRINCIPAL: DIAL CIRCULAR + DISPLAY DIGITAL + CONTROLES ── */}
      <div className="relative z-10 p-4 sm:p-6 md:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
        {/* Columna Izquierda (7 cols): Dial Analógico con Aguja Viva + Display LED */}
        <div className="lg:col-span-7 flex flex-col items-center justify-center">
          {/* Dial Circular SVG */}
          <div className="relative w-56 h-56 xs:w-64 xs:h-64 sm:w-80 sm:h-80 flex items-center justify-center">
            <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 220 220">
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

            {/* Aguja Indicadora con Rotación Dinámica y Color Adaptativo (Verde -> Ámbar -> Rojo) */}
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
        </div>

        {/* Columna Derecha (5 cols): Controles Deslizantes, Presets y Plataforma */}
        <div className="lg:col-span-5 flex flex-col gap-5">
          {/* Visual de Plataforma Camionera y Camión Desplazándose */}
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
              onChange={(e) => {
                setActivePreset(null);
                setTons(Number(e.target.value));
              }}
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
                  onClick={() => {
                    setActivePreset(null);
                    setTons((t) => Math.max(0, +(t - 10).toFixed(1)));
                  }}
                  className="min-h-[44px] min-w-[44px] px-3 py-2 flex items-center justify-center rounded-xl bg-slate-800/90 hover:bg-slate-700 active:scale-90 text-slate-200 hover:text-white text-xs font-mono font-bold border border-slate-700/60 cursor-pointer transition-all shadow-xs"
                  title="Restar 10 toneladas"
                >
                  -10t
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setActivePreset(null);
                    setTons((t) => Math.max(0, +(t - 1).toFixed(1)));
                  }}
                  className="min-h-[44px] min-w-[44px] px-3 py-2 flex items-center justify-center rounded-xl bg-slate-800/90 hover:bg-slate-700 active:scale-90 text-slate-200 hover:text-white text-xs font-mono font-bold border border-slate-700/60 cursor-pointer transition-all shadow-xs"
                  title="Restar 1 tonelada"
                >
                  -1t
                </button>
                <button
                  type="button"
                  onClick={() => handlePresetSelect(0, "Báscula en Cero")}
                  className="min-h-[44px] px-3.5 py-2 flex items-center justify-center rounded-xl bg-red-950/90 hover:bg-red-900 active:scale-90 text-red-200 hover:text-white text-xs font-mono font-bold border border-red-700/60 cursor-pointer transition-all shadow-xs"
                  title="Poner a cero"
                >
                  0t (Cero)
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setActivePreset(null);
                    setTons((t) => Math.min(maxTons, +(t + 1).toFixed(1)));
                  }}
                  className="min-h-[44px] min-w-[44px] px-3 py-2 flex items-center justify-center rounded-xl bg-slate-800/90 hover:bg-slate-700 active:scale-90 text-slate-200 hover:text-white text-xs font-mono font-bold border border-slate-700/60 cursor-pointer transition-all shadow-xs"
                  title="Sumar 1 tonelada"
                >
                  +1t
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setActivePreset(null);
                    setTons((t) => Math.min(maxTons, +(t + 10).toFixed(1)));
                  }}
                  className="min-h-[44px] min-w-[44px] px-3 py-2 flex items-center justify-center rounded-xl bg-slate-800/90 hover:bg-slate-700 active:scale-90 text-slate-200 hover:text-white text-xs font-mono font-bold border border-slate-700/60 cursor-pointer transition-all shadow-xs"
                  title="Sumar 10 toneladas"
                >
                  +10t
                </button>
              </div>
            </div>
          </div>

          {/* Botones de Carga Rápida (Presets de Vehículos Venezolanos) con Iluminación Activa */}
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2.5">
              Pruebas Rápidas con Vehículos Reales:
            </span>
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-2">
              {VEHICLE_PRESETS.map((p) => {
                const isSelected = tons === p.tons;
                return (
                  <button
                    key={p.label}
                    type="button"
                    onClick={() => handlePresetSelect(p.tons, p.label)}
                    className={`min-h-[48px] p-3 rounded-xl text-left border transition-all text-xs font-semibold active:scale-95 cursor-pointer relative overflow-hidden ${
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
        </div>
      </div>

      {/* ── FOOTER DEL SIMULADOR CON MARCO NORMATIVO ── */}
      <div className="relative z-10 px-4 py-3 sm:px-6 sm:py-4 bg-slate-950 border-t border-slate-800/90 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4 text-[11px] sm:text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <ShieldCheck size={15} className="text-emerald-400 shrink-0" />
          <span>Cumple con Tolerancias Metrológicas SENCAMER / COVENIN 2548</span>
        </div>
        <div className="flex items-center gap-2 text-slate-400">
          <Zap size={13} className="text-amber-400 shrink-0" />
          <span>Protocolo RS-232 / TCP-IP compatible con Software de Camiones Dialka</span>
        </div>
      </div>
    </div>
  );
}
