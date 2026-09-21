"use client";

import { useState, useEffect } from "react";
import {
  Truck,
  Receipt,
  Cpu,
  FileSpreadsheet,
  CheckCircle2,
  Download,
  Terminal,
  ShieldCheck,
  Zap,
  Printer,
} from "lucide-react";

type TabType = "camiones" | "tickets" | "puertos" | "reportes";

interface WeighRecord {
  id: string;
  ticket: string;
  placa: string;
  conductor: string;
  producto: string;
  bruto: number;
  tara: number;
  neto: number;
  fecha: string;
  estado: "Completado" | "Pendiente Tara";
}

const INITIAL_RECORDS: WeighRecord[] = [
  {
    id: "rec-1",
    ticket: "TK-004892",
    placa: "A45BB8D",
    conductor: "José R. Mendoza",
    producto: "Maíz Amarillo Granel",
    bruto: 42850,
    tara: 14200,
    neto: 28650,
    fecha: "Hoy 14:32",
    estado: "Completado",
  },
  {
    id: "rec-2",
    ticket: "TK-004893",
    placa: "A92CC1K",
    conductor: "Carlos E. Salazar",
    producto: "Cemento Gris Tipo I",
    bruto: 45100,
    tara: 15400,
    neto: 29700,
    fecha: "Hoy 14:48",
    estado: "Completado",
  },
  {
    id: "rec-3",
    ticket: "TK-004894",
    placa: "A10XX9L",
    conductor: "Manuel Guédez",
    producto: "Harina de Soya 48%",
    bruto: 39800,
    tara: 0,
    neto: 0,
    fecha: "Hoy 15:10",
    estado: "Pendiente Tara",
  },
];

export function SoftwareScreenshotsShowcase() {
  const [activeTab, setActiveTab] = useState<TabType>("camiones");

  // Estados interactivos para el simulador de pesaje
  const [placa, setPlaca] = useState("A88DD3M");
  const [conductor, setConductor] = useState("Rafael Torres");
  const [producto, setProducto] = useState("Maíz Blanco Acondicionado");
  const [bruto, setBruto] = useState(41200);
  const [tara, setTara] = useState(13850);
  const [savedSuccess, setSavedSuccess] = useState(false);

  // Terminal RS-232 frames
  const [terminalLogs, setTerminalLogs] = useState<string[]>([
    "[15:14:02.102] COM1 OPEN: 9600, 8, N, 1",
    "[15:14:02.340] RX: ST,GS,+041200kg",
    "[15:14:03.340] RX: ST,GS,+041200kg [STABLE]",
    "[15:14:04.341] RX: ST,GS,+041200kg [STABLE]",
  ]);

  useEffect(() => {
    if (activeTab !== "puertos") return;
    const interval = setInterval(() => {
      const now = new Date();
      const timeStr = now.toTimeString().split(" ")[0] + "." + String(now.getMilliseconds()).padStart(3, "0");
      // pequeña fluctuación de +/- 10 kg
      const noise = Math.floor(Math.random() * 3 - 1) * 10;
      const currentGross = 41200 + noise;
      const logLine = `[${timeStr}] RX: ST,GS,+0${currentGross}kg [STABLE]`;
      setTerminalLogs((prev) => [...prev.slice(-6), logLine]);
    }, 1800);
    return () => clearInterval(interval);
  }, [activeTab]);

  const handleSimulateSave = () => {
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  const netoCalculado = Math.max(0, bruto - tara);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden">
      {/* Barra superior de la ventana estilo SO Industrial */}
      <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
          </div>
          <span className="text-xs font-mono font-bold text-slate-400">
            DIALKA WEIGHMASTER PRO v4.8 — Sistema de Pesaje Industrial
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            BÁSCULA 01 EN LÍNEA (COM1: 9600)
          </span>
          <span className="text-[10px] font-mono text-slate-400 hidden sm:inline-block">
            SENCAMER ID: 2026-DK-091
          </span>
        </div>
      </div>

      {/* Pestañas de Módulos del Software */}
      <div className="bg-slate-900/90 border-b border-slate-800 px-3 sm:px-6 pt-3 flex gap-2 overflow-x-auto no-scrollbar">
        <button
          type="button"
          onClick={() => setActiveTab("camiones")}
          className={`flex items-center gap-2 px-3.5 py-2.5 rounded-t-xl text-xs sm:text-sm font-bold transition-all border-t-2 ${
            activeTab === "camiones"
              ? "bg-slate-800 text-white border-red-500 shadow-md"
              : "text-slate-400 hover:text-slate-200 border-transparent hover:bg-slate-800/50"
          }`}
        >
          <Truck size={15} className={activeTab === "camiones" ? "text-red-400" : "text-slate-400"} />
          <span>Pesaje Vehicular</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("tickets")}
          className={`flex items-center gap-2 px-3.5 py-2.5 rounded-t-xl text-xs sm:text-sm font-bold transition-all border-t-2 ${
            activeTab === "tickets"
              ? "bg-slate-800 text-white border-red-500 shadow-md"
              : "text-slate-400 hover:text-slate-200 border-transparent hover:bg-slate-800/50"
          }`}
        >
          <Receipt size={15} className={activeTab === "tickets" ? "text-red-400" : "text-slate-400"} />
          <span>Ticket Oficial SENCAMER</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("puertos")}
          className={`flex items-center gap-2 px-3.5 py-2.5 rounded-t-xl text-xs sm:text-sm font-bold transition-all border-t-2 ${
            activeTab === "puertos"
              ? "bg-slate-800 text-white border-red-500 shadow-md"
              : "text-slate-400 hover:text-slate-200 border-transparent hover:bg-slate-800/50"
          }`}
        >
          <Cpu size={15} className={activeTab === "puertos" ? "text-red-400" : "text-slate-400"} />
          <span>Comunicaciones RS-232 / TCP</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("reportes")}
          className={`flex items-center gap-2 px-3.5 py-2.5 rounded-t-xl text-xs sm:text-sm font-bold transition-all border-t-2 ${
            activeTab === "reportes"
              ? "bg-slate-800 text-white border-red-500 shadow-md"
              : "text-slate-400 hover:text-slate-200 border-transparent hover:bg-slate-800/50"
          }`}
        >
          <FileSpreadsheet size={15} className={activeTab === "reportes" ? "text-red-400" : "text-slate-400"} />
          <span>Reportes & Auditoría</span>
        </button>
      </div>

      {/* Contenido Dinámico de la Pestaña Activa */}
      <div className="p-4 sm:p-6 lg:p-8 bg-slate-900 min-h-[460px]">
        {/* ── 1. MÓDULO PESAJE DE CAMIONES ── */}
        {activeTab === "camiones" && (
          <div className="grid lg:grid-cols-12 gap-6 items-start">
            {/* Formulario de Entrada */}
            <div className="lg:col-span-7 bg-slate-950/70 border border-slate-800 rounded-xl p-4 sm:p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs font-mono font-bold text-red-400 uppercase tracking-wider">
                  MÓDULO DE ENTRADA Y SALIDA
                </span>
                <span className="text-[11px] font-mono text-slate-400">
                  TICKET CORRELATIVO: <strong className="text-white">#004895</strong>
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1">
                    Placa Vehículo
                  </label>
                  <input
                    type="text"
                    value={placa}
                    onChange={(e) => setPlaca(e.target.value.toUpperCase())}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white font-mono font-bold focus:border-red-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1">
                    Conductor / Cédula
                  </label>
                  <input
                    type="text"
                    value={conductor}
                    onChange={(e) => setConductor(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white font-mono focus:border-red-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1">
                  Rubro / Producto Transportado
                </label>
                <select
                  value={producto}
                  onChange={(e) => setProducto(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white font-mono focus:border-red-500 focus:outline-none cursor-pointer"
                >
                  <option>Maíz Blanco Acondicionado</option>
                  <option>Maíz Amarillo Granel</option>
                  <option>Harina de Soya 48%</option>
                  <option>Cemento Gris Tipo I</option>
                  <option>Chatarra de Acero Clasificada</option>
                  <option>Azúcar Crudo a Granel</option>
                </select>
              </div>

              {/* Controles de Peso con Captura Automática */}
              <div className="grid grid-cols-3 gap-2.5 pt-2">
                <div className="bg-slate-900/90 border border-slate-800 rounded-lg p-3 text-center">
                  <span className="block text-[10px] font-mono text-slate-400 uppercase">Peso Bruto (kg)</span>
                  <input
                    type="number"
                    value={bruto}
                    onChange={(e) => setBruto(Number(e.target.value))}
                    className="w-full text-center bg-transparent text-lg sm:text-xl font-mono font-extrabold text-amber-400 focus:outline-none mt-1"
                  />
                  <span className="text-[9px] font-mono text-emerald-400">Capturado RS-232</span>
                </div>

                <div className="bg-slate-900/90 border border-slate-800 rounded-lg p-3 text-center">
                  <span className="block text-[10px] font-mono text-slate-400 uppercase">Tara Vehículo (kg)</span>
                  <input
                    type="number"
                    value={tara}
                    onChange={(e) => setTara(Number(e.target.value))}
                    className="w-full text-center bg-transparent text-lg sm:text-xl font-mono font-extrabold text-slate-300 focus:outline-none mt-1"
                  />
                  <span className="text-[9px] font-mono text-slate-400">Histórico / Salida</span>
                </div>

                <div className="bg-red-950/40 border border-red-500/40 rounded-lg p-3 text-center">
                  <span className="block text-[10px] font-mono text-red-300 uppercase">Neto Facturable (kg)</span>
                  <span className="block text-lg sm:text-xl font-mono font-extrabold text-red-400 mt-1">
                    {netoCalculado.toLocaleString("es-VE")}
                  </span>
                  <span className="text-[9px] font-mono text-red-300">Neto Automático</span>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-3">
                <button
                  type="button"
                  onClick={handleSimulateSave}
                  className="flex-1 bg-red-600 hover:bg-red-700 active:scale-[0.99] text-white font-bold py-2.5 px-4 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-red-950/50 cursor-pointer"
                >
                  <Printer size={15} />
                  <span>Registrar e Imprimir Ticket</span>
                </button>
                {savedSuccess && (
                  <span className="inline-flex items-center gap-1 text-emerald-400 text-xs font-mono font-bold animate-fadeIn">
                    <CheckCircle2 size={15} />
                    ¡Guardado e Impreso!
                  </span>
                )}
              </div>
            </div>

            {/* Display Gigante de Báscula en Vivo */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border border-slate-800 rounded-xl p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    INDICADOR DE CAMIONES (PUENTE 18M)
                  </span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                </div>

                {/* Display Digital de 7 Segmentos Estilo LED Industrial */}
                <div className="bg-black/90 rounded-xl border border-red-900/40 p-4 sm:p-6 text-center my-3 shadow-inner">
                  <span className="text-[10px] font-mono text-red-400/80 uppercase block tracking-widest mb-1">
                    PESO ESTABLE SENCAMER COVENIN 2548
                  </span>
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-mono font-extrabold text-red-500 tracking-tight drop-shadow-[0_0_15px_rgba(239,68,68,0.5)]">
                    {bruto.toLocaleString("es-VE")} <span className="text-xl sm:text-2xl text-red-400">kg</span>
                  </div>
                  <div className="flex items-center justify-center gap-4 mt-3 text-[10px] font-mono text-slate-400">
                    <span className="bg-emerald-950/80 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/30">
                      ESTABLE ●
                    </span>
                    <span className="bg-slate-800 text-slate-300 px-2 py-0.5 rounded">CERO: BRUTO</span>
                    <span className="bg-slate-800 text-slate-300 px-2 py-0.5 rounded">DIV: d = 10 kg</span>
                  </div>
                </div>

                <div className="space-y-2 mt-4 text-xs font-mono text-slate-400">
                  <div className="flex justify-between border-b border-slate-800/80 pb-1">
                    <span>Tiempo de estabilización:</span>
                    <span className="text-white font-bold">0.8 segundos</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-800/80 pb-1">
                    <span>Protocolo de comunicación:</span>
                    <span className="text-white font-bold">RS-232 continuo (Toledo/Rinstrum)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Protección contra fraude:</span>
                    <span className="text-emerald-400 font-bold">Firma Criptográfica Activa</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-slate-950/80 border border-slate-800 rounded-lg p-3 text-[11px] text-slate-400 flex items-center gap-2">
                <ShieldCheck size={16} className="text-red-400 shrink-0" />
                <span>
                  Cumple con regulaciones de pesos vehiculares del INTT y normas metrológicas nacionales.
                </span>
              </div>
            </div>
          </div>
        )}

        {/* ── 2. MÓDULO TICKET OFICIAL SENCAMER ── */}
        {activeTab === "tickets" && (
          <div className="max-w-xl mx-auto bg-white text-slate-900 rounded-xl p-6 shadow-2xl border border-slate-300 font-mono text-xs">
            <div className="text-center border-b border-dashed border-slate-400 pb-4 mb-4">
              <p className="font-bold text-sm tracking-wider uppercase">BALANZAS Y SERVICIOS DIALKA, C.A.</p>
              <p className="text-[10px] text-slate-600">RIF: J-30811985-0 · SERVICIO METROLÓGICO</p>
              <p className="text-[10px] text-slate-600">SISTEMA WEIGHMASTER PRO v4.8</p>
              <p className="font-extrabold text-base mt-2">COMPROBANTE OFICIAL DE PESAJE</p>
              <p className="text-xs font-bold text-red-700">TICKET N° 004895</p>
            </div>

            <div className="space-y-1.5 border-b border-dashed border-slate-400 pb-4 mb-4">
              <div className="flex justify-between">
                <span className="text-slate-600">FECHA Y HORA:</span>
                <span className="font-bold">19/09/2026 - 15:14:22</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">BÁSCULA ID:</span>
                <span className="font-bold">CAMIONERA 80TN (CARACAS/VALENCIA)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">PLACA VEHÍCULO:</span>
                <span className="font-bold">{placa}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">CONDUCTOR:</span>
                <span className="font-bold">{conductor}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">PRODUCTO:</span>
                <span className="font-bold">{producto}</span>
              </div>
            </div>

            <div className="bg-slate-100 p-3 rounded space-y-2 border-b border-dashed border-slate-400 pb-4 mb-4">
              <div className="flex justify-between text-xs">
                <span>PESO BRUTO (ENTRADA):</span>
                <span className="font-bold">{bruto.toLocaleString("es-VE")} kg</span>
              </div>
              <div className="flex justify-between text-xs">
                <span>TARA VEHÍCULO (SALIDA):</span>
                <span className="font-bold">{tara.toLocaleString("es-VE")} kg</span>
              </div>
              <div className="flex justify-between text-sm font-extrabold pt-1 border-t border-slate-300 text-[#991b1b]">
                <span>PESO NETO CARGA:</span>
                <span>{netoCalculado.toLocaleString("es-VE")} kg ({ (netoCalculado / 1000).toFixed(2) } TN)</span>
              </div>
            </div>

            <div className="text-center text-[10px] text-slate-500 space-y-1">
              <p>PESAJE CERTIFICADO CONFORME A NORMA VENEZOLANA COVENIN 2548</p>
              <p>REGISTRO DE CONTROL METROLÓGICO SENCAMER: DIALKA-CERT-2026</p>
              <div className="mt-4 pt-4 border-t border-dashed border-slate-300 flex justify-around">
                <div className="text-center w-36">
                  <div className="border-t border-slate-700 pt-1 mt-6">Firma Operador</div>
                </div>
                <div className="text-center w-36">
                  <div className="border-t border-slate-700 pt-1 mt-6">Firma Conductor</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── 3. MÓDULO COMUNICACIONES RS-232 / TCP ── */}
        {activeTab === "puertos" && (
          <div className="grid lg:grid-cols-12 gap-6">
            <div className="lg:col-span-8 bg-black border border-slate-800 rounded-xl p-4 sm:p-5 font-mono">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2.5 mb-3">
                <div className="flex items-center gap-2">
                  <Terminal size={16} className="text-emerald-400" />
                  <span className="text-xs font-bold text-emerald-400">
                    TERMINAL DE CAPTURA EN VIVO — STREAMING RS-232 (ASCII)
                  </span>
                </div>
                <span className="text-[10px] text-slate-500">BUF: 1024B · PARIDAD NINGUNA</span>
              </div>

              <div className="space-y-1.5 text-xs text-emerald-300 min-h-[220px]">
                {terminalLogs.map((log, i) => (
                  <div key={i} className="leading-relaxed hover:bg-slate-900/60 px-2 py-0.5 rounded">
                    {log}
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                <span>Indicadores compatibles: Toledo, Rinstrum, Cardinal, Rice Lake, CAS, Systec</span>
                <span className="text-emerald-400 font-bold">100% Sin Pérdida de Paquetes</span>
              </div>
            </div>

            <div className="lg:col-span-4 bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-4">
              <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
                Configuración de Enlace
              </h4>

              <div className="space-y-2 text-xs font-mono text-slate-300">
                <div className="flex justify-between">
                  <span className="text-slate-500">Puerto Activo:</span>
                  <span className="text-white font-bold">COM1 / ttyUSB0</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Baud Rate:</span>
                  <span className="text-white font-bold">9600 bps</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Data Bits / Stop:</span>
                  <span className="text-white font-bold">8 Bits / 1 Stop</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">IP Ethernet Backup:</span>
                  <span className="text-white font-bold">192.168.1.120:4001</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Control de Flujo:</span>
                  <span className="text-white font-bold">Hardware (RTS/CTS)</span>
                </div>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-lg p-3 text-[11px] text-slate-400">
                <div className="flex items-center gap-1.5 text-emerald-400 font-bold mb-1">
                  <Zap size={14} />
                  <span>Reconexión Automática</span>
                </div>
                En caso de desconexión física de cable o corte eléctrico, el software restablece el flujo de pesaje en menos de 2 segundos sin pérdida de registros.
              </div>
            </div>
          </div>
        )}

        {/* ── 4. MÓDULO REPORTES & AUDITORÍA ── */}
        {activeTab === "reportes" && (
          <div className="space-y-5">
            {/* Métricas del Día */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-slate-950 border border-slate-800 rounded-xl p-4">
                <span className="text-[10px] font-mono text-slate-400 uppercase">Total Despachos Hoy</span>
                <p className="text-2xl font-extrabold text-white mt-1">48 Camiones</p>
                <span className="text-[10px] text-emerald-400 font-mono">100% auditados</span>
              </div>
              <div className="bg-slate-950 border border-slate-800 rounded-xl p-4">
                <span className="text-[10px] font-mono text-slate-400 uppercase">Tonelaje Total Procesado</span>
                <p className="text-2xl font-extrabold text-amber-400 mt-1">1.382,45 TN</p>
                <span className="text-[10px] text-slate-400 font-mono">Promedio: 28.8 TN/vehículo</span>
              </div>
              <div className="bg-slate-950 border border-slate-800 rounded-xl p-4">
                <span className="text-[10px] font-mono text-slate-400 uppercase">Exportación a ERP / Excel</span>
                <button
                  type="button"
                  onClick={() => alert("Generando reporte gerencial consolidado en formato Excel (.xlsx)...")}
                  className="mt-2 w-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold py-2 px-3 rounded-lg flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                >
                  <Download size={13} />
                  <span>Descargar Reporte (.xlsx)</span>
                </button>
              </div>
            </div>

            {/* Tabla de Registros Recientes */}
            <div className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden">
              <div className="p-3.5 border-b border-slate-800 flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                  Últimos Despachos Registrados en Báscula
                </span>
                <span className="text-[11px] font-mono text-slate-400">
                  Filtrado en tiempo real
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left font-mono text-xs text-slate-300">
                  <thead className="bg-slate-900 text-[10px] text-slate-400 uppercase border-b border-slate-800">
                    <tr>
                      <th className="p-3">Ticket</th>
                      <th className="p-3">Placa</th>
                      <th className="p-3">Conductor</th>
                      <th className="p-3">Producto</th>
                      <th className="p-3 text-right">Bruto (kg)</th>
                      <th className="p-3 text-right">Tara (kg)</th>
                      <th className="p-3 text-right">Neto (kg)</th>
                      <th className="p-3 text-center">Estado</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60">
                    {INITIAL_RECORDS.map((rec) => (
                      <tr key={rec.id} className="hover:bg-slate-900/50 transition-colors">
                        <td className="p-3 font-bold text-red-400">{rec.ticket}</td>
                        <td className="p-3 font-bold text-white">{rec.placa}</td>
                        <td className="p-3 text-slate-400">{rec.conductor}</td>
                        <td className="p-3 text-slate-300">{rec.producto}</td>
                        <td className="p-3 text-right font-bold">{rec.bruto.toLocaleString("es-VE")}</td>
                        <td className="p-3 text-right text-slate-400">{rec.tara > 0 ? rec.tara.toLocaleString("es-VE") : "---"}</td>
                        <td className="p-3 text-right font-extrabold text-amber-400">
                          {rec.neto > 0 ? rec.neto.toLocaleString("es-VE") : "---"}
                        </td>
                        <td className="p-3 text-center">
                          <span
                            className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold ${
                              rec.estado === "Completado"
                                ? "bg-emerald-950 text-emerald-400 border border-emerald-500/30"
                                : "bg-amber-950 text-amber-400 border border-amber-500/30"
                            }`}
                          >
                            {rec.estado}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
