import axiosInstance from "../Helpers/axiosInstance";

export async function FetchCoinHistoricData(currency, id, days, coinInterval) {
    try {
        const response = await axiosInstance.get(`/coins/${id}/market_chart?vs_currency=${currency}&days=${days}&interval=${coinInterval}&precision=0`);
        return response.data;

    } catch (error) {
        return null
    }
}