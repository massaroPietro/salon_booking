<template>
  <div
    class="loginwrapper bg-cover bg-no-repeat bg-center"
    :style="{
      backgroundImage:
        'url(' + pageBg + ')',
    }"
  >
    <div class="lg-inner-column">
      <div class="left-columns lg:w-1/2 lg:block hidden">
        <div class="logo-box-3">
          <router-link to="/" class="">
            <img
              :src="logoWhite"
              alt=""
              class="mb-10"
            />
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
          <div class="text-center mb-10">
            <h4 class="font-medium mb-4">Lock Screen</h4>
            <div class="text-slate-500 dark:text-slate-400 text-base">
              Enter your password to unlock the screen!
            </div>
          </div>
          <div class="author-bio text-center mt-10 mb-8">
            <div class="h-14 w-14 mx-auto rounded-full">
              <img
                :src="userBg"
                alt=""
                class="w-full h-full object-cover block"
              />
            </div>
            <div
              class="text-slate-900 dark:text-white text-base font-medium mt-4"
            >
              Kathryn Murphy
            </div>
          </div>
          <Lockscreen />

          <div
            class="text-sm mx-auto w-full text-center font-normal text-slate-500 dark:text-slate-400 mt-12 uppercase"
          >
            Not you ? return
            <router-link
              to="/"
              class="text-slate-900 dark:text-white font-medium hover:underline"
            >
              Sign In
            </router-link>
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
import Lockscreen from "./common/lockscreen";
// Image Import
import pageBg from "@/assets/images/all-img/page-bg.png"
import userBg from "@/assets/images/all-img/user-big.png"
import logoWhite from "@/assets/images/logo/logo-white.svg"
import logo from "@/assets/images/logo/logo.svg"


export default {
  data () {
    return {
      logoWhite,logo,pageBg,userBg
    }
  },
  components: {
    Lockscreen,
  },
};
</script>
<style lang="scss"></style>
