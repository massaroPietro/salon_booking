<template>
  <div>
    <Card title="Customer stories">
      <swiper
        :modules="modules"
        :space-between="30"
        :pagination="{ clickable: true }"
        :breakpoints="breakpoints"
        class="t-ws"
      >
        <swiper-slide v-for="(item, i) in testi" :key="i">
          <div
            class="border border-gray-500 border-opacity-10 p-6 shadow-testi rounded-md relative mb-14"
          >
            <div
              class="absolute ltr:right-6 rtl:left-6 top-6 lg:opacity-100 opacity-0"
            >
              <img :src="q" alt="" />
            </div>
            <div class="flex items-center mb-4">
              <div class="flex-none">
                <div class="h-[56px] w-[56px] ltr:mr-4 rtl:ml-4 rounded-full">
                  <img
                    :src="item.img"
                    alt=""
                    class="block w-full object-cover h-full rounded-full"
                  />
                </div>
              </div>
              <div class="flex-1">
                <h4 class="text-base text-slate-900 font-medium">
                  {{ item.name }}
                </h4>
                <span
                  class="block text-sm text-slate-600 dark:text-slate-300 font-medium"
                  >{{ item.deg }}</span
                >
              </div>
            </div>

            <p class="text-base font-normal text-slate-600 dark:text-slate-300">
              {{ item.description }}
            </p>
          </div>
        </swiper-slide>
      </swiper>
    </Card>
  </div>
</template>
<script>
// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectFade,
} from "swiper";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import Card from "@/components/Card";
import q from "@/assets/images/svg/q.svg";

import userImg1 from "@/assets/images/users/user-1.jpg";
import userImg2 from "@/assets/images/users/user-2.jpg";
import userImg3 from "@/assets/images/users/user-3.jpg";
import userImg4 from "@/assets/images/users/user-4.jpg";
// Import Swiper styles
export default {
  components: {
    Swiper,
    SwiperSlide,
    Card,
  },
  data() {
    return {
      breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1,
        },
        1024: {
          slidesPerView: 2,
        },
      },
      testi: [
        {
          img: userImg1,
          name: "Darlene Robertson",
          deg: "CEO at Acme Co.",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
        },
        {
          img: userImg2,
          name: "Darlene Robertson",
          deg: "CEO at Acme Co.",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
        },
        {
          img: userImg3,
          name: "Darlene Robertson",
          deg: "CEO at Acme Co.",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
        },
        {
          img: userImg4,
          name: "Darlene Robertson",
          deg: "CEO at Acme Co.",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
        },
      ],
    };
  },

  setup() {
    return {
      modules: [Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade],
    };
  },
};
</script>

<style lang="scss">
.t-ws {
  .swiper-pagination-bullet {
    height: 8px !important;
    width: 8px !important;
    background: #e2eaf5 !important;
    @apply rounded-full opacity-100;
    &.swiper-pagination-bullet-active {
      background: #000 !important;
      height: 10px !important;
      width: 10px !important;
    }
  }
  .swiper-horizontal > .swiper-pagination-bullets,
  .swiper-pagination-bullets.swiper-pagination-horizontal,
  .swiper-pagination-custom,
  .swiper-pagination-fraction {
    @apply bottom-[0px];
  }
}
</style>
