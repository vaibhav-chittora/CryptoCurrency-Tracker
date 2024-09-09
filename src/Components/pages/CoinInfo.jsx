import { useQuery } from '@tanstack/react-query'
import React, { useEffect, useState } from 'react'
import { FetchCoinHistoricData } from '../../Services/FetchCoinHistoricData';
import PageLoader from '../PageLoaders/PageLoader';
import { useParams } from 'react-router-dom';
import store from '../../zustand/store';
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import Alert from '../alerts/Alert';
import { Warning } from 'postcss';


function CoinInfo({ coinId }) {

    const { currency } = store();
    const [days, setDays] = useState(7)
    const [coinInterval, setCoinInterval] = useState('');

    const [chartData, setChartData] = useState([
        {
            label: '24 Hours',
            value: 1
        },
        {
            label: '7 Days',
            value: 7,
        },
        {
            label: '3 Months',
            value: 90,
        },
        {
            label: '1 Year',
            value: 365,
        },
    ]);

    function handleDayChange(e) {
        console.log(e.target.value);
        const dataSelected = e.target.options[e.target.selectedIndex].value;
        if (dataSelected == 1) {
            setCoinInterval?.('')
        } else {
            setCoinInterval?.('daily')
        }
        setDays(dataSelected);
    }

    const { data, isLoading, error, isError } = useQuery({
        queryKey: [currency, coinId, days],
        queryFn: () => FetchCoinHistoricData(currency, coinId, days, coinInterval),
        time: {
            gcTime: 1000 * 60 * 5,
            staleTime: 1000 * 60 * 5,
            // retry : 2
        }
    })

    useEffect(() => {
        console.log(data);
        console.log(coinId);
        console.log(days);
        console.log(currency);
    }, [data])

    if (isLoading) {
        return <PageLoader />
    }

    if (isError) {
        return <div>{error.message}</div>
    }

    if (!data) {
        return <Alert type={warning} />
    }

    return (
        <>

            <div className='p-3'>

                <div>

                    <Line data={{
                        labels: data.prices.map((coinPrice) => {
                            let date = new Date(coinPrice[0]);
                            let hour = date.getHours() > 12 ? `${date.getHours() - 12}:${date.getMinutes()} PM` : `${date.getHours()}:${date.getMinutes()} AM`;
                            console.log("date", date);
                            console.log("hour", hour);
                            return days === 1 ? hour : date.toLocaleDateString();
                        }),


                        datasets: [
                            {
                                label: `Prices in past ${days} ${days > 1 ? 'days' : 'day'} in ${currency.toUpperCase()}`,
                                data: data.prices.map((coinPrice) => coinPrice[1]),
                                pointRadius: 1,
                                options: {
                                    responsive: true,
                                }
                            },

                        ]
                    }}

                    />
                </div>
                <div className='flex justify-center mx-auto mt-8'>

                    <select
                        className="select select-warning w-full max-w-xs"
                        onChange={handleDayChange}
                        defaultValue={days}
                    >

                        {chartData.map((days) => <option key={days.value} value={days.value}>{days.label}</option>)}
                    </select>
                </div>


            </div>

          


        </>
    )
}

export default CoinInfo