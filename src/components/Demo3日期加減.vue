<template>
  <section class="bg-gainsboro mb-3 p-10">
    <h2 class="text-20 mb-3">3. 日期加減</h2>
    <div>
      <div class="bg-whitesmoke mb-3 p-3">
        <!-- 今天日期 運算過程 -->
        <TodayComputed />

        <!-- 指定日期 運算過程 -->
        <TargetComputed />
      </div>

      <div class="d-flex align-items-center">
        <!-- 今天日期 -->
        <Today />

        <!-- 指定日期 -->
        <Target />
      </div>
    </div>
  </section>
</template>

<script setup>
import Today from '@/components/demo3-items/Today.vue'
import TodayComputed from '@/components/demo3-items/公式元件/TodayComputed.vue'
import Target from '@/components/demo3-items/Target.vue'
import TargetComputed from '@/components/demo3-items/公式元件/TargetComputed.vue'

</script>

<style lang='scss' scope></style>
