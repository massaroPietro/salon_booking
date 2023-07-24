<template>
  <div class="space-y-3">
    <Select label="Label" :options="options" v-model="selected" size="5" />
    <div class="text-base">
      <span class="text-slate-500 dark:text-slate-300 inline-block mr-3"
        >Selected value:</span
      >
      <span class="text-slate-900 dark:text-slate-300 font-semibold">{{
        selected
      }}</span>
    </div>
  </div>
</template>
<script>
import Select from "@/components/Select";
export default {
  components: {
    Select,
  },
  data() {
    return {
      selected: null,
      options: [
        {
          value: "option1",
          label: "Option 1",
        },
        {
          value: "option2",
          label: "Option 2",
        },
        {
          value: "option3",
          label: "Option 3",
        },
      ],
    };
  },
};
</script>
<style lang=""></style>
