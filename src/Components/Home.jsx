import { lazy } from "react";
import Banner from "./Banner/Banner";
const CoinTable = lazy(() => import("./pages/CoinTable"));

function Home() {
    return (
        <>
            <Banner />
            <CoinTable />
        </>
    )
}
export default Home;