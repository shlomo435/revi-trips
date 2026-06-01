import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { ChevronRight, ChevronLeft, Star, Plus, X, ImageIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface Testimonial {
  id: string
  name: string
  dest: string
  text: string
  image?: string
  stars: number
}

const initialTestimonials: Testimonial[] = [
  {
    id: '1',
    name: 'יעל ואבי כהן',
    dest: 'תאילנד, 2024',
    text: 'רויטל ארגנה לנו חופשה מהחלומות בתאילנד. כל פרט היה מדויק, הנהג היה מקסים, והמלון היה בדיוק מה שביקשנו. היא ענתה לכל הודעה תוך דקות גם כשהיינו שם.',
    stars: 5,
  },
  {
    id: '2',
    name: 'שרה לוי',
    dest: 'גאורגיה, 2024',
    text: 'לא ציפיתי שגאורגיה תשבי אותי כל כך. רויטל ידעה בדיוק לאן לשלוח אותנו, ואנחנו גילינו מקומות שלא היינו מוצאים לבד בחיים. תודה ענקית.',
    stars: 5,
  },
  {
    id: '3',
    name: 'דני ומיכל פרידמן',
    dest: 'בודפשט, 2023',
    text: 'הייתה זאת הפעם הראשונה שהשתמשנו בסוכנות נסיעות ולא חזרה אחורה. רויטל חסכה לנו כסף ועצבים. הכל היה מסודר מהרגע הראשון.',
    stars: 5,
  },
  {
    id: '4',
    name: 'נועה ברקוביץ',
    dest: 'מונטנגרו, 2024',
    text: 'חופשה בסגנון שרק רויטל מבינה לבנות. המסלול היה מגוון, לא קלישאתי, ובדיוק בקצב שביקשנו. גם המחיר הגיוני מאוד ביחס למה שקיבלנו.',
    stars: 5,
  },
]

export default function Testimonials() {
  const [items, setItems] = useState<Testimonial[]>(initialTestimonials)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showAdd, setShowAdd] = useState(false)
  const [newName, setNewName] = useState('')
  const [newDest, setNewDest] = useState('')
  const [newText, setNewText] = useState('')
  const [newImage, setNewImage] = useState<string | undefined>()
  const fileRef = useRef<HTMLInputElement>(null)

  const total = items.length
  const prev = () => setCurrentIndex((c) => (c - 1 + total) % total)
  const next = () => setCurrentIndex((c) => (c + 1) % total)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = (ev) => setNewImage(ev.target?.result as string)
    reader.readAsDataURL(file)
  }

  const handleAdd = () => {
    if (!newName.trim() || !newText.trim()) return
    const item: Testimonial = {
      id: Date.now().toString(),
      name: newName.trim(),
      dest: newDest.trim() || 'לקוח מרוצה',
      text: newText.trim(),
      image: newImage,
      stars: 5,
    }
    setItems((prev) => [item, ...prev])
    setCurrentIndex(0)
    setNewName('')
    setNewDest('')
    setNewText('')
    setNewImage(undefined)
    setShowAdd(false)
  }

  const current = items[currentIndex]

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-sand-50 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-coral-500 font-body font-semibold text-sm uppercase tracking-widest mb-3">
            מה אומרים לקוחות
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-ocean-900 mb-4">
            הם כבר חזרו מחוייכים
          </h2>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 min-h-[240px]">
            {/* Stars */}
            <div className="flex gap-1 mb-5">
              {Array.from({ length: current.stars }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-gold-400 text-gold-400" />
              ))}
            </div>

            {/* Screenshot image if provided */}
            {current.image && (
              <div className="mb-5 rounded-xl overflow-hidden max-h-64 flex items-start">
                <img src={current.image} alt="המלצת לקוח" className="max-h-64 rounded-xl object-contain" />
              </div>
            )}

            <p className="font-body text-sand-800 text-lg leading-relaxed mb-6 italic">
              "{current.text}"
            </p>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-heading font-bold text-ocean-900">{current.name}</p>
                <p className="font-body text-sand-500 text-sm">{current.dest}</p>
              </div>

              {/* Nav */}
              <div className="flex gap-2">
                <button
                  onClick={next}
                  aria-label="המלצה הבאה"
                  className="w-10 h-10 rounded-full border border-sand-300 flex items-center justify-center text-sand-600 hover:bg-ocean-50 hover:border-ocean-300 hover:text-ocean-700 transition-colors cursor-pointer"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
                <button
                  onClick={prev}
                  aria-label="המלצה קודמת"
                  className="w-10 h-10 rounded-full border border-sand-300 flex items-center justify-center text-sand-600 hover:bg-ocean-50 hover:border-ocean-300 hover:text-ocean-700 transition-colors cursor-pointer"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-5">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                aria-label={`עבור להמלצה ${i + 1}`}
                className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                  i === currentIndex ? 'bg-ocean-700 scale-125' : 'bg-sand-300 hover:bg-sand-400'
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Add testimonial button */}
        <div className="mt-8 text-center">
          <button
            onClick={() => setShowAdd(true)}
            className="inline-flex items-center gap-2 text-ocean-700 hover:text-ocean-900 font-body text-sm font-medium transition-colors cursor-pointer"
          >
            <Plus className="h-4 w-4" />
            הוספת המלצה חדשה
          </button>
        </div>

        {/* Add testimonial form */}
        {showAdd && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 bg-white rounded-2xl shadow-lg p-6 border border-sand-200 relative"
          >
            <button
              onClick={() => setShowAdd(false)}
              aria-label="סגור"
              className="absolute top-4 start-4 text-sand-400 hover:text-sand-700 cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>
            <h3 className="font-heading text-xl font-bold text-ocean-900 mb-5 text-center">
              הוספת המלצה
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block font-body text-sm text-sand-700 mb-1">שם</label>
                <input
                  type="text"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  placeholder="ישראל ישראלי"
                  className="w-full rounded-xl border border-sand-300 px-4 py-2.5 font-body text-sand-900 placeholder-sand-400 focus:outline-none focus:ring-2 focus:ring-ocean-400 text-sm"
                />
              </div>
              <div>
                <label className="block font-body text-sm text-sand-700 mb-1">יעד ושנה</label>
                <input
                  type="text"
                  value={newDest}
                  onChange={(e) => setNewDest(e.target.value)}
                  placeholder="תאילנד, 2025"
                  className="w-full rounded-xl border border-sand-300 px-4 py-2.5 font-body text-sand-900 placeholder-sand-400 focus:outline-none focus:ring-2 focus:ring-ocean-400 text-sm"
                />
              </div>
              <div>
                <label className="block font-body text-sm text-sand-700 mb-1">טקסט ההמלצה</label>
                <textarea
                  value={newText}
                  onChange={(e) => setNewText(e.target.value)}
                  placeholder="כתבו כאן את ההמלצה..."
                  rows={3}
                  className="w-full rounded-xl border border-sand-300 px-4 py-2.5 font-body text-sand-900 placeholder-sand-400 focus:outline-none focus:ring-2 focus:ring-ocean-400 text-sm resize-none"
                />
              </div>
              <div>
                <label className="block font-body text-sm text-sand-700 mb-1">
                  צילום מסך של ההמלצה (אופציונלי)
                </label>
                <input
                  ref={fileRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <button
                  onClick={() => fileRef.current?.click()}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-dashed border-sand-400 text-sand-600 hover:border-ocean-400 hover:text-ocean-700 font-body text-sm transition-colors cursor-pointer"
                >
                  <ImageIcon className="h-4 w-4" />
                  {newImage ? 'שנה תמונה' : 'בחר תמונה'}
                </button>
                {newImage && (
                  <img src={newImage} alt="תצוגה מקדימה" className="mt-3 max-h-40 rounded-lg object-contain" />
                )}
              </div>
            </div>
            <div className="mt-5 flex gap-3 justify-end">
              <Button variant="ghost" size="sm" onClick={() => setShowAdd(false)}>
                ביטול
              </Button>
              <Button
                variant="ocean"
                size="sm"
                onClick={handleAdd}
                disabled={!newName.trim() || !newText.trim()}
              >
                הוסף המלצה
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
