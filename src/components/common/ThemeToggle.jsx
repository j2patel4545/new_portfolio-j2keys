import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from '@/context/ThemeContext'

export const ThemeToggle = ({ className = '' }) => {
  const { isDark, toggleTheme } = useTheme()

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.92 }}
      className={`relative inline-flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-zinc-900/5 dark:bg-zinc-900/90 hover:bg-zinc-900/10 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-100 hover:text-rose-600 dark:hover:text-rose-400 border border-zinc-300/70 dark:border-zinc-800/90 transition-colors duration-200 cursor-pointer shadow-2xs focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500/50 ${className}`}
      aria-label={isDark ? 'Switch to day mode' : 'Switch to night mode'}
      title={isDark ? 'Switch to Day Mode' : 'Switch to Night Mode (Pure Black)'}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.span
            key="sun-icon"
            initial={{ rotate: -70, scale: 0.5, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: 70, scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="flex items-center justify-center text-amber-400"
          >
            <Sun className="w-4 h-4 sm:w-4.5 sm:h-4.5 transition-transform" />
          </motion.span>
        ) : (
          <motion.span
            key="moon-icon"
            initial={{ rotate: 70, scale: 0.5, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: -70, scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="flex items-center justify-center text-zinc-800"
          >
            <Moon className="w-4 h-4 sm:w-4.5 sm:h-4.5 transition-transform" />
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  )
}

export default ThemeToggle
