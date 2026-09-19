"use client";

import React, { useEffect, useCallback } from "react";
import Image from "next/image";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Phone,
  CheckCircle2,
  MapPin,
  Tag,
  Maximize2,
} from "lucide-react";

export interface LightboxItem {
  id?: string | number;
  image: string;
  title: string;
  subtitle?: string;
  description: string;
  specs?: string[];
  location?: string;
  tag?: string;
  ctaText?: string;
}

interface ImageLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  items: LightboxItem[];
  currentIndex: number;
  onIndexChange: (index: number) => void;
  whatsappNumber?: string;
}

export function ImageLightbox({
  isOpen,
  onClose,
  items,
  currentIndex,
  onIndexChange,
  whatsappNumber = "584144510000",
}: ImageLightboxProps) {
  const currentItem = items[currentIndex];

  const handlePrev = useCallback(() => {
    onIndexChange(currentIndex === 0 ? items.length - 1 : currentIndex - 1);
  }, [currentIndex, items.length, onIndexChange]);

  const handleNext = useCallback(() => {
    onIndexChange(currentIndex === items.length - 1 ? 0 : currentIndex + 1);
  }, [currentIndex, items.length, onIndexChange]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    // Prevent body scroll when modal is open
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose, handlePrev, handleNext]);

  if (!isOpen || !currentItem) return null;

  const whatsappMessage = encodeURIComponent(
    `Hola Balanzas Dialka, me gustaría solicitar más información técnica sobre: ${currentItem.title}`
  );

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={currentItem.title}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
    >
      {/* Background click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative z-10 w-full max-w-5xl max-h-[90vh] bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Cerrar ventana modal"
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-slate-800/90 hover:bg-red-600 text-white flex items-center justify-center transition-colors shadow-lg border border-slate-600 focus:outline-none"
        >
          <X size={20} />
        </button>

        {/* Left / Top: High-Res Image with Nav Buttons */}
        <div className="relative md:w-3/5 bg-black flex items-center justify-center min-h-[300px] sm:min-h-[400px] md:min-h-[500px]">
          <Image
            src={currentItem.image}
            alt={currentItem.title}
            fill
            sizes="(max-width: 768px) 100vw, 60vw"
            className="object-contain p-2 sm:p-4"
            priority
          />

          {/* Navigation Arrows (if multiple items) */}
          {items.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                aria-label="Imagen anterior"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-900/80 hover:bg-red-600 text-white flex items-center justify-center transition-colors border border-slate-700 shadow-md"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                aria-label="Imagen siguiente"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-900/80 hover:bg-red-600 text-white flex items-center justify-center transition-colors border border-slate-700 shadow-md"
              >
                <ChevronRight size={22} />
              </button>
            </>
          )}

          {/* Image index indicator */}
          <div className="absolute bottom-3 left-3 bg-black/75 backdrop-blur-xs text-white text-[11px] font-mono px-2.5 py-1 rounded-md border border-white/10 flex items-center gap-1.5">
            <Maximize2 size={12} className="text-red-400" />
            <span>
              {currentIndex + 1} / {items.length}
            </span>
          </div>
        </div>

        {/* Right / Bottom: Specifications and Technical Details */}
        <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto bg-slate-900 text-white border-t md:border-t-0 md:border-l border-slate-800">
          <div>
            {/* Tag & Location */}
            <div className="flex flex-wrap items-center gap-2 mb-3">
              {currentItem.tag && (
                <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-red-300 bg-red-950/80 border border-red-500/40 px-2.5 py-0.5 rounded-full">
                  <Tag size={11} />
                  <span>{currentItem.tag}</span>
                </span>
              )}
              {currentItem.location && (
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-400 bg-slate-800/80 px-2.5 py-0.5 rounded-full">
                  <MapPin size={11} className="text-red-400" />
                  <span>{currentItem.location}</span>
                </span>
              )}
            </div>

            {/* Title & Subtitle */}
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-1">
              {currentItem.title}
            </h3>
            {currentItem.subtitle && (
              <p className="text-xs font-semibold text-red-400 uppercase tracking-wider mb-4">
                {currentItem.subtitle}
              </p>
            )}

            {/* Description */}
            <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
              {currentItem.description}
            </p>

            {/* Technical Specifications */}
            {currentItem.specs && currentItem.specs.length > 0 && (
              <div className="mb-6 bg-slate-950/80 border border-slate-800 rounded-xl p-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                  <CheckCircle2 size={13} className="text-emerald-400" />
                  <span>Especificaciones Técnicas</span>
                </h4>
                <ul className="space-y-2">
                  {currentItem.specs.map((spec) => (
                    <li
                      key={spec}
                      className="text-xs text-slate-300 flex items-start gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Action CTA */}
          <div className="pt-4 border-t border-slate-800">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-[#991b1b] hover:bg-[#7f1d1d] text-white font-bold py-3.5 px-4 rounded-xl shadow-md hover:shadow-lg transition-all text-sm"
            >
              <Phone size={16} />
              <span>{currentItem.ctaText || "Solicitar Cotización"}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
