<template>
  <!-- 今天日期 運算過程 -->
  <div class="d-flex align-items-center">
    今天日期： {{ today.format('YYYY-MM-DD HH:mm:ss A') }} <span class="text-gray ms-10">=></span>

    <!-- 顯示加減運算過程, 例：10:00 - 5分鐘 = 09:55 -->
    <div class="d-flex align-items-center ms-10">
      <span class="text-gray border-bottom border-dark px-3">{{ today.format('YYYY-MM-DD HH:mm:ss A') }}</span>

      <!-- "+" 或 "-" 符號 -->
      <span class="text-20 fw-bold-9 mx-5"
            :class="isTodayAddMode?'text-success':'text-danger'"
            :style="!isTodayAddMode&&'padding:0 2.25px;'">
        {{ isTodayAddMode?'+':'-' }}
      </span>

      <!-- 數值、單位 -->
      <span class="text-gray border-bottom border-dark px-3">
        {{ todayModificationNum }}
        {{ todayUnitCn }}
      </span>

      <span class="text-gray mx-5">=</span>

      <!-- 計算結果 -->
      <span class="text-gray border-bottom border-dark px-3">
        {{ todayResult }}
      </span>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
// store
import { useTodayStore } from '@/stores/demo3/todayStore.js'
// composable
import { useDemo3Today } from '@/composables/useDemo3Today.js'

// store
const {
  today,
  todayModificationNum,
  isTodayAddMode,
  todayUnitCn,
  todayResult
} = storeToRefs(useTodayStore())

// composable
useDemo3Today()
</script>

<style lang='scss' scope></style>
