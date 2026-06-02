import { motion } from 'framer-motion'
import { MessageCircle, Phone } from 'lucide-react'
import { InstagramIcon, FacebookIcon } from '@/components/icons/SocialIcons'
import { Button } from '@/components/ui/button'

const WA_LINK = 'https://wa.me/972527097160?text=%D7%94%D7%99%D7%99%20%D7%A8%D7%95%D7%99%D7%98%D7%9C%2C%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A9%D7%9E%D7%95%D7%A2%20%D7%A2%D7%9C%20%D7%97%D7%95%D7%A4%D7%A9%D7%94'

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-16 bg-ocean-950 relative overflow-hidden">
      {/* Decorative gradient orbs */}
      <div className="absolute top-0 start-0 w-72 h-72 rounded-full bg-teal-500/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 end-0 w-72 h-72 rounded-full bg-coral-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-gold-400 font-body font-semibold text-sm uppercase tracking-widest mb-3">
            צור קשר
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-5">
            מוכנים להתחיל לתכנן?
          </h2>
          <p className="font-body text-ocean-200 text-lg max-w-lg mx-auto leading-relaxed mb-10">
            שלחו לי הודעה בוואטסאפ, ספרו לי לאן חולמים לנסוע, ואנחנו
            נבנה יחד את החופשה שתרצו לזכור.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Button
              variant="whatsapp"
              size="xl"
              asChild
              className="gap-3 font-semibold text-lg shadow-2xl shadow-green-900/50"
            >
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-6 w-6" />
                שלחו הודעה בוואטסאפ
              </a>
            </Button>

            <Button
              variant="outline"
              size="xl"
              asChild
              className="gap-3 font-semibold text-lg border-white/40 text-white hover:bg-white hover:text-ocean-900"
            >
              <a href="tel:+972527097160">
                <Phone className="h-6 w-6" />
                התקשרו אליי
              </a>
            </Button>
          </div>

          <p className="font-body text-ocean-400 text-sm mb-10">
            עונה בדרך כלל תוך שעה בשעות הפעילות
          </p>

          {/* Social links */}
          <div className="flex justify-center gap-4">
            <a
              href="https://www.instagram.com/revital_israel11"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="אינסטגרם"
              className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-white/20 hover:text-white transition-all"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a
              href="https://www.facebook.com/share/18VcsuPyTX/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="פייסבוק"
              className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-white/20 hover:text-white transition-all"
            >
              <FacebookIcon className="h-5 w-5" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="mt-16 border-t border-ocean-800 pt-8">
        <p className="font-body text-ocean-500 text-sm text-center">
          2025 רוי טורס, רויטל ישראל. כל הזכויות שמורות.
        </p>
      </div>
    </section>
  )
}
