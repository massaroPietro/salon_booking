<template>
  <div>
    <swiper
      :modules="modules"
      :breakpoints="breakpoints"
      :space-between="30"
      :navigation="true"
      :pagination="{ clickable: true }"
      class="t-ws2"
    >
      <swiper-slide v-for="(item, i) in testi" :key="i" class="py-20">
        <Card>
          <div class="flex items-center mb-4">
            <div class="flex-none">
              <div class="h-[85px] w-[65px] rounded-[40px] ltr:mr-4 rtl:ml-4">
                <img
                  :src="item.img"
                  alt=""
                  class="block w-full object-cover h-full rounded-[40px]"
                />
              </div>
            </div>
            <div class="flex-1">
              <p
                class="text-base font-normal text-slate-600 dark:text-slate-300 mb-3"
              >
                {{ item.description }}
              </p>
              <div class="flex justify-between flex-wrap">
                <h4
                  class="block text-base font-medium text-slate-600 dark:text-slate-300"
                >
                  {{ item.name }}
                </h4>
                <span
                  class="block text-sm font-normal text-slate-600 dark:text-slate-300"
                  >{{ item.deg }}</span
                >
              </div>
            </div>
          </div>
        </Card>
      </swiper-slide>
    </swiper>
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
            "“Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sintsin. Velit officia consequat duis enim of velit mollit.”",
        },
        {
          img: userImg2,
          name: "Darlene Robertson",
          deg: "CEO at Acme Co.",
          description:
            "“Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sintsin. Velit officia consequat duis enim of velit mollit.”",
        },
        {
          img: userImg3,
          name: "Darlene Robertson",
          deg: "CEO at Acme Co.",
          description:
            "“Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sintsin. Velit officia consequat duis enim of velit mollit.”",
        },
        {
          img: userImg4,
          name: "Darlene Robertson",
          deg: "CEO at Acme Co.",
          description:
            "“Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sintsin. Velit officia consequat duis enim of velit mollit.”",
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
.t-ws2 {
  .swiper-button-next,
  .swiper-rtl .swiper-button-prev {
    @apply right-0 transform translate-x-0 translate-y-0 top-8 text-slate-900 dark:text-slate-300 rtl:rotate-180;
  }
  .swiper-button-next:after,
  .swiper-button-prev:after {
    @apply text-2xl;
  }
  .swiper-button-prev,
  .swiper-rtl .swiper-button-next {
    @apply left-auto right-10 transform translate-x-0 translate-y-0 top-8 text-slate-900 dark:text-slate-300 rtl:rotate-180;
  }
  .swiper-pagination-bullet {
    height: 8px !important;
    width: 8px !important;
    background: #fff !important;
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
.dark {
  .swiper-pagination-bullet {
    background-color: #475569 !important;
    &.swiper-pagination-bullet-active {
      background-color: #cbd5e1 !important;
    }
  }
}
</style>
