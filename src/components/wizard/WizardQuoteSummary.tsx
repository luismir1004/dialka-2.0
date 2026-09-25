"use client";

import { CheckCircle2, Phone, ArrowRight } from "lucide-react";
import { RubroSector } from "./types";

interface WizardQuoteSummaryProps {
  currentRubro: RubroSector;
  selectedCount: number;
  whatsappUrl: string;
}

export function WizardQuoteSummary({
  currentRubro,
  selectedCount,
  whatsappUrl,
}: WizardQuoteSummaryProps) {
  return (
    <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-5">
      <div className="text-center sm:text-left">
        <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-bold text-emerald-800 mb-1">
          <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
          <span>Presupuesto formal emitido al cambio oficial BCV</span>
        </div>
        <p className="text-xs text-slate-500">
          {selectedCount > 0
            ? `Se incluirán ${selectedCount} equipo(s) en su solicitud de cotización.`
            : "Marque uno o varios equipos arriba para enviarlos estructurados a WhatsApp."}
        </p>
      </div>

      <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center gap-3">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold py-3.5 px-6 rounded-2xl shadow-sm hover:shadow-md text-sm sm:text-base transition-all active:scale-95 cursor-pointer"
        >
          <Phone size={18} />
          <span>Cotizar Paquete para {currentRubro.shortTitle}</span>
          <ArrowRight size={16} />
        </a>
      </div>
    </div>
  );
}
