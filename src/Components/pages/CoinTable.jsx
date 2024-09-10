import { useState } from "react";
import { fetchCoinData } from "../../Services/FetchCoinData";
import { useQuery } from "@tanstack/react-query";
import store from "../../zustand/store";
import { useNavigate } from "react-router-dom";
import { Code } from "react-content-loader";
import CustomErrorBoundary from "../customErrorBoundary/CustomErrorBoundary";

function CoinTable() {
    const [page, setPage] = useState(1);
    const navigate = useNavigate()

    // const {currency} = useContext(CurrencyContext);
    const { currency } = store();

    const { data, isloading, error, isError } = useQuery({
        queryKey: ["coins", page, currency],
        queryFn: () => fetchCoinData(currency, page),
        time: {
            gcTime: 1000 * 60 * 5, // 5 minutes
            staleTime: 1000 * 60 * 5, // 5 minutes
            // retry : 2
        },
    });
    // console.log(data);
    if (isloading) {
        return <Code />
    }

    // if (isError) {
    //     return <div>Error...{error.message}</div>;
    // }
    if (isError) {
        return <CustomErrorBoundary />
    }

    function handleCoinDetails(coinId) {
        // console.log({ coinId }, "Crypto Coin", "Clicked");
        navigate(`/details/${coinId}`)
    }

    return (
        <div className="my-5 flex flex-col justify-center items-center gap-5 w-[80vw] mx-auto">
            <h1>{currency}</h1>
            <div className="w-full bg-yellow-400 text-black flex py-4 px-2 font-semibold items-center justify-center rounded-xl">
                {/* Header table */}

                <div className="basis-[35%]">Coin</div>
                <div className="basis-[25%]">Price</div>
                <div className="basis-[20%]">24h Change</div>
                <div className="basis-[20%]">Market Cap</div>
            </div>

            <div className="flex flex-col w-[80vw] mx-auto">
                {isloading && <Code />}
                {data && data.map((coin) => {
                    return (
                        <div
                            key={coin.id}
                            className="w-full bg-transparent text-white flex py-4 px-2 font-semibold items-center justify-between cursor-pointer"
                            onClick={() => handleCoinDetails(coin.id)}
                        >
                            <div className="flex items-center justify-start gap-3 basis-[35%]">
                                <div className="w-[5rem] h-[5rem]">
                                    <img
                                        src={coin.image}
                                        alt={coin.name}
                                        className="w-full h-full"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <div className="text-3xl">{coin.name}</div>
                                    <div className="text-xl">{coin.symbol}</div>
                                </div>
                            </div>

                            <div className="basis-[25%]">{coin.current_price}</div>
                            <div className="basis-[20%]">{coin.price_change_24h}</div>
                            <div className="basis-[20%]">{coin.market_cap}</div>
                        </div>
                    );
                })}
            </div>

            <div className="flex justcfy-center items-center gap-4 ">
                <button
                    disabled={page === 1}
                    className="btn btn-primary btn-wide text-white text-2xl"
                    onClick={() => setPage(page - 1)}
                >
                    Previous
                </button>
                <button
                    className="btn btn-success btn-wide text-white text-2xl"
                    onClick={() => setPage(page + 1)}
                >
                    Next
                </button>

            </div>
        </div>
    );
}

export default CoinTable;
