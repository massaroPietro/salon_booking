<template>
  <div class="space-y-4">
    <InputGroup
      label="Full name"
      name="vi_Fullname"
      type="text"
      placeholder="Full name"
      prependIcon="heroicons-outline:user"
      merged
    />
    <InputGroup
      label="Email"
      name="vi_email"
      type="email"
      placeholder="Type your email"
      prependIcon="heroicons-outline:mail"
      merged
    />
    <InputGroup
      label="Phone"
      name="vi_phone"
      type="phone"
      placeholder="Type your email"
      prependIcon="heroicons-outline:phone"
      merged
    />
    <InputGroup
      label="Password"
      name="vi_password"
      type="Password"
      placeholder="8+ characters, 1 capitat letter "
      prependIcon="heroicons-outline:lock-closed"
      merged
    />
    <Checkbox label="Remember me" />
    <Button text="Submit" btnClass="btn-dark" />
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
