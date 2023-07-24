<template>
  <div class="loginwrapper">
    <div class="lg-inner-column">
      <div class="right-column relative">
        <div
          class="inner-content h-full flex flex-col bg-white dark:bg-slate-800"
        >
          <div class="auth-box h-full flex flex-col justify-center">
            <div class="mobile-logo text-center mb-6 lg:hidden block">
              <router-link to="/"
                ><img
                  :src="logo"
                  alt=""
                  class="mx-auto"
              /></router-link>
            </div>
            <div class="text-center 2xl:mb-10 mb-5">
              <h4 class="font-medium">Sign up</h4>
              <div class="text-slate-500 dark:text-slate-400 text-base">
                Create an account to start using Dashcode
              </div>
            </div>
            <Signup />
            <div
              className=" relative border-b-[#9AA2AF] border-opacity-[16%] border-b pt-6"
            >
              <div
                className=" absolute inline-block  bg-white dark:bg-slate-800 left-1/2 top-1/2 transform -translate-x-1/2 px-4 min-w-max text-sm  text-slate-500  dark:text-slate-400font-normal "
              >
                Or continue with
              </div>
            </div>
            <div class="max-w-[242px] mx-auto mt-8 w-full">
              <Social />
            </div>
            <div
              class="max-w-[215px] mx-auto font-normal text-slate-500 dark:text-slate-400 2xl:mt-12 mt-6 uppercase text-sm"
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
import Signup from "../common/Signup";
import Social from "../common/Social";
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
    Social,
    Signup,
  },
};
</script>
<style lang="scss"></style>
