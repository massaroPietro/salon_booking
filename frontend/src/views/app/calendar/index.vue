<template>
  <div>
    <Card>
      <div class="dashcode-calender">
        <FullCalendar
          ref="fullCalendar"
          :options="calendarOptions"
        ></FullCalendar>
      </div>
      <Modal
        labelClass="btn-outline-dark"
        :activeModal="showModal"
        @close="hideModal"
        title="Event"
      >
        <!-- :validation-schema="schema" -->
        <Form @submit="onSubmit">
          <div class="space-y-3">
            <Textinput
              v-model="event.title"
              type="text"
              label="Event Name"
              placeholder="Insert Event name"
            />

            <div class="fromGroup">
              <label class="form-label">Category</label>
              <select
                v-model="event.category"
                class="form-control"
                name="category"
              >
                <option
                  v-for="option in categories"
                  :key="option.backgroundColor"
                  :value="`${option.value}`"
                >
                  {{ option.name }}
                </option>
              </select>
            </div>
          </div>
          <div class="flex justify-between items-center mt-5">
            <Button
              text="close"
              btnClass="btn-light"
              @click="hideModal"
              type="button"
            />
            <Button
              text="save"
              btnClass="btn-success"
              type="submit"
              :isDisabled="!formisValid"
            />
          </div>
        </Form>
      </Modal>
      <Modal :activeModal="eventModal" @close="closeModal" title="Edit Event">
        <Form @submit="editSubmit">
          <div class="space-y-3">
            <Textinput
              v-model="editevent.editTitle"
              type="text"
              label="Event Name"
              placeholder="Insert Event name"
            />

            <div class="fromGroup">
              <label class="form-label">Category</label>
              <select
                v-model="editevent.editcategory"
                class="form-control"
                name="category"
              >
                <option
                  v-for="option in categories"
                  :key="option.backgroundColor"
                  :value="`${option.value}`"
                >
                  {{ option.name }}
                </option>
              </select>
            </div>
          </div>
          <div class="flex justify-between items-center mt-5">
            <div>
              <Button
                text="Delete"
                btnClass="btn-danger"
                type="button"
                @click="confirm"
              />
            </div>
            <div class="flex space-x-5">
              <Button
                text="close"
                btnClass="btn-light"
                @click="closeModal"
                type="button"
              />
              <Button
                text="save"
                btnClass="btn-success"
                @click="editSubmit"
                :isDisabled="!editformvIsvalid"
              />
            </div>
          </div>
        </Form>
      </Modal>
    </Card>
  </div>
</template>

<script>
import Card from "@/components/Card";
import Modal from "@/components/Modal";
import Button from "@/components/Button";
import Textinput from "@/components/Textinput";
// import "@fullcalendar/core/vdom"; // solves problem with Vite
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import { calendarEvents, categories } from "./Initialize-event";
import { Form } from "vee-validate";

export default {
  name: "calander",
  components: {
    FullCalendar,
    Card,
    Modal,
    Button,
    Form,
    Textinput,
  },

  data() {
    return {
      title: "Calendar",
      errors: [],
      calendarEvents: calendarEvents,
      calendarOptions: {
        headerToolbar: {
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
        },
        plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin],
        initialView: "dayGridMonth",
        themeSystem: "bootstrap",
        initialEvents: calendarEvents,
        editable: true,
        droppable: true,
        eventResizableFromStart: true,
        dateClick: this.dateClicked,
        eventClick: this.editEvent,
        eventsSet: this.handleEvents,
        weekends: true,
        selectable: true,
        selectMirror: true,
        dayMaxEvents: true,
      },
      currentEvents: [],
      showModal: false,
      eventModal: false,
      categories: categories,
      submitted: false,
      submit: false,
      newEventData: {},
      edit: {},
      deleteId: {},
      event: {
        title: "",
        category: "",
      },
      editevent: {
        editTitle: "",
        editcategory: "",
      },
    };
  },
  computed: {
    titleIsvalid() {
      return !!this.event.title;
    },
    categoryIsvalid() {
      return !!this.event.category;
    },
    formisValid() {
      return this.titleIsvalid && this.categoryIsvalid;
    },
    editformvIsvalid() {
      return this.editevent.editTitle && this.editevent.editcategory;
    },
  },
  methods: {
    onSubmit() {
      this.submitted = true;

      if (this.formisValid) {
        const title = this.event.title;
        const category = this.event.category;
        let calendarApi = this.newEventData.view.calendar;

        this.currentEvents = calendarApi.addEvent({
          id: this.newEventData.length + 1,
          title,
          start: this.newEventData.date,
          end: this.newEventData.date,
          classNames: [category],
        });
        this.successmsg();

        this.showModal = false;
        this.newEventData = {};
      }
      //console.log(this.errors);
      this.submitted = false;
      this.event = {};
    },
    // this.$swal
    // eslint-disable-next-line no-unused-vars
    hideModal(e) {
      this.submitted = false;
      this.showModal = false;
      this.event = {};
    },
    /**
     * Edit event modal submit
     */
    // eslint-disable-next-line no-unused-vars
    editSubmit(e) {
      this.submit = true;
      if (this.editformvIsvalid) {
        const editTitle = this.editevent.editTitle;
        const editcategory = this.editevent.editcategory;

        this.edit.setProp("title", editTitle);
        this.edit.setProp("classNames", editcategory);
        this.successmsg();
        this.eventModal = false;
      }
    },

    /**
     * Delete event
     */
    deleteEvent() {
      this.edit.remove();
      this.eventModal = false;
    },
    /**
     * Modal open for add event
     */
    dateClicked(info) {
      this.newEventData = info;
      this.showModal = true;
    },
    /**
     * Modal open for edit event
     */
    editEvent(info) {
      this.edit = info.event;
      this.editevent.editTitle = this.edit.title;
      this.editevent.editcategory = this.edit.classNames[0];
      this.eventModal = true;
    },

    closeModal() {
      this.eventModal = false;
    },

    confirm() {
      this.closeModal();
      this.$swal
        .fire({
          title: "Are you sure?",
          text: "You won't be able to delete this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#34c38f",
          cancelButtonColor: "#f46a6a",
          confirmButtonText: "Yes, delete it!",
          background: this.$store.themeSettingsStore.isDark
            ? "#1e293b"
            : "#fff",
        })
        .then((result) => {
          if (result.value) {
            this.deleteEvent();
            this.$swal.fire("Deleted!", "Event has been deleted.", "success");
          }
        });
    },

    /**
     * Show list of events
     */
    handleEvents(events) {
      this.currentEvents = events;
    },

    /**
     * Show success-500full Save Dialog
     */
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
</style>
