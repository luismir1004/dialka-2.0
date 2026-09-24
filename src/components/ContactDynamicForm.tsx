"use client";

import React, { useState, useId } from "react";
import { Send, ShieldCheck } from "lucide-react";
import { CONTACT } from "@/lib/data";
import { useToast } from "@/context/ToastContext";
import { ContactPresetChips, type PresetChip } from "./contact/ContactPresetChips";
import { WhatsAppLivePreview, type ContactFormState } from "./contact/WhatsAppLivePreview";
import { ContactFormSuccess } from "./contact/ContactFormSuccess";
import { sanitizeInput, validateEmail, validateVenezuelanPhone } from "./contact/validation";

export function ContactDynamicForm() {
  const [selectedPreset, setSelectedPreset] = useState<string | null>(null);
  const [sent, setSent] = useState(false);
  const { toast, copyToClipboard } = useToast();

  const [form, setForm] = useState<ContactFormState>({
    nombre: "",
    empresa: "",
    telefono: "",
    email: "",
    ciudad: "",
    asunto: "",
    urgencia: "Normal",
    mensaje: "",
  });

  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

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
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    // Limpiar error en tiempo real si el usuario lo corrige
    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const handleBlur = (field: "email" | "telefono") => {
    if (field === "email" && form.email.trim()) {
      const emailRes = validateEmail(form.email);
      if (!emailRes.valid && emailRes.error) {
        setFieldErrors((prev) => ({ ...prev, email: emailRes.error! }));
      }
    } else if (field === "telefono" && form.telefono.trim()) {
      const phoneRes = validateVenezuelanPhone(form.telefono);
      if (!phoneRes.valid && phoneRes.error) {
        setFieldErrors((prev) => ({ ...prev, telefono: phoneRes.error! }));
      }
    }
  };

  const handleUrgencyChange = (val: "Normal" | "Prioritaria" | "Emergencia") => {
    setForm((prev) => ({ ...prev, urgencia: val }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const errors: Record<string, string> = {};

    // Validaciones estrictas y sanitización
    const sanitizedNombre = sanitizeInput(form.nombre);
    const sanitizedEmpresa = sanitizeInput(form.empresa);
    const sanitizedCiudad = sanitizeInput(form.ciudad);
    const sanitizedAsunto = sanitizeInput(form.asunto);
    const sanitizedMensaje = sanitizeInput(form.mensaje);

    if (!sanitizedNombre) errors.nombre = "El nombre es obligatorio.";
    if (!sanitizedCiudad) errors.ciudad = "La ciudad y estado son obligatorios.";
    if (!sanitizedAsunto) errors.asunto = "El asunto es obligatorio.";
    if (!sanitizedMensaje) errors.mensaje = "El detalle del requerimiento es obligatorio.";

    const emailRes = validateEmail(form.email);
    if (!emailRes.valid && emailRes.error) errors.email = emailRes.error;

    const phoneRes = validateVenezuelanPhone(form.telefono);
    if (!phoneRes.valid && phoneRes.error) errors.telefono = phoneRes.error;

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      toast({
        title: "Revise los campos del formulario",
        description: "Existen datos requeridos o con formato incorrecto.",
        type: "warning",
      });
      return;
    }

    const urgencyIcon =
      form.urgencia === "Emergencia"
        ? "🚨 [EMERGENCIA EN PLANTA]"
        : form.urgencia === "Prioritaria"
        ? "⚡ [PRIORITARIO]"
        : "📋 [CONSULTA ESTÁNDAR]";

    const text = encodeURIComponent(
      `*Consulta Web - Dialka 2.0*\n` +
        `${urgencyIcon}\n\n` +
        `👤 *Nombre:* ${sanitizedNombre}\n` +
        `🏢 *Empresa:* ${sanitizedEmpresa || "Particular / No especificado"}\n` +
        `📞 *Teléfono:* ${form.telefono}\n` +
        `📧 *Email:* ${form.email}\n` +
        `📍 *Ubicación:* ${sanitizedCiudad}\n` +
        `📌 *Asunto:* ${sanitizedAsunto}\n\n` +
        `💬 *Detalle del Requerimiento:*\n${sanitizedMensaje}`
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
    setFieldErrors({});
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
        <ContactFormSuccess
          form={form}
          onReset={resetForm}
          copyToClipboard={copyToClipboard}
        />
      ) : (
        <div className="space-y-8">
          {/* Cabecera del Formulario y Barra de Progreso */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#7f1d1d] block">
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
                    progressPercent === 100 ? "text-emerald-600" : "text-[#7f1d1d]"
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

          {/* 1. Presets Rápidos (1-Click Chips) */}
          <ContactPresetChips
            selectedPreset={selectedPreset}
            onApplyPreset={handleApplyPreset}
          />

          {/* 2. Formulario y Simulador de WhatsApp */}
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <form onSubmit={handleSubmit} className="lg:col-span-7 space-y-4" noValidate>
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
                    className={`w-full bg-slate-50 border rounded-xl px-3.5 py-2 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none transition-all ${
                      fieldErrors.nombre
                        ? "border-red-500 focus:ring-1 focus:ring-red-500"
                        : "border-slate-300 focus:border-[#991b1b] focus:ring-1 focus:ring-[#991b1b]"
                    }`}
                  />
                  {fieldErrors.nombre && (
                    <p className="text-[11px] text-red-600 font-medium mt-1">{fieldErrors.nombre}</p>
                  )}
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
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:border-[#991b1b] focus:ring-1 focus:ring-[#991b1b] focus:outline-none transition-all"
                  />
                </div>
              </div>

              {/* Teléfono y Email con Validación */}
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
                    onBlur={() => handleBlur("telefono")}
                    required
                    placeholder="Ej: 0414-1234567"
                    className={`w-full bg-slate-50 border rounded-xl px-3.5 py-2 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none transition-all ${
                      fieldErrors.telefono
                        ? "border-red-500 focus:ring-1 focus:ring-red-500"
                        : "border-slate-300 focus:border-[#991b1b] focus:ring-1 focus:ring-[#991b1b]"
                    }`}
                  />
                  {fieldErrors.telefono && (
                    <p className="text-[11px] text-red-600 font-medium mt-1">{fieldErrors.telefono}</p>
                  )}
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
                    onBlur={() => handleBlur("email")}
                    required
                    placeholder="contacto@empresa.com"
                    className={`w-full bg-slate-50 border rounded-xl px-3.5 py-2 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none transition-all ${
                      fieldErrors.email
                        ? "border-red-500 focus:ring-1 focus:ring-red-500"
                        : "border-slate-300 focus:border-[#991b1b] focus:ring-1 focus:ring-[#991b1b]"
                    }`}
                  />
                  {fieldErrors.email && (
                    <p className="text-[11px] text-red-600 font-medium mt-1">{fieldErrors.email}</p>
                  )}
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
                    className={`w-full bg-slate-50 border rounded-xl px-3.5 py-2 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none transition-all ${
                      fieldErrors.ciudad
                        ? "border-red-500 focus:ring-1 focus:ring-red-500"
                        : "border-slate-300 focus:border-[#991b1b] focus:ring-1 focus:ring-[#991b1b]"
                    }`}
                  />
                  {fieldErrors.ciudad && (
                    <p className="text-[11px] text-red-600 font-medium mt-1">{fieldErrors.ciudad}</p>
                  )}
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
                    className={`w-full bg-slate-50 border rounded-xl px-3.5 py-2 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none transition-all ${
                      fieldErrors.asunto
                        ? "border-red-500 focus:ring-1 focus:ring-red-500"
                        : "border-slate-300 focus:border-[#991b1b] focus:ring-1 focus:ring-[#991b1b]"
                    }`}
                  />
                  {fieldErrors.asunto && (
                    <p className="text-[11px] text-red-600 font-medium mt-1">{fieldErrors.asunto}</p>
                  )}
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
                  className={`w-full bg-slate-50 border rounded-xl px-3.5 py-2 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none transition-all resize-none ${
                    fieldErrors.mensaje
                      ? "border-red-500 focus:ring-1 focus:ring-red-500"
                      : "border-slate-300 focus:border-[#991b1b] focus:ring-1 focus:ring-[#991b1b]"
                  }`}
                />
                {fieldErrors.mensaje && (
                  <p className="text-[11px] text-red-600 font-medium mt-1">{fieldErrors.mensaje}</p>
                )}
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
              <WhatsAppLivePreview
                form={form}
                filledCount={filledCount}
                totalRequired={requiredFields.length}
                onSubmit={handleSubmit}
                isFormValid={filledCount === requiredFields.length && Object.keys(fieldErrors).length === 0}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
