<template>
  <div class="divide-y divide-slate-100 dark:divide-slate-700">
    <div
      v-for="(item, i) in contacts"
      :key="i"
      @click="openChat(item)"
      class="block w-full py-5 focus:ring-0 outline-none cursor-pointer group transition-all duration-150 hover:bg-slate-100 dark:hover:bg-slate-600 dark:hover:bg-opacity-70"
    >
      <div class="flex space-x-3 px-6 rtl:space-x-reverse">
        <div class="flex-none">
          <div class="h-10 w-10 rounded-full relative">
            <span
              :class="
                item.status === 'active' ? 'bg-success-500' : 'bg-secondary-500'
              "
              class="status ring-1 ring-white inline-block h-[10px] w-[10px] rounded-full absolute -right-0 top-0"
            ></span>
            <img
              :src="item.avatar"
              alt=""
              class="block w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
        <div class="flex-1 text-start flex">
          <div class="flex-1">
            <span
              class="block text-slate-800 dark:text-slate-300 text-sm font-medium mb-[2px]"
              >{{ item.fullName }}</span
            >
            <span
              class="block text-slate-600 dark:text-slate-300 text-xs font-normal"
              >{{ item.lastmessage.slice(0, 14) + "..." }}</span
            >
          </div>
          <div class="flex-none ltr:text-right rtl:text-end">
            <span
              class="block text-xs text-slate-400 dark:text-slate-400 font-normal"
              >12:20 pm</span
            >
            <span
              v-if="item.unredmessage > 0"
              class="inline-flex flex-col items-center justify-center text-[10px] font-medium w-4 h-4 bg-[#FFC155] text-white rounded-full"
              >{{ item.unredmessage }}</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import {useChatStore} from "@/store/chat";

import { computed } from "vue";

const store = useChatStore();

const contacts = computed(() => store.getContacts);
const openChat = (data) => {
  store.openChat(data);
};
</script>
<style></style>
