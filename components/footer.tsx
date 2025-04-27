"use client"

import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function Footer() {
  const [mounted, setMounted] = useState(false)
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setTimeout(() => {
        setEmail("")
        setSubscribed(false)
      }, 3000)
    }
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <footer className="w-full bg-white border-t border-gray-100">
      <div className="container px-4 md:px-6">
        <div className="py-12 border-b border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <Link
                href="/"
                className="inline-block mb-6"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <div className="flex items-center">
                  <div className="relative h-8 w-8">
                    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
                      {/* Nuevo icono abstracto */}
                      <rect width="40" height="40" rx="8" fill="#f97316" />
                      <path d="M20 8L32 20L20 32L8 20L20 8Z" fill="white" fillOpacity="0.2" />
                      <path d="M20 12L28 20L20 28L12 20L20 12Z" fill="white" fillOpacity="0.4" />
                      <circle cx="20" cy="20" r="4" fill="white" />
                    </svg>
                  </div>
                  <div className="ml-2 font-medium tracking-tight">
                    <span className="text-lg font-bold text-gray-900" style={{ letterSpacing: "-0.02em" }}>
                      <span>A</span>dook<span className="text-orange-500">Up</span>
                    </span>
                  </div>
                </div>
              </Link>
              <p className="text-gray-600 mb-6">
                Impulsamos marcas con estrategia, tecnología y enfoque humano. La nueva era del marketing: menos
                promesas vacías + crecimiento sostenible.
              </p>
              <div className="flex gap-4">
                <SocialLink href="#" icon={<Facebook className="h-5 w-5" />} label="Facebook" />
                <SocialLink href="#" icon={<Twitter className="h-5 w-5" />} label="Twitter" />
                <SocialLink href="#" icon={<Instagram className="h-5 w-5" />} label="Instagram" />
                <SocialLink href="#" icon={<Linkedin className="h-5 w-5" />} label="LinkedIn" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-lg font-bold mb-6">Enlaces rápidos</h3>
              <ul className="space-y-3">
                <FooterLink href="#" label="Home" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} />
                <FooterLink href="#services" label="Servicios" sectionId="services" />
                <FooterLink href="#process" label="Proceso" sectionId="process" />
                <FooterLink href="#methodology" label="Metodología" sectionId="methodology" />
                <FooterLink href="#why-us" label="Por qué nosotros" sectionId="why-us" />
                <FooterLink href="#pricing" label="Precios" sectionId="pricing" />
                <FooterLink href="#contact" label="Contacto" sectionId="contact" />
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-lg font-bold mb-6">Servicios</h3>
              <ul className="space-y-3">
                <FooterLink href="#services" label="Prospección de Leads" sectionId="services" />
                <FooterLink href="#services" label="Gestión de Contenido Digital" sectionId="services" />
                <FooterLink href="#services" label="Automatización de Procesos" sectionId="services" />
                <FooterLink href="#services" label="Desarrollo Web" sectionId="services" />
                <FooterLink href="#services" label="Gestión de Redes Sociales" sectionId="services" />
                <FooterLink href="#services" label="Consultoría Estratégica" sectionId="services" />
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-lg font-bold mb-6">Newsletter</h3>
              <p className="text-gray-600 mb-4">
                Suscríbete para recibir las últimas noticias y consejos sobre marketing digital.
              </p>
              {subscribed ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-green-700 text-sm">
                  ¡Gracias por suscribirte! Pronto recibirás nuestras novedades.
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Tu email"
                    className="border-gray-200 focus:border-orange-500"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <Button type="submit" className="bg-orange-500 hover:bg-orange-600 shrink-0">
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </form>
              )}
            </motion.div>
          </div>
        </div>

        <div className="py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">© 2025 AdookUp. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-gray-500 hover:text-orange-500 transition-colors">
              Política de Privacidad
            </Link>
            <Link href="#" className="text-sm text-gray-500 hover:text-orange-500 transition-colors">
              Términos y Condiciones
            </Link>
            <Link href="#" className="text-sm text-gray-500 hover:text-orange-500 transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

function SocialLink({ href, icon, label }) {
  return (
    <Link
      href={href}
      className="text-gray-400 hover:text-orange-500 transition-colors"
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
    >
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
        {icon}
      </motion.div>
    </Link>
  )
}

function FooterLink({ href, label, sectionId, onClick }) {
  return (
    <li>
      <Link
        href={href}
        className="text-gray-600 hover:text-orange-500 transition-colors"
        onClick={(e) => {
          e.preventDefault()
          if (onClick) {
            onClick()
          } else if (sectionId) {
            const element = document.getElementById(sectionId)
            element?.scrollIntoView({ behavior: "smooth" })
          }
        }}
      >
        {label}
      </Link>
    </li>
  )
}
