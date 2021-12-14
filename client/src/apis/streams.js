import axios from 'axios';

export default axios.create({
    baseURL : 'http://localhost:3001',
    headers: {
        'Content-Type': 'application/json',
    },
    mode : 'cors',
    cache : 'no-cache',
})