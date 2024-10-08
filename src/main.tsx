import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Pages
import Home from './pages/Home.tsx'
import './assets/CSS/index.css'

// Components
import Footer from './assets/components/Footer.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/TransitTree' element={<Home/>}/>
      </Routes>
    </BrowserRouter>

    <Footer/>
  </StrictMode>,
)
