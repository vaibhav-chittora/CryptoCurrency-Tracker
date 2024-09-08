import React, { lazy, Suspense, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../Components/pages/Layout'
const Home = lazy(() => import('../Components/Home'))
const CoinDetails = lazy(() => import('../Components/pages/CoinDetails'))
import { List } from 'react-content-loader'
import CustomErrorBoundary from '../Components/customErrorBoundary/CustomErrorBoundary'

function Routing() {
    useEffect(() => {
        console.log("vaibhav");
    })
    return (

        <CustomErrorBoundary>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={
                        <Suspense fallback={<List />} >
                            <Home />
                        </Suspense>
                    }
                    />
                    <Route path='/details/:coinId' element={
                        <Suspense fallback={<List />}>
                            <CoinDetails />
                        </Suspense>
                    }
                    />
                </Route>
            </Routes>
        </CustomErrorBoundary>

    )
}

export default Routing