<template>
  <div class="min-h-screen">
    <div class="absolute left-0 top-0 w-full">
      <div class="flex flex-wrap justify-between items-center py-6 container">
        <div>
          <router-link :to="{ name: 'home' }">
            <img
              src="@/assets/images/logo/logo.svg"
              alt=""
              v-if="!this.$store.themeSettingsStore.isDark"
            />
            <img
              src="@/assets/images/logo/logo-white.svg"
              alt=""
              v-if="this.$store.themeSettingsStore.isDark"
            />
          </router-link>
        </div>
        <div>
          <Button text="Contact us" btnClass=" btn-outline-dark btn-sm" />
        </div>
      </div>
    </div>
    <div class="container">
      <div
        class="flex justify-center flex-wrap items-center min-h-screen flex-col text-center"
      >
        <img src="@/assets/images/svg/img-2.svg" alt="" />
        <h4 class="text-3xl font-medium text-slate-900 dark:text-white mb-2">
          We are under maintenance.
        </h4>
        <p class="font-normal text-base text-slate-500 dark:text-slate-300">
          We’re making the system more awesome. <br />
          We’ll be back shortly.
        </p>
      </div>
    </div>
    <div class="fixed bottom-0 w-full">
      <div class="container">
        <div
          class="md:flex justify-between items-center flex-wrap space-y-4 py-6"
        >
          <div>
            <ul class="flex md:justify-start justify-center space-x-3">
              <li>
                <a href="#" class="social-link">
                  <Icon icon="icomoon-free:facebook"
                /></a>
              </li>
              <li>
                <a href="#" class="social-link">
                  <Icon icon="icomoon-free:twitter"
                /></a>
              </li>
              <li>
                <a href="#" class="social-link">
                  <Icon icon="icomoon-free:linkedin2"
                /></a>
              </li>
              <li>
                <a href="#" class="social-link">
                  <Icon icon="icomoon-free:google"
                /></a>
              </li>
            </ul>
          </div>
          <div>
            <ul class="flex md:justify-start justify-center space-x-3">
              <li>
                <a
                  href="#"
                  class="text-slate-500 dark:text-slate-400 text-sm transition duration-150 hover:text-slate-900"
                  >Privacy policy</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="text-slate-500 dark:text-slate-400 text-sm transition duration-150 hover:text-slate-900"
                  >Faq</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="text-slate-500 dark:text-slate-400 text-sm transition duration-150 hover:text-slate-900"
                  >Email us</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Button from "@/components/Button";
import Icon from "@/components/Icon";
export default {
  components: {
    Button,
    Icon,
  },
};
</script>
<style lang="scss" scoped>
.social-link {
  @apply h-8 w-8 flex flex-col items-center justify-center border-black-500 dark:border-slate-700 border rounded-full text-slate-900 dark:text-slate-300 leading-[1] hover:bg-slate-900 dark:hover:bg-slate-700 hover:text-white transition duration-150;
}
</style>
