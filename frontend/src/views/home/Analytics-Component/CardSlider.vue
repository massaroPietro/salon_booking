<template>
  <swiper
    :effect="'cards'"
    :grabCursor="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide v-for="(item, i) in cards" :key="i">
      <div
        class="h-[200px] bg-gradient-to-r relative rounded-md z-[1] p-4 text-white"
        :class="item.bg"
      >
        <div class="overlay absolute left-0 top-0 h-full w-full -z-[1]">
          <img
            src="@/assets/images/all-img/visa-card-bg.png"
            alt=""
            class="h-full w-full object-cover"
          />
        </div>
        <img src="@/assets/images/logo/visa.svg" alt="" />
        <div class="mt-[18px] font-semibold text-lg mb-[17px]">
          {{ item.cardNo }}
        </div>
        <div class="text-xs text-opacity-75 mb-[2px]">Card balance</div>
        <div class="text-2xl font-semibold">$10,975</div>
      </div>
    </swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      cards: [
        {
          bg: "from-[#1EABEC] to-primary-500 ",
          cardNo: "****  ****  **** 3945",
        },
        {
          bg: "from-[#4C33F7] to-[#801FE0] ",
          cardNo: "****  ****  **** 3945",
        },
        {
          bg: "from-[#FF9838] to-[#008773]",
          cardNo: "****  ****  **** 3945",
        },
      ],
    };
  },
  setup() {
    return {
      modules: [EffectCards],
    };
  },
};
</script>
<style lang="scss" scoped>
.bg-full {
  background-size: 100% 100%;
}
</style>
