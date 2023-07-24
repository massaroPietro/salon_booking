<template>
  <div class="loginwrapper">
    <div class="lg-inner-column">
      <div class="left-column relative z-[1]">
        <div class="max-w-[520px] pt-20 ltr:pl-20 rtl:pr-20">
          <router-link to="/">
            <img
              src="@/assets/images/logo/logo.svg"
              alt=""
              class="mb-10"
              v-if="!this.$store.themeSettingsStore.isDark"
            />
            <img
              src="@/assets/images/logo/logo-white.svg"
              alt=""
              class="mb-10"
              v-else
            />
          </router-link>

          <h4>
            Unlock your Project
            <span class="text-slate-800 dark:text-slate-400 font-bold"
              >performance</span
            >
          </h4>
        </div>
        <div class="absolute left-0 bottom-[-130px] h-full w-full z-[-1]">
          <img
            src="@/assets/images/auth/ils1.svg"
            alt=""
            class="h-full w-full object-contain"
          />
        </div>
      </div>
      <div class="right-column relative">
        <div
          class="inner-content h-full flex flex-col bg-white dark:bg-slate-800"
        >
          <div class="auth-box2 flex flex-col justify-center h-full">
            <div class="mobile-logo text-center mb-6 lg:hidden block">
              <router-link to="/"
                ><img
                  src="@/assets/images/logo/logo.svg"
                  alt=""
                  class="mx-auto"
              /></router-link>
            </div>
            <div class="text-center 2xl:mb-10 mb-5">
              <h4 class="font-medium mb-4">Forgot Your Password?</h4>
              <div class="text-slate-500 dark:text-slate-400 text-base">
                Reset Password with Dashcode.
              </div>
            </div>
            <div
              class="font-normal text-base text-slate-500 dark:text-slate-400 text-center px-2 bg-slate-100 dark:bg-slate-600 rounded py-3 mb-4 mt-10"
            >
              Enter your Email and instructions will be sent to you!
            </div>

            <ForgotPass />
            <div
              class="md:max-w-[345px] mx-auto font-normal text-slate-500 dark:text-slate-400 2xl:mt-12 mt-8 uppercase text-sm"
            >
              Forget It,
              <router-link
                to="/"
                class="text-slate-900 dark:text-white font-medium hover:underline"
              >
                Send me Back
              </router-link>
              to The Sign In
            </div>
          </div>
          <div class="auth-footer text-center">
            Copyright 2021, Dashcode All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ForgotPass from "./common/forgot";

export default {
  components: {
    ForgotPass,
  },
};
</script>
<style lang="scss"></style>
