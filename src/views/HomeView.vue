<template>
  <div class="container py-10">
    <header class="bg-gainsboro mb-3 p-10">
      <h2 class="text-20 my-5">設定語系</h2>
      <div class="d-flex align-items-center bg-whitesmoke p-3">
        <div>
          <input class="form-check-input" type="radio"
                 value="zh-tw" id="zh-tw"
                 name="i18n"
                 v-model="lang">
          <label class="form-check-label ps-2" for="zh-tw">
            中文
          </label>
        </div>
        <div class="mx-4">
          <input class="form-check-input" type="radio"
                 value="en" id="en"
                 name="i18n"
                 v-model="lang">
          <label class="form-check-label ps-2" for="en">
            英文
          </label>
        </div>
        <div>
          <input class="form-check-input" type="radio"
                 value="ja" id="ja"
                 name="i18n"
                 v-model="lang">
          <label class="form-check-label ps-2" for="ja">
            日文
          </label>
        </div>
      </div>
    </header>

    <main>
      <!-- 列出該語系的月份、週 -->
      <Demo1 />

      <!-- 比較日期的大小 -->
      <Demo2 />

      <!-- 日期加減 -->
      <Demo3 />

      <!-- 驗證日期格式 -->
      <Demo4 />

      <!-- 日期相距時間 -->
      <Demo5 />

      <!--是否在兩個日期之間 -->
      <Demo6 />

      <!-- 輸入時間自動轉換單位 -->
      <Demo7 />
    </main>
  </div>
</template>

<script setup>
import dayjs from 'dayjs'

import Demo1 from '@/components/Demo1列出該語系的月份和週.vue'
import Demo2 from '@/components/Demo2比較日期的大小.vue'
import Demo3 from '@/components/Demo3日期加減.vue'
import Demo4 from '@/components/Demo4驗證日期格式.vue'
import Demo5 from '@/components/Demo5日期相距時間.vue'
import Demo6 from '@/components/Demo6是否在兩個日期之間.vue'
import Demo7 from '@/components/Demo7輸入時間自動轉換單位.vue'

// composables
import { useLang } from '@/composables/useLang.js'

// composables
const { lang } = useLang()

// data
const now = dayjs()

console.log('dayjs()', now)

</script>

<style lang='scss' scope></style>
