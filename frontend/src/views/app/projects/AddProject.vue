<template>
  <div>
    <Modal
      :activeModal="store.addmodal"
      @close="store.closeModal"
      title="Create Project"
      centered
    >
      <form @submit.prevent="addProject" class="space-y-4">
        <Textinput
          label="title"
          type="text"
          placeholder="Project Name"
          name="title"
          v-model.trim="newTodoText"
          :error="newtodoError"
        />
        <div class="assagin space-y-4">
          <div class="grid lg:grid-cols-2 gap-4 grid-cols-1">
            <FromGroup label="Start Date" name="d1" :error="errorstartDate">
              <flat-pickr
                v-model="startDate"
                class="form-control"
                id="d1"
                placeholder="yyyy, dd M"
                :config="{
                  altInput: true,
                  altFormat: 'F j, Y',
                  dateFormat: 'Y-m-d',
                }"
              />
            </FromGroup>
            <FromGroup label="End Date" name="d2" :error="errorendDate">
              <flat-pickr
                v-model="endDate"
                class="form-control"
                id="d2"
                placeholder="yyyy, dd M"
                :config="{
                  altInput: true,
                  altFormat: 'F j, Y',
                  dateFormat: 'Y-m-d',
                }"
              />
            </FromGroup>
          </div>
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

          <VueSelect label="Tag" :error="errorCategory"
            ><vSelect :options="options" v-model="category" multiple
          /></VueSelect>
          <Textarea
            label="Project description"
            placeholder="Project description"
            v-model="desc"
            :error="descoError"
          />
        </div>

        <div class="text-right">
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
import vSelect from "vue-select";
import {useProjectStore} from "@/store/project";
import * as yup from "yup";
import { assignOption } from "../../../constant/data";
let store = useProjectStore();

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
];

const schema = yup.object({
  newTodoText: yup.string().required("Title is required"),
  desc: yup.string().required("Description is required"),

  category: yup.mixed().nullable().required("Please select category"),
  assign: yup.mixed().nullable().required("Please select One"),
  startDate: yup.string().required("Start date is required"),
  endDate: yup.string().required("End date is required"),
});
const { handleSubmit } = useForm({
  validationSchema: schema,
});
const { value: newTodoText, errorMessage: newtodoError } =
  useField("newTodoText");
const { value: desc, errorMessage: descoError } = useField("desc");

const { value: category, errorMessage: errorCategory } = useField("category");

const { value: assign, errorMessage: errorassign } = useField("assign");
const { value: startDate, errorMessage: errorstartDate } =
  useField("startDate");
const { value: endDate, errorMessage: errorendDate } = useField("endDate");

const addProject = handleSubmit(() => {
  store.addProject({
    id: uuidv4(),
    name: newTodoText.value,
    des: desc.value,
    assignto: assign.value,
    category: category.value.map((item) => item.value),
    startDate: startDate.value,
    endDate: endDate.value,
    progress: 40,
  });
});
</script>
<style lang=""></style>
