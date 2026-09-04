import { SearchX } from 'lucide-react'

export function EmptyState() {
  return (
    <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-10 text-center">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white text-slate-500 shadow-sm">
        <SearchX className="h-5 w-5" />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-slate-800">ยังไม่พบข้อมูล</h3>
      <p className="mt-2 text-sm text-slate-500">ลองใช้คำค้นที่กว้างขึ้น หรือค้นหาสถานการณ์อื่น</p>
    </div>
  )
}
