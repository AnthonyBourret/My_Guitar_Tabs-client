import axios from 'axios';

// Create an axios instance for the server
const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: import.meta.env.VITE_SERVER_URL,
});

export default axiosInstance;
