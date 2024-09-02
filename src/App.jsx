import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner.jsx'
import CoinTable from './Components/CoinTable/CoinTable.jsx'
import { useState } from 'react';

function App() {
  const [currency, setCurrency] = useState('usd');

  return (
    <>
      <Navbar setCurrency={setCurrency} />
      <Banner />
      <CoinTable currency={currency} />
    </>
  )
}

export default App
