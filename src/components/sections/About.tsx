import { motion } from 'framer-motion'
import { Star, Globe, Heart, Clock } from 'lucide-react'

const PORTRAIT_IMAGE =
  'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&q=80&auto=format&fit=crop'

const highlights = [
  { icon: Star, label: '5 שנות ניסיון', sub: 'בליווי אישי של אלפי לקוחות' },
  { icon: Globe, label: 'ביקורים בכל יעד', sub: 'כדי להכיר את המקום מבפנים' },
  { icon: Heart, label: 'יחס אישי', sub: 'כל חופשה בנויה בהתאמה מלאה' },
  { icon: Clock, label: 'זמינות מלאה', sub: 'מהתכנון ועד החזרה הביתה' },
]

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12 },
  }),
}

export default function About() {
  return (
    <section id="about" className="py-20 md:py-16 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="relative order-2 md:order-1"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
              <img
                src={PORTRAIT_IMAGE}
                alt="רויטל ישראל, סוכנת טיסות"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-900/40 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -start-6 bg-gold-400 text-ocean-900 rounded-2xl px-6 py-4 shadow-xl font-heading">
              <div className="text-3xl font-bold">5+</div>
              <div className="text-sm font-body font-semibold">שנות ניסיון</div>
            </div>
            {/* Decorative element */}
            <div className="absolute -top-6 -end-6 w-24 h-24 rounded-full bg-teal-400/20 blur-2xl" />
          </motion.div>

          {/* Text side */}
          <div className="order-1 md:order-2">
            <motion.p
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={fadeInUp}
              className="text-coral-500 font-body font-semibold text-sm uppercase tracking-widest mb-3"
            >
              מי אני
            </motion.p>

            <motion.h2
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={fadeInUp}
              className="font-heading text-3xl md:text-4xl font-bold text-ocean-900 mb-6 leading-snug"
            >
              שלום, אני רויטל.
              <br />
              <span className="text-teal-600">אני בונה חופשות,</span>
              <br />
              לא רק מזמינה טיסות
            </motion.h2>

            <motion.p
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={fadeInUp}
              className="font-body text-sand-700 leading-relaxed mb-5 text-lg"
            >
              מאחורי כל חופשה שאני מתכננת יש שעות של בדיקות, השוואות ותכנון
              קפדני, עם חשיבה על כל פרט קטן. אני לא שולחת אף לקוח ליעד שלא
              ביקרתי בו בעצמי.
            </motion.p>

            <motion.p
              custom={3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={fadeInUp}
              className="font-body text-sand-700 leading-relaxed mb-10 text-lg"
            >
              אני מכירה את המלונות, את האטרקציות, את הנהגים המהימנים, ואת
              מקומות הבילוי הפחות מוכרים. כשאתם בחופשה, אני זמינה בוואטסאפ
              לכל שאלה, בלי עלות נוספת.
            </motion.p>

            {/* Highlights grid */}
            <motion.div
              custom={4}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={fadeInUp}
              className="grid grid-cols-2 gap-4"
            >
              {highlights.map(({ icon: Icon, label, sub }) => (
                <div
                  key={label}
                  className="flex items-start gap-3 p-4 rounded-xl bg-sand-50 border border-sand-200"
                >
                  <div className="flex-shrink-0 w-9 h-9 rounded-full bg-ocean-100 flex items-center justify-center">
                    <Icon className="h-4 w-4 text-ocean-700" />
                  </div>
                  <div>
                    <div className="font-body font-semibold text-ocean-900 text-sm">{label}</div>
                    <div className="font-body text-sand-600 text-xs leading-snug mt-0.5">{sub}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
