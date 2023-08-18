<template>
  <form @submit.prevent="onSubmit" class="space-y-4">
    <Textinput
        :label="$t('generic.name')"
        type="text"
        :placeholder="$t('app.salons.salonNamePlaceholder')"
        name="emil"
        v-model="form.name"
        :error="formErrors.name"
        classInput="h-[48px]"
        @input="checkSalonNameExists()"
    />

    <Alert v-if="salonExistResponse.available" type="success">
      <span
          v-html="$t('app.salons.nameIsAvailableAlert', {name: this.salonExistResponse.name, slug: this.salonExistResponse.slug})"></span>
    </Alert>

    <Alert v-if="salonExistResponse.available === false" type="warning">
      {{ $t('app.salons.nameNotAvailable', {name: this.salonExistResponse.name}) }}
    </Alert>

    <Alert v-if="formErrors.non_field_errors" type="danger">{{ formErrors.non_field_errors }}</Alert>

    <Button :text="$t('auth.signIn')" btnClass="btn btn-dark block w-full text-center" :is-loading="isLoading"
            :is-disabled="isLoading || !this.salonExistResponse.available"/>

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
  name: "AddSalonFormComponent",
  components: {
    Alert,
    Button,
    Textinput,
  },
  emits: ['salonAdded'],
  setup() {
    const toast = useToast();
    const authStore = useAuthStore();

    const {t} = useI18n();

    const FormScheme = yup.object().shape({
      name: yup
          .string()
          .required(t('generic.requiredField')),
    });

    const {form, formErrors, validateForm} = initFormState(Object.keys(FormScheme.fields), FormScheme);

    return {toast, FormScheme, form, formErrors, validateForm, authStore};
  },
  data() {
    return {
      isLoading: false,
      checkbox: false,
      submitted: false,
      debounceTimeout: null,
      salonExistResponse: {
        slug: null,
        available: null,
        name: null,
      }
    };
  },
  methods: {
    async checkSalonNameExists() {
      this.isLoading = false;
      clearTimeout(this.debounceTimeout);
      this.debounceTimeout = setTimeout(async () => {
        this.isLoading = true;
        try {
          const response = await axios.post(apiEndpoints.checkSalonExists(), {name: this.form.name});
          this.salonExistResponse = response.data;
        } catch (error) {
          console.error(error);
        }
        this.isLoading = false;
      }, 600);
    },
    onSubmit() {
      this.validateForm().then(() => {
        let endpoint = apiEndpoints.salons();

        this.isLoading = true;
        axios.post(endpoint, this.form)
            .then((response) => {
              this.$emit('salonAdded');
              this.isLoading = false;
              this.authStore.user.salons.push(response.data.id);
              this.toast.success(this.$t("app.salons.salonAddedSuccessfully"), {
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
