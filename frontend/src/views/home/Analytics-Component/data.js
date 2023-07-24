let colors = {
  primary: "#4669FA",
  secondary: "#A0AEC0",
  danger: "#F1595C",
  black: "#111112",
  warning: "#FA916B",
  info: "#0CE7FA",
  light: "#475569",
  success: "#50C793",
  "gray-f7": "#F7F8FC",
  dark: "#1E293B",
  "dark-gray": "#0F172A",
  gray: "#68768A",
  gray2: "#EEF1F9",
  "dark-light": "#CBD5E1",
  purple: "#A3A1FB",
};

function colorOpacity(color, opacity) {
  // coerce values so ti is between 0 and 1.
  var _opacity = Math.round(Math.min(Math.max(opacity || 1, 0), 1) * 255);
  return color + _opacity.toString(16).toUpperCase();
}

export const shapeLine1 = {
  series: [
    {
      data: [800, 600, 1000, 800, 600, 1000, 800, 900],
    },
  ],
  chartOptions: {
    chart: {
      toolbar: {
        autoSelected: "pan",
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
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    colors: ["#00EBFF"],
    tooltip: {
      theme: "light",
    },
    grid: {
      show: false,
      padding: {
        left: 0,
        right: 0,
      },
    },
    yaxis: {
      show: false,
    },
    fill: {
      type: "solid",
      opacity: [0.1],
    },
    legend: {
      show: false,
    },
    xaxis: {
      low: 0,
      offsetX: 0,
      offsetY: 0,
      show: false,
      labels: {
        low: 0,
        offsetX: 0,
        show: false,
      },
      axisBorder: {
        low: 0,
        offsetX: 0,
        show: false,
      },
    },
  },
};
export const shapeLine2 = {
  series: [
    {
      data: [800, 600, 1000, 800, 600, 1000, 800, 900],
    },
  ],
  chartOptions: {
    chart: {
      toolbar: {
        autoSelected: "pan",
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
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    colors: ["#FB8F65"],
    tooltip: {
      theme: "light",
    },
    grid: {
      show: false,
      padding: {
        left: 0,
        right: 0,
      },
    },
    yaxis: {
      show: false,
    },
    fill: {
      type: "solid",
      opacity: [0.1],
    },
    legend: {
      show: false,
    },
    xaxis: {
      low: 0,
      offsetX: 0,
      offsetY: 0,
      show: false,
      labels: {
        low: 0,
        offsetX: 0,
        show: false,
      },
      axisBorder: {
        low: 0,
        offsetX: 0,
        show: false,
      },
    },
  },
};
export const shapeLine3 = {
  series: [
    {
      data: [800, 600, 1000, 800, 600, 1000, 800, 900],
    },
  ],
  chartOptions: {
    chart: {
      toolbar: {
        autoSelected: "pan",
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
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    colors: ["#5743BE"],
    tooltip: {
      theme: "light",
    },
    grid: {
      show: false,
      padding: {
        left: 0,
        right: 0,
      },
    },
    yaxis: {
      show: false,
    },
    fill: {
      type: "solid",
      opacity: [0.1],
    },
    legend: {
      show: false,
    },
    xaxis: {
      low: 0,
      offsetX: 0,
      offsetY: 0,
      show: false,
      labels: {
        low: 0,
        offsetX: 0,
        show: false,
      },
      axisBorder: {
        low: 0,
        offsetX: 0,
        show: false,
      },
    },
  },
};
export const shapeLine4 = {
  series: [
    {
      data: [800, 600, 1000, 800, 600, 1000, 800, 900],
    },
  ],
  chartOptions: {
    chart: {
      toolbar: {
        autoSelected: "pan",
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
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    colors: [colors.primary],
    tooltip: {
      theme: "light",
    },
    grid: {
      show: false,
      padding: {
        left: 0,
        right: 0,
      },
    },
    yaxis: {
      show: false,
    },
    fill: {
      type: "solid",
      opacity: [0.1],
    },
    legend: {
      show: false,
    },
    xaxis: {
      low: 0,
      offsetX: 0,
      offsetY: 0,
      show: false,
      labels: {
        low: 0,
        offsetX: 0,
        show: false,
      },
      axisBorder: {
        low: 0,
        offsetX: 0,
        show: false,
      },
    },
  },
};
export const columnCharthome = {
  series: [
    {
      name: "Net Profit",
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
    },
    {
      name: "Revenue",
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
    },
    {
      name: "Free Cash Flow",
      data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
    },
  ],
  chartOptions: {
    chart: {
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        endingShape: "rounded",
        columnWidth: "45%",
      },
    },
    legend: {
      show: true,
      position: "top",
      horizontalAlign: "right",
      fontSize: "12px",
      fontFamily: "Inter",
      offsetY: -30,
      labels: {
        colors: colors.light,
      },
      markers: {
        width: 8,
        height: 8,
        offsetY: -1,
        offsetX: -5,
        radius: 12,
      },
      itemMargin: {
        horizontal: 18,
        vertical: 0,
      },
    },
    title: {
      text: "Revenue Report",
      align: "left",
      offsetX: 0,
      offsetY: 13,
      floating: false,
      style: {
        fontSize: "20px",
        fontWeight: "500",
        fontFamily: "Inter",
        color: "#0f172a",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    yaxis: {
      labels: {
        style: {
          fontFamily: "Inter",
          colors: colors.light,
        },
      },
    },
    xaxis: {
      categories: [
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
      ],
      labels: {
        style: {
          fontFamily: "Inter",
          colors: colors.light,
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },

    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands";
        },
      },
    },
    colors: ["#4669FA", "#0CE7FA", "#FA916B"],
    grid: {
      show: true,
      borderColor: "#E2E8F0",
      strokeDashArray: 10,
      position: "back",
    },
    responsive: [
      {
        breakpoint: 600,
        options: {
          legend: {
            position: "bottom",
            offsetY: 8,
            horizontalAlign: "center",
          },
          plotOptions: {
            bar: {
              columnWidth: "80%",
            },
          },
        },
      },
    ],
  },
};
export const columnCharthomeDark = {
  series: [
    {
      name: "Net Profit",
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
    },
    {
      name: "Revenue",
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
    },
    {
      name: "Free Cash Flow",
      data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
    },
  ],
  chartOptions: {
    chart: {
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        endingShape: "rounded",
        columnWidth: "45%",
      },
    },
    legend: {
      show: true,
      position: "top",
      horizontalAlign: "right",
      fontSize: "12px",
      fontFamily: "Inter",
      offsetY: -30,
      markers: {
        width: 8,
        height: 8,
        offsetY: -1,
        offsetX: -5,
        radius: 12,
      },
      labels: {
        colors: "#CBD5E1",
      },
      itemMargin: {
        horizontal: 18,
        vertical: 0,
      },
    },
    title: {
      text: "Revenue Report",
      align: "left",

      offsetX: 0,
      offsetY: 13,
      floating: false,
      style: {
        fontSize: "20px",
        fontWeight: "medium",
        fontFamily: "Inter",
        color: "#fff",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    yaxis: {
      labels: {
        style: {
          colors: "#CBD5E1",
          fontFamily: "Inter",
        },
      },
    },
    xaxis: {
      categories: [
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
      ],
      labels: {
        style: {
          colors: "#CBD5E1",
          fontFamily: "Inter",
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },

    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands";
        },
      },
    },
    colors: ["#4669FA", "#0CE7FA", "#FA916B"],
    grid: {
      show: true,
      borderColor: "#334155",
      strokeDashArray: 10,
      position: "back",
    },
    responsive: [
      {
        breakpoint: 600,
        options: {
          legend: {
            position: "bottom",
            offsetY: 8,
            horizontalAlign: "center",
          },
          plotOptions: {
            bar: {
              columnWidth: "80%",
            },
          },
        },
      },
    ],
  },
};

export const columnCharthome2 = {
  series: [
    {
      name: "Revenue",
      data: [40, 70, 45, 100, 75, 40, 80, 90],
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
        columnWidth: "60px",
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
    colors: colors.warning,
    grid: {
      show: false,
    },
  },
};
export const columnCharthome3 = {
  series: [
    {
      name: "Revenue",
      data: [40, 70, 45, 100, 75, 40, 80, 90],
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
        columnWidth: "60px",
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
    colors: colors.info,
    grid: {
      show: false,
    },
  },
};
export const columnCharthome4 = {
  series: [
    {
      name: "Revenue",
      data: [40, 70, 45, 100, 75, 40, 80, 90],
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
        columnWidth: "60px",
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
    colors: colors.success,
    grid: {
      show: false,
    },
  },
};

export const areaLine = {
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
      colors: "#fff",
      strokeColors: colors.primary,
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
      borderColor: "#E2E8F0",
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
};

export const areaLineDark = {
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
      colors: "#4669FA",
      strokeColors: colors.primary,
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
      borderColor: "#334155",
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
};

export const donutChart = {
  series: [44, 55],

  chartOptions: {
    labels: ["success", "Return"],
    dataLabels: {
      enabled: false,
    },

    colors: [colors.info, colors.warning],
    legend: {
      position: "bottom",
      fontSize: "14px",
      fontFamily: "Inter",
      fontWeight: 400,
      markers: {
        width: 8,
        height: 8,
        offsetY: 0,
        offsetX: -5,
        radius: 12,
      },
      itemMargin: {
        horizontal: 18,
        vertical: 0,
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
};

export const donutChartDark = {
  series: [44, 55],

  chartOptions: {
    labels: ["success", "Return"],
    dataLabels: {
      enabled: false,
    },

    colors: [colors.info, colors.warning],
    legend: {
      position: "bottom",
      fontSize: "14px",
      fontFamily: "Inter",
      fontWeight: 400,
      labels: {
        colors: ["#E2E8F0"],
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
};

export const basicArea = {
  series: [
    {
      data: [90, 70, 85, 60, 80, 70, 90, 75, 60, 80],
    },
  ],
  chartOptions: {
    chart: {
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 4,
    },
    colors: ["#4669FA"],
    tooltip: {
      theme: "dark",
    },
    grid: {
      show: true,
      borderColor: "#E2E8F0",
      strokeDashArray: 10,
      position: "back",
    },
    fill: {
      type: "gradient",
      colors: "#4669FA",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.4,
        opacityTo: 0.5,
        stops: [0, 100, 0],
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#475569",
          fontFamily: "Inter",
        },
      },
    },

    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      labels: {
        style: {
          colors: "#475569",
          fontFamily: "Inter",
        },
      },
    },
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  },
};
export const basicAreaDark = {
  series: [
    {
      data: [90, 70, 85, 60, 80, 70, 90, 75, 60, 80],
    },
  ],
  chartOptions: {
    chart: {
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 4,
    },
    colors: ["#4669FA"],
    tooltip: {
      theme: "dark",
    },
    grid: {
      show: true,
      borderColor: "#334155",
      strokeDashArray: 10,
      position: "back",
    },
    fill: {
      type: "gradient",
      colors: "#4669FA",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.4,
        opacityTo: 0.5,
        stops: [50, 100, 0],
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#CBD5E1",
          fontFamily: "Inter",
        },
      },
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      labels: {
        style: {
          colors: "#CBD5E1",
          fontFamily: "Inter",
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  },
};
export const basicArea2 = {
  series: [
    {
      name: "Earnings",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "Expenses",
      data: [11, 32, 45, 32, 34, 52, 41],
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
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
      width: 2,
    },
    colors: [colors.primary, colors.warning],
    tooltip: {
      theme: "dark",
    },
    legend: {
      offsetY: 4,
      show: true,
      fontSize: "12px",
      fontFamily: "Inter",
      labels: {
        colors: "#475569",
      },
      markers: {
        width: 6,
        height: 6,
        offsetY: 0,
        offsetX: -5,
        radius: 12,
      },
      itemMargin: {
        horizontal: 18,
        vertical: 0,
      },
    },
    grid: {
      show: true,
      borderColor: "#E2E8F0",
      strokeDashArray: 10,
      position: "back",
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.4,
        opacityTo: 0.5,
        stops: [0, 100, 0],
      },
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2018-09-19T00:00:00.000Z",
        "2018-09-19T01:30:00.000Z",
        "2018-09-19T02:30:00.000Z",
        "2018-09-19T03:30:00.000Z",
        "2018-09-19T04:30:00.000Z",
        "2018-09-19T05:30:00.000Z",
        "2018-09-19T06:30:00.000Z",
      ],
    },
  },
};
export const basicArea2Dark = {
  series: [
    {
      name: "Earnings",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "Expenses",
      data: [11, 32, 45, 32, 34, 52, 41],
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
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
      width: 2,
    },
    colors: [colors.primary, colors.warning],
    tooltip: {
      theme: "dark",
    },
    legend: {
      offsetY: 4,
      show: true,
      fontSize: "12px",
      fontFamily: "Inter",
      labels: {
        colors: "#CBD5E1",
      },
      markers: {
        width: 6,
        height: 6,
        offsetY: 0,
        offsetX: -5,
        radius: 12,
      },
      itemMargin: {
        horizontal: 18,
        vertical: 0,
      },
    },
    grid: {
      show: true,
      borderColor: "#334155",
      strokeDashArray: 10,
      position: "back",
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 0.3,
        opacityFrom: 0.4,
        opacityTo: 0.5,
        stops: [0, 30, 0],
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#CBD5E1",
          fontFamily: "Inter",
        },
      },
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2018-09-19T00:00:00.000Z",
        "2018-09-19T01:30:00.000Z",
        "2018-09-19T02:30:00.000Z",
        "2018-09-19T03:30:00.000Z",
        "2018-09-19T04:30:00.000Z",
        "2018-09-19T05:30:00.000Z",
        "2018-09-19T06:30:00.000Z",
      ],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          colors: "#CBD5E1",
          fontFamily: "Inter",
        },
      },
    },
  },
};

export const radarChart = {
  series: [
    {
      name: "Male",
      data: [41, 64, 81, 60, 42, 42, 33, 23],
    },
    {
      name: "Female",
      data: [65, 46, 42, 25, 58, 63, 76, 43],
    },
  ],
  chartOptions: {
    chart: {
      toolbar: {
        show: false,
      },
      dropShadow: {
        enabled: false,
        blur: 8,
        left: 1,
        top: 1,
        opacity: 0.2,
      },
    },
    legend: {
      show: true,
      fontSize: "14px",
      fontFamily: "Inter",
      labels: {
        colors: "#475569",
      },
    },
    yaxis: {
      show: true,
    },
    colors: [colors.warning, colors.primary],
    xaxis: {
      categories: [
        "2019",
        "2020",
        "2021",
        "2017",
        "2018",
        "2015",
        "2014",
        "2013",
      ],
    },
    fill: {
      opacity: [0.2, 0.2],
    },
    stroke: {
      width: 2,
    },
    markers: {
      size: 0,
    },
    grid: {
      show: false,
    },
  },
};

export const radarChartDark = {
  series: [
    {
      name: "Male",
      data: [41, 64, 81, 60, 42, 42, 33, 23],
    },
    {
      name: "Female",
      data: [65, 46, 42, 25, 58, 63, 76, 43],
    },
  ],
  chartOptions: {
    chart: {
      toolbar: {
        show: false,
      },
      dropShadow: {
        enabled: false,
        blur: 8,
        left: 1,
        top: 1,
        opacity: 0.5,
      },
    },
    legend: {
      show: true,
      fontSize: "14px",
      fontFamily: "Inter",
      labels: {
        colors: "#cbd5e1",
      },
    },
    yaxis: {
      show: true,
    },
    colors: [colors.warning, colors.primary],
    xaxis: {
      categories: [
        "2019",
        "2020",
        "2021",
        "2017",
        "2018",
        "2015",
        "2014",
        "2013",
      ],
      labels: {
        style: {
          colors: "#cbd5e1",
        },
      },
    },
    fill: {
      opacity: [0.5, 0.5],
    },
    stroke: {
      width: 2,
    },
    markers: {
      size: 0,
    },
    grid: {
      show: false,
    },
  },
};

export const basiclineOne = {
  series: [
    {
      data: [31, 40, 28, 51, 42, 109, 100],
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
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    colors: [colors.warning],
    tooltip: {
      theme: "dark",
    },
    legend: {
      offsetY: 6,
      show: true,
      labels: {
        colors: "#475569",
      },
    },
    markers: {
      size: 4,
      colors: "#fff",
      strokeColors: colors.warning,
      strokeWidth: 2,
      shape: "circle",
      radius: 2,
      hover: {
        sizeOffset: 1,
      },
    },
    grid: {
      show: true,
      borderColor: "#E2E8F0",
      strokeDashArray: 10,
      position: "back",
    },
    yaxis: {
      labels: {
        style: {
          colors: "#475569",
          fontFamily: "Inter",
        },
      },
    },

    xaxis: {
      type: "datetime",
      categories: [
        "2018-09-19T00:00:00.000Z",
        "2018-09-19T01:30:00.000Z",
        "2018-09-19T02:30:00.000Z",
        "2018-09-19T03:30:00.000Z",
        "2018-09-19T04:30:00.000Z",
        "2018-09-19T05:30:00.000Z",
        "2018-09-19T06:30:00.000Z",
      ],
      labels: {
        style: {
          colors: "#475569",
          fontFamily: "Inter",
        },
      },
    },
  },
};

export const basiclineOneDark = {
  series: [
    {
      data: [31, 40, 28, 51, 42, 109, 100],
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
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    colors: [colors.warning],
    tooltip: {
      theme: "dark",
    },
    legend: {
      offsetY: 6,
      show: true,
      labels: {
        colors: "#CBD5E1",
      },
    },
    markers: {
      size: 4,
      colors: colors.warning,
      strokeColors: colors.warning,
      strokeWidth: 2,
      shape: "circle",
      radius: 2,
      hover: {
        sizeOffset: 1,
      },
    },
    grid: {
      show: true,
      borderColor: "#334155",
      strokeDashArray: 10,
      position: "back",
    },

    yaxis: {
      labels: {
        style: {
          colors: "#CBD5E1",
          fontFamily: "Inter",
        },
      },
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2018-09-19T00:00:00.000Z",
        "2018-09-19T01:30:00.000Z",
        "2018-09-19T02:30:00.000Z",
        "2018-09-19T03:30:00.000Z",
        "2018-09-19T04:30:00.000Z",
        "2018-09-19T05:30:00.000Z",
        "2018-09-19T06:30:00.000Z",
      ],
      labels: {
        style: {
          colors: "#CBD5E1",
          fontFamily: "Inter",
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
  },
};
export const basiclintwo = {
  series: [
    {
      data: [31, 40, 28, 51, 42, 109, 100],
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
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    colors: [colors.primary],
    tooltip: {
      theme: "dark",
    },
    legend: {
      offsetY: 6,
      show: true,
      labels: {
        colors: "#475569",
      },
    },
    markers: {
      size: 4,
      colors: colors.primary,
      strokeColors: colors.primary,
      strokeWidth: 2,
      shape: "circle",
      radius: 2,
      hover: {
        sizeOffset: 1,
      },
    },
    grid: {
      show: true,
      borderColor: "#cbd5e1",
      strokeDashArray: 10,
      position: "back",
    },

    yaxis: {
      labels: {
        style: {
          colors: "#475569",
          fontFamily: "Inter",
        },
      },
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2018-09-19T00:00:00.000Z",
        "2018-09-19T01:30:00.000Z",
        "2018-09-19T02:30:00.000Z",
        "2018-09-19T03:30:00.000Z",
        "2018-09-19T04:30:00.000Z",
        "2018-09-19T05:30:00.000Z",
        "2018-09-19T06:30:00.000Z",
      ],
      labels: {
        style: {
          colors: "#475569",
          fontFamily: "Inter",
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
  },
};
export const basiclintwoDark = {
  series: [
    {
      data: [31, 40, 28, 51, 42, 109, 100],
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
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    colors: [colors.primary],
    tooltip: {
      theme: "dark",
    },
    legend: {
      offsetY: 10,
      show: true,
      labels: {
        colors: "#CBD5E1",
      },
    },
    markers: {
      size: 4,
      colors: colors.primary,
      strokeColors: colors.primary,
      strokeWidth: 2,
      shape: "circle",
      radius: 2,
      hover: {
        sizeOffset: 1,
      },
    },
    grid: {
      show: true,
      borderColor: "#334155",
      strokeDashArray: 10,
      position: "back",
    },

    yaxis: {
      labels: {
        style: {
          colors: "#CBD5E1",
          fontFamily: "Inter",
        },
      },
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2018-09-19T00:00:00.000Z",
        "2018-09-19T01:30:00.000Z",
        "2018-09-19T02:30:00.000Z",
        "2018-09-19T03:30:00.000Z",
        "2018-09-19T04:30:00.000Z",
        "2018-09-19T05:30:00.000Z",
        "2018-09-19T06:30:00.000Z",
      ],
      labels: {
        style: {
          colors: "#CBD5E1",
          fontFamily: "Inter",
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
  },
};

export const stacked = {
  series: [
    {
      name: "Sales qualified",
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
    },
    {
      name: "Meeting",
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
    },
    {
      name: "In negotiation",
      data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
    },
  ],
  chartOptions: {
    chart: {
      stacked: true,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        endingShape: "rounded",
        columnWidth: "55%",
      },
    },
    legend: {
      show: true,
      position: "bottom",
      horizontalAlign: "center",
      fontSize: "12px",
      fontFamily: "Inter",
      offsetY: 0,
      labels: {
        colors: "#475569",
      },
      markers: {
        width: 6,
        height: 6,
        offsetY: 0,
        offsetX: -5,
        radius: 12,
      },
      itemMargin: {
        horizontal: 18,
        vertical: 0,
      },
    },

    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },

    yaxis: {
      labels: {
        style: {
          colors: "#475569",
          fontFamily: "Inter",
        },
      },
    },
    xaxis: {
      categories: [
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
      ],
      labels: {
        offsetY: -3,
        style: {
          colors: "#475569",
          fontFamily: "Inter",
        },
      },
    },

    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands";
        },
      },
    },
    colors: [colors.primary, colors.info, colors.warning],
    grid: {
      show: true,
      borderColor: "#E2E8F0",
      strokeDashArray: 10,
      position: "back",
    },
  },
};

export const stackedDark = {
  series: [
    {
      name: "Sales qualified",
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
    },
    {
      name: "Meeting",
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
    },
    {
      name: "In negotiation",
      data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
    },
  ],
  chartOptions: {
    chart: {
      stacked: true,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        endingShape: "rounded",
        columnWidth: "55%",
      },
    },
    legend: {
      show: true,
      position: "bottom",
      horizontalAlign: "center",
      fontSize: "12px",
      fontFamily: "Inter",
      offsetY: 0,
      markers: {
        width: 6,
        height: 6,
        offsetY: 0,
        offsetX: -5,
        radius: 12,
      },
      itemMargin: {
        horizontal: 18,
        vertical: 0,
      },
      labels: {
        colors: "#CBD5E1",
      },
    },

    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },

    yaxis: {
      labels: {
        style: {
          colors: "#CBD5E1",
          fontFamily: "Inter",
        },
      },
    },

    xaxis: {
      categories: [
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
      ],
      labels: {
        offsetY: -3,
        style: {
          colors: "#CBD5E1",
          fontFamily: "Inter",
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },

    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands";
        },
      },
    },
    colors: [colors.primary, colors.info, colors.warning],
    grid: {
      show: true,
      borderColor: "#334155",
      strokeDashArray: 10,
      position: "back",
    },
  },
};

export const pieChart = {
  series: [44, 55, 30],

  chartOptions: {
    labels: ["70% Sent", "18% Opend", "12% Rejected"],
    dataLabels: {
      enabled: true,
    },

    colors: [colors.success, colors.warning, colors.purple],
    legend: {
      position: "bottom",
      fontSize: "12px",
      fontFamily: "Inter",
      fontWeight: 400,
      labels: {
        colors: "#475569",
      },
      markers: {
        width: 6,
        height: 6,
        offsetY: -1,
        offsetX: -5,
        radius: 12,
      },
      itemMargin: {
        horizontal: 10,
        vertical: 0,
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
};

export const pieChartDark = {
  series: [44, 55, 30],

  chartOptions: {
    labels: ["70% Sent", "18% Opend", "12% Rejected"],
    dataLabels: {
      enabled: true,
    },

    colors: [colors.success, colors.warning, colors.purple],
    legend: {
      position: "bottom",
      fontSize: "12px",
      fontFamily: "Inter",
      fontWeight: 400,
      labels: {
        colors: "#CBD5E1",
      },
      markers: {
        width: 6,
        height: 6,
        offsetY: -1,
        offsetX: -5,
        radius: 12,
      },
      itemMargin: {
        horizontal: 10,
        vertical: 0,
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
};

export const donutTwo = {
  series: [70, 30],

  chartOptions: {
    labels: ["Complete", "Left"],
    dataLabels: {
      enabled: false,
    },

    colors: [colors.info, colorOpacity(colors.info, 0.16)],
    legend: {
      position: "bottom",
      fontSize: "12px",
      fontFamily: "Inter",
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
              fontFamily: "Inter",
            },
            value: {
              show: true,
              fontSize: "16px",
              fontFamily: "Inter",
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
};
export const donutTwoDark = {
  series: [70, 30],

  chartOptions: {
    labels: ["Complete", "Left"],
    dataLabels: {
      enabled: false,
    },

    colors: [colors.info, colorOpacity(colors.info, 0.16)],
    legend: {
      position: "bottom",
      fontSize: "12px",
      fontFamily: "Inter",
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
              fontFamily: "Inter",
              color: "#CBD5E1",
            },
            value: {
              show: true,
              fontSize: "16px",
              fontFamily: "Inter",
              color: "#CBD5E1",
              formatter(val) {
                // eslint-disable-next-line radix
                return `${parseInt(val)}%`;
              },
            },
            total: {
              show: true,
              fontSize: "10px",
              label: "",
              color: "white",
              formatter() {
                return "70";
              },
            },
          },
        },
      },
    },
  },
};

export const mostSales = [
  {
    title: "Nevada",
    amount: "$125k",
    cls: "bg-primary-500 ring-primary-500",
  },
  {
    title: "Colorado",
    amount: "$$325k",
    cls: "bg-success-500 ring-success-500",
  },
  {
    title: "Iowa",
    amount: "$67",
    cls: "bg-info-500 ring-info-500",
  },
  {
    title: "Arkansas",
    amount: "$354k",
    cls: "bg-warning-500 ring-warning-500",
  },
  {
    title: "Wyoming",
    amount: "$195k",
    cls: "bg-success-500 ring-success-500",
  },
  {
    title: "Other countries",
    amount: "$295k",
    cls: "bg-secondary-500 ring-secondary-500",
  },
];

export const mostSales2 = [
  {
    title: "Nevada",
    amount: "(80%)",
    cls: "bg-primary-500 ring-primary-500",
  },
  {
    title: "Ohio",
    amount: "(75%)",
    cls: "bg-success-500 ring-success-500",
  },
  {
    title: "Montana",
    amount: "(65%)",
    cls: "bg-info-500 ring-info-500",
  },
  {
    title: "Iowa",
    amount: "(85%)",
    cls: "bg-warning-500 ring-warning-500",
  },
  {
    title: "Arkansas",
    amount: "(90%)",
    cls: "bg-success-500 ring-success-500",
  },
];
