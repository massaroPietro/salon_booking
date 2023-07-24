<template>
  <Bar
    :chart-data="
      this.$store.themeSettingsStore.isDark
        ? latestBarChartDark.chartData
        : latestBarChart.chartData
    "
    :chart-options="
      this.$store.themeSettingsStore.isDark
        ? latestBarChartDark.chartOptions
        : latestBarChart.chartOptions
    "
    :height="350"
  />
</template>

<script>
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

import {
  latestBarChart,
  latestBarChartDark,
} from "../../../../constant/chartjs-data";
export default {
  name: "BarChart",
  components: { Bar },
  data() {
    return {
      latestBarChart,
      latestBarChartDark,
    };
  },
};
</script>
