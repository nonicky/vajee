import type { SavedPreference } from '../types'

const STORAGE_KEY = 'vajee-preferences'

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
