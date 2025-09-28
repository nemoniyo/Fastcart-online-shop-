import axios from "axios";

export const API = axios.create({
    baseURL: "https://store-api.softclub.tj/",
});

API.interceptors.request.use((config) => {
    const token = localStorage.getItem("accessToken");
    if(token){
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

API.interceptors.response.use(
    (res) => res,
    (err) => {
        if (err.response?.status === 401) {
            window.location.href = "/login";
        }
        return Promise.reject(err);
    }
);

