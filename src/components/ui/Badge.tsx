import type { ReactNode } from 'react'
import { cn } from '../../lib/utils'

interface BadgeProps {
  children: ReactNode
  tone?: 'default' | 'success' | 'warning' | 'info'
  className?: string
}

export function Badge({ children, tone = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium',
        tone === 'success' && 'border-emerald-200 bg-emerald-50 text-emerald-700',
        tone === 'warning' && 'border-amber-200 bg-amber-50 text-amber-700',
        tone === 'info' && 'border-sky-200 bg-sky-50 text-sky-700',
        tone === 'default' && 'border-slate-200 bg-slate-100 text-slate-700',
        className,
      )}
    >
      {children}
    </span>
  )
}
