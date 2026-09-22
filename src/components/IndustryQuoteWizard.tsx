"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Sparkles,
  CheckCircle2,
  Phone,
  ArrowRight,
  Plus,
  Minus,
  Check,
  Package,
} from "lucide-react";
import { CONTACT } from "@/lib/data";
import { useToast } from "@/context/ToastContext";

export interface RubroEquipment {
  id: string;
  name: string;
  model: string;
  specs: string;
  badge: string;
  image: string;
  defaultQty?: number;
}

export interface RubroSector {
  id: string;
  title: string;
  shortTitle: string;
  emoji: string;
  tagline: string;
  description: string;
  equipment: RubroEquipment[];
}

export const RUBROS_DATA: RubroSector[] = [
  {
    id: "carniceria",
    title: "Carnicerías, Charcuterías & Frigoríficos",
    shortTitle: "Carnicerías & Cárnicos",
    emoji: "🥩",
    tagline: "Procesamiento y Pesaje de Alta Resistencia",
    description:
      "Soluciones integrales de grado alimentario para desposte, molienda continua, rebanado preciso y empaque hermético.",
    equipment: [
      {
        id: "molino-tk32",
        name: "Molino de Carne Industrial Techfood",
        model: "TK-32",
        specs: "350 kg/h · Doble velocidad con reversa · Acero Inox",
        badge: "Rendimiento Continuo",
        image: "/images/productos/techfood-molino-tk32.png",
      },
      {
        id: "rebanadora-300",
        name: "Rebanadora Industrial de Embutidos",
        model: "Techfood 300 mm",
        specs: "Disco 30 cm · Aluminio anodizado · Prensa Inox SUS304",
        badge: "Corte Preciso",
        image: "/images/productos/techfood-rebanadora-300mm.png",
      },
      {
        id: "balanza-ocsp",
        name: "Balanza Colgante con Canasta Frutas/Carnes",
        model: "Techfood OCS-P",
        specs: "30 kg × 5 g · Bandeja honda profunda · Pantalla LCD",
        badge: "Homologada SENCAMER",
        image: "/images/productos/techfood-ocsp-colgante.png",
      },
      {
        id: "ablandador-tr8s",
        name: "Tenderizadora / Ablandador de Carne",
        model: "Techfood TR8S",
        specs: "Potencia 550W · Acero Inoxidable · Sin esquinas afiladas",
        badge: "Grado Sanitario",
        image: "/images/productos/techfood-ablandador-tr8s.png",
      },
      {
        id: "cuchilleria-lucky",
        name: "Set de Cuchillería Profesional Carnicera",
        model: "Lucky German Steel",
        specs: "Deshuesador 6\", Chef 8\", Carnicero 12\" · Certificado NSF",
        badge: "Acero Alemán",
        image: "/images/productos/lucky-cuchilleria-chef.png",
      },
      {
        id: "mezcladora-mm55",
        name: "Mezcladora Industrial de Carne",
        model: "Techfood MM55DT",
        specs: "Tanque 28 L (20 kg) · Motor 550W · Mezcla carne congelada",
        badge: "Alta Eficiencia",
        image: "/images/productos/techfood-mezcladora-mm55dt.png",
      },
    ],
  },
  {
    id: "supermercado",
    title: "Supermercados, Bodegones & Minimarkets",
    shortTitle: "Supermercados & Retail",
    emoji: "🛒",
    tagline: "Pesaje Inteligente y Automatización de Cajas",
    description:
      "Balanzas con Inteligencia Artificial, impresión rápida de tickets/etiquetas QR y comunicación con sistemas administrativos.",
    equipment: [
      {
        id: "balanza-ia-y3l",
        name: "Balanza POS Etiquetadora con IA y Cámara",
        model: "Rongta IA-Y3L",
        specs: "15/30 kg DUAL · Cámara 2.0 MP con IA · Pantalla 15.6\" táctil",
        badge: "Reconocimiento IA",
        image: "/images/productos/rongta-ia-y3l-win.png",
      },
      {
        id: "etiquetadora-rls1100c",
        name: "Balanza Etiquetadora de Mostrador y Ticket",
        model: "Rongta RLS1100C",
        specs: "30 kg · Memoria 10.000 productos · Ethernet + Serial · EAN128/QR",
        badge: "Top Ventas",
        image: "/images/productos/rongta-rls1100c.png",
      },
      {
        id: "balanza-pos-c1",
        name: "Balanza POS de Mostrador para Puntos de Venta",
        model: "Rongta C1",
        specs: "15/30 kg DUAL · Display extendible LED · USB / RS232 / WiFi",
        badge: "Sistemas Administrativos",
        image: "/images/productos/rongta-pos-c1.png",
      },
      {
        id: "mostrador-jl918",
        name: "Balanza de Mostrador PPI Antiderrame",
        model: "Techfood JL-918",
        specs: "15/30 kg · Batería 180 hrs · Doble visor cliente/vendedor",
        badge: "Autonomía 180h",
        image: "/images/productos/techfood-jl918.png",
      },
      {
        id: "etiquetadora-torre",
        name: "Balanza Etiquetadora con Torre Flotante",
        model: "Rongta RLS1550P",
        specs: "30 kg · Impresión 90 mm/s · 8 vendedores · Cajero flotante",
        badge: "Torre Elevada",
        image: "/images/productos/rongta-rls1550p.png",
      },
    ],
  },
  {
    id: "agroindustria",
    title: "Agroindustria, Silos & Ganadería",
    shortTitle: "Agroindustria & Campo",
    emoji: "🌾",
    tagline: "Pesaje Pesado para Cosechas, Silos y Ganado",
    description:
      "Básculas camioneras, plataformas de piso de 2 a 5 toneladas y pesaje por ejes para trabajo continuo en faenas agrícolas.",
    equipment: [
      {
        id: "plataforma-tfx15",
        name: "Plataforma de Piso Inoxidable 5.000 kg",
        model: "Techfood TF-X15",
        specs: "150 × 150 cm · 4 Celdas Sharebeam 2T IP68 · Función animal",
        badge: "Carga Pesada 5T",
        image: "/images/productos/techfood-tfx15-inox.png",
      },
      {
        id: "plataforma-jl11",
        name: "Balanza de Plataforma 300 kg con Columna",
        model: "Techfood JL-11",
        specs: "300 kg × 100 g · Bandeja 42.5 × 52 cm · Batería 180 hrs",
        badge: "Homologada SENCAMER",
        image: "/images/productos/techfood-jl11-plataforma.png",
      },
      {
        id: "plataforma-tfx",
        name: "Plataforma Sanitaria Inox 2.000 kg",
        model: "Techfood TF-X",
        specs: "90 × 90 cm · Acero Inox 4 mm · Indicador LED X1S incluido",
        badge: "Acero Inox 4mm",
        image: "/images/productos/techfood-tfx-inox.png",
      },
      {
        id: "celdas-shear",
        name: "Juego de Celdas de Carga Shear Beam",
        model: "Techfood 2T / 500kg",
        specs: "Protección hermética IP68 · Clase de precisión C3 · Cable 6 hilos",
        badge: "Repuesto Genuino",
        image: "/images/productos/ind-extraplana-inox.jpg",
      },
      {
        id: "alquiler-portatil",
        name: "Báscula Camionera Portátil por Ejes 40T",
        model: "Dialka PortaWeigh",
        specs: "40 Toneladas · Módulos extraplanos transportables para zafra",
        badge: "Venta o Alquiler",
        image: "/images/alquiler/ejes-portatil.jpg",
      },
    ],
  },
  {
    id: "gastronomia",
    title: "Restaurantes, Panaderías & Alimentos",
    shortTitle: "Gastronomía & Panadería",
    emoji: "🍽️",
    tagline: "Empaque al Vacío y Porcionado Profesional",
    description:
      "Equipos de conservación al vacío, control exacto de porciones e higiene certificada para cocinas comerciales.",
    equipment: [
      {
        id: "vacio-dz400",
        name: "Empacadora al Vacío Industrial de Campana",
        model: "Techfood DZ-400",
        specs: "Doble barra sellado 40 cm · Bomba 750W · Acero Inoxidable",
        badge: "Doble Barra 40cm",
        image: "/images/productos/techfood-dz400-vacio.png",
      },
      {
        id: "vacio-dz300b",
        name: "Empacadora al Vacío de Sobremesa",
        model: "Techfood DZ-300B",
        specs: "Barra sellado 30 cm · Tiempo 10/20 seg · Cámara en acero inoxidable",
        badge: "Compacta & Rápida",
        image: "/images/productos/techfood-dz300b-vacio.png",
      },
      {
        id: "termoselladora-45",
        name: "Termoselladora para Film de Alimentos",
        model: "Techfood 45 cm",
        specs: "Ancho máximo 45 cm · Control de temperatura 0-160°C · Inox",
        badge: "Sellado Continuo",
        image: "/images/productos/techfood-termoselladora-45cm.png",
      },
      {
        id: "rallador-cg55sh",
        name: "Rallador Industrial de Queso y Pan",
        model: "Techfood CG55SH",
        specs: "Potencia 0.75 HP · Parada de seguridad automática · Acero Inox",
        badge: "Alto Rendimiento",
        image: "/images/productos/techfood-rallador-cg55sh.png",
      },
      {
        id: "rebanadora-abm",
        name: "Rebanadora Italiana de Precisión",
        model: "ABM 250 mm",
        specs: "Disco 25 cm · Motor 1.2 HP · Cuerpo aluminio anodizado",
        badge: "Importación Italiana",
        image: "/images/productos/abm-rebanadora-250mm.png",
      },
      {
        id: "tablas-fda",
        name: "Tablas de Corte Sanitarias Antimicrobianas",
        model: "Techfood FDA",
        specs: "Polietileno de alta densidad · No absorbe olores · Hasta 2 metros",
        badge: "Certificación FDA",
        image: "/images/productos/techfood-tablas-corte-fda.png",
      },
    ],
  },
  {
    id: "laboratorio",
    title: "Laboratorios, Farmacias & Química",
    shortTitle: "Laboratorio & Farmacia",
    emoji: "🧪",
    tagline: "Metrología Analítica y Acreditación Legal",
    description:
      "Balanzas de alta precisión con trazabilidad metrológica para formulaciones, control de calidad y auditorías.",
    equipment: [
      {
        id: "lab-ohaus-scout",
        name: "Balanza de Precisión Ohaus Scout Pro",
        model: "Ohaus SPX",
        specs: "600 g × 0.01 g · Calibración digital · Pantalla retroiluminada",
        badge: "Marca Global Ohaus",
        image: "/images/productos/lab-ohaus-scout.jpg",
      },
      {
        id: "lab-apolo-3000",
        name: "Balanza Semianalítica Apolo Lab",
        model: "Apolo 3000g",
        specs: "3.000 g × 0.1 g · Plato acero inoxidable · Conexión RS-232",
        badge: "Trazable SENCAMER",
        image: "/images/productos/lab-apolo-3000g.jpg",
      },
      {
        id: "lab-analitica-8000",
        name: "Balanza de Laboratorio para Dosificación",
        model: "Apolo Lab 8000",
        specs: "8.000 g × 1 g · Cortavientos y pesaje porcentual",
        badge: "Alta Capacidad Lab",
        image: "/images/productos/lab-semianalitica-8000g.jpg",
      },
      {
        id: "certificacion-sencamer-lab",
        name: "Certificado de Calibración con Masas Clase F1",
        model: "Servicio Metrológico",
        specs: "Pruebas de excentricidad, repetibilidad e incertidumbre",
        badge: "Validez Oficial",
        image: "/images/sencamer/balanza-certificada.jpg",
      },
    ],
  },
  {
    id: "logistica",
    title: "Industria Pesada, Almacenes & Logística",
    shortTitle: "Industria & Almacén",
    emoji: "🏭",
    tagline: "Control de Carga, Paletas y Despacho Masivo",
    description:
      "Pesaje aéreo por grúa, básculas de plataforma empotradas y software para auditoría de inventario.",
    equipment: [
      {
        id: "grua-ocsm-1000",
        name: "Balanza Colgante Industrial tipo Grúa 1.000 kg",
        model: "Techfood OCS-M",
        specs: "1.000 kg × 500 g · Dígitos LED gigantes 4\" · Gancho giratorio",
        badge: "Uso Rudo Industrial",
        image: "/images/productos/techfood-ocsm-grua.png",
      },
      {
        id: "grua-5000kg",
        name: "Dinamómetro / Báscula Aérea de 5 Toneladas",
        model: "Dialka CraneScale 5T",
        specs: "5.000 kg · Control remoto inalámbrico · Grillete forjado",
        badge: "Alta Capacidad Aérea",
        image: "/images/productos/ind-grua-5000kg.jpg",
      },
      {
        id: "indicador-x1s",
        name: "Indicador de Peso Digital Industrial",
        model: "Techfood X1S Inox",
        specs: "Acero Inoxidable · Puerto RS232 · Conexión impresora de tickets",
        badge: "Chasis Inoxidable",
        image: "/images/productos/techfood-indicador-x1s-inox.png",
      },
      {
        id: "software-weighmaster",
        name: "Software de Pesaje Camionero WeighMaster",
        model: "Dialka Software v2",
        specs: "Control de entradas/salidas, reportes en Excel, tickets con código QR",
        badge: "Desarrollo Propio",
        image: "/images/software/software-camiones.jpg",
      },
    ],
  },
];

export function IndustryQuoteWizard() {
  const [activeRubroId, setActiveRubroId] = useState<string>("carniceria");
  const [selectedEquipMap, setSelectedEquipMap] = useState<Record<string, { selected: boolean; qty: number }>>(() => {
    // Por defecto, inicializar los primeros 3 equipos del rubro activo
    const initial: Record<string, { selected: boolean; qty: number }> = {};
    RUBROS_DATA[0].equipment.slice(0, 3).forEach((eq) => {
      initial[eq.id] = { selected: true, qty: 1 };
    });
    return initial;
  });

  const { toast } = useToast();

  const currentRubro = RUBROS_DATA.find((r) => r.id === activeRubroId) || RUBROS_DATA[0];

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
      const newQty = Math.max(1, Math.min(20, (current.qty || 1) + delta));
      return {
        ...prev,
        [eqId]: {
          selected: true,
          qty: newQty,
        },
      };
    });
  };

  // Obtener la lista de equipos seleccionados para el rubro actual
  const selectedItems = currentRubro.equipment.filter(
    (eq) => selectedEquipMap[eq.id]?.selected
  );

  // Generar enlace a WhatsApp con el paquete estructurado (SIN PRECIOS)
  const generateWhatsAppUrl = () => {
    const lines = selectedItems.map(
      (item, idx) =>
        `${idx + 1}. *${item.name}* (Modelo: ${item.model}) - Cant: ${selectedEquipMap[item.id]?.qty || 1}`
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
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3 mb-8">
          {RUBROS_DATA.map((rubro) => {
            const isActive = rubro.id === activeRubroId;

            return (
              <button
                key={rubro.id}
                type="button"
                onClick={() => handleSelectRubro(rubro.id)}
                className={`p-3 sm:p-3.5 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between cursor-pointer active:scale-95 group ${
                  isActive
                    ? "bg-gradient-to-b from-[#991b1b] to-[#7f1d1d] border-red-400 text-white shadow-lg shadow-red-950/50 scale-[1.03]"
                    : "bg-slate-800/70 hover:bg-slate-800 border-slate-700/80 hover:border-slate-500 text-slate-300"
                }`}
              >
                <div>
                  <span className="text-2xl sm:text-3xl block mb-2 transition-transform duration-200 group-hover:scale-110">
                    {rubro.emoji}
                  </span>
                  <h3 className="text-xs sm:text-sm font-bold leading-snug">
                    {rubro.shortTitle}
                  </h3>
                </div>

                <div className="mt-3 flex items-center justify-between text-[10px] font-semibold opacity-80 pt-2 border-t border-white/10">
                  <span>{rubro.equipment.length} equipos</span>
                  <span>{isActive ? "● Activo" : "Elegir"}</span>
                </div>
              </button>
            );
          })}
        </div>

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
                onClick={() => {
                  const allSelected = currentRubro.equipment.every((eq) => selectedEquipMap[eq.id]?.selected);
                  const updated = { ...selectedEquipMap };
                  currentRubro.equipment.forEach((eq) => {
                    updated[eq.id] = { selected: !allSelected, qty: 1 };
                  });
                  setSelectedEquipMap(updated);
                }}
                className="text-xs text-red-400 hover:text-red-300 font-semibold underline cursor-pointer"
              >
                {currentRubro.equipment.every((eq) => selectedEquipMap[eq.id]?.selected)
                  ? "Deseleccionar todos"
                  : "Marcar todos"}
              </button>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {currentRubro.equipment.map((eq) => {
                const isChecked = selectedEquipMap[eq.id]?.selected ?? false;
                const qty = selectedEquipMap[eq.id]?.qty ?? 1;

                return (
                  <div
                    key={eq.id}
                    className={`relative rounded-2xl border p-3.5 transition-all duration-200 flex flex-col justify-between ${
                      isChecked
                        ? "bg-slate-900/95 border-red-500/80 shadow-md ring-1 ring-red-500/30"
                        : "bg-slate-900/40 border-slate-700/70 hover:border-slate-600 opacity-80"
                    }`}
                  >
                    <div>
                      {/* Cabecera del Item con Checkbox */}
                      <div className="flex items-start justify-between gap-3 mb-2.5">
                        <button
                          type="button"
                          onClick={() => toggleEquipment(eq.id)}
                          className="flex items-start gap-2.5 text-left cursor-pointer group flex-1"
                        >
                          <div
                            className={`w-5 h-5 rounded-lg border flex items-center justify-center mt-0.5 shrink-0 transition-all ${
                              isChecked
                                ? "bg-red-600 border-red-500 text-white"
                                : "border-slate-600 bg-slate-800 group-hover:border-slate-400"
                            }`}
                          >
                            {isChecked && <Check size={13} strokeWidth={3} />}
                          </div>

                          <div className="min-w-0">
                            <span className="text-[10px] font-bold text-red-300 uppercase tracking-wider block">
                              {eq.badge}
                            </span>
                            <h4 className="text-xs sm:text-sm font-bold text-white leading-tight">
                              {eq.name}
                            </h4>
                            <span className="text-[11px] text-slate-400 font-mono">
                              Mod: {eq.model}
                            </span>
                          </div>
                        </button>
                      </div>

                      {/* Imagen y Especificaciones */}
                      <div className="flex items-center gap-3 my-2">
                        <div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-xl bg-white p-1 shrink-0 overflow-hidden border border-slate-600 flex items-center justify-center">
                          <Image
                            src={eq.image}
                            alt={eq.name}
                            width={72}
                            height={72}
                            className="object-contain max-h-full max-w-full"
                          />
                        </div>
                        <p className="text-[11px] text-slate-300 leading-relaxed">
                          {eq.specs}
                        </p>
                      </div>
                    </div>

                    {/* Selector de Cantidad */}
                    <div className="pt-2.5 mt-2 border-t border-slate-800 flex items-center justify-between text-xs">
                      <span className="text-slate-400 text-[11px]">Unidades requeridas:</span>
                      <div className="flex items-center gap-2 bg-slate-800 border border-slate-700 px-2 py-1 rounded-xl">
                        <button
                          type="button"
                          onClick={() => changeQty(eq.id, -1)}
                          className="text-slate-400 hover:text-white p-0.5 cursor-pointer disabled:opacity-30"
                          disabled={!isChecked || qty <= 1}
                          title="Disminuir"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="font-bold text-white px-1">{qty}</span>
                        <button
                          type="button"
                          onClick={() => changeQty(eq.id, 1)}
                          className="text-slate-400 hover:text-white p-0.5 cursor-pointer disabled:opacity-30"
                          disabled={!isChecked}
                          title="Aumentar"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── 3. RESUMEN DE COTIZACIÓN Y BOTÓN DIRECTO DE WHATSAPP ── */}
          <div className="pt-6 border-t border-slate-700/80 flex flex-col sm:flex-row items-center justify-between gap-5">
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-bold text-red-300 mb-1">
                <CheckCircle2 size={15} className="text-emerald-400" />
                <span>Presupuesto formal emitido al cambio oficial BCV</span>
              </div>
              <p className="text-xs text-slate-400">
                {selectedItems.length > 0
                  ? `Se incluirán ${selectedItems.length} equipo(s) en su solicitud de cotización.`
                  : "Marque uno o varios equipos arriba para enviarlos estructurados a WhatsApp."}
              </p>
            </div>

            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center gap-3">
              <a
                href={generateWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 hover:from-emerald-500 hover:to-emerald-500 text-white font-extrabold py-3.5 px-6 rounded-2xl shadow-lg shadow-emerald-950/50 text-sm sm:text-base transition-all active:scale-95 cursor-pointer"
              >
                <Phone size={18} />
                <span>Cotizar Paquete para {currentRubro.shortTitle}</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
