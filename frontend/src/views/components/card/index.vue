<template>
  <div>
    <Basic />
    <Normall />
    <Nobody />
    <Colors />
    <Colors2 />
  </div>
</template>
<script>
import Basic from "./cards/Basic.vue";
import Normall from "./cards/Normal.vue";
import Nobody from "./cards/Nobody.vue";
import Colors from "./cards/Colors.vue";
import Colors2 from "./cards/Colors2.vue";
export default {
  components: {
    Basic,
    Normall,
    Nobody,
    Colors,
    Colors2,
  },
};
</script>
<style lang="scss">
.btn-link {
  @apply text-slate-900 font-medium underline text-sm dark:text-white;
  &.white {
    @apply text-white;
  }
}
.card-text {
  @apply text-slate-600 dark:text-slate-300 text-sm font-normal leading-5;
}
.card {
  @apply h-min;
}
</style>
