<template>
  <div>
    <div class="grid grid-cols-1 gap-5">
      <Card title="Switches">
        <div class="flex space-x-rb flex-wrap">
          <Switch label="Active Switch" active class="mb-5" />
          <Switch label="Inactive Switch" class="mb-5" />
          <Switch label="Disabled Active Switch" disabled active class="mb-5" />
          <Switch label="Disabled Active Switch" disabled class="mb-5" />
        </div>
      </Card>
      <Card title="Theme Colors">
        <div class="flex space-x-rb flex-wrap">
          <Switch
            v-for="(item, i) in colors"
            :key="i"
            :label="item.label"
            :activeClass="item.value"
            active
            class="mb-5"
          />
        </div>
      </Card>
      <Card title="Switch with Badge">
        <div class="flex space-x-rb flex-wrap">
          <Switch
            v-for="(item, i) in colors"
            :key="i"
            :label="item.label"
            :activeClass="item.value"
            class="mb-5"
            badge
            :active="item.active"
          />
        </div>
      </Card>
      <Card title="Switch with Icon">
        <div class="flex space-x-rb flex-wrap">
          <Switch
            v-for="(item, i) in colors"
            :key="i"
            :label="item.label"
            :activeClass="item.value"
            class="mb-5"
            badge
            icon
            :prevIcon="item.prevIcon"
            :nextIcon="item.nextIcon"
            :active="item.active"
          />
        </div>
      </Card>
    </div>
  </div>
</template>
<script>
import Card from '@/components/Card';
import Switch from '@/components/Switch';
export default {
  components: {
    Card,
    Switch,
  },
  data() {
    return {
      colors: [
        {
          label: 'primary',
          value: 'bg-primary-500',
          active: true,
          prevIcon: 'heroicons-outline:volume-up',
          nextIcon: 'heroicons-outline:volume-off',
        },
        {
          label: 'secondary',
          value: 'bg-slate-900 dark:bg-slate-900  bg-opacity-50',
          active: false,
          prevIcon: 'heroicons-outline:check',
          nextIcon: 'heroicons-outline:x',
        },
        {
          label: 'success',
          value: 'bg-success-500',
          active: true,
          prevIcon: 'heroicons-outline:sun',
          nextIcon: 'heroicons-outline:moon',
        },
        {
          label: 'danger',
          value: 'bg-danger-500',
          active: false,
          prevIcon: 'heroicons-outline:lock-closed',
          nextIcon: 'heroicons-outline:lock-open',
        },
        {
          label: 'warning',
          value: 'bg-warning-500',
          active: true,
          prevIcon: 'heroicons-outline:check',
          nextIcon: 'heroicons-outline:ban',
        },
        {
          label: 'info',
          value: 'bg-info-500',
          active: false,
          prevIcon: 'heroicons-outline:phone-incoming',
          nextIcon: 'heroicons-outline:phone-missed-call',
        },
      ],
    };
  },
};
</script>
<style lang=""></style>
