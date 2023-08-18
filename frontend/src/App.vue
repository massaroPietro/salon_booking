<template>
  <router-view :key="coreStore.reload"/>
</template>

<script>
import {useThemeSettingsStore} from "@/store/themeSettings";
import {useAuthStore} from "@/store/auth";
import axios from "@/plugins/axios";
import Button from "@/components/Button/index.vue";
import Textinput from "@/components/Textinput/index.vue";
import Modal from "@/components/Modal/Modal.vue";
import Success from "@/views/auth/success.vue";
import AddFirstSalon from "@/views/auth/add-first-salon.vue";
import {useCoreStore} from "@/store/core";

export default {
  name: "App",
  components: {AddFirstSalon, Success, Modal, Textinput, Button},
  mounted() {
    this.$store.themeSettingsStore = useThemeSettingsStore();
  },
  setup() {
    const authStore = useAuthStore();
    const coreStore = useCoreStore();
    return {authStore, coreStore};
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
  },
}
</script>

<style></style>
