<template>
  <div>
    <Card title="" noborder>
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


                </span>
            <span v-if="props.column.field === 'action'">
                                <div class="flex space-x-3 justify-center">
                    <Tooltip placement="top" arrow theme="dark">
                      <template #button>
                        <div class="action-btn">
                          <Icon icon="heroicons:eye"/>
                        </div>
                      </template>
                      <span> View</span>
                    </Tooltip>
                    <Tooltip placement="top" arrow theme="dark">
                      <template #button>
                        <div class="action-btn">
                          <Icon icon="heroicons:pencil-square"/>
                        </div>
                      </template>
                      <span> Edit</span>
                    </Tooltip>
                    <Tooltip placement="top" arrow theme="danger-500" v-if="!(authStore.getCurrentSalon().owner === props.row.user.id)">
                      <template #button>
                        <div class="action-btn">
                          <Icon icon="heroicons:trash"/>
                        </div>
                      </template>
                      <span>Delete</span>
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

export default {
  name: "EmployeesListView",
  components: {Card, Tooltip, Pagination, Icon},
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
    return {authStore}
  },
  created() {
    this.getEmployees();
  },
  methods: {
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
