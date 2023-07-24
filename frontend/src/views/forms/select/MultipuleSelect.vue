<template>
  <div>
    <VueSelect :options="options" label="Label" multiple />
  </div>
</template>
<script>
import VueSelect from "@/components/Select/VueSelect";
export default {
  components: {
    VueSelect,
  },
  data() {
    return {
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
