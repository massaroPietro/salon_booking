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
      <span
          @click="goToForgotPassword()"
          class="text-sm text-slate-800 dark:text-slate-400 leading-6 font-medium"
      >{{ $t('auth.forgotPassword') }}
      </span
      >
    </div>
    <Alert v-if="formErrors.non_field_errors" type="danger">{{ formErrors.non_field_errors }}</Alert>

    <Button :text="$t('auth.signIn')" btnClass="btn btn-dark block w-full text-center" :is-loading="loading"/>

  </form>
</template>
<script>
import Textinput from "@/components/Textinput";
import {useAuthStore} from "@/store/auth";
import Button from "@/components/Button/index.vue";
import Alert from "@/components/Alert/index.vue";
import {initFormState, setBackendResponseErrors} from "@/utils/utils";
import formSchemes from "@/constant/formSchemes";
import backendService from "@/utils/backendService";
import main from "@/mixins/main";

export default {
  name: "SignIn",
  mixins: [main],
  emits: ['logged', 'forgotPassword'],
  components: {
    Alert,
    Button,
    Textinput,
  },
  props: {
    isModal: {
      type: Boolean,
      required: false,
      default: false,
    }
  },
  setup() {

    const FormScheme = formSchemes.userLoginFormScheme();

    const {form, formErrors, validateForm} = initFormState(Object.keys(FormScheme.fields), FormScheme);

    return {FormScheme, form, formErrors, validateForm};
  },
  data() {
    return {
      isLoading: false,
      checkbox: false,
    };
  },
  methods: {
    onSubmit() {
      this.validateForm().then(() => {
        const config = {
          loader: this.toggleLoading,
          formErrors: this.formErrors,
          success_callback: () => {
            this.$emit('logged');
          }
        }
        backendService.loginUser(this.form, config, this.checkbox)
      })
    },
    goToForgotPassword() {
      if (this.isModal) {
        this.$emit('forgotPassword');
      } else {
        this.$router.push({name: 'forgot-password'})
      }
    }
  },
};
</script>
