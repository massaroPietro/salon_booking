<template>
  <div class="space-y-4">
    <InputGroup
      label="Full name"
      name="hi_Fullname"
      type="text"
      placeholder="Full name"
      horizontal
      prependIcon="heroicons-outline:user"
      merged
    />
    <InputGroup
      label="Email"
      name="hi_email"
      type="email"
      placeholder="Type your email"
      prependIcon="heroicons-outline:mail"
      horizontal
      merged
    />
    <InputGroup
      label="Phone"
      name="hi_phone"
      type="phone"
      placeholder="Type your email"
      prependIcon="heroicons-outline:phone"
      horizontal
      merged
    />
    <InputGroup
      label="Password"
      name="hi_password"
      type="Password"
      placeholder="8+ characters, 1 capitat letter "
      prependIcon="heroicons-outline:lock-closed"
      horizontal
      merged
    />
    <div class="ml-[124px] space-y-4">
      <Checkbox label="Remember me" />
      <Button text="Submit" btnClass="btn-dark" />
    </div>
  </div>
</template>
<script>
import InputGroup from "@/components/InputGroup";
import Checkbox from "@/components/Checkbox";
import Button from "@/components/Button";

export default {
  components: {
    InputGroup,
    Checkbox,
    Button,
  },
};
</script>
<style lang=""></style>
