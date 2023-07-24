<template>
  <div>
    <VueSelect label="Label">
      <vSelect
        v-model="selected2"
        multiple
        placeholder="Choose up to 2 options"
        label="title"
        :options="books"
        :selectable="() => selected2.length < 2"
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
    return {
      selected2: [],
      books: [
        {
          title: "Database",
          icon: "heroicons-outline:database",
        },
        {
          title: "Server",
          icon: "heroicons-outline:server",
        },
        {
          title: "Finger Print",
          icon: "heroicons-outline:finger-print",
        },
      ],
    };
  },
};
</script>
<style lang=""></style>
