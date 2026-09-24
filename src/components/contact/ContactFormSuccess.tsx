import React, { useState } from "react";
import { CheckCircle2, Phone, Copy, Check, Mail, RotateCcw } from "lucide-react";
import { CONTACT } from "@/lib/data";
import type { ContactFormState } from "./WhatsAppLivePreview";

interface ContactFormSuccessProps {
  form: ContactFormState;
  onReset: () => void;
  copyToClipboard: (text: string, toastTitle?: string) => void;
}

export function ContactFormSuccess({
  form,
  onReset,
  copyToClipboard,
}: ContactFormSuccessProps) {
  const [copiedFallback, setCopiedFallback] = useState(false);

  const urgencyIcon =
    form.urgencia === "Emergencia"
      ? "🚨 [EMERGENCIA EN PLANTA]"
      : form.urgencia === "Prioritaria"
      ? "⚡ [PRIORITARIO]"
      : "📋 [CONSULTA ESTÁNDAR]";

  const whatsappText =
    `*Consulta Web - Dialka 2.0*\n` +
    `${urgencyIcon}\n\n` +
    `👤 *Nombre:* ${form.nombre}\n` +
    `🏢 *Empresa:* ${form.empresa || "Particular / No especificado"}\n` +
    `📞 *Teléfono:* ${form.telefono}\n` +
    `📧 *Email:* ${form.email}\n` +
    `📍 *Ubicación:* ${form.ciudad}\n` +
    `📌 *Asunto:* ${form.asunto}\n\n` +
    `💬 *Detalle del Requerimiento:*\n${form.mensaje}`;

  const mailSubject = `[Web Dialka] ${form.urgencia}: ${form.asunto} - ${form.nombre}`;
  const mailBody = `Nombre: ${form.nombre}\nEmpresa: ${form.empresa || "N/A"}\nTeléfono: ${form.telefono}\nEmail: ${form.email}\nCiudad: ${form.ciudad}\n\nMensaje:\n${form.mensaje}`;

  return (
    <div className="flex flex-col items-center justify-center py-6 text-center max-w-lg mx-auto animate-fadeIn">
      <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center mb-4 shadow-sm">
        <CheckCircle2 size={36} className="text-emerald-600" />
      </div>

      <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-100/70 px-3 py-1 rounded-full mb-2">
        Solicitud Enrutada Correctamente
      </span>

      <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
        ¡Su consulta está lista para envío!
      </h3>

      <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
        Hemos preparado la conversación oficial para el WhatsApp corporativo de Dialka con toda su información estructurada.
      </p>

      <div className="w-full flex flex-col gap-2.5 pt-6">
        <a
          href={`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(whatsappText)}`}
          target="_blank"
          rel="noreferrer"
          className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 active:scale-98 text-white font-bold py-3.5 px-4 rounded-xl text-sm transition-all shadow-md shadow-emerald-600/20 cursor-pointer"
        >
          <Phone size={16} />
          <span>Abrir WhatsApp Manualmente</span>
        </a>

        <button
          type="button"
          onClick={() => {
            copyToClipboard(whatsappText, "Datos copiados al portapapeles");
            setCopiedFallback(true);
            setTimeout(() => setCopiedFallback(false), 2500);
          }}
          className="w-full flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold py-3 px-4 rounded-xl text-xs sm:text-sm border border-slate-300 transition-all cursor-pointer"
        >
          {copiedFallback ? (
            <>
              <Check size={16} className="text-emerald-600" />
              <span>¡Datos copiados al portapapeles!</span>
            </>
          ) : (
            <>
              <Copy size={16} />
              <span>Copiar Mensaje Completo</span>
            </>
          )}
        </button>

        <a
          href={`mailto:${CONTACT.headquarters[0].email}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`}
          className="w-full flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 font-medium py-2.5 px-4 rounded-xl text-xs border border-slate-200 transition-all"
        >
          <Mail size={14} />
          <span>Enviar por Correo a {CONTACT.headquarters[0].email}</span>
        </a>
      </div>

      <button
        type="button"
        onClick={onReset}
        className="mt-6 inline-flex items-center gap-1.5 text-xs text-[#7f1d1d] hover:text-[#450a0a] font-bold underline transition-colors cursor-pointer"
      >
        <RotateCcw size={13} />
        <span>Redactar una nueva consulta</span>
      </button>
    </div>
  );
}
