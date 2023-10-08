<template>
  <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
    <div class="lg:col-span-3 md:col-span-2 col-span-1">
      <h4 class="text-base text-slate-800 dark:text-slate-300 mb-6">
        {{ $t('booking.selectServices') }}
      </h4>
    </div>
    <ul class="divide-y divide-slate-100 dark:divide-slate-700">
      <li v-for="(service, i) in services" :key="i" class="block py-[8px]">
        <div class="flex space-x-2 rtl:space-x-reverse">
          <div class="flex-1 flex space-x-2 rtl:space-x-reverse">
            <div class="flex-none">
              <div class="h-8 w-8">
                <img
                    :src="service?.image"
                    alt=""
                    class="block w-full h-full object-cover rounded-full border hover:border-white border-transparent"
                />
              </div>
            </div>
            <div class="flex-1">
                    <span
                        class="block text-slate-600 text-sm dark:text-slate-300"
                    >{{ service?.name }}</span
                    >
              <span
                  class="block font-normal text-xs text-slate-500 mt-1"
              >
                              {{ humanizeDuration(service?.duration) }} &middot; {{ service?.price }}&euro;
                          </span
                          >
            </div>
          </div>
          <div class="flex-none mt-auto mb-auto">
            <Checkbox
                label=""
                v-model="service.selected"
                :value="service?.selected"
                @change="changeSelectedServices()"
            />
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Checkbox from "@/components/Checkbox/index.vue";
import {humanizeDuration} from "../../utils/utils";

export default {
  name: "ServicesListComponent",
  emits: ['update:modelValue'],
  methods: {
    humanizeDuration,
    changeSelectedServices() {
      this.$emit('update:modelValue', this.services.filter((service) => service.selected))
    }
  },
  components: {Checkbox},
  props: {
    services: {
      type: Array,
      required: true,
      default: [],
    }
  },
}
</script>
