"use client"

import { CheckCircle, BarChart2, Users, Award, TrendingUp } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function WhyUs() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <section id="why-us" className="w-full py-20 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-sm text-orange-600">
              <span className="font-medium">Por qué elegirnos</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Enfoque estratégico centrado en resultados medibles
            </h2>
            <p className="text-gray-600 text-lg">
              En AdookUp no creemos en soluciones genéricas. Cada estrategia que desarrollamos está diseñada
              específicamente para las necesidades únicas de tu negocio, con un enfoque en resultados tangibles y
              crecimiento sostenible.
            </p>

            <ul className="space-y-5 pt-4">
              <motion.li
                className="flex items-start gap-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <CheckCircle className="h-6 w-6 text-orange-500 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-lg">Estrategia personalizada</h3>
                  <p className="text-gray-600">
                    Desarrollamos planes a medida basados en tus objetivos específicos y el análisis de tu mercado.
                  </p>
                </div>
              </motion.li>
              <motion.li
                className="flex items-start gap-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <CheckCircle className="h-6 w-6 text-orange-500 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-lg">Enfoque en resultados</h3>
                  <p className="text-gray-600">
                    Nos centramos en métricas que importan: conversiones, leads cualificados y crecimiento de ingresos.
                  </p>
                </div>
              </motion.li>
              <motion.li
                className="flex items-start gap-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <CheckCircle className="h-6 w-6 text-orange-500 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-lg">Transparencia total</h3>
                  <p className="text-gray-600">
                    Informes detallados y comunicación clara para que siempre sepas exactamente qué estamos haciendo y
                    por qué.
                  </p>
                </div>
              </motion.li>
            </ul>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="absolute -z-10 inset-0 bg-gradient-to-br from-orange-100/40 to-blue-100/40 rounded-3xl transform rotate-3"></div>
            <div className="absolute -z-10 inset-0 bg-gradient-to-tr from-orange-100/40 to-blue-100/40 rounded-3xl transform -rotate-3"></div>
            <div className="bg-white rounded-2xl shadow-xl p-8 relative z-10">
              <div className="grid grid-cols-2 gap-6">
                <StatsCard
                  icon={<TrendingUp className="h-6 w-6 text-orange-500" />}
                  value="94%"
                  label="Tasa de retención de clientes objetivo"
                  delay={0.1}
                />
                <StatsCard
                  icon={<BarChart2 className="h-6 w-6 text-orange-500" />}
                  value="+200%"
                  label="Aumento de conversiones objetivo"
                  delay={0.2}
                />
                <StatsCard
                  icon={<Users className="h-6 w-6 text-orange-500" />}
                  value="+150%"
                  label="Incremento de tráfico objetivo"
                  delay={0.3}
                />
                <StatsCard
                  icon={<Award className="h-6 w-6 text-orange-500" />}
                  value="-30%"
                  label="Reducción de costos de adquisición objetivo"
                  delay={0.4}
                />
              </div>
              <div className="mt-6 text-center text-sm text-gray-500">
                * Objetivos basados en nuestras estrategias y metodologías
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function StatsCard({ icon, value, label, delay }) {
  return (
    <motion.div
      className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-all duration-300"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay }}
      whileHover={{ y: -5 }}
    >
      <div className="flex items-center gap-3 mb-2">
        {icon}
        <div className="text-2xl font-bold text-gray-900">{value}</div>
      </div>
      <p className="text-gray-600">{label}</p>
    </motion.div>
  )
}
