<template>
  <div>
    <table
      class="w-full border-collapse table-fixed dark:border-slate-700 dark:border"
    >
      <tr>
        <th colspan="3"><span>ITEM</span></th>
        <th><span>QTY</span></th>
        <th><span>PRICE</span></th>
        <th><span>TOTAL</span></th>
      </tr>

      <tr
        v-show="rows.length"
        v-for="(data, index) in rows"
        :key="index"
        class="border-b border-slate-100 dark:border-slate-700"
      >
        <td colspan="3">
          {{ data.item }}
        </td>
        <td>
          {{ data.qty }}
        </td>
        <td>
          {{ data.price }}
        </td>
        <td>
          {{ data.total }}
        </td>
      </tr>
    </table>
    <div class="md:flex px-6 py-6 items-center">
      <div class="flex-1 text-slate-500 dark:text-slate-300 text-sm">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit <br />
        officia consequat duis enim velit mollit.
      </div>
      <div class="flex-none min-w-[270px] space-y-3">
        <div class="flex justify-between">
          <span
            class="font-medium text-slate-600 text-xs dark:text-slate-300 uppercase"
            >subtotal:</span
          >
          <span class="text-slate-900 dark:text-slate-300">$3601.50</span>
        </div>
        <div class="flex justify-between">
          <span
            class="font-medium text-slate-600 text-xs dark:text-slate-300 uppercase"
            >vat (3.5%):</span
          >
          <span class="text-slate-900 dark:text-slate-300">$20.50</span>
        </div>
        <div class="flex justify-between">
          <span
            class="font-medium text-slate-600 text-xs dark:text-slate-300 uppercase"
            >Invoice total:</span
          >
          <span class="text-slate-900 dark:text-slate-300 font-bold"
            >$3622.00</span
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const rows = ref([
  {
    item: "Headphone",
    qty: 2,
    price: "$600.25",
    total: "$1200.50",
  },
  {
    item: "Headphone",
    qty: 2,
    price: "$600.25",
    total: "$1200.50",
  },
  {
    item: "Headphone",
    qty: 2,
    price: "$600.25",
    total: "$1200.50",
  },
  {
    item: "Headphone",
    qty: 2,
    price: "$600.25",
    total: "$1200.50",
  },
]);
</script>
<style lang="scss" scoped>
th {
  @apply bg-slate-50 dark:bg-slate-700 dark:text-slate-300 text-xs  font-medium leading-4 uppercase text-slate-600 ltr:text-left ltr:last:text-right rtl:text-right rtl:last:text-left;
  > span {
    @apply block px-6 py-5 font-semibold;
  }
}

td {
  @apply text-slate-900 dark:text-slate-300 text-sm  font-normal ltr:text-left ltr:last:text-right rtl:text-right rtl:last:text-left px-6 py-4;
}
</style>
