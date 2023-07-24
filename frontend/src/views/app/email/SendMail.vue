<template>
  <div>
    <Modal
      :activeModal="addModal"
      @close="closeTodo"
      title="Compose Eamil"
      centered
    >
      <form @submit.prevent="sendEmail">
        <div class="assagin mb-4">
          <VueSelect label="To" :error="errorassign">
            <vSelect
              :options="assignOption"
              label="title"
              v-model="assign"
              multiple
            >
              <template #option="{ title, image }">
                <span class="flex items-center space-x-4 rtl:space-x-reverse">
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
                <span class="flex items-center space-x-4 rtl:space-x-reverse">
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
        </div>
        <Textinput
          label="Subject"
          class="mb-4"
          type="text"
          placeholder="Subject"
          name="subject"
          v-model.trim="newTodoText"
          :error="newtodoError"
        />

        <QuillEditor theme="snow" />

        <div class="text-right mt-4">
          <Button text="Send" btnClass="btn-dark"></Button>
        </div>
      </form>
    </Modal>
  </div>
</template>
<script setup>
import Button from "@/components/Button";
import Modal from "@/components/Modal";
import VueSelect from "@/components/Select/VueSelect";
import Textinput from "@/components/Textinput";
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import { v4 as uuidv4 } from "uuid";
import { useField, useForm } from "vee-validate";
import vSelect from "vue-select";
import {useEmailStore} from "@/store/email";
import * as yup from "yup";
import { assignOption } from "../../../constant/data";
import { computed } from "vue";
let store = useEmailStore();

const schema = yup.object({
  newTodoText: yup.string().required("Subject is required"),
  assign: yup.mixed().nullable().required("Please select One"),
});
const { handleSubmit } = useForm({
  validationSchema: schema,
});
const { value: newTodoText, errorMessage: newtodoError } =
  useField("newTodoText");

const { value: assign, errorMessage: errorassign } = useField("assign");

const sendEmail = handleSubmit(() => {
  store.sendEmail({
    id: uuidv4(),
    title: newTodoText.value,
    isDone: false,
    image: assign.value[0].image,
    isfav: false,
    sent: false,
    draft: false,
    spam: false,
    trash: false,
    personal: true,
    social: false,
    promotions: false,
    lastime: "12:20 pm",
    checked: false,
    busines: false,
  });
  newTodoText.value = "";
  assign.value = "";
  store.addModal = false;
});

const addModal = computed(() => store.addModal);
const closeTodo = () => {
  store.addModal = false;
};
</script>
<style lang="scss">
.ql-editor {
  min-height: 120px;
}
.ql-toolbar.ql-snow {
  @apply border-none p-0 mb-2;
}
.ql-container.ql-snow {
  @apply bg-[#FBFBFB] dark:bg-slate-900 border-none text-base;
}
.ql-editor {
  @apply border-slate-200 dark:border-slate-700 border rounded text-base;
}
.dark {
  .ql-snow .ql-stroke {
    @apply stroke-slate-300;
  }
  .ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label {
    @apply bg-slate-700;
  }
  .ql-snow.ql-toolbar button:hover,
  .ql-snow .ql-toolbar button:hover,
  .ql-snow.ql-toolbar button:focus,
  .ql-snow .ql-toolbar button:focus,
  .ql-snow.ql-toolbar .ql-picker-label:hover,
  .ql-snow .ql-toolbar .ql-picker-label:hover,
  .ql-snow.ql-toolbar .ql-picker-item:hover,
  .ql-snow .ql-toolbar .ql-picker-item:hover {
    @apply bg-slate-700;
  }
  .ql-picker-label {
    @apply text-slate-300;
  }
  .ql-snow .ql-picker.ql-expanded .ql-picker-label {
    @apply bg-slate-300 border-slate-700;
  }
}
</style>
