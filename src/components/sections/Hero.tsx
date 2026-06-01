import { motion } from 'framer-motion'
import { MessageCircle, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

const WA_LINK = 'https://wa.me/972527097160?text=%D7%94%D7%99%D7%99%20%D7%A8%D7%95%D7%99%D7%98%D7%9C%2C%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A9%D7%9E%D7%95%D7%A2%20%D7%A2%D7%9C%20%D7%97%D7%95%D7%A4%D7%A9%D7%94'

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=1920&q=80&auto=format&fit=crop'

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        role="img"
        aria-label="חוף בתאילנד, מים טורקיזים ושמיים כחולים"
      />

      {/* Dark overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-ocean-950/60 via-ocean-950/40 to-ocean-950/70" />

      {/* Gold shimmer top line */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full border border-gold-400/60 text-gold-300 text-sm font-body tracking-wide bg-ocean-950/30 backdrop-blur-sm">
            רויטל ישראל, סוכנת טיסות
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
        >
          החופשה המושלמת,
          <br />
          <span className="text-gold-300">מהרגע שחלמתם</span>
          <br />
          ועד שחזרתם הביתה
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45, ease: 'easeOut' }}
          className="font-body text-lg sm:text-xl text-white/85 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          לא רק טיסה ומלון. מעטפת שלמה: טיסה, מלון, מסלול אטרקציות,
          נהגים ביעד וליווי אישי לאורך כל הדרך.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            variant="whatsapp"
            size="xl"
            asChild
            className="gap-3 font-semibold text-lg shadow-2xl"
          >
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-6 w-6" />
              דברו איתי בוואטסאפ
            </a>
          </Button>

          <Button
            variant="white"
            size="lg"
            onClick={scrollToAbout}
            className="font-semibold"
          >
            קראו עוד עליי
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="mt-16 flex justify-center"
        >
          <button
            onClick={scrollToAbout}
            aria-label="גלול למטה"
            className="text-white/50 hover:text-white/90 transition-colors animate-bounce cursor-pointer"
          >
            <ChevronDown className="h-8 w-8" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
