import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { MessageCircle, X } from 'lucide-react'

const WA_LINK =
  'https://wa.me/972527097160?text=%D7%94%D7%99%D7%99%20%D7%A8%D7%95%D7%99%D7%98%D7%9C%2C%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A9%D7%9E%D7%95%D7%A2%20%D7%A2%D7%9C%20%D7%97%D7%95%D7%A4%D7%A9%D7%94'

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false)
  const [tooltip, setTooltip] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true)
      setTooltip(true)
      setTimeout(() => setTooltip(false), 5000)
    }, 2500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <div className="fixed bottom-6 end-6 z-50 flex flex-col items-end gap-3">
          {/* Tooltip */}
          <AnimatePresence>
            {tooltip && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="bg-white rounded-2xl shadow-xl px-4 py-3 max-w-[200px] border border-sand-200 relative"
              >
                <button
                  onClick={() => setTooltip(false)}
                  aria-label="סגור"
                  className="absolute top-1.5 start-1.5 text-sand-400 hover:text-sand-600 cursor-pointer"
                >
                  <X className="h-3 w-3" />
                </button>
                <p className="font-body text-xs text-sand-800 leading-snug pe-2">
                  שלחו הודעה ואני אחזור אליכם במהרה
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Button */}
          <motion.a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="פנו אליי בוואטסאפ"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-16 h-16 rounded-full bg-[#25D366] flex items-center justify-center shadow-2xl shadow-green-900/40 hover:bg-[#20bc5a] transition-colors"
          >
            <MessageCircle className="h-8 w-8 text-white" />
          </motion.a>
        </div>
      )}
    </AnimatePresence>
  )
}
