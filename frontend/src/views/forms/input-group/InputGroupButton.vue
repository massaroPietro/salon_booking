<template>
  <div class="space-y-5">
    <InputGroup type="text" placeholder="Button on right">
      <template v-slot:append>
        <Button text="Go" btnClass="btn-outline-dark " />
      </template>
    </InputGroup>
    <InputGroup type="text" placeholder="Button on both side">
      <template v-slot:prepend>
        <Button icon="heroicons-outline:search" btnClass="btn-outline-dark" />
      </template>
      <template v-slot:append>
        <Button text="Search" btnClass="btn-outline-dark" />
      </template>
    </InputGroup>
  </div>
</template>
<script>
import Button from "@/components/Button";
import InputGroup from "@/components/InputGroup";

export default {
  components: {
    InputGroup,
    Button,
  },
};
</script>
<style lang=""></style>
