import { motion } from 'framer-motion'
import { Plane, MapPin, Car, Phone, BadgeDollarSign, Star } from 'lucide-react'

const services = [
  {
    icon: Plane,
    title: 'טיסה ומלון בהתאמה אישית',
    desc: 'אני בוחרת את הטיסות והמלונות שמתאימים בדיוק לכם, לתקציב שלכם ולסגנון הנסיעה שאתם אוהבים.',
    color: 'bg-ocean-100',
    iconColor: 'text-ocean-700',
  },
  {
    icon: MapPin,
    title: 'מסלול אטרקציות מדויק',
    desc: 'לא רשימה גנרית מהאינטרנט. מסלול שבניתי בהתבסס על ביקורים אישיים ועל ההעדפות הספציפיות שלכם.',
    color: 'bg-teal-400/15',
    iconColor: 'text-teal-600',
  },
  {
    icon: Car,
    title: 'נהגים והסעות ביעד',
    desc: 'נהגים שאני מכירה ואני בוטחת בהם, שיסיעו אתכם בנוחות ובבטחה לכל מקום שתרצו.',
    color: 'bg-coral-300/20',
    iconColor: 'text-coral-600',
  },
  {
    icon: Phone,
    title: 'ליווי לאורך כל הטיול',
    desc: 'מהרגע שנחתתם ועד שחזרתם הביתה, אני זמינה בוואטסאפ לכל שאלה ולכל עניין שצץ.',
    color: 'bg-gold-100',
    iconColor: 'text-gold-600',
  },
  {
    icon: BadgeDollarSign,
    title: 'מחירים טובים',
    desc: 'בזכות היכרות עמוקה עם היעדים ועם הספקים, אני יודעת מתי להזמין ואיפה לחסוך בלי לוותר על איכות.',
    color: 'bg-ocean-50',
    iconColor: 'text-ocean-600',
  },
  {
    icon: Star,
    title: 'זמינות מלאה',
    desc: 'מהרגע שרוצים לטוס, דרך ההזמנה, ועד שחוזרים הביתה בשלום. אני כאן בכל שלב.',
    color: 'bg-sand-100',
    iconColor: 'text-sand-700',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-sand-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-coral-500 font-body font-semibold text-sm uppercase tracking-widest mb-3">
            מה מקבלים אצלי
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-ocean-900 mb-4">
            מעטפת שלמה לכל חופשה
          </h2>
          <p className="font-body text-sand-700 text-lg max-w-xl mx-auto leading-relaxed">
            אצלי אין חצי שירות. כל חופשה מלווה מא ועד ת, כדי שתגיעו לנופש
            ולא לעניין אחר.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map(({ icon: Icon, title, desc, color, iconColor }) => (
            <motion.div
              key={title}
              variants={cardVariants}
              className="bg-white rounded-2xl p-6 shadow-sm border border-sand-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              <div
                className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${color} mb-5`}
              >
                <Icon className={`h-6 w-6 ${iconColor}`} />
              </div>
              <h3 className="font-heading text-xl font-bold text-ocean-900 mb-3">{title}</h3>
              <p className="font-body text-sand-700 leading-relaxed text-sm">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
