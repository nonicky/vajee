import type { SavedPreference, UsageEvent } from '../types'

const STORAGE_KEY = 'vajee-preferences'
const USAGE_KEY = 'vajee_usage_events'
const FAVORITES_KEY = 'vajee_favorites'
const RECENT_SEARCHES_KEY = 'vajee_recent_searches'

function readArray<T>(key: string): T[] {
  if (typeof window === 'undefined') return []
  try {
    const value: unknown = JSON.parse(window.localStorage.getItem(key) ?? '[]')
    return Array.isArray(value) ? value as T[] : []
  } catch {
    return []
  }
}

function writeArray<T>(key: string, value: T[]) {
  if (typeof window !== 'undefined') window.localStorage.setItem(key, JSON.stringify(value))
}

export const storage = {
  getUsageEvents: () => readArray<UsageEvent>(USAGE_KEY),
  addUsageEvent: (event: UsageEvent) => writeArray(USAGE_KEY, [...readArray<UsageEvent>(USAGE_KEY), event]),
  updateFeedback: (eventId: string, feedback: 'helpful' | 'not_helpful') => {
    const events = readArray<UsageEvent>(USAGE_KEY)
    const event = events.find((item) => item.id === eventId)
    if (event) event.feedback = feedback
    writeArray(USAGE_KEY, events)
  },
  clearUsageEvents: () => window?.localStorage.removeItem(USAGE_KEY),
  getFavorites: () => readArray<string>(FAVORITES_KEY),
  addFavorite: (id: string) => {
    const favorites = readArray<string>(FAVORITES_KEY)
    if (!favorites.includes(id)) writeArray(FAVORITES_KEY, [...favorites, id])
  },
  removeFavorite: (id: string) => writeArray(FAVORITES_KEY, readArray<string>(FAVORITES_KEY).filter((item) => item !== id)),
  isFavorite: (id: string) => readArray<string>(FAVORITES_KEY).includes(id),
  getRecentSearches: () => readArray<string>(RECENT_SEARCHES_KEY),
  addRecentSearch: (query: string) => {
    if (!query.trim()) return
    const searches = readArray<string>(RECENT_SEARCHES_KEY).filter((item) => item !== query)
    writeArray(RECENT_SEARCHES_KEY, [query, ...searches].slice(0, 10))
  },
  clearRecentSearches: () => window?.localStorage.removeItem(RECENT_SEARCHES_KEY),
}

export function getStoredPreferences(): SavedPreference {
  if (typeof window === 'undefined') {
    return { search: '', favorites: [] }
  }

  const raw = window.localStorage.getItem(STORAGE_KEY)

  if (!raw) {
    return { search: '', favorites: [] }
  }

  try {
    const parsed = JSON.parse(raw) as Partial<SavedPreference>
    return {
      search: typeof parsed.search === 'string' ? parsed.search : '',
      favorites: Array.isArray(parsed.favorites) ? parsed.favorites : [],
    }
  } catch {
    return { search: '', favorites: [] }
  }
}

export function savePreference(next: Partial<SavedPreference>) {
  if (typeof window === 'undefined') {
    return
  }

  const previous = getStoredPreferences()
  const updated = { ...previous, ...next }
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
}
