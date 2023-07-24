<template>
  <div class="space-y-3">
    <Textinput
      label="Text input with formatter (on input)"
      name="formatter-pn"
      type="text"
      placeholder="Enter your name"
      description="We will convert your name to lowercase instantly"
      v-model="text1"
    />
    {{ text1 }}
  </div>
</template>
<script>
import Textinput from "@/components/Textinput";
export default {
  components: {
    Textinput,
  },
  data() {
    return {
      text1: "",
    };
  },
  methods: {
    formatter(value) {
      alert(value);
    },
  },
  watch: {
    text1(value) {
      this.text1 = value.toLowerCase();
    },
  },
};
</script>
<style lang=""></style>
