import React from "react";
import {
  FileSearch,
  Scale,
  Award,
  Lock,
  ArrowRight,
  ShieldCheck,
  Zap,
} from "lucide-react";

const LEGAL_STEPS = [
  {
    step: "01",
    title: "Inspección de Modelo",
    category: "Revisión Documental y Física",
    desc: "Verificación de placa serial metrológica, rangos de capacidad, división mínima (e = d) y constancia de aprobación de modelo emitida por SENCAMER.",
    icon: FileSearch,
    specs: ["Verificación de aprobación vigente", "Placa de características inviolable", "Compatibilidad de software metrológico"],
  },
  {
    step: "02",
    title: "Ensayos Metrológicos",
    category: "Pruebas de Tolerancia COVENIN",
    desc: "Ensayos con masas patrón certificadas clase M1/F1: pruebas de repetibilidad de lectura, error de excentricidad y retorno a cero exacto.",
    icon: Scale,
    specs: ["Norma venezolana COVENIN 3133", "Error máximo permitido superado", "Pruebas a 25%, 50%, 75% y 100% de carga"],
  },
  {
    step: "03",
    title: "Dictamen de Conformidad",
    category: "Acreditación Oficial",
    desc: "Emisión de constancia técnica de cumplimiento para transacciones comerciales legales que involucren fijación de precio por peso.",
    icon: Award,
    specs: ["Acreditación legal para comercio", "Protección ante inspecciones SUNDDE", "Validez en todo el territorio nacional"],
    isHighlight: true,
  },
  {
    step: "04",
    title: "Precintado Inviolable",
    category: "Sellado de Seguridad",
    desc: "Instalación de precintos de seguridad plomados o etiquetas destructibles numeradas en el chasis del indicador y caja unión para evitar alteraciones.",
    icon: Lock,
    specs: ["Precinto numerado correlativo", "Imposibilidad de alteración de peso", "Certificado oficial entregado"],
  },
];

export function SencamerLegalRouteFlow() {
  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 text-[#7f1d1d] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-2xs mb-3">
            <ShieldCheck size={13} className="text-[#991b1b]" />
            <span>Ruta Legal de Homologación Metrológica</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Cómo se Homologa y Certifica su Equipo
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Paso a paso para operar con 100% de respaldo jurídico en Venezuela, evitando multas, comisos o sanciones en fiscalizaciones de entes reguladores.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {LEGAL_STEPS.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className={`relative rounded-2xl p-6 transition-all duration-300 ${
                  item.isHighlight
                    ? "bg-slate-900 text-white shadow-xl shadow-red-950/20 ring-2 ring-[#991b1b] border-transparent"
                    : "bg-slate-50 hover:bg-white text-slate-800 border border-slate-200 hover:border-red-200 hover:shadow-lg shadow-2xs"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`font-mono text-xs font-black px-2.5 py-1 rounded-md ${
                      item.isHighlight
                        ? "bg-[#991b1b] text-white"
                        : "bg-slate-200 text-slate-700"
                    }`}
                  >
                    FASE {item.step}
                  </span>
                  <span
                    className={`text-[11px] font-semibold uppercase tracking-wider ${
                      item.isHighlight ? "text-red-300" : "text-slate-500"
                    }`}
                  >
                    {item.category}
                  </span>
                </div>

                <div className="flex items-center gap-3 mb-3">
                  <div
                    className={`p-2.5 rounded-xl ${
                      item.isHighlight
                        ? "bg-white/10 text-white"
                        : "bg-red-50 text-[#991b1b]"
                    }`}
                  >
                    <Icon size={22} />
                  </div>
                  <h3
                    className={`text-lg font-bold tracking-tight ${
                      item.isHighlight ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {item.title}
                  </h3>
                </div>

                <p
                  className={`text-xs sm:text-sm leading-relaxed mb-4 ${
                    item.isHighlight ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  {item.desc}
                </p>

                <ul className="space-y-1.5 pt-3 border-t border-slate-200/50 text-xs">
                  {item.specs.map((spec, sIdx) => (
                    <li
                      key={sIdx}
                      className={`flex items-start gap-1.5 ${
                        item.isHighlight ? "text-slate-300" : "text-slate-600"
                      }`}
                    >
                      <Zap
                        size={12}
                        className={`shrink-0 mt-0.5 ${
                          item.isHighlight ? "text-amber-400" : "text-[#991b1b]"
                        }`}
                      />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>

                {index < LEGAL_STEPS.length - 1 && (
                  <div className="hidden lg:block absolute -right-3.5 top-1/2 -translate-y-1/2 z-20">
                    <div className="w-7 h-7 rounded-full bg-white border border-slate-200 shadow-xs flex items-center justify-center text-slate-400">
                      <ArrowRight size={13} />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10 p-5 rounded-2xl bg-slate-50 border border-slate-200/90 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-xl shrink-0">
              <ShieldCheck size={20} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">
                Respaldo Legal Completo para su Empresa
              </h4>
              <p className="text-xs text-slate-600">
                Todos los instrumentos entregados por Dialka cumplen con los requisitos para emisión de dictámenes favorables en auditorías fiscales y de calidad.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs font-mono font-bold text-slate-500">LEGISLACIÓN:</span>
            <span className="text-xs font-bold bg-white border border-slate-200 text-slate-800 px-3 py-1 rounded-lg">
              Ley de Metrología · SENCAMER VET
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
