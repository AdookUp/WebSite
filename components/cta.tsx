"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function CTA() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <section className="w-full py-20 bg-gradient-to-br from-orange-50 to-white">
      <div className="container px-4 md:px-6">
        <motion.div
          className="bg-white rounded-3xl shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <div className="space-y-4 max-w-xl">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  ¿Listo para transformar tu presencia digital?
                </h2>
                <p className="text-gray-500 text-lg">
                  Solicita ahora tu análisis estratégico gratuito y descubre oportunidades de crecimiento para tu
                  negocio.
                </p>
                <div className="pt-4">
                  <Link
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault()
                      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                    }}
                  >
                    <Button className="bg-orange-500 hover:bg-orange-600 px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                      Obtén tu estrategia gratis <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-500/90 to-orange-600/90 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <div className="space-y-4 max-w-xl text-white">
                <h3 className="text-2xl font-bold">Tu análisis estratégico incluye:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="bg-white/20 p-1 rounded-full mt-1">
                      <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Análisis completo de tu presencia digital actual</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-white/20 p-1 rounded-full mt-1">
                      <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Identificación de oportunidades de crecimiento</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-white/20 p-1 rounded-full mt-1">
                      <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Estrategia personalizada de acción inmediata</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-white/20 p-1 rounded-full mt-1">
                      <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Recomendaciones específicas para tu industria</span>
                  </li>
                </ul>
                <p className="text-white/80 text-sm mt-6">
                  Sin compromisos ni letra pequeña. Un análisis profesional para impulsar tu crecimiento digital.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
