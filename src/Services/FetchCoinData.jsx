import axiosInstance from "../Helpers/axiosInstance"

export async function fetchCoinData() {
    try {
        const response = await axiosInstance.get('/coins/markets?vs_currency=usd')
        console.log(response)
        return response
    } catch (error) {
        console.log(error)

    }

}