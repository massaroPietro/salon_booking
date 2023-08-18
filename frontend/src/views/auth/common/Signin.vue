<template>
  <form @submit.prevent="onSubmit" class="space-y-4">
    <Textinput
        :label="$t('auth.emailOrUsername')"
        type="text"
        placeholder=""
        name="emil"
        v-model="form.email"
        :error="formErrors.email"
        classInput="h-[48px]"
    />
    <Textinput
        :label="$t('generic.password')"
        type="password"
        placeholder=""
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
    <Alert v-if="formErrors.non_field_errors" type="danger">{{ formErrors.non_field_errors }}</Alert>

    <Button :text="$t('auth.signIn')" btnClass="btn btn-dark block w-full text-center" :is-loading="isLoading"/>

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
import apiEndpoints from "@/constant/apiEndpoints";
import {useI18n} from "vue-i18n";
import {initFormState, setBackendResposeErrors} from "@/utils/utils";

export default {
  name: "SignIn",
  components: {
    Alert,
    Button,
    Textinput,
  },
  setup() {
    const toast = useToast();

    const {t} = useI18n();

    const FormScheme = yup.object().shape({
      email: yup
          .string()
          .required(t('generic.requiredField')),
      password: yup
          .string()
          .required(t('generic.requiredField')),
    });

    const {form, formErrors, validateForm} = initFormState(Object.keys(FormScheme.fields), FormScheme);

    return {toast, FormScheme, form, formErrors, validateForm};
  },
  data() {
    return {
      isLoading: false,
      checkbox: false,
    };
  },
  methods: {
    isEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    },
    onSubmit() {
      this.validateForm().then(() => {
        let endpoint = apiEndpoints.login();
        let data = {};

        if (!this.isEmail(this.form.username)) {
          data = {
            password: this.form.password,
            username: this.form.username
          }
        } else {
          data = this.form;
        }

        this.isLoading = true;
        axios.post(endpoint, this.form)
            .then((response) => {
              this.isLoading = false;
              const token = response.data.key;
              const store = useAuthStore();

              store.setToken(token, this.checkbox);
              store.user = response.data.user;

              if(response.data.user.settings){
                this.$i18n.locale = response.data.user.settings.lang;
              }

              const toPath = this.$route.query.to || '/'
              this.$router.push(toPath)


              this.toast.success(this.$t("toasts.successLogin"), {
                timeout: 2000
              });
            }).catch((error) => {

          this.isLoading = false;
          setBackendResposeErrors(error, this.formErrors)
        })
      })
    },
  },
};
</script>
