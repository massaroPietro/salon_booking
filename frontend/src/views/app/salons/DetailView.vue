<template>
  <div class="space-y-5 profile-page" v-if="salon">
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
                  :src="salon?.logo"
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
              {{ salon.name }}
            </div>
          </div>
        </div>
      </div>
    </div>
      {{ salon }}
  </div>
</template>
<script>
import Card from "@/components/Card/index.vue";
import Icon from "@/components/Icon/index.vue";
import {useAuthStore} from "@/store/auth";
import WorkDaysTabsComponent from "@/components/WorkDaysTabsComponent.vue";
import Button from "@/components/Button/index.vue";
import backendService from "@/utils/backendService";
import main from "@/mixins/main";
import AddServiceModal from "@/components/modals/AddServiceModal.vue";

export default {
  name: "DetailView",
  mixins: [main],
  components: {
    AddServiceModal,
    Button,
    WorkDaysTabsComponent,
    Card,
    Icon,
  },
  data() {
    return {
      salon: null,
    };
  },
  setup() {
    const authStore = useAuthStore();
    return {authStore};
  },
  props: {
    salonSlug: {
      type: String,
      required: true,
    }
  },
  created() {
    this.salon = this.authStore.getSalonBySlug(this.salonSlug);
    this.getSalon();
  },
  methods: {
    selectFile() {
      this.$refs.fileInput.click();
    },
    onFileSelected(event) {
      const file = event.target.files[0];
      const loader = this.$loading.show();
      const config = {
        success_callback: (response) => {
          loader.hide()
          this.salon.logo = response.data.logo;
        }
      }
      backendService.updateSalonLogo(this.salonSlug, file, config);
    },
    getSalon() {
      const config = {
        success_callback: (response) => {
          this.salon = response.data;
        },
      }
      backendService.getSalon(this.salonSlug, config)
    }
  }
};
</script>
