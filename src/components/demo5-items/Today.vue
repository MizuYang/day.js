<template>
  <div class="w-100 bg-whitesmoke me-5 px-10 pt-12"
       style="padding-bottom:53px;">
    <h3 class="text-18 text-center fw-bold-7 mb-5">某日期到今天相距多少時間</h3>
    今天日期: {{ today.format('YYYY-MM-DD HH:mm:ss') }}

    <input type="text"
           class="form-control w-75 my-3"
           :value="inputDate"
           @input="updateDemo">

    <p class="d-flex align-items-center">
      <code>dayjs(自訂日期).fromNow()</code>
      <span class="ms-5">{{ fromNow }}</span>
    </p>
    <p class="d-flex align-items-center">
      <code class="pe-6">dayjs(自訂日期).toNow()</code>
      <span class="ms-5">{{ toNow }}</span>
    </p>
  </div>
</template>

<script setup>
import { useToday } from '@/composables/demo5/useToday.js'

const {
  today,
  inputDate,
  fromNow,
  toNow,
  updateDemo
} = useToday()
</script>

<style lang='scss' scope></style>
