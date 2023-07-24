<template>
  <div class="grid xl:grid-cols-2 grid-cols-1 gap-5">
    <Card title="Basic Pagination">
      <Pagination
        :current="current"
        :total="total"
        :per-page="perPage"
        @page-changed="current = $event"
      />
    </Card>
    <Card title="Pagination With Background">
      <Pagination
        wrapperClass="bg-slate-100 dark:bg-slate-500  w-fit py-2 px-3 rounded mx-auto"
        :current="current"
        :total="total"
        :per-page="perPage"
        @page-changed="current = $event"
      />
    </Card>

    <div class="xl:col-span-2">
      <Card title="Pagination With Text">
        <Pagination
          wrapperClass=" flex justify-center "
          :current="current"
          :total="total"
          enableText
          :per-page="perPage"
          @page-changed="current = $event"
        />
      </Card>
    </div>
    <div class="xl:col-span-2">
      <Card title="Advanced Pagination">
        <Pagination
          :current="current"
          :total="total"
          :per-page="perPage"
          enableSearch
          enableSelect
          :options="options"
          @page-changed="current = $event"
        />
      </Card>
    </div>
    <div class="xl:col-span-2">
      <Card title="Advanced Pagination With Page Selector">
        <Pagination
          :current="current"
          :total="total"
          :per-page="perPage"
          enableSearch
          enableInput
          @page-changed="current = $event"
        />
      </Card>
    </div>
  </div>
</template>
<script>
import Card from '@/components/Card';
import Pagination from '@/components/Pagination';
export default {
  components: {
    Card,
    Pagination,
  },
  data() {
    return {
      current: 1,
      perPage: 6,
      total: 40,
      options: [
        {
          value: 1,
          label: '1',
        },
        {
          value: 3,
          label: '3',
        },
        {
          value: 5,
          label: '5',
        },
        {
          value: 7,
          label: '7',
        },
      ],
    };
  },
};
</script>
<style lang=""></style>
