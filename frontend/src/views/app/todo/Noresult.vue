<template>
  <div>
    <div
      v-if="
        (todos.length === 0 && todoSearch !== '') ||
        todos.length === 0
      "
    >
      <Badge
        label="No Result Found"
        badgeClass="bg-danger-500 text-white w-full block text-center mt-10 "
      />
    </div>
  </div>
</template>
<script>
import Badge from "@/components/Badge";
import {useTodoStore} from "@/store/todo";
import { mapWritableState } from "pinia";

export default {
  components: {
    Badge,
  },
  props: {
    todos: {
      type: Array,
    },
  },
  computed: {
    ...mapWritableState(useTodoStore, ['todoSearch'])
  },
};
</script>
<style lang=""></style>
