<script>
import apiEndpoints from "@/constant/apiEndpoints";
import axios from "@/plugins/axios";
import {useToast} from "vue-toastification";

export default {
  name: "verify-email",
  data() {
    return {
      loading: false,
    };
  },
  setup() {
    const toast = useToast();

    return {toast}
  },
  created() {
    this.verifyEmail();
  },
  methods: {
    verifyEmail() {
      const pathSegments = this.$route.path.split('/');
      const key = pathSegments[pathSegments.length - 1];

      let endpoint = apiEndpoints.verifyEmail();
      const data = {
        key: key,
      }
      this.loading = true
      axios.post(endpoint, data).then(() => {
        this.toast.success(this.$t('auth.verifyEmailSuccess'));
        this.$router.push({name: 'Login'})
      }).catch(() => {
        this.toast.error(this.$t('auth.verifyEmailError'));
        this.$router.push({name: 'Login'})
      })
    }
  },
}
</script>

<template>

</template>

<style scoped>

</style>
