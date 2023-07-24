<template>
  <ul
      v-if="emails"
      class="divide-y divide-slate-100 dark:divide-slate-700 -mx-6 -mb-6 flex-1 overflow-y-auto whitespace-nowrap"
      :class="window.width < 1024 ? '  overflow-x-auto touch-auto' : ''"
  >
    <li
        class="flex px-7 space-x-6 group md:py-6 py-3 relative cursor-pointer hover:bg-slate-100 group items-center rtl:space-x-reverse"
        v-for="(item, i) in emails"
        @click.stop="openSingle(item)"
        :key="i"
        :class="
        item.checked
          ? 'bg-slate-100 dark:bg-slate-700 dark:bg-opacity-70'
          : 'bg-white  dark:bg-slate-800'
      "
    >
      <div
          class="cursor-pointer text-white h-4"
          @click.stop.prevent="isChecked(item)"
      >
        <span
            class="h-4 w-4 rounded inline-flex relative transition-all duration-150"
            :class="
            item.checked === true
              ? '    bg-slate-900 ring-2 ring-offset-2 ring-black-500 dark:ring-slate-900 dark:ring-offset-slate-800 dark:bg-slate-900 '
              : ' bg-slate-100 dark:bg-slate-500 ring-0 ring-offset-0 ring-transparent group-hover:bg-slate-400 '
          "
        >
          <Transition name="check-transition">
            <Icon
                icon="heroicons-outline:check"
                v-show="item.checked === true"
            />
          </Transition>
        </span>
      </div>
      <!-- end checkbox -->
      <div @click.stop.prevent="isFaviort(item)">
        <Icon
            icon="heroicons-solid:star"
            class="text-xl leading-[1] text-[#FFCE30] relative cursor-pointer"
            v-if="item.isfav === true"
        />
        <Icon
            icon="heroicons:star"
            class="text-xl leading-[1] relative cursor-pointer text-slate-400"
            v-if="item.isfav === false"
        />
      </div>
      <!-- end star -->

      <div
          class="flex items-center space-x-3 rtl:space-x-reverse"
          v-if="item.image"
      >
        <div class="flex-none">
          <div class="h-8 w-8 rounded-full text-white">
            <img
                :src="item.image"
                alt=""
                class="block w-full h-full object-cover"
            />
          </div>
        </div>
        <div
            class="flex-1 text-sm"
            :class="[
            item.isread === true
              ? 'font-normal text-slate-800 dark:text-slate-400'
              : 'font-medium text-slate-900 dark:text-slate-300',
          ]"
        >
          Esther Howard
        </div>
      </div>
      <!-- end author -->
      <p class="truncate">
        <span
            class="text-sm"
            :class="[
            item.isread === true
              ? 'font-normal dark:text-slate-300'
              : 'font-medium text-slate-900 dark:text-slate-300',
          ]"
        >{{ item.title.slice(0, 18) }}</span
        >
        <!-- end subject -->
        <span class="text-sm text-slate-600 dark:text-slate-300 font-normal">
          {{ item.desc }}
        </span>
      </p>

      <div class="grow"></div>
      <!-- epmpty -->
      <span>
        <div class="flex-1 flex space-x-4 items-center rtl:space-x-reverse">
          <span
              class="flex-none space-x-2 text-xs text-slate-900 dark:text-slate-300 rtl:space-x-reverse"
          >
            <span>{{ item.lastime }}</span>
          </span>
        </div>
        <span
            class="absolute ltr:right-0 rtl:left-0 top-1/2 -translate-y-1/2 dark:text-slate-300 group-hover:bg-slate-100 dark:group-hover:bg-slate-800 bg-white h-full w-[100px] flex flex-col items-center justify-center opacity-0 invisible group-hover:opacity-100 group-hover:visible"
        >
          <Tooltip placement="top" arrow>
            <template #button>
              <Icon
                  icon="heroicons-outline:trash"
                  @click.stop.prevent="deleteEmail(item)"
                  class="transition duration-150 hover:text-danger-500"
              />
            </template>
            <span>Delete Email</span>
          </Tooltip>
        </span>
      </span>
      <!-- end right content -->
    </li>
    <li
        class="mx-6"
        v-if="
        (emails.length === 0 && this.search !== '') ||
        emails.length === 0
      "
    >
      <Blank :emails="emails"/>
    </li>
  </ul>
</template>
<script>
import Icon from "@/components/Icon";
import Tooltip from "@/components/Tooltip";
import Blank from "./Blank.vue";
import window from "@/mixins/window";
import {mapActions, mapWritableState} from "pinia";
import {useEmailStore} from "@/store/email";

export default {
  mixins: [window],
  components: {
    Icon,
    Tooltip,
    Blank,
  },
  props: {
    emails: {
      type: Array,
    },
  },
  computed: {
    ...mapWritableState(useEmailStore, ['search'])
  },
  methods: {
    ...mapActions(useEmailStore, ["deleteEmail", "openSingle",]),
    isChecked(item) {
      item.checked = !item.checked;
    },
    isFaviort(item) {
      item.isfav = !item.isfav;
    },
  },
};
</script>
<style lang="scss">
.check-transition-enter-active {
  transition: all 150ms ease-out;
}

.check-transition-leave-active {
  transition: all 0.24s cubic-bezier(1, 0.5, 0.8, 1);
}

.check-transition-enter-from,
.check-transition-leave-to {
  transform: scale(1) translateY(-2px);
  opacity: 0;
}
</style>
