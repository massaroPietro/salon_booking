<template>
  <div class="modal-groups">
    <Modal
      title="Basic Modal"
      label="Basic Modal"
      labelClass="btn-outline-dark"
      ref="modal1"
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
          btnClass="btn-dark "
          @click="$refs.modal1.closeModal()"
        />
      </template>
    </Modal>
    <Modal
      title="Vertically center"
      label="Vertically center"
      labelClass="btn-outline-dark"
      ref="modal2"
      centered
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
          btnClass="btn-dark "
          @click="$refs.modal2.closeModal()"
        />
      </template>
    </Modal>
    <Modal
      title="Disabled backdrop"
      label="Disabled backdrop"
      labelClass="btn-outline-dark"
      ref="modal3"
      disableBackdrop
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
          btnClass="btn-dark "
          @click="$refs.modal3.closeModal()"
        />
      </template>
    </Modal>
    <Modal
      title="Disabled animation"
      label="Disabled animation"
      labelClass="btn-outline-dark"
      ref="modal4"
      noFade
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
          btnClass="btn-dark "
          @click="$refs.modal4.closeModal()"
        />
      </template>
    </Modal>
  </div>
</template>
<script>
import Button from '@/components/Button';
import Modal from '@/components/Modal/Modal';
export default {
  components: {
    Modal,
    Button,
  },
};
</script>
<style lang=""></style>
