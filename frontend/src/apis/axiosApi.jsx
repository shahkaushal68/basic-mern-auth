import axios from "axios";

export const axiosApi = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

axiosApi.defaults.headers = {
    'Content-Type': 'application/json'
}

// setting up interceptors
axiosApi.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error?.response?.status === 404) {
            console.log("/404");
        } else if (error?.response?.status === 500) {
            console.log("/500");
        } else if (error?.response?.status === 401) {
            console.log("/401");
        } else {
            console.log("/other-errors.");
        }
        return Promise.reject(error);
    }
);