<template>
  <div class="h-[350px] w-full">
    <l-map
      :center="center"
      v-model="zoom"
      v-model:zoom="zoom"
      :zoom="zoom"
      :minZoom="3"
      :maxZoom="18"
      :zoomAnimation="true"
    >
      <l-tile-layer :url="url" />
    </l-map>
  </div>
</template>

<script>
// DON'T load Leaflet components here!
// Its CSS is needed though, if not imported elsewhere in your application.
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer } from "@vue-leaflet/vue-leaflet";

export default {
  components: {
    LMap,
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
};
</script>
<style lang="scss">
.leaflet-control {
  z-index: 0 !important;
}
.leaflet-control-container {
  z-index: 555 !important;
  position: relative;
}
</style>
