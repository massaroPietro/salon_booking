<template>
  <router-view :key="coreStore.reload"/>
  <EmployeeInvitationsModals />
</template>

<script>
import {useThemeSettingsStore} from "@/store/themeSettings";
import {useAuthStore} from "@/store/auth";
import axios from "@/plugins/axios";
import {useCoreStore} from "@/store/core";
import backendService from "@/utils/backendService";
import EmployeeInvitationsModals from "@/components/modals/EmployeeInvitationsModals.vue";
export default {
  name: "App",
  components: {EmployeeInvitationsModals},
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
      backendService.getDashboardUser();
    } else {
      axios.defaults.headers.common['Authorization'] = ''
    }
  },
}
</script>

