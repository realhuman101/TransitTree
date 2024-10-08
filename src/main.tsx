import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Pages
import Home from './pages/Home.tsx'
import RoutePlan from './pages/RoutePlan.tsx'
import './assets/CSS/index.css'

// Components
import Footer from './assets/components/Footer.tsx'
import Loading from './assets/components/Loading.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/TransitTree' element={<Home/>}/>
        <Route path='/TransitTree/RoutePlan' element={<RoutePlan/>}/>
      </Routes>

    <Footer/>
    <Loading/>
    </BrowserRouter>
  </StrictMode>,
)
