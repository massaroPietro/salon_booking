<template>
  <div class="space-y-5">
    <div class="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
      <div
        class="bg-no-repeat bg-cover bg-center p-4 rounded-[6px] relative"
        :style="{
          backgroundImage:
            'url(' + widgetBg3 + ')',
        }"
      >
        <div class="max-w-[180px]">
          <h4 class="text-xl font-medium text-white mb-2">
            Upgrade your Dashcode
          </h4>
          <p class="text-sm text-white text-opacity-80">
            Pro plan for better results
          </p>
        </div>
        <div
          class="absolute top-1/2 -translate-y-1/2 ltr:right-6 rtl:left-6 mt-2 h-12 w-12 bg-white rounded-full text-xs font-medium flex flex-col items-center justify-center"
        >
          Now
        </div>
      </div>
      <!-- ?? end Single ?? -->
      <div
        class="bg-no-repeat bg-cover bg-center p-4 rounded-[6px] relative"
        :style="{
          backgroundImage:
            'url(' + widgetBg1 + ')',
        }"
      >
        <div class="max-w-[180px]">
          <div class="text-xl font-medium text-slate-900 mb-2">
            Upgrade your Dashcode
          </div>
          <p class="text-sm text-slate-800">Pro plan for better results</p>
        </div>
        <div
          class="absolute top-1/2 -translate-y-1/2 ltr:right-6 rtl:left-6 mt-2 h-12 w-12 bg-white rounded-full text-xs font-medium flex flex-col items-center justify-center"
        >
          Now
        </div>
      </div>
      <!-- ?? end Single ?? -->
      <div
        class="bg-no-repeat bg-cover bg-center p-4 rounded-[6px] relative"
        :style="{
          backgroundImage:
            'url(' + widgetBg3_1 + ')',
        }"
      >
        <div class="max-w-[180px]">
          <div class="text-xl font-medium text-slate-900 mb-2">
            Upgrade your Dashcode
          </div>
          <p class="text-sm text-slate-800">Pro plan for better results</p>
        </div>
        <div
          class="absolute top-1/2 -translate-y-1/2 ltr:right-6 rtl:left-6 mt-2 h-12 w-12 bg-white rounded-full text-xs font-medium flex flex-col items-center justify-center"
        >
          Now
        </div>
      </div>
      <!-- ?? end Single ?? -->
      <div
        class="bg-no-repeat bg-cover bg-center p-5 rounded-[6px] relative"
        :style="{
          backgroundImage:
            'url(' + widgetBg2 + ')',
        }"
      >

        <div class="max-w-[180px]">
          <h4 class="text-xl font-medium text-white mb-2">
            <span class="block font-normal">Good evening,</span>
            <span class="block">Mr. Dianne Russell</span>
          </h4>
          <p class="text-sm text-white font-normal">Welcome to Dashcode</p>
        </div>
      </div>
      <!-- ?? end Single ?? -->
      <div
        class="bg-no-repeat bg-cover bg-center p-5 rounded-[6px] relative flex items-center"
        :style="{
          backgroundImage:
            'url(' + widgetBg4 + ')',
        }"
      >
        <div class="flex-1">
          <div class="max-w-[180px]">
            <div class="text-xl font-medium text-slate-900 mb-2">
              <span class="block font-normal">Good evening,</span>
              <span class="block">Mr. Dianne Russell</span>
            </div>
            <p class="text-sm text-slate-900 font-normal">
              Welcome to Dashcode
            </p>
          </div>
        </div>
        <div class="flex-none">
          <img
            :src="widgetVector"
            alt=""
            class="ml-auto"
          />
        </div>
      </div>
      <!-- ?? end Single ?? -->
      <div
        class="bg-no-repeat bg-cover bg-center p-5 rounded-[6px] relative flex items-center"
        :style="{
          backgroundImage:
            'url(' + widgetBg5 + ')',
        }"
      >
        <div class="flex-1">
          <div class="max-w-[180px]">
            <div
              class="text-xl font-medium text-white dark:text-slate-800 mb-2"
            >
              <span class="block font-normal">Good evening,</span>
              <span class="block">Mr. Dianne Russell</span>
            </div>
            <p
              class="text-sm text-wgite text-white dark:text-slate-800 font-normal"
            >
              Welcome to Dashcode
            </p>
          </div>
        </div>
        <div class="flex-none">
          <img
            :src="widgetVector2"
            alt=""
            class="ml-auto"
          />
        </div>
      </div>

      <!-- ?? end Single ?? -->
      <div
        class="bg-no-repeat bg-cover bg-center px-5 py-8 rounded-[6px] relative flex items-center"
        :style="{
          backgroundImage:
            'url(' + widgetBg6 + ')',
        }"
      >
        <div class="flex-1">
          <div class="max-w-[180px]">
            <h4 class="text-2xl font-medium text-white mb-2">
              <span class="block text-sm">Current balance,</span>
              <span class="block">$34,564</span>
            </h4>
          </div>
        </div>
        <div class="flex-none">
          <Button
            icon="heroicons-outline:eye"
            text="View details"
            btnClass="btn-light bg-white btn-sm "
          />
        </div>
      </div>
      <!-- ?? end Single ?? -->
      <div
        class="bg-no-repeat bg-cover bg-center px-5 py-8 rounded-[6px] relative flex items-center"
        :style="{
          backgroundImage:
            'url(' + widgetBg7 + ')',
        }"
      >
        <div class="flex-1">
          <div class="max-w-[180px]">
            <h4 class="text-2xl font-medium text-slate-900 mb-2">
              <span class="block text-sm dark:text-slate-800"
                >Current balance,</span
              >
              <span class="block dark:text-slate-800">$34,564</span>
            </h4>
          </div>
        </div>
        <div class="flex-none">
          <Button
            icon="heroicons-outline:eye"
            text="View details"
            btnClass="btn-light bg-white btn-sm "
          />
        </div>
      </div>
      <!-- ?? end Single ?? -->
      <div
        class="bg-no-repeat bg-cover bg-center px-5 py-8 rounded-[6px] relative flex items-center"
        :style="{
          backgroundImage:
            'url(' + widgetBg8 + ')',
        }"
      >
        <div class="flex-1">
          <div class="max-w-[180px]">
            <h4 class="text-2xl font-medium text-slate-900 mb-2">
              <span class="block text-sm dark:text-slate-800"
                >Current balance,</span
              >
              <span class="block dark:text-slate-800">$34,564</span>
            </h4>
          </div>
        </div>
        <div class="flex-none">
          <Button
            icon="heroicons-outline:eye"
            text="View details"
            btnClass="btn-light bg-white btn-sm "
          />
        </div>
      </div>
    </div>
    <div class="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5">
      <div
        class="bg-slate-900 dark:bg-slate-800 mt-7 p-6 relative z-[1] rounded-2xl text-white"
      >
        <div class="max-w-[168px]">
          <div class="widget-title">Unlimited Access</div>
          <div class="text-xs font-normal">
            Upgrade your system to business plan
          </div>
        </div>
        <div class="mt-6 mb-14">
          <button
            class="btn bg-white hover:bg-opacity-80 text-slate-900 btn-sm"
          >
            Upgrade
          </button>
        </div>
        <img
          :src="lineImg"
          alt=""
          class="absolute left-0 bottom-0 w-full z-[-1]"
        />
        <img
          :src="rabbitImg"
          alt=""
          class="absolute ltr:right-5 rtl:left-5 -bottom-4 z-[-1]"
        />
      </div>
      <!-- ?? end single ?? -->
      <div
        class="bg-primary-500 mt-7 p-6 relative z-[1] rounded-2xl text-white"
      >
        <div class="max-w-[168px]">
          <div class="widget-title">Unlimited Access</div>
          <div class="text-xs font-normal">
            Upgrade your system to business plan
          </div>
        </div>
        <div class="mt-6 mb-14">
          <button
            class="btn bg-white hover:bg-opacity-80 text-slate-900 btn-sm"
          >
            Upgrade
          </button>
        </div>
        <img
          :src="lineImg"
          alt=""
          class="absolute left-0 bottom-0 w-full z-[-1]"
        />
        <img
          :src="rabbitImg"
          alt=""
          class="absolute ltr:right-5 rtl:left-5 -bottom-4 z-[-1]"
        />
      </div>
      <!-- ?? end single ?? -->
      <div
        class="bg-success-500 mt-7 p-6 relative z-[1] rounded-2xl text-white"
      >
        <div class="max-w-[168px]">
          <div class="widget-title">Unlimited Access</div>
          <div class="text-xs font-normal">
            Upgrade your system to business plan
          </div>
        </div>
        <div class="mt-6 mb-14">
          <button
            class="btn bg-white hover:bg-opacity-80 text-slate-900 btn-sm"
          >
            Upgrade
          </button>
        </div>
        <img
          :src="lineImg"
          alt=""
          class="absolute left-0 bottom-0 w-full z-[-1]"
        />
        <img
          :src="rabbitImg"
          alt=""
          class="absolute ltr:right-5 rtl:left-5 -bottom-4 z-[-1]"
        />
      </div>
      <!-- ?? end single ?? -->
      <div class="bg-info-500 mt-7 p-6 relative z-[1] rounded-2xl text-white">
        <div class="max-w-[168px]">
          <div class="widget-title">Unlimited Access</div>
          <div class="text-xs font-normal">
            Upgrade your system to business plan
          </div>
        </div>
        <div class="mt-6 mb-14">
          <button
            class="btn bg-white hover:bg-opacity-80 text-slate-900 btn-sm"
          >
            Upgrade
          </button>
        </div>
        <img
          :src="lineImg"
          alt=""
          class="absolute left-0 bottom-0 w-full z-[-1]"
        />
        <img
          :src="rabbitImg"
          alt=""
          class="absolute ltr:right-5 rtl:left-5 -bottom-4 z-[-1]"
        />
      </div>
      <!-- ?? end single ?? -->
    </div>
    <div
      class="grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5"
    >
      <div
        class="bg-slate-900 dark:bg-slate-800 mb-10 mt-7 p-4 relative text-center rounded-2xl text-white"
      >
        <img
          :src="giftImg"
          alt=""
          class="mx-auto relative -mt-[40px]"
        />
        <div class="max-w-[160px] mx-auto mt-6">
          <div class="widget-title">Unlimited Access</div>
          <div class="text-xs font-normal">
            Upgrade your system to business plan
          </div>
        </div>
        <div class="mt-6">
          <button
            class="btn bg-white hover:bg-opacity-80 text-slate-900 btn-sm w-full block"
          >
            Upgrade
          </button>
        </div>
      </div>
      <!-- ?? end single ?? -->
      <div
        class="bg-primary-500 mb-10 mt-7 p-4 relative text-center rounded-2xl text-white"
      >
        <img
          :src="giftImg"
          alt=""
          class="mx-auto relative -mt-[40px]"
        />
        <div class="max-w-[160px] mx-auto mt-6">
          <div class="widget-title">Unlimited Access</div>
          <div class="text-xs font-normal">
            Upgrade your system to business plan
          </div>
        </div>
        <div class="mt-6">
          <button
            class="btn bg-white hover:bg-opacity-80 text-slate-900 btn-sm w-full block"
          >
            Upgrade
          </button>
        </div>
      </div>
      <!-- ?? end single ?? -->
      <div
        class="bg-success-500 mb-10 mt-7 p-4 relative text-center rounded-2xl text-white"
      >
        <img
          :src="giftImg"
          alt=""
          class="mx-auto relative -mt-[40px]"
        />
        <div class="max-w-[160px] mx-auto mt-6">
          <div class="widget-title">Unlimited Access</div>
          <div class="text-xs font-normal">
            Upgrade your system to business plan
          </div>
        </div>
        <div class="mt-6">
          <button
            class="btn bg-white hover:bg-opacity-80 text-slate-900 btn-sm w-full block"
          >
            Upgrade
          </button>
        </div>
      </div>
      <!-- ?? end single ?? -->
      <div
        class="bg-info-500 mb-10 mt-7 p-4 relative text-center rounded-2xl text-white"
      >
        <img
          :src="giftImg"
          alt=""
          class="mx-auto relative -mt-[40px]"
        />
        <div class="max-w-[160px] mx-auto mt-6">
          <div class="widget-title">Unlimited Access</div>
          <div class="text-xs font-normal">
            Upgrade your system to business plan
          </div>
        </div>
        <div class="mt-6">
          <button
            class="btn bg-white hover:bg-opacity-80 text-slate-900 btn-sm w-full block"
          >
            Upgrade
          </button>
        </div>
      </div>
      <!-- ?? end single ?? -->
      <div
        class="bg-warning-500 mb-10 mt-7 p-4 relative text-center rounded-2xl text-white"
      >
        <img
          :src="giftImg"
          alt=""
          class="mx-auto relative -mt-[40px]"
        />

        <div class="max-w-[160px] mx-auto mt-6">
          <div class="widget-title">Unlimited Access</div>
          <div class="text-xs font-normal">
            Upgrade your system to business plan
          </div>
        </div>
        <div class="mt-6">
          <button
            class="btn bg-white hover:bg-opacity-80 text-slate-900 btn-sm w-full block"
          >
            Upgrade
          </button>
        </div>
      </div>
      <!-- ?? end single ?? -->
      <div
        class="bg-danger-500 mb-10 mt-7 p-4 relative text-center rounded-2xl text-white"
      >
        <img
          :src="giftImg"
          alt=""
          class="mx-auto relative -mt-[40px]"
        />
        <div class="max-w-[160px] mx-auto mt-6">
          <div class="widget-title">Unlimited Access</div>
          <div class="text-xs font-normal">
            Upgrade your system to business plan
          </div>
        </div>
        <div class="mt-6">
          <button
            class="btn bg-white hover:bg-opacity-80 text-slate-900 btn-sm w-full block"
          >
            Upgrade
          </button>
        </div>
      </div>
      <!-- ?? end single ?? -->
    </div>
    <div
      class="grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5"
    >
      <div
        class="bg-slate-900 dark:bg-slate-800 mb-10 mt-7 p-4 relative text-center rounded-2xl text-white"
      >
        <img
          :src="rabbitImg"
          alt=""
          class="mx-auto relative -mt-[73px]"
        />
        <div class="max-w-[160px] mx-auto mt-6">
          <div class="widget-title">Unlimited Access</div>
          <div class="text-xs font-normal">
            Upgrade your system to business plan
          </div>
        </div>
        <div class="mt-6">
          <button
            class="btn bg-white hover:bg-opacity-80 text-slate-900 btn-sm w-full block"
          >
            Upgrade
          </button>
        </div>
      </div>
      <!-- ?? end single ?? -->
      <div
        class="bg-primary-500 mb-10 mt-7 p-4 relative text-center rounded-2xl text-white"
      >
        <img
          :src="rabbitImg"
          alt=""
          class="mx-auto relative -mt-[73px]"
        />
        <div class="max-w-[160px] mx-auto mt-6">
          <div class="widget-title">Unlimited Access</div>
          <div class="text-xs font-normal">
            Upgrade your system to business plan
          </div>
        </div>
        <div class="mt-6">
          <button
            class="btn bg-white hover:bg-opacity-80 text-slate-900 btn-sm w-full block"
          >
            Upgrade
          </button>
        </div>
      </div>
      <!-- ?? end single ?? -->
      <div
        class="bg-success-500 mb-10 mt-7 p-4 relative text-center rounded-2xl text-white"
      >
        <img
          :src="rabbitImg"
          alt=""
          class="mx-auto relative -mt-[73px]"
        />
        <div class="max-w-[160px] mx-auto mt-6">
          <div class="widget-title">Unlimited Access</div>
          <div class="text-xs font-normal">
            Upgrade your system to business plan
          </div>
        </div>
        <div class="mt-6">
          <button
            class="btn bg-white hover:bg-opacity-80 text-slate-900 btn-sm w-full block"
          >
            Upgrade
          </button>
        </div>
      </div>
      <!-- ?? end single ?? -->
      <div
        class="bg-info-500 mb-10 mt-7 p-4 relative text-center rounded-2xl text-white"
      >
        <img
          :src="rabbitImg"
          alt=""
          class="mx-auto relative -mt-[73px]"
        />
        <div class="max-w-[160px] mx-auto mt-6">
          <div class="widget-title">Unlimited Access</div>
          <div class="text-xs font-normal">
            Upgrade your system to business plan
          </div>
        </div>
        <div class="mt-6">
          <button
            class="btn bg-white hover:bg-opacity-80 text-slate-900 btn-sm w-full block"
          >
            Upgrade
          </button>
        </div>
      </div>
      <!-- ?? end single ?? -->
      <div
        class="bg-warning-500 mb-10 mt-7 p-4 relative text-center rounded-2xl text-white"
      >
        <img
          :src="rabbitImg"
          alt=""
          class="mx-auto relative -mt-[73px]"
        />
        <div class="max-w-[160px] mx-auto mt-6">
          <div class="widget-title">Unlimited Access</div>
          <div class="text-xs font-normal">
            Upgrade your system to business plan
          </div>
        </div>
        <div class="mt-6">
          <button
            class="btn bg-white hover:bg-opacity-80 text-slate-900 btn-sm w-full block"
          >
            Upgrade
          </button>
        </div>
      </div>
      <!-- ?? end single ?? -->
      <div
        class="bg-danger-500 mb-10 mt-7 p-4 relative text-center rounded-2xl text-white"
      >
        <img
          :src="rabbitImg"
          alt=""
          class="mx-auto relative -mt-[73px]"
        />
        <div class="max-w-[160px] mx-auto mt-6">
          <div class="widget-title">Unlimited Access</div>
          <div class="text-xs font-normal">
            Upgrade your system to business plan
          </div>
        </div>
        <div class="mt-6">
          <button
            class="btn bg-white hover:bg-opacity-80 text-slate-900 btn-sm w-full block"
          >
            Upgrade
          </button>
        </div>
      </div>
      <!-- ?? end single ?? -->
    </div>
  </div>
</template>
<script setup>
import Button from "@/components/Button";
import widgetBg1 from "@/assets/images/all-img/widget-bg-1.png";
import widgetBg2   from   "@/assets/images/all-img/widget-bg-2.png";
import widgetBg3 from "@/assets/images/all-img/widget-bg-3.png";
import widgetBg3_1 from     "@/assets/images/all-img/widget-bg-3-1.png";
import widgetBg4   from  "@/assets/images/all-img/widget-bg-4.png";
import widgetBg5   from   "@/assets/images/all-img/widget-bg-5.png";
import widgetBg6 from"@/assets/images/all-img/widget-bg-6.png";
import widgetBg7 from"@/assets/images/all-img/widget-bg-7.png";
import widgetBg8 from"@/assets/images/all-img/widget-bg-8.png";
import widgetVector    from  "@/assets/images/svg/widgetvector.svg";
import widgetVector2 from "@/assets/images/svg/widgetvector2.svg";
import rabbitImg  from "@/assets/images/svg/rabit.svg";
import giftImg from "@/assets/images/svg/gift.svg";
import lineImg from "@/assets/images/svg/line.svg";
</script>
<style lang=""></style>
