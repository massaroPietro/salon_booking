<template>
  <div>
    <div class="xl:absolute left-0 top-0 w-full">
      <div class="flex flex-wrap justify-between items-center py-6 container">
        <div>
          <router-link :to="{ name: 'home' }">
            <img
                src="@/assets/images/logo/logo.svg"
                alt=""
                v-if="!this.$store.themeSettingsStore.isDark"
            />
            <img
                src="@/assets/images/logo/logo-white.svg"
                alt=""
                v-if="this.$store.themeSettingsStore.isDark"
            />
          </router-link>
        </div>
        <div
            class="nav-tools flex items-center lg:space-x-5 space-x-3 rtl:space-x-reverse"
        >
          <LanguageVue/>
          <SwitchDark/>
          <MonochromeMode/>
          <router-link
              v-if="authStore.hasDashboardAccess"
              to="/app"
              class="btn btn-dark btn-sm">Dashboard</router-link>
          <Button :text="$t('auth.signIn')" btnClass=" btn-outline-dark btn-sm" v-if="!authStore.isAuthenticated"
                  @click="openAuthModal()"/>
          <Dropdown v-else classMenuItems=" w-[180px] top-[58px] ">
            <div class="flex items-center">
              <div
                  class="flex-none text-slate-600 dark:text-white text-sm font-normal items-center lg:flex hidden overflow-hidden text-ellipsis whitespace-nowrap"
              >
        <span
            class="overflow-hidden text-ellipsis whitespace-nowrap block"
        >{{ authStore.fullName }}</span
        >
                <span class="text-base inline-block ltr:ml-[10px] rtl:mr-[10px]"
                ><Icon icon="heroicons-outline:chevron-down"></Icon
                ></span>
              </div>
            </div>
            <template #menus>
              <MenuItem v-slot="{ active }" v-for="(item, i) in profileOptions" :key="i">
                <div
                    type="button"
                    :class="`${
            active
              ? 'bg-slate-100 dark:bg-slate-700 dark:bg-opacity-70 text-slate-900 dark:text-slate-300'
              : 'text-slate-600 dark:text-slate-300'
          } `"
                    class="inline-flex items-center space-x-2 rtl:space-x-reverse w-full px-4 py-2 first:rounded-t last:rounded-b font-normal cursor-pointer"
                    @click="item.link()"
                >
                  <div class="flex-none text-lg">
                    <Icon :icon="item.icon"/>
                  </div>
                  <div class="flex-1 text-sm">
                    {{ item.label }}
                  </div>
                </div>
              </MenuItem>
            </template>
          </Dropdown>
        </div>
      </div>
    </div>
    <auth-modal/>
  </div>
</template>

<script>
import Button from "@/components/Button/index.vue";
import {useAuthStore} from "@/store/auth";
import Dropdown from "@/components/Dropdown/index.vue";
import {MenuItem} from "@headlessui/vue";
import backendService from "@/utils/backendService";
import Icon from "@/components/Icon";
import LanguageVue from "@/components/Header/Navtools/Language.vue";
import MonochromeMode from "@/components/Header/Navtools/MonochromeMode.vue";
import SwitchDark from "@/components/Header/Navtools/SwitchDark.vue";
import emitter from "@/plugins/mitt";
import AuthModal from "@/components/modals/AuthModal.vue";


export default {
  name: "NavbarComponent",
  components: {AuthModal, SwitchDark, MonochromeMode, LanguageVue, MenuItem, Dropdown, Button, Icon},
  setup() {
    const authStore = useAuthStore();
    return {authStore}
  },
  methods: {
    openAuthModal() {
      emitter.emit("openAuthModal")
    }
  },
  computed: {
    profileOptions() {
      return [
        {
          label: "Profile",
          icon: "heroicons-outline:user",
          link: () => {
            this.$router.push("profile");
          },
        },
        {
          label: "Chat",
          icon: "heroicons-outline:chat",
          link: () => {
            this.$router.push("chat");
          },
        },
        {
          label: "Email",
          icon: "heroicons-outline:mail",
          link: () => {
            this.$router.push("email");
          },
        },
        {
          label: "Todo",
          icon: "heroicons-outline:clipboard-check",
          link: () => {
            this.$router.push("todo");
          },
        },
        {
          label: "Settings",
          icon: "heroicons-outline:cog",
          link: () => {
            this.$router.push("settings");
          },
        },
        {
          label: "Price",
          icon: "heroicons-outline:credit-card",
          link: () => {
            this.$router.push("pricing");
          },
        },
        {
          label: "Faq",
          icon: "heroicons-outline:information-circle",
          link: () => {
            this.$router.push("faq");
          },
        },
        {
          label: "Logout",
          icon: "heroicons-outline:login",
          link: () => {
            backendService.logout()
          },
        },
      ];
    }
  }
}
</script>

