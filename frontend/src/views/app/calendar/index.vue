<template>
  <div v-if="!authStore.isCurrentSalonOwner() || (authStore.getCurrentSalon && authStore.getCurrentSalon.employees)">
    <transition name="slide-fade" mode="out-in">
      <div class="fixed bottom-0 left-0 mx-4 mb-4" v-if="eventOvered" style="z-index: 999">
        <Card v-if="eventOvered" gapNull bodyClass="p-0"
              class-name="border border-b border-secondary-500 dark:border-slate-700 pb-5 max-w-lg">
          <header class="border-b px-4 pt-4 pb-3 flex items-center border-secondary-500">
      <span class="text-3xl inline-block ltr:mr-2 rtl:ml-2 text-secondary-500">
        <Icon :icon="'heroicons-outline:information-circle'"/>
      </span>
            <h6 class="card-title mb-0 text-secondary-500">{{ eventOvered.title }}</h6>
          </header>
          <div class="py-3 px-5">
            <div class="card-title2">{{ eventOvered.title }}</div>
            Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod tempor incididun ut labore et
            dolor
            magna aliqua.
          </div>
        </Card>
      </div>
    </transition>
    <div
        :class="{'flex justify-around gap-4': authStore.isCurrentSalonOwner() && authStore.getCurrentSalon.employees.length > 1}">
      <div v-if="authStore.isCurrentSalonOwner() && authStore.getCurrentSalon.employees.length > 1" class="w-2/12">
        <Card
            title="Card title"
            :img="authStore.getCurrentSalon.logo"
            subtitle="This is a subtitle"
            imaClass="rounded-t-md w-full"
            imgTop
            gapNull
            noborder
        >
          <p>Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod
            tempor incididun ut .</p>
          <div class="mt-4 space-x-4 rtl:space-x-reverse">
            <router-link to="#" class="btn-link">Learn more</router-link>
            <router-link to="#" class="btn-link">Another link</router-link>
          </div>
        </Card>
      </div>
      <div :class="{'w-10/12': authStore.isCurrentSalonOwner() && authStore.getCurrentSalon.employees.length > 1}">
        <Card>
          <div class="dashcode-calender">
            <FullCalendar
                ref="fullCalendar"
                :options="calendarOptions"
            ></FullCalendar>
          </div>
          <appointment-modal :appointment="appointment" :edit-mode="appointmentModalEditMode"
                             @deleted="deleteAppointment"/>
        </Card>
      </div>
    </div>

  </div>
</template>

<script>
import Icon from "@/components/Icon";
import Card from "@/components/Card";
import Modal from "@/components/Modal";
import Button from "@/components/Button";
import Textinput from "@/components/Textinput";
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import {categories} from "./Initialize-event";
import {Form} from "vee-validate";
import itLocale from "@fullcalendar/core/locales/it";
import Loading from 'vue-loading-overlay';
import {useAuthStore} from "@/store/auth";
import backendService from "@/utils/backendService";
import AppointmentModal from "@/components/modals/AppointmentModal.vue";
import FromGroup from "@/components/FromGroup/index.vue";
import VueSelect from "@/components/Select/VueSelect.vue";
import emitter from "@/plugins/mitt";

export default {
  name: "calander",
  components: {
    VueSelect,
    FromGroup,
    AppointmentModal,
    FullCalendar,
    Card,
    Modal,
    Button,
    Form,
    Textinput,
    Loading,
    Icon
  },
  setup() {
    const authStore = useAuthStore();
    return {authStore};
  },
  data() {
    return {
      title: "Calendar",
      eventOvered: null,
      abortController: null,
      appointment: {},
      appointmentModalEditMode: false,
      event: null
    };
  },
  computed: {
    calendarLocale() {
      return this.$i18n.locale === 'it' ? itLocale : "";
    },
    calendarOptions() {
      return {
        headerToolbar: {
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
        },
        plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin],
        initialView: "dayGridMonth",
        themeSystem: "bootstrap",
        events: this.authStore.getAppointments,
        locale: this.calendarLocale,
        editable: false,
        droppable: true,
        dateClick: this.authStore.isCurrentSalonOwner() ? this.dateClicked : "",
        eventClick: this.onClickEvent,
        datesSet: this.onChangeDates,
        eventMouseEnter: this.eventMouseEnter,
        eventDrop: this.onEventDrop,
        eventDurationEditable: false,
        eventStartEditable: true,
        eventResizableFromStart: true,
        eventDragStart: this.onEventDragStart,
        eventMouseLeave: this.eventMouseLeave,
        weekends: true,
        selectable: this.authStore.isCurrentSalonOwner(),
        selectMirror: true,
        dayMaxEvents: true,
        eventDisplay: "block"
      }
    },
  },
  methods: {
    dateClicked(event) {
      this.appointment.start = event.date;
      this.appointment.employee = null;
      this.appointment.services = []
      this.appointmentModalEditMode = false;
      this.event = event
      emitter.emit('openAppointmentModal')
    },
    onClickEvent(event) {
      this.event = event
      this.appointment.id = event.event.id;
      this.appointment.start = event.event.start;
      this.appointment.services = event.event.extendedProps.services;
      this.appointment.employee = event.event.extendedProps.employee;
      this.appointmentModalEditMode = true;
      emitter.emit('openAppointmentModal')
    },
    onEventDragStart() {
      this.eventOvered = null;
    },
    deleteAppointment() {
      this.event.event.remove();
    },
    onEventDrop(dropEvent) {
      this.eventOvered = null;
      const config = {
        success_callback: (response) => {
          dropEvent.event.setStart(response.data.start)
          dropEvent.event.setEnd(response.data.end)
        },
        error_callback: () => {
          dropEvent.revert();
        },
        finally_callback: () => {
          this.removeToolbarLoader();
        }
      }

      const data = {
        id: dropEvent.event.id,
        start: dropEvent.event.start,
      }

      this.setToolbarLoader();
      backendService.updateAppointment(data, config)
    },
    eventMouseEnter(event) {
      if (event) {
        this.eventOvered = event.event
      }
    },
    eventMouseLeave() {
      this.eventOvered = null
    },
    onChangeDates(interval) {
      let aborted = false;
      if (this.abortController) {
        this.abortController.abort();
        aborted = true;
      }
      this.abortController = new AbortController();
      const config = {
        params: {
          start: new Date(interval.start).getTime(),
          end: new Date(interval.end).getTime(),
        },
        signal: this.abortController.signal,
        success_callback: () => {
          if (this.$refs.fullCalendar) {
            this.removeToolbarLoader();
          }
        },
        finally_callback: () => {
          if (this.$refs.fullCalendar && !aborted) {
            this.removeToolbarLoader();
          }
        }
      }
      if (this.$refs.fullCalendar) {
        this.setToolbarLoader();
      }
      backendService.getAppointments(config)
    },
    successmsg() {
      this.$swal.fire({
        position: "center",
        icon: "success",
        title: "Event has been saved",
        showConfirmButton: false,
        background: this.$store.themeSettingsStore.isDark ? "#1e293b" : "#fff",
        timer: 1000,
      });
    },
    setToolbarLoader() {
      const loadingElement = this.$refs.fullCalendar.$el.querySelector('#fc-button-loading');
      if (!loadingElement) {
        const toolbarChunk = this.$refs.fullCalendar.$el.querySelector('.fc-toolbar-chunk:first-child');
        const newElementHTML = `<span class="fc-button" style="padding: 0px 12px 0px 12px !important;" id="fc-button-loading">
<div class="text-center">
    <div role="status">
        <svg aria-hidden="true" class="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-black-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
        <span class="sr-only">Loading...</span>
    </div>
</div>
</span>`;
        toolbarChunk.insertAdjacentHTML('beforeend', newElementHTML);
      }
    },
    removeToolbarLoader() {
      const loadingElement = this.$refs.fullCalendar.$el.querySelector('#fc-button-loading');
      if (loadingElement) {
        loadingElement.remove()
      }
    },
  },
};
</script>
<style lang="scss">
.fc-toolbar-chunk button {
  height: 50px;
  //min-width: 70px;
  &.fc-prev-button {
    &:after {
      // content: url("https://api.iconify.design/akar-icons/chevron-left.svg?color=white&width=24");
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }

  &.fc-next-button {
    &:after {
      //content: url("https://api.iconify.design/akar-icons/chevron-right.svg?color=white&width=24");
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
}

.fc-button {
  font-size: 14px !important;
  line-height: 14px !important;
  height: auto !important;
  text-transform: capitalize !important;
  font-family: Inter !important;
  padding: 12px 20px 12px 20px !important;
}

.fc .fc-button-primary {
  color: #000 !important;

  &:hover {
    color: #fff !important;
  }
}

.fc .fc-button-primary.fc-button-active {
  color: #fff !important;
}

.dark {
  .fc .fc-button-primary {
    color: #fff !important;
  }
}

.fc .fc-button-primary {
  background: transparent !important;
  @apply dark:text-white border-slate-100 dark:border-slate-700;
}

.fc .fc-button-primary:not(:disabled):active,
.fc .fc-button-primary:not(:disabled).fc-button-active,
.fc .fc-button-primary:hover {
  background: #111112 !important;
}

.dark {
  .fc .fc-button-primary:not(:disabled):active,
  .fc .fc-button-primary:not(:disabled).fc-button-active,
  .fc .fc-button-primary:hover {
    background: #0f172a !important;
  }
}

.fc .fc-button-primary:disabled {
  background: #a0aec0 !important;
  border-color: #a0aec0 !important;
  @apply cursor-not-allowed;
}

.dark {
  .fc .fc-button-primary:disabled {
    background: #334155 !important;
    border-color: #334155 !important;
  }
}

.fc .fc-daygrid-day.fc-day-today {
  background: rgba(95, 99, 242, 0.04) !important;
}

.dark {
  .fc .fc-daygrid-day.fc-day-today {
    background: #334155 !important;
  }
}

.fc .fc-button-primary:focus {
  box-shadow: none !important;
}

.fc-theme-standard .fc-scrollgrid {
  border-color: #eef1f9 !important;
}

.dark {
  .fc-theme-standard .fc-scrollgrid {
    border-color: #334155 !important;
  }
}

.fc-theme-standard td,
.fc-theme-standard th {
  @apply border-slate-100 dark:border-slate-700;
}

.fc-col-header-cell .fc-scrollgrid-sync-inner {
  @apply bg-slate-50 dark:bg-slate-700  text-xs text-slate-500 dark:text-slate-300 font-normal py-3;
}

.fc-daygrid-day-top {
  @apply text-sm px-3 py-2  text-slate-900 dark:text-white font-normal;
}

.fc-h-event .fc-event-main-frame {
  @apply justify-center text-center w-max mx-auto;
  .fc-event-time {
    @apply font-normal flex-none;
  }
}

.fc-event-time {
  @apply text-sm font-normal;
}

.fc-event-title {
  font-size: 14px !important;
  font-weight: 300 !important;
}

.fc .fc-toolbar-title {
  @apply text-lg font-normal text-slate-600 dark:text-slate-300;
}

// event css
.fc-daygrid-event-dot {
  @apply hidden;
}

.dashcode-calender {
  .bg-primary-500 {
    @apply bg-[#4669FA] border-none text-white text-center px-2 font-medium text-sm;
  }

  .bg-secondary-500 {
    @apply bg-[#A0AEC0] border-none text-white text-center px-2 font-medium text-sm;
  }

  .bg-danger-500 {
    @apply bg-[#F1595C] border-none text-white text-center px-2 font-medium text-sm;
  }

  .bg-info {
    @apply bg-[#0CE7FA] border-none text-white text-center px-2 font-medium text-sm;
  }

  .bg-warning-500 {
    @apply bg-[#FA916B] border-none text-white text-center px-2 font-medium text-sm;
  }

  .bg-success-500 {
    @apply bg-[#50C793] border-none text-white text-center px-2 font-medium text-sm;
  }

  .bg-slate-800 {
    @apply bg-[#222] border-none text-white text-center px-2 font-medium text-sm;
  }
}

@media (max-width: 981px) {
  .fc-button-group,
  .fc .fc-toolbar {
    display: block !important;
  }
  .fc .fc-toolbar {
    @apply space-y-4;
  }
  .fc-toolbar-chunk {
    @apply space-y-4;
  }
  .fc .fc-button {
    padding: 0.4em 0.65em !important;
  }
}

.fc .fc-timegrid-axis-cushion,
.fc .fc-timegrid-slot-label-cushion {
  @apply dark:text-slate-300;
}

.fc .fc-list-event:hover td {
  @apply bg-inherit;
}

.fc .fc-list-event-dot {
  @apply hidden;
}

.fc-direction-ltr .fc-list-day-text,
.fc-direction-rtl .fc-list-day-side-text,
.fc-direction-ltr .fc-list-day-side-text,
.fc-direction-rtl .fc-list-day-text {
  font-size: 16px;
  font-weight: 500;
}

.slide-fade-enter-active {
  animation: coming 0.3s;
  opacity: 0;
}

.slide-fade-leave-active {
  animation: going 0.2s;
}

@keyframes going {
  from {
    transform: translate3d(0, 0, 0) scale(1);
  }
  to {
    transform: translate3d(0, 4%, 0) scale(0.93);
    opacity: 0;
  }
}

@keyframes coming {
  from {
    transform: translate3d(0, 4%, 0) scale(0.93);
    opacity: 0;
  }
  to {
    transform: translate3d(0, 0, 0) scale(1);
    opacity: 1;
  }
}
</style>
