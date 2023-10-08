<template>
  <h4 class="text-base text-slate-800 dark:text-slate-300 mb-6">
    {{ $t('booking.selectDate') }}
  </h4>
  <div class="grid gap-5 grid-cols-12">
    <FromGroup label="" class="col-span-12 lg:mr-auto lg:ml-auto" :class="[selectedDate ? 'mt-6' : 'my-24']">
      <input type="date" v-model="selectedDate" class="form-control"
             @change="getAvailableSlots">
    </FromGroup>

    <div v-if="selectedDate" class="col-span-12 mr-auto ml-auto mt-24">
      <div v-if="loading">
        <div role="status">
          <svg aria-hidden="true"
               class="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-black-500"
               viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"/>
            <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"/>
          </svg>
          <span class="sr-only">Loading...</span>
        </div>
      </div>
      <div v-else>
        <div class="grid gap-5 grid-cols-12">
          <Button v-for="slot in availableSlots" :text="slot.time"
                  class="col-span-3"
                  type="button"
                  :btn-class="selectedSlot?.time === slot.time ? 'btn-dark' : 'btn-outline-dark'"
                  @click="selectSlot(slot)"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FromGroup from "@/components/FromGroup/index.vue";
import main from "@/mixins/main";
import backendService from "@/utils/backendService";
import Button from "@/components/Button/index.vue";

export default {
  name: "DateComponent",
  props: {
    salonSlug: {
      type: String,
      required: true
    },
    services: {
      type: Array,
      required: true
    },
    employee: {
      type: Object,
      required: true
    },
  },
  components: {Button, FromGroup},
  mixins: [main],
  emits: ['update:modelValue'],
  data() {
    return {
      selectedDate: null,
      selectedSlot: null,
      availableSlots: [
        {
          time: "13:00",
        },
        {
          time: "13:30",
        },
        {
          time: "14:00",
        },
        {
          time: "16:00",
        },
        {
          time: "17:00",
        }
      ],
    }
  },
  methods: {
    selectSlot(slot) {
      this.selectedSlot = slot;
      let date = this.selectedDate.split('-');
      const time = slot.time.split(':');

      this.$emit('update:modelValue', new Date(
          date[0],
          date[1] - 1,
          date[2],
          time[0],
          time[1]
      ));
    },
    getAvailableSlots(newDate) {
      if (this.isValidDate(this.selectedDate)) {

        const config = {
          dataTarget: this.availableSlots,
          loader: this.toggleLoading,
        }

        const data = {
          salon: this.salonSlug,
          employee: this.employee?.id,
          services: this.services,
          date: this.selectedDate,
        }

        backendService.getAvailableSlots(data, config);

      }
    },
    isValidDate(dateString) {
      const datePattern = /^\d{4}-\d{2}-\d{2}$/;
      return datePattern.test(dateString);
    }

  }
}
</script>


<style scoped>

</style>
