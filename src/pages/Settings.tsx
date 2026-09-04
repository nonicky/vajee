import { Bell, Download, Search, ShieldCheck, Trash2 } from 'lucide-react'
import { storage } from '../utils/storage'
import { toast } from '../components/ui/Toast'

export default function Settings() {
  const handleExportCSV = () => {
    const events = storage.getUsageEvents()
    if (events.length === 0) {
      toast.warning('ไม่มีข้อมูล', 'ยังไม่มีประวัติการใช้งาน')
      return
    }

    const headers = ['Timestamp', 'Situation', 'Buck', 'Occupation', 'Variant', 'Feedback']
    const rows = events.map((event) => [
      new Date(event.timestamp).toLocaleString('th-TH'),
      `"${event.situationName.replace(/"/g, '""')}"`,
      event.buck,
      event.occupation,
      event.variant,
      event.feedback ?? '',
    ])
    const csv = [headers.join(','), ...rows.map((row) => row.join(','))].join('\n')
    const blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `vajee-usage-${Date.now()}.csv`
    link.click()
    URL.revokeObjectURL(url)
    toast.success('ส่งออก CSV สำเร็จ', `ส่งออก ${events.length} รายการ`)
  }

  const handleClearFavorites = () => {
    if (confirm('ต้องการล้างรายการโปรดทั้งหมดหรือไม่?')) {
      localStorage.removeItem('vajee_favorites')
      toast.success('ล้างรายการโปรดเรียบร้อย')
    }
  }

  const handleClearRecentSearches = () => {
    storage.clearRecentSearches()
    toast.success('ล้างประวัติการค้นหาเรียบร้อย')
  }

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

      <div className="space-y-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h3 className="font-semibold text-slate-900">จัดการข้อมูล</h3>
        <div className="flex flex-wrap gap-3">
          <button onClick={handleExportCSV} className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-3 py-2 text-sm font-medium text-white hover:bg-sky-500">
            <Download className="h-4 w-4" /> ส่งออก CSV
          </button>
          <button onClick={handleClearFavorites} className="inline-flex items-center gap-2 rounded-xl border border-rose-200 px-3 py-2 text-sm font-medium text-rose-700 hover:bg-rose-50">
            <Trash2 className="h-4 w-4" /> ล้างรายการโปรด
          </button>
          <button onClick={handleClearRecentSearches} className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
            <Search className="h-4 w-4" /> ล้างประวัติการค้นหา
          </button>
        </div>
      </div>
    </div>
  )
}
