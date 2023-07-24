<template>
  <div class="grid grid-cols-12 gap-5">
    <div class="lg:col-span-8 col-span-12">
      <Card title="Version's" :subtitle="items[0].date">
        <div>
          <Badge> new </Badge>
        </div>
        <div class="mt-6 space-y-5">
          <div v-for="(item, i) in items" :key="i" class="mb-3">
            <Disclosure v-slot="{ open }" >
              <DisclosureButton
                class="bg-slate-50 dark:bg-slate-700 dark:bg-opacity-60 rounded-t-md flex justify-between cursor-pointer transition duration-150 font-medium w-full text-start text-base text-slate-600 dark:text-slate-300 px-8 py-4"
                
              >
                <span>{{ item.version}}<span class="font-semibold text-xs text-slate-400">- Published on {{  item.date }}</span></span>
                <span class="transition-all duration-150 text-xl " :class="open && 'rotate-180 transform '">
                  <Icon icon="heroicons:chevron-down-solid" />
                </span>
              </DisclosureButton>
              <DisclosurePanel>
                <div
                  class="text-sm text-slate-600 font-normal bg-white dark:bg-slate-900 dark:text-slate-300 rounded-b-md dark:border dark:border-slate-700 dark:border-t-0 border border-slate-100 border-t-0"
                >
                  <div class="px-8 py-4">
                    <div v-for="(data, j) in item.changes" :key="j">
                      <div class="flex space-x-3 items-center mt-2 text-slate-600 dark:text-slate-300 text-sm">
                        <span class="h-2 w-2 bg-primary-500 rounded-full"></span>
                        <span>{{ data.name }}</span>
                        <span v-if="data.tag=='added'" class="bg-indigo-100 text-indigo-500 px-2 rounded-full text-xs capitalize">{{  data.tag  }}</span>
                        <span v-if="data.tag=='update'" class="bg-yellow-100 text-yellow-500 px-2 rounded-full text-xs capitalize">{{  data.tag  }}</span>
                        <span v-if="data.tag=='fixed'" class="bg-red-100 text-red-500 px-2 rounded-full text-xs capitalize">{{  data.tag  }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </DisclosurePanel>
            </Disclosure>
          </div>
        </div>
      </Card>
    </div>
    <div class="lg:col-span-4 col-span-12">
      <Card title="CHANGELOG">
        <h5 class="text-xs font-medium">VERSION HISTORY</h5>
        <ul class="space-y-3 mt-6 divide-y dark:divide-slate-700 divide-slate-100">
          <li class="flex justify-between items-center text-xs text-slate-600 dark:text-slate-300 pt-3" v-for="(item, i) in items" :key="i">
            <span>{{ item.version }} </span>
            <span>{{ item.date }}</span>
          </li>
        </ul>
      </Card>
    </div>
  </div>
</template>
<script setup>
import Card from "@/components/Card";
import Badge from "@/components/Badge";
import Icon from "@/components/Icon";
import { ref } from "vue";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
const items = ref([
  {
    version: "Version 2.0.1",
    date: "1 February 2023",
    changes: [
      {
        name: "Monochrome mode",
        tag: "added",
      },      
      {
        name: "Axios configuration",
        tag: "fixed",
      },
      {
        name: "Other minor issues",
        tag: "fixed",
      }
    ],
  },
  {
    version: "Version 2.0.0",
    date: "24 January 2023",
    changes: [
      {
        name: "Change log page added.",
        tag: "added",
      },      
      {
        name: "Badge added in sidebar.",
        tag: "added",
      },      
      {
        name: "Vuex replaced with pinia",
        tag: "update",
      },
      {
        name: "Webpack replaced with Vite.",
        tag: "update",
      },
      {
        name: "Other minor issues",
        tag: "fixed",
      }
    ],
  },
  {
    version: "Version 1.0.1 ",
    date: "3 January 2023",
    changes: [
      {
        name: "RTL version added.",
        tag: "added",
      },      
      {
        name: "Sidebar updated.",
        tag: "update",
      },
      {
        name: "Other minor issues",
        tag: "fixed",
      }
    ],
  },
  {
    version: "Version 1.0.0 ",
    date: "29 December 2022",
    changes: [
      {
        name: "Initial Release"
      }
    ],
  },
]);
</script>
<style lang=""></style>
