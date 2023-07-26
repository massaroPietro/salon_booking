import axios from 'axios';
import router from '@/router';
import {useCoreStore} from "@/store/core";
import {useAuthStore} from "@/store/auth";
import {useToast} from "vue-toastification";

axios.defaults.xsrfHeaderName = 'X-CSRFToken'
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.baseURL = 'http://127.0.0.1:8000/api'

axios.interceptors.request.use(
    config => {
        try {
            const store = useCoreStore();
            store.non_field_errors = [];
        } catch (e) {
            console.error(e);
        }
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

            try {
                const store = useCoreStore();
                store.non_field_errors = [...error.response.data.non_field_errors];
            } catch (e) {
                console.error(e)
            }
        }
        return Promise.reject(error);
    }
);

export default axios;
