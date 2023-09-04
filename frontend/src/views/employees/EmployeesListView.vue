<template>
  <div>
    <Card title="" noborder v-if="employees?.length > 0">
      <div
          class="md:flex justify-between pb-6 md:space-y-0 space-y-3 items-center"
      >
        <h5>{{ $t('app.menuItems.employeesList') }}</h5>
        <add-employee-modal/>
      </div>
      <div class="-mx-6">
        <vue-good-table
            :columns="columns"
            styleClass=" vgt-table centered  lesspadding2 table-head "
            :rows="employees"
            :pagination-options="{
            enabled: true,
            perPage: perpage,
          }"
            :sort-options="{
            enabled: true,
          }"
        >
          <template v-slot:table-row="props">
            <span v-if="props.column.field === 'user.full_name'" class="flex justify-center">
              <span class="w-7 h-7 rounded-full ltr:mr-3 rtl:ml-3 flex-none  cursor-pointer"
                    @click="$router.push({name:'employee-detail', params:{employeeID: props.row.id}})">
                <img
                    :src="props.row.pic"
                    :alt="props.row.user.full_name"
                    class="object-cover w-full h-full rounded-full"
                />
              </span>
              <span
                  class="text-sm text-slate-600 dark:text-slate-300 capitalize mt-auto mb-auto cursor-pointer"
                  @click="$router.push({name:'employee-detail', params:{employeeID: props.row.id}})"
              >{{ props.row.user.full_name }}</span
              >
            </span>
            <span v-if="props.column.field === 'role'">
                                <span
                                    class="bg-opacity-20 mr-1 capitalize font-normal text-xs leading-4 px-[10px] py-[2px] rounded-full inline-block text-info-500 bg-info-500"
                                    v-if="authStore.isLoggedUser(props.row.user.id)"
                                >
                    {{ $t('generic.you') }}
                  </span>
                  <span
                      class="bg-opacity-20 capitalize font-normal text-xs leading-4 px-[10px] py-[2px] rounded-full inline-block"
                      :class="authStore.statusClass(props.row.user.id)"
                  >
                    {{
                      authStore.isOwner(props.row.user.id)
                          ? $t("generic.owner")
                          : $t("generic.employee")
                    }}
                  </span>
                    <span
                        class="bg-opacity-20 mr-1 ml-1 capitalize font-normal text-xs leading-4 px-[10px] py-[2px] rounded-full inline-block text-danger-500 bg-danger-500"
                        v-if="!props.row.email_verified"
                    >
                    {{ $t('generic.emailNotVerified') }}
                  </span>


                </span>
            <span v-if="props.column.field === 'action'">
                                <div class="flex space-x-3 justify-center">
                    <Tooltip placement="top" arrow theme="dark">
                      <template #button>
                        <div @click="$router.push({name:'employee-detail', params:{employeeID: props.row.id}})"
                             class="action-btn">
                          <Icon icon="heroicons:eye"/>
                        </div>
                      </template>
                      <span>{{ $t('generic.view') }}</span>
                    </Tooltip>
                    <Tooltip placement="top" arrow theme="danger-500"
                             v-if="!(authStore.getCurrentSalon.owner === props.row.user.id) && props.row.email_verified">
                      <template #button>
                        <div class="action-btn">
                          <Icon icon="heroicons:trash"/>
                        </div>
                      </template>
                      <span>{{ $t('generic.delete') }}</span>
                    </Tooltip>
                      <Tooltip placement="top" arrow theme="success-500"
                               v-if="!(authStore.getCurrentSalon.owner === props.row.user.id) && !props.row.email_verified">
                      <template #button>
                        <div class="action-btn" @click="backendService.resendVerificationEmail(props.row.user.email)">
                          <Icon icon="heroicons:at-symbol"/>
                        </div>
                      </template>
                      <span>{{ $t('generic.resendEmail') }}</span>
                    </Tooltip>
                                </div>
                </span>
          </template>
          <template #pagination-bottom="props">
            <div class="py-4 px-3 flex justify-center">
              <Pagination
                  :total="employees.length"
                  :current="current"
                  :per-page="perpage"
                  :pageRange="pageRange"
                  @page-changed="current = $event"
                  :pageChanged="props.pageChanged"
                  :perPageChanged="props.perPageChanged"
              >
                >
              </Pagination>
            </div>
          </template>
        </vue-good-table>
      </div>
    </Card>
  </div>
</template>
<script>
import {useAuthStore} from "@/store/auth";
import Card from "@/components/Card";
import Icon from "@/components/Icon";
import Tooltip from "@/components/Tooltip";
import Pagination from "@/components/Pagination";
import InputGroup from "@/components/InputGroup/index.vue";
import Textinput from "@/components/Textinput/index.vue";
import Modal from "@/components/Modal/Modal.vue";
import Button from "@/components/Button/index.vue";
import AddEmployeeModal from "@/components/modals/AddEmployeeModal.vue";
import addEmployeeModal from "@/components/modals/AddEmployeeModal.vue";
import backendService from "@/utils/backendService";
import main from "@/mixins/main";
import emitter from "@/plugins/mitt";

export default {
  name: "EmployeesListView",
  mixins: [main],
  components: {
    AddEmployeeModal,
    Button,
    Modal,
    Textinput,
    InputGroup,
    Card,
    Tooltip,
    Pagination,
    Icon,
    addEmployeeModal
  },
  data() {
    return {
      current: 1,
      perpage: 10,
      pageRange: 5,
    };
  },
  computed: {
    employees() {
      if (this.authStore.getCurrentSalon) {
        return this.authStore.getCurrentSalon.employees;
      } else {
        return []
      }
    },
    columns() {
      return [
        {
          label: this.$t('generic.employee'),
          field: "user.full_name",
        },
        {
          label: this.$t('generic.role'),
          field: "role",
          sortable: false
        },
        {
          label: this.$t('generic.action'),
          field: "action",
          sortable: false
        },
      ];
    }
  },
  setup() {
    const authStore = useAuthStore();
    return {authStore, backendService}
  },
  created() {
    this.getEmployees();
  },
  methods: {
    getEmployees() {
      let loader = null;
      if (!this.employees || this.employees?.length === 0) {
        loader = this.$loading.show();
      }
      const config = {
        finally_callback: () => {
          if (loader) {
            loader.hide();
          }
        }
      }
      backendService.getEmployees(config)
    }
  }
}
</script>


<style scoped>

</style>
