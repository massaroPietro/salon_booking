<template>
  <div class="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-6">
    <Card
      :title="item.title"
      :className="`${item.bg} dark:${item.bg}`"
      titleClass=" text-white"
      v-for="(item, i) in cardsColor1"
      :key="i"
      noborder
    >
      <div class="text-white">
        Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod
        tempor incididun ut labore et dolor magna aliqua.
      </div>
    </Card>

    <Card
      :title="item.title"
      :className="`ring-1 ${item.ring}`"
      v-for="(item, i) in cardsColor2"
      :key="i"
      noborder
    >
      Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod
      tempor incididun ut labore et dolor magna aliqua.
    </Card>
  </div>
</template>
<script>
import Card from "@/components/Card";
export default {
  components: {
    Card,
  },
  data() {
    return {
      cardsColor1: [
        {
          title: "Primary Card",
          bg: "bg-primary-500",
          color: "text-primary-500",
        },
        {
          title: "Secondary Card ",
          bg: "bg-secondary-500",
          color: "text-secondary-500",
        },
        {
          title: "Success Card",
          bg: "bg-success-500",
          color: "text-success-500",
        },
        {
          title: "Danger Card",
          bg: "bg-danger-500",
          color: "text-danger-500",
        },
        {
          title: "Warning Card",
          bg: "bg-warning-500",
          color: "text-warning-500",
        },
        {
          title: "Info Card",
          bg: "bg-info-500",
          color: "text-info-500",
        },
      ],
      cardsColor2: [
        {
          title: "Primary Card",
          ring: "ring-primary-500",
        },
        {
          title: "Secondary Card ",
          ring: "ring-secondary-500",
        },
        {
          title: "Success Card",
          ring: "ring-success-500",
        },
        {
          title: "Danger Card",
          ring: "ring-danger-500",
        },
        {
          title: "Warning Card",
          ring: "ring-warning-500",
        },
        {
          title: "Info Card",
          ring: "ring-info-500",
        },
      ],
    };
  },
};
</script>
<style lang="scss"></style>
