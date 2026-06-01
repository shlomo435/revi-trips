import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'

const WA_BASE = 'https://wa.me/972527097160?text='

const destinations = [
  {
    id: 'thailand',
    name: 'תאילנד',
    tagline: 'חופים, ג\'ונגלים ותרבות עשירה',
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=900&q=80&auto=format&fit=crop',
    description:
      'תאילנד היא אחד מהיעדים האהובים עליי. פוקט, קרבי, קו סאמוי, צ\'יאנג מאי. אני מכירה כל פינה ויודעת בדיוק מה מתאים לכל זוג, משפחה או קבוצת חברים.',
    waText: 'היי רויטל, אשמח לשמוע על חופשה בתאילנד',
  },
  {
    id: 'georgia',
    name: 'גאורגיה',
    tagline: 'בתומי, טביליסי ונופים עוצרי נשימה',
    image: 'https://images.unsplash.com/photo-1565008576549-57569a49371d?w=900&q=80&auto=format&fit=crop',
    description:
      'גאורגיה היא גן עדן נסתר עם אוכל מדהים, יין מעולה ואנשים חמים ומסבירי פנים. בתומי על חוף הים השחור, וטביליסי העתיקה עם הסימטאות הציוריות שלה.',
    waText: 'היי רויטל, אשמח לשמוע על חופשה בגאורגיה',
  },
  {
    id: 'montenegro',
    name: 'מונטנגרו',
    tagline: 'ים אדריאטי, טבע ואוירה אירופאית',
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=900&q=80&auto=format&fit=crop',
    description:
      'מונטנגרו שלא כולם מכירים עדיין. קוטור העתיקה, חוף בודוה, ואגם שקודר הגדול ביותר בבלקן. ים נקי ויפה בלי הצפיפות של האיים היווניים.',
    waText: 'היי רויטל, אשמח לשמוע על חופשה במונטנגרו',
  },
  {
    id: 'budapest',
    name: 'בודפשט',
    tagline: 'ארכיטקטורה, ספא ואורח חיים אירופאי',
    image: 'https://images.unsplash.com/photo-1541849546-216549ae216d?w=900&q=80&auto=format&fit=crop',
    description:
      'בודפשט היא אחת מהערים היפות באירופה. המרחצאות הטבעיות, גשרי הדנובה, שוקי הלילה וחיי הלילה העשירים. מושלם לסוף שבוע ארוך או שבוע שלם.',
    waText: 'היי רויטל, אשמח לשמוע על חופשה בבודפשט',
  },
  {
    id: 'greece',
    name: 'יוון וקפריסין',
    tagline: 'איים, שמש, מים כחולים ואוכל ים תיכוני',
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=900&q=80&auto=format&fit=crop',
    description:
      'סנטוריני, מיקונוס, כרתים, רודוס ועוד עשרות איים. כל אחד עם האופי הייחודי שלו. ואם בא לכם קצת יותר שקט, קפריסין היא פנינה שלא כולם מכירים.',
    waText: 'היי רויטל, אשמח לשמוע על חופשה ביוון או קפריסין',
  },
]

export default function Destinations() {
  const [selected, setSelected] = useState<(typeof destinations)[0] | null>(null)

  return (
    <section id="destinations" className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-coral-500 font-body font-semibold text-sm uppercase tracking-widest mb-3">
            יעדים מובילים
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-ocean-900 mb-4">
            לאן נטוס?
          </h2>
          <p className="font-body text-sand-700 text-lg max-w-xl mx-auto leading-relaxed">
            כל אחד מהיעדים האלה אני מכירה מבפנים. לחצו על יעד שמעניין אתכם.
          </p>
        </motion.div>

        {/* Destination cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {destinations.map((dest, i) => (
            <motion.button
              key={dest.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              onClick={() => setSelected(dest)}
              className="group relative rounded-2xl overflow-hidden cursor-pointer text-start shadow-md hover:shadow-xl transition-shadow duration-300 aspect-[4/3] focus:outline-none focus:ring-2 focus:ring-ocean-400"
              aria-label={`פרטים על ${dest.name}`}
            >
              <img
                src={dest.image}
                alt={dest.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-950/80 via-ocean-950/20 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-5">
                <div className="flex items-center gap-2 mb-1">
                  <MapPin className="h-4 w-4 text-gold-300" />
                  <span className="text-gold-300 text-xs font-body font-medium">{dest.tagline}</span>
                </div>
                <h3 className="font-heading text-2xl font-bold text-white">{dest.name}</h3>
                <span className="mt-2 inline-block text-xs text-white/70 font-body group-hover:text-white/100 transition-colors">
                  לחצו לפרטים
                </span>
              </div>
            </motion.button>
          ))}
        </div>

        {/* More destinations */}
        <div
          className="mt-10 p-8 rounded-2xl border border-slate-200 text-right"
          style={{ background: 'linear-gradient(135deg, #f0f9ff 0%, #f0fdf4 100%)' }}
          dir="rtl"
        >
          <h3 className="text-xl font-heading font-bold text-ocean-900 text-center mb-2">
            טסים גם לכל יעד אחר בעולם!
          </h3>
          <p className="text-sand-600 text-center mb-6 text-sm font-body">
            בין היתר:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              { name: 'מקסיקו', desc: 'חופים קריביים, תרבות מאיה ואוכל מדהים', img: 'https://images.unsplash.com/photo-1518638150340-f706e86654de?w=400&q=80' },
              { name: 'סיישל', desc: 'גן עדן טרופי עם חופים לבנים ואלמוגים', img: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=400&q=80' },
              { name: 'זנזיבר', desc: 'איים אפריקאים עם מים טורקיז ותרבות עשירה', img: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=400&q=80' },
              { name: 'פיליפינים', desc: 'אלפי איים, צלילה מדהימה וחופים בתולים', img: 'https://images.unsplash.com/photo-1551244072-5d12893278bc?w=400&q=80' },
              { name: 'ויאטנם', desc: 'נופים ירוקים, אוכל מצוין ותרבות מרתקת', img: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=400&q=80' },
              { name: "באקו, אזרבייג'ן", desc: 'עיר מודרנית עם היסטוריה עשירה', img: 'https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?w=400&q=80' },
              { name: 'בולגריה', desc: 'חופי הים השחור, הרים ומחירים נוחים', img: 'https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=400&q=80' },
              { name: 'בלגרד, סרביה', desc: 'עיר תוססת עם חיי לילה ואוכל מעולה', img: 'https://images.unsplash.com/photo-1566233191408-27e5b1999a01?w=400&q=80' },
              { name: 'בודווה, מונטנגרו', desc: 'עיר עתיקה על חוף הים האדריאטי', img: 'https://images.unsplash.com/photo-1555990793-da11153b2473?w=400&q=80' },
            ].map((dest) => (
              <div
                key={dest.name}
                className="relative rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-default aspect-[4/3] group"
              >
                <img
                  src={dest.img}
                  alt={dest.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 right-0 left-0 p-3 text-right">
                  <div className="font-heading font-bold text-white text-sm drop-shadow">{dest.name}</div>
                  <div className="font-body text-xs text-white/80 leading-relaxed mt-0.5">{dest.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <a
              href="https://wa.me/972527097160"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#25D366] hover:bg-[#1ebe5d] text-white font-body font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 text-sm"
            >
              📲 שלחו לי הודעה לכל יעד שחולמים עליו
            </a>
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-ocean-950/70 backdrop-blur-sm"
              onClick={() => setSelected(null)}
            />
            <motion.div
              key="modal"
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-x-4 top-[10%] md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-50 w-auto md:w-full md:max-w-lg rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="relative h-52 md:h-64">
                <img
                  src={selected.image}
                  alt={selected.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-950/70 to-transparent" />
                <button
                  onClick={() => setSelected(null)}
                  aria-label="סגור"
                  className="absolute top-3 start-3 p-2 rounded-full bg-ocean-950/50 text-white hover:bg-ocean-950/80 transition-colors cursor-pointer"
                >
                  <X className="h-5 w-5" />
                </button>
                <h3 className="absolute bottom-4 end-4 font-heading text-3xl font-bold text-white">
                  {selected.name}
                </h3>
              </div>
              <div className="bg-white p-6">
                <p className="text-sand-600 text-xs font-body font-medium uppercase tracking-wide mb-2">
                  {selected.tagline}
                </p>
                <p className="font-body text-sand-800 leading-relaxed mb-6">
                  {selected.description}
                </p>
                <Button
                  variant="whatsapp"
                  size="lg"
                  className="w-full gap-2"
                  asChild
                >
                  <a
                    href={`${WA_BASE}${encodeURIComponent(selected.waText)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-5 w-5" />
                    דברו איתי על {selected.name}
                  </a>
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}
