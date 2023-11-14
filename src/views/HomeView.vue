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
    </main>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import 'dayjs/locale/ja'

// data
const now = dayjs()
const lang = ref('zh-cn')
console.log('now', now)

// watchEffect
// 設定語系
watchEffect(() => {
  // dayjs().locale(lang.value).format() // 局部修改语言配置
  dayjs.locale(lang.value)
  console.log('當前的語系為：', dayjs.locale())
})
</script>

<style lang='scss' scope></style>
