<template>
  <ul class="flex justify-around">
    <li>
      <GoogleLogin :autoLogin="true" :callback="callback"/>
    </li>
  </ul>
</template>
<script>
import {useAuthStore} from "@/store/auth";
import {useToast} from "vue-toastification";
import {googleOneTap} from "vue3-google-login"
import Button from "@/components/Button/index.vue";
import backendService from "@/utils/backendService";

export default {
  name: "Social",
  emits: ['logged'],
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
      const data = {
        access_token: response.credential
      }
      const config = {
        success_callback: () => {
          this.$emit('logged');
        }
      }

      backendService.googleLoginUser(data, config);
    }
  },
};
</script>
<style lang=""></style>
