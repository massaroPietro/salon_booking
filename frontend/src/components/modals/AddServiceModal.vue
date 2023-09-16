<template>
  <Modal
      centered
      :title="service ? $t('app.services.editService') : $t('app.services.addNewService')"
      :label="service ? $t('app.services.editService') : $t('app.services.addService')"
      :label-class="'btn-dark'"
      ref="addServiceModal"
  >
    <div class="text-base text-slate-600 dark:text-slate-300">
      <Textinput
          :label="$t('generic.name')"
          type="text"
          placeholder=""
          v-model="form.name"
          :error="formErrors.name"
          classInput="h-[48px] mb-2"
      />
      <VueSelect :pre-selected-value="selectedEmployees" :options="employees"
                 :label="$t('app.services.enabledEmployees')" multiple
                 v-model="form.employees"
                 :error="formErrors.employees"
                 class="mb-2"/>
      <Textinput
          :label="$t('generic.duration')"
          type="time"
          placeholder=""
          v-model="form.duration"
          :error="formErrors.duration"
          classInput="h-[48px] mb-2"
      />
      <InputGroup
          :label="$t('generic.price')"
          prepend="&euro;"
          type="text"
          placeholder=""
          v-model="form.price"
          :error="formErrors.price"
      />
    </div>
    <Alert v-if="formErrors.non_field_errors" class="mt-6" type="danger">{{ formErrors.non_field_errors }}</Alert>
    <template v-slot:footer>
      <Button
          :text="$t('generic.close')"
          btnClass="btn-outline-dark"
          @click="$refs.addServiceModal.closeModal()"
      />
      <Button
          :text="service ? $t('generic.edit') : $t('generic.add')"
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
import {initFormState} from "@/utils/utils";
import formSchemes from "@/constant/formSchemes";
import {useAuthStore} from "@/store/auth";
import backendService from "@/utils/backendService";
import main from "@/mixins/main";
import InputGroup from "@/components/InputGroup";
import vSelect from "vue-select";
import VueSelect from "@/components/Select/VueSelect.vue";
import Alert from "@/components/Alert/index.vue";

export default {
  name: "AddServiceModal",
  components: {Alert, VueSelect, vSelect, Button, Modal, Textinput, InputGroup},
  mixins: [main],
  emits: ['serviceSubmitted'],
  props: {
    service: {
      type: Object,
      required: false,
    }
  },
  setup() {
    const coreStore = useCoreStore();
    const authStore = useAuthStore();
    const toast = useToast();

    const FormScheme = formSchemes.addServiceFormScheme();

    const {form, formErrors, validateForm} = initFormState(Object.keys(FormScheme.fields), FormScheme);

    return {toast, FormScheme, form, formErrors, coreStore, validateForm, authStore};
  },
  data() {
    return {
      selectedEmployees: [],
    }
  },
  mounted() {
    if (this.service) {
      this.initService(this.service);
    }
  },
  computed: {
    employees() {
      const employeesWithLabels = this.authStore.getCurrentSalon.employees.map(item => {
        return {
          ...item,
          label: item.user.full_name
        };
      });

      return employeesWithLabels;
    }
  },

  methods: {
    initService(service) {
      this.form.name = service.name;
      this.form.duration = service.duration;
      this.form.price = service.price;

      this.selectedEmployees = [];
      service.employees.forEach((employeeID) => {
        const employee = this.authStore.getEmployee(employeeID);
        if (employee) {
          employee.label = employee.user.full_name;
          this.selectedEmployees.push(employee)
        }
      })
    },
    onSubmit() {
      this.validateForm().then(() => {
        const form = {
          ...this.form,
          employees: this.form.employees.map(option => option.id),
        };

        const config = {
          success_callback: (response) => {
            this.$refs.addServiceModal.closeModal();
            this.$emit('serviceSubmitted', response.data)
            this.initService(response.data)
          },
          formErrors: this.formErrors,
          loader: this.toggleLoading,
        }

        if (this.service) {
          backendService.updateService(this.service.id, form, config)
        } else {
          backendService.addService(form, config)
        }
      })
    }
  }
}
</script>


<style scoped>

</style>
