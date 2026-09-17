import { Badge } from './Badge'
import { cn } from '@/utils/cn'

export const SectionHeader = ({
  badgeText,
  title,
  subtitle,
  align = 'center',
  className = '',
}) => {
  const alignment = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  }

  return (
    <div className={cn('flex flex-col mb-14 md:mb-18 max-w-2xl mx-auto', alignment[align], className)}>
      {badgeText && (
        <Badge variant="primary" size="md" className="mb-4 tracking-wider uppercase font-semibold">
          {badgeText}
        </Badge>
      )}
      <h2 className="text-3xl md:text-5xl font-black tracking-tight text-zinc-900 dark:text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-zinc-600 dark:text-zinc-400 text-base md:text-lg leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </div>
  )
}

export default SectionHeader
