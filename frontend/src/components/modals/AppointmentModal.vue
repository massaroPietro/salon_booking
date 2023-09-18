<template>
  <Modal
      centered
      :title="editMode ? $t('app.appointments.appointmentDetail') : $t('app.appointments.addAppointment')"
      :label-class="'btn-dark'"
      :hidden-button="true"
      closable
      ref="appointmentModal"
  >
    <form @submit.prevent="onSubmit()">
      <div class="space-y-3">
        <FromGroup :label="$t('generic.date')" :error="formErrors.start">
          <flat-pickr
              v-model="form.start"
              class="form-control"
              placeholder="Date & Time"
              id="d2"
              :config="{ enableTime: true, dateFormat: 'd-m-Y H:i'}"
          />
        </FromGroup>
        <FromGroup :label="$t('generic.employee')" :error="formErrors.employee">
          <select
              v-model="form.employee"
              class="form-control"
              name="employee"
          >
            <option
                v-for="employee in authStore.getCurrentSalon.employees"
                :key="employee.id"
                :value="employee.id"
            >
              {{ employee.user.full_name }}
            </option>
          </select>
        </FromGroup>
        <FromGroup :label="$t('app.menuItems.services')" :error="formErrors.services">
          <VueSelect :pre-selected-value="form.services" :options="authStore.getServicesForSelect"
                     :label="''"
                     multiple
                     v-model="form.services"
                     class="mb-2" />
<!--
    <div slot="no-options">
        {{ $t('app.services.noRegisteredServices') }}
    </div>-->

        </FromGroup>

      </div>
      <Alert v-if="formErrors.non_field_errors" class="mt-6" type="danger">{{ formErrors.non_field_errors }}</Alert>
      <div class="flex justify-between items-center mt-6">
        <div>
          <Button
              :text="$t('generic.delete')"
              btnClass="btn-danger"
              type="button"
              @click="deleteAppointment()"
          />
        </div>
        <div class="flex space-x-5">
          <Button
              :text="$t('generic.close')"
              btnClass="btn-light"
              @click="$refs.appointmentModal.closeModal()"
              type="button"
          />
          <Button
              :text="editMode ? $t('generic.edit') : $t('generic.add')"
              btnClass="btn-success"
              type="submit"
              :is-disabled="!appointmentIsChanged"
              :is-loading="loading"
          />
        </div>
      </div>
    </form>
  </Modal>
</template>

<script>
import {useCoreStore} from "@/store/core";
import {useAuthStore} from "@/store/auth";
import formSchemes from "@/constant/formSchemes";
import {initFormState} from "@/utils/utils";
import Textinput from "@/components/Textinput/index.vue";
import Button from "@/components/Button/index.vue";
import Modal from "@/components/Modal/Modal.vue";
import emitter from "@/plugins/mitt";
import InputGroup from "@/components/InputGroup/index.vue";
import Alert from "@/components/Alert/index.vue";
import FromGroup from "@/components/FromGroup/index.vue";
import VueSelect from "@/components/Select/VueSelect.vue";
import backendService from "@/utils/backendService";
import main from "@/mixins/main";
import toast from "@/plugins/toasts";

export default {
  name: "AppointmentModal",
  emits: ['deleted', 'updated', 'added'],
  components: {Alert, InputGroup, VueSelect, Modal, Button, Textinput, FromGroup},
  mixins: [main],
  props: {
    editMode: {
      type: Boolean,
      required: true
    },
    appointment: {
      type: Object,
      required: false
    }
  },
  setup() {
    const coreStore = useCoreStore();
    const authStore = useAuthStore();

    const FormScheme = formSchemes.appointmentFormScheme();

    const {form, formErrors, validateForm} = initFormState(Object.keys(FormScheme.fields), FormScheme);

    return {FormScheme, form, formErrors, coreStore, validateForm, authStore};
  },
  data() {
    return {}
  },
  created() {
    emitter.on('openAppointmentModal', () => {
      if (this.$refs?.appointmentModal) {
        for (const key in this.formErrors) {
          if (this.formErrors.hasOwnProperty(key)) {
            this.formErrors[key] = '';
          }
        }
        this.$refs.appointmentModal.openModal();
        this.initAppointment(this.appointment);
      }
    })
  },
  computed: {
    appointmentIsChanged() {
      if (this.editMode) {
        if (this.form.start !== this.appointment.start) {
          return true;
        }

        if (this.form.services.length === this.appointment.services.length) {
          const idSet = new Set(this.appointment.services);
          if (!this.form.services.every((service) => idSet.has(service.id))) {
            return true;
          }
        } else {
          return true;
        }

        if (this.form.employee !== this.appointment.employee) {
          return true;
        }
      } else {
        if (this.form.start && this.form.employee && this.form.services.length > 0) {
          return true
        }
      }
      return false;
    }
  },
  methods: {
    deleteAppointment() {
      this.$refs.appointmentModal.closeModal();
      this.$swal
          .fire({
            title: this.$t('alerts.areYouSure'),
            text: this.$t('alerts.notWillRestoreService'),
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#34c38f",
            cancelButtonColor: "#f46a6a",
            confirmButtonText: this.$t('alerts.confirmDelete'),
              cancelButtonText: this.$t('alerts.cancel'),
            background: this.$store.themeSettingsStore.isDark
                ? "#1e293b"
                : "#fff",
          })
          .then((result) => {
            if (result.value) {

              const loader = this.$loading.show();

              const config = {
                success_callback: () => {
                  this.$emit('deleted')
                  this.$swal.fire({
                    title: this.$t('alerts.deleted'),
                    text: this.$t('alerts.appointmentDeleted'),
                    icon: "success",
                    confirmButtonColor: "#1e293b"
                  });
                },
                finally_callback: () => {
                  loader.hide()
                }
              }

              backendService.deleteAppointment(this.appointment.id, config)
            } else {
              this.$refs.appointmentModal.openModal()
            }
          })
    },
    onSubmit() {
      this.validateForm().then(() => {
        const config = {
          formErrors: this.formErrors,
          success_callback: () => {
            this.$refs.appointmentModal.closeModal()
            if (this.editMode) {
              toast.success(this.$t('app.appointments.appointmentUpdated'))
            } else {
              toast.success(this.$t('app.appointments.appointmentAdded'))
            }
          },
          loader: this.toggleLoading,
        }

        const data = {
          ...this.form,
          start: this.form.start === this.appointment.start ? this.form.start : this.toIsoDate(this.form.start),
          services: this.form.services.map(service => service.id),
        }

        if (this.editMode) {
          data.id = this.appointment.id;
          backendService.updateAppointment(data, config)
        } else {
          backendService.addAppointment(data, config)
        }
      })
    },
    initAppointment(appointment) {
      this.form.start = appointment.start;
      this.form.employee = appointment.employee || null
      this.form.services = [];
      if (this.editMode) {
        this.form.id = this.appointment.id
      }
      appointment.services.forEach((serviceID) => {
        const service = this.authStore.getService(serviceID);
        if (service) {
          service.label = service.name;
          this.form.services.push(service)
        }
      })
    },
    toIsoDate(dateStr) {
      const parts = dateStr.split(/[- :]/);
      return new Date(
          parts[2],
          parts[1],
          parts[0],
          parts[3],
          parts[4]
      );
    }
  }
}
</script>
