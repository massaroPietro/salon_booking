<template>
  <TabGroup>
    <div class="grid grid-cols-12 gap-2">
      <div class="lg:col-span-3 md:col-span-5 col-span-12">
        <TabList class="">
          <Tab
              v-slot="{ selected }"
              as="template"
              v-for="(item, i) in dynamicWorkDays"
              :key="i"
          >
            <button
                :class="[
            selected
              ? 'text-white btn-dark'
              : 'text-slate-500 bg-white dark:bg-slate-700 dark:text-slate-300',
            'text-sm font-medium md:block mb-4 last:mb-0 capitalize ring-0 focus:ring-0 focus:outline-none px-6 rounded-md py-2 transition duration-200 w-full md:w-auto'
          ]"
            >
              {{ $t('weekDays.' + item.weekday) }}
            </button>
          </Tab>
        </TabList>
      </div>
      <div class="lg:col-span-9 md:col-span-7 col-span-12">
        <TabPanels>
          <TabPanel v-for="(item, i) in dynamicWorkDays" :key="i">
            <WorkHoursFormRepeaterComponent :work-day="item"/>
          </TabPanel>
        </TabPanels>
      </div>
    </div>

  </TabGroup>
</template>

<script>
import {Tab, TabGroup, TabList, TabPanel, TabPanels} from "@headlessui/vue";
import FormRepeater from "@/views/forms/form-repeater.vue";
import WorkHoursFormRepeaterComponent from "@/components/WorkHoursFormRepeaterComponent.vue";
import {useAuthStore} from "@/store/auth";

export default {
  name: "WorkDaysTabsComponent",
  components: {
    WorkHoursFormRepeaterComponent,
    FormRepeater,
    Tab, TabGroup, TabPanels, TabPanel, TabList,
  },
  setup() {
    const authStore = useAuthStore();
    return {authStore}
  },
  props: {
    workDays: {
      type: Array,
      required: true,
    }
  },
  computed: {
    dynamicWorkDays() {
      if (this.workDays && this.workDays.length > 6) {
        if (this.$i18n.locale === 'it') {
          return this.workDays.slice(6).concat(this.workDays.slice(0, 6))
        } else {
          return this.workDays.slice(5).concat(this.workDays.slice(0, 5))
        }
      }
    }
  }
}
</script>
