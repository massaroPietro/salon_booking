<template>
  <div class="space-y-5">
    <Card title="Example One">
      <CardSkeleton :count="3" />
    </Card>
    <Card title="Example Two">
      <TodoSkeleton :count="3" />
    </Card>
    <Card title="Example Three">
      <TableSkeleton :count="3" />
    </Card>
  </div>
</template>
<script setup>
import Card from '@/components/Card';
import CardSkeleton from '@/components/Skeleton/Project-grid.vue';
import TodoSkeleton from '@/components/Skeleton/Todo.vue';
import TableSkeleton from '@/components/Skeleton/Table.vue';
</script>
<style lang=""></style>
