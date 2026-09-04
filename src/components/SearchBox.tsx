import { Search } from 'lucide-react'
import type { FormEvent } from 'react'

interface SearchBoxProps {
  value: string
  onChange: (value: string) => void
  onSubmit?: () => void
}

export function SearchBox({ value, onChange, onSubmit }: SearchBoxProps) {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    onSubmit?.()
  }

  return (
    <form onSubmit={handleSubmit} className="relative w-full max-w-xl">
      <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="ค้นหา Magic Word สถานการณ์ หรือแนวทางการพูด"
        className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-9 pr-3 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
      />
    </form>
  )
}
