<template>
  <div>
    <Card title="" noborder v-if="employees.length > 0">
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
            enabled: false,
          }"
        >
          <template v-slot:table-row="props">
            <span v-if="props.column.field === 'employee'" class="flex justify-center">
              <span class="w-7 h-7 rounded-full ltr:mr-3 rtl:ml-3 flex-none">
                <img
                    :src="props.row.pic"
                    :alt="props.row.user.full_name"
                    class="object-cover w-full h-full rounded-full"
                />
              </span>
              <span
                  class="text-sm text-slate-600 dark:text-slate-300 capitalize"
              >{{ props.row.user.full_name }}</span
              >
            </span>
            <span v-if="props.column.field === 'role'">
                                <span
                                    class="bg-opacity-20 mr-1 capitalize font-normal text-xs leading-4 px-[10px] py-[2px] rounded-full inline-block text-info-500 bg-info-500"
                                    v-if="isLoggedUser(props.row.user.id)"
                                >
                    {{ $t('generic.you') }}
                  </span>
                  <span
                      class="bg-opacity-20 capitalize font-normal text-xs leading-4 px-[10px] py-[2px] rounded-full inline-block"
                      :class="statusClass(props.row.user.id)"
                  >
                    {{
                      isOwner(props.row.user.id)
                          ? $t("generic.owner")
                          : $t("generic.employee")
                    }}
                  </span>
                    <span
                        class="bg-opacity-20 mr-1 capitalize font-normal text-xs leading-4 px-[10px] py-[2px] rounded-full inline-block text-danger-500 bg-danger-500"
                        v-if="!props.row.user.email_verified"
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
                             v-if="!(authStore.getCurrentSalon().owner === props.row.user.id) && props.row.user.email_verified">
                      <template #button>
                        <div class="action-btn">
                          <Icon icon="heroicons:trash"/>
                        </div>
                      </template>
                      <span>{{ $t('generic.delete') }}</span>
                    </Tooltip>
                      <Tooltip placement="top" arrow theme="success-500"
                               v-if="!(authStore.getCurrentSalon().owner === props.row.user.id) && !props.row.user.email_verified">
                      <template #button>
                        <div class="action-btn">
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
import apiEndpoints from "@/constant/apiEndpoints";
import axios from "@/plugins/axios";
import Card from "@/components/Card";
import Icon from "@/components/Icon";
import Tooltip from "@/components/Tooltip";
import Pagination from "@/components/Pagination";
import router from "@/router";
import InputGroup from "@/components/InputGroup/index.vue";
import Textinput from "@/components/Textinput/index.vue";
import Modal from "@/components/Modal/Modal.vue";
import Button from "@/components/Button/index.vue";
import {useCoreStore} from "@/store/core";
import AddEmployeeModal from "@/components/modals/AddEmployeeModal.vue";
import addEmployeeModal from "@/components/modals/AddEmployeeModal.vue";

export default {
  name: "EmployeesListView",
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
      loading: false,
      employees: [],
      current: 1,
      perpage: 10,
      pageRange: 5,
    };
  },
  computed: {
    columns() {
      return [
        {
          label: this.$t('generic.employee'),
          field: "employee",
        },
        {
          label: this.$t('generic.role'),
          field: "role",
        },
        {
          label: this.$t('generic.action'),
          field: "action",
        },
      ];
    }
  },
  setup() {
    const authStore = useAuthStore();
    const coreStore = useCoreStore();
    return {authStore, coreStore}
  },
  created() {
    this.getEmployees();
  },
  methods: {
    router() {
      return router
    },
    isLoggedUser(id) {
      return this.authStore.user.id === id;
    },
    isOwner(id) {
      return this.authStore.getCurrentSalon().owner === id;
    },
    statusClass(id) {
      const isOwner = this.isOwner(id);
      return {
        "text-success-500 bg-success-500": isOwner,
        "text-warning-500 bg-warning-500": !isOwner,
      };
    },
    getEmployees() {
      const current_salon = this.authStore.getCurrentSalon();
      let endpoint = apiEndpoints.salonEmployees(current_salon.slug);
      this.loading = true;
      axios.get(endpoint).then((response) => {
        this.employees = response.data;
        this.loading = false;
      })
    }
  }
}
</script>


<style scoped>

</style>
