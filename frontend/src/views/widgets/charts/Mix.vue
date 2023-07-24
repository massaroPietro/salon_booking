<template>
  <div class="space-y-4">
    <div
      class="grid xl:grid-cols-6 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4"
    >
      <div class="bg-white dark:bg-slate-800 rounded p-4">
        <div
          class="text-sm text-slate-600 dark:text-slate-300 mb-[6px] font-medium"
        >
          Orders
        </div>
        <div
          class="text-lg text-slate-900 dark:text-white font-medium mb-[6px]"
        >
          123k
        </div>
        <div class="font-normal text-xs text-slate-600 dark:text-slate-300">
          <span class="text-warning-500">-60%</span>
          From last Week
        </div>
        <div class="mt-4">
          <apexchart
            type="bar"
            height="60"
            :options="columnCharthome2.chartOptions"
            :series="columnCharthome2.series"
          />
        </div>
      </div>
      <div class="bg-white dark:bg-slate-800 rounded p-4">
        <div
          class="text-sm text-slate-600 dark:text-slate-300 mb-[6px] font-medium"
        >
          Orders
        </div>
        <div
          class="text-lg text-slate-900 dark:text-white font-medium mb-[6px]"
        >
          123k
        </div>
        <div class="font-normal text-xs text-slate-600 dark:text-slate-300">
          <span class="text-warning-500">-60%</span>
          From last Week
        </div>
        <div class="mt-4">
          <apexchart
            type="bar"
            height="60"
            :options="columnCharthome3.chartOptions"
            :series="columnCharthome3.series"
          />
        </div>
      </div>
      <div class="bg-white dark:bg-slate-800 rounded p-4">
        <div
          class="text-sm text-slate-600 dark:text-slate-300 mb-[6px] font-medium"
        >
          Orders
        </div>
        <div
          class="text-lg text-slate-900 dark:text-white font-medium mb-[6px]"
        >
          123k
        </div>
        <div class="font-normal text-xs text-slate-600 dark:text-slate-300">
          <span class="text-warning-500">-60%</span>
          From last Week
        </div>
        <div class="mt-4">
          <apexchart
            type="bar"
            height="60"
            :options="columnCharthome4.chartOptions"
            :series="columnCharthome4.series"
          />
        </div>
      </div>
      <div class="bg-white dark:bg-slate-800 rounded p-4">
        <div
          class="text-sm text-slate-600 dark:text-slate-300 mb-[6px] font-medium"
        >
          Profit
        </div>
        <div
          class="text-lg text-slate-900 dark:text-white font-medium mb-[6px]"
        >
          654k
        </div>
        <div class="font-normal text-xs text-slate-600 dark:text-slate-300">
          <span class="text-primary-500">+02%</span>
          From last Week
        </div>
        <div class="mt-4">
          <apexchart
            type="line"
            height="60"
            :options="areaLine.chartOptions"
            :series="areaLine.series"
          />
        </div>
      </div>
      <div class="bg-white dark:bg-slate-800 rounded p-4">
        <div
          class="text-sm text-slate-600 dark:text-slate-300 mb-[6px] font-medium"
        >
          Profit
        </div>
        <div
          class="text-lg text-slate-900 dark:text-white font-medium mb-[6px]"
        >
          654k
        </div>
        <div class="font-normal text-xs text-slate-600 dark:text-slate-300">
          <span class="text-primary-500">+02%</span>
          From last Week
        </div>
        <div class="mt-4">
          <apexchart
            type="line"
            height="60"
            :options="areaLine2.chartOptions"
            :series="areaLine2.series"
          />
        </div>
      </div>
      <div class="bg-white dark:bg-slate-800 rounded p-4">
        <div
          class="text-sm text-slate-600 dark:text-slate-300 mb-[6px] font-medium"
        >
          Profit
        </div>
        <div
          class="text-lg text-slate-900 dark:text-white font-medium mb-[6px]"
        >
          654k
        </div>
        <div class="font-normal text-xs text-slate-600 dark:text-slate-300">
          <span class="text-primary-500">+02%</span>
          From last Week
        </div>
        <div class="mt-4">
          <apexchart
            type="line"
            height="60"
            :options="areaLine3.chartOptions"
            :series="areaLine3.series"
          />
        </div>
      </div>
    </div>
    <div class="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-4">
      <div class="bg-white dark:bg-slate-800 rounded py-3 px-4">
        <div class="md:flex items-center">
          <div class="flex-1">
            <div
              class="text-sm text-slate-600 dark:text-slate-300 mb-[6px] font-medium"
            >
              Earnings
            </div>
            <div
              class="text-lg text-slate-900 dark:text-white font-medium mb-[6px]"
            >
              $12,335.00
            </div>
            <div class="font-normal text-xs text-slate-600 dark:text-slate-300">
              <span class="text-primary-500">+08%</span>
              From last Week
            </div>
          </div>
          <div class="flex-none">
            <apexchart
              type="donut"
              height="200"
              :options="
                this.$store.themeSettingsStore.isDark
                  ? donutChartDark.chartOptions
                  : donutChart.chartOptions
              "
              :series="donutChart.series"
            />
          </div>
        </div>
      </div>
      <!-- ?? end single ?? -->
      <div class="bg-white dark:bg-slate-800 rounded py-3 px-4">
        <div class="md:flex items-center">
          <div class="flex-1">
            <div
              class="text-sm text-slate-600 dark:text-slate-300 mb-[6px] font-medium"
            >
              Earnings
            </div>
            <div
              class="text-lg text-slate-900 dark:text-white font-medium mb-[6px]"
            >
              $12,335.00
            </div>
            <div class="font-normal text-xs text-slate-600 dark:text-slate-300">
              <span class="text-primary-500">+08%</span>
              From last Week
            </div>
          </div>
          <div class="flex-none">
            <apexchart
              type="donut"
              height="200"
              :options="
                this.$store.themeSettingsStore.isDark
                  ? donutChart2Dark.chartOptions
                  : donutChart2.chartOptions
              "
              :series="donutChart2.series"
            />
          </div>
        </div>
      </div>
      <!-- ?? end single ?? -->
      <div class="bg-white dark:bg-slate-800 rounded py-3 px-4">
        <div class="md:flex items-center">
          <div class="flex-1">
            <div
              class="text-sm text-slate-600 dark:text-slate-300 mb-[6px] font-medium"
            >
              Earnings
            </div>
            <div
              class="text-lg text-slate-900 dark:text-white font-medium mb-[6px]"
            >
              $12,335.00
            </div>
            <div class="font-normal text-xs text-slate-600 dark:text-slate-300">
              <span class="text-primary-500">+08%</span>
              From last Week
            </div>
          </div>
          <div class="flex-none">
            <apexchart
              type="donut"
              height="200"
              :options="
                this.$store.themeSettingsStore.isDark
                  ? donutChart3Dark.chartOptions
                  : donutChart3.chartOptions
              "
              :series="donutChart3.series"
            />
          </div>
        </div>
      </div>
      <!-- ?? end single ?? -->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      columnCharthome2: {
        series: [
          {
            name: "Revenue",
            data: [70, 45, 60, 75, 85, 100],
          },
        ],
        chartOptions: {
          chart: {
            toolbar: {
              show: false,
            },
            offsetX: 0,
            offsetY: 0,
            zoom: {
              enabled: false,
            },
            sparkline: {
              enabled: true,
            },
          },
          plotOptions: {
            bar: {
              columnWidth: "40px",
              barHeight: "100%",
            },
          },
          legend: {
            show: false,
          },

          dataLabels: {
            enabled: false,
          },
          stroke: {
            curve: "smooth",
            width: 2,
          },

          fill: {
            opacity: 1,
          },
          tooltip: {
            y: {
              formatter: function (val) {
                return "$ " + val + "k";
              },
            },
          },
          yaxis: {
            show: false,
          },
          xaxis: {
            show: false,
            labels: {
              show: false,
            },
            axisBorder: {
              show: false,
            },
            axisTicks: {
              show: false,
            },
          },
          colors: "#FA916B",
          grid: {
            show: false,
          },
        },
      },
      columnCharthome3: {
        series: [
          {
            name: "Revenue",
            data: [70, 45, 60, 75, 85, 100],
          },
        ],
        chartOptions: {
          chart: {
            toolbar: {
              show: false,
            },
            offsetX: 0,
            offsetY: 0,
            zoom: {
              enabled: false,
            },
            sparkline: {
              enabled: true,
            },
          },
          plotOptions: {
            bar: {
              columnWidth: "40px",
              barHeight: "100%",
            },
          },
          legend: {
            show: false,
          },

          dataLabels: {
            enabled: false,
          },
          stroke: {
            curve: "smooth",
            width: 2,
          },

          fill: {
            opacity: 1,
          },
          tooltip: {
            y: {
              formatter: function (val) {
                return "$ " + val + "k";
              },
            },
          },
          yaxis: {
            show: false,
          },
          xaxis: {
            show: false,
            labels: {
              show: false,
            },
            axisBorder: {
              show: false,
            },
            axisTicks: {
              show: false,
            },
          },
          colors: "#FC8DAA",
          grid: {
            show: false,
          },
        },
      },
      columnCharthome4: {
        series: [
          {
            name: "Revenue",
            data: [70, 45, 60, 75, 85, 100],
          },
        ],
        chartOptions: {
          chart: {
            toolbar: {
              show: false,
            },
            offsetX: 0,
            offsetY: 0,
            zoom: {
              enabled: false,
            },
            sparkline: {
              enabled: true,
            },
          },
          plotOptions: {
            bar: {
              columnWidth: "40px",
              barHeight: "100%",
            },
          },
          legend: {
            show: false,
          },

          dataLabels: {
            enabled: false,
          },
          stroke: {
            curve: "smooth",
            width: 2,
          },

          fill: {
            opacity: 1,
          },
          tooltip: {
            y: {
              formatter: function (val) {
                return "$ " + val + "k";
              },
            },
          },
          yaxis: {
            show: false,
          },
          xaxis: {
            show: false,
            labels: {
              show: false,
            },
            axisBorder: {
              show: false,
            },
            axisTicks: {
              show: false,
            },
          },
          colors: "#50C793",
          grid: {
            show: false,
          },
        },
      },
      areaLine: {
        series: [
          {
            data: [15, 30, 15, 30, 20, 35],
          },
        ],
        chartOptions: {
          chart: {
            toolbar: {
              show: false,
            },
            offsetX: 0,
            offsetY: 0,

            sparkline: {
              enabled: true,
            },
          },
          stroke: {
            width: [2],
            curve: "straight",
            dashArray: [0, 8, 5],
          },
          dataLabels: {
            enabled: false,
          },

          markers: {
            size: 4,
            colors: this.$store.themeSettingsStore.isDark ? "#4669FA" : "#fff",
            strokeColors: "#4669FA",
            strokeWidth: 2,
            shape: "circle",

            radius: 2,
            hover: {
              sizeOffset: 1,
            },
          },

          yaxis: {
            show: false,
          },
          xaxis: {
            show: false,
            labels: {
              show: false,
            },
            axisBorder: {
              show: false,
            },
            axisTicks: {
              show: false,
            },
          },
          grid: {
            show: true,
            borderColor: this.$store.themeSettingsStore.isDark ? "#334155" : "#E2E8F0",
            strokeDashArray: 5,
            position: "back",
            xaxis: {
              lines: {
                show: true,
              },
            },
            yaxis: {
              lines: {
                show: false,
              },
            },
          },
          colors: ["#4669FA"],
        },
      },
      areaLine2: {
        series: [
          {
            data: [15, 30, 15, 30, 20, 35],
          },
        ],
        chartOptions: {
          chart: {
            toolbar: {
              show: false,
            },
            offsetX: 0,
            offsetY: 0,

            sparkline: {
              enabled: true,
            },
          },
          stroke: {
            width: [2],
            curve: "straight",
            dashArray: [0, 8, 5],
          },
          dataLabels: {
            enabled: false,
          },

          markers: {
            size: 4,
            colors: this.$store.themeSettingsStore.isDark ? "#0CE7FA" : "#fff",
            strokeColors: "#0CE7FA",
            strokeWidth: 2,
            shape: "circle",
            radius: 2,
            hover: {
              sizeOffset: 1,
            },
          },

          yaxis: {
            show: false,
          },
          xaxis: {
            show: false,
            labels: {
              show: false,
            },
            axisBorder: {
              show: false,
            },
            axisTicks: {
              show: false,
            },
          },
          grid: {
            show: true,
            borderColor: this.$store.themeSettingsStore.isDark ? "#334155" : "#E2E8F0",
            strokeDashArray: 5,
            position: "back",
            xaxis: {
              lines: {
                show: true,
              },
            },
            yaxis: {
              lines: {
                show: false,
              },
            },
          },
          colors: ["#0CE7FA"],
        },
      },
      areaLine3: {
        series: [
          {
            data: [15, 30, 15, 30, 20, 35],
          },
        ],
        chartOptions: {
          chart: {
            toolbar: {
              show: false,
            },
            offsetX: 0,
            offsetY: 0,

            sparkline: {
              enabled: true,
            },
          },
          stroke: {
            width: [2],
            curve: "straight",
            dashArray: [0, 8, 5],
          },
          dataLabels: {
            enabled: false,
          },

          markers: {
            size: 4,
            colors: this.$store.themeSettingsStore.isDark ? "#F1595C" : "#fff",
            strokeColors: "#F1595C",
            strokeWidth: 2,
            shape: "circle",
            radius: 2,
            hover: {
              sizeOffset: 1,
            },
          },

          yaxis: {
            show: false,
          },
          xaxis: {
            show: false,
            labels: {
              show: false,
            },
            axisBorder: {
              show: false,
            },
            axisTicks: {
              show: false,
            },
          },
          grid: {
            show: true,
            borderColor: this.$store.themeSettingsStore.isDark ? "#334155" : "#E2E8F0",
            strokeDashArray: 5,
            position: "back",
            xaxis: {
              lines: {
                show: true,
              },
            },
            yaxis: {
              lines: {
                show: false,
              },
            },
          },
          colors: ["#F1595C"],
        },
      },

      donutChart: {
        series: [44, 55],

        chartOptions: {
          labels: ["Success", "Return"],
          dataLabels: {
            enabled: false,
          },

          colors: ["#0CE7FA", "#FA916B"],
          legend: {
            position: "bottom",
            fontSize: "14px",
            fontFamily: "Outfit",
            fontWeight: 400,
            labels: {
              colors: "#112229",
            },
          },
          plotOptions: {
            pie: {
              donut: {
                size: "65%",
              },
            },
          },

          responsive: [
            {
              breakpoint: 480,
              options: {
                legend: {
                  position: "bottom",
                },
              },
            },
          ],
        },
      },

      donutChartDark: {
        series: [44, 55],

        chartOptions: {
          labels: ["Success", "Return"],
          dataLabels: {
            enabled: false,
          },

          colors: ["#0CE7FA", "#FA916B"],
          legend: {
            position: "bottom",
            fontSize: "14px",
            fontFamily: "Outfit",
            fontWeight: 400,
            labels: {
              colors: "#cbd5e1",
            },
          },
          plotOptions: {
            pie: {
              donut: {
                size: "65%",
              },
            },
          },

          responsive: [
            {
              breakpoint: 480,
              options: {
                legend: {
                  position: "bottom",
                },
              },
            },
          ],
        },
      },

      donutChart2: {
        series: [44, 55],

        chartOptions: {
          labels: ["Success", "Return"],
          dataLabels: {
            enabled: false,
          },

          colors: ["#50C793", "#FA916B"],
          legend: {
            position: "bottom",
            fontSize: "14px",
            fontFamily: "Outfit",
            fontWeight: 400,
            labels: {
              colors: "#112229",
            },
          },
          plotOptions: {
            pie: {
              donut: {
                size: "65%",
              },
            },
          },

          responsive: [
            {
              breakpoint: 480,
              options: {
                legend: {
                  position: "bottom",
                },
              },
            },
          ],
        },
      },

      donutChart2Dark: {
        series: [44, 55],

        chartOptions: {
          labels: ["Success", "Return"],
          dataLabels: {
            enabled: false,
          },

          colors: ["#50C793", "#FA916B"],
          legend: {
            position: "bottom",
            fontSize: "14px",
            fontFamily: "Outfit",
            fontWeight: 400,
            labels: {
              colors: "#cbd5e1",
            },
          },
          plotOptions: {
            pie: {
              donut: {
                size: "65%",
              },
            },
          },

          responsive: [
            {
              breakpoint: 480,
              options: {
                legend: {
                  position: "bottom",
                },
              },
            },
          ],
        },
      },

      donutChart3: {
        series: [44, 55],

        chartOptions: {
          labels: ["Success", "Return"],
          dataLabels: {
            enabled: false,
          },

          colors: ["#4669FA", "#F1595C"],
          legend: {
            position: "bottom",
            fontSize: "14px",
            fontFamily: "Outfit",
            fontWeight: 400,
            labels: {
              colors: "#112229",
            },
          },
          plotOptions: {
            pie: {
              donut: {
                size: "65%",
              },
            },
          },

          responsive: [
            {
              breakpoint: 480,
              options: {
                legend: {
                  position: "bottom",
                },
              },
            },
          ],
        },
      },
      donutChart3Dark: {
        series: [44, 55],

        chartOptions: {
          labels: ["Success", "Return"],
          dataLabels: {
            enabled: false,
          },

          colors: ["#4669FA", "#F1595C"],
          legend: {
            position: "bottom",
            fontSize: "14px",
            fontFamily: "Outfit",
            fontWeight: 400,
            labels: {
              colors: "#cbd5e1",
            },
          },
          plotOptions: {
            pie: {
              donut: {
                size: "65%",
              },
            },
          },

          responsive: [
            {
              breakpoint: 480,
              options: {
                legend: {
                  position: "bottom",
                },
              },
            },
          ],
        },
      },
    };
  },
};
</script>
<style lang=""></style>
