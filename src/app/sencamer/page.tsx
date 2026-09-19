import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SENCAMER_MODELS, CONTACT } from "@/lib/data";
import { ShieldCheck, ChevronRight, Info, Phone, ArrowRight, Scale, CheckCircle2 } from "lucide-react";
import { SencamerCatalog } from "@/components/SencamerCatalog";
import { SencamerMockupCard } from "@/components/SencamerMockupCard";

export const metadata: Metadata = {
  title: "Equipos con Aprobación SENCAMER | Balanzas y Servicios Dialka",
  description:
    "Balanzas y básculas con Aprobación de Modelo SENCAMER para uso comercial legal en Venezuela. Modelos certificados desde 30 kg hasta 6.000 kg.",
};

export default function SencamerPage() {
  return (
    <>
      {/* ── HEADER DE PÁGINA CON FOTOGRAFÍA INDUSTRIAL ── */}
      <section className="relative bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200 py-8 sm:py-12 md:py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Columna Izquierda: Información */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 text-sm text-slate-500 mb-3 sm:mb-4">
                <Link href="/" className="hover:text-[#991b1b] transition-colors">
                  Inicio
                </Link>
                <ChevronRight size={14} />
                <span className="text-slate-900 font-semibold">SENCAMER</span>
              </div>

              <div className="flex items-center gap-3.5 mb-3 sm:mb-4">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center shrink-0">
                  <ShieldCheck size={22} className="text-[#991b1b]" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#991b1b]">
                    Metrología Legal en Venezuela
                  </span>
                  <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                    Equipos con Aprobación SENCAMER
                  </h1>
                </div>
              </div>

              <p className="text-slate-600 max-w-2xl text-sm sm:text-base lg:text-lg leading-relaxed mb-5 sm:mb-6">
                El Servicio Autónomo Nacional de Normalización, Calidad, Metrología y Reglamentos Técnicos (SENCAMER) certifica los instrumentos de pesaje autorizados para transacciones comerciales en el país. Dialka suministra modelos oficiales desde 30 kg hasta 6.000 kg listos para fiscalización legal.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={`https://wa.me/${CONTACT.whatsapp}?text=Hola,%20solicito%20cotización%20de%20un%20equipo%20con%20aprobación%20SENCAMER`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-[#991b1b] hover:bg-[#7f1d1d] text-white font-semibold px-5 py-3 rounded-xl shadow-xs hover:shadow-md transition-all text-sm min-h-[46px]"
                >
                  <Phone size={15} />
                  <span>Cotizar Balanza SENCAMER</span>
                </a>
                <Link
                  href="/productos"
                  className="inline-flex items-center gap-1.5 bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 font-semibold px-5 py-3 rounded-xl transition-all text-sm min-h-[46px]"
                >
                  <span>Ver Catálogo Completo</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Columna Derecha: Tarjeta Fotográfica de Homologación */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl bg-white p-2.5 sm:p-3 border border-slate-200/90 shadow-xl shadow-slate-200/50 group">
                <div className="relative aspect-16/10 sm:aspect-4/3 w-full rounded-xl overflow-hidden bg-slate-100">
                  <Image
                    src="/images/sencamer/balanza-certificada.jpg"
                    alt="Balanza Certificada por SENCAMER con Precinto Metrológico"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                  <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3">
                    <span className="inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-md text-emerald-800 text-[10px] sm:text-[11px] font-bold px-2.5 sm:px-3 py-1 rounded-full shadow-xs">
                      <ShieldCheck size={13} className="text-emerald-600" />
                      <span>Placa & Precinto Legal</span>
                    </span>
                  </div>
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-3 sm:left-3 sm:right-3 text-white">
                    <p className="text-[10px] sm:text-[11px] font-bold text-red-200 uppercase tracking-wider">
                      Uso Comercial Obligatorio
                    </p>
                    <h3 className="text-xs sm:text-base font-bold text-white">
                      Balanzas Homologadas de 30 kg a 6.000 kg
                    </h3>
                  </div>
                </div>

                <div className="mt-2.5 sm:mt-3 bg-slate-50 border border-slate-200/80 rounded-xl p-2.5 sm:p-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600" />
                    <span className="text-xs font-bold text-slate-800">
                      Tolerancia Legal Verificada
                    </span>
                  </div>
                  <span className="text-xs font-bold text-[#991b1b]">
                    COVENIN / SUNDDE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MARCO LEGAL Y MOCKUP DE BALANZA CERTIFICADA ── */}
      <div className="bg-white pt-10 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            {/* Lado Izquierdo: Marco Legal */}
            <div className="lg:col-span-7 bg-red-50/80 border border-red-200/90 rounded-2xl p-7 sm:p-8 flex flex-col justify-between shadow-2xs">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center shrink-0">
                    <Info size={20} className="text-[#991b1b]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#991b1b]">
                      Normativa Nacional Vigente
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 leading-tight">
                      Marco Metrológico Obligatorio SENCAMER
                    </h3>
                  </div>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed mt-3">
                  La <strong className="text-slate-900">Aprobación de Modelo SENCAMER</strong> es el requisito legal indispensable en Venezuela que certifica que un instrumento de medición cumple con las tolerancias técnicas para su uso en transacciones comerciales que involucren precio por peso. Los equipos suministrados por Dialka cuentan con placa de identificación, precinto de inviolabilidad y homologación oficial.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-red-200/80 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-semibold text-slate-700">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck size={14} className="text-[#991b1b]" />
                  Precinto Oficial
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck size={14} className="text-[#991b1b]" />
                  Placa Serial
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck size={14} className="text-[#991b1b]" />
                  Tolerancia Legal
                </span>
              </div>
            </div>

            {/* Lado Derecho: Mockup Fotográfico Interactivo con Lightbox */}
            <SencamerMockupCard whatsappNumber={CONTACT.whatsapp} />
          </div>
        </div>
      </div>

      {/* ── TABLA INTERACTIVA CON FILTROS Y BÚSQUEDA EN TIEMPO REAL ── */}
      <SencamerCatalog
        models={SENCAMER_MODELS}
        whatsappNumber={CONTACT.whatsapp}
      />

      {/* ── CTA ASESORÍA LEGAL / CERTIFICACIÓN ── */}
      <section className="bg-slate-50 border-t border-slate-200 py-14">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#991b1b] block mb-2">
            Gestión y Trámites
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3 tracking-tight">
            ¿Necesita Gestionar la Aprobación de Modelo de su Equipo?
          </h2>
          <p className="text-slate-600 mb-8 text-sm sm:text-base leading-relaxed">
            Dialka asesora técnica y documentalmente a su empresa para tramitar o renovar certificaciones de instrumentos de pesaje ante SENCAMER.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 bg-[#991b1b] hover:bg-[#7f1d1d] text-white font-semibold px-6 py-3.5 rounded-xl shadow-sm hover:shadow-md transition-all text-sm sm:text-base"
            >
              <Phone size={16} />
              <span>Consultar por Certificación</span>
            </Link>
            <a
              href={`https://wa.me/${CONTACT.whatsapp}?text=Hola,%20solicito%20asesoría%20para%20certificación%20SENCAMER`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-semibold px-6 py-3.5 rounded-xl shadow-2xs transition-all text-sm sm:text-base"
            >
              <span>Hablar con un Especialista</span>
              <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
