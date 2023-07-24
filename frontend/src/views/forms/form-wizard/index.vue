<template>
  <div class="space-y-5">
    <Card title="Horizontal ">
      <VerticallyWizard />
    </Card>
    <Card title="Vertical">
      <HorizentalWizard />
    </Card>
  </div>
</template>
<script>
import Card from "@/components/Card";
import HorizentalWizard from "./HorizentalWizard";
import VerticallyWizard from "./VerticallyWizard";

export default {
  components: {
    Card,
    VerticallyWizard,
    HorizentalWizard,
  },
};
</script>
<style lang=""></style>
