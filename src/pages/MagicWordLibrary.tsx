import { useEffect, useMemo, useState } from 'react'
import { Heart, Sparkles } from 'lucide-react'
import { SearchBox } from '../components/SearchBox'
import { MagicWordCard } from '../components/MagicWordCard'
import { EmptyState } from '../components/EmptyState'
import { magicWords } from '../data/magicWords'
import { searchMagicWords } from '../utils/search'
import { getStoredPreferences, savePreference } from '../utils/storage'

export default function MagicWordLibrary() {
  const [search, setSearch] = useState(getStoredPreferences().search)

  useEffect(() => {
    savePreference({ search })
  }, [search])

  const filteredWords = useMemo(() => searchMagicWords(magicWords, search), [search])

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-violet-600">คลังคำพูด</p>
          <h2 className="text-3xl font-semibold text-slate-900">คลัง Magic Word</h2>
        </div>
        <div className="flex items-center gap-2 rounded-xl bg-violet-50 px-3 py-2 text-sm font-medium text-violet-700">
          <Sparkles className="h-4 w-4" />
          {magicWords.length} ประโยคที่คัดสรร
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <SearchBox value={search} onChange={setSearch} />
          <button className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700">
            <Heart className="h-4 w-4" />
            รายการโปรด
          </button>
        </div>
      </div>

      {filteredWords.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {filteredWords.map((item) => (
            <MagicWordCard key={item.id} word={item} />
          ))}
        </div>
      )}
    </div>
  )
}
