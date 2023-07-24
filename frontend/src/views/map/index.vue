<template>
  <div class="space-y-5">
    <Card title="Vector Map">
      <div class="grid lg:grid-cols-2 grid-cols-1 gap-5 mt-3">
        <Map />
        <Map2 />
      </div>
    </Card>
    <Card title="Basic leaflet map">
      <Map3 />
    </Card>
    <Card title="leaflet Marker, Circle & Polygon Map">
      <markerMap />
    </Card>
    <Card title="leaflet GeoJSON Map">
      <Map4 />
    </Card>
  </div>
</template>
<script setup>
import Card from "@/components/Card";
import Map from "../home/Analytics-Component/Map";
import Map2 from "../home/Analytics-Component/Map2";
import Map4 from "./Maps/LefletOne";
import Map3 from "./Maps/Basic";
import markerMap from "./Maps/Marker-map.vue";
</script>
<style></style>
