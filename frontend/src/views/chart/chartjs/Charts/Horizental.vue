<template>
  <Bar
    :chart-data="horizenTal.chartData"
    :chart-options="
      this.$store.themeSettingsStore.isDark
        ? horizenTalDark.chartOptions
        : horizenTal.chartOptions
    "
    :height="400"
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

import { horizenTal, horizenTalDark } from "../../../../constant/chartjs-data";
export default {
  name: "BarChart",
  components: { Bar },
  data() {
    return {
      horizenTal,
      horizenTalDark,
    };
  },
};
</script>
