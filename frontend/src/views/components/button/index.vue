<template>
  <div class="grid xl:grid-cols-2 grid-cols-1 gap-6">
    <Card title="Basic">
      <div class="btn-group-example">
        <Button text="primary" btnClass="btn-primary " />
        <Button text="secondary" btnClass="btn-secondary" />
        <Button text="success" btnClass="btn-success" />
        <Button text="info" btnClass="btn-info" />
        <Button text="warning" btnClass="btn-warning" />
        <Button text="danger" btnClass="btn-danger" />
        <Button text="Dark" btnClass="btn-dark" />
        <Button text="Light" btnClass="btn-light" />
        <Button text="White" btnClass="bg-white text-slate-900" />
      </div>
    </Card>
    <Card title="Outline">
      <div class="btn-group-example">
        <Button text="primary" btnClass="btn-outline-primary" />
        <Button text="secondary" btnClass="btn-outline-secondary" />
        <Button text="success" btnClass="btn-outline-success" />
        <Button text="info" btnClass="btn-outline-info" />
        <Button text="warning" btnClass="btn-outline-warning" />
        <Button text="danger" btnClass="btn-outline-danger" />
        <Button text="dark" btnClass="btn-outline-dark" />
        <Button text="light" btnClass="btn-outline-light" />
      </div>
    </Card>
    <Card title="Light Color">
      <div class="btn-group-example">
        <Button text="primary" btnClass="btn-primary light" />
        <Button text="secondary" btnClass=" btn-secondary light" />
        <Button text="success" btnClass=" btn-success light" />
        <Button text="info" btnClass=" btn-info light" />
        <Button text="warning" btnClass=" btn-warning light" />
        <Button text="danger" btnClass=" btn-danger light" />
        <Button text="Dark" btnClass=" btn-dark light" />
        <Button text="Light" btnClass=" btn-light light" />
      </div>
    </Card>
    <Card title="Raised">
      <div class="btn-group-example">
        <Button text="primary" btnClass="btn-primary shadow-base2" />
        <Button text="secondary" btnClass=" btn-secondary shadow-base2" />
        <Button text="success" btnClass=" btn-success shadow-base2" />
        <Button text="info" btnClass=" btn-info shadow-base2" />
        <Button text="warning" btnClass=" btn-warning shadow-base2" />
        <Button text="danger" btnClass=" btn-danger shadow-base2" />
        <Button text="Dark" btnClass=" btn-dark shadow-base2" />
        <Button text="Light" btnClass=" btn-light shadow-base2" />
        <Button text="White" btnClass=" bg-white text-slate-900 shadow-base2" />
      </div>
    </Card>
    <Card title="Rounded">
      <div class="btn-group-example">
        <Button text="primary" btnClass="btn-primary rounded-[999px]" />
        <Button text="secondary" btnClass=" btn-secondary rounded-[999px]" />
        <Button text="success" btnClass=" btn-success rounded-[999px]" />
        <Button text="info" btnClass=" btn-info rounded-[999px]" />
        <Button text="warning" btnClass=" btn-warning rounded-[999px]" />
        <Button text="danger" btnClass=" btn-danger rounded-[999px]" />
        <Button text="Dark" btnClass=" btn-dark rounded-[999px]" />
        <Button text="Light" btnClass=" btn-light rounded-[999px]" />
        <Button
          text="White"
          btnClass=" bg-white text-slate-900 rounded-[999px]"
        />
      </div>
    </Card>
    <Card title="Rounded Outline">
      <div class="btn-group-example">
        <Button text="primary" btnClass="btn-outline-primary rounded-[999px]" />
        <Button
          text="secondary"
          btnClass="btn-outline-secondary rounded-[999px]"
        />
        <Button text="success" btnClass="btn-outline-success rounded-[999px]" />
        <Button text="info" btnClass="btn-outline-info rounded-[999px]" />
        <Button text="warning" btnClass="btn-outline-warning rounded-[999px]" />
        <Button text="danger" btnClass="btn-outline-danger rounded-[999px]" />
        <Button text="dark" btnClass="btn-outline-dark rounded-[999px]" />
        <Button text="light" btnClass="btn-outline-light rounded-[999px]" />
      </div>
    </Card>
    <Card title="Icon">
      <div class="btn-group-example">
        <Button
          icon="heroicons-outline:newspaper"
          text="Left Icon"
          btnClass="btn-primary "
        />
        <Button
          icon="heroicons-outline:newspaper"
          text="Left Icon"
          btnClass="btn-outline-primary "
        />
        <Button
          icon="heroicons-outline:newspaper"
          text="Right Icon"
          btnClass="btn-primary "
          iconPosition="right"
        />
        <Button
          icon="heroicons-outline:newspaper"
          text="Right Icon"
          btnClass="btn-outline-primary "
          iconPosition="right"
        />
        <Button
          icon="heroicons-outline:newspaper"
          btnClass="btn-outline-primary"
        />
        <Button icon="heroicons-outline:newspaper" btnClass="btn-primary" />
      </div>
    </Card>
    <Card title="Icon Rounded">
      <div class="btn-group-example">
        <Button
          icon="heroicons-outline:newspaper"
          text="Left Icon"
          btnClass="btn-primary  rounded-[999px]"
        />
        <Button
          icon="heroicons-outline:newspaper"
          text="Left Icon"
          btnClass="btn-outline-primary rounded-[999px] "
        />
        <Button
          icon="heroicons-outline:newspaper"
          text="Right Icon"
          btnClass="btn-primary rounded-[999px]"
          iconPosition="right"
        />
        <Button
          icon="heroicons-outline:newspaper"
          text="Right Icon"
          btnClass="btn-outline-primary rounded-[999px]"
          iconPosition="right"
        />
        <Button
          icon="heroicons-outline:newspaper"
          btnClass="btn-outline-primary  rounded-[999px]"
        />
        <Button
          icon="heroicons-outline:newspaper"
          btnClass="btn-primary  rounded-[999px]"
        />
        <Button
          icon="heroicons-outline:newspaper"
          btnClass="btn-primary  p-0 h-12 w-12 flex items-center justify-center rounded-full"
        />
      </div>
    </Card>
    <Card title="Size">
      <div class="btn-group-example">
        <Button text="Large Button" btnClass="btn-primary btn-xl" />
        <Button text="Default" btnClass="btn-primary" />
        <Button text="Small" btnClass="btn-primary btn-sm" />
      </div>
    </Card>
    <Card title="Disabled">
      <div class="btn-group-example">
        <Button text="primary" btnClass="btn-primary " isDisabled />
        <Button text="secondary" btnClass=" btn-secondary" isDisabled />
        <Button text="success" btnClass=" btn-success" isDisabled />
        <Button text="info" btnClass=" btn-info" isDisabled />
        <Button text="warning" btnClass=" btn-warning" isDisabled />
        <Button text="danger" btnClass=" btn-danger" isDisabled />
        <Button text="Dark" btnClass=" btn-dark" isDisabled />
        <Button text="Light" btnClass=" btn-light" isDisabled />
        <Button text="White" btnClass=" bg-white text-slate-900" isDisabled />
      </div>
    </Card>
    <Card title="Loading">
      <div class="btn-group-example">
        <Button text="primary" btnClass="btn-primary " isLoading />
        <Button text="secondary" btnClass=" btn-secondary" isLoading />
        <Button text="success" btnClass=" btn-success" isLoading />
        <Button text="info" btnClass=" btn-info" isLoading />
        <Button text="warning" btnClass=" btn-warning" isLoading />
        <Button text="danger" btnClass=" btn-danger" isLoading />
        <Button text="Dark" btnClass=" btn-dark" isLoading />
        <Button text="Light" btnClass=" btn-light" isLoading />
        <Button text="White" btnClass=" bg-white text-slate-900" isLoading />
      </div>
    </Card>
    <Card title="Group Button">
      <div class="btn-group">
        <div class="grid grid-cols-1 gap-4">
          <GroupButton />
          <GroupButton btnClass="btn-primary" />
          <GroupButton btnClass="btn-secondary" />
          <GroupButton btnClass="btn-outline-dark" :groupButtons="prevNext" />
          <GroupButton btnClass="btn-primary" :groupButtons="prevNext" />
        </div>
      </div>
    </Card>
    <Card title="Block">
      <div class="grid grid-cols-1 gap-4">
        <Button text="primary" btnClass="btn-primary block-btn" type="submit" />
        <Button
          icon="heroicons-outline:newspaper"
          text="Left Icon"
          btnClass="btn-secondary block-btn"
        />
        <Button
          icon="heroicons-outline:newspaper"
          text="Right Icon"
          btnClass=" btn-success block-btn"
          iconPosition="right"
        />
      </div>
    </Card>
    <Card title="Router Link">
      <div class="btn-group-example">
        <Button text="primary" btnClass="btn-primary" link="/app/home" />
        <Button text="secondary" btnClass=" btn-secondary" link="/app/home" />
        <Button text="success" btnClass=" btn-success" link="/app/home" />
        <Button text="info" btnClass=" btn-info" link="/app/home" />
        <Button text="warning" btnClass=" btn-warning" link="/app/home" />
        <Button text="danger" btnClass=" btn-danger" link="/app/home" />
        <Button text="Dark" btnClass=" btn-dark" link="/app/home" />
        <Button text="Light" btnClass=" btn-light" link="/app/home" />
        <Button
          text="White"
          btnClass=" bg-white text-slate-900"
          link="/app/home"
        />
      </div>
    </Card>
  </div>
</template>
<script>
import Button from "@/components/Button";
import GroupButton from "@/components/Button/GroupButton";
import Card from "@/components/Card";
export default {
  components: {
    Button,
    GroupButton,
    Card,
  },
  data() {
    return {
      prevNext: [
        {
          title: "Back",
          icon: "heroicons-outline:chevron-left",
        },
        {
          title: "Next",
          icon: "heroicons-outline:chevron-right",
          iconPosition: "right",
        },
      ],
    };
  },
};
</script>
<style lang="scss">
.btn-group-example {
  @apply flex items-center flex-wrap justify-start;

  > button,
  > a,
  > div {
    @apply ltr:mr-3 rtl:ml-3 mb-3;
  }
}
</style>
