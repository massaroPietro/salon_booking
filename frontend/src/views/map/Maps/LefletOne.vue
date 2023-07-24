<template>
  <div class="h-[350px] w-full">
    <l-map
      :center="center"
      v-model="zoom"
      v-model:zoom="zoom"
      :minZoom="3"
      :maxZoom="18"
      :zoomAnimation="true"
    >
      <l-tile-layer :url="url" />
      <l-geo-json :geojson="geojson" />
    </l-map>
  </div>
</template>

<script>
// DON'T load Leaflet components here!
// Its CSS is needed though, if not imported elsewhere in your application.
import "leaflet/dist/leaflet.css";
import { LMap, LGeoJson, LTileLayer } from "@vue-leaflet/vue-leaflet";

export default {
  components: {
    LMap,
    LGeoJson,
    LTileLayer,
  },
  data() {
    return {
      zoom: 8,
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      geojson: null,
      center: [47.31322, -1.319482],
    };
  },

  async created() {
    const response = await fetch(
      "https://rawgit.com/gregoiredavid/france-geojson/master/regions/pays-de-la-loire/communes-pays-de-la-loire.geojson"
    );
    this.geojson = await response.json();
  },
};
</script>
