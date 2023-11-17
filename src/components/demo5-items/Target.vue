<template>
  <div class="w-100 bg-whitesmoke me-5 p-10">
    <h3 class="text-18 text-center fw-bold-7 mb-5">A日期到B日期相距多少時間</h3>
    <label for="aDate" class="d-flex align-items-center">
      A日期
      <input type="text"
             class="form-control w-75 ms-3 my-3"
             id="aDate"
             :value="aDate"
             @input="updateDemo($event,'aDate')">
    </label>
    <label for="bDate" class="d-flex align-items-center">
      B日期
      <input type="text"
             class="form-control w-75 ms-3 my-3"
             id="bDate"
             :value="bDate"
             @input="updateDemo($event,'bDate')">
    </label>

    <p class="d-flex align-items-center">
      <code>dayjs(a).from(b)</code>
      <span class="ms-5">{{ from }}</span>
    </p>
    <p class="d-flex align-items-center">
      <code class="pe-6">dayjs(a).to(b)</code>
      <span class="ms-5">{{ to }}</span>
    </p>
  </div>
</template>

<script setup>
import { useTarget } from '@/composables/demo5/useTarget.js'

const {
  aDate,
  bDate,
  from,
  to,
  updateDemo
} = useTarget()
</script>

<style lang='scss' scope></style>
