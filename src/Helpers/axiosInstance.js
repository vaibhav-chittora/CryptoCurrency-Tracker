import axios from 'axios';
import { COIN_GECKO_API_URL } from '../Helpers/apiUrl';

const axiosInstance = axios.create({
    baseURL: COIN_GECKO_API_URL,
})

export default axiosInstance;