"use client";

import Image from "next/image";
import { Check, Plus, Minus } from "lucide-react";
import { RubroEquipment, MIN_EQUIPMENT_QTY, MAX_EQUIPMENT_QTY } from "./types";

interface WizardEquipmentCardProps {
  equipment: RubroEquipment;
  isChecked: boolean;
  qty: number;
  onToggle: () => void;
  onChangeQty: (delta: number) => void;
}

export function WizardEquipmentCard({
  equipment,
  isChecked,
  qty,
  onToggle,
  onChangeQty,
}: WizardEquipmentCardProps) {
  return (
    <div
      className={`relative rounded-2xl border p-3.5 transition-all duration-200 flex flex-col justify-between ${
        isChecked
          ? "bg-red-50/40 border-[#991b1b] shadow-sm ring-1 ring-red-200"
          : "bg-white border-slate-200 hover:border-slate-300 shadow-2xs opacity-95"
      }`}
    >
      <div>
        {/* Cabecera del Item con Checkbox */}
        <div className="flex items-start justify-between gap-3 mb-2.5">
          <button
            type="button"
            onClick={onToggle}
            className="flex items-start gap-2.5 text-left cursor-pointer group flex-1"
            aria-pressed={isChecked}
          >
            <div
              className={`w-5 h-5 rounded-lg border flex items-center justify-center mt-0.5 shrink-0 transition-all ${
                isChecked
                  ? "bg-[#991b1b] border-[#991b1b] text-white"
                  : "border-slate-300 bg-slate-50 group-hover:border-slate-400"
              }`}
            >
              {isChecked && <Check size={13} strokeWidth={3} />}
            </div>

            <div className="min-w-0">
              <span className="text-[10px] font-bold text-[#991b1b] uppercase tracking-wider block">
                {equipment.badge}
              </span>
              <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                {equipment.name}
              </h4>
              <span className="text-[11px] text-slate-500 font-mono">
                Mod: {equipment.model}
              </span>
            </div>
          </button>
        </div>

        {/* Imagen y Especificaciones */}
        <div className="flex items-center gap-3 my-2">
          <div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-xl bg-white p-1 shrink-0 overflow-hidden border border-slate-200 flex items-center justify-center shadow-2xs">
            <Image
              src={equipment.image}
              alt={equipment.name}
              width={72}
              height={72}
              className="object-contain max-h-full max-w-full"
            />
          </div>
          <p className="text-[11px] text-slate-600 leading-relaxed">
            {equipment.specs}
          </p>
        </div>
      </div>

      {/* Selector de Cantidad Bounded con Botones Táctiles Cómodos */}
      <div className="pt-2.5 mt-2 border-t border-slate-100 flex items-center justify-between text-xs">
        <span className="text-slate-500 text-xs font-medium">Unidades:</span>
        <div className="flex items-center gap-1 bg-slate-100 border border-slate-200 p-1 rounded-xl">
          <button
            type="button"
            onClick={() => onChangeQty(-1)}
            className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center text-slate-700 hover:text-slate-900 hover:bg-slate-200 rounded-lg cursor-pointer active:scale-90 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            disabled={!isChecked || qty <= MIN_EQUIPMENT_QTY}
            title="Disminuir cantidad"
            aria-label={`Disminuir cantidad de ${equipment.name}`}
          >
            <Minus size={14} />
          </button>
          <span className="font-bold text-slate-900 px-2 tabular-nums text-xs sm:text-sm">{qty}</span>
          <button
            type="button"
            onClick={() => onChangeQty(1)}
            className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center text-slate-700 hover:text-slate-900 hover:bg-slate-200 rounded-lg cursor-pointer active:scale-90 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            disabled={!isChecked || qty >= MAX_EQUIPMENT_QTY}
            title="Aumentar cantidad"
            aria-label={`Aumentar cantidad de ${equipment.name}`}
          >
            <Plus size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
