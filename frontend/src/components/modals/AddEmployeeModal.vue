<template>
  <Modal
      centered
      :title="$t('app.salons.addNewEmployee')"
      :label="$t('app.salons.addEmployee')"
      :label-class="'btn-dark'"
      ref="addEmployeeModal"
  >
    <div class="text-base text-slate-600 dark:text-slate-300">
      <Textinput
          :label="$t('generic.firstName')"
          type="text"
          placeholder=""
          v-model="form.first_name"
          :error="formErrors.first_name"
          classInput="h-[48px] mb-2"
      />
      <Textinput
          :label="$t('generic.lastName')"
          type="text"
          placeholder=""
          v-model="form.last_name"
          :error="formErrors.last_name"
          classInput="h-[48px] mb-2"
      />
      <Textinput
          label="Email"
          type="email"
          placeholder=""
          name="emil"
          v-model="form.email"
          :error="formErrors.email"
          classInput="h-[48px] mb-2"
      />
      <Textinput
          :label="$t('generic.password')"
          type="password"
          placeholder=""
          v-model="form.password1"
          :error="formErrors.password1"
          hasicon
          classInput="h-[48px] mb-2"
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
    </div>
    <template v-slot:footer>
      <Button
          :text="$t('generic.close')"
          btnClass="btn-outline-dark"
          @click="$refs.addEmployeeModal.closeModal()"
      />
      <Button
          text="Login"
          class="align-middle"
          btnClass="btn btn-dark text-center"
          :is-loading="isLoading"
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
import {initFormState, setBackendResposeErrors} from "@/utils/utils";
import formSchemes from "@/constant/formSchemes";
import apiEndpoints from "@/constant/apiEndpoints";
import axios from "@/plugins/axios";
import {useAuthStore} from "@/store/auth";
import backendService from "@/utils/backendService";

export default {
  name: "AddEmployeeModal",
  components: {Button, Modal, Textinput},
  data() {
    return {
      isLoading: false,
    };
  },
  setup() {
    const coreStore = useCoreStore();
    const authStore = useAuthStore();
    const toast = useToast();

    const FormScheme = formSchemes.userRegistrationFormScheme();

    const {form, formErrors, validateForm} = initFormState(Object.keys(FormScheme.fields), FormScheme);

    return {toast, FormScheme, form, formErrors, coreStore, validateForm, authStore};
  },
  methods: {
    onSubmit() {
      this.validateForm().then(() => {
        const current_salon_slug = this.authStore.getCurrentSalon().slug
        const callbacks = {
          success_callback: () => {
            this.$refs.addEmployeeModal.closeModal();
          },
          error_callback: (error) => {
            setBackendResposeErrors(error, this.formErrors)
          }
        }
        backendService.registerEmployee(current_salon_slug, this.form, callbacks, this.isLoading)
      })
    }
  }
}
</script>


<style scoped>

</style>
