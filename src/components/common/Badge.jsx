import { cn } from '@/utils/cn'

export const Badge = ({
  children,
  variant = 'default',
  size = 'md',
  className = '',
  icon: Icon,
}) => {
  const baseStyles = 'inline-flex items-center font-medium rounded-full border transition-colors'

  const variants = {
    default: 'bg-zinc-100/90 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border-zinc-200/90 dark:border-zinc-800',
    primary: 'bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-400 border-rose-200 dark:border-rose-800/60',
    purple: 'bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-400 border-indigo-200 dark:border-indigo-800/60',
    emerald: 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800/60',
  }

  const sizes = {
    sm: 'text-[11px] px-2.5 py-0.5 gap-1',
    md: 'text-xs px-3 py-1 gap-1.5',
    lg: 'text-sm px-4 py-1.5 gap-2',
  }

  return (
    <span className={cn(baseStyles, variants[variant], sizes[size], className)}>
      {Icon && <Icon className="w-3.5 h-3.5" />}
      {children}
    </span>
  )
}

export default Badge
