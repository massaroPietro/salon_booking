<template>
  <div>
    <Modal
      :activeModal="editModal"
      @close="store.closeEditModal()"
      title="Edit Task"
      centered
    >
      <form @submit.prevent="editTodo" class="space-y-4">
        <Textinput
          label="title"
          type="text"
          placeholder="Task Name"
          name="title"
          v-model.trim="store.editItem.title"
        />
        <div class="assagin space-y-4">
          <VueSelect label="Assignee">
            <vSelect
              :options="assignOption"
              label="title"
              v-model="store.editItem.image"
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
          <FromGroup label="Due Date" name="d1">
            <flat-pickr
              v-model="dateDefault"
              class="form-control"
              id="d1"
              placeholder="yyyy, dd M"
            />
          </FromGroup>

          <VueSelect label="Tag"
            ><vSelect
              :options="editCatagory"
              v-model="store.editItem.catagory"
              multiple
          /></VueSelect>
          <Textarea label="Description" placeholder="Description" />
        </div>

        <div class="ltr:text-right rtl:text-left">
          <Button
            text="Update"
            btnClass="btn-dark"
            :isDisabled="!isFromValid"
          ></Button>
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
import { useForm } from "vee-validate";
import { computed, ref } from "vue";
import vSelect from "vue-select";
import { useToast } from "vue-toastification";
import { assignOption, editCatagory } from "../../../constant/data";
import {useTodoStore} from "@/store/todo";

let store = useTodoStore();

// computed data
const editModal = computed(() => {
  return store.editModal;
});
const { handleSubmit } = useForm();

const toast = useToast();
const dateDefault = ref("");

const isFromValid = computed(() => {
  return (
    store.editItem.title.length > 0 &&
    store.editItem.image &&
    store.editItem.catagory
  );
});

const editTodo = handleSubmit(() => {
  if (isFromValid.value) {
    store.editTodo({
      id: store.editItem.id,
      title: store.editItem.title,
      isDone: false,

      image: store.editItem.image,
      catagory: store.editItem.catagory,
    });
    store.editModal = false;
    toast.success("Task updated", {
        timeout: 2000,
      });
  }
});
</script>
<style lang=""></style>
