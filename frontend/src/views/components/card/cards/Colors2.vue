<template>
  <div class="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-6">
    <Card bodyClass="p-0" v-for="(item, i) in cards" :key="i" noborder>
      <header
        class="border-b px-4 pt-4 pb-3 flex items-center"
        :class="item.border"
      >
        <span
          class="text-3xl inline-block ltr:mr-2 rtl:ml-2"
          :class="item.color"
          ><Icon :icon="item.icon"
        /></span>
        <h6 class="card-title mb-0" :class="item.color">{{ item.title }}</h6>
      </header>
      <div class="py-3 px-5">
        <div class="card-title2">Card title</div>
        Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod
        tempor incididun ut labore et dolor magna aliqua.
      </div>
    </Card>
  </div>
</template>
<script>
import Card from "@/components/Card";
import Icon from "@/components/Icon";
export default {
  components: {
    Card,
    Icon,
  },
  data() {
    return {
      cards: [
        {
          title: "Primary Card",
          border: "border-primary-500",
          color: "text-primary-500",
          icon: "heroicons-outline:support",
        },
        {
          title: "Secondary Card ",
          border: "border-secondary-500",
          color: "text-secondary-500",
          icon: "heroicons-outline:stop",
        },
        {
          title: "Success Card",
          border: "border-success-500",
          color: "text-success-500",
          icon: "heroicons-outline:badge-check",
        },
        {
          title: "Danger Card",
          border: "border-danger-500",
          color: "text-danger-500",
          icon: "heroicons-outline:ban",
        },
        {
          title: "Warning Card",
          border: "border-warning-500",
          color: "text-warning-500",
          icon: "heroicons-outline:exclamation",
        },
        {
          title: "Info Card",
          border: "border-info-500",
          color: "text-info-500",
          icon: "heroicons-outline:information-circle",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.card-title2 {
  @apply text-base text-slate-600 dark:text-slate-400 font-medium leading-5 mb-2;
}
</style>
