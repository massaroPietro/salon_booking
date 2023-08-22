<template>
  <form @submit.prevent="onSubmit" class="space-y-4" novalidate>
    <Textinput
        :label="$t('generic.firstName')"
        type="text"
        placeholder=""
        v-model="form.first_name"
        :error="formErrors.first_name"
        classInput="h-[48px]"
    />
    <Textinput
        :label="$t('generic.lastName')"
        type="text"
        placeholder=""
        v-model="form.last_name"
        :error="formErrors.last_name"
        classInput="h-[48px]"
    />
    <Textinput
        label="Email"
        type="email"
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
        v-model="form.password1"
        :error="formErrors.password1"
        hasicon
        classInput="h-[48px]"
    />
    <Textinput
        :label="$t('auth.repeatPassword')"
        type="password"
        placeholder=""
        v-model="form.password2"
        :error="formErrors.password2"
        hasicon
        classInput="h-[48px]"
    />
    <Checkbox :label="$t('auth.acceptPrivacy')" v-model="privacyAccepted" class="my-5"/>
    <Alert v-if="formErrors.non_field_errors" type="danger">{{ formErrors.non_field_errors }}</Alert>
    <Button :text="$t('auth.createAccount')" btnClass="btn btn-dark block w-full text-center" :is-loading="isLoading"/>
  </form>
</template>
<script>
import Textinput from "@/components/Textinput";
import * as yup from "yup";
import Button from "@/components/Button/index.vue";
import Alert from "@/components/Alert/index.vue";
import {useI18n} from "vue-i18n";
import {initFormState, resetObject, setBackendResposeErrors} from "@/utils/utils";
import Checkbox from "@/components/Checkbox";
import {useToast} from "vue-toastification";
import axios from "@/plugins/axios";
import apiEndpoints from "@/constant/apiEndpoints";
import {useCoreStore} from "@/store/core";
import formSchemes from "@/constant/formSchemes";

export default {
  name: "SignUp",
  components: {
    Checkbox,
    Alert,
    Button,
    Textinput,
  },
  setup() {
    const {t} = useI18n();
    const toast = useToast();
    const coreStore = useCoreStore()

    const FormScheme = formSchemes.UserRegistrationFormScheme();

    const {form, formErrors, validateForm} = initFormState(Object.keys(FormScheme.fields), FormScheme);

    return {form, formErrors, t, validateForm, toast, coreStore};
  },
  data() {
    return {
      isLoading: false,
      checkbox: false,
      privacyAccepted: false,
    };
  },
  methods: {
    onSubmit() {
      this.validateForm().then(() => {
        if (!this.privacyAccepted) {
          this.toast.info(this.$t("auth.notAcceptedPrivacy"), {
            timeout: 2000
          })
        } else {
          const endpoint = apiEndpoints.register();
          this.isLoading = true;
          axios.post(endpoint, this.form).then(() => {
            this.isLoading = false;
            this.$emit('emailSent', this.form.email)
          }).catch((error) => {
            this.isLoading = false;
            setBackendResposeErrors(error, this.formErrors)
          })
        }
      })
    },
  },
};
</script>
<style lang="scss"></style>
