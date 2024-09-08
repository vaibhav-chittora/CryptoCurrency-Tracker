import axiosInstance from "../Helpers/axiosInstance"

export async function fetchCoinData(currency = 'usd', page = 1) {
    const perPage = 10;

    try {
        const response = await axiosInstance.get(`/coins/markets?vs_currency=${currency}&page=${page}&per_page=${perPage}`)
        // console.log(response)
        return response.data
    } catch (error) {
        console.log(error)
        const errorMessage = await error.message
        return errorMessage

    }

}