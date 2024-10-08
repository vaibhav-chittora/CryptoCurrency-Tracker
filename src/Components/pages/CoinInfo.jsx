import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import { FetchCoinHistoricData } from '../../Services/FetchCoinHistoricData';
import PageLoader from '../PageLoaders/PageLoader';
import store from '../../zustand/store';
import { Line } from 'react-chartjs-2';
import Alert from '../alerts/Alert';
import { Warning } from 'postcss';
import { CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto';

function CoinInfo({ coinId }) {
    Chart.register(CategoryScale);

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
        // console.log(e.target.value);
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
            retry: 2
        }
    })


    if (isLoading) {
        return <PageLoader />
    }

    if (isError) {
        return <div>{error.message}</div>
    }

    if (!data) {
        return <Alert type={Warning} message={'No Data Found'} />
    }

    return (
        <>

            <div className='p-3'>

                <div>

                    <Line data={{
                        labels: data.prices.map((coinPrice) => {
                            let date = new Date(coinPrice[0]);
                            let hour = date.getHours() > 12 ? `${date.getHours() - 12}:${date.getMinutes()} PM` : `${date.getHours()}:${date.getMinutes()} AM`;
                            // console.log("date", date);
                            // console.log("hour", hour);
                            return days === 1 ? hour : date.toLocaleDateString();
                        }),


                        datasets: [
                            {
                                label: `Prices in past ${days} ${days > 1 ? 'days' : 'day'} in ${currency.toUpperCase()}`,
                                data: data.prices.map((coinPrice) => coinPrice[1]),
                                pointRadius: 1,
                                mainAspectRatio: true,

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

            <div className='p-3 my-8'>
                <h1 className='text-3xl text-center my-5 mb-8'>Market Cap</h1>
                <div>
                    <Line data={{
                        labels: data.total_volumes.map((volume) => {
                            let date = new Date(volume[0]);
                            let hour = date.getHours() > 12 ? `${date.getHours() - 12}:${date.getMinutes()} PM` : `${date.getHours()}:${date.getMinutes()} AM`;
                            return days === 1 ? hour : date.toLocaleDateString();
                        }),
                        datasets: [
                            {
                                label: `Total Volume Capital in ${currency.toUpperCase()}`,
                                data: data.total_volumes.map((volume) => volume[1]),
                                pointRadius: 1,
                                borderColor: 'orange',
                                mainAspectRatio: true,
                                options: {
                                    responsive: true,
                                }
                            }
                        ]
                    }}
                    />
                </div>

                {/* <div className='flex justify-center mx-auto mt-8'>

                    <select
                        className="select select-warning w-full max-w-xs"
                        onChange={handleDayChange}
                        defaultValue={days}
                    >

                        {chartData.map((days) => <option key={days.value} value={days.value}>{days.label}</option>)}
                    </select>
                </div> */}

            </div>


        </>
    )
}

export default CoinInfo