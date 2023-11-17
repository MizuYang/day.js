import { defineStore } from 'pinia'
import dayjs from 'dayjs'

export const useDayjsStore = defineStore('dayjsStore', () => {
  const rules = [
    'YYYY-MM-DD HH:mm:ss', 'YYYY-MM-DD HH:mm', 'YYYY-MM-DD',
    'YYYY/MM/DD HH:mm:ss', 'YYYY/MM/DD HH:mm', 'YYYY/MM/DD',
    'YYYY.MM.DD HH:mm:ss', 'YYYY.MM.DD HH:mm', 'YYYY.MM.DD'
  ]

  function checkIsValid (date) {
    return dayjs(date, rules, true).isValid()
  }
  return {
    checkIsValid
  }
})
