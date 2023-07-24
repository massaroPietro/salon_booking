<template>
  <TabGroup>
    <TabList class="lg:space-x-6 md:space-x-3 space-x-0 rtl:space-x-reverse">
      <Tab
        v-slot="{ selected }"
        as="template"
        v-for="(item, i) in buttons"
        :key="i"
      >
        <button
          :class="[
            selected
              ? 'text-white bg-primary-500 '
              : 'text-slate-500 bg-white dark:bg-slate-700 dark:text-slate-300',
          ]"
          class="text-sm font-medium mb-7 last:mb-0 capitalize ring-0 foucs:ring-0 focus:outline-none px-6 rounded-md py-2 transition duration-150"
        >
          {{ item.title }}
        </button>
      </Tab>
    </TabList>
    <TabPanels>
      <TabPanel>
        <div class="text-slate-600 dark:text-slate-400 text-sm font-normal">
          Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui
          esse pariatur duis deserunt mollit dolore cillum minim tempor enim.
          Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate
          aute id deserunt nisi.
        </div>
      </TabPanel>
      <TabPanel>
        <div class="text-slate-600 dark:text-slate-400 text-sm font-normal">
          Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui
          esse pariatur duis deserunt mollit dolore cillum minim tempor enim.
        </div>
      </TabPanel>
      <TabPanel
        ><div class="text-slate-600 dark:text-slate-400 text-sm font-normal">
          Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui
        </div></TabPanel
      >
      <TabPanel
        ><div class="text-slate-600 dark:text-slate-400 text-sm font-normal">
          Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui
          esse pariatur duis deserunt mollit dolore cillum minim tempor enim.
          Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate
          aute id deserunt nisi.
        </div></TabPanel
      >
    </TabPanels>
  </TabGroup>
</template>

<script setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
const buttons = [
  {
    title: "Home",
  },
  {
    title: "Profile",
  },
  {
    title: "Messages",
  },
  {
    title: "Settings",
  },
];
</script>
