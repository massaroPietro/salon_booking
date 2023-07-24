<template>
  <div class="loginwrapper">
    <div class="lg-inner-column">
      <div class="right-column relative">
        <div
          class="inner-content h-full flex flex-col bg-white dark:bg-slate-800"
        >
          <div class="auth-box2 flex flex-col justify-center h-full">
            <div class="mobile-logo text-center mb-6 lg:hidden block">
              <router-link to="/"
                ><img
                  :src="logo"
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
      <div
        class="left-column bg-cover bg-no-repeat bg-center"
        :style="{
          backgroundImage:
            'url(' + pageBg + ')',
        }"
      >
        <div class="flex flex-col h-full justify-center">
          <div class="flex-1 flex flex-col justify-center items-center">
            <router-link to="/">
              <img
                :src="logoWhite"
                alt=""
                class="mb-10"
              />
            </router-link>
          </div>
          <div>
            <div
              class="black-500-title max-w-[525px] mx-auto pb-20 text-center"
            >
              Unlock your Project
              <span class="text-white font-bold">performance</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ForgotPass from "./common/forgot";
// Image Import
import pageBg from "@/assets/images/all-img/login-bg.png"
import logoWhite from "@/assets/images/logo/logo-white.svg"
import logo from "@/assets/images/logo/logo.svg"

export default {
  data () {
    return {
      logoWhite,logo,pageBg
    }
  },
  components: {
    ForgotPass,
  },
};
</script>
<style lang="scss"></style>
