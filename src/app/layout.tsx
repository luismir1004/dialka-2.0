import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ToastProvider } from "@/context/ToastContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Balanzas y Servicios Dialka",
    default: "Balanzas y Servicios Dialka | Pesaje Industrial en Venezuela",
  },
  description:
    "Más de 20 años siendo líderes en Venezuela en venta, alquiler, calibración y servicio técnico de equipos de pesaje industriales, comerciales y agropecuarios.",
  keywords: [
    "básculas Venezuela",
    "balanzas industriales",
    "servicio técnico pesaje",
    "SENCAMER",
    "calibración",
    "alquiler básculas",
    "software pesaje",
    "Caracas Maracay",
  ],
  authors: [{ name: "Balanzas y Servicios Dialka, S.A." }],
  openGraph: {
    type: "website",
    locale: "es_VE",
    siteName: "Balanzas y Servicios Dialka",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={inter.variable}>
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
        </ToastProvider>
      </body>
    </html>
  );
}
