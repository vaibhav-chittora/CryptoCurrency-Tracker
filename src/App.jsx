import './App.css'
import CoinDetails from './Components/CoinDetails.jsx/CoinDetails.jsx'
import Home from './Components/Home.jsx'
import { Route, Routes, useParams } from 'react-router-dom'
// import { useState } from 'react';
// import { CurrencyContext } from './context/currencyContext';

function App() {
  // const [currency, setCurrency] = useState('usd');


  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/details/:coinId' element={<CoinDetails />} />
      </Routes>
    </>
  )
}

export default App
