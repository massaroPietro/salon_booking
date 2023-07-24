<template>
  <div class="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
    <div v-for="(item, i) in statistics" :key="i">
      <Card bodyClass="pt-4 pb-3 px-4">
        <div class="flex space-x-3 rtl:space-x-reverse">
          <div class="flex-none">
            <div
              class="h-12 w-12 rounded-full flex flex-col items-center justify-center text-2xl"
              :class="`${item.bg} ${item.text}`"
            >
              <Icon :icon="item.icon" />
            </div>
          </div>
          <div class="flex-1">
            <div
              class="text-slate-600 dark:text-slate-400 text-sm mb-1 font-medium"
            >
              {{ item.title }}
            </div>
            <div class="text-slate-900 dark:text-slate-300 text-lg font-medium">
              {{ item.count }}
            </div>
          </div>
        </div>
        <div class="ltr:ml-auto rtl:mr-auto max-w-[124px]">
          <apexchart
            type="area"
            height="41"
            width="124"
            :options="item.name.chartOptions"
            :series="item.name.series"
          />
        </div>
      </Card>
    </div>
  </div>
</template>
<script>
import Icon from "@/components/Icon";
import Card from "@/components/Card";
import {
  shapeLine1,
  shapeLine2,
  shapeLine3,
} from "../../home/Analytics-Component/data";
export default {
  components: {
    Card,
    Icon,
  },
  data() {
    return {
      statistics: [
        {
          name: shapeLine1,
          title: "Totel revenue",
          count: "3,564",
          bg: "bg-[#E5F9FF] dark:bg-slate-900	",
          text: "text-info-500",
          icon: "heroicons:shopping-cart",
        },
        {
          name: shapeLine2,
          title: "Products sold",
          count: "564",
          bg: "bg-[#E5F9FF] dark:bg-slate-900	",
          text: "text-warning-500",
          icon: "heroicons:cube",
        },
        {
          name: shapeLine3,
          title: "Growth",
          count: "+5.0%",
          bg: "bg-[#E5F9FF] dark:bg-slate-900	",
          text: "text-[#5743BE]",
          icon: "heroicons:arrow-trending-up-solid",
        },
      ],
    };
  },
};
</script>
<style lang=""></style>
