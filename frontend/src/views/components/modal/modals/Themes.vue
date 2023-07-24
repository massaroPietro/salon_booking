<template>
  <div class="modal-groups">
    <Modal
      title="Primary Modal"
      label="Primary"
      labelClass="btn-outline-primary"
      ref="modal1"
      themeClass="bg-primary-500"
    >
      <h4 class="font-medium text-lg mb-3 text-slate-900">
        Lorem ipsum dolor sit.
      </h4>
      <div class="text-base text-slate-600 dark:text-slate-300">
        Oat cake ice cream candy chocolate cake chocolate cake cotton candy
        dragée apple pie. Brownie carrot cake candy canes bonbon fruitcake
        topping halvah. Cake sweet roll cake cheesecake cookie chocolate cake
        liquorice.
      </div>
      <template v-slot:footer>
        <Button
          text="Accept"
          btnClass="btn-primary"
          @click="$refs.modal1.closeModal()"
        />
      </template>
    </Modal>
    <Modal
      title="Secondary Modal"
      label="Secondary"
      labelClass="btn-outline-secondary"
      ref="modal2"
      themeClass="bg-secondary-500"
    >
      <h4 class="font-medium text-lg mb-3 text-slate-900">
        Lorem ipsum dolor sit.
      </h4>
      <div class="text-base text-slate-600 dark:text-slate-300">
        Oat cake ice cream candy chocolate cake chocolate cake cotton candy
        dragée apple pie. Brownie carrot cake candy canes bonbon fruitcake
        topping halvah. Cake sweet roll cake cheesecake cookie chocolate cake
        liquorice.
      </div>
      <template v-slot:footer>
        <Button
          text="Accept"
          btnClass="btn-secondary"
          @click="$refs.modal2.closeModal()"
        />
      </template>
    </Modal>
    <Modal
      title="Success Modal"
      label="Success"
      labelClass="btn-outline-success"
      ref="modal3"
      themeClass="bg-success-500"
    >
      <h4 class="font-medium text-lg mb-3 text-slate-900">
        Lorem ipsum dolor sit.
      </h4>
      <div class="text-base text-slate-600 dark:text-slate-300">
        Oat cake ice cream candy chocolate cake chocolate cake cotton candy
        dragée apple pie. Brownie carrot cake candy canes bonbon fruitcake
        topping halvah. Cake sweet roll cake cheesecake cookie chocolate cake
        liquorice.
      </div>
      <template v-slot:footer>
        <Button
          text="Accept"
          btnClass="btn-success "
          @click="$refs.modal3.closeModal()"
        />
      </template>
    </Modal>
    <Modal
      title="Info Modal"
      label="info"
      labelClass="btn-outline-info"
      ref="modal4"
      themeClass="bg-info-500"
    >
      <h4 class="font-medium text-lg mb-3 text-slate-900">
        Lorem ipsum dolor sit.
      </h4>
      <div class="text-base text-slate-600 dark:text-slate-300">
        Oat cake ice cream candy chocolate cake chocolate cake cotton candy
        dragée apple pie. Brownie carrot cake candy canes bonbon fruitcake
        topping halvah. Cake sweet roll cake cheesecake cookie chocolate cake
        liquorice.
      </div>
      <template v-slot:footer>
        <Button
          text="Accept"
          btnClass="btn-info "
          @click="$refs.modal4.closeModal()"
        />
      </template>
    </Modal>
    <Modal
      title="Warning Modal"
      label="warning"
      labelClass="btn-outline-warning"
      ref="modal5"
      themeClass="bg-warning-500"
    >
      <h4 class="font-medium text-lg mb-3 text-slate-900">
        Lorem ipsum dolor sit.
      </h4>
      <div class="text-base text-slate-600 dark:text-slate-300">
        Oat cake ice cream candy chocolate cake chocolate cake cotton candy
        dragée apple pie. Brownie carrot cake candy canes bonbon fruitcake
        topping halvah. Cake sweet roll cake cheesecake cookie chocolate cake
        liquorice.
      </div>
      <template v-slot:footer>
        <Button
          text="Accept"
          btnClass="btn-warning "
          @click="$refs.modal5.closeModal()"
        />
      </template>
    </Modal>
    <Modal
      title="Danger Modal"
      label="danger"
      labelClass="btn-outline-danger"
      ref="modal6"
      themeClass="bg-danger-500"
    >
      <h4 class="font-medium text-lg mb-3 text-slate-900">
        Lorem ipsum dolor sit.
      </h4>
      <div class="text-base text-slate-600 dark:text-slate-300">
        Oat cake ice cream candy chocolate cake chocolate cake cotton candy
        dragée apple pie. Brownie carrot cake candy canes bonbon fruitcake
        topping halvah. Cake sweet roll cake cheesecake cookie chocolate cake
        liquorice.
      </div>
      <template v-slot:footer>
        <Button
          text="Accept"
          btnClass="btn-danger "
          @click="$refs.modal6.closeModal()"
        />
      </template>
    </Modal>
    <Modal
      title="Light Modal"
      label="Light"
      labelClass="btn-outline-light"
      ref="modal7"
      themeClass="bg-slate-600 text-slate-900"
    >
      <h4 class="font-medium text-lg mb-3 text-slate-900">
        Lorem ipsum dolor sit.
      </h4>
      <div class="text-base text-slate-600 dark:text-slate-300">
        Oat cake ice cream candy chocolate cake chocolate cake cotton candy
        dragée apple pie. Brownie carrot cake candy canes bonbon fruitcake
        topping halvah. Cake sweet roll cake cheesecake cookie chocolate cake
        liquorice.
      </div>
      <template v-slot:footer>
        <Button
          text="Accept"
          btnClass="bg-slate-600 text-white "
          @click="$refs.modal7.closeModal()"
        />
      </template>
    </Modal>
  </div>
</template>
<script>
import Button from "@/components/Button";
import Modal from "@/components/Modal/Modal";
export default {
  components: {
    Modal,
    Button,
  },
};
</script>
<style lang=""></style>
