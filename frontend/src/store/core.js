import {defineStore} from "pinia";
export const useCoreStore = defineStore('coreStore', {
    state: () => {
        return {
            isLoading: false,
            lang: null,
            reload: 0,
        }
    },
    getters: {},
    actions: {

    }
})
