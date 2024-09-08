import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import FetchCoinDetails from "../../Services/FetchCoinDetails";
import Navbar from "../Navbar/Navbar";
import { useEffect } from "react";
import store from "../../zustand/store";
import HTMLReactParser from "html-react-parser/lib/index";
import { List } from "react-content-loader";

function CoinDetails(id) {

    const { coinId } = useParams();
    const { currency } = store();

    const { data: coin, isLoading, error, isError } = useQuery({
        queryKey: ['coin', coinId],
        queryFn: () => FetchCoinDetails(coinId)
    })
    if (isLoading) {
        return <List />
    }

    // if (isError) {
    //     return <div>{error.message}</div>
    // }
    if (isError) {
        return <CustomErrorBoundary />
    }
    return (
        <>
            {/* <h1>Coin Details {coinId}</h1> */}
            <div className="flex flex-col md:flex-row">
                <hr className="border-t-2 border-gray-500" />
                <div
                    className="md:w-1/3 w-full flex flex-col items-center  md:mt-5 border-r-2 border-gray-500"
                >
                    <img
                        alt={coin?.name}
                        src={coin?.image?.large}
                        className="h-52 mb-5"
                    />

                    <h1
                        className="text-4xl font-bold mb-5"
                    >
                        {coin?.name}
                    </h1>

                    <p
                        className="w-full px-6 py-4 text-justify"
                    >
                        {HTMLReactParser(coin?.description?.en)}
                    </p>

                    <div className="w-full flex flex-col md:flex-row md:items-center md:justify-around">
                        <div
                            className="flex items-center mb-4 md:mb-0"
                        >
                            <h2 className="text-xl font-bold ">
                                Rank
                            </h2>
                            <span className="ml-3 text-xl ">
                                {coin?.market_cap_rank}
                            </span>
                        </div>

                        <div className="flex items-center mb-4 md:mb-0">
                            <h2 className="text-xl text-yellow-400 font-bold ">
                                Current Price
                            </h2>
                            <span className="ml-3 text-xl ">
                                {coin?.market_data.current_price[currency]}
                            </span>
                        </div>

                    </div>
                </div>

                <div className="md:w-2/3 w-full ">
                    {/* <CoinInfoContainer coinId={coinId} /> */}
                </div>

            </div>
        </>
    )

}
export default CoinDetails;