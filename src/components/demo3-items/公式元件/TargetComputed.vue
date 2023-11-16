<template>
  <!-- 今天日期 運算過程 -->
  <div class="d-flex align-items-center">
    <!-- 顯示加減運算過程, 例：10:00 - 5分鐘 = 09:55 -->
    <div class="d-flex align-items-center">
      <span class="text-gray border-bottom border-dark px-3">{{ targetDate.format('YYYY-MM-DD HH:mm:ss A') }}</span>

      <!-- "+" 或 "-" 符號 -->
      <span class="text-20 fw-bold-9 mx-5"
            :class="isTargetAddMode?'text-success':'text-danger'"
            :style="!isTargetAddMode&&'padding:0 2.25px;'">
        {{ isTargetAddMode?'+':'-' }}
      </span>

      <!-- 數值、單位 -->
      <span class="text-gray border-bottom border-dark px-3">
        {{ targetModificationNum }}
        {{ targetUnitCn }}
      </span>

      <span class="text-gray mx-5">=</span>

      <!-- 計算結果 -->
      <span class="text-gray border-bottom border-dark px-3">
        {{ targetResult }}
      </span>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
// store
import { useTargetStore } from '@/stores/demo3/targetStore.js'
// composable
import { useDemo3Target } from '@/composables/useDemo3Target.js'

// store
const {
  targetDate,
  targetModificationNum,
  isTargetAddMode,
  targetUnitCn,
  targetResult
} = storeToRefs(useTargetStore())

// composable
useDemo3Target()
</script>

<style lang='scss' scope></style>
