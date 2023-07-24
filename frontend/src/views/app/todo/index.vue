<template>
  <div
    class="flex md:space-x-5 app_height overflow-hidden relative rtl:space-x-reverse"
  >
    <div
      class="transition-all duration-150"
      :class="[
        width < 1280
          ? ' absolute h-full top-0 md:w-[260px] w-[200px] z-[999]'
          : 'flex-none min-w-[260px]',
        width < 1280 && mobileTodoSidebar ? 'left-0 ' : '-left-full ',
      ]"
    >
      <Card bodyClass=" py-6 h-full flex flex-col" className="h-full">
        <div class="flex-1 h-full">
          <div class="px-6">
            <Button
              icon="heroicons-outline:plus"
              text="Add Task"
              btnClass="btn-dark w-full block  "
              @click="openTodo"
            />
          </div>

          <div class="h-full px-6" data-simplebar>
            <ul class="list mt-6">
              <li v-for="item in fillters.slice(0, 4)" :key="item.label">
                <label
                  class="flex items-center cursor-pointer px-2 py-3 rounded"
                  @click="fillter = item.value"
                  :class="
                    fillter === item.value
                      ? 'bg-slate-100 text-slate-900 dark:bg-slate-700 dark:text-slate-200'
                      : '  text-slate-600 dark:text-slate-300 '
                  "
                >
                  <div class="flex-1 flex space-x-2 rtl:space-x-reverse">
                    <span
                      class="text-xl"
                      :class="[
                        fillter === item.value
                          ? ' text-slate-900 dark:text-slate-100'
                          : ' text-slate-400 dark:text-slate-400',
                      ]"
                      ><Icon :icon="item.icon"
                    /></span>
                    <span
                      class="capitalize text-sm"
                      :class="[
                        fillter === item.value ? ' font-medium' : 'font-normal',
                      ]"
                      >{{ item.name }}</span
                    >
                  </div>
                  <span class="flex-none font-normal capitalize text-sm">
                    {{ item.count }}</span
                  >
                </label>
              </li>
            </ul>
            <div
              class="block py-4 text-slate-800 dark:text-slate-400 font-semibold text-xs uppercase"
            >
              Tags
            </div>
            <ul>
              <li
                v-for="item in fillters.slice(4)"
                :key="item.label"
                @click="fillter = item.value"
                class="flex space-x-2 text-sm capitalize py-2 cursor-pointer items-center rtl:space-x-reverse"
                :class="
                  fillter === item.value
                    ? 'font-medium text-slate-800 dark:text-slate-300'
                    : 'font-normal text-slate-600 dark:text-slate-300'
                "
              >
                <span
                  class="inline-block h-2 w-2 rounded-full ring-opacity-30 transition-all duration-150"
                  :class="`
                  ${
                    item.value === 'team' ? 'bg-danger-500 ring-danger-500' : ''
                  }
                  ${
                    item.value === 'low'
                      ? 'bg-success-500 ring-success-500'
                      : ''
                  }
                  ${
                    item.value === 'medium'
                      ? 'bg-warning-500 ring-warning-500'
                      : ''
                  }
                  ${
                    item.value === 'high'
                      ? 'bg-primary-500 ring-primary-500'
                      : ''
                  }
                  ${item.value === 'update' ? 'bg-info-500 ring-info-500' : ''}
                  ${fillter === item.value ? 'ring-4' : 'ring-0'}
                  
                  `"
                ></span>
                <span class="transition duration-150"> {{ item.name }}</span>
              </li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
    <Transition name="overlay-fade">
      <div
        v-if="width < 1280 && mobileTodoSidebar"
        class="overlay bg-slate-900 dark:bg-slate-900 dark:bg-opacity-60 bg-opacity-60 backdrop-filter backdrop-blur-sm absolute w-full flex-1 inset-0 z-[99] rounded-md"
        @click="closeMobileTodoSidebar"
      ></div>
    </Transition>
    <div class="flex-1 md:w-[calc(100%-320px)]">
      <Card bodyClass="p-0  h-full" className="h-full">
        <div class="h-full all-todos overflow-x-hidden" data-simplebar>
          <div
            class="md:flex justify-between items-center sticky bg-white dark:bg-slate-800 top-0 pt-6 pb-4 px-6 z-[44] border-b border-slate-100 dark:border-slate-700 rounded-t-md"
          >
            <div class="flex items-center space-x-3 rtl:space-x-reverse">
              <Tooltip placement="top" arrow v-if="width < 1280" theme="dark">
                <template #button>
                  <div
                    @click="openMobileTodoSidebar"
                    class="md:h-8 md:w-8 h-6 w-6 bg-slate-100 dark:bg-slate-900 dark:text-slate-400 flex flex-col justify-center items-center md:text-base text-sm rounded-full cursor-pointer"
                  >
                    <Icon icon="heroicons-outline:menu-alt-2" />
                  </div>
                </template>
                <span> Sidebar Open</span>
              </Tooltip>
              <div
                class="max-w-[180px] flex items-center space-x-1 rtl:space-x-reverse"
              >
                <div class="flex-none dark:text-slate-300">
                  <Icon icon="heroicons-outline:search" />
                </div>
                <div class="flex-1">
                  <input
                    type="text"
                    placeholder="Search Task"
                    v-model="todoSearch"
                    class="bg-transparent text-sm font-regular text-slate-600 dark:text-slate-300 transition duration-150 rounded px-2 py-1 focus:outline-none"
                  />
                </div>
              </div>
            </div>
            <div class="md:block hidden">
              <Dropdown classMenuItems="w-[130px]">
                <span
                  class="text-lg inline-flex flex-col items-center justify-center h-8 w-8 rounded-full bg-gray-500-f7 dark:bg-slate-900 dark:text-slate-400"
                  ><Icon icon="heroicons-outline:dots-vertical"
                /></span>
                <template v-slot:menus>
                  <MenuItem v-for="(item, i) in actions" :key="i">
                    <div
                      @click="item.doit"
                      :class="`
                
                  ${'hover:bg-slate-900 dark:hover:bg-slate-600 dark:hover:bg-opacity-70  dark:text-slate-300 hover:text-white'}
                   w-full border-b border-b-gray-500 border-opacity-10   px-4 py-2 text-sm  last:mb-0 cursor-pointer first:rounded-t last:rounded-b flex  space-x-2 items-center  text-slate-600 capitalize rtl:space-x-reverse `"
                    >
                      <span class="text-base"><Icon :icon="item.icon" /></span>
                      <span>{{ item.name }}</span>
                    </div>
                  </MenuItem>
                </template>
              </Dropdown>
            </div>
          </div>

          <Loading :count="1" v-if="isLoading" />
          <Loading :count="isSkeletonLength" v-if="isSkeleton" />
          <Todos v-if="!isSkeleton" :todos="selectedTodo" />
        </div>
      </Card>
    </div>
    <Addtodo />
    <EditTodo />
  </div>
</template>
<script setup>
import Button from "@/components/Button";
import Card from "@/components/Card";
import Dropdown from "@/components/Dropdown";
import Icon from "@/components/Icon";
import Loading from "@/components/Skeleton/Todo";
import { MenuItem } from "@headlessui/vue";
import Addtodo from "./Addtodo";
import EditTodo from "./EditTodo";
import Todos from "./Todos";
import Tooltip from "@/components/Tooltip";
// import ref
import { computed, ref, watch, onMounted } from "vue";
import {useTodoStore} from "@/store/todo";
import { fillters } from "../../../constant/data";

const width = ref(0);
const handleResize = () => {
  width.value = window.innerWidth;
};
onMounted(() => {
  window.addEventListener("resize", handleResize);
  handleResize();
});

let store = useTodoStore();
const openTodo = () => {
  store.openTodo();
};
const fillter = ref("all");

const actions = [
  {
    name: "Reset Sort",
    icon: "heroicons-outline:sort-ascending",
    doit: () => {
      store.resetSort();
    },
  },
  {
    name: "Sort A-Z ",
    icon: "heroicons-outline:sort-ascending",
    doit: () => {
      store.sortAZ();
    },
  },
  {
    name: " Sort Z-A ",
    icon: "heroicons-outline:sort-descending",
    doit: () => {
      store.sortZA();
    },
  },
];

// store computed
const todoSearch = computed(() => store.todoSearch);

const mobileTodoSidebar = computed(() => store.mobileTodoSidebar);
// dispatch openMobileTodoSidebar
const openMobileTodoSidebar = () => {
  store.openMobileTodoSidebar();
};
const closeMobileTodoSidebar = () => {
  store.closeMobileTodoSidebar();
};

const todos = computed(() => store.todosGetter);
const done = computed(() => store.isDone);
const fav = computed(() => store.isFav);
const high = computed(() => store.high);
const low = computed(() => store.low);
const team = computed(() => store.team);
const medium = computed(() => store.medium);
const update = computed(() => store.update);
const trash = computed(() => store.trashTodoGetter);
const isSkeletonLength = ref(todos.value.length);
const isSkeleton = ref(null);

// selectedTodo
// eslint-disable-next-line vue/return-in-computed-property
const selectedTodo = computed(() => {
  if (fillter.value === "all") {
    return todos.value;
  } else if (fillter.value === "done") {
    return done.value;
  } else if (fillter.value === "fav") {
    return fav.value;
  } else if (fillter.value === "high") {
    return high.value;
  } else if (fillter.value === "low") {
    return low.value;
  } else if (fillter.value === "medium") {
    return medium.value;
  } else if (fillter.value === "team") {
    return team.value;
  } else if (fillter.value === "update") {
    return update.value;
  } else if (fillter.value === "trash") {
    return trash.value;
  }
});

const isLoading = computed(() => store.isLoading);

watch(
  fillter,
  () => {
    switch (fillter.value) {
      case "all":
        fillter.value = "all";
        isSkeleton.value = true;
        isSkeletonLength.value = todos.value.length;
        store.mobileTodoSidebar = false;
        setTimeout(() => {
          isSkeleton.value = false;
        }, 500);
        break;
      case "done":
        fillter.value = "done";
        isSkeleton.value = true;
        isSkeletonLength.value = done.value.length;
        store.mobileTodoSidebar = false;
        setTimeout(() => {
          isSkeleton.value = false;
        }, 500);
        break;
      case "trash":
        fillter.value = "trash";
        isSkeleton.value = true;
        isSkeletonLength.value = trash.value.length;
        store.mobileTodoSidebar = false;
        setTimeout(() => {
          isSkeleton.value = false;
        }, 500);
        break;
      case "fav":
        fillter.value = "fav";
        isSkeleton.value = true;
        isSkeletonLength.value = fav.value.length;
        store.mobileTodoSidebar = false;
        setTimeout(() => {
          isSkeleton.value = false;
        }, 500);
        break;
      case "high":
        fillter.value = "high";
        isSkeleton.value = true;
        isSkeletonLength.value = high.value.length;
        store.mobileTodoSidebar = false;
        setTimeout(() => {
          isSkeleton.value = false;
        }, 500);
        break;
      case "low":
        fillter.value = "low";
        isSkeleton.value = true;
        isSkeletonLength.value = low.value.length;
        setTimeout(() => {
          isSkeleton.value = false;
        }, 500);
        break;
      case "medium":
        fillter.value = "medium";
        isSkeleton.value = true;
        isSkeletonLength.value = medium.value.length;
        store.mobileTodoSidebar = false;
        setTimeout(() => {
          isSkeleton.value = false;
        }, 500);
        break;
      case "team":
        fillter.value = "team";
        isSkeleton.value = true;
        isSkeletonLength.value = team.value.length;
        store.mobileTodoSidebar = false;
        setTimeout(() => {
          isSkeleton.value = false;
        }, 500);
        break;
      case "update":
        fillter.value = "update";
        isSkeleton.value = true;
        isSkeletonLength.value = update.value.length;
        store.mobileTodoSidebar = false;
        setTimeout(() => {
          isSkeleton.value = false;
        }, 500);
        break;

      default:
        fillter.value = "all";
        isSkeleton.value = true;
        store.mobileTodoSidebar = false;
        setTimeout(() => {
          isSkeleton.value = false;
        }, 500);
        break;
    }
  },
  { deep: true }
);
</script>
<style lang="scss">
.app_height {
  height: calc(var(--vh, 1vh) * 100 - 12.1rem);
}
</style>
