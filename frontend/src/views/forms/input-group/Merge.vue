<template>
  <div class="space-y-3">
    <InputGroup type="text" prependIcon="heroicons-outline:search" merged />
    <InputGroup type="text" appendIcon="heroicons-outline:search" merged />
    <InputGroup
      type="text"
      label="password"
      name="ps-1"
      placeholder="Your password"
      merged
    />
    <InputGroup type="text" placeholder="Username" prepend="@" merged />
    <InputGroup
      type="text"
      placeholder="Recient’s username"
      append="@example.com"
      merged
    />
    <InputGroup
      type="text"
      prepend="https://example.com/users/"
      placeholder=""
      merged
    />
    <InputGroup type="text" prepend="$" placeholder="100" append="00." merged />
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
<style lang="scss"></style>
