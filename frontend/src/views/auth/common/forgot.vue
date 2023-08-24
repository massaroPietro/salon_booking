<template>
  <form @submit.prevent="onSubmit" class="space-y-4" novalidate>
    <Textinput
        label="Email"
        type="email"
        :placeholder="$t('auth.insertYourEmail')"
        name="emil"
        v-model="form.email"
        :error="formErrors.email"
        classInput="h-[48px]"
    />

    <Alert v-if="formErrors.non_field_errors" type="danger">{{ formErrors.non_field_errors }}</Alert>

    <Alert v-if="recoveryEmailSent" type="success">{{ $t('auth.recoveryEmailSent') }}</Alert>

    <Button :text="$t('auth.sendRecoveryEmail')" btn-class="btn btn-dark" class="block w-full text-center"
            :is-loading="isLoading"/>

  </form>
</template>
<script>
import Textinput from "@/components/Textinput";
import * as yup from "yup";
import {initFormState, setBackendResposeErrors} from "@/utils/utils";
import apiEndpoints from "@/constant/apiEndpoints";
import Button from "@/components/Button/index.vue";
import axios from "@/plugins/axios";
import Alert from "@/components/Alert/index.vue";
import {useI18n} from "vue-i18n";
import backendService from "@/utils/backendService";

export default {
  components: {
    Alert,
    Button,
    Textinput,
  },
  data() {
    return {
      isLoading: false,
      recoveryEmailSent: false,
    };
  },
  setup() {
    const {t} = useI18n();

    const schema = yup.object({
      email: yup.string()
          .required(t('generic.requiredField'))
          .email(t('errors.notValidEmail')),
    });

    const {form, formErrors, validateForm} = initFormState(Object.keys(schema.fields), schema);

    return {form, formErrors, validateForm};
  },
  methods: {
    onSubmit() {
      this.validateForm().then(() => {

        const callbacks = {
          success_callback: () => {
            this.recoveryEmailSent = true;
          },
          error_callback: (error) => {
            setBackendResposeErrors(error, this.formErrors)
          },
        }
        backendService.resetPassword(this.form, callbacks, this.isLoading)
      })
    }
  }
};
</script>
