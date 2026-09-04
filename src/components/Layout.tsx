import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Sidebar } from './Sidebar'

export function Layout() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-800">
      <Header />
      <div className="flex flex-col lg:flex-row">
        <Sidebar />
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
