<template>
  <div class="space-y-2">
    <InputGroup
      label="Large"
      name="largesize2"
      type="text"
      placeholder="Large Input"
      classInput="h-[52px]"
      horizontal
      prepend="@"
    />
    <InputGroup
      label="Default"
      name="defaultsize2"
      type="text"
      placeholder="Default Input"
      horizontal
      prepend="@"
    />
    <InputGroup
      label="Small"
      name="smallsize2"
      type="text"
      placeholder="Small Input"
      classInput="h-[32px] text-sm"
      horizontal
      prepend="@"
    />
  </div>
</template>
<script>
import InputGroup from "@/components/InputGroup";

export default {
  components: {
    InputGroup,
  },
};
</script>
<style lang=""></style>
