<template>
  <div>
    <VueSelect label="Label">
      <vSelect :options="books" label="title" multiple>
        <template #option="{ title, icon }">
          <span class="flex items-center">
            <span class="inline-block mr-2"><Icon :icon="icon" /></span>
            <span>{{ title }}</span>
          </span>
        </template>
      </vSelect>
    </VueSelect>
  </div>
</template>
<script>
import Icon from "@/components/Icon";
import VueSelect from "@/components/Select/VueSelect";
import vSelect from "vue-select";

export default {
  components: {
    VueSelect,
    vSelect,
    Icon,
  },
  data() {
    return {
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
