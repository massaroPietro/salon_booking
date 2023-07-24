<template>
  <form
    @submit.prevent="onSubmit"
    class="lg:grid-cols-2 grid gap-5 grid-cols-1"
  >
    <Textinput
      label="Username"
      type="text"
      placeholder="Type your User Name"
      name="multi_userName"
      v-model="username"
      :error="usernameError"
    />
    <Textinput
      label="Email"
      type="email"
      placeholder="Type your email"
      name="multi_emil"
      v-model="email"
      :error="emailError"
    />
    <Textinput
      label="Password"
      type="password"
      placeholder="8+ characters, 1 capitat letter "
      name="multi_password"
      v-model="password"
      :error="passwordError"
      hasicon
    />
    <Textinput
      label="Confirm Password"
      type="password"
      placeholder="Password"
      name="multi_password"
      v-model="confirmpass"
      :error="confirmpassError"
      hasicon
    />

    <div>
      <Button text="Submit" btnClass="btn-dark"></Button>
    </div>
  </form>
</template>
<script>
import Button from "@/components/Button";
import Textinput from "@/components/Textinput";
import { useField, useForm } from "vee-validate";
import * as yup from "yup";

export default {
  components: {
    Textinput,
    Button,
  },

  setup() {
    // Define a validation schema
    const schema = yup.object({
      email: yup.string().required().email(),
      username: yup.string().required(),
      password: yup.string().required().min(8),
      confirmpass: yup
        .string()
        .required()
        .oneOf([yup.ref("password")]),
    });

    const { handleSubmit } = useForm({
      validationSchema: schema,
    });
    // No need to define rules for fields

    const { value: email, errorMessage: emailError } = useField("email");
    const { value: username, errorMessage: usernameError } =
      useField("username");
    const { value: password, errorMessage: passwordError } =
      useField("password");
    const { value: confirmpass, errorMessage: confirmpassError } =
      useField("confirmpass");

    const onSubmit = handleSubmit(() => {
      // console.warn(values.email);
    });

    return {
      email,
      password,
      passwordError,
      emailError,
      username,
      usernameError,
      confirmpass,
      confirmpassError,
      onSubmit,
    };
  },
};
</script>
<style lang="scss"></style>
