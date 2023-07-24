<template>
  <div class="flex justify-between flex-wrap items-center">
    <Breadcrumb />
    <div
      class="flex sm:space-x-4 space-x-2 sm:justify-end items-center md:mb-6 mb-4 rtl:space-x-reverse"
    >
      <VueTailwindDatePicker v-model="dateValue" v-slot="{ clear }">
        <div>
          <div
            class="date-btn inline-flex btn btn-md whitespace-nowrap space-x-2 rtl:space-x-reverse cursor-pointer bg-white dark:bg-slate-800 dark:text-slate-300 btn-md h-min text-sm font-normal text-slate-900"
            @click="clear"
          >
            <span class="text-lg"><Icon icon="heroicons:calendar" /></span>
            <span>Weekly</span>
          </div>
        </div>
      </VueTailwindDatePicker>

      <VueTailwindDatePicker v-model="dateValue2" as-single v-slot="{ clear }">
        <div>
          <div
            class="date-btn inline-flex btn btn-md whitespace-nowrap space-x-2 rtl:space-x-reverse cursor-pointer bg-white dark:bg-slate-800 dark:text-slate-300 btn-md h-min text-sm font-normal text-slate-900"
            @click="clear"
          >
            <span class="text-lg"
              ><Icon icon="heroicons-outline:filter"
            /></span>
            <span>Select date</span>
          </div>
        </div>
      </VueTailwindDatePicker>
    </div>
  </div>
</template>
<script setup>
import Breadcrumb from "@/components/Breadcrumbs";
import Icon from "@/components/Icon";
import VueTailwindDatePicker from "vue-tailwind-datepicker";
import { ref } from "vue";
const dateValue = ref("");
const dateValue2 = ref("");
</script>
<style lang="scss">
[data-headlessui-state="open"] {
  label {
    @apply ring-0 outline-none;
  }
  .date-btn {
    @apply dark:bg-slate-700 bg-slate-900 text-white;
  }
}
</style>
