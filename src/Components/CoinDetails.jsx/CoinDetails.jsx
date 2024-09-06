import { useParams } from "react-router-dom";

function CoinDetails() {

    const {coinId} = useParams()

    return (

        <h1>Coin Details {coinId}</h1>
    )

}
export default CoinDetails;