<template>
  <div :class="{'mt-32': !coreStore.onMobile}">

    <Image
        v-if="salon?.logo"
        :src="salon?.logo"
        :class="[coreStore.onMobile ? 'mb-4' : 'mb-10']"
        imageClass="rounded-md w-32 h-32 ml-auto mr-auto"
    />
    <Card title="">
      <div class="grid gap-5 grid-cols-12">
        <div v-if="!coreStore.onMobile" class="lg:col-span-3 col-span-12">
          <div
              class="flex z-[5] items-start relative flex-col lg:min-h-full md:min-h-[300px] min-h-[250px]"
          >
            <div
                class="relative z-[1] flex-1 last:flex-none"
                v-for="(item, i) in steps"
                :key="i"
            >
              <div
                  :class="`   ${
              stepNumber >= i
                ? 'bg-slate-900 text-white ring-slate-900 dark:bg-slate-900 dark:ring-slate-700  dark:ring-offset-slate-500 ring-offset-2'
                : 'bg-white ring-slate-900 ring-opacity-70  text-slate-900 dark:text-slate-300 text-opacity-70 dark:bg-slate-700 dark:ring-slate-700'
            }`"
                  class="transition duration-150 icon-box md:h-12 md:w-12 h-8 w-8 rounded-full flex flex-col items-center justify-center relative z-[66] ring-1 md:text-lg text-base font-medium"
              >
                <span v-if="stepNumber <= i"> {{ i + 1 }}</span>
                <span v-else class="text-3xl">
              <Icon icon="bx:check-double"/>
            </span>
              </div>

              <div
                  class="absolute top-0 left-1/2 -translate-x-1/2 h-full w-[2px]"
                  :class="
              stepNumber >= i
                ? 'bg-slate-900 dark:bg-slate-900'
                : 'bg-[#E0EAFF] dark:bg-slate-600'
            "
              ></div>
              <div
                  class="absolute top-0 ltr:left-full rtl:right-full ltr:pl-4 rtl:pr-4 text-base leading-6 md:mt-3 mt-1 transition duration-150 w-full"
                  :class="
              stepNumber >= i
                ? ' text-slate-900 dark:text-slate-300'
                : 'text-slate-500 dark:text-slate-300 dark:text-opacity-40'
            "
              >
                <span class="w-max block">{{ item.title }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="content-box lg:col-span-9 col-span-12">
          <form @submit.prevent="onSubmit()">
            <div v-show="stepNumber === 0">
              <ServicesListComponent :services="salon?.services" v-model="selectedServices"
                                     @change="onSelectedServicesChange()"/>
            </div>
            <div v-show="stepNumber === 1">
              <EmployeesListComponent ref="employeeListComponent" :employees="enabledEmployeesByService"
                                      v-model="selectedEmployee"/>
            </div>
            <div v-show="stepNumber === 2">
              <DateComponent :salon-slug="salonSlug" :employee="selectedEmployee"
                             :services="selectedServices.map((service) => service.id)" v-model="selectedDate"/>
            </div>
            <div
                class="mt-10"
                :class="stepNumber > 0 ? 'flex justify-between' : ' text-right'"
            >

              <Button
                  @click.prevent="prev()"
                  :text="$t('generic.back')"
                  btnClass="btn-dark mr-5"
                  v-if="this.stepNumber !== 0"
              />
              <span v-if="selectedServices.length > 0 && !coreStore.onMobile"
                    class="font-normal text-xs text-slate-500 mr-5 mt-auto mb-auto">
                    <span>
                {{ humanizeDuration(sumDurationsList(selectedServices.map((service) => service.duration))) }} &middot; {{
                        selectedServices.reduce((acc, service) => acc + service.price, 0)
                      }}&euro;
                    </span>
                    <span v-if="selectedEmployee && stepNumber > 0"> &middot; {{
                        selectedEmployee?.user?.full_name
                      }}</span>
                </span>
              <Button
                  :is-loading="submitLoading"
                  :text="nextButtonText"
                  :is-disabled="nextIsDisabled"
                  btnClass="btn-dark"
              />
            </div>
            <div v-if="selectedServices.length > 0 && coreStore.onMobile" class="grid grid-cols-12">
            <span
                class="font-normal text-xs text-slate-500 col-span-12 mr-auto ml-auto mt-5">
                    <span>
                {{ humanizeDuration(sumDurationsList(selectedServices.map((service) => service.duration))) }} &middot; {{
                        selectedServices.reduce((acc, service) => acc + service.price, 0)
                      }}&euro;
                    </span>
                    <span v-if="selectedEmployee && stepNumber > 0"> &middot; {{
                        selectedEmployee?.user?.full_name
                      }}</span>
                </span>
            </div>
          </form>
        </div>
      </div>
    </Card>
  </div>
</template>
<script>
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import Textarea from "@/components/Textarea/index.vue";
import InputGroup from "@/components/InputGroup/index.vue";
import Textinput from "@/components/Textinput/index.vue";
import Card from "@/components/Card/index.vue";
import backendService from "@/utils/backendService";
import Image from "@/components/Image/index.vue";
import {useAuthStore} from "@/store/auth";
import {useCoreStore} from "@/store/core";
import Column from "@/views/app/kanban/column";
import {humanizeDuration, sumDurationsList} from "../utils/utils";
import Checkbox from "@/components/Checkbox/index.vue";
import ServicesListComponent from "@/components/booking/ServicesListComponent.vue";
import EmployeesListComponent from "@/components/booking/EmployeesListComponent.vue";
import DatePicker from "@/views/forms/date-time-picker/DatePicker.vue";
import FromGroup from "@/components/FromGroup/index.vue";
import DateComponent from "@/components/booking/DateComponent.vue";
import emitter from "@/plugins/mitt";
import toast from "@/plugins/toasts";

export default {
  name: "BookingAppointmentView",
  props: {
    salonSlug: {
      type: String,
      required: true
    }
  },
  components: {
    DateComponent,
    FromGroup,
    DatePicker,
    EmployeesListComponent,
    ServicesListComponent,
    Checkbox,
    Image,
    Card,
    Textinput, InputGroup, Textarea,
    Button,
    Icon,
    Column
  },
  data() {
    return {
      salon: {},
      selectedServices: [],
      selectedEmployee: null,
      selectedDate: null,
      stepNumber: 0,
      submitLoading: false
    };
  },
  created() {
    this.getSalon();
  },
  methods: {
    onSelectedServicesChange() {
      this.selectedEmployee = null;
      this.$refs.employeeListComponent.selectedEmployee = null;
    },
    prev() {
      this.stepNumber--;
    },
    sumDurationsList,
    humanizeDuration,
    getSalon() {
      const config = {
        success_callback: (response) => {
          this.salon = response.data;
        },
      }
      backendService.getSalon(this.salonSlug, config)
    },
    onSubmit() {
      let totalSteps = this.steps.length;
      const isLastStep = this.stepNumber === totalSteps - 1;
      if (isLastStep) {
        if (this.authStore.isAuthenticated) {
          const data = {
            start: this.selectedDate,
            employee: this.selectedEmployee.id,
            services: this.selectedServices.map((service) => service.id)
          }
          const config = {
            success_callback: () => {
              toast.success(this.$t('app.appointments.appointmentAdded'))
            },
            finally_callback: () => {
              this.submitLoading = false;
            }
          }
          this.submitLoading = true;
          backendService.addAppointment(data, config, this.salonSlug)
        } else {
          emitter.emit("openAuthModal");
        }
      } else {
        this.stepNumber++;
      }
    },
  },
  setup() {
    const authStore = useAuthStore()
    const coreStore = useCoreStore();

    return {
      authStore,
      coreStore
    };
  },

  computed: {
    nextButtonText() {
      if (this.stepNumber !== this.steps.length - 1) {
        return this.$t('generic.next');
      } else {
        if (this.selectedDate && !this.authStore.isAuthenticated) {
          return this.$t('booking.signInToBooking');
        } else {
          return this.$t('generic.book');
        }
      }
    },
    enabledEmployeesByService() {
      let employees = [];
      if (this.selectedServices?.length === 0) {
        return employees
      }
      const selectedServices = this.selectedServices.map((service) => service.id);
      this.salon?.employees?.forEach((employee) => {
        const employeeServices = employee?.services?.map((service) => {
          return service?.id || service;
        })
        const enabled = selectedServices.every((service) => employeeServices.includes(service));
        if (enabled) {
          employees.push(employee);
        }
      })
      return employees;
    },
    nextIsDisabled() {
      if (this.stepNumber === 0 && this.selectedServices?.length === 0 && this.enabledEmployeesByService.length === 0) {
        return true
      }
      if (this.stepNumber === 1 && this.selectedEmployee === null) {
        return true
      }
      if (this.stepNumber === 2 && this.selectedDate === null) {
        return true;
      }
      return false;
    },
    steps() {
      return [
        {
          id: 0,
          title: this.$t('app.menuItems.services'),
        },
        {
          id: 1,
          title: this.$t('generic.operator'),
        },
        {
          id: 2,
          title: this.$t('generic.date'),
        },
      ];
    }
  },
};
</script>
