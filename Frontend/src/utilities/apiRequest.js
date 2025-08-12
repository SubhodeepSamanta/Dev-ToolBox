import axios from 'axios'

const apiRequest= axios.create({
    baseURL:import.meta.VITE_API_URL,
    withCredentials: true
})

export default apiRequest;