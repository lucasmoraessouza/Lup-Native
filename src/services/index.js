import axios from "axios";
import { useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const api = axios.create({
    baseURL: 'https://api.lup.lionsoft.com.br/',
});

api.interceptors.request.use(async (config) => {
    const token = await AsyncStorage.getItem('token')
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})

// api.interceptors.response.use((response) => {
//     if (response.message) {
//         throw response;
//     } else {
//         return response;
//     }
// });
