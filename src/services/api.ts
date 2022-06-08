import axios from 'axios';

export const api = axios.create({
    baseURL: process.env.GRAPHQL_ACCESS_ENDPOINT || 'https://bmsblog.000webhostapp.com/graphql'
})