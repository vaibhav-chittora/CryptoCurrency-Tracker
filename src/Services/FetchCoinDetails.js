import axiosInstance from "../Helpers/axiosInstance";

async function FetchCoinDetails(coinId) {

    try {
        const response = await axiosInstance.get(`/coins/${coinId}`)
        return response.data
    } catch (error) {
        console.log(error.message);
        return null;
    }

}

export default FetchCoinDetails;