<template>
  <!-- 今天日期 -->
  <div class="bg-whitesmoke me-auto p-3"
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

    <!-- 增加、減少 radio -->
    <div class="d-flex align-items-center mb-3">
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
    <label for="todayModificationNum" class="d-flex align-items-center">
      <p class="me-1">
        <span :class="isTodayAddMode?'text-success':'text-danger'">
          {{ isTodayAddMode?'增加':'減少' }}
        </span>
        的數值
      </p>
      <input type="number"
              class="form-control ms-3"
              id="todayModificationNum"
              v-model.number="todayModificationNum"
              style="width:50%;">
    </label>

    <!-- 增加或減少的單位設定 -->
    <div class="d-flex align-items-center my-3">
      <label for="targetUnitSetup" class="me-5">
      <p>
        <span :class="isTodayAddMode?'text-success':'text-danger'">
          {{ isTodayAddMode?'增加':'減少' }}
        </span>
          的單位
      </p>
      </label>
      <select class="form-select w-50"
              v-model="todayMdificationUnit" id="targetUnitSetup">
        <option v-for="unit in unitSelectionData" :key="unit"
                :value="unit.en">{{ unit.cn }}</option>
      </select>
    </div>
  </div>
</template>

<script setup>
// store
import { storeToRefs } from 'pinia'
import { useTodayStore } from '@/stores/demo3/todayStore.js'

// store
const {
  today,
  todayDateOperationMode,
  todayModificationNum,
  isTodayAddMode,
  todayMdificationUnit,
  unitSelectionData
} = storeToRefs(useTodayStore())

</script>

<style lang='scss' scope></style>
