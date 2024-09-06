import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import FetchCoinDetails from "../../Services/FetchCoinDetails";
import Navbar from "../Navbar/Navbar";

function CoinDetails(id) {

    const { coinId } = useParams();


    const { data, isLoading, error, isError } = useQuery({
        queryKey: ['coinId', id],
        queryFn: () => FetchCoinDetails(id)
    })
    console.log(data)

    if (isLoading) {
        return <div>Loading....</div>
    }
    if (isError) {
        return <div>{error.message}</div>
    }

    return (
        <>
            <h1>Coin Details {coinId}</h1>
        </>
    )

}
export default CoinDetails;