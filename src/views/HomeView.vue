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
      <section class="bg-gainsboro mb-3 p-10">
        <h2 class="text-20 mb-3">列出該語系的月份、週</h2>
        <div class="bg-whitesmoke mb-3 p-3">
          <h3 class="text-18 fw-bold-7 mb-1">dayjs.weekdays</h3>
          <p class="p-2">
            {{ weekdays }}
          </p>
        </div>
        <div class="bg-whitesmoke mb-3 p-3">
          <h3 class="text-18 fw-bold-7 mb-1">dayjs.weekdaysShort</h3>
          <p class="p-2">
            {{ weekdaysShort }}
          </p>
        </div>
        <div class="bg-whitesmoke mb-3 p-3">
          <h3 class="text-18 fw-bold-7 mb-1">dayjs.weekdaysMin</h3>
          <p class="p-2">
            {{ weekdaysMin }}
          </p>
        </div>
        <div class="bg-whitesmoke mb-3 p-3">
          <h3 class="text-18 fw-bold-7 mb-1">dayjs.monthsShort</h3>
          <p class="p-2">
            {{ monthsShort }}
          </p>
        </div>
        <div class="bg-whitesmoke mb-3 p-3">
          <h3 class="text-18 fw-bold-7 mb-1">dayjs.months</h3>
          <p class="p-2">
            {{ months }}
          </p>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import 'dayjs/locale/ja'

import localeData from 'dayjs/plugin/localeData'

// data
const now = dayjs()
const lang = ref('zh-cn')
// 列出該語系的月份、週
const weekdays = ref('')
const weekdaysShort = ref('')
const weekdaysMin = ref('')
const monthsShort = ref('')
const months = ref('')

console.log('now', now)

// watchEffect
// 設定語系
watchEffect(() => {
  // dayjs().locale(lang.value).format() // 局部修改语言配置
  dayjs.locale(lang.value)
  console.log('當前的語系為：', dayjs.locale())

  列出該語系的月份和週()
})

dayjs.extend(localeData)

dayjs().localeData()

列出該語系的月份和週()

function 列出該語系的月份和週 () {
  if (!dayjs.weekdays) return
  if (!dayjs.weekdaysShort) return
  if (!dayjs.weekdaysMin) return
  if (!dayjs.monthsShort) return
  if (!dayjs.months) return

  weekdays.value = dayjs.weekdays()
  console.log(dayjs.weekdays())
  // ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']

  weekdaysShort.value = dayjs.weekdaysShort()
  console.log(dayjs.weekdaysShort())
  // ['周日', '周一', '周二', '周三', '周四', '周五', '周六']

  weekdaysMin.value = dayjs.weekdaysMin()
  console.log(dayjs.weekdaysMin())
  // ['日', '一', '二', '三', '四', '五', '六']

  monthsShort.value = dayjs.monthsShort()
  console.log(dayjs.monthsShort())
  // ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']

  months.value = dayjs.months()
  console.log(dayjs.months())
// ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
}
</script>

<style lang='scss' scope></style>
