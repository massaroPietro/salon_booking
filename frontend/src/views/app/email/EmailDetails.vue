<template>
  <div
    class="absolute left-0 top-0 w-full h-full bg-white dark:bg-slate-800 z-[55] rounded-md p-6 overflow-y-auto"
  >
    <div
      class="flex items-center border-b border-slate-100 dark:border-slate-700 -mx-6 pb-6 mb-6 px-6"
    >
      <div class="flex-1">
        <Tooltip placement="top" arrow>
          <template #button>
            <div class="email-icon" @click="closeDetailsEmail">
              <Icon icon="heroicons-outline:arrow-left" />
            </div>
          </template>
          <span>Back</span>
        </Tooltip>
      </div>
      <div class="flex-none flex items-center space-x-4 rtl:space-x-reverse">
        <Tooltip placement="top" arrow>
          <template #button>
            <div class="email-icon">
              <Icon icon="heroicons-outline:logout" />
            </div>
          </template>
          <span>Forward</span>
        </Tooltip>
        <Tooltip placement="top" arrow>
          <template #button>
            <div class="email-icon">
              <Icon icon="heroicons-outline:star" />
            </div>
          </template>
          <span>Favorite</span>
        </Tooltip>
        <Tooltip placement="top" arrow>
          <template #button>
            <div class="email-icon">
              <Icon icon="heroicons-outline:archive" />
            </div>
          </template>
          <span>Archive</span>
        </Tooltip>
        <Tooltip placement="top" arrow>
          <template #button>
            <div class="email-icon">
              <Icon icon="heroicons-outline:printer" />
            </div>
          </template>
          <span>Print</span>
        </Tooltip>
        <Tooltip placement="top" arrow>
          <template #button>
            <div class="email-icon">
              <Icon icon="heroicons-outline:trash" />
            </div>
          </template>
          <span>Delete</span>
        </Tooltip>
        <Tooltip placement="top" arrow>
          <template #button>
            <div class="email-icon">
              <Icon icon="heroicons-outline:dots-horizontal" />
            </div>
          </template>
          <span>Action</span>
        </Tooltip>
      </div>
    </div>
    <!--  end header -->
    <!--  start conent -->
    <div>
      <div class="text-lg font-medium text-slate-600 dark:text-slate-300">
        Pay bills & win up to 600$ Cashback!
      </div>
      <div class="flex space-x-3 pt-4 pb-6 items-start rtl:space-x-reverse">
        <div class="flex-none">
          <div class="h-8 w-8 rounded-full text-white">
            <img :src="image" alt="" class="block w-full h-full object-cover" />
          </div>
        </div>
        <div class="flex-1">
          <span
            class="text-sm text-slate-600 dark:text-slate-300 font-medium leading-4"
          >
            Esther Howard</span
          >
          <div class="relative -top-1">
            <Dropdown classMenuItems="left-0 w-fit  top-[110%] ">
              <span
                class="text-slate-500 dark:text-slate-400 text-xs flex space-x-1 items-center rtl:space-x-reverse"
                ><span>To me</span> <Icon icon="heroicons-outline:chevron-down"
              /></span>
              <template #menus>
                <div class="bg-white p-4 rounded-md">
                  <ul class="info-500-list">
                    <li>
                      <span>From:</span>
                      <span>dashcode@gmail.com </span>
                    </li>
                    <li>
                      <span>To:</span>
                      <span>example@gmail.com </span>
                    </li>
                    <li>
                      <span>To:</span>
                      <span>4:25 AM 13 Jan 2018 </span>
                    </li>
                  </ul>
                </div>
              </template>
            </Dropdown>
          </div>
        </div>
      </div>
      <div class="text-sm text-slate-600 dark:text-slate-300 font-normal">
        Hi Jane Cooper,
        <br />
        <br />
        Jornalists call this critical, introductory section the "Lede," and when
        bridge properly executed, it's the that carries your reader from an
        headine try at attention-grabbing to the body of your blog post, if you
        want to get it right on of these 10 clever ways to omen your next blog
        <br />
        <br />
        posr with a bang With resrpect, i must disagree with Mr.Zinsser. We all
        know the most part of important part of any article is the title.Without
        a compelleing title, your reader won't even get to the first
        sentence.After the title, however, the first few sentences of your
        article are certainly the most important part.
        <br />
        <br />
        Best regards, <br />
        Esther Howard
      </div>
      <div
        class="border-t border-b py-4 my-6 border-slate-100 dark:border-slate-700 flex flex-wrap space-x-5 rtl:space-x-reverse"
      >
        <div class="text-center">
          <div class="h-[95px] w-[150px] rounded">
            <img
              src="@/assets/images/all-img/inbox-1.png"
              alt=""
              class="block w-full h-full object-cover"
            />
          </div>
          <button class="text-sm text-primary-500 mt-2" type="button">
            Download
          </button>
        </div>
        <!-- end single -->
        <div class="text-center">
          <div class="h-[95px] w-[150px] rounded">
            <img
              src="@/assets/images/all-img/inbox-2.png"
              alt=""
              class="block w-full h-full object-cover"
            />
          </div>
          <button class="text-sm text-primary-500 mt-2" type="button">
            Download
          </button>
        </div>
        <!-- end single -->
        <div class="text-center">
          <div class="h-[95px] w-[150px] rounded">
            <img
              src="@/assets/images/all-img/inbox-3.png"
              alt=""
              class="block w-full h-full object-cover"
            />
          </div>
          <button class="text-sm text-primary-500 mt-2" type="button">
            Download
          </button>
        </div>
        <!-- end single -->
      </div>
      <!-- end wrapper -->
      <div>
        <Button
          icon="heroicons-outline:chat-alt-2"
          text="Reply"
          btnClass="bg-slate-100 text-slate-900 dark:text-slate-300 hover:bg-slate-300 dark:bg-slate-900 btn-sm "
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import Button from "@/components/Button";
import Dropdown from "@/components/Dropdown";
import Icon from "@/components/Icon";
import Tooltip from "@/components/Tooltip";
import { computed } from "vue";
import {useEmailStore} from "@/store/email";
const store = useEmailStore();
const image = computed(() => {
  return store.image;
});
const closeDetailsEmail = () => {
  store.closeDetailsEmail();
};
</script>
<style lang="scss" scoped>
.email-icon {
  @apply h-8 w-8 bg-slate-100 dark:bg-slate-900 dark:text-slate-200 text-slate-600 flex flex-col justify-center items-center text-base rounded-full cursor-pointer;
}
.info-500-list {
  @apply text-xs text-slate-600;
  li {
    @apply flex space-x-2;
    span:nth-child(1) {
      @apply font-medium flex-none text-right;
    }
    span:nth-child(2) {
      @apply flex-1 text-right;
    }
  }
}
</style>
