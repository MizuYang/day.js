<template>
  <section class="bg-gainsboro mb-3 p-10">
    <h2 class="text-20 mb-3">2. 比較日期的大小</h2>
    <div>
      <div class="bg-whitesmoke p-3">
        <p>最大的日期為： {{ maxDate }}</p>
        <p>最小的日期為： {{ minDate }}</p>
      </div>

      <div class="d-flex align-items-center mt-3">
        <label for="demo2Date1">
          (一) 請輸入日期
          <input type="text" id="demo2Date1"
                 class="form-control"
                 placeholder="日期格式 YYYY/MM/DD"
                 v-model="date1"
                 @input="比較日期的大小">
        </label>
        <label for="demo2Date2" class="mx-5">
          (二) 請輸入日期
          <input type="text" id="demo2Date2"
                 class="form-control"
                 placeholder="日期格式 YYYY/MM/DD"
                 v-model="date2"
                 @input="比較日期的大小">
        </label>
        <label for="demo2Date3">
          (三) 請輸入日期
          <input type="text" id="demo2Date3"
                 class="form-control"
                 placeholder="日期格式 YYYY/MM/DD"
                 v-model="date3"
                 @input="比較日期的大小">
        </label>
      </div>
    </div>
  </section>
</template>

<script setup>
// composable
import { useDemo2 } from '@/composables/useDemo2.js'

const { date1, date2, date3, minDate, maxDate, 比較日期的大小 } = useDemo2()
</script>

<style lang='scss' scope></style>
