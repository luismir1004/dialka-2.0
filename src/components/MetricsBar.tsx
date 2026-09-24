import React from "react";
import { Award, Users, Code2, ThumbsUp } from "lucide-react";
import { AnimatedCounter } from "@/components/AnimatedCounter";

const METRICS = [
  {
    value: "25",
    label: "Años de Trayectoria",
    sublabel: "Desde 2001 en Venezuela",
    icon: Award,
  },
  {
    value: "5.000",
    label: "Proyectos Concluidos",
    sublabel: "Industria y agro venezolano",
    icon: Users,
  },
  {
    value: "307",
    label: "Desarrollos de Software",
    sublabel: "Sistemas en producción",
    icon: Code2,
  },
  {
    value: "100%",
    label: "Calidad y Precisión",
    sublabel: "Trazabilidad metrológica",
    icon: ThumbsUp,
  },
];

export function MetricsBar() {
  return (
    <section className="bg-white border-b border-slate-200 py-4 sm:py-6 md:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contenedor Unificado de Diseño Industrial con Bordes Sutiles y Acentos Rojos */}
        <div className="bg-slate-50/70 border border-slate-200/90 rounded-2xl p-2 sm:p-3 lg:p-4 shadow-2xs hover:shadow-xs transition-all">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-slate-200/80">
            {METRICS.map(({ value, label, sublabel, icon: Icon }, idx) => (
              <div
                key={label}
                className={`p-3 sm:p-4 flex items-center gap-3 sm:gap-4 transition-colors group ${
                  idx % 2 === 1 ? "border-l lg:border-l-0 border-slate-200/80" : ""
                }`}
              >
                {/* Icono minimalista en contenedor corporativo */}
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-white border border-slate-200 group-hover:border-red-200 group-hover:bg-red-50 flex items-center justify-center text-[#991b1b] shrink-0 transition-all shadow-2xs">
                  <Icon size={18} className="transition-transform group-hover:scale-110" />
                </div>

                {/* Número y textos descriptivos compactos */}
                <div className="min-w-0">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-black text-[#991b1b] tracking-tight leading-none mb-1">
                    <AnimatedCounter value={value} />
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900 leading-tight truncate">
                    {label}
                  </div>
                  <div className="text-[10px] sm:text-xs text-slate-500 font-medium truncate mt-0.5">
                    {sublabel}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
