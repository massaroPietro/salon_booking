<template>
  <div class="grid xl:grid-cols-2 grid-cols-1 gap-5">
    <Card title="Basic Inputs"><Basic /></Card>
    <div class="card-auto-height2 space-y-5">
      <Card title="Sizing options"><Size /></Card>
      <Card title="Horizontal form label sizing"><Horizental /></Card>
    </div>
    <div class="xl:col-span-2">
      <Card title="Merged">
        <Merge />
      </Card>
    </div>
    <Card title="Input Groups with Buttons">
      <InputGroupButton />
    </Card>
    <Card title="Input Groups With Dropdown">
      <inputButtonDropdown />
    </Card>
  </div>
</template>
<script>
import Card from "@/components/Card";
import Basic from "./Basic";
import Size from "./Size";
import Horizental from "./Horizental";
import Merge from "./Merge";
import InputGroupButton from "./InputGroupButton";
import inputButtonDropdown from "./inputButtonDropdown";
export default {
  components: {
    Card,
    Basic,
    Size,
    Horizental,
    Merge,
    InputGroupButton,
    inputButtonDropdown,
  },
};
</script>
<style lang="scss">
.card-auto-height2 {
  .card {
    @apply h-min;
  }
}
</style>
