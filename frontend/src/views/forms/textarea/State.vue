<template>
  <div class="space-y-3">
    <Textarea
      label="Valid State"
      name="ValidState"
      placeholder="Valid"
      validate="This is valid state."
    />
    <Textarea
      label="Invalid State"
      name="InvalidState"
      placeholder="Invalid"
      error="This is invalid state."
    />
  </div>
</template>
<script>
import Textarea from "@/components/Textarea";

export default {
  components: {
    Textarea,
  },
};
</script>
<style lang=""></style>
