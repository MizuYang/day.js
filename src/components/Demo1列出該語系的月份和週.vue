<template>
  <section class="bg-gainsboro mb-3 p-10">
    <h2 class="text-20 mb-3">列出該語系的月份、週</h2>
    <div class="bg-whitesmoke mb-3 p-3">
      <h3 class="text-18 fw-bold-7 mb-1">dayjs.weekdays</h3>
      <p class="p-2">
        {{ weekdays }}
      </p>
    </div>
    <div class="bg-whitesmoke mb-3 p-3">
      <h3 class="text-18 fw-bold-7 mb-1">dayjs.weekdaysShort</h3>
      <p class="p-2">
        {{ weekdaysShort }}
      </p>
    </div>
    <div class="bg-whitesmoke mb-3 p-3">
      <h3 class="text-18 fw-bold-7 mb-1">dayjs.weekdaysMin</h3>
      <p class="p-2">
        {{ weekdaysMin }}
      </p>
    </div>
    <div class="bg-whitesmoke mb-3 p-3">
      <h3 class="text-18 fw-bold-7 mb-1">dayjs.monthsShort</h3>
      <p class="p-2">
        {{ monthsShort }}
      </p>
    </div>
    <div class="bg-whitesmoke mb-3 p-3">
      <h3 class="text-18 fw-bold-7 mb-1">dayjs.months</h3>
      <p class="p-2">
        {{ months }}
      </p>
    </div>
  </section>
</template>

<script setup>
import { storeToRefs } from 'pinia'

// store
import { useDemo1Store } from '@/stores/demo1Store.js'

// store
const {
  weekdays,
  weekdaysShort,
  weekdaysMin,
  monthsShort,
  months
} = storeToRefs(useDemo1Store())

</script>

<style lang='scss' scope></style>
