<template>
  <div class="dropdown-group-example">
    <Dropdown classMenuItems="left-0  w-[220px] top-[110%]">
      <Button
        text="Left align"
        btnClass="btn-primary"
        icon="heroicons-outline:chevron-right"
        iconPosition="right"
        div
        iconClass="text-lg"
      />
    </Dropdown>
    <Dropdown classMenuItems="w-[220px] top-[110%]">
      <Button
        text="Right align"
        btnClass="btn-primary"
        icon="heroicons-outline:chevron-right"
        iconPosition="right"
        div
        iconClass="text-lg"
      />
    </Dropdown>
    <Dropdown classMenuItems="right-unset left-full w-[200px] top-0 ml-3">
      <Button
        text="Drop-right-top"
        btnClass="btn-primary"
        icon="heroicons-outline:chevron-right"
        iconPosition="right"
        div
        iconClass="text-lg"
      />
    </Dropdown>
    <Dropdown classMenuItems="right-full  w-[200px] top-0 ml-3">
      <Button
        text="Drop-left-left"
        btnClass="btn-primary"
        icon="heroicons-outline:chevron-left"
        div
        iconClass="text-lg"
      />
    </Dropdown>
  </div>
</template>
<script>
import Button from "@/components/Button";
import Dropdown from "@/components/Dropdown";
export default {
  components: {
    Dropdown,
    Button,
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss"></style>
