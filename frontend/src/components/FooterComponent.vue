<script>
import Icon from "@/components/Icon";

export default {
  name: "FooterComponent",
  components: {
    Icon
  }
}
</script>

<template>

  <div class="xl:fixed bottom-0 w-full">
    <div class="container">
      <div
          class="md:flex justify-between items-center flex-wrap space-y-4 py-6"
      >
        <div>
          <ul class="flex md:justify-start justify-center space-x-3">
            <li>
              <a href="#" class="social-link">
                <Icon icon="icomoon-free:facebook"
                />
              </a>
            </li>
            <li>
              <a href="#" class="social-link">
                <Icon icon="icomoon-free:twitter"
                />
              </a>
            </li>
            <li>
              <a href="#" class="social-link">
                <Icon icon="icomoon-free:linkedin2"
                />
              </a>
            </li>
            <li>
              <a href="#" class="social-link">
                <Icon icon="icomoon-free:google"
                />
              </a>
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
</template>

<style lang="scss" scoped>
.social-link {
  @apply h-8 w-8 flex flex-col items-center justify-center border-black-500 dark:border-slate-700 border rounded-full text-slate-900 dark:text-slate-300 leading-[1] hover:bg-slate-900 dark:hover:bg-slate-700 hover:text-white transition duration-150;
}
</style>
