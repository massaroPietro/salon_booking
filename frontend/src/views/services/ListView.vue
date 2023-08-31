<template>
  <div>
    <Card title="" noborder v-if="services">
      <div
          class="md:flex justify-between pb-6 md:space-y-0 space-y-3 items-center"
      >
        <h5>{{ $t('app.menuItems.servicesList') }}</h5>
        <add-service-modal/>
      </div>
      <div class="-mx-6">
        <vue-good-table
            :columns="columns"
            styleClass=" vgt-table centered  lesspadding2 table-head "
            :rows="services"
            :pagination-options="{
            enabled: true,
            perPage: perpage,
          }"
            :sort-options="{
            enabled: true,
          }"
        >
          <div slot="emptystate">
            This will show up when there are no rows
          </div>
          <template v-slot:table-row="props">
            <span v-if="props.column.field === 'name'" class="flex justify-center">
              <span class="w-7 h-7 rounded-full ltr:mr-3 rtl:ml-3 flex-none">
                <img
                    :src="props.row.image"
                    :alt="props.row.name"
                    class="object-cover w-full h-full rounded-full"
                />
              </span>
              <span
                  class="text-sm text-slate-600 dark:text-slate-300 capitalize mt-auto mb-auto"
              >{{ props.row.name }}</span
              >
            </span>
            <span v-if="props.column.field === 'duration'">

              <span
                  class="text-sm text-slate-600 dark:text-slate-300 capitalize mt-auto mb-auto"
              >{{ humanizeDuration(props.row.duration) }}</span>

                </span>
            <span v-if="props.column.field === 'price'">

              <span
                  class="text-sm text-slate-600 dark:text-slate-300 capitalize mt-auto mb-auto"
              >{{ props.row.price }}&euro;</span>

                </span>
            <span v-if="props.column.field === 'action'">
                                <div class="flex space-x-3 justify-center">
                    <Tooltip placement="top" arrow theme="dark">
                      <template #button>
                        <div
                            @click="$router.push({name:'service-detail', params:{serviceID: props.row.id}})"
                            class="action-btn">
                          <Icon icon="heroicons:eye"/>
                        </div>
                      </template>
                      <span>{{ $t('generic.view') }}</span>
                    </Tooltip>
                    <Tooltip placement="top" arrow theme="danger-500">
                      <template #button>
                        <div class="action-btn">
                          <Icon icon="heroicons:trash"/>
                        </div>
                      </template>
                      <span>{{ $t('generic.delete') }}</span>
                    </Tooltip>
                                </div>
                </span>
          </template>
          <template #pagination-bottom="props">
            <div class="py-4 px-3 flex justify-center">
              <Pagination
                  :total="services.length"
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
import backendService from "@/utils/backendService";
import main from "@/mixins/main";
import {humanizeDuration} from "@/utils/utils";
import AddServiceModal from "@/components/modals/AddServiceModal.vue";

export default {
  name: "ListView",
  mixins: [main],
  components: {
    AddServiceModal,
    AddEmployeeModal,
    Button,
    Modal,
    Textinput,
    InputGroup,
    Card,
    Tooltip,
    Pagination,
    Icon,
  },
  data() {
    return {
      services: [],
      current: 1,
      perpage: 10,
      pageRange: 5,
    };
  },
  computed: {
    columns() {
      return [
        {
          label: this.$t('generic.service'),
          field: "name",
        },
        {
          label: this.$t('generic.duration'),
          field: "duration",
        },
        {
          label: this.$t('generic.price'),
          field: "price",
        },
        {
          label: this.$t('generic.action'),
          field: "action",
          sortable: false,
        },
      ];
    }
  },
  setup() {
    const authStore = useAuthStore();
    return {authStore, backendService}
  },
  created() {
    this.getServices();
  },
  methods: {
    humanizeDuration,
    getServices() {
      const config = {
        dataTarget: this.services,
        loader: this.toggleLoading,
      }
      backendService.getServices(config)
    }
  }
}
</script>
