<template>
  <div>
    <div class="grid grid-cols-1 gap-5">
      <Card title="Basic Radio Buttons">
        <div class="flex space-x-rb flex-wrap">
          <Radio
            label="Checked"
            class="mb-5"
            name="x"
            value="A"
            v-model="picked1"
          />
          <Radio
            label="UnChecked"
            :checked="true"
            class="mb-5"
            name="x"
            value="B"
            v-model="picked1"
          />
          <Radio
            label="Checked disabled"
            disabled
            class="mb-5"
            name="x2"
            value="C"
            v-model="picked2"
          />
          <Radio
            label="UnChecked disabled"
            name="x2"
            disabled
            class="mb-5"
            value="D"
            v-model="picked2"
          />
        </div>
      </Card>
      <Card title="Theme Color">
        <div class="flex space-x-rb flex-wrap">
          <Radio
            v-for="(item, i) in colors"
            :key="i"
            :label="item.label"
            :activeClass="item.activeClass"
            class="mb-5"
            v-model="color"
            :value="item.value"
          />
        </div>
      </Card>
      <Card title="Radio group options array">
        <div class="flex space-x-5 flex-wrap"></div>

        <div v-for="(item, i) in options" :key="i">
          <Radio
            :label="item.label"
            class="mb-5"
            name="jorina"
            v-model="option"
            :value="item.value"
          />
        </div>

        <div class="text-slate-900 dark:text-slate-300 mt-3">
          Selected: {{ option }}
        </div>
      </Card>
    </div>
  </div>
</template>
<script>
import Card from "@/components/Card";
import Radio from "@/components/Radio";
export default {
  components: {
    Card,
    Radio,
  },
  data() {
    return {
      picked1: "A",
      picked2: "C",
      color: "primary-500",
      colors: [
        {
          value: "primary-500",
          label: "primary",
          activeClass: "ring-primary-500 border-primary-500",
        },
        {
          value: "secondary-500",
          label: "secondary",
          activeClass: "ring-secondary-500 border-secondary-500",
        },
        {
          value: "success-500",
          label: "success",
          activeClass: "ring-success-500 border-success-500",
        },
        {
          value: "danger-500",
          label: "danger",
          activeClass: "ring-danger-500 border-danger-500",
        },
        {
          value: "warning-500",
          label: "warning",
          activeClass: "ring-warning-500 border-warning-500",
        },
        {
          value: "info-500",
          label: "info",
          activeClass: "ring-info-500 border-info-500",
        },
      ],
      option: "Orange",
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
