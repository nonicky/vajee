import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import AICopilot from './pages/AICopilot'
import Dashboard from './pages/Dashboard'
import Insights from './pages/Insights'
import MagicWordLibrary from './pages/MagicWordLibrary'
import Settings from './pages/Settings'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/magic-words" element={<MagicWordLibrary />} />
          <Route path="/ai-copilot" element={<AICopilot />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
