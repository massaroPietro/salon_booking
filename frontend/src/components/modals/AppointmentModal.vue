<template>
  <Modal
      centered
      :title="$t('app.salons.invitedForSalon')"
      :label="$t('app.salons.invitedForSalon')"
      :label-class="'btn-dark'"
      :hidden-button="true"
      closable
      ref="appointmentModal"
  >
    {{ appointment }}
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

export default {
  name: "AppointmentModal",
  components: {Modal, Button, Textinput},
  props: {
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
        console.log("ciao")
      if (this.$refs?.appointmentModal){
        this.$refs.appointmentModal.openModal();
      }
    })
    if (this.appointment) {
      this.form = JSON.parse(JSON.stringify(this.appointment))
    }
  }
}
</script>
