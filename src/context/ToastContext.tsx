"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from "react";
import { CheckCircle2, AlertCircle, Info, X } from "lucide-react";

export interface ToastMessage {
  id: string;
  title: string;
  description?: string;
  type?: "success" | "info" | "warning";
  duration?: number;
}

interface ToastContextType {
  toast: (msg: Omit<ToastMessage, "id">) => void;
  copyToClipboard: (text: string, label?: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const toast = useCallback(
    ({
      title,
      description,
      type = "success",
      duration = 3500,
    }: Omit<ToastMessage, "id">) => {
      const id = Math.random().toString(36).substring(2, 9);
      const newToast: ToastMessage = { id, title, description, type, duration };

      setToasts((prev) => [...prev.slice(-3), newToast]); // keep max 4 toasts

      setTimeout(() => {
        removeToast(id);
      }, duration);
    },
    [removeToast]
  );

  const copyToClipboard = useCallback(
    (text: string, label: string = "Dato") => {
      if (typeof navigator !== "undefined" && navigator.clipboard) {
        navigator.clipboard
          .writeText(text)
          .then(() => {
            toast({
              title: "¡Copiado al portapapeles!",
              description: `${label}: ${text}`,
              type: "success",
            });
          })
          .catch(() => {
            toast({
              title: "Información",
              description: text,
              type: "info",
            });
          });
      }
    },
    [toast]
  );

  return (
    <ToastContext.Provider value={{ toast, copyToClipboard }}>
      {children}

      {/* ── CONTENEDOR FLOTANTE TOAST (ESQUINA SUPERIOR DERECHA PARA EVITAR COLISIÓN CON WHATSAPP) ── */}
      <div
        aria-live="assertive"
        className="fixed top-20 right-5 z-50 flex flex-col gap-2.5 max-w-sm w-full pointer-events-none px-4 sm:px-0"
      >
        {toasts.map((t) => (
          <div
            key={t.id}
            className="pointer-events-auto bg-white border border-slate-200/90 rounded-2xl p-4 shadow-xl shadow-slate-900/10 flex items-start gap-3 transition-all duration-300 animate-fadeIn"
          >
            <div className="shrink-0 mt-0.5">
              {t.type === "success" && (
                <div className="w-7 h-7 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center">
                  <CheckCircle2 size={16} className="text-emerald-600" />
                </div>
              )}
              {t.type === "info" && (
                <div className="w-7 h-7 rounded-full bg-red-50 border border-red-200 flex items-center justify-center">
                  <Info size={16} className="text-[#991b1b]" />
                </div>
              )}
              {t.type === "warning" && (
                <div className="w-7 h-7 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center">
                  <AlertCircle size={16} className="text-amber-600" />
                </div>
              )}
            </div>

            <div className="flex-1 min-w-0">
              <h4 className="text-xs font-bold text-slate-900 leading-tight">
                {t.title}
              </h4>
              {t.description && (
                <p className="text-[11px] text-slate-500 mt-0.5 leading-snug truncate">
                  {t.description}
                </p>
              )}
            </div>

            <button
              onClick={() => removeToast(t.id)}
              className="shrink-0 text-slate-400 hover:text-slate-700 p-1 rounded-lg transition-colors cursor-pointer"
              aria-label="Cerrar notificación"
            >
              <X size={14} />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}
