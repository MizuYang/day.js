<template>
  <!-- 指定日期 -->
  <div class="bg-whitesmoke ms-5 p-3"
        style="width:100%;">
    <p class="text-18 text-center fw-bold-7 mb-5">指定日期</p>

    <!-- 設定指定日期 -->
    <label for="setTargetDate" class="d-flex align-items-center mb-3">
      指定日期
      <input type="text"
             class="form-control w-75 ms-3"
             id="setTargetDate"
             placeholder="輸入日期格式 yyyy/mm/dd hh:mm:ss"
             :value="targetDate.format('YYYY-MM-DD HH:mm:ss')"
             @change="updateDate"
             >
    </label>

    <!-- 增加、減少 radio -->
    <div class="d-flex align-items-center mb-3">
      <div class="me-5">
        <input class="form-check-input" type="radio"
                value="targetAdd" id="targetAdd"
                name="targetDateOperationMode"
                v-model="targetDateOperationMode">
        <label class="form-check-label ps-2" for="targetAdd">
          增加
        </label>
      </div>
      <div class="my-2">
        <input class="form-check-input" type="radio"
                value="targetSubtract" id="targetSubtract"
                name="targetDateOperationMode"
                v-model="targetDateOperationMode">
        <label class="form-check-label ps-2" for="targetSubtract">
          減少
        </label>
      </div>
    </div>

    <!-- 增加獲減少的數值設定 -->
    <label for="targetModificationNum" class="d-flex align-items-center">
      <p class="me-1">
        <span :class="isTargetAddMode?'text-success':'text-danger'">
          {{ isTargetAddMode?'增加':'減少' }}
        </span>
        的數值
      </p>
      <input type="number"
              class="form-control ms-3"
              id="targetModificationNum"
              v-model.number="targetModificationNum"
              style="width:50%;">
    </label>

    <!-- 增加或減少的單位設定 -->
    <div class="d-flex align-items-center my-3">
      <label for="targetUnitSetup" class="me-5">
        <p>
          <span :class="isTargetAddMode?'text-success':'text-danger'">
            {{ isTargetAddMode?'增加':'減少' }}
          </span>
            的單位
        </p>
      </label>
      <select class="form-select w-50"
              v-model="targetMdificationUnit" id="targetUnitSetup">
        <option v-for="unit in unitSelectionData" :key="unit"
                :value="unit.en">{{ unit.cn }}</option>
      </select>
    </div>
  </div>
</template>

<script setup>
// store
import { storeToRefs } from 'pinia'
import { useTargetStore } from '@/stores/demo3/targetStore.js'

// store
const {
  targetDate,
  targetDateOperationMode,
  targetModificationNum,
  isTargetAddMode,
  targetMdificationUnit,
  unitSelectionData
} = storeToRefs(useTargetStore())
const { updateDate } = useTargetStore()
</script>

<style lang='scss' scope></style>
