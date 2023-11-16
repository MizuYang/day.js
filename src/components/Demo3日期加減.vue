<template>
  <section class="bg-gainsboro mb-3 p-10">
    <h2 class="text-20 mb-3">3. 日期加減</h2>
    <div>
      <div class="bg-whitesmoke mb-3 p-3">
        <!-- 今天日期 運算過程 -->
        <TodayComputed />

      </div>

      <div class="d-flex align-items-center">
        <!-- 今天日期 -->
        <Today />
      </div>
    </div>
  </section>
</template>

<script setup>
import Today from '@/components/demo3-items/Today.vue'
import TodayComputed from '@/components/demo3-items/公式元件/TodayComputed.vue'

</script>

<style lang='scss' scope></style>
