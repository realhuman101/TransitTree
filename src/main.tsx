import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'

// Pages
import Home from './pages/Home.tsx'
import RoutePlan from './pages/RoutePlan.tsx'
import './assets/CSS/index.css'

// Components
import Footer from './assets/components/Footer.tsx'
import Loading from './assets/components/Loading.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter basename='/TransitTree'>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/RoutePlan' element={<RoutePlan/>}/>
      </Routes>

    <Footer/>
    <Loading/>
    </HashRouter>
  </StrictMode>,
)
