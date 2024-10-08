import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Home from './pages/Home.tsx'
import './assets/CSS/index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)
