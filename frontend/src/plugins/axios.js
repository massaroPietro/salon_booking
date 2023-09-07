import axios from 'axios';
import router from '@/router';
import {useAuthStore} from "@/store/auth";

let lang = navigator.language.substring(0, 2);

axios.defaults.xsrfHeaderName = 'X-CSRFToken'
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.baseURL = 'http://127.0.0.1:8000/api'
axios.defaults.headers.common["Accept-Language"] = lang;
axios.interceptors.request.use(
    config => {
        console.log(config)
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response) {
            if (error.response.status === 404) {
                router.push('/');
            }
            if (error.response.status === 403) {
                const authStore = useAuthStore();
                authStore.removeToken();
                router.push('/auth/login');
            }

        }
        return Promise.reject(error);
    }
);

export default axios;
