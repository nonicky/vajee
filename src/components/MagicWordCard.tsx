import { Sparkles } from 'lucide-react'
import type { MagicWord } from '../types'
import { Badge } from './ui/Badge'

interface MagicWordCardProps {
  word: MagicWord
  onSelect?: () => void
}

export function MagicWordCard({ word, onSelect }: MagicWordCardProps) {
  return (
    <article
      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
      onClick={onSelect}
      role={onSelect ? 'button' : undefined}
      tabIndex={onSelect ? 0 : undefined}
      onKeyDown={onSelect ? (event) => event.key === 'Enter' && onSelect() : undefined}
    >
      <div className="mb-3 flex items-center justify-between gap-3">
        <span className="inline-flex items-center gap-2 rounded-full bg-violet-50 px-2.5 py-1 text-xs font-medium text-violet-700">
          <Sparkles className="h-3.5 w-3.5" />
          {word.situation}
        </span>
        <Badge tone="info">{word.variant}</Badge>
      </div>

      <h3 className="text-xl font-semibold text-slate-900">“{word.text}”</h3>
      <p className="mt-2 text-sm text-slate-600">{word.goal}</p>

      <div className="mt-4 rounded-xl bg-slate-50 p-3 text-xs text-slate-600">
        <p className="font-medium text-slate-700">เหมาะสำหรับ:</p>
        <p className="mt-1">{word.buck} · {word.occupation}</p>
      </div>
    </article>
  )
}
