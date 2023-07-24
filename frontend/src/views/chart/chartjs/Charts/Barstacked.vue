<template>
  <Bar
    :chart-data="barStacked.chartData"
    :chart-options="
      this.$store.themeSettingsStore.isDark
        ? barStackedDark.chartOptions
        : barStacked.chartOptions
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

import { barStacked, barStackedDark } from "../../../../constant/chartjs-data";
export default {
  name: "BarChart",
  components: { Bar },
  data() {
    return {
      barStacked,
      barStackedDark,
    };
  },
};
</script>
