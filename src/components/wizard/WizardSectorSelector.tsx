"use client";

import { RubroSector } from "./types";

interface WizardSectorSelectorProps {
  sectors: RubroSector[];
  activeSectorId: string;
  onSelectSector: (sectorId: string) => void;
}

export function WizardSectorSelector({
  sectors,
  activeSectorId,
  onSelectSector,
}: WizardSectorSelectorProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3 mb-8">
      {sectors.map((rubro) => {
        const isActive = rubro.id === activeSectorId;

        return (
          <button
            key={rubro.id}
            type="button"
            onClick={() => onSelectSector(rubro.id)}
            className={`p-3 sm:p-3.5 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between cursor-pointer active:scale-95 group shadow-2xs ${
              isActive
                ? "bg-gradient-to-b from-[#991b1b] to-[#7f1d1d] border-[#991b1b] text-white shadow-md shadow-red-950/20 scale-[1.03]"
                : "bg-white hover:bg-slate-50 border-slate-200 hover:border-red-200 text-slate-800 hover:text-[#991b1b]"
            }`}
            aria-pressed={isActive}
          >
            <div>
              <span className="text-2xl sm:text-3xl block mb-2 transition-transform duration-200 group-hover:scale-110">
                {rubro.emoji}
              </span>
              <h3 className="text-xs sm:text-sm font-bold leading-snug">
                {rubro.shortTitle}
              </h3>
            </div>

            <div className={`mt-3 flex items-center justify-between text-[10px] font-semibold pt-2 border-t ${
              isActive ? "border-white/20 text-red-100" : "border-slate-100 text-slate-500"
            }`}>
              <span>{rubro.equipment.length} equipos</span>
              <span>{isActive ? "● Activo" : "Elegir"}</span>
            </div>
          </button>
        );
      })}
    </div>
  );
}
