import React, { lazy, Suspense, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../Components/pages/Layout'
const Home = lazy(() => import('../Components/Home'))
const CoinDetails = lazy(() => import('../Components/pages/CoinDetails'))
import { Code, List } from 'react-content-loader'
import CustomErrorBoundary from '../Components/customErrorBoundary/CustomErrorBoundary'
import PageLoader from '../Components/PageLoaders/PageLoader'

function Routing() {
    useEffect(() => {
        console.log("vaibhav");
    })
    return (

        <CustomErrorBoundary>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={
                        <Suspense fallback={<PageLoader />} >
                            <Home />
                        </Suspense>
                    }
                    />
                    <Route path='/details/:coinId' element={
                        <Suspense fallback={<PageLoader />}>
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