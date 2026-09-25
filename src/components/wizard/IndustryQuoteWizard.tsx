"use client";

import { useState } from "react";
import { Sparkles, Package, ArrowRight, Phone } from "lucide-react";
import { CONTACT } from "@/lib/data";
import { useToast } from "@/context/ToastContext";
import {
  EquipmentSelectionMap,
  clampQuantity,
  RubroSector,
  RubroEquipment,
} from "./types";
import { RUBROS_DATA } from "./wizardData";
import { WizardSectorSelector } from "./WizardSectorSelector";
import { WizardEquipmentCard } from "./WizardEquipmentCard";
import { WizardQuoteSummary } from "./WizardQuoteSummary";

export function IndustryQuoteWizard() {
  const [activeRubroId, setActiveRubroId] = useState<string>("carniceria");
  const [selectedEquipMap, setSelectedEquipMap] = useState<EquipmentSelectionMap>(() => {
    // Por defecto, inicializar los primeros 3 equipos del primer rubro
    const initial: EquipmentSelectionMap = {};
    RUBROS_DATA[0].equipment.slice(0, 3).forEach((eq) => {
      initial[eq.id] = { selected: true, qty: 1 };
    });
    return initial;
  });

  const { toast } = useToast();

  const currentRubro: RubroSector =
    RUBROS_DATA.find((r) => r.id === activeRubroId) || RUBROS_DATA[0];

  const handleSelectRubro = (rubroId: string) => {
    setActiveRubroId(rubroId);
    const targetRubro = RUBROS_DATA.find((r) => r.id === rubroId);
    if (!targetRubro) return;

    // Precargar los primeros 2 o 3 equipos recomendados de este rubro
    const updated = { ...selectedEquipMap };
    targetRubro.equipment.slice(0, 3).forEach((eq) => {
      if (!updated[eq.id]) {
        updated[eq.id] = { selected: true, qty: 1 };
      }
    });
    setSelectedEquipMap(updated);

    toast({
      title: `Rubro seleccionado: ${targetRubro.title}`,
      description: "Equipos recomendados cargados en pantalla.",
      type: "info",
    });
  };

  const toggleEquipment = (eqId: string) => {
    setSelectedEquipMap((prev) => {
      const current = prev[eqId] || { selected: false, qty: 1 };
      return {
        ...prev,
        [eqId]: {
          selected: !current.selected,
          qty: current.qty || 1,
        },
      };
    });
  };

  const changeQty = (eqId: string, delta: number) => {
    setSelectedEquipMap((prev) => {
      const current = prev[eqId] || { selected: true, qty: 1 };
      const newQty = clampQuantity((current.qty || 1) + delta);
      return {
        ...prev,
        [eqId]: {
          selected: true,
          qty: newQty,
        },
      };
    });
  };

  const handleToggleAll = () => {
    const allSelected = currentRubro.equipment.every(
      (eq) => selectedEquipMap[eq.id]?.selected
    );
    const updated = { ...selectedEquipMap };
    currentRubro.equipment.forEach((eq) => {
      updated[eq.id] = { selected: !allSelected, qty: 1 };
    });
    setSelectedEquipMap(updated);
  };

  // Equipos seleccionados para el rubro actual
  const selectedItems: RubroEquipment[] = currentRubro.equipment.filter(
    (eq) => selectedEquipMap[eq.id]?.selected
  );

  // Generar enlace a WhatsApp con el paquete estructurado (al cambio oficial BCV)
  const generateWhatsAppUrl = (): string => {
    const lines = selectedItems.map(
      (item, idx) =>
        `${idx + 1}. *${item.name}* (Modelo: ${item.model}) - Cant: ${
          selectedEquipMap[item.id]?.qty || 1
        }`
    );

    const message = encodeURIComponent(
      `*Cotización por Rubro - Dialka 2.0*\n` +
        `🏭 *Sector:* ${currentRubro.title}\n\n` +
        `Deseo solicitar disponibilidad y cotización formal al *cambio oficial BCV* para el siguiente paquete de equipos:\n\n` +
        (lines.length > 0
          ? lines.join("\n")
          : `• Asesoría completa para equipar mi negocio en el rubro: ${currentRubro.title}`) +
        `\n\n📍 Por favor enviar condiciones de despacho, garantía y soporte técnico en Venezuela.`
    );

    return `https://wa.me/${CONTACT.whatsapp}?text=${message}`;
  };

  const isAllSelected = currentRubro.equipment.every(
    (eq) => selectedEquipMap[eq.id]?.selected
  );

  return (
    <section className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white py-12 sm:py-16 rounded-3xl overflow-hidden border border-slate-700 shadow-2xl relative">
      {/* Luces de fondo decorativas */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-600/20 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-red-950/40 rounded-full blur-2xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabecera del Cotizador */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/60 border border-red-500/30 text-xs font-bold uppercase tracking-wider text-red-300 mb-3 shadow-sm">
            <Sparkles size={14} className="text-red-400" />
            <span>Configurador de Paquetes por Sector Comercial</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            ¿Cuál es el rubro de su empresa?
          </h2>

          <p className="text-slate-300 text-xs sm:text-sm md:text-base mt-2 leading-relaxed">
            Seleccione su tipo de negocio. Nuestro sistema le desplegará el conjunto de equipos certificados recomendados para configurar su cotización en segundos al cambio oficial BCV.
          </p>
        </div>

        {/* ── 1. SELECTOR TÁCTIL DE LOS 6 GRANDES RUBROS ── */}
        <WizardSectorSelector
          sectors={RUBROS_DATA}
          activeSectorId={activeRubroId}
          onSelectSector={handleSelectRubro}
        />

        {/* ── 2. PANEL INTERACTIVO DE CONFIGURACIÓN DEL RUBRO ACTIVO ── */}
        <div className="bg-slate-800/90 border border-slate-700 rounded-3xl p-5 sm:p-7 lg:p-8 backdrop-blur-md shadow-xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-700/80">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xl">{currentRubro.emoji}</span>
                <span className="text-xs font-bold text-red-400 uppercase tracking-wider">
                  Solución Especializada para
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                {currentRubro.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
                {currentRubro.description}
              </p>
            </div>

            {/* Contador de Equipos Marcados */}
            <div className="self-start lg:self-auto bg-slate-900/80 border border-slate-700 px-4 py-2.5 rounded-2xl flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-red-950/70 border border-red-500/30 flex items-center justify-center text-red-400 font-extrabold text-base">
                {selectedItems.length}
              </div>
              <div className="text-xs">
                <div className="font-bold text-white">Equipos en su cotización</div>
                <div className="text-slate-400 text-[10px]">
                  {selectedItems.length > 0
                    ? "Listos para cotizar por WhatsApp"
                    : "Marque las casillas de abajo"}
                </div>
              </div>
            </div>
          </div>

          {/* Grid de Equipos del Rubro */}
          <div className="py-6">
            <div className="flex items-center justify-between mb-4">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Package size={14} className="text-red-400" />
                <span>Equipos Recomendados para este Rubro (Seleccione los requeridos):</span>
              </p>

              <button
                type="button"
                onClick={handleToggleAll}
                className="text-xs text-red-400 hover:text-red-300 font-semibold underline cursor-pointer"
              >
                {isAllSelected ? "Deseleccionar todos" : "Marcar todos"}
              </button>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {currentRubro.equipment.map((eq) => {
                const isChecked = selectedEquipMap[eq.id]?.selected ?? false;
                const qty = selectedEquipMap[eq.id]?.qty ?? 1;

                return (
                  <WizardEquipmentCard
                    key={eq.id}
                    equipment={eq}
                    isChecked={isChecked}
                    qty={qty}
                    onToggle={() => toggleEquipment(eq.id)}
                    onChangeQty={(delta) => changeQty(eq.id, delta)}
                  />
                );
              })}
            </div>
          </div>

          {/* ── 3. RESUMEN DE COTIZACIÓN Y BOTÓN DIRECTO DE WHATSAPP ── */}
          <WizardQuoteSummary
            currentRubro={currentRubro}
            selectedCount={selectedItems.length}
            whatsappUrl={generateWhatsAppUrl()}
          />
        </div>

        {/* ── 4. STICKY ACTION BAR EN MÓVILES (ACCESO RÁPIDO A WHATSAPP) ── */}
        {selectedItems.length > 0 && (
          <div className="lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 p-3 px-4 shadow-2xl flex items-center justify-between gap-3 animate-in fade-in slide-in-from-bottom-3 duration-200">
            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="text-base">{currentRubro.emoji}</span>
                <span className="text-xs font-bold text-white truncate max-w-[130px] sm:max-w-none">{currentRubro.title}</span>
              </div>
              <p className="text-[11px] text-slate-400">
                <strong className="text-red-400">{selectedItems.length}</strong> {selectedItems.length === 1 ? "equipo marcado" : "equipos marcados"}
              </p>
            </div>

            <a
              href={generateWhatsAppUrl()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#991b1b] hover:bg-[#7f1d1d] active:scale-95 text-white font-bold text-xs sm:text-sm px-4 py-2.5 rounded-xl shadow-md shrink-0 transition-all"
            >
              <Phone size={13} />
              <span>Cotizar WhatsApp</span>
              <ArrowRight size={13} />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
