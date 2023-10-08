<template>
  <div>
    <h4 class="text-base text-slate-800 dark:text-slate-300 mb-6">
      {{ $t('booking.selectEmployee') }}
    </h4>
    <div class="grid gap-5 grid-cols-12">
      <Card
          v-for="(employee, i) in employees"
          :title="employee?.user?.full_name"
          :img="employee?.pic"
          imaClass="rounded-md"
          class-name="lg:col-span-4 col-span-12"
          overlay
          titleClass="2xl:pb-14"
          noborder
      >
        <div class="mt-[71px]">
          <Button
              :text="selectedEmployee?.id === employee?.id ? '&check;' : $t('generic.select')"
              @click="selectEmployee(employee)"
              type="button"
              btnClass="btn btn-sm bg-white text-slate-800"
          />
        </div>
      </Card>
    </div>

  </div>
</template>
<script>
import Card from "@/components/Card/index.vue";
import Button from "@/components/Button/index.vue";

export default {
  name: "EmployeesListComponent",
  emits: ['update:modelValue'],
  data() {
    return {
      selectedEmployee: null,
    };
  },
  components: {Button, Card},
  props: {
    employees: {
      type: Array,
      required: true
    }
  },
  methods: {

    selectEmployee(employee) {
      if (employee?.id === this.selectedEmployee?.id) {
        this.selectedEmployee = null;
      } else {
        this.selectedEmployee = employee;
      }
      this.$emit('update:modelValue', this.selectedEmployee)
    }
  }
}
</script>
