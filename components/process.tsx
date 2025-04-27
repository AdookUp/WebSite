"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { Search, Code, BarChart2, Zap } from "lucide-react"

export default function Process() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <section id="process" className="w-full py-24 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-40 h-40 bg-orange-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-sm text-orange-600 mb-4">
            <span className="font-medium">Nuestro Proceso</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-4">
            Metodología probada para resultados excepcionales
          </h2>
          <p className="text-gray-600 text-lg">
            Nuestro enfoque sistemático garantiza que cada proyecto se ejecute con precisión, eficiencia y un enfoque
            constante en tus objetivos comerciales.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ProcessStep
            number="1"
            title="Descubrimiento"
            description="Analizamos tu negocio, competencia y mercado para entender completamente tus necesidades y objetivos."
            icon={<Search className="h-6 w-6 text-white" />}
            color="bg-orange-500"
            delay={0}
            showConnector={true}
          />

          <ProcessStep
            number="2"
            title="Estrategia"
            description="Desarrollamos un plan personalizado con tácticas específicas para alcanzar tus metas de crecimiento."
            icon={<BarChart2 className="h-6 w-6 text-white" />}
            color="bg-blue-500"
            delay={0.1}
            showConnector={true}
          />

          <ProcessStep
            number="3"
            title="Implementación"
            description="Ejecutamos la estrategia con precisión, adaptándonos ágilmente a los resultados y feedback en tiempo real."
            icon={<Code className="h-6 w-6 text-white" />}
            color="bg-green-500"
            delay={0.2}
            showConnector={true}
          />

          <ProcessStep
            number="4"
            title="Optimización"
            description="Analizamos resultados, refinamos estrategias y escalamos lo que funciona para maximizar el ROI."
            icon={<Zap className="h-6 w-6 text-white" />}
            color="bg-purple-500"
            delay={0.3}
            showConnector={false}
          />
        </div>
      </div>
    </section>
  )
}

function ProcessStep({ number, title, description, icon, color, delay, showConnector }) {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
    >
      <div className="bg-white rounded-2xl shadow-lg p-8 relative z-10 h-full border border-gray-100 hover:border-orange-200 transition-colors duration-300">
        <div
          className={`${color} text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-6`}
        >
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <div className="absolute top-8 right-8 text-4xl font-bold text-gray-100">{number}</div>
      </div>
      {showConnector && (
        <div className="hidden lg:block absolute top-1/2 left-full w-12 h-2 bg-gradient-to-r from-orange-200 to-transparent -translate-y-1/2 z-0"></div>
      )}
    </motion.div>
  )
}
