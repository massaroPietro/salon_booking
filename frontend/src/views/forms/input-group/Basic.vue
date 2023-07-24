<template>
  <div class="space-y-3">
    <InputGroup type="text" prependIcon="heroicons-outline:search" />
    <InputGroup type="text" appendIcon="heroicons-outline:search" />
    <InputGroup
      type="text"
      appendIcon="heroicons-outline:search"
      disabled
      placeholder="Disable Input Group"
    />
    <InputGroup
      type="text"
      prependIcon="heroicons-outline:search"
      isReadonly
      placeholder="Readonly Input Group"
    />
    <InputGroup
      type="text"
      label="password"
      name="ps-1"
      placeholder="Your password"
    />
    <InputGroup type="text" placeholder="Username" prepend="@" />
    <InputGroup
      type="text"
      placeholder="Recient’s username"
      append="@example.com"
    />
    <InputGroup
      type="text"
      prepend="https://example.com/users/"
      placeholder=""
    />
    <InputGroup type="text" prepend="$" placeholder="100" append="00." />
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
