import React from 'react'
import axios from "axios";

const apiKey = process.env.REACT_APP_API_KEY;

const Api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${apiKey}`
    }
})

export default Api;