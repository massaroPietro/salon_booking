<template>
  <div class="grid xl:grid-cols-2 grid-cols-1 gap-6">
    <Card title="Default Tabs"> <Default /></Card>
    <Card title="Tabs With Icon"> <TabIcon /></Card>
    <Card title="Vertical Nav Tabs"> <VerticalTab /></Card>
    <Card title="Justify Tabs"> <Justify /></Card>
    <div class="xl:col-span-2">
      <Card title="Accordions"> <Accordion /></Card>
    </div>
  </div>
</template>
<script>
import Card from "@/components/Card";
import Accordion from "./Accordion/Accordion";
import Default from "./Tab/Default";
import Justify from "./Tab/Justify";
import TabIcon from "./Tab/TabIcon";
import VerticalTab from "./Tab/VerticalTab";
export default {
  components: {
    Card,
    Default,
    TabIcon,
    VerticalTab,
    Justify,
    Accordion,
  },
};
</script>
<style lang="scss"></style>
