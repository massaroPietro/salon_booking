<template>
  <div>
    <Card title="Project List" noborder>
      <vue-good-table
          class="-mx-6"
          :columns="columns"
          styleClass=" vgt-table  table-head   v-middle striped lesspadding2 listview"
          :rows="this.projects"
          :pagination-options="{
          enabled: true,
          perPage: perpage,
        }"
          :sort-options="{
          enabled: false,
        }"
      >
        <template v-slot:table-row="props">
          <span v-if="props.column.field == 'name'">
            <div
                class="flex space-x-3 items-center text-left rtl:space-x-reverse"
            >
              <div class="flex-none">
                <div
                    class="h-10 w-10 rounded-full text-sm bg-[#E0EAFF] dark:bg-slate-700 flex flex-col items-center justify-center font-medium -tracking-[1px]"
                >
                  {{
                    props.row.name.charAt(0) +
                    props.row.name.charAt(props.row.name.length - 1)
                  }}
                </div>
              </div>
              <div
                  class="flex-1 font-medium text-sm leading-4 whitespace-nowrap"
              >
                {{
                  props.row.name.length > 20
                      ? props.row.name.substring(0, 20) + "..."
                      : props.row.name
                }}
              </div>
            </div>
          </span>

          <span
              v-if="props.column.field == 'startDate'"
              class="text-slate-500 dark:text-slate-400 block min-w-[108px]"
          >
            {{ props.row.startDate }}
          </span>
          <span
              v-if="props.column.field == 'endDate'"
              class="text-slate-500 dark:text-slate-400 block min-w-[108px]"
          >
            {{ props.row.endDate }}
          </span>
          <span v-if="props.column.field == 'assignto'" class="block w-full">
            <div
                class="flex justify-end sm:justify-start lg:justify-end xl:justify-start -space-x-1 rtl:space-x-reverse"
            >
              <div
                  class="h-6 w-6 rounded-full ring-1 ring-slate-100"
                  v-for="(user, userIndex) in props.row.assignto"
                  :key="userIndex"
              >
                <img
                    :src="user.image"
                    :alt="user.title"
                    class="w-full h-full rounded-full"
                />
              </div>
              <div
                  class="bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-300 text-xs ring-2 ring-slate-100 dark:ring-slate-700 rounded-full h-6 w-6 flex flex-col justify-center items-center"
              >
                +2
              </div>
            </div>
          </span>
          <span
              v-if="props.column.field == 'progress'"
              class="min-w-[220px] block"
          >
            <ProgressBar
                :value="props.row.progress"
                barColor="bg-primary-500"
            />
            <span
                class="flex justify-between text-xs text-slate-500 dark:text-slate-400 mb-1 font-medium mt-3"
            >
              <span class="font-normal">12/15 Task Completed</span>
              {{ props.row.progress }}%
            </span>
          </span>
          <div
              v-if="props.column.field == 'action'"
              class="action-btn text-end mr-3"
          >
            <Dropdown classMenuItems=" w-[140px]">
              <div class="text-xl">
                <Icon icon="heroicons-outline:dots-vertical"/>
              </div>
              <template v-slot:menus>
                <MenuItem v-for="(item, i) in actions" :key="i">
                  <div
                      @click="item.doit(props.row)"
                      :class="`
                
                  ${
                    item.name === 'delete'
                      ? 'bg-danger-500 text-danger-500 bg-opacity-30  hover:bg-opacity-100 hover:text-white'
                      : 'hover:bg-slate-900 hover:text-white'
                  }
                   w-full border-b border-b-gray-500 border-opacity-10 px-4 py-2 text-sm  last:mb-0 cursor-pointer first:rounded-t last:rounded-b flex  space-x-2 items-center `"
                  >
                    <span class="text-base"><Icon :icon="item.icon"/></span>
                    <span>{{ item.name }}</span>
                  </div>
                </MenuItem>
              </template>
            </Dropdown>
          </div>
        </template>
        <template #pagination-bottom="props">
          <div class="py-4 px-3 justify-center flex">
            <Pagination
                :total="projects.length"
                :current="current"
                :per-page="perpage"
                :pageRange="pageRange"
                @page-changed="current = $event"
                :pageChanged="props.pageChanged"
                :perPageChanged="props.perPageChanged"
            />
          </div>
        </template>
      </vue-good-table>
    </Card>
  </div>
</template>
<script>
import Card from "@/components/Card";
import Dropdown from "@/components/Dropdown";
import Icon from "@/components/Icon";
import Pagination from "@/components/Pagination";
import ProgressBar from "@/components/ProgressBar";
import {MenuItem} from "@headlessui/vue";
import {advancedTable} from "../../../constant/basic-tablle-data";
import {mapState, mapActions} from "pinia";
import {useProjectStore} from "@/store/project";

export default {
  components: {
    Pagination,
    Dropdown,
    Icon,
    MenuItem,
    Card,
    ProgressBar,
  },

  data() {
    return {
      advancedTable,
      current: 1,
      perpage: 3,
      pageRange: 10,
      actions: [
        {
          name: "view",
          icon: "heroicons:eye",
          doit: () => {
            this.$router.push({name: "project-details"});
          },
        },
        {
          name: "edit",
          icon: "heroicons:pencil-square",
          doit: (data) => {
            this.updateProject(data);
          },
        },
        {
          name: "delete",
          icon: "heroicons-outline:trash",
          doit: (data) => {
            this.removeProject(data)
          },
        },
      ],

      columns: [
        {
          label: "Name",
          field: "name",
        },

        {
          label: "Start Date",
          field: "startDate",
        },

        {
          label: "End Date",
          field: "endDate",
        },
        {
          label: "Assigned To",
          field: "assignto",
        },

        {
          label: "Status",
          field: "progress",
        },
        {
          label: "Action",
          field: "action",
        },
      ],
    };
  },
  computed: {
    ...mapState(useProjectStore, ['projects'])
  },
  methods: {
    ...mapActions(useProjectStore, ['updateProject', 'removeProject'])
  }
};
</script>
<style lang="scss">
.listview {
  th {
    @apply last:text-end;
  }
}
</style>
