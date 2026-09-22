"use client";

import React, { useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import {
  X,
  Phone,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Scale,
  Download,
  Sparkles,
} from "lucide-react";
import type { ProductItem } from "./ProductsCatalog";

interface ProductDetailsModalProps {
  product: ProductItem | null;
  isOpen: boolean;
  onClose: () => void;
  whatsappNumber?: string;
}

const emptySubscribe = () => () => {};

export function ProductDetailsModal({
  product,
  isOpen,
  onClose,
  whatsappNumber = "584142770024",
}: ProductDetailsModalProps) {
  const isMounted = useSyncExternalStore(emptySubscribe, () => true, () => false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  // Bloqueo de scroll del body y listener de tecla Escape
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    // Bloquear scroll de la página de fondo
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isMounted || !isOpen || !product) return null;

  const ItemIcon = product.icon;

  const handleDownloadPdf = () => {
    setDownloadSuccess(true);
    const content =
      `========================================================\n` +
      `BALANZAS Y SERVICIOS DIALKA, C.A. - FICHA TÉCNICA OFICIAL\n` +
      `RIF: J-30811985-0 · SERVICIOS METROLÓGICOS VENEZUELA\n` +
      `========================================================\n\n` +
      `EQUIPO: ${product.name}\n` +
      `CATEGORÍA: ${product.categoryName} (${product.category.toUpperCase()})\n` +
      `ESPECIFICACIONES: ${product.specs}\n` +
      `NORMA Y HOMOLOGACIÓN: ${product.badge}\n` +
      `CARACTERÍSTICA TÉCNICA CLAVE: ${product.featureTag}\n` +
      `CAMPO DE APLICACIÓN: ${product.highlight}\n\n` +
      `MARCO NORMATIVO Y CALIDAD:\n` +
      `- Conforme a Norma Venezolana COVENIN 2548 (Instrumentos de pesaje de funcionamiento no automático).\n` +
      `- Certificación y control metrológico SENCAMER para uso comercial e industrial.\n` +
      `- Trazabilidad metrológica con masas patrón clase E2, F1 y M1.\n\n` +
      `SOPORTE, REPUESTOS Y CALIBRACIÓN:\n` +
      `- Sede Caracas: (+58 414) 277.00.24 · Av. Los Próceres, San Bernardino.\n` +
      `- Sede Maracay: (0243) 234.33.60 · C.C. Coche Aragua, Intercomunal Turmero.\n` +
      `- Cobertura técnica nacional en los 24 estados.\n` +
      `========================================================\n`;

    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `Ficha-Tecnica-${product.id}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  const whatsappMessage = encodeURIComponent(
    `Hola Balanzas Dialka, estuve revisando la Ficha Técnica del equipo: *${product.name}* (${product.specs}) y deseo solicitar cotización formal y disponibilidad.`
  );

  const modalContent = (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 bg-slate-900/80 backdrop-blur-md animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-label={`Ficha Técnica: ${product.name}`}
      onClick={onClose}
    >
      {/* Contenedor Flotante del Modal */}
      <div
        className="relative w-full max-w-3xl max-h-[92vh] sm:max-h-[88vh] flex flex-col bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200/90 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── CABECERA FIJA CON BOTÓN X DE ÁREA TÁCTIL AMPLIA ── */}
        <div className="shrink-0 px-4 sm:px-6 py-3.5 sm:py-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-red-950/80 border border-red-500/40 flex items-center justify-center text-red-400 shrink-0 shadow-inner">
              <ItemIcon size={20} />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold tracking-widest uppercase text-red-400 block">
                  Ficha Técnica Oficial
                </span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span className="text-[10px] font-medium text-slate-400 hidden sm:inline-block">
                  SENCAMER COVENIN 2548
                </span>
              </div>
              <h2 className="text-sm sm:text-base font-extrabold text-white truncate">
                {product.name}
              </h2>
            </div>
          </div>

          {/* Botón de Cierre X sumamente visible con área táctil mínima de 44px */}
          <button
            type="button"
            onClick={onClose}
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-slate-800 hover:bg-red-600 active:bg-red-700 text-slate-200 hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-md border border-slate-700 shrink-0 ml-2 touch-manipulation"
            aria-label="Cerrar ficha técnica"
            title="Cerrar ventana"
          >
            <X size={20} className="stroke-[2.5]" />
          </button>
        </div>

        {/* ── CUERPO CON DESPLAZAMIENTO FLUIDO (SCROLLABLE BODY) ── */}
        <div className="overflow-y-auto flex-1 overscroll-contain p-4 sm:p-6 lg:p-7">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6">
            {/* Lado Izquierdo: Fotografía y Acreditación (5 cols) */}
            <div className="md:col-span-5 flex flex-col gap-3.5">
              <div className="relative aspect-square w-full rounded-2xl bg-white border border-slate-200 overflow-hidden p-3 sm:p-4 flex items-center justify-center shadow-xs">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 350px"
                  className="object-contain p-2"
                />
                <div className="absolute top-2.5 left-2.5">
                  <span className="inline-flex items-center gap-1 bg-white/95 backdrop-blur-md text-[#991b1b] text-[11px] font-bold px-2.5 py-0.5 rounded-full shadow-2xs border border-slate-200/80">
                    <span>{product.categoryIcon}</span>
                    <span>{product.categoryName}</span>
                  </span>
                </div>
                <div className="absolute bottom-2.5 left-2.5 right-2.5">
                  <span className="inline-block text-[10px] sm:text-[11px] font-bold text-slate-800 bg-slate-100/95 backdrop-blur-xs px-2.5 py-1 rounded-md text-center w-full truncate border border-slate-200/80 shadow-2xs">
                    {product.badge}
                  </span>
                </div>
              </div>

              {/* Insignia de Calibración SENCAMER */}
              <div className="bg-emerald-50/90 border border-emerald-200 rounded-xl p-3 flex items-center gap-2.5">
                <ShieldCheck size={22} className="text-emerald-700 shrink-0" />
                <div className="min-w-0">
                  <span className="text-xs font-bold text-emerald-900 block leading-tight truncate">
                    Tolerancia Metrológica Verificada
                  </span>
                  <span className="text-[11px] text-emerald-700 block leading-tight mt-0.5">
                    Apta para transacciones comerciales legales
                  </span>
                </div>
              </div>

              {/* Disponibilidad Inmediata */}
              <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3 flex items-center gap-2.5">
                <Sparkles size={18} className="text-[#991b1b] shrink-0" />
                <div className="min-w-0">
                  <span className="text-xs font-bold text-slate-800 block leading-tight">
                    Entrega Inmediata a Nivel Nacional
                  </span>
                  <span className="text-[11px] text-slate-500 block leading-tight mt-0.5">
                    Despacho desde Caracas y Maracay
                  </span>
                </div>
              </div>
            </div>

            {/* Lado Derecho: Ficha Técnica Detallada (7 cols) */}
            <div className="md:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#991b1b] bg-red-50 border border-red-200/80 px-2.5 py-0.5 rounded-md">
                    {product.featureTag}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    Ref: {product.id.toUpperCase()}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg lg:text-xl font-extrabold text-slate-900 leading-snug mb-2.5">
                  {product.name}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {product.highlight}. Fabricada bajo estándares industriales rigurosos para ofrecer pesadas exactas, máxima durabilidad y compatibilidad con sistemas de control.
                </p>

                {/* Tabla de Especificaciones Metrológicas */}
                <div className="border border-slate-200 rounded-xl overflow-hidden mb-4 text-xs shadow-2xs">
                  <div className="bg-slate-100/90 px-3.5 py-2 font-bold text-slate-900 border-b border-slate-200 flex items-center gap-1.5">
                    <Scale size={14} className="text-[#991b1b]" />
                    <span>Especificaciones Técnicas de Fábrica</span>
                  </div>
                  <div className="divide-y divide-slate-100">
                    <div className="px-3.5 py-2 flex justify-between bg-white">
                      <span className="text-slate-500 font-medium">Capacidad y Precisión:</span>
                      <span className="font-bold text-slate-800 text-right">{product.specs}</span>
                    </div>
                    <div className="px-3.5 py-2 flex justify-between bg-slate-50/60">
                      <span className="text-slate-500 font-medium">Línea Especializada:</span>
                      <span className="font-bold text-slate-800 text-right">{product.categoryName}</span>
                    </div>
                    <div className="px-3.5 py-2 flex justify-between bg-white">
                      <span className="text-slate-500 font-medium">Homologación Legal:</span>
                      <span className="font-bold text-emerald-700 text-right">{product.badge}</span>
                    </div>
                    <div className="px-3.5 py-2 flex justify-between bg-slate-50/60">
                      <span className="text-slate-500 font-medium">Norma Metrológica:</span>
                      <span className="font-bold text-slate-800 text-right">COVENIN 2548</span>
                    </div>
                    <div className="px-3.5 py-2 flex justify-between bg-white">
                      <span className="text-slate-500 font-medium">Garantía y Servicio:</span>
                      <span className="font-bold text-slate-800 text-right">1 Año + Soporte en Planta</span>
                    </div>
                    <div className="px-3.5 py-2 flex justify-between bg-slate-50/60">
                      <span className="text-slate-500 font-medium">Disponibilidad:</span>
                      <span className="font-bold text-emerald-700 text-right">En Stock para Entrega</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── PIE DEL MODAL CON ACCIONES CLARAS (CONVERTIR, DESCARGAR, CERRAR) ── */}
        <div className="shrink-0 p-3.5 sm:p-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 bg-[#991b1b] hover:bg-[#7f1d1d] active:scale-[0.98] text-white font-bold py-3 px-4 rounded-xl text-xs sm:text-sm shadow-md hover:shadow-lg transition-all cursor-pointer"
          >
            <Phone size={15} />
            <span>Cotizar este Modelo</span>
            <ArrowRight size={14} />
          </a>

          <button
            type="button"
            onClick={handleDownloadPdf}
            className={`inline-flex items-center justify-center gap-1.5 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold border transition-all cursor-pointer ${
              downloadSuccess
                ? "bg-emerald-50 border-emerald-300 text-emerald-800"
                : "bg-white hover:bg-slate-100 border-slate-300 text-slate-700"
            }`}
            title="Descargar Ficha Técnica en texto oficial"
          >
            {downloadSuccess ? (
              <>
                <CheckCircle2 size={15} className="text-emerald-600" />
                <span>¡Ficha Descargada!</span>
              </>
            ) : (
              <>
                <Download size={15} className="text-[#991b1b]" />
                <span>Descargar Ficha</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={onClose}
            className="sm:hidden inline-flex items-center justify-center py-2 px-3 rounded-xl text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors"
          >
            Cerrar ventana
          </button>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
