"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CONTACT } from "@/lib/data";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ChevronRight,
  Send,
  CheckCircle2,
  Building2,
  ShieldCheck,
  Copy,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { useToast } from "@/context/ToastContext";

export default function ContactoPage() {
  const [sent, setSent] = useState(false);
  const [activeSede, setActiveSede] = useState<"caracas" | "maracay">("caracas");
  const { toast, copyToClipboard } = useToast();

  const [form, setForm] = useState({
    nombre: "",
    empresa: "",
    telefono: "",
    email: "",
    ciudad: "",
    asunto: "",
    mensaje: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build WhatsApp message with form data
    const text = encodeURIComponent(
      `*Consulta desde Dialka 2.0*\n\n` +
        `*Nombre:* ${form.nombre}\n` +
        `*Empresa:* ${form.empresa || "N/A"}\n` +
        `*Teléfono:* ${form.telefono}\n` +
        `*Email:* ${form.email}\n` +
        `*Ciudad:* ${form.ciudad}\n` +
        `*Asunto:* ${form.asunto}\n\n` +
        `*Mensaje:*\n${form.mensaje}`
    );

    window.open(`https://wa.me/${CONTACT.whatsapp}?text=${text}`, "_blank");
    setSent(true);

    toast({
      title: "¡Consulta enviada con éxito!",
      description: "Se abrió la ventana de WhatsApp corporativo de Dialka.",
      type: "success",
    });
  };

  return (
    <>
      {/* ── HEADER DE PÁGINA CON FOTOGRAFÍA INDUSTRIAL ── */}
      <section className="relative bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200 py-8 sm:py-12 md:py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Columna Izquierda: Información */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 text-sm text-slate-500 mb-3 sm:mb-4">
                <Link href="/" className="hover:text-[#991b1b] transition-colors">
                  Inicio
                </Link>
                <ChevronRight size={14} />
                <span className="text-slate-900 font-semibold">Contacto</span>
              </div>

              <div className="flex items-center gap-3.5 mb-3 sm:mb-4">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center shrink-0">
                  <MapPin size={22} className="text-[#991b1b]" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#991b1b]">
                    Sedes y Canales Oficiales en Venezuela
                  </span>
                  <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                    Contacto y Sedes Dialka
                  </h1>
                </div>
              </div>

              <p className="text-slate-600 max-w-2xl text-sm sm:text-base lg:text-lg leading-relaxed mb-5 sm:mb-6">
                Nuestras dos sedes en Caracas y Maracay cuentan con ingenieros certificados, talleres de calibración y unidades móviles para atender requerimientos en toda Venezuela. Horario: Lunes a Viernes de 08:00 a 17:00.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={`https://wa.me/${CONTACT.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-[#991b1b] hover:bg-[#7f1d1d] text-white font-semibold px-5 py-3 rounded-xl shadow-xs hover:shadow-md transition-all text-sm min-h-[46px]"
                >
                  <Phone size={15} />
                  <span>WhatsApp de Atención Inmediata</span>
                </a>
                <a
                  href="#formulario"
                  className="inline-flex items-center gap-1.5 bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 font-semibold px-5 py-3 rounded-xl transition-all text-sm min-h-[46px]"
                >
                  <span>Enviar Formulario</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>

            {/* Columna Derecha: Tarjeta Fotográfica de Unidad Móvil / Sedes */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl bg-white p-2.5 sm:p-3 border border-slate-200/90 shadow-xl shadow-slate-200/50 group">
                <div className="relative aspect-16/10 sm:aspect-4/3 w-full rounded-xl overflow-hidden bg-slate-100">
                  <Image
                    src="/images/proyectos/camion-calibrador.jpg"
                    alt="Soporte y Flota Técnica de Dialka en Venezuela"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-md text-[#991b1b] text-[11px] font-bold px-3 py-1 rounded-full shadow-xs">
                      <Building2 size={13} className="text-[#991b1b]" />
                      <span>Sedes Caracas y Maracay</span>
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="text-[11px] font-bold text-red-200 uppercase tracking-wider">
                      Cobertura en los 24 Estados
                    </p>
                    <h3 className="text-sm sm:text-base font-bold text-white">
                      Unidades Móviles y Soporte en Sitio
                    </h3>
                  </div>
                </div>

                <div className="mt-3 bg-slate-50 border border-slate-200/80 rounded-xl p-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Sparkles size={16} className="text-[#991b1b]" />
                    <span className="text-xs font-bold text-slate-800">
                      Respuesta en menos de 24 horas
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-[#991b1b]">
                    Atención Nacional
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTENIDO PRINCIPAL: SEDES Y FORMULARIO ── */}
      <div className="bg-slate-50/70 py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10">
            {/* Columna Izquierda: Información de Sedes con Selector Modular (7 cols) */}
            <div className="lg:col-span-7">
              {/* Selector de Sedes por Pestañas (Caracas y Maracay) */}
              <div className="grid grid-cols-2 p-1.5 bg-slate-100 rounded-2xl border border-slate-200/90 mb-6 gap-1.5">
                <button
                  type="button"
                  onClick={() => setActiveSede("caracas")}
                  className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    activeSede === "caracas"
                      ? "bg-[#991b1b] text-white shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <Building2 size={15} />
                  <span>Sede Caracas</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveSede("maracay")}
                  className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    activeSede === "maracay"
                      ? "bg-[#991b1b] text-white shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <Building2 size={15} />
                  <span>Sede Maracay</span>
                </button>
              </div>

              {/* Contenido de Sedes Oficiales (Caracas / Maracay) */}
              {(() => {
                const hq = activeSede === "caracas" ? CONTACT.headquarters[0] : CONTACT.headquarters[1];
                return (
                  <div
                    key={hq.city}
                    className="card-hover bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs animate-fadeIn"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center">
                          <Building2 size={20} className="text-[#991b1b]" />
                        </div>
                        <div>
                          <h2 className="text-xl font-bold text-slate-900 leading-tight">
                            Sede {hq.city}
                          </h2>
                          <button
                            onClick={() => copyToClipboard(hq.rif, `RIF Sede ${hq.city}`)}
                            className="text-xs font-semibold text-slate-500 hover:text-[#991b1b] flex items-center gap-1 transition-colors cursor-pointer"
                            title="Copiar RIF"
                          >
                            <span>RIF: {hq.rif}</span>
                            <Copy size={11} />
                          </button>
                        </div>
                      </div>
                      <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-700">
                        Venezuela
                      </span>
                    </div>

                    <div className="space-y-4 pt-3 text-sm border-t border-slate-100">
                      <div className="flex items-start justify-between gap-3 group">
                        <div className="flex items-start gap-3">
                          <MapPin size={17} className="text-[#991b1b] mt-0.5 shrink-0" />
                          <span className="text-slate-700 leading-relaxed font-medium">
                            {hq.address}
                          </span>
                        </div>
                        <button
                          onClick={() =>
                            copyToClipboard(hq.address, `Dirección ${hq.city}`)
                          }
                          className="opacity-60 hover:opacity-100 p-1 text-slate-400 hover:text-[#991b1b] transition-all cursor-pointer shrink-0"
                          title="Copiar dirección"
                        >
                          <Copy size={14} />
                        </button>
                      </div>

                      {/* Teléfono Central */}
                      {"main" in hq.phones && hq.phones.main && (
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-start gap-3">
                            <Phone size={17} className="text-[#991b1b] mt-0.5 shrink-0" />
                            <div>
                              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-0.5">
                                Atención General / Central
                              </p>
                              <a
                                href={`tel:${hq.phones.main}`}
                                className="text-slate-800 font-bold hover:text-[#991b1b] transition-colors"
                              >
                                {hq.phones.main}
                              </a>
                            </div>
                          </div>
                          <button
                            onClick={() =>
                              copyToClipboard(
                                hq.phones.main as string,
                                `Central ${hq.city}`
                              )
                            }
                            className="opacity-60 hover:opacity-100 p-1 text-slate-400 hover:text-[#991b1b] transition-all cursor-pointer"
                            title="Copiar teléfono"
                          >
                            <Copy size={14} />
                          </button>
                        </div>
                      )}

                      {/* Ventas */}
                      <div className="flex items-start gap-3">
                        <Phone size={17} className="text-[#991b1b] mt-0.5 shrink-0" />
                        <div className="flex-1">
                          <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                            Departamento de Ventas
                          </p>
                          <div className="flex flex-wrap gap-x-4 gap-y-1">
                            {hq.phones.ventas.map((p) => (
                              <button
                                key={p}
                                onClick={() =>
                                  copyToClipboard(p, `Ventas ${hq.city}`)
                                }
                                className="text-slate-800 font-bold hover:text-[#991b1b] transition-colors flex items-center gap-1 cursor-pointer"
                                title="Clic para copiar"
                              >
                                <span>{p}</span>
                                <Copy size={11} className="text-slate-400" />
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Soporte */}
                      <div className="flex items-start gap-3">
                        <Phone size={17} className="text-[#991b1b] mt-0.5 shrink-0" />
                        <div className="flex-1">
                          <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                            Servicio Técnico / Soporte
                          </p>
                          <div className="flex flex-wrap gap-x-4 gap-y-1">
                            {hq.phones.soporte.map((p) => (
                              <button
                                key={p}
                                onClick={() =>
                                  copyToClipboard(p, `Soporte ${hq.city}`)
                                }
                                className="text-slate-800 font-bold hover:text-[#991b1b] transition-colors flex items-center gap-1 cursor-pointer"
                                title="Clic para copiar"
                              >
                                <span>{p}</span>
                                <Copy size={11} className="text-slate-400" />
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Email */}
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <Mail size={17} className="text-[#991b1b] shrink-0" />
                          <a
                            href={`mailto:${hq.email}`}
                            className="text-slate-700 font-semibold hover:text-[#991b1b] transition-colors break-all"
                          >
                            {hq.email}
                          </a>
                        </div>
                        <button
                          onClick={() =>
                            copyToClipboard(hq.email, `Email ${hq.city}`)
                          }
                          className="opacity-60 hover:opacity-100 p-1 text-slate-400 hover:text-[#991b1b] transition-all cursor-pointer"
                          title="Copiar correo"
                        >
                          <Copy size={14} />
                        </button>
                      </div>

                      {/* Horario */}
                      <div className="flex items-center gap-3">
                        <Clock size={17} className="text-slate-400 shrink-0" />
                        <span className="text-slate-600 font-medium">{hq.schedule}</span>
                      </div>
                    </div>

                    {/* Mapa Interactivo de la Sede */}
                    <div className="mt-6 pt-5 border-t border-slate-100">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <MapPin size={16} className="text-[#991b1b]" />
                          <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                            Ubicación Georreferenciada — Sede {hq.city}
                          </h4>
                        </div>
                        <a
                          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                            hq.city === "Caracas"
                              ? "Av Los Proceres San Bernardino Caracas Venezuela"
                              : "CC Coche Aragua Av Intercomunal Turmero Maracay Venezuela"
                          )}`}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#991b1b] hover:text-[#7f1d1d] hover:underline"
                        >
                          <span>Cómo llegar</span>
                          <ArrowRight size={13} />
                        </a>
                      </div>

                      <div className="relative w-full h-56 sm:h-64 rounded-xl overflow-hidden border border-slate-200 shadow-inner bg-slate-100">
                        <iframe
                          title={`Mapa de ubicación Sede ${hq.city}`}
                          src={`https://maps.google.com/maps?q=${encodeURIComponent(
                            hq.city === "Caracas"
                              ? "Av. Los Próceres, San Bernardino, Caracas, Venezuela"
                              : "Centro Comercial Coche Aragua, Intercomunal Turmero, Maracay, Venezuela"
                          )}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                          className="w-full h-full border-0"
                          loading="lazy"
                          allowFullScreen
                          referrerPolicy="no-referrer-when-downgrade"
                        />
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>

            {/* Columna Derecha: Formulario de Contacto (5 cols) */}
            <div className="lg:col-span-5">
              <div className="sticky top-24 bg-white border border-slate-200 rounded-2xl p-7 sm:p-8 shadow-sm">
                {sent ? (
                  <div className="flex flex-col items-center justify-center py-8 text-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center">
                      <CheckCircle2 size={36} className="text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">
                        ¡Consulta preparada con éxito!
                      </h3>
                      <p className="text-slate-600 text-xs sm:text-sm max-w-sm mt-1 leading-relaxed">
                        Hemos conectado su requerimiento con el WhatsApp oficial de Balanzas Dialka. Si la ventana no abrió automáticamente, utilice los accesos directos de respaldo:
                      </p>
                    </div>

                    {/* Botones de Respaldo */}
                    <div className="w-full flex flex-col gap-2.5 pt-2">
                      <a
                        href={`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(
                          `*Consulta desde Dialka 2.0*\n\n*Nombre:* ${form.nombre}\n*Empresa:* ${form.empresa || "N/A"}\n*Teléfono:* ${form.telefono}\n*Email:* ${form.email}\n*Ciudad:* ${form.ciudad}\n*Asunto:* ${form.asunto}\n\n*Mensaje:*\n${form.mensaje}`
                        )}`}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-4 rounded-xl text-xs sm:text-sm transition-all shadow-xs"
                      >
                        <Phone size={14} />
                        <span>Abrir WhatsApp Manualmente</span>
                      </a>

                      <button
                        type="button"
                        onClick={() =>
                          copyToClipboard(
                            `Consulta Dialka\nNombre: ${form.nombre}\nEmpresa: ${form.empresa || "N/A"}\nTeléfono: ${form.telefono}\nEmail: ${form.email}\nCiudad: ${form.ciudad}\nAsunto: ${form.asunto}\nMensaje: ${form.mensaje}`,
                            "¡Mensaje copiado al portapapeles!"
                          )
                        }
                        className="w-full flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold py-2.5 px-4 rounded-xl text-xs sm:text-sm border border-slate-300 transition-all cursor-pointer"
                      >
                        <Copy size={14} />
                        <span>Copiar Datos de la Consulta</span>
                      </button>

                      <a
                        href={`mailto:${CONTACT.headquarters[0].email}?subject=${encodeURIComponent(
                          `[Dialka Web] Consulta: ${form.asunto} - ${form.nombre}`
                        )}&body=${encodeURIComponent(
                          `Nombre: ${form.nombre}\nEmpresa: ${form.empresa}\nTeléfono: ${form.telefono}\nCiudad: ${form.ciudad}\n\nMensaje:\n${form.mensaje}`
                        )}`}
                        className="w-full flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 font-medium py-2 px-4 rounded-xl text-xs border border-slate-200 transition-all"
                      >
                        <Mail size={13} />
                        <span>Enviar por Correo Electrónico</span>
                      </a>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        setSent(false);
                        setForm({
                          nombre: "",
                          empresa: "",
                          telefono: "",
                          email: "",
                          ciudad: "",
                          asunto: "",
                          mensaje: "",
                        });
                      }}
                      className="mt-3 text-xs text-[#991b1b] hover:text-[#7f1d1d] font-bold underline transition-colors cursor-pointer"
                    >
                      ← Enviar otra consulta o cotización
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="mb-6">
                      <span className="text-[11px] font-bold uppercase tracking-widest text-[#991b1b] block mb-1">
                        Canal Directo
                      </span>
                      <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                        Envíenos su Consulta
                      </h2>
                      <p className="text-slate-500 text-xs sm:text-sm mt-1">
                        Complete los datos y conectaremos su solicitud directamente vía WhatsApp corporativo.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Nombre completo *
                        </label>
                        <input
                          name="nombre"
                          value={form.nombre}
                          onChange={handleChange}
                          required
                          placeholder="Ej: Carlos Rodríguez"
                          className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#991b1b] focus:ring-1 focus:ring-[#991b1b] transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Empresa o Razón Social
                        </label>
                        <input
                          name="empresa"
                          value={form.empresa}
                          onChange={handleChange}
                          placeholder="Ej: Agropecuaria Los Llanos, C.A."
                          className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#991b1b] focus:ring-1 focus:ring-[#991b1b] transition-all"
                        />
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">
                            Teléfono *
                          </label>
                          <input
                            name="telefono"
                            value={form.telefono}
                            onChange={handleChange}
                            required
                            placeholder="0414-123.45.67"
                            className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#991b1b] focus:ring-1 focus:ring-[#991b1b] transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">
                            Correo Electrónico *
                          </label>
                          <input
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            placeholder="contacto@empresa.com"
                            className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#991b1b] focus:ring-1 focus:ring-[#991b1b] transition-all"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">
                            Ciudad / Estado *
                          </label>
                          <input
                            name="ciudad"
                            value={form.ciudad}
                            onChange={handleChange}
                            required
                            placeholder="Ej: Valencia, Carabobo"
                            className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#991b1b] focus:ring-1 focus:ring-[#991b1b] transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">
                            Asunto *
                          </label>
                          <select
                            name="asunto"
                            value={form.asunto}
                            onChange={handleChange}
                            required
                            className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:bg-white focus:border-[#991b1b] focus:ring-1 focus:ring-[#991b1b] transition-all"
                          >
                            <option value="">Seleccione...</option>
                            <option value="Consulta de productos">Consulta de productos</option>
                            <option value="Servicio técnico">Servicio técnico</option>
                            <option value="Alquiler de equipos">Alquiler de equipos</option>
                            <option value="Software de pesaje">Software de pesaje</option>
                            <option value="Certificación SENCAMER">Certificación SENCAMER</option>
                            <option value="Otro">Otro</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Detalle del requerimiento *
                        </label>
                        <textarea
                          name="mensaje"
                          value={form.mensaje}
                          onChange={handleChange}
                          required
                          rows={4}
                          placeholder="Indique el modelo, capacidad o requerimiento técnico..."
                          className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#991b1b] focus:ring-1 focus:ring-[#991b1b] transition-all resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full flex items-center justify-center gap-2 bg-[#991b1b] hover:bg-[#7f1d1d] text-white font-bold py-3.5 rounded-xl shadow-sm hover:shadow-md transition-all text-sm sm:text-base cursor-pointer"
                      >
                        <Send size={16} />
                        <span>Enviar Consulta vía WhatsApp</span>
                      </button>

                      <div className="flex items-center justify-center gap-2 text-slate-400 text-xs text-center pt-2">
                        <ShieldCheck size={14} className="text-[#991b1b]" />
                        <span>Respuesta directa de nuestro equipo comercial</span>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
