<template>
  <div class="space-y-2">
    <Textinput
      label="Large"
      name="largesize"
      type="text"
      placeholder="Large Input"
      classInput="h-[52px]"
    />
    <Textinput
      label="Default"
      name="defaultsize"
      type="text"
      placeholder="Default Input"
    />
    <Textinput
      label="Small"
      name="smallsize"
      type="text"
      placeholder="Small Input"
      classInput="h-[32px] text-sm"
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
