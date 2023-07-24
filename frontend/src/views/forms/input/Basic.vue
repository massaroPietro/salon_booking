<template>
  <div class="space-y-3">
    <Textinput
      label="Project Name*"
      name="pn"
      type="text"
      placeholder="Management dashboard "
    />
    <Textinput
      label="Readonly Input"
      name="pn2"
      isReadonly
      type="text"
      modelValue="You can't update me :P"
    />
    <Textinput
      label=" Disabled Input"
      name="pn3"
      isReadonly
      placeholder=" Disabled Input"
      disabled
      type="text"
    />
    <Textarea label="Project description" name="pn4" placeholder="Type here" />
    <Select label="select option" />
  </div>
</template>
<script>
import Textinput from "@/components/Textinput";
import Textarea from "@/components/Textarea";
import Select from "@/components/Select";
export default {
  components: {
    Textinput,
    Textarea,
    Select,
  },
};
</script>
<style lang=""></style>
