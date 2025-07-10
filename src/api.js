import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:4000",
    // withCredentials: true,
});

export const googleAuth = (code) => api.get(`/auth/google?code=${code}`);
