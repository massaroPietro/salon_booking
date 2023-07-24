<template>
  <div>
    <Modal
      :activeModal="store.columModal"
      @close="closeModal"
      title="Create new Column"
      centered
    >
      <form @submit.prevent="addColumn" class="space-y-4">
        <Textinput
          label="title"
          type="text"
          placeholder="Column Name"
          name="title"
          v-model.trim="newTodoText"
          :error="newtodoError"
        />
        <div class="formGroup">
          <label class="form-label">Select Color</label>
          <input type="color" v-model="columColor" />
        </div>

        <div class="ltr:text-right rtl:text-left">
          <Button text="Add" btnClass="btn-dark"></Button>
        </div>
      </form>
    </Modal>
  </div>
</template>
<script setup>
import Button from "@/components/Button";
import Modal from "@/components/Modal";
import Textinput from "@/components/Textinput";
import { useField, useForm } from "vee-validate";
import {useKanbanStore} from "@/store/kanban";
import * as yup from "yup";
import { ref } from "vue";
import { v4 as uuidv4 } from "uuid";
let store = useKanbanStore();

const schema = yup.object({
  newTodoText: yup.string().required("Title is required"),
});
const { handleSubmit } = useForm({
  validationSchema: schema,
});
const columColor = ref("#4669FA");
const { value: newTodoText, errorMessage: newtodoError } =
  useField("newTodoText");

const addColumn = handleSubmit(() => {
  store.addColumn({
    id: uuidv4(),
    name: newTodoText.value,
    tasks: [],
    color: columColor.value,
  });
  // empty text input
  newTodoText.value = "";
});

const closeModal = () => {
  store.columModal = false;
};
</script>
<style lang=""></style>
