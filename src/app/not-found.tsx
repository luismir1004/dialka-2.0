import Link from "next/link";
import { Home, Search, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="max-w-lg w-full bg-white rounded-2xl shadow-xl p-8 text-center">
        <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Search size={40} className="text-slate-400" />
        </div>
        
        <h1 className="text-3xl font-bold text-slate-900 mb-2">
          Página no encontrada
        </h1>
        
        <p className="text-slate-600 mb-6">
          Lo sentimos, no pudimos encontrar la página que buscas. 
          Verifica la URL o navega por nuestro sitio.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-[#991b1b] hover:bg-[#7f1d1d] text-white font-semibold px-6 py-3 rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-[#991b1b] focus:ring-offset-2"
          >
            <Home size={18} />
            <span>Volver al inicio</span>
          </Link>
          
          <Link
            href="/productos"
            className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 font-semibold px-6 py-3 rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
          >
            <ArrowRight size={18} />
            <span>Ver catálogo</span>
          </Link>
        </div>

        <div className="mt-6 pt-6 border-t border-slate-200">
          <p className="text-xs text-slate-500">
            ¿Necesitas ayuda? Contáctanos:
          </p>
          <a
            href={`https://wa.me/${SITE_CONFIG.contact.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[#991b1b] hover:text-[#7f1d1d] font-semibold text-sm mt-2 transition-colors"
          >
            <ArrowRight size={14} />
            <span>WhatsApp: {SITE_CONFIG.contact.whatsappDisplay}</span>
          </a>
        </div>
      </div>
    </div>
  );
}