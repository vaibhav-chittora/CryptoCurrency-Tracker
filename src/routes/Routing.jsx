import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../Components/pages/Layout'
import Home from '../Components/Home'
import CoinDetails from '../Components/pages/CoinDetails'

function Routing() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<Home />} />
                    <Route path='/details/:coinId' element={<CoinDetails />} />
                </Route>
            </Routes>
        </>
    )
}

export default Routing