import axiosInstance from "../Helpers/axiosInstance";

export async function FetchCurrencyList() {
    try {
        const response = await axiosInstance.get('https://api.coingecko.com/api/v3/simple/supported_vs_currencies');
        console.log(response.data)
        return response.data;

    } catch (error) {
        return null
    }
}