import {defineStore} from "pinia";

export const useCoreStore = defineStore('auth', {
    state: () => {
        return {
            isLoading: false,
            lang: null,
        }
    },
    getters: {},
    actions: {}
})
