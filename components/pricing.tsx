"use client"

import { Check, ArrowRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function Pricing() {
  const [mounted, setMounted] = useState(false)
  const [currency, setCurrency] = useState("USD")
  const [billingPeriod, setBillingPeriod] = useState("monthly")

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const getPrice = (basePrice, currency, billingPeriod) => {
    // Conversion rates
    const rates = {
      USD: 1,
      EUR: 0.92,
    }

    // Apply discount based on billing period
    let discount = 1
    switch (billingPeriod) {
      case "quarterly": // 3 months
        discount = 0.9 // 10% discount
        break
      case "biannual": // 6 months
        discount = 0.85 // 15% discount
        break
      case "annual": // 12 months
        discount = 0.8 // 20% discount
        break
      default: // monthly
        discount = 1 // no discount
    }

    // Calculate price in selected currency
    const convertedPrice = Math.round(basePrice * discount * (rates[currency] || 1))

    return convertedPrice.toLocaleString("en-US")
  }

  const getCurrencySymbol = (currency) => {
    const symbols = {
      USD: "$",
      EUR: "€",
    }
    return symbols[currency] || "$"
  }

  const getBillingLabel = (period) => {
    const labels = {
      monthly: "mes",
      quarterly: "trimestre",
      biannual: "semestre",
      annual: "año",
    }
    return labels[period] || "mes"
  }

  const getDiscountLabel = (period) => {
    const discounts = {
      quarterly: "10%",
      biannual: "15%",
      annual: "20%",
    }
    return discounts[period] ? `${discounts[period]} dto.` : null
  }

  const PricingCard = ({
    title,
    subtitle,
    price,
    description,
    features,
    notIncluded,
    billingPeriod,
    billingLabel,
    delay,
  }) => {
    return (
      <motion.div
        className="bg-white rounded-lg shadow-md overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: delay * 0.2 }}
      >
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
          <p className="text-sm text-gray-500 uppercase tracking-wide mb-3">{subtitle}</p>
          <div className="flex items-center mb-4">
            <span className="text-4xl font-bold text-orange-500">{price}</span>
            <span className="text-gray-600 ml-2">/{billingLabel}</span>
            {billingPeriod !== "monthly" && (
              <span className="ml-2 text-xs text-green-500">Ahorras {getDiscountLabel(billingPeriod)}</span>
            )}
          </div>
          <p className="text-gray-600 mb-5">{description}</p>
          <ul className="mb-5">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-gray-700 py-2">
                <Check className="w-4 h-4 mr-2 text-green-500" />
                {feature}
              </li>
            ))}
          </ul>
          {notIncluded && notIncluded.length > 0 && (
            <>
              <p className="text-gray-600 font-semibold mb-2">No Incluye:</p>
              <ul className="mb-5">
                {notIncluded.map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700 py-2">
                    <X className="w-4 h-4 mr-2 text-red-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </>
          )}
          <Button asChild className="w-full">
            <Link href="/contacto">
              Comenzar <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </motion.div>
    )
  }

  return (
    <section id="pricing" className="w-full py-24 bg-gray-50 overflow-hidden">
      <div className="container px-4 md:px-6">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-sm text-orange-600 mb-4">
            <span className="font-medium">Planes y Precios</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-4">
            Soluciones premium para tu crecimiento digital
          </h2>
          <p className="text-gray-600 text-lg">
            Inversión estratégica para resultados excepcionales. Nuestros planes están diseñados para maximizar el ROI
            de tu marketing digital.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-center gap-4 mb-10">
          <div className="bg-white p-1 rounded-lg shadow-sm flex flex-wrap justify-center">
            <button
              onClick={() => setBillingPeriod("monthly")}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                billingPeriod === "monthly"
                  ? "bg-orange-500 text-white"
                  : "bg-transparent text-gray-600 hover:bg-gray-100"
              }`}
            >
              1 mes
            </button>
            <button
              onClick={() => setBillingPeriod("quarterly")}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                billingPeriod === "quarterly"
                  ? "bg-orange-500 text-white"
                  : "bg-transparent text-gray-600 hover:bg-gray-100"
              }`}
            >
              3 meses <span className="text-xs opacity-75">(10% dto.)</span>
            </button>
            <button
              onClick={() => setBillingPeriod("biannual")}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                billingPeriod === "biannual"
                  ? "bg-orange-500 text-white"
                  : "bg-transparent text-gray-600 hover:bg-gray-100"
              }`}
            >
              6 meses <span className="text-xs opacity-75">(15% dto.)</span>
            </button>
            <button
              onClick={() => setBillingPeriod("annual")}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                billingPeriod === "annual"
                  ? "bg-orange-500 text-white"
                  : "bg-transparent text-gray-600 hover:bg-gray-100"
              }`}
            >
              Anual <span className="text-xs opacity-75">(20% dto.)</span>
            </button>
          </div>

          <div className="bg-white p-1 rounded-lg shadow-sm flex justify-center">
            <button
              onClick={() => setCurrency("USD")}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                currency === "USD" ? "bg-orange-500 text-white" : "bg-transparent text-gray-600 hover:bg-gray-100"
              }`}
            >
              USD
            </button>
            <button
              onClick={() => setCurrency("EUR")}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                currency === "EUR" ? "bg-orange-500 text-white" : "bg-transparent text-gray-600 hover:bg-gray-100"
              }`}
            >
              EUR
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <PricingCard
            title="UpStart"
            subtitle="Plan Esencial"
            price={`${getCurrencySymbol(currency)}${getPrice(799, currency, billingPeriod)}`}
            description="Ideal para pequeñas empresas que buscan establecer una presencia digital sólida"
            features={[
              "Estrategia digital personalizada",
              "Gestión de 2 redes sociales",
              "12 publicaciones mensuales",
              "Diseño gráfico profesional",
              "Copywriting persuasivo",
              "Optimización SEO básica",
              "1 campaña de email marketing",
              "Informe mensual de resultados",
              "Soporte por email y chat",
              "1 reunión estratégica mensual",
            ]}
            notIncluded={[
              "Campañas de publicidad pagada",
              "Desarrollo web",
              "Prospección y generación de leads",
              "Automatización de marketing",
            ]}
            billingPeriod={billingPeriod}
            billingLabel={getBillingLabel(billingPeriod)}
            delay={0}
          />

          <PricingCard
            title="UpScale"
            subtitle="Plan Profesional"
            price={`${getCurrencySymbol(currency)}${getPrice(1599, currency, billingPeriod)}`}
            description="Para empresas en crecimiento que buscan amplificar su impacto digital"
            features={[
              "Todo lo incluido en UpStart",
              "Gestión de 3 redes sociales",
              "20 publicaciones mensuales premium",
              "Estrategia de contenido avanzada",
              "Desarrollo web completo",
              "Prospección y generación de leads",
              "Sistema de cualificación de leads",
              "Campañas de publicidad en 2 plataformas",
              "Presupuesto de ads hasta $500/mes",
              "Email marketing (2 campañas mensuales)",
              "Automatización básica (CRM, emails)",
              "Análisis de competencia trimestral",
              "Optimización SEO avanzada",
              "Soporte prioritario",
              "2 reuniones estratégicas mensuales",
            ]}
            notIncluded={[
              "Estrategia de marketing integral",
              "Campañas en múltiples canales",
              "Automatización avanzada",
            ]}
            billingPeriod={billingPeriod}
            billingLabel={getBillingLabel(billingPeriod)}
            delay={0.2}
          />

          <PricingCard
            title="UpMax"
            subtitle="Plan Empresarial"
            price={`${getCurrencySymbol(currency)}${getPrice(2999, currency, billingPeriod)}`}
            description="Solución integral para empresas que buscan dominar su nicho de mercado"
            features={[
              "Todo lo incluido en UpScale",
              "Gestión de 5 redes sociales",
              "Publicaciones ilimitadas",
              "Estrategia de marketing integral",
              "Campañas en múltiples canales",
              "Automatización avanzada",
              "Análisis de mercado exhaustivo",
              "Informes personalizados",
              "Soporte 24/7",
              "Reuniones estratégicas semanales",
              "Presupuesto de ads personalizado",
            ]}
            notIncluded={[]}
            billingPeriod={billingPeriod}
            billingLabel={getBillingLabel(billingPeriod)}
            delay={0.4}
          />
        </div>
      </div>
    </section>
  )
}
