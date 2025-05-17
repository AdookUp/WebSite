"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronDown } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { default as NextImage } from 'next/image';


export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const scrollToNextSection = () => {
    const whyUsSection = document.getElementById("why-us")
    if (whyUsSection) {
      whyUsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative w-full py-24 md:py-32 lg:py-40 overflow-hidden bg-gradient-to-br from-orange-500/5 via-white to-blue-500/5">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(249,115,22,0.1),transparent_50%),radial-gradient(circle_at_80%_70%,rgba(249,115,22,0.05),transparent_50%)]"></div>
      <div className="absolute top-1/4 right-0 w-1/3 h-1/3 bg-orange-100/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-1/4 w-1/4 h-1/4 bg-blue-100/20 rounded-full blur-3xl -z-10"></div>

      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-8">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >

             {/* Contenedor de la imagen centrada */}
              <div className="flex justify-center mb-6">
                <div className="relative w-24 h-24 md:w-32 md:h-32">
                  <NextImage
                    src="/imagen1_sin_fondo.png" // Ruta a tu imagen
                    alt="Icono decorativo"
                    width={128}
                    height={128}
                    className="object-contain"
                    priority
                  />
                </div>
              </div>

            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl/none lg:text-7xl/none">
              El poder de las{" "}
              <span className="text-orange-500 inline-block relative">
                ideas
                <svg
                  className="absolute -bottom-2 left-0 w-full h-2 text-orange-500/30"
                  viewBox="0 0 100 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 5C20 2 40 1 60 8C75 13 90 13 100 8"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              estratégicas
            </h1>
            <p className="text-xl text-gray-600 md:text-2xl max-w-2xl mx-auto mt-6">
              Impulsamos marcas con estrategia, tecnología y enfoque humano. La nueva era del <span className="font-semibold">marketing digital</span> para hacer crecer tu negocio. Tu <span className="font-semibold">agencia de marketing digital</span> de confianza.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 w-full max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              href="#contact"
              className="w-full"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              <Button
                size="lg"
                className="w-full h-14 bg-orange-500 hover:bg-orange-600 shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
              >
                Impulsa tu marca ahora <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link
              href="#services"
              className="w-full"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              <Button
                size="lg"
                variant="outline"
                className="w-full h-14 border-orange-200 text-orange-600 hover:bg-orange-50 text-lg"
              >
                Nuestros servicios
              </Button>
            </Link>
          </motion.div>

          <motion.div
            className="pt-12 w-full max-w-4xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl bg-gradient-to-br from-orange-500/10 to-blue-500/10">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl max-w-lg text-center shadow-lg">
                  <h3 className="text-2xl font-bold mb-4">Guiamos tu marca hacia su mejor versión</h3>
                  <p className="text-gray-600">
                    Con estrategia, estructura y una identidad que se siente tan bien como se ve. Descubre cómo podemos
                    transformar tu presencia digital.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.8,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              repeatDelay: 0.5,
            }}
            onClick={scrollToNextSection}
          >
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500 mb-2">Descubre más</span>
              <ChevronDown className="h-6 w-6 text-orange-500" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-10 right-10 w-20 h-20 rounded-full bg-orange-500/10 animate-pulse hidden md:block"></div>
      <div className="absolute top-20 left-10 w-10 h-10 rounded-full bg-orange-500/10 animate-pulse hidden md:block"></div>
      <svg
        className="absolute bottom-0 right-0 text-orange-500/5 w-64 h-64 hidden lg:block"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M10,50 Q25,25 50,50 T90,50" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
      </svg>
    </section>
  )
}
