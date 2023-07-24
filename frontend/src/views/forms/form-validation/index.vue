<template>
  <div class="grid xl:grid-cols-2 grid-cols-1 gap-5">
    <Card title="Simple Form Validation">
      <Simple />
    </Card>
    <Card title="Simple Form Validation with Tootltips">
      <SimpleTolltip />
    </Card>
    <div class="xl:col-span-2">
      <Card title="Validating Multiple Rules">
        <Multipule />
      </Card>
    </div>
    <div class="xl:col-span-2">
      <Card title="Validation types">
        <Types />
      </Card>
    </div>
  </div>
</template>
<script>
import Card from "@/components/Card";
import Simple from "./Simple";
import SimpleTolltip from "./SimpleTolltip";
import Multipule from "./Multipule";
import Types from "./Types";
export default {
  components: {
    Card,
    Simple,
    SimpleTolltip,
    Multipule,
    Types,
  },
};
</script>
<style lang="scss"></style>
