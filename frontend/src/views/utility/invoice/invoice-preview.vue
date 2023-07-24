<template>
  <div>
    <div class="lg:flex justify-between flex-wrap items-center">
      <Breadcrumb />
      <div class="flex lg:justify-end items-center flex-wrap">
        <button
          class="invocie-btn inline-flex btn btn-sm whitespace-nowrap space-x-1 cursor-pointer bg-white dark:bg-slate-800 dark:text-slate-300 btn-md h-min text-sm font-normal text-slate-900 rtl:space-x-reverse"
        >
          <span class="text-lg"><Icon icon="heroicons:pencil-square" /></span>
          <span>Edit</span>
        </button>
        <button
          type="button"
          @click="print"
          class="invocie-btn inline-flex btn btn-sm whitespace-nowrap space-x-1 cursor-pointer bg-white dark:bg-slate-800 dark:text-slate-300 btn-md h-min text-sm font-normal text-slate-900 rtl:space-x-reverse"
        >
          <span class="text-lg"><Icon icon="heroicons:printer" /></span>
          <span>Print</span>
        </button>
        <button
          class="invocie-btn inline-flex btn btn-sm whitespace-nowrap space-x-1 cursor-pointer bg-white dark:bg-slate-800 dark:text-slate-300 btn-md h-min text-sm font-normal text-slate-900 rtl:space-x-reverse"
        >
          <span class="text-lg"><Icon icon="heroicons:arrow-down-tray" /></span>
          <span>Download</span>
        </button>
        <button
          class="invocie-btn inline-flex btn btn-sm whitespace-nowrap space-x-1 cursor-pointer bg-white dark:bg-slate-800 dark:text-slate-300 btn-md h-min text-sm font-normal text-slate-900 rtl:space-x-reverse"
        >
          <span class="text-lg transform -rotate-45"
            ><Icon icon="heroicons:paper-airplane"
          /></span>
          <span>Send invoice</span>
        </button>
      </div>
    </div>
    <Card bodyClass="p-0">
      <div
        class="flex justify-between flex-wrap space-y-4 px-6 pt-6 bg-slate-50 dark:bg-slate-800 pb-6 rounded-t-md"
      >
        <div>
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

          <div
            class="text-slate-500 dark:text-slate-300 font-normal leading-5 mt-4 text-sm"
          >
            Dashcode <br />
            House# 339, New DOHS, Mohakhali, <br />
            Dhaka - 1206, Bangladesh
            <div class="flex space-x-2 mt-2 leading-[1] rtl:space-x-reverse">
              <Icon icon="heroicons-outline:phone" />
              <span>(252) 555-0126,(201) 555-0124</span>
            </div>
            <div
              class="mt-[6px] flex space-x-2 leading-[1] rtl:space-x-reverse"
            >
              <Icon icon="heroicons-outline:mail" />
              <span>Dashcode@example.com</span>
            </div>
          </div>
        </div>
        <div>
          <span
            class="block text-slate-900 dark:text-slate-300 font-medium leading-5 text-xl"
          >
            Bill to:</span
          >

          <div
            class="text-slate-500 dark:text-slate-300 font-normal leading-5 mt-4 text-sm"
          >
            Annette black-500 <br />
            4140 Parker Rd. Allentown, New <br />Mexico 31134
            <div class="flex space-x-2 mt-2 leading-[1] rtl:space-x-reverse">
              <Icon icon="heroicons-outline:phone" />
              <span>(252) 555-0126,(201) 555-0124</span>
            </div>
            <div
              class="mt-[6px] flex space-x-2 leading-[1] rtl:space-x-reverse"
            >
              <Icon icon="heroicons-outline:mail" />
              <span>Dashcode@example.com</span>
            </div>
          </div>
        </div>
        <div class="space-y-[2px]">
          <span
            class="block text-slate-900 dark:text-slate-300 font-medium leading-5 text-xl mb-4"
          >
            Invoice:</span
          >
          <h4
            class="text-slate-600 font-medium dark:text-slate-300 text-xs uppercase"
          >
            Invoice number:
          </h4>
          <div
            class="text-slate-500 dark:text-slate-300 font-normal leading-5 text-sm"
          >
            #89572935Kh
          </div>
          <h4
            class="text-slate-600 font-medium dark:text-slate-300 text-xs uppercase"
          >
            date
          </h4>
          <div
            class="text-slate-500 dark:text-slate-300 font-normal leading-5 text-sm"
          >
            09 December 2021
          </div>
        </div>
      </div>
      <div
        class="max-w-[980px] mx-auto shadow-base dark:shadow-none my-8 rounded-md overflow-x-auto"
      >
        <TotalTable />
      </div>
      <div
        class="py-10 text-center md:text-2xl text-xl font-normal text-slate-600 dark:text-slate-300"
      >
        Thank you for your purchase!
      </div>
    </Card>
  </div>
</template>
<script>
import Card from "@/components/Card";
import Breadcrumb from "@/components/Breadcrumbs";
import Icon from "@/components/Icon";
import TotalTable from "./module/TotalTable.vue";
export default {
  components: {
    Card,
    Icon,
    TotalTable,
    Breadcrumb,
  },
  methods: {
    print() {
      window.print();
    },
  },
};
</script>
<style lang="scss">
.vgt-wrap__actions-footer {
  border: none !important;
}
.invocie-btn {
  @apply hover:bg-slate-900 hover:text-slate-100 dark:hover:bg-slate-600 mr-3 mb-4;
}
@media print {
  .invocie-btn {
    display: none;
  }
  .sidebar-wrapper,
  .app-header,
  .site-footer,
  .shadow-deep {
    @apply hidden;
  }
  .content-wrapper {
    @apply w-full ml-0;
  }
}
</style>
