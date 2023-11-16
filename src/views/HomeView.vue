<template>
  <div class="container py-10">
    <header class="bg-gainsboro mb-3 p-10">
      <h2 class="text-20 my-5">設定語系</h2>
      <div class="d-flex align-items-center bg-whitesmoke p-3">
        <div>
          <input class="form-check-input" type="radio"
                 value="zh-cn" id="zh-cn"
                 name="i18n"
                 v-model="lang">
          <label class="form-check-label ps-2" for="zh-cn">
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

      <!-- Demo4驗證日期格式 -->
      <Demo4 />
    </main>
  </div>
</template>

<script setup>
import dayjs from 'dayjs'

import Demo1 from '@/components/Demo1列出該語系的月份和週.vue'
import Demo2 from '@/components/Demo2比較日期的大小.vue'
import Demo3 from '@/components/Demo3日期加減.vue'
import Demo4 from '@/components/Demo4驗證日期格式.vue'

// composables
import { useLang } from '@/composables/useLang.js'

// composables
const { lang } = useLang()

// data
const now = dayjs()

console.log('dayjs()', now)

</script>

<style lang='scss' scope></style>
