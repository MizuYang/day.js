import { reactive, toRefs } from 'vue'
import { defineStore } from 'pinia'
import dayjs from 'dayjs'

export const useSetupDateStore = defineStore('setupDateStore', () => {
  // data
  const data = reactive({
    startDate: '2023-11-20',
    endDate: '2023-11-25'
  })
  const { startDate, endDate } = toRefs(data)
  const rules = [
    'YYYY-MM-DD HH:mm:ss', 'YYYY-MM-DD HH:mm', 'YYYY-MM-DD',
    'YYYY/MM/DD HH:mm:ss', 'YYYY/MM/DD HH:mm', 'YYYY/MM/DD',
    'YYYY.MM.DD HH:mm:ss', 'YYYY.MM.DD HH:mm', 'YYYY.MM.DD'
  ]

  console.log('startDate', startDate.value)
  console.log('endDate', endDate.value)

  function updateDate (e, keyName) {
    const isValid = dayjs(e.target.value, rules, true).isValid()
    if (!isValid) return

    data[keyName] = e.target.value
  }

  return {
    ...toRefs(data),
    updateDate
  }
})
