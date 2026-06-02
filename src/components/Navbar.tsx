import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, MessageCircle } from 'lucide-react'

const WA_LINK = 'https://wa.me/972527097160?text=%D7%94%D7%99%D7%99%20%D7%A8%D7%95%D7%99%D7%98%D7%9C%2C%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A9%D7%9E%D7%95%D7%A2%20%D7%A2%D7%9C%20%D7%97%D7%95%D7%A4%D7%A9%D7%94'

const links = [
  { href: '#about', label: 'מי אני' },
  { href: '#services', label: 'מה מקבלים' },
  { href: '#destinations', label: 'יעדים' },
  { href: '#process', label: 'איך זה עובד' },
  { href: '#testimonials', label: 'המלצות' },
  { href: '#deals', label: 'קבוצת דילים' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    let lastY = window.scrollY
    const onScroll = () => {
      const currentY = window.scrollY
      setScrolled(currentY > 60)
      if (currentY > lastY) setOpen(false)
      lastY = currentY
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href: string) => {
    setOpen(false)
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={() => handleNav('#hero')}
            className={`font-heading font-bold text-xl transition-colors ${
              scrolled ? 'text-ocean-900' : 'text-white'
            }`}
          >
            <span className="text-gold-400">רוי</span> טורס
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {links.map(({ href, label }) => (
              <button
                key={href}
                onClick={() => handleNav(href)}
                className={`font-body text-sm font-medium transition-colors cursor-pointer ${
                  scrolled
                    ? 'text-sand-700 hover:text-ocean-700'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {label}
              </button>
            ))}
          </nav>

          {/* CTA + burger */}
          <div className="flex items-center gap-3">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] text-white font-body font-semibold text-sm hover:bg-[#20bc5a] transition-colors shadow-md"
            >
              <MessageCircle className="h-4 w-4" />
              וואטסאפ
            </a>
            <button
              onClick={() => setOpen((o) => !o)}
              aria-label="תפריט"
              className={`md:hidden p-2 rounded-lg transition-colors cursor-pointer ${
                scrolled ? 'text-ocean-900 hover:bg-sand-100' : 'text-white hover:bg-white/10'
              }`}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-0 inset-x-0 z-30 bg-white pt-20 pb-8 px-6 shadow-xl md:hidden"
          >
            <nav className="flex flex-col gap-1">
              {links.map(({ href, label }) => (
                <button
                  key={href}
                  onClick={() => handleNav(href)}
                  className="text-start px-4 py-3 rounded-xl font-body font-medium text-sand-800 hover:bg-sand-50 hover:text-ocean-700 transition-colors cursor-pointer"
                >
                  {label}
                </button>
              ))}
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-3 flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] text-white font-body font-semibold hover:bg-[#20bc5a] transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
                דברו איתי בוואטסאפ
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
