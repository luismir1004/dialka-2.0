"use client";

import React, { useState, useEffect, useId, useRef, useCallback, useMemo } from "react";
import Image from "next/image";
import { Gauge, AlertTriangle, ShieldCheck, Zap, Sliders } from "lucide-react";
import { AnalogScaleDial } from "./simulator/AnalogScaleDial";
import { DigitalWeightDisplay } from "./simulator/DigitalWeightDisplay";
import { WeighbridgePlatformVisualizer } from "./simulator/WeighbridgePlatformVisualizer";
import { VehiclePresetControls } from "./simulator/VehiclePresetControls";
import type { LiveWeighingSimulatorProps } from "./simulator/types";

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
  const [isCellActive, setIsCellActive] = useState<boolean>(false);
  const [mobileTab, setMobileTab] = useState<"terminal" | "platform">("terminal");
  const sliderId = useId();
  const animatedTonsRef = useRef(initialTons);

  // Animación fluida de la aguja con física elástica
  useEffect(() => {
    let animationFrameId: number;
    let startTime: number | null = null;
    const startVal = animatedTonsRef.current;
    const targetVal = tons;
    const delta = Math.abs(targetVal - startVal);

    if (delta < 0.05) {
      if (startVal !== targetVal) {
        animationFrameId = requestAnimationFrame(() => {
          setAnimatedTons(targetVal);
          animatedTonsRef.current = targetVal;
        });
      }
      return () => {
        if (animationFrameId) cancelAnimationFrame(animationFrameId);
      };
    }

    const duration = delta < 1.0 ? 70 : Math.min(450, Math.max(200, delta * 5.5));

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(1, elapsed / duration);

      const easeOutProgress = 1 - Math.pow(1 - progress, 3.2);
      const microBounce = delta > 12 && progress < 0.95 ? Math.sin(progress * Math.PI * 1.5) * 0.015 * delta : 0;
      const current = Math.max(0, Math.min(maxTons, startVal + (targetVal - startVal) * easeOutProgress + microBounce));

      setAnimatedTons(current);
      animatedTonsRef.current = current;

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setAnimatedTons(targetVal);
        animatedTonsRef.current = targetVal;
      }
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [tons, maxTons]);

  // Manejo de preset con disparo visual en celdas de carga
  const handlePresetSelect = useCallback((presetTons: number) => {
    setTons(presetTons);
    setIsCellActive(true);
    setTimeout(() => setIsCellActive(false), 500);
  }, []);

  // Conversión metrológica (resolución d = 20 kg)
  const { rawKg, tareKg, displayedKg, displayedTons } = useMemo(() => {
    const raw = Math.round((animatedTons * 1000) / 20) * 20;
    const tare = Math.round((tareTons * 1000) / 20) * 20;
    const net = Math.max(0, raw - tare);
    const dispKg = isNetMode ? net : raw;
    const dispTons = (dispKg / 1000).toFixed(2);
    return { rawKg: raw, tareKg: tare, displayedKg: dispKg, displayedTons: dispTons };
  }, [animatedTons, tareTons, isNetMode]);

  const isZero = animatedTons < 0.1;
  const isOverload = animatedTons >= 70.0;
  const isWarning = animatedTons >= 55.0 && animatedTons < 70.0;
  const percentage = Math.min(100, Math.max(0, (animatedTons / maxTons) * 100));

  const gaugeAngle = useMemo(() => -120 + (percentage / 100) * 240, [percentage]);
  const truckPositionPercent = useMemo(
    () => Math.min(74, Math.max(2, (animatedTons / 60.0) * 74)),
    [animatedTons]
  );

  // Simulación de estabilización de celdas
  useEffect(() => {
    const unshakeTimer = setTimeout(() => setIsStable(false), 0);
    const stableTimer = setTimeout(() => {
      setIsStable(true);
    }, 280);
    return () => {
      clearTimeout(unshakeTimer);
      clearTimeout(stableTimer);
    };
  }, [tons]);

  const handleTareToggle = useCallback(() => {
    if (tareTons === 0 && tons > 0) {
      setTareTons(tons);
      setIsNetMode(true);
    } else {
      setTareTons(0);
      setIsNetMode(false);
    }
  }, [tons, tareTons]);

  const whatsappMessage = useMemo(
    () =>
      encodeURIComponent(
        `Hola Balanzas Dialka, estuve usando el Simulador de Pesaje en Vivo (${displayedTons} t / ${displayedKg.toLocaleString("es-VE")} kg) y deseo solicitar asesoría sobre básculas camioneras y sistemas de pesaje.`
      ),
    [displayedTons, displayedKg]
  );

  return (
    <div className={`relative overflow-hidden rounded-2xl sm:rounded-3xl bg-slate-900 border border-slate-800 text-white shadow-2xl ${className}`}>
      {/* Background industrial photograph */}
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

        {/* ── ANNUNCIATORS / LUCES PILOTO METROLÓGICAS ── */}
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

          {/* LED ESTABLE */}
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

      {/* ── MÓVIL: SELECTOR DE PESTAÑAS TÁCTILES ── */}
      <div className="lg:hidden relative z-10 px-3 py-2 border-b border-slate-800/80 bg-slate-950/75 flex items-center gap-2">
        <button
          type="button"
          onClick={() => setMobileTab("terminal")}
          className={`flex-1 py-2 px-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
            mobileTab === "terminal"
              ? "bg-red-900 text-white shadow-md border border-red-500/60 ring-1 ring-red-500/30"
              : "bg-slate-900/90 border border-slate-800 text-slate-400 hover:text-white"
          }`}
        >
          <Gauge size={14} className={mobileTab === "terminal" ? "text-white" : "text-red-400"} />
          <span>Terminal LED y Aguja</span>
        </button>
        <button
          type="button"
          onClick={() => setMobileTab("platform")}
          className={`flex-1 py-2 px-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
            mobileTab === "platform"
              ? "bg-red-900 text-white shadow-md border border-red-500/60 ring-1 ring-red-500/30"
              : "bg-slate-900/90 border border-slate-800 text-slate-400 hover:text-white"
          }`}
        >
          <Sliders size={14} className={mobileTab === "platform" ? "text-white" : "text-red-400"} />
          <span>Plataforma y Controles</span>
        </button>
      </div>

      {/* ── CUERPO PRINCIPAL: DIAL CIRCULAR + DISPLAY DIGITAL + CONTROLES ── */}
      <div className="relative z-10 p-3 sm:p-6 md:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-10 items-center">
        {/* Columna Izquierda: Terminal LED y Dial Analógico */}
        <div className={`lg:col-span-7 flex-col items-center justify-center ${mobileTab === "terminal" ? "flex" : "hidden lg:flex"}`}>
          <AnalogScaleDial
            percentage={percentage}
            gaugeAngle={gaugeAngle}
            isOverload={isOverload}
            isWarning={isWarning}
          />

          <DigitalWeightDisplay
            displayedKg={displayedKg}
            displayedTons={displayedTons}
            isNetMode={isNetMode}
            tareKg={tareKg}
            isOverload={isOverload}
            isWarning={isWarning}
            isZero={isZero}
            isStable={isStable}
            percentage={percentage}
          />
        </div>

        {/* Columna Derecha: Plataforma Física y Controles de Preset */}
        <div className={`lg:col-span-5 flex-col gap-5 ${mobileTab === "platform" ? "flex" : "hidden lg:flex"}`}>
          <WeighbridgePlatformVisualizer
            tons={tons}
            rawKg={rawKg}
            isOverload={isOverload}
            isCellActive={isCellActive}
            truckPositionPercent={truckPositionPercent}
          />

          <VehiclePresetControls
            tons={tons}
            setTons={setTons}
            maxTons={maxTons}
            tareTons={tareTons}
            handleTareToggle={handleTareToggle}
            handlePresetSelect={handlePresetSelect}
            displayedTons={displayedTons}
            whatsappMessage={whatsappMessage}
            sliderId={sliderId}
          />
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
