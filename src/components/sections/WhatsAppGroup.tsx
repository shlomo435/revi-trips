import { motion } from 'framer-motion'
import { MessageCircle, Bell, VolumeX, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'

const GROUP_LINK = 'https://chat.whatsapp.com/ERtrpxgQ8vv29SQ8cuiO5C'

const perks = [
  { icon: Bell, text: 'הנחות ודילים לפני כולם' },
  { icon: VolumeX, text: 'קבוצה שקטה, רק עדכוני דילים' },
  { icon: Users, text: 'אלפי נוסעים כבר בפנים' },
  { icon: MessageCircle, text: 'מחירים שלא תמצאו בשום מקום אחר' },
]

export default function WhatsAppGroup() {
  return (
    <section id="deals" className="py-20 md:py-28 bg-[#075e54] overflow-hidden relative">
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-4xl mx-auto px-4 relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
        >
          {/* WhatsApp icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/15 mb-6">
            <MessageCircle className="h-10 w-10 text-white" />
          </div>

          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            הצטרפו לקבוצת הדילים
          </h2>
          <p className="font-body text-white/85 text-lg max-w-xl mx-auto leading-relaxed mb-8">
            הכירו את הקבוצה השקטה שבה אלפי אנשים מקבלים דילים מוכנים
            במחירים שלא תמצאו בשום מקום אחר. קבוצה שקטה לחלוטין, רק
            עדכוני דילים בלי רעש.
          </p>

          {/* Perks */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {perks.map(({ icon: Icon, text }) => (
              <div key={text} className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-white/10">
                <Icon className="h-6 w-6 text-white/80" />
                <span className="font-body text-sm text-white/90 leading-snug">{text}</span>
              </div>
            ))}
          </div>

          <Button
            variant="white"
            size="xl"
            asChild
            className="gap-3 font-semibold text-[#075e54] hover:text-[#075e54] shadow-2xl"
          >
            <a href={GROUP_LINK} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-6 w-6" />
              הצטרפו לקבוצה עכשיו
            </a>
          </Button>

          <p className="mt-4 font-body text-white/50 text-sm">
            בחינם לגמרי. אפשר לצאת מתי שרוצים.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
