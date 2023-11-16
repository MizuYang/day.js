<template>
  <section class="bg-gainsboro mb-3 p-10 pb-5">
    <h2 class="text-20 mb-3">3. 日期加減</h2>
      <div class="d-flex align-items-center">
        <!-- 今天日期 -->
        <Today />

        <!-- 指定日期 -->
        <Target />
      </div>
  </section>
</template>

<script setup>
import Today from '@/components/demo3-items/Today.vue'
import Target from '@/components/demo3-items/Target.vue'

</script>

<style lang='scss' scope></style>
