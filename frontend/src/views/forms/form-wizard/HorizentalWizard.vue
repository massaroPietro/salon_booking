<template>
  <div class="grid gap-5 grid-cols-12">
    <div class="lg:col-span-3 col-span-12">
      <div
        class="flex z-[5] items-start relative flex-col lg:min-h-full md:min-h-[300px] min-h-[250px]"
      >
        <div
          class="relative z-[1] flex-1 last:flex-none"
          v-for="(item, i) in steps"
          :key="i"
        >
          <div
            :class="`   ${
              stepNumber >= i
                ? 'bg-slate-900 text-white ring-slate-900 dark:bg-slate-900 dark:ring-slate-700  dark:ring-offset-slate-500 ring-offset-2'
                : 'bg-white ring-slate-900 ring-opacity-70  text-slate-900 dark:text-slate-300 text-opacity-70 dark:bg-slate-700 dark:ring-slate-700'
            }`"
            class="transition duration-150 icon-box md:h-12 md:w-12 h-8 w-8 rounded-full flex flex-col items-center justify-center relative z-[66] ring-1 md:text-lg text-base font-medium"
          >
            <span v-if="stepNumber <= i"> {{ i + 1 }}</span>
            <span v-else class="text-3xl">
              <Icon icon="bx:check-double" />
            </span>
          </div>

          <div
            class="absolute top-0 left-1/2 -translate-x-1/2 h-full w-[2px]"
            :class="
              stepNumber >= i
                ? 'bg-slate-900 dark:bg-slate-900'
                : 'bg-[#E0EAFF] dark:bg-slate-600'
            "
          ></div>
          <div
            class="absolute top-0 ltr:left-full rtl:right-full ltr:pl-4 rtl:pr-4 text-base leading-6 md:mt-3 mt-1 transition duration-150 w-full"
            :class="
              stepNumber >= i
                ? ' text-slate-900 dark:text-slate-300'
                : 'text-slate-500 dark:text-slate-300 dark:text-opacity-40'
            "
          >
            <span class="w-max block">{{ item.title }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="conten-box lg:col-span-9 col-span-12">
      <form @submit.prevent="submit">
        <div v-if="stepNumber === 0">
          <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
            <div class="lg:col-span-3 md:col-span-2 col-span-1">
              <h4 class="text-base text-slate-800 dark:text-slate-300 mb-6">
                Enter Your Account Details
              </h4>
            </div>
            <Textinput
              label="Username"
              type="text"
              placeholder="Type your User Name"
              name="userName"
              v-model="username"
              :error="usernameError"
            />
            <Textinput
              label="Full name"
              type="text"
              placeholder="Full name"
              name="fullname"
              v-model="fullname"
              :error="fullnameError"
            />
            <Textinput
              label="Email"
              type="email"
              placeholder="Type your email"
              name="emil"
              v-model="email"
              :error="emailError"
            />
            <InputGroup
              label="Phone Number"
              type="text"
              prepend="MY (+6)"
              placeholder="Phone Number"
              name="phoneNumber"
              v-model="phone"
              :error="phoneError"
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
              name="multi_password2"
              v-model="confirmpass"
              :error="confirmpassError"
              hasicon
            />
          </div>
        </div>
        <div v-if="stepNumber === 1">
          <div class="grid md:grid-cols-2 grid-cols-1 gap-5">
            <div class="md:col-span-2 col-span-1">
              <h4 class="text-base text-slate-800 dark:text-slate-300 mb-6">
                Enter Your Personal info-500
              </h4>
            </div>
            <Textinput
              label="First name"
              type="text"
              placeholder="First name"
              name="firstname"
              v-model="fname"
              :error="fnameError"
            />
            <Textinput
              label="Last name"
              type="text"
              placeholder="Last name"
              name="lasttname"
              v-model="lname"
              :error="lnameError"
            />
          </div>
        </div>
        <div v-if="stepNumber === 2">
          <div class="grid grid-cols-1 gap-5">
            <div class="">
              <h4 class="text-base text-slate-800 dark:text-slate-300 mb-6">
                Enter Your Address
              </h4>
            </div>
            <Textarea
              label="Address"
              type="text"
              placeholder="Write Address"
              name="address"
              v-model="address"
              :error="addressError"
            />
          </div>
        </div>
        <div v-if="stepNumber === 3">
          <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
            <div class="lg:col-span-3 md:col-span-2 col-span-1">
              <h4 class="text-base text-slate-800 dark:text-slate-300 mb-6">
                Enter Your Address
              </h4>
            </div>
            <Textinput
              label="Facebook"
              type="text"
              placeholder="https://www.facebook.com/profile"
              name="fburl"
              v-model="fburl"
              :error="fbError"
            />
          </div>
        </div>

        <div
          class="mt-10"
          :class="stepNumber > 0 ? 'flex justify-between' : ' text-right'"
        >
          <Button
            @click.prevent="prev()"
            text="prev"
            btnClass="btn-dark"
            v-if="this.stepNumber !== 0"
          />
          <Button
            :text="stepNumber !== this.steps.length - 1 ? 'next' : 'submit'"
            btnClass="btn-dark"
          />
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import InputGroup from "@/components/InputGroup";
import Textarea from "@/components/Textarea";
import Textinput from "@/components/Textinput";
import { useField, useForm } from "vee-validate";
import { computed, ref } from "vue";
import { useToast } from "vue-toastification";
import * as yup from "yup";
export default {
  components: {
    Button,
    Icon,
    Textinput,
    InputGroup,
    Textarea,
  },

  setup() {
    let steps = [
      {
        id: 1,
        title: "Account Details",
      },
      {
        id: 2,
        title: "Personal info-500",
      },
      {
        id: 3,
        title: "Address",
      },
      {
        id: 4,
        title: "Social Links",
      },
    ];
    const toast = useToast();
    let stepNumber = ref(0);

    // step by step yup schemea
    let stepSchema = yup.object().shape({
      username: yup.string().required(" User name is required"),
      fullname: yup.string().required("Full name is required"),
      email: yup
        .string()
        .email("Email is not valid")
        .required("Email is required"),
      phone: yup
        .string()
        .required("Phone number is required")
        .matches(/^[0-9]{12}$/, "Phone number is not valid"),
      password: yup
        .string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters"),
      confirmpass: yup
        .string()
        .required("Confirm Password is required")
        .oneOf([yup.ref("password"), null], "Passwords must match"),
    });

    let personalSchema = yup.object().shape({
      fname: yup.string().required(" First name is required"),
      lname: yup.string().required(" Last name is required"),
    });
    let addressSchema = yup.object().shape({
      address: yup.string().required(" Address is required"),
    });
    const url =
      /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/gm;

    let socialSchema = yup.object().shape({
      fburl: yup
        .string()
        .required("Facebook url is required")
        .matches(url, "Facebook url is not valid"),
    });

    // find current step schema
    let currentSchema = computed(() => {
      switch (stepNumber.value) {
        case 0:
          return stepSchema;
        case 1:
          return personalSchema;
        case 2:
          return addressSchema;
        case 3:
          return socialSchema;
        default:
          return stepSchema;
      }
    });

    const { handleSubmit } = useForm({
      validationSchema: currentSchema,
      keepValuesOnUnmount: true,
    });

    const { value: email, errorMessage: emailError } = useField("email");
    const { value: username, errorMessage: usernameError } =
      useField("username");
    const { value: fullname, errorMessage: fullnameError } =
      useField("fullname");
    const { value: phone, errorMessage: phoneError } = useField("phone");
    const { value: password, errorMessage: passwordError } =
      useField("password");
    const { value: confirmpass, errorMessage: confirmpassError } =
      useField("confirmpass");
    const { value: fname, errorMessage: fnameError } = useField("fname");
    const { value: lname, errorMessage: lnameError } = useField("lname");
    const { value: address, errorMessage: addressError } = useField("address");
    const { value: fburl, errorMessage: fbError } = useField("fburl");

    const submit = handleSubmit(() => {
      // next step until last step . if last step then submit form
      let totalSteps = steps.length;
      const isLastStep = stepNumber.value === totalSteps - 1;
      if (isLastStep) {
        stepNumber = totalSteps - 1;

        toast.success -
          500("Form Submited", {
            timeout: 2000,
          });
      } else {
        stepNumber.value++;
      }
    });

    const prev = () => {
      stepNumber.value--;
    };

    return {
      fullname,
      fullnameError,
      phone,
      phoneError,
      password,
      passwordError,
      confirmpass,
      confirmpassError,
      fname,
      fnameError,
      lname,
      lnameError,
      address,
      addressError,
      email,

      emailError,
      username,
      usernameError,
      submit,
      steps,
      stepNumber,
      prev,
      fburl,
      fbError,
    };
  },
};
</script>
<style lang="scss" scoped></style>
