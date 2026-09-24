import React from "react";
import { CheckCircle2, CheckCheck, MessageSquare } from "lucide-react";

export interface ContactFormState {
  nombre: string;
  empresa: string;
  telefono: string;
  email: string;
  ciudad: string;
  asunto: string;
  urgencia: "Normal" | "Prioritaria" | "Emergencia";
  mensaje: string;
}

interface WhatsAppLivePreviewProps {
  form: ContactFormState;
  filledCount: number;
  totalRequired: number;
  onSubmit: (e: React.FormEvent) => void;
  isFormValid: boolean;
}

export function WhatsAppLivePreview({
  form,
  filledCount,
  totalRequired,
  onSubmit,
  isFormValid,
}: WhatsAppLivePreviewProps) {
  return (
    <div className="sticky top-28 bg-[#efeae2] border border-slate-300/80 rounded-3xl overflow-hidden shadow-lg shadow-slate-300/50">
      {/* Barra superior de WhatsApp */}
      <div className="bg-[#075e54] text-white px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="relative w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#7f1d1d] font-bold text-xs shrink-0 shadow-xs border border-white/20">
            <span>DK</span>
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#075e54]" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-1">
              <span className="font-bold text-xs sm:text-sm truncate">
                Balanzas Dialka
              </span>
              <CheckCircle2 size={12} className="text-emerald-300 shrink-0" />
            </div>
            <span className="text-[10px] text-emerald-200 block">En línea</span>
          </div>
        </div>

        <div className="text-[10px] bg-black/20 px-2 py-0.5 rounded-md font-mono text-emerald-100">
          Simulador en Vivo
        </div>
      </div>

      {/* Área de Mensajes */}
      <div className="p-4 sm:p-5 space-y-3 min-h-[290px] max-h-[380px] overflow-y-auto text-xs sm:text-[13px] leading-relaxed">
        {/* Mensaje de Bienvenida del Asesor */}
        <div className="flex items-start">
          <div className="bg-white rounded-2xl rounded-tl-xs p-3 shadow-xs max-w-[85%] text-slate-800 border border-slate-200/60">
            <p className="font-semibold text-slate-900 text-xs mb-1">
              Balanzas y Servicios Dialka
            </p>
            <p className="text-xs text-slate-600">
              ¡Hola! Bienvenido a Dialka. Completa el formulario de la izquierda y verás cómo se redacta tu solicitud en tiempo real.
            </p>
            <div className="text-[10px] text-slate-400 text-right mt-1 font-mono">
              08:00 AM
            </div>
          </div>
        </div>

        {/* Burbuja del Cliente Redactada en Tiempo Real */}
        <div className="flex items-end justify-end">
          <div className="bg-[#d9fdd3] text-slate-900 rounded-2xl rounded-tr-xs p-3.5 shadow-xs max-w-[92%] border border-emerald-200/60 space-y-1.5 animate-fadeIn">
            <div className="font-bold text-emerald-900 text-xs border-b border-emerald-300/50 pb-1 flex items-center justify-between">
              <span>Consulta Web Dialka 2.0</span>
              <span
                className={`text-[9px] font-bold px-1.5 py-0.2 rounded ${
                  form.urgencia === "Emergencia"
                    ? "bg-red-500 text-white"
                    : form.urgencia === "Prioritaria"
                    ? "bg-amber-500 text-white"
                    : "bg-emerald-200 text-emerald-900"
                }`}
              >
                {form.urgencia}
              </span>
            </div>

            <div className="space-y-0.5 text-[11px] sm:text-xs">
              <div>
                <strong className="text-slate-900">Nombre:</strong>{" "}
                <span className="text-slate-800">
                  {form.nombre || "—"}
                </span>
              </div>
              {form.empresa && (
                <div>
                  <strong className="text-slate-900">Empresa:</strong>{" "}
                  <span className="text-slate-800">{form.empresa}</span>
                </div>
              )}
              <div>
                <strong className="text-slate-900">Tel:</strong>{" "}
                <span className="text-slate-800">
                  {form.telefono || "—"}
                </span>
              </div>
              <div>
                <strong className="text-slate-900">Email:</strong>{" "}
                <span className="text-slate-800">
                  {form.email || "—"}
                </span>
              </div>
              <div>
                <strong className="text-slate-900">Ciudad:</strong>{" "}
                <span className="text-slate-800">
                  {form.ciudad || "—"}
                </span>
              </div>
              <div>
                <strong className="text-slate-900">Asunto:</strong>{" "}
                <span className="text-slate-800">
                  {form.asunto || "—"}
                </span>
              </div>
            </div>

            {form.mensaje && (
              <div className="pt-1.5 border-t border-emerald-300/40 text-[11px] sm:text-xs leading-relaxed text-slate-800 whitespace-pre-wrap">
                <strong className="text-slate-900 block mb-0.5">
                  Detalle:
                </strong>
                {form.mensaje}
              </div>
            )}

            <div className="flex items-center justify-end gap-1 text-[10px] text-emerald-800 pt-1 font-mono">
              <span>Ahora</span>
              <CheckCheck size={13} className="text-sky-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Pie del Simulador con Botón de Envío Inmediato */}
      <div className="bg-slate-100 p-3 border-t border-slate-200 text-center">
        <p className="text-[11px] text-slate-500 mb-2">
          {filledCount === totalRequired
            ? "✅ Todos los campos listos para despachar."
            : `Faltan ${totalRequired - filledCount} campo(s) obligatorio(s).`}
        </p>
        <button
          type="button"
          onClick={onSubmit}
          disabled={!isFormValid}
          className="w-full inline-flex items-center justify-center gap-2 bg-[#25d366] hover:bg-[#20bd5a] disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-2.5 px-4 rounded-xl text-xs transition-all cursor-pointer shadow-xs active:scale-98"
        >
          <MessageSquare size={14} />
          <span>Conectar vía WhatsApp</span>
        </button>
      </div>
    </div>
  );
}
