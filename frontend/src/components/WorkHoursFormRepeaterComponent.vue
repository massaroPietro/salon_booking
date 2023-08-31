<template>
  <div>
    <div
        class="pb-5 flex justify-between items-center"
    >
      <h6 class="card-title mb-0">{{ $t('generic.workHours') }}</h6>
      <div class="flex">
        <Button
            v-if="workDay.work"
            icon="heroicons-outline:check"
            text="Lavorativo"
            btnClass="btn-dark mr-3"
            iconPosition="right"
            @click="workDay.work = !workDay.work"
        />
        <Button
            v-else
            icon="heroicons-outline:x"
            text="Non lavorativo"
            btnClass="btn-dark mr-3"
            iconPosition="right"
            @click="workDay.work = !workDay.work"
        />
        <Button
            :text="$t('generic.add')"
            icon="heroicons-outline:plus"
            btnClass="btn-dark"
            @click="addWorkHours()"
        />
      </div>
    </div>
    <div>
      <form novalidate @submit.prevent="onSubmit()" class="text-right" v-if="workDay.work">
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
import {useToast} from "vue-toastification";
import Alert from "@/components/Alert/index.vue";
import emitter from "@/plugins/mitt";
import backendService from "@/utils/backendService";
import Switch from "@/components/Switch/index.vue";

export default {
  name: "WorkHoursFormRepeaterComponent",
  components: {Switch, Alert, Button, Card, Icon, Textinput},
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
      const stringifiedList1 = this.initWorkDay.work_ranges.map((item) => {
        const newItem = JSON.parse(JSON.stringify(item));
        if (newItem.from_hour && newItem.from_hour.length === 8) {
          newItem.from_hour = newItem.from_hour.slice(0, -3);
        }
        if (newItem.to_hour && newItem.to_hour.length === 8) {
          newItem.to_hour = newItem.to_hour.slice(0, -3);
        }
        return JSON.stringify(newItem);
      });

      const stringifiedList2 = this.workDay.work_ranges.map((item) => {
        const newItem = JSON.parse(JSON.stringify(item));
        if (newItem.from_hour && newItem.from_hour.length === 8) {
          newItem.from_hour = newItem.from_hour.slice(0, -3);
        }
        if (newItem.to_hour && newItem.to_hour.length === 8) {
          newItem.to_hour = newItem.to_hour.slice(0, -3);
        }
        return JSON.stringify(newItem);
      });

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
      const callbacks = {
        success_callback: () => {
          this.setInitWorkDay();
          this.toast.success(this.$t('app.salons.workHoursUpdated', {weekday: this.$t('weekDays.' + this.workDay.weekday)}))
        }
      }

      backendService.updateWorkDay(this.workDay.id, this.workDay, callbacks);
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
      for (let i = 0; i < this.workDay.work_ranges.length; i++) {
        const workRange1 = this.workDay.work_ranges[i];
        if (workRange1.from_hour !== null && workRange1.to_hour !== null) {
          const [hours1, minutes1] = workRange1.from_hour.split(":");
          const [hours2, minutes2] = workRange1.to_hour.split(":");
          const from1 = new Date(0, 0, 0, hours1, minutes1);
          const to1 = new Date(0, 0, 0, hours2, minutes2);
          if (from1 >= to1) {
            return false;
          }
          for (let j = i + 1; j < this.workDay.work_ranges.length; j++) {
            const workRange2 = this.workDay.work_ranges[j];

            if (workRange2.from_hour !== null && workRange2.to_hour !== null) {
              const [hours3, minutes3] = workRange2.from_hour.split(":");
              const [hours4, minutes4] = workRange2.to_hour.split(":");

              const from2 = new Date(0, 0, 0, hours3, minutes3);
              const to2 = new Date(0, 0, 0, hours4, minutes4);
              if ((from2 >= from1 && from2 < to1) || (to2 > from1 && to2 <= to1)) {
                return false;
              }
            }
          }
        }
      }

      return true;
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

