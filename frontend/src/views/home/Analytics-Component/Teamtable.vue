<template>
  <div class="-mx-6 -mb-6">
    <vue-good-table
      :columns="columns"
      styleClass=" vgt-table   lesspadding v-middle table-head  rounded-md "
      :rows="teamtable"
      :pagination-options="{
        enabled: true,
        perPage: perpage,
      }"
      :sort-options="{
        enabled: false,
      }"
    >
      <template v-slot:table-row="props">
        <span
          v-if="props.column.field == 'customer'"
          class="flex items-center min-w-[150px]"
        >
          <span class="w-8 h-8 rounded-full ltr:mr-3 rtl:ml-3 flex-none">
            <img
              :src="props.row.customer.image"
              :alt="props.row.customer.name"
              class="object-cover w-full h-full rounded-full"
            />
          </span>
          <span class="text-sm text-slate-600 dark:text-slate-300 capitalize">{{
            props.row.customer.name
          }}</span>
        </span>

        <span v-if="props.column.field == 'chart'">
          <apexchart
            type="area"
            height="48"
            width="100%"
            :options="shapeLine4.chartOptions"
            :series="shapeLine4.series"
          />
        </span>

        <span
          v-if="props.column.field == 'status'"
          class="block min-w-[140px] text-left"
        >
          <span class="inline-block text-center mx-auto py-1">
            <span
              v-if="props.row.status === 'progress'"
              class="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <span
                class="h-[6px] w-[6px] bg-danger-500 rounded-full inline-block ring-4 ring-opacity-30 ring-danger-500"
              ></span>
              <span>In progress</span>
            </span>
            <span
              v-if="props.row.status === 'complete'"
              class="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <span
                class="h-[6px] w-[6px] bg-success-500 rounded-full inline-block ring-4 ring-opacity-30 ring-success-500"
              ></span>

              <span>Complete</span>
            </span>
          </span>
        </span>
        <span
          v-if="props.column.field == 'time'"
          class="block min-w-[100px] text-left"
        >
          {{ props.row.time }}
        </span>
        <div
          v-if="props.column.field == 'action'"
          class="ltr:text-right rtl:text-left"
        >
          <Dropdown classMenuItems=" w-[140px]">
            <span class="text-xl"
              ><Icon icon="heroicons-outline:dots-vertical"
            /></span>
            <template v-slot:menus>
              <MenuItem v-for="(item, i) in actions" :key="i">
                <div
                  :class="`
                
                  ${
                    item.name === 'delete'
                      ? 'bg-danger-500 text-danger-500 bg-opacity-30  hover:bg-opacity-100 hover:text-white'
                      : 'hover:bg-slate-900 hover:text-white'
                  }
                   w-full border-b border-b-gray-500 border-opacity-10 px-4 py-2 text-sm  last:mb-0 cursor-pointer first:rounded-t last:rounded-b flex  space-x-2 items-center rtl:space-x-reverse `"
                >
                  <span class="text-base"><Icon :icon="item.icon" /></span>
                  <span>{{ item.name }}</span>
                </div>
              </MenuItem>
            </template>
          </Dropdown>
        </div>
      </template>
      <template #pagination-bottom="props">
        <div class="py-4 px-3 justify-center hidden">
          <Pagination
            :total="50"
            :current="current"
            :per-page="perpage"
            :pageRange="pageRange"
            @page-changed="current = $event"
            :pageChanged="props.pageChanged"
            :perPageChanged="props.perPageChanged"
          >
            >
          </Pagination>
        </div>
      </template>
    </vue-good-table>
  </div>
</template>
<script>
import Dropdown from "@/components/Dropdown";
import Icon from "@/components/Icon";
import Pagination from "@/components/Pagination";
import { MenuItem } from "@headlessui/vue";
import { shapeLine4 } from "./data.js";

// Image Import
import user1 from "@/assets/images/users/user-1.jpg"
import user2 from "@/assets/images/users/user-2.jpg"
import user3 from "@/assets/images/users/user-3.jpg"
import user4 from "@/assets/images/users/user-4.jpg"


export default {
  components: {
    Pagination,
    Dropdown,
    Icon,
    MenuItem,
  },

  data() {
    return {
      shapeLine4,
      current: 1,
      perpage: 4,
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
      teamtable: [
        {
          customer: {
            name: "Arlene McCoy",
            image: user1,
            deg: "Ux designer",
          },
          status: "progress",
          time: "42.5 hours",
          chart: null,
        },
        {
          customer: {
            name: "Arlene McCoy",
            image: user2,
            deg: "Ux designer",
          },
          status: "complete",
          time: "42.5 hours",
          chart: null,
        },
        {
          customer: {
            name: "Arlene McCoy",
            image: user3,
            deg: "Ux designer",
          },
          status: "progress",
          time: "42.5 hours",
          chart: null,
        },
        {
          customer: {
            name: "Arlene McCoy",
            image: user4,
            deg: "Ux designer",
          },
          status: "complete",
          time: "42.5 hours",
          chart: null,
        },
      ],
      columns: [
        {
          label: "assignee",
          field: "customer",
        },

        {
          label: "Amount",
          field: "status",
        },
        {
          label: "time",
          field: "time",
        },
        {
          label: "chart",
          field: "chart",
        },

        {
          label: "Action",
          field: "action",
        },
      ],
    };
  },
};
</script>
<style lang="scss"></style>
