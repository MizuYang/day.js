<template>
  <div class="d-flex align-items-center mb-3">
    <!-- 年 -->
    <label for="demo7Hour" class="d-flex align-items-center">
      <input type="number"
              class="form-control text-center mx-2"
              id="demo7Hour"
              placeholder="請輸入小時"
              v-model="data.years"
              style="width:100px;">
      <span class="mx-3">年</span>
    </label>

    <!-- 月 -->
    <label for="demo7Hour" class="d-flex align-items-center">
      <input type="number"
              class="form-control text-center mx-2"
              id="demo7Hour"
              placeholder="請輸入小時"
              v-model="data.months"
              style="width:100px;">
      <span class="mx-3">月</span>
    </label>

    <!-- 日 -->
    <label for="demo7Hour" class="d-flex align-items-center">
      <input type="number"
              class="form-control text-center mx-2"
              id="demo7Hour"
              placeholder="請輸入小時"
              v-model="data.date"
              style="width:100px;">
      日
    </label>

    <!-- 最終轉換的日期、時間 -->
    <span class="mx-5"
          style="font-size:20px;">=</span>
    <!-- 轉換結果 -->
    <p class="bg-whitesmoke fw-bold-7 py-2 px-3">{{ result }}</p>

  </div>
</template>

<script setup>
import { ref, reactive, watchEffect } from 'vue'
import dayjs from 'dayjs'

// 匯入 dayjs 的 plugin
import objectSupport from 'dayjs/plugin/objectSupport'

// dayjs 的 plugin 註冊
dayjs.extend(objectSupport)

// data
const data = reactive({
  years: 2010,
  months: 3,
  date: 5
})
const result = ref('')

// watchEffect
watchEffect(() => {
  result.value = dayjs(data).format('YYYY-MM-DD')
})
</script>

<style lang='scss' scope></style>
