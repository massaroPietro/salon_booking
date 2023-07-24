<template>
  <div class="space-y-3">
    <Dropdown classMenuItems="left-0  w-full top-[110%]" parentClass="block">
      <Button
        text="primary"
        btnClass="btn-primary block-btn"
        icon="heroicons-outline:chevron-right"
        iconPosition="right"
        div
        iconClass="text-lg"
      />
    </Dropdown>
    <SplitDropdown
      classMenuItems="left-0  w-full top-[110%]"
      label="primary-500"
      parentClass="block"
    >
    </SplitDropdown>
    <SplitDropdown
      classMenuItems="left-0 w-full top-[110%]"
      label="primary-500"
      labelClass="btn-outline-primary"
      parentClass="block"
    >
    </SplitDropdown>
  </div>
</template>
<script>
import Button from '@/components/Button';
import Dropdown from '@/components/Dropdown';
import SplitDropdown from '@/components/Dropdown/SplitDropdown';
export default {
  components: {
    Dropdown,
    Button,
    SplitDropdown,
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss"></style>
