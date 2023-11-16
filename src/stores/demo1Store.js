import { ref } from 'vue'
import { defineStore } from 'pinia'
import dayjs from 'dayjs'

export const useDemo1Store = defineStore('demo1Store', () => {
  // data
  const weekdays = ref('')
  const weekdaysShort = ref('')
  const weekdaysMin = ref('')
  const monthsShort = ref('')
  const months = ref('')

  function 列出該語系的月份和週 () {
    if (!dayjs.weekdays) return
    if (!dayjs.weekdaysShort) return
    if (!dayjs.weekdaysMin) return
    if (!dayjs.monthsShort) return
    if (!dayjs.months) return

    weekdays.value = dayjs.weekdays()
    // console.log(dayjs.weekdays())
    // ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']

    weekdaysShort.value = dayjs.weekdaysShort()
    // console.log(dayjs.weekdaysShort())
    // ['周日', '周一', '周二', '周三', '周四', '周五', '周六']

    weekdaysMin.value = dayjs.weekdaysMin()
    // console.log(dayjs.weekdaysMin())
    // ['日', '一', '二', '三', '四', '五', '六']

    monthsShort.value = dayjs.monthsShort()
    // console.log(dayjs.monthsShort())
    // ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']

    months.value = dayjs.months()
    // console.log(dayjs.months())
    // ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
  }

  return {
    weekdays,
    weekdaysShort,
    weekdaysMin,
    monthsShort,
    months,
    列出該語系的月份和週
  }
})
