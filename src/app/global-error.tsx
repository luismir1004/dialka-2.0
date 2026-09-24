"use client";

import { useEffect } from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Error global de la aplicación:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="max-w-lg w-full bg-white rounded-2xl shadow-xl p-8 text-center">
        <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <AlertTriangle size={40} className="text-red-600" />
        </div>
        
        <h1 className="text-2xl font-bold text-slate-900 mb-2">
          Error crítico de la aplicación
        </h1>
        
        <p className="text-slate-600 mb-6">
          Ha ocurrido un error inesperado en la aplicación. 
          Nuestro equipo técnico ha sido notificado.
        </p>

        <button
          onClick={() => reset()}
          className="inline-flex items-center justify-center gap-2 bg-[#991b1b] hover:bg-[#7f1d1d] text-white font-semibold px-6 py-3 rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-[#991b1b] focus:ring-offset-2"
        >
          <RefreshCw size={18} />
          <span>Intentar de nuevo</span>
        </button>
      </div>
    </div>
  );
}