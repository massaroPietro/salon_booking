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

    <Alert v-if="response?.detail" type="success">{{ response.detail }}</Alert>

    <Button :text="countdown ? countdown : $t('auth.sendRecoveryEmail')" btn-class="btn btn-dark"
            class="block w-full text-center"
            :is-disabled="countdown > 0"
            :is-loading="loading"
            :loading-class="'mr-2'"/>

  </form>
</template>
<script>
import Textinput from "@/components/Textinput";
import * as yup from "yup";
import {initFormState} from "@/utils/utils";
import Button from "@/components/Button/index.vue";
import Alert from "@/components/Alert/index.vue";
import {useI18n} from "vue-i18n";
import backendService from "@/utils/backendService";
import main from "@/mixins/main";

export default {
  components: {
    Alert,
    Button,
    Textinput,
  },
  mixins: [main],
  data() {
    return {
      response: {},
      countdown: 0,
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
        const config = {
          dataTarget: this.response,
          formErrors: this.formErrors,
          loader: this.toggleLoading,
          success_callback: () => {
            this.countdown = 15;
            const countdownInterval = setInterval(() => {
              this.countdown--;
              if (this.countdown <= 0) {
                clearInterval(countdownInterval);
                this.response = {};
              }
            }, 1000);
          }
        }
        backendService.resetPassword(this.form, config)
      })
    }
  }
};
</script>
