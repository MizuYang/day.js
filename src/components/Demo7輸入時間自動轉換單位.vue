<template>
  <section class="bg-gainsboro mb-3 p-10">
    <h2 class="text-20 mb-3">7. 時間自動轉換</h2>

    <!-- 年月日自動轉換 -->
    <YearChange />

    <!-- 時分秒自動轉換 -->
    <TimeChange />

  </section>
</template>

<script setup>
import YearChange from '@/components/demo7-items/年月日自動轉換.vue'
import TimeChange from '@/components/demo7-items/時分秒自動轉換.vue'

</script>

<style lang='scss' scope></style>
