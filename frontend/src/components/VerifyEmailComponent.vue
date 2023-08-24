<template>
  <div class="loginwrapper bg-slate-100 flex items-center justify-center">
    <div class="lg-inner-column">
      <div class="w-full h-full flex flex-col items-center justify-center">
        <div
            class="bg-white dark:bg-slate-800 relative mt-[64px] mx-auto p-10 rounded-md max-w-[520px]"
        >
          <img
              src="../assets/images/icon/success.svg"
              alt=""
              class="block mx-auto"
              v-if="!this.$store.themeSettingsStore.isDark"
          />
          <img
              src="../assets/images/icon/white-s.svg"
              alt=""
              class="block mx-auto"
              v-if="this.$store.themeSettingsStore.isDark"
          />
          <div
              class="text-center text-slate-800 dark:text-white font-medium text-base mt-4 mb-8"
          >
            {{ $t('auth.registerCompleted') }}
          </div>
          <div
              class="text-slate-600 dark:text-slate-300 font-normal text-base text-center"
          >
            {{ $t('auth.successRegisterDescription', {email: email}) }}
          </div>

          <Button @click="resendEmail" :text="$t('auth.resendEmail')"
                  btn-class="btn btn-dark block w-full text-center mt-5"
                  :is-loading="isLoading"/>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
import Button from "@/components/Button/index.vue";
import apiEndpoints from "@/constant/apiEndpoints";
import axios from "@/plugins/axios";
import {useToast} from "vue-toastification";
import backendService from "@/utils/backendService";

export default {
  name: "VerifyEmailComponent",
  components: {Button},
  data() {
    return {
      isLoading: false,
    }
  },
  props: {
    email: {
      required: true,
      type: String
    }
  },
  methods: {
    resendEmail() {
      this.isLoading = true;
      const callbacks = {
        finally_callback: () => {
          this.isLoading = false;
        }
      }
      backendService.resendVerificationEmail(this.email, callbacks)
    }
  }
};
</script>
