import axios from "axios";

export const api_v1 = axios.create({
    baseURL: 'http://localhost:3000/api/v1'
})

export const controller = axios.create({
    baseURL: 'http://localhost:3000'
})