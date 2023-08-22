<template>
  <div>
    <div
        class="pb-5 flex justify-between items-center"
    >
      <h6 class="card-title mb-0">{{ $t('generic.workHours') }}</h6>
      <div>
        <Button
            :text="$t('generic.add')"
            icon="heroicons-outline:plus"
            btnClass="btn-dark"
            @click="addWorkHours()"
        />
      </div>
    </div>
    <div>
      <form novalidate @submit.prevent="onSubmit()" class="text-right">
        <div
            v-for="(field, idx) in workDay.work_ranges"
            :key="field.key"
            class="grid grid-cols-12 gap-5 mb-5 items-end"
        >
          <div class="grid grid-cols-2 gap-5 items-end justify-end justify-items-end"
               :class="{'col-span-11': workDay.work_ranges.length > 1, 'col-span-12': workDay.work_ranges.length < 2}">
            <flat-pickr
                class="form-control"
                placeholder="Da"
                v-model="field.from_hour"
                :config="{ enableTime: true, noCalendar: true, dateFormat: 'H:i' }"
            />
            <flat-pickr
                class="form-control"
                placeholder="A"
                v-model="field.to_hour"
                :config="{ enableTime: true, noCalendar: true, dateFormat: 'H:i' }"
            />
          </div>

          <div class="flex items-center" v-if="workDay.work_ranges.length > 1">
            <button
                type="button"
                class="inline-flex items-center justify-center h-10 w-10 bg-danger-500 text-lg border rounded border-danger-500 text-white"
                @click="remove(idx)"
            >
              <Icon icon="heroicons-outline:trash"/>
            </button>
          </div>
        </div>

        <div class="ltr:text-right rtl:text-left">
          <Button
              :text="$t('generic.save')"
              btnClass="btn-dark"
              type="submit"
              v-if="isChanged && workRangesAreValid"
          />
        </div>

        <Alert v-if="!workRangesAreCompatible" type="danger" class="text-center">
          {{ $t('errors.insertValidHours') }}
        </Alert>
      </form>
    </div>
  </div>
</template>

<script>
import Textinput from "@/components/Textinput/index.vue";
import Icon from "@/components/Icon/index.vue";
import Card from "@/components/Card/index.vue";
import Button from "@/components/Button/index.vue";
import apiEndpoints from "@/constant/apiEndpoints";
import axios from "@/plugins/axios";
import {useToast} from "vue-toastification";
import Alert from "@/components/Alert/index.vue";
import emitter from "@/plugins/mitt";
export default {
  name: "WorkHoursFormRepeaterComponent",
  components: {Alert, Button, Card, Icon, Textinput},
  data() {
    return {
      initWorkDay: null
    };
  },
  props: {
    workDay: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const toast = useToast()
    return {toast}
  },
  created() {
    this.setInitWorkDay();
  },
  methods: {
    remove(index) {
      this.workDay.work_ranges.splice(index, 1);
    },
    work_ranges_are_changed() {
      const stringifiedList1 = this.initWorkDay.work_ranges.map((item) =>
          JSON.stringify(item)
      );
      const stringifiedList2 = this.workDay.work_ranges.map((item) =>
          JSON.stringify(item)
      );

      const sortedList1 = stringifiedList1.slice().sort();
      const sortedList2 = stringifiedList2.slice().sort();

      return JSON.stringify(sortedList1) !== JSON.stringify(sortedList2);
    },
    addWorkHours() {
      const workHours = {
        work_day: this.workDay.id,
        from_hour: null,
        to_hour: null
      }

      this.workDay.work_ranges.push(workHours);
    },
    onSubmit() {
      const endpoint = apiEndpoints.workDay(this.workDay.id);
      axios.put(endpoint, this.workDay).then((response) => {
        this.setInitWorkDay();
        this.toast.success(this.$t('app.salons.workHoursUpdated', {weekday: this.$t('weekDays.' + this.workDay.weekday)}))
      }).catch((err) => {
        console.log(err)
      })
    },
    setInitWorkDay() {
      this.initWorkDay = JSON.parse(JSON.stringify(this.workDay));
    },
  },
  computed: {
      emitter() {
          return emitter
      },
    workRangesAreCompatible() {
      let valid = true;
      this.workDay.work_ranges.forEach((workRange) => {
        if (workRange.from_hour !== null && workRange.to_hour !== null) {

          const [hours1, minutes1] = workRange.from_hour.split(":");
          const [hours2, minutes2] = workRange.to_hour.split(":");

          const from = new Date(0, 0, 0, hours1, minutes1);
          const to = new Date(0, 0, 0, hours2, minutes2);
          if (from >= to) {
            valid = false;
          }
        }
      })
      return valid;
    },
    isChanged() {
      if (this.workDay.work_ranges.length !== this.initWorkDay.work_ranges.length) {
        return true;
      }

      return this.work_ranges_are_changed();
    },
    workRangesAreValid() {
      let valid = true;
      this.workDay.work_ranges.forEach((work_range) => {
        if (work_range.from_hour === null || work_range.to_hour === null) {
          valid = false;
        }
        if (!this.workRangesAreCompatible) {
          valid = false;
        }
      })
      return valid;
    }
  },
}
</script>

