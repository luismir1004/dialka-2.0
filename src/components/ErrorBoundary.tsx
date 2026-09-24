"use client";

import React, { Component, ErrorInfo, ReactNode } from "react";
import { AlertTriangle, RefreshCw, Home, ArrowRight } from "lucide-react";
import Link from "next/link";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Error capturado por Error Boundary:", error, errorInfo);
    // Aquí se podría enviar el error a un servicio de monitoring como Sentry
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
          <div className="max-w-lg w-full bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle size={40} className="text-red-600" />
            </div>
            
            <h1 className="text-2xl font-bold text-slate-900 mb-2">
              Algo salió mal
            </h1>
            
            <p className="text-slate-600 mb-6">
              Ha ocurrido un error inesperado. Nuestro equipo técnico ha sido notificado y estamos trabajando para solucionarlo.
            </p>

            {this.state.error && (
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-6 text-left">
                <p className="text-xs font-mono text-slate-500 break-all">
                  {this.state.error.message}
                </p>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={this.handleReset}
                className="inline-flex items-center justify-center gap-2 bg-[#991b1b] hover:bg-[#7f1d1d] text-white font-semibold px-6 py-3 rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-[#991b1b] focus:ring-offset-2"
              >
                <RefreshCw size={18} />
                <span>Intentar de nuevo</span>
              </button>
              
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 font-semibold px-6 py-3 rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
              >
                <Home size={18} />
                <span>Volver al inicio</span>
              </Link>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-200">
              <p className="text-xs text-slate-500">
                Si el problema persiste, contáctenos por WhatsApp:
              </p>
              <a
                href="https://wa.me/584142770024"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#991b1b] hover:text-[#7f1d1d] font-semibold text-sm mt-2 transition-colors"
              >
                <ArrowRight size={14} />
                <span>Soporte técnico</span>
              </a>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}