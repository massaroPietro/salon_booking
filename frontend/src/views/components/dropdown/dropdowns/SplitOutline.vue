<template>
  <div class="dropdown-group-example">
    <SplitDropdown
      classMenuItems="left-0  w-[220px] top-[110%]"
      label="primary"
      labelClass="btn-outline-primary"
    >
    </SplitDropdown>
    <SplitDropdown
      classMenuItems="left-0  w-[220px] top-[110%]"
      label="secondary"
      labelClass="btn-outline-secondary"
    >
    </SplitDropdown>
    <SplitDropdown
      classMenuItems="left-0  w-[220px] top-[110%]"
      label="success"
      labelClass="btn-outline-success"
    >
    </SplitDropdown>
    <SplitDropdown
      classMenuItems="left-0  w-[220px] top-[110%]"
      label="info"
      labelClass="btn-outline-info"
    >
    </SplitDropdown>
    <SplitDropdown
      classMenuItems="left-0  w-[220px] top-[110%]"
      label="warning"
      labelClass="btn-outline-warning"
    >
    </SplitDropdown>
    <SplitDropdown
      classMenuItems="left-0  w-[220px] top-[110%]"
      label="danger"
      labelClass="btn-outline-danger"
    >
    </SplitDropdown>
    <SplitDropdown
      classMenuItems="left-0  w-[220px] top-[110%]"
      label="Light"
      labelClass="btn-outline-light"
    >
    </SplitDropdown>
  </div>
</template>
<script>
import SplitDropdown from '@/components/Dropdown/SplitDropdown';
export default {
  components: {
    SplitDropdown,
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss"></style>
