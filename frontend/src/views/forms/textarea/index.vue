<template>
  <div class="grid xl:grid-cols-2 gap-5">
    <Card title="Basic Textarea"> <Basic /> </Card>
    <Card title="Displayed rows"><Size /></Card>
    <Card title="Horizontal form label sizing"><Horizental /></Card>
    <Card title="states">
      <State />
    </Card>
    <Card title="Input Validation States with Tootltips">
      <StateTooltip />
    </Card>
    <Card title="Formatter support">
      <Formatter />
    </Card>
  </div>
</template>
<script>
import Card from "@/components/Card";
import Basic from "./Basic";
import Size from "./Size";
import Horizental from "./Horizental";
import State from "./State";
import StateTooltip from "./StateTooltip";
import Formatter from "./Formatter";
export default {
  components: {
    Card,
    Basic,
    Size,
    Horizental,
    State,
    StateTooltip,
    Formatter,
  },
};
</script>
<style lang="scss">
.card-auto-height {
  .card {
    @apply h-min;
  }
}
</style>
