import { Bot, MessageSquareText, SendHorizonal } from 'lucide-react'

export default function AICopilot() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-sky-600">ผู้ช่วย AI</p>
        <h2 className="text-3xl font-semibold text-slate-900">สร้างคำตอบที่เหมาะสมยิ่งขึ้น</h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-4 flex items-center gap-2 text-slate-700">
            <Bot className="h-4 w-4 text-sky-600" />
            คำตอบที่แนะนำ
          </div>

          <div className="space-y-4">
            <div className="rounded-xl bg-slate-50 p-4 text-sm text-slate-700">
              “I hear you. I can see why that felt frustrating. Let’s make this easy: I’ll walk you through the simplest next step and keep you updated as we move forward.”
            </div>

            <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-600">
              <MessageSquareText className="h-4 w-4 text-slate-500" />
              บริบทลูกค้า: สับสนเรื่องราคา เร่งด่วนสูง และมีอุปสรรคระหว่างเริ่มใช้งาน
            </div>
          </div>

          <div className="mt-6 flex gap-3">
            <input
              placeholder="อธิบายสถานการณ์ของลูกค้า"
              className="flex-1 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-700 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
            />
            <button className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-sky-500">
              <SendHorizonal className="h-4 w-4" />
              ส่งคำขอ
            </button>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900">ปรับโทนการพูด</h3>
          <div className="mt-4 space-y-3">
            {['อบอุ่น', 'สงบ', 'ตรงประเด็น', 'มั่นใจ'].map((tone) => (
              <button
                key={tone}
                className="flex w-full items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm font-medium text-slate-700 transition hover:border-sky-200 hover:bg-sky-50"
              >
                {tone}
                <span className="text-xs text-slate-500">สมดุล</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
