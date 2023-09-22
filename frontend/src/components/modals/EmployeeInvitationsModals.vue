<template>
  <Modal
      centered
      :title="$t('app.salons.invitedForSalon')"
      :label="$t('app.salons.invitedForSalon')"
      :label-class="'btn-dark'"
      :hidden-button="true"
      ref="prova"
  >
    <div class="text-base text-slate-600 dark:text-slate-300">
      <ul class="divide-y divide-slate-100 dark:divide-slate-700 -mb-6">
        <li v-for="(item, i) in authStore.user.employee_invitations" class="mb-4" :key="i">
          <div
              class="hover:bg-slate-100 dark:hover:bg-slate-600 dark:hover:bg-opacity-70 hover:text-slate-800 text-slate-600 dark:text-slate-300 block w-full px-4 py-3 text-sm mb-2 last:mb-0"
          >
            <div class="flex ltr:text-left rtl:text-right">
              <div class="flex-none ltr:mr-3 rtl:ml-3">
                <div
                    class="h-8 w-8 bg-white dark:bg-slate-700 rounded-full relative"
                >
                  <img
                      :src="item.salon.logo"
                      alt=""
                      class="block w-full h-full object-cover rounded-full border hover:border-white border-transparent"
                  />
                </div>
              </div>
              <div class="flex-1">
                <div
                    class="text-slate-800 dark:text-slate-300 text-sm font-medium mb-1`"
                >
                  {{ item.salon.name }}
                </div>
                <div
                    class="text-xs hover:text-[#68768A] font-normal text-slate-600 dark:text-slate-300"
                >
                  Invito a partecipare al salone
                </div>
                <div class="text-slate-400 dark:text-slate-400 text-xs mt-1">
                  <timeago
                      :datetime="item.created_at"
                      :locale="$i18n.locale === 'it' ? it : enUS"
                  />
                </div>
              </div>
              <div class="flex-0 mt-auto mb-auto">
                <div v-if="item.accepted">
                  <Badge
                      :label="$t('generic.accepted')"
                      badgeClass="bg-success-500 text-white"
                      icon="heroicons-outline:check"
                  />
                </div>
                <div v-else-if="item.rejected">
                  <Badge
                      :label="$t('generic.rejected')"
                      badgeClass="bg-danger-500 text-white"
                      icon="heroicons-outline:trash"
                  />
                </div>
                <div v-else class="space-x-3 text-3xl text-secondary-500 rtl:space-x-reverse">
                  <button type="button" class="duration-300 hover:text-success-500" @click="acceptInvitation(item)">
                    <Icon icon="heroicons-outline:check"/>
                  </button>
                  <button
                      type="button"
                      class="transition duration-300 hover:text-danger-500"
                      @click="rejectInvitation(item)"
                  >
                    <Icon icon="heroicons-outline:x"/>
                  </button>
                </div>

              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </Modal>
</template>
<script>
import Modal from "@/components/Modal/Modal.vue";
import Button from "@/components/Button/index.vue";
import Tooltip from "@/components/Tooltip/index.vue";
import Alert from "@/components/Alert/index.vue";
import AddEmployeeModal from "@/components/modals/AddEmployeeModal.vue";
import AddFirstSalon from "@/views/auth/add-first-salon.vue";
import Success from "@/views/auth/success.vue";
import Icon from "@/components/Icon/index.vue";
import emitter from "@/plugins/mitt";
import {useAuthStore} from "@/store/auth";
import {useCoreStore} from "@/store/core";
import backendService from "@/utils/backendService";
import Badge from "@/components/Badge/index.vue";
import {it, enUS} from 'date-fns/locale' // import custom locale
export default {
  name: "EmployeeInvitationsModals",
  components: {Badge, Tooltip, Alert, AddEmployeeModal, AddFirstSalon, Success, Modal, Button, Icon},
  created() {
    emitter.on('openInvitationsModal', () => {
      this.openInvitationModal();
    })
  },
  beforeUnmount() {
    emitter.off('openInvitationsModal')
  },
  setup() {
    const authStore = useAuthStore();
    const coreStore = useCoreStore();
    return {authStore, coreStore, it, enUS};
  },
  methods: {
    openInvitationModal() {
      this.$refs.prova.openModal();
    },
    acceptInvitation(invitation) {
      const config = {
        success_callback: (response) => {
          this.authStore.user.employees.push(response.data)
          this.authStore.user.salons.push(invitation.salon);
          invitation.accepted = true;
        }
      }

      backendService.acceptEmployeeInvitation(invitation.id, config);
    },
    rejectInvitation(invitation) {
      const config = {
        success_callback: () => {
          invitation.rejected = true;
        }
      }

      backendService.rejectEmployeeInvitation(invitation.id, config);
    }
  }
}
</script>


<style scoped>

</style>
