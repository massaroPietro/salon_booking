<template>
  <div class="space-y-5 profile-page" v-if="service">
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
                  :src="service.image"
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
              {{ service.name }}
            </div>
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
                <Icon icon="heroicons:currency-euro"/>
              </div>

              <div class="flex-1">
                <div
                    class="uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]"
                >
                  {{ $t('generic.price') }}
                </div>
                <span
                    class="text-base text-slate-600 dark:text-slate-50"
                >
                  {{ service.price }} &euro;
                </span>
              </div>
            </li>
            <li class="flex space-x-3 rtl:space-x-reverse">
              <div
                  class="flex-none text-2xl text-slate-600 dark:text-slate-300"
              >
                <Icon icon="heroicons:clock"/>
              </div>
              <div class="flex-1">
                <div
                    class="uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]"
                >
                  {{ $t('generic.duration') }}
                </div>
                <span
                    class="text-base text-slate-600 dark:text-slate-50"
                >
                  {{ humanizeDuration(service.duration) }}
                </span>
              </div>
            </li>
            <li class="flex space-x-3 rtl:space-x-reverse">
              <div
                  class="flex-none text-2xl text-slate-600 dark:text-slate-300"
              >
                <Icon icon="heroicons:user-group"/>
              </div>
              <div class="flex-1">
                <div
                    class="uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]"
                >
                  {{ $t('app.services.enabledEmployees') }}
                </div>
                <a
                    class="text-base text-slate-600 dark:text-slate-50"
                >
                  <ul>
                      <li v-for="employee in service.employees">- {{ authStore.getEmployee(employee).user.full_name }}</li>
                  </ul>
                </a>
              </div>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  </div>
</template>
<script>
import Card from "@/components/Card";
import Icon from "@/components/Icon";
import {useAuthStore} from "@/store/auth";
import WorkDaysTabsComponent from "@/components/WorkDaysTabsComponent.vue";
import emitter from "@/plugins/mitt";
import Button from "@/components/Button/index.vue";
import backendService from "@/utils/backendService";
import main from "@/mixins/main";
import {humanizeDuration} from "../../utils/utils";

export default {
  name: "DetailView",
  mixins: [main],
  components: {
    Button,
    WorkDaysTabsComponent,
    Card,
    Icon,
  },
  data() {
    return {
      service: null,
    };
  },
  setup() {
    const authStore = useAuthStore();
    return {authStore};
  },
  props: {
    serviceID: {
      type: String,
      required: true,
    }
  },
  created() {
    this.service = this.authStore.getService(this.serviceID);
    this.getService();
  },
  methods: {
    humanizeDuration,
    selectFile() {
      this.$refs.fileInput.click();
    },
    onFileSelected(event) {
      const file = event.target.files[0];
      const loader = this.$loading.show();
      const config = {
        success_callback: (response) => {
          loader.hide()
          this.service.image = response.data.image;
        }
      }
      backendService.updateServiceImage(this.serviceID, file, config);
    },
    getService() {
      const config = {
        success_callback: (response) => {
          if (response.data.salon !== this.authStore.getCurrentSalon.id) {
            emitter.emit('changeSalon', response.data.salon)
          } else {
            this.service = response.data
          }
        },
      }
      backendService.getService(this.serviceID, config)
    }
  }
};
</script>
