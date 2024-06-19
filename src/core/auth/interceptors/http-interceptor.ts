import axios, { AxiosInstance, AxiosRequestConfig, AxiosRequestHeaders, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import LocalStorageService from '../../services/storage/LocalStorageService';

// Create an Axios instance
const api: AxiosInstance = axios.create({
    baseURL: 'https://api.example.com', // Replace with your API base URL
});

// Request interceptor
api.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        // Modify the request config here (e.g., add headers, authentication tokens, etc.)
        config.headers = {
            ...config.headers,
            // Add your custom headers here
            Authorization: `Bearer ${LocalStorageService.getItem('token')}`,
        } as AxiosRequestHeaders; // Explicitly type the headers object
        return config;
    },
    (error: any) => {
        // Handle request errors here
        return Promise.reject(error);
    }
);

// Response interceptor
api.interceptors.response.use(
    (response: AxiosResponse) => {
        // Modify the response data here (e.g., transform, filter, etc.)
        return response;
    },
    (error: any) => {
        // Handle response errors here
        return Promise.reject(error);
    }
);

export default api;