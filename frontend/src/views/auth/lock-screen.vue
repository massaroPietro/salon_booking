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
        <div
          class="absolute left-0 2xl:bottom-[-160px] bottom-[-130px] h-full w-full z-[-1]"
        >
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
            <div class="text-center mb-10">
              <h4 class="font-medium mb-4">Lock Screen</h4>
              <div class="text-slate-500 dark:text-slate-400 text-base">
                Enter your password to unlock the screen!
              </div>
            </div>
            <div class="author-bio text-center mb-8">
              <div class="h-14 w-14 mx-auto rounded-full">
                <img
                  src="@/assets/images/all-img/user-big.png"
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
              class="md:max-w-[345px] mx-auto font-normal text-slate-500 dark:text-slate-400 mt-12 uppercase text-sm"
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
          <div class="auth-footer text-center">
            Copyright 2021, Dashcode All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Lockscreen from "./common/lockscreen";

export default {
  components: {
    Lockscreen,
  },
};
</script>
<style lang="scss"></style>
