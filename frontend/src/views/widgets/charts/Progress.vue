<template>
  <div class="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
    <div class="bg-white dark:bg-slate-800 rounded-md p-4">
      <span class="block text-slate-500 dark:text-slate-300 text-sm font-medium"
        >Progress</span
      >
      <apexchart
        type="donut"
        height="200px"
        :options="donutTwo.chartOptions"
        :series="donutTwo.series"
      />
    </div>
    <div class="bg-white dark:bg-slate-800 rounded-md p-4">
      <span class="block text-slate-500 dark:text-slate-300 text-sm font-medium"
        >Progress</span
      >
      <apexchart
        type="donut"
        height="200px"
        :options="donutThree.chartOptions"
        :series="donutThree.series"
      />
    </div>
    <div class="bg-white dark:bg-slate-800 rounded-md p-4">
      <span class="block text-slate-500 dark:text-slate-300 text-sm font-medium"
        >Progress</span
      >
      <apexchart
        type="donut"
        height="200px"
        :options="donutFour.chartOptions"
        :series="donutFour.series"
      />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      donutTwo: {
        series: [70, 30],

        chartOptions: {
          labels: ["Complete", "Left"],
          dataLabels: {
            enabled: false,
          },

          colors: ["#0CE7FA", "#E2F6FD"],
          legend: {
            position: "bottom",
            fontSize: "12px",
            fontFamily: "Outfit",
            fontWeight: 400,
            show: false,
          },

          plotOptions: {
            pie: {
              donut: {
                size: "40%",
                labels: {
                  show: true,
                  name: {
                    show: false,
                    fontSize: "14px",
                    fontWeight: "bold",
                    fontFamily: "Outfit",
                  },
                  value: {
                    show: true,
                    fontSize: "16px",
                    fontFamily: "Outfit",
                    color: this.$store.themeSettingsStore.isDark ? "#cbd5e1" : "#0f172a",
                    formatter(val) {
                      // eslint-disable-next-line radix
                      return `${parseInt(val)}%`;
                    },
                  },
                  total: {
                    show: true,
                    fontSize: "10px",
                    label: "",
                    formatter() {
                      return "70";
                    },
                  },
                },
              },
            },
          },
        },
      },
      donutThree: {
        series: [70, 30],

        chartOptions: {
          labels: ["Complete", "Left"],
          dataLabels: {
            enabled: false,
          },

          colors: ["#F1595C", "#F9E1E5"],
          legend: {
            position: "bottom",
            fontSize: "12px",
            fontFamily: "Outfit",
            fontWeight: 400,
            show: false,
          },

          plotOptions: {
            pie: {
              donut: {
                size: "40%",
                labels: {
                  show: true,
                  name: {
                    show: false,
                    fontSize: "14px",
                    fontWeight: "bold",
                    fontFamily: "Outfit",
                  },
                  value: {
                    show: true,
                    fontSize: "16px",
                    fontFamily: "Outfit",
                    color: this.$store.themeSettingsStore.isDark ? "#cbd5e1" : "#0f172a",
                    formatter(val) {
                      // eslint-disable-next-line radix
                      return `${parseInt(val)}%`;
                    },
                  },
                  total: {
                    show: true,
                    fontSize: "10px",
                    label: "",
                    formatter() {
                      return "70";
                    },
                  },
                },
              },
            },
          },
        },
      },
      donutFour: {
        series: [70, 30],

        chartOptions: {
          labels: ["Complete", "Left"],
          dataLabels: {
            enabled: false,
          },

          colors: ["#50C793", "#E5F3E5"],
          legend: {
            position: "bottom",
            fontSize: "12px",
            fontFamily: "Outfit",
            fontWeight: 400,
            show: false,
          },

          plotOptions: {
            pie: {
              donut: {
                size: "40%",
                labels: {
                  show: true,
                  name: {
                    show: false,
                    fontSize: "14px",
                    fontWeight: "bold",
                    fontFamily: "Outfit",
                  },
                  value: {
                    show: true,
                    fontSize: "16px",
                    fontFamily: "Outfit",
                    color: this.$store.themeSettingsStore.isDark ? "#cbd5e1" : "#0f172a",
                    formatter(val) {
                      // eslint-disable-next-line radix
                      return `${parseInt(val)}%`;
                    },
                  },
                  total: {
                    show: true,
                    fontSize: "10px",
                    label: "",
                    formatter() {
                      return "70";
                    },
                  },
                },
              },
            },
          },
        },
      },
    };
  },
};
</script>
<style lang=""></style>
