import { cn } from '@/lib/utils'

export function SectionHeading({
  eyebrow,
  title,
  text,
  light = false,
  className,
}: {
  eyebrow: string
  title: string
  text?: string
  light?: boolean
  className?: string
}) {
  return (
    <div className={cn('max-w-2xl', className)}>
      <p className={cn('mb-4 text-xs font-semibold uppercase tracking-[0.3em]', light ? 'text-[#a8cc5c]' : 'text-wood')}>
        {eyebrow}
      </p>
      <h2
        className={cn(
          'text-balance font-serif text-4xl font-medium leading-tight md:text-5xl',
          light ? 'text-snow' : 'text-wood-dark',
        )}
      >
        {title}
      </h2>
      {text && (
        <p className={cn('mt-5 text-pretty text-lg leading-relaxed', light ? 'text-snow/80' : 'text-muted-foreground')}>
          {text}
        </p>
      )}
    </div>
  )
}
