import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { ToastProvider } from "@/context/ToastContext";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { SITE_CONFIG } from "@/lib/config";

// PWA manifest link
const manifestUrl = "/manifest.json";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const baseUrl = SITE_CONFIG.url;

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
  "name": SITE_CONFIG.name,
  "alternateName": [SITE_CONFIG.shortName, "Balanzas Dialka", "Dialka Pesaje Industrial"],
  "url": baseUrl,
  "logo": `${baseUrl}/images/logo-dialka.svg`,
  "image": `${baseUrl}/images/og-dialka.png`,
  "description":
    "Líderes en Venezuela desde 2001 en venta, alquiler, calibración trazable y servicio técnico de básculas industriales, comerciales y agropecuarias con acreditación SENCAMER.",
  "foundingDate": "2001",
  "priceRange": "$$",
  "telephone": `+${SITE_CONFIG.contact.whatsappNumber}`,
  "address": [
    {
      "@type": "PostalAddress",
      "streetAddress": "Av. Los Próceres, San Bernardino, Qta. Los Juanes No. 46",
      "addressLocality": "Caracas",
      "addressRegion": "Distrito Capital",
      "postalCode": "1011",
      "addressCountry": "VE",
    },
    {
      "@type": "PostalAddress",
      "streetAddress": "Av. Intercomunal Turmero, C.C. Coche Aragua, P.B. Local 52, La Morita",
      "addressLocality": "Maracay",
      "addressRegion": "Aragua",
      "postalCode": "2101",
      "addressCountry": "VE",
    },
  ],
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 10.5173,
    "longitude": -66.8967,
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
    <html lang="es" className={inter.variable} data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="manifest" href={manifestUrl} />
        <meta name="theme-color" content="#991b1b" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Dialka" />
        
        {/* Google Analytics 4 */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-XXXXXXXXXX"}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-XXXXXXXXXX"}', {
                page_title: window.document.title,
                page_location: window.location.href,
              });
            `,
          }}
        />
      </head>
      <body className="flex flex-col min-h-screen">
        {/* Skip Link para accesibilidad WCAG AA */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#991b1b] focus:text-white focus:rounded-lg focus:shadow-lg transition-all"
        >
          Saltar al contenido principal
        </a>
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
        <ErrorBoundary>
          <ToastProvider>
            <Header />
            <main id="main-content" className="flex-1">{children}</main>
            <Footer />
            <FloatingWhatsApp />
          </ToastProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
