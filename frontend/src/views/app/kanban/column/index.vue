<template>
  <div
    class="flex space-x-6 overflow-hidden overflow-x-auto pb-4 rtl:space-x-reverse"
  >
    <!-- Column -->
    <div
      v-for="column in columns"
      :key="column.name"
      class="w-[320px] flex-none bg-slate-200 dark:bg-slate-700 rounded"
    >
      <!-- board header -->
      <div
        class="relative flex justify-between items-center bg-white dark:bg-slate-800 rounded shadow-base px-6 py-5"
      >
        <div
          class="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-[2px]"
          :style="{ 'background-color': column.color }"
        ></div>
        <div
          class="text-lg text-slate-900 dark:text-white font-medium capitalize"
        >
          {{ column.name }}
        </div>
        <div class="flex items-center space-x-2 rtl:space-x-reverse">
          <Tooltip placement="top" arrow theme="danger-500">
            <template #button>
              <button class="kanbanicon" @click="delateColumn(column.id)">
                <Icon icon="heroicons-outline:trash" />
              </button>
            </template>
            <span> Delete</span>
          </Tooltip>

          <Tooltip placement="top" arrow theme="dark">
            <template #button>
              <button class="kanbanicon" @click="openTask(column)">
                <Icon icon="heroicons-outline:plus-sm" />
              </button>
            </template>
            <span> Add Card</span>
          </Tooltip>
        </div>
      </div>

      <draggable
        :list="column.tasks"
        :animation="200"
        ghost-class="ghost-card"
        group="taskss"
        :itemKey="column.id"
        class="px-2 pt-4 h-full"
      >
        <template #item="{ element }">
          <Task :element="element" class="mb-5" :column="column" />
        </template>
      </draggable>
    </div>
    <!-- Add task Modal -->
    <AddTask />
    <EditTask />
    <!-- no board -->
    <div class="text-center" v-if="columns.length === 0">no boards found</div>
  </div>
</template>
<script setup>
import Icon from "@/components/Icon";
import Tooltip from "@/components/Tooltip";
import { computed } from "vue";

import draggable from "vuedraggable";
import {useKanbanStore} from "@/store/kanban";
import AddTask from "./AddTask";
import EditTask from "./EditTask";
import Task from "./Task";

const store = useKanbanStore();

const columns = computed(() => store.columns);
const openTask = (data) => {
  // dispatch action to get task
  store.openTask(data);
};
const delateColumn = (id) => {
  store.delateColumn(id);
};
</script>
<style lang="scss" scoped>
.kanbanicon {
  @apply border border-slate-200 dark:border-slate-700 dark:text-slate-400 rounded h-6 w-6 flex flex-col  items-center justify-center text-base text-slate-600;
}
</style>
