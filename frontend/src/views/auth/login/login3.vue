<template>
  <div
    class="loginwrapper bg-cover bg-no-repeat bg-center"
    :style="{
      backgroundImage:
        'url(' + loginBg + ')',
    }"
  >
    <div class="lg-inner-column">
      <div class="left-columns lg:w-1/2 lg:block hidden">
        <div class="logo-box-3">
          <router-link to="/" class="">
            <img :src="logoWhite" alt="" />
          </router-link>
        </div>
      </div>
      <div class="lg:w-1/2 w-full flex flex-col items-center justify-center">
        <div class="auth-box-3">
          <div class="mobile-logo text-center mb-6 lg:hidden block">
            <router-link to="/"
              ><img :src="logo" alt="" class="mx-auto"
            /></router-link>
          </div>
          <div class="text-center 2xl:mb-10 mb-5">
            <h4 class="font-medium">Sign In</h4>
            <div class="text-slate-500 dark:text-slate-400 text-base">
              Sign in to your account to start using Dashcode
            </div>
          </div>
          <Signin />
          <div
            className=" relative border-b-[#9AA2AF] border-opacity-[16%] border-b pt-6"
          >
            <div
              className=" absolute inline-block  bg-white dark:bg-slate-800 dark:text-slate-400 left-1/2 top-1/2 transform -translate-x-1/2 px-4 min-w-max text-sm  text-slate-500  dark:text-slate-400font-normal "
            >
              Or continue with
            </div>
          </div>
          <div class="max-w-[242px] mx-auto mt-8 w-full">
            <Social />
          </div>
          <div
            class="mx-auto font-normal text-slate-500 dark:text-slate-400 2xl:mt-12 mt-6 uppercase text-sm text-center"
          >
            Already registered?
            <router-link
              to="/"
              class="text-slate-900 dark:text-white font-medium hover:underline"
            >
              Sign In</router-link
            >
          </div>
        </div>
      </div>
      <div class="auth-footer3 text-white py-5 px-5 text-xl w-full">
        Unlock your Project performance
      </div>
    </div>
  </div>
</template>
<script>
import Signin from "../common/Signin";
import Social from "../common/Social";
// Image Import
import loginBg from "@/assets/images/all-img/page-bg.png"
import logoWhite from "@/assets/images/logo/logo-white.svg"
import logo from "@/assets/images/logo/logo.svg"

export default {
  data () {
    return {
      logoWhite,logo,loginBg
    }
  },
  components: {
    Social,
    Signin,
  },
};
</script>
<style lang="scss"></style>
