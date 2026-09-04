import type { MagicWord } from '../types'

export function searchMagicWords(words: MagicWord[], query: string) {
  const normalized = query.trim().toLowerCase()

  if (!normalized) {
    return words
  }

  return words.filter((word) => {
    const haystack = [
      word.text,
      word.situation,
      word.goal ?? '',
      ...(word.tips ?? []),
      ...(word.avoid ?? []),
    ]
      .join(' ')
      .toLowerCase()

    return haystack.includes(normalized)
  })
}
