<template>
  <div class="map" ref="chartdiv"></div>
</template>

<script>
import * as am5 from "@amcharts/amcharts5";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";
import * as am5map from "@amcharts/amcharts5/map";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
export default {
  name: "mapWorld",
  mounted() {
    let root = am5.Root.new(this.$refs.chartdiv);
    root._logo.dispose();

    root.setThemes([am5themes_Animated.new(root)]);

    let chart = root.container.children.push(
      am5map.MapChart.new(root, {
        panX: "translateX",
        panY: "translateY",
        projection: am5map.geoMercator(),
        homeZoomLevel: 16,
        homeGeoPoint: { longitude: 10, latitude: 52 },
      })
    );

    let polygonSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_worldLow,
        exclude: [
          "AQ",
          "FR",
          "GF",
          "GP",
          "MQ",
          "RE",
          "YT",
          "PM",
          "TF",
          "WF",
          "BL",
          "MF",
        ],
      })
    );
    var cities = {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            name: "New York City",
          },
          geometry: {
            type: "Point",
            coordinates: [-73.778137, 40.641312],
          },
        },
        {
          type: "Feature",
          properties: {
            name: "London",
          },
          geometry: {
            type: "Point",
            coordinates: [-0.454296, 51.47002],
          },
        },
        {
          type: "Feature",
          properties: {
            name: "Beijing ",
          },
          geometry: {
            type: "Point",
            coordinates: [116.597504, 40.072498],
          },
        },
      ],
    };

    let pointSeries = chart.series.push(
      am5map.MapPointSeries.new(root, {
        geoJSON: cities,
      })
    );

    pointSeries.bullets.push(function () {
      return am5.Bullet.new(root, {
        sprite: am5.Circle.new(root, {
          radius: 5,
          fill: am5.color(0x4669fa),
        }),
      });
    });
    polygonSeries.mapPolygons.template.setAll({
      tooltipText: "{name}",
      toggleKey: "active",
      interactive: true,
    });

    polygonSeries.mapPolygons.template.states.create("hover", {
      fill: am5.color(0x4669fa),
    });

    polygonSeries.mapPolygons.template.states.create("active", {
      fill: am5.color(0x4669fa),
    });

    //chart.set("cursor", am5xy.XYCursor.new(root, {}));

    //this.root = root;
  },

  beforeUnmount() {
    if (this.root) {
      this.root.dispose();
    }
  },
};
</script>

<style scoped lang="scss">
.map {
  width: 100%;
  height: 252px;
}
.map canvas:nth-child(2) {
  display: none !important;
}
</style>
