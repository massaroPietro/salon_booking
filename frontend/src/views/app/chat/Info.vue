<template>
  <div class="h-full p-6" data-simplebar>
    <h4 class="text-xl text-slate-900 font-medium mb-8">About</h4>
    <div class="h-[100px] w-[100px] rounded-full mx-auto mb-4">
      <img
        :src="user.avatar"
        alt=""
        class="block w-full h-full object-cover rounded-full"
      />
    </div>
    <div class="text-center">
      <h5 class="text-base text-slate-600 dark:text-slate-300 font-medium mb-1">
        {{ user.fullName }}
      </h5>
      <h6 class="text-xs text-slate-600 dark:text-slate-300 font-normal">
        {{ user.role }}
      </h6>
    </div>
    <ul
      class="list-item mt-5 space-y-4 border-b border-slate-100 dark:border-slate-700 pb-5 -mx-6 px-6"
    >
      <li
        class="flex justify-between text-sm text-slate-600 dark:text-slate-300 leading-[1]"
      >
        <div class="flex space-x-2 items-start rtl:space-x-reverse">
          <Icon icon="heroicons-outline:location-marker" class="text-base" />
          <span>Location</span>
        </div>
        <div class="font-medium">Bangladesh</div>
      </li>
      <li
        class="flex justify-between text-sm text-slate-600 dark:text-slate-300 leading-[1]"
      >
        <div class="flex space-x-2 items-start rtl:space-x-reverse">
          <Icon icon="heroicons-outline:user" class="text-base" />
          <span>Members since</span>
        </div>
        <div class="font-medium">Oct 2021</div>
      </li>
      <li
        class="flex justify-between text-sm text-slate-600 dark:text-slate-300 leading-[1]"
      >
        <div class="flex space-x-2 items-start rtl:space-x-reverse">
          <Icon icon="heroicons-outline:translate" class="text-base" />
          <span>Language</span>
        </div>
        <div class="font-medium">English</div>
      </li>
    </ul>
    <ul
      class="list-item space-y-3 border-b border-slate-100 dark:border-slate-700 pb-5 -mx-6 px-6 mt-5"
    >
      <li
        v-for="(slink, sindex) in socials"
        :key="sindex"
        class="text-sm text-slate-600 dark:text-slate-300 leading-[1]"
      >
        <router-link to="#" class="flex space-x-2 rtl:space-x-reverse">
          <Icon :icon="slink.icon" class="text-base" />
          <span
            class="capitalize font-normal text-slate-600 dark:text-slate-300"
            >{{ slink.name }}</span
          >
        </router-link>
      </li>
    </ul>
    <h4 class="py-4 text-sm text-secondary-500 dark:text-slate-300 font-normal">
      Shared documents
    </h4>
    <ul class="grid grid-cols-3 gap-2">
      <li class="h-[46px]">
        <img
          src="@/assets/images/chat/sd1.png"
          alt=""
          class="w-full h-full object-cover rounded-[3px]"
        />
      </li>
      <li class="h-[46px]">
        <img
          src="@/assets/images/chat/sd2.png"
          alt=""
          class="w-full h-full object-cover rounded-[3px]"
        />
      </li>
      <li class="h-[46px]">
        <img
          src="@/assets/images/chat/sd3.png"
          alt=""
          class="w-full h-full object-cover rounded-[3px]"
        />
      </li>
      <li class="h-[46px]">
        <img
          src="@/assets/images/chat/sd4.png"
          alt=""
          class="w-full h-full object-cover rounded-[3px]"
        />
      </li>
      <li class="h-[46px]">
        <img
          src="@/assets/images/chat/sd5.png"
          alt=""
          class="w-full h-full object-cover rounded-[3px]"
        />
      </li>
      <li class="h-[46px]">
        <img
          src="@/assets/images/chat/sd6.png"
          alt=""
          class="w-full h-full object-cover rounded-[3px]"
        />
      </li>
    </ul>
  </div>
</template>
<script setup>
import Icon from "@/components/Icon";
import {useChatStore} from "@/store/chat";
import { computed } from "vue";
const store = useChatStore();
const socials = [
  {
    name: "facebook",
    icon: "bi:facebook",
    link: "#",
  },
  {
    name: "twitter",
    link: "#",
    icon: "bi:twitter",
  },
  {
    name: "instagram",
    link: "#",
    icon: "bi:instagram",
  },
];
const user = computed(() => store.user);
</script>
<style lang=""></style>
