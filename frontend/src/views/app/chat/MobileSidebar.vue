<template>
  <div class="absolute ltr:left-0 rtl:right-0 top-0 w-[260px] z-[99] h-full">
    <Card
      bodyClass=" relative p-0 h-full overflow-hidden "
      className="h-full rounded-tl-md rounded-bl-md  rounded-tr-none rounded-br-none"
    >
      <div class="border-b border-slate-100 dark:border-slate-700 pb-4 mb-4">
        <Myprofile />
      </div>
      <div class="border-b border-slate-100 dark:border-slate-700 pb-4">
        <div
          class="search px-3 mx-6 rounded flex items-center space-x-3 rtl:space-x-reverse"
        >
          <div class="flex-none text-base text-slate-500">
            <Icon icon="bytesize:search" />
          </div>
          <input
            v-model="this.searchContact"
            placeholder="Search..."
            class="w-full flex-1 block bg-transparent py-2 focus:ring-0 focus:outline-none"
          />
        </div>
      </div>
      <div class="mobile-contact-height" data-simplebar>
        <Contact />
      </div>
    </Card>
  </div>
</template>
<script>
import Card from "@/components/Card";
import Icon from "@/components/Icon";
import Myprofile from "./Myprofile";
import Contact from "./Concats.vue";
import {mapWritableState} from "pinia";
import {useChatStore} from "@/store/chat";

export default {
  components: {
    Card,
    Myprofile,
    Contact,
    Icon,
  },
  computed:{
    ...mapWritableState(useChatStore, ['searchContact'])
  }
};
</script>
<style lang="scss">
.mobile-contact-height {
  height: calc(100% - 138px);
}
</style>
