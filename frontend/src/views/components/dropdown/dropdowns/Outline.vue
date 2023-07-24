<template>
  <div class="dropdown-group-example">
    <Dropdown classMenuItems="left-0  w-[220px] top-[110%] ">
      <Button
        text="primary"
        btnClass="btn-outline-primary"
        icon="heroicons-outline:chevron-right"
        iconPosition="right"
        div
        iconClass="text-lg"
      />
    </Dropdown>
    <Dropdown classMenuItems="left-0  w-[220px] top-[110%] ">
      <Button
        text="secondary"
        btnClass="btn-outline-secondary"
        icon="heroicons-outline:chevron-right"
        iconPosition="right"
        div
        iconClass="text-lg"
      />
    </Dropdown>
    <Dropdown classMenuItems="left-0  w-[220px] top-[110%] ">
      <Button
        text="success"
        btnClass="btn-outline-success"
        icon="heroicons-outline:chevron-right"
        iconPosition="right"
        div
        iconClass="text-lg"
      />
    </Dropdown>
    <Dropdown classMenuItems="left-0  w-[220px] top-[110%] ">
      <Button
        text="info"
        btnClass="btn-outline-info"
        icon="heroicons-outline:chevron-right"
        iconPosition="right"
        div
        iconClass="text-lg"
      />
    </Dropdown>
    <Dropdown classMenuItems="left-0  w-[220px] top-[110%] ">
      <Button
        text="warning"
        btnClass="btn-outline-warning"
        icon="heroicons-outline:chevron-right"
        iconPosition="right"
        div
        iconClass="text-lg"
      />
    </Dropdown>
    <Dropdown classMenuItems="left-0  w-[220px] top-[110%] ">
      <Button
        text="danger"
        btnClass="btn-outline-danger"
        icon="heroicons-outline:chevron-right"
        iconPosition="right"
        div
        iconClass="text-lg"
      />
    </Dropdown>
    <Dropdown classMenuItems="left-0  w-[220px] top-[110%] ">
      <Button
        text="Dark"
        btnClass="btn-outline-dark"
        icon="heroicons-outline:chevron-right"
        iconPosition="right"
        div
        iconClass="text-lg"
      />
    </Dropdown>
    <Dropdown classMenuItems="left-0  w-[220px] top-[110%] ">
      <Button
        text="Light"
        btnClass="btn-outline-light"
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
