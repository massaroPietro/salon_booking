<template>
  <div class="grid xl:grid-cols-2 grid-cols-1 gap-6">
    <Card title="Basic Modal"><Basic /></Card>
    <Card title="Themes Modal"><Themes /></Card>
    <Card title="Size Modal"><Size /></Card>
    <Card title="Form & Scrolling Modals"><FormsModal /></Card>
  </div>
</template>
<script>
import Card from "@/components/Card";
import Basic from "./modals/Basic";
import FormsModal from "./modals/FormsModal";
import Size from "./modals/Size";
import Themes from "./modals/Themes";
export default {
  components: {
    Card,
    Basic,
    Themes,
    Size,
    FormsModal,
  },
};
</script>
<style lang="scss">
.modal-groups {
  @apply flex items-center flex-wrap justify-start;
  > button {
    @apply mr-3 mb-3;
  }
}
</style>
