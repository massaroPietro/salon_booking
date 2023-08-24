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
import backendService from "@/utils/backendService";

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

      backendService.googleLoginUser(data);
    }
  },
};
</script>
<style lang=""></style>
