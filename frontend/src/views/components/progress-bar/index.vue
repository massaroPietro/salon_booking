<template>
  <div class="grid xl:grid-cols-2 grid-cols-1 gap-5">
    <Card title="Default Examples">
      <div class="grid grid-cols-1 gap-10">
        <ProgressBar
          :value="item.value"
          v-for="(item, i) in progressDefault"
          :key="i"
        />
      </div>
    </Card>
    <Card title="Background Examples">
      <div class="grid grid-cols-1 gap-10">
        <ProgressBar
          :value="item.value"
          :barColor="item.barColor"
          v-for="(item, i) in progressBackground"
          :key="i"
        />
      </div>
    </Card>

    <Card title="Height Examples">
      <div class="grid grid-cols-1 gap-10">
        <ProgressBar
          :value="item.value"
          :barColor="item.barColor"
          v-for="(item, i) in progressHeight"
          :key="i"
          :height="item.height"
          :title="item.title"
        />
      </div>
    </Card>
    <Card title="Striped Examples">
      <div class="grid grid-cols-1 gap-10">
        <ProgressBar
          :value="item.value"
          :barColor="item.barColor"
          v-for="(item, i) in progressBackground"
          :key="i"
          striped
          height="h-3"
        />
      </div>
    </Card>
    <Card title="Label Examples">
      <div class="grid grid-cols-1 gap-10">
        <ProgressBar
          :value="item.value"
          :barColor="item.barColor"
          v-for="(item, i) in progressBackground"
          :key="i"
          showValue
          height="h-3"
        />
        <ProgressBar height="h-3">
          <Bar :value="20" barColor="bg-red-500" showValue />
          <Bar :value="40" barColor="bg-blue-500" showValue />
        </ProgressBar>
      </div>
    </Card>
    <Card title="Multiple Bar Examples">
      <div class="grid grid-cols-1 gap-10">
        <ProgressBar height="h-3">
          <Bar :value="10" barColor="bg-primary-500" />
          <Bar :value="20" barColor="bg-success-500" />
          <Bar :value="20" barColor="bg-danger-500" />
        </ProgressBar>
        <ProgressBar height="h-3">
          <Bar :value="12" barColor="bg-primary-500" showValue />
          <Bar :value="25" barColor="bg-success-500" showValue />
          <Bar :value="25" barColor="bg-danger-500" showValue />
        </ProgressBar>
        <ProgressBar height="h-3">
          <Bar :value="15" barColor="bg-primary-500" striped />
          <Bar :value="30" barColor="bg-success-500" striped />
          <Bar :value="30" barColor="bg-danger-500" striped />
        </ProgressBar>
        <ProgressBar height="h-3">
          <Bar :value="18" barColor="bg-primary-500" showValue striped />
          <Bar :value="33" barColor="bg-success-500" showValue striped />
          <Bar :value="33" barColor="bg-danger-500" showValue striped />
        </ProgressBar>
      </div>
    </Card>
    <Card title="Striped Animation Examples">
      <div class="grid grid-cols-1 gap-10">
        <ProgressBar
          :value="item.value"
          :barColor="item.barColor"
          v-for="(item, i) in progressBackground"
          :key="i"
          striped
          height="h-3"
          animate
        />
      </div>
    </Card>
    <Card title="Step Progress Bar Examples"> <Step /> </Card>
  </div>
</template>
<script>
import Card from '@/components/Card';
import ProgressBar from '@/components/ProgressBar';
import Bar from '@/components/ProgressBar/Bar';
import Step from './step/Step';
export default {
  components: {
    ProgressBar,
    Card,
    Bar,
    Step,
  },
  data() {
    return {
      progressDefault: [
        {
          value: 50,
        },
        {
          value: 70,
        },
        {
          value: 80,
        },
        {
          value: 90,
        },
        {
          value: 100,
        },
      ],
      progressBackground: [
        {
          value: 50,
          barColor: 'bg-primary-500',
        },
        {
          value: 70,
          barColor: 'bg-success-500',
        },
        {
          value: 80,
          barColor: 'bg-info-500',
        },
        {
          value: 90,
          barColor: 'bg-warning-500',
        },
        {
          value: 100,
          barColor: 'bg-danger-500',
        },
      ],
      progressHeight: [
        {
          value: 50,
          title: 'Progress sm',
          barColor: 'bg-primary-500',
          height: 'h-1',
        },
        {
          value: 70,
          title: 'Progress md',
          barColor: 'bg-success-500',
          height: 'h-[6px]',
        },
        {
          value: 80,
          title: 'Progress lg',
          barColor: 'bg-warning-500',
          height: 'h-[10px]',
        },

        {
          value: 100,
          title: 'Progress xl',
          barColor: 'bg-danger-500',
          height: 'h-4',
        },
      ],
    };
  },
};
</script>
<style lang=""></style>
