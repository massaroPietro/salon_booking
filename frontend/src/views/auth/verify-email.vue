<script>
import apiEndpoints from "@/constant/apiEndpoints";
import axios from "@/plugins/axios";
import {useToast} from "vue-toastification";
import backendService from "@/utils/backendService";

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

      backendService.verifyEmail(key);
    }
  },
}
</script>

<template>

</template>

<style scoped>

</style>
