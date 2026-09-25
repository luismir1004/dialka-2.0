import React from "react";
import {
  CalendarDays,
  Truck,
  Wrench,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
} from "lucide-react";

const RENTAL_STEPS = [
  {
    step: "01",
    title: "Definición del Flujo",
    category: "Selección de Tonelaje",
    desc: "Evaluación del tipo de vehículos (batea, chuto, gandola, volqueta) para definir si se requiere sistema por ejes de 20T o 40T y duración del contrato.",
    icon: CalendarDays,
    specs: ["Sistemas por ejes 20T / 40T", "Plataformas de piso para almacén", "Contratos semanales o por zafra"],
  },
  {
    step: "02",
    title: "Traslado Inmediato",
    category: "Logística y Despacho",
    desc: "Movilización de la plataforma, terminal indicador y accesorios con camión propio desde nuestras bases en Caracas o Maracay hasta su planta.",
    icon: Truck,
    specs: ["Despacho en menos de 48 horas", "Cobertura a nivel nacional", "Vehículo con grúa hidráulica"],
  },
  {
    step: "03",
    title: "Montaje & Calibración",
    category: "Puesta a Punto en 2 Horas",
    desc: "Nivelación sobre terreno firme o losa existente, conexionado electrónico y ajuste metrológico con masas patrón certificadas para pesaje exacto.",
    icon: Wrench,
    specs: ["Montaje ultra rápido (<2h)", "Cero obras civiles pesadas", "Pruebas de excentricidad in situ"],
    isHighlight: true,
  },
  {
    step: "04",
    title: "Operación & Soporte",
    category: "Acompañamiento Continuo",
    desc: "Opción de operador metrólogo en campo o inducción a su personal. Mantenimiento y reemplazo preventivo garantizado durante todo el arriendo.",
    icon: CheckCircle2,
    specs: ["Operador técnico en sitio opcional", "Soporte telefónico y presencial 24/7", "Garantía de cambio en averías"],
  },
];

export function RentalProcessFlow() {
  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 text-[#7f1d1d] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-2xs mb-3">
            <ShieldCheck size={13} className="text-[#991b1b]" />
            <span>Proceso de Alquiler Express Dialka</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Cómo Alquilar su Equipo sin Trabas en 4 Pasos
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Elimine el gasto de capital (CAPEX) y resuelva contingencias operativas o zafras agrícolas con entrega rápida y asistencia técnica total.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {RENTAL_STEPS.map((item, index) => {
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
                    PASO {item.step}
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

                {index < RENTAL_STEPS.length - 1 && (
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
              <ShieldCheck size={20} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">
                100% Deducible de Impuestos Operativos
              </h4>
              <p className="text-xs text-slate-600">
                El canon de arrendamiento computa como gasto operativo (OPEX) directo sin depreciación de activos.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs font-mono font-bold text-slate-500">CONTRATOS:</span>
            <span className="text-xs font-bold bg-white border border-slate-200 text-slate-800 px-3 py-1 rounded-lg">
              Semanales · Mensuales · Zafras
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
