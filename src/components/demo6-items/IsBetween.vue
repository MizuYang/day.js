<template>
  <div class="text-center bg-whitesmoke p-10">
    <h3 class="text-18 fw-bold-7">
      是否在兩個日期之間
      (
        <span class="text-20"
              :class="isBetween?'text-success':'text-danger'">
          {{ isBetween?'O':'X' }}
        </span>
       )
    </h3>

    <p class="text-18 text-center mt-5">
      請修改中間日期，使其在開始日期與結束日期之間
    </p>

    <div class="d-flex justify-content-center aligm-items-center mt-5">
      <div class="d-flex flex-column bg-gray text-light">
        <span class="text-18 text-center">開始日期</span>
        <input type="text"
               class="form-control text-center"
               :value="startDate"
               @input="updateDate($event, 'startDate')"
               style="width:200px;">
      </div>
      <div class="d-flex flex-column mx-5"
           :class="isBetween?'bg-success':'bg-danger'">
        <span class="text-18 text-light text-center">中間日期</span>
        <input type="text"
               class="form-control text-center"
               :value="centerDate"
               @input="updateDate($event, 'centerDate')"
               style="width:200px;">
      </div>
      <div class="d-flex flex-column bg-gray text-light">
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
import { storeToRefs } from 'pinia'
import { useIsBetweenStore } from '@/stores/demo6/isBetweenStore.js'

const { startDate, centerDate, endDate, isBetween } = storeToRefs(useIsBetweenStore())
const { updateDate } = useIsBetweenStore()
</script>

<style lang='scss' scope></style>
