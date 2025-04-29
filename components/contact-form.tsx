"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, ArrowRight, Send } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import emailjs from '@emailjs/browser'

export default function ContactForm() {
  const [mounted, setMounted] = useState(false)
  const [formState, setFormState] = useState({
    nombre: "",
    apellido: "",
    email: "",
    empresa: "",
    mensaje: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")

  // Configuración de EmailJS (usa variables de entorno en producción)
  const EMAILJS_CONFIG = {
    serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_880tmpo',
    templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_3llsdd7',
    userId: process.env.NEXT_PUBLIC_EMAILJS_USER_ID || 'dsmXE8ofwk0YZ4VM-'
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormState(prev => ({ ...prev, [id]: value }))
    setError("")
  }

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validación
    if (!formState.nombre || !formState.email || !formState.mensaje) {
      setError("Por favor completa los campos requeridos")
      return
    }

    if (!validateEmail(formState.email)) {
      setError("Por favor ingresa un email válido")
      return
    }

    setIsSubmitting(true)
    setError("")

    try {
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        {
          from_name: `${formState.nombre} ${formState.apellido}`.trim(),
          from_email: formState.email,
          reply_to: formState.email,
          to_name: "Equipo AdookUp",
          empresa: formState.empresa || "No especificada",
          message: formState.mensaje,
          // Encabezados personalizados para simular remitente
          custom_headers: JSON.stringify({
            'X-Original-From': formState.email,
            'Reply-To': formState.email
          })
        },
        EMAILJS_CONFIG.userId
      )

      setSubmitted(true)
      setFormState({
        nombre: "",
        apellido: "",
        email: "",
        empresa: "",
        mensaje: "",
      })
    } catch (err) {
      console.error('Error al enviar:', err)
      setError("Ocurrió un error al enviar el mensaje. Por favor intenta nuevamente o contáctanos directamente.")
    } finally {
      setIsSubmitting(false)
    }
  }

  useEffect(() => {
    setMounted(true)
    emailjs.init(EMAILJS_CONFIG.userId)
  }, [])

  if (!mounted) return null

  return (
    <section id="contact" className="w-full py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-sm text-orange-600 mb-4">
            <span className="font-medium">Contacto</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-4">¿Listo para potenciar tu marca?</h2>
          <p className="text-gray-600 text-lg">
            Solicita tu análisis estratégico gratuito y descubre cómo podemos ayudarte a alcanzar tus objetivos
          </p>
        </motion.div>

        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-12">
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-6">Envíanos un mensaje</h3>
            
            {error && (
              <motion.div 
                className="bg-red-50 border border-red-200 text-red-600 p-4 rounded-lg mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {error}
              </motion.div>
            )}

            {submitted ? (
              <motion.div
                className="flex flex-col items-center justify-center h-80 text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-green-100 p-4 rounded-full mb-4">
                  <Send className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="text-xl font-bold text-green-600 mb-2">¡Mensaje enviado con éxito!</h4>
                <p className="text-gray-600 mb-2">
                  Hemos recibido tu solicitud de análisis estratégico.
                </p>
                <p className="text-sm text-gray-500">
                  Te responderemos a <span className="font-medium">{formState.email}</span> en menos de 24 horas.
                </p>
              </motion.div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="nombre" className="text-sm font-medium">
                      Nombre <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="nombre"
                      placeholder="Carlos"
                      className="border-gray-200 focus:border-orange-500"
                      value={formState.nombre}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="apellido" className="text-sm font-medium">
                      Apellido
                    </label>
                    <Input
                      id="apellido"
                      placeholder="Rodríguez"
                      className="border-gray-200 focus:border-orange-500"
                      value={formState.apellido}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="tu@empresa.com"
                    className="border-gray-200 focus:border-orange-500"
                    value={formState.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="empresa" className="text-sm font-medium">
                    Marca/Empresa
                  </label>
                  <Input
                    id="empresa"
                    placeholder="Tu Empresa"
                    className="border-gray-200 focus:border-orange-500"
                    value={formState.empresa}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="mensaje" className="text-sm font-medium">
                    Mensaje <span className="text-red-500">*</span>
                  </label>
                  <Textarea
                    id="mensaje"
                    placeholder="Cuéntanos sobre tus objetivos de marketing..."
                    className="min-h-[120px] border-gray-200 focus:border-orange-500"
                    value={formState.mensaje}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 shadow-md hover:shadow-lg transition-all duration-300 group"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Enviando...
                    </span>
                  ) : (
                    <>
                      Solicitar análisis estratégico{" "}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </motion.div>

          <motion.div
            className="flex flex-col justify-between"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div>
              <h3 className="text-xl font-bold mb-6">Información de contacto</h3>
              <p className="text-gray-600 mb-8">
                Estamos aquí para responder a tus preguntas y ayudarte a impulsar tu negocio. Contáctanos por cualquiera
                de estos medios o completa el formulario.
              </p>

              <div className="space-y-6">
                <motion.div className="flex items-start gap-4" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <div className="bg-orange-100 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Dirección</h4>
                    <p className="text-gray-600">Valencia, Carabobo, Venezuela, 2001</p>
                  </div>
                </motion.div>

                <motion.div className="flex items-start gap-4" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <div className="bg-orange-100 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Teléfono</h4>
                    <p className="text-gray-600">+58-412-7461409</p>
                  </div>
                </motion.div>

                <motion.div className="flex items-start gap-4" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <div className="bg-orange-100 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Email</h4>
                    <p className="text-gray-600">info@adookup.com</p>
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="mt-12 bg-gradient-to-br from-[#1e293b] to-[#334155] text-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold mb-4">Horario de atención</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Lunes - Viernes</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábado</span>
                  <span>10:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Domingo</span>
                  <span>Cerrado</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
