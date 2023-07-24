<template>
  <PolarArea
    :chart-data="polarAreaChart.chartData"
    :chart-options="
      this.$store.themeSettingsStore.isDark
        ? polarAreaChartDark.chartOptions
        : polarAreaChart.chartOptions
    "
    :height="450"
  />
</template>

<script>
import { PolarArea } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  RadialLinearScale,
} from "chart.js";

ChartJS.register(Title, Tooltip, Legend, ArcElement, RadialLinearScale);

import {
  polarAreaChart,
  polarAreaChartDark,
} from "../../../../constant/chartjs-data";
export default {
  name: "BarChart",
  components: { PolarArea },
  data() {
    return {
      polarAreaChart,
      polarAreaChartDark,
    };
  },
};
</script>
