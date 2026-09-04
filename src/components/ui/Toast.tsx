import { useEffect, useState, type ReactNode } from 'react'
import { AlertCircle, Check, Info, X } from 'lucide-react'
import { cn } from '../../lib/utils'

export type ToastType = 'success' | 'error' | 'info' | 'warning'

export interface ToastMessage {
  id: string
  type: ToastType
  title: string
  description?: string
  duration?: number
}

let globalAddToast: ((toast: Omit<ToastMessage, 'id'>) => void) | null = null

export const toast = {
  success: (title: string, description?: string) => globalAddToast?.({ type: 'success', title, description }),
  error: (title: string, description?: string) => globalAddToast?.({ type: 'error', title, description }),
  info: (title: string, description?: string) => globalAddToast?.({ type: 'info', title, description }),
  warning: (title: string, description?: string) => globalAddToast?.({ type: 'warning', title, description }),
}

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastMessage[]>([])

  useEffect(() => {
    globalAddToast = (message) => {
      const id = `toast-${Date.now()}-${Math.random()}`
      setToasts((current) => [...current, { ...message, id }])
      window.setTimeout(() => setToasts((current) => current.filter((toastMessage) => toastMessage.id !== id)), message.duration ?? 3000)
    }
    return () => { globalAddToast = null }
  }, [])

  return (
    <>
      {children}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
        {toasts.map((message) => <ToastItem key={message.id} message={message} onClose={() => setToasts((current) => current.filter((item) => item.id !== message.id))} />)}
      </div>
    </>
  )
}

function ToastItem({ message, onClose }: { message: ToastMessage; onClose: () => void }) {
  const icons = {
    success: <Check className="h-4 w-4" />,
    error: <AlertCircle className="h-4 w-4" />,
    info: <Info className="h-4 w-4" />,
    warning: <AlertCircle className="h-4 w-4" />,
  }
  const colors = {
    success: 'bg-emerald-50 border-emerald-200 text-emerald-900',
    error: 'bg-rose-50 border-rose-200 text-rose-900',
    info: 'bg-blue-50 border-blue-200 text-blue-900',
    warning: 'bg-amber-50 border-amber-200 text-amber-900',
  }

  return (
    <div className={cn('flex min-w-[300px] max-w-[400px] items-start gap-3 rounded-lg border p-4 shadow-lg', colors[message.type])}>
      <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-current text-white">{icons[message.type]}</div>
      <div className="min-w-0 flex-1"><div className="text-sm font-semibold">{message.title}</div>{message.description && <div className="mt-0.5 text-xs opacity-80">{message.description}</div>}</div>
      <button onClick={onClose} className="flex-shrink-0 rounded p-1 opacity-60 hover:opacity-100" aria-label="ปิดการแจ้งเตือน"><X className="h-3.5 w-3.5" /></button>
    </div>
  )
}
