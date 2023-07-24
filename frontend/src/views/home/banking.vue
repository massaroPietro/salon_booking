<template>
  <div class="da">
    <Breadcrumb />
    <div class="space-y-5 card-auto">
      <Card>
        <div
          class="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 place-content-center"
        >
          <div class="flex space-x-4 h-full items-center rtl:space-x-reverse">
            <div class="flex-none">
              <div class="h-20 w-20 rounded-full">
                <img
                  src="@/assets/images/all-img/main-user.png"
                  alt=""
                  class="w-full h-full"
                />
              </div>
            </div>
            <div class="flex-1">
              <h4 class="text-xl font-medium mb-2">
                <span class="block font-light">Good evening,</span>
                <span class="block">Mr. Jone Doe</span>
              </h4>
              <p class="text-sm dark:text-slate-300">Welcome to Dashcode</p>
            </div>
          </div>

          <div
            v-for="(item, i) in statistics"
            :key="i"
            class="bg-slate-50 dark:bg-slate-900 rounded p-4"
          >
            <div
              class="text-slate-600 dark:text-slate-400 text-sm mb-1 font-medium"
            >
              {{ item.title }}
            </div>
            <div class="text-slate-900 dark:text-white text-lg font-medium">
              {{ item.count }}
            </div>
            <div class="ml-auto max-w-[124px]">
              <apexchart
                type="bar"
                height="48"
                width="124"
                :options="item.name.chartOptions"
                :series="item.name.series"
              />
            </div>
          </div>
        </div>
      </Card>
      <div class="grid grid-cols-12 gap-5">
        <div class="lg:col-span-4 col-span-12 space-y-5">
          <Card title="My card">
            <template #header>
              <Button
                icon="heroicons-outline:plus"
                text="Add card"
                btnClass="btn-dark btn-sm "
              />
            </template>
            <div class="max-w-[90%] mx-auto mt-2">
              <CardSlider />
            </div>
          </Card>
          <Card title="Quick transfer">
            <div class="space-y-6">
              <!-- user list start -->
              <div class="bg-slate-50 dark:bg-slate-900 rounded-md p-4">
                <div class="flex justify-between mb-2">
                  <span class="text-lg text-slate-900 dark:text-white"
                    >Contacts</span
                  >
                  <router-link
                    to="#"
                    class="font-medium text-slate-900 dark:text-white underline text-sm"
                    >View all</router-link
                  >
                </div>
                <div data-simplebar>
                  <ul class="flex space-x-6 py-3 px-1">
                    <li
                      v-for="(item, i) in users"
                      :key="i"
                      @click="selectUser(i)"
                      :class="[
                        activeIndex === i
                          ? 'ring-2 ring-primary-500 ring-offset-2 '
                          : '',
                      ]"
                      class="h-[42px] w-[42px] cursor-pointer text-xl font-medium capitalize flex-none rounded-full bg-primary-500 text-white flex flex-col items-center justify-center"
                    >
                      {{ item.name }}
                    </li>
                  </ul>
                </div>
              </div>
              <!-- amout start -->
              <div class="bg-slate-100 dark:bg-slate-900 rounded-md p-4">
                <span
                  class="text-xs text-slate-500 dark:text-slate-400 block mb-1 cursor-pointer font-normal"
                  for="cdp"
                  >Amount</span
                >
                <Textinput
                  placeholder="$6547"
                  name="cdp"
                  classInput="bg-transparent border-none focus:ring-0 focus:border-none p-0 text-slate-900 dark:text-white text-sm placeholder:text-slate-400 placeholder:font-medium  h-auto font-medium"
                />
              </div>
              <!-- card number -->
              <div class="bg-slate-100 dark:bg-slate-900 rounded-md p-4">
                <label
                  class="text-xs text-slate-500 dark:text-slate-400 block cursor-pointer mb-1"
                  for="cd"
                  >Recipient account number</label
                >

                <Textinput
                  placeholder="3458-3548-6548-3244"
                  isMask
                  name="cd"
                  classInput="bg-transparent border-none focus:ring-0 focus:border-none p-0 text-slate-900 dark:text-white text-sm placeholder:text-slate-400 h-auto placeholder:font-medium font-medium"
                />
              </div>
              <!-- total amount -->
              <div class="flex justify-between">
                <div>
                  <span
                    class="text-xs text-slate-500 dark:text-slate-400 block mb-1"
                    >Total amount</span
                  >
                  <span
                    class="text-lg font-medium text-slate-900 dark:text-white block"
                    >$6547</span
                  >
                </div>
                <div>
                  <button type="button" class="btn btn-dark">Send money</button>
                </div>
              </div>
            </div>
          </Card>
        </div>
        <div class="lg:col-span-8 col-span-12">
          <div class="space-y-5 bank-table">
            <BankTable />

            <Card title="History">
              <template #header>
                <SelectMonth />
              </template>
              <div class="legend-ring4">
                <apexchart
                  type="area"
                  height="340"
                  :options="
                    this.$store.themeSettingsStore.isDark
                      ? basicArea2Dark.chartOptions
                      : basicArea2.chartOptions
                  "
                  :series="basicArea2.series"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
      <div class="grid lg:grid-cols-2 grid-cols-1 gap-5">
        <Card title="Account Receivable">
          <template #header>
            <DropEvent />
          </template>
          <apexchart
            type="line"
            height="300"
            :options="
              this.$store.themeSettingsStore.isDark
                ? basiclineOneDark.chartOptions
                : basiclineOne.chartOptions
            "
            :series="basiclineOne.series"
          />
        </Card>
        <Card title="Account Payable">
          <template #header>
            <DropEvent />
          </template>
          <apexchart
            type="line"
            height="300"
            :options="
              this.$store.themeSettingsStore.isDark
                ? basiclintwoDark.chartOptions
                : basiclintwo.chartOptions
            "
            :series="basiclintwo.series"
          />
        </Card>
      </div>
    </div>
  </div>
</template>
<script>
import Breadcrumb from "./Analytics-Component/Breadcrumbs";
import Button from "@/components/Button";
import Card from "@/components/Card";
import BankTable from "./Analytics-Component/BankTable";
import CardSlider from "./Analytics-Component/CardSlider";
import Textinput from "@/components/Textinput";
import {
  basicArea2,
  basicArea2Dark,
  basiclineOne,
  basiclineOneDark,
  basiclintwo,
  basiclintwoDark,
  columnCharthome2,
  columnCharthome3,
  columnCharthome4,
} from "./Analytics-Component/data";
import DropEvent from "./Analytics-Component/DropEvent";
import SelectMonth from "./Analytics-Component/SelectMonth";
export default {
  components: {
    Card,
    CardSlider,
    BankTable,
    Button,
    SelectMonth,
    DropEvent,
    Breadcrumb,
    Textinput,
  },
  data() {
    return {
      activeIndex: null,
      basicArea2,
      basicArea2Dark,
      basiclineOne,
      basiclineOneDark,
      basiclintwo,
      basiclintwoDark,
      statistics: [
        {
          name: columnCharthome3,
          title: "Current balance ",
          count: "$34,564",
          bg: "bg-[#E5F9FF] dark:bg-slate-900	",
          text: "text-info-500",
          icon: "heroicons:shopping-cart",
        },
        {
          name: columnCharthome4,
          title: "Credit",
          count: "$3,564",
          bg: "bg-[#E5F9FF] dark:bg-slate-900	",
          text: "text-warning-500",
          icon: "heroicons:cube",
        },
        {
          name: columnCharthome2,
          title: "Debit",
          count: "$3,564",
          bg: "bg-[#E5F9FF] dark:bg-slate-900	",
          text: "text-[#5743BE]",
          icon: "heroicons:arrow-trending-up-solid",
        },
      ],
      users: [
        {
          name: "Ab",
        },
        {
          name: "Bc",
        },
        {
          name: "Cd",
        },
        {
          name: "Df",
        },
        {
          name: "Ab",
        },
        {
          name: "Sd",
        },
        {
          name: "Sg",
        },
      ],
    };
  },
  methods: {
    selectUser(user) {
      this.activeIndex = user;
    },
  },
};
</script>
<style lang="scss">
.bank-table {
  tr {
    &:last-child {
      td {
        border-bottom: 0 !important;
      }
    }
  }
}
.dark {
  .bank-table table.vgt-table {
    border-bottom: none;
  }
}
</style>
