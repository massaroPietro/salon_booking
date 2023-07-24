<template>
  <div
    class="md:flex md:space-x-5 email_height overflow-hidden relative rtl:space-x-reverse"
  >
    <div
      class="transition-all duration-150"
      :class="[
        width < 1280
          ? ' absolute h-full top-0 md:w-[260px] w-[200px] z-[999]'
          : 'flex-none min-w-[260px]',
        width < 1280 && mobileEmailSidebar
          ? 'ltr:left-0  rtl:right-0'
          : 'ltr:-left-full rtl:-right-full ',
      ]"
    >
      <Card bodyClass=" h-full flex flex-col " className="h-full">
        <div class="flex-1 h-full">
          <div
            class="bg-white dark:bg-slate-900 rounded-md sticky top-0 mx-6 mt-6"
          >
            <Button
              icon="heroicons-outline:plus"
              text="Compose"
              btnClass="btn-dark w-full block  "
              @click="openEmail"
            />
          </div>

          <div class="h-full pb-10 px-6" data-simplebar>
            <ul class="list mt-6">
              <li v-for="item in filters.slice(0, 6)" :key="item.label">
                <label
                  class="flex items-center cursor-pointer px-2 py-3 rounded"
                  @click="fillter = item.value"
                  :class="
                    fillter === item.value
                      ? 'bg-slate-100 text-slate-900 dark:bg-slate-700 dark:text-slate-200'
                      : '  text-slate-600 dark:text-slate-300 '
                  "
                >
                  <div class="flex-1 flex space-x-2 rtl:space-x-reverse">
                    <span
                      class="text-xl"
                      :class="[
                        item.value === 'sent'
                          ? ' transform rotate-[30deg]'
                          : '',
                        fillter === item.value
                          ? ' text-slate-900 dark:text-slate-100'
                          : ' text-slate-400 dark:text-slate-400',
                      ]"
                      ><Icon :icon="item.icon"
                    /></span>
                    <span
                      class="capitalize text-sm"
                      :class="[
                        fillter === item.value ? ' font-medium' : 'font-normal',
                      ]"
                      >{{ item.name }}</span
                    >
                  </div>
                  <span class="flex-none font-normal capitalize text-sm">
                    {{ item.count }}</span
                  >
                </label>
              </li>
            </ul>
            <div
              class="block py-4 text-slate-800 dark:text-slate-400 font-semibold text-xs uppercase"
            >
              Labels
            </div>
            <ul>
              <li
                v-for="item in filters.slice(6)"
                :key="item.label"
                @click="fillter = item.value"
                class="flex space-x-2 text-sm capitalize py-2 cursor-pointer items-center rtl:space-x-reverse"
                :class="
                  fillter === item.value
                    ? ' text-slate-900 dark:text-white'
                    : '  text-slate-600 dark:text-slate-300'
                "
              >
                <span
                  class="inline-block h-2 w-2 rounded-full ring-opacity-30 transition-all duration-150"
                  :class="`
                  ${
                    item.value === 'personal'
                      ? 'bg-danger-500 ring-danger-500'
                      : ''
                  }
                  ${
                    item.value === 'social'
                      ? 'bg-success-500 ring-success-500'
                      : ''
                  }
                  ${
                    item.value === 'promotions'
                      ? 'bg-warning-500 ring-warning-500'
                      : ''
                  }
                  ${
                    item.value === 'business'
                      ? 'bg-primary-500 ring-primary-500'
                      : ''
                  }
                  ${fillter === item.value ? 'ring-4' : 'ring-0'}
                  
                  `"
                ></span>
                <span> {{ item.name }}</span>
              </li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
    <Transition name="overlay-fade">
      <div
        v-if="width < 1280 && mobileEmailSidebar"
        class="overlay bg-slate-900 dark:bg-slate-900 dark:bg-opacity-60 bg-opacity-60 backdrop-filter backdrop-blur-sm absolute w-full flex-1 inset-0 z-[99] rounded-md"
        @click="closeMobileEmailSidebar"
      ></div>
    </Transition>
    <div
      class="flex-1 md:w-[calc(100%-320px)]"
      :class="width < 768 ? 'h-full' : ''"
    >
      <Card
        bodyClass="p-0 h-full  relative"
        :className="width < 1024 ? 'h-full' : ''"
      >
        <div class="all-allEmails px-6 h-full flex flex-col">
          <div
            class="flex justify-between items-center sticky bg-white dark:bg-slate-800 top-0 pt-6 pb-4 px-6 z-[44] border-b border-slate-100 dark:border-slate-700 -mx-6 rounded-t-md"
          >
            <hidden-tools />
            <div
              class="flex-none flex items-center space-x-2 rtl:space-x-reverse"
            >
              <Tooltip placement="top" arrow theme="dark">
                <template #button>
                  <div
                    class="h-8 w-8 bg-slate-100 dark:text-slate-300 dark:bg-slate-900 flex flex-col justify-center items-center text-lg rounded-full cursor-pointer"
                  >
                    <Icon icon="heroicons-outline:sort-descending" />
                  </div>
                </template>
                <span> Sorting </span>
              </Tooltip>
              <Tooltip placement="top" arrow theme="dark">
                <template #button>
                  <div
                    class="h-8 w-8 bg-slate-100 dark:text-slate-300 dark:bg-slate-900 flex flex-col justify-center items-center text-lg rounded-full cursor-pointer"
                  >
                    <Icon icon="heroicons-outline:dots-horizontal" />
                  </div>
                </template>
                <span> Action </span>
              </Tooltip>
            </div>
          </div>

          <Loading :count="1" v-if="emailLoading" />
          <Loading :count="isSkeletonLength" v-if="isSkeleton" class="flex-1" />
          <Emails v-if="!isSkeleton" :emails="selectedEmails" />
          <div class="flex-none">
            <Pagination
              class="py-6"
              :current="current"
              :total="total"
              :per-page="perPage"
              :pageRange="pageRange"
              @page-changed="current = $event"
              enableSelect
              enableSearch
              :options="options"
            />
          </div>
          <Transition name="singleEmail">
            <EmailDetailsVue v-if="singleEmailModal" />
          </Transition>
        </div>
      </Card>
    </div>
    <SendMail />
  </div>
</template>
<script setup>
import Button from "@/components/Button";
import Card from "@/components/Card";
import Icon from "@/components/Icon";
import Pagination from "@/components/Pagination";
import Loading from "@/components/Skeleton/Todo";
import Tooltip from "@/components/Tooltip";
import { computed, ref, watch, onMounted } from "vue";
import {useEmailStore} from "@/store/email";
import Emails from "./Eamils";
import EmailDetailsVue from "./EmailDetails.vue";
import HiddenTools from "./HiddenTools.vue";
import SendMail from "./SendMail.vue";

const width = ref(0);
const handleResize = () => {
  width.value = window.innerWidth;
};
onMounted(() => {
  window.addEventListener("resize", handleResize);
  handleResize();
});

const options = ref([
  {
    value: "1",
    label: "1",
  },
  {
    value: "3",
    label: "3",
  },
  {
    value: "5",
    label: "5",
  },
]);

let store = useEmailStore();
const openEmail = () => {
  store.openEmail();
};

// store  computed
const singleEmailModal = computed(() => store.singleEmailModal);
const mobileEmailSidebar = computed(() => store.mobileEmailSidebar);

// dispatch closeMobileEmailSidebar
const closeMobileEmailSidebar = () => {
  store.closeMobileEmailSidebar();
};

// loading
const emailLoading = computed(() => store.emailLoading);

const fillter = ref("all");

const allEmails = computed(() => store.emailsGet);
const favEmails = computed(() => store.favEmails);
const sentEmails = computed(() => store.sentEmails);
const draftsEmail = computed(() => store.draftEmails);
const personalEmails = computed(() => store.personalEmails);
const socialEmails = computed(() => store.socialEmails);
const promotionsEmails = computed(() => store.promotionsEmails);
const businessEmails = computed(() => store.businesEmails);
const spamEmails = computed(() => store.spamEmails);
const trashEmails = computed(() => store.trashEmailsGet);

const isSkeletonLength = ref(allEmails.value.length);

const isSkeleton = ref(null);
const filters = ref([
  {
    name: "Inbox",
    value: "all",
    icon: "uil:image-v",
  },
  {
    name: "Starred",
    value: "fav",
    icon: "heroicons:star",
  },
  {
    name: "Sent",
    value: "sent",
    icon: "heroicons-outline:paper-airplane",
  },

  {
    name: "Drafts",
    value: "drafts",
    icon: "heroicons-outline:pencil-alt",
  },
  {
    name: "Spam",
    value: "spam",
    icon: "heroicons:information-circle",
  },
  {
    name: "Trash",
    value: "trash",
    icon: "heroicons:trash",
  },
  {
    name: "personal",
    value: "personal",
    icon: "heroicons:chevron-double-right",
  },
  {
    name: "Social",
    value: "social",
    icon: "heroicons:chevron-double-right",
  },
  {
    name: "Promotions",
    value: "promotions",
    icon: "heroicons:chevron-double-right",
  },
  {
    name: "Business",
    value: "business",
    icon: "heroicons:chevron-double-right",
  },
]);

// eslint-disable-next-line vue/return-in-computed-property
const selectedEmails = computed(() => {
  if (fillter.value === "all") {
    return allEmails.value;
  } else if (fillter.value === "fav") {
    return favEmails.value;
  } else if (fillter.value === "sent") {
    return sentEmails.value;
  } else if (fillter.value === "drafts") {
    return draftsEmail.value;
  } else if (fillter.value === "personal") {
    return personalEmails.value;
  } else if (fillter.value === "social") {
    return socialEmails.value;
  } else if (fillter.value === "promotions") {
    return promotionsEmails.value;
  } else if (fillter.value === "business") {
    return businessEmails.value;
  } else if (fillter.value === "spam") {
    return spamEmails.value;
  } else if (fillter.value === "trash") {
    return trashEmails.value;
  }
});
watch(
  fillter,
  () => {
    switch (fillter.value) {
      case "all":
        fillter.value = "all";
        isSkeleton.value = true;
        isSkeletonLength.value = allEmails.value.length;
        if (store.singleEmailModal === true) {
          store.singleEmailModal = false;
        }
        // if mobile email sidebar is open close it
        if (store.mobileEmailSidebar === true) {
          store.mobileEmailSidebar = false;
        }
        setTimeout(() => {
          isSkeleton.value = false;
        }, 500);
        break;
      case "fav":
        fillter.value = "fav";
        isSkeleton.value = true;
        if (store.singleEmailModal === true) {
          store.singleEmailModal = false;
        }
        if (store.mobileEmailSidebar === true) {
          store.mobileEmailSidebar = false;
        }
        isSkeletonLength.value = favEmails.value.length;

        setTimeout(() => {
          isSkeleton.value = false;
        }, 500);
        break;
      case "sent":
        fillter.value = "sent";
        isSkeleton.value = true;
        isSkeletonLength.value = sentEmails.value.length;
        if (store.singleEmailModal === true) {
          store.singleEmailModal = false;
        }
        if (store.mobileEmailSidebar === true) {
          store.mobileEmailSidebar = false;
        }
        setTimeout(() => {
          isSkeleton.value = false;
        }, 500);
        break;
      case "spam":
        fillter.value = "spam";
        isSkeleton.value = true;
        isSkeletonLength.value = spamEmails.value.length;
        if (store.singleEmailModal === true) {
          store.singleEmailModal = false;
        }
        if (store.mobileEmailSidebar === true) {
          store.mobileEmailSidebar = false;
        }
        setTimeout(() => {
          isSkeleton.value = false;
        }, 500);
        break;
      case "trash":
        fillter.value = "trash";
        isSkeleton.value = true;
        isSkeletonLength.value = trashEmails.value.length;
        if (store.singleEmailModal === true) {
          store.singleEmailModal = false;
        }
        if (store.mobileEmailSidebar === true) {
          store.mobileEmailSidebar = false;
        }
        setTimeout(() => {
          isSkeleton.value = false;
        }, 500);
        break;
      case "drafts":
        fillter.value = "drafts";
        isSkeleton.value = true;
        isSkeletonLength.value = draftsEmail.value.length;
        if (store.singleEmailModal === true) {
          store.singleEmailModal = false;
        }
        if (store.mobileEmailSidebar === true) {
          store.mobileEmailSidebar = false;
        }
        setTimeout(() => {
          isSkeleton.value = false;
        }, 500);
        break;
      case "personal":
        fillter.value = "personal";
        isSkeleton.value = true;
        isSkeletonLength.value = personalEmails.value.length;
        if (store.singleEmailModal === true) {
          store.singleEmailModal = false;
        }
        if (store.mobileEmailSidebar === true) {
          store.mobileEmailSidebar = false;
        }
        setTimeout(() => {
          isSkeleton.value = false;
        }, 500);
        break;
      case "social":
        fillter.value = "social";
        isSkeleton.value = true;
        isSkeletonLength.value = socialEmails.value.length;
        if (store.singleEmailModal === true) {
          store.singleEmailModal = false;
        }
        if (store.mobileEmailSidebar === true) {
          store.mobileEmailSidebar = false;
        }
        setTimeout(() => {
          isSkeleton.value = false;
        }, 500);
        break;
      case "promotions":
        fillter.value = "promotions";
        isSkeleton.value = true;
        isSkeletonLength.value = promotionsEmails.value.length;
        if (store.singleEmailModal === true) {
          store.singleEmailModal = false;
        }
        if (store.mobileEmailSidebar === true) {
          store.mobileEmailSidebar = false;
        }
        setTimeout(() => {
          isSkeleton.value = false;
        }, 500);
        break;
      case "business":
        fillter.value = "business";
        isSkeleton.value = true;
        isSkeletonLength.value = businessEmails.value.length;
        if (store.singleEmailModal === true) {
          store.singleEmailModal = false;
        }
        if (store.mobileEmailSidebar === true) {
          store.mobileEmailSidebar = false;
        }
        setTimeout(() => {
          isSkeleton.value = false;
        }, 500);
        break;
      default:
        fillter.value = "all";
        isSkeletonLength.value = businessEmails.value.length;
        isSkeleton.value = true;
        if (store.singleEmailModal === true) {
          store.singleEmailModal = false;
        }
        if (store.mobileEmailSidebar === true) {
          store.mobileEmailSidebar = false;
        }
        setTimeout(() => {
          isSkeleton.value = false;
        }, 500);
        break;
    }
  },
  { deep: true }
);

// pagination options
const current = ref(1);
const perPage = ref(1);
const pageRange = ref(2);
const total = ref(isSkeletonLength);
</script>
<style lang="scss">
.singleEmail-enter-active {
  animation: fade-in-left 0.44s cubic-bezier(0.39, 0.575, 0.565, 1) both;
}
.singleEmail-leave-active {
  animation: fade-in-left 0.34s cubic-bezier(0.39, 0.575, 0.565, 1) both reverse;
}
@keyframes fade-in-left {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
.email_height {
  height: calc(var(--vh, 1vh) * 100 - 12.1rem);
}

@media (max-width: 768px) {
  .email_height {
    height: calc(var(--vh, 1vh) * 100 - 10.5rem);
  }
}
</style>
