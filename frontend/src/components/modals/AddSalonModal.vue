<template>
  <Modal
      centered
      :title="salon ? $t('app.salons.editSalon') : $t('app.salons.addNewSalon')"
      :label="salon ? $t('app.salons.editSalon') : $t('app.salons.addSalon')"
      :label-class="'btn-dark'"
      ref="addSalonModal"
  >
    <add-salon-form-component @salonAdded="onSalonAdded"/>
  </Modal>
</template>

<script>
import Textinput from "@/components/Textinput/index.vue";
import Modal from "@/components/Modal/Modal.vue";
import Button from "@/components/Button/index.vue";
import main from "@/mixins/main";
import InputGroup from "@/components/InputGroup";
import vSelect from "vue-select";
import VueSelect from "@/components/Select/VueSelect.vue";
import Alert from "@/components/Alert/index.vue";
import AddSalonFormComponent from "@/components/commons/salons/AddSalonFormComponent.vue";
import router from "@/router";

export default {
  name: "AddSalonModal",
  components: {AddSalonFormComponent, Alert, VueSelect, vSelect, Button, Modal, Textinput, InputGroup},
  mixins: [main],
  props: {
    salon: {
      type: Object,
      required: false,
    }
  },
  methods: {
    onSalonAdded(data) {
      router.push({name: 'salon-detail', params: {salonSlug: data.slug}});
      this.$refs.addSalonModal.closeModal();
    },
  }
}
</script>
