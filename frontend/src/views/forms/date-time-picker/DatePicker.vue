<template>
  <div>
    <VueTailwindDatePicker v-model="dateValue" input-classes="form-control" />
  </div>
</template>
<script setup>
import VueTailwindDatePicker from "vue-tailwind-datepicker";
import { ref } from "vue";
const dateValue = ref("");
</script>
<style lang=""></style>
