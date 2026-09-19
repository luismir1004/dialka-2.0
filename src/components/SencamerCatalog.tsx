"use client";

import { useState, useMemo } from "react";
import {
  Search,
  X,
  ShieldCheck,
  RotateCcw,
  SlidersHorizontal,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

interface SencamerModel {
  capacity: string;
  division: string;
  use: string;
}

interface SencamerCatalogProps {
  models: SencamerModel[];
  whatsappNumber: string;
}

const USE_FILTERS = [
  { id: "all", label: "Todos los Modelos" },
  { id: "comercial", label: "Comercial" },
  { id: "industrial", label: "Industrial" },
  { id: "agropecuario", label: "Agropecuario" },
  { id: "vehicular", label: "Vehicular" },
];

export function SencamerCatalog({
  models,
  whatsappNumber,
}: SencamerCatalogProps) {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  const filteredModels = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return models.filter((model) => {
      // Filter by category pill
      if (selectedFilter !== "all") {
        if (!model.use.toLowerCase().includes(selectedFilter)) {
          return false;
        }
      }

      // Filter by search query
      if (query) {
        const matchesCapacity = model.capacity.toLowerCase().includes(query);
        const matchesDivision = model.division.toLowerCase().includes(query);
        const matchesUse = model.use.toLowerCase().includes(query);

        if (!matchesCapacity && !matchesDivision && !matchesUse) {
          return false;
        }
      }

      return true;
    });
  }, [models, searchQuery, selectedFilter]);

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedFilter("all");
  };

  return (
    <section className="bg-white pb-16 md:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── BARRA DE BÚSQUEDA Y FILTROS EN TIEMPO REAL ── */}
        <div className="bg-slate-50/90 border border-slate-200/90 rounded-2xl p-4 sm:p-6 md:p-7 mb-8 shadow-xs">
          <div className="flex flex-col md:flex-row gap-3.5 sm:gap-4 items-stretch md:items-center justify-between mb-5">
            {/* Input de búsqueda */}
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Search size={18} />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar por capacidad (ej: 30 kg, 1.000 kg), división (10 g) o uso..."
                className="w-full bg-white border border-slate-300 rounded-xl pl-10 pr-10 py-2.5 sm:py-3 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#991b1b] focus:ring-2 focus:ring-[#991b1b]/10 transition-all shadow-2xs"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
                  aria-label="Limpiar búsqueda"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {/* Contador de resultados */}
            <div className="flex flex-wrap items-center justify-between sm:justify-end gap-2 sm:gap-3 text-xs font-semibold text-slate-600 shrink-0">
              <span className="flex items-center gap-1.5 bg-white border border-slate-200 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl shadow-2xs text-[11px] sm:text-xs">
                <SlidersHorizontal size={13} className="text-[#991b1b]" />
                <span>
                  {filteredModels.length} de {models.length} modelos
                </span>
              </span>
              {(selectedFilter !== "all" || searchQuery !== "") && (
                <button
                  onClick={handleResetFilters}
                  className="flex items-center gap-1 text-[#991b1b] hover:text-[#7f1d1d] hover:underline transition-colors px-2 py-1 text-xs cursor-pointer"
                >
                  <RotateCcw size={13} />
                  <span>Restablecer</span>
                </button>
              )}
            </div>
          </div>

          {/* Botones de filtro rápido por uso */}
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-2">
              Filtrar por ámbito de uso:
            </span>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {USE_FILTERS.map((f) => {
                const isSelected = selectedFilter === f.id;
                return (
                  <button
                    key={f.id}
                    onClick={() => setSelectedFilter(f.id)}
                    className={`text-xs font-bold px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? "bg-[#991b1b] text-white shadow-xs"
                        : "bg-white border border-slate-200 text-slate-700 hover:border-red-200 hover:text-[#991b1b] shadow-2xs"
                    }`}
                  >
                    {f.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── TABLA DINÁMICA CON TRANSICIONES SUAVES Y SCROLL RESPONSIVO ── */}
        {filteredModels.length > 0 ? (
          <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm bg-white animate-fadeIn">
            {/* Indicador táctil para pantallas móviles */}
            <div className="sm:hidden flex items-center justify-between px-4 py-2.5 bg-slate-50 border-b border-slate-200 text-[11px] text-slate-500 font-semibold">
              <span>Modelos homologados</span>
              <span className="text-[#991b1b] flex items-center gap-1">
                Desliza horizontalmente →
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[620px] text-left border-collapse">
                <thead>
                  <tr className="bg-slate-100/90 border-b border-slate-200 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-700">
                    <th className="px-4 sm:px-6 py-3.5 sm:py-4">Capacidad Máxima</th>
                    <th className="px-4 sm:px-6 py-3.5 sm:py-4">División (e = d)</th>
                    <th className="px-4 sm:px-6 py-3.5 sm:py-4">Campo de Aplicación</th>
                    <th className="px-4 sm:px-6 py-3.5 sm:py-4">Estatus Legal</th>
                    <th className="px-4 sm:px-6 py-3.5 sm:py-4 text-right">Acción</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                  {filteredModels.map((model) => (
                    <tr
                      key={model.capacity}
                      className="hover:bg-slate-50/90 transition-colors animate-fadeIn"
                    >
                      <td className="px-4 sm:px-6 py-3 sm:py-4 font-bold text-slate-900">
                        {model.capacity}
                      </td>
                      <td className="px-4 sm:px-6 py-3 sm:py-4 font-medium text-slate-700">
                        {model.division}
                      </td>
                      <td className="px-4 sm:px-6 py-3 sm:py-4 text-slate-600">
                        <span className="inline-block bg-slate-100 px-2.5 py-1 rounded-md text-xs font-medium text-slate-700">
                          {model.use}
                        </span>
                      </td>
                      <td className="px-4 sm:px-6 py-3 sm:py-4">
                        <span className="inline-flex items-center gap-1.5 bg-emerald-50 border border-emerald-200/90 text-emerald-800 text-[11px] sm:text-xs font-bold px-2.5 sm:px-3 py-1 rounded-full shadow-2xs">
                          <ShieldCheck size={13} className="text-emerald-700" />
                          Certificado SENCAMER
                        </span>
                      </td>
                      <td className="px-4 sm:px-6 py-3 sm:py-4 text-right">
                        <a
                          href={`https://wa.me/${whatsappNumber}?text=Hola,%20solicito%20cotización%20del%20equipo%20SENCAMER%20de%20capacidad:%20${encodeURIComponent(model.capacity)}%20(${encodeURIComponent(model.use)})`}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-bold text-[#991b1b] hover:text-[#7f1d1d] transition-colors p-1"
                        >
                          <span>Cotizar</span>
                          <ArrowRight size={12} />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          /* ── ESTADO VACÍO (SIN RESULTADOS) ── */
          <div className="bg-slate-50 border border-dashed border-slate-300 rounded-2xl p-12 text-center max-w-lg mx-auto animate-fadeIn">
            <div className="w-14 h-14 rounded-full bg-red-50 border border-red-100 flex items-center justify-center mx-auto mb-4">
              <ShieldCheck size={26} className="text-[#991b1b]" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              No se encontraron modelos
            </h3>
            <p className="text-sm text-slate-600 mb-6 leading-relaxed">
              No encontramos ningún modelo con aprobación SENCAMER que coincida con{" "}
              {searchQuery ? `"${searchQuery}"` : "el filtro seleccionado"}.
            </p>
            <button
              onClick={handleResetFilters}
              className="inline-flex items-center gap-2 bg-[#991b1b] hover:bg-[#7f1d1d] text-white text-xs font-bold px-5 py-2.5 rounded-xl transition-all shadow-2xs"
            >
              <RotateCcw size={14} />
              <span>Ver todos los modelos</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
