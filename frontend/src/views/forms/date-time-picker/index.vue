<template>
  <div class="grid grid-cols-1 gap-5">
    <Card title="Basic Select">
      <div class="space-y-5">
        <FromGroup label="Default Functionality" name="d1">
          <flat-pickr
            v-model="dateDefault"
            class="form-control"
            id="d1"
            placeholder="yyyy, dd M"
          />
        </FromGroup>
        <FromGroup label="Date & TIme" name="d2">
          <flat-pickr
            v-model="dateNtim"
            class="form-control"
            placeholder="Date & Time"
            id="d2"
            :config="{ enableTime: true, dateFormat: 'Y-m-d H:i' }"
          />
        </FromGroup>
        <FromGroup label="Time picker" name="d3">
          <flat-pickr
            class="form-control"
            id="d3"
            placeholder="Time picker"
            v-model="timePicker"
            :config="{ enableTime: true, noCalendar: true, dateFormat: 'H:i' }"
          />
        </FromGroup>
        <FromGroup label="Multiple Dates" name="d4">
          <flat-pickr
            class="form-control"
            id="d4"
            placeholder="Multiple Dates"
            v-model="multiDate"
            :config="{ mode: 'multiple', dateFormat: 'Y-m-d' }"
          />
        </FromGroup>
        <FromGroup label="Range" name="d5">
          <flat-pickr
            class="form-control"
            id="d5"
            placeholder="Multiple Dates"
            v-model="rangeDate"
            :config="{ mode: 'range' }"
          />
        </FromGroup>
        <FromGroup label="Date Range Picker" name="d5">
          <DateRangePicker />
        </FromGroup>
      </div>
    </Card>
  </div>
</template>
<script>
import Card from "@/components/Card";
import FromGroup from "@/components/FromGroup";
import DateRangePicker from "./DatePicker.vue";
export default {
  components: {
    Card,
    FromGroup,
    DateRangePicker,
  },
  data() {
    return {
      dateDefault: null,
      dateNtim: null,
      timePicker: null,
      multiDate: null,
      rangeDate: null,
    };
  },
};
</script>
<style lang=""></style>
