<template>
  <div class="space-y-2">
    <Textinput
      label="Large"
      name="largesize2"
      type="text"
      placeholder="Large Input"
      classInput="h-[52px]"
      horizontal
    />
    <Textinput
      label="Default"
      name="defaultsize2"
      type="text"
      placeholder="Default Input"
      horizontal
    />
    <Textinput
      label="Small"
      name="smallsize2"
      type="text"
      placeholder="Small Input"
      classInput="h-[32px] text-sm"
      horizontal
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
