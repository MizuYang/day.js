import { ref, reactive, toRefs } from 'vue'
import { defineStore } from 'pinia'
import dayjs from 'dayjs'

import isBetween from 'dayjs/plugin/isBetween'
dayjs.extend(isBetween)

export const useIsBetweenStore = defineStore('isBetweenStore', () => {
  // data
  const data = reactive({
    startDate: '2023-11-20 00:00',
    centerDate: '2023-11-15 00:00',
    endDate: '2023-11-25 15:00'
  })
  const isBetween = ref(false)
  const { startDate, endDate, centerDate } = toRefs(data)
  const rules = [
    'YYYY-MM-DD HH:mm:ss', 'YYYY-MM-DD HH:mm', 'YYYY-MM-DD',
    'YYYY/MM/DD HH:mm:ss', 'YYYY/MM/DD HH:mm', 'YYYY/MM/DD',
    'YYYY.MM.DD HH:mm:ss', 'YYYY.MM.DD HH:mm', 'YYYY.MM.DD'
  ]

  function updateDate (e, keyName) {
    const isValid = dayjs(e.target.value, rules, true).isValid()
    if (!isValid) return

    data[keyName] = e.target.value
    checkBetween()
  }
  function checkBetween () {
    isBetween.value = dayjs(centerDate.value).isBetween(startDate.value, dayjs(endDate.value))
  }

  return {
    ...toRefs(data),
    isBetween,
    updateDate
  }
})
