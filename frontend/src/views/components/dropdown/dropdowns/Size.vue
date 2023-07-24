<template>
  <div class="dropdown-group-example">
    <Dropdown classMenuItems="left-0  w-[220px] top-[110%] ">
      <Button
        text="Large Button"
        btnClass="btn-primary btn-xl"
        icon="heroicons-outline:chevron-right"
        iconPosition="right"
        div
        iconClass="text-2xl"
      />
    </Dropdown>
    <Dropdown classMenuItems="left-0  w-[220px] top-[110%] ">
      <Button
        text="Default"
        btnClass="btn-dark"
        icon="heroicons-outline:chevron-right"
        iconPosition="right"
        div
        iconClass="text-lg"
      />
    </Dropdown>
    <Dropdown classMenuItems="left-0  w-[220px] top-[110%] ">
      <Button
        text="success"
        btnClass=" btn-success btn-sm"
        icon="heroicons-outline:chevron-right"
        iconPosition="right"
        div
        iconClass="text-sm"
      />
    </Dropdown>
  </div>
</template>
<script>
import Button from '@/components/Button';
import Dropdown from '@/components/Dropdown';
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
