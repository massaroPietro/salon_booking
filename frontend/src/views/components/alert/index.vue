<template>
  <div class="grid xl:grid-cols-2 grid-cols-1 gap-5">
    <Card title="Theme Color Alerts">
      <div class="space-y-5">
        <Alert :type="item.type" v-for="(item, i) in alertType" :key="i">
          This is an alert—check it out!
        </Alert>
      </div>
    </Card>
    <Card title="Light Color Alerts">
      <div class="space-y-5">
        <Alert :type="item.type" v-for="(item, i) in alertType2" :key="i">
          This is an alert—check it out!
        </Alert>
      </div>
    </Card>
    <div class="xl:col-span-2 col-span-1">
      <Card title="Link Colors">
        <div class="space-y-5">
          <Alert
            className="bg-slate-800 bg-opacity-[14%] text-slate-800 dark:bg-slate-500 dark:bg-opacity-[14%]  dark:text-slate-300"
          >
            This is an alert with
            <router-link
              to="#"
              class="underline text-slate-900 dark:text-slate-300 text-sm font-medium"
              >an example link</router-link
            >.Check it out!
          </Alert>
          <Alert
            className="bg-primary-500 bg-opacity-[14%] text-primary-500 dark:bg-primary-500 dark:bg-opacity-[14%]"
          >
            This is an alert with
            <router-link
              to="#"
              class="underline text-primary-500 text-sm font-medium"
              >an example link</router-link
            >.Click It out!
          </Alert>
          <Alert
            className="bg-secondary-500 bg-opacity-[14%] text-slate-600 dark:bg-secondary-500 dark:bg-opacity-[14%]"
          >
            This is an alert with
            <router-link
              to="#"
              class="underline text-slate-600 text-sm font-medium"
              >an example link</router-link
            >.Click It out!
          </Alert>
          <Alert
            className="bg-success-500 bg-opacity-[14%] text-success-500 dark:bg-success-500 dark:bg-opacity-[14%]"
          >
            This is an alert with
            <router-link
              to="#"
              class="underline text-success-500 text-sm font-medium"
              >an example link</router-link
            >.Click It out!
          </Alert>
          <Alert
            className="bg-info-500 bg-opacity-[14%] text-info-500 dark:bg-info-500 dark:bg-opacity-[14%]"
          >
            This is an alert with
            <router-link
              to="#"
              class="underline text-info-500 text-sm font-medium"
              >an example link</router-link
            >.Click It out!
          </Alert>
          <Alert
            className="bg-warning-500 bg-opacity-[14%] text-warning-500 dark:bg-warning-500 dark:bg-opacity-[14%]"
          >
            This is an alert with
            <router-link
              to="#"
              class="underline text-warning-500 text-sm font-medium"
              >an example link</router-link
            >.Click It out!
          </Alert>
          <Alert
            className="bg-danger-500 bg-opacity-[14%] text-danger-500 dark:bg-danger-500 dark:bg-opacity-[14%]"
          >
            This is an alert with
            <router-link
              to="#"
              class="underline text-danger-500 text-sm font-medium"
              >an example link</router-link
            >.Click It out!
          </Alert>
        </div>
      </Card>
    </div>
    <Card title="Dismissible Theme Color Alerts With Icon ">
      <div class="space-y-5">
        <Alert
          :type="item.type"
          v-for="(item, i) in alertType3"
          :key="i"
          dismissible
          :icon="item.icon"
        >
          This is an alert—check it out!
        </Alert>
      </div>
    </Card>
    <Card title="Dismissible Light Color Alerts With Icon">
      <div class="space-y-5">
        <Alert
          :type="item.type"
          v-for="(item, i) in alertType4"
          :key="i"
          dismissible
          :icon="item.icon"
        >
          <span class="font-semibold">Well done!</span> You successfully read
          this important alert message.
        </Alert>
      </div>
    </Card>
    <Card title="Outline Theme Color Alerts ">
      <div class="space-y-5">
        <Alert :type="item.type" v-for="(item, i) in alertType5" :key="i">
          This is an alert—check it out!
        </Alert>
      </div>
    </Card>
    <Card title="Outline Light Color Alerts With Icon">
      <div class="space-y-5">
        <Alert
          :type="item.type"
          v-for="(item, i) in alertType6"
          :key="i"
          dismissible
          :icon="item.icon"
        >
          <span class="font-semibold">Well done!</span> You successfully read
          this important alert message.
        </Alert>
      </div>
    </Card>
  </div>
</template>
<script>
import Alert from '@/components/Alert';
import Card from '@/components/Card';
import {
  alertType,
  alertType2,
  alertType3,
  alertType4,
  alertType5,
  alertType6,
} from '../../../constant/data';
export default {
  components: {
    Card,
    Alert,
  },
  data() {
    return {
      alertType,
      alertType2,
      alertType3,
      alertType4,
      alertType5,
      alertType6,
    };
  },
};
</script>
<style lang=""></style>
