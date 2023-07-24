<template>
  <div>
    <div class="grid md:grid-cols-3 grid-cols-1 gap-5">
      <div
        v-for="(item, i) in customers"
        :key="i"
        class="relative z-[1] text-center p-4 rounded before:w-full before:h-[calc(100%-60px)] before:absolute before:left-0 before:top-[60px] before:rounded before:z-[-1] before:bg-opacity-[0.1]"
        :class="item.bg"
      >
        <div
          class="h-[70px] w-[70px] rounded-full mx-auto mb-4 relative"
          :class="item.active ? 'ring-2 ring-[#FFC155]' : ''"
        >
          <span
            class="crown absolute -top-[24px] left-1/2 -translate-x-1/2"
            v-if="item.active"
            ><img src="@/assets/images/icon/crown.svg" alt=""
          /></span>
          <img
            :src="item.img"
            alt=""
            class="w-full h-full rounded-full"
          />
          <span
            class="h-[27px] w-[27px] absolute right-0 bottom-0 rounded-full bg-[#FFC155] border border-white flex flex-col items-center justify-center text-white text-xs font-medium"
            >{{ item.number }}</span
          >
        </div>
        <h4 class="text-sm text-slate-600 font-semibold mb-4">
          {{ item.title }}
        </h4>
        <div
          class="inline-block bg-slate-900 text-white px-[10px] py-[6px] text-xs font-medium rounded-full min-w-[60px]"
        >
          {{ item.value }}
        </div>
        <div>
          <div
            class="flex justify-between text-sm font-normal dark:text-slate-300 mb-3 mt-4"
          >
            <span>Progress</span>
            <span class="font-normal">{{ item.value }}%</span>
          </div>
          <ProgressBar :value="item.value" :barColor="item.barColor" />
        </div>
      </div>
    </div>
    <div class="grid grid-cols-1 gap-5 mt-5">
      <div
        v-for="(item, i) in customers2"
        :key="i"
        class="relative z-[1] p-4 rounded md:flex items-center bg-gray-5003 dark:bg-slate-900 md:space-x-10 md:space-y-0 space-y-3 rtl:space-x-reverse"
      >
        <div
          class="h-10 w-10 rounded-full relative"
          :class="item.active ? 'ring-2 ring-[#FFC155]' : ''"
        >
          <span
            class="crown absolute -top-[14px] left-1/2 -translate-x-1/2"
            v-if="item.active"
            ><img src="@/assets/images/icon/crown.svg" alt=""
          /></span>
          <img :src="item.img" alt="" class="w-full h-full rounded-full" />
          <span
            class="h-4 w-4 absolute right-0 bottom-0 rounded-full bg-[#FFC155] border border-white flex flex-col items-center justify-center text-white text-[10px] font-medium"
            >{{ item.number }}</span
          >
        </div>
        <h4 class="text-sm text-slate-600 font-semibold">
          {{ item.title }}
        </h4>
        <div
          class="inline-block text-center bg-slate-900 text-white px-[10px] py-[6px] text-xs font-medium rounded-full min-w-[60px]"
        >
          {{ item.value }}
        </div>
        <div class="flex-1">
          <div
            class="flex justify-between text-sm font-normal dark:text-slate-300 mb-3"
          >
            <span>Progress</span>
            <span class="font-normal">{{ item.value }}%</span>
          </div>
          <ProgressBar :value="item.value" :barColor="item.barColor" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ProgressBar from "@/components/ProgressBar";
// Image Import
import customer1 from "@/assets/images/all-img/cus-1.png"
import customer2 from "@/assets/images/all-img/cus-2.png"
import customer3 from "@/assets/images/all-img/cus-3.png"
import customer4 from "@/assets/images/users/user-1.jpg"
import customer5 from "@/assets/images/users/user-2.jpg"

export default {
  components: {
    ProgressBar,
  },
  data() {
    return {
      customers: [
        {
          title: "Nicole Kidman",
          img: customer1,
          value: 70,
          bg: "before:bg-info-500",
          barColor: "bg-info-500",
          number: 2,
        },
        {
          title: "Monica Bellucci",
          img: customer2,
          value: 80,
          bg: "before:bg-warning-500",
          barColor: "bg-warning-500",
          active: true,
          number: 1,
        },
        {
          title: "Pamela Anderson",
          img: customer3,
          value: 65,
          bg: "before:bg-success-500",
          barColor: "bg-success-500",
          number: 3,
        },
      ],
      customers2: [
        {
          title: "Dianne Russell",
          img: customer4,
          value: 60,
          bg: "before:bg-info-500",
          barColor: "bg-info-500",
          number: 4,
        },
        {
          title: "Robert De Niro",
          img: customer5,
          value: 50,
          bg: "before:bg-warning-500",
          barColor: "bg-warning-500",
          number: 5,
        },
      ],
    };
  },
};
</script>
<style lang=""></style>
