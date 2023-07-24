<template>
  <div>
    <Card noborder>
      <div
        class="md:flex pb-6 md:space-y-0 space-y-3 justify-between items-center"
      >
        <h6>All transactions</h6>
        <InputGroup
          v-model="searchTerm"
          placeholder="Search"
          type="text"
          prependIcon="heroicons-outline:search"
          merged
        />
      </div>

      <div class="-mx-6 -mb-6">
        <vue-good-table
          :columns="columns"
          styleClass=" vgt-table lesspadding v-middle   rounded-md"
          :rows="advancedTable"
          :pagination-options="{
            enabled: true,
            perPage: perpage,
          }"
          :sort-options="{
            enabled: false,
          }"
          :search-options="{
            enabled: true,
            externalQuery: searchTerm,
          }"
        >
          <template v-slot:table-row="props">
            <span
              v-if="props.column.field == 'customer'"
              class="flex items-center"
            >
              <span
                class="w-7 h-7 rounded-full ltr:mr-3 rtl:ml-3 flex-none font-normal"
              >
                <img
                  :src="props.row.customer.image"
                  :alt="props.row.customer.name"
                  class="object-cover w-full h-full rounded-full"
                />
              </span>
              <span
                class="text-sm text-slate-600 dark:text-slate-300 capitalize font-medium"
                >{{ props.row.customer.name }}</span
              >
            </span>

            <span
              v-if="props.column.field == 'date'"
              class="text-slate-500 dark:text-slate-400"
            >
              {{ props.row.date }}
              <span class="inline-block ml-1">
                {{ Math.floor(Math.random() * 12) + 1 }}:{{
                  Math.floor(Math.random() * 60) + 1
                }}
              </span>
            </span>

            <span
              v-if="props.column.field == 'amount'"
              class="text-slate-500 dark:text-slate-400"
            >
              <span class="block text-slate-600 dark:text-slate-300"
                >Transfer</span
              >
              <span class="block text-slate-500 text-xs"
                >Trans ID: 8HG654Pk32</span
              >
            </span>

            <span v-if="props.column.field == 'status'" class="block w-full">
              <span
                class="inline-block text-center mx-auto py-1"
                :class="`${
                  props.row.status === 'paid' ? 'text-success-500 ' : ''
                } 
            ${props.row.status === 'due' ? 'text-warning-500 ' : ''}
            ${props.row.status === 'cancled' ? 'text-danger-500' : ''}
            
             `"
              >
                <span v-if="props.row.status === 'due'">+$ 1,200.00</span>
                <span v-if="props.row.status === 'paid'">+$ 200.00</span>
                <span v-if="props.row.status === 'cancled'">+$ 1400.00</span>
              </span>
            </span>
            <span
              v-if="props.column.field == 'action'"
              class="text-center block w-full"
            >
              <Dropdown classMenuItems=" w-[140px]">
                <span class="text-xl dark:text-slate-400"
                  ><Icon icon="heroicons-outline:dots-vertical"
                /></span>
                <template v-slot:menus>
                  <MenuItem v-for="(item, i) in actions" :key="i">
                    <div
                      :class="`
                
                  ${
                    item.name === 'delete'
                      ? 'bg-danger-500 text-danger-500 bg-opacity-30  hover:bg-opacity-100 hover:text-white'
                      : 'hover:bg-slate-900 dark:hover:bg-slate-600 dark:hover:bg-opacity-70 hover:text-white'
                  }
                   w-full border-b border-b-gray-500 border-opacity-10 px-4 py-2 text-sm  last:mb-0 cursor-pointer first:rounded-t last:rounded-b flex  space-x-2 items-center rtl:space-x-reverse `"
                    >
                      <span class="text-base"><Icon :icon="item.icon" /></span>
                      <span>{{ item.name }}</span>
                    </div>
                  </MenuItem>
                </template>
              </Dropdown>
            </span>
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
    </Card>
  </div>
</template>
<script>
import Card from "@/components/Card";
import Dropdown from "@/components/Dropdown";
import Icon from "@/components/Icon";
import InputGroup from "@/components/InputGroup";
import Pagination from "@/components/Pagination";
import { MenuItem } from "@headlessui/vue";
import { advancedTable } from "../../../constant/basic-tablle-data";

export default {
  components: {
    Pagination,
    InputGroup,
    Dropdown,
    Card,
    Icon,
    MenuItem,
  },

  data() {
    return {
      advancedTable,
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
      columns: [
        {
          label: "Customer",
          field: "customer",
        },
        {
          label: "Date",
          field: "date",
        },
        {
          label: "History",
          field: "amount",
        },

        {
          label: "Amount",
          field: "status",
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
