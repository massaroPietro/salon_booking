import {defineStore} from "pinia";
import axios from "@/plugins/axios";
import apiEndpoints from "@/constant/apiEndpoints";
import router from "@/router";
import i18n from "@/main"

export const useAuthStore = defineStore('authStore', {
    state: () => {
        return {
            isAuthenticated: false,
            token: "",
            user: {
                settings: {
                    lang: "en",
                },
                salons: [],
            },
        }
    },
    getters: {
        fullName() {
            if (this.user) {
                return this.user.first_name + " " + this.user.last_name;
            }
            return "";
        },
        employeePicBySalon() {
            return this.user.employees.find((employee) => employee.salon === this.user.settings.current_salon).pic || "";
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
        logout() {
            let endpoint = apiEndpoints.logout();
            axios.post(endpoint).then(() => {
                router.push({name: "Login"})
                const store = useAuthStore();
                store.removeToken();
                const lang = navigator.language.substring(0, 2);
                axios.defaults.headers['Accept-Language'] = lang
                i18n.locale = lang;
            })
        },
        removeToken() {
            this.token = "";
            this.isAuthenticated = false
            axios.defaults.headers['Authorization'] = null;
            localStorage.removeItem('token')
        },
        getUser() {
            let endpoint = apiEndpoints.dashboardUser();
            axios.get(endpoint).then((response) => {
                this.user = response.data;
            })
        },
        getCurrentSalon() {
            return this.user.salons.find((salon) => salon.id === this.user.settings.current_salon);
        },
        isCurrentSalonOwner() {
            return this.user.id === this.getCurrentSalon().owner;
        }
    },
})
