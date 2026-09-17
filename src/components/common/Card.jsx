import { motion } from 'framer-motion'
import { cn } from '@/utils/cn'

export const Card = ({
  children,
  className = '',
  hoverEffect = true,
  glow = false,
  ...props
}) => {
  return (
    <motion.div
      whileHover={hoverEffect ? { y: -4, transition: { duration: 0.25 } } : {}}
      className={cn(
        'bg-white dark:bg-zinc-950/80 rounded-2xl p-6 border border-zinc-200/90 dark:border-zinc-800/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)] transition-all duration-300 relative overflow-hidden',
        hoverEffect && 'hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)] dark:hover:shadow-[0_12px_32px_rgba(0,0,0,0.6)]',
        glow && 'before:absolute before:inset-0 before:bg-gradient-to-br before:from-rose-500/5 before:to-amber-500/0 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:pointer-events-none',
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default Card
