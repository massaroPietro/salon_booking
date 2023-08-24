import {defineStore} from "pinia";
import axios from "@/plugins/axios";
import apiEndpoints from "@/constant/apiEndpoints";
import router from "@/router";
import i18n from "@/plugins/i18n";
import backendService from "@/utils/backendService";

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
        },
        isLoggedUser() {
            return (id) => this.user.id === id;
        },
        isOwner() {
            return (id) => this.getCurrentSalon().owner === id;
        },
        statusClass() {
            return (id) => {
                const isOwner = this.isOwner(id);
                return {
                    "text-success-500 bg-success-500": isOwner,
                    "text-warning-500 bg-warning-500": !isOwner,
                };
            }
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
        getCurrentSalon() {
            return this.user.salons.find((salon) => salon.id === this.user.settings.current_salon);
        },
        isCurrentSalonOwner() {
            return this.user.id === this.getCurrentSalon().owner;
        }
    },
})
