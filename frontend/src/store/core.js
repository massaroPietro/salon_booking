import {defineStore} from "pinia";

export const useCoreStore = defineStore('auth',{
    state: ()=>{
        return {
            isLoading: false,
            lang: null,
            non_field_errors: [],
        }
    },
    getters:{},
    actions:{}
})
