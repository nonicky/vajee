export type Buck = 'Overdue 1-30 Days' | 'Overdue 31-120 Days'
export type Occupation = 'ข้าราชการ' | 'พนักงานบริษัท' | 'ค้าขาย' | 'เกษตรกร' | 'เจ้าของธุรกิจ'

export interface MagicWord {
  id: string
  situationId: string
  buck: Buck
  occupation: Occupation
  situation: string
  variant: 'original' | '1' | '2' | '3' | 'revise'
  text: string
  tips?: string[]
  avoid?: string[]
  goal?: string
  closingQuestion?: string
}

export interface Situation {
  id: string
  name: string
  buck: Buck
  occupation: Occupation
  category?: string
}

export interface UsageEvent {
  id: string
  magicWordId: string
  situationId: string
  situationName: string
  buck: Buck
  occupation: Occupation
  variant: string
  timestamp: string
  feedback?: 'helpful' | 'not_helpful'
}

export interface CopilotAnalysis {
  input: string
  detectedSituation: Situation | null
  confidence: number
  recommendedWords: MagicWord[]
  nextActions: string[]
  keywords: string[]
}

export interface PopularSituation {
  id: string
  emoji: string
  label: string
  keywords: string[]
  situationIds: string[]
}

export interface Recommendation {
  id: string
  title: string
  description: string
  impact: string
  priority: 'High' | 'Medium' | 'Low'
}

export interface InsightMetric {
  label: string
  value: string
  change: string
  positive: boolean
}

export interface SavedPreference {
  search: string
  favorites: string[]
}
