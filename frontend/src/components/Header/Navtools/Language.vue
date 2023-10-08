<template>
  <div>
    <Listbox>
      <div class="relative z-[22]">
        <ListboxButton
            class="relative w-full flex items-center cursor-pointer space-x-[6px]"
        >
          <span class="inline-block md:h-6 md:w-6 w-4 h-4 rounded-full"
          ><img
              :src="selectedLanguage.image"
              alt=""
              class="h-full w-full object-cover rounded-full"
          /></span>
          <span
              class="text-sm md:block hidden font-medium text-slate-600 dark:text-slate-300"
          >{{ selectedLanguage.name }}</span
          >
        </ListboxButton>

        <Transition
            leave-active-class="transition duration-100 ease-in"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
        >
          <ListboxOptions
              class="absolute min-w-[100px] right-0 md:top-[50px] top-[38px] w-auto max-h-60 overflow-auto border border-slate-200 dark:border-slate-700 rounded bg-white dark:bg-slate-800 mt-1"
          >
            <ListboxOption
                v-slot="{ active }"
                v-for="item in languages"
                @click="item.locale !== selectedLanguage.locale ? changeLang(item.locale) : ''"
                :key="item.name"
                :value="item"
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
                          :src="item.image"
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
import axios from "@/plugins/axios";
import apiEndpoints from '@/constant/apiEndpoints.js';
import it from "@/assets/images/flags/it.png";
import en from "@/assets/images/flags/en.svg";
import backendService from "@/utils/backendService";
import emitter from "@/plugins/mitt";

export default {
  name: "Language",
  components: {
    Listbox,
    ListboxButton,
    ListboxOption,
    ListboxOptions,
  },
  setup() {
    const store = useAuthStore();

    const languages = [
      {name: "En", image: en, locale: "en"},
      {name: "It", image: it, locale: "it"},
    ];

    return {store, languages};
  },
  created() {
    emitter.on('changeLang', (lang) => {
      this.changeLang(lang, false);
    })
    const lang = localStorage.getItem('lang') || navigator.language.substring(0, 2)
    this.changeLang(lang, false)
  },
  beforeUnmount() {
    emitter.off('changeLang');
  },
  computed: {
    selectedLanguage() {
      return this.languages.find((language) => language.locale === this.store.user.settings.lang);
    }
  },
  methods: {
    changeLang(language, saveOnDB = true) {
      this.$i18n.locale = language;
      this.store.user.settings.lang = language;
      localStorage.setItem('lang', language);
      axios.defaults.headers.common["Accept-Language"] = language;

      if (saveOnDB && this.store.isAuthenticated) {
        backendService.changeLanguage(language)
      }
    }
  }
};
</script>
