<template>
  <div class="space-y-5">
    <Card>
      <div class="flex justify-between mb-6">
        <h4 class="text-slate-900 text-xl font-medium">Packages</h4>
        <label class="inline-flex text-sm cursor-pointer">
          <input type="checkbox" @change="toggle" hidden />
          <span
            class="px-[18px] py-1 transition duration-100 rounded"
            :class="
              check
                ? 'bg-slate-900 dark:bg-slate-900 text-white'
                : 'dark:text-slate-300'
            "
            >Yearly</span
          >
          <span
            class="px-[18px] py-1 transition duration-100 rounded"
            :class="
              !check
                ? 'bg-slate-900 dark:bg-slate-900 text-white'
                : ' dark:text-slate-300'
            "
            >Monthly</span
          >
        </label>
      </div>
      <div class="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
        <div
          class="price-table bg-opacity-[0.16] dark:bg-opacity-[0.36] rounded-[6px] p-6 text-slate-900 dark:text-white relative overflow-hidden z-[1]"
          :class="item.bg"
          v-for="(item, i) in tables"
          :key="i"
        >
          <div
            class="overlay absolute right-0 top-0 w-full h-full z-[-1]"
            v-if="item.img"
          >
            <img :src="item.img" alt="" class="ml-auto block" />
          </div>
          <div
            v-if="item.ribon"
            class="text-sm font-medium bg-slate-900 dark:bg-slate-900 text-white py-2 text-center absolute ltr:-right-[43px] rtl:-left-[43px] top-6 px-10 transform ltr:rotate-[45deg] rtl:-rotate-45"
          >
            {{ item.ribon }}
          </div>
          <header class="mb-6">
            <h4 class="text-xl mb-5">{{ item.title }}</h4>
            <div
              class="space-x-4 relative flex items-center mb-5 rtl:space-x-reverse"
            >
              <span class="text-[32px] leading-10 font-medium" v-if="check">
                {{ item.price_Yearly }} </span
              ><span class="text-[32px] leading-10 font-medium" v-if="!check">
                {{ item.price_Monthly }}
              </span>
              <span
                class="text-xs text-warning-500 font-medium px-3 py-1 rounded-full inline-block bg-white uppercase h-auto"
                >Save 20%</span
              >
            </div>
            <p class="text-slate-500 dark:text-slate-300 text-sm">
              per user/month, annually
            </p>
          </header>
          <div class="price-body space-y-8">
            <p class="text-sm leading-5 text-slate-600 dark:text-slate-300">
              Designed for teams who need to manage complex workflows with more
              automation and integration.
            </p>
            <div>
              <Button
                :text="item.button"
                btnClass="btn-outline-dark dark:border-slate-400 w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </Card>

    <div class="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
      <div
        class="price-table rounded-[6px] shadow-base dark:bg-slate-800 p-6 text-slate-900 dark:text-white relative overflow-hidden z-[1]"
        :class="item.bg"
        v-for="(item, i) in tables2"
        :key="i"
      >
        <div
          class="overlay absolute right-0 top-0 w-full h-full z-[-1]"
          v-if="item.img"
        >
          <img :src="item.img" alt="" class="ml-auto block" />
        </div>
        <div
          v-if="item.ribon"
          class="text-sm font-medium bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-300 py-2 text-center absolute ltr:-right-[43px] rtl:-left-[43px] top-6 px-10 transform ltr:rotate-[45deg] rtl:-rotate-45"
        >
          {{ item.ribon }}
        </div>
        <header class="mb-6">
          <h4
            class="text-xl mb-5"
            :class="
              item.bg === 'bg-slate-900'
                ? 'text-slate-100'
                : 'text-slate-900 dark:text-slate-300'
            "
          >
            {{ item.title }}
          </h4>
          <div
            class="space-x-4 relative flex items-center mb-5 rtl:space-x-reverse"
            :class="
              item.bg === 'bg-slate-900'
                ? 'text-slate-100'
                : 'text-slate-900 dark:text-slate-300'
            "
          >
            <span class="text-[32px] leading-10 font-medium" v-if="check">
              {{ item.price_Yearly }} </span
            ><span class="text-[32px] leading-10 font-medium" v-if="!check">
              {{ item.price_Monthly }}
            </span>
            <span
              class="text-xs bg-warning-50 text-warning-500 font-medium px-2 py-1 rounded-full inline-block dark:bg-slate-700 uppercase h-auto"
              >Save 20%</span
            >
          </div>
          <p
            class="text-sm"
            :class="
              item.bg === 'bg-slate-900'
                ? 'text-slate-100'
                : 'text-slate-500 dark:text-slate-300'
            "
          >
            per user/month, annually
          </p>
        </header>
        <div class="price-body space-y-8">
          <p
            class="text-sm leading-5"
            :class="
              item.bg === 'bg-slate-900'
                ? 'text-slate-100'
                : 'text-slate-600 dark:text-slate-300'
            "
          >
            Designed for teams who need to manage complex workflows with more
            automation and integration.
          </p>
          <div>
            <Button
              :text="item.button"
              :btnClass="` w-full ${
                item.bg === 'bg-slate-900'
                  ? 'text-slate-100 border-slate-300 border'
                  : 'btn-outline-dark dark:border-slate-400'
              }`"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Button from "@/components/Button";
import Card from "@/components/Card";
import shapeImg1 from "@/assets/images/all-img/big-shap1.png";
import shapeImg2 from "@/assets/images/all-img/big-shap2.png";
import shapeImg3 from "@/assets/images/all-img/big-shap3.png";
import shapeImg4 from "@/assets/images/all-img/big-shap4.png";
export default {
  components: {
    Card,
    Button,
  },
  data() {
    return {
      check: true,
      tables: [
        {
          title: "Advanced",
          price_Yearly: "$96",
          price_Monthly: "$26",
          button: "Buy now",
          bg: "bg-warning-500",
          img: shapeImg1,
        },
        {
          title: "Business",
          price_Yearly: "$196",
          price_Monthly: "$20",
          button: "Buy now",
          bg: "bg-info-500",
          ribon: "Most popular",
          img: shapeImg2,
        },
        {
          title: "Basic",
          price_Yearly: "$26",
          price_Monthly: "$16",
          button: "Try it free",
          bg: "bg-success-500",
          img: shapeImg3,
        },
        {
          title: "Got a large team?",
          price_Yearly: "$126",
          price_Monthly: "$16",
          button: "Request a quote",
          bg: "bg-primary-500",
          img: shapeImg4,
        },
      ],
      tables2: [
        {
          title: "Advanced",
          price_Yearly: "$96",
          price_Monthly: "$26",
          button: "Buy now",
          bg: "bg-white",
        },
        {
          title: "Business",
          price_Yearly: "$196",
          price_Monthly: "$20",
          button: "Buy now",
          bg: "bg-slate-900",
          ribon: "Most popular",
        },
        {
          title: "Basic",
          price_Yearly: "$26",
          price_Monthly: "$16",
          button: "Try it free",
          bg: "bg-white",
        },
        {
          title: "Got a large team?",
          price_Yearly: "$126",
          price_Monthly: "$16",
          button: "Request a quote",
          bg: "bg-white",
        },
      ],
    };
  },
  methods: {
    toggle() {
      this.check = !this.check;
    },
  },
};
</script>
<style lang=""></style>
