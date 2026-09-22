"use client";

import { useState, useId } from "react";
import {
  Send,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Copy,
  Mail,
  Phone,
  RotateCcw,
  MessageSquare,
  Check,
  CheckCheck,
} from "lucide-react";
import { CONTACT } from "@/lib/data";
import { useToast } from "@/context/ToastContext";

interface PresetChip {
  id: string;
  label: string;
  emoji: string;
  urgency: "Normal" | "Prioritaria" | "Emergencia";
  asunto: string;
  mensajeTemplate: string;
}

const PRESET_CHIPS: PresetChip[] = [
  {
    id: "emergencia",
    label: "Báscula Detenida / Emergencia",
    emoji: "🚨",
    urgency: "Emergencia",
    asunto: "Emergencia en Planta (Báscula Detenida)",
    mensajeTemplate:
      "Báscula/balanza industrial detenida en planta por falla de celda o indicador. Requerimos visita técnica urgente para restablecer pesaje operativo.",
  },
  {
    id: "sencamer",
    label: "Calibración SENCAMER",
    emoji: "⚖️",
    urgency: "Prioritaria",
    asunto: "Calibración Oficial & Certificado SENCAMER",
    mensajeTemplate:
      "Solicito cotización de servicio de calibración metrológica trazable SENCAMER para básculas/balanzas en nuestra planta con emisión de certificado.",
  },
  {
    id: "compra",
    label: "Cotizar Báscula o Balanza",
    emoji: "📦",
    urgency: "Normal",
    asunto: "Cotización de Equipos Nuevos",
    mensajeTemplate:
      "Deseo asesoría y cotización para la adquisición de un nuevo equipo de pesaje (indicar modelo aproximado o capacidad requerida en kg o toneladas).",
  },
  {
    id: "alquiler",
    label: "Alquiler para Cosecha / Zafra",
    emoji: "🚜",
    urgency: "Normal",
    asunto: "Alquiler de Báscula Portátil",
    mensajeTemplate:
      "Requerimos alquilar una báscula portátil por ejes (20T / 40T) para período de zafra/cosecha durante aproximadamente [X] meses.",
  },
  {
    id: "software",
    label: "Software WeighMaster",
    emoji: "💻",
    urgency: "Normal",
    asunto: "Software de Pesaje de Camiones",
    mensajeTemplate:
      "Solicito información sobre el software Dialka WeighMaster para control de pesaje vehicular, tickets de romana y reportes de inventario.",
  },
  {
    id: "mantenimiento",
    label: "Mantenimiento Preventivo",
    emoji: "🔧",
    urgency: "Normal",
    asunto: "Mantenimiento Preventivo de Balanzas",
    mensajeTemplate:
      "Deseamos agendar una jornada de inspección técnica, limpieza de fosas y mantenimiento preventivo para los equipos de pesaje de nuestra empresa.",
  },
];

export function ContactDynamicForm() {
  const [selectedPreset, setSelectedPreset] = useState<string | null>(null);
  const [sent, setSent] = useState(false);
  const [copiedFallback, setCopiedFallback] = useState(false);
  const { toast, copyToClipboard } = useToast();

  const [form, setForm] = useState({
    nombre: "",
    empresa: "",
    telefono: "",
    email: "",
    ciudad: "",
    asunto: "",
    urgencia: "Normal" as "Normal" | "Prioritaria" | "Emergencia",
    mensaje: "",
  });

  const nombreId = useId();
  const empresaId = useId();
  const telefonoId = useId();
  const emailId = useId();
  const ciudadId = useId();
  const asuntoId = useId();
  const mensajeId = useId();

  // Calcular progreso de llenado (0 a 100%)
  const requiredFields = [
    Boolean(form.nombre.trim()),
    Boolean(form.telefono.trim()),
    Boolean(form.email.trim()),
    Boolean(form.ciudad.trim()),
    Boolean(form.asunto.trim()),
    Boolean(form.mensaje.trim()),
  ];
  const filledCount = requiredFields.filter(Boolean).length;
  const progressPercent = Math.round((filledCount / requiredFields.length) * 100);

  // Manejo de presets táctiles
  const handleApplyPreset = (preset: PresetChip) => {
    setSelectedPreset(preset.id);
    setForm((prev) => ({
      ...prev,
      asunto: preset.asunto,
      urgencia: preset.urgency,
      mensaje: prev.mensaje.trim() ? prev.mensaje : preset.mensajeTemplate,
    }));

    toast({
      title: `Plantilla activada: ${preset.label}`,
      description: "Asunto y requerimiento precargados con éxito.",
      type: "info",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleUrgencyChange = (val: "Normal" | "Prioritaria" | "Emergencia") => {
    setForm((prev) => ({ ...prev, urgencia: val }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const urgencyIcon =
      form.urgencia === "Emergencia"
        ? "🚨 [EMERGENCIA EN PLANTA]"
        : form.urgencia === "Prioritaria"
        ? "⚡ [PRIORITARIO]"
        : "📋 [CONSULTA ESTÁNDAR]";

    const text = encodeURIComponent(
      `*Consulta Web - Dialka 2.0*\n` +
        `${urgencyIcon}\n\n` +
        `👤 *Nombre:* ${form.nombre}\n` +
        `🏢 *Empresa:* ${form.empresa || "Particular / No especificado"}\n` +
        `📞 *Teléfono:* ${form.telefono}\n` +
        `📧 *Email:* ${form.email}\n` +
        `📍 *Ubicación:* ${form.ciudad}\n` +
        `📌 *Asunto:* ${form.asunto}\n\n` +
        `💬 *Detalle del Requerimiento:*\n${form.mensaje}`
    );

    window.open(`https://wa.me/${CONTACT.whatsapp}?text=${text}`, "_blank");
    setSent(true);

    toast({
      title: "¡Consulta conectada con WhatsApp!",
      description: "Se abrió la ventana con el asesor de Dialka.",
      type: "success",
    });
  };

  const resetForm = () => {
    setSent(false);
    setSelectedPreset(null);
    setForm({
      nombre: "",
      empresa: "",
      telefono: "",
      email: "",
      ciudad: "",
      asunto: "",
      urgencia: "Normal",
      mensaje: "",
    });
  };

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl shadow-slate-200/40">
      {sent ? (
        /* ── PANTALLA DE CONFIRMACIÓN Y RESPALDO MULTICANALES ── */
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
              href={`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(
                `*Consulta Web Dialka 2.0*\n` +
                  `Prioridad: ${form.urgencia}\n` +
                  `Nombre: ${form.nombre}\n` +
                  `Empresa: ${form.empresa || "N/A"}\n` +
                  `Teléfono: ${form.telefono}\n` +
                  `Email: ${form.email}\n` +
                  `Ciudad: ${form.ciudad}\n` +
                  `Asunto: ${form.asunto}\n\n` +
                  `Requerimiento:\n${form.mensaje}`
              )}`}
              target="_blank"
              rel="noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 active:scale-98 text-white font-bold py-3.5 px-4 rounded-xl text-sm transition-all shadow-md shadow-emerald-600/20"
            >
              <Phone size={16} />
              <span>Abrir WhatsApp Manualmente</span>
            </a>

            <button
              type="button"
              onClick={() => {
                copyToClipboard(
                  `Consulta Dialka 2.0\nPrioridad: ${form.urgencia}\nNombre: ${form.nombre}\nEmpresa: ${form.empresa}\nTeléfono: ${form.telefono}\nEmail: ${form.email}\nCiudad: ${form.ciudad}\nAsunto: ${form.asunto}\n\nMensaje:\n${form.mensaje}`,
                  "Datos copiados al portapapeles"
                );
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
              href={`mailto:${CONTACT.headquarters[0].email}?subject=${encodeURIComponent(
                `[Web Dialka] ${form.urgencia}: ${form.asunto} - ${form.nombre}`
              )}&body=${encodeURIComponent(
                `Nombre: ${form.nombre}\nEmpresa: ${form.empresa}\nTeléfono: ${form.telefono}\nCiudad: ${form.ciudad}\n\nMensaje:\n${form.mensaje}`
              )}`}
              className="w-full flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 font-medium py-2.5 px-4 rounded-xl text-xs border border-slate-200 transition-all"
            >
              <Mail size={14} />
              <span>Enviar por Correo a {CONTACT.headquarters[0].email}</span>
            </a>
          </div>

          <button
            type="button"
            onClick={resetForm}
            className="mt-6 inline-flex items-center gap-1.5 text-xs text-[#991b1b] hover:text-[#7f1d1d] font-bold underline transition-colors cursor-pointer"
          >
            <RotateCcw size={13} />
            <span>Redactar una nueva consulta</span>
          </button>
        </div>
      ) : (
        /* ── EXPERIENCIA INTERACTIVA COMPLETA DE FORMULARIO & SIMULADOR EN VIVO ── */
        <div className="space-y-8">
          {/* Cabecera del Formulario y Barra de Progreso */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#991b1b] block">
                  Despacho Inmediato
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Generador Inteligente de Cotización
                </h3>
              </div>

              {/* Medidor de Completado */}
              <div className="flex items-center gap-2 self-start sm:self-auto bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-xl text-xs">
                <span className="text-slate-500 font-medium">Progreso:</span>
                <span
                  className={`font-bold ${
                    progressPercent === 100 ? "text-emerald-600" : "text-[#991b1b]"
                  }`}
                >
                  {progressPercent}%
                </span>
                <div className="w-16 h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div
                    className={`h-full transition-all duration-300 ${
                      progressPercent === 100 ? "bg-emerald-500" : "bg-[#991b1b]"
                    }`}
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600">
              Seleccione una plantilla rápida o complete los campos. Su requerimiento se formulará en vivo para contactar a nuestros especialistas de inmediato.
            </p>
          </div>

          {/* ── 1. PRESETS RÁPIDOS (1-CLICK CHIPS) ── */}
          <div className="space-y-2.5">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles size={14} className="text-[#991b1b]" />
              <span>Plantillas Rápidas (1 Toque para Autocompletar):</span>
            </label>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {PRESET_CHIPS.map((chip) => {
                const isSelected = selectedPreset === chip.id;
                return (
                  <button
                    key={chip.id}
                    type="button"
                    onClick={() => handleApplyPreset(chip)}
                    className={`p-2.5 rounded-xl border text-left transition-all duration-200 flex items-start gap-2 cursor-pointer ${
                      isSelected
                        ? "bg-red-50/90 border-red-400 text-[#991b1b] shadow-xs scale-[1.01]"
                        : "bg-slate-50/70 hover:bg-white border-slate-200 hover:border-slate-300 text-slate-800"
                    }`}
                  >
                    <span className="text-base shrink-0">{chip.emoji}</span>
                    <div className="min-w-0">
                      <span className="block text-xs font-bold leading-snug truncate">
                        {chip.label}
                      </span>
                      <span className="text-[10px] text-slate-500 font-medium">
                        Prioridad: {chip.urgency}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ── 2. CAMPOS Y SIMULADOR EN VIVO DE WHATSAPP ── */}
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Columna Izquierda: Formulario (7 cols) */}
            <form onSubmit={handleSubmit} className="lg:col-span-7 space-y-4">
              {/* Selector de Nivel de Urgencia */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Nivel de Urgencia Operativa
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => handleUrgencyChange("Normal")}
                    className={`py-2 px-2 rounded-xl text-xs font-bold border transition-all cursor-pointer text-center ${
                      form.urgencia === "Normal"
                        ? "bg-slate-900 text-white border-slate-900 shadow-2xs"
                        : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    🟢 Normal
                  </button>
                  <button
                    type="button"
                    onClick={() => handleUrgencyChange("Prioritaria")}
                    className={`py-2 px-2 rounded-xl text-xs font-bold border transition-all cursor-pointer text-center ${
                      form.urgencia === "Prioritaria"
                        ? "bg-amber-500 text-white border-amber-500 shadow-2xs"
                        : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    🟡 Prioritaria
                  </button>
                  <button
                    type="button"
                    onClick={() => handleUrgencyChange("Emergencia")}
                    className={`py-2 px-2 rounded-xl text-xs font-bold border transition-all cursor-pointer text-center ${
                      form.urgencia === "Emergencia"
                        ? "bg-[#991b1b] text-white border-[#991b1b] shadow-2xs animate-pulse"
                        : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    🔴 Emergencia
                  </button>
                </div>
              </div>

              {/* Nombre y Empresa */}
              <div className="grid sm:grid-cols-2 gap-3.5">
                <div>
                  <label htmlFor={nombreId} className="block text-xs font-bold text-slate-700 mb-1">
                    Nombre y Apellido *
                  </label>
                  <input
                    id={nombreId}
                    name="nombre"
                    value={form.nombre}
                    onChange={handleChange}
                    required
                    placeholder="Ej: Ing. Carlos Pérez"
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:border-[#991b1b] focus:ring-1 focus:ring-[#991b1b] transition-all"
                  />
                </div>
                <div>
                  <label htmlFor={empresaId} className="block text-xs font-bold text-slate-700 mb-1">
                    Empresa / Razón Social
                  </label>
                  <input
                    id={empresaId}
                    name="empresa"
                    value={form.empresa}
                    onChange={handleChange}
                    placeholder="Ej: Alimentos del Centro, C.A."
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:border-[#991b1b] focus:ring-1 focus:ring-[#991b1b] transition-all"
                  />
                </div>
              </div>

              {/* Teléfono y Email */}
              <div className="grid sm:grid-cols-2 gap-3.5">
                <div>
                  <label htmlFor={telefonoId} className="block text-xs font-bold text-slate-700 mb-1">
                    Teléfono Móvil (WhatsApp) *
                  </label>
                  <input
                    id={telefonoId}
                    name="telefono"
                    value={form.telefono}
                    onChange={handleChange}
                    required
                    placeholder="0414-123.45.67"
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:border-[#991b1b] focus:ring-1 focus:ring-[#991b1b] transition-all"
                  />
                </div>
                <div>
                  <label htmlFor={emailId} className="block text-xs font-bold text-slate-700 mb-1">
                    Correo Electrónico *
                  </label>
                  <input
                    id={emailId}
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="contacto@empresa.com"
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:border-[#991b1b] focus:ring-1 focus:ring-[#991b1b] transition-all"
                  />
                </div>
              </div>

              {/* Ciudad y Asunto */}
              <div className="grid sm:grid-cols-2 gap-3.5">
                <div>
                  <label htmlFor={ciudadId} className="block text-xs font-bold text-slate-700 mb-1">
                    Ciudad y Estado *
                  </label>
                  <input
                    id={ciudadId}
                    name="ciudad"
                    value={form.ciudad}
                    onChange={handleChange}
                    required
                    placeholder="Ej: Valencia, Carabobo"
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:border-[#991b1b] focus:ring-1 focus:ring-[#991b1b] transition-all"
                  />
                </div>
                <div>
                  <label htmlFor={asuntoId} className="block text-xs font-bold text-slate-700 mb-1">
                    Asunto de la Consulta *
                  </label>
                  <input
                    id={asuntoId}
                    name="asunto"
                    value={form.asunto}
                    onChange={handleChange}
                    required
                    placeholder="Ej: Cotización Báscula 80TN"
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:border-[#991b1b] focus:ring-1 focus:ring-[#991b1b] transition-all"
                  />
                </div>
              </div>

              {/* Detalle del Requerimiento */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label htmlFor={mensajeId} className="block text-xs font-bold text-slate-700">
                    Detalle del Requerimiento Técnico *
                  </label>
                  <span className="text-[11px] text-slate-400">
                    {form.mensaje.length} caracteres
                  </span>
                </div>
                <textarea
                  id={mensajeId}
                  name="mensaje"
                  value={form.mensaje}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Describa el equipo, capacidad requerida, falla o detalles específicos..."
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:border-[#991b1b] focus:ring-1 focus:ring-[#991b1b] transition-all resize-none"
                />
              </div>

              {/* Botón Principal de Envío */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#991b1b] via-[#b91c1c] to-[#991b1b] hover:from-[#7f1d1d] hover:to-[#7f1d1d] active:scale-[0.99] text-white font-bold py-3.5 px-6 rounded-xl shadow-md shadow-red-950/20 text-sm sm:text-base transition-all duration-200 cursor-pointer"
              >
                <Send size={18} />
                <span>Generar y Enviar vía WhatsApp Oficial</span>
              </button>

              <div className="flex items-center justify-center gap-2 text-slate-500 text-xs text-center pt-1">
                <ShieldCheck size={14} className="text-emerald-600" />
                <span>Atención directa de ingenieros de pesaje certificados en Venezuela</span>
              </div>
            </form>

            {/* Columna Derecha: SIMULADOR EN VIVO DE WHATSAPP (5 cols) */}
            <div className="lg:col-span-5">
              <div className="sticky top-28 bg-[#efeae2] border border-slate-300/80 rounded-3xl overflow-hidden shadow-lg shadow-slate-300/50">
                {/* Barra superior de WhatsApp */}
                <div className="bg-[#075e54] text-white px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="relative w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#991b1b] font-bold text-xs shrink-0 shadow-xs border border-white/20">
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
                    {filledCount === 6
                      ? "✅ Todos los campos listos para despachar."
                      : `Faltan ${6 - filledCount} campo(s) obligatorio(s).`}
                  </p>
                  <button
                    type="button"
                    onClick={(e) => {
                      if (filledCount < 6) {
                        toast({
                          title: "Campos incompletos",
                          description: "Por favor complete los campos obligatorios del formulario.",
                          type: "warning",
                        });
                        return;
                      }
                      handleSubmit(e);
                    }}
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#25d366] hover:bg-[#20bd5a] text-white font-bold py-2.5 px-4 rounded-xl text-xs transition-all cursor-pointer shadow-xs"
                  >
                    <MessageSquare size={14} />
                    <span>Conectar vía WhatsApp</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
