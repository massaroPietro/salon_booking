<template>
  <div>
    <Card bodyClass="p-0">
      <header
        class="border-b px-4 border-slate-100 dark:border-slate-700 pt-4 pb-3 flex justify-between items-center"
      >
        <h6 class="card-title mb-0">Repeating Forms</h6>
        <div>
          <Button
            text="Add new"
            icon="heroicons-outline:plus"
            btnClass="btn-dark"
            @click="push('')"
          />
        </div>
      </header>
      <div class="p-6">
        <form @submit="onSubmit" novalidate>
          <div
            v-for="(field, idx) in fields"
            :key="field.key"
            class="lg:grid-cols-3 md:grid-cols-2 grid-cols-1 grid gap-5 mb-5 last:mb-0"
          >
            <Textinput
              label="First Name"
              type="text"
              :name="`name[${idx}]`"
              placeholder="First Name"
            />
            <Textinput
              label="last Name"
              type="text"
              :name="`name[${idx}]`"
              placeholder="Last Name"
            />

            <div class="flex justify-between items-end space-x-5">
              <Textinput
                label="Phone"
                type="text"
                :name="`name[${idx}]`"
                placeholder="Phone"
                class="flex-1"
              />
              <div class="flex-none relative">
                <button
                  type="button"
                  class="inline-flex items-center justify-center h-10 w-10 bg-danger-500 text-lg border rounded border-danger-500 text-white"
                  @click="remove(idx)"
                >
                  <Icon icon="heroicons-outline:trash" />
                </button>
              </div>
            </div>
          </div>

          <div class="ltr:text-right rtl:text-left">
            <Button
              text="Submit"
              btnClass="btn-dark"
              :isDisabled="fields.length === 0"
            />
          </div>
        </form>
      </div>
    </Card>
  </div>
</template>
<script setup>
import { useForm, useFieldArray } from "vee-validate";
import Button from "@/components/Button";
import Card from "@/components/Card";
import Textinput from "@/components/Textinput";
import Icon from "@/components/Icon";

const { handleSubmit } = useForm({
  initialValues: {
    links: ["https://github.com/logaretm"],
  },
});
const { remove, push, fields } = useFieldArray("links");
const onSubmit = handleSubmit(() => {});
</script>
