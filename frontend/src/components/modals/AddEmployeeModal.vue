<template>
  <Modal
      centered
      :title="$t('app.salons.addNewEmployee')"
      :label="$t('app.salons.addEmployee')"
      :label-class="'btn-dark'"
      ref="addEmployeeModal"
  >
    <form class="text-base text-slate-600 dark:text-slate-300" @submit.prevent="onSubmit()">
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
          class-label="mt-3"
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
          class-label="mt-3"
          classInput="h-[48px]"
      />

      <span class="text-danger-500 block text-sm" v-if="formErrors.email && !emailExists">
          Clicca <span @click="sendInvitationLink(email)" class="text-black-500 cursor-pointer">quì</span> per inviare alla mail il link di invito
      </span>

      <Textinput
          :label="$t('generic.password')"
          type="password"
          placeholder=""
          v-model="form.password1"
          :error="formErrors.password1"
          hasicon
          class-label="mt-3"
          classInput="h-[48px]"
      />
      <Textinput
          :label="$t('auth.repeatPassword')"
          class-label="mt-3"
          type="password"
          placeholder=""
          v-model="form.password2"
          :error="formErrors.password2"
          hasicon
          classInput="h-[48px]"
      />
    </form>

    <Alert class="mt-5" v-if="formErrors.non_field_errors" type="danger">{{ formErrors.non_field_errors }}</Alert>

    <template v-slot:footer>
      <Button
          :text="$t('generic.close')"
          btnClass="btn-outline-dark"
          @click="$refs.addEmployeeModal.closeModal()"
      />
      <Button
          :text="$t('generic.add')"
          class="align-middle"
          btnClass="btn btn-dark text-center"
          :is-loading="loading"
          @click="onSubmit()"
      />
    </template>
  </Modal>
</template>

<script>
import Textinput from "@/components/Textinput/index.vue";
import Modal from "@/components/Modal/Modal.vue";
import Button from "@/components/Button/index.vue";
import {useCoreStore} from "@/store/core";
import {useToast} from "vue-toastification";
import {initFormState, setBackendResponseErrors} from "@/utils/utils";
import formSchemes from "@/constant/formSchemes";
import apiEndpoints from "@/constant/apiEndpoints";
import axios from "@/plugins/axios";
import {useAuthStore} from "@/store/auth";
import backendService from "@/utils/backendService";
import main from "@/mixins/main";
import Alert from "@/components/Alert/index.vue";

export default {
  name: "AddEmployeeModal",
  components: {Alert, Button, Modal, Textinput},
  mixins: [main],
  setup() {
    const coreStore = useCoreStore();
    const authStore = useAuthStore();
    const toast = useToast();

    const FormScheme = formSchemes.userRegistrationFormScheme();

    const {form, formErrors, validateForm} = initFormState(Object.keys(FormScheme.fields), FormScheme);

    return {toast, FormScheme, form, formErrors, coreStore, validateForm, authStore};
  },
  data() {
    return {
      emailExists: true,
      email: null,
    }
  },
  methods: {
    sendInvitationLink(email) {
      const config = {
        formErrors: this.formErrors,
        loader: this.toggleLoading,
        success_callback: () => {
          this.$refs.addEmployeeModal.closeModal();
          const {form, formErrors} = initFormState(Object.keys(this.FormScheme.fields), this.FormScheme);
          this.form = form;
          this.formErrors = formErrors;
        }
      }

      backendService.sendEmployeeInvitation(email, config);
    },
    onSubmit() {
      this.validateForm().then(() => {
        const current_salon_slug = this.authStore.getCurrentSalon.slug
        const config = {
          success_callback: () => {
            this.$refs.addEmployeeModal.closeModal();
          },
          error_callback: (err) => {
            if (err.response.data.hasOwnProperty('email_exists') && err.response.data['email_exists'] === false) {
              this.emailExists = false;
              this.email = this.form.email;
            }
          },
          formErrors: this.formErrors,
          loader: this.toggleLoading,
        }

        this.emailExists = true;
        backendService.registerEmployee(current_salon_slug, this.form, config)
      })
    }
  }
}
</script>


<style scoped>

</style>
