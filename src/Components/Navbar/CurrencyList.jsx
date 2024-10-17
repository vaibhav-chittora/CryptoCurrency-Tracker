import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { FetchCurrencyList } from '../../Services/fetchCurrencyList'

function CurrencyList() {
  const { data, isLoading, error, isError } = useQuery({
    queryKey: ['currencyList'],
    queryFn: () => FetchCurrencyList(),
    time: {
      gcTime: 1000 * 60 * 2,
      staleTime: 1000 * 60 * 2,
      // retry:2
    }
  })
  if (isLoading) {
    return <div>Loading...</div>
  }
  if (isError) {
    return <div>{error.message}</div>
  }
  console.log(data)
  return (
    <>
      <select className="select select-warning w-full max-w-xs">
        <option disabled selected>Select Currencies</option>
        {data.map((currency, index) => (
          <option key={index} value={currency}>{currency}</option>
        ))}
      </select>
    </>
  )
}

export default CurrencyList