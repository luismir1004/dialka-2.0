import React from "react";
import { Sparkles } from "lucide-react";

export interface PresetChip {
  id: string;
  label: string;
  emoji: string;
  urgency: "Normal" | "Prioritaria" | "Emergencia";
  asunto: string;
  mensajeTemplate: string;
}

export const PRESET_CHIPS: PresetChip[] = [
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

interface ContactPresetChipsProps {
  selectedPreset: string | null;
  onApplyPreset: (preset: PresetChip) => void;
}

export function ContactPresetChips({
  selectedPreset,
  onApplyPreset,
}: ContactPresetChipsProps) {
  return (
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
              onClick={() => onApplyPreset(chip)}
              className={`p-2.5 rounded-xl border text-left transition-all duration-200 flex items-start gap-2 cursor-pointer ${
                isSelected
                  ? "bg-red-50/95 border-red-400 text-[#7f1d1d] shadow-xs scale-[1.01] ring-1 ring-red-400/30"
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
  );
}
