<template>
  <div
      class="flex space-x-5 chat-height overflow-hidden relative rtl:space-x-reverse"
  >
    <div class="flex-none min-w-[260px]" v-if="window.width > 1024">
      <Card bodyClass=" relative p-0 h-full overflow-hidden ">
        <div class="border-b border-slate-100 dark:border-slate-700 pb-4">
          <Myprofile/>
        </div>
        <div class="border-b border-slate-100 dark:border-slate-700 py-1">
          <div
              class="search px-3 mx-6 rounded flex items-center space-x-3 rtl:space-x-reverse"
          >
            <div class="flex-none text-base text-slate-900 dark:text-slate-400">
              <Icon icon="bytesize:search"/>
            </div>
            <input
                v-model="this.searchContact"
                placeholder="Search..."
                class="w-full flex-1 block bg-transparent placeholder:font-normal placeholder:text-slate-400 py-2 focus:ring-0 focus:outline-none dark:text-slate-200 dark:placeholder:text-slate-400"
            />
          </div>
        </div>
        <div class="contact-height" data-simplebar>
          <Contact/>
        </div>
      </Card>
    </div>
    <Transition @enter="enterMobileSidebar" @leave="leaveMobileSidebar">
      <mobile-sidebar
          v-if="window.width <= 1024 && this.mobileChatSidebar"
      />
    </Transition>
    <Transition name="overlay-fade">
      <div
          v-if="window.width <= 1024 && this.mobileChatSidebar"
          class="overlay bg-slate-900 dark:bg-slate-900 dark:bg-opacity-60 bg-opacity-60 backdrop-filter backdrop-blur-sm absolute w-full flex-1 inset-0 z-[9] rounded-md"
          @click="this.mobileChatSidebar = false"
      ></div>
    </Transition>
    <div class="flex-1">
      <div class="parent flex space-x-5 h-full rtl:space-x-reverse">
        <div
            class=""
            :class="
            this.openinfo &&
            this.activechat === true
              ? 'flex-1'
              : 'flex-1'
          "
        >
          <Card bodyClass="p-0 h-full" className="h-full">
            <Chats v-if="this.activechat === true"/>
            <Blank v-if="this.activechat === false"/>
          </Card>
        </div>
        <div
            class="flex-none w-[285px]"
            v-if="
            this.openinfo &&
            this.activechat === true &&
            window.width > 1280
          "
        >
          <Card bodyClass="p-0 h-full">
            <infomation/>
          </Card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Card from "@/components/Card";
import Icon from "@/components/Icon";
import Blank from "./Blank.vue";
import Contact from "./Concats.vue";
import infomation from "./Info.vue";
import Chats from "./Message.vue";
import Myprofile from "./Myprofile.vue";
import window from "@/mixins/window";
import MobileSidebar from "./MobileSidebar.vue";
import {gsap} from "gsap";
import {mapWritableState, mapActions} from "pinia";
import {useChatStore} from "@/store/chat";

export default {
  mixins: [window],
  components: {
    Card,
    Icon,
    Blank,
    Contact,
    infomation,
    Chats,
    Myprofile,
    MobileSidebar,
  },
  // beforeRouteLeave activechat make false
  beforeRouteLeave(to, from, next) {
    this.activechat = false;
    next();
  },

  methods: {
    enterMobileSidebar(el) {
      gsap.from(el, {
        x: this.$store.themeSettingsStore.direction ? 100 : -100,
        duration: 0.3,
        ease: "power3.out",
      });
    },
    leaveMobileSidebar(el) {
      gsap.to(el, {
        x: this.$store.themeSettingsStore.direction ? 100 : -100,
        duration: 0.3,
        ease: "power3.out",
      });
    },
  },
  computed: {
    ...mapWritableState(useChatStore,
        [
          'searchContact',
          'mobileChatSidebar',
          'openinfo',
          'activechat',
        ])
  }
};
</script>
<style lang="scss" scoped>
.chat-height {
  height: calc(var(--vh, 1vh) * 100 - 12.1rem);
}

@media (max-width: 768px) {
  .chat-height {
    height: calc(var(--vh, 1vh) * 100 - 10.5rem);
  }
}

.contact-height {
  height: calc(100% - 138px);
}
</style>
