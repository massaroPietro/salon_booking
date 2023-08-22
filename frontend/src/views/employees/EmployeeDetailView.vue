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
                class="md:h-[186px] md:w-[186px] h-[140px] w-[140px] md:ml-0 md:mr-0 ml-auto mr-auto md:mb-0 mb-4 rounded-full ring-4 ring-slate-100 relative"
            >
              <img
                  :src="employee.pic"
                  alt=""
                  class="w-full h-full object-cover rounded-full"
              />
              <router-link
                  to="/app/profile-setting"
                  class="absolute right-2 h-8 w-8 bg-slate-50 text-slate-600 rounded-full shadow-sm flex flex-col items-center justify-center md:top-[140px] top-[100px]"
              >
                <Icon icon="heroicons:pencil-square"/>
              </router-link>
            </div>
          </div>
          <div class="flex-1">
            <div
                class="text-2xl font-medium text-slate-900 dark:text-slate-200 mb-[3px]"
            >
              {{ employee.user.full_name }}
            </div>
            <div class="text-sm font-light text-slate-600 dark:text-slate-400">
              Front End Developer
            </div>
          </div>
        </div>
      </div>
      <!-- end profile box -->
      <!--      <div
                class="profile-info-500 md:flex md:text-start text-center flex-1 max-w-[516px] md:space-y-0 space-y-4"
            >
              <div class="flex-1">
                <div
                    class="text-base text-slate-900 dark:text-slate-300 font-medium mb-1"
                >
                  $32,400
                </div>
                <div class="text-sm text-slate-600 font-light dark:text-slate-300">
                  Total Balance
                </div>
              </div>
              &lt;!&ndash; end single &ndash;&gt;
              <div class="flex-1">
                <div
                    class="text-base text-slate-900 dark:text-slate-300 font-medium mb-1"
                >
                  200
                </div>
                <div class="text-sm text-slate-600 font-light dark:text-slate-300">
                  Board Card
                </div>
              </div>
              &lt;!&ndash; end single &ndash;&gt;
              <div class="flex-1">
                <div
                    class="text-base text-slate-900 dark:text-slate-300 font-medium mb-1"
                >
                  3200
                </div>
                <div class="text-sm text-slate-600 font-light dark:text-slate-300">
                  Calender Events
                </div>
              </div>
              &lt;!&ndash; end single &ndash;&gt;
            </div>-->
      <!-- profile info-500 -->
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
            </li>
          </ul>
        </Card>
      </div>
      <div class="lg:col-span-7 col-span-12">
        <Card title="" noborder>
          <WorkDaysTabsComponent :work-days="employee.work_days"/>
        </Card>
      </div>
    </div>
  </div>
</template>
<script>
import Card from "@/components/Card";
import Icon from "@/components/Icon";
import {useAuthStore} from "@/store/auth";
import apiEndpoints from "@/constant/apiEndpoints";
import axios from "@/plugins/axios";
import WorkDaysTabsComponent from "@/components/WorkDaysTabsComponent.vue";
import emitter from "@/plugins/mitt";

export default {
  name: "EmployeeDetailView",
  components: {
    WorkDaysTabsComponent,
    Card,
    Icon,
  },
  data() {
    return {
      employee: null,
      loading: false,
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
    this.getEmployee()
  },
  methods: {
    getEmployee() {
      let endpoint = apiEndpoints.employee(this.employeeID);
      let loader = this.$loading.show();
      axios.get(endpoint).then((response) => {
        loader.hide();
        if (response.data.salon !== this.authStore.getCurrentSalon().id) {
            emitter.emit('changeSalon', response.data.salon)
        } else {
          this.employee = response.data;
        }
      }).catch((err) => {
          console.log(err);
          loader.hide()
      })
    }
  }
};
</script>
<style lang="scss" scoped></style>
