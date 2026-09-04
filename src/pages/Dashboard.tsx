import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { Activity, ArrowUpRight, Sparkles } from 'lucide-react'
import { useMemo } from 'react'
import { NextBestAction } from '../components/NextBestAction'
import { PopularSituations } from '../components/PopularSituations'
import { SituationCard } from '../components/SituationCard'
import { getRecommendedActions } from '../utils/recommendation'
import type { InsightMetric, Situation } from '../types'
import { magicWords } from '../data/magicWords'

const insightData: InsightMetric[] = [
  { label: 'คุณภาพการตอบกลับ', value: '92%', change: '+8.4%', positive: true },
  { label: 'Avg. resolution', value: '4.2h', change: '-12%', positive: true },
  { label: 'Escalations', value: '18%', change: '-3.1%', positive: true },
]

const situations: Situation[] = [
  {
    id: 'friction',
    name: 'High-friction onboarding',
    buck: 'Overdue 1-30 Days',
    occupation: 'พนักงานบริษัท',
    category: 'Onboarding',
  },
  {
    id: 'policy',
    name: 'Pricing clarity gap',
    buck: 'Overdue 31-120 Days',
    occupation: 'เจ้าของธุรกิจ',
    category: 'Commercial',
  },
  {
    id: 'renewal',
    name: 'Renewal risk alerts',
    buck: 'Overdue 31-120 Days',
    occupation: 'ค้าขาย',
    category: 'Retention',
  },
]

const chartData = [
  { day: 'Mon', value: 32 },
  { day: 'Tue', value: 41 },
  { day: 'Wed', value: 38 },
  { day: 'Thu', value: 52 },
  { day: 'Fri', value: 48 },
  { day: 'Sat', value: 64 },
  { day: 'Sun', value: 70 },
]

export default function Dashboard() {
  const recommendation = useMemo(() => getRecommendedActions(situations), [])

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-indigo-600">ภาพรวม</p>
          <h2 className="text-3xl font-semibold text-slate-900">แดชบอร์ดช่วยสื่อสารกับลูกค้า</h2>
        </div>
        <button className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-indigo-500">
          <Sparkles className="h-4 w-4" />
          สร้างคู่มือการพูด
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {insightData.map((metric) => (
          <div key={metric.label} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="text-sm text-slate-500">{metric.label}</p>
            <div className="mt-3 flex items-end justify-between">
              <span className="text-3xl font-semibold text-slate-900">{metric.value}</span>
              <span className={`text-xs font-medium ${metric.positive ? 'text-emerald-600' : 'text-rose-600'}`}>
                {metric.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.5fr_0.9fr]">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">แนวโน้ม</p>
              <h3 className="text-lg font-semibold text-slate-900">การมีส่วนร่วมของลูกค้า</h3>
            </div>
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-medium text-emerald-700">
              <ArrowUpRight className="h-3.5 w-3.5" />
              +14.2%
            </span>
          </div>

          <div className="h-64 w-full">
            <ResponsiveContainer>
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="engagementFill" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.28} />
                    <stop offset="95%" stopColor="#4f46e5" stopOpacity={0.04} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} />
                <Tooltip />
                <Area type="monotone" dataKey="value" stroke="#4f46e5" strokeWidth={3} fill="url(#engagementFill)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="space-y-6">
          <NextBestAction recommendations={recommendation} />
          <PopularSituations situations={situations} />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {situations.map((item) => (
          <SituationCard
            key={item.id}
            situation={item}
            magicWords={magicWords.filter((word) => word.situationId === item.id && word.buck === item.buck && word.occupation === item.occupation)}
            onSelectWord={() => undefined}
          />
        ))}
      </div>

      <div className="rounded-2xl border border-indigo-100 bg-indigo-50 p-4 text-sm text-indigo-900">
        <div className="flex items-center gap-2 font-medium">
          <Activity className="h-4 w-4" />
          บันทึกจากระบบ
        </div>
        <p className="mt-2">Your highest-impact moment is reducing friction in onboarding with a simpler first-step message.</p>
      </div>
    </div>
  )
}
