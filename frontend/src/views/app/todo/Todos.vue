<template>
  <ul
    class="divide-y divide-slate-100 dark:divide-slate-700 -mb-6 h-full"
    v-if="todos"
    :class="window.width < 1024 ? 'whitespace-nowrap  overflow-x-auto ' : ''"
  >
    <li
      class="flex items-center px-6 space-x-4 py-6 hover:-translate-y-1 hover:shadow-todo transition-all duration-200 rtl:space-x-reverse"
      v-for="(item, i) in todos"
      :key="i"
    >
      <label class="cursor-pointer text-white flex flex-col">
        <input type="checkbox" v-model="item.isDone" class="hidden" />
        <span
          class="h-4 w-4 rounded inline-flex relative transition-all duration-150"
          :class="
            item.isDone === true
              ? '    bg-slate-900 ring-2 ring-offset-2 ring-black-500 dark:ring-slate-900 dark:ring-offset-slate-800 dark:bg-slate-900 '
              : ' bg-slate-100 dark:bg-slate-500 ring-0 ring-offset-0 ring-transparent '
          "
        >
          <Transition name="check-transition">
            <Icon
              icon="heroicons-outline:check"
              v-show="item.isDone === true"
            />
          </Transition>
        </span>
      </label>
      <!-- end check -->
      <label>
        <input type="checkbox" v-model="item.isfav" class="hidden" />
        <Icon
          icon="heroicons:star"
          class="text-xl leading-[1] cursor-pointer opacity-40 dark:text-white"
          v-if="!item.isfav"
        />
        <Icon
          icon="heroicons:star-20-solid"
          class="text-xl leading-[1] cursor-pointer text-[#FFCE30]"
          v-if="item.isfav"
        />
      </label>
      <!-- end fav -->
      <span
        class="flex-1 text-sm text-slate-600 dark:text-slate-300 truncate"
        :class="item.isDone ? 'line-through dark:text-slate-300' : ''"
      >
        {{ item.title }}
      </span>
      <!-- to do text -->
      <div class="flex">
        <span
          class="flex-none space-x-2 text-base text-secondary-500 flex rtl:space-x-reverse"
        >
          <div
            class="flex justify-start -space-x-1.5 min-w-[60px] rtl:space-x-reverse"
          >
            <div
              class="h-6 w-6 rounded-full ring-1 ring-secondary-500"
              :class="item.isDone ? ' opacity-40' : ' opacity-100'"
              v-for="(user, userIndex) in item.image"
              :key="userIndex"
            >
              <Tooltip placement="top" arrow>
                <template #button>
                  <img
                    :src="user.image"
                    :alt="user.title"
                    class="w-full h-full rounded-full"
                  />
                </template>
                <span>{{ user.title }}</span>
              </Tooltip>
            </div>
          </div>
          <div v-for="(cta, ctaIndex) in item.catagory" :key="ctaIndex">
            <span
              :class="`
            
             ${cta.value === 'team' ? 'bg-danger-500 text-danger-500' : ''}
                  ${
                    cta.value === 'low' ? 'bg-success-500 text-success-500' : ''
                  }
                  ${
                    cta.value === 'medium'
                      ? 'bg-warning-500 text-warning-500'
                      : ''
                  }
                  ${
                    cta.value === 'high'
                      ? 'bg-primary-500 text-primary-500'
                      : ''
                  }
                  ${cta.value === 'update' ? 'bg-info-500 text-info-500' : ''}
            `"
              class="bg-opacity-20 capitalize font-normal text-xs leading-4 px-[10px] py-[2px] rounded-full inline-block"
              >{{ cta.label }}</span
            >
          </div>

          <button
            type="button"
            v-if="item.isDone === false"
            @click="editTodo(item)"
            class="text-slate-400"
          >
            <Icon icon="heroicons-outline:pencil-alt" />
          </button>
          <button
            @click="removeTodo(item)"
            type="button"
            class="transition duration-150 hover:text-danger-500 text-slate-400"
          >
            <Icon icon="heroicons-outline:trash" />
          </button>
        </span>
      </div>
    </li>
    <li
      class="mx-6"
      v-if="
        (todos.length === 0 && todoSearch !== '') ||
        todos.length === 0
      "
    >
      <Noresult :todos="todos" />
    </li>
  </ul>
</template>
<script>
import Icon from "@/components/Icon";
import Tooltip from "@/components/Tooltip";
import window from "@/mixins/window";
import Noresult from "./Noresult.vue";
import {useTodoStore} from "@/store/todo";
import { mapWritableState, mapActions } from "pinia";

export default {
  mixins: [window],
  components: {
    Icon,
    Tooltip,
    Noresult,
  },

  computed: {
    ...mapWritableState(useTodoStore, ['todoSearch'])
  },

  props: {
    todos: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    ...mapActions(useTodoStore, ['removeTodo', 'editTodo']),
  },
};
</script>
<style lang=""></style>
