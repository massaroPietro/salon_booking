<template>
  <div class="modal-groups">
    <Modal
      title="Extra small"
      label="Extra small"
      labelClass="btn-outline-dark"
      ref="modal1"
      sizeClass="max-w-xs"
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
      title="Small modal"
      label="Small modal"
      labelClass="btn-outline-dark"
      ref="modal2"
      sizeClass="max-w-md"
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
      title="Default modal"
      label="Default modal"
      labelClass="btn-outline-dark"
      ref="modal3"
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
      title="Large modal"
      label="Large modal"
      labelClass="btn-outline-dark"
      ref="modal4"
      sizeClass="max-w-5xl"
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
    <Modal
      title="Extra large modal"
      label="Extra large modal"
      labelClass="btn-outline-dark"
      ref="modal5"
      sizeClass="max-w-fit"
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
          @click="$refs.modal5.closeModal()"
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
