<template>
  <!-- 今天日期 -->
  <div class="bg-whitesmoke me-auto p-7 mb-10"
        style="width:100%;">
    <p class="text-18 text-center fw-bold-7 mb-5">今天日期</p>

    <!-- 顯示今天的日期(唯讀) -->
    <label for="todayReadonly" class="d-flex align-items-center mb-3">
      今天日期
      <input type="text"
             class="form-control w-75 ms-3"
             id="todayReadonly"
             :value="today.format('YYYY-MM-DD HH:mm:ss A')"
             readonly>
    </label>

    <div class="d-flex align-items-center py-5">
      <!-- 增加、減少 radio -->
      <div class="d-flex align-items-center">
        <div class="me-5">
          <input class="form-check-input" type="radio"
                  value="todayAdd" id="todayAdd"
                  name="todayDateOperationMode"
                  v-model="todayDateOperationMode">
          <label class="form-check-label ps-2" for="todayAdd">
            增加
          </label>
        </div>
        <div class="my-2">
          <input class="form-check-input" type="radio"
                  value="todaySubtract" id="todaySubtract"
                  name="todayDateOperationMode"
                  v-model="todayDateOperationMode">
          <label class="form-check-label ps-2" for="todaySubtract">
            減少
          </label>
        </div>
      </div>
      <!-- 增加獲減少的數值設定 -->
      <label for="todayModificationNum" class="d-flex align-items-center me-2">
        <input type="number"
                class="form-control text-center ms-3"
                id="todayModificationNum"
                v-model.number="todayModificationNum"
                style="width:100px;
                       padding: 4.5px 0;">
      </label>
      <!-- 增加或減少的單位設定 -->
      <div class="d-flex align-items-center">
        <label for="targetUnitSetup">
        </label>
        <select class="form-select"
                v-model="todayMdificationUnit" id="targetUnitSetup">
          <option v-for="unit in unitSelectionData" :key="unit"
                  :value="unit.en">{{ unit.cn }}</option>
        </select>
      </div>
    </div>

    <!-- 今天日期 運算過程 -->
    <TodayComputed />
  </div>
</template>

<script setup>
// store
import { storeToRefs } from 'pinia'
import { useTodayStore } from '@/stores/demo3/todayStore.js'

import TodayComputed from '@/components/demo3-items/公式元件/TodayComputed.vue'

// store
const {
  today,
  todayDateOperationMode,
  todayModificationNum,
  todayMdificationUnit,
  unitSelectionData
} = storeToRefs(useTodayStore())

</script>

<style lang='scss' scope></style>
