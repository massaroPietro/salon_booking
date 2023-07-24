<template>
  <div class="space-y-4">
    <Textinput
      label="Full name"
      name="h_Fullname"
      type="text"
      placeholder="Full name"
      horizontal
    />
    <Textinput
      label="Email"
      name="h_email"
      type="email"
      placeholder="Type your email"
      horizontal
    />
    <Textinput
      label="Phone"
      name="h_phone"
      type="phone"
      placeholder="Type your email"
      horizontal
    />
    <Textinput
      label="Password"
      name="h_password"
      type="Password"
      placeholder="8+ characters, 1 capitat letter "
      horizontal
    />
    <div class="ml-[124px] space-y-4">
      <Checkbox label="Remember me" checked />
      <Button text="Submit" btnClass="btn-dark" />
    </div>
  </div>
</template>
<script>
import Textinput from "@/components/Textinput";
import Checkbox from "@/components/Checkbox";
import Button from "@/components/Button";

export default {
  components: {
    Textinput,
    Checkbox,
    Button,
  },
};
</script>
<style lang=""></style>
