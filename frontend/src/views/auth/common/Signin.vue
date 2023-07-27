<template>
  <form @submit.prevent="onSubmit" class="space-y-4">
    <Textinput
        :label="$t('auth.emailOrUsername')"
        type="text"
        placeholder="Type your email"
        name="emil"
        v-model="form.username"
        :error="formErrors.username"
        classInput="h-[48px]"
    />
    <Textinput
        :label="$t('auth.password')"
        type="password"
        placeholder="8+ characters, 1 capitat letter "
        name="password"
        v-model="form.password"
        :error="formErrors.password"
        hasicon
        classInput="h-[48px]"
    />

    <div class="flex justify-between">
      <label class="cursor-pointer flex items-start">
        <input
            type="checkbox"
            class="hidden"
            @change="() => (checkbox = !checkbox)"
        />
        <span
            class="h-4 w-4 border rounded flex-none inline-flex mr-3 relative top-1 transition-all duration-150"
            :class="
            checkbox
              ? 'ring-2 ring-black-500 dark:ring-offset-slate-600 dark:ring-slate-900  dark:bg-slate-900 ring-offset-2 bg-slate-900'
              : 'bg-slate-100 dark:bg-slate-600 border-slate-100 dark:border-slate-600 '
          "
        >
          <img
              src="@/assets/images/icon/ck-white.svg"
              alt=""
              class="h-[10px] w-[10px] block m-auto"
              v-if="checkbox"
          />
        </span>
        <span class="text-slate-500 dark:text-slate-400 text-sm leading-6"
        >{{ $t('auth.keepSignIn') }}</span
        >
      </label>
      <router-link
          :to="{name:'forgot-password'}"
          class="text-sm text-slate-800 dark:text-slate-400 leading-6 font-medium"
      >{{ $t('auth.forgotPassword') }}
      </router-link
      >
    </div>
    <Alert type="danger" v-for="(error, index) in coreStore.non_field_errors" :key="index">
      {{ error }}
    </Alert>

    <Button text="Sign in" btnClass="btn btn-dark block w-full text-center" :is-loading="isLoading"/>

  </form>
</template>
<script>
import Textinput from "@/components/Textinput";
import * as yup from "yup";
import {useToast} from "vue-toastification";
import {useAuthStore} from "@/store/auth";
import axios from "@/plugins/axios";
import Button from "@/components/Button/index.vue";
import Alert from "@/components/Alert/index.vue";
import {useCoreStore} from "@/store/core";
import apiEndpoints from "@/constant/apiEndpoints";

const FormScheme = yup.object().shape({
  username: yup
      .string()
      .required(),
  password: yup
      .string()
      .required(),
});


export default {
  name: "SignIn",
  components: {
    Alert,
    Button,
    Textinput,
  },
  setup() {
    const toast = useToast();
    const coreStore = useCoreStore();
    return {toast, coreStore};
  },
  data() {
    return {
      isLoading: false,
      checkbox: false,
      form: {
        username: "",
        password: "",
      },
      formErrors: {
        username: "",
        password: "",
      }
    };
  },
  methods: {
    isEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    },
    onSubmit() {
      this.resetFormErrors();
      FormScheme.validate(this.form, {abortEarly: false})
          .then(() => {
            let endpoint = apiEndpoints.login();


            let data = null;

            if (this.isEmail(this.form.username)) {
              data = {
                password: this.form.password,
                email: this.form.username
              }
            } else {
              data = this.form;
            }

            this.isLoading = true;
            axios.post(endpoint, data)
                .then((response) => {

                  const token = response.data.key;
                  const store = useAuthStore();

                  store.setToken(token, this.checkbox);
                  store.user = response.data.user;

                  const toPath = this.$route.query.to || '/'
                  this.$router.push(toPath)


                  this.toast.success(this.$t("toasts.successLogin"), {
                    timeout: 2000
                  });
                })
                .catch((err) => {
                  console.log(err);
                });
            this.isLoading = false;
          })
          .catch((err) => {
            err.inner.forEach((error) => {
              this.formErrors = {
                ...this.formErrors,
                [error.path]: error.message,
              };
            });
          });
    },
    resetFormErrors() {
      this.formErrors = {
        username: "",
        password: "",
      }
    },
  },
};
</script>
<style lang="scss"></style>
