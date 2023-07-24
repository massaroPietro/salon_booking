<template>
  <div class="grid grid-cols-1 gap-5 charts">
    <Card title="Area Chart">
      <apexchart
        type="area"
        height="350"
        :options="
          this.$store.themeSettingsStore.isDark
            ? basicAreaDark.chartOptions
            : basicArea.chartOptions
        "
        :series="basicArea.series"
      ></apexchart>
    </Card>
    <Card title="Area Spaline Chart">
      <apexchart
        type="area"
        height="350"
        :options="
          this.$store.themeSettingsStore.isDark
            ? spalineAreaDark.chartOptions
            : spalineArea.chartOptions
        "
        :series="spalineArea.series"
      ></apexchart>
    </Card>
    <Card title="Basic Bar Chart">
      <apexchart
        type="bar"
        height="350"
        :options="
          this.$store.themeSettingsStore.isDark
            ? basicBarDark.chartOptions
            : basicBar.chartOptions
        "
        :series="basicBar.series"
      ></apexchart>
    </Card>
    <Card title="Basic Bar Chart">
      <apexchart
        type="bar"
        height="350"
        :options="
          this.$store.themeSettingsStore.isDark
            ? columnChartDark.chartOptions
            : columnChart.chartOptions
        "
        :series="columnChart.series"
      ></apexchart>
    </Card>
    <Card title="3D Bubble">
      <apexchart
        type="bubble"
        height="350"
        :options="
          this.$store.themeSettingsStore.isDark
            ? bubboleChartDark.chartOptions
            : bubboleChart.chartOptions
        "
        :series="bubboleChart.series"
      ></apexchart>
    </Card>
    <Card title="Scatter Charts">
      <apexchart
        type="scatter"
        height="350"
        :options="
          this.$store.themeSettingsStore.isDark
            ? scatterChartDark.chartOptions
            : scatterChart.chartOptions
        "
        :series="scatterChart.series"
      ></apexchart>
    </Card>
    <Card title="candlestick">
      <apexchart
        type="candlestick"
        height="350"
        :options="
          this.$store.themeSettingsStore.isDark
            ? candlestickDark.chartOptions
            : candlestick.chartOptions
        "
        :series="candlestick.series"
      ></apexchart>
    </Card>
    <Card title="Stepline Chart">
      <apexchart
        type="line"
        height="350"
        :options="
          this.$store.themeSettingsStore.isDark
            ? stepLineDark.chartOptions
            : stepLine.chartOptions
        "
        :series="stepLine.series"
      ></apexchart>
    </Card>
    <Card title="Stacked Columns">
      <apexchart
        type="bar"
        height="350"
        :options="
          this.$store.themeSettingsStore.isDark
            ? stackChartDark.chartOptions
            : stackChart.chartOptions
        "
        :series="stackChart.series"
      ></apexchart>
    </Card>
    <Card title="pie & donut Chart">
      <div class="grid xl:grid-cols-2 grid-cols-1 gap-5">
        <apexchart
          type="donut"
          height="450"
          :options="
            this.$store.themeSettingsStore.isDark
              ? donutChartDark.chartOptions
              : donutChart.chartOptions
          "
          :series="donutChart.series"
        ></apexchart>
        <apexchart
          type="pie"
          height="450"
          :options="
            this.$store.themeSettingsStore.isDark
              ? pieChartDark.chartOptions
              : pieChart.chartOptions
          "
          :series="pieChart.series"
        ></apexchart>
      </div>
    </Card>
    <Card title="Mixed chart">
      <apexchart
        type="line"
        height="350"
        :options="
          this.$store.themeSettingsStore.isDark
            ? mixedChartDark.chartOptions
            : mixedChart.chartOptions
        "
        :series="mixedChart.series"
      />
    </Card>
    <Card title="Radar chart">
      <apexchart
        type="radar"
        height="450"
        :options="
          this.$store.themeSettingsStore.isDark
            ? radarChartDark.chartOptions
            : radarChart.chartOptions
        "
        :series="radarChart.series"
      />
    </Card>
    <Card title="Multiple Radialbars">
      <apexchart
        type="radialBar"
        :height="window.width > 768 ? 450 : 250"
        :options="
          this.$store.themeSettingsStore.isDark
            ? MultipleRadialbarsDark.chartOptions
            : MultipleRadialbars.chartOptions
        "
        :series="MultipleRadialbars.series"
      />
    </Card>
  </div>
</template>
<script>
import Card from "@/components/Card";
import window from "@/mixins/window";
import {
  basicArea,
  basicAreaDark,
  basicBar,
  basicBarDark,
  bubboleChart,
  bubboleChartDark,
  candlestick,
  candlestickDark,
  columnChart,
  columnChartDark,
  donutChart,
  donutChartDark,
  mixedChart,
  mixedChartDark,
  MultipleRadialbars,
  pieChart,
  radarChart,
  scatterChart,
  scatterChartDark,
  spalineArea,
  spalineAreaDark,
  stepLineDark,
  stackChart,
  stackChartDark,
  stepLine,
  pieChartDark,
  radarChartDark,
  MultipleRadialbarsDark,
} from "../../../constant/appex-chart.js";
export default {
  mixins: [window],
  components: {
    Card,
  },
  data() {
    return {
      basicArea,
      basicAreaDark,
      spalineArea,
      spalineAreaDark,
      basicBar,
      basicBarDark,
      columnChart,
      columnChartDark,
      bubboleChart,
      bubboleChartDark,
      scatterChart,
      scatterChartDark,
      candlestick,
      candlestickDark,
      stepLineDark,
      stepLine,
      stackChart,
      stackChartDark,
      donutChart,
      donutChartDark,
      pieChart,
      pieChartDark,
      mixedChart,
      mixedChartDark,
      radarChart,
      MultipleRadialbars,
      radarChartDark,
      MultipleRadialbarsDark,
    };
  },
};
</script>
<style lang=""></style>
