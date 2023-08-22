<template>
  <div class="loginwrapper bg-slate-100 flex items-center justify-center">
    <div class="lg-inner-column">
      <div class="w-full h-full flex flex-col items-center justify-center">
        <div
            class="bg-white dark:bg-slate-800 relative my-[64px] mx-auto p-10 rounded-md max-w-[520px]"
        >
          <img
              src="@/assets/images/icon/success.svg"
              alt=""
              class="block mx-auto"
              v-if="!this.$store.themeSettingsStore.isDark"
          />
          <img
              src="@/assets/images/icon/white-s.svg"
              alt=""
              class="block mx-auto"
              v-if="this.$store.themeSettingsStore.isDark"
          />
          <div
              class="text-center text-slate-800 dark:text-white font-medium text-base mt-4 mb-8"
          >
            {{ $t('app.salons.addSalon') }}
          </div>
          <div
              class="text-slate-600 dark:text-slate-300 font-normal text-base mb-10 text-center"
          >
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </div>

            <AddSalonFormComponent @salon-added="authStore.getUser()"/>

          <span @click="authStore.logout()" class="btn btn-outline-dark block text-center mt-5">
            {{ $t('generic.comeBack') }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {useAuthStore} from "@/store/auth";
import Alert from "@/components/Alert/index.vue";
import SignIn from "@/views/auth/common/Signin.vue";
import AddSalonFormComponent from "@/components/commons/salons/AddSalonFormComponent.vue";

export default {
  name: "addFirstSalon",
  components: {AddSalonFormComponent, SignIn, Alert},
  data() {
    return {
      isLoading: false
    };
  },
  setup() {
    const authStore = useAuthStore();

    return {authStore};
  },
};
</script>
<style lang=""></style>
