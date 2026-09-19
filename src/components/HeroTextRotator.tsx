"use client";

import { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";

const ROTATING_PHRASES = [
  {
    title: "Soluciones de Pesaje Industrial y Comercial",
    tag: "Alta Precisión",
    color: "from-[#991b1b] via-[#b91c1c] to-[#dc2626]",
  },
  {
    title: "Metrología Legal Acreditada SENCAMER",
    tag: "Certificación Oficial",
    color: "from-[#991b1b] via-amber-700 to-amber-600",
  },
  {
    title: "Sistemas de Software Propios",
    tag: "Tecnología Dialka",
    color: "from-[#991b1b] via-red-800 to-rose-600",
  },
];

export function HeroTextRotator() {
  const [index, setIndex] = useState(0);
  const [fadeState, setFadeState] = useState<"in" | "out">("in");

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeState("out");
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % ROTATING_PHRASES.length);
        setFadeState("in");
      }, 300); // 300ms de transición suave de salida
    }, 3600);

    return () => clearInterval(interval);
  }, []);

  const current = ROTATING_PHRASES[index];

  return (
    <div className="min-h-[110px] xs:min-h-[125px] sm:min-h-[140px] md:min-h-[160px] lg:min-h-[180px] flex flex-col justify-center">
      {/* Indicador de píldora de categoría viva */}
      <div className="flex items-center gap-2 mb-2">
        <span
          className={`inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-red-100/80 text-[#991b1b] border border-red-200/60 transition-all duration-300 ${
            fadeState === "in" ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <Sparkles size={12} className="text-[#991b1b] animate-pulse" />
          <span>{current.tag}</span>
        </span>

        {/* Puntos de paginación interactivos */}
        <div className="flex items-center gap-1.5 ml-1">
          {ROTATING_PHRASES.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => {
                setFadeState("out");
                setTimeout(() => {
                  setIndex(i);
                  setFadeState("in");
                }, 200);
              }}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                i === index
                  ? "w-6 bg-[#991b1b]"
                  : "w-2 bg-slate-300 hover:bg-slate-400"
              }`}
              title={`Ver pilar: ${ROTATING_PHRASES[i].title}`}
              aria-label={`Ver pilar: ${ROTATING_PHRASES[i].title}`}
            />
          ))}
        </div>
      </div>

      {/* Titular rotativo animado con gradiente corporativo */}
      <h2
        aria-live="polite"
        className={`text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-black tracking-tight leading-[1.12] text-slate-900 transition-all duration-300 ease-out transform ${
          fadeState === "in"
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2"
        }`}
      >
        <span
          className={`bg-clip-text text-transparent bg-gradient-to-r ${current.color}`}
        >
          {current.title}
        </span>
      </h2>
    </div>
  );
}
