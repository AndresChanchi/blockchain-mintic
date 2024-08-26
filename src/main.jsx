import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/home/home.jsx'
import { ApiProvider } from './context/ApiContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ApiProvider>
      <Home />
    </ApiProvider>
  </StrictMode>,
)
