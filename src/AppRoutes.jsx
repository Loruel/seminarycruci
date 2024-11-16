import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

import Cruci from './pages/Cruci'
import CruciB1 from './pages/CruciB1'
import CruciH2 from './pages/CruciH2'
import CruciH1 from './pages/CruciH1'
import CruciRama from './pages/CruciRama'
import CruciVenta from './pages/CruciVenta'
import CruciMontes from './pages/CruciMontes'
import CruB2 from './pages/CruB2'


export default function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/montes' element={<CruciMontes />} />
            <Route path='/venta' element={<CruciVenta />} />
            <Route path='/jardines' element={<Cruci />} />
            <Route path='/h1' element={<CruciH1 />} />
            <Route path='/h2' element={<CruciH2 />} />
            <Route path='/b1' element={<CruciB1 />} />
            <Route path='/b2' element={<CruB2 />} />
            <Route path='/rama' element={<CruciRama />} />
        </Routes>
    )
}
