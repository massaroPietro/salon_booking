import {defineStore} from "pinia";
import axios from "@/plugins/axios";
import apiEndpoints from "@/constant/apiEndpoints";

export const useAuthStore = defineStore('auth', {
    state: () => {
        return {
            isAuthenticated: false,
            token: "",
            user: {
                settings: {
                    lang: "en",
                }
            },
        }
    },
    getters: {
        fullName() {
            if (this.user) {
                return this.user.first_name + " " + this.user.last_name;
            }
            return "";
        }
    },
    actions: {
        initializeStore() {
            if (localStorage.getItem('token')) {
                this.token = localStorage.getItem('token')
                this.isAuthenticated = true
            } else {
                this.token = "";
                this.isAuthenticated = false
            }
        },
        setToken(token, remember) {
            this.token = token
            this.isAuthenticated = true
            axios.defaults.headers['Authorization'] = 'Token ' + token
            if (remember) {
                localStorage.setItem('token', token)
            }
        },
        removeToken() {
            this.token = "";
            this.isAuthenticated = false
            axios.defaults.headers['Authorization'] = null;
            localStorage.removeItem('token')
        },
        getUser() {
            let endpoint = apiEndpoints.user();
            axios.get(endpoint).then((response) => {
                this.user = response.data;
            })
        }
    },
})
