<template>
  <div>
    <VueSelect label="Label">
      <vSelect
        multiple
        taggable
        push-tags
        placeholder="Add Options"
        label="title"
      />
    </VueSelect>
  </div>
</template>
<script>
import VueSelect from "@/components/Select/VueSelect";
import vSelect from "vue-select";

export default {
  components: {
    VueSelect,
    vSelect,
  },
  data() {
    return {};
  },
};
</script>
<style lang=""></style>
