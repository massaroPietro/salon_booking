<template>
  <div class="grid xl:grid-cols-2 grid-cols-1 gap-5">
    <Card title="Basic Select">
      <Basic />
    </Card>
    <Card title="Size  Select">
      <Size />
    </Card>
    <Card title="Vue-Select Basic">
      <Vue_Select />
    </Card>
    <Card title="Vue-Select  Multipule">
      <MultipuleSelect />
    </Card>
    <Card title="Vue-Select with Icon">
      <SelctIcon />
    </Card>
    <Card title="vue-select pushTags">
      <Push />
    </Card>
    <div class="xl:col-span-2">
      <Card title="Limited Selections">
        <Limited />
      </Card>
    </div>
  </div>
</template>
<script>
import Card from "@/components/Card";
import Basic from "./Basic";
import Limited from "./Limited";
import MultipuleSelect from "./MultipuleSelect";
import Push from "./Push";
import SelctIcon from "./SelctIcon";
import Size from "./Size";
import Vue_Select from "./Vue_Select";
export default {
  components: {
    Card,
    Basic,
    Size,
    Vue_Select,
    MultipuleSelect,
    SelctIcon,
    Push,
    Limited,
  },
};
</script>
<style lang=""></style>
