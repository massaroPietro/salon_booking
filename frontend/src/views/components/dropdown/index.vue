<template>
  <div class="grid xl:grid-cols-2 grid-cols-1 gap-6">
    <Card title="Basic dropdowns"> <Basic /> </Card>
    <Card title="Outline dropdowns"> <Outline /> </Card>
    <Card title="Flat dropdowns"> <Flat /> </Card>
    <Card title="Split dropdowns "> <Split /> </Card>
    <Card title="Split outline dropdowns"> <SplitOutline /> </Card>
    <Card title="dropdown Directions"> <Direction /> </Card>
    <Card title="dropdown Sizes"> <Size /> </Card>
    <Card title="Block dropdowns "> <Block /> </Card>
  </div>
</template>
<script>
import Card from '@/components/Card';

import Basic from './dropdowns/Basic';
import Outline from './dropdowns/Outline';
import Flat from './dropdowns/Flat';
import Split from './dropdowns/Split';
import Size from './dropdowns/Size';
import Direction from './dropdowns/Direction';
import Block from './dropdowns/Block';
import SplitOutline from './dropdowns/SplitOutline';
export default {
  components: {
    Card,
    Basic,
    Outline,
    Flat,
    Split,
    Size,
    Block,
    Direction,
    SplitOutline,
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss">
.dropdown-group-example {
  @apply flex items-center flex-wrap justify-start;

  > div {
    @apply mr-3 mb-3;
  }
}
</style>
