import { Bell, Search, Sparkles } from 'lucide-react'

export function Header() {
  return (
    <header className="flex items-center justify-between border-b border-slate-200 bg-white/80 px-6 py-4 backdrop-blur-sm">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-100 text-sky-700">
          <Sparkles className="h-5 w-5" />
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Vajee</p>
          <h1 className="text-lg font-semibold text-slate-900">ระบบช่วยสื่อสารกับลูกค้า</h1>
        </div>
      </div>

      <div className="hidden items-center gap-3 md:flex">
        <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-500">
          <Search className="h-4 w-4" />
          ค้นหาสถานการณ์ลูกค้า
        </div>
        <button className="rounded-xl border border-slate-200 p-2 text-slate-600 transition hover:bg-slate-50">
          <Bell className="h-4 w-4" />
        </button>
      </div>
    </header>
  )
}
