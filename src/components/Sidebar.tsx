import { Home, Lightbulb, LineChart, MessageSquareText, Settings } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const items = [
  { label: 'ภาพรวม', to: '/', icon: Home },
  { label: 'คลัง Magic Word', to: '/magic-words', icon: Lightbulb },
  { label: 'ผู้ช่วย AI', to: '/ai-copilot', icon: MessageSquareText },
  { label: 'ข้อมูลเชิงลึก', to: '/insights', icon: LineChart },
  { label: 'ตั้งค่า', to: '/settings', icon: Settings },
]

export function Sidebar() {
  return (
    <aside className="w-full border-r border-slate-200 bg-slate-50/70 p-4 lg:w-72">
      <div className="mb-8 flex items-center gap-3 px-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-lg font-bold text-white">
          V
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-900">Vajee OS</p>
          <p className="text-xs text-slate-500">ช่วยสื่อสารอย่างเข้าใจ</p>
        </div>
      </div>

      <nav className="space-y-2">
        {items.map(({ label, to, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                isActive
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-600 hover:bg-white hover:text-slate-900'
              }`
            }
          >
            <Icon className="h-4 w-4" />
            {label}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}
