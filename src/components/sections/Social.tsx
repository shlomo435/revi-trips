import { motion } from 'framer-motion'
import { InstagramIcon, FacebookIcon } from '@/components/icons/SocialIcons'
import type { SVGProps, ReactElement } from 'react'

type SvgIcon = (props: SVGProps<SVGSVGElement>) => ReactElement

const socials: { name: string; handle: string; href: string; Icon: SvgIcon; bg: string; desc: string }[] = [
  {
    name: 'אינסטגרם',
    handle: '@revital_israel11',
    href: 'https://www.instagram.com/revital_israel11',
    Icon: InstagramIcon,
    bg: 'bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400',
    desc: 'תמונות ווידאו מהיעדים, טיפים ותכנים מעשירים',
  },
  {
    name: 'פייסבוק',
    handle: 'רויטל ישראל',
    href: 'https://www.facebook.com/share/18VcsuPyTX/',
    Icon: FacebookIcon,
    bg: 'bg-[#1877F2]',
    desc: 'עדכונים, דילים ועוד סיפורי נסיעה של לקוחות',
  },
]

export default function Social() {
  return (
    <section id="social" className="py-20 md:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-coral-500 font-body font-semibold text-sm uppercase tracking-widest mb-3">
            עקבו אחריי
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-ocean-900 mb-4">
            בואו להכיר אותי מקרוב
          </h2>
          <p className="font-body text-sand-700 text-lg max-w-xl mx-auto leading-relaxed mb-12">
            ברשתות תמצאו חופשות אמיתיות של לקוחות, טיפים חינמיים ותמונות
            שיגרמו לכם לרצות להזמין כרטיס טיסה עכשיו.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            {socials.map(({ name, handle, href, Icon, bg, desc }) => (
              <motion.a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="flex items-center gap-4 p-5 rounded-2xl bg-sand-50 border border-sand-200 hover:shadow-lg transition-shadow w-full sm:w-auto sm:min-w-[280px] text-start"
              >
                <div className={`flex-shrink-0 w-14 h-14 rounded-2xl ${bg} flex items-center justify-center shadow-md`}>
                  <Icon className="h-7 w-7 text-white" />
                </div>
                <div>
                  <p className="font-heading font-bold text-ocean-900 text-lg">{name}</p>
                  <p className="font-body text-coral-500 font-medium text-sm">{handle}</p>
                  <p className="font-body text-sand-600 text-xs mt-1 leading-snug">{desc}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
