<template>
  <ul class="flex justify-around">
    <li>
      <GoogleLogin :autoLogin="true" :callback="callback"/>
    </li>
  </ul>
</template>
<script>
import axios from "@/plugins/axios";
import {useAuthStore} from "@/store/auth";
import {useToast} from "vue-toastification";
import {googleOneTap} from "vue3-google-login"
import Button from "@/components/Button/index.vue";
import apiEndpoints from "@/constant/apiEndpoints";

export default {
  name: "Social",
  components: {Button},
  setup() {
    const toast = useToast();
    const store = useAuthStore();
    return {toast, store}
  },
  mounted() {
    googleOneTap({autoLogin: true})
        .then((response) => {
          this.callback(response);
        })
  },
  methods: {
    callback(response) {
      let endpoint = apiEndpoints.authGoogle();
      const data = {
        access_token: response.credential
      }

      axios.post(endpoint, data)
          .then((response) => {

            const token = response.data.key;


            this.store.setToken(token, true);
            this.store.user = response.data.user;

            if(response.data.user.settings){
                this.$i18n.locale = response.data.user.settings.lang;
            }


            const toPath = this.$route.query.to || '/'
            this.$router.push(toPath)


            this.toast.success(this.$t("toasts.successLogin"), {
              timeout: 2000
            });
          })
          .catch((err) => {
            console.log(err);
          });
    }
  },
};
</script>
<style lang=""></style>
