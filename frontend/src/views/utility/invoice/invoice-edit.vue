<template>
  <div>
    <Card title="Edit invoice">
      <h4 class="text-slate-900 dark:text-white text-xl mb-4">#89572935Kh</h4>
      <div class="grid lg:grid-cols-2 grid-cols-1 gap-5">
        <div class="grid lg:grid-cols-2 grid-cols-1 gap-5">
          <div
            class="lg:col-span-2 col-span-1 text-slate-600 dark:text-slate-300 text-xs font-medium"
          >
            Recipient info-500
          </div>
          <FromGroup label="Issued date" name="d1">
            <flat-pickr
              v-model="dateDefault"
              class="form-control"
              id="d1"
              placeholder="yyyy, dd M"
            />
          </FromGroup>
          <Textinput label="Name" type="text" placeholder="Add your name" />
          <Textinput label="Phone" type="text" placeholder="Add your phone" />
          <Textinput label="Email" type="email" placeholder="Add your email" />
          <div class="lg:col-span-2 col-span-1">
            <Textarea
              label="Address"
              type="email"
              placeholder="address"
              rows="2"
            />
          </div>
        </div>
        <div class="grid lg:grid-cols-2 grid-cols-1 gap-5">
          <div
            class="lg:col-span-2 col-span-1 text-slate-600 dark:text-slate-300 text-xs font-medium"
          >
            Owner info-500
          </div>

          <Textinput label="Name" type="text" placeholder="Add your name" />
          <Textinput label="Phone" type="text" placeholder="Add your phone" />
          <div class="lg:col-span-2 col-span-1">
            <Textinput
              label="Email"
              type="email"
              placeholder="Add your email"
            />
          </div>

          <div class="lg:col-span-2 col-span-1">
            <Textarea
              label="Address"
              type="email"
              placeholder="address"
              rows="2"
            />
          </div>
        </div>
      </div>
      <div class="my-6">
        <Repeater />
      </div>
      <Textarea
        label="Additional note"
        type="text"
        rows="2"
        placeholder="Note"
        class="lg:w-1/2"
      />
      <div class="ltr:text-right rtl:text-left space-x-3 rtl:space-x-reverse">
        <Button text="Save" btnClass="btn-dark" />
      </div>
    </Card>
  </div>
</template>
<script>
import Button from "@/components/Button";
import Card from "@/components/Card";
import FromGroup from "@/components/FromGroup";
import Textarea from "@/components/Textarea";
import Textinput from "@/components/Textinput";
import Repeater from "./module/repeater";
export default {
  components: {
    Button,
    Card,
    Textinput,
    FromGroup,
    Textarea,
    Repeater,
  },
};
</script>
<style lang=""></style>
