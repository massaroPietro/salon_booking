<template>
  <div>
    <header>
      <!-- ?? chats header -->
      <div class="flex px-6 pt-6">
        <div class="flex-1">
          <div class="flex space-x-3 rtl:space-x-reverse">
            <div class="flex-none">
              <div class="h-10 w-10 rounded-full" @click="toggleuserSetting">
                <img
                  src="@/assets/images/users/user-1.jpg"
                  alt=""
                  class="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
            <div class="flex-1 text-start">
              <span
                class="block text-slate-800 dark:text-slate-300 text-sm font-medium mb-[2px]"
                >Jane Cooper
                <span
                  class="status bg-success-500 inline-block h-[10px] w-[10px] rounded-full ml-3"
                ></span>
              </span>
              <span
                class="block text-slate-500 dark:text-slate-300 text-xs font-normal"
                >Available</span
              >
            </div>
          </div>
        </div>
        <div class="flex-none">
          <Tooltip placement="top" arrow v-if="width > 1024">
            <template #button>
              <div
                @click="store.toggleUserSetting()"
                class="h-8 w-8 bg-slate-100 dark:bg-slate-900 dark:text-slate-400 flex flex-col justify-center items-center text-xl rounded-full cursor-pointer"
              >
                <Icon icon="heroicons-outline:dots-horizontal" />
              </div>
            </template>
            <span>Settings</span>
          </Tooltip>
          <Tooltip placement="top" arrow v-if="width < 1024">
            <template #button>
              <div
                @click="store.mobileChatSidebar = false"
                class="h-8 w-8 bg-slate-100 dark:bg-slate-900 dark:text-slate-400 flex flex-col justify-center items-center text-xl rounded-full cursor-pointer"
              >
                <Icon icon="heroicons-outline:x" />
              </div>
            </template>
            <span>close</span>
          </Tooltip>
        </div>
      </div>
      <!-- !! chat settigns -->

      <Transition name="chat-user-setting">
        <div
          class="absolute bg-white dark:bg-slate-800 rounded-md h-full left-0 top-0 bottom-0 p-6 w-full z-[9]"
          v-if="store.settingToggle"
          data-simplebar
        >
          <div class="text-right">
            <Tooltip placement="top" arrow theme="danger-500">
              <template #button>
                <div
                  @click="store.settingToggle = false"
                  class="h-8 w-8 bg-slate-100 dark:bg-slate-900 dark:text-slate-400 inline-flex ml-auto flex-col justify-center items-center text-xl rounded-full cursor-pointer"
                >
                  <Icon icon="heroicons-outline:x" />
                </div>
              </template>
              <span>Close Setting</span>
            </Tooltip>
          </div>
          <header class="mx-auto max-w-[200px] mt-6 text-center">
            <div
              class="h-16 w-16 rounded-full border border-slate-400 p-[2px] shadow-md mx-auto mb-3 relative"
            >
              <img
                src="@/assets/images/users/user-1.jpg"
                alt=""
                class="block w-full h-full rounded-full object-contain"
              />
              <span
                class="status inline-block h-3 w-3 rounded-full absolute -right-1 top-3 border border-white"
                :class="{
                  'bg-success-500': status === 'online',
                  'bg-warning-500': status === 'away',
                  'bg-danger-500': status === 'busy',
                  'bg-secondary-500': status === 'offline',
                }"
              ></span>
            </div>
            <span class="block text-slate-600 dark:text-slate-300 text-sm"
              >Jane Cooper
            </span>
            <span class="block text-slate-500 dark:text-slate-300 text-xs"
              >Admin</span
            >
          </header>
          <div class="my-8">
            <Textarea
              label="About"
              placeholder="About ypur self"
              v-model="aboutInfo"
            />
          </div>
          <div class="mb-8">
            <span class="form-label">Status</span>
            <Radio
              v-for="(item, i) in allStatus"
              :key="i"
              :label="item.label"
              :activeClass="item.activeClass"
              class="mb-5"
              v-model="status"
              :value="item.value"
            />
          </div>
          <Button text="Logout" btnClass="btn-dark " />
        </div>
      </Transition>
    </header>
  </div>
</template>
<script setup>
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import Radio from "@/components/Radio";
import Textarea from "@/components/Textarea";
import Tooltip from "@/components/Tooltip";
import { ref, onMounted } from "vue";
import {useChatStore} from "@/store/chat";

// width niye kahini
const width = ref(0);
const handleResize = () => {
  width.value = window.innerWidth;
};
onMounted(() => {
  window.addEventListener("resize", handleResize);
  handleResize();
});
const store = useChatStore();
const aboutInfo = ref("Dessert chocolate cake lemon drops ");
const status = ref("online");
const allStatus = ref([
  {
    value: "online",
    label: "Active",
    activeClass: "ring-success-500 border-success-500",
  },
  {
    value: "busy",
    label: "Do Not Disturb",
    activeClass: "ring-danger-500 border-danger-500",
  },
  {
    value: "away",
    label: "Away",
    activeClass: "ring-warning-500 border-warning-500",
  },
  {
    value: "offline",
    label: "Offline",
    activeClass: "ring-warning-500 border-warning-500",
  },
]);
</script>
<style lang="scss" scoped>
.chat-user-setting-enter-active {
  animation: fade-in-left 0.24s cubic-bezier(0.39, 0.575, 0.565, 1) both;
}
.chat-user-setting-leave-active {
  animation: fade-in-left 0.24s cubic-bezier(0.39, 0.575, 0.565, 1) both reverse;
}
@keyframes fade-in-left {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
