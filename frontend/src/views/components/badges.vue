<template>
  <div class="grid xl:grid-cols-2 grid-cols-1 gap-5">
    <Card title="Basic Badges">
      <div class="badge-group">
        <Badge label="primary" badgeClass="bg-primary-500 text-white" />
        <Badge label="secondary" badgeClass="bg-secondary-500 text-white" />
        <Badge label="danger" badgeClass="bg-danger-500 text-white" />
        <Badge label="success" badgeClass="bg-success-500 text-white" />
        <Badge label="info" badgeClass="bg-info-500 text-white" />
        <Badge label="warning" badgeClass="bg-warning-500 text-white" />
        <Badge
          label="Dark"
          badgeClass="bg-slate-800 dark:bg-slate-900  text-white"
        />
      </div>
    </Card>
    <Card title="Pill Badges">
      <div class="badge-group">
        <Badge label="primary" badgeClass="bg-primary-500 text-white pill" />
        <Badge
          label="secondary"
          badgeClass="bg-secondary-500 text-white pill"
        />
        <Badge label="danger" badgeClass="bg-danger-500 text-white pill" />
        <Badge label="success" badgeClass="bg-success-500 text-white pill" />
        <Badge label="info" badgeClass="bg-info-500 text-white pill" />
        <Badge label="warning" badgeClass="bg-warning-500 text-white pill" />
        <Badge
          label="Dark"
          badgeClass="bg-slate-800 dark:bg-slate-900 text-white pill"
        />
      </div>
    </Card>
    <Card title="Soft Badges">
      <div class="badge-group">
        <Badge
          label="primary"
          badgeClass="bg-primary-500 text-primary-500 bg-opacity-[0.12]"
        />
        <Badge
          label="secondary"
          badgeClass="bg-secondary-500 text-secondary-500 bg-opacity-[0.12]"
        />
        <Badge
          label="danger"
          badgeClass="bg-danger-500 text-danger-500 bg-opacity-[0.12]"
        />
        <Badge
          label="success"
          badgeClass="bg-success-500 text-success-500 bg-opacity-[0.12]"
        />
        <Badge
          label="info"
          badgeClass="bg-info-500 text-info-500 bg-opacity-[0.12]"
        />
        <Badge
          label="warning"
          badgeClass="bg-warning-500 text-warning-500 bg-opacity-[0.12]"
        />
        <Badge
          label="Dark"
          badgeClass="bg-slate-800 dark:bg-slate-900 text-slate-800 dark:text-slate-400 bg-opacity-[0.12]"
        />
      </div>
    </Card>
    <Card title="Soft Pill Badges">
      <div class="badge-group">
        <Badge
          label="primary"
          badgeClass="bg-primary-500 text-primary-500 bg-opacity-[0.12] pill"
        />
        <Badge
          label="secondary"
          badgeClass="bg-secondary-500 text-secondary-500 bg-opacity-[0.12] pill"
        />
        <Badge
          label="danger"
          badgeClass="bg-danger-500 text-danger-500 bg-opacity-[0.12] pill"
        />
        <Badge
          label="success"
          badgeClass="bg-success-500 text-success-500 bg-opacity-[0.12] pill"
        />
        <Badge
          label="info"
          badgeClass="bg-info-500 text-info-500 bg-opacity-[0.12] pill"
        />
        <Badge
          label="warning"
          badgeClass="bg-warning-500 text-warning-500 bg-opacity-[0.12] pill"
        />
        <Badge
          label="Dark"
          badgeClass="bg-slate-800 dark:bg-slate-900 text-slate-800 dark:text-slate-400 bg-opacity-[0.12] pill"
        />
      </div>
    </Card>
    <Card title="Badges With Icon">
      <div class="badge-group">
        <Badge
          label="primary"
          badgeClass="bg-primary-500 text-white "
          icon="heroicons-outline:star"
        />
        <Badge
          label="secondary"
          badgeClass="bg-secondary-500 text-white"
          icon="heroicons-outline:star"
        />
        <Badge
          label="danger"
          badgeClass="bg-danger-500 text-white"
          icon="heroicons-outline:star"
        />
        <Badge
          label="success"
          badgeClass="bg-success-500 text-white"
          icon="heroicons-outline:star"
        />
        <Badge
          label="info"
          badgeClass="bg-info-500 text-white"
          icon="heroicons-outline:star"
        />
        <Badge
          label="warning"
          badgeClass="bg-warning-500 text-white"
          icon="heroicons-outline:star"
        />
        <Badge
          label="Dark"
          badgeClass="bg-slate-800 dark:bg-slate-900 text-white"
          icon="heroicons-outline:star"
        />
      </div>
    </Card>
    <Card title="Badges in Buttons">
      <div class="badge-btn-group">
        <Button btnClass="btn-dark">
          <div class="space-x-1 rtl:space-x-reverse">
            <span>Notifications</span>
            <Badge label="2" badgeClass="bg-white text-slate-900 " />
          </div>
        </Button>
        <Button btnClass="btn-success">
          <div class="space-x-1 rtl:space-x-reverse">
            <span>Messages</span>
            <Badge label="4" badgeClass="bg-white text-slate-900 " />
          </div>
        </Button>
        <Button btnClass="btn-info">
          <div class="space-x-1 rtl:space-x-reverse">
            <span>Draft</span>
            <Badge label="3" badgeClass="bg-white text-slate-900" />
          </div>
        </Button>
      </div>
    </Card>
    <div class="xl:col-span-2 col-span-1">
      <Card title="Badges Position Examples">
        <div class="badge-btn-group">
          <Button btnClass=" btn-primary ">
            Mails
            <Badge
              label="2"
              badgeClass="bg-danger-500  text-white absolute -top-3 ltr:-right-2 rtl:-left-2"
            />
          </Button>
          <Button btnClass=" btn-secondary">
            Alerts
            <Badge
              :label="null"
              badgeClass="bg-danger-500 rounded-circile h-4 w-4  text-white absolute -top-2 ltr:-right-2 rtl:-left-2"
            />
          </Button>
          <Button btnClass=" btn-success ">
            <div class="text-2xl">
              <Icon icon="heroicons:envelope" />
            </div>
            <Badge
              :label="null"
              badgeClass="bg-danger-500 rounded-circile h-4 w-4  text-white absolute -top-2 ltr:-right-2 rtl:-left-2"
            />
          </Button>
        </div>
      </Card>
    </div>
  </div>
</template>
<script>
import Badge from "@/components/Badge";
import Button from "@/components/Button";
import Card from "@/components/Card";
import Icon from "@/components/Icon";

export default {
  components: {
    Card,
    Badge,
    Button,
    Icon,
  },
};
</script>
<style lang="scss">
.badge-group {
  @apply flex  flex-wrap;
  .badge {
    @apply mr-3 mb-3;
  }
}
.badge-btn-group {
  @apply flex items-center flex-wrap;
  .btn {
    @apply mb-3 mr-3;
  }
}
</style>
