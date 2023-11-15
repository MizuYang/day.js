import { ref, onMounted } from 'vue'
import dayjs from 'dayjs'

// 匯入 dayjs 的 plugin
import minMax from 'dayjs/plugin/minMax'

export function useDemo2 () {
  // data
  const date1 = ref('2023-01-01')
  const date2 = ref('2023/03/15')
  const date3 = ref('2023.05.20')
  const minDate = ref('')
  const maxDate = ref('')

  // dayjs 的 plugin 註冊
  dayjs.extend(minMax)

  onMounted(() => {
    比較日期的大小()
  })

  function 比較日期的大小 () {
    const d1 = dayjs(date1.value)
    const d2 = dayjs(date2.value)
    const d3 = dayjs(date3.value)

    const newMinDate = dayjs.min(d1, d2, d3)
    const newMaxDate = dayjs.max(d1, d2, d3)

    // 有值才賦予, 避免NaN
    if (!isNaN(newMinDate.$D)) maxDate.value = newMaxDate.format('YYYY-MM-DD')
    if (!isNaN(newMaxDate.$D)) minDate.value = newMinDate.format('YYYY-MM-DD')

    // console.log(minDate.value) // 顯示最小日期
    // console.log(maxDate.value) // 顯示最大日期
  }

  return {
    date1,
    date2,
    date3,
    minDate,
    maxDate,
    比較日期的大小
  }
}
