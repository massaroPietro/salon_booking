<template>
  <div class="h-full">
    <header class="border-b border-slate-100 dark:border-slate-700">
      <div class="flex py-6 md:px-6 px-3 items-center">
        <div class="flex-1">
          <div class="flex space-x-3 rtl:space-x-reverse">
            <span
              v-if="width <= 1024"
              @click="store.mobileChatSidebar = true"
              class="text-slate-900 dark:text-white cursor-pointer text-xl self-center ltr:mr-3 rtl:ml-3"
              ><Icon icon="heroicons-outline:menu-alt-1"
            /></span>
            <div class="flex-none">
              <div class="h-10 w-10 rounded-full relative">
                <span
                  :class="
                    store.user.status === 'active'
                      ? 'bg-success-500'
                      : 'bg-secondary-500'
                  "
                  class="status ring-1 ring-white inline-block h-[10px] w-[10px] rounded-full absolute -right-0 top-0"
                ></span>
                <img
                  :src="store.user.avatar"
                  alt=""
                  class="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
            <div class="flex-1 text-start">
              <span
                class="block text-slate-800 dark:text-slate-300 text-sm font-medium mb-[2px] truncate"
                >{{ store.user.fullName }}
              </span>
              <span
                class="block text-slate-500 dark:text-slate-300 text-xs font-normal"
                >Active now</span
              >
            </div>
          </div>
        </div>
        <div
          class="flex-none flex md:space-x-3 space-x-1 items-center rtl:space-x-reverse"
        >
          <div class="msg-action-btn">
            <Icon icon="heroicons-outline:phone" />
          </div>
          <div class="msg-action-btn">
            <Icon icon="heroicons-outline:video-camera" />
          </div>

          <div @click="openinfo" class="msg-action-btn">
            <Icon icon="heroicons-outline:dots-horizontal" />
          </div>
        </div>
      </div>
    </header>
    <div class="chat-content parent-height">
      <div
        class="msgs overflow-y-auto msg-height pt-6 space-y-6"
        ref="chatheight"
      >
        <div class="block md:px-6 px-4" v-for="(item, i) in getChats" :key="i">
          <div
            class="flex space-x-2 items-start group rtl:space-x-reverse"
            v-if="item.sender === 'them'"
          >
            <div class="flex-none">
              <div class="h-8 w-8 rounded-full">
                <img
                  :src="item.img"
                  alt=""
                  class="block w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
            <div class="flex-1 flex space-x-4 rtl:space-x-reverse">
              <div>
                <div
                  class="text-contrent p-3 bg-slate-100 dark:bg-slate-600 dark:text-slate-300 text-slate-600 text-sm font-normal mb-1 rounded-md flex-1 whitespace-pre-wrap break-all"
                >
                  {{ item.content }}
                </div>
                <span
                  class="font-normal text-xs text-slate-400 dark:text-slate-400"
                  >12:20 pm</span
                >
              </div>
              <div
                class="opacity-0 invisible group-hover:opacity-100 group-hover:visible"
              >
                <Dropdown classMenuItems=" w-[100px] top-0" :items="chatAction">
                  <div
                    class="h-8 w-8 bg-slate-100 dark:bg-slate-600 dark:text-slate-300 text-slate-900 flex flex-col justify-center items-center text-xl rounded-full"
                  >
                    <Icon icon="heroicons-outline:dots-horizontal" />
                  </div>
                </Dropdown>
              </div>
            </div>
          </div>
          <!-- sender -->
          <div
            class="flex space-x-2 items-start justify-end group w-full rtl:space-x-reverse"
            v-if="item.sender === 'me'"
          >
            <div class="no flex space-x-4 rtl:space-x-reverse">
              <div
                class="opacity-0 invisible group-hover:opacity-100 group-hover:visible"
              >
                <Dropdown
                  classMenuItems=" w-[100px] left-0 top-0  "
                  :items="chatAction"
                >
                  <div
                    class="h-8 w-8 bg-slate-300 dark:bg-slate-900 dark:text-slate-400 flex flex-col justify-center items-center text-xl rounded-full text-slate-900"
                  >
                    <Icon icon="heroicons-outline:dots-horizontal" />
                  </div>
                </Dropdown>
              </div>

              <div class="whitespace-pre-wrap break-all">
                <div
                  class="text-contrent p-3 bg-slate-300 dark:bg-slate-900 dark:text-slate-300 text-slate-800 text-sm font-normal rounded-md flex-1 mb-1"
                >
                  {{ item.content }}
                </div>
                <span class="font-normal text-xs text-slate-400">{{
                  time
                }}</span>
              </div>
            </div>
            <div class="flex-none">
              <div class="h-8 w-8 rounded-full">
                <img
                  :src="store.user.avatar"
                  alt=""
                  class="block w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>
          <!-- me  -->
        </div>
      </div>
    </div>
    <footer
      class="md:px-6 px-4 sm:flex md:space-x-4 sm:space-x-2 rtl:space-x-reverse border-t md:pt-6 pt-4 border-slate-100 dark:border-slate-700"
    >
      <div
        class="flex-none sm:flex hidden md:space-x-3 space-x-1 rtl:space-x-reverse"
      >
        <div
          class="h-8 w-8 cursor-pointer bg-slate-100 dark:bg-slate-900 dark:text-slate-400 flex flex-col justify-center items-center text-xl rounded-full"
        >
          <Icon icon="heroicons-outline:link" />
        </div>
        <div
          class="h-8 w-8 cursor-pointer bg-slate-100 dark:bg-slate-900 dark:text-slate-400 flex flex-col justify-center items-center text-xl rounded-full"
        >
          <Icon icon="heroicons-outline:emoji-happy" />
        </div>
      </div>
      <div class="flex-1 relative flex space-x-3 rtl:space-x-reverse">
        <div class="flex-1">
          <textarea
            type="text"
            placeholder="Type your message..."
            class="focus:ring-0 focus:outline-0 block w-full bg-transparent dark:text-white resize-none"
            v-model.trim="newMessage"
            @keydown.enter.exact.prevent="sendMessage"
            @keydown.enter.shift.exact.prevent="newMessage += '\n'"
          />
        </div>
        <div class="flex-none md:pr-0 pr-3">
          <button
            type="button"
            @click="sendMessage"
            class="h-8 w-8 bg-slate-900 text-white flex flex-col justify-center items-center text-lg rounded-full"
          >
            <Icon
              icon="heroicons-outline:paper-airplane"
              class="transform rotate-[60deg]"
            />
          </button>
        </div>
      </div>
    </footer>
  </div>
</template>
<script setup>
import Dropdown from "@/components/Dropdown";
import Icon from "@/components/Icon";
import { computed, ref, onMounted } from "vue";
import {useChatStore} from "@/store/chat";
import user1 from "@/assets/images/users/user-1.jpg";

const width = ref(0);
const handleResize = () => {
  width.value = window.innerWidth;
};
onMounted(() => {
  window.addEventListener("resize", handleResize);
  handleResize();
});
const newMessage = ref("");
const store = useChatStore();
const getChats = computed(() => store.messFeed);
const chatheight = ref(null);
const scrollToBottom = () => {
  setTimeout(() => {
    const scrollEl = chatheight.value;
    scrollEl.scrollTop = scrollEl.scrollHeight - scrollEl.clientHeight;
  }, 50);
};
const sendMessage = () => {
  // if newMessge empty return
  if (newMessage.value) {
    store.sendMessage({
      content: newMessage.value,
      sender: "me",
      img: user1,
    });
  }
  newMessage.value = "";
  scrollToBottom();
};

const time = computed(() => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "pm" : "am";
  const hours12 = hours % 12 || 12;
  const minutesStr = minutes < 10 ? "0" + minutes : minutes;
  return hours12 + ":" + minutesStr + " " + ampm;
});
const chatAction = [
  {
    label: "Remove",
    link: "#",
  },
  {
    label: "Forward",
    link: "#",
  },
];
const openinfo = () => {
  store.notOpenInfo();
};
</script>
<style lang="scss" scoped>
.msg-height {
  height: calc(100% - 0px);
}
.parent-height {
  height: calc(100% - 200px);
}
.msg-action-btn {
  @apply md:h-8 md:w-8 h-6 w-6 cursor-pointer bg-slate-100 dark:bg-slate-900 dark:text-slate-400 text-slate-900 flex flex-col justify-center items-center md:text-xl text-sm rounded-full;
}
</style>
