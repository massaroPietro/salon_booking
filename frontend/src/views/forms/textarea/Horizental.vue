<template>
  <div class="space-y-2">
    <Textarea
      label="Large"
      name="largesize2"
      type="text"
      placeholder="Large Input"
      rows="4"
      horizontal
    />
    <Textarea
      label="Default"
      type="text"
      name="df"
      placeholder="Default Input"
      horizontal
    />
    <Textarea
      label="Small"
      name="smallsize2"
      type="text"
      placeholder="Small Input"
      rows="2"
      horizontal
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
