<template>
  <div>
    <div
      v-if="
        (emails.length === 0 && this.search !== '') ||
        emails.length === 0
      "
    >
      <Badge
        label="No Email Found"
        badgeClass="bg-danger-500 text-white w-full block text-center mt-10 "
      />
    </div>
  </div>
</template>
<script>
import Badge from "@/components/Badge";
import {mapWritableState} from "pinia";
import {useEmailStore} from "@/store/email";

export default {
  components: {
    Badge,
  },
  computed:{
    ...mapWritableState(useEmailStore, ['search'])
  },
  props: {
    emails: {
      type: Array,
    },
  },
};
</script>
<style></style>
