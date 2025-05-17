import type React from "react"
import type { Metadata } from "next"
import { Inter, Montserrat } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "AdookUp - Agencia de Marketing Digital | Estrategia, Tecnología y Resultados",
  description:
    "Somos una agencia de marketing digital especializada en impulsar marcas con estrategia, tecnología y enfoque humano. La nueva era del marketing: menos promesas vacías + crecimiento sostenible.",
  generator: "v0.dev",
  keywords: "agencia de marketing digital, marketing digital, estrategia digital, SEO, SEM, redes sociales, publicidad online, diseño web",
  authors: [{ name: "AdookUp" }],
  creator: "AdookUp",
  publisher: "AdookUp",
  formatDetection: {
    email: false,
    telephone: false,
  },
  metadataBase: new URL("https://adookup.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "AdookUp - Agencia de Marketing Digital | Estrategia, Tecnología y Resultados",
    description: "Somos una agencia de marketing digital especializada en impulsar marcas con estrategia, tecnología y enfoque humano.",
    url: "https://adookup.com",
    siteName: "AdookUp",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AdookUp - Agencia de Marketing Digital",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AdookUp - Agencia de Marketing Digital | Estrategia, Tecnología y Resultados",
    description: "Somos una agencia de marketing digital especializada en impulsar marcas con estrategia, tecnología y enfoque humano.",
    images: ["/og-image.png"],
    creator: "@adookup",
  },
  icons: {
    icon: "/favicon.ico",
    apple: [
      { url: "/favicon.ico" },
    ],
  },
  verification: {
    google: "google-site-verification-code", // Replace with actual verification code when available
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "AdookUp",
              "url": "https://adookup.com",
              "logo": "https://adookup.com/favicon.ico",
              "description": "Somos una agencia de marketing digital especializada en impulsar marcas con estrategia, tecnología y enfoque humano.",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "ES"
              },
              "sameAs": [
                "https://www.facebook.com/adookup",
                "https://www.instagram.com/adookup",
                "https://www.linkedin.com/company/adookup",
                "https://twitter.com/adookup"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+34-XXX-XXX-XXX",
                "contactType": "customer service",
                "availableLanguage": ["Spanish", "English"]
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://adookup.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Servicios de Marketing Digital",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "SEO",
                      "description": "Optimización para motores de búsqueda"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "SEM",
                      "description": "Marketing en motores de búsqueda"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Social Media Marketing",
                      "description": "Gestión de redes sociales"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Diseño Web",
                      "description": "Creación y optimización de sitios web"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body className={`${inter.variable} ${montserrat.variable} font-sans`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
