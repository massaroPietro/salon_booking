<template>
  <div class="dropdown-group-example">
    <Dropdown classMenuItems="left-0  w-[220px] top-[110%] ">
      <Button
        text="primary"
        btnClass="btn-primary"
        icon="heroicons-outline:chevron-right"
        iconPosition="right"
        div
        iconClass="text-lg"
      />
    </Dropdown>
    <Dropdown classMenuItems="left-0  w-[220px] top-[110%] ">
      <Button
        text="secondary"
        btnClass="btn-secondary"
        icon="heroicons-outline:chevron-right"
        iconPosition="right"
        div
        iconClass="text-lg"
      />
    </Dropdown>
    <Dropdown classMenuItems="left-0  w-[220px] top-[110%] ">
      <Button
        text="success"
        btnClass="btn-success"
        icon="heroicons-outline:chevron-right"
        iconPosition="right"
        div
        iconClass="text-lg"
      />
    </Dropdown>
    <Dropdown classMenuItems="left-0  w-[220px] top-[110%] ">
      <Button
        text="info"
        btnClass="btn-info"
        icon="heroicons-outline:chevron-right"
        iconPosition="right"
        div
        iconClass="text-lg"
      />
    </Dropdown>
    <Dropdown classMenuItems="left-0  w-[220px] top-[110%] ">
      <Button
        text="warning"
        btnClass="btn-warning"
        icon="heroicons-outline:chevron-right"
        iconPosition="right"
        div
        iconClass="text-lg"
      />
    </Dropdown>
    <Dropdown classMenuItems="left-0  w-[220px] top-[110%] ">
      <Button
        text="danger"
        btnClass="btn-danger"
        icon="heroicons-outline:chevron-right"
        iconPosition="right"
        div
        iconClass="text-lg"
      />
    </Dropdown>
    <Dropdown classMenuItems="left-0  w-[220px] top-[110%] ">
      <Button
        text="Dark"
        btnClass="btn-dark"
        icon="heroicons-outline:chevron-right"
        iconPosition="right"
        div
        iconClass="text-lg"
      />
    </Dropdown>
    <Dropdown classMenuItems="left-0  w-[220px] top-[110%] ">
      <Button
        text="Light"
        btnClass="btn-light"
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
