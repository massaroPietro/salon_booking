<template>
  <div class="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
    <div
      class="py-[18px] px-4 rounded-[6px]"
      v-for="(item, i) in statistics"
      :class="item.bg"
      :key="i"
    >
      <div class="flex items-center space-x-6 rtl:space-x-reverse">
        <div class="flex-none">
          <apexchart
            type="area"
            height="48"
            width="48"
            :options="item.name.chartOptions"
            :series="item.name.series"
          />
        </div>
        <div class="flex-1">
          <div
            class="text-slate-600 dark:text-slate-800 text-sm mb-1 font-medium"
          >
            Totel revenue
          </div>
          <div class="text-slate-900 dark:text-slate-700 text-lg font-medium">
            3,564
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {
  shapeLine1,
  shapeLine2,
  shapeLine3,
} from "../../home/Analytics-Component/data";
export default {
  components: {},
  data() {
    return {
      statistics: [
        {
          name: shapeLine1,
          title: "Totel revenue",
          count: "3,564",
          bg: "bg-[#E5F9FF]",
        },
        {
          name: shapeLine2,
          title: "Products sold",
          count: "564",
          bg: "bg-[#FFEDE5]",
        },
        {
          name: shapeLine3,
          title: "Growth",
          count: "+5.0%",
          bg: "bg-[#EAE5FF]",
        },
      ],
    };
  },
};
</script>
<style lang=""></style>
