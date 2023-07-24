<template>
  <div>
    <Card title="Customer stories">
      <swiper
        :modules="modules"
        :space-between="0"
        :breakpoints="breakpoints"
        :navigation="true"
        class="t-ws3"
      >
        <swiper-slide
          v-for="(testimonialCard, t) in testimonialinfo"
          :key="t"
          class="px-4"
        >
          <div class="w-full p-8 bg-[#F5F7FC] dark:bg-slate-700 rounded-lg">
            <div class="flex items-start justify-between">
              <div class="w-12 h-12">
                <img
                  class="rounded-full w-full h-full object-cover"
                  :src="testimonialCard.img"
                  alt="image"
                />
              </div>

              <span
                class="font-Inter text-slate-400 dark:text-slate-300 text-sm font-normal"
                >{{ testimonialCard.date }}</span
              >
            </div>
            <h3
              class="font-Inter text-slate-900 dark:text-slate-50 text-xl font-normal pt-7 py-4"
            >
              {{ testimonialCard.title }}
            </h3>
            <p
              class="font-Inter text-slate-500 dark:text-slate-300 text-base font-normal"
            >
              {{ testimonialCard.description }}
            </p>
            <div class="md:flex items-center justify-between mt-7">
              <div>
                <p
                  class="font-Inter text-base font-normal text-slate-400 mb-3 md:mb-0"
                >
                  By:
                  <span class="text-slate-900 dark:text-slate-50">{{
                    testimonialCard.reviewedBy
                  }}</span>
                </p>
              </div>
              <ul>
                <li
                  v-for="(icon, i) in 5"
                  :key="i"
                  class="cursor-pointer inline-block mx-1 text-base text-amber-300"
                >
                  <Icon icon="ant-design:star-filled" />
                </li>
              </ul>
            </div>
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
import Icon from "@/components/Icon";
import Card from "@/components/Card";
import userImg2 from "@/assets/images/users/user-2.jpg";
import userImg3 from "@/assets/images/users/user-3.jpg";
import userImg4 from "@/assets/images/users/user-4.jpg";
// Import Swiper styles
export default {
  components: {
    Swiper,
    SwiperSlide,
    Icon,
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
          slidesPerView: 3,
        },
      },
      testimonialinfo: [
        {
          img: userImg2,
          date: "6 months ago",
          title: "You’ve been so helpful.",
          reviewedBy: "Business",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
        },
        {
          img: userImg3,
          date: "2 months ago",
          title: "You’ve been so helpful.",
          reviewedBy: "Designer",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
        },
        {
          img: userImg4,
          date: "3 months ago",
          title: "You’ve been so helpful.",
          reviewedBy: "Developer",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
        },
        {
          img: userImg2,
          date: "6 months ago",
          title: "You’ve been so helpful.",
          reviewedBy: "Business",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
        },
        {
          img: userImg3,
          date: "2 months ago",
          title: "You’ve been so helpful.",
          reviewedBy: "Designer",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
        },
        {
          img: userImg4,
          date: "3 months ago",
          title: "You’ve been so helpful.",
          reviewedBy: "Developer",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
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
.t-ws3 {
  .swiper-button-next,
  .swiper-rtl .swiper-button-prev {
    @apply h-8 w-8 bg-white dark:bg-slate-600 border-slate-300 rounded-full shadow-lg text-slate-900 dark:text-slate-300 flex flex-col items-center justify-center m-0 p-0 ltr:right-0 rtl:left-0;
  }
  .swiper-button-next:after,
  .swiper-button-prev:after {
    @apply text-sm;
  }
  .swiper-button-prev,
  .swiper-rtl .swiper-button-next {
    @apply h-8 w-8 bg-white dark:bg-slate-600 flex flex-col items-center justify-center m-0 p-0 border-slate-300 rounded-full shadow-lg text-slate-900 dark:text-slate-300 ltr:left-0 rtl:right-0;
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
