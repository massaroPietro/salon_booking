<template>
  <div class="space-y-5">
    <Advanced />
    <Advanced2 />
  </div>
</template>
<script>
import Advanced from "./Advanced";
import Advanced2 from "./Advanced2";
export default {
  components: {
    Advanced,
    Advanced2,
  },
};
</script>
<style lang="scss">
.vgt-inner-wrap {
  @apply shadow-none;
}
</style>
