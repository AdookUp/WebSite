"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Faq() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <section id="faq" className="w-full py-24 bg-white">
      <div className="container px-4 md:px-6">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-sm text-orange-600 mb-4">
            <span className="font-medium">Preguntas Frecuentes</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-4">Respuestas a tus dudas</h2>
          <p className="text-gray-600 text-lg">
            Todo lo que necesitas saber sobre nuestros servicios y cómo podemos ayudarte
          </p>
        </motion.div>

        <Tabs defaultValue="general" className="w-full max-w-3xl mx-auto">
          <TabsList className="flex justify-center mb-8 w-full">
            <TabsTrigger value="general" className="px-6">
              General
            </TabsTrigger>
            <TabsTrigger value="equipo" className="px-6">
              Nuestro Equipo
            </TabsTrigger>
            <TabsTrigger value="servicios" className="px-6">
              Servicios
            </TabsTrigger>
            <TabsTrigger value="planes" className="px-6">
              Planes
            </TabsTrigger>
          </TabsList>

          <TabsContent value="general" className="mt-0">
            <motion.div
              className="mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-b border-gray-200">
                  <AccordionTrigger className="text-left text-lg font-medium py-6 hover:text-orange-500 transition-colors">
                    ¿Qué hace diferente a AdookUp de otras agencias?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-6">
                    En AdookUp nos distinguimos por nuestro enfoque integral y personalizado. No creemos en soluciones
                    genéricas; cada estrategia que desarrollamos está diseñada específicamente para las necesidades
                    únicas de tu negocio. Además, nos centramos en resultados medibles y crecimiento sostenible, no en
                    promesas vacías.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="border-b border-gray-200">
                  <AccordionTrigger className="text-left text-lg font-medium py-6 hover:text-orange-500 transition-colors">
                    ¿Cuánto tiempo toma ver resultados?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-6">
                    Los resultados varían según la industria, la competencia y los objetivos específicos. Generalmente,
                    comenzarás a ver mejoras en métricas clave en los primeros 30-60 días. Sin embargo, las estrategias
                    de marketing digital son inversiones a medio y largo plazo, con resultados que se acumulan y mejoran
                    con el tiempo. Proporcionamos informes transparentes para que puedas seguir el progreso desde el
                    primer día.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="border-b border-gray-200">
                  <AccordionTrigger className="text-left text-lg font-medium py-6 hover:text-orange-500 transition-colors">
                    ¿Cómo miden el éxito de las campañas?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-6">
                    Definimos KPIs claros al inicio de cada proyecto, alineados con tus objetivos de negocio. Utilizamos
                    herramientas analíticas avanzadas para monitorear el rendimiento en tiempo real y proporcionamos
                    informes detallados que muestran el ROI y el impacto en tu negocio. Nuestro enfoque se basa en
                    datos, lo que nos permite optimizar continuamente las estrategias para maximizar los resultados.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          </TabsContent>

          <TabsContent value="equipo" className="mt-0">
            <motion.div
              className="mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="equipo-1" className="border-b border-gray-200">
                  <AccordionTrigger className="text-left text-lg font-medium py-6 hover:text-orange-500 transition-colors">
                    ¿Quién trabajará en mi proyecto?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-6">
                    En AdookUp, asignamos un equipo multidisciplinario completo a tu proyecto, no solo una persona. Cada
                    cliente cuenta con un estratega principal, diseñadores, especialistas en marketing digital,
                    desarrolladores web y analistas de datos según las necesidades específicas de tu proyecto. Este
                    enfoque de equipo garantiza una ejecución integral y de alta calidad en todas las áreas de tu
                    estrategia digital.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="equipo-2" className="border-b border-gray-200">
                  <AccordionTrigger className="text-left text-lg font-medium py-6 hover:text-orange-500 transition-colors">
                    ¿Cómo está estructurado el equipo que gestionará mi cuenta?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-6">
                    Tu cuenta será gestionada por un equipo completo de profesionales especializados:
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>
                        Un Director de Cuenta que supervisa la estrategia general y es tu punto de contacto principal
                      </li>
                      <li>
                        Especialistas en marketing digital enfocados en diferentes canales (SEO, SEM, redes sociales)
                      </li>
                      <li>Diseñadores gráficos y creativos para el desarrollo de contenido visual</li>
                      <li>Copywriters para la creación de contenido persuasivo</li>
                      <li>Desarrolladores web para implementaciones técnicas</li>
                      <li>Analistas de datos que monitorean y optimizan el rendimiento</li>
                    </ul>
                    Este enfoque de equipo completo asegura que cada aspecto de tu estrategia digital sea ejecutado por
                    expertos en su campo.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="equipo-3" className="border-b border-gray-200">
                  <AccordionTrigger className="text-left text-lg font-medium py-6 hover:text-orange-500 transition-colors">
                    ¿Tendré acceso directo a los miembros del equipo?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-6">
                    Absolutamente. Aunque tendrás un Director de Cuenta como punto de contacto principal para mantener
                    la comunicación clara y eficiente, también organizamos reuniones periódicas donde participan los
                    especialistas relevantes de tu equipo. Esto te permite interactuar directamente con los
                    profesionales que trabajan en aspectos específicos de tu proyecto, hacer preguntas técnicas y
                    obtener insights de primera mano. Creemos en la transparencia y en construir relaciones de
                    colaboración con nuestros clientes.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="equipo-4" className="border-b border-gray-200">
                  <AccordionTrigger className="text-left text-lg font-medium py-6 hover:text-orange-500 transition-colors">
                    ¿Qué experiencia tiene el equipo de AdookUp?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-6">
                    Nuestro equipo está formado por profesionales con amplia experiencia en marketing digital,
                    desarrollo web y estrategia de negocios. Cada miembro cuenta con al menos 5 años de experiencia en
                    su especialidad y certificaciones relevantes de Google, Meta, HubSpot y otras plataformas líderes.
                    Hemos trabajado con empresas de diversos tamaños y sectores, lo que nos ha permitido desarrollar un
                    conocimiento profundo de diferentes industrias y desafíos de marketing. Además, invertimos
                    constantemente en la formación continua de nuestro equipo para mantenernos al día con las últimas
                    tendencias y mejores prácticas.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          </TabsContent>

          <TabsContent value="servicios" className="mt-0">
            <motion.div
              className="mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="servicios-1" className="border-b border-gray-200">
                  <AccordionTrigger className="text-left text-lg font-medium py-6 hover:text-orange-500 transition-colors">
                    ¿Puedo contratar servicios individuales o debo elegir un plan?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-6">
                    Ofrecemos flexibilidad total. Aunque nuestros planes están diseñados para proporcionar una
                    estrategia integral y maximizar resultados, entendemos que algunas empresas pueden necesitar
                    servicios específicos. Puedes contratar servicios individuales como desarrollo web, gestión de redes
                    sociales o campañas de publicidad digital. Sin embargo, para obtener los mejores resultados,
                    recomendamos un enfoque integrado que combine múltiples canales y estrategias.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="servicios-2" className="border-b border-gray-200">
                  <AccordionTrigger className="text-left text-lg font-medium py-6 hover:text-orange-500 transition-colors">
                    ¿Qué plataformas y herramientas utilizan?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-6">
                    Utilizamos un conjunto de herramientas de primer nivel para ejecutar y medir nuestras estrategias.
                    Estas incluyen Google Analytics, SEMrush, Ahrefs, HubSpot, Meta Business Suite, Mailchimp, Asana,
                    Adobe Creative Suite, entre otras. Seleccionamos las herramientas más adecuadas según las
                    necesidades específicas de cada proyecto y nos mantenemos actualizados con las últimas tecnologías
                    del sector.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          </TabsContent>

          <TabsContent value="planes" className="mt-0">
            <motion.div
              className="mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="planes-1" className="border-b border-gray-200">
                  <AccordionTrigger className="text-left text-lg font-medium py-6 hover:text-orange-500 transition-colors">
                    ¿Trabajan con empresas de cualquier tamaño?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-6">
                    Sí, trabajamos con empresas de todos los tamaños, desde startups y pequeñas empresas hasta grandes
                    corporaciones. Nuestros planes son escalables y se adaptan a las necesidades y presupuestos
                    específicos de cada cliente. Lo importante es que compartas nuestra visión de crecimiento
                    estratégico y marketing con propósito.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="planes-2" className="border-b border-gray-200">
                  <AccordionTrigger className="text-left text-lg font-medium py-6 hover:text-orange-500 transition-colors">
                    ¿Puedo cambiar de plan o cancelar el servicio?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-6">
                    Ofrecemos flexibilidad en nuestros servicios. Puedes actualizar, reducir o modificar tu plan según
                    evolucionen las necesidades de tu negocio. Nuestros contratos son mensuales con un compromiso mínimo
                    inicial de tres meses para permitir que las estrategias tengan tiempo de mostrar resultados. Después
                    de este período, puedes cancelar con un preaviso de 30 días.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="planes-3" className="border-b border-gray-200">
                  <AccordionTrigger className="text-left text-lg font-medium py-6 hover:text-orange-500 transition-colors">
                    ¿Los precios incluyen el presupuesto para publicidad?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-6">
                    Los planes UpScale y UpMaster incluyen un presupuesto para publicidad digital (hasta $500 y $1,500
                    respectivamente). Este presupuesto se destina a campañas en plataformas como Google Ads, Meta Ads,
                    LinkedIn Ads, etc., según la estrategia definida. Para el plan UpStart, el presupuesto de publicidad
                    es adicional y se determina según tus objetivos y mercado. En todos los casos, gestionamos estos
                    presupuestos de manera transparente y te proporcionamos informes detallados sobre el rendimiento de
                    cada campaña.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
