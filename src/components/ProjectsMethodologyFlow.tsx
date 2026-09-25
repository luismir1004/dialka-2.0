import React from "react";
import {
  Compass,
  Layers,
  Cpu,
  Truck,
  ArrowRight,
  ShieldCheck,
  Zap,
} from "lucide-react";

const METHODOLOGY_STEPS = [
  {
    step: "01",
    title: "Topografía & Obras Civiles",
    category: "Cimentación y Fosa",
    desc: "Levantamiento topográfico, excavación y vaciado de zapatas y losas de concreto reforzado (280 kg/cm²) con anclajes embebidos y drenajes pluviales.",
    icon: Compass,
    specs: ["Estudio de capacidad de suelo", "Concreto reforzado con fibra", "Drenajes anti-inundación"],
  },
  {
    step: "02",
    title: "Montaje de Módulos",
    category: "Estructura de Acero",
    desc: "Transporte e izamiento de vigas maestras IPE y módulos prefabricados de acero ASTM A36 con grúa telescópica propia. Fijación milimétrica.",
    icon: Layers,
    specs: ["Vigas de alto momento flector", "Pernos de alta resistencia Grado 8", "Topes de oscilación ajustables"],
  },
  {
    step: "03",
    title: "Instrumentación & Celdas",
    category: "Electrónica Metrológica",
    desc: "Montaje de celdas de compresión de doble apoyo con copas autocentrantes, tendido de cableado apantallado en tubería EMT y caja de suma IP68.",
    icon: Cpu,
    specs: ["Celdas digitales / analógicas", "Protección contra descargas atmosféricas", "Hermeticidad contra agua y polvo"],
    isHighlight: true,
  },
  {
    step: "04",
    title: "Pruebas de Carga & Entrega",
    category: "Calibración y Puesta en Marcha",
    desc: "Llegada del camión patrón Dialka con masas certificadas M1 para ensayos de linealidad y excentricidad. Pruebas dinámicas con gandolas y entrega formal.",
    icon: Truck,
    specs: ["Pruebas con peso vivo y masas M1", "Acta de recepción técnica", "Garantía total de 5 años"],
  },
];

export function ProjectsMethodologyFlow() {
  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 text-[#7f1d1d] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-2xs mb-3">
            <ShieldCheck size={13} className="text-[#991b1b]" />
            <span>Metodología de Ejecución de Obras Llave en Mano</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Cómo Construimos su Báscula en Tiempo Récord
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Desde el estudio de suelos hasta la calibración metrológica con gandolas reales. Cero intermediarios y cumplimiento estricto de cronogramas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {METHODOLOGY_STEPS.map((item, index) => {
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
                    ETAPA {item.step}
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

                {index < METHODOLOGY_STEPS.length - 1 && (
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
            <div className="p-2 bg-red-50 border border-red-200 text-[#991b1b] rounded-xl shrink-0">
              <Truck size={20} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">
                Flota y Maquinaria Propia en Todo el País
              </h4>
              <p className="text-xs text-slate-600">
                Camión grúa, unidad de calibración y cuadrilla de ingenieros especializados sin depender de terceros.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs font-mono font-bold text-slate-500">TIEMPO PROMEDIO:</span>
            <span className="text-xs font-bold bg-white border border-slate-200 text-slate-800 px-3 py-1 rounded-lg">
              14 a 21 Días Hábiles
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
