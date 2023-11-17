<template>
  <section class="bg-gainsboro mb-3 p-10">
    <h2 class="text-20 mb-3">5. 驗證日期格式 (非嚴格校驗)</h2>

    <div class="d-flex align-items-center">
      <!-- 某日期到今天相距多少時間 -->
      <Today />

      <!-- A日期到B日期相距多少時間 -->
      <Target />
    </div>
  </section>
</template>

<script setup>
import Today from '@/components/demo5-items/Today.vue'
import Target from '@/components/demo5-items/Target.vue'

</script>

<style lang='scss' scope></style>
