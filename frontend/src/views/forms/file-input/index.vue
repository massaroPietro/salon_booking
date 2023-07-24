<template>
  <div>
    <div class="grid xl:grid-cols-2 grid-cols-1 gap-5">
      <Card title="File Input Basic">
        <Fileinput name="basic" />
      </Card>
      <Card title="Multiple files">
        <Fileinput multiple name="multipule" />
      </Card>
      <Card title="File Input Basic with Preview">
        <Fileinput preview name="preview" />
      </Card>
      <Card title="Multiple files with Preview">
        <Fileinput multiple preview name="mulpreview" />
      </Card>
      <div class="xl:col-span-2">
        <Card title="File upload">
          <DropZoneVue />
        </Card>
      </div>
      <Card title="Control sizing">
        <div class="space-y-3">
          <Fileinput placeholder="Large" classInput="h-[48px]" name="large" />
          <Fileinput placeholder="Default" name="default" />
          <Fileinput placeholder="Small" classInput="h-[32px]" name="small" />
        </div>
      </Card>
      <Card title="File name formatting">
        <div class="space-y-3">
          <Fileinput filenametag name="filetag" />
        </div>
      </Card>
    </div>
  </div>
</template>
<script>
import Card from "@/components/Card";
import Fileinput from "@/components/Fileinput";
import DropZoneVue from "./DropZone.vue";
export default {
  components: {
    Card,
    Fileinput,
    DropZoneVue,
  },
  data() {
    return {};
  },
};
</script>
<style></style>
