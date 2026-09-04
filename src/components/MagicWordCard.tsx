import { Check, Copy, Heart, Share2, Sparkles, ThumbsDown, ThumbsUp } from 'lucide-react'
import { useEffect, useState } from 'react'
import type { MagicWord } from '../types'
import { Badge } from './ui/Badge'
import { storage } from '../utils/storage'
import { toast } from './ui/Toast'

interface MagicWordCardProps {
  word: MagicWord
  onSelect?: () => void
}

export function MagicWordCard({ word, onSelect }: MagicWordCardProps) {
  const [copied, setCopied] = useState(false)
  const [selected, setSelected] = useState(false)
  const [favorite, setFavorite] = useState(false)
  const [feedback, setFeedback] = useState<'helpful' | 'not_helpful' | null>(null)

  useEffect(() => setFavorite(storage.isFavorite(word.id)), [word.id])

  const stop = (event: React.MouseEvent) => event.stopPropagation()
  const handleCopy = async (event: React.MouseEvent) => {
    stop(event)
    try {
      await navigator.clipboard.writeText(word.text)
      setCopied(true)
      toast.success('คัดลอกแล้ว', 'Magic Word ถูกคัดลอกแล้ว')
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      toast.error('คัดลอกไม่สำเร็จ', 'กรุณาลองใหม่อีกครั้ง')
    }
  }
  const handleSelect = (event: React.MouseEvent) => {
    stop(event)
    setSelected(true)
    onSelect?.()
    storage.addUsageEvent({ id: `usage-${Date.now()}`, magicWordId: word.id, situationId: word.situationId, situationName: word.situation, buck: word.buck, occupation: word.occupation, variant: word.variant, timestamp: new Date().toISOString() })
    toast.success('บันทึกการเลือกแล้ว', word.situation)
  }
  const handleFavorite = (event: React.MouseEvent) => {
    stop(event)
    if (favorite) storage.removeFavorite(word.id)
    else storage.addFavorite(word.id)
    setFavorite(!favorite)
    toast.info(favorite ? 'ลบออกจากรายการโปรดแล้ว' : 'เพิ่มในรายการโปรดแล้ว')
  }
  const handleShare = async (event: React.MouseEvent) => {
    stop(event)
    const text = `${word.situation}\n\n"${word.text}"\n\nBuck: ${word.buck}\nอาชีพ: ${word.occupation}`
    const shareApi = navigator as Navigator & { share?: (data: ShareData) => Promise<void> }
    try {
      if (typeof shareApi.share === 'function') await shareApi.share({ title: 'Vajee Magic Word', text })
      else await navigator.clipboard.writeText(text)
      toast.success(typeof shareApi.share === 'function' ? 'แชร์สำเร็จ' : 'คัดลอกข้อความสำหรับแชร์แล้ว')
    } catch { toast.error('แชร์ไม่สำเร็จ') }
  }
  const handleFeedback = (next: 'helpful' | 'not_helpful', event: React.MouseEvent) => {
    stop(event)
    setFeedback(next)
    const lastEvent = [...storage.getUsageEvents()].reverse().find((item) => item.magicWordId === word.id)
    if (lastEvent) storage.updateFeedback(lastEvent.id, next)
    toast.info(next === 'helpful' ? 'ขอบคุณสำหรับความคิดเห็น' : 'เราจะนำไปปรับปรุง')
  }

  return (
    <article
      className={`rounded-2xl border bg-white p-5 shadow-sm ${selected ? 'border-blue-500 ring-2 ring-blue-100' : 'border-slate-200'}`}
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
        <div className="flex items-center gap-1">
          <Badge tone="info">{word.variant}</Badge>
          <button onClick={handleFavorite} aria-label="เพิ่มหรือลบรายการโปรด" className={`rounded-lg p-2 ${favorite ? 'text-rose-500' : 'text-slate-400'}`}><Heart className="h-4 w-4" fill={favorite ? 'currentColor' : 'none'} /></button>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-slate-900">“{word.text}”</h3>
      <p className="mt-2 text-sm text-slate-600">{word.goal}</p>

      <div className="mt-4 rounded-xl bg-slate-50 p-3 text-xs text-slate-600">
        <p className="font-medium text-slate-700">เหมาะสำหรับ:</p>
        <p className="mt-1">{word.buck} · {word.occupation}</p>
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-2">
        <button onClick={handleSelect} className="rounded-lg bg-blue-600 px-3 py-2 text-sm font-semibold text-white">{selected ? 'เลือกแล้ว' : 'เลือกใช้'}</button>
        <button onClick={handleCopy} className="inline-flex items-center gap-1 rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700">{copied ? <Check className="h-4 w-4 text-emerald-600" /> : <Copy className="h-4 w-4" />} {copied ? 'คัดลอกแล้ว' : 'คัดลอก'}</button>
        <button onClick={handleShare} aria-label="แชร์" className="rounded-lg border border-slate-200 p-2 text-slate-600"><Share2 className="h-4 w-4" /></button>
        <button onClick={(event) => handleFeedback('helpful', event)} aria-label="มีประโยชน์" className={`rounded-lg p-2 ${feedback === 'helpful' ? 'bg-emerald-100 text-emerald-700' : 'text-slate-400'}`}><ThumbsUp className="h-4 w-4" /></button>
        <button onClick={(event) => handleFeedback('not_helpful', event)} aria-label="ไม่ตรงสถานการณ์" className={`rounded-lg p-2 ${feedback === 'not_helpful' ? 'bg-rose-100 text-rose-700' : 'text-slate-400'}`}><ThumbsDown className="h-4 w-4" /></button>
      </div>
    </article>
  )
}
