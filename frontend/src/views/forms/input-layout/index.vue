<template>
  <div class="grid xl:grid-cols-2 grid-cols-1 gap-5">
    <Card title="Horizontal Form">
      <Horizental />
    </Card>
    <Card title="Horizontal Form With Icons">
      <HorizentalIcon />
    </Card>
    <Card title="Vertical Form">
      <Vertical />
    </Card>
    <Card title="Vertical Form with Icon">
      <VerticalIcon />
    </Card>
    <div class="xl:col-span-2">
      <Card title="Multiple Column">
        <MultipuleCloumn />
      </Card>
    </div>
  </div>
</template>
<script>
import Card from "@/components/Card";
import Horizental from "./Horizental";
import HorizentalIcon from "./HorizentalIcon";
import Vertical from "./Vertical";
import VerticalIcon from "./VerticalIcon";
import MultipuleCloumn from "./MultipuleCloumn";
export default {
  components: {
    Card,
    Horizental,
    HorizentalIcon,
    Vertical,
    VerticalIcon,
    MultipuleCloumn,
  },
};
</script>
<style lang="scss">
.card-auto-height3 {
  .card {
    @apply h-min;
  }
}
</style>
