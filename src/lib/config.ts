// ============================================================
// DIALKA 2.0 — Configuración Global y Fuente de Verdad Unificada
// ============================================================

export const SITE_CONFIG = {
  name: "Balanzas y Servicios Dialka, S.A.",
  shortName: "Dialka",
  slogan: "Soluciones de Pesaje para Venezuela y el Mundo",
  url: "https://dialka-2-0.vercel.app",
  social: {
    instagram: "https://www.instagram.com/balanzasyserviciosdialka",
    instagramHandle: "@balanzasyserviciosdialka",
  },
  contact: {
    whatsappNumber: "584142770024", // WhatsApp Comercial Oficial (Ventas, Presupuestos y Fichas Técnicas)
    whatsappSupport: "584142320610", // WhatsApp Soporte Técnico y Emergencias en Planta
    phones: {
      caracas: "(+58 414) 277.00.24",
      maracay: "0243-234.33.60 / 234.33.72",
      ventas: ["+58 (414) 171.81.50", "+58 (414) 247.68.13"],
      soporte: ["+58 (412) 232.06.09", "+58 (412) 232.06.10"],
    },
    email: "dialka@dialka.com.ve",
    emailMaracay: "servicios.maracay@dialka.com.ve",
    schedule: "Lunes a Viernes, 08:00 – 17:00",
  },
} as const;

export type SiteConfig = typeof SITE_CONFIG;
