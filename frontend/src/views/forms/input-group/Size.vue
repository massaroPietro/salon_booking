<template>
  <div class="space-y-2">
    <InputGroup
      label="Large"
      name="largesize"
      type="text"
      placeholder="Large Input"
      classInput="h-[52px]"
      prepend="@"
    />
    <InputGroup
      label="Default"
      name="defaultsize"
      type="text"
      placeholder="Default Input"
      prepend="@"
    />
    <InputGroup
      label="Small"
      name="smallsize"
      type="text"
      placeholder="Small Input"
      classInput="h-[32px] text-sm"
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
