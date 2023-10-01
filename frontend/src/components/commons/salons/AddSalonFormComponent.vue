<template>
  <form @submit.prevent="onSubmit" class="space-y-4">
    <Textinput
        :label="$t('generic.name')"
        type="text"
        :placeholder="$t('app.salons.salonNamePlaceholder')"
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

    <Button :text="$t('generic.add')" btnClass="btn btn-dark block w-full text-center" :is-loading="loading"
            :is-disabled="loading || !this.salonExistResponse.available"/>

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
import i18n from "@/plugins/i18n";

const {t} = i18n.global;
import {initFormState, setBackendResponseErrors} from "@/utils/utils";
import {useCoreStore} from "@/store/core";
import backendService from "@/utils/backendService";
import formSchemes from "@/constant/formSchemes";
import main from "@/mixins/main";

export default {
  name: "AddSalonFormComponent",
  mixins: [main],
  components: {
    Alert,
    Button,
    Textinput,
  },
  emits: ['salonAdded'],
  setup() {
    const toast = useToast();
    const authStore = useAuthStore();
    const coreStore = useCoreStore();

    const FormScheme = formSchemes.addNewSalon()

    const {form, formErrors, validateForm} = initFormState(Object.keys(FormScheme.fields), FormScheme);

    return {toast, FormScheme, form, formErrors, validateForm, authStore, coreStore};
  },
  data() {
    return {
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
      const config = {
        loader: this.toggleLoading,
        dataTarget: this.salonExistResponse,
      }

      clearTimeout(this.debounceTimeout);
      this.debounceTimeout = setTimeout(async () => {
        backendService.checkSalonExists(this.form.name, config)
      }, 300);
    },
    onSubmit() {
      this.validateForm().then(() => {
        const config = {
          success_callback: (response) => {
            this.$emit('salonAdded', response.data);
            try {
              this.authStore.user.salons.push(response.data);
            } catch (e) {
              this.coreStore.reloadPage();
            }
          },
          formErrors: this.formErrors,
          loader: this.toggleLoading,
        }

        backendService.addNewSalon(this.form, config)
      })
    },
  },
};
</script>
