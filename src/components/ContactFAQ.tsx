"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, ShieldCheck, PhoneCall } from "lucide-react";
import { CONTACT } from "@/lib/data";

interface FAQItem {
  question: string;
  answer: string;
  tag: string;
}

const FAQS: FAQItem[] = [
  {
    question: "¿Cuánto tarda la atención técnica de una unidad móvil en caso de parada en planta?",
    tag: "Tiempo de Respuesta",
    answer:
      "En la Región Central (Caracas, Miranda, Aragua, Carabobo) respondemos emergencias críticas en menos de 24 horas. Para el resto del territorio nacional (Lara, Zulia, Anzoátegui, Guárico, etc.), movilizamos nuestras unidades de servicio técnico y camiones calibradores en 48 a 72 horas con repuestos y masas patrón a bordo.",
  },
  {
    question: "¿Los certificados de calibración emitidos tienen plena validez ante inspecciones de SENCAMER?",
    tag: "Acreditación Metrológica",
    answer:
      "Sí. Todos nuestros servicios de verificación y calibración cuentan con trazabilidad metrológica estricta a patrones certificados por SENCAMER y estándares COVENIN. Entregamos informes de calibración formalmente documentados aptos para auditorías de calidad ISO 9001, BPM y fiscalizaciones gubernamentales.",
  },
  {
    question: "¿Cuentan con celdas de carga y repuestos para balanzas de otras marcas?",
    tag: "Repuestos y Compatibilidad",
    answer:
      "Sí. Mantenemos stock permanente en nuestros talleres de Caracas y Maracay de celdas de carga tipo canister, viga y compresión herméticas IP68 (Keli, Ohaus, CAS, Cardinal, Rice Lake), indicadores digitales de pesaje, tarjetas sumadoras y protectores de sobretensión eléctrica.",
  },
  {
    question: "¿Cómo funciona el servicio de alquiler de básculas para zafras y cosechas?",
    tag: "Alquiler Industrial",
    answer:
      "Disponemos de básculas portátiles de pesaje por ejes de 20 a 40 toneladas de capacidad, ideales para períodos de cosecha de maíz, arroz, caña de azúcar o faenas mineras. El servicio incluye traslado al sitio, instalación, calibración operativa y soporte técnico continuo durante toda la zafra.",
  },
  {
    question: "¿Qué modalidades de pago y facturación fiscal manejan?",
    tag: "Facturación & RIF",
    answer:
      "Emitimos factura fiscal legal con nuestros RIF oficiales (J-30814715-0 en Caracas y J-50269333-5 en Maracay). Aceptamos transferencias bancarias nacionales en Bolívares (VES a tasa BCV oficial), pagos en divisas USD vía Zelle, transferencias bancarias internacionales y acuerdos corporativos para clientes frecuentes.",
  },
];

export function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className="py-14 sm:py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100/90 text-[#7f1d1d] text-xs font-bold uppercase tracking-wider mb-3 border border-red-200/60">
            <HelpCircle size={13} />
            <span>Preguntas Frecuentes de Clientes</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Respuestas Inmediatas a Dudas Frecuentes
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl mx-auto">
            Consulte los puntos clave sobre tiempos de respuesta, certificados metrológicos SENCAMER y facturación antes de iniciar su solicitud.
          </p>
        </div>

        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={faq.question}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-white border-red-200 shadow-md ring-1 ring-red-100"
                    : "bg-white/80 hover:bg-white border-slate-200/90 shadow-2xs"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full text-left px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex-1 pr-2">
                    <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-[#7f1d1d] bg-red-50 border border-red-200/60 px-2 py-0.5 rounded-md mb-1.5">
                      {faq.tag}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      {faq.question}
                    </h3>
                  </div>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? "bg-[#991b1b] text-white rotate-180"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    <ChevronDown size={16} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-fadeIn">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Banner inferior de consulta directa */}
        <div className="mt-10 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-red-600/30 border border-red-500/40 flex items-center justify-center shrink-0">
              <ShieldCheck size={20} className="text-red-400" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-white">
                ¿Tiene un requerimiento técnico específico o no estándar?
              </h4>
              <p className="text-xs text-slate-300 mt-0.5">
                Nuestros ingenieros le atienden directamente sin compromiso.
              </p>
            </div>
          </div>

          <a
            href={`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(
              "Hola Balanzas Dialka, tengo una consulta técnica especializada y requiero asesoría."
            )}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-[#991b1b] hover:bg-red-700 text-white font-bold px-5 py-2.5 rounded-xl text-xs sm:text-sm transition-all shrink-0 active:scale-95 shadow-md shadow-red-950/40"
          >
            <PhoneCall size={14} />
            <span>Consultar Ingeniero</span>
          </a>
        </div>
      </div>
    </section>
  );
}
