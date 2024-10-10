import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'

// Pages
import Home from './pages/Home.tsx'
import RoutePlan from './pages/RoutePlan.tsx'
import ViewForest from './pages/ViewForest.tsx'
import Shop from './pages/Shop.tsx'
import './assets/CSS/index.css'

// Components
import Footer from './assets/components/Footer.tsx'
import Loading from './assets/components/Loading.tsx'

createRoot(document.getElementById('root')!).render(
  <>
    <HashRouter basename='/TransitTree'>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/RoutePlan' element={<RoutePlan/>}/>
        <Route path='/ViewForest' element={<ViewForest/>}/>
        <Route path='/Shop' element={<Shop/>}/>
      </Routes>

    <Footer/>
    <Loading/>
    </HashRouter>
  </>,
)
