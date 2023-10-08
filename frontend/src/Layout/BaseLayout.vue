<script>
import NavbarComponent from "@/components/NavbarComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import {googleOneTap} from "vue3-google-login";
import backendService from "@/utils/backendService";
import {useAuthStore} from "@/store/auth";

export default {
  name: "BaseLayout",
  components: {FooterComponent, NavbarComponent},
  setup() {
    const authStore = useAuthStore();
    return {authStore}
  },
  mounted() {
    if (!this.authStore.isAuthenticated) {
      googleOneTap({autoLogin: true})
          .then((response) => {
            this.callback(response);
          })
    }
  },
  methods: {
    callback(response) {
      const data = {
        access_token: response.credential
      }

      backendService.googleLoginUser(data);
    }
  },
}
</script>

<template>

  <div class="min-h-screen">
    <navbar-component/>
    <div class="container">
      <router-view/>
    </div>
    <footer-component/>
  </div>
</template>

<style scoped>

</style>
