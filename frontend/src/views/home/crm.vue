<template>
  <div>
    <Breadcrumb />
    <div class="card-auto space-y-5">
      <div class="grid grid-cols-12 gap-5">
        <div class="lg:col-span-8 col-span-12 space-y-5">
          <Card>
            <div class="grid xl:grid-cols-4 lg:grid-cols-2 col-span-1 gap-3">
              <div
                v-for="(item, i) in statistics"
                :key="i"
                :class="item.bg"
                class="rounded-md p-4 bg-opacity-[0.15] dark:bg-opacity-25 relative z-[1]"
              >
                <div class="overlay absolute left-0 top-0 w-full h-full z-[-1]">
                  <img
                    :src="item.img"
                    alt=""
                    draggable="false"
                    class="w-full h-full object-contain"
                  />
                </div>
                <span
                  class="block mb-6 text-sm text-slate-900 dark:text-white font-medium"
                  >{{ item.title }}</span
                >
                <span
                  class="block mb- text-2xl text-slate-900 dark:text-white font-medium mb-6"
                  >{{ item.count }}</span
                >
                <div class="flex space-x-2 rtl:space-x-reverse">
                  <div class="flex-none text-xl" :class="item.text">
                    <Icon :icon="item.icon" />
                  </div>
                  <div class="flex-1 text-sm">
                    <span class="block mb-[2px]" :class="item.percentClass">{{
                      item.percent
                    }}</span>
                    <span class="block mb-1 text-slate-600 dark:text-slate-300"
                      >From last week</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </Card>
          <Card>
            <header class="md:flex md:space-y-0 space-y-4">
              <h6 class="flex-1 text-slate-900 dark:text-white capitalize">
                Deal distribution by stage
              </h6>
              <div class="flex-none">
                <FromGroup>
                  <flat-pickr
                    class="form-control bg-white"
                    placeholder="Select date range"
                    v-model="rangeDate"
                    :config="{ mode: 'range' }"
                  />
                </FromGroup>
              </div>
            </header>

            <div class="legend-ring">
              <apexchart
                type="bar"
                height="410"
                :options="
                  this.$store.themeSettingsStore.isDark
                    ? stackedDark.chartOptions
                    : stacked.chartOptions
                "
                :series="stacked.series"
              />
            </div>
          </Card>
        </div>
        <div class="lg:col-span-4 col-span-12 space-y-5">
          <Card title="Campaigns">
            <template #header>
              <DropEvent />
            </template>
            <ul class="divide-y divide-slate-100 dark:divide-slate-700">
              <li
                v-for="(item, i) in Campaigns"
                :key="i"
                class="first:text-xs text-sm first:text-slate-600 text-slate-600 dark:text-slate-300 py-2 first:uppercase"
              >
                <div class="flex justify-between">
                  <span>{{ item.name }}</span>
                  <span>{{ item.value }}</span>
                </div>
              </li>
            </ul>
          </Card>
          <Card title="trends calcultation">
            <template #header>
              <SelectMonth />
            </template>
            <div class="legend-ring3">
              <apexchart
                type="pie"
                height="335"
                :options="
                  this.$store.themeSettingsStore.isDark
                    ? pieChartDark.chartOptions
                    : pieChart.chartOptions
                "
                :series="pieChart.series"
              />
            </div>
          </Card>
        </div>
      </div>
      <Card title="Latest Transaction" noborder>
        <template #header>
          <DropEvent />
        </template>
        <div class="-mx-6">
          <CrmTable />
        </div>
      </Card>
    </div>
  </div>
</template>
<script>
import Breadcrumb from "./Analytics-Component/Breadcrumbs";
import Card from "@/components/Card";
import FromGroup from "@/components/FromGroup";
import Icon from "@/components/Icon";
import CrmTable from "./Analytics-Component/CrmTable";
import {
  pieChart,
  pieChartDark,
  stacked,
  stackedDark,
} from "./Analytics-Component/data";
import DropEvent from "./Analytics-Component/DropEvent";
import SelectMonth from "./Analytics-Component/SelectMonth";

// Import Images
import shade1 from "@/assets/images/all-img/shade-1.png"
import shade2 from "@/assets/images/all-img/shade-2.png"
import shade3 from "@/assets/images/all-img/shade-3.png"
import shade4 from "@/assets/images/all-img/shade-4.png"

export default {
  components: {
    Card,
    Icon,
    CrmTable,
    DropEvent,
    FromGroup,
    SelectMonth,
    Breadcrumb,
  },
  data() {
    return {
      stacked,
      stackedDark,
      rangeDate: null,
      pieChart,
      pieChartDark,
      statistics: [
        {
          title: "Sales",
          count: "354",
          bg: "bg-warning-500",
          text: "text-primary-500",
          percent: "25.67% ",
          icon: "heroicons:arrow-trending-up",
          img: shade1,
          percentClass: "text-primary-500",
        },
        {
          title: "Revenue ",
          count: "$86,954",

          bg: "bg-info-500",
          text: "text-primary-500",
          percent: "8.67%",
          icon: "heroicons:arrow-trending-up",
          img: shade2,
          percentClass: "text-primary-500",
        },
        {
          title: "Conversion",
          count: "15%",
          bg: "bg-primary-500",
          text: "text-danger-500",
          percent: "1.67%  ",
          icon: "heroicons:arrow-trending-down",
          img: shade3,
          percentClass: "text-danger-500",
        },
        {
          title: "Leads",
          count: "654",
          bg: "bg-success-500",
          text: "text-primary-500",
          percent: "11.67%  ",
          icon: "heroicons:arrow-trending-up",
          img: shade4,
          percentClass: "text-primary-500",
        },
      ],
      Campaigns: [
        {
          name: "Channel",
          value: "roi",
        },
        {
          name: "Email",
          value: "40%",
        },
        {
          name: "Website",
          value: "28%",
        },
        {
          name: "Facebook",
          value: "34%",
        },
        {
          name: "Offline",
          value: "17%",
        },
      ],
    };
  },
};
</script>
<style lang=""></style>
