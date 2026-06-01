import { motion } from 'framer-motion'
import { MessageCircle, Package, CreditCard, Compass, Home } from 'lucide-react'

const steps = [
  {
    icon: MessageCircle,
    title: 'פנייה ושיחת היכרות',
    desc: 'שולחים לי הודעה בוואטסאפ, מספרים לי לאן חולמים לנסוע, מתי ועם מי. אנחנו מדברים ומבינים מה בדיוק מחפשים.',
    color: 'bg-ocean-100 text-ocean-700',
    num: '01',
  },
  {
    icon: Package,
    title: 'בניית החבילה המותאמת',
    desc: 'אני בונה עבורכם הצעה שלמה: טיסות, מלון, מסלול יומי, נהגים ואטרקציות. הכל מותאם לתקציב ולסגנון שלכם.',
    color: 'bg-teal-400/20 text-teal-700',
    num: '02',
  },
  {
    icon: CreditCard,
    title: 'אישור והזמנה',
    desc: 'לאחר שמאשרים את ההצעה, אני מטפלת בכל ההזמנות ושולחת לכם אישורים. אתם לא צריכים לעשות כלום.',
    color: 'bg-gold-100 text-gold-600',
    num: '03',
  },
  {
    icon: Compass,
    title: 'ליווי בזמן הטיול',
    desc: 'בזמן שאתם בחופשה אני זמינה בוואטסאפ לכל שאלה, כל שינוי ולכל מצב שדורש עזרה.',
    color: 'bg-coral-300/20 text-coral-600',
    num: '04',
  },
  {
    icon: Home,
    title: 'חזרה הביתה מחוייכים',
    desc: 'אתם חוזרים עם חוויה מושלמת. ואני כבר מחכה לשמוע את הסיפורים ולתכנן את הטיול הבא.',
    color: 'bg-sand-200 text-sand-700',
    num: '05',
  },
]

export default function HowItWorks() {
  return (
    <section id="process" className="py-20 md:py-16 bg-ocean-900 overflow-hidden relative">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
      </div>

      <div className="max-w-5xl mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-gold-400 font-body font-semibold text-sm uppercase tracking-widest mb-3">
            איך זה עובד
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            פשוט מרגע ראשון
          </h2>
          <p className="font-body text-ocean-200 text-lg max-w-xl mx-auto leading-relaxed">
            חמישה שלבים פשוטים, ואתם בחופשה האידאלית שלכם.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute right-8 md:right-1/2 md:translate-x-1/2 top-6 bottom-6 w-px bg-ocean-700 hidden md:block" />

          <div className="space-y-8">
            {steps.map((step, i) => {
              const Icon = step.icon
              const isEven = i % 2 === 0
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.7, delay: i * 0.1 }}
                  className={`flex items-start gap-5 md:w-5/12 ${
                    isEven ? 'md:mr-auto md:pr-10' : 'md:ml-auto md:pl-10'
                  }`}
                >
                  {/* Icon + number */}
                  <div className="flex-shrink-0 relative">
                    <div className={`w-14 h-14 rounded-2xl ${step.color} flex items-center justify-center shadow-lg`}>
                      <Icon className="h-7 w-7" />
                    </div>
                    <span className="absolute -top-2 -end-2 w-6 h-6 rounded-full bg-gold-400 text-ocean-900 text-xs font-bold font-heading flex items-center justify-center">
                      {i + 1}
                    </span>
                  </div>
                  {/* Text */}
                  <div>
                    <h3 className="font-heading text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="font-body text-ocean-200 leading-relaxed text-sm">{step.desc}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
