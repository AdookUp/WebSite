import type { Metadata, Viewport } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

// Optimización de fuentes con next/font
const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  display: "swap" // Mejor rendimiento
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700"],
  display: "swap"
});

// Configuración del viewport (novedad en Next.js 15+)
export const viewport: Viewport = {
  themeColor: "#f97316",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

// Metadata mejorada para SEO
export const metadata: Metadata = {
  metadataBase: new URL("https://adookup.com"),
  title: {
    default: "AdookUp - Agencia de Marketing Digital | Estrategia y Tecnología",
    template: "%s | AdookUp - Agencia de Marketing Digital",
  },
  description: "AdookUp, agencia de marketing digital especializada en impulsar marcas con estrategia, tecnología y enfoque humano. Servicios de SEO, desarrollo web y branding.",
  keywords: ["agencia de marketing digital", "marketing digital", "SEO", "desarrollo web", "branding", "agencia digital"],

  // OpenGraph
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://adookup.com",
    siteName: "AdookUp",
    images: [{
      url: "/og-image.png",
      width: 1200,
      height: 630,
      alt: "AdookUp - Transformación Digital",
    }],
  },

  // Twitter Cards
  twitter: {
    card: "summary_large_image",
    creator: "@adookup",
    images: "/twitter-card.jpg",
  },

  // Favicons modernos (SVG + PNG)
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: "/apple-touch-icon.png",
  },

  // WebApp Manifest
  manifest: "/manifest.webmanifest",
};

// Componente de estructura raíz
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Preconexiones críticas */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Schema Markup mejorado para SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "AdookUp - Agencia de Marketing Digital",
            "description": "Agencia de marketing digital especializada en impulsar marcas con estrategia, tecnología y enfoque humano. Servicios de SEO, desarrollo web y branding.",
            "url": "https://adookup.com",
            "logo": "https://adookup.com/logo.png",
            "image": "https://adookup.com/og-image.png",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "ES"
            },
            "sameAs": [
              "https://facebook.com/adookup",
              "https://instagram.com/adookup"
            ],
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://adookup.com/search?q={search_term}",
              "query-input": "required name=search_term"
            },
            "offers": {
              "@type": "Offer",
              "serviceType": "Marketing Digital"
            },
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": 40.4168,
                "longitude": -3.7038
              },
              "geoRadius": "50000"
            }
          })}
        </script>
      </head>

      <body className={`${inter.variable} ${montserrat.variable} font-sans bg-white text-gray-900 antialiased`}>
        <Navbar />
        <main className="min-h-[calc(100vh-160px)]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
