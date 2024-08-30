import { useEffect, useState } from "react";
import { fetchCoinData } from "../../Services/FetchCoinData";
import { useQuery } from "@tanstack/react-query";

function CoinTable() {
    const [page, setPage] = useState(1);

    const { data, isloading, error, isError } = useQuery({
        queryKey: ["coins", page], queryFn: () => fetchCoinData('usd',page),
        time: {
            cacheTime: 1000 * 60 * 2, // 2 minutes
            staleTime: 1000 * 60 * 2, // 2 minutes
            retry : 2
        }
    });
    useEffect(() => {
        console.log(data);
    }, [data]);

    if (isloading) {
        return <div>Loading...</div>;
    }
    if (isError) {
        return <div>Error...{error.message}</div>;
    }


    return <div> CoinTable</div>;
}

export default CoinTable;
