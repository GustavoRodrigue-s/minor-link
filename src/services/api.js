import axios from "axios";

export const key = 'ca310bcad2617943a69fb66faf6997c2185bfdea';

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers: {
        'Authorization': `Bearer ${key}`
    }
})

export default api;