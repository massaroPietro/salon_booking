<script>
import NavbarComponent from "@/components/NavbarComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  name: "BaseLayout",
  components: {FooterComponent, NavbarComponent}
}
</script>

<template>

  <div class="min-h-screen">
    <navbar-component/>
    <div class="container">
      <router-view/>
    </div>
    <footer-component/>
  </div>
</template>

<style scoped>

</style>
