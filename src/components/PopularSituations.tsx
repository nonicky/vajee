import { TrendingUp } from 'lucide-react'
import type { Situation } from '../types'

interface PopularSituationsProps {
  situations: Situation[]
}

export function PopularSituations({ situations }: PopularSituationsProps) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-slate-900">สถานการณ์ยอดนิยม</h2>
        <TrendingUp className="h-4 w-4 text-indigo-500" />
      </div>

      <div className="space-y-3">
        {situations.map((item) => (
          <div key={item.id} className="flex items-center justify-between gap-3 rounded-xl bg-slate-50 p-3">
            <div>
              <p className="font-medium text-slate-800">{item.name}</p>
              <p className="text-xs text-slate-500">{item.occupation}</p>
            </div>
            <span className="rounded-full bg-emerald-100 px-2 py-1 text-xs font-medium text-emerald-700">
              {item.buck === 'Overdue 1-30 Days' ? '1-30' : '31-120'}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
