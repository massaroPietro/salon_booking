<template>
  <Line
    :chart-data="LineChart.chartData"
    :chart-options="
      this.$store.themeSettingsStore.isDark
        ? LineChartDark.chartOptions
        : LineChart.chartOptions
    "
    :height="350"
  />
</template>

<script>
import { Line } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  CategoryScale,
  //Plugin,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  CategoryScale
);

import { LineChart, LineChartDark } from "../../../../constant/chartjs-data";
export default {
  name: "BarChart",
  components: { Line },
  data() {
    return {
      LineChart,
      LineChartDark,
    };
  },
};
</script>
