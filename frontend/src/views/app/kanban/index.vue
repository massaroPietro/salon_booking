<template>
  <div>
    <div class="flex flex-wrap justify-between items-center mb-4">
      <Breadcrumb />
      <div class="flex space-x-4 justify-end items-center rtl:space-x-reverse">
        <Button
          icon="heroicons-outline:plus"
          text="Add Board"
          btnClass="bg-slate-800 dark:hover:bg-opacity-70   h-min text-sm font-medium text-slate-50 hover:ring-2 hover:ring-opacity-80 ring-slate-900  hover:ring-offset-1  dark:hover:ring-0 dark:hover:ring-offset-0"
          iconClass=" text-lg"
          @click="store.openColumn()"
          :isLoading="store.isLoading"
        />
      </div>
    </div>
    <!-- column -->
    <Column />
    <!-- modals -->
    <AddColumn />
  </div>
</template>
<script setup>
import Breadcrumb from "@/components/Breadcrumbs";
import Button from "@/components/Button";
// import Card from "@/components/Card";
import {useKanbanStore} from "@/store/kanban";
import Column from "./column/";
import AddColumn from "./column/AddColumn";

const store = useKanbanStore();
</script>
<style lang=""></style>
