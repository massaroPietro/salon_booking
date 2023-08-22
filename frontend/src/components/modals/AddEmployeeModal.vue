<template>
  <Modal
      centered
      :title="$t('app.salons.addNewEmployee')"
      :label="$t('app.salons.addEmployee')"
      :label-class="[coreStore.onMobile ? 'w-full' : '', 'btn-dark']"
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
import {useI18n} from "vue-i18n";
import * as yup from "yup";
import {initFormState, setBackendResposeErrors} from "@/utils/utils";
import formSchemes from "@/constant/formSchemes";
import apiEndpoints from "@/constant/apiEndpoints";
import axios from "@/plugins/axios";
import {useAuthStore} from "@/store/auth";

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

    const FormScheme = formSchemes.UserRegistrationFormScheme();

    const {form, formErrors, validateForm} = initFormState(Object.keys(FormScheme.fields), FormScheme);

    return {toast, FormScheme, form, formErrors, coreStore, validateForm, authStore};
  },
  methods: {
    onSubmit() {
      this.validateForm().then(() => {
        const current_salon_slug = this.authStore.getCurrentSalon().slug
        const endpoint = apiEndpoints.registerEmployee(current_salon_slug);
        this.isLoading = true;
        axios.post(endpoint, this.form).then((response) => {
          this.$refs.addEmployeeModal.closeModal();
          this.isLoading = false;
          this.coreStore.reloadPage();
          this.toast.success("toast.employeeRegistered", {
            timeout: 5000
          })
        }).catch((error) => {
          this.isLoading = false;
          setBackendResposeErrors(error, this.formErrors)
        })
      })
    }
  }
}
</script>


<style scoped>

</style>
