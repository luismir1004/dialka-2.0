import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { ToastProvider } from "@/context/ToastContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const baseUrl = "https://dialka-2-0.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: "/",
  },
  title: {
    template: "%s | Balanzas y Servicios Dialka",
    default: "Balanzas y Servicios Dialka | Pesaje Industrial en Venezuela",
  },
  description:
    "25 años siendo líderes en Venezuela en venta, alquiler, calibración y servicio técnico de equipos de pesaje industriales, comerciales y agropecuarios.",
  keywords: [
    "básculas Venezuela",
    "balanzas industriales",
    "servicio técnico pesaje",
    "SENCAMER",
    "calibración básculas",
    "alquiler básculas",
    "software pesaje camiones",
    "pesaje agropecuario",
    "Caracas",
    "Maracay",
  ],
  authors: [{ name: "Balanzas y Servicios Dialka, S.A." }],
  openGraph: {
    type: "website",
    locale: "es_VE",
    url: baseUrl,
    siteName: "Balanzas y Servicios Dialka",
    title: "Balanzas y Servicios Dialka | Pesaje Industrial en Venezuela",
    description:
      "25 años siendo líderes en Venezuela en venta, alquiler, calibración y servicio técnico de equipos de pesaje industriales, comerciales y agropecuarios.",
    images: [
      {
        url: "/images/og-dialka.png",
        width: 1200,
        height: 630,
        alt: "Balanzas y Servicios Dialka - Pesaje Industrial y Certificación SENCAMER en Venezuela",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Balanzas y Servicios Dialka | Pesaje Industrial en Venezuela",
    description:
      "25 años siendo líderes en Venezuela en venta, alquiler, calibración y servicio técnico de equipos de pesaje industriales.",
    images: ["/images/og-dialka.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Balanzas y Servicios Dialka, S.A.",
  "alternateName": ["Dialka", "Balanzas Dialka", "Dialka Pesaje Industrial"],
  "url": baseUrl,
  "logo": `${baseUrl}/images/logo-dialka.svg`,
  "image": `${baseUrl}/images/og-dialka.png`,
  "description":
    "Líderes en Venezuela desde 2001 en venta, alquiler, calibración trazable y servicio técnico de básculas industriales, comerciales y agropecuarias con acreditación SENCAMER.",
  "foundingDate": "2001",
  "priceRange": "$$",
  "telephone": "+58-414-2770024",
  "address": [
    {
      "@type": "PostalAddress",
      "streetAddress": "Av. Ppal de Boleita Norte, Edif. Centro Industrial",
      "addressLocality": "Caracas",
      "addressRegion": "Distrito Capital / Miranda",
      "addressCountry": "VE",
    },
    {
      "@type": "PostalAddress",
      "streetAddress": "Zona Industrial San Vicente, Calle G",
      "addressLocality": "Maracay",
      "addressRegion": "Aragua",
      "addressCountry": "VE",
    },
  ],
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 10.4958,
    "longitude": -66.8329,
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "17:00",
    },
  ],
  "sameAs": ["https://www.instagram.com/balanzasyserviciosdialka"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex flex-col min-h-screen">
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined' && 'serviceWorker' in navigator && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')) {
                navigator.serviceWorker.getRegistrations().then(function(regs) {
                  for (var r of regs) { r.unregister(); }
                });
              }
            `,
          }}
        />
        <ToastProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingWhatsApp />
        </ToastProvider>
      </body>
    </html>
  );
}
