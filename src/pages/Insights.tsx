import { BarChart3, TrendingUp } from 'lucide-react'

const metrics = [
  { label: 'ความมั่นใจของลูกค้า', value: '88%', trend: '+9%' },
  { label: 'ความแม่นยำในการตอบ', value: '91%', trend: '+6%' },
  { label: 'ความเร็วในการแก้ปัญหา', value: '3.7 ชม.', trend: '-17%' },
]

export default function Insights() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-600">ข้อมูลเชิงลึก</p>
        <h2 className="text-3xl font-semibold text-slate-900">ติดตามสัญญาณการสื่อสาร</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {metrics.map((item) => (
          <div key={item.label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-sm text-slate-500">{item.label}</p>
              <TrendingUp className="h-4 w-4 text-emerald-500" />
            </div>
            <div className="mt-3 flex items-end justify-between">
              <span className="text-2xl font-semibold text-slate-900">{item.value}</span>
              <span className="text-xs font-medium text-emerald-600">{item.trend}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="mb-4 flex items-center gap-2 text-slate-700">
          <BarChart3 className="h-4 w-4 text-indigo-500" />
          สรุปแนวโน้ม
        </div>
        <div className="space-y-4">
          {[
            'ภาษาที่ชัดเจนและสร้างความมั่นใจช่วยเพิ่มการมีส่วนร่วมภายใน 90 วินาทีแรก',
            'ลูกค้าตอบรับดีขึ้นเมื่อแนวทางถัดไปเรียบง่ายและมีความเสี่ยงต่ำ',
            'การสื่อสารตรงประเด็นช่วยลดความเสี่ยงที่ลูกค้าจะยกเลิกในช่วงพูดคุยเรื่องราคาและต่อสัญญา',
          ].map((point) => (
            <div key={point} className="rounded-xl bg-slate-50 p-3 text-sm text-slate-700">
              {point}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
