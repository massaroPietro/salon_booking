<template>
  <div class="space-y-5">
    <Card title="Bar Chart">
      <Bar />
    </Card>
    <Card title="Horizental Bar">
      <Horizental />
    </Card>
    <Card title="Bar stacked">
      <Barstacked />
    </Card>
    <Card title="Line Chart">
      <LineChart />
    </Card>
    <Card title="Radar Chart">
      <Radar />
    </Card>
    <Card title="Pollar area Chart">
      <PollarArea />
    </Card>
  </div>
</template>
<script>
import Card from "@/components/Card";
import Bar from "./Charts/Bar";
import Barstacked from "./Charts/Barstacked";
import Horizental from "./Charts/Horizental";
import LineChart from "./Charts/LineChart";
import PollarArea from "./Charts/PollarArea";
import Radar from "./Charts/Radar";
export default {
  components: {
    Card,
    Bar,
    Horizental,
    Barstacked,
    LineChart,
    Radar,
    PollarArea,
  },
};
</script>
<style lang=""></style>
