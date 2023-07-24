<template>
  <div>
    <div class="grid grid-cols-1 gap-5">
      <Card title="Checkboxes">
        <div class="flex space-x-rb flex-wrap">
          <Checkbox label="Checked" />
          <Checkbox label="UnChecked" checked />
          <Checkbox label="Checked disabled" disabled />
          <Checkbox label="UnChecked disabled" checked disabled />
        </div>
      </Card>
      <Card title="Color">
        <div class="flex flex-wrap space-x-rb">
          <Checkbox
            label="primary"
            activeClass="ring-primary-500 bg-primary-500"
            checked
          />
          <Checkbox
            label="secondary"
            activeClass="ring-secondary-500 bg-secondary-500"
            checked
          />
          <Checkbox
            label="success"
            activeClass="ring-success-500 bg-success-500"
            checked
          />
          <Checkbox
            label="danger"
            activeClass="ring-danger-500 bg-danger-500"
            checked
          />
          <Checkbox
            label="warning"
            activeClass="ring-warning-500 bg-warning-500"
            checked
          />
          <Checkbox
            label="info"
            activeClass="ring-info-500 bg-info-500"
            checked
          />
        </div>
      </Card>
      <Card title="Using options array">
        <div class="flex space-x-5 flex-wrap"></div>

        <div v-for="(item, i) in options" :key="i">
          <Checkbox
            :label="item.label"
            name="jorina"
            v-model="option"
            :value="item.value"
          />
        </div>

        <div class="text-slate-900 dark:text-white mt-3">
          Selected: {{ option }}
        </div>
      </Card>
    </div>
  </div>
</template>
<script>
import Card from "@/components/Card";
import Checkbox from "@/components/Checkbox";
export default {
  components: {
    Card,
    Checkbox,
  },
  data() {
    return {
      ss: "",
      option: [],
      options: [
        {
          value: "Orange",
          label: "Orange",
        },
        {
          value: "Apple",
          label: "Apple",
        },
        {
          value: "Banana",
          label: "Banana",
        },
      ],
    };
  },
};
</script>
<style lang=""></style>
