import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../Components/pages/Layout'
const Home = lazy(() => import('../Components/Home'))
const CoinDetails = lazy(() => import('../Components/pages/CoinDetails'))
import { List } from 'react-content-loader'

function Routing() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={
                        <Suspense fallback={<List/>} >
                            <Home />
                        </Suspense>
                    }
                    />
                    <Route path='/details/:coinId' element={
                        <Suspense fallback={<List/>}>
                            <CoinDetails />
                        </Suspense>
                    }
                    />
                </Route>
            </Routes>
        </>
    )
}

export default Routing