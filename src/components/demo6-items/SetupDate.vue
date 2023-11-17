<template>
  <div class="text-center bg-whitesmoke p-10">
    <h3 class="text-18 fw-bold-7">設定日期區間</h3>

    <div class="d-flex justify-content-center aligm-items-center mt-5">
      <div class="d-flex flex-column">
        <span class="text-18 text-center">開始日期</span>
        <input type="text"
               class="form-control text-center"
               :value="startDate"
               @input="updateDate($event, 'startDate')"
               style="width:200px;">
      </div>
      <span class="mt-auto mx-3"
            style="font-size:30px;">~</span>
      <div class="d-flex flex-column">
        <span class="text-18 text-center">結束日期</span>
        <input type="text"
               class="form-control text-center"
               :value="endDate"
               @input="updateDate($event, 'endDate')"
               style="width:200px;">
      </div>
    </div>
  </div>
</template>

<script setup>
import { useSetupDateStore } from '@/stores/demo6/setupDateStore.js'

const { startDate, endDate, updateDate } = useSetupDateStore()
</script>

<style lang='scss' scope></style>
