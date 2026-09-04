import { Bell, ShieldCheck } from 'lucide-react'

export default function Settings() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">ตั้งค่า</p>
        <h2 className="text-3xl font-semibold text-slate-900">การตั้งค่าพื้นที่ทำงาน</h2>
      </div>

      <div className="space-y-4">
        {[
          {
            label: 'โทนการพูดเริ่มต้น',
            value: 'อบอุ่น + มั่นใจ',
            icon: ShieldCheck,
          },
          {
            label: 'การแจ้งเตือน',
            value: 'เฉพาะรายการสำคัญ',
            icon: Bell,
          },
        ].map(({ label, value, icon: Icon }) => (
          <div key={label} className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-slate-100 p-2 text-slate-600">
                <Icon className="h-4 w-4" />
              </div>
              <div>
                <p className="font-medium text-slate-900">{label}</p>
                <p className="text-sm text-slate-500">{value}</p>
              </div>
            </div>
            <button className="rounded-xl border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700">
              แก้ไข
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
