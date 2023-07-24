<template>
  <div>
    <Card className=" cursor-move">
      <!-- header -->
      <header class="flex justify-between items-center">
        <div class="flex space-x-3 items-center rtl:space-x-reverse">
          <div class="flex-none">
            <div
              class="h-10 w-10 rounded-md text-lg bg-slate-100 text-slate-900 dark:bg-slate-600 dark:text-slate-200 flex flex-col items-center justify-center font-normal capitalize"
            >
              {{ element.name.charAt(0) + element.name.charAt(1) }}
            </div>
          </div>
          <div class="flex-1 font-medium text-base leading-6">
            <div
              class="board-title dark:text-slate-200 text-slate-900 max-w-[160px] truncate"
            >
              {{ element.name }}
            </div>
          </div>
        </div>
        <div>
          <Dropdown classMenuItems=" w-[130px]">
            <span
              class="text-lg inline-flex flex-col items-center justify-center h-8 w-8 rounded-full bg-gray-500-f7 dark:bg-slate-900 dark:text-slate-400"
              ><Icon icon="heroicons-outline:dots-vertical"
            /></span>
            <template v-slot:menus>
              <MenuItem v-for="(mneu, i) in actions" :key="i">
                <div
                  @click="mneu.doit(element)"
                  :class="`
                
                  ${'hover:bg-slate-900 dark:hover:bg-slate-600 dark:hover:bg-opacity-70 hover:text-white'}
                   w-full border-b  border-b-gray-500 dark:border-b-slate-700 dark:text-slate-200 border-opacity-10   px-4 py-2 text-sm  last:mb-0 cursor-pointer first:rounded-t last:rounded-b flex  space-x-2 items-center  capitalize rtl:space-x-reverse `"
                >
                  <span class="text-base"><Icon :icon="mneu.icon" /></span>
                  <span>{{ mneu.name }}</span>
                </div>
              </MenuItem>
            </template>
          </Dropdown>
        </div>
      </header>
      <!-- description -->
      <div class="text-slate-600 dark:text-slate-400 text-sm pt-4 pb-8">
        {{ element.des }}
      </div>
      <!--  date -->
      <div class="flex space-x-4 rtl:space-x-reverse">
        <!-- start date -->
        <div>
          <span class="block date-label">Start date</span>
          <span class="block date-text">{{ element.startDate }}</span>
        </div>
        <!-- end date -->
        <div>
          <span class="block date-label">Start date</span>
          <span class="block date-text">{{ element.endDate }}</span>
        </div>
      </div>
      <!-- progress -->
      <div
        class="ltr:text-right rtl:text-left text-xs text-slate-600 dark:text-slate-300 mb-1 font-medium"
      >
        {{ element.progress }}%
      </div>
      <ProgressBar :value="element.progress" barColor="bg-primary-500" />
      <!-- assign and time count -->
      <div class="grid grid-cols-2 gap-4 mt-6">
        <!-- assign -->
        <div>
          <div
            class="text-slate-400 dark:text-slate-400 text-sm font-normal mb-3"
          >
            Assigned to
          </div>
          <div class="flex justify-start -space-x-1.5">
            <div
              class="h-6 w-6 rounded-full ring-1 ring-slate-100"
              v-for="(user, userIndex) in element.assignto"
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
        </div>

        <!-- total date -->
        <div class="ltr:text-right rtl:text-left">
          <span
            class="inline-flex items-center space-x-1 bg-danger-500 bg-opacity-[0.16] text-danger-500 text-xs font-normal px-2 py-1 rounded-full rtl:space-x-reverse"
          >
            <span> <Icon icon="heroicons-outline:clock" /></span>
            <span>{{ totalDate(element.startDate, element.endDate) }}</span>
            <span>days left</span></span
          >
        </div>
      </div>
    </Card>
  </div>
</template>
<script>
import Card from "@/components/Card";
import Dropdown from "@/components/Dropdown";
import Icon from "@/components/Icon";
import ProgressBar from "@/components/ProgressBar";
import { MenuItem } from "@headlessui/vue";
import { ref } from "vue";
import {useKanbanStore} from "@/store/kanban";
export default {
  name: "Task",
  components: {
    Card,
    ProgressBar,
    Icon,
    Dropdown,
    MenuItem,
  },
  props: {
    element: {
      type: Object,
      required: true,
    },
    column: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const store = useKanbanStore();

    const totalDate = (start, end) => {
      const startDate = new Date(start);
      const endDate = new Date(end);
      const diffDays = endDate.getDate() - startDate.getDate();
      return diffDays;
    };

    const actions = ref([
      {
        name: "Edit",
        icon: "heroicons-outline:pencil-alt",
        doit: (data) => {
          store.updateTask(data);
        },
      },
      {
        name: "Delete",
        icon: "heroicons-outline:trash",
        doit: (data) => {
          store.removeTask(data);
        },
      },
    ]);
    return {
      totalDate,
      actions,
    };
  },
};
</script>
<style lang="scss" scoped>
.date-label {
  @apply text-xs text-slate-400 dark:text-slate-400 mb-1;
}
.date-text {
  @apply text-xs text-slate-600 dark:text-slate-300 font-medium;
}
</style>
