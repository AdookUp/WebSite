"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowRight,
  Target,
  LineChart,
  Users,
  Lightbulb,
  Compass,
  Layers,
  Zap,
  BarChart2,
  TrendingUp,
} from "lucide-react"
import Link from "next/link"

export default function Methodology() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <section id="methodology" className="w-full py-24 bg-white">
      <div className="container px-4 md:px-6">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-sm text-orange-600 mb-4">
            <span className="font-medium">Nuestra Metodología</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-4">Enfoque estratégico basado en datos</h2>
          <p className="text-gray-500 text-lg">
            Nuestra metodología combina estrategia, creatividad y análisis para maximizar el retorno de inversión de tu
            marketing digital
          </p>
        </motion.div>

        <Tabs defaultValue="strategy" className="w-full">
          <TabsList className="flex justify-center mb-12">
            <TabsTrigger value="strategy" className="px-6">
              Estrategia
            </TabsTrigger>
            <TabsTrigger value="execution" className="px-6">
              Ejecución
            </TabsTrigger>
            <TabsTrigger value="optimization" className="px-6">
              Optimización
            </TabsTrigger>
            <TabsTrigger value="growth" className="px-6">
              Crecimiento
            </TabsTrigger>
          </TabsList>

          <TabsContent value="strategy" className="mt-0">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-bold">Estrategia basada en objetivos claros</h3>
                <p className="text-gray-500">
                  Comenzamos cada proyecto con una fase de descubrimiento profundo, analizando tu negocio, competencia y
                  mercado para desarrollar una estrategia personalizada que se alinee con tus objetivos comerciales.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="bg-orange-100 p-2 rounded-full mt-1">
                      <Target className="h-5 w-5 text-orange-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Definición de objetivos SMART</h4>
                      <p className="text-gray-500">
                        Establecemos metas específicas, medibles, alcanzables, relevantes y con plazos definidos.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-orange-100 p-2 rounded-full mt-1">
                      <Compass className="h-5 w-5 text-orange-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Análisis competitivo</h4>
                      <p className="text-gray-500">
                        Estudiamos a tu competencia para identificar oportunidades y diferenciadores clave.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-orange-100 p-2 rounded-full mt-1">
                      <Users className="h-5 w-5 text-orange-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Definición de audiencia</h4>
                      <p className="text-gray-500">
                        Creamos perfiles detallados de tu audiencia ideal para orientar todas las acciones.
                      </p>
                    </div>
                  </li>
                </ul>
                <Link
                  href="#contact"
                  className="inline-flex items-center text-orange-500 hover:text-orange-600 transition-colors font-medium"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  Descubre nuestra estrategia <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
              <motion.div
                className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl shadow-lg"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="bg-orange-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                      <Lightbulb className="h-6 w-6 text-orange-500" />
                    </div>
                    <h4 className="font-bold mb-2">Ideación estratégica</h4>
                    <p className="text-gray-500 text-sm">Sesiones de brainstorming para generar ideas innovadoras</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                      <Layers className="h-6 w-6 text-blue-500" />
                    </div>
                    <h4 className="font-bold mb-2">Planificación detallada</h4>
                    <p className="text-gray-500 text-sm">Desarrollo de planes de acción con hitos claros</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="bg-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                      <LineChart className="h-6 w-6 text-green-500" />
                    </div>
                    <h4 className="font-bold mb-2">Previsión de resultados</h4>
                    <p className="text-gray-500 text-sm">Estimación de KPIs y retorno de inversión esperado</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="bg-purple-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                      <Zap className="h-6 w-6 text-purple-500" />
                    </div>
                    <h4 className="font-bold mb-2">Validación de concepto</h4>
                    <p className="text-gray-500 text-sm">Testeo de ideas antes de la implementación completa</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </TabsContent>

          <TabsContent value="execution" className="mt-0">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg order-2 md:order-1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative h-64 bg-white rounded-xl shadow-sm overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center">
                    <div className="text-center p-6">
                      <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl">
                        <h4 className="text-xl font-bold mb-2">Ejecución ágil y adaptativa</h4>
                        <p className="text-gray-600">
                          Implementamos estrategias con ciclos cortos de desarrollo que permiten adaptarnos rápidamente
                          a los resultados y feedback.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 mt-6">
                  <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                    <div className="text-sm font-medium text-blue-500">Sprint 1</div>
                    <p className="text-xs text-gray-500">Configuración</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                    <div className="text-sm font-medium text-blue-500">Sprint 2</div>
                    <p className="text-xs text-gray-500">Implementación</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                    <div className="text-sm font-medium text-blue-500">Sprint 3</div>
                    <p className="text-xs text-gray-500">Optimización</p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="space-y-6 order-1 md:order-2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-2xl font-bold">Implementación metódica y eficiente</h3>
                <p className="text-gray-500">
                  Ejecutamos la estrategia con precisión, utilizando metodologías ágiles que nos permiten ser flexibles
                  y adaptarnos a los resultados en tiempo real.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="bg-blue-100 p-2 rounded-full mt-1">
                      <Zap className="h-5 w-5 text-blue-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Sprints de implementación</h4>
                      <p className="text-gray-500">
                        Trabajamos en ciclos cortos con objetivos específicos para cada etapa.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-blue-100 p-2 rounded-full mt-1">
                      <BarChart2 className="h-5 w-5 text-blue-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Monitoreo constante</h4>
                      <p className="text-gray-500">
                        Seguimiento en tiempo real de métricas clave para ajustar la estrategia.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-blue-100 p-2 rounded-full mt-1">
                      <TrendingUp className="h-5 w-5 text-blue-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Escalabilidad planificada</h4>
                      <p className="text-gray-500">
                        Diseñamos cada acción pensando en su potencial de crecimiento futuro.
                      </p>
                    </div>
                  </li>
                </ul>
                <Link
                  href="#contact"
                  className="inline-flex items-center text-blue-500 hover:text-blue-600 transition-colors font-medium"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  Conoce nuestro proceso <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
            </div>
          </TabsContent>

          <TabsContent value="optimization" className="mt-0">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-bold">Optimización continua basada en datos</h3>
                <p className="text-gray-500">
                  Analizamos constantemente el rendimiento de cada acción para identificar oportunidades de mejora y
                  maximizar el retorno de inversión.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="bg-green-100 p-2 rounded-full mt-1">
                      <LineChart className="h-5 w-5 text-green-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Análisis de datos avanzado</h4>
                      <p className="text-gray-500">
                        Utilizamos herramientas de análisis para extraer insights accionables.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-green-100 p-2 rounded-full mt-1">
                      <Target className="h-5 w-5 text-green-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Pruebas A/B</h4>
                      <p className="text-gray-500">
                        Testeo sistemático de variantes para identificar las más efectivas.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-green-100 p-2 rounded-full mt-1">
                      <Zap className="h-5 w-5 text-green-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Optimización de conversión</h4>
                      <p className="text-gray-500">
                        Mejora continua de los puntos de contacto para aumentar las conversiones.
                      </p>
                    </div>
                  </li>
                </ul>
                <Link
                  href="#contact"
                  className="inline-flex items-center text-green-500 hover:text-green-600 transition-colors font-medium"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  Optimiza tu estrategia <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
              <motion.div
                className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-lg"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h4 className="font-bold mb-4 flex items-center">
                      <LineChart className="h-5 w-5 text-green-500 mr-2" /> Ciclo de optimización
                    </h4>
                    <div className="flex justify-between items-center">
                      <div className="text-center">
                        <div className="bg-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-2 mx-auto">
                          <span className="font-bold text-green-500">1</span>
                        </div>
                        <p className="text-sm">Medir</p>
                      </div>
                      <ArrowRight className="h-4 w-4 text-gray-300" />
                      <div className="text-center">
                        <div className="bg-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-2 mx-auto">
                          <span className="font-bold text-green-500">2</span>
                        </div>
                        <p className="text-sm">Analizar</p>
                      </div>
                      <ArrowRight className="h-4 w-4 text-gray-300" />
                      <div className="text-center">
                        <div className="bg-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-2 mx-auto">
                          <span className="font-bold text-green-500">3</span>
                        </div>
                        <p className="text-sm">Optimizar</p>
                      </div>
                      <ArrowRight className="h-4 w-4 text-gray-300" />
                      <div className="text-center">
                        <div className="bg-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-2 mx-auto">
                          <span className="font-bold text-green-500">4</span>
                        </div>
                        <p className="text-sm">Escalar</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h4 className="font-bold mb-4">Informes de rendimiento</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Tasa de conversión</span>
                        <div className="w-2/3 bg-gray-100 rounded-full h-2.5">
                          <div className="bg-green-500 h-2.5 rounded-full" style={{ width: "70%" }}></div>
                        </div>
                        <span className="text-sm font-medium">+70%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Engagement</span>
                        <div className="w-2/3 bg-gray-100 rounded-full h-2.5">
                          <div className="bg-green-500 h-2.5 rounded-full" style={{ width: "85%" }}></div>
                        </div>
                        <span className="text-sm font-medium">+85%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">ROI</span>
                        <div className="w-2/3 bg-gray-100 rounded-full h-2.5">
                          <div className="bg-green-500 h-2.5 rounded-full" style={{ width: "65%" }}></div>
                        </div>
                        <span className="text-sm font-medium">+65%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </TabsContent>

          <TabsContent value="growth" className="mt-0">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl shadow-lg order-2 md:order-1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h4 className="font-bold mb-4">Modelo de crecimiento sostenible</h4>
                    <div className="relative h-48">
                      <div className="absolute inset-0 flex items-end justify-around">
                        <div className="w-1/4 bg-purple-100 rounded-t-lg h-1/4 relative">
                          <div className="absolute bottom-full left-0 right-0 text-center text-xs font-medium text-purple-500 mb-1">
                            Fase 1
                          </div>
                        </div>
                        <div className="w-1/4 bg-purple-200 rounded-t-lg h-2/4 relative">
                          <div className="absolute bottom-full left-0 right-0 text-center text-xs font-medium text-purple-500 mb-1">
                            Fase 2
                          </div>
                        </div>
                        <div className="w-1/4 bg-purple-300 rounded-t-lg h-3/4 relative">
                          <div className="absolute bottom-full left-0 right-0 text-center text-xs font-medium text-purple-500 mb-1">
                            Fase 3
                          </div>
                        </div>
                        <div className="w-1/4 bg-purple-400 rounded-t-lg h-full relative">
                          <div className="absolute bottom-full left-0 right-0 text-center text-xs font-medium text-purple-500 mb-1">
                            Fase 4
                          </div>
                        </div>
                      </div>
                      <div className="absolute inset-x-0 bottom-0 h-px bg-gray-200"></div>
                    </div>
                    <div className="mt-4 grid grid-cols-4 gap-2 text-center text-xs text-gray-500">
                      <div>Establecimiento</div>
                      <div>Crecimiento</div>
                      <div>Expansión</div>
                      <div>Liderazgo</div>
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h4 className="font-bold mb-4">Beneficios del crecimiento escalable</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <div className="bg-purple-100 p-1 rounded-full">
                          <svg
                            className="h-3 w-3 text-purple-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm">Inversión optimizada en cada etapa</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="bg-purple-100 p-1 rounded-full">
                          <svg
                            className="h-3 w-3 text-purple-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm">Adaptabilidad a cambios del mercado</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="bg-purple-100 p-1 rounded-full">
                          <svg
                            className="h-3 w-3 text-purple-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm">Crecimiento sostenible a largo plazo</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="bg-purple-100 p-1 rounded-full">
                          <svg
                            className="h-3 w-3 text-purple-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm">Maximización del retorno de inversión</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="space-y-6 order-1 md:order-2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-2xl font-bold">Estrategias de crecimiento escalable</h3>
                <p className="text-gray-500">
                  Desarrollamos planes de crecimiento que evolucionan con tu negocio, permitiéndote escalar de forma
                  sostenible y maximizar el retorno de tu inversión en marketing.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="bg-purple-100 p-2 rounded-full mt-1">
                      <TrendingUp className="h-5 w-5 text-purple-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Escalabilidad planificada</h4>
                      <p className="text-gray-500">
                        Diseñamos estrategias que crecen con tu negocio, adaptándose a cada fase.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-purple-100 p-2 rounded-full mt-1">
                      <Users className="h-5 w-5 text-purple-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Expansión de audiencia</h4>
                      <p className="text-gray-500">
                        Estrategias para ampliar tu alcance a nuevos segmentos de mercado.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-purple-100 p-2 rounded-full mt-1">
                      <Lightbulb className="h-5 w-5 text-purple-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Innovación continua</h4>
                      <p className="text-gray-500">
                        Incorporación de nuevas tecnologías y enfoques para mantener la ventaja competitiva.
                      </p>
                    </div>
                  </li>
                </ul>
                <Link
                  href="#contact"
                  className="inline-flex items-center text-purple-500 hover:text-purple-600 transition-colors font-medium"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  Impulsa tu crecimiento <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
