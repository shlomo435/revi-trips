import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Accessibility,
  AArrowUp,
  AArrowDown,
  Contrast,
  Link,
  AlignJustify,
  RotateCcw,
  X,
} from 'lucide-react'

type Settings = {
  fontSize: number   // 0 = normal, 1 = large, 2 = xl
  highContrast: boolean
  grayscale: boolean
  highlightLinks: boolean
  lineSpacing: boolean
}

const DEFAULT: Settings = {
  fontSize: 0,
  highContrast: false,
  grayscale: false,
  highlightLinks: false,
  lineSpacing: false,
}

const STORAGE_KEY = 'revi-a11y'

function applyToDOM(s: Settings) {
  const cl = document.documentElement.classList
  cl.remove('a11y-font-lg', 'a11y-font-xl')
  if (s.fontSize === 1) cl.add('a11y-font-lg')
  if (s.fontSize === 2) cl.add('a11y-font-xl')
  cl.toggle('a11y-contrast', s.highContrast)
  cl.toggle('a11y-grayscale', s.grayscale)
  cl.toggle('a11y-links', s.highlightLinks)
  cl.toggle('a11y-spacing', s.lineSpacing)
}

export default function AccessibilityWidget() {
  const [open, setOpen] = useState(false)
  const [s, setS] = useState<Settings>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      return stored ? { ...DEFAULT, ...JSON.parse(stored) } : DEFAULT
    } catch {
      return DEFAULT
    }
  })

  useEffect(() => {
    applyToDOM(s)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(s))
  }, [s])

  const update = (patch: Partial<Settings>) =>
    setS((prev) => ({ ...prev, ...patch }))

  const reset = () => setS(DEFAULT)

  const isActive = (s: Settings) =>
    s.fontSize > 0 ||
    s.highContrast ||
    s.grayscale ||
    s.highlightLinks ||
    s.lineSpacing

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            transition={{ duration: 0.22 }}
            className="bg-white rounded-2xl shadow-2xl border border-sand-200 w-64 overflow-hidden"
            role="region"
            aria-label="הגדרות נגישות"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-ocean-900 text-white">
              <span className="font-heading font-bold text-base">נגישות</span>
              <button
                onClick={() => setOpen(false)}
                aria-label="סגור תפריט נגישות"
                className="p-1 rounded-full hover:bg-white/20 transition-colors cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="p-3 space-y-1.5 font-body text-sm">
              {/* Font size */}
              <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-sand-50">
                <span className="text-sand-800 font-medium">גודל טקסט</span>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => update({ fontSize: Math.max(0, s.fontSize - 1) })}
                    aria-label="הקטן טקסט"
                    disabled={s.fontSize === 0}
                    className="w-8 h-8 rounded-lg border border-sand-300 flex items-center justify-center text-sand-700 hover:bg-ocean-50 hover:border-ocean-400 disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
                  >
                    <AArrowDown className="h-4 w-4" />
                  </button>
                  <span className="w-5 text-center text-sand-600 font-semibold">
                    {s.fontSize === 0 ? 'רג' : s.fontSize === 1 ? '+' : '++'}
                  </span>
                  <button
                    onClick={() => update({ fontSize: Math.min(2, s.fontSize + 1) })}
                    aria-label="הגדל טקסט"
                    disabled={s.fontSize === 2}
                    className="w-8 h-8 rounded-lg border border-sand-300 flex items-center justify-center text-sand-700 hover:bg-ocean-50 hover:border-ocean-400 disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
                  >
                    <AArrowUp className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* High contrast */}
              <ToggleRow
                icon={<Contrast className="h-4 w-4" />}
                label="ניגודיות גבוהה"
                active={s.highContrast}
                onToggle={() => update({ highContrast: !s.highContrast })}
              />

              {/* Grayscale */}
              <ToggleRow
                icon={
                  <span className="h-4 w-4 inline-flex items-center justify-center text-[11px] font-bold leading-none">
                    GS
                  </span>
                }
                label="גווני אפור"
                active={s.grayscale}
                onToggle={() => update({ grayscale: !s.grayscale })}
              />

              {/* Highlight links */}
              <ToggleRow
                icon={<Link className="h-4 w-4" />}
                label="הדגשת קישורים"
                active={s.highlightLinks}
                onToggle={() => update({ highlightLinks: !s.highlightLinks })}
              />

              {/* Line spacing */}
              <ToggleRow
                icon={<AlignJustify className="h-4 w-4" />}
                label="ריווח מוגבר"
                active={s.lineSpacing}
                onToggle={() => update({ lineSpacing: !s.lineSpacing })}
              />

              {/* Reset */}
              {isActive(s) && (
                <button
                  onClick={reset}
                  className="w-full flex items-center justify-center gap-2 mt-1 px-3 py-2 rounded-xl text-coral-600 hover:bg-coral-300/15 font-medium transition-colors cursor-pointer text-sm"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                  איפוס הכל
                </button>
              )}
            </div>

            <div className="px-4 pb-3 text-center">
              <p className="text-[10px] text-sand-400">
                ההגדרות נשמרות אוטומטית
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <motion.button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? 'סגור הגדרות נגישות' : 'פתח הגדרות נגישות'}
        aria-expanded={open}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.93 }}
        className="relative w-14 h-14 rounded-full bg-ocean-800 text-white flex items-center justify-center shadow-xl hover:bg-ocean-700 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-ocean-400 focus:ring-offset-2"
      >
        <Accessibility className="h-6 w-6" />
        {isActive(s) && (
          <span className="absolute top-0.5 right-0.5 w-3.5 h-3.5 rounded-full bg-gold-400 border-2 border-white" />
        )}
      </motion.button>
    </div>
  )
}

function ToggleRow({
  icon,
  label,
  active,
  onToggle,
}: {
  icon: React.ReactNode
  label: string
  active: boolean
  onToggle: () => void
}) {
  return (
    <button
      onClick={onToggle}
      aria-pressed={active}
      className={`w-full flex items-center justify-between px-3 py-2 rounded-xl transition-all cursor-pointer ${
        active
          ? 'bg-ocean-100 border border-ocean-300 text-ocean-800'
          : 'bg-sand-50 text-sand-700 hover:bg-sand-100'
      }`}
    >
      <div className="flex items-center gap-2.5">
        <span className={active ? 'text-ocean-700' : 'text-sand-500'}>{icon}</span>
        <span className="font-medium">{label}</span>
      </div>
      <span
        className={`w-9 h-5 rounded-full relative transition-colors ${
          active ? 'bg-ocean-700' : 'bg-sand-300'
        }`}
      >
        <span
          className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-all ${
            active ? 'right-0.5' : 'left-0.5'
          }`}
        />
      </span>
    </button>
  )
}
