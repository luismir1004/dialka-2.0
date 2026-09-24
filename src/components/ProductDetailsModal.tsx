"use client";

import React, { useEffect, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import {
  X,
  Phone,
  ArrowRight,
  ShieldCheck,
  Scale,
  Sparkles,
  Printer,
  Building2,
  FileCheck2,
  Clock,
} from "lucide-react";
import type { ProductItem } from "@/lib/products";
import { SITE_CONFIG } from "@/lib/config";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

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
  whatsappNumber = SITE_CONFIG.contact.whatsappNumber,
}: ProductDetailsModalProps) {
  const isMounted = useSyncExternalStore(emptySubscribe, () => true, () => false);

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

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  const formattedDate = new Date().toLocaleDateString("es-VE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

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
        {/* ── CABECERA FIJA CON BOTÓN X DE ÁREA TÁCTIL AMPLIA (NO-PRINT) ── */}
        <div className="no-print shrink-0 px-4 sm:px-6 py-3.5 sm:py-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
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

          {/* Botón de Cierre X sumamente visible */}
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

        {/* ── CUERPO CON DESPLAZAMIENTO FLUIDO (AISLADO PARA IMPRESIÓN #printable-spec-sheet) ── */}
        <div className="overflow-y-auto flex-1 overscroll-contain p-4 sm:p-6 lg:p-7 bg-white">
          <div id="printable-spec-sheet" className="space-y-6">
            {/* ── MEMBRETE CORPORATIVO FORMAL (ESPECIAL PARA IMPRESIÓN Y VISTA FORMAL) ── */}
            <div className="border-b-2 border-slate-900 pb-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-extrabold tracking-tight text-slate-900 text-lg sm:text-xl uppercase">
                      {SITE_CONFIG.name}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 mt-0.5">
                    RIF: J-30811985-0 · Servicios Metrológicos y Pesaje Industrial
                  </p>
                  <p className="text-[11px] text-slate-500">
                    Sede Caracas: {SITE_CONFIG.contact.phones.caracas} · Sede Maracay: {SITE_CONFIG.contact.phones.maracay}
                  </p>
                </div>
                <div className="sm:text-right">
                  <span className="inline-block bg-[#991b1b] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-sm">
                    Ficha Técnica Oficial
                  </span>
                  <p className="text-[11px] text-slate-500 mt-1 flex items-center sm:justify-end gap-1">
                    <Clock size={12} className="inline text-slate-400" />
                    <span>Emisión: {formattedDate}</span>
                  </p>
                </div>
              </div>
            </div>

            {/* ── DETALLE PRINCIPAL DEL EQUIPO ── */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6">
              {/* Lado Izquierdo: Fotografía e Insignias (5 cols) */}
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
                    <Badge variant="brand" size="sm">
                      {product.categoryIcon} {product.categoryName}
                    </Badge>
                  </div>
                  <div className="absolute bottom-2.5 left-2.5 right-2.5">
                    <Badge variant="stock" size="sm" className="w-full justify-center truncate">
                      {product.badge}
                    </Badge>
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

              {/* Lado Derecho: Especificaciones Técnicas (7 cols) */}
              <div className="md:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#7f1d1d] bg-red-50 border border-red-200/80 px-2.5 py-0.5 rounded-md">
                      {product.featureTag}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      REF: {product.id.toUpperCase()}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg lg:text-xl font-extrabold text-slate-900 leading-snug mb-2.5">
                    {product.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {product.highlight}. Instrumento fabricado bajo rigurosos estándares de metrología legal para ofrecer pesadas exactas, repetibilidad garantizada y máxima robustez en entornos exigentes.
                  </p>

                  {/* Tabla de Especificaciones Metrológicas */}
                  <div className="border border-slate-200 rounded-xl overflow-hidden mb-4 text-xs shadow-2xs">
                    <div className="bg-slate-100/90 px-3.5 py-2 font-bold text-slate-900 border-b border-slate-200 flex items-center gap-1.5">
                      <Scale size={14} className="text-[#991b1b]" />
                      <span>Especificaciones Técnicas y Metrológicas</span>
                    </div>
                    <div className="divide-y divide-slate-100">
                      <div className="px-3.5 py-2 flex justify-between bg-white">
                        <span className="text-slate-500 font-medium">Capacidad y Precisión:</span>
                        <span className="font-bold text-slate-900 text-right">{product.specs}</span>
                      </div>
                      <div className="px-3.5 py-2 flex justify-between bg-slate-50/60">
                        <span className="text-slate-500 font-medium">Línea de Aplicación:</span>
                        <span className="font-bold text-slate-800 text-right">{product.categoryName}</span>
                      </div>
                      <div className="px-3.5 py-2 flex justify-between bg-white">
                        <span className="text-slate-500 font-medium">Homologación Legal:</span>
                        <span className="font-bold text-emerald-700 text-right">{product.badge}</span>
                      </div>
                      <div className="px-3.5 py-2 flex justify-between bg-slate-50/60">
                        <span className="text-slate-500 font-medium">Norma Metrológica:</span>
                        <span className="font-bold text-slate-800 text-right">COVENIN 2548 / OIML R-76</span>
                      </div>
                      <div className="px-3.5 py-2 flex justify-between bg-white">
                        <span className="text-slate-500 font-medium">Trazabilidad Metrológica:</span>
                        <span className="font-bold text-slate-800 text-right">Masas Patrón Clase E2, F1 y M1</span>
                      </div>
                      <div className="px-3.5 py-2 flex justify-between bg-slate-50/60">
                        <span className="text-slate-500 font-medium">Garantía y Respaldo:</span>
                        <span className="font-bold text-slate-800 text-right">1 Año + Asistencia en Planta</span>
                      </div>
                      <div className="px-3.5 py-2 flex justify-between bg-white">
                        <span className="text-slate-500 font-medium">Disponibilidad:</span>
                        <span className="font-bold text-emerald-700 text-right">En Stock para Entrega Inmediata</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ── CERTIFICACIÓN Y NOTAS LEGALES COVENIN / SENCAMER ── */}
            <div className="border border-slate-200 rounded-xl p-3.5 bg-slate-50/80 text-xs">
              <div className="flex items-start gap-2.5">
                <FileCheck2 size={18} className="text-[#991b1b] shrink-0 mt-0.5" />
                <div className="text-slate-600 space-y-1">
                  <p className="font-bold text-slate-800">
                    Certificación de Conformidad y Metrología Legal en Venezuela
                  </p>
                  <p className="leading-relaxed text-[11px]">
                    Este instrumento cumple con los requisitos metrológicos y de seguridad establecidos por la Dirección General de SENCAMER bajo la norma COVENIN 2548. Apto para uso en transacciones comerciales, pesaje industrial y control de procesos.
                  </p>
                </div>
              </div>
            </div>

            {/* ── PIE INSTITUCIONAL DE LA FICHA TÉCNICA (IMPRESIÓN / DOCUMENTO FORMAL) ── */}
            <div className="border-t border-slate-200 pt-3 text-[11px] text-slate-500 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
              <div className="flex items-center gap-1.5">
                <Building2 size={13} className="text-slate-400" />
                <span>
                  <strong>{SITE_CONFIG.name}</strong> · RIF: J-30811985-0
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span>Email: {SITE_CONFIG.contact.email}</span>
                <span>·</span>
                <span>Web: dialka-2-0.vercel.app</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── PIE DEL MODAL CON ACCIONES CLARAS (NO-PRINT) ── */}
        <div className="no-print shrink-0 p-3.5 sm:p-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noreferrer"
            className="flex-1"
          >
            <Button
              variant="primary"
              size="md"
              fullWidth
              leftIcon={<Phone size={15} />}
              rightIcon={<ArrowRight size={14} />}
            >
              Cotizar este Modelo
            </Button>
          </a>

          <Button
            type="button"
            variant="outline"
            size="md"
            onClick={handlePrint}
            leftIcon={<Printer size={16} className="text-[#991b1b]" />}
            title="Imprimir o guardar ficha técnica oficial en PDF"
          >
            Imprimir / Guardar PDF
          </Button>

          <button
            type="button"
            onClick={onClose}
            className="sm:hidden inline-flex items-center justify-center py-2 px-3 rounded-xl text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
          >
            Cerrar ventana
          </button>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
