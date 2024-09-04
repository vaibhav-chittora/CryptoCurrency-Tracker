import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner.jsx'
import CoinTable from './Components/CoinTable/CoinTable.jsx'
import { useState } from 'react';
import { CurrencyContext } from './context/currencyContext';

function App() {
  const [currency, setCurrency] = useState('usd');

  return (
    <>
      <CurrencyContext.Provider value={{ setCurrency, currency }}>
        <Navbar />
        <Banner />
        <CoinTable />
      </CurrencyContext.Provider>

    </>
  )
}

export default App
