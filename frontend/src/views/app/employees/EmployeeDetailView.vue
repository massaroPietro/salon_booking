<template>
  <div class="space-y-5 profile-page" v-if="employee">
    <div
        class="profiel-wrap px-[35px] pb-10 md:pt-[84px] pt-10 rounded-lg bg-white dark:bg-slate-800 lg:flex lg:space-y-0 space-y-6 justify-between items-end relative z-[1]"
    >
      <div
          class="bg-slate-900 dark:bg-slate-700 absolute left-0 top-0 md:h-1/2 h-[150px] w-full z-[-1] rounded-t-lg"
      ></div>
      <div class="profile-box flex-none md:text-start text-center">
        <div class="md:flex items-end md:space-x-6 rtl:space-x-reverse">
          <div class="flex-none">
            <div
                    @click="selectFile()"
                class="md:h-[186px] md:w-[186px] h-[140px] w-[140px] md:ml-0 md:mr-0 ml-auto mr-auto md:mb-0 mb-4 rounded-full ring-4 ring-slate-100 relative cursor-pointer"
            >
              <img
                  :src="employee.pic"
                  alt=""
                  class="w-full h-full object-cover rounded-full"
              />
              <div
                  class="absolute right-2 h-8 w-8 bg-slate-50 text-slate-600 rounded-full shadow-sm flex flex-col items-center justify-center md:top-[140px] top-[100px]"
              >
                <Icon icon="heroicons:pencil-square"/>
                <input
                    type="file"
                    ref="fileInput"
                    style="display: none"
                    @change="onFileSelected"
                />
              </div>
            </div>
          </div>
          <div class="flex-1 ">
            <div
                class="text-2xl font-medium text-slate-900 dark:text-slate-200 mb-[3px]"
            >
              {{ employee.user.full_name }}
            </div>

            <span
                class="bg-opacity-20 mr-1 capitalize font-normal text-xs leading-4 px-[10px] py-[2px] rounded-full inline-block text-info-500 bg-info-500"
                v-if="employee.user.id === authStore.user.id"
            >
                    {{ $t('generic.you') }}
                  </span>

            <span
                class="bg-opacity-20 mr-1 capitalize font-normal text-xs leading-4 px-[10px] py-[2px] rounded-full inline-block text-danger-500 bg-danger-500"
                v-if="!employee.email_verified"
            >
                    {{ $t('generic.emailNotVerified') }}
                  </span>

          </div>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-12 gap-6">
      <div class="lg:col-span-5 col-span-12">
        <Card title="Info">
          <ul class="list space-y-8">
            <li class="flex space-x-3 rtl:space-x-reverse">
              <div
                  class="flex-none text-2xl text-slate-600 dark:text-slate-300"
              >
                <Icon icon="heroicons:envelope"/>
              </div>
              <div class="flex-1">
                <div
                    class="uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]"
                >
                  EMAIL
                </div>
                <a
                    :href="employee.user.email"
                    class="text-base text-slate-600 dark:text-slate-50"
                >
                  {{ employee.user.email }}
                </a>
              </div>
              <Button
                  v-if="!employee.email_verified"
                  @click="sendVerificationEmail(employee.user.email)"
                  :text="$t('generic.resendEmail')"
                  btnClass="btn-success"
              />
            </li>
          </ul>
        </Card>
      </div>
      <div class="lg:col-span-7 col-span-12">
        <Card title="" noborder>
          <WorkDaysTabsComponent :key="reload" :work-days="employee.work_days" class=""/>
        </Card>
      </div>
    </div>
  </div>
</template>
<script>
import Card from "@/components/Card/index.vue";
import Icon from "@/components/Icon/index.vue";
import {useAuthStore} from "@/store/auth";
import apiEndpoints from "@/constant/apiEndpoints";
import axios from "@/plugins/axios";
import WorkDaysTabsComponent from "@/components/WorkDaysTabsComponent.vue";
import emitter from "@/plugins/mitt";
import Button from "@/components/Button/index.vue";
import backendService from "@/utils/backendService";
import main from "@/mixins/main";

export default {
  name: "EmployeeDetailView",
  mixins: [main],
  components: {
    Button,
    WorkDaysTabsComponent,
    Card,
    Icon,
  },
  data() {
    return {
      resendVerificationEmailLoading: false,
      loading: null,
      reload: 1,
      employee: null,
    };
  },
  setup() {
    const authStore = useAuthStore();
    return {authStore};
  },
  props: {
    employeeID: {
      type: String,
      required: true,
    }
  },
  created() {
    this.employee = this.authStore.getEmployee(this.employeeID);
    this.getEmployee();
  },
  methods: {
    sendVerificationEmail(email) {
      this.resendVerificationEmailLoading = true;
      const config = {
        finally_callback: () => {
          this.resendVerificationEmailLoading = false;
        }
      }
      backendService.resendVerificationEmail(email, config)
    },
    getEmployee() {
      let loader = null;
      if (!this.employee?.work_days) {
        loader = this.$loading.show();
      }
      const config = {
        success_callback: (response) => {
          if (response.data.salon !== this.authStore.getCurrentSalon.id) {
            emitter.emit('changeSalon', response.data.salon)
          } else {
            this.employee = response.data
          }
          this.reload += 1;
        },
        finally_callback: () => {
          if (loader) {
            loader.hide();
          }
        }
      }
      backendService.getEmployee(this.employeeID, config)
    },
    selectFile() {
      this.$refs.fileInput.click();
    },
    onFileSelected(event) {
      const file = event.target.files[0];
      const loader = this.$loading.show();
      const config = {
          success_callback: (response) => {
              loader.hide()
              this.employee.pic = response.data.pic;
          }
      }
      backendService.updateEmployeePic(this.employeeID, file, config);
    },
  }
};
</script>
