<template>
  <Radar
    :chart-data="radarChart.chartData"
    :chart-options="
      this.$store.themeSettingsStore.isDark
        ? radarChartDark.chartOptions
        : radarChart.chartOptions
    "
    :height="450"
  />
</template>

<script>
import { Radar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  PointElement,
  RadialLinearScale,
  LineElement,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  PointElement,
  RadialLinearScale,
  LineElement,
  LinearScale
);

import { radarChart, radarChartDark } from "../../../../constant/chartjs-data";
export default {
  name: "BarChart",
  components: { Radar },
  data() {
    return {
      radarChart,
      radarChartDark,
    };
  },
};
</script>
