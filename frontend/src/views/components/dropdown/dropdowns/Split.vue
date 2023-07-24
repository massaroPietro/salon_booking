<template>
  <div class="dropdown-group-example">
    <SplitDropdown
      classMenuItems="left-0  w-[220px] top-[110%]"
      label="primary"
      labelClass="btn-primary"
    >
    </SplitDropdown>
    <SplitDropdown
      classMenuItems="left-0  w-[220px] top-[110%]"
      label="secondary"
      labelClass="btn-secondary"
    >
    </SplitDropdown>
    <SplitDropdown
      classMenuItems="left-0  w-[220px] top-[110%]"
      label="success"
      labelClass="btn-success"
    >
    </SplitDropdown>
    <SplitDropdown
      classMenuItems="left-0  w-[220px] top-[110%]"
      label="info"
      labelClass="btn-info"
    >
    </SplitDropdown>
    <SplitDropdown
      classMenuItems="left-0  w-[220px] top-[110%]"
      label="warning"
      labelClass="btn-warning"
    >
    </SplitDropdown>
    <SplitDropdown
      classMenuItems="left-0  w-[220px] top-[110%]"
      label="danger"
      labelClass="btn-danger"
    >
    </SplitDropdown>
    <SplitDropdown
      classMenuItems="left-0  w-[220px] top-[110%]"
      label="Light"
      labelClass="btn-light"
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
