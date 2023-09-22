<template>
  <div>
    <Listbox>
      <div class="relative z-[22]">
        <ListboxButton
            class="relative w-full flex items-center space-x-[6px] cursor-pointer"
        >
          <span class="inline-block md:h-6 md:w-6 w-4 h-4 rounded-full"
          ><img
              :src="selectedSalon.logo"
              alt=""
              class="h-full w-full object-cover rounded-full"
          /></span>
          <span
              class="text-sm md:block hidden font-medium text-slate-600 dark:text-slate-300"
          >{{ selectedSalon.name }}</span
          >
        </ListboxButton>

        <Transition
            v-if="authStore.user.salons.length > 1"
            leave-active-class="transition duration-100 ease-in"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
        >
          <ListboxOptions
              class="absolute min-w-[100px] right-0 md:top-[50px] top-[38px] w-auto max-h-60 overflow-auto border border-slate-200 dark:border-slate-700 rounded bg-white dark:bg-slate-800 mt-1"
          >
            <ListboxOption
                v-slot="{ active }"
                v-for="item in authStore.user.salons"
                @click="changeSalon(item.id)"
                :key="item.id"
                :value="item.slug"
                as="template"
            >
              <li
                  :class="[
                  active
                    ? 'bg-slate-100 dark:bg-slate-700 dark:bg-opacity-70 bg-opacity-50 dark:text-white '
                    : 'text-slate-600 dark:text-slate-300',
                  'w-full border-b border-b-gray-500 border-opacity-10 px-2 py-2 last:border-none last:mb-0 cursor-pointer first:rounded-t last:rounded-b',
                ]"
              >
                <div class="flex items-center space-x-2">
                  <span class="flex-none">
                    <span
                        class="lg:w-6 lg:h-6 w-4 h-4 rounded-full inline-block"
                    >
                      <img
                          :src="item.logo"
                          alt=""
                          class="w-full h-full object-cover relative top-1 rounded-full"
                      />
                    </span>
                  </span>
                  <span class="flex-1 lg:text-base text-sm capitalize">
                    {{ item.name }}</span
                  >
                </div>
              </li>
            </ListboxOption>
          </ListboxOptions>
        </Transition>
      </div>
    </Listbox>
  </div>
</template>

<script>
import {Listbox, ListboxButton, ListboxOption, ListboxOptions} from "@headlessui/vue";
import {useAuthStore} from "@/store/auth";
import router from "@/router";
import {useCoreStore} from "@/store/core";
import emitter from "@/plugins/mitt";
import backendService from "@/utils/backendService";

export default {
  name: "Salons",
  components: {
    Listbox,
    ListboxButton,
    ListboxOption,
    ListboxOptions,
  },
  data() {
    return {
      selectedSalon: null,
    }
  },
  setup() {
    const authStore = useAuthStore();
    const coreStore = useCoreStore();
    return {authStore, coreStore};
  },
  created() {
    this.changeSalon(this.authStore.user.settings.current_salon, false);
    emitter.on('changeSalon', (id) => {
      this.changeSalon(id);
    })
  },
  beforeUnmount() {
    emitter.off('changeSalon');
  },
  methods: {
    changeSalon(salon_id, saveOnDB = true) {
      if (this.selectedSalon === null || salon_id !== this.selectedSalon.id) {
        const tmpSalon = this.authStore.user.salons.find((salon) => salon.id === salon_id);
        if (tmpSalon) {
          this.selectedSalon = tmpSalon;
          this.authStore.user.settings.current_salon = salon_id
          if (tmpSalon.owner === this.authStore.user.id) {
            backendService.getSalon(tmpSalon.slug);
          } else {
            this.authStore.setSalon(salon_id, tmpSalon)
          }
          if (saveOnDB) {
            backendService.changeSalon(salon_id);
            if (!this.authStore.isCurrentSalonOwner() && this.$route?.meta?.mustBeOwner) {
              router.push("/").then(() => {
                this.coreStore.reloadPage();
              })
            } else {
              this.coreStore.reloadPage();
            }
          }
        }
      }
    }
  }
};
</script>
