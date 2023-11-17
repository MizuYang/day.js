<template>
  <div class="d-flex align-items-center">
    <!-- 小時 -->
    <label for="demo7Hour" class="d-flex align-items-center">
      <input type="number"
              class="form-control text-center mx-2"
              id="demo7Hour"
              placeholder="請輸入小時"
              v-model="data.hours"
              style="width:100px;">
      小時
    </label>
    <!-- 分鐘 -->
    <label for="demo7Minutes" class="d-flex align-items-center">
      <input type="number"
              class="form-control text-center mx-2"
              id="demo7Minutes"
              placeholder="請輸入分鐘"
              v-model="data.minutes"
              style="width:100px;">
      分鐘
    </label>
    <!-- 秒鐘 -->
    <label for="demo7Hour" class="d-flex align-items-center">
      <input type="number"
              class="form-control text-center mx-2"
              id="demo7Hour"
              placeholder="請輸入秒鐘"
              v-model="data.seconds"
              style="width:100px;">
      秒鐘
    </label>
    <!-- 毫秒 -->
    <label for="demo7Hour" class="d-flex align-items-center">
      <input type="number"
              class="form-control text-center mx-2"
              id="demo7Hour"
              placeholder="請輸入毫秒"
              v-model="data.milliseconds"
              style="width:100px;">
      毫秒
    </label>
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
  hours: 15,
  minutes: 10,
  seconds: 3,
  milliseconds: 123
})
const result = ref('')

// watchEffect
watchEffect(() => {
  result.value = dayjs(data).format('YYYY-MM-DD HH:mm:ss A')
})
</script>

<style lang='scss' scope></style>
