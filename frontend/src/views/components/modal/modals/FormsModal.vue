<template>
  <div class="modal-groups">
    <Modal
      title="Login Form Modal"
      label="Login Form"
      labelClass="btn-outline-dark"
      ref="modal1"
    >
      <div class="text-base text-slate-600 dark:text-slate-300">
        <Textinput
          label="Email"
          type="email"
          placeholder="Type your email"
          name="emil"
          v-model="email"
          :error="emailError"
        />
        <Textinput
          label="Password"
          type="password"
          placeholder="8+ characters, 1 capitat letter "
          name="password"
          v-model="password"
          :error="passwordError"
          hasicon
        />
      </div>
      <template v-slot:footer>
        <Button
          text="Close"
          btnClass="btn-outline-dark "
          @click="$refs.modal1.closeModal()"
        />
        <Button
          text="Login"
          btnClass="btn-dark "
          @click="$refs.modal1.closeModal()"
        />
      </template>
    </Modal>
    <Modal
      title="Scrolling Long Content Modal"
      label="Scrolling Long Content "
      labelClass="btn-outline-dark"
      ref="modal2"
    >
      <h4 class="font-medium text-lg mb-3 text-slate-900">
        Lorem ipsum dolor sit.
      </h4>
      <div class="text-base text-slate-600 dark:text-slate-300">
        Oat cake ice cream candy chocolate cake chocolate cake cotton candy
        dragée apple pie. Brownie carrot cake candy canes bonbon fruitcake
        topping halvah. Cake sweet roll cake cheesecake cookie chocolate cake
        liquorice.
        <br />
        <br />
        Oat cake ice cream candy chocolate cake chocolate cake cotton candy
        dragée apple pie. Brownie carrot cake candy canes bonbon fruitcake
        topping halvah. Cake sweet roll cake cheesecake cookie chocolate cake
        liquorice.
        <br />
        <br />
        Oat cake ice cream candy chocolate cake chocolate cake cotton candy
        dragée apple pie. Brownie carrot cake candy canes bonbon fruitcake
        topping halvah. Cake sweet roll cake cheesecake cookie chocolate cake
        liquorice.
        <br />
        <br />
        Oat cake ice cream candy chocolate cake chocolate cake cotton candy
        dragée apple pie. Brownie carrot cake candy canes bonbon fruitcake
        topping halvah. Cake sweet roll cake cheesecake cookie chocolate cake
        liquorice.
        <br />
        <br />
        Oat cake ice cream candy chocolate cake chocolate cake cotton candy
        dragée apple pie. Brownie carrot cake candy canes bonbon fruitcake
        topping halvah. Cake sweet roll cake cheesecake cookie chocolate cake
        liquorice.
        <br />
        <br />
        Oat cake ice cream candy chocolate cake chocolate cake cotton candy
        dragée apple pie. Brownie carrot cake candy canes bonbon fruitcake
        topping halvah. Cake sweet roll cake cheesecake cookie chocolate cake
        liquorice.
        <br />
        <br />
        Oat cake ice cream candy chocolate cake chocolate cake cotton candy
        dragée apple pie. Brownie carrot cake candy canes bonbon fruitcake
        topping halvah. Cake sweet roll cake cheesecake cookie chocolate cake
        liquorice.
        <br />
        <br />
        Oat cake ice cream candy chocolate cake chocolate cake cotton candy
        dragée apple pie. Brownie carrot cake candy canes bonbon fruitcake
        topping halvah. Cake sweet roll cake cheesecake cookie chocolate cake
        liquorice.
        <br />
        <br />
        Oat cake ice cream candy chocolate cake chocolate cake cotton candy
        dragée apple pie. Brownie carrot cake candy canes bonbon fruitcake
        topping halvah. Cake sweet roll cake cheesecake cookie chocolate cake
        liquorice.
        <br />
        <br />
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
      title="Scrollable Content Modal"
      label="Scrollable Content"
      labelClass="btn-outline-dark"
      ref="modal3"
      scrollContent
    >
      <h4 class="font-medium text-lg mb-3 text-slate-900">
        Lorem ipsum dolor sit.
      </h4>
      <div class="text-base text-slate-600 dark:text-slate-300">
        Oat cake ice cream candy chocolate cake chocolate cake cotton candy
        dragée apple pie. Brownie carrot cake candy canes bonbon fruitcake
        topping halvah. Cake sweet roll cake cheesecake cookie chocolate cake
        liquorice.
        <br />
        <br />
        Oat cake ice cream candy chocolate cake chocolate cake cotton candy
        dragée apple pie. Brownie carrot cake candy canes bonbon fruitcake
        topping halvah. Cake sweet roll cake cheesecake cookie chocolate cake
        liquorice.
        <br />
        <br />
        Oat cake ice cream candy chocolate cake chocolate cake cotton candy
        dragée apple pie. Brownie carrot cake candy canes bonbon fruitcake
        topping halvah. Cake sweet roll cake cheesecake cookie chocolate cake
        liquorice.
        <br />
        <br />
        Oat cake ice cream candy chocolate cake chocolate cake cotton candy
        dragée apple pie. Brownie carrot cake candy canes bonbon fruitcake
        topping halvah. Cake sweet roll cake cheesecake cookie chocolate cake
        liquorice.
        <br />
        <br />
        Oat cake ice cream candy chocolate cake chocolate cake cotton candy
        dragée apple pie. Brownie carrot cake candy canes bonbon fruitcake
        topping halvah. Cake sweet roll cake cheesecake cookie chocolate cake
        liquorice.
        <br />
        <br />
        Oat cake ice cream candy chocolate cake chocolate cake cotton candy
        dragée apple pie. Brownie carrot cake candy canes bonbon fruitcake
        topping halvah. Cake sweet roll cake cheesecake cookie chocolate cake
        liquorice.
        <br />
        <br />
        Oat cake ice cream candy chocolate cake chocolate cake cotton candy
        dragée apple pie. Brownie carrot cake candy canes bonbon fruitcake
        topping halvah. Cake sweet roll cake cheesecake cookie chocolate cake
        liquorice.
        <br />
        <br />
        Oat cake ice cream candy chocolate cake chocolate cake cotton candy
        dragée apple pie. Brownie carrot cake candy canes bonbon fruitcake
        topping halvah. Cake sweet roll cake cheesecake cookie chocolate cake
        liquorice.
        <br />
        <br />
        Oat cake ice cream candy chocolate cake chocolate cake cotton candy
        dragée apple pie. Brownie carrot cake candy canes bonbon fruitcake
        topping halvah. Cake sweet roll cake cheesecake cookie chocolate cake
        liquorice.
        <br />
        <br />
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
  </div>
</template>
<script>
import Button from "@/components/Button";
import Modal from "@/components/Modal/Modal";
import Textinput from "@/components/Textinput";
export default {
  components: {
    Modal,
    Button,
    Textinput,
  },
};
</script>
<style lang=""></style>
