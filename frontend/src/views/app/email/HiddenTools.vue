<template>
  <div class="md:flex space-x-4 items-center rtl:space-x-reverse">
    <Tooltip placement="top" arrow v-if="window.width < 1280">
      <template #button>
        <div
          @click="this.mobileEmailSidebar = true"
          class="md:h-8 md:w-8 h-6 w-6 bg-slate-100 dark:text-slate-300 dark:bg-slate-900 flex flex-col justify-center items-center md:text-base text-sm rounded-full cursor-pointer"
        >
          <Icon icon="heroicons-outline:menu-alt-2" />
        </div>
      </template>
      <span> Sidebar Open</span>
    </Tooltip>
    <label class="cursor-pointer flex-none text-white">
      <input
        type="checkbox"
        class="hidden"
        @click="checkAll()"
        v-model="this.isCheckAll"
      />
      <span
        class="h-4 w-4 rounded inline-flex relative top-1 transition-all duration-150"
        :class="
          this.isCheckAll
            ? '    bg-slate-900 ring-2 ring-offset-2 ring-black-500 dark:ring-slate-900 dark:ring-offset-slate-800 dark:bg-slate-900 '
            : ' bg-slate-100 dark:bg-slate-500 ring-0 ring-offset-0 ring-transparent '
        "
      >
        <Transition name="check-transition">
          <Icon
            icon="heroicons-outline:check"
            v-if="this.isCheckAll === true"
          />
        </Transition>
      </span>
    </label>
    <Tooltip
      placement="top"
      arrow
      v-if="this.isCheckAll"
      theme="dark"
    >
      <template #button>
        <div
          class="md:h-8 md:w-8 h-6 w-6 bg-slate-100 dark:text-slate-300 dark:bg-slate-900 flex flex-col justify-center items-center md:text-base text-sm rounded-full cursor-pointer"
        >
          <Icon icon="heroicons-outline:document-duplicate" />
        </div>
      </template>
      <span> Duplicate</span>
    </Tooltip>
    <Tooltip
      placement="top"
      arrow
      v-if="this.isCheckAll"
      theme="dark"
    >
      <template #button>
        <div
          class="md:h-8 md:w-8 h-6 w-6 bg-slate-100 dark:text-slate-300 dark:bg-slate-900 flex flex-col justify-center items-center md:text-base text-sm rounded-full cursor-pointer"
        >
          <Icon icon="heroicons-outline:archive" />
        </div>
      </template>
      <span> archive</span>
    </Tooltip>
    <Tooltip
      placement="top"
      arrow
      v-if="this.isCheckAll"
      theme="dark"
    >
      <template #button>
        <div
          class="md:h-8 md:w-8 h-6 w-6 transform rotate-90 bg-slate-100 dark:text-slate-300 dark:bg-slate-900 flex flex-col justify-center items-center md:text-base text-sm rounded-full cursor-pointer"
        >
          <Icon icon="heroicons-outline:upload" />
        </div>
      </template>
      <span> Froward</span>
    </Tooltip>
    <Tooltip
      placement="top"
      arrow
      v-if="this.isCheckAll"
      theme="dark"
    >
      <template #button>
        <div
          class="md:h-8 md:w-8 h-6 w-6 bg-slate-100 dark:text-slate-300 dark:bg-slate-900 flex flex-col justify-center items-center md:text-base text-sm rounded-full cursor-pointer"
        >
          <Icon icon="heroicons-outline:trash" />
        </div>
      </template>
      <span> Delete All</span>
    </Tooltip>
    <div class="flex" v-if="window.width > 768">
      <input
        type="text"
        v-model="this.search"
        placeholder="Search..."
        class="bg-transparent text-sm font-regular text-slate-600 dark:text-white focus:ring-1 focus:ring-gray-500 dark:focus:ring-slate-700 transition duration-150 rounded px-2 py-1 focus:outline-none"
      />
    </div>
  </div>
</template>
<script>
import Icon from "@/components/Icon";
import Tooltip from "@/components/Tooltip";
import window from "@/mixins/window";
import {mapActions, mapWritableState} from "pinia";
import {useEmailStore} from "@/store/email";
export default {
  mixins: [window],
  components: {
    Icon,
    Tooltip,
  },
  computed:{
    ...mapWritableState(useEmailStore, ['isCheckAll', 'mobileEmailSidebar', 'search'])
  },
  methods: {
    ...mapActions(useEmailStore, ['checkAll']),
  },
};
</script>
