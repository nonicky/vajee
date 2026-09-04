import { AlertCircle, CheckCircle2, Info, Target } from 'lucide-react'
import type { MagicWord, Situation } from '../types'
import { MagicWordCard } from './MagicWordCard'
import { NextBestAction } from './NextBestAction'
import { Badge } from './ui/Badge'
import { getRecommendedActions } from '../utils/recommendation'

interface Props {
  situation: Situation
  magicWords: MagicWord[]
  onSelectWord: (magicWord: MagicWord) => void
}

export function SituationCard({ situation, magicWords, onSelectWord }: Props) {
  const variants = ['original', '1', '2', '3', 'revise'] as const
  const variantLabels: Record<string, string> = {
    original: 'Original (ประโยคหลัก)',
    '1': 'แบบที่ 1 (ประโยคปิดยอด)',
    '2': 'แบบที่ 2 (กระชับ)',
    '3': 'แบบที่ 3 (เน้นปิดเร็ว)',
    revise: 'Revise 2026',
  }
  const grouped = variants
    .map((variant) => ({ variant, words: magicWords.filter((word) => word.variant === variant) }))
    .filter((group) => group.words.length > 0)
  const tips = [...new Set(magicWords.flatMap((word) => word.tips ?? []))]
  const avoid = [...new Set(magicWords.flatMap((word) => word.avoid ?? []))]
  const goal = magicWords.find((word) => word.goal)?.goal

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <Badge tone={situation.buck.includes('1-30') ? 'info' : 'warning'}>{situation.buck}</Badge>
          <Badge tone="default">{situation.occupation}</Badge>
          <Badge tone="default">{magicWords.length} Magic Words</Badge>
        </div>

        <h2 className="text-xl font-bold text-slate-900">{situation.name}</h2>

        {goal && (
          <div className="mt-4 flex gap-3 rounded-lg bg-blue-50 p-4">
            <Target className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-blue-700">Conversation Goal</div>
              <p className="mt-1 text-sm leading-relaxed text-blue-900">{goal}</p>
            </div>
          </div>
        )}

        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
          <div className="rounded-lg bg-slate-50 p-3">
            <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">Buck</div>
            <div className="mt-1 text-sm font-medium text-slate-900">{situation.buck}</div>
          </div>
          <div className="rounded-lg bg-slate-50 p-3">
            <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">Occupation</div>
            <div className="mt-1 text-sm font-medium text-slate-900">{situation.occupation}</div>
          </div>
          <div className="rounded-lg bg-slate-50 p-3">
            <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">Variants</div>
            <div className="mt-1 text-sm font-medium text-slate-900">{grouped.length} แบบ</div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-100 text-amber-700">✨</div>
          <h3 className="text-lg font-bold text-slate-900">Magic Word</h3>
          <span className="text-sm text-slate-500">({magicWords.length} ตัวเลือก)</span>
        </div>

        {grouped.map((group) => (
          <div key={group.variant}>
            <p className="mb-2 text-sm font-semibold text-slate-600">{variantLabels[group.variant]}</p>
            <MagicWordCard word={group.words[0]} onSelect={() => onSelectWord(group.words[0])} />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <AdviceList icon={<CheckCircle2 className="h-5 w-5 text-emerald-600" />} title="✅ ควรพูด / เทคนิค" items={tips} tone="emerald" empty="ยังไม่มีคำแนะนำสำหรับสถานการณ์นี้" />
        <AdviceList icon={<AlertCircle className="h-5 w-5 text-rose-600" />} title="⚠️ ควรหลีกเลี่ยง" items={avoid} tone="rose" empty="ยังไม่มีคำแนะนำสำหรับสถานการณ์นี้" />
      </div>

      <NextBestAction recommendations={getRecommendedActions([situation])} />

      <div className="flex items-center gap-2 rounded-lg bg-slate-50 p-3 text-xs text-slate-500">
        <Info className="h-3.5 w-3.5" />
        <span>Source: NPP Magic Word.xlsx · Sheet: MagicWord, Magicword_Choice</span>
      </div>
    </div>
  )
}

interface AdviceListProps {
  icon: React.ReactNode
  title: string
  items: string[]
  tone: 'emerald' | 'rose'
  empty: string
}

function AdviceList({ icon, title, items, tone, empty }: AdviceListProps) {
  return (
    <div className={`rounded-2xl border p-5 ${tone === 'emerald' ? 'border-emerald-200 bg-emerald-50/50' : 'border-rose-200 bg-rose-50/50'}`}>
      <div className="mb-3 flex items-center gap-2">{icon}<h4 className={`font-bold ${tone === 'emerald' ? 'text-emerald-900' : 'text-rose-900'}`}>{title}</h4></div>
      {items.length > 0 ? <ul className="space-y-2">{items.map((item) => <li key={item} className={`flex gap-2 text-sm ${tone === 'emerald' ? 'text-emerald-900' : 'text-rose-900'}`}><span className={`mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full ${tone === 'emerald' ? 'bg-emerald-500' : 'bg-rose-500'}`} /><span>{item}</span></li>)}</ul> : <p className={`text-sm italic ${tone === 'emerald' ? 'text-emerald-700/70' : 'text-rose-700/70'}`}>{empty}</p>}
    </div>
  )
}
