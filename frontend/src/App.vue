<template>
  <router-view/>
</template>

<script>
import {useThemeSettingsStore} from "@/store/themeSettings";
import {useAuthStore} from "@/store/auth";
import axios from "@/plugins/axios";

export default {
  name: "App",
  mounted() {
    this.$store.themeSettingsStore = useThemeSettingsStore()
  },
  setup() {
    const authStore = useAuthStore();
    return {authStore};
  },
  beforeCreate() {
    this.authStore.initializeStore();

    const token = this.authStore.token;

    if (token) {
      axios.defaults.headers.common['Authorization'] = 'Token ' + token
      this.authStore.getUser();
    } else {
      axios.defaults.headers.common['Authorization'] = ''
    }
  }
}
</script>

<style></style>
