<template>
  <div class="space-y-5">
    <InputGroup type="text">
      <template v-slot:prepend>
        <Dropdown classMenuItems="left-0  w-[220px] top-[110%] ">
          <Button
            text="Action"
            btnClass="btn-dark"
            icon="heroicons-outline:chevron-right"
            iconPosition="right"
            div
            iconClass="text-lg"
          />
        </Dropdown>
      </template>
    </InputGroup>
    <InputGroup type="text">
      <template v-slot:prepend>
        <Dropdown classMenuItems="left-0  w-[220px] top-[110%] ">
          <button class="btn btn-outline-dark btn-sm">
            <span class="flex justify-between items-center">
              <span class="text-lg flex-1 mr-2"
                ><Icon icon="heroicons-outline:pencil"
              /></span>
              <span class="text-base inline-block flex-none"
                ><Icon icon="heroicons-outline:chevron-right"
              /></span>
            </span>
          </button>
        </Dropdown>
      </template>
      <template v-slot:append>
        <Dropdown classMenuItems="left-0  w-[220px] top-[110%] ">
          <Button
            text="Action"
            btnClass="btn-outline-dark btn-sm"
            icon="heroicons-outline:chevron-right"
            iconPosition="right"
            div
            iconClass="text-lg"
          />
        </Dropdown>
      </template>
    </InputGroup>
  </div>
</template>
<script>
import Button from "@/components/Button";
import Dropdown from "@/components/Dropdown";
import Icon from "@/components/Icon";
import InputGroup from "@/components/InputGroup";

export default {
  components: {
    InputGroup,
    Dropdown,
    Button,
    Icon,
  },
};
</script>
<style lang=""></style>
