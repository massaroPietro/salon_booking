<template>
  <div
    class="min-h-screen flex flex-col justify-center items-center text-center py-20 bg-slate-900"
  >
    <img src="@/assets/images/all-img/404-2.svg" alt="" />
    <div class="max-w-[546px] mx-auto w-full mt-12">
      <h4 class="text-white text-[40px] leading-[50px] mb-4">Page not found</h4>
      <div class="text-white text-base font-normal mb-10">
        The page you are looking for might have been removed had its name
        changed or is temporarily unavailable.
      </div>
    </div>
    <div class="max-w-[300px] mx-auto w-full">
      <router-link
        to="/"
        class="btn bg-white hover:bg-opacity-75 transition-all duration-150 block text-center"
      >
        Go to homepage
      </router-link>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang=""></style>
