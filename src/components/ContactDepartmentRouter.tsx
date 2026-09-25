"use client";

import { Phone, MessageSquare, AlertTriangle, Scale, Building, ArrowUpRight } from "lucide-react";
import { CONTACT } from "@/lib/data";

interface Department {
  id: string;
  title: string;
  badge: string;
  badgeColor: string;
  desc: string;
  icon: typeof Phone;
  actionText: string;
  whatsappMsg: string;
  isUrgent?: boolean;
}

const DEPARTMENTS: Department[] = [
  {
    id: "emergencias",
    title: "Emergencias en Planta",
    badge: "Báscula Parada 24/7",
    badgeColor: "bg-red-500 text-white animate-pulse",
    desc: "Atención prioritaria para fallas de celdas, terminales o paradas críticas en romanas camioneras e industrias.",
    icon: AlertTriangle,
    actionText: "Reportar Emergencia",
    whatsappMsg: "URGENTE: Tengo una báscula/balanza detenida en planta y requiero asistencia técnica de emergencia.",
    isUrgent: true,
  },
  {
    id: "ventas",
    title: "Ventas & Cotizaciones",
    badge: "Equipos Nuevos",
    badgeColor: "bg-red-50 text-[#991b1b] border border-red-200 font-bold",
    desc: "Asesoría para adquisición de básculas camioneras, balanzas comerciales, industriales, pesas patrón y alquiler.",
    icon: Scale,
    actionText: "Consultar Catálogo",
    whatsappMsg: "Hola Balanzas Dialka, deseo solicitar una cotización formal para equipos de pesaje.",
  },
  {
    id: "metrologia",
    title: "Calibración & SENCAMER",
    badge: "Laboratorio Oficial",
    badgeColor: "bg-emerald-50 text-emerald-700 border border-emerald-200",
    desc: "Aprobación de modelos, certificados de calibración trazables e inspecciones periódicas para auditorías de calidad.",
    icon: Building,
    actionText: "Solicitar Calibración",
    whatsappMsg: "Hola Balanzas Dialka, necesito información para calibración trazable y certificación metrológica SENCAMER.",
  },
  {
    id: "administracion",
    title: "Administración & Pagos",
    badge: "Facturación & RIF",
    badgeColor: "bg-slate-100 text-slate-700 border border-slate-200 font-medium",
    desc: "Gestión de comprobantes de retención, facturas fiscales, órdenes de compra y coordinación logística de entrega.",
    icon: MessageSquare,
    actionText: "Contactar a Finanzas",
    whatsappMsg: "Hola Administración Dialka, me comunico respecto a un tema administrativo / comprobantes / facturación.",
  },
];

export function ContactDepartmentRouter() {
  return (
    <section className="py-12 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-[#991b1b] border border-red-200/80 text-xs font-bold uppercase tracking-wider mb-3">
            <MessageSquare size={13} />
            <span>Enrutamiento Inteligente Directo</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            ¿A qué departamento desea dirigirse?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Comuníquese sin intermediarios directamente con el área técnica, comercial o metrológica encargada de su caso.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {DEPARTMENTS.map((dept) => {
            const Icon = dept.icon;
            const waUrl = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(dept.whatsappMsg)}`;

            return (
              <a
                key={dept.id}
                href={waUrl}
                target="_blank"
                rel="noreferrer"
                className={`group relative flex flex-col justify-between p-6 rounded-2xl transition-all duration-300 border cursor-pointer ${
                  dept.isUrgent
                    ? "bg-gradient-to-b from-red-950/90 to-red-900 text-white border-red-800 shadow-lg shadow-red-950/20 hover:-translate-y-1 hover:shadow-xl"
                    : "bg-slate-50/80 hover:bg-white border-slate-200/90 hover:border-red-300/80 hover:shadow-lg hover:-translate-y-1"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center transition-transform duration-200 group-hover:scale-110 ${
                        dept.isUrgent
                          ? "bg-white/10 text-white"
                          : "bg-red-50 text-[#991b1b]"
                      }`}
                    >
                      <Icon size={22} />
                    </div>
                    <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${dept.badgeColor}`}>
                      {dept.badge}
                    </span>
                  </div>

                  <h3
                    className={`text-lg font-bold mb-2 flex items-center justify-between ${
                      dept.isUrgent ? "text-white" : "text-slate-900 group-hover:text-[#991b1b] transition-colors"
                    }`}
                  >
                    <span>{dept.title}</span>
                    <ArrowUpRight
                      size={18}
                      className={`opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                        dept.isUrgent ? "text-white" : "text-[#991b1b]"
                      }`}
                    />
                  </h3>

                  <p
                    className={`text-xs leading-relaxed ${
                      dept.isUrgent ? "text-red-100" : "text-slate-600"
                    }`}
                  >
                    {dept.desc}
                  </p>
                </div>

                <div className="pt-5 mt-4 border-t border-slate-200/60 dark:border-white/10">
                  <div
                    className={`inline-flex items-center gap-1.5 text-xs font-bold ${
                      dept.isUrgent ? "text-white underline" : "text-[#991b1b] group-hover:underline"
                    }`}
                  >
                    <span>{dept.actionText}</span>
                    <span>→</span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
