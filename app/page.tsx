import Hero from "@/components/hero"
import Services from "@/components/services"
import Process from "@/components/process"
import WhyUs from "@/components/why-us"
import Pricing from "@/components/pricing"
import Faq from "@/components/faq"
import ContactForm from "@/components/contact-form"
import CTA from "@/components/cta"
import Methodology from "@/components/methodology"

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <WhyUs />
      <Services />
      <Process />
      <Methodology />
      <CTA />
      <Pricing />
      <Faq />
      <ContactForm />
    </main>
  )
}
