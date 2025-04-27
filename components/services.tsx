"use client"

import { BarChart, Target, Zap, ArrowRight, Users, Globe, Lightbulb } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function Services() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <section id="services" className="w-full py-24 bg-gray-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-sm text-orange-600 mb-4">
            <span className="font-medium">Nuestros Servicios</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-4">
            Soluciones estratégicas para tu crecimiento digital
          </h2>
          <p className="text-gray-600 text-lg">
            Cada servicio está diseñado para abordar un aspecto crucial de tu presencia digital, trabajando en conjunto
            para impulsar resultados excepcionales.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <ServiceCard
            icon={<Target className="h-8 w-8 text-white" />}
            title="Prospección de Leads"
            description="Identificamos y conectamos con potenciales clientes de forma estratégica, generando oportunidades comerciales cualificadas con un enfoque en la conversión."
            features={[
              "Segmentación avanzada de audiencias",
              "Estrategias de captación multicanal",
              "Cualificación y nurturing de leads",
            ]}
            color="from-orange-500 to-red-600"
            delay={0}
          />

          <ServiceCard
            icon={<BarChart className="h-8 w-8 text-white" />}
            title="Gestión de Contenido Digital"
            description="Creamos y ejecutamos contenido que conecta con tu audiencia. Construimos una línea creativa alineada con tus objetivos de negocio y valores de marca."
            features={[
              "Estrategia editorial multiplataforma",
              "Creación de contenido de alto valor",
              "Análisis de rendimiento y optimización",
            ]}
            color="from-blue-500 to-indigo-600"
            delay={0.1}
          />

          <ServiceCard
            icon={<Zap className="h-8 w-8 text-white" />}
            title="Automatización de Procesos"
            description="Optimizamos tu tiempo y recursos integrando automatizaciones. Hacemos que tu negocio funcione sin fricciones y a toda velocidad, maximizando la eficiencia operativa."
            features={[
              "Implementación de CRM y automatizaciones",
              "Flujos de trabajo optimizados",
              "Integración de herramientas y plataformas",
            ]}
            color="from-green-500 to-emerald-600"
            delay={0.2}
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-8">
          <ServiceCard
            icon={<Globe className="h-8 w-8 text-white" />}
            title="Desarrollo Web"
            description="Creamos sitios web atractivos, funcionales y optimizados para convertir visitantes en clientes. Diseñamos experiencias digitales que representan la esencia de tu marca."
            features={[
              "Diseño web responsive y moderno",
              "Optimización para conversión",
              "Integración con herramientas de marketing",
            ]}
            color="from-purple-500 to-violet-600"
            delay={0.3}
          />

          <ServiceCard
            icon={<Users className="h-8 w-8 text-white" />}
            title="Gestión de Redes Sociales"
            description="Gestionamos tus redes sociales con estrategia y creatividad para construir una comunidad comprometida y aumentar la visibilidad de tu marca."
            features={[
              "Estrategia de contenido personalizada",
              "Diseño gráfico profesional",
              "Análisis y optimización de resultados",
            ]}
            color="from-pink-500 to-rose-600"
            delay={0.4}
          />

          <ServiceCard
            icon={<Lightbulb className="h-8 w-8 text-white" />}
            title="Consultoría Estratégica"
            description="Asesoramos a tu empresa para definir la estrategia digital más efectiva según tus objetivos de negocio, recursos y mercado objetivo."
            features={["Análisis de situación actual", "Definición de objetivos SMART", "Plan de acción detallado"]}
            color="from-amber-500 to-yellow-600"
            delay={0.5}
          />
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ icon, title, description, features, color, delay }) {
  return (
    <motion.div
      className="rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
    >
      <div className={`bg-gradient-to-r ${color} p-6 text-white`}>
        <div className="bg-white/10 backdrop-blur-sm p-4 rounded-full inline-block mb-4">{icon}</div>
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="mt-2 text-white/90">{description}</p>
      </div>
      <div className="bg-white p-6">
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <span className="mr-2 text-orange-500">•</span>
              {feature}
            </li>
          ))}
        </ul>
        <Link
          href="#contact"
          className="inline-flex items-center text-orange-500 hover:text-orange-600 transition-colors font-medium group-hover:underline"
          onClick={(e) => {
            e.preventDefault()
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
          }}
        >
          Más información <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  )
}
