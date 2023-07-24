<template>
  <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
    <Card>
      <div class="space-y-6">
        <div class="flex space-x-3 items-center rtl:space-x-reverse">
          <div
            class="flex-none h-8 w-8 rounded-full bg-slate-800 dark:bg-slate-700 text-slate-300 flex flex-col items-center justify-center text-lg"
          >
            <Icon icon="heroicons:building-office-2" />
          </div>
          <div
            class="flex-1 text-base text-slate-900 dark:text-white font-medium"
          >
            Company Settings
          </div>
        </div>
        <div class="text-slate-600 dark:text-slate-300 text-sm">
          Set up your company profile, add your company logo, and more
        </div>
        <router-link
          to="#"
          class="inline-flex items-center space-x-3 rtl:space-x-reverse text-sm capitalize font-medium text-slate-600 dark:text-slate-300"
        >
          <span>Chnage Settings</span> <Icon icon="heroicons:arrow-right"
        /></router-link>
      </div> </Card
    ><Card>
      <div class="space-y-6">
        <div class="flex space-x-3 items-center rtl:space-x-reverse">
          <div
            class="flex-none h-8 w-8 rounded-full bg-primary-500 text-slate-300 flex flex-col items-center justify-center text-lg"
          >
            <Icon icon="heroicons:credit-card" />
          </div>
          <div
            class="flex-1 text-base text-slate-900 dark:text-white font-medium"
          >
            Payment Settings
          </div>
        </div>
        <div class="text-slate-600 dark:text-slate-300 text-sm">
          Connect your bank account to your company profile, and more
        </div>
        <router-link
          to="#"
          class="inline-flex items-center space-x-3 rtl:space-x-reverse text-sm capitalize font-medium text-slate-600 dark:text-slate-300"
        >
          <span>Chnage Settings</span> <Icon icon="heroicons:arrow-right"
        /></router-link>
      </div> </Card
    ><Card>
      <div class="space-y-6">
        <div class="flex space-x-3 rtl:space-x-reverse items-center">
          <div
            class="flex-none h-8 w-8 rounded-full bg-success-500 text-white flex flex-col items-center justify-center text-lg"
          >
            <Icon icon="heroicons:users" />
          </div>
          <div
            class="flex-1 text-base text-slate-900 dark:text-white font-medium"
          >
            Profile Settings
          </div>
        </div>
        <div class="text-slate-600 dark:text-slate-300 text-sm">
          Set up your profile, add your profile photo, and more
        </div>
        <router-link
          to="#"
          class="inline-flex items-center space-x-3 rtl:space-x-reverse text-sm capitalize font-medium text-slate-600 dark:text-slate-300"
        >
          <span>Chnage Settings</span> <Icon icon="heroicons:arrow-right"
        /></router-link>
      </div>
    </Card>
  </div>
</template>

<script setup>
import Card from "@/components/Card";
import Icon from "@/components/Icon";
</script>
<style lang=""></style>
