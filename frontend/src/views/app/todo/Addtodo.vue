<template>
  <div>
    <Modal :activeModal="addModal" @close="closeTodo" title="Add Task" centered>
      <form @submit.prevent="addTodo" class="space-y-4">
        <Textinput
          label="title"
          type="text"
          placeholder="Task Name"
          name="title"
          v-model.trim="newTodoText"
          :error="newtodoError"
        />
        <div class="assagin space-y-4">
          <VueSelect label="Assignee" :error="errorassign">
            <vSelect
              :options="assignOption"
              label="title"
              v-model="assign"
              multiple
            >
              <template #option="{ title, image }">
                <span class="flex items-center space-x-4">
                  <div class="flex-none">
                    <div class="h-7 w-7 rounded-full">
                      <img
                        :src="image"
                        alt=""
                        class="w-full h-full rounded-full"
                      />
                    </div>
                  </div>
                  <span class="flex-1">{{ title }}</span>
                </span>
              </template>
              <template #selected-option="{ title, image }">
                <span class="flex items-center space-x-4">
                  <div class="flex-none">
                    <div class="h-7 w-7 rounded-full">
                      <img
                        :src="image"
                        alt=""
                        class="w-full h-full rounded-full"
                      />
                    </div>
                  </div>
                  <span class="flex-1">{{ title }}</span>
                </span>
              </template>
            </vSelect>
          </VueSelect>
          <FromGroup label="Due Date" name="d1">
            <flat-pickr
              v-model="dateDefault"
              class="form-control"
              id="d1"
              placeholder="yyyy, dd M"
            />
          </FromGroup>

          <VueSelect label="Tag" :error="errorselecttag"
            ><vSelect :options="options" v-model="selecttag" multiple
          /></VueSelect>
          <Textarea label="Description" placeholder="Description" />
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
import FromGroup from "@/components/FromGroup";
import Modal from "@/components/Modal";
import VueSelect from "@/components/Select/VueSelect";
import Textarea from "@/components/Textarea";
import Textinput from "@/components/Textinput";
import { v4 as uuidv4 } from "uuid";
import { useField, useForm } from "vee-validate";
import { ref, computed } from "vue";
import vSelect from "vue-select";
import {useTodoStore} from "@/store/todo";
import * as yup from "yup";
import { assignOption } from "../../../constant/data";
let store = useTodoStore();

const addModal = computed(() => store.addModal);

const options = [
  {
    value: "team",
    label: "team",
  },
  {
    value: "low",
    label: "low",
  },
  {
    value: "medium",
    label: "medium",
  },
  {
    value: "high",
    label: "high",
  },
  {
    value: "update",
    label: "update",
  },
];

const schema = yup.object({
  newTodoText: yup.string().required("Title is required"),

  selecttag: yup.mixed().nullable().required("Please select tag"),
  assign: yup.mixed().nullable().required("Please select One"),
});
const { handleSubmit } = useForm({
  validationSchema: schema,
});
const { value: newTodoText, errorMessage: newtodoError } =
  useField("newTodoText");

const { value: selecttag, errorMessage: errorselecttag } =
  useField("selecttag");

const { value: assign, errorMessage: errorassign } = useField("assign");

const dateDefault = ref("");

const addTodo = handleSubmit(() => {
  store.addTodo({
    id: uuidv4(),
    title: newTodoText.value,
    isDone: false,
    image: assign.value,
    catagory: selecttag.value,
  });
  newTodoText.value = "";
  selecttag.value = "";
  assign.value = "";
});

const closeTodo = () => {
  store.closeTodo();
};
</script>
<style lang=""></style>
