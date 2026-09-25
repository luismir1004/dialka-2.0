// Google Analytics 4 Configuration
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-XXXXXXXXXX";

// Event types para el sitio
export const ANALYTICS_EVENTS = {
  // Interacciones de contacto
  WHATSAPP_CLICK: "whatsapp_click",
  PHONE_CLICK: "phone_click",
  EMAIL_CLICK: "email_click",
  
  // Navegación
  PAGE_VIEW: "page_view",
  MENU_CLICK: "menu_click",
  SEARCH: "search",
  
  // Productos
  PRODUCT_VIEW: "product_view",
  PRODUCT_FILTER: "product_filter",
  PRODUCT_QUOTE: "product_quote",
  
  // Servicios
  SERVICE_VIEW: "service_view",
  SERVICE_QUOTE: "service_quote",
  
  // Formularios
  FORM_SUBMIT: "form_submit",
  FORM_ERROR: "form_error",
} as const;

// Declaración de tipos para Google Analytics 4
declare global {
  interface Window {
    gtag?: (
      command: "event" | "config" | "js",
      targetIdOrAction: string | Date,
      params?: Record<string, unknown>
    ) => void;
    dataLayer?: unknown[];
  }
}

// Helper function para enviar eventos a GA4
export const trackEvent = (
  eventName: string,
  parameters?: Record<string, string | number | boolean>
) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, parameters);
  }
};