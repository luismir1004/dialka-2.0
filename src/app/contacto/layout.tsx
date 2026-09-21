import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto y Sedes | Balanzas y Servicios Dialka",
  description:
    "Contáctenos para cotizaciones de equipos de pesaje, servicio técnico, calibración oficial SENCAMER y alquiler de básculas. Sedes en Caracas, Maracay y atención en toda Venezuela.",
  keywords: [
    "contacto Dialka",
    "soporte técnico básculas",
    "Caracas San Bernardino",
    "Maracay Coche Aragua",
    "cotización balanzas",
    "teléfono Dialka",
  ],
  openGraph: {
    title: "Contacto y Sedes | Balanzas y Servicios Dialka",
    description:
      "Atención técnica directa, cotizaciones inmediatas por WhatsApp y asesoría metrológica especializada en Venezuela.",
    type: "website",
  },
};

export default function ContactoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
