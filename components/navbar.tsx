"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import { default as NextImage } from 'next/image'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }

      // Update active section based on scroll position
      const sections = ["home", "why-us", "services", "process", "methodology", "pricing", "contact"]

      for (const section of sections) {
        const element = document.getElementById(section === "home" ? "why-us" : section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent",
      )}
    >
      <div className="container flex h-20 items-center justify-between px-4 md:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 z-10"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
             {/* Contenedor del logo
            <div className="relative h-9 w-9 flex items-center justify-center">
              <NextImage 
                src="/imagen1.jpg"
                alt="Logo"
                width={36}
                height={36}
                className="object-contain"
              />
            </div> */}
            
            {/* Contenedor del nombre - Añadí items-center */}
            <div className="ml-2 flex items-center">
              <NextImage 
                src="/imagen2.jpg"
                alt="Nombre de la marca"
                width={120}
                height={24}
                className="object-contain"
              />
            </div>
          </motion.div>
        </Link>

        <motion.nav
          className="hidden md:flex gap-8"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <NavLink
            href="#"
            label="Home"
            isActive={activeSection === "home"}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          />
          <NavLink href="#services" label="Servicios" isActive={activeSection === "services"} />
          <NavLink href="#process" label="Proceso" isActive={activeSection === "process"} />
          <NavLink href="#methodology" label="Metodología" isActive={activeSection === "methodology"} />
          <NavLink href="#why-us" label="Por qué nosotros" isActive={activeSection === "why-us"} />
          <NavLink href="#pricing" label="Precios" isActive={activeSection === "pricing"} />
        </motion.nav>

        <motion.div
          className="hidden md:flex"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="#contact">
            <Button className="bg-orange-500 hover:bg-orange-600 transition-all duration-300 shadow-sm hover:shadow-md">
              Contacto
            </Button>
          </Link>
        </motion.div>

        <button className="md:hidden z-10" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="absolute inset-0 bg-white flex flex-col justify-center items-center md:hidden z-40"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <nav className="flex flex-col gap-8 text-center">
                <MobileNavLink
                  href="#"
                  label="Home"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" })
                    setIsMenuOpen(false)
                  }}
                />
                <MobileNavLink href="#services" label="Servicios" onClick={() => setIsMenuOpen(false)} />
                <MobileNavLink href="#process" label="Proceso" onClick={() => setIsMenuOpen(false)} />
                <MobileNavLink href="#methodology" label="Metodología" onClick={() => setIsMenuOpen(false)} />
                <MobileNavLink href="#why-us" label="Por qué nosotros" onClick={() => setIsMenuOpen(false)} />
                <MobileNavLink href="#pricing" label="Precios" onClick={() => setIsMenuOpen(false)} />
                <div className="mt-4">
                  <Link href="#contact" onClick={() => setIsMenuOpen(false)}>
                    <Button className="bg-orange-500 hover:bg-orange-600 px-8 py-6 text-lg">Contacto</Button>
                  </Link>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

function NavLink({ href, label, isActive, onClick }) {
  return (
    <Link
      href={href}
      className={`text-sm font-medium transition-colors relative ${
        isActive ? "text-orange-500" : "text-gray-700 hover:text-orange-500"
      }`}
      onClick={(e) => {
        e.preventDefault()
        if (onClick) {
          onClick()
        } else {
          const element = document.querySelector(href)
          element?.scrollIntoView({ behavior: "smooth" })
        }
      }}
    >
      {label}
      {isActive && (
        <motion.div
          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-orange-500"
          layoutId="navbar-indicator"
          transition={{ type: "spring", duration: 0.5 }}
        />
      )}
    </Link>
  )
}

function MobileNavLink({ href, label, onClick }) {
  return (
    <Link
      href={href}
      className="text-lg font-medium hover:text-orange-500 transition-colors"
      onClick={(e) => {
        e.preventDefault()
        const element = document.querySelector(href)
        element?.scrollIntoView({ behavior: "smooth" })
        if (onClick) onClick()
      }}
    >
      {label}
    </Link>
  )
}
