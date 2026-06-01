import Navbar from '@/components/Navbar'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Services from '@/components/sections/Services'
import Destinations from '@/components/sections/Destinations'
import HowItWorks from '@/components/sections/HowItWorks'
import Testimonials from '@/components/sections/Testimonials'
import WhatsAppGroup from '@/components/sections/WhatsAppGroup'
import Social from '@/components/sections/Social'
import Contact from '@/components/sections/Contact'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import AccessibilityWidget from '@/components/AccessibilityWidget'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Destinations />
        <HowItWorks />
        <Testimonials />
        <WhatsAppGroup />
        <Social />
        <Contact />
      </main>
      <FloatingWhatsApp />
      <AccessibilityWidget />
    </>
  )
}
