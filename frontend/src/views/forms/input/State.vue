<template>
  <div class="space-y-3">
    <Textinput
      label="Valid State"
      name="ValidState"
      type="text"
      placeholder="Valid"
      validate="This is valid state."
    />
    <Textinput
      label="Invalid State"
      name="InvalidState"
      type="text"
      placeholder="Invalid"
      error="This is invalid state."
    />
  </div>
</template>
<script>
import Textinput from "@/components/Textinput";

export default {
  components: {
    Textinput,
  },
};
</script>
<style lang=""></style>
