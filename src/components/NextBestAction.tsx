import { ArrowUpRight, CheckCircle2 } from 'lucide-react'
import type { Recommendation } from '../types'

interface NextBestActionProps {
  recommendations: Recommendation[]
}

export function NextBestAction({ recommendations }: NextBestActionProps) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-slate-900">แนวทางถัดไปที่แนะนำ</h2>
        <span className="text-xs text-slate-500">เรียงตามความสำคัญ</span>
      </div>

      <div className="space-y-3">
        {recommendations.map((item) => (
          <div key={item.id} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3">
            <div className="mt-0.5 rounded-full bg-emerald-100 p-1 text-emerald-700">
              <CheckCircle2 className="h-4 w-4" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between gap-2">
                <p className="font-medium text-slate-900">{item.title}</p>
                <span className="rounded-full bg-indigo-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-indigo-600">
                  {item.priority}
                </span>
              </div>
              <p className="mt-1 text-sm text-slate-600">{item.description}</p>
              <div className="mt-2 flex items-center justify-between text-xs text-slate-500">
                <span>{item.impact}</span>
                <span className="inline-flex items-center gap-1 text-indigo-600">
                  ดำเนินการ <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
