import React from "react";
import {
  Scale,
  Cpu,
  MonitorCheck,
  Server,
  ArrowRight,
  ShieldAlert,
  Workflow,
  Zap,
} from "lucide-react";

const ARCHITECTURE_STEPS = [
  {
    step: "01",
    title: "Celdas y Báscula",
    category: "Captura de Carga",
    desc: "Plataforma camionera, silos o tolvas con celdas de carga y caja unión hermética IP68. Detección en milisegundos del esfuerzo mecánico.",
    icon: Scale,
    specs: ["Básculas 10T a 120T", "Celdas Analógicas / Digitales", "Protección contra sobrecargas"],
    color: "from-slate-700 to-slate-900",
  },
  {
    step: "02",
    title: "Terminal Indicador",
    category: "Conversión de Señal",
    desc: "Digitalización metrológica mediante indicadores industriales multimarca (Toledo, Rice Lake, Cardinal, Fairbanks) con calibración SENCAMER.",
    icon: Cpu,
    specs: ["RS-232 / RS-485 / Ethernet", "Transmisión continua sin latencia", "Protocolos industriales abiertos"],
    color: "from-slate-800 to-slate-950",
  },
  {
    step: "03",
    title: "Dialka WeighMaster",
    category: "Cerebro del Sistema",
    desc: "Captura directa e inviolable del peso. Algoritmos anti-fraude, cálculo de tara previa, neto, merma y verificación de estabilidad de aguja.",
    icon: MonitorCheck,
    specs: ["Cero transcripción manual", "Validación automática de placas", "Fotocelda y cámara opcional"],
    color: "from-[#991b1b] to-[#7f1d1d]",
    isHighlight: true,
  },
  {
    step: "04",
    title: "ERP & Automatización",
    category: "Salida y Control",
    desc: "Generación de comprobantes foliados COVENIN y exportación directa a SAP, Saint, Profit Plus o SQL. Accionamiento de semáforos y barreras.",
    icon: Server,
    specs: ["Tickets fiscales y remisiones", "Sincronización ERP en línea", "Control de barreras y semáforos"],
    color: "from-slate-700 to-slate-900",
  },
];

export function SoftwareArchitectureFlow() {
  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabecera de la sección */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 text-[#7f1d1d] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-2xs mb-3">
            <Workflow size={13} className="text-[#991b1b]" />
            <span>Arquitectura de Conectividad Industrial 4.0</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Cómo se Conecta e Integra su Báscula
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Elimine para siempre el error humano y la manipulación de cifras. Conectamos los sensores de su báscula directamente a su sistema administrativo en 4 etapas automatizadas.
          </p>
        </div>

        {/* Cuadrícula de 4 Pasos del Flujo */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {ARCHITECTURE_STEPS.map((item, index) => {
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
                {/* Paso y Categoría */}
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

                {/* Icono y Título */}
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

                {/* Descripción */}
                <p
                  className={`text-xs sm:text-sm leading-relaxed mb-4 ${
                    item.isHighlight ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  {item.desc}
                </p>

                {/* Especificaciones Técnicas */}
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

                {/* Flecha conectora para desktop (excepto el último) */}
                {index < ARCHITECTURE_STEPS.length - 1 && (
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

        {/* Resumen inferior de confiabilidad */}
        <div className="mt-10 p-5 rounded-2xl bg-slate-50 border border-slate-200/90 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-xl shrink-0">
              <ShieldAlert size={20} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">
                100% Blindado Contra Alteraciones y Fraudes
              </h4>
              <p className="text-xs text-slate-600">
                El operador de balanza no puede escribir el peso a mano ni editar las lecturas capturadas por el indicador.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs font-mono font-bold text-slate-500">FORMATO LEGAL:</span>
            <span className="text-xs font-bold bg-white border border-slate-200 text-slate-800 px-3 py-1 rounded-lg">
              COVENIN 3133 / SENCAMER
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
