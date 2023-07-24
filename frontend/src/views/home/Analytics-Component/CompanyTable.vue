<template>
  <div>
    <vue-good-table
      :columns="columns"
      styleClass=" vgt-table   table-head v-middle"
      :rows="homeTable"
      :pagination-options="{
        enabled: true,
        perPage: perpage,
      }"
      :sort-options="{
        enabled: false,
      }"
    >
      <template v-slot:table-row="props">
        <div v-if="props.column.field == 'company'" class="flex items-center">
          <div class="flex-none">
            <div class="w-8 h-8 rounded-[100%] ltr:mr-3 rtl:ml-3">
              <img
                :src="props.row.company"
                alt=""
                class="w-full h-full rounded-[100%] object-cover"
              />
            </div>
          </div>
          <div class="flex-1 text-start">
            <h4 class="text-sm font-medium text-slate-600 whitespace-nowrap">
              Biffco Enterprises Ltd.
            </h4>
            <div class="text-xs font-normal text-slate-600 dark:text-slate-400">
              Biffco@example.com
            </div>
          </div>
        </div>
        <span v-if="props.column.field == 'category'"> Technology </span>
        <span
          v-if="props.column.field == 'sales'"
          class="flex space-x-6 items-center rtl:space-x-reverse"
        >
          <span> {{ props.row.sales + "%" }}</span>
          <span
            class="text-xl"
            :class="[
              props.row.sales > 100 ? 'text-success-500' : 'text-danger-500',
            ]"
          >
            <Icon
              icon="heroicons:arrow-trending-up"
              v-if="props.row.sales > 100"
            />
            <Icon icon="heroicons:arrow-trending-down" v-else />
          </span>
        </span>
      </template>
      <template #pagination-bottom="props">
        <div class="py-4 px-3 flex justify-center">
          <Pagination
            :total="total"
            :current="current"
            :per-page="perpage"
            :pageRange="pageRange"
            @page-changed="current = $event"
            :pageChanged="props.pageChanged"
            :perPageChanged="props.perPageChanged"
            :options="options"
          >
            >
          </Pagination>
        </div>
      </template>
    </vue-good-table>
  </div>
</template>
<script>
import Pagination from "@/components/Pagination";
import Icon from "@/components/Icon";

import { homeTable } from "../../../constant/basic-tablle-data";

export default {
  components: {
    Pagination,
    Icon,
  },

  data() {
    return {
      total: homeTable.length,
      homeTable,
      current: 1,
      perpage: 5,
      pageRange: 5,
      searchTerm: "",
      actions: [
        {
          name: "view",
          icon: "heroicons-outline:eye",
        },
        {
          name: "edit",
          icon: "heroicons:pencil-square",
        },
        {
          name: "delete",
          icon: "heroicons-outline:trash",
        },
      ],
      options: [
        {
          value: "1",
          label: "1",
        },
        {
          value: "3",
          label: "3",
        },
        {
          value: "5",
          label: "5",
        },
      ],
      columns: [
        {
          label: "Company",
          field: "company",
        },
        {
          label: "CATEGORY",
          field: "category",
        },

        {
          label: "VIEWS",
          field: "views",
        },

        {
          label: "REVENUE",
          field: "revenue",
        },
        {
          label: "SALES",
          field: "sales",
        },
      ],
    };
  },
};
</script>
<style lang="scss"></style>
