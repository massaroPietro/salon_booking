<template>
  <div>
    <TabGroup>
      <div class="grid gap-5 grid-cols-12">
        <div class="xl:col-span-3 lg:col-span-4 col-span-12 card-auto-height">
          <Card>
            <TabList class="flex flex-col space-y-1 text-start items-start">
              <Tab
                v-for="(item, i) in faqmenus"
                :key="i"
                v-slot="{ selected }"
                as="template"
              >
                <button
                  type="button"
                  class="focus:ring-0 focus:outline-none space-x-2 text-sm flex items-center w-full transition duration-150 px-3 py-4 rounded-[6px] rtl:space-x-reverse"
                  :class="
                    selected
                      ? 'bg-slate-100 dark:bg-slate-900 dark:text-white'
                      : 'bg-white dark:bg-slate-800 dark:text-slate-300'
                  "
                >
                  <Icon
                    icon="heroicons:chevron-double-right-solid"
                    class="text-lg"
                    :class="
                      selected ? ' opacity-100' : 'opacity-50 dark:opacity-100'
                    "
                  />
                  <span> {{ item.title }}</span>
                </button>
              </Tab>
            </TabList>
          </Card>
        </div>
        <div class="xl:col-span-9 lg:col-span-8 col-span-12">
          <TabPanels>
            <TabPanel>
              <Accordion :items="items" parentClass="space-y-5" />
            </TabPanel>
            <TabPanel>
              <Accordion :items="items2" parentClass="space-y-5" />
            </TabPanel>
            <TabPanel>
              <Accordion :items="items3" parentClass="space-y-5" />
            </TabPanel>
          </TabPanels>
        </div>
      </div>
    </TabGroup>
  </div>
</template>

<script>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import Card from "@/components/Card";
import Icon from "@/components/Icon";
import Accordion from "@/components/Accordion";
export default {
  components: {
    TabGroup,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    Card,
    Accordion,
    Icon,
  },
  data() {
    return {
      faqmenus: [
        {
          title: "Getting started",
        },
        {
          title: "Privacy & security",
        },
        {
          title: "Legal",
        },
      ],
      items: [
        {
          title: "How does Dashcode work?",
          content:
            "Jornalists call this critical, introductory section the  and when bridge properly executed, it's the that carries your reader from anheadine try at attention-grabbing to the body of your blog post.",
        },
        {
          title: "Where i can learn more about using Dashcode?",
          content:
            "Jornalists call this critical, introductory section the  and when bridge properly executed, it's the that carries your reader from anheadine try at attention-grabbing to the body of your blog post.",
        },
        {
          title: "Why Dashcode is so important?",
          content:
            "Jornalists call this critical, introductory section the  and when bridge properly executed, it's the that carries your reader from anheadine try at attention-grabbing to the body of your blog post.",
        },
        {
          title: "Where can i find Dashcode?",
          content:
            "Jornalists call this critical, introductory section the  and when bridge properly executed, it's the that carries your reader from anheadine try at attention-grabbing to the body of your blog post.",
        },
        {
          title: "Why Dashcode is so important?",
          content:
            "Jornalists call this critical, introductory section the  and when bridge properly executed, it's the that carries your reader from anheadine try at attention-grabbing to the body of your blog post.",
        },
      ],
      items2: [
        {
          title: "How does Dashcode work?",
          content:
            "Jornalists call this critical, introductory section the  and when bridge properly executed, it's the that carries your reader from anheadine try at attention-grabbing to the body of your blog post.",
        },
        {
          title: "Where i can learn more about using Dashcode?",
          content:
            "Jornalists call this critical, introductory section the  and when bridge properly executed, it's the that carries your reader from anheadine try at attention-grabbing to the body of your blog post.",
        },
      ],
      items3: [
        {
          title: "How does Dashcode work?",
          content:
            "Jornalists call this critical, introductory section the  and when bridge properly executed, it's the that carries your reader from anheadine try at attention-grabbing to the body of your blog post.",
        },
        {
          title: "Where i can learn more about using Dashcode?",
          content:
            "Jornalists call this critical, introductory section the  and when bridge properly executed, it's the that carries your reader from anheadine try at attention-grabbing to the body of your blog post.",
        },
        {
          title: "Where can i find Dashcode?",
          content:
            "Jornalists call this critical, introductory section the  and when bridge properly executed, it's the that carries your reader from anheadine try at attention-grabbing to the body of your blog post.",
        },
      ],
    };
  },
};
</script>
<style lang="scss">
.card-height {
  .card {
    @apply h-[248px] overflow-auto;
  }
}
.card-auto-height {
  .card {
    @apply h-auto;
  }
}
</style>
