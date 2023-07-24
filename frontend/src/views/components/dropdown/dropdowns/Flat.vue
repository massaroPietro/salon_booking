<template>
  <div class="dropdown-group-example">
    <Dropdown classMenuItems="left-0  w-[220px] top-[110%] ">
      <Button
        text="primary"
        btnClass="text-primary-500 hover:bg-primary-500 hover:bg-opacity-20"
        icon="heroicons-outline:chevron-right"
        iconPosition="right"
        div
        iconClass="text-lg"
      />
    </Dropdown>
    <Dropdown classMenuItems="left-0  w-[220px] top-[110%] ">
      <Button
        text="secondary"
        btnClass="text-secondary-500 hover:bg-secondary-500 hover:bg-opacity-20"
        icon="heroicons-outline:chevron-right"
        iconPosition="right"
        div
        iconClass="text-lg"
      />
    </Dropdown>
    <Dropdown classMenuItems="left-0  w-[220px] top-[110%] ">
      <Button
        text="success"
        btnClass="text-success-500 hover:bg-success-500 hover:bg-opacity-20"
        icon="heroicons-outline:chevron-right"
        iconPosition="right"
        div
        iconClass="text-lg"
      />
    </Dropdown>
    <Dropdown classMenuItems="left-0  w-[220px] top-[110%] ">
      <Button
        text="info"
        btnClass=" text-info-500 hover:bg-info-500 hover:bg-opacity-20"
        icon="heroicons-outline:chevron-right"
        iconPosition="right"
        div
        iconClass="text-lg"
      />
    </Dropdown>
    <Dropdown classMenuItems="left-0  w-[220px] top-[110%] ">
      <Button
        text="warning"
        btnClass=" text-warning-500 hover:bg-warning-500 hover:bg-opacity-20"
        icon="heroicons-outline:chevron-right"
        iconPosition="right"
        div
        iconClass="text-lg"
      />
    </Dropdown>
    <Dropdown classMenuItems="left-0  w-[220px] top-[110%] ">
      <Button
        text="danger"
        btnClass=" text-danger-500 hover:bg-danger-500 hover:bg-opacity-20"
        icon="heroicons-outline:chevron-right"
        iconPosition="right"
        div
        iconClass="text-lg"
      />
    </Dropdown>
    <Dropdown classMenuItems="left-0  w-[220px] top-[110%] ">
      <Button
        text="Dark"
        btnClass=" text-slate-800 hover:bg-slate-800 hover:bg-opacity-20"
        icon="heroicons-outline:chevron-right"
        iconPosition="right"
        div
        iconClass="text-lg"
      />
    </Dropdown>
    <Dropdown classMenuItems="left-0  w-[220px] top-[110%] ">
      <Button
        text="Light"
        btnClass=" text-slate-600 hover:bg-light hover:bg-opacity-10"
        icon="heroicons-outline:chevron-right"
        iconPosition="right"
        div
        iconClass="text-lg"
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
